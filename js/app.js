(() => {
  var t = {
      144: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                      Object.prototype.hasOwnProperty.call(n, i) &&
                        (t[i] = n[i]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            n =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = e && "IntersectionObserver" in window,
            a = e && "classList" in document.createElement("p"),
            o = e && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: n || e ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            l = function (e) {
              return t({}, r, e);
            },
            s = function (t, e) {
              var n,
                i = "LazyLoad::Initialized",
                a = new t(e);
              try {
                n = new CustomEvent(i, { detail: { instance: a } });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: a },
                );
              }
              window.dispatchEvent(n);
            },
            c = "src",
            u = "srcset",
            d = "sizes",
            f = "poster",
            p = "llOriginalAttrs",
            m = "data",
            h = "loading",
            v = "loaded",
            b = "applied",
            _ = "error",
            g = "native",
            E = "data-",
            y = "ll-status",
            A = function (t, e) {
              return t.getAttribute(E + e);
            },
            w = function (t) {
              return A(t, y);
            },
            L = function (t, e) {
              return (function (t, e, n) {
                var i = "data-ll-status";
                null !== n ? t.setAttribute(i, n) : t.removeAttribute(i);
              })(t, 0, e);
            },
            I = function (t) {
              return L(t, null);
            },
            k = function (t) {
              return null === w(t);
            },
            x = function (t) {
              return w(t) === g;
            },
            C = [h, v, b, _],
            S = function (t, e, n, i) {
              t &&
                "function" == typeof t &&
                (void 0 === i ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, i));
            },
            O = function (t, e) {
              a
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            M = function (t, e) {
              a
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            T = function (t) {
              return t.llTempImage;
            },
            N = function (t, e) {
              if (e) {
                var n = e._observer;
                n && n.unobserve(t);
              }
            },
            j = function (t, e) {
              t && (t.loadingCount += e);
            },
            q = function (t, e) {
              t && (t.toLoadCount = e);
            },
            R = function (t) {
              for (var e, n = [], i = 0; (e = t.children[i]); i += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            z = function (t, e) {
              var n = t.parentNode;
              n && "PICTURE" === n.tagName && R(n).forEach(e);
            },
            H = function (t, e) {
              R(t).forEach(e);
            },
            B = [c],
            P = [c, f],
            D = [c, u, d],
            G = [m],
            X = function (t) {
              return !!t[p];
            },
            Q = function (t) {
              return t[p];
            },
            V = function (t) {
              return delete t[p];
            },
            W = function (t, e) {
              if (!X(t)) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.getAttribute(e);
                }),
                  (t[p] = n);
              }
            },
            Y = function (t, e) {
              if (X(t)) {
                var n = Q(t);
                e.forEach(function (e) {
                  !(function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(t, e, n[e]);
                });
              }
            },
            F = function (t, e, n) {
              O(t, e.class_applied),
                L(t, b),
                n &&
                  (e.unobserve_completed && N(t, e),
                  S(e.callback_applied, t, n));
            },
            $ = function (t, e, n) {
              O(t, e.class_loading),
                L(t, h),
                n && (j(n, 1), S(e.callback_loading, t, n));
            },
            J = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            U = function (t, e) {
              J(t, d, A(t, e.data_sizes)),
                J(t, u, A(t, e.data_srcset)),
                J(t, c, A(t, e.data_src));
            },
            K = {
              IMG: function (t, e) {
                z(t, function (t) {
                  W(t, D), U(t, e);
                }),
                  W(t, D),
                  U(t, e);
              },
              IFRAME: function (t, e) {
                W(t, B), J(t, c, A(t, e.data_src));
              },
              VIDEO: function (t, e) {
                H(t, function (t) {
                  W(t, B), J(t, c, A(t, e.data_src));
                }),
                  W(t, P),
                  J(t, f, A(t, e.data_poster)),
                  J(t, c, A(t, e.data_src)),
                  t.load();
              },
              OBJECT: function (t, e) {
                W(t, G), J(t, m, A(t, e.data_src));
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            tt = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                S(t.callback_finish, e);
            },
            et = function (t, e, n) {
              t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
            },
            nt = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            it = function (t) {
              return !!t.llEvLisnrs;
            },
            at = function (t) {
              if (it(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                  var i = e[n];
                  nt(t, n, i);
                }
                delete t.llEvLisnrs;
              }
            },
            ot = function (t, e, n) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                j(n, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(n),
                M(t, e.class_loading),
                e.unobserve_completed && N(t, n);
            },
            rt = function (t, e, n) {
              var i = T(t) || t;
              it(i) ||
                (function (t, e, n) {
                  it(t) || (t.llEvLisnrs = {});
                  var i = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  et(t, i, e), et(t, "error", n);
                })(
                  i,
                  function (a) {
                    !(function (t, e, n, i) {
                      var a = x(e);
                      ot(e, n, i),
                        O(e, n.class_loaded),
                        L(e, v),
                        S(n.callback_loaded, e, i),
                        a || tt(n, i);
                    })(0, t, e, n),
                      at(i);
                  },
                  function (a) {
                    !(function (t, e, n, i) {
                      var a = x(e);
                      ot(e, n, i),
                        O(e, n.class_error),
                        L(e, _),
                        S(n.callback_error, e, i),
                        n.restore_on_error && Y(e, D),
                        a || tt(n, i);
                    })(0, t, e, n),
                      at(i);
                  },
                );
            },
            lt = function (t, e, n) {
              !(function (t) {
                return Z.indexOf(t.tagName) > -1;
              })(t)
                ? (function (t, e, n) {
                    !(function (t) {
                      t.llTempImage = document.createElement("IMG");
                    })(t),
                      rt(t, e, n),
                      (function (t) {
                        X(t) ||
                          (t[p] = { backgroundImage: t.style.backgroundImage });
                      })(t),
                      (function (t, e, n) {
                        var i = A(t, e.data_bg),
                          a = A(t, e.data_bg_hidpi),
                          r = o && a ? a : i;
                        r &&
                          ((t.style.backgroundImage = 'url("'.concat(r, '")')),
                          T(t).setAttribute(c, r),
                          $(t, e, n));
                      })(t, e, n),
                      (function (t, e, n) {
                        var i = A(t, e.data_bg_multi),
                          a = A(t, e.data_bg_multi_hidpi),
                          r = o && a ? a : i;
                        r && ((t.style.backgroundImage = r), F(t, e, n));
                      })(t, e, n),
                      (function (t, e, n) {
                        var i = A(t, e.data_bg_set);
                        if (i) {
                          var a = i.split("|"),
                            o = a.map(function (t) {
                              return "image-set(".concat(t, ")");
                            });
                          (t.style.backgroundImage = o.join()),
                            "" === t.style.backgroundImage &&
                              ((o = a.map(function (t) {
                                return "-webkit-image-set(".concat(t, ")");
                              })),
                              (t.style.backgroundImage = o.join())),
                            F(t, e, n);
                        }
                      })(t, e, n);
                  })(t, e, n)
                : (function (t, e, n) {
                    rt(t, e, n),
                      (function (t, e, n) {
                        var i = K[t.tagName];
                        i && (i(t, e), $(t, e, n));
                      })(t, e, n);
                  })(t, e, n);
            },
            st = function (t) {
              t.removeAttribute(c), t.removeAttribute(u), t.removeAttribute(d);
            },
            ct = function (t) {
              z(t, function (t) {
                Y(t, D);
              }),
                Y(t, D);
            },
            ut = {
              IMG: ct,
              IFRAME: function (t) {
                Y(t, B);
              },
              VIDEO: function (t) {
                H(t, function (t) {
                  Y(t, B);
                }),
                  Y(t, P),
                  t.load();
              },
              OBJECT: function (t) {
                Y(t, G);
              },
            },
            dt = function (t, e) {
              (function (t) {
                var e = ut[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (X(t)) {
                        var e = Q(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  k(t) ||
                    x(t) ||
                    (M(t, e.class_entered),
                    M(t, e.class_exited),
                    M(t, e.class_applied),
                    M(t, e.class_loading),
                    M(t, e.class_loaded),
                    M(t, e.class_error));
                })(t, e),
                I(t),
                V(t);
            },
            ft = ["IMG", "IFRAME", "VIDEO"],
            pt = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            mt = function (t, e, n) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, n, i) {
                      var a = (function (t) {
                        return C.indexOf(w(t)) >= 0;
                      })(t);
                      L(t, "entered"),
                        O(t, n.class_entered),
                        M(t, n.class_exited),
                        (function (t, e, n) {
                          e.unobserve_entered && N(t, n);
                        })(t, n, i),
                        S(n.callback_enter, t, e, i),
                        a || lt(t, n, i);
                    })(t.target, t, e, n)
                  : (function (t, e, n, i) {
                      k(t) ||
                        (O(t, n.class_exited),
                        (function (t, e, n, i) {
                          n.cancel_on_exit &&
                            (function (t) {
                              return w(t) === h;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (at(t),
                            (function (t) {
                              z(t, function (t) {
                                st(t);
                              }),
                                st(t);
                            })(t),
                            ct(t),
                            M(t, n.class_loading),
                            j(i, -1),
                            I(t),
                            S(n.callback_cancel, t, e, i));
                        })(t, e, n, i),
                        S(n.callback_exit, t, e, i));
                    })(t.target, t, e, n);
              });
            },
            ht = function (t) {
              return Array.prototype.slice.call(t);
            },
            vt = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            bt = function (t) {
              return (function (t) {
                return w(t) === _;
              })(t);
            },
            _t = function (t, e) {
              return (function (t) {
                return ht(t).filter(k);
              })(t || vt(e));
            },
            gt = function (t, n) {
              var a = l(t);
              (this._settings = a),
                (this.loadingCount = 0),
                (function (t, e) {
                  i &&
                    !pt(t) &&
                    (e._observer = new IntersectionObserver(
                      function (n) {
                        mt(n, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t),
                    ));
                })(a, this),
                (function (t, n) {
                  e &&
                    ((n._onlineHandler = function () {
                      !(function (t, e) {
                        var n;
                        ((n = vt(t)), ht(n).filter(bt)).forEach(function (e) {
                          M(e, t.class_error), I(e);
                        }),
                          e.update();
                      })(t, n);
                    }),
                    window.addEventListener("online", n._onlineHandler));
                })(a, this),
                this.update(n);
            };
          return (
            (gt.prototype = {
              update: function (t) {
                var e,
                  a,
                  o = this._settings,
                  r = _t(t, o);
                q(this, r.length),
                  !n && i
                    ? pt(o)
                      ? (function (t, e, n) {
                          t.forEach(function (t) {
                            -1 !== ft.indexOf(t.tagName) &&
                              (function (t, e, n) {
                                t.setAttribute("loading", "lazy"),
                                  rt(t, e, n),
                                  (function (t, e) {
                                    var n = K[t.tagName];
                                    n && n(t, e);
                                  })(t, e),
                                  L(t, g);
                              })(t, e, n);
                          }),
                            q(n, 0);
                        })(r, o, this)
                      : ((a = r),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, a))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  e &&
                    window.removeEventListener("online", this._onlineHandler),
                  vt(this._settings).forEach(function (t) {
                    V(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  n = this._settings;
                _t(t, n).forEach(function (t) {
                  N(t, e), lt(t, n, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                vt(t).forEach(function (e) {
                  dt(e, t);
                });
              },
            }),
            (gt.load = function (t, e) {
              var n = l(e);
              lt(t, n);
            }),
            (gt.resetStatus = function (t) {
              I(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, i = 0; (n = e[i]); i += 1) s(t, n);
                  else s(t, e);
              })(gt, window.lazyLoadOptions),
            gt
          );
        })();
      },
    },
    e = {};
  function n(i) {
    var a = e[i];
    if (void 0 !== a) return a.exports;
    var o = (e[i] = { exports: {} });
    return t[i].call(o.exports, o, o.exports, n), o.exports;
  }
  (() => {
    "use strict";
    function t(t) {
      this.type = t;
    }
    (t.prototype.init = function () {
      const t = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let t = 0; t < this.nodes.length; t++) {
        const e = this.nodes[t],
          n = e.dataset.da.trim().split(","),
          i = {};
        (i.element = e),
          (i.parent = e.parentNode),
          (i.destination = document.querySelector(n[0].trim())),
          (i.breakpoint = n[1] ? n[1].trim() : "767"),
          (i.place = n[2] ? n[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.оbjects.push(i);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (t) {
            return (
              "(" +
              this.type +
              "-width: " +
              t.breakpoint +
              "px)," +
              t.breakpoint
            );
          },
          this,
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (t, e, n) {
            return Array.prototype.indexOf.call(n, t) === e;
          },
        ));
      for (let e = 0; e < this.mediaQueries.length; e++) {
        const n = this.mediaQueries[e],
          i = String.prototype.split.call(n, ","),
          a = window.matchMedia(i[0]),
          o = i[1],
          r = Array.prototype.filter.call(this.оbjects, function (t) {
            return t.breakpoint === o;
          });
        a.addListener(function () {
          t.mediaHandler(a, r);
        }),
          this.mediaHandler(a, r);
      }
    }),
      (t.prototype.mediaHandler = function (t, e) {
        if (t.matches)
          for (let t = 0; t < e.length; t++) {
            const n = e[t];
            (n.index = this.indexInParent(n.parent, n.element)),
              this.moveTo(n.place, n.element, n.destination);
          }
        else
          for (let t = e.length - 1; t >= 0; t--) {
            const n = e[t];
            n.element.classList.contains(this.daClassname) &&
              this.moveBack(n.parent, n.element, n.index);
          }
      }),
      (t.prototype.moveTo = function (t, e, n) {
        e.classList.add(this.daClassname),
          "last" === t || t >= n.children.length
            ? n.insertAdjacentElement("beforeend", e)
            : "first" !== t
              ? n.children[t].insertAdjacentElement("beforebegin", e)
              : n.insertAdjacentElement("afterbegin", e);
      }),
      (t.prototype.moveBack = function (t, e, n) {
        e.classList.remove(this.daClassname),
          void 0 !== t.children[n]
            ? t.children[n].insertAdjacentElement("beforebegin", e)
            : t.insertAdjacentElement("beforeend", e);
      }),
      (t.prototype.indexInParent = function (t, e) {
        const n = Array.prototype.slice.call(t.children);
        return Array.prototype.indexOf.call(n, e);
      }),
      (t.prototype.arraySort = function (t) {
        "min" === this.type
          ? Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                    ? -1
                    : "last" === t.place || "first" === e.place
                      ? 1
                      : t.place - e.place
                : t.breakpoint - e.breakpoint;
            })
          : Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                    ? 1
                    : "last" === t.place || "first" === e.place
                      ? -1
                      : e.place - t.place
                : e.breakpoint - t.breakpoint;
            });
      });
    new t("max").init();
    new (n(144))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    let e = !1;
    setTimeout(() => {
      if (e) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0);
    let i = document.querySelectorAll(".info-slider__title");
    document.documentElement.classList.add("lock");
    let a = document.querySelector(".preloader");
    (window.onload = function () {
      a &&
        setTimeout(function () {
          a.classList.add("preloader-hidden"),
            document.documentElement.classList.remove("lock"),
            i &&
              i.forEach((t) => {
                t.classList.add("start-animation");
              }),
            (function () {
              let t = document.querySelectorAll(".info-slider__slide");
              t && t[0].classList.add("active-slide");
            })();
        }, 990);
    }),
      setTimeout(function () {
        let t = document.querySelector(".preloader__big-txt"),
          e = document.querySelector(".preloader__small-txt");
        t && t.classList.add("active-animation");
        e && e.classList.add("active-animation");
      }, 100);
    let o,
      r,
      l,
      s = !0;
    document.addEventListener("click", function (t) {
      (o = t.target),
        s && o.closest(".icon-menu")
          ? (document.documentElement.classList.add("menu-open"),
            document.documentElement.classList.add("no-scrolling"),
            (s = !1))
          : o.closest(".menu-sidebar") ||
            (document.documentElement.classList.remove("menu-open"),
            document.documentElement.classList.remove("no-scrolling"),
            (s = !0));
    }),
      (function (t, e) {
        "function" != typeof t.CustomEvent &&
          ((t.CustomEvent = function (t, n) {
            n = n || { bubbles: !1, cancelable: !1, detail: void 0 };
            var i = e.createEvent("CustomEvent");
            return i.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), i;
          }),
          (t.CustomEvent.prototype = t.Event.prototype)),
          e.addEventListener(
            "touchstart",
            function (t) {
              "true" !== t.target.getAttribute("data-swipe-ignore") &&
                ((l = t.target),
                (r = Date.now()),
                (n = t.touches[0].clientX),
                (i = t.touches[0].clientY),
                (a = 0),
                (o = 0),
                (s = t.touches.length));
            },
            !1,
          ),
          e.addEventListener(
            "touchmove",
            function (t) {
              if (n && i) {
                var e = t.touches[0].clientX,
                  r = t.touches[0].clientY;
                (a = n - e), (o = i - r);
              }
            },
            !1,
          ),
          e.addEventListener(
            "touchend",
            function (t) {
              if (l === t.target) {
                var u = parseInt(c(l, "data-swipe-threshold", "20"), 10),
                  d = c(l, "data-swipe-unit", "px"),
                  f = parseInt(c(l, "data-swipe-timeout", "500"), 10),
                  p = Date.now() - r,
                  m = "",
                  h = t.changedTouches || t.touches || [];
                if (
                  ("vh" === d &&
                    (u = Math.round(
                      (u / 100) * e.documentElement.clientHeight,
                    )),
                  "vw" === d &&
                    (u = Math.round((u / 100) * e.documentElement.clientWidth)),
                  Math.abs(a) > Math.abs(o)
                    ? Math.abs(a) > u &&
                      p < f &&
                      (m = a > 0 ? "swiped-left" : "swiped-right")
                    : Math.abs(o) > u &&
                      p < f &&
                      (m = o > 0 ? "swiped-up" : "swiped-down"),
                  "" !== m)
                ) {
                  var v = {
                    dir: m.replace(/swiped-/, ""),
                    touchType: (h[0] || {}).touchType || "direct",
                    fingers: s,
                    xStart: parseInt(n, 10),
                    xEnd: parseInt((h[0] || {}).clientX || -1, 10),
                    yStart: parseInt(i, 10),
                    yEnd: parseInt((h[0] || {}).clientY || -1, 10),
                  };
                  l.dispatchEvent(
                    new CustomEvent("swiped", {
                      bubbles: !0,
                      cancelable: !0,
                      detail: v,
                    }),
                  ),
                    l.dispatchEvent(
                      new CustomEvent(m, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: v,
                      }),
                    );
                }
                (n = null), (i = null), (r = null);
              }
            },
            !1,
          );
        var n = null,
          i = null,
          a = null,
          o = null,
          r = null,
          l = null,
          s = 0;
        function c(t, n, i) {
          for (; t && t !== e.documentElement; ) {
            var a = t.getAttribute(n);
            if (a) return a;
            t = t.parentNode;
          }
          return i;
        }
      })(window, document);
    let c = 0,
      u = 1,
      d = 0;
    setTimeout(() => {
      document.addEventListener("wheel", function (t) {
        t.deltaY < 0 &&
          c < l.length - 1 &&
          (f.forEach((t) => {
            p(t, c);
          }),
          c++,
          u++,
          (d = c)),
          t.deltaY > 0 &&
            c > 0 &&
            (f.forEach((t) => {
              m(t, c);
            }),
            c--,
            u--,
            (d = c));
      });
    }, 990);
    let f = document.querySelectorAll('[class*="__slider"]');
    function p(t, e) {
      let n = t.offsetWidth;
      (l = t.querySelectorAll('[class*="__slide"]')),
        l[d].classList.remove("active-slide"),
        l[e + 1] && l[e + 1].classList.add("active-slide"),
        l.forEach((t) => {
          t.classList.contains("active-slide") &&
            (t.style.transform = `translateX(${-u * n}px)`);
        });
    }
    function m(t, e) {
      let n = t.offsetWidth;
      (l = t.querySelectorAll('[class*="__slide"]')),
        l[d] && l[d].classList.remove("active-slide"),
        l[e - 1] && l[e - 1].classList.add("active-slide");
      for (let t = c; t < l.length; t++)
        l[t].style.transform = `translateX(${t * n}px)`;
    }
    f &&
      f.forEach((t) => {
        (r = t),
          (function (t) {
            let e = t.querySelectorAll("[data-bg]");
            e &&
              e.forEach((t) => {
                if (t.hasAttribute("data-bg")) {
                  let e = t.getAttribute("data-bg");
                  t.style.backgroundColor = e;
                }
              });
          })(t),
          (function (t) {
            let e = t.querySelectorAll('[class*="__slide"]'),
              n = e[0].offsetWidth;
            for (let t = 0; t < e.length; t++)
              e[t].style.transform = `translateX(${t * n}px)`;
            e.forEach((t) => {
              t.hasAttribute("data-fade-slide")
                ? t.classList.add("fade-slide-effect")
                : t.classList.add("slider-slide");
            }),
              e &&
                (e[0].classList.contains("info-slider__slide") ||
                  e[0].classList.add("active-slide"));
          })(t),
          t.classList.add("slider");
      }),
      (l = r.querySelectorAll('[class*="__slide"]')),
      document.addEventListener("swiped-up", function (t) {
        c < l.length - 1 &&
          (f.forEach((t) => {
            p(t, c);
          }),
          c++,
          u++,
          (d = c));
      }),
      document.addEventListener("swiped-down", function (t) {
        c > 0 &&
          (f.forEach((t) => {
            m(t, c);
          }),
          c--,
          u--,
          (d = c));
      }),
      (window.FLS = !0),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      });
  })();
})();
