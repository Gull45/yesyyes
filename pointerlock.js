export function enablePointerLock(element = document.body) {
  element.addEventListener("click", () => {
    element.requestPointerLock();
  });
}
