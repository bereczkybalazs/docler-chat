var UserHandler = function (input, stateManager) {
    input.value = stateManager.getState().user;
    input.addEventListener('keyup', function (e) {
        stateManager.setState({...stateManager.getState(), user: e.target.value});
    })
};
