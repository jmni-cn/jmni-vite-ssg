"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const React = require("react");
const jsxRuntime = require("react/jsx-runtime");
const server = require("react-dom/server");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
const jsxRuntime__namespace = /* @__PURE__ */ _interopNamespace(jsxRuntime);
const Fragment = jsxRuntime__namespace.Fragment;
const jsx = jsxRuntime__namespace.jsx;
const jsxs = jsxRuntime__namespace.jsxs;
const frontmatter$2 = void 0;
const toc$2 = [{
  "id": "\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF",
  "text": "\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF",
  "depth": 2
}, {
  "id": "\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF",
  "text": "\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF",
  "depth": 2
}, {
  "id": "\u5728-typescript-\u4E2D\u6A21\u62DF\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF",
  "text": "\u5728 TypeScript \u4E2D\u6A21\u62DF\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF",
  "depth": 2
}, {
  "id": "\u603B\u7ED3\u4E0E\u9884\u544A",
  "text": "\u603B\u7ED3\u4E0E\u9884\u544A",
  "depth": 2
}, {
  "id": "\u6269\u5C55\u9605\u8BFB",
  "text": "\u6269\u5C55\u9605\u8BFB",
  "depth": 2
}, {
  "id": "\u7C7B\u578B\u7C7B\u578B\u7CFB\u7EDF\u4E0E\u7C7B\u578B\u68C0\u67E5",
  "text": "\u7C7B\u578B\u3001\u7C7B\u578B\u7CFB\u7EDF\u4E0E\u7C7B\u578B\u68C0\u67E5",
  "depth": 3
}];
function _createMdxContent$2(props) {
  const _components = Object.assign({
    p: "p",
    div: "div",
    span: "span",
    pre: "pre",
    code: "code",
    strong: "strong",
    blockquote: "blockquote",
    a: "a",
    h2: "h2",
    em: "em",
    h3: "h3",
    ul: "ul",
    li: "li"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "\u5728 TypeScript \u4E2D\uFF0C\u4F60\u53EF\u80FD\u9047\u89C1\u8FC7\u4EE5\u4E0B\u8FD9\u6837\u201C\u770B\u8D77\u6765\u4E0D\u592A\u5BF9\uFF0C\u4F46\u7ADF\u7136\u80FD\u6B63\u5E38\u8FD0\u884C\u201D\u7684\u4EE3\u7801\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-typescript",
      children: [jsx(_components.span, {
        className: "lang",
        children: "typescript"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Cat"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "eat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Dog"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "eat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "feedCat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "cat"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Cat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "feedCat"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Dog"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "())"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u8FD9\u91CC\u7684 ", jsx(_components.code, {
        children: "feedCat"
      }), " \u51FD\u6570\u660E\u660E\u9700\u8981\u7684\u662F\u4E00\u53EA\u732B\uFF0C\u53EF\u4E3A\u4EC0\u4E48\u4E0A\u4F20\u4E00\u53EA\u72D7\u4E5F\u53EF\u4EE5\u5462\uFF1F\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u5C31\u662F TypeScript \u7684\u7C7B\u578B\u7CFB\u7EDF\u7279\u6027\uFF1A", jsx(_components.strong, {
        children: "\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF"
      }), "\uFF0C\u4E5F\u662F\u6211\u4EEC\u8FD9\u4E00\u8282\u8981\u5B66\u4E60\u7684\u6982\u5FF5\u3002\u6211\u4EEC\u4F1A\u4E86\u89E3\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u7684\u6BD4\u8F83\u65B9\u5F0F\uFF0C\u5BF9\u6BD4\u53E6\u4E00\u79CD\u7C7B\u578B\u7CFB\u7EDF\uFF08", jsx(_components.strong, {
        children: "\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF"
      }), "\uFF09\u7684\u5DE5\u4F5C\u65B9\u5F0F\uFF0C\u4EE5\u53CA\u5728 TypeScript \u4E2D\u53BB\u6A21\u62DF\u53E6\u4E00\u79CD\u7C7B\u578B\u7CFB\u7EDF\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u7684\u6982\u5FF5\u975E\u5E38\u57FA\u7840\u4F46\u5341\u5206\u91CD\u8981\uFF0C\u5B83\u4E0D\u4EC5\u80FD\u8BA9\u4F60\u660E\u786E\u7C7B\u578B\u6BD4\u8F83\u7684\u6838\u5FC3\u539F\u7406\uFF0C\u4ECE\u6839\u4E0A\u7406\u89E3\u6761\u4EF6\u7C7B\u578B\u7B49\u7C7B\u578B\u5DE5\u5177\uFF0C\u4E5F\u80FD\u591F\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\u5E2E\u4F60\u89E3\u51B3\u8BB8\u591A\u5E38\u89C1\u7684\u7C7B\u578B\u62A5\u9519\u3002"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsxs(_components.p, {
        children: ["\u672C\u8282\u4EE3\u7801\u89C1\uFF1A", jsx(_components.a, {
          href: "https://github.com/linbudu599/TypeScript-Tiny-Book/tree/main/packages/07-structual-type-system",
          children: "Structural Type System"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF",
        children: "#"
      }), "\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF"]
    }), "\n", jsx(_components.p, {
      children: "\u9996\u5148\u56DE\u5230\u6211\u4EEC\u5F00\u5934\u63D0\u51FA\u7684\u95EE\u9898\uFF0C\u5982\u679C\u6211\u4EEC\u4E3A Cat \u7C7B\u65B0\u589E\u4E00\u4E2A\u72EC\u7279\u7684\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65F6\u5019\u7684\u8868\u73B0\u624D\u662F\u7B26\u5408\u9884\u671F\u7684\uFF0C\u5373\u6211\u4EEC\u53EA\u80FD\u7528\u771F\u5B9E\u7684 Cat \u7C7B\u6765\u8FDB\u884C\u8C03\u7528\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-typescript",
      children: [jsx(_components.span, {
        className: "lang",
        children: "typescript"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Cat"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "meow"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "eat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Dog"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "eat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "feedCat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "cat"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Cat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u62A5\u9519\uFF01"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "feedCat"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Dog"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "())"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u8FD9\u662F\u56E0\u4E3A\uFF0CTypeScript \u6BD4\u8F83\u4E24\u4E2A\u7C7B\u578B\u5E76\u975E\u901A\u8FC7\u7C7B\u578B\u7684\u540D\u79F0\uFF08\u5373 ", jsx(_components.code, {
        children: "feedCat"
      }), " \u51FD\u6570\u53EA\u80FD\u901A\u8FC7 Cat \u7C7B\u578B\u8C03\u7528\uFF09\uFF0C\u800C\u662F\u6BD4\u8F83\u8FD9\u4E24\u4E2A\u7C7B\u578B\u4E0A\u5B9E\u9645\u62E5\u6709\u7684\u5C5E\u6027\u4E0E\u65B9\u6CD5\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u91CC\u5B9E\u9645\u4E0A\u662F\u6BD4\u8F83 Cat \u7C7B\u578B\u4E0A\u7684\u5C5E\u6027\u662F\u5426\u90FD\u5B58\u5728\u4E8E Dog \u7C7B\u578B\u4E0A\u3002"]
    }), "\n", jsxs(_components.p, {
      children: ["\u5728\u6211\u4EEC\u6700\u521D\u7684\u4F8B\u5B50\u91CC\uFF0CCat \u4E0E Dog \u7C7B\u578B\u4E0A\u7684\u65B9\u6CD5\u662F\u4E00\u81F4\u7684\uFF0C\u6240\u4EE5\u5B83\u4EEC\u867D\u7136\u662F\u4E24\u4E2A\u540D\u5B57\u4E0D\u540C\u7684\u7C7B\u578B\uFF0C\u4F46\u4ECD\u7136\u88AB\u89C6\u4E3A\u7ED3\u6784\u4E00\u81F4\uFF0C\u8FD9\u5C31\u662F\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u7684\u7279\u6027\u3002\u4F60\u53EF\u80FD\u542C\u8FC7\u7ED3\u6784\u7C7B\u578B\u7684\u522B\u79F0", jsxs(_components.strong, {
        children: ["\u9E2D\u5B50\u7C7B\u578B\uFF08", jsx(_components.em, {
          children: "Duck Typing"
        }), "\uFF09"]
      }), "\uFF0C\u8FD9\u4E2A\u540D\u5B57\u6765\u6E90\u4E8E", jsxs(_components.strong, {
        children: ["\u9E2D\u5B50\u6D4B\u8BD5\uFF08", jsx(_components.em, {
          children: "Duck Test"
        }), "\uFF09"]
      }), "\u3002\u5176\u6838\u5FC3\u7406\u5FF5\u662F\uFF0C", jsx(_components.strong, {
        children: "\u5982\u679C\u4F60\u770B\u5230\u4E00\u53EA\u9E1F\u8D70\u8D77\u6765\u50CF\u9E2D\u5B50\uFF0C\u6E38\u6CF3\u50CF\u9E2D\u5B50\uFF0C\u53EB\u5F97\u4E5F\u50CF\u9E2D\u5B50\uFF0C\u90A3\u4E48\u8FD9\u53EA\u9E1F\u5C31\u662F\u9E2D\u5B50"
      }), "\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u4E5F\u5C31\u8BF4\uFF0C\u9E2D\u5B50\u7C7B\u578B\u4E2D\u4E24\u4E2A\u7C7B\u578B\u7684\u5173\u7CFB\u662F\u901A\u8FC7\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u65B9\u6CD5\u6765\u5224\u65AD\u7684\u3002\u6BD4\u5982\u6700\u5F00\u59CB\u7684 Cat \u7C7B\u578B\u548C Dog \u7C7B\u578B\u88AB\u89C6\u4E3A\u540C\u4E00\u4E2A\u7C7B\u578B\uFF0C\u800C\u4E3A Cat \u7C7B\u578B\u6DFB\u52A0\u72EC\u7279\u7684\u65B9\u6CD5\u4E4B\u540E\u5C31\u4E0D\u518D\u80FD\u88AB\u89C6\u4E3A\u4E00\u4E2A\u7C7B\u578B\u3002\u4F46\u5982\u679C\u4E3A Dog \u7C7B\u578B\u6DFB\u52A0\u4E00\u4E2A\u72EC\u7279\u65B9\u6CD5\u5462\uFF1F"
    }), "\n", jsxs(_components.div, {
      className: "language-typescript",
      children: [jsx(_components.span, {
        className: "lang",
        children: "typescript"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Cat"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "eat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Dog"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "bark"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "eat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "feedCat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "cat"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Cat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "feedCat"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Dog"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "())"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u8FD9\u4E2A\u65F6\u5019\u4E3A\u4EC0\u4E48\u5374\u6CA1\u6709\u7C7B\u578B\u62A5\u9519\u4E86\uFF1F\u8FD9\u662F\u56E0\u4E3A\uFF0C\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u8BA4\u4E3A Dog \u7C7B\u578B\u5B8C\u5168\u5B9E\u73B0\u4E86 Cat \u7C7B\u578B\u3002\u81F3\u4E8E\u989D\u5916\u7684\u65B9\u6CD5 ", jsx(_components.code, {
        children: "bark"
      }), "\uFF0C\u53EF\u4EE5\u8BA4\u4E3A\u662F Dog \u7C7B\u578B\u7EE7\u627F Cat \u7C7B\u578B\u540E\u6DFB\u52A0\u7684\u65B0\u65B9\u6CD5\uFF0C\u5373\u6B64\u65F6 Dog \u7C7B\u53EF\u4EE5\u88AB\u8BA4\u4E3A\u662F Cat \u7C7B\u7684\u5B50\u7C7B\u3002\u540C\u6837\u7684\uFF0C\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u4E2D\u7684\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4E5F\u63D0\u5230\u4E86\u9E2D\u5B50\u6D4B\u8BD5\uFF1A", jsx(_components.em, {
        children: jsx(_components.strong, {
          children: "\u5982\u679C\u5B83\u770B\u8D77\u6765\u50CF\u9E2D\u5B50\uFF0C\u53EB\u8D77\u6765\u4E5F\u50CF\u9E2D\u5B50\uFF0C\u4F46\u662F\u5374\u9700\u8981\u7535\u6C60\u624D\u80FD\u5DE5\u4F5C\uFF0C\u90A3\u4E48\u4F60\u7684\u62BD\u8C61\u5F88\u53EF\u80FD\u51FA\u9519\u4E86\u3002"
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u66F4\u8FDB\u4E00\u6B65\uFF0C\u5728\u6BD4\u8F83\u5BF9\u8C61\u7C7B\u578B\u7684\u5C5E\u6027\u65F6\uFF0C\u540C\u6837\u4F1A\u91C7\u7528\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u8FDB\u884C\u5224\u65AD\u3002\u800C\u5BF9\u7ED3\u6784\u4E2D\u7684\u51FD\u6570\u7C7B\u578B\uFF08\u5373\u65B9\u6CD5\uFF09\u8FDB\u884C\u6BD4\u8F83\u65F6\uFF0C\u540C\u6837\u5B58\u5728\u7C7B\u578B\u7684\u517C\u5BB9\u6027\u6BD4\u8F83\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-typescript",
      children: [jsx(_components.span, {
        className: "lang",
        children: "typescript"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Cat"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "eat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "boolean"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "true"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Dog"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "eat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "number"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "599"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "feedCat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "cat"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Cat"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u62A5\u9519\uFF01"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "feedCat"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Dog"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "())"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "\u5BF9\u4E8E\u72EC\u7ACB\u51FD\u6570\u7C7B\u578B\u7684\u8FDB\u4E00\u6B65\u6BD4\u8F83\uFF0C\u6211\u4EEC\u4F1A\u5728\u540E\u9762\u7684\u300C\u51FD\u6570\u7C7B\u578B\u7684\u6BD4\u8F83\uFF1A\u7C7B\u578B\u7CFB\u7EDF\u4E2D\u7684\u534F\u53D8\u4E0E\u9006\u53D8\u300D\u4E00\u8282\u4E2D\u6DF1\u5165\u8BB2\u89E3\u3002"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "\u8FD9\u5C31\u662F\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u7684\u6838\u5FC3\u7406\u5FF5\uFF0C\u5373\u57FA\u4E8E\u7C7B\u578B\u7ED3\u6784\u8FDB\u884C\u5224\u65AD\u7C7B\u578B\u517C\u5BB9\u6027\u3002\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u5728 C#\u3001Python\u3001Objective-C \u7B49\u8BED\u8A00\u4E2D\u90FD\u88AB\u5E7F\u6CDB\u4F7F\u7528\u6216\u652F\u6301\u3002"
    }), "\n", jsxs(_components.p, {
      children: ["\u4E25\u683C\u6765\u8BF4\uFF0C\u9E2D\u5B50\u7C7B\u578B\u7CFB\u7EDF\u548C\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u5E76\u4E0D\u5B8C\u5168\u4E00\u81F4\uFF0C\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u610F\u5473\u7740", jsx(_components.strong, {
        children: "\u57FA\u4E8E\u5B8C\u5168\u7684\u7C7B\u578B\u7ED3\u6784\u6765\u5224\u65AD\u7C7B\u578B\u517C\u5BB9\u6027"
      }), "\uFF0C\u800C\u9E2D\u5B50\u7C7B\u578B\u5219\u53EA\u57FA\u4E8E", jsx(_components.strong, {
        children: "\u8FD0\u884C\u65F6\u8BBF\u95EE\u7684\u90E8\u5206"
      }), "\u6765\u51B3\u5B9A\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u6211\u4EEC\u8C03\u7528\u4E86\u8D70\u3001\u6E38\u6CF3\u3001\u53EB\u8FD9\u4E09\u4E2A\u65B9\u6CD5\uFF0C\u90A3\u4E48\u4F20\u5165\u7684\u7C7B\u578B\u53EA\u9700\u8981\u5B58\u5728\u8FD9\u51E0\u4E2A\u65B9\u6CD5\u5373\u53EF\uFF08\u800C\u4E0D\u9700\u8981\u7C7B\u578B\u7ED3\u6784\u5B8C\u5168\u4E00\u81F4\uFF09\u3002\u4F46\u7531\u4E8E TypeScript \u672C\u8EAB\u5E76\u4E0D\u662F\u5728\u8FD0\u884C\u65F6\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF08\u4E5F\u505A\u4E0D\u5230\uFF09\uFF0C\u540C\u65F6\u5B98\u65B9\u6587\u6863\u4E2D\u540C\u6837\u8BA4\u4E3A\u8FD9\u4E24\u4E2A\u6982\u5FF5\u662F\u4E00\u81F4\u7684\uFF08", jsx(_components.em, {
        children: jsx(_components.strong, {
          children: "One of TypeScript\u2019s core principles is that type checking focuses on the shape that values have. This is sometimes called \u201Cduck typing\u201D or \u201Cstructural typing\u201D."
        })
      }), "\uFF09\u3002\u56E0\u6B64\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u8BA4\u4E3A\u9E2D\u5B50\u7C7B\u578B\u4E0E\u7ED3\u6784\u5316\u7C7B\u578B\u662F\u540C\u4E00\u6982\u5FF5\u3002"]
    }), "\n", jsxs(_components.p, {
      children: ["\u9664\u4E86", jsx(_components.strong, {
        children: "\u57FA\u4E8E\u7C7B\u578B\u7ED3\u6784\u8FDB\u884C\u517C\u5BB9\u6027\u5224\u65AD\u7684\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF"
      }), "\u4EE5\u5916\uFF0C\u8FD8\u6709\u4E00\u79CD", jsx(_components.strong, {
        children: "\u57FA\u4E8E\u7C7B\u578B\u540D\u8FDB\u884C\u517C\u5BB9\u6027\u5224\u65AD\u7684\u7C7B\u578B\u7CFB\u7EDF"
      }), "\uFF0C\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF\u3002"]
    }), "\n", jsxs(_components.h2, {
      id: "\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF",
        children: "#"
      }), "\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF"]
    }), "\n", jsxs(_components.p, {
      children: ["\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF\uFF08", jsx(_components.strong, {
        children: "Nominal Typing System"
      }), "\uFF09\u8981\u6C42\uFF0C\u4E24\u4E2A\u53EF\u517C\u5BB9\u7684\u7C7B\u578B\uFF0C", jsx(_components.strong, {
        children: "\u5176\u540D\u79F0\u5FC5\u987B\u662F\u5B8C\u5168\u4E00\u81F4\u7684"
      }), "\uFF0C\u6BD4\u5982\u4EE5\u4E0B\u4EE3\u7801\uFF1A"]
    }), "\n", jsxs(_components.div, {
      className: "language-typescript",
      children: [jsx(_components.span, {
        className: "lang",
        children: "typescript"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "type"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "USD"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "number"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "type"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "number"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CNYCount"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "200"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "USDCount"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "USD"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "200"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "addCNY"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "source"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "source"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "addCNY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CNYCount"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "USDCount"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u5728\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u4E2D\uFF0CUSD \u4E0E CNY \uFF08\u5206\u522B\u4EE3\u8868\u7F8E\u5143\u5355\u4F4D\u4E0E\u4EBA\u6C11\u5E01\u5355\u4F4D\uFF09\u88AB\u8BA4\u4E3A\u662F\u4E24\u4E2A\u5B8C\u5168\u4E00\u81F4\u7684\u7C7B\u578B\uFF0C\u56E0\u6B64\u5728 ", jsx(_components.code, {
        children: "addCNY"
      }), " \u51FD\u6570\u4E2D\u53EF\u4EE5\u4F20\u5165 USD \u7C7B\u578B\u7684\u53D8\u91CF\u3002\u8FD9\u5C31\u5F88\u79BB\u8C31\u4E86\uFF0C\u4EBA\u6C11\u5E01\u4E0E\u7F8E\u5143\u8FD9\u4E24\u4E2A\u5355\u4F4D\u5B9E\u9645\u7684\u610F\u4E49\u5E76\u4E0D\u4E00\u81F4\uFF0C\u600E\u4E48\u80FD\u8FDB\u884C\u76F8\u52A0\uFF1F"]
    }), "\n", jsxs(_components.p, {
      children: ["\u5728\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF\u4E2D\uFF0CCNY \u4E0E USD \u88AB\u8BA4\u4E3A\u662F\u4E24\u4E2A\u5B8C\u5168\u4E0D\u540C\u7684\u7C7B\u578B\uFF0C\u56E0\u6B64\u80FD\u591F\u907F\u514D\u8FD9\u4E00\u60C5\u51B5\u53D1\u751F\u3002\u5728\u300A\u7F16\u7A0B\u4E0E\u7C7B\u578B\u7CFB\u7EDF\u300B\u4E00\u4E66\u4E2D\u63D0\u5230\uFF0C\u7C7B\u578B\u7684\u91CD\u8981\u610F\u4E49\u4E4B\u4E00\u662F", jsx(_components.strong, {
        children: "\u9650\u5236\u4E86\u6570\u636E\u7684\u53EF\u7528\u64CD\u4F5C\u4E0E\u5B9E\u9645\u610F\u4E49"
      }), "\uFF0C\u8FD9\u4E00\u70B9\u5728\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF\u4E2D\u7684\u4F53\u73B0\u8981\u66F4\u52A0\u660E\u663E\u3002\u6BD4\u5982\uFF0C\u4E0A\u9762\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7C7B\u578B\u7684\u7ED3\u6784\uFF0C\u6765\u8BA9\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u8BA4\u4E3A\u4E24\u4E2A\u7C7B\u578B\u5177\u6709\u7236\u5B50\u7C7B\u578B\u5173\u7CFB\uFF0C\u800C\u5BF9\u4E8E\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u7236\u5B50\u7C7B\u578B\u5173\u7CFB\u53EA\u80FD\u901A\u8FC7\u663E\u5F0F\u7684\u7EE7\u627F\u6765\u5B9E\u73B0\uFF0C\u79F0\u4E3A", jsx(_components.strong, {
        children: "\u6807\u79F0\u5B50\u7C7B\u578B\uFF08Nominal Subtyping\uFF09"
      }), "\u3002"]
    }), "\n", jsxs(_components.div, {
      className: "language-typescript",
      children: [jsx(_components.span, {
        className: "lang",
        children: "typescript"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Cat"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u5B9E\u73B0\u4E00\u53EA\u77ED\u6BDB\u732B\uFF01"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "ShorthairCat"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "extends"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB",
                fontWeight: "bold"
              },
              children: "Cat"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "C++\u3001Java\u3001Rust \u7B49\u8BED\u8A00\u4E2D\u90FD\u4E3B\u8981\u4F7F\u7528\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF\u3002\u90A3\u4E48\uFF0C\u6211\u4EEC\u662F\u5426\u53EF\u4EE5\u5728 TypeScript \u4E2D\u6A21\u62DF\u51FA\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF\uFF1F"
    }), "\n", jsxs(_components.h2, {
      id: "\u5728-typescript-\u4E2D\u6A21\u62DF\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u5728-typescript-\u4E2D\u6A21\u62DF\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF",
        children: "#"
      }), "\u5728 TypeScript \u4E2D\u6A21\u62DF\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF"]
    }), "\n", jsxs(_components.p, {
      children: ["\u518D\u770B\u4E00\u904D\u8FD9\u53E5\u8BDD\uFF1A", jsx(_components.strong, {
        children: "\u7C7B\u578B\u7684\u91CD\u8981\u610F\u4E49\u4E4B\u4E00\u662F\u9650\u5236\u4E86\u6570\u636E\u7684\u53EF\u7528\u64CD\u4F5C\u4E0E\u5B9E\u9645\u610F\u4E49"
      }), "\u3002\u8FD9\u5F80\u5F80\u662F\u901A\u8FC7\u7C7B\u578B\u9644\u5E26\u7684", jsx(_components.strong, {
        children: "\u989D\u5916\u4FE1\u606F"
      }), "\u6765\u5B9E\u73B0\u7684\uFF08\u7C7B\u4F3C\u4E8E\u5143\u6570\u636E\uFF09\uFF0C\u8981\u5728 TypeScript \u4E2D\u5B9E\u73B0\uFF0C\u5176\u5B9E\u6211\u4EEC\u4E5F\u53EA\u9700\u8981\u4E3A\u7C7B\u578B\u989D\u5916\u9644\u52A0\u5143\u6570\u636E\u5373\u53EF\uFF0C\u6BD4\u5982 CNY \u4E0E USD\uFF0C\u6211\u4EEC\u5206\u522B\u9644\u52A0\u4E0A\u5B83\u4EEC\u7684\u5355\u4F4D\u4FE1\u606F\u5373\u53EF\uFF0C\u4F46\u540C\u65F6\u53C8\u9700\u8981\u4FDD\u7559\u539F\u672C\u7684\u4FE1\u606F\uFF08\u5373\u539F\u672C\u7684 number \u7C7B\u578B\uFF09\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EA4\u53C9\u7C7B\u578B\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u4FE1\u606F\u7684\u9644\u52A0\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-typescript",
      children: [jsx(_components.span, {
        className: "lang",
        children: "typescript"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "declare"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "TagProtector"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "extends"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "string"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "protected"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " __tag__"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "type"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Nominal"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "U"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "extends"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "string"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "&"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "TagProtector"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "U"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["\u5728\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 TagProtector \u58F0\u660E\u4E86\u4E00\u4E2A\u5177\u6709 ", jsx(_components.code, {
        children: "protected"
      }), " \u5C5E\u6027\u7684\u7C7B\uFF0C\u4F7F\u7528\u5B83\u6765\u643A\u5E26\u989D\u5916\u7684\u4FE1\u606F\uFF0C\u5E76\u548C\u539F\u672C\u7684\u7C7B\u578B\u5408\u5E76\u5230\u4E00\u8D77\uFF0C\u5C31\u5F97\u5230\u4E86 Nominal \u5DE5\u5177\u7C7B\u578B\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u6709\u4E86 Nominal \u8FD9\u4E2A\u5DE5\u5177\u7C7B\u578B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u6765\u6539\u8FDB\u4E0B\u4E0A\u9762\u7684\u4F8B\u5B50\u4E86\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-typescript",
      children: [jsx(_components.span, {
        className: "lang",
        children: "typescript"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "type"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Nominal"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "number"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "type"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "USD"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Nominal"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "number"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "USD"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CNYCount"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "100"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "USDCount"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "100"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "USD"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "addCNY"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "source"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "source"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "addCNY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CNYCount"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CNYCount"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u62A5\u9519\u4E86\uFF01"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "addCNY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CNYCount"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "USDCount"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u8FD9\u4E00\u5B9E\u73B0\u65B9\u5F0F\u672C\u8D28\u4E0A\u53EA\u5728\u7C7B\u578B\u5C42\u9762\u505A\u4E86\u6570\u636E\u7684\u5904\u7406\uFF0C\u5728\u8FD0\u884C\u65F6\u65E0\u6CD5\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u9650\u5236\u3002\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4ECE\u903B\u8F91\u5C42\u9762\u5165\u624B\u8FDB\u4E00\u6B65\u786E\u4FDD\u5B89\u5168\u6027\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-typescript",
      children: [jsx(_components.span, {
        className: "lang",
        children: "typescript"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "private"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " __tag"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!:"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "void"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "constructor"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "public"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "number"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "class"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "USD"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "private"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " __tag"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "!:"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "void"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "constructor"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "public"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "number"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u76F8\u5E94\u7684\uFF0C\u73B0\u5728\u4F7F\u7528\u65B9\u5F0F\u4E5F\u8981\u8FDB\u884C\u53D8\u5316\uFF1A"
    }), "\n", jsxs(_components.div, {
      className: "language-typescript",
      children: [jsx(_components.span, {
        className: "lang",
        children: "typescript"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CNYCount"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "100"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "USDCount"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "USD"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "100"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "addCNY"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "source"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "CNY"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "source"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "+"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "input"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "addCNY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CNYCount"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CNYCount"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// \u62A5\u9519\u4E86\uFF01"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "addCNY"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "CNYCount"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "USDCount"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u6DFB\u52A0\u66F4\u591A\u7684\u68C0\u67E5\u903B\u8F91\uFF0C\u540C\u65F6\u5728\u7C7B\u578B\u5C42\u9762\u4E5F\u5F97\u5230\u4E86\u4FDD\u969C\u3002"
    }), "\n", jsxs(_components.p, {
      children: ["\u8FD9\u4E24\u79CD\u65B9\u5F0F\u7684\u672C\u8D28\u90FD\u662F\u901A\u8FC7\u975E\u516C\u5F00\uFF08\u5373 ", jsx(_components.code, {
        children: "private"
      }), " / ", jsx(_components.code, {
        children: "protected"
      }), " \uFF09\u7684\u989D\u5916\u5C5E\u6027\u5B9E\u73B0\u4E86\u7C7B\u578B\u4FE1\u606F\u7684\u9644\u52A0\uFF0C\u4ECE\u800C\u4F7F\u5F97\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u5C06\u7ED3\u6784\u4E00\u81F4\u7684\u4E24\u4E2A\u7C7B\u578B\u4E5F\u89C6\u4E3A\u4E0D\u517C\u5BB9\u7684\u3002\u53E6\u5916\uFF0C\u5728 type-fest \u4E2D\u4E5F\u901A\u8FC7 ", jsx(_components.a, {
        href: "https://codemix.com/opaque-types-in-javascript/",
        children: "Opaque Type"
      }), " \u652F\u6301\u4E86\u7C7B\u4F3C\u7684\u529F\u80FD\uFF0C\u5176\u5B9E\u73B0\u5982\u4E0B\uFF1A"]
    }), "\n", jsxs(_components.div, {
      className: "language-typescript",
      children: [jsx(_components.span, {
        className: "lang",
        children: "typescript"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "declare"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tag"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "unique"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "symbol"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "declare"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "type"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Tagged"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Token"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "readonly"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "tag"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Token"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "type"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Opaque"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Type"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Token"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "unknown"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Type"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "&"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Tagged"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Token"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "\u603B\u7ED3\u4E00\u4E0B\uFF0C\u5728 TypeScript \u4E2D\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7C7B\u578B\u6216\u8005\u903B\u8F91\u7684\u65B9\u5F0F\u6765\u6A21\u62DF\u6807\u79F0\u7C7B\u578B\uFF0C\u8FD9\u4E24\u79CD\u65B9\u5F0F\u5176\u5B9E\u5E76\u6CA1\u6709\u975E\u5E38\u660E\u663E\u7684\u4F18\u52A3\u4E4B\u5206\uFF0C\u57FA\u4E8E\u7C7B\u578B\u5B9E\u73B0\u66F4\u52A0\u8F7B\u91CF\uFF0C\u4F60\u7684\u4EE3\u7801\u903B\u8F91\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\uFF0C\u4F46\u96BE\u4EE5\u8FDB\u884C\u989D\u5916\u7684\u903B\u8F91\u68C0\u67E5\u5DE5\u4F5C\u3002\u800C\u4F7F\u7528\u903B\u8F91\u5B9E\u73B0\u7A0D\u663E\u7E41\u7410\uFF0C\u4F46\u4F60\u80FD\u591F\u8FDB\u884C\u66F4\u8FDB\u4E00\u6B65\u6216\u66F4\u7EC6\u81F4\u7684\u7EA6\u675F\u3002"
    }), "\n", jsxs(_components.h2, {
      id: "\u603B\u7ED3\u4E0E\u9884\u544A",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u603B\u7ED3\u4E0E\u9884\u544A",
        children: "#"
      }), "\u603B\u7ED3\u4E0E\u9884\u544A"]
    }), "\n", jsxs(_components.p, {
      children: ["\u5728\u8FD9\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u4E86 TypeScript \u7684\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u662F", jsx(_components.strong, {
        children: "\u57FA\u4E8E\u7C7B\u578B\u7ED3\u6784\u8FDB\u884C\u6BD4\u8F83"
      }), "\u7684\uFF0C\u800C\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF\u662F", jsx(_components.strong, {
        children: "\u57FA\u4E8E\u7C7B\u578B\u540D\u6765\u8FDB\u884C\u6BD4\u8F83"
      }), "\u7684\u3002\u4EE5\u53CA\u5728 TypeScript \u4E2D\uFF0C\u5982\u4F55\u901A\u8FC7", jsx(_components.strong, {
        children: "\u4E3A\u7C7B\u578B\u9644\u52A0\u4FE1\u606F"
      }), "\u7684\u65B9\u5F0F\uFF0C\u4ECE", jsx(_components.strong, {
        children: "\u7C7B\u578B\u5C42\u9762"
      }), "\u6216\u8005", jsx(_components.strong, {
        children: "\u903B\u8F91\u5C42\u9762"
      }), "\u51FA\u53D1\u53BB\u6A21\u62DF\u6807\u79F0\u7C7B\u578B\u7CFB\u7EDF\u3002\u5982\u679C\u4F60\u5728\u5B9E\u9645\u4E0A\u7684\u4E1A\u52A1\u4EE3\u7801\u4E2D\u9047\u5230\u8FC7\u5355\u4F4D\u8F6C\u6362\u8FD9\u79CD\u7C7B\u578B\u95EE\u9898\uFF0C\u4E0D\u59A8\u8003\u8651\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u6765\u8FDB\u4E00\u6B65\u63D0\u5347\u9879\u76EE\u4E2D\u7C7B\u578B\u7684\u5B89\u5168\u6027\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u6211\u60F3\uFF0C\u8FD9\u4E00\u8282\u6216\u8BB8\u80FD\u591F\u89E3\u7B54\u4F60\u66FE\u7ECF\u6709\u8FC7\u7684\uFF0C\u201C\u4E3A\u4EC0\u4E48\u8FD9\u4E24\u4E2A\u7C7B\u578B\u7ADF\u7136\u662F\u80FD\u88AB\u89C6\u4E3A\u517C\u5BB9\u95EE\u9898\u201D\uFF0C\u201C\u4E3A\u4EC0\u4E48\u8FD9\u4E24\u4E2A\u7C7B\u578B\u660E\u660E\u662F\u7236\u5B50\u5173\u7CFB\u5374\u8BF4\u4E0D\u517C\u5BB9\u201D\u7B49\u95EE\u9898\u3002\u540C\u65F6\u5728\u540E\u9762\u7684\u6761\u4EF6\u7C7B\u578B\u3001\u7C7B\u578B\u5C42\u7EA7\u7B49\u5185\u5BB9\u4E2D\uFF0C\u4E5F\u8FD8\u4F1A\u6709\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u51FA\u573A\u7684\u90E8\u5206\u3002"
    }), "\n", jsx(_components.p, {
      children: "\u4E0B\u4E00\u8282\uFF0C\u6211\u4EEC\u8981\u6765\u4E86\u89E3\u4E00\u4E2A TypeScript \u4E2D\u5E38\u5E38\u88AB\u5FFD\u7565\u7684\u90E8\u5206\uFF0C\u4E5F\u5C31\u662F TypeScript \u7684\u7C7B\u578B\u5C42\u7EA7\u3002\u6211\u4EEC\u90FD\u77E5\u9053\uFF0C\u53D8\u91CF\u7684\u7C7B\u578B\u4E4B\u95F4\u9700\u8981\u5B58\u5728\u517C\u5BB9\u6027\u624D\u80FD\u8FDB\u884C\u8D4B\u503C\uFF0C\u800C\u6309\u7167\u8FD9\u4E2A\u517C\u5BB9\u6027\u4E00\u5C42\u5C42\u5730\u6269\u5C55\u51FA\u6765\uFF0C\u6211\u4EEC\u5C31\u5F97\u5230\u4E86 TypeScript \u7C7B\u578B\u7CFB\u7EDF\u4E2D\u7684\u7C7B\u578B\u5C42\u7EA7\uFF0C\u4E86\u89E3\u7C7B\u578B\u5C42\u7EA7\u4EE5\u540E\u518D\u5B66\u4E60\u6761\u4EF6\u7C7B\u578B\u4E0E\u5DE5\u5177\u7C7B\u578B\uFF0C\u7B80\u76F4\u4E0D\u8981\u592A easy\u3002"
    }), "\n", jsxs(_components.h2, {
      id: "\u6269\u5C55\u9605\u8BFB",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u6269\u5C55\u9605\u8BFB",
        children: "#"
      }), "\u6269\u5C55\u9605\u8BFB"]
    }), "\n", jsxs(_components.h3, {
      id: "\u7C7B\u578B\u7C7B\u578B\u7CFB\u7EDF\u4E0E\u7C7B\u578B\u68C0\u67E5",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#\u7C7B\u578B\u7C7B\u578B\u7CFB\u7EDF\u4E0E\u7C7B\u578B\u68C0\u67E5",
        children: "#"
      }), "\u7C7B\u578B\u3001\u7C7B\u578B\u7CFB\u7EDF\u4E0E\u7C7B\u578B\u68C0\u67E5"]
    }), "\n", jsx(_components.p, {
      children: "\u5BF9\u4E8E\u7C7B\u578B\u3001\u7C7B\u578B\u7CFB\u7EDF\u3001\u7C7B\u578B\u68C0\u67E5\uFF0C\u4F60\u53EF\u4EE5\u8BA4\u4E3A\u5B83\u4EEC\u662F\u4E0D\u540C\u7684\u6982\u5FF5\u3002"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\u7C7B\u578B\uFF1A\u9650\u5236\u4E86\u6570\u636E\u7684\u53EF\u7528\u64CD\u4F5C\u3001\u610F\u4E49\u3001\u5141\u8BB8\u7684\u503C\u7684\u96C6\u5408\uFF0C\u603B\u7684\u6765\u8BF4\u5C31\u662F", jsx(_components.strong, {
          children: "\u8BBF\u95EE\u9650\u5236"
        }), "\u4E0E", jsx(_components.strong, {
          children: "\u8D4B\u503C\u9650\u5236"
        }), "\u3002\u5728 TypeScript \u4E2D\u5373\u662F\u539F\u59CB\u7C7B\u578B\u3001\u5BF9\u8C61\u7C7B\u578B\u3001\u51FD\u6570\u7C7B\u578B\u3001\u5B57\u9762\u91CF\u7C7B\u578B\u7B49\u57FA\u7840\u7C7B\u578B\uFF0C\u4EE5\u53CA\u7C7B\u578B\u522B\u540D\u3001\u8054\u5408\u7C7B\u578B\u7B49\u7ECF\u8FC7\u7C7B\u578B\u7F16\u7A0B\u540E\u5F97\u5230\u7684\u7C7B\u578B\u3002"]
      }), "\n", jsx(_components.li, {
        children: "\u7C7B\u578B\u7CFB\u7EDF\uFF1A\u4E00\u7EC4\u4E3A\u53D8\u91CF\u3001\u51FD\u6570\u7B49\u7ED3\u6784\u5206\u914D\u3001\u5B9E\u65BD\u7C7B\u578B\u7684\u89C4\u5219\uFF0C\u901A\u8FC7\u663E\u5F0F\u5730\u6307\u5B9A\u6216\u7C7B\u578B\u63A8\u5BFC\u6765\u5206\u914D\u7C7B\u578B\u3002\u540C\u65F6\u7C7B\u578B\u7CFB\u7EDF\u4E5F\u5B9A\u4E49\u4E86\u5982\u4F55\u5224\u65AD\u7C7B\u578B\u4E4B\u95F4\u7684\u517C\u5BB9\u6027\uFF1A\u5728 TypeScript \u4E2D\u5373\u662F\u7ED3\u6784\u5316\u7C7B\u578B\u7CFB\u7EDF\u3002"
      }), "\n", jsxs(_components.li, {
        children: ["\u7C7B\u578B\u68C0\u67E5\uFF1A\u786E\u4FDD", jsx(_components.strong, {
          children: "\u7C7B\u578B\u9075\u5FAA\u7C7B\u578B\u7CFB\u7EDF\u4E0B\u7684\u7C7B\u578B\u517C\u5BB9\u6027"
        }), "\uFF0C\u5BF9\u4E8E\u9759\u6001\u7C7B\u578B\u8BED\u8A00\uFF0C\u5728", jsx(_components.strong, {
          children: "\u7F16\u8BD1\u65F6"
        }), "\u8FDB\u884C\uFF0C\u800C\u5BF9\u4E8E\u52A8\u6001\u8BED\u8A00\uFF0C\u5219\u5728", jsx(_components.strong, {
          children: "\u8FD0\u884C\u65F6"
        }), "\u8FDB\u884C\u3002TypeScript \u5C31\u662F\u5728\u7F16\u8BD1\u65F6\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u7684\u3002"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["\u4E00\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\u662F\uFF0C\u9759\u6001\u7C7B\u578B\u4E0E\u52A8\u6001\u7C7B\u578B\u6307\u7684\u662F", jsx(_components.strong, {
        children: "\u7C7B\u578B\u68C0\u67E5\u53D1\u751F\u7684\u65F6\u673A"
      }), "\uFF0C\u5E76\u4E0D\u7B49\u4E8E\u8FD9\u95E8\u8BED\u8A00\u7684\u7C7B\u578B\u80FD\u529B\u3002\u6BD4\u5982 JavaScript \u5B9E\u9645\u4E0A\u662F\u52A8\u6001\u7C7B\u578B\u8BED\u8A00\uFF0C\u5B83\u7684\u7C7B\u578B\u68C0\u67E5\u53D1\u751F\u5728\u8FD0\u884C\u65F6\u3002"]
    }), "\n", jsx(_components.p, {
      children: "\u53E6\u5916\u4E00\u4E2A\u9759\u6001\u7C7B\u578B\u4E0E\u52A8\u6001\u7C7B\u578B\u7684\u91CD\u8981\u533A\u522B\u4F53\u73B0\u5728\u53D8\u91CF\u8D4B\u503C\u65F6\uFF0C\u5982\u5728 TypeScript \u4E2D\u65E0\u6CD5\u7ED9\u4E00\u4E2A\u58F0\u660E\u4E3A number \u7684\u53D8\u91CF\u4F7F\u7528\u5B57\u7B26\u4E32\u8D4B\u503C\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u53D8\u91CF\u5728\u58F0\u660E\u65F6\u7684\u7C7B\u578B\u5C31\u5DF2\u7ECF\u786E\u5B9A\u4E86\u3002\u800C\u5728 JavaScript \u4E2D\u5219\u6CA1\u6709\u8FD9\u6837\u7684\u9650\u5236\uFF0C\u4F60\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u4E00\u4E2A\u53D8\u91CF\u7684\u7C7B\u578B\u3002"
    }), "\n", jsxs(_components.p, {
      children: ["\u53E6\u5916\uFF0C\u5728\u7F16\u7A0B\u8BED\u8A00\u4E2D\u8FD8\u6709\u5F3A\u7C7B\u578B\u3001\u5F31\u7C7B\u578B\u7684\u6982\u5FF5\uFF0C\u5B83\u4EEC\u4F53\u73B0\u5728\u5BF9\u53D8\u91CF\u7C7B\u578B\u68C0\u67E5\u7684\u7A0B\u5EA6\uFF0C\u5982\u5728 JavaScript \u4E2D\u53EF\u4EE5\u5B9E\u73B0 ", jsx(_components.code, {
        children: "'1' - 1"
      }), " \u8FD9\u6837\u795E\u5947\u7684\u8FD0\u7B97\uFF08\u901A\u8FC7\u9690\u5F0F\u8F6C\u6362\uFF09\uFF0C\u8FD9\u5176\u5B9E\u5C31\u662F\u5F31\u7C7B\u578B\u8BED\u8A00\u7684\u663E\u8457\u7279\u70B9\u4E4B\u4E00\u3002"]
    })]
  });
}
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent$2, props)
  })) : _createMdxContent$2(props);
}
const _10___________________ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter: frontmatter$2,
  toc: toc$2,
  default: MDXContent$2
}, Symbol.toStringTag, { value: "Module" }));
function Counter() {
  const [count, setCount] = React.useState(0);
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("p", {
      children: count
    }), /* @__PURE__ */ jsx("button", {
      onClick: () => setCount((count2) => count2 + 1),
      children: "\u70B9\u51FB\u52A01"
    })]
  });
}
const Counter$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Counter
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = {
  "title": "custom title"
};
const toc$1 = [{
  "id": "autolink-literals",
  "text": "Autolink literals",
  "depth": 2
}, {
  "id": "footnote",
  "text": "Footnote",
  "depth": 2
}, {
  "id": "strikethrough",
  "text": "Strikethrough",
  "depth": 2
}, {
  "id": "table",
  "text": "Table",
  "depth": 2
}, {
  "id": "tasklist",
  "text": "Tasklist",
  "depth": 2
}];
function _createMdxContent$1(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    sup: "sup",
    del: "del",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td",
    ul: "ul",
    li: "li",
    input: "input",
    div: "div",
    span: "span",
    pre: "pre",
    code: "code",
    section: "section",
    ol: "ol"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "gfm",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#gfm",
        children: "#"
      }), "GFM"]
    }), "\n", jsxs(_components.h2, {
      id: "autolink-literals",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#autolink-literals",
        children: "#"
      }), "Autolink literals"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "http://www.example.com",
        children: "www.example.com"
      }), ", ", jsx(_components.a, {
        href: "https://example.com",
        children: "https://example.com"
      }), ", and ", jsx(_components.a, {
        href: "mailto:contact@example.com",
        children: "contact@example.com"
      }), "."]
    }), "\n", jsxs(_components.h2, {
      id: "footnote",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#footnote",
        children: "#"
      }), "Footnote"]
    }), "\n", jsxs(_components.p, {
      children: ["A note", jsx(_components.sup, {
        children: jsx(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "strikethrough",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#strikethrough",
        children: "#"
      }), "Strikethrough"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.del, {
        children: "one"
      }), " or ", jsx(_components.del, {
        children: "two"
      }), " tildes."]
    }), "\n", jsxs(_components.h2, {
      id: "table",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#table",
        children: "#"
      }), "Table"]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "a"
          }), jsx(_components.th, {
            align: "left",
            children: "b"
          }), jsx(_components.th, {
            align: "right",
            children: "c"
          }), jsx(_components.th, {
            align: "center",
            children: "d"
          })]
        })
      }), jsx(_components.tbody, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "1"
          }), jsx(_components.td, {
            align: "left",
            children: "2"
          }), jsx(_components.td, {
            align: "right",
            children: "3"
          }), jsx(_components.td, {
            align: "center",
            children: "4"
          })]
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "tasklist",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#tasklist",
        children: "#"
      }), "Tasklist"]
    }), "\n", jsxs(_components.ul, {
      className: "contains-task-list",
      children: ["\n", jsxs(_components.li, {
        className: "task-list-item",
        children: [jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "to do"]
      }), "\n", jsxs(_components.li, {
        className: "task-list-item",
        children: [jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Plugin"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vite"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "pluginMdxRollup"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "./pluginMdxRollup"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "async"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "pluginMdx"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Promise"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Plugin"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "[]"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "await"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "pluginMdxRollup"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()]"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", "\n", jsxs(_components.section, {
      "data-footnotes": true,
      className: "footnotes",
      children: [jsxs(_components.h2, {
        className: "sr-only",
        id: "footnote-label",
        children: [jsx(_components.a, {
          className: "header-anchor",
          href: "#footnote-label",
          children: "#"
        }), "Footnotes"]
      }), "\n", jsxs(_components.ol, {
        children: ["\n", jsxs(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", jsxs(_components.p, {
            children: ["Big note. ", jsx(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": true,
              className: "data-footnote-backref",
              "aria-label": "Back to content",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent$1, props)
  })) : _createMdxContent$1(props);
}
const aaaa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter: frontmatter$1,
  toc: toc$1,
  default: MDXContent$1
}, Symbol.toStringTag, { value: "Module" }));
function B() {
  return /* @__PURE__ */ jsx("div", {
    children: "Hello, route B"
  });
}
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B
}, Symbol.toStringTag, { value: "Module" }));
function A() {
  return /* @__PURE__ */ jsx("div", {
    children: "Hello, route A"
  });
}
const a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: A
}, Symbol.toStringTag, { value: "Module" }));
function Index() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("h1", {
      children: "Index"
    })
  });
}
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "title": "custom title"
};
const toc = [{
  "id": "autolink-literals-1",
  "text": "Autolink literals",
  "depth": 2
}, {
  "id": "footnote-1",
  "text": "Footnote",
  "depth": 2
}, {
  "id": "strikethrough-1",
  "text": "Strikethrough",
  "depth": 2
}, {
  "id": "table-1",
  "text": "Table",
  "depth": 2
}, {
  "id": "tasklist-1",
  "text": "Tasklist",
  "depth": 2
}];
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    sup: "sup",
    del: "del",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td",
    ul: "ul",
    li: "li",
    input: "input",
    div: "div",
    span: "span",
    pre: "pre",
    code: "code",
    section: "section",
    ol: "ol"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsx(Counter, {}), "\n", jsxs(_components.h1, {
      id: "gfm",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#gfm",
        children: "#"
      }), "GFM"]
    }), "\n", jsxs(_components.h2, {
      id: "autolink-literals",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#autolink-literals",
        children: "#"
      }), "Autolink literals"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "http://www.example.com",
        children: "www.example.com"
      }), ", ", jsx(_components.a, {
        href: "https://example.com",
        children: "https://example.com"
      }), ", and ", jsx(_components.a, {
        href: "mailto:contact@example.com",
        children: "contact@example.com"
      }), "."]
    }), "\n", jsxs(_components.h2, {
      id: "footnote",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#footnote",
        children: "#"
      }), "Footnote"]
    }), "\n", jsxs(_components.p, {
      children: ["A note", jsx(_components.sup, {
        children: jsx(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "strikethrough",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#strikethrough",
        children: "#"
      }), "Strikethrough"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.del, {
        children: "one"
      }), " or ", jsx(_components.del, {
        children: "two"
      }), " tildes.222"]
    }), "\n", jsxs(_components.h2, {
      id: "table",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#table",
        children: "#"
      }), "Table"]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "a"
          }), jsx(_components.th, {
            align: "left",
            children: "b"
          }), jsx(_components.th, {
            align: "right",
            children: "c"
          }), jsx(_components.th, {
            align: "center",
            children: "d"
          })]
        })
      }), jsx(_components.tbody, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "1"
          }), jsx(_components.td, {
            align: "left",
            children: "2"
          }), jsx(_components.td, {
            align: "right",
            children: "3"
          }), jsx(_components.td, {
            align: "center",
            children: "4"
          })]
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "tasklist",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#tasklist",
        children: "#"
      }), "Tasklist"]
    }), "\n", jsxs(_components.ul, {
      className: "contains-task-list",
      children: ["\n", jsxs(_components.li, {
        className: "task-list-item",
        children: [jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "to do"]
      }), "\n", jsxs(_components.li, {
        className: "task-list-item",
        children: [jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "lang",
        children: "ts"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Plugin"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vite"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "pluginMdxRollup"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "./pluginMdxRollup"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "async"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "pluginMdx"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Promise"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "Plugin"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "[]"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "return"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "await"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "pluginMdxRollup"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()]"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", "\n", jsxs(_components.section, {
      "data-footnotes": true,
      className: "footnotes",
      children: [jsxs(_components.h2, {
        className: "sr-only",
        id: "footnote-label",
        children: [jsx(_components.a, {
          className: "header-anchor",
          href: "#footnote-label",
          children: "#"
        }), "Footnotes"]
      }), "\n", jsxs(_components.ol, {
        children: ["\n", jsxs(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", jsxs(_components.p, {
            children: ["Big note. ", jsx(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": true,
              className: "data-footnote-backref",
              "aria-label": "Back to content",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter,
  toc,
  default: MDXContent
}, Symbol.toStringTag, { value: "Module" }));
const routes = [
  { path: "/10", element: React__default.default.createElement(MDXContent$2), preload: () => Promise.resolve().then(() => _10___________________) },
  { path: "/Counter", element: React__default.default.createElement(Counter), preload: () => Promise.resolve().then(() => Counter$1) },
  { path: "/aaaa", element: React__default.default.createElement(MDXContent$1), preload: () => Promise.resolve().then(() => aaaa) },
  { path: "/b", element: React__default.default.createElement(B), preload: () => Promise.resolve().then(() => b) },
  { path: "/guide/a", element: React__default.default.createElement(A), preload: () => Promise.resolve().then(() => a) },
  { path: "/guide/", element: React__default.default.createElement(Index), preload: () => Promise.resolve().then(() => index$1) },
  { path: "/", element: React__default.default.createElement(MDXContent), preload: () => Promise.resolve().then(() => index) }
];
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
["get", ...validMutationMethodsArr];
/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}
const is = typeof Object.is === "function" ? Object.is : isPolyfill;
const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = React__namespace;
let didWarnOld18Alpha = false;
let didWarnUncachedGetSnapshot = false;
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnOld18Alpha) {
      if ("startTransition" in React__namespace) {
        didWarnOld18Alpha = true;
        console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
      }
    }
  }
  const value = getSnapshot();
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();
      if (!is(value, cachedValue)) {
        console.error("The result of getSnapshot should be cached to avoid an infinite loop");
        didWarnUncachedGetSnapshot = true;
      }
    }
  }
  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  });
  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
"useSyncExternalStore" in React__namespace ? ((module2) => module2.useSyncExternalStore)(React__namespace) : shim;
const DataStaticRouterContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataStaticRouterContext.displayName = "DataStaticRouterContext";
}
const DataRouterContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}
const NavigationContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}
const RouteContext = /* @__PURE__ */ React__namespace.createContext({
  outlet: null,
  matches: []
});
if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}
function useInRouterContext() {
  return React__namespace.useContext(LocationContext) != null;
}
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React__namespace.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = React__namespace.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  process.env.NODE_ENV !== "production" ? warning(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ jsx(NavigationContext.Provider, {
    value: navigationContext,
    children: /* @__PURE__ */ jsx(LocationContext.Provider, {
      children,
      value: {
        location,
        navigationType
      }
    })
  });
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
const DataContext = React.createContext({});
const usePageData = () => {
  return React.useContext(DataContext);
};
const link = "_link_tn4qg_1";
const socialLinkIcon = "_social-link-icon_tn4qg_12";
const styles$1 = {
  link,
  socialLinkIcon
};
const check = "_check_rbkha_17";
const icon = "_icon_rbkha_34";
const dark = "_dark_rbkha_29";
const sun = "_sun_rbkha_57";
const moon = "_moon_rbkha_61";
const styles = {
  "switch": "_switch_rbkha_1",
  check,
  icon,
  dark,
  sun,
  moon
};
const APPEARANCE_KEY = "appearance";
const classList = document.documentElement.classList;
const setClassList = (isDark = false) => {
  if (isDark) {
    classList.add("dark");
  } else {
    classList.remove("dark");
  }
};
const updateAppearance = () => {
  const userPreference = localStorage.getItem(APPEARANCE_KEY);
  setClassList(userPreference === "dark");
};
if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
  updateAppearance();
  window.addEventListener("storage", updateAppearance);
}
function toggle() {
  if (classList.contains("dark")) {
    setClassList(false);
    localStorage.setItem(APPEARANCE_KEY, "light");
  } else {
    setClassList(true);
    localStorage.setItem(APPEARANCE_KEY, "dark");
  }
}
function Switch(props) {
  var _a;
  return /* @__PURE__ */ jsx("button", {
    className: `${styles.switch} ${props.className}`,
    id: (_a = props.id) != null ? _a : "",
    type: "button",
    role: "switch",
    ...props.onClick ? {
      onClick: props.onClick
    } : {},
    children: /* @__PURE__ */ jsx("span", {
      className: styles.check,
      children: /* @__PURE__ */ jsx("span", {
        className: styles.icon,
        children: props.children
      })
    })
  });
}
function SwitchAppearance() {
  return /* @__PURE__ */ jsxs(Switch, {
    onClick: toggle,
    children: [/* @__PURE__ */ jsx("div", {
      className: styles.sun,
      children: /* @__PURE__ */ jsx("div", {
        className: "i-carbon-sun",
        w: "full",
        h: "full"
      })
    }), /* @__PURE__ */ jsx("div", {
      className: styles.moon,
      children: /* @__PURE__ */ jsx("div", {
        className: "i-carbon-moon",
        w: "full",
        h: "full"
      })
    })]
  });
}
function MenuItem(item) {
  return /* @__PURE__ */ jsx("div", {
    className: "text-sm font-medium mx-3",
    children: /* @__PURE__ */ jsx("a", {
      href: item.link,
      className: styles$1.link,
      children: item.text
    })
  });
}
function Nav() {
  const {
    siteData
  } = usePageData();
  const nav = siteData.themeConfig.nav || [];
  return /* @__PURE__ */ jsx("header", {
    relative: "~",
    fixed: "~",
    pos: "t-0 l-0",
    w: "full",
    children: /* @__PURE__ */ jsxs("div", {
      flex: "~",
      items: "center",
      justify: "between",
      className: "px-8 h-14 divider-bottom",
      children: [/* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("a", {
          href: "/",
          hover: "opacity-60",
          className: "w-full h-full text-1rem font-semibold flex items-center",
          children: "Island.js"
        })
      }), /* @__PURE__ */ jsxs("div", {
        flex: "~",
        children: [/* @__PURE__ */ jsx("div", {
          flex: "~",
          children: nav.map((item) => /* @__PURE__ */ React.createElement(MenuItem, {
            ...item,
            key: item.text
          }))
        }), /* @__PURE__ */ jsx("div", {
          before: "menu-item-before",
          flex: "~",
          children: /* @__PURE__ */ jsx(SwitchAppearance, {})
        }), /* @__PURE__ */ jsx("div", {
          className: styles$1.socialLinkIcon,
          ml: "2",
          before: "menu-item-before",
          children: /* @__PURE__ */ jsx("a", {
            href: "https://github.com/jmni-cn",
            children: /* @__PURE__ */ jsx("div", {
              className: "i-carbon-logo-github w-5 h-5 fill-current"
            })
          })
        })]
      })]
    })
  });
}
const base = "";
const vars = "";
const __uno = "";
function Layout() {
  const pageData = usePageData();
  console.log(pageData);
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(Nav, {})
  });
}
function App() {
  return /* @__PURE__ */ jsx(Layout, {});
}
function StaticRouter({
  basename,
  children,
  location: locationProp = "/"
}) {
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let action = Action.Pop;
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state || null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return /* @__PURE__ */ jsx(Router, {
    basename,
    children,
    location,
    navigationType: action,
    navigator: staticNavigator,
    static: true
  });
}
function getStatelessNavigator() {
  return {
    createHref,
    encodeLocation,
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    }
  };
}
function createHref(to) {
  return typeof to === "string" ? to : createPath(to);
}
function encodeLocation(to) {
  let path = typeof to === "string" ? parsePath(to) : to;
  return {
    pathname: path.pathname || "",
    search: path.search || "",
    hash: path.hash || ""
  };
}
function render(pagePath) {
  return server.renderToString(/* @__PURE__ */ jsx(StaticRouter, {
    location: pagePath,
    children: /* @__PURE__ */ jsx(App, {})
  }));
}
exports.render = render;
exports.routes = routes;
