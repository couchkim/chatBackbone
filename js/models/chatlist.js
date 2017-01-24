let ChatModel = require('./chat'); 

module.exports = Backbone.Collection.extend({
  
    model: ChatModel,

    createNew: function (newName) {
        
        let newChat = new ChatModel();
        newChat.set('name', newName);
        newChat.set('message', newMessage);

        this.add(newChat);
    },
});

