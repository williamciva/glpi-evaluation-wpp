chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostSuffix: '.helpdesk.baspan.com.br', pathEquals: '/front/ticket.form.php' }
          })
        ],
        actions: [new chrome.declarativeContent.RequestContentScript({ js: ["content.js"] })]
      },
    ]);
  });

  chrome.action.setBadgeText({
    text: "on",
  });
});