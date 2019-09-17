var UserHandler = function (input, messageListHandler, stateManager) {
    input.value = stateManager.getState().user;
    input.addEventListener('keyup', function (e) {
        var user = stateManager.getState().user;
        var newUser = e.target.value;
        if (newUser.length > 2) {
            var messages = stateManager.getState().messages.map(function (message) {
                if (message.user === user) {
                    message.user = newUser;
                }
                return message;
            });
            stateManager.setState({
                ...stateManager.getState(),
                messages: messages,
                user: newUser
            });
            messageListHandler.render();
        }
    })
};
