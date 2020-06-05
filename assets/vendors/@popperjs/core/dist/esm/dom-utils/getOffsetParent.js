import getWindow from "./getWindow.js";
import getNodeName from "./getNodeName.js";
import getComputedStyle from "./getComputedStyle.js";
import { isHTMLElement } from "./instanceOf.js";
import isTableElement from "./isTableElement.js"; // https://stackoverflow.com/a/9851769/2059996

var isFirefox = function isFirefox() {
  return typeof window.InstallTrigger !== 'undefined';
};

function getTrueOffsetParent(element) {
  var offsetParent;

  if (!isHTMLElement(element) || !(offsetParent = element.offsetParent) || // https://github.com/popperjs/popper-core/issues/837
  isFirefox() && getComputedStyle(offsetParent).position === 'fixed') {
    return null;
  }

  return offsetParent;
}

export default function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element); // Find the nearest non-table offsetParent

  while (offsetParent && isTableElement(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || window;
}