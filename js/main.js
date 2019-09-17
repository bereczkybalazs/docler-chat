var userNameInput = document.querySelector('.userName');
var messageListContainer = document.querySelector('.messageList');
var messageInput = document.querySelector('.messageInput');
var submitButton = document.querySelector('.submitButton');

var stateManager = new StateManager();
var messageListHandler = new MessageListHandler(messageListContainer, stateManager);
var chatHandler = new ChatHandler('http://35.157.80.184:8080/', function (message) {
    messageListHandler.addMessage(message);
});

new UserHandler(userNameInput, stateManager);
new MessageHandler(messageInput, submitButton, chatHandler, stateManager);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('../sw_cached_site.js');
    })
}