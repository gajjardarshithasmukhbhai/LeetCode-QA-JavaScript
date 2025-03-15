## Math Formula to count, subsequence
1. [2,3,3,4,6,7] so How much Subsequence can produce ?

- [0,1,2,3,4,5] --> This is The Index of the below Array
- [2,3,3,4,6,7] --> so from 2 --> 2^(5-0) --> 32 subsequence possible
- [2,3,3,4,6,7] --> so from 3 --> 2^(5-1) --> 2^4 = 16 subsequence possible
- [2,3,3,4,6,7] --> so from 3 --> 2^(5-2) --> 2^3 = 8 subsequence possible
- [2,3,3,4,6,7] --> so from 4 --> 2^(5-3) --> 2^2 = 4 subsequence possible
- [2,3,3,4,6,7] --> so from 6 --> 2^(5-4) --> 2^1 = 2 subsequence possible
- [2,3,3,4,6,7] --> so from 7 --> 2^(5-5) --> 2^0 = 1 subsequence possible
- so total = 63 possible non empty subsequence 

- in Above we make it as chunk, In mostly leetcode problem. we solved above way only

- But in single way --> 2^6 => 64-1 = 63 --> Directly we get the value 

**Note**: ```In Leetcode we can't use directly power, because time limit exceed error will throw, so instead of that  we need to precommute the power, keep in the mind :-)```