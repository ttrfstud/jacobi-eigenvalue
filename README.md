Jacobi Eigenvalue Algorithm
===========================
jae is implemented as described [http://people.math.gatech.edu/~klounici6/2605/Lectures%20notes%20Carlen/chap3.pdf][here]. the signature of the only exported method is (matrix, threshold). it would not examine the parameters for correctness, so check them yourself. threshold should be >= 0. it would however consider threshold as a suggestion, rather than strict order, because it will exit on the first rounding error, because i don't know what would happen if the rounding error is accumulated.