# emoji
Emoji 表情组件

- [x] 流畅的动画效果
- [x] 精确插入光标位置
- [x] 使用 Esc 快捷键关闭弹出
- [x] 提供回调函数以便于拓展操作
- [x] 调用时才初始化以兼容服务端渲染项目

### DEMO

![preview](https://github.com/InvisibleFuture/emoji/blob/main/public/demo.png?raw=true)

[Click to open demo](https://emoji.satori.love)


### Install

```bash
npm install satori-emoji --save
```

```javascript
import Emoji from 'satori-emoji'

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