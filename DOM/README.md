# DOM

### 获取元素

`document.getElementsById('id名')`  通过id获取元素
`document.getElementsByTagName('标签名')`  获取标签名元素
`document.getElementsByClassName('类名')`  通过类名获取元素  H5新增
返回值都为伪数组

`document.querySelector('选择器')`  根据指定选择器返回第一个元素对象   H5新增
`document.querySelectorAll('选择器')`  根据指定选择器返回第所有元素对象集合  返回值为伪数组   H5新增

`document.body`   获取body元素对象
`document.docmentElement`  获取html元素对象

### 事件

1、获取事件源  2、绑定事件   3、添加事件处理程序

### 操作元素

`document.innerText = '内容'`  修改元素里的内容  不识别html标签   去除空格换行
`document.innerHTML = '内容'`  识别html标签  使用多   保留空格和换行  普通盒子
这两个属性是可读写的 可以获取元素中的内容

#### 表单元素

input 表单里面的值是通过 value 来修改的  input.value
可以用 this 直接指向调用者

#### 样式属性操作

`element.style`   内联样式  少量修改  js中样式不能使用 -  采用驼峰命名
`Element.className`  类名样式操作   大量修改
js修改的样式 产生的是行内样式表 css权重较高

**排他思想 **先排除其他人 将所有的元素设置样式一样 再单独设置自己的样式

#### 获取属性值

`element.属性`     获取内置属性值  元素本身自带的属性
`element.getAttribute('属性')`     可以获得自定义属性 程序员自定义的属性 `<div index='1'></div>`

#### 设置属性值

`element.属性 = '值'`
`element.setAttribute('属性','值')`      主要针对自定义属性

#### ！！类名 

`.className`
`.getAttribute('class')  .setAttribute('class','值')`

#### 移除属性

`.removeAttribute('属性')`

#### 自定义属性规范

自定义属性必须以 data- 作为开头并赋值

```html
<div data-index='1'></div>
```

#### 获取自定义属性值  H5新增

`element.dataset`    dataset是一个集合 里边存放了所有以data开头的自定义属性
`div.dataset.index`     打印输出的值为 1

如果自定义属性中有多个 - 连接的单词 获取是采用驼峰命名法

```html
<div data-list-name='pig'></div>
```

div.dataset.listName         打印输出的值为 pig

#### 利用节点层级关系获取元素

主要利用父子兄节点获取  逻辑性强 兼容性差

nodeType 节点类型    nodeName 节点名称     nodeValue 节点值

元素节点 nodeType 值为 1    属性节点 nodeType 值为 2     文本（文字、空格、换行等）节点 nodeType 值为 3
实际操作过程中主要操作的是元素节点

##### 获取父节点

`节点.parentNode`     得到的是距离自己最近的父级节点

##### 获取子节点 

- `节点.chileNodes`     得到是一个集合  所有节点 元素节点 文本节点  一般不推荐使用
- `节点.children`       得到的是元素节点      开发中常用
- `节点.children[0]`    第一个子元素节点
- `节点.children[节点.children.lenght - 1]`     最后一个子元素节点
- `节点.firstChild`     得到第一个子节点   不管是文本节点还是元素节点

- `节点.lastChild`      得到最后一个节点   不管是文本节点还是元素节点
- `节点.firstElementChild`   得到第一个元素节点
- `节点.lastElementChild`    得到最后一个元素节点  这两个有兼容性问题

##### 获取兄弟节点

- `节点.nextSibling`        返回下一个兄弟节点  包括所有节点
- `节点.previousSibling`    返回上一个兄弟节点  包括所有节点
- `节点.nextElementSibling`      返回下一个兄弟元素节点
- `节点.previousElementSibling`     返回上一个兄弟元素节点

#### 节点操作

##### 创建节点  

`document.createElement('元素)`

##### 添加节点

 `节点.appendChild(创建的节点)`     追加 在最后添加
 `节点.insertBefor(创建的节点，子节点)`    在最前面加

##### 删除节点

`节点.removeChild(子节点)`    删除一个子节点

##### 复制节点  

`节点.cloneNode()`    复制后需要添加节点      

 如果没有参数或者为 false 则为浅拷贝 只复制节点本身 不克隆里面的子节点参数为 true 则为深拷贝

```
1.document.write 是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘
2.innerHTML是将内容写入某个DOM节点，不会导致页面全部重绘
3.innerHTML创建多个元素效率更高(不要拼接字符串，采取数组形式拼接)，结构稍微复杂
4.createElement()创建多个元素效率稍低一点点，但是结构更清晰
```

### 事件高级

#### 注册事件

##### 传统注册方式

  利用on开头的事件onclick

```
  <button onclick=“alert(hi~')”></button> 
   btn.onclick=function(){}
```

  特点:注册事件的唯一性   同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数

##### 方法监听注册方式 

w3c标准 推荐方式

 addEventListener()它是一个方法
IE9之前的IE不支持此方法，可使用attachEvent()代替特点:同一个元素同一个事件可以注册多个监听器按注册顺序依次执行

```js
eventTarget.addEventlistener(type, listener[,useCapture])
```

eventTarget.addEventListener()方法将指定的监听器注册到eventTarget(目标对象)上，当该对象触发指定的事件时，就会执行事件处理函数。
该方法接收三个参数:

- type:事件类型字符串，比如click、mouseover，注意这里不要带on
- listener:事件处理函数，事件发生时，会调用该监听函数
- useCapture:可选参数，是一个布尔值，默认是false。  true为捕获事件 false为冒泡事件

**可以添加多个事件**

#### 删除事件

##### 传统方式  

`eventTarget.onclick='none'`

##### 监听方式

`eventTarget.removeEventListener(type,listener[useCapture]);`

```js
divs[1].addEventListener('click'，fn)// 里面的fn 不需要调用加小括号
function fn() {
   alert(22);
   divs[1].removeEventListener('click', fn)
 } 
```

### e.target    得到点击的对象

`e.stopPropagation()`     阻止冒泡

`e.preventDefault()`      阻止默认行为    

contextmenu 禁用右键菜单

```js
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
```

selectstart 禁止选中文字

```js
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});
```

### MouseEvent  鼠标事件对象

- e.clientX   返回鼠标相对于浏览器窗口可视区的X坐标
- e.clientY   返回鼠标相对于浏览器窗口可视区的Y坐标
- e.pageX     返回鼠标相对于文档页面的X坐标IE9+支持
- e.pageY     返回鼠标相对于文档页面的Y坐标IE9+支持
- e.screenX   返回鼠标相对于电脑屏幕的X坐标
- e.screenY   返回鼠标相对于电脑屏幕的Y坐标

### keyboardEvent    键盘事件对象

- onkeyup     某个键盘按键被松开时触发
- onkeydown   某个键盘按键被按下时触发
- onkeypress  某个键盘按键被按下时触发 但是它不识别功能键 比如 ctrl shift 箭头等

onkeydown  onkeypress 同时存在时 onkeydown 先执行

onkeyup  onkeydown  不区分大小写

e.key   返回按键
e.keycode      返回按键的ASCII码值  