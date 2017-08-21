
// CONTACTS FORM
var contactForm = document.createElement('FORM');
contactForm.id = 'contactAdd';
contactForm.name = 'form';
contactForm.method = 'POST';
contactForm.action = 'https://thecontactsdb.herokuapp.com/contacts';
// Image input
pictureInput = document.createElement('INPUT');
pictureInput.type = 'URL';
pictureInput.value = 'image url';
pictureInput.name = 'picture';
contactForm.appendChild(pictureInput);
// Name input
nameInput = document.createElement('INPUT');
nameInput.type = 'TEXT';
nameInput.value = 'name';
nameInput.name = 'name';
contactForm.appendChild(nameInput);
// Gender input
genderInput = document.createElement('INPUT');
genderInput.type = 'TEXT';
genderInput.value = 'gender';
genderInput.name = 'gender';
contactForm.appendChild(genderInput);
// Company input
companyInput = document.createElement('INPUT');
companyInput.type = 'TEXT';
companyInput.value = 'company';
companyInput.name = 'company';
contactForm.appendChild(companyInput);

addButton = document.createElement('BUTTON');
addButton.type = 'SUBMIT';
addButton.innerHTML = 'Submit';
contactForm.appendChild(addButton);

var newContact = document.getElementById('contactAdd');
contactForm.onSubmit = function(event) {
  event.preventDefault();
  console.log(newContact.name);
}

document.body.appendChild(contactForm);



fetch('https://thecontactsdb.herokuapp.com/contacts')
   .then(function(response){
     if (response.status !== 200) {
       console.log('Looks like there was a problem. Status Code: ' +  response.status);
       return;
     }
     response.json().then(function(data) {
       console.log(data);
       data.forEach(function(item, index, arr) {
         var ul = document.createElement('UL');
         var pictureLi = document.createElement('img');
         var nameLi = document.createElement('LI');
         var genderLi = document.createElement('LI');
         var companyLi = document.createElement('LI');

         pictureLi.innerHTML = item.picture;
         nameLi.innerHTML = item.name;
         genderLi.innerHTML = item.gender;
         companyLi.innerHTML = item.company;
         ul.appendChild(pictureLi);
         ul.appendChild(nameLi);
         ul.appendChild(genderLi);
         ul.appendChild(companyLi);
         document.body.appendChild(ul);
       })
     })
   }
 )


// let ul = document.createElement("UL");
// console.log(ul);
// ul.setAttribute("id", "myList");
// // let list = document.getElementById("myList");
// let listItems = document.createElement("LI");
// ul.appendChild(listItems);
// // listItems.innerHTML = 'Hello World';
// document.body.appendChild(ul);


// let list = document.getElementById("myList");
// console.log(list);
// let item = document.createElement("LI");
// list.appendChild(item);
// item.innerHTML = 'Hello World';

// let form = document.createElement("FORM");
// form.action = "https://thecontactsdb.herokuapp.com/contacts";
// form.method = "GET";
//
// console.log(form);
//
// let contacts = Array.from(data);
//     listItems.appendChild(contacts);
