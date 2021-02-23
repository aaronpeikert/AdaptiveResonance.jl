"""
    opts_DAM()

Implements a Default ARTMAP learner's options.

# Examples
```julia-repl
julia> my_opts = opts_DAM()
```
"""
@with_kw mutable struct opts_DAM <: AbstractARTOpts @deftype Float64
    # Vigilance parameter: [0, 1]
    rho = 0.6; @assert rho >= 0 && rho <= 1
    # Choice parameter: alpha > 0
    alpha = 1e-7; @assert alpha > 0
    # Match tracking parameter
    epsilon = -1e-3; @assert epsilon > -1 && epsilon < 1
    # Learning parameter: (0, 1]
    beta = 1; @assert beta > 0 && beta <= 1
    # Display flag
    display::Bool = true

    max_epochs = 1
end # opts_DAM()

"""
    DAM <: AbstractART

Default ARTMAP struct.
"""
mutable struct DAM <: AbstractART
    opts::opts_DAM
    config::DataConfig
    W::Array{Float64, 2}
    W_old::Array{Float64, 2}
    labels::Array{Int, 1}
    y::Array{Int, 1}
    n_categories::Int
    epoch::Int
end # DAM

"""
    DAM()

Implements a Default ARTMAP learner.

# Examples
```julia-repl
julia> DAM()
DAM
    opts: opts_DAM
    ...
```
"""
function DAM()
    opts = opts_DAM()
    DAM(opts)
end # DAM()

"""
    DAM(opts)

Implements a Default ARTMAP learner with specified options

# Examples
```julia-repl
julia> opts = opts_DAM()
julia> DAM(opts)
DAM
    opts: opts_DAM
    ...
```
"""
function DAM(opts::opts_DAM)
    DAM(opts,                       # opts_DAM
        DataConfig(),               # config
        Array{Float64}(undef, 0,0), # W
        Array{Float64}(undef, 0,0), # W_old
        Array{Int}(undef, 0),       # labels
        Array{Int}(undef, 0),       # y
        0,                          # n_categories
        0                           # epoch
    )
end # DAM(opts::opts_DAM)

"""
    train!(art::DAM, x::Array, y::Array ; preprocessed=false)

Trains a Default ARTMAP learner in a supervised manner.

# Examples
```julia-repl
julia> x, y = load_data()
julia> art = DAM()
DAM
    opts: opts_DAM
    ...
julia> train!(art, x, y)
```
"""
function train!(art::DAM, x::Array, y::Array ; preprocessed=false)
    # Show a message if display is on
    art.opts.display && @info "Training DAM"

    # Data information and setup
    n_samples = get_n_samples(x)

    # Set up the data config if it is not already
    !art.config.setup && data_setup!(art.config, x)

    # If the data isn't preprocessed, then complement code it with the config
    if !preprocessed
        x = complement_code(x, config=art.config)
    end

    # Convenient semantic flag
    # is_supervised = !isempty(y)

    # Initialize the internal categories
    art.y = zeros(Int, n_samples)

    # Initialize the training loop, continue to convergence
    art.epoch = 0
    while true
        art.epoch += 1
        iter = ProgressBar(1:n_samples)
        for ix in iter
            set_description(iter, string(@sprintf("Ep: %i, ID: %i, Cat: %i", art.epoch, ix, art.n_categories)))
            if !(y[ix] in art.labels)
                # Initialize W and labels
                if isempty(art.W)
                    art.W = Array{Float64}(undef, art.config.dim_comp, 1)
                    art.W_old = Array{Float64}(undef, art.config.dim_comp, 1)
                    art.W[:, ix] = x[:, ix]
                else
                    art.W = [art.W x[:, ix]]
                end
                push!(art.labels, y[ix])
                art.n_categories += 1
                art.y[ix] = y[ix]
            else
                # Baseline vigilance parameter
                rho_baseline = art.opts.rho

                # Compute activation function
                T = zeros(art.n_categories)
                for jx in 1:art.n_categories
                    T[jx] = activation(art, x[:, ix], art.W[:, jx])
                end

                # Sort activation function values in descending order
                index = sortperm(T, rev=true)
                mismatch_flag = true
                for jx in 1:art.n_categories
                    # Compute match function
                    M = art_match(art, x[:, ix], art.W[:, index[jx]])
                    @debug M
                    # Current winner
                    if M >= rho_baseline
                        if y[ix] == art.labels[index[jx]]
                            # Learn
                            @debug "Learning"
                            art.W[:, index[jx]] = learn(art, x[:, ix], art.W[:, index[jx]])
                            art.y[ix] = art.labels[index[jx]]
                            mismatch_flag = false
                            break
                        else
                            # Match tracking
                            @debug "Match tracking"
                            rho_baseline = M + art.opts.epsilon
                        end
                    end
                end
                if mismatch_flag
                    # Create new weight vector
                    @debug "Mismatch"
                    art.W = hcat(art.W, x[:, ix])
                    push!(art.labels, y[ix])
                    art.n_categories += 1
                    art.y[ix] = y[ix]
                end
            end
        end
        if stopping_conditions(art)
            break
        end
        art.W_old = deepcopy(art.W)
    end
