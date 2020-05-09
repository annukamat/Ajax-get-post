console.log('hello there1');
let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
  const xhr = new XMLHttpRequest();

  //open the object
  xhr.open('GET', 'ajaxe.txt', true);
  console.log('btn clicked');

  //what to do onprogress-
  xhr.onprogress = function () {
    console.log('loding...');
  };

  //what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.error('an error has occured!!!');
    }
  };

  //send the request
  xhr.send();
}
