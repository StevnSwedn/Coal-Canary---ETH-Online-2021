console.log('hello world');

// connect to Moralis server
Moralis.initialize("orvtlDDN2gcKSrYluWiI70yuRaYF0gtwQdCJqbKW");
Moralis.serverURL = "https://v3xniz9rj3mf.grandmoralis.com:2053/server";



login = async () => {
    await Moralis.authenticate().then(async function (user) {
        console.log('logged in');
        user.set("name", document.getElementById('user-username').value);
        user.set("email", document.getElementById('user-email').value);
        await user.save();
        window.location.href = "dashboard.html";
    })
}

document.querySelector('#btn-login').onclick = login;