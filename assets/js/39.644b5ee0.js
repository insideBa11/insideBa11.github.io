(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{324:function(t,v,_){"use strict";_.r(v);var r=_(14),s=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_3-移动端布局-rem、流式、自适应、响应式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-移动端布局-rem、流式、自适应、响应式"}},[t._v("#")]),t._v(" 3.移动端布局（rem、流式、自适应、响应式）")]),t._v(" "),v("p",[t._v("总结自：\n1、"),v("a",{attrs:{href:"https://blog.csdn.net/qq_16546829/article/details/82954273",target:"_blank",rel:"noopener noreferrer"}},[t._v("Html5 移动端布局及(rem 布局)页面自适应布局详解（转）"),v("OutboundLink")],1),t._v("\n2、"),v("a",{attrs:{href:"https://www.cnblogs.com/zhaosijia----1234/p/9512558.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端布局总结"),v("OutboundLink")],1)]),t._v(" "),v("blockquote",[v("p",[t._v("常见的页面布局方式有，")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("静态布局")]),t._v(" px 布局")]),t._v(" "),v("li",[v("strong",[t._v("流式布局")]),t._v("（Liquid Layout） 主要的划分区域的尺寸使用百分数（搭配 min-*、max-*属性使用)")]),t._v(" "),v("li",[v("strong",[t._v("自适应布局")]),t._v("（Adaptive Layout） 即创建多个静态布局，每个静态布局对应一个屏幕分辨率范围")]),t._v(" "),v("li",[v("strong",[t._v("响应式布局")]),t._v("（Responsive Layout） 检测窗口大小利用 bootstrap 布局 弹性布局（rem/em 布局） css3 rem")])])]),t._v(" "),v("h3",{attrs:{id:"结论提前说"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结论提前说"}},[t._v("#")]),t._v(" 结论提前说：")]),t._v(" "),v("blockquote",[v("p",[t._v("1.如果"),v("strong",[t._v("只做 pc 端")]),t._v("，那么"),v("strong",[t._v("静态布局")]),t._v("（定宽度）是最好的选择； 2.如果"),v("strong",[t._v("做移动端")]),t._v("，且"),v("strong",[t._v("设计对高度和元素间距要求不高")]),t._v("，那么"),v("strong",[t._v("弹性布局 rem+js")]),t._v("是最好的选择，一份 css+一份 js 调节 font-size 搞定； 3.如果"),v("strong",[t._v("pc，移动要兼容")]),t._v("，而且要求很高那么"),v("strong",[t._v("响应式布局")]),t._v("还是最好的选择，前提是设计根据不同的高宽做不同的设计，响应式根据媒体查询做不同的布局。")])]),t._v(" "),v("h2",{attrs:{id:"流式布局-liquid-layout-百分比布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流式布局-liquid-layout-百分比布局"}},[t._v("#")]),t._v(" 流式布局（Liquid Layout 百分比布局）")]),t._v(" "),v("p",[t._v("主要的划分区域的尺寸使用百分数（搭配 min-*、max-*属性使用）")]),t._v(" "),v("p",[t._v("**1、布局特点：**屏幕分辨率变化时，页面里元素的大小会变化而但布局不变。【这就导致如果屏幕太大或者太小都会导致元素无法正常显示】")]),t._v(" "),v("p",[v("strong",[t._v("2、设计方法："),v("strong",[t._v("使用")]),t._v("%百分比定义宽度")]),t._v("，"),v("strong",[t._v("高度大都是用 px")]),t._v("来固定住，可以根据可视区域 (viewport) 和父元素的实时尺寸进行调整，尽可能的适应各种分辨率。往往配合 "),v("strong",[t._v("max-width/min-width")]),t._v(" 等属性控制尺寸流动范围以免过大或者过小影响阅读。")]),t._v(" "),v("p",[t._v("这种布局方式在 Web 前端开发的早期历史上，用来应对不同尺寸的 PC 屏幕（那时屏幕尺寸的差异不会太大），在当今的移动端开发也是常用布局方式，但缺点明显：主要的问题是如果屏幕尺度跨度太大，那么在相对其原始设计而言过小或过大的屏幕上不能正常显示。因为宽度使用%百分比定义，但是高度和文字大小等大都是用 px 来固定，所以在大屏幕的手机下显示效果会变成有些页面元素宽度被拉的很长，但是高度、文字大小还是和原来一样（即，这些东西无法变得“流式”），显示非常不协调。")]),t._v(" "),v("blockquote",[v("p",[t._v("也就是说，可能高度很矮，文字很小，但是宽度很宽。")])]),t._v(" "),v("h2",{attrs:{id:"自适应布局-adaptive-layout-使用媒介查询"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自适应布局-adaptive-layout-使用媒介查询"}},[t._v("#")]),t._v(" 自适应布局（Adaptive Layout）（使用媒介查询）")]),t._v(" "),v("p",[t._v("自适应布局的特点是"),v("strong",[t._v("分别为不同的屏幕分辨率定义布局")]),t._v("，即创建多个静态布局，每个静态布局对应一个屏幕分辨率范围。改变屏幕分辨率可以切换不同的静态局部（页面元素位置发生改变），但在每个静态布局中，页面元素不随窗口大小的调整发生变化。可以把自适应布局看作是静态布局的一个系列。\n1、布局特点：屏幕分辨率变化时，页面里面元素的位置会变化而大小不会变化。\n2、设计方法：使用 "),v("strong",[t._v("@media 媒体查询")]),t._v("给不同尺寸和介质的设备切换不同的样式。在优秀的响应范围设计下可以给适配范围内的设备最好的体验，在同一个设备下实际还是固定的布局。")]),t._v(" "),v("blockquote",[v("p",[t._v("也就是说给每个分辨率都弄一个布局。")])]),t._v(" "),v("h2",{attrs:{id:"响应式布局-responsive-layout-流式-自适应"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应式布局-responsive-layout-流式-自适应"}},[t._v("#")]),t._v(" 响应式布局（Responsive Layout）（流式+自适应）")]),t._v(" "),v("p",[t._v("随着 CSS3 出现了媒体查询技术，又出现了响应式设计的概念。响应式设计的目标是确保一个页面在所有终端上（各种尺寸的 PC、手机、手表、冰箱的 Web 浏览器等等）都能显示出令人满意的效果，对 CSS 编写者而言，在实现上不拘泥于具体手法，但通常是"),v("strong",[t._v("糅合了流式布局+弹性布局，"),v("strong",[t._v("再搭配")]),t._v("媒体查询技术")]),t._v("使用。——分别为不同的屏幕分辨率定义布局，同时，在每个布局中，应用流式布局的理念，即页面元素宽度随着窗口调整而自动适配。即：创建多个流体式布局，分别对应一个屏幕分辨率范围。可以把响应式布局看作是"),v("strong",[t._v("流式布局和自适应布局设计理念的融合。")])]),t._v(" "),v("p",[t._v("**优点：**适应 pc 和移动端，如果足够耐心，效果完美")]),t._v(" "),v("p",[v("strong",[t._v("缺点：")]),t._v("\n（1）媒体查询是有限的，也就是可以枚举出来的，只能适应主流的宽高。\n（2）要匹配足够多的屏幕大小，工作量不小，设计也需要多个版本。")]),t._v(" "),v("h2",{attrs:{id:"弹性布局-rem-em-布局-常用于手机端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#弹性布局-rem-em-布局-常用于手机端"}},[t._v("#")]),t._v(" 弹性布局（rem/em 布局）常用于手机端")]),t._v(" "),v("p",[t._v("1、"),v("strong",[t._v("rem,em 区别")]),t._v("：rem,em 都是顺应不同网页字体大小展现而产生的。其中，"),v("strong",[t._v("em 是相对其父元素")]),t._v("，在实际应用中相对而言会带来很多不便；"),v("strong",[t._v("而 rem 是始终相对于 html 大小，即页面根元素。")])]),t._v(" "),v("p",[t._v("2、这类布局的特点是，包裹文字的各元素的尺寸"),v("strong",[t._v("采用 em/rem 做单位")]),t._v("，而页面的主要"),v("strong",[t._v("划分区域的尺寸仍使用百分数或 px 做单位")]),t._v("（同「流式布局」或「静态/固定布局」）。早期浏览器不支持整个页面按比例缩放，仅支持网页内文字尺寸的放大，这种情况下。使用 em/rem 做单位，可以使包裹文字的元素随着文字的缩放而缩放。")]),t._v(" "),v("p",[v("strong",[t._v("优点")]),t._v("：理想状态是所有屏幕的高宽比和最初的设计高宽比一样，或者相差不多，完美适应。")]),t._v(" "),v("p",[v("strong",[t._v("缺点")]),t._v("：这种 rem+js 只不过是宽度自适应，高度没有做到自适应，一些对高度，或者元素间距要求比较高的设计，则这种布局没有太大的意义。如果只是宽度自适应，更推荐响应式设计。")])])}),[],!1,null,null,null);v.default=s.exports}}]);