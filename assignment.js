const ol = document.querySelector("ol");
const movies = [
    {
       name:"Apocalypse Now",
       year: 1979,
       director: "Francis Ford Coppola",
       picture:"https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"

    },

    {
        name: "A Clockwork Orange",
        year: 1972,
        director: "Stanley Kubrick",
        picture:"https://upload.wikimedia.org/wikipedia/en/7/73/A_Clockwork_Orange_%281971%29.png"
          
    },

    {
        name: "Blade Runner",
        year: 1982,
        director:"Ridley Scott",
        picture:"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
          
    },

    {
        name:"Alien",
        year: 1979,    
        director:"Ridley Scott",
        picture:"https://static.rogerebert.com/uploads/movie/movie_poster/alien-1979/large_uU9R1byS3USozpzWJ5oz7YAkXyk.jpg"

          
    },

    {
        name: "Hellraiser",
        year: 1987,
        director: "Clive Barker",
        picture:"https://i.pinimg.com/originals/2e/4b/62/2e4b626e5f5392c2a0e963b54b9416fc.jpg"
          
    },


];

const template = movies.map(movie => `
    <li>
        <p>Name: ${movie.name}</p>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <p>Picture: ${movie.picture}</p>
    </li>
`);
ol.innerHTML = template.join('');




