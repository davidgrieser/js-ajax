document.querySelector('#fetch').addEventListener('click', () => {
    fetch('https://api.github.com/users/microsoft')
        .then((data) => {
            return data.json();
        }).then((json) => {
            document.querySelector('#output').innerHTML = JSON.stringify(json) ;
        });
})