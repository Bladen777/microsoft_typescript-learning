export function returnGreeting(greeting) {
    var greetingLength = getLength(greeting);
    console.log("The message from GreetingsLength_modules is ".concat(greeting, ". It is ").concat(greetingLength, " characters long."));
}
function getLength(message) {
    return message.length;
}
