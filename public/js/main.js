var socket = io('http://localhost:3000');

socket.on('connect', function(){
  setTitle('Hello human!')
})

socket.on('disconnect', function(){
  setTitle('DISCONNECTED!!! BYE!!!')
})

socket.on('message', function(message){
  printMessage(message)
})

document.forms[0].onsubmit = function(){
  var input = document.getElementById('message');
  socket.emit('chat', input.value)
  input.value = '';
}

function setTitle(title){
  document.querySelector('h1').innerHTML = title;
}

function printMessage(message){
  var p = document.createElement('p');
  p.innerText = message;
  document.querySelector('div.messages').appendChild(p);
}
