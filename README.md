# emoji
Emoji 表情组件


### DEMO

[DEMO](https://emoji.satori.love)


### Install

```bash
npm install @InvisibleFuture/emoji --save
```

```javascript
import Emoji from '@InvisibleFuture/emoji'

const emoji = new Emoji({
  input: document.querySelector('#input') ,        // 绑定的输入框元素(非必选)
  button: document.querySelector('#button'),       // 绑定的开关按钮(非必选)
  callback: (data) => console.log('cilck:', data), // 选中 emoji 表情的回调函数(非必选)
})

// 打开 emoji 表情选择窗口
emoji.show()


// 关闭 emoji 表情选择窗口
emoji.hide()

```


### Dev

```bash
# clone
git clone git@github.com:InvisibleFuture/emoji.git
cd emoji

# install
npm install
npm run dev

# build
npm run build
npm preview

```