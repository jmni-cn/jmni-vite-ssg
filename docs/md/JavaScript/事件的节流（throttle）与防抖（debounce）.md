
### debounce函数
```JavaScript
// fn是我们需要包装的事件回调, delay是每次推迟执行的等待时间
function debounce(fn, delay) {
  // 定时器
  let timer = null
  // 将debounce处理结果当作函数返回
  return function () {
    // 保留调用时的this上下文
    let context = this
    // 保留调用时传入的参数
    let args = arguments
    // 每次事件被触发时，都去清除之前的旧定时器
    if(timer) {
        clearTimeout(timer)
    }
    // 设立新定时器
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

```



### throttle函数
```JavaScript
// fn是我们需要包装的事件回调, interval是时间间隔的阈值
function throttle(fn, interval) {
  // last为上一次触发回调的时间
  let last = 0
  // 将throttle处理结果当作函数返回
  return function () {
      // 保留调用时的this上下文
      let context = this
      // 保留调用时传入的参数
      let args = arguments
      // 记录本次触发回调的时间
      let now = +new Date()
      // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
      if (now - last >= interval) {
      // 如果时间间隔大于我们设定的时间间隔阈值，则执行回调
          last = now;
          fn.apply(context, args);
      }
    }
}

```



### 加强版 throttle 函数
为了避免弄巧成拙，我们需要借力 throttle 的思想，打造一个“有底线”的 debounce——等你可以，但我有我的原则：delay 时间内，我可以为你重新生成定时器；但只要delay的时间到了，我必须要给用户一个响应。
```JavaScript
// fn是我们需要包装的事件回调, delay是时间间隔的阈值
function throttle(fn, delay) {
  // last为上一次触发回调的时间, timer是定时器
  let last = 0, timer = null
  // 将throttle处理结果当作函数返回
  return function () { 
    // 保留调用时的this上下文
    let context = this
    // 保留调用时传入的参数
    let args = arguments
    // 记录本次触发回调的时间
    let now = +new Date()
    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last < delay) {
    // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
       clearTimeout(timer)
       timer = setTimeout(function () {
          last = now
          fn.apply(context, args)
        }, delay)
    } else {
        // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
        last = now
        fn.apply(context, args)
    }
  }
}

```
---
防抖跟节流，都有各自不同的应用场景

1) 防抖是，面对连续多次的触发，只响应一次。其中 delay 参数用来区分是否“连续触发”；
2) 节流是，只要有触发就可以响应，但不要太频繁。就像水龙头的水，可以一直流，但关小一点，使得单位时间内通过的水流小一点。其中 interval 参数用来控制响应的频率；
3) 加强版节流的作用仍然是节流，而不是防抖。利用 setTimeout，可以保证多一次的响应。

从 scroll 的效果来看，假设连续滚动了 109 秒，delay 或 interval 为 10 秒，那么，
1) 防抖响应了 1 次；
2) 节流响应了 11 次 (从第 0 秒开始响应，到第 100 秒响应第 11 次)；
3) 加强版节流，因为 setTimeout 的关系，响应了 12 次。对于最后的 9 秒的连续滚动，普通节流直接抛弃了，而加强版节流仍认为其有效。
---

在网上看到一个很形象的解释哈哈

> 防抖：技能的施法条，多次按会打断之前施法，只有最后一次才会被执行
> 节流：技能的cd，多次按也要等cd转好了才执行