var documenterSearchIndex = {"docs":
[{"location":"man/contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"To contribute to the package, please follow the usual branch pull request procedure:","category":"page"},{"location":"man/contributing/","page":"Contributing","title":"Contributing","text":"Fork the project.\nCreate your feature branch (git checkout -b my-new-feature).\nCommit your changes (git commit -am 'Added some feature').\nPush to the branch (git push origin my-new-feature).\nCreate a new GitHub pull request.","category":"page"},{"location":"man/full-index/#main-index","page":"Index","title":"Index","text":"","category":"section"},{"location":"man/full-index/","page":"Index","title":"Index","text":"Pages = [\"lib/public.md\"]","category":"page"},{"location":"man/full-index/","page":"Index","title":"Index","text":"Modules = [AdaptiveResonance]","category":"page"},{"location":"man/full-index/#AdaptiveResonance.DAM","page":"Index","title":"AdaptiveResonance.DAM","text":"DAM\n\nDefault ARTMAP struct.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.DAM-Tuple{opts_DAM}","page":"Index","title":"AdaptiveResonance.DAM","text":"DAM(opts)\n\nImplements a Default ARTMAP learner with specified options\n\nExamples\n\njulia> opts = opts_DAM()\njulia> DAM(opts)\nDAM\n    opts: opts_DAM\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.DAM-Tuple{}","page":"Index","title":"AdaptiveResonance.DAM","text":"DAM()\n\nImplements a Default ARTMAP learner.\n\nExamples\n\njulia> DAM()\nDAM\n    opts: opts_DAM\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.DDVFA","page":"Index","title":"AdaptiveResonance.DDVFA","text":"DDVFA <: AbstractART\n\nDistributed Dual Vigilance Fuzzy ARTMAP module struct.\n\nExamples\n\njulia> DDVFA()\nDDVFA\n    opts: opts_DDVFA\n    supopts::opts_GNFA\n    ...\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.DDVFA-Tuple{opts_DDVFA}","page":"Index","title":"AdaptiveResonance.DDVFA","text":"DDVFA(opts::opts_DDVFA)\n\nImplements a DDVFA learner with specified options.\n\nExamples\n\njulia> my_opts = opts_DDVFA()\njulia> DDVFA(my_opts)\nDDVFA\n    opts: opts_DDVFA\n    supopts: opts_GNFA\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.DDVFA-Tuple{}","page":"Index","title":"AdaptiveResonance.DDVFA","text":"DDVFA()\n\nImplements a DDVFA learner with default options.\n\nExamples\n\njulia> DDVFA()\nDDVFA\n    opts: opts_DDVFA\n    supopts: opts_GNFA\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.DataConfig","page":"Index","title":"AdaptiveResonance.DataConfig","text":"DataConfig\n\nConatiner to standardize training/testing data configuration.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.DataConfig-Tuple{}","page":"Index","title":"AdaptiveResonance.DataConfig","text":"DataConfig()\n\nDefault constructor for a data configuration, not set up.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.FAM","page":"Index","title":"AdaptiveResonance.FAM","text":"FAM\n\nFuzzy ARTMAP struct.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.FAM-Tuple{opts_FAM}","page":"Index","title":"AdaptiveResonance.FAM","text":"FAM(opts)\n\nImplements a Fuzzy ARTMAP learner with specified options.\n\nExamples\n\njulia> opts = opts_FAM()\njulia> FAM(opts)\nFAM\n    opts: opts_FAM\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.FAM-Tuple{}","page":"Index","title":"AdaptiveResonance.FAM","text":"FAM()\n\nImplements a Fuzzy ARTMAP learner.\n\nExamples\n\njulia> FAM()\nFAM\n    opts: opts_FAM\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.GNFA","page":"Index","title":"AdaptiveResonance.GNFA","text":"GNFA <: AbstractART\n\nGamma-Normalized Fuzzy ART learner struct\n\nExamples\n\njulia> GNFA()\nGNFA\n    opts: opts_GNFA\n    ...\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.GNFA-Tuple{opts_GNFA}","page":"Index","title":"AdaptiveResonance.GNFA","text":"GNFA(opts::opts_GNFA)\n\nImplements a Gamma-Normalized Fuzzy ART learner with specified options.\n\nExamples\n\njulia> GNFA(opts)\nGNFA\n    opts: opts_GNFA\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.GNFA-Tuple{}","page":"Index","title":"AdaptiveResonance.GNFA","text":"GNFA()\n\nImplements a Gamma-Normalized Fuzzy ART learner.\n\nExamples\n\njulia> GNFA()\nGNFA\n    opts: opts_GNFA\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.SFAM","page":"Index","title":"AdaptiveResonance.SFAM","text":"SFAM\n\nSimple Fuzzy ARTMAP struct.\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.SFAM-Tuple{opts_SFAM}","page":"Index","title":"AdaptiveResonance.SFAM","text":"SFAM(opts)\n\nImplements a Simple Fuzzy ARTMAP learner with specified options.\n\nExamples\n\njulia> opts = opts_SFAM()\njulia> SFAM(opts)\nSFAM\n    opts: opts_SFAM\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.SFAM-Tuple{}","page":"Index","title":"AdaptiveResonance.SFAM","text":"SFAM()\n\nImplements a Simple Fuzzy ARTMAP learner.\n\nExamples\n\njulia> SFAM()\nSFAM\n    opts: opts_SFAM\n    ...\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.opts_DAM","page":"Index","title":"AdaptiveResonance.opts_DAM","text":"opts_DAM()\n\nImplements a Default ARTMAP learner's options.\n\nExamples\n\njulia> my_opts = opts_DAM()\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.opts_DDVFA","page":"Index","title":"AdaptiveResonance.opts_DDVFA","text":"opts_DDVFA()\n\nDistributed Dual Vigilance Fuzzy ART options struct.\n\nExamples\n\njulia> opts_DDVFA()\nInitialized opts_DDVFA\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.opts_FAM","page":"Index","title":"AdaptiveResonance.opts_FAM","text":"opts_FAM()\n\nImplements a Fuzzy ARTMAP learner's options.\n\nExamples\n\njulia> my_opts = opts_FAM()\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.opts_GNFA","page":"Index","title":"AdaptiveResonance.opts_GNFA","text":"opts_GNFA()\n\nGamma-Normalized Fuzzy ART options struct.\n\nExamples\n\njulia> opts_GNFA()\nInitialized GNFA\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.opts_SFAM","page":"Index","title":"AdaptiveResonance.opts_SFAM","text":"opts_SFAM()\n\nImplements a Simple Fuzzy ARTMAP learner's options.\n\nExamples\n\njulia> my_opts = opts_SFAM()\n\n\n\n\n\n","category":"type"},{"location":"man/full-index/#AdaptiveResonance.activation-Tuple{DAM,Array,Array}","page":"Index","title":"AdaptiveResonance.activation","text":"activation(art::DAM, x, W)\n\nDefault ARTMAP's choice-by-difference activation function.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.activation-Tuple{SFAM,Array,Array}","page":"Index","title":"AdaptiveResonance.activation","text":"activation(art::SFAM, x::Array, W::Array)\n\nReturns the activation value of the Simple Fuzzy ARTMAP module with weight W and sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.activation_match!-Tuple{GNFA,Array}","page":"Index","title":"AdaptiveResonance.activation_match!","text":"activation_match!(art::GNFA, x::Array)\n\nComputes the activation and match functions of the art module against sample x.\n\nExamples\n\njulia> my_GNFA = GNFA()\nGNFA\n    opts: opts_GNFA\n    ...\njulia> x, y = load_data()\njulia> train!(my_GNFA, x)\njulia> x_sample = x[:, 1]\njulia> activation_match!(my_GNFA, x_sample)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.art_match-Tuple{DAM,Array,Array}","page":"Index","title":"AdaptiveResonance.art_match","text":"art_match(art::DAM, x, W)\n\nReturns the match function for the Default ARTMAP module with weight W and sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.art_match-Tuple{SFAM,Array,Array}","page":"Index","title":"AdaptiveResonance.art_match","text":"art_match(art::SFAM, x::Array, W::Array)\n\nReturns the match function for the Simple Fuzzy ARTMAP module with weight W and sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.artscene_filter-Tuple{Array}","page":"Index","title":"AdaptiveResonance.artscene_filter","text":"artscene_filter(raw_image::Array ;  distributed=true)\n\nProcess the full artscene filter toolchain on an image.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.classify-Tuple{DAM,Array}","page":"Index","title":"AdaptiveResonance.classify","text":"classify(art::DAM, x)\n\nCategorize data 'x' using a trained Default ARTMAP module 'art'.\n\nExamples\n\njulia> x, y = load_data()\njulia> x_test, y_test = load_test_data()\njulia> art = DAM()\nDAM\n    opts: opts_DAM\n    ...\njulia> train!(art, x, y)\njulia> classify(art, x_test)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.classify-Tuple{DDVFA,Array}","page":"Index","title":"AdaptiveResonance.classify","text":"classify(art::DDVFA, x::Array ; preprocessed=false)\n\nPredict categories of 'x' using the DDVFA model.\n\nReturns predicted categories 'y_hat.'\n\nExamples\n\njulia> my_DDVFA = DDVFA()\nDDVFA\n    opts: opts_DDVFA\n    ...\njulia> x, y = load_data()\njulia> train!(my_DDVFA, x)\njulia> y_hat = classify(my_DDVFA, y)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.classify-Tuple{GNFA,Array}","page":"Index","title":"AdaptiveResonance.classify","text":"classify(art::GNFA, x::Array)\n\nPredict categories of 'x' using the GNFA model.\n\nReturns predicted categories 'y_hat'\n\nExamples\n\njulia> my_GNFA = GNFA()\nGNFA\n    opts: opts_GNFA\n    ...\njulia> x, y = load_data()\njulia> train!(my_GNFA, x)\njulia> y_hat = classify(my_GNFA, y)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.classify-Tuple{SFAM,Array}","page":"Index","title":"AdaptiveResonance.classify","text":"classify(art::SFAM, x::Array ; preprocessed=false)\n\nCategorize data 'x' using a trained Simple Fuzzy ARTMAP module 'art'.\n\nExamples\n\njulia> x, y = load_data()\njulia> x_test, y_test = load_test_data()\njulia> art = SFAM()\nSFAM\n    opts: opts_SFAM\n    ...\njulia> train!(art, x, y)\njulia> classify(art, x_test)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.color_to_gray-Tuple{Array}","page":"Index","title":"AdaptiveResonance.color_to_gray","text":"color_to_gray(image::Array)\n\nARTSCENE Stage 1: Color-to-gray image transformation.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.competition_kernel-Tuple{Int64,Int64}","page":"Index","title":"AdaptiveResonance.competition_kernel","text":"competition_kernel(l::Int, k::Int ; sign::String=\"plus\")\n\nCompetition kernel for ARTSCENE: Stage 5.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.complement_code-Tuple{Array}","page":"Index","title":"AdaptiveResonance.complement_code","text":"complement_code(data)\n\nNormalize the data x to [0, 1] and returns the augmented vector [x, 1 - x].\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.contrast_insensitive_oriented_filtering-Tuple{Array}","page":"Index","title":"AdaptiveResonance.contrast_insensitive_oriented_filtering","text":"contrast_insensitive_oriented_filtering(y::Array)\n\nARTSCENE Stage 4: Contrast-insensitive oriented filtering.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.contrast_normalization-Tuple{Array}","page":"Index","title":"AdaptiveResonance.contrast_normalization","text":"contrast_normalization(image::Array ; distributed::Bool=true)\n\nARTSCENE Stage 2: Constrast normalization.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.contrast_sensitive_oriented_filtering-Tuple{Array,Array}","page":"Index","title":"AdaptiveResonance.contrast_sensitive_oriented_filtering","text":"contrast_sensitive_oriented_filtering(image::Array, x::Array ; distributed::Bool=true)\n\nARTSCENE Stage 3: Contrast-sensitive oriented filtering.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.data_setup-Tuple{AdaptiveResonance.AbstractART,Array}","page":"Index","title":"AdaptiveResonance.data_setup","text":"\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.ddt_x-Tuple{Array,Array,Array,Bool}","page":"Index","title":"AdaptiveResonance.ddt_x","text":"ddt_x(x::Array, image::Array, sigma_s::Array, distributed::Bool)\n\nTime rate of change of LGN network (ARTSCENE Stage 2).\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.ddt_y-Tuple{Array,Array,Array,Real,Bool}","page":"Index","title":"AdaptiveResonance.ddt_y","text":"ddt_y(y::Array, X_plus::Array, X_minus::Array, alpha::Real, distributed::Bool)\n\nShunting equation for ARTSCENE Stage 3.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.ddt_z-Tuple{Array}","page":"Index","title":"AdaptiveResonance.ddt_z","text":"ddt_z(z::Array ; distributed=true)\n\nTime rate of change for ARTSCENE: Stage 5.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.element_min-Tuple{Array,Array}","page":"Index","title":"AdaptiveResonance.element_min","text":"element_min(x::Array, W::Array)\n\nReturns the element-wise minimum between sample x and weight W.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.initialize!-Tuple{GNFA,Array}","page":"Index","title":"AdaptiveResonance.initialize!","text":"initialize!(art::GNFA, x::Array)\n\nInitializes a GNFA learner with an intial sample 'x'\n\nExamples\n\njulia> my_GNFA = GNFA()\nGNFA\n    opts: opts_GNFA\n    ...\njulia> initialize!(my_GNFA, [1 2 3 4])\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.learn!-Tuple{GNFA,Array,Int64}","page":"Index","title":"AdaptiveResonance.learn!","text":"learn!(art::GNFA, x::Array, index::Int)\n\nIn place learning function with instance counting.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.learn-Tuple{DAM,Array,Array}","page":"Index","title":"AdaptiveResonance.learn","text":"learn(art::DAM, x, W)\n\nReturns a single updated weight for the Simple Fuzzy ARTMAP module for weight vector W and sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.learn-Tuple{GNFA,Array,Array}","page":"Index","title":"AdaptiveResonance.learn","text":"learn(art::GNFA, x::Array, W::Array)\n\nReturn the modified weight of the art module conditioned by sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.learn-Tuple{SFAM,Array,Array}","page":"Index","title":"AdaptiveResonance.learn","text":"learn(art::SFAM, x::Array, W::Array)\n\nReturns a single updated weight for the Simple Fuzzy ARTMAP module for weight vector W and sample x.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.orientation_competition-Tuple{Array}","page":"Index","title":"AdaptiveResonance.orientation_competition","text":"orientation_competition(z::Array)\n\nARTSCENE Stage 5: Orientation competition at the same position.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.oriented_kernel-Tuple{Int64,Int64,Int64,Int64,Int64,Real,Real}","page":"Index","title":"AdaptiveResonance.oriented_kernel","text":"oriented_kernel(i::Int, j::Int, p::Int, q::Int, k::Int, sigma_h::Real, sigma_v::Real ; sign::String=\"plus\")\n\nOriented, elongated, spatially offset kernel G for ARTSCENE Stage 3.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.patch_orientation_color-Tuple{Array,Array}","page":"Index","title":"AdaptiveResonance.patch_orientation_color","text":"patch_orientation_color(z::Array, image::Array)\n\nARTSCENE Stage 6: Create patch feature vectors.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.performance-Tuple{Array,Array}","page":"Index","title":"AdaptiveResonance.performance","text":"performance(y_hat, y)\n\nReturns the categorization performance of y_hat against y.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.similarity-Tuple{String,GNFA,String,Array,Real}","page":"Index","title":"AdaptiveResonance.similarity","text":"similarity(method::String, F2::GNFA, field_name::String, sample::Array, gamma_ref::Real)\n\nCompute the similarity metric depending on method with explicit comparisons for the field name.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.stopping_conditions-Tuple{DAM}","page":"Index","title":"AdaptiveResonance.stopping_conditions","text":"stopping_conditions(art::DAM)\n\nStopping conditions for Default ARTMAP, checked at the end of every epoch.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.stopping_conditions-Tuple{DDVFA}","page":"Index","title":"AdaptiveResonance.stopping_conditions","text":"stopping_conditions(art::DDVFA)\n\nStopping conditions for Distributed Dual Vigilance Fuzzy ARTMAP.\n\nReturns true if there is no change in weights during the epoch or the maxmimum epochs has been reached.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.stopping_conditions-Tuple{GNFA}","page":"Index","title":"AdaptiveResonance.stopping_conditions","text":"stopping_conditions(art::GNFA)\n\nStopping conditions for a GNFA module.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.stopping_conditions-Tuple{SFAM}","page":"Index","title":"AdaptiveResonance.stopping_conditions","text":"stopping_conditions(art::SFAM)\n\nStopping conditions for Simple Fuzzy ARTMAP, checked at the end of every epoch.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.surround_kernel-NTuple{5,Int64}","page":"Index","title":"AdaptiveResonance.surround_kernel","text":"surround_kernel(i::Int, j::Int, p::Int, q::Int, scale::Int)\n\nSurround kernel S function for ARTSCENE Stage 2\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.train!-Tuple{DAM,Array,Array}","page":"Index","title":"AdaptiveResonance.train!","text":"train(art::DAM, x, y)\n\nTrains a Default ARTMAP learner in a supervised manner.\n\nExamples\n\njulia> x, y = load_data()\njulia> art = DAM()\nDAM\n    opts: opts_DAM\n    ...\njulia> train!(art, x, y)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.train!-Tuple{DDVFA,Array}","page":"Index","title":"AdaptiveResonance.train!","text":"train!(art::DDVFA, x::Array ; preprocessed=false)\n\nTrain the DDVFA model on the data.\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.train!-Tuple{GNFA,Array}","page":"Index","title":"AdaptiveResonance.train!","text":"train!(art::GNFA, x::Array ; y::Array=[])\n\nTrains a GNFA learner with dataset 'x' and optional labels 'y'\n\nExamples\n\njulia> my_GNFA = GNFA()\nGNFA\n    opts: opts_GNFA\n    ...\njulia> x = load_data()\njulia> train!(my_GNFA, x)\n\n\n\n\n\n","category":"method"},{"location":"man/full-index/#AdaptiveResonance.train!-Tuple{SFAM,Array,Array}","page":"Index","title":"AdaptiveResonance.train!","text":"train(art::SFAM, x::Array, y::Array ; preprocessed=false)\n\nTrains a Simple Fuzzy ARTMAP learner in a supervised manner.\n\nExamples\n\njulia> x, y = load_data()\njulia> art = SFAM()\nSFAM\n    opts: opts_SFAM\n    ...\njulia> train!(art, x, y)\n\n\n\n\n\n","category":"method"},{"location":"man/guide/#Package-Guide","page":"Guide","title":"Package Guide","text":"","category":"section"},{"location":"man/guide/#Installation","page":"Guide","title":"Installation","text":"","category":"section"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"The AdaptiveResonance package can be installed using the Julia package manager. From the Julia REPL, type ']' to enter the Pkg REPL mode and run","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"pkg> add AdaptiveResonance","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"Alternatively, it can be added to/ your environment in a script with","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"using Pkg\nPkg.add(\"AdaptiveResonance\")","category":"page"},{"location":"man/guide/#Usage","page":"Guide","title":"Usage","text":"","category":"section"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"The AdaptiveResonance package is built upon ART modules that contain all of the state information during training and inference. The ART modules are driven by options, which are themselves mutable keyword argument structs from the Parameters.jl package.","category":"page"},{"location":"man/guide/#ART-Modules","page":"Guide","title":"ART Modules","text":"","category":"section"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"The AdaptiveResonance package is designed for maximum flexibility for scientific research, even though this may come at the cost of learning instability if misused. Because of the diversity of ART modules, the package is structured around instantiating separate modules and using them for training and inference. Due to this diversity, each module has its own options struct with keyword arguments. These options have default values driven by standards in their respective literatures, so the ART modules may be used immediately without any customization. Furthermore, these options are mutable, so they may be modified before module instantiation, before training, or even after training.","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"For example, you can get going with the default options by creating an ART module with the default constructor:","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"my_art = DDVFA()","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"If you want to change the parameters before construction, you can create an options struct, modify it, then instantiate your ART module with it:","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"my_art_opts = opts_DDVFA()\nmy_art_opts.gamma = 3\nmy_art = DDVFA(my_art_opts)","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"The options are objects from the Parameters.jl project,","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"You can even modify the parameters on the fly after the ART module has been instantiated by directly modifying the options within the module:","category":"page"},{"location":"man/guide/","page":"Guide","title":"Guide","text":"my_art = DDVFA()\nmy_art.opts.gamma = 3","category":"page"},{"location":"man/examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"man/examples/","page":"Examples","title":"Examples","text":"Here are some helpful examples of the usage of the module.","category":"page"},{"location":"man/examples/#Example-1:","page":"Examples","title":"Example 1:","text":"","category":"section"},{"location":"man/examples/","page":"Examples","title":"Examples","text":"art = DDVFA()","category":"page"},{"location":"man/examples/#Example-2:","page":"Examples","title":"Example 2:","text":"","category":"section"},{"location":"man/examples/","page":"Examples","title":"Examples","text":"art = SFAM()","category":"page"},{"location":"#AdaptiveResonance.jl","page":"Home","title":"AdaptiveResonance.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The Package Guide provides a tutorial explaining how to get started using Documenter.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Some examples of packages using Documenter can be found on the Examples page.","category":"page"},{"location":"","page":"Home","title":"Home","text":"See the Index for the complete list of documented functions and types.","category":"page"},{"location":"#Manual-Outline","page":"Home","title":"Manual Outline","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"man/guide.md\",\n    \"man/examples.md\",\n    \"man/contributing.md\",\n    \"man/full-index.md\",\n]\nDepth = 1","category":"page"}]
}
