// contentScript.js

const parseGoogleSearch = () => {
    const query = new URLSearchParams(window.location.search).get('q');
    if (query) {
      const searchResults = document.querySelectorAll('div.g');
      let movieTitle = "";
      let movieDetected = false;
      searchResults.forEach(result => {
        const titleElement = result.querySelector('h3');
        if (titleElement && titleElement.innerText.toLowerCase().includes('movie')) {
          movieTitle = titleElement.innerText;
        }
      });
  
      if (movieTitle) {
        console.log('Movie detected in content script:', movieTitle);
        chrome.runtime.sendMessage({ action: 'movieDetected', movieTitle });
      }

      if (movieDetected) {
        chrome.runtime.sendMessage({ action: 'openPopup' });
      }
    }
  };
  
  if (window.location.href.includes('google.com/search') && document.readyState === 'complete') {
    parseGoogleSearch();
  } else {
    window.addEventListener('load', parseGoogleSearch);
  }
  