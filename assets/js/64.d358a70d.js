(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{349:function(_,v,t){"use strict";t.r(v);var a=t(14),s=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_1-传输层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-传输层"}},[_._v("#")]),_._v(" 1.传输层")]),_._v(" "),v("h2",{attrs:{id:"udp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[_._v("#")]),_._v(" UDP")]),_._v(" "),v("p",[_._v("用户数据协议\n特点：")]),_._v(" "),v("ol",[v("li",[_._v("无连接；")]),_._v(" "),v("li",[_._v("连接方式（可以一对一、一对多、多对一、多对多）；")]),_._v(" "),v("li",[_._v("面向报文；")]),_._v(" "),v("li",[_._v("尽最大努力完成交付；")]),_._v(" "),v("li",[_._v("首部开销小；")]),_._v(" "),v("li",[_._v("没有拥塞控制；")])]),_._v(" "),v("h2",{attrs:{id:"tcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[_._v("#")]),_._v(" TCP")]),_._v(" "),v("p",[_._v("传输控制协议\n特点：")]),_._v(" "),v("ol",[v("li",[_._v("面向连接；")]),_._v(" "),v("li",[_._v("点对点连接；")]),_._v(" "),v("li",[_._v("可靠；")]),_._v(" "),v("li",[_._v("双全工通信；")]),_._v(" "),v("li",[_._v("面向字节流；")])]),_._v(" "),v("h2",{attrs:{id:"tcp和udp的区别和应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp的区别和应用场景"}},[_._v("#")]),_._v(" TCP和UDP的区别和应用场景：")]),_._v(" "),v("h3",{attrs:{id:"区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[_._v("#")]),_._v(" 区别：")]),_._v(" "),v("ol",[v("li",[_._v("连接；")]),_._v(" "),v("li",[_._v("服务对象；")]),_._v(" "),v("li",[_._v("可靠；")]),_._v(" "),v("li",[_._v("有无网络拥塞、流量控制；\n"),v("ul",[v("li",[_._v("TCP有拥塞控制和流量控制机制，保证数据传输的安全性")]),_._v(" "),v("li",[_._v("UDP没有上诉两种机制，即使网络非常拥堵了，也不会影响UDP的发送速率")])])]),_._v(" "),v("li",[_._v("数据传输形式；\n"),v("ul",[v("li",[_._v("TCP是流式传输，没有边界，但保证顺序和可靠")]),_._v(" "),v("li",[_._v("UDP是一个包一个包的发送，是有边界的，但可能会丢包和乱序")])])]),_._v(" "),v("li",[_._v("首部开销；")]),_._v(" "),v("li",[_._v("分片\n"),v("ul",[v("li",[_._v("TCP：MSS")]),_._v(" "),v("li",[_._v("UDP：MTU")])])])]),_._v(" "),v("h3",{attrs:{id:"应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[_._v("#")]),_._v(" 应用场景：")]),_._v(" "),v("ul",[v("li",[_._v("TCP\n"),v("ul",[v("li",[_._v("FTP文件传输")]),_._v(" "),v("li",[_._v("HTTP/HTTPS")])])]),_._v(" "),v("li",[_._v("UDP\n"),v("ul",[v("li",[_._v("包总量较少的通信，如DNS")]),_._v(" "),v("li",[_._v("视频、音频等多媒体通信")]),_._v(" "),v("li",[_._v("广播通信")])])])]),_._v(" "),v("h2",{attrs:{id:"三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[_._v("#")]),_._v(" 三次握手")]),_._v(" "),v("h3",{attrs:{id:"为什么需要三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要三次握手"}},[_._v("#")]),_._v(" 为什么需要三次握手：")]),_._v(" "),v("ol",[v("li",[_._v("三次握手可以阻止重复历史连接的初始化（主要原因）；")]),_._v(" "),v("li",[_._v("三次握手可以同步双方的初始序列号；")]),_._v(" "),v("li",[_._v("三次握手可以避免资源浪费；")])]),_._v(" "),v("h3",{attrs:{id:"为什么不使用两次握手或四次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么不使用两次握手或四次握手"}},[_._v("#")]),_._v(" 为什么不使用两次握手或四次握手：")]),_._v(" "),v("ul",[v("li",[_._v("两次握手：无法防止历史连接的简历，会造成双方资源的浪费，也无法可靠的同步双方序列号；")]),_._v(" "),v("li",[_._v("四次握手：三次握手就已经理论上最少可靠连接的建立，所以不需要使用更多的通信次数；")])]),_._v(" "),v("h3",{attrs:{id:"为什么客户端和服务端的初始序列号isn是不同的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么客户端和服务端的初始序列号isn是不同的"}},[_._v("#")]),_._v(" 为什么客户端和服务端的初始序列号ISN是不同的：")]),_._v(" "),v("p",[_._v("如果一个已经失效的连接被重用了，但是该旧连接的历史报文还残留在网络中，如果序列号相同，那么就无法分辨出该报文是不是历史报文，如果历史报文被新的连接接收了，则会产生数据错乱。\n所以，每次建立连接钱重新初始化一个序列号主要是为了通信双方能够根据序列号将不属于本连接的报文段丢弃。\n另一方面是为了安全性，防止黑客为着相同系列好的TCP报文被对方接收。")]),_._v(" "),v("h2",{attrs:{id:"四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[_._v("#")]),_._v(" 四次挥手")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-c8b61ed2a249700583b11bc5d16c5711_720w.jpg?source=1940ef5c",alt:""}}),_._v("\n客户端打算关闭连接，此时会发送一个 TCP 首部 FIN 标志位被置为 1 的报文，也即 FIN 报文，之后客户端进入 FIN_WAIT_1 状态。")]),_._v(" "),v("p",[_._v("服务端收到该报文后，就向客户端发送 ACK 应答报文，接着服务端进入 CLOSED_WAIT 状态。")]),_._v(" "),v("p",[_._v("客户端收到服务端的 ACK 应答报文后，之后进入 FIN_WAIT_2 状态。")]),_._v(" "),v("p",[_._v("等待服务端处理完数据后，也向客户端发送 FIN 报文，之后服务端进入 LAST_ACK 状态。")]),_._v(" "),v("p",[_._v("客户端收到服务端的 FIN 报文后，回一个 ACK 应答报文，之后进入 TIME_WAIT 状态")]),_._v(" "),v("p",[_._v("服务器收到了 ACK 应答报文后，就进入了 CLOSED 状态，至此服务端已经完成连接的关闭。")]),_._v(" "),v("p",[_._v("客户端在经过 2MSL 一段时间后，自动进入 CLOSED 状态，至此客户端也完成连接的关闭。")]),_._v(" "),v("p",[v("strong",[_._v("只有主动关闭连接的，才有TIME_WAIT状态。")])]),_._v(" "),v("h3",{attrs:{id:"为什么需要四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要四次挥手"}},[_._v("#")]),_._v(" 为什么需要四次挥手：")]),_._v(" "),v("ol",[v("li",[_._v("客户端向服务端发送FIN时，仅仅表示客户端不再发送数据了，但还是能接收数据；")]),_._v(" "),v("li",[_._v("服务器收到客户端的FIN报文时，先回一个ACK应答报文，而服务端可能还有数据需要处理和发送，等服务端不再发送数据时，才发送FIN报文给客户端来表示同意现在关闭连接；")])]),_._v(" "),v("h3",{attrs:{id:"为什么time-wait等待的时间时2msl"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么time-wait等待的时间时2msl"}},[_._v("#")]),_._v(" 为什么TIME_WAIT等待的时间时2MSL：")]),_._v(" "),v("p",[_._v("网络中可能存在来自发送方的数据包，这些数据包被接收方处理后再返回相应，这一来一回的需要等待2倍时间。\n"),v("strong",[_._v("MSL是报文最大生存时间，网络中超过这个时间的报文将被丢弃。")])]),_._v(" "),v("h3",{attrs:{id:"为什么需要time-wait状态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要time-wait状态"}},[_._v("#")]),_._v(" 为什么需要TIME_WAIT状态：")]),_._v(" "),v("ol",[v("li",[_._v("为了方式具有相同“四元组”的“旧”数据包被收到；")]),_._v(" "),v("li",[_._v("保证“被动关闭连接”的一方能被正确的关闭，即保证最后的ACK能让被动方接收，从而帮助其正常关闭；")])]),_._v(" "),v("ul",[v("li",[_._v("如果TIME_WAIT时间过短会导致：\n"),v("ul",[v("li",[_._v("在客户端发给服务端的ACK没被接收到的情况下，TIME_WAIT时间过短会导致客户端一直处于LAST_ACK的状态，当下次此客户端再向此服务端发送连接请求时，服务端会直接发送RST报文（服务端等待的是ACK报文）。")])])]),_._v(" "),v("li",[_._v("TIME_WAIT过多有什么危害：\n"),v("ul",[v("li",[_._v("内存资源占用；")]),_._v(" "),v("li",[_._v("端口资源的占用；")])])])]),_._v(" "),v("h2",{attrs:{id:"tcp重传"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp重传"}},[_._v("#")]),_._v(" TCP重传")]),_._v(" "),v("h3",{attrs:{id:"超时重传"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#超时重传"}},[_._v("#")]),_._v(" 超时重传")]),_._v(" "),v("p",[_._v("RTT：数据往返时延\nRTO：触发超时重传的时间\nRTO略大于RTT")]),_._v(" "),v("h3",{attrs:{id:"快速重传"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快速重传"}},[_._v("#")]),_._v(" 快速重传")]),_._v(" "),v("p",[_._v("接收方没有收到期望收到的序列号时，会返回一个期望收到的某序列号的ACK报文，如果发送方收到三次相同的报文，就会触发快速重传。（快速重传整个过程的时间小雨RTO）")]),_._v(" "),v("h3",{attrs:{id:"sack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sack"}},[_._v("#")]),_._v(" SACK")]),_._v(" "),v("p",[v("strong",[_._v("Selective Acknowledgment 选择性确认")]),_._v("\n接收方可以通过SACK告诉发送方，哪些包丢了，需要重新发送哪些包")]),_._v(" "),v("h3",{attrs:{id:"d-sack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#d-sack"}},[_._v("#")]),_._v(" D-SACK")]),_._v(" "),v("ol",[v("li",[_._v("可以让发送方知道，是发出去的包丢了，还是接收方回应的ACK包丢了；")]),_._v(" "),v("li",[_._v("可以知道是不是发送方的数据包被网络延迟了；")]),_._v(" "),v("li",[_._v("可以知道网络中是不是把发送方的数据包给复制了；")])]),_._v(" "),v("h2",{attrs:{id:"滑动窗口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[_._v("#")]),_._v(" 滑动窗口")]),_._v(" "),v("p",[_._v("作用：提高通信效率\n窗口大小指无需确认应答而可以继续发送数据的最大值。\n窗口实际上是一个缓存空间，发送方主机在等到确认应答返回之前，必须在缓冲区保留已发送的数据。如果收到确认应答，此时数据就可以从缓冲区清除。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("TCP 利用滑动窗口实现流量控制的机制")]),_._v("。")]),_._v(" "),v("li",[_._v("滑动窗口（Sliding window）是一种流量控制技术。早期的网络通信中，通信双方不会考虑网络的拥挤情况直接发送数据。由于大家不知道网络拥塞状况，同时发送数据，导致中间节点阻塞掉包，谁也发不了数据，所以就有了滑动窗口机制来解决此问题。")]),_._v(" "),v("li",[_._v("TCP 中采用滑动窗口来进行传输控制，"),v("strong",[_._v("滑动窗口的大小意味着接收方还有多大的缓冲区可以用于接收数据。发送方可以通过滑动窗口的大小来确定应该发送多少字节的数据")]),_._v("。\n"),v("ul",[v("li",[_._v("当滑动窗口为 0 时，发送方一般不能再发送数据报，但有两种情况除外，一种情况是可以发送紧急数据，例如，允许用户终止在远端机上的运行进程。另一种情况是发送方可以发送一个 1 字节的数据报来通知接收方重新声明它希望接收的下一字节及发送方的滑动窗口大小。")])])])]),_._v(" "),v("h3",{attrs:{id:"流量控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流量控制"}},[_._v("#")]),_._v(" 流量控制")]),_._v(" "),v("ul",[v("li",[_._v("TCP 利用滑动窗口实现流量控制。"),v("strong",[_._v("避免发送方的数据填满接收方的缓存。")])]),_._v(" "),v("li",[_._v("流量控制是为了控制发送方发送速率，保证接收方来得及接收。")]),_._v(" "),v("li",[_._v("接收方发送的确认报文中的窗口字段可以用来控制发送方窗口大小，从而影响发送方的发送速率。将窗口字段设置为 0，则发送方不能发送数据。")])]),_._v(" "),v("h2",{attrs:{id:"拥塞控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制"}},[_._v("#")]),_._v(" 拥塞控制")]),_._v(" "),v("p",[_._v("拥塞控制的目的是为了避免发送方的数据填满整个网络。\n拥塞窗口cwnd是发送方维护的一个状态变量，会根据网络的拥塞程度动态变化：")]),_._v(" "),v("ul",[v("li",[_._v("网络中没有出现拥塞，cwnd增大；")]),_._v(" "),v("li",[_._v("网络中出现拥塞，cwnd减小；\n"),v("strong",[_._v("网络拥塞的判定条件：发生了超时重传")])])]),_._v(" "),v("h3",{attrs:{id:"拥塞控制的四个算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制的四个算法"}},[_._v("#")]),_._v(" 拥塞控制的四个算法：")]),_._v(" "),v("h4",{attrs:{id:"_1-慢启动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-慢启动"}},[_._v("#")]),_._v(" 1.慢启动")]),_._v(" "),v("p",[_._v("刚开始建立连接时，初始化的cwnd=1，表示可以传一个MSS大小的数据。"),v("strong",[_._v("当发送方每收到一个ACK，拥塞窗口cwnd的大小就会加1。")]),_._v("\n1--\x3e2--\x3e4--\x3e8\n初始化cwnd=1，收到第一个ACK后cwnd=2，再发出去两个数据包，两个数据包再返回两个ACK，cwnd=4......\n慢启动呈"),v("strong",[_._v("指数性增长")]),_._v("\n如果cwnd大到一定程度，cwnd>=ssthresh（慢启动阈值），就会使用"),v("strong",[_._v("拥塞避免算法。")])]),_._v(" "),v("h4",{attrs:{id:"_2-拥塞避免"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-拥塞避免"}},[_._v("#")]),_._v(" 2.拥塞避免")]),_._v(" "),v("p",[_._v("以进入拥塞避免时刻的cwnd为基数，每次收到一个ACK，cwnd都增加1/基数。\n"),v("strong",[_._v("从指数性增长变成线性增长。")])]),_._v(" "),v("h4",{attrs:{id:"_3-拥塞发生"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-拥塞发生"}},[_._v("#")]),_._v(" 3.拥塞发生")]),_._v(" "),v("ul",[v("li",[_._v("超时重传\n"),v("ul",[v("li",[_._v("将慢启动阈值设置为 cwnd/2")]),_._v(" "),v("li",[_._v("cwnd重置为1\n"),v("strong",[_._v("传输速度会断崖式下跌")])])])]),_._v(" "),v("li",[_._v("快速重传\n"),v("ul",[v("li",[_._v("cwnd = cwnd/2")]),_._v(" "),v("li",[_._v("慢启动阈值 = cwnd")]),_._v(" "),v("li",[_._v("进入快速恢复算法")])])])]),_._v(" "),v("h4",{attrs:{id:"_4-快速恢复"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-快速恢复"}},[_._v("#")]),_._v(" 4.快速恢复")]),_._v(" "),v("p",[_._v("快速恢复一般和快速重传同时使用。")]),_._v(" "),v("ul",[v("li",[_._v("拥塞窗口cwnd = ssthresh（慢启动阈值）+ 3（3的意思是收到三个出发快速重传的ACK）；")]),_._v(" "),v("li",[_._v("重传丢失的数据包；")]),_._v(" "),v("li",[_._v("如果再收到重复的ACK，那么cwnd + 1；")]),_._v(" "),v("li",[_._v("如果收到新数据的 ACK 后，把 cwnd 设置为第一步中的 ssthresh 的值，原因是该 ACK 确认了新的数据，说明从 duplicated ACK 时的数据都已收到，该恢复过程已经结束，可以回到恢复之前的状态了，"),v("strong",[_._v("也即再次进入拥塞避免状态")]),_._v("；也就是没有像「超时重传」一夜回到解放前，而是还在比较高的值，后续呈线性增长。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);