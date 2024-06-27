chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'storeMovieTitle' && message.title) {
    chrome.storage.local.set({ latestMovieTitle: message.title }, () => {
      console.log('Stored movie title:', message.title);
    });
  }
});