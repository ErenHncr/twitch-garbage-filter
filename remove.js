document.addEventListener('DOMContentLoaded', () => {
  console.log(localStorage.getItem('banned'));
})

const mainUl = document.querySelector('.list');
let banned = JSON.parse(localStorage.getItem('banned'));

banned.forEach(ban => {
  mainUl.innerHTML += `
  <li class="item">
    <p>${ban}</p>
    <img src="./x-button.png" width="15px" height="15px">
  </li>`
});

document.getElementsByClassName('list')[0].addEventListener('click', (e) => {
  // removeChild
  // let arr;
  for(let i = 0; i < 3; i++){
    if(e.path[i].tagName.toLowerCase()=='li') {
      console.log(e.path[i].children[0].textContent)
      banned = banned.filter((value) => {
        return value != e.path[i].children[0].textContent;
      })
      e.currentTarget.removeChild(e.path[i]);
    }
  }
  sendLocalStorage();
  console.log(banned);
})

function sendLocalStorage() {
  const params = {
    active: true,
    currentWindow: true
  };
  
  chrome.tabs.query(params, gotTabs);
  
  function gotTabs(tabs) {

    const msg = {
      arr: JSON.parse(localStorage.getItem('banned'))
    };

  // The first tab is the one you are on
    chrome.tabs.sendMessage(tabs[0].id, msg);//, messageBack);
  }
}