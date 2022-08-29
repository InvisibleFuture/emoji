import './style.css'
import javascriptLogo from './javascript.svg'
import Emoji from './emoji.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button">click here</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

const element = document.querySelector('#counter')
const emoji = new Emoji({
  callback: (data) => {
    console.log(data)
  }
})

element.addEventListener('click', () => {
  emoji.show()
})

emoji.show()