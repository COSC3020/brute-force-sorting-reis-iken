[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

**MY ANSWER:**

This implementation checks if the permutation is sorted, and if it is not, then it recursively generates all the possible permutations of the input array of size n.

In the best case, our data set is already sorted, and the checks would take time n, giving us a best-case runtime complexity of O(n).

In the worst case, our algorithm generates all the possible permutations, which is factorial. So the worst-case runtime complexity is O(n!).

If we randomly generated permutations without using memory (why would we ever do this?!), the best case would still be O(n) if we just so happened to randomly generate the sorted permutation.

But the worst case run time would increase. The expected number of random generations should be proportional to the number of permutations... so I believe we would multiply n by n! to get a worst case runtime complexity of O(n * n!). Yikes.
