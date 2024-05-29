(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{328:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_5-html5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-html5"}},[t._v("#")]),t._v(" 5.HTML5")]),t._v(" "),s("h2",{attrs:{id:"svg-和-canvas-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svg-和-canvas-的区别"}},[t._v("#")]),t._v(" SVG 和 Canvas 的区别")]),t._v(" "),s("ol",[s("li",[t._v("SVG 是一种使用 XML 描述 2D 图形的语言。")]),t._v(" "),s("li",[t._v("Canvas 通过 JavaScript 来绘制 2D 图形。")]),t._v(" "),s("li",[t._v("SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。")]),t._v(" "),s("li",[t._v("在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。")]),t._v(" "),s("li",[t._v("Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。")])]),t._v(" "),s("h2",{attrs:{id:"客户端存储方案web-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端存储方案web-storage"}},[t._v("#")]),t._v(" 客户端存储方案"),s("strong",[t._v("Web Storage")])]),t._v(" "),s("p",[t._v("使用 HTML5 可以在本地存储用户的浏览数据。早些时候,本地存储使用的是==cookies==。（一个 cookies 储存 4k 的数据，不同浏览器可以储存的个数不同，如 IE6 每个域 20 个）")]),t._v(" "),s("p",[t._v("Web 存储需要更加的安全与快速. 这些数据不会被保存在服务器上，但是这些数据只用于用户请求网站数据上.")]),t._v(" "),s("p",[t._v("它也可以存储大量的数据，而==不影响网站的性能==。")]),t._v(" "),s("p",[t._v("数据以 键/值 对存在, ==web 网页的数据只允许该网页访问使用==。")]),t._v(" "),s("p",[t._v("客户端存储数据的两个对象为：")]),t._v(" "),s("p",[t._v("==localStorage - 没有时间限制的数据存储==（储存大小为 5M 左右）")]),t._v(" "),s("p",[t._v("==sessionStorage - 针对一个 session 的数据存储, 当用户关闭浏览器窗口后，数据会被删除。==")]),t._v(" "),s("h3",{attrs:{id:"localstorage-和-sessionstorage-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localstorage-和-sessionstorage-的区别"}},[t._v("#")]),t._v(" localStorage 和 sessionStorage 的区别")]),t._v(" "),s("ol",[s("li",[t._v("他们均只能存储字符串类型的对象\n"),s("ol",[s("li",[t._v("不同浏览器无法共享 localStorage 或 sessionStorage 中的信息。")]),t._v(" "),s("li",[t._v("相同浏览器的不同页面间可以共享相同的 localStorage（页面属于相同域名和端口）")]),t._v(" "),s("li",[t._v("但是不同页面或标签页间无法共享 sessionStorage 的信息")])])])]),t._v(" "),s("p",[t._v("在使用 web 存储前,应检查浏览器是否支持 localStorage 和 sessionStorage")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Storage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是的! 支持 localStorage  sessionStorage 对象!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一些代码.....")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抱歉! 不支持 web 存储。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("不管是 localStorage，还是 sessionStorage，可使用的 API 都相同，常用的有如下几个（以 localStorage 为例）：")]),t._v(" "),s("ul",[s("li",[s("ul",[s("li",[t._v("保存数据：localStorage.setItem(key,value);")]),t._v(" "),s("li",[t._v("读取数据：localStorage.getItem(key);")]),t._v(" "),s("li",[t._v("删除单个数据：localStorage.removeItem(key);")]),t._v(" "),s("li",[t._v("删除所有数据：localStorage.clear();")]),t._v(" "),s("li",[t._v("得到某个索引的 key：localStorage.key(index);")])])])]),t._v(" "),s("h2",{attrs:{id:"web-socket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-socket"}},[t._v("#")]),t._v(" Web Socket")]),t._v(" "),s("p",[t._v("详见："),s("a",{attrs:{href:"https://www.zhihu.com/question/20215561",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebSocket 是什么原理？"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。在 WebSocket API 中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。")]),t._v(" "),s("p",[t._v("浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。当你获取 Web Socket 连接后，你可以通过 "),s("strong",[t._v("send()")]),t._v(" 方法来向服务器发送数据，并通过 "),s("strong",[t._v("onmessage")]),t._v(" 事件来接收服务器返回的数据。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTML")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("W3Cschool教程")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w3cschool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WebSocketTest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WebSocket"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"您的浏览器支持 WebSocket!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打开一个 web socket")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ws "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebSocket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ws://localhost:9998/echo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n               ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onopen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Web Socket 已连接上，使用 send() 方法发送数据")]),t._v("\n                  ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"发送数据"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"数据发送中..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n               ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("evt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" received_msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" evt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"数据已接收..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n               ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclose")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭 websocket")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"连接已关闭..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器不支持 WebSocket")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"您的浏览器不支持 WebSocket!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sse"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript:WebSocketTest()"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("运行 WebSocket"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);