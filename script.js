function generarNumeroAleatorio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 11); // Número entre 0 y 10
            resolve(randomNumber);
        }, 5000);
    });
}

document.getElementById('generateButton').addEventListener('click', () => {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').textContent = '';

    generarNumeroAleatorio()
        .then((number) => {
            document.getElementById('result').textContent = `Número generado: ${number}`;
        })
        .catch((error) => {
            document.getElementById('result').textContent = error;
        })
        .finally(() => {
            document.getElementById('loading').style.display = 'none';
        });
});

