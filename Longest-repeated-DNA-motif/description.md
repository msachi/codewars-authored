DNA is a polymer of four different building blocks, called nucleotides: adenine (A), thymine (T), cytosine (C) and guanine (G).

Given a random DNA sequence, find the longest motif (pattern of DNA sequence) that repeats at least once within the sequence, i.e. that has at least two occurrences within the sequence. If more than one repeated motif is the longest, return all the motifs of that length.

Details:

- The input will be a DNA sequence, between 5 and 100 nucleotides in length, given as a string.
- The repeats of an individual motif (e.g `TATA` and `TATA`) can be adjacent to each other, but they should not be overlapping (`TATATATA` contains two repeats of `TATA`, but `TATATA` does not).
- The different motifs (e.g `TATA` and `TACC`) can be overlapping (`TATACC` contains both `TATA` and `TACC`).
- The motifs can be single nucleotides. Note that, because sequence length will always be at least 5 nucleotides, there will always be at least one repeated single-nucleotide motif.
- The output should be an **array of strings**, corresponding to the different motifs. The array should be ordered in terms of the position of the first occurrence of the motif in the sequence (from left to right), and every motif should only be listed once.

Example:
```javascript
seq1 = 'AGTGGGTCATTGCTAGTAGTCGACATTGCAT'

longestMotif (seq1);
// --> ['CATTGC']

// The two repeats of the motif are highlighted below:
// 'AGTGGGTCATTGCTAGTAGTCGACATTGCAT'
//         ******          ******
```


