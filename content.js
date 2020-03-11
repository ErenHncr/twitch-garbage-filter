
// main includes all cards.
let main = document.getElementsByTagName('main')[0];

const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
  removeGames();
  setTimeout(() => {
    console.log(x + ' channel was removed'); 
  },2000);
    
}
// if dom changed
const observer = new MutationObserver(callback);

observer.observe(main, config);

let x = 0;
function removeGames() {
  let cards = document.getElementsByClassName('tw-mg-b-2');
  let bannedGames;

  if(localStorage.getItem('banned') != undefined) {
    bannedGames = JSON.parse(localStorage.getItem('banned'));
  }
  else {
    bannedGames = ['league of legends',`playerunknown's battlegrounds`, 'counter-strike: global offensive', 'pubg mobile', 'grand theft auto v',
    'fortnite', 'zula', 'knight online', 'dota 2', 'teamfight tactics', 'slots', 'metin 2', 'black desert online', 'hearthstone', 'blackjack', 'poker',
    'sadece sohbet','silkroad online','fifa 20'];
  }
  
  const bannedChannels = ['wtcn', 'y'];

  // get games played
  // console.log(cards[1].children[0].children[0].children[0]
  //   .children[0].children[0].children[0].children[0].children[1]
  //   .children[1].children[0].children[0].textContent.toLowerCase());

  // get channel name
  // console.log(cards[1].children[0].children[0].children[0]
  //   .children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].textContent.toLowerCase());

  for (let i = 0; i < cards.length; i++) {
  
    try {
      // if the card has child
      if(cards[i].parentElement.parentElement.hasChildNodes){
        // remove channels that play bannedGames games 
        if(bannedGames.some(el => cards[i].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase().includes(el))){
          // how many cards are deleted?
          x++;
          // delete upper parent
          cards[i].parentElement.parentElement.removeChild(cards[i].parentElement);
        }
        // remove channels in bannedChannels
        if(bannedChannels.some(el => cards[i].children[0].children[0].children[0]
          .children[0].children[0].children[0].children[0].children[1].children[0]
          .children[0].children[0].textContent.toLowerCase().includes(el))) {
          
          cards[i].parentElement.parentElement.removeChild(cards[i].parentElement);
          x++;
        }

      }
    } catch (error) {}
  }
}

// In first load
setTimeout(() => {
    removeGames();
}, 2000);



chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
  localStorage.setItem('banned', JSON.stringify(request.arr));
  console.log(request.arr);
}