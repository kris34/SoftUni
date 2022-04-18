function movies(input) {
  let obj = {};
  let movieList = [];

  for (let element of input) {
    if (element.includes("addMovie ")) {
      let movieName = element.split("addMovie ")[1];
      movieList.push({ name: movieName });
    } else if (element.includes(" directedBy ")) {
      let tokens = element.split(" directedBy ");
      let movieName = tokens[0];
      let director = tokens[1];
      let movie = movieList.find((movieObj) => movieObj.name === movieName);
      if (movie) {
        movie.director = director;
      }
    } else if (element.includes(" onDate ")) {
      let tokens = element.split(" onDate ");
      let movieName = tokens[0];
      let date = tokens[1];
      let movie = movieList.find((movieObj) => movieObj.name === movieName);
      if (movie) {
        movie.date = date;
      }
    }
  }

 for(let element of movieList){
   if(element.name && element.director && element.date){
     console.log(JSON.stringify(element));
   }
 }

 

  
}
movies([
  'addMovie The Avengers',
  'addMovie Superman',
  'The Avengers directedBy Anthony Russo',
  'The Avengers onDate 30.07.2010',
  'Captain America onDate 30.07.2010',
  'Captain America directedBy Joe Russo'
  ]);
