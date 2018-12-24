---
lang: en
title: CSS Animation Practice of Beetle Dune
description: The Beetle Dune Convertible caught my eyes in Toronto Auto show, which I got the motivation to apply CSS animation from skills learned and tried to create simplified Beetle outline.
tag: design, animation
image: /assets/img/beetle-dune-colored.jpg
permalink: /blog/beetle-dune-svg-animation/
redirect_from: /2017/02/25/beetle-dune-svg-animation/
---

The finalized graphic and animation in CodePen :smirk:

<img alt="Beetle dune in gradient background color" src="/assets/img/beetle-dune-colored.jpg" style="width: 640px;"/>

<p data-height="420" data-theme-id="light" data-slug-hash="ZeYPOW" data-default-tab="result" data-preview="true" data-user="willowcheng" data-embed-version="2" data-pen-title="Beetle Dune SVG Animation" class="codepen">See the Pen <a href="http://codepen.io/willowcheng/pen/ZeYPOW/">Beetle Dune SVG Animation</a> by Willow Cheng (<a href="http://codepen.io/willowcheng">@willowcheng</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


Have learned CSS animation courses in [Treehouse](http://referrals.trhou.se/willowcheng) , I was wondering if I can find something to practice.
The Beetle Dune Convertible looks awesome as I saw it in Toronto Auto Show last weekend. The idea came to me to create low-fidelity graphic with animation. Found a picture showing its front face, so I started to imitate it.
Graphic design doesn't seem to be an easy work for me with no background for vector creation. However, I can do simplification just like what I did in UI design and Sketch provides me nice tools such as **Edit** and **Scissors** to meet my expectation. If there is something too hard, I'll just do it in my way :wink:。

![Beetle Dune front face](https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2016/01/2016-Volkswagen-Beetle-Dune-1-121.jpg)

By defining CSS `keyframes`, there are huge opportunities to create such complex animations, while `animation-delay` can control the order of elements animations. The single `animation` property can also include related properties collection with particular order (I believe some pre-defined key words can be used too as experimented). Check [animation - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) for more information.
The inline SVG is the same as HTML which includes tags, attributes and values. Taking advantage of **class** and **id** is definitely a big plus to creativity from engineer perspective. There are several `keyframes` I defined: `grow`, `flash`, `offset`, etc. 
Several items are worth to note：

1. The outline of the car used the trick from [Treehouse](http://referrals.trhou.se/willowcheng) which made the illusion by setting a enough long length of dash. By controlling `stroke-dasharray` and `stroke-dashoffset` in `keyframes`, the result becomes that outline started from one point to the end which looks interesting :grinning:. (detail is in CodePen HTML/CSS tabs)

2. The headlights are controlled by `scale()`. To make it feel more natural, I've set a slightly larger number at around 80% in timeline. When it comes back to normal size at last, the visual effect is good just like having space beyond size limit.

3. Windscreen and the line under air intake used `rotateY()` to fake your eyes which they expand themselves from horizontal center point. The values defined are from 90 degree to 0 degree and y axis performs like connection of your arm and body. Cool~

4. Daytime lights look pretty as it has infinite animation of scaling. Setting pseudo class `nth-of-type()`, different delay values can create messy start which they look beautify with unpredictable pattern. (I actually wonder if these daytime lights make beetle dune girlish, anyway)