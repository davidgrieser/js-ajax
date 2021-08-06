function myFetch(url) {
    return new Promise((resolve, reject) => {
        let fetchPromise = fetch(url);
        fetchPromise.then((response) => {
            if(response.status < 400) {
                resolve(response);
            } else {
                reject(response);
            }
        })
    });
}
document.querySelector('#fetch').addEventListener('click', () => {
    document.querySelector('#output').innerHTML = "";
    document.querySelector('#output').style.color = "";
    let getGithubPromise = myFetch(`https://api.github.com/users/${document.querySelector('#username').value}`)
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