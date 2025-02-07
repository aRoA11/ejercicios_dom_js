// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
let lista = document.createElement('ul')
for (const country of countries) {
  let pais = document.createElement('li')
  pais.textContent = country
  lista.appendChild(pais)
}
document.body.appendChild(lista)
// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let bye = document.querySelector('.fn-remove-me')
bye.remove()
// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos  en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
let otraLista = document.createElement('ul')
for (const car of cars) {
  let coches = document.createElement('li')
  coches.textContent = car
  otraLista.appendChild(coches)
}
let cochera = document.querySelector('[data-function="printHere"]')
cochera.appendChild(otraLista)
// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const lugares = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
const container = document.createElement('div')
document.body.appendChild(container)
for (const lugar of lugares) {
  let fotos = document.createElement('div')
  fotos.innerHTML = `<img src="${lugar.imgUrl}" alt="${lugar.title}">
 <h4>${lugar.title}</h4>`
  container.appendChild(fotos)
}
// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
let btn = document.createElement('button')
btn.textContent = 'Eliminar elemento'
btn.addEventListener('click', () => {
  const lastDiv = container.lastChild
  if (lastDiv.lastElementChild) {
    lastDiv.lastElementChild.remove()
  }
})
document.body.appendChild(btn)
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
let deleteDiv = document.createElement('button')
deleteDiv.textContent = 'Borrar Div'
deleteDiv.addEventListener('click', () => {
  const lastDiv = container.lastChild
  lastDiv.remove()
})
document.body.appendChild(deleteDiv)
