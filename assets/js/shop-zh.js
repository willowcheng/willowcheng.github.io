(function() {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'shop.willowcheng.com',
      storefrontAccessToken: '85bdc1b4d79f3db3f111d9caad08d947',
      language: 'zh-CN',
    });
    ShopifyBuy.UI.onReady(client).then(function(ui) {
      ui.createComponent('product', {
        id: '4723396051033',
        node: document.getElementById('product'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                },
                "carousel-button": {
                  "display": "none"
                },
                "max-width": "400px",
                "margin-left": "0"
              },
              "title": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "font-weight": "700",
                "line-height": "1.65",
                "font-size": "1.35em",
                "color": "#000000"
              },
              "button": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000",
                ":hover": {
                  "background-color": "rgba(52,52,52,0.1)"
                },
                "background-color": "#ffffff",
                ":focus": {
                  "background-color": "#ffffff",
                },
                "border-radius": "5px",
                "box-shadow": "inset 0 0 0 2px #000",
                "padding-left": "46px",
                "padding-right": "46px",
                "font-weight": "700",
              },
              "price": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "compareAt": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "unitPrice": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              }
            },
            "buttonDestination": "modal",
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "options": false,
            },
            "width": "800px",
            "text": {
              "button": "了解更多"
            },
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px"
                }
              }
            },
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000",
                ":hover": {
                  "background-color": "rgba(52,52,52,0.1)"
                },
                "background-color": "#ffffff",
                ":focus": {
                  "background-color": "#ffffff"
                },
                "border-radius": "5px",
                "box-shadow": "inset 0 0 0 2px #000",
                "padding-left": "46px",
                "padding-right": "46px",
                "font-weight": "700",
              },
              "title": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "font-weight": "700",
                "font-size": "1.35em",
                "line-height": "1.65",
                "color": "#000000"
              },
              "price": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "compareAt": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "unitPrice": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "description": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              }
            },
            "width": "1030px",
            "text": {
              "button": "加入购物车",
              "font-weight": "700",
            }
          },
          "cart": {
            "styles": {
              "button": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000",
                ":hover": {
                  "background-color": "rgba(52,52,52,0.1)"
                },
                "background-color": "#ffffff",
                ":focus": {
                  "background-color": "#ffffff"
                },
                "border-radius": "5px",
                "box-shadow": "inset 0 0 0 2px #000",
                "padding-left": "46px",
                "padding-right": "46px",
                "font-weight": "700",
              },
              "title": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "header": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "lineItems": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "subtotalText": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "subtotal": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "notice": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "currency": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "close": {
                "color": "#000000",
                ":hover": {
                  "color": "#000000"
                }
              },
              "empty": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "noteDescription": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "discountText": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              },
              "discountIcon": {
                "fill": "#000000"
              },
              "discountAmount": {
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "color": "#000000"
              }
            },
            "text": {
              "title": "购物车",
              "empty": "空空的购物车",
              "total": "合计",
              "button": "结算",
              "notice": "运费与折扣码在结算时添加",
            },
            "popup": false,
          },
          "toggle": {
            "styles": {
              "toggle": {
                "border-radius": "5px 0 0 5px",
                "font-family": "-apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft Yahei',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',Arial,sans-serif",
                "background-color": "#000000",
                ":hover": {
                  "background-color": "#343434"
                },
                ":focus": {
                  "background-color": "#000000"
                }
              }
            },
            "text": {
              "title": "购物车",
            },
          },
          "lineItem": {
            "styles": {
              "variantTitle": {
                "color": "#000000"
              },
              "title": {
                "color": "#000000"
              },
              "price": {
                "color": "#000000"
              },
              "fullPrice": {
                "color": "#000000"
              },
              "discount": {
                "color": "#000000"
              },
              "discountIcon": {
                "fill": "#000000"
              },
              "quantity": {
                "color": "#000000"
              },
              "quantityIncrement": {
                "color": "#000000",
                "border": "1.5px solid #000",
                "border-left": "none",
                "border-radius": "0 5px 5px 0",
                ":hover": {
                  "background-color": "rgba(52,52,52,0.1)"
                },
              },
              "quantityDecrement": {
                "color": "#000000",
                "border": "1.5px solid #000",
                "border-right": "none",
                "border-radius": "5px 0 0 5px",
                ":hover": {
                  "background-color": "rgba(52,52,52,0.1)"
                },
              },
              "quantityInput": {
                "color": "#000000",
                "border": "1.5px solid #000",
              }
            }
          }
        },
      });
    });
  }
})(); /*]]>*/
