# 移动端
### 触屏事件 touch
touchstart      手指触摸到一个DOM元素时触发
touchmove       手指在一个DOM元素上滑动时触发
touchend        手指从一个DOM元素上移开时触发
#### touch 事件对象
touches             正在触摸屏幕的所有手指的一个列表    如果侦听的是一个DOM元素与targetTouches一致
targetTouches       正在触摸当前DOM元素上的手指的一个列表
changedTouches      手指状态发生了改变的列表，从无到有，从有到无变化
e.preventDefault();     阻止默认行为
transittionend  监听过渡完成事件

### classList属性   

类名前不需要加.
该属性用于在元素中添加，移除及切换CSS类。
添加类:  element.classList.add('类名');
移除类:  element.classList.remove('类名');
切换类： element.classList.toggle('类名')

### 解决click延迟问题

1.禁用缩放。浏览器禁用默认的双击缩放行为并且去掉300ms的点击延迟。

```html
<meta name="viewport" content="user-scalable=no">
```

2.利用touch事件自己封装这个事件解决300ms延迟。

原理就是:

- 1.当我们手指触摸屏幕，记录当前触摸时间
- 2.当我们手指离开屏幕，用离开的时间减去触摸的时间
- 3.如果时间小于150ms，并且没有滑动过屏幕，那么我们就定义为点击

```js
 //封装tap，解决click300ms延时
      function tap(obj, callback) {
        var isMove = false;
        //记录触摸时候的时间变量
        var startTime = 0;
        obj.addEventListener('touchstart', function (e) {
          //记录触摸时间
          startTime = Date.now();
        });
        obj.addEventListener('touchmove', function (e) {
          //看看是否有滑动，有滑动算拖拽，不算点击
          isMove = true;
        });
        obi.addEventListener('touchend', function (e) {
          // 如果手指触摸和离开时间小于150ms算点击
          if (!isMove && Date.now() - startTime < 150) {
            //执行回调函数
            callback && callback();
          }
          // 取反重置
          isMove = false;
          startTime = 0;
        });
      }
      //调用
      tap(div, function () {
        // 执行代码
      });
```

3.使用插件。fastclick插件解决300ms延迟。

```js
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}
```

### 其他移动端常见插件

superslide:http://www.superslide2.com/
iscroll:https://github.com/cubiq/iscroll
zyMedia:https://github.com/ireaderlab/zyMedia