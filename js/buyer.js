let h2 = document.getElementById('h2')
let h3 = document.getElementById('h3')


const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
localStorage.removeItem('name'); // Clear the localStorage
localStorage.removeItem('email'); // Clear the localStorage
h2.innerText = name
h3.innerText = email
