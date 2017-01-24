const ChatModel = require('./models.chat');
const ChatList = require('./models/chatlist');
const ChatView = require('./views/chat');

window.addEventListener('load', function (){
    
    const chat = new ChatList();
    
    
    let chatView = new ChatView({
        el: document.querySelector('body'),
        model: chatlist,
    })

    // view.render();
    
});



