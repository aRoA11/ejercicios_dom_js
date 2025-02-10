// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
let lista = document.createElement('ul')
for (const album of albums) {
  let uwu = document.createElement('li')
  uwu.textContent = album
  lista.appendChild(uwu)
}
document.body.appendChild(lista)
