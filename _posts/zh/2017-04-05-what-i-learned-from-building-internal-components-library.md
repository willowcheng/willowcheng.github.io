---
title: 在制作内部组件库中我学到了什么
layout: post
description: 从开始有制作组件库的计划到不断接触新技术，补充知识和不断尝试，选择工具并且做第一版最后的决策
tag: 学习, 开发
image: /assets/img/patterns-galaxy.jpg
lang: zh
permalink: /zh/2017/04/05/what-i-learned-from-building-internal-components-library/
bilingual: no
---

最近几个月工作的重心从产品界面 Bug 中逐渐转移到组件库的研究。刚开始是去年的 11 月底，那时候知识还没有更新到
[《在 2016 年学 JavaScript 是一种什么样的体验》](https://zhuanlan.zhihu.com/p/22782487)中描述的。
基础掌握的知识有原生的 HTML5/CSS 和 ES6 以前的 Javascript 以及 jQuery，稍微熟悉一些的还有 Bootstrap 和 Semantic-UI 界面库。

因为在公司第一年大部分都是跟 CSS 打交道（产品界面改版），所以首先想到组件库的作用就是提供一份样式库，类似 Bootstrap 那样，
英文里先用的是 **Pattern Library**，后来改到组件库就换成了 **Components Library**。

很不幸又很幸运的是组长不懂技术，花了很多时间来研究，也有机会做各种各样的尝试。对于要做组件库的倡导来源于组里另一位前端开发者和组长，
其实到目前看来我不确定把主导组件库的任务拿到自己这儿是一个好的决定还是坏的决定，对于一个经验不多的人，往往开始的过程最难的不是去做，而是选择。
现在也体会到为什么会有架构师的存在，充分比较优缺点和目标才能对未来有所保障，更重要的是能针对别人的提问一一解答，让人信服。

## 1. 设计

为什么要有组件库？从我的理解看就是把界面开发者和逻辑开发者分离，前端开发一分为二，很喜欢这篇文章里的解释方式
[《The overlap between design and engineering: a different perspective on product development》](https://www.ckl.io/blog/overlap-between-design-engineering/?utm_content=buffer4740c&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer&from=timeline&isappinstalled=0)。
简短地说就是界面开发者专心制作一切和样式、交互相关的东西。

组里只有用户交互设计师（UX），所以起步的时候我也更多在琢磨界面理论上的东西。那会正好看到 MarvelApp 开源了他们界面指导准则 [Marvel Style Guide](https://marvelapp.com/styleguide/overview/introduction)，
于是就从设计部分汲取了调色板 :art: 与排版 :pencil2: 这两部分。归根到底就是保持一致性，一致的美感、一致的基调，
如果应用每个界面都不一样，那就好比一部电影里从日式动漫画风突然转到好莱坞大片风让人摸不着头脑。

![](https://content.linkedin.com/content/dam/brand/site/img/color/color-palette-order.png)

看到一篇文章提到用音乐的和声与节拍理论创造排版，非常有趣：[《The rules of responsive web typography》](http://www.creativebloq.com/how-to/the-rules-of-responsive-web-typography)

在有了调色板 :art: 和排版 :pencil2: 后，就可以基于这两者对 HTML 一些表义标签进行定义了，比如 `h1` 到 `h6`，`button` 等。
结合以前在原物设计上看到的感触，实际上空间也是一个重要的部分，原物设计里讲究以 4 像素为基础空间单位，可以应用在 `margin`，`padding` 上。
**Bootstrap 4** 中很多元素都开始用 `rem` 表示尺寸，更应证了数学上比例关系的追求。这里有个小心得，`16px` 为 `1rem` 是个很常用的组合，
确切地说以 4 为基础能让很多值都在数字上呈可以整除的状态，说明偶数要比奇数更美一点 :smirk:

HTML 常用的表义标签完了可以做诸如开关、标签之类需要运用到多个 HTML 标签的组件，更复杂的可以到例如卡片框、模态框等等，这些在常用的
界面库的都很常见。积木搭得越多，可变性就会少，对于内部组件库而言这个时候更应该有明确需要给逻辑开发者暴露多少自定义的空间。
此外在交互方面设计也能在统一性上定义，比如色彩变化时的明暗度、透明度等等。

![](https://lc-www-live-s.legocdn.com/r/www/r/dccomicssuperheroes/-/media/franchises/dc%20comics%20super%20heroes%202014/home/touts%20favorites/characters-2-720x430.jpg?l.r2=-1411488742)

## 2. 技术

### 现成工具（Frontify）

本着内容先行，快速地让其他人理解我们正在做的东西的态度。刚开始选择了 [Frontify](https://frontify.com)，一个在线编辑样式准则的工具，
好处是有很多现成的样式模版，坏处是定义文档或者构建方式没有自由度，从我的角度看是一个非开发者使用的工具，
初期的时间里从这个工具中我也获取了很多灵感，虽然后来没有用它。

### 传统样式库构造（NPM + Gulp + SASS + Jekyll）

中期模仿的对象主要是 Bootstrap 4 的源码，包括了他们构造静态网站的方式，深深感觉到只有阅读源码才能和业界保持水准。。。

![](http://blog.farrant.me/content/images/2016/01/sass-monster.png)

- **NPM** 对于 JS 生态圈包管理的意义非常大，相比 Bower 明确了依赖库之间的相互关系，从而有更好的效率。我最欣赏的是 `package.json`
的引入，里面可以集成很多东西，很酷 :sunglasses:
- **Gulp** 让我第一次了解了流程自动化的概念，因为很多 JS 库都在预编译过程中引入，越来越多的任务都是非运行环境下完成的，
自动化在效率方面也越来越重要。类似的工具还有 Grunt
- **SASS** 预编译 CSS 处理器让把 CSS 写得非常好看也变得不简单。因为逻辑的引入而不是清一色的`属性: 值`，让它有了更多的变化性和选择
- **Jekyll** 用来制作文档。我觉得它流行的一大原因是 Github Pages 的支持，它实际上也用到的预编译的理念，引入逻辑层，而运行环境全部是静态网站，
从而在轻量、性能和易用性上胜出

### 组件库构造（Yarn + Webpack + PostCSS + React + Storybook + Jest + ESLint/StyleLint）

最近一个月在另一个使用 React 做单页面应用团队推动下，构造技术终于来到了 2017 年（真的好不容易啊。。。）。

![](https://cdn-images-1.medium.com/max/800/1*MRPl_SNuRGJchb6eOAnkSA.jpeg)

记得 2016 年初的时候找比较文章的时候常常出现这张图，想不到现在 React 已经统治了 :smiley: 最近参加了本地的 Javascript 的线下聚会，
Vue 的讨论也变得更多了，估计近期会来尝试尝试（我更喜欢表义语言比如 HTML 和 CSS，纯JS 不是我的菜）。

- **Yarn** 可以看作是 NPM 升级版，更快的速度，在 `yarn.lock` 确保不同环境下有相同的依赖，
但实际使用中很不喜欢处理 `yarn.lock` 冲突 
- **Webpack** 官网说这是一个 Bundler，从我的理解而言就是一个 Gulp 升级版工具，它好的地方就是开源社区会把业界的通用流程方案做出来，
这样我们就不需要在 Gulp 中手写代码来实现自动化，而 Webpack 配置中也有很多有趣的地方，起点相比 Gulp 要高点，但是掌握以后比
Gulp 简单很多
- **PostCSS** 是 CSS 生态圈，包括各种各样的工具。比如 *Vendor Prefixes*、*Minification*，如果说要用到 PostCSS，
我觉得全用 PostCSS 生态圈也蛮好的，加上另一个组长的推荐，我就用了。
目前 PostCSS 的应用范围还没有 SASS 广，但是诸如现在 JS 生态圈里讲究的单个库单个功能的趋势，CSS 生态圈概念应该也会被逐渐接受。
PostCSS 里的 [cssnext](http://cssnext.io) 非常有意思，类似于 Babel 让你在编译前写未来的 JS 语法，而编译后依然是浏览器兼容的语法
- **React** 构造界面应该说是一个非常大的创新。从我以前做移动和网页应用的经验看，传统构造方式是从宏观到微观（组件），
而 React 是从微观到宏观。它刚开始起步于网页，通过性能最高的 Javascript 实现输出 DOM 也是非常有意思的想法。现在后来者 Vue 融合了
React 和 Angular 双方的特长，并且都有从网页向移动端的兼容
- **Storybook** 估计对很多人会比较陌生了。这是一个搭建文档的工具，在搜索比较后，这个构造文档的工具是目前开发程度和活跃度最高的一个。
既然有了可以直接用的东西，重复造轮子能避免就避免。最近尝试对开源项目做贡献，正好在 [Storybook](https://getstorybook.io) 上实现了以前一直没有实现的愿望 :blush:。
- **Jest** 以前从来没写过单元测试，比较了现有的 Mocha、Jasmine 和 Jest，现在使用 Jest 的 Snapshot，是目前的杀手级功能，
NPM 热度中 Jest 在去年 9 月更新这个功能后下载量一直在上升，并且很多文章都提到对组件测试的帮助。
Storybook Testing 里说到了 Structural Testing、Interaction Testing 和 CSS/Style Testing，后面需要考虑加入。
打算在博客上试试 Travis CI 做链接测试，公司里用的 Jenkins 界面实在难以忍受
- **ESLint/StyleLint** 说白了就是一个统一代码写作格式规范的辅助工具，目前 JS 有了 Standard 标准，
同时 CSS 代码标准开始在社区里逐渐达成共识，这东西比把代码规范写下来要有用的多了


## 3. 感受

**要吐槽的有**

- 组长不懂技术
- 没有专业的界面设计师，更别说美学设计师了
- 另一位前端开发者并不是最佳实践倡导型（我不知道是不是自己被美学渲染的也开始要求技术上的美了）
- 我觉得敏捷开发很不适合带有研究性质工作

**感觉不错的是**

- 有其他组的组员在不同方面给我一些意见，并且还是有最佳实践倡导的同事的
- 压力并不大，可能反而出于组长不懂技术
- 在各种各样的试错后能让自己有更好的决定
- 每次能够成功编译或是运行的时候还是会小兴奋一下～

![](/assets/img/patterns-galaxy.jpg)

现在的进度在制作一些新页面会用到的组件，整体来看组件层面的 JS 代码难度要比逻辑实现要简单一些 :clap:。感觉现在写前端对初学者变得很陡峭了，
主要是库太多，不好选啊，Progressive Web App 概念也在散开，Web 和原生应用的界限也开始模糊。相信在百家争鸣过后总会有大一统的时候吧，
个人还是喜欢以前移动应用原生开发较为单一选择的学习方式。在 JS 世界里，知识刷新速率真很快。