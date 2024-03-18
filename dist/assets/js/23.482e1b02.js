(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{308:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"浏览器常驻的线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器常驻的线程"}},[t._v("#")]),t._v(" 浏览器常驻的线程")]),t._v(" "),s("p",[t._v("js引擎线程（解释执行js代码、用户输入，网络请求）")]),t._v(" "),s("p",[t._v("GUI线程（绘制用户页面、与js主线程是互斥的）")]),t._v(" "),s("p",[t._v("http网络请求线程（处理用户的get、post等请求，等返回结果后将回调函数推入任务队列）")]),t._v(" "),s("p",[t._v("定时触发器线程（setTimeout、setInterval等待时间结束后把执行函数推入任务队列中）")]),t._v(" "),s("p",[t._v("浏览器事件处理线程（click、mouse等交互事件发生后将这些事件放入事件队列中）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1309608/201902/1309608-20190222082053435-1516343396.png",alt:""}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("JS引擎线程和GUI引擎线程————互斥\n\njs可以操作DOM元素，进而会影响到GUI的渲染结果，因此js引擎线程与gui渲染线程是互斥的。也就是说当js引擎线程处于运行状态时，gui渲染线程将处于冻结状态。\n\n    <button id=\"button\">test</button>\n    <script>\n\n        var button = document.getElementById('button');\n        console.log(button);\n        button.onclick = function () {\n            button.style.fontSize = '100px';\n            button.style.color = 'red';\n            for(let index = 0; index < 1000000; index ++) {\n                button.innerText = index;\n            }\n        }\n         \n    <\/script>\n在上述代码中，即使style的样式写在innerText之前，但因为style样式所在的域是click function，所以在整个onclick function函数执行完成之前，GUI的线程都会处于冻结状态。因此button的样式（fontSize、color、innerText）会等到函数执行完之后，才一起、同时改变。\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("js为何是单线程？\n\n假如js是多线程，同一个时间一个线程想要修改DOM，另一个线程想要删除DOM，问题就会复杂许多，浏览器不知道听谁的，如果引入“锁”的机制，就又回到其他语言的尴尬困境了。\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("大量数据操作怎么办？\n\n单线程计算能力有限，大量数据需要计算渲染的话，我们可以配合后端进行操作，比如VUE和nodejs配合，也就是SSR技术。\n")])])]),s("h3",{attrs:{id:"js执行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js执行机制"}},[t._v("#")]),t._v(" js执行机制：")]),t._v(" "),s("p",[t._v("JavaScript是基于单线程运行的，同时又是可以异步执行的，一般来说这种既是单线程又是异步的语言都是基于事件来驱动的，恰好浏览器就给JavaScript提供了这么一个环境。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190422215423284.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ0NjU5MzQ=,size_16,color_FFFFFF,t_70",alt:""}})]),t._v(" "),s("p",[t._v("上图内容用文字表述的话：\n同步和异步任务分别进入不同的“场所”，同步的进入主线程，异步的进入Event Table并注册函数\n当指定的事情完成时，Event Table会将这个函数移入Event Queue\n主线程内的任务执行完毕为空，回去Event Queue读取对应的函数，进入主线程执行，上述过程会不断重复，也就是常说的Event Loop（事件循环）")]),t._v(" "),s("p",[s("strong",[t._v("同步任务")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 20")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\n")])])]),s("ol",{attrs:{start:"0"}},[s("li",[s("p",[t._v("代码没有执行的时候，执行栈为空栈")])]),t._v(" "),s("li",[s("p",[t._v("outer 函数执行时，创建了一帧，帧中包含了形参、局部变量 (预编译过程) ，把帧压入栈中")])]),t._v(" "),s("li",[s("p",[t._v("执行 outer 函数内代码，执行 inner 函数")])]),t._v(" "),s("li",[s("p",[t._v("创建新帧，同样有形参、局部变量，压入栈中")])]),t._v(" "),s("li",[s("p",[t._v("outer 函数执行完毕，弹出栈")])]),t._v(" "),s("li",[s("p",[t._v("inner 函数执行完毕，弹出栈")])]),t._v(" "),s("li",[s("p",[t._v("执行栈为空（"),s("strong",[t._v("执行栈相当于js主线程")]),t._v("）")])])]),t._v(" "),s("p",[s("strong",[t._v("异步任务")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$.ajax({\n    url:'xxx.xxx.com',\n    data:{},\n    success:function(data) {\n        console.log(data);\n    }\n})\nconsole.log('run')\n")])])]),s("p",[t._v("0.Ajax进入Event Table，注册回调函数success")]),t._v(" "),s("p",[t._v("1.执行console.log('run')")]),t._v(" "),s("p",[t._v("2.Ajax事件完成，http网络请求线程把success任务放入Event Queue中")]),t._v(" "),s("p",[t._v("3.主线程（调用栈）读取任务，执行success")]),t._v(" "),s("p",[s("strong",[t._v("任务队列")])]),t._v(" "),s("p",[t._v("由于JS是一个单线程的语言，就需要一个专门来管理任务执行的队列，只有前一个任务执行完了，才会接着去执行下一个任务。但是有些任务耗费的时间很长，如果是cpu一直在忙碌在干事情，那倒也没什么，最怕的是此时cpu是处于空闲状态的。比如I/O操作，或者Ajax请求，有时候我们发出一个ajax到后端请求数据到浏览器接受到后端返回的数据，这段时间比较长。此时若是cpu一直处于空闲等待的状态的话，那岂不是会浪费很多性能。所以设计者就考虑不妨将这些需要等待的任务挂起，去执行后面的任务，等到所请求的数据返回或者I/O操作结束有了结果之后再回过头去执行刚刚被挂起的任务。")]),t._v(" "),s("p",[t._v("因此根据上述我们又可以将任务分为两类，一种是同步任务，一种是异步任务。我们将同步任务放在浏览器的主线程之上，只有前面一个任务执行完成之后才会执行后面的任务，异步任务是指 不进入主线程，而进入任务队列的任务。只有主线程里的同步任务都执行之后（主线程里没其他任务了），才会执行任务队列里的异步任务。")]),t._v(" "),s("p",[t._v("具体来说异步任务的执行机制如下：")]),t._v(" "),s("p",[t._v("1：有一个主线程用于执行一些同步任务，形成一个执行栈。")]),t._v(" "),s("p",[t._v("2：与此同时还有一个任务队列，当异步任务有了运行结果的时候，就会在任务队列中放置一个事件。")]),t._v(" "),s("p",[t._v("3：一旦主线程上的同步任务都执行完了，系统就会依次读取任务队列上的任务。而此时正处于“等待”状态的异步任务也就结束等待了，开始进入执行栈中，开始执行。")]),t._v(" "),s("p",[t._v("4：主线程不断反复的重复上面第三部。")]),t._v(" "),s("p",[t._v("一旦主线程上面的任务运行完之后就会从任务队列中读取新的任务继续运行。这就是javascript的运行机制，整个过程不断循环反复直至所有任务全部运行结束。")]),t._v(" "),s("p",[t._v('"任务队列"是一个事件的队列（也可以理解成消息的队列），IO设备完成一项任务，就在"任务队列"中添加一个事件，表示相关的异步任务可以进入"执行栈"了。主线程读取"任务队列"，就是读取里面有哪些事件。')]),t._v(" "),s("p",[t._v('"任务队列"中的事件，除了IO设备的事件以外，还包括一些用户产生的事件（比如鼠标点击、页面滚动等等）。只要指定过回调函数，这些事件发生时就会进入"任务队列"，等待主线程读取。')]),t._v(" "),s("p",[s("strong",[t._v("微队列，microtask，也叫jobs")])]),t._v(" "),s("p",[t._v("另一些异步任务的回调会依次进入micro task queue，等待后续被调用，这些异步任务包括：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("process.nextTick (Node独有)")])]),t._v(" "),s("li",[s("p",[t._v("Promise")])]),t._v(" "),s("li",[s("p",[t._v("Object.observe")])]),t._v(" "),s("li",[s("p",[t._v("MutationObserver（用来监视 DOM 变动。比如节点的增减、属性的变动、文本内容的变动。）\n"),s("strong",[t._v("（注：这里只针对浏览器和NodeJS）")])])])]),t._v(" "),s("p",[s("strong",[t._v("宏队列，macrotask，也叫tasks")])]),t._v(" "),s("p",[t._v("一些异步任务的回调会依次进入macro task queue，等待后续被调用，这些异步任务包括：")]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[s("p",[t._v("setTimeout 、setInterval")])]),t._v(" "),s("li",[s("p",[t._v("setImmediate (Node独有)")])]),t._v(" "),s("li",[s("p",[t._v("requestAnimationFrame  (浏览器独有)")])]),t._v(" "),s("li",[s("p",[t._v("requestAnimationFrame在"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN的定义"),s("OutboundLink")],1),t._v("为，下次页面重绘前所执行的操作，而重绘也是作为宏任务的一个步骤来存在的，且该步骤晚于微任务的执行。严格来说，这个api不属于宏任务也不属于微任务，他的触发时间位于宏任务和微任务之间。")])]),t._v(" "),s("li",[s("p",[t._v("I/O")])]),t._v(" "),s("li",[s("p",[t._v("UI rendering (浏览器独有)")]),t._v(" "),s("p",[t._v("我们先来看一张图，再看完这篇文章后，请返回来再仔细看一下这张图，相信你会有更深的理解。\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210305105849896.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FidWFuZGVu,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("这张图将浏览器的Event Loop完整的描述了出来，我来讲执行一个JavaScript代码的具体流程：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 执行全局Script同步代码，这些同步代码有一些是同步语句，有一些是异步语句（比如setTimeout等）；\n2. 全局Script代码执行完毕后，调用栈Stack会清空； \n3. 从微队列microtask queue中取出位于队首的回调任务，放入调用栈Stack中执行，执行完后microtask queue长度减1；\n4. 继续取出位于队首的任务，放入调用栈Stack中执行，以此类推，直到直到把microtask queue中的所有任务都执行完毕。\n5. 注意，如果在执行microtask的过程中，又产生了microtask，那么会加入到队列的末尾，也会在这个周期被调用执行；\n6. microtask queue中的所有任务都执行完毕，此时microtask queue为空队列，调用栈Stack也为空；\n7. 取出宏队列macrotask queue中位于队首的任务，放入Stack中执行； 执行完毕后，调用栈Stack为空；\n8. 重复第3-7个步骤； \n9. 重复第3-7个步骤； ......\n   **可以看到，这就是浏览器的事件循环Event Loop**\n")])])]),s("p",[s("strong",[t._v("这里归纳3个重点：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1. 宏队列macrotask一次只从队列中取一个任务执行，执行完后就去执行微任务队列中的任务；\n2. 微任务队列中所有的任务都会被依次取出来执行，直到microtask queue为空； \n3. 图中没有画UI rendering的节点，因为这个是由浏览器自行判断决定的，但是只要执行UI rendering，它的节点是在执行完所有的microtask之后，下一个macrotask之前，紧跟着执行UI render。\n")])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1471668/202006/1471668-20200607204822382-9856110.png",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);