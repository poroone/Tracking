<!--
 * @Author: poro poroone@163.com
 * @Date: 2024-01-06 01:16:24
 * @LastEditors: poro poroone@163.com
 * @LastEditTime: 2024-01-06 19:28:31
 * @FilePath: \poroone\TR\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 埋点系统设计

什么是埋点
统计 pv uv
- pv(页面浏览量) 访问过就加一
- uv(独立访客) 量化指标就是 ip唯一, ID cookie 等等 统计多少人访问了网站 总浏览量
- 按钮点击次数 true \ false
- 页面停留的时间
- 首屏渲染的时间
- 代码报错上报
- promise报错上报
- http请求上报
- 路由跳转
- 浏览器信息
- 笔记本电脑电量
- 用了什么wifi 快不快
- 监听元素(dom) 的变化
疯狂窃取用户隐私