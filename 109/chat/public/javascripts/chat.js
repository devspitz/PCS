'use strict';
//import $ from jquery;

(function () {
    const socketIO = io();
    let typing = false;
    const loginForm = document.getElementById('login');

    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        socketIO.emit('login', document.getElementById('name').value, res => {
            if (res) {
                console.error('error')
            } else {
                loginForm.style.display = 'none'
                const mc = document.getElementById('messagesContainer')
                mc.style.display = 'block';

                const messageDiv = document.getElementById('messages');
                socketIO.on('listing', chatters => {
                    chatters.forEach(chatter => {
                        messageDiv.append(`${chatter} is listening`);
                        console.log(chatter)
                    });
                });

                socketIO.on('message', msg => {
                    messageDiv.append(`${msg.user} said ${msg.msg}`)//rly add a div so yoju'll get a new line
                })
                socketIO.on('typingMessage', msg => {//hw its not blowing it away, because it forget, you have to kreep enviroment alive
                    if (typing) {
                        messageDiv.append(`${msg.user} ${msg.msg}`)
                    }//rly add a div so yoju'll get a new line
                })
                socketIO.on('info', msg => {
                    messageDiv.style.color = 'red';
                    messageDiv.append(msg)//rly add a div so yoju'll get a new line
                })

                const messageInput = document.getElementById('message');
                messageInput.addEventListener('click', () => {
                    typing = true;

                    socketIO.emit('typing', 'is typing');
                })
                document.getElementById('messageform').
                    addEventListener('submit', e => {
                        e.preventDefault();
                        typing = false;
                        socketIO.emit('message', messageInput.value);
                    });
            }
        });
    })
}());