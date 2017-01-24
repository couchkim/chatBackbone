Backbone.sync = function (method, model) {
    // model
    if (method === 'create' || method === 'update') {

        let request = new XMLHttpRequest();
        request.open('POST', 'http://api.queencityiron.com/chats');
        // request.addEventListener('load', function () {
        // model.trigger('change');
        // }

        let message = {
            name: model.get('name'),
            text: model.get('text'),
        };


        request.send(JSON.stringify(message));

    };

    // collection
    if (method === 'read') {

        let request = new XMLHttpRequest();
        request.open('GET', 'http://api.queencityiron.com/chats');
        request.addEventListener('load', function () {

            let response = JSON.parse(request.responseText);

            for (let i = 0; i < reponse.chats.length; i++);

            let message = new ChatModel;
            model.add(message);
            model.set('name', response.chats.from[i]);
            model.set('message', response.chats.message[i]);
            model.trigger('change');

        });
        request.send();
    }

};

module.exports = Backbone.Model.extend({
    defaults: {
        name: [],
        message: [],

    },

    getNew: function () {

        this.fetch();

    },

    sendNew: function (value1, value2) {

        this.set('name', value1);
        this.set('message', value2);
        this.save();
        // newEvent.save();
    },

})



