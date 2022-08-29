import './style.css'
import Emoji from './emoji.js'

document.querySelector('#app').innerHTML = `
  <div>
    <textarea id="textaret">🥳hello world! </textarea>
    <div class="card">
      <button id="counter" type="button">click here</button>
    </div>
    <p class="read-the-docs">
      Click the button to test inserting emoji
    </p>
  </div>
`

const emoji = new Emoji({
  input: document.querySelector('#textaret'),
  button: document.querySelector('#counter'),
  callback: (data) => {
    console.log(data)
  }
})

//document.querySelector('#counter').addEventListener('click', () => {
//  emoji.show()
//})

//emoji.show()
