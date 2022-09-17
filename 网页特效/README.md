# 网页特效

```
立即执行函数    不需要调用 立马就能执行
(function() {})()       (function() {}())
独立创建一个作用域 
```

### 元素偏移量

#### offset 系列
|      |      |
| ---- | ---- |
|element.offsetParent|     返回作为该元素带有定位的父级元素   如果父级都没有定位则返回body |
|element.offsetTop |       返回元素相对带有定位父元素上方的偏移   如果父亲没有定位以body为准|
|element.offsetLeft  |     返回元素相对带有定位父元素左边框的偏移 |
|element.offsetWidth   |   返回自身包括padding、边框、内容区的宽度，返回数值不带单位 |
|element.offsetHeight  |   返回自身包括padding、边框、内容区的高度，返回数值不带单位|
|window.pageXOffset   |    页面被卷去左侧距离|
|window.pageYOffest    |   页面被卷去头部距离 |

|  offset      |     style    |
| ---- | ---- |                                          
|offset可以得到任意样式表中的样式值   |                  style只能得到行内样式表中的样式值   |
|offset系列获得的数值是没有单位的 |                      stylewidth获得的是带有单位的字符串 |
|offsetWidth包含padding+border+width |                 stylewidth获得不包含padding和border的值 | 
|offsetWidth等属性是只读属性，只能获取不能赋值  |         stylewidth是可读写属性，可以获取也可以赋值|          

所以，我们想要获取元素大小位置，用offset更合适       所以，我们想要给元素更改值，则需要用style改变     

### client 系列

scroll翻译过来就是滚动的，我们使用scroll系列的相关属性可以动态的得到该元素的大小、滚动距离等。
|      |      |
| ---- | ---- |
|element.scrollTop |      返回被卷去的上侧距离，返回数值不带单位  通常再有滚动条时使用|
|element.scrollLeft    |  返回被卷去的左侧距离，返回数值不带单位 |
|element.scrollWidth|     返回自身实际的宽度，不含边框，返回数值不带单位  实际宽度是指如果内容超出盒子包括超出的部分|
|element.scrollHeight |   返回自身实际的高度，不含边框，返回数值不带单位|

mouseover鼠标经过自身盒子会触发，经过子盒子还会触发。mouseenter只会经过自身盒子触发 
mouseenter  mouseleave不会冒泡