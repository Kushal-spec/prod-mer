const getapimoviedetails = async (title: string) => {
  const apiKey = 'fb42209d626116b8286ba5ce3df54d29';
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`);
  const data = await response.json();
  return data.results[0];
};

const textfromsearchbox = () => {
  const query = new URLSearchParams(window.location.search).get('q');
  if (!query) return;

  getapimoviedetails(query).then((movie) => {
    chrome.storage.local.set({ currentMovie: movie });

    chrome.storage.local.get(['movieHistory'], (result) => {
      const movieHistory = result.movieHistory || [];
      movieHistory.push(movie);
      chrome.storage.local.set({ movieHistory });
    });
  });
};

textfromsearchbox();