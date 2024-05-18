import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 HOLA MUNDO
`
console.log("Hola mundo");
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
