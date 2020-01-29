const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
  
  for (let tweet in tweets) {
    $(".container").append(createTweetElement(tweet))
  }
}

const createTweetElement = function(tweet) {

  let tweetData = tweet;

  let $tweet = `<section class="w-100 mt-1 tweet-border">
    <div class="tweet-header posR">
      <img class="tweet-avatar" src="${tweetData.user.avatars}"></img>
      <span class="tweeter-name">${tweetData.user.name}</span>
      <span class="tweeter-handle">${tweetData.user.handle}</spa>
    </div>
    <div class="mt-1_5">
      <textarea maxlength="" id="tweet-template-text" disabled class="tweet-input" name="text">${tweetData.content.text}</textarea>
      <span class="post-date">${new Date(tweetData.created_at)}</span>
    </div>
  </section>`
return $tweet;
}

renderTweets(data);