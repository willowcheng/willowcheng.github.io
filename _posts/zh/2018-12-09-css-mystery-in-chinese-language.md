---
lang: zh
title: CSS与中文相关的一些特性
description: 整理了一些观察到的CSS针对中文显示不同特性，可以看到CSS也在往国际化发展中，很有趣
image: /assets/img/css-calligraphy.jpg
tag: css, ui设计
permalink: /zh/blog/css-mystery-in-chinese-language/
bilingual: no
---

在[FITC](https://fitc.ca){:target='_blank'}会议上[Rachel Andrew](https://rachelandrew.co.uk){:target='_blank'}
聊到很多关于CSS（样式表）的新特性，其中看到关于`writing-mode`里CSS对拉丁语言和象形语言的不同处理（例如英语和汉语），
发现非常有趣，也让我很兴奋，CSS更加国际化了。

这段时间写CSS比较多，在此整理了一些发现的与中文有关的CSS特性 :eyes:。

## 1. 竖向写作 `writing-mode: vertical-lr;`

<p class="ciu_embed" data-feature="css-writing-mode" data-periods="future_1,current" data-accessible-colours="false"> <a href="http://caniuse.com/#feat=css-writing-mode"> <picture> <source type="image/webp" srcset="https://res.cloudinary.com/ireaderinokun/image/upload/v1544387742/caniuse-embed/css-writing-mode-2018-12-9.webp"> <source type="image/png" srcset="https://res.cloudinary.com/ireaderinokun/image/upload/v1544387742/caniuse-embed/css-writing-mode-2018-12-9.png"> <source type="image/jpeg" srcset="https://res.cloudinary.com/ireaderinokun/image/upload/v1544387742/caniuse-embed/css-writing-mode-2018-12-9.jpg"> <img src="https://res.cloudinary.com/ireaderinokun/image/upload/v1544387742/caniuse-embed/css-writing-mode-2018-12-9.png" alt="Data on support for the css-writing-mode feature across the major browsers from caniuse.com"> </picture> </a> </p>

CSS的布局部分是由Rachel主导的，作为编辑的她，在布局尤其注重不同写作方式的影响。
竖向写作是一个新特性，允许文字从横向转为竖向来表达，很容易联想到古汉文在竹简上的竖向写作，示例如下：
<p class="gutter-bottom" data-height="560" data-theme-id="light" data-slug-hash="QJxvXW" data-default-tab="html,result" data-user="willowcheng" data-pen-title="Writing mode example" class="codepen">See the Pen <a href="https://codepen.io/willowcheng/pen/QJxvXW/">Writing mode example</a> by Willow Cheng (<a href="https://codepen.io/willowcheng">@willowcheng</a>) on <a href="https://codepen.io">CodePen</a>.</p>

`writing-mode`同时也是少有的会对不同语言有不同表现的一个CSS属性，W3C的文档里没有具体表明。

> 中文在`vertical-lr`或`vertical-rl`下每个字符并不会发生旋转，而英文和阿拉伯数字则会把整个字符旋转90度

日文、韩文以及喃文（越南汉文表中）里和中文遵循一样的规则，拉丁语系如西班牙语、法语等和英语保持一致。

推荐一个中文竖向写作的页面-––[文字的故事](https://www.chenhuijing.com/zh-type/)，我个人非常看好竖向对以后中文本土设计的影响。

## 2. 全宽的字符单位结果 `width: 10ch;`

<p class="ciu_embed" data-feature="ch-unit" data-periods="future_1,current" data-accessible-colours="false"> <a href="http://caniuse.com/#feat=ch-unit"> <picture> <source type="image/webp" srcset="https://res.cloudinary.com/ireaderinokun/image/upload/v1544387709/caniuse-embed/ch-unit-2018-12-9.webp"> <source type="image/png" srcset="https://res.cloudinary.com/ireaderinokun/image/upload/v1544387709/caniuse-embed/ch-unit-2018-12-9.png"> <source type="image/jpeg" srcset="https://res.cloudinary.com/ireaderinokun/image/upload/v1544387709/caniuse-embed/ch-unit-2018-12-9.jpg"> <img src="https://res.cloudinary.com/ireaderinokun/image/upload/v1544387709/caniuse-embed/ch-unit-2018-12-9.png" alt="Data on support for the ch-unit feature across the major browsers from caniuse.com"> </picture> </a> </p>

CSS单位中`ch`可能是浏览器兼容格式里最冷门的一种，表达大小/长度信息和具体尺寸无关，是非常有创造力的单位。
在我的实践中，这个单位在英文段落限制每行间的长度非常有帮助（假设字体使用诸如`vw`、`vh`这样的可响应式单位）。
相信用过中文打字的都会知道全角和半角两种模式，而汉字是全角字符，即占用两个基础字符宽度，
例如`安`占的逻辑宽度和`an`一样。

<p data-height="265" data-theme-id="light" data-slug-hash="XoWZmq" data-default-tab="css,result" data-user="willowcheng" data-pen-title="ch(character) unit for Chinese example" class="codepen">See the Pen <a href="https://codepen.io/willowcheng/pen/XoWZmq/">ch(character) unit for Chinese example</a> by Willow Cheng (<a href="https://codepen.io/willowcheng">@willowcheng</a>) on <a href="https://codepen.io">CodePen</a>.</p>

> 每`2ch`所代表的是一个中文字符

从这一点上看，这个单位也很国际化，对不同语言的实际宽度控制是几乎差不多。
顺便想说，中文在版面设计上没有英文单词在行末产生的曲线，天生有着左右对齐的美感。:art:

## 3. 本土语言的列表编号 `list-style-type: cjk-earthly-branch;`

偶然在Chrome的开发者工具里写`list-style-type`的时候发现的，这个属性的很多值目前只有部分浏览器支持。
体现的是有序列表用非阿拉伯数字的序列，例如`子`、`丑`、`寅`、`卯`。
Caniuse目前没有收录关于`list-style-type`的浏览器支持情况，
而[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#Browser_compatibility)里提到了部分值在有些浏览器下仍然处于实验状态。

试了下`cjk-earthly-branch`、`cjk-heavenly-stem`和`cjk-ideographic`在Safari、Chrome和Firefox最新版本下都是支持的，示例如下：

<p data-height="265" data-theme-id="light" data-slug-hash="LMYQPM" data-default-tab="css,result" data-user="willowcheng" data-pen-title="List style type example" class="codepen">See the Pen <a href="https://codepen.io/willowcheng/pen/LMYQPM/">List style type example</a> by Willow Cheng (<a href="https://codepen.io/willowcheng">@willowcheng</a>) on <a href="https://codepen.io">CodePen</a>.</p>

> 善用部分浏览器支持的`list-style-type`有序列表特殊值适应本土化设计

## 4. 系统原生字体的中文声明 `font-family: Tahoma, Helvetica, Arial, "Microsoft Yahei","微软雅黑", STXihei, "华文细黑", sans-serif;`

系统原生字体栈的概念我最先在[Bootstrap](https://getbootstrap.com/docs/4.1/content/reboot/#native-font-stack)上看到，顾名思义是指在没有自定义字体的情况下使用系统的本地字体。
明显的优势就是不需要任何的字体依赖和适应各个平台的字体选择，而劣势就是字体方面不同平台的显示不同影响设计输入。

[A Guide to CSS Font Family Declarations for Web Design in Simplified Chinese](http://www.kendraschaefer.com/2012/06/chinese-standard-web-fonts-the-ultimate-guide-to-css-font-family-declarations-for-web-design-in-simplified-chinese/)里详细提到了中文系统原生字体的声明方式，
`font-family: Tahoma, Helvetica, Arial, "Microsoft Yahei","微软雅黑", STXihei, "华文细黑", sans-serif;`，英文的字体类型放在前面可以兼容使用例如英文版系统但同时安装中文字体的设备。:stuck_out_tongue_winking_eye:

> 声明系统原生中文字体时将英文名放前

## 5. 可变字体（多比重）`transition: font-weight;`

<p class="ciu_embed" data-feature="variable-fonts" data-periods="future_1,current" data-accessible-colours="false"> <a href="http://caniuse.com/#feat=variable-fonts"> <picture> <source type="image/webp" srcset="https://res.cloudinary.com/ireaderinokun/image/upload/v1544388806/caniuse-embed/variable-fonts-2018-12-9.webp"> <source type="image/png" srcset="https://res.cloudinary.com/ireaderinokun/image/upload/v1544388806/caniuse-embed/variable-fonts-2018-12-9.png"> <source type="image/jpeg" srcset="https://res.cloudinary.com/ireaderinokun/image/upload/v1544388806/caniuse-embed/variable-fonts-2018-12-9.jpg"> <img src="https://res.cloudinary.com/ireaderinokun/image/upload/v1544388806/caniuse-embed/variable-fonts-2018-12-9.png" alt="Data on support for the variable-fonts feature across the major browsers from caniuse.com"> </picture> </a> </p>

英文的网站通常会有很多有意思的字体，但实际上大同小异的很多。可能是英文字母有限，
专门研究字体的人会给字符的不同部分做概括，
例如`x-height`（字符主干高度）、`seris`（衬线体）、`descent`（下方区，例如`p`的下部尾巴）。

而中文字符非常多，我们使用了部首来做一些划分，但是复杂度依然很高，古代流行的手写实际上对文字写意追求更多。
下载过中文字体的朋友会知道中文字体包的大小一般会是英文的30到50倍，这就导致了当网站需要完整字体包来适配内容的时候基本只考虑系统中文字体。

动辄10、20MB的字体包对网站性能是个绝对的负担，何况还要考虑到不同的比重的需求，例如`light`、`regular`、`medium`、`bold`等等。
而可变字体不仅可以大大减少所有比重下字体包整体大小，同时由于计算性方式的基础原理也可以减少字体本身需要占用的空间，
号称全球首款的中文可变字体[文鼎晶熙黑体](http://www.arphic.com.cn/2017/11/07/全球首款-文鼎晶熙黑体支持可变字体格式/)竟然只有`101KB`! :scream:
甚至可以做[`transition: font-weight`](https://alligator.io/css/variable-fonts/)的动画，
可惜字体包目前所有字符各个比重的覆盖还不完整，示例如下：

<p style="max-width: 100%;" data-height="295" data-theme-id="light" data-slug-hash="jXOZBL" data-default-tab="html,result" data-user="willowcheng" data-pen-title="Chinese variable font example" class="codepen">See the Pen <a href="https://codepen.io/willowcheng/pen/jXOZBL/">Chinese variable font example</a> by Willow Cheng (<a href="https://codepen.io/willowcheng">@willowcheng</a>) on <a href="https://codepen.io">CodePen</a>.</p>

> 利用中文可变字体小体积和灵活比重的优势应用在网页设计中

<script src="https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/caniuse-embed.min.js"></script>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
