document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('interact-btn');
    const message = document.getElementById('message');

    button.addEventListener('click', function() {
        message.textContent = 'Hello! You clicked the button. This is JavaScript in action.';
    });
});
