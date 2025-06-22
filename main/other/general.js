'use strict';
function create(tagname, innertext, parent) {
  let element = document.createElement(tagname)
  if (innertext) {
    element.innerHTML = innertext;
  }
  parent.appendChild(element)
  return element
}