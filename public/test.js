console.log('test file loaded');
const aboutComponent = document.getElementById('about');

fetch('/about.html')
.then(res=>res.text())
.then(data=>aboutComponent.innerHTML = data);