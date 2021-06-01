// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.

function topKFrequent(words, k) {
    // Build map of frequencies
    const map = words.reduce((acc, word) => {
      let count = acc.get(word) || 0;
      acc.set(word, ++count)
      return acc;
    }, new Map());
    // Sort by counter first from higher to lower. If counterC is the same,
    // then sort by alphabetical order
    const ret = [...map].sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    console.log(ret)
    // Return array of k most frequent words
    return ret.slice(0, k).map(item => item[0]);
  }

  topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], k = 2)