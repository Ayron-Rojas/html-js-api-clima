let ciudad = 'barinas'
fetch(`https://goweather.herokuapp.com/weather/${ciudad}`)
    .then(res=> res.json())
    .then(data => {
        console.log('la temperatura de: '+ciudad+' es de: '+data.temperature)
        console.log('la velocidad del viento es de: '+data.wind)
    });