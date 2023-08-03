const password = prompt("please enter a new password");
//password must be 6+ characters
if (password.length >= 6) {
    console.log("LONG ENOUGH PASSWORD!")

} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}
//password cannot include space
if (password.indexOf('') === -1) {
    console.log("Good job! No space!")
} else {
    console.log("Password cannot contain spaces!")
}