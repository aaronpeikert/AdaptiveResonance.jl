"""
    ART.jl

Description:
    Includes all of the unsupervised ART modules definitions.
"""

include("common.jl")    # train!, classify
include("FuzzyART.jl")  # FuzzyART
include("DDVFA.jl")     # DDVFA
include("DVFA.jl")      # DVFA
