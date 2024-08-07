// Write a function that splits a long SMS string into smaller pieces.
// Each piece should be less than or equal to 160 characters and include
// a formatted index counter at the end (for example, “ (2/5)”). The function
// should avoid breaking words into pieces. If a word does not fit, it should
// go to the next SMS.

function splitSMS(text, maxChars = 160) {
  if (!text) return []

  const messages = []
  let currentMessage = ''
  let wordCount = 0

  for (const word of text.split(' ')) {
    const potentialMessage = currentMessage + ' ' + word

    if (potentialMessage.length + 7 <= maxChars) {
      // Account for counter length
      currentMessage = potentialMessage
      wordCount++
    } else {
      messages.push(`${currentMessage} (${wordCount}/${messages.length + 1})`)
      currentMessage = word
      wordCount = 1
    }
  }

  // Add the last message, even if empty
  messages.push(`${currentMessage} (${wordCount}/${messages.length + 1})`)

  return messages
}

console.log(splitSMS('test teste testew testes testes teste', 20))
