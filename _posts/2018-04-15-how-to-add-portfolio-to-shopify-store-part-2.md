---
title: How to Add Portfolio to Shopify Store (Part 2)
description: Shopify is ready to use for creating products, collections, but it doesn’t have portfolio feature comparing with Wordpress. I explored extending features from existing theme, and hope this general strategy helps you.
tag: development
bilingual: no
image: /assets/img/yellow-ink-with-black-drops.jpg
permalink: /2018/04/15/how-to-add-portfolio-to-shopify-store-part-2/
---

Now you've walked through [How to Add Portfolio to Shopify Store (Part 1)](/2018/03/18/how-to-add-portfolio-to-shopify-store-part-1/)
and have a working project page that inherits design from product.
Next, we'd like to have a list page which can list all projects and leverage collection feature from [Shopify](https://www.shopify.com/?ref=planet-willow) store. :stuck_out_tongue:

1. Create collection
2. Create alternate template for collection
3. Customize portfolio template section
  - Change count wording
  - Remove price tag
  - (Bonus) Apply to list layout
4. Last

## 1. Create collection

Go to your Shopify store dashboard, go to **Products** -> **Collections** -> **Create collection**.
In **Conditions**, choose **Product type** which is equal to **Project**.
By this way, any projects that are assigned to the type of **Project** will appear as the item in this collection.

![Choose product type in collection](/assets/img/choose-product-type-in-collection-screenshot.png)

Let's call this collection as *Portfolio*.

## 2. Create alternate template for collection

The default collection page uses wording of store products, and possibly include prices.
As in this case, [Debut](https://themes.shopify.com/themes/debut/styles/default) theme.

![Initial portfolio collection page screenshot](/assets/img/initial-portfolio-collection-page-screenshot.png)

We want to change theme specifically for portfolio collection while keep original one for products collection.
It’s similar to what you’ve finished in [Part 1](/2018/03/18/how-to-add-portfolio-to-shopify-store-part-1/)
for creating alternate template for project. We'll do same thing for the portfolio collection. :smiley:

![Create collection alternate template screenshot](/assets/img/create-collection-alternate-template-screenshot.png)

- Create alternate template for collection as `collection.portfolio.liquid`
- Change included section from `collection-template` to `portfolio-template`
- Create new section as `portfolio-template`
- Copy entire code content from `collection-template` to `portfolio-template`

![Change collection template screenshot](/assets/img/change-collection-template-screenshot.png)
Save code changes, go back to *Portfolio* collection and apply **collection.portfolio** template in right sidebar.

## 3. Customize portfolio template section

### Change count wording

The products count should be replaced by projects count, and price tag needs to be removed.

![Find products count element screenshot](/assets/img/find-products-count-element-screenshot.png)

By inspecting the page, we can find the products count content is wrapped inside element that has `.filters-toolbar__product-count` class name.
Thus, we can locate line 87 by searching class name as keyword.

![Find products count in code screenshot](/assets/img/find-products-count-in-code-screenshot.png)

`<span class="filters-toolbar__product-count">...collections.general.items_with_count...</span>`

The text comes from `collections.general.items_with_count` which means the content key inside `/Locales`, and it is used for internationalization purpose.
Go to **Locales** -> **en.default.json** and search `items_with_count`

![Find count words in locale screenshot](/assets/img/find-count-words-in-locale-screenshot.png)

Copy following code right after, and change `items_with_count` to `project_items_with_count` as an idential key,
change `product`/`products` to `project`/`projects` accordingly.
(Don’t forget to add a comma for `items_with_count` closing bracket :grinning:)

![Add custom locale screenshot](/assets/img/add-custom-locale-screenshot.png)

To finish changing the text, replace `items_with_count` with `project_items_with_count` in `portfolio-template.liquid` in line 87.

![Remaining price tag screenshot](/assets/img/remaining-price-tag-screenshot.png)

### Remove price tag

![Inspect price element screenshot](/assets/img/inspect-price-element-screenshot.png)

By default, [Debut](https://themes.shopify.com/themes/debut/styles/default) uses grid layout for collection items.
Same as before inspecting the price element in browser.
You could use similar strategy to search class name `.grid-view-item__meta` in `portfolio-template.liquid`.
However, the code logic is a bit complicated that the static output is used as examples.

To be smart, I can understand it comes from `product-price.liquid` as comment says.

![Product card grid reference screenshot](/assets/img/product-card-grid-reference-screenshot.png)

Line 157 in `portfolio-template.liquid` indicates reference of using `product-card-grid` snippet,
and we can find `product-card-grid.liquid` references `product-price`.
In this case, we'd like to create `project-card-grid.liquid` which removes price tag entirely.

![Create project card grid screenshot](/assets/img/create-project-card-grid-screenshot.png)

![Remove price code screenshot](/assets/img/remove-price-code-screenshot.png)

At last, change `product-card-grid` to `project-card-grid` in `portfolio-template.liquid`.

![Portfolio page result screenshot](/assets/img/portfolio-page-result-screenshot.png)

Hurrey! We are finally here! :satisfied:

### (Bonus) Apply to list layout

You probably also notice there is another layout for collection which is list layout.
It references `product-card-list` rather than `product-card-grid`.
If you need to use that, simply do similar thing as above to remove price tag. :wink:

## 4. Last

There are more things you may encounter according to different settings of different themes.
It can be removing unrelated code, customzing layout from code, etc.
Find a [Shopify expert](https://experts.shopify.com) (find a developer in this case) is probably a good asset,
if struggling with code is really annoyed to you. :performing_arts: