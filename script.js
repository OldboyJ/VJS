let list = document.getElementById("myList");
console.log(list);
let item = document.createElement("LI");
list.appendChild(item);
item.innerHTML = 'Hello World';
let form = document.createElement("FORM");
form.action = "/posts";
form.method = "GET";

console.log(form);
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      console.log('data', data);
    })
