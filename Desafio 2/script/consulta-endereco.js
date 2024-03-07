async function getAdressByResult() {
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        console.log(data);
        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('Localidade').value = data.localidade + '/' + data.uf;
    } catch (error) {    
        alert(error.message);
    }

        const lat = document.getElementById('lat').value;
        const long = document.getElementById('long').value;
        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature&hourly`);
            const data = await response.json();
            console.log(data);
            document.getElementById('resultWeather').value = data.hourly.temperature[0] + 'Cº';
            
        } catch (error) {    
            alert(error.message);
        }

    
}

