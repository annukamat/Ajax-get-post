let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
  const xhr = new XMLHttpRequest();

  //open the object
  //   xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
  //   console.log('btn clicked');

  //POST method:
  xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
  xhr.getResponseHeader('content-type', 'application/Json');
  //what to do onprogress-
  xhr.onprogress = function () {
    console.log('loding...');
  };

  //what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
    } else {
      console.error('an error has occured!!!');
    }
  };

  //send the request
  params = `{"name":"teastaf","salary":"123","age":"23"}`;
  xhr.send(params);
  console.log('we are done now!!!');
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', anyFunc);

function anyFunc() {
  console.log('you have clicked the pop btn');

  //initialise the object
  const xhr = new XMLHttpRequest();

  //open the object
  xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

  //what do yo do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);
      console.log(data);
      let list = document.getElementById('list');
      str = '';

      data.data.forEach((key, value) => {
        str += `<li>${key.employee_name} </li>`;
      });
      list.innerHTML = str;
      //   for (data in obj) {
      //     str += `<li>${data.employee_name} </li>`;
      //   }
      //   list.innerHTML = str;
      // } else {
      //   console.log('some error has occured');
    }
  };
  //send the request
  xhr.send();
  console.log('We are done fetching employees!');
}
