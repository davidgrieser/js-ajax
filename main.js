function myFetch(url) {
}

document.querySelector('#fetch').addEventListener('click', () => {
    document.querySelector('#output').innerHTML = "";
    document.querySelector('#output').style.color = "";
    const url = `https://api.github.com/users/${document.querySelector('#username').value}`;
    let getGithubPromise = fetch(url)
    getGithubPromise.then((data) => {
        console.log(getGithubPromise);
        console.log(data)
            return data.json();
        })
        .then((json) => {
            document.querySelector('#output').innerHTML = JSON.stringify(json) ;
        })
        .catch((errorResponse) => {
            document.querySelector('#output').innerHTML = "Fetch Failed";
            document.querySelector('#output').style.color = "red";
            console.error(errorResponse);
        })
})