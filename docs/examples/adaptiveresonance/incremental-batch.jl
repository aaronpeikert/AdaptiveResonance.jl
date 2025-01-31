# ---
# title: Incremental vs. Batch Example
# id: incremental_batch
# cover: ../assets/art.png
# date: 2021-12-1
# author: "[Sasha Petrenko](https://github.com/AP6YC)"
# julia: 1.6
# description: This demo illustrates how to use incremental training methods vs. batch training for all ART modules.
# ---

# ## Overview

# All modules in `AdaptiveResonance.jl` are designed to handle incremental and batch training.
# In fact, ART modules are generally incremental in their implementation, so their batch methods wrap the incremental ones and handle preprocessing, etc.
# For example, DDVFA can be run incrementally (i.e. with one sample at a time) with custom algorithmic options and a predetermined data configuration.

# !!! note
#     In the incremental case, it is necessary to provide a data configuration if the model is not pretrained because the model has no knowledge of the boundaries and dimensionality of the data, which are necessary in the complement coding step.
#     For more info, see the guide in the docs on [incremental vs. batch](@ref incremental_vs_batch).

# ## Data Setup

# We begin with importing AdaptiveResonance for the ART modules and MLDatasets for some data utilities.
using AdaptiveResonance # ART
using MLDatasets        # Iris dataset
using MLDataUtils       # Shuffling and splitting
using Printf            # Formatted number printing

# We will download the Iris dataset for its small size and benchmark use for clustering algorithms.
Iris.download(i_accept_the_terms_of_use=true)
features, labels = Iris.features(), Iris.labels()

# Because the MLDatasets package gives us Iris labels as strings, we will use the `MLDataUtils.convertlabel` method with the `MLLabelUtils.LabelEnc.Indices` type to get a list of integers representing each class:
labels = convertlabel(LabelEnc.Indices{Int}, labels)
unique(labels)

# Next, we will create a train/test split with the `MLDataUtils.stratifiedobs` utility:
(X_train, y_train), (X_test, y_test) = stratifiedobs((features, labels))

# ## Incremental vs. Batch

# ### Setup

# Now, we can create several modules to illustrate training one in batch and one incrementaly.

## Create several modules for batch and incremental training.
## We can take advantage of the options instantiation method here to use the same options for both modules.
opts = opts_DDVFA(rho_lb=0.6, rho_ub=0.75)
art_batch = DDVFA(opts)
art_incremental = DDVFA(opts)

# For the incremental version, we must setup the data configuration in advance.
# In batch mode, this is done automatically based upon the provided data, but the incremental variant has not way of knowing the bounds of the individual features.
# We *could* preprocess the data and set the data configuration with `art.config = DataConfig(0, 1, 4)`, which translates to the data containing four features  that *all* range from 0 to 1.
# This would be done in scenarios where we have either done some preprocessing on the data or have prior knowledge about the bounds of individual features.
# However, in this example we will let the module determine the bounds with the convenience method `data_setup!`:

## Setup the data config on all of the features.
data_setup!(art_incremental.config, features)

# ### Training

# We can train in batch with a simple supervised mode by passing the labels as a keyword argument.
y_hat_batch_train = train!(art_batch, X_train, y=y_train)
println("Training labels: ",  size(y_hat_batch_train), " ", typeof(y_hat_batch_train))

# We can also train incrementally with the same method, being careful that we pass a vector features and a single integer as the labels

## Get the number of training samples
n_train = length(y_train)
## Create a container for the training output labels
y_hat_incremental_train = zeros(Int, n_train)
## Iterate over all training samples
for ix = 1:length(y_train)
    sample = X_train[:, ix]
    label = y_train[ix]
    y_hat_incremental_train[ix] = train!(art_incremental, sample, y=label)
end

# ### Testing

# We can then classify both networks and check that their performances are equivalent.
# For both, we will use the best-matching unit in the case of complete mismatch (see the docs on [Mismatch vs. BMU](@ref mismatch-bmu))

## Classify one model in batch mode
y_hat_batch = AdaptiveResonance.classify(art_batch, X_test, get_bmu=true)

## Classify one model incrementally
n_test = length(y_test)
y_hat_incremental = zeros(Int, n_test)
for ix = 1:n_test
    y_hat_incremental[ix] = AdaptiveResonance.classify(art_incremental, X_test[:, ix], get_bmu=true)
end

## Check the shape and type of the output labels
println("Batch testing labels: ",  size(y_hat_batch), " ", typeof(y_hat_batch))
println("Incremental testing labels: ",  size(y_hat_incremental), " ", typeof(y_hat_incremental))

# Finally, we check the performance (number of correct classifications over total number of test samples) for both models, verifying that they produce the same results.

## Calculate performance on training data, testing data, and with get_bmu
perf_train_batch = performance(y_hat_batch_train, y_train)
perf_train_incremental = performance(y_hat_incremental_train, y_train)
perf_test_batch = performance(y_hat_batch, y_test)
perf_test_incremental = performance(y_hat_incremental, y_test)

## Format each performance number for comparison
@printf "Batch training performance: %.4f\n" perf_train_batch
@printf "Incremental training performance: %.4f\n" perf_train_incremental
@printf "Batch testing performance: %.4f\n" perf_test_batch
@printf "Incremental testing performance: %.4f\n" perf_test_incremental
