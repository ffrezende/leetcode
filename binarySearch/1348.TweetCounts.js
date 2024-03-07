var TweetCounts = function () {
  this.tweets = new Map()
}

/**
 * @param {string} tweetName
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function (tweetName, time) {
  const hasTweets = this.tweets.has(tweetName)
  if (hasTweets) {
    const listOfTime = this.tweets.get(tweetName)

    this.tweets.set(tweetName, [...listOfTime, time])
  } else {
    this.tweets.set(tweetName, [time])
  }

  console.log(this.tweets)
}

/**
 * @param {string} freq
 * @param {string} tweetName
 * @param {number} startTime
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function (
  freq,
  tweetName,
  startTime,
  endTime
) {
  const intervals = {
    minute: 60,
    hour: 3600,
    day: 86400,
  }

  const interval = intervals[freq]
  const tweetTimes = this.tweets
    .get(tweetName)
    .filter((time) => time >= startTime && time <= endTime)

  const counts = new Array(
    Math.ceil((endTime - startTime + 1) / interval)
  ).fill(0)

  tweetTimes.forEach((time) => {
    const index = Math.floor((time - startTime) / interval)
    counts[index]++
  })

  return counts
}

/**
 * Your TweetCounts object will be instantiated and called as such:

 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */

const obj = new TweetCounts()
obj.recordTweet('tweet3', 60)
obj.recordTweet('tweet3', 50)
