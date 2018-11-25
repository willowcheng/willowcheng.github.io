---
lang: zh
title: 一些CSS与中文相关的特性
description: 整理了下观察到的CSS针对中文显示不同特性，很有趣
image: /assets/img/css-calligraphy.jpg
tag: css, ui设计
permalink: /zh/blog/css-mystery-in-chinese-language/
---

在[FITC](https://fitc.ca){:target='_blank'}会议上[Rachel Andrew](https://rachelandrew.co.uk){:target='_blank'}
聊到很多关于CSS（样式表）的新特性，其中看到关于`writing-mode`里CSS对拉丁语言和象形语言的不同处理（例如英语和汉语），
发现非常有趣，也让我很兴奋，CSS更加国际化了。

这段时间写CSS比较多，在此整理了一些发现的与中文有关的CSS特性 :eyes:。

## 竖向写作 `writing-mode: vertical-lr;`

<p data-height="560" data-theme-id="light" data-slug-hash="QJxvXW" data-default-tab="html,result" data-user="willowcheng" data-pen-title="Writing mode example" class="codepen">See the Pen <a href="https://codepen.io/willowcheng/pen/QJxvXW/">Writing mode example</a> by Willow Cheng (<a href="https://codepen.io/willowcheng">@willowcheng</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

https://www.chenhuijing.com/zh-type/

## 全宽的字符单位结果 `width: 10ch;`

## 本土语言的列表编号 `list-style-type: cjk-ideographic;`

## 系统原生字体的中文声明 `font-family: Tahoma, Helvetica, Arial, "Microsoft Yahei","微软雅黑", STXihei, "华文细黑", sans-serif;`

http://www.kendraschaefer.com/2012/06/chinese-standard-web-fonts-the-ultimate-guide-to-css-font-family-declarations-for-web-design-in-simplified-chinese/

## 可变字体（多比重）`transition: font-weight;`

https://alligator.io/css/variable-fonts/
