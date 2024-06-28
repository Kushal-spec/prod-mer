

// chrome.runtime.onMessage.addListener((message)=>{
//    console.log("RSM",message);
    
// })


chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ movieHistory: [] });
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url?.includes('google.com/search')) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js'],
      });
    }
  });



