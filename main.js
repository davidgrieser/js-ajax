// Wrap Fetch API so we get a fullfiled(resolve) OR rejected Promise
function fetchWithResolveReject(url) {
    // Should return a Promise
    return new Promise((resolve, reject) => {
        // Call fetch()
        fetch(url).then((response) => {
            if (response.ok) {
                // resolve if status.ok is true
                resolve(response)
            } else {
                // reject if status.ok is false
                reject(response)
            }
        })
    })
}

const handleError = (errorResponse) => {
    document.querySelector('#output').innerHTML = "Fetch Failed";
    document.querySelector('#output').style.color = "red";
    console.error(errorResponse);
}

document.querySelector('#fetch').addEventListener('click', () => {
    document.querySelector('#output').innerHTML = "";
    document.querySelector('#output').style.color = "";
    const url = `https://api.github.com/users/${document.querySelector('#username').value}`;
    let getGithubPromise = fetchWithResolveReject(url)
    getGithubPromise.then((response) => {
        console.log(getGithubPromise);
        console.log(response)
        return response.json();
    }).then((json) => {
        document.querySelector('#output').innerHTML = JSON.stringify(json);
    }).catch(handleError)
})