let main = document.getElementsByClassName('tw-pd-b-3 tw-pd-t-2 tw-pd-x-3')[0];

// In first load
function firstLoad() {
  setTimeout(() => {
    let cards = main.getElementsByClassName('preview-card');

    for (let i = 0; i < cards.length; i++) 
    {
      // if match the game name
      if(cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase() == 'league of legends' ||
      cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase() == 'counter-strike: global offensive' ||
      cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase() == `playerunknown's battlegrounds`){
        console.log(cards[i].children[1].children[1].children[0].children[1].children[1].children[0].children[0].textContent.toLowerCase());
        
        cards[i].parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(cards[i].parentElement.parentElement.parentElement.parentElement);    
        cards = main.getElementsByClassName('preview-card');  
      }    
    }
  }, 1500);
}

firstLoad();

document.addEventListener('load',firstLoad);
