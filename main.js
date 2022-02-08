// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll('.like-glyph');
likeButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const heart = e.target;
    if (heart.textContent === EMPTY_HEART) {
      const myPromise = mimicServerCall();
      myPromise
      .then(() => {
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        })
      .catch((error) => {
        const modal = document.querySelector('#modal');
        modal.classList.remove('hidden');
        document.querySelector('#modal_message').textContent = error;
        setTimeout(() => {
          modal.classList.add('hidden')
        }, 3000);
      })
     }
     else {
      heart.textContent = EMPTY_HEART;
      heart.classList.remove('activated-heart');
     }
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
