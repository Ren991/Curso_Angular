import "./topics/01-basic-types" // importamos el modulo de ts
import "./topics/02-object-interface"
import "./topics/03-functions"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 HOLA MUNDO
`
console.log("Hola mundo");
