---
lang: en
title: How to Add Portfolio to Shopify Store (Part 1)
description: Shopify is ready to use for creating products, collections, but it doesn’t have portfolio feature comparing with Wordpress. I explored extending features from existing theme, and hope this general strategy helps you. 
tag: development
bilingual: no
image: /assets/img/pink-and-black-ink.jpg
permalink: /blog/how-to-add-portfolio-to-shopify-store-part-1/
redirect_from: /2018/03/18/how-to-add-portfolio-to-shopify-store-part-1/
---

[Shopify](https://www.shopify.com/?ref=planet-willow) is designed for selling products online, and online store is almost the most important part for customers
recognizing your store branding and buy products. However,
it doesn’t have [Portfolio](https://en.support.wordpress.com/portfolios/) feature which Wordpress
have been using for years.

Although it's a pity that Shopify doesn't provide it and **most themes don't actually design portfolio page** :disappointed:,
it makes sense to me portfolio is not a common usage for most online stores which Shopify only builds for essentials.

I’m going to use Shopify’s default theme -- [Debut](https://themes.shopify.com/themes/debut/styles/default) as an example to work you through how to build portfolio step by step:
1. Duplicate theme file
2. Create alternate template
3. Create customized section
4. Create project
5. Remove add to cart button

![Debut theme screenshot](/assets/img/debut-theme-screenshot.png)

## 1. Duplicate theme file

Go to your Shopify store, on the left sidebar, **Sales Channels** -> **Online Store** -> **Themes** -> **Debut**
-> **Actions** -> **Duplicate**

![Duplicate Shopify theme screenshot](/assets/img/duplicate-shopify-theme-screenshot.png)

You should be able to see a new theme called *Copy Of Debut* in **More themes** section.

## 2. Create alternate template for project

Click on **Actions** -> **Edit code**, you will be directed to online theme editor. Shopify theme allows alternate template
which can use different layout then default ones. Inside `Templates` folder,
click on **Add a new template** and choose `product` as what the new template for, giving a name e.g. `project`.

![Create alternate template screenshot](/assets/img/create-alternate-template-screenshot.png)

The reason to use product is we want to use Collections feature in Part 2 as **Portfolio** list page which can include
projects whichever are assigned to the alternate template.

Now you should see a file called `product.project.liquid`. It comes with pre defined populated code.

![Product project alternate template screenshot](/assets/img/product-project-alternate-template-screenshot.png)

## 3. Create customized section for project

The template would simply copy from `product.liquid` file. It uses `product-template` section as layout,
and we don’t actually need shopping features as what script says,
so we’re going to duplicate `product-template` section file and create customization.

Go to **Sections** -> **Add a new section** called `project-template.liquid`,
and copy entire code from `product-template.liquid` to `project-template.liquid`

Go back to `product.project.liquid`, replace `product-template.liquid` with `project-template.liquid`,
which means we want to use project layout for project alternate template. `Section` is being used as part of template,
the naming of `-template` is just a name (which I think it's confusing).

![Project template section screenshot](/assets/img/project-template-section-screenshot.png)

## 4. Create project

As Shopify only recognize published theme for alternate template, we have to publish **Copy Of Debut** to be able to
add product which is applied with `product.project.liquid` template.

We're going to publish **Copy Of Debut** theme first. Click on **Actions** -> **Publish**,
**Copy Of Debut** would replace **Debut** theme.

![Publish theme screenshot](/assets/img/publish-theme-screenshot.png)

On left sidebar, go to **Products** and **Add product**. Now you should be able to see **Theme templates** section
on the right!

![Choose product alternate template](/assets/img/choose-product-alternate-template.png)

**To prevent this project appears as product in your collections,
I'd recommend to use Project as product type and make sure it's excluded in all collections.**

![Exclude project from collection screenshot](/assets/img/exclude-project-from-collection-screenshot.png)

Fill in some information to the project, uncheck **shipping**, remove variants and set price as *$0*.
Click on **View** below project title and you’d be able to preview the project.

## 5. Remove add to cart button

![Preview project screenshot](/assets/img/preview-project-screenshot.png)

As the preview shows, **Add to Cart** is not what we need for project, so we need to remove it.
For different themes, it can be hard to find out which part you want to remove.
Try to use inspection mode in browser (right click -> **inspect**), e.g. I found the piece with `<form>` indicates the **Add to Cart** button.
when I press *delete* on keyboard, it would remove `<form>` from the
page (it’s local action which means doesn’t actually have impact for next of page loaded).

![Find add to cart button code screenshot](/assets/img/find-add-to-cart-button-code-screenshot.png)

Then go back to theme code, **Sales Channel** -> **Online Store** -> **Copy Of Debut** -> **Edit code**,
go to `Sections` -> `project-template.liquid`, you can find `<form>` on line 141.
Fold the code block by clicking on little triangle on the left, and delete this line.

![Remove form code screenshot](/assets/img/remove-form-code-screenshot.png)

You should be able to see that **Add to Cart** button is removed from layout. :grinning:

![Add to cart is removed screenshot](/assets/img/add-to-cart-is-removed-screenshot.png)

Next, remove the price y collapsing following line and delete and block

![Remove price from project screenshot](/assets/img/remove-price-from-project-screenshot.png)

[Part 2](/2018/04/15/how-to-add-portfolio-to-shopify-store-part-2/) will walk you through how to properly use collection as portfolio list page that lists projects.
