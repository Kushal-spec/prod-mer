// contentScript.js

// const parseGoogleSearch = () => {
//     const query = new URLSearchParams(window.location.search).get('q');
//     if (query) {
//       const searchResults = document.querySelectorAll('div.g');
//       let movieTitle = "";
//       let movieDetected = false;
//       console.log("Query Results==>",query);
      
//       searchResults.forEach(result => {
//         const titleElement = result.querySelector('h3');
//         if (titleElement && titleElement.innerText.toLowerCase().includes('movie')) {
//           movieTitle = titleElement.innerText;
//         }
//       });
  
//       if (movieTitle) {
//         console.log('Movie detected in content script:', movieTitle);
//         chrome.runtime.sendMessage({ action: 'movieDetected', movieTitle });
//       }

//       if (movieDetected) {
//         chrome.runtime.sendMessage({ action: 'openPopup' });
//       }
//     }
//   };


// const parseGoogleSearch = () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const query = urlParams.get('q'); // Get the 'q' parameter from the URL, which contains the search query
//   return query;
// };

// if (window.location.href.includes('google.com/search')) {
//   const searchQuery = parseGoogleSearch();
//   if (searchQuery) {
//     // Send the search query to the background script or store it directly
//     chrome.runtime.sendMessage({ action: 'storeSearchQuery', query: searchQuery });
//     console.log("Qurey",searchQuery);
    
//   }
// }


// contentScript.js

const extractMovieTitle = (query: string) => {
  // You can customize this function to better extract just the movie title
  const movieKeywords = ["movie"];
  let movieTitle = query;

  movieKeywords.forEach((keyword) => {
    const index = movieTitle.toLowerCase().indexOf(keyword);
    if (index !== -1) {
      movieTitle = movieTitle.slice(0, index).trim();
    }
  });

  return movieTitle;
};

const parseGoogleSearch = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q'); // Get the 'q' parameter from the URL, which contains the search query
  return query;
};

if (window.location.href.includes('google.com/search')) {
  const searchQuery = parseGoogleSearch();
  if (searchQuery) {
    const movieTitle = extractMovieTitle(searchQuery);
    // Send the extracted movie title to the background script or store it directly
    chrome.runtime.sendMessage({ action: 'storeMovieTitle', title: movieTitle });
  }
}

  
  if (window.location.href.includes('google.com/search') && document.readyState === 'complete') {
    parseGoogleSearch();
  } else {
    window.addEventListener('load', parseGoogleSearch);
  }
  

