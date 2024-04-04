document.getElementById("noAuthorizationButton").addEventListener("click", function() {
    window.location.href = "https://matias.me/nsfw/";
});

document.getElementById("withAuthorizationButton").addEventListener("click", function() {
    var password = prompt("Enter password:");

    if (password === "osaki") {

        window.location.href = "https://matias.me/nsfw/";
    } else {

        alert("Incorrect password!");
    }
});