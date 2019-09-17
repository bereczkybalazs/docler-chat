var StateManager = function () {
    this.state = {
        user: 'Guest',
        messages: []
    }
};

StateManager.prototype.setState = function (state) {
    this.state = state;
};

StateManager.prototype.getState = function () {
    return this.state;
};