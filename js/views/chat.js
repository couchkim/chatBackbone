module.exports = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', this.render, this);
        this.model.on('add', this.render, this);
        setInterval(() => {
            this.model.fetch();
        }, 5000);
    },

    events: {
        'click #get': 'getMessage',
        'click #submit': 'sendMessage',
    },


    getMessage: function () {

        this.model.getNew();
    },

    sendMessage: function () {
        let who = this.el.querySelector("#who").value;
        let text = this.el.querySelector('#write').value;

        console.log(who);
        console.log(text);

        this.model.sendNew(who, text);
    },

    render: function () {
        console.log('working');

        this.el.querySelector('#listChats').innerHTML = '';

        let parent = this.el.querySelector('#listChats');
        let template = document.querySelector('#oneChat');

        for (let i = 0; i < model.name.length; i++) {
            let child = document.createElement('li');
            parent.appendChild(child);

            child.innerHTML = Mustache.render(template.innerHTML, {

                chatSender: model.name[i],
                chatMessage: model.message[i],

            });

        }
    },

