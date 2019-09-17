var MessageListHandler = function (messageListContainer, userHandler) {
    this.messageListContainer = messageListContainer;
    this.userHandler = userHandler;
    this.messages = [];
};

MessageListHandler.prototype.addMessage = function (message) {
    this.messages.push(message);
    this.render();
};

MessageListHandler.prototype.render = function () {
    this.messageListContainer.innerHTML = '';
    for (var i = 0; i < this.messages.length; i++) {

        var content = document.createElement('span');
        content.innerHTML = this.messages[i].message;
        content.className = 'message__content';

        var user = document.createElement('span');
        user.className = 'message__user';
        user.innerHTML = this.messages[i].user;

        var message = document.createElement('div');
        message.className = this.getMessageClassName(this.messages[i].user);
        message.appendChild(user);
        message.appendChild(content);

        this.messageListContainer.appendChild(message);
    }
};

MessageListHandler.prototype.getMessageClassName = function (userName) {
    return userName === this.userHandler.getUserName() ? 'message' : 'message message--partner'
}