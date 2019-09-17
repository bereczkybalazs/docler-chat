var ChatHandler = function (host, onMessageReceivedCallback) {
    this.messageAction = 'message';
    this.socket = io(host);
    this.socket.on(this.messageAction, onMessageReceivedCallback);
};

ChatHandler.prototype.send = function (message, user) {
    this.socket.emit(this.messageAction,  { message: message, user: user });
};