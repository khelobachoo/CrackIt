chrome.runtime.onInstalled.addListener(function() {
    // chrome.storage.sync.set({color: '#3aa757'}, function() {
    //   console.log('The color is green.');
    // });

    // var url = chrome.runtime.getURL('BCB.json');
    // fetch(url)
    // .then((response) => response.json()).then((json)=>
    // {   
    //     chrome.storage.local.set({"bcb": json}, function() {
    //         console.log('DATA retrived successfully');
    //     });
    // });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });

    

  });