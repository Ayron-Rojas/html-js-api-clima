//obje: leer el api de rick and morty
fetch('https://rickandmortyapi.com/api/character/826')
    .then(response => response.json())
    .then(data => {console.log(data.image)})

    const random = Math.floor(Math.random)
