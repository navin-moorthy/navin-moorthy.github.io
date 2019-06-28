const BODY = "body";

export const getElements = selector => document.querySelectorAll(selector);
export const getElement = selector => document.querySelector(selector);
export const addClass = (element, className) =>
  element.classList.add(className);
export const removeClass = (element, className) =>
  element.classList.remove(className);
export const hasClass = (element, className) =>
  element.classList.contains(className);
export const getBody = () => getElement(BODY);
export const addClassToBody = className => addClass(getBody(), className);
export const removeClassFromBody = className =>
  removeClass(getBody(), className);
export const hasClassOfBody = className => hasClass(getBody(), className);
