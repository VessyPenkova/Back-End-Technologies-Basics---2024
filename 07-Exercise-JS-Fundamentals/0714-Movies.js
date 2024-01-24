function manageMovies(input) {
    const movies = [];
  
    for (const line of input) {
      const [command, ...params] = line.split(' ');
  
      if (command === 'addMovie') {
        const movieName = params.join(' ');
        movies.push({ name: movieName });
      } else {
        const movieIndex = movies.findIndex(movie => movie.name === command);
  
        if (movieIndex !== -1) {
          if (params.includes('directedBy')) {
            const director = params.slice(params.indexOf('directedBy') + 1).join(' ');
            movies[movieIndex].director = director;
          } else if (params.includes('onDate')) {
            const date = params.slice(params.indexOf('onDate') + 1).join(' ');
            movies[movieIndex].date = date;
          }
        }
      }
    }
  
    const filteredMovies = movies.filter(movie => movie.name && movie.director && movie.date);
    filteredMovies.forEach(movie => {
      console.log(JSON.stringify(movie));
    });
  }