const socket = io();

const template = {
  systemMessage: message => `<div class='information center'><span>${message}</span></div>`
  
}

socket.on('message', data => {
  if (data.name == 'system') {
    $('.view')[0].innerHTML += template.systemMessage(data.message);
  }
});

