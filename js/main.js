var userNameInput = document.querySelector('.userName');
var messageListContainer = document.querySelector('.messageList');
var messageInput = document.querySelector('.messageInput');
var submitButton = document.querySelector('.submitButton');

var userHandler = new UserHandler(userNameInput);
var messageListHandler = new MessageListHandler(messageListContainer, userHandler);
var chatHandler = new ChatHandler('http://35.157.80.184:8080/', function (message) {
    messageListHandler.addMessage(message);
});

new MessageHandler(messageInput, submitButton, chatHandler, userHandler);
