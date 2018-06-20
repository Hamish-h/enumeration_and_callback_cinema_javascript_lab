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
  const result = this.films.find((film)=> {
    return film.title === title;
  })
  return result;
};


Cinema.prototype.listOfTitles = function() {
 const result = this.films.map((film) =>{
   return film.title;
 })
 return result;
}
module.exports = Cinema;
