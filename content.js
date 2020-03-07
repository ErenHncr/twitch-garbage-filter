let main = document.getElementsByClassName('tw-pd-b-3 tw-pd-t-2 tw-pd-x-3')[0];


const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
  console.log('gönderdim');
  checkGames();   
}
const observer = new MutationObserver(callback);

observer.observe(main, config);


function removeGames(x=0) {
  let cards = main.getElementsByClassName('preview-card');

  for (let i = 0; i < cards.length; i++) {
    // if match the game name
    try {
      if(cards[i].parentElement.parentElement.parentElement.parentElement.parentElement.hasChildNodes){
        if(cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase() == 'league of legends' ||
          cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase() == 'counter-strike: global offensive' ||
          cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase() == `playerunknown's battlegrounds` ||
          cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase() == `pubg mobile` ||
          cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase() == `grand theft auto v` ||
          cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase() == `fortnite`){

            console.log(cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase());
            cards[i].parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(cards[i].parentElement.parentElement.parentElement.parentElement); 
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


