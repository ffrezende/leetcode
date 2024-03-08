// Given a string s, find the length of the longest
// substring
//  without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
  if (s == ' ') return 1
  const arrayOfLetters = s.split('')

  const list = new Map()
  let highColision = 0
  let withOutColision = 0

  for (let index = 0; index < arrayOfLetters.length; index++) {
    const element = arrayOfLetters[index]
    const hasLetter = list.has(element)

    if (hasLetter) {
      if (highColision < list.size) {
        highColision = list.size
      }
      list.clear()
      list.set(element, element)
    } else {
      list.set(element, element)
      withOutColision = list.size
    }
  }

  return withOutColision
}

console.log(lengthOfLongestSubstring('bbbbb'))
