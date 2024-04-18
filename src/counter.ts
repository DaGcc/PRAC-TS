export function setupCounter(element: HTMLButtonElement) {
  element.addEventListener('mouseenter', () => setCounter(counter + 1))
  let counter = 0
                //(count?: number)
  let setCounter = (count: number  = 2) => {
    counter = count //counter = count ?? 2 ; 
    element.innerHTML = `count is ${counter}`
  }

  setCounter()  
}
