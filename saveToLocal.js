function toggle() {
  infoBox.style.display = 'block';
  
  if(!textBox.value) {
    infoBox.style.animationName = 'false';
   }
  else {
    // localStorage.setItem('testObject', 'örnek');
    infoBox.style.animationName = 'true';
    var retrievedObject = localStorage.getItem('test');
    console.log(retrievedObject);
    // it should be completed for saving data
  }
  setTimeout(() => {
    infoBox.style.display='none'; 
  },4000)
}

const button = document.querySelector('.btn');
const infoBox = document.querySelector('.error');
const textBox = document.querySelector('.textBox');
button.addEventListener("click", () => {
  toggle();
});
