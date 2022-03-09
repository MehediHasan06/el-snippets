const targetNode = document.querySelector('.u-pos-rel.u-min-height-100 div[data-element="results-container"]');
const config = { attributes: false, childList: true, subtree: false };
const callback = function (mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes && mutation.addedNodes.length > 0) {
      console.log(mutation);
      crPLPcards.plpCardRevamp();
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);