// main includes all cards.
let main = document.getElementsByClassName('tw-pd-b-3 tw-pd-t-2 tw-pd-x-3')[0];

const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
  console.log(x + ' channel was removed');
  checkGames();   
}
// if dom changed
const observer = new MutationObserver(callback);

observer.observe(main, config);

let x = 0;
function removeGames() {
  let cards = main.getElementsByClassName('preview-card');
  const bannedGames = ['league of legends',`playerunknown's battlegrounds`, 'counter-strike: global offensive', 'pubg mobile', 'grand theft auto v',
  'fortnite', 'zula', 'knight online', 'dota 2', 'teamfight tactics', 'slots', 'metin 2', 'black desert online', 'hearthstone'];

  

  for (let i = 0; i < cards.length; i++) {
    
    try {
      // if the card has child
      if(cards[i].parentElement.parentElement.parentElement.parentElement.parentElement.hasChildNodes){
        // if match the game name
        if(bannedGames.some(el => cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase().includes(el))){
          // how many cards are deleted?
          x++;
          console.log(cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase());
          // delete 4 upper parent
          cards[i].parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(cards[i].parentElement.parentElement.parentElement.parentElement); 
        }
        else {
          // get channel names
          console.log(cards[17].children[1].children[1].children[0].children[1].children[0].children[0].children[0].textContent);
        }
       
      }
    } catch (error) {}
  }
}

// In first load
function checkGames () {
  setTimeout(() => {
    removeGames();
  }, 2500);
}


