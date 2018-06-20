const Cinema = function (films) {
  this.films = films;
};

// films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];

Cinema.prototype.findByGenre = function (genre){
  const foundFilms = [];
  for (const film of this.films){
    if (film.genre === genre){
      foundFilms.push(film);
    }
  }
  return foundFilms;
}

Cinema.prototype.totalFilmLength = function (){
  let total = 0;

  this.films.forEach((film) => {
    total += film.length;
  })
  return total;
}


Cinema.prototype.findByFilmTitle = function(title){
  const film.title = this.films.map((film) =>{
    return film;
  });
}

module.exports = Cinema;
