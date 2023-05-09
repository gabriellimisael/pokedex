const ofsset = 0
const limit = 10

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`0

fetch(url)
        .then( (response) => response.json())
        .then ( (jsonBody) => console.log(jsonBody))