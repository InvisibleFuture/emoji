import Emoji from './emoji.js'

var emoji = new Emoji({})

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => {
    setCounter(++counter)
    emoji.show()
  })
  setCounter(0)
}
