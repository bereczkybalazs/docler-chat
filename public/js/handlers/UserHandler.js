var UserHandler = function (input) {
    this.userName = 'Guest';
    var that = this;
    input.value = this.userName;
    input.addEventListener('keyup', function (e) {
        that.userName = e.target.value;
    })
};

UserHandler.prototype.getUserName = function () {
    return this.userName;
};