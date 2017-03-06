---
title: CSS 动画练习 - 沙丘甲壳虫
description: 学了 CSS 动画一直苦于没有好的想法该练习什么，去了趟车展看到敞篷的沙丘甲壳虫顿时让我心动啊，所以想画个抽象的甲壳虫前脸来做，哈哈～
tag: 设计, 动画
image: /assets/img/beetle-dune-colored.jpg
lang: zh
date-zh: 2017年2月25日
permalink: /zh/2017/02/25/beetle-dune-svg-animation/
---

先来张抽象图最后的制作结果和 CodePen 的 CSS 动画草图 :smirk:

<img src="/assets/img/beetle-dune-colored.jpg" style="width: 640px;"/>

<p data-height="420" data-theme-id="light" data-slug-hash="ZeYPOW" data-default-tab="result" data-preview="true" data-user="willowcheng" data-embed-version="2" data-pen-title="Beetle Dune SVG Animation" class="codepen">See the Pen <a href="http://codepen.io/willowcheng/pen/ZeYPOW/">Beetle Dune SVG Animation</a> by Liu Cheng (<a href="http://codepen.io/willowcheng">@willowcheng</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


前段时间在 [Treehouse](http://referrals.trhou.se/willowcheng) 上看了些 CSS 动画的课程，一直想做点什么练练手，但是没好点子。
最近去趟车展看到敞篷版沙丘甲壳虫，顿时让我眼前一亮，就萌生了做个抽象线条图 + 动画的想法。网上找到了一个正面的前脸图，然后就模仿着画形状了。
第一次做底层的图形绘制，在线条的弧度方面不是非常理想，Sketch 提供的编辑工具和剪刀基本可以达到我需要的结果，太难的地方就只能发挥想象力来简化了 :wink:。

![](http://blog.caranddriver.com/wp-content/uploads/2016/03/2016-Volkswagen-Beetle-Dune-111-876x535.jpg)

整体上通过 CSS `keyframes` 不同百分比变化可以定义出复杂的动画效果，而通过动画的延迟 `animation-delay` 可以很好地控制各个元素呈现的顺序，在单个 `animation` 中可以依次定义动画类各个属性，参考 [animation - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)。
我在代码里定义了诸如 `grow`, `flash`, `offset` 等等不同的动画类型，而 inline SVG 的处理和普通 HTML 完全一样，依然可以用 **id** 和 **class** 进行元素定义、选取，这样 CSS 代码显得很整齐。
具体动画细节上有几点感触比较深：

1. 在轮廓的线条生成上用到了 [Treehouse](http://referrals.trhou.se/willowcheng) 上教的一个伪虚线控制小技巧。试验出线条长度，然后通过 `stroke-dasharray` 和 `stroke-dashoffset` 的变化勾勒线条。好比是虚线变成实线，只是这里虚线长度非常大，而造成了假象 :grinning:（详情见 CodePen HTML/CSS 代码）

2. 左右大灯显示是通过 `scale()` 来控制的，在显示接近完成，比如 80% 的时候，调成 `scale(1.1)`，增大为 1.1 倍再回到正常尺寸，可以有更自然的视觉效果，放佛元素有一定弹性

3. 挡风玻璃和进气格栅下的线用到了 `rotateY()` 来控制，坐标系里以 Y 轴为垂直轴承转动，从 90 度变成 0／180 度，就可以有从中间向外展开的效果

4. 左右大灯上的日间行车灯组加上了永久的变化动画，通过相同 **class** 的 `nth-of-type()` 来选取同类元素设置不同动画延迟，产生的效果有点点泪汪汪的样子（好吧，其实我有点纠结这些小灯加了是不是把车变的女性化了。。。）