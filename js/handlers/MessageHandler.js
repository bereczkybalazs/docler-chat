var MessageHandler = function (input, submitButton, chatHandler, stateHandler) {
    this.message = '';
    this.chatHandler = chatHandler;
    this.stateHandler = stateHandler;
    this.input = input;

    var that = this;

    this.input.addEventListener('keyup', function (e) {
        if (e.which === 13) {
            that.submit();
        }
        that.message = e.target.value;
    });

    submitButton.addEventListener('click', function () {
        that.submit();
    });

};

MessageHandler.prototype.submit = function () {
    this.chatHandler.send(this.message, this.stateHandler.getState().user);
    this.clearMessage();
};

MessageHandler.prototype.clearMessage = function () {
    this.message = '';
    this.input.value = '';
};