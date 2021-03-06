(this["webpackJsonpfav-list"] = this["webpackJsonpfav-list"] || []).push([
  [0],
  {
    62: function(e, t, a) {
      e.exports = a(92);
    },
    67: function(e, t, a) {},
    91: function(e, t, a) {},
    92: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(22),
        i = a.n(c),
        o = (a(67), a(32)),
        u = a(17),
        s = a(51),
        l = a(55),
        d = a(27),
        f = a(14),
        m = "GET_FAV_LIST",
        p = { items: [], isFetching: !1, isRating: !1 },
        b = function(e) {
          return (function(e, t) {
            return (e || []).sort(function(e, a) {
              return a[t] > e[t] ? 1 : e[t] > a[t] ? -1 : 0;
            });
          })(Object(d.a)(e), "rating");
        },
        v = function(e, t) {
          var a = Object(d.a)(e),
            n = e.findIndex(function(e) {
              return e.id === t.id;
            });
          return -1 !== n && (a[n] = t), b(a);
        },
        g = Object(u.combineReducers)({
          favList: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : p,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case m:
                return Object(f.a)({}, e, { isFetching: !0 });
              case "RECEIVE_FAV_LIST_ERROR":
                return Object(f.a)({}, e, { isFetching: !1 });
              case "RECEIVE_FAV_LIST":
                return Object(f.a)({}, e, {
                  items: b(t.payload),
                  isFetching: !1,
                });
              case "RATE_FAV_ITEM":
                return Object(f.a)({}, e, {
                  items: v(Object(d.a)(e.items), t.payload),
                });
              case "TOGGLE_RANDOM_FAV_RATING":
                return Object(f.a)({}, e, { isRating: !e.isRating });
              default:
                return e;
            }
          },
        }),
        E = a(15),
        O = a.n(E),
        h = a(21),
        j = a(52),
        R = a.n(j),
        x = function(e) {
          return O.a.async(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.next = 2),
                    O.a.awrap(
                      R()(
                        Object(f.a)({}, e, {
                          baseURL:
                            "https://masajid390.github.io/fav-list-with-react-typescript-redux-saga-material-jest-enzyme/",
                          method: "GET",
                        })
                      )
                    )
                  );
                case 2:
                  return t.abrupt("return", t.sent);
                case 3:
                case "end":
                  return t.stop();
              }
          });
        },
        w = function(e) {
          return { type: "RECEIVE_FAV_LIST", payload: e };
        },
        y = function(e) {
          return { type: "RECEIVE_FAV_LIST", payload: e };
        },
        _ = O.a.mark(T),
        F = O.a.mark(I);
      function T() {
        var e, t;
        return O.a.wrap(function(a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                return (
                  (a.next = 2), Object(h.b)(x, { url: "/data/fav-list.json" })
                );
              case 2:
                if (((e = a.sent), (t = e.data), 200 !== e.status)) {
                  a.next = 10;
                  break;
                }
                return (a.next = 8), Object(h.c)(w(t));
              case 8:
                a.next = 12;
                break;
              case 10:
                return (a.next = 12), Object(h.c)(y({}));
              case 12:
              case "end":
                return a.stop();
            }
        }, _);
      }
      function I() {
        return O.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(h.e)(m, T);
              case 2:
              case "end":
                return e.stop();
            }
        }, F);
      }
      var k = O.a.mark(A);
      function A() {
        var e;
        return O.a.wrap(function(t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (e = [I]),
                  (t.next = 3),
                  Object(h.a)(
                    e.map(function(e) {
                      return Object(h.d)(
                        O.a.mark(function t() {
                          return O.a.wrap(
                            function(t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 1), (t.next = 4), Object(h.b)(e)
                                    );
                                  case 4:
                                    return t.abrupt("break", 12);
                                  case 7:
                                    (t.prev = 7),
                                      (t.t0 = t.catch(1)),
                                      console.log(t.t0);
                                  case 10:
                                    t.next = 0;
                                    break;
                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[1, 7]]
                          );
                        })
                      );
                    })
                  )
                );
              case 3:
              case "end":
                return t.stop();
            }
        }, k);
      }
      var S = (function(e) {
          var t = Object(l.a)(),
            a = [t],
            n = [u.applyMiddleware.apply(void 0, a)],
            r = s.composeWithDevTools.apply(void 0, n),
            c = Object(u.createStore)(g, e, r);
          return t.run(A), c;
        })({ favList: p }),
        V = a(23),
        L = a(30),
        N = a(115),
        G = a(127),
        M = a(117),
        C = a(118),
        B = a(119),
        D = a(120),
        W = Object(N.a)({ card: { borderRadius: 0 } }),
        z = function(e) {
          var t = e.item,
            a = e.updateRating,
            n = W();
          return t.rating > 0 && t.rating <= 5
            ? r.a.createElement(
                M.a,
                { className: n.card },
                r.a.createElement(
                  C.a,
                  null,
                  r.a.createElement(
                    B.a,
                    null,
                    r.a.createElement(
                      D.a,
                      {
                        "data-testid": "name",
                        gutterBottom: !0,
                        variant: "h5",
                        component: "h2",
                      },
                      t.name
                    ),
                    r.a.createElement(
                      D.a,
                      {
                        "data-testid": "author",
                        gutterBottom: !0,
                        variant: "body2",
                        color: "textSecondary",
                        component: "p",
                      },
                      t.author
                    ),
                    r.a.createElement(
                      D.a,
                      { component: "p" },
                      r.a.createElement(G.a, {
                        name: "rating".concat(t.id),
                        size: "large",
                        value: t.rating,
                        precision: 0.5,
                        onChange: function(e, n) {
                          if (n) {
                            var r = Object(f.a)({}, t);
                            a(r, n);
                          }
                        },
                        max: 5,
                      })
                    )
                  )
                )
              )
            : r.a.createElement(
                "span",
                { "data-testid": "invalidRating" },
                "Invalid Rating"
              );
        },
        J = a(126),
        U = function(e, t) {
          var a = r.a.useState(1),
            n = Object(V.a)(a, 2),
            c = n[0],
            i = n[1];
          return [
            {
              count: Math.ceil(e.length / t),
              page: c,
              onChange: function(e, t) {
                return i(t);
              },
            },
            (function() {
              var a = (c - 1) * t,
                n = a + t;
              return e.slice(a, n);
            })(),
          ];
        },
        $ = Object(N.a)({
          card: {
            borderRadius: 0,
            borderTop: "1px solid #f0f0f0",
            padding: "5px 0",
          },
        }),
        q = function(e) {
          var t = e.items,
            a = e.updateRating,
            n = $(),
            c = U(t, 5),
            i = Object(V.a)(c, 2),
            o = i[0],
            u = i[1];
          return t.length > 0
            ? r.a.createElement(
                r.a.Fragment,
                null,
                u.map(function(e) {
                  return r.a.createElement(z, {
                    key: e.id,
                    item: e,
                    updateRating: a,
                  });
                }),
                r.a.createElement(
                  M.a,
                  { className: n.card },
                  r.a.createElement(J.a, o)
                )
              )
            : r.a.createElement(
                "span",
                { "data-testid": "notFound" },
                "No item found"
              );
        },
        H = function(e, t) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
          return parseFloat((Math.random() * (t - e) + e).toFixed(a));
        },
        K = a(121),
        P = a(122),
        Q = a(123),
        X = a(125),
        Y = a(124),
        Z = Object(N.a)(function(e) {
          var t;
          return {
            root: { flexGrow: 1 },
            title: { flexGrow: 1 },
            container:
              ((t = {}),
              Object(L.a)(t, e.breakpoints.down("sm"), { marginTop: "52px" }),
              Object(L.a)(t, e.breakpoints.up("sm"), { marginTop: "68px" }),
              t),
          };
        }),
        ee = function(e, t) {
          var a = Object(n.useState)(),
            r = Object(V.a)(a, 2),
            c = r[0],
            i = r[1],
            o = Object(n.useState)(),
            u = Object(V.a)(o, 2),
            s = u[0],
            l = u[1];
          return (
            Object(n.useEffect)(
              function() {
                var a = null;
                if (t) {
                  var n = 1e3 * H(0, 1);
                  a = setInterval(function() {
                    var t,
                      a,
                      n =
                        ((t = 0),
                        (a = e.length - 1),
                        Math.floor(Math.random() * (a - t + 1) + t)),
                      r = H(0, 5);
                    i(Object(f.a)({}, e[n])), l(r);
                  }, n);
                }
                return function() {
                  a && clearInterval(a);
                };
              },
              [t]
            ),
            [c, s]
          );
        },
        te = function() {
          var e = Z(),
            t = Object(o.b)(),
            a = Object(o.c)(function(e) {
              return e.favList;
            }),
            c = a.items,
            i = a.isRating,
            u = a.isFetching,
            s = ee(c, i),
            l = Object(V.a)(s, 2),
            p = l[0],
            b = l[1],
            v = i ? "secondary" : "default",
            g = i ? "Stop Random Rating" : "Start Random Rating";
          Object(n.useEffect)(function() {
            t({ type: m });
          }, []),
            Object(n.useEffect)(
              function() {
                E(p, b);
              },
              [p, b]
            );
          var E = function(e, a) {
              var n = Object(f.a)({}, e);
              (n.rating = a),
                t(
                  (function(e) {
                    return { type: "RATE_FAV_ITEM", payload: e };
                  })(n)
                );
            },
            O = function() {
              t({ type: "TOGGLE_RANDOM_FAV_RATING" });
            };
          return r.a.createElement(
            "div",
            { className: e.root },
            r.a.createElement(
              K.a,
              { position: "fixed" },
              r.a.createElement(
                P.a,
                null,
                r.a.createElement(
                  D.a,
                  { variant: "h6", className: e.title },
                  "Favourite List"
                ),
                r.a.createElement(
                  Q.a,
                  {
                    "data-testid": "btnStartRating",
                    variant: "contained",
                    color: v,
                    onClick: O,
                  },
                  g
                )
              ),
              u && r.a.createElement(Y.a, { color: "secondary" })
            ),
            r.a.createElement(
              X.a,
              { className: e.container },
              r.a.createElement(q, {
                items: Object(d.a)(c),
                toggleRating: O,
                updateRating: E,
                isRating: i,
              })
            )
          );
        },
        ae =
          (a(91),
          function() {
            return r.a.createElement(
              o.a,
              { store: S },
              r.a.createElement(
                "div",
                { className: "App" },
                r.a.createElement(te, null)
              )
            );
          });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      i.a.render(r.a.createElement(ae, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
  },
  [[62, 1, 2]],
]);
//# sourceMappingURL=main.b7e3649c.chunk.js.map
