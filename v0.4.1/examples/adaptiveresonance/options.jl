using AdaptiveResonance

# Create a FuzzyART module with default options
my_fuzzyart = FuzzyART()
typeof(my_fuzzyart)

# Check the FuzzyART options
my_fuzzyart.opts

# Create a DDVFA module and check the type of the options
my_ddvfa = DDVFA()
typeof(my_ddvfa.opts)

# Create a separate options struct
my_fuzzyart_opts = opts_FuzzyART()

# Instantiate an ART module by passing our options
my_fuzzyart = FuzzyART(my_fuzzyart_opts)
my_other_fuzzyart = FuzzyART(my_fuzzyart_opts)

# Change some of the default FuzzyART options
my_fuzzyart_opts = opts_FuzzyART(
    rho=0.6,
    gamma_normalization=true
)
my_fuzzyart = FuzzyART(my_fuzzyart_opts)

# Pass these keyword arguments to the module directly
my_fuzzyart = FuzzyART(
    rho=0.6,
    gamma_normalization=true
)

my_fuzzyart = FuzzyART()
my_fuzzyart.opts.rho=0.6

using MLDatasets        # Iris dataset
using MLDataUtils       # Shuffling and splitting
using Printf            # Formatted number printing
using MultivariateStats # Principal component analysis (PCA)
using Plots             # Plotting

Iris.download(i_accept_the_terms_of_use=true)
features, labels = Iris.features(), Iris.labels()

labels = convertlabel(LabelEnc.Indices{Int}, labels)
unique(labels)

(X_train, y_train), (X_test, y_test) = stratifiedobs((features, labels))

# Create two FuzzyARTs with different vigilance values and suppressing logging messages
rho_1 = 0.5
rho_2 = 0.7
my_fuzzyart_1 = FuzzyART(rho=rho_1, display=false)
my_fuzzyart_2 = FuzzyART(rho=rho_2, display=false)

# Train in simple supervised mode by passing the labels as a keyword argument.
y_hat_train_1 = train!(my_fuzzyart_1, X_train, y=y_train)
y_hat_train_2 = train!(my_fuzzyart_2, X_train, y=y_train)

y_hat_1 = AdaptiveResonance.classify(my_fuzzyart_1, X_test, get_bmu=true)
y_hat_2 = AdaptiveResonance.classify(my_fuzzyart_2, X_test, get_bmu=true)

# Check the shape and type of the output labels
println("FuzzyART 1 labels: ",  size(y_hat_1), " ", typeof(y_hat_1))
println("FuzzyART 2 labels: ",  size(y_hat_2), " ", typeof(y_hat_2))

# Calculate the performance on the test data
perf_test_1 = performance(y_hat_1, y_test)
perf_test_2 = performance(y_hat_2, y_test)

# Format each performance number for comparison
@printf "Testing performance rho=%.1f: %.4f\n" rho_1 perf_test_1
@printf "Testing performance rho=%.1f: %.4f\n" rho_2 perf_test_2

# Print the number of categories for each vigilance parameter
@printf "Number of categories rho=%.1f: %i\n" rho_1 my_fuzzyart_1.n_categories
@printf "Number of categories rho=%.1f: %i\n" rho_2 my_fuzzyart_2.n_categories

# Train a PCA model to visually separate the features in two dimensions.
M = fit(PCA, features; maxoutdim=2)

# Apply the PCA model to the testing set
X_test_pca = transform(M, X_test)

p1 = scatter(X_test_pca[1,:], X_test_pca[2,:], group=y_hat_1, title=@sprintf "FuzzyART rho = %.1f" rho_1)
p2 = scatter(X_test_pca[1,:], X_test_pca[2,:], group=y_hat_2, title=@sprintf "FuzzyART rho = %.1f" rho_2)
plot(p1, p2, layout=(1, 2), legend = false, xtickfontsize=6, xguidefontsize=8, titlefont=font(8))

# This file was generated using Literate.jl, https://github.com/fredrikekre/Literate.jl

