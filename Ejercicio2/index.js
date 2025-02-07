// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let nuevoDiv1 = document.createElement('div')
document.body.appendChild(nuevoDiv1)
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let nuevoDiv2 = document.createElement('div')
let nuevoP1 = document.createElement('p')
document.body.appendChild(nuevoDiv2)
nuevoDiv2.appendChild(nuevoP1)
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un	loop con javascript.
let nuevoDiv3 = document.createElement('div')
for (let i = 0; i < 6; i++) {
  let nuevoP2 = document.createElement('p')
  nuevoDiv3.appendChild(nuevoP2)
}
document.body.appendChild(nuevoDiv3)
// 2.4 Inserta dinamicamente con javascript en un html una p con el	texto 'Soy dinámico!'.
let nuevoP3 = document.createElement('p')
let textoP = document.createTextNode('Soy dinámico!')
nuevoP3.appendChild(textoP)
document.body.appendChild(nuevoP3)
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let textoH2 = document.createTextNode('Wubba Lubba dub dub')
let h2 = document.querySelector('.fn-insert-here')
h2.appendChild(textoH2)
// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
let lista = document.createElement('ul')
for (const app of apps) {
  let nuevoLi = document.createElement('li')
  nuevoLi.textContent = app
  lista.appendChild(nuevoLi)
}
document.body.appendChild(lista)
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let eliminame = document.querySelectorAll('.fn-remove-me')
eliminame.forEach((element) => element.remove())
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
let nuevoP5 = document.createElement('p')
let textoP3 = document.createTextNode('Voy en medio!')
nuevoP5.appendChild(textoP3)
let divs = document.querySelectorAll('div:not([class])')
let segundoDiv = divs[1]
segundoDiv.parentNode.insertBefore(nuevoP5, segundoDiv)
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase.fn-insert-here
let insertarTexto = document.querySelectorAll('div.fn-insert-here')
insertarTexto.forEach((element) => {
  let nuevoP4 = document.createElement('p')
  let textoP1 = document.createTextNode('Voy dentro!')
  nuevoP4.appendChild(textoP1)
  element.appendChild(nuevoP4)
})
