// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'movieDetected' || message.action === 'openPopup') {
      console.log('Movie detected in background script:', message.movieTitle);
      chrome.storage.local.set({ latestMovie: message.movieTitle }, () => {
        console.log('Movie title saved in storage:', message.movieTitle);
      });
      chrome.action.openPopup();
    }

   
  });
  