const database = {
actors: [
 { id: 1,
  name: "Cindy Lou"} ,
  { id: 2,
    name: "The Grinch"},
    { id: 3,
      name: "Santa Claus"},
      { id: 4,
        name: "Rudolph"},
        { id: 5,
          name: "Little Elf"}

], genres: [
  {id: 1,
    genre: "Thriller"
  },  {id: 2,
    genre: "Comedy"
  },
  {id: 3,
    genre: "Drama"
  },
  {id: 2,
    genre: "Documentary"
  },
  {id: 4,
    genre: "Thriller"
  }, 
  {id: 5,
    genre: "Romance"
  }
], shows: [
  {
    id: 1,
    name: "Home Alone"
  }, {
    id: 2,
    name: "The Grinch Stole Christmas"
  }, {
    id: 3,
    name: "Elf"
  },
  {
    id: 4,
    name: "Jack Frost"
  }, {
    id: 5,
    name: "A Christmas Story"
  }
]
}

export const getShows = () => {
  return database.shows.map(show => ({...show}))
}

export const getGenres = () => {
  return database.genres.map(genre => ({...genre}))
}

export const getActors = () => {
  return database.actors.map(actor => ({...actor}))
}
