window.addEventListener('DOMContentLoaded', () => {
  sendLocalStorage();
});
const button = document.querySelector('.btn');
const infoBox = document.querySelector('.error');
const textBox = document.querySelector('.textBox');
button.addEventListener("click", () => {
  toggle();
  sendLocalStorage();
});

function toggle() {
  infoBox.style.display = 'block';
  let arr = [];
  let checkAvailable = true;
  if(!textBox.value) {
    infoBox.style.animationName = 'false';
    infoBox.textContent = 'The area must be filled out!';
   }
  else {
    
    if(localStorage.getItem('banned') == undefined) {
      arr.push(textBox.value.trim());
      localStorage.setItem('banned', JSON.stringify(arr));
    }

    else {
      arr = JSON.parse(localStorage.getItem('banned'));
      checkAvailable = arr.includes((textBox.value.toString().trim()).toLowerCase())
      if(!checkAvailable) {
        arr.push((textBox.value.toString().trim()).toLowerCase());
        localStorage.setItem('banned', JSON.stringify(arr));
      }
      
    }

    infoBox.style.animationName = (!checkAvailable).toString();
    infoBox.textContent = textBox.value.toString()+ (!checkAvailable ? ' added.' : ' already exists.');
    textBox.value = ''; 
    // it should be completed for saving data
  }

  setTimeout(() => {
    infoBox.style.display='none'; 
  },3000);
}

 
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


