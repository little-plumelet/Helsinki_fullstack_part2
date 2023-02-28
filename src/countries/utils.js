export function debounce (fn, ms) {
  let id;

  return function (...args) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => fn.apply(this, args), ms);
  }
}