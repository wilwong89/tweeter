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
const url = "/tweets"
const currentUser = {
  "user": {
    "name": "Wilson Wong",
    "avatars": "https://i.imgur.com/RaiowCP.jpg",
    "handle": "@FakeTweet" },
  "content": {
    "text": ""
  },
  "created_at": ""
}

const tweetValidation = function (textInput) {
  // Input validation
  if (!textInput) {
    
    return false;
  } else if (textInput.length > 140) {
    
    return false;
  };

  return true;
}

const addSelfTweet = function (inputText) {
  currentUser.content.text = inputText;
  currentUser.created_at = new Date();


  return currentUser;
}

const loadTweets = function (selfTweet) {
  $(".tweet-container").empty()
  $.ajax({
    type: "GET",
    url: url,
    success: function(tweetsArray) {
      if (selfTweet) {
        tweetsArray.push(selfTweet)
      }
      renderTweets(tweetsArray);
    }
  });
}

const renderTweets = function(tweets, currentTweet) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets) {
    $(".tweet-container").prepend(createTweetElement(tweet))
  }
  
}

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const createTweetElement = function(tweet) {

  let tweetData = tweet;

  let stringTemplate = `
    <section class="w-100 mt-1 tweet-border">
      <div class="tweet-header posR">
        <img class="tweet-avatar" src="${escape(tweetData.user.avatars)}"></img>
        <span class="tweeter-name">${escape(tweetData.user.name)}</span>
        <span class="tweeter-handle">${escape(tweetData.user.handle)}</spa>
      </div>
      <div class="mt-1_5">
        <textarea maxlength="" id="tweet-template-text" disabled class="tweet-input fwn" name="text">${escape(tweetData.content.text)}</textarea>
        <span class="post-date">${new Date(escape(tweetData.created_at))}</span>
      </div>
    </section>`
  
  return stringTemplate;
}

let getSelfTweet = "";

$(document).ready(function(){
  loadTweets();
  getSelfTweet = $(".actual-input");

  $("form").on('submit', function (event) {
    
    event.preventDefault();
    var form = $(this);
    var textInput = $(".actual-input").val();

    if (!tweetValidation(textInput)) return;

    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(),
      success: function(data) {
        console.log("success")
        loadTweets(addSelfTweet(textInput));
        $(".counter").text("140");
        //addSelfTweet(textInput);
      },
      error: function(err) {
        console.log("error",)
      }
    });
  })
  
})
