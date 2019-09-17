var MessageListHandler = function (messageListContainer, stateManager) {
    this.messageListContainer = messageListContainer;
    this.stateManager = stateManager;
};

MessageListHandler.prototype.addMessage = function (message) {

    this.stateManager.setState({
        ...this.stateManager.getState(),
        messages: this.stateManager.getState().messages.concat([message])
    });
    this.render();
};

MessageListHandler.prototype.render = function () {
    this.messageListContainer.innerHTML = '';
    var messages = this.stateManager.getState().messages;
    for (var i = 0; i < messages.length; i++) {

        var content = document.createElement('span');
        content.innerHTML = messages[i].message;
        content.className = 'message__content';

        var user = document.createElement('span');
        user.className = 'message__user';
        user.innerHTML = messages[i].user;

        var message = document.createElement('div');
        message.className = this.getMessageClassName(messages[i].user);
        message.appendChild(user);
        message.appendChild(content);

        this.messageListContainer.appendChild(message);
        this.messageListContainer.scrollTop = this.messageListContainer.scrollHeight;
    }
};

MessageListHandler.prototype.getMessageClassName = function (user) {
    return user === this.stateManager.getState().user ? 'message' : 'message message--partner'
};