export function getUserName() {
  // Simula una llamada a una API real
  return fetch('/api/user')
    .then((res) => res.json())
    .then((data) => data.name);
}