end # train!(art::DAM, x::Array, y::Array ; preprocessed=false)

"""
    classify(art::DAM, x::Array ; preprocessed=false)

Categorize data 'x' using a trained Default ARTMAP module 'art'.

# Examples
```julia-repl
julia> x, y = load_data()
julia> x_test, y_test = load_test_data()
julia> art = DAM()
DAM
    opts: opts_DAM
    ...
julia> train!(art, x, y)
julia> classify(art, x_test)
```
"""
function classify(art::DAM, x::Array ; preprocessed=false)
    # Show a message if display is on
    art.opts.display && @info "Testing DAM"

    # Data information and setup
    n_samples = get_n_samples(x)

    # Throw an soft error if classifying before setup
    !art.config.setup && @error "Attempting to classify data before setup"

    # If the data is not preprocessed, then complement code it
    if !preprocessed
        x = complement_code(x, config=art.config)
    end

    # Initialize the output vector and iterate across all data
    y_hat = zeros(Int, n_samples)
    iter = ProgressBar(1:n_samples)
    for ix in iter
        set_description(iter, string(@sprintf("ID: %i, Cat: %i", ix, art.n_categories)))

        # Compute activation function
        T = zeros(art.n_categories)
        for jx in 1:art.n_categories
            T[jx] = activation(art, x[:, ix], art.W[:, jx])
        end

        # Sort activation function values in descending order
        index = sortperm(T, rev=true)
        mismatch_flag = true
        for jx in 1:art.n_categories
            # Compute match function
            M = art_match(art, x[:, ix], art.W[:, index[jx]])
            @debug M
            # Current winner
            if M >= art.opts.rho
                y_hat[ix] = art.labels[index[jx]]
                mismatch_flag = false
                break
            end
        end
        if mismatch_flag
            # Create new weight vector
            @debug "Mismatch"
            y_hat[ix] = -1
        end
    end
    return y_hat
end # classify(art::DAM, x::Array ; preprocessed=false)

"""
    stopping_conditions(art::DAM)

Stopping conditions for Default ARTMAP, checked at the end of every epoch.
"""
function stopping_conditions(art::DAM)
    # Compute the stopping condition, return a bool
    return art.W == art.W_old || art.epoch >= art.opts.max_epochs
end # stopping_conditions(art::DAM)

"""
    activation(art::DAM, x::Array, W::Array)

Default ARTMAP's choice-by-difference activation function.
"""
function activation(art::DAM, x::Array, W::Array)
    # Compute T and return
    return norm(element_min(x, W), 1) +
        (1-art.opts.alpha)*(art.config.dim - norm(W, 1))
end # activation(art::DAM, x::Array, W::Array)

"""
    learn(art::DAM, x::Array, W::Array)

Returns a single updated weight for the Simple Fuzzy ARTMAP module for weight
vector W and sample x.
"""
function learn(art::DAM, x::Array, W::Array)
    # Update W
    return art.opts.beta .* element_min(x, W) .+ W .* (1 - art.opts.beta)
end # learn(art::DAM, x::Array, W::Array)

"""
    art_match(art::DAM, x::Array, W::Array)

Returns the match function for the Default ARTMAP module with weight W and
sample x.
"""
function art_match(art::DAM, x::Array, W::Array)
    # Compute M and return
    return norm(element_min(x, W), 1) / art.config.dim
end # art_match(art::DAM, x::Array, W::Array)