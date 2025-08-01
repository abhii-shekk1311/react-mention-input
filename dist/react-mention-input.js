import oe, { useRef as q, useEffect as z, useState as U } from "react";
var D = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K;
function se() {
  if (K) return $;
  K = 1;
  var d = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function m(p, t, a) {
    var c = null;
    if (a !== void 0 && (c = "" + a), t.key !== void 0 && (c = "" + t.key), "key" in t) {
      a = {};
      for (var s in t)
        s !== "key" && (a[s] = t[s]);
    } else a = t;
    return t = a.ref, {
      $$typeof: d,
      type: p,
      key: c,
      ref: t !== void 0 ? t : null,
      props: a
    };
  }
  return $.Fragment = l, $.jsx = m, $.jsxs = m, $;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function ae() {
  return Q || (Q = 1, process.env.NODE_ENV !== "production" && function() {
    function d(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case O:
          return "Fragment";
        case o:
          return "Profiler";
        case P:
          return "StrictMode";
        case R:
          return "Suspense";
        case w:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case I:
            return "Portal";
          case b:
            return (e.displayName || "Context") + ".Provider";
          case i:
            return (e._context.displayName || "Context") + ".Consumer";
          case A:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case C:
            return r = e.displayName || null, r !== null ? r : d(e.type) || "Memo";
          case y:
            r = e._payload, e = e._init;
            try {
              return d(e(r));
            } catch {
            }
        }
      return null;
    }
    function l(e) {
      return "" + e;
    }
    function m(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), l(e);
      }
    }
    function p(e) {
      if (e === O) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === y)
        return "<...>";
      try {
        var r = d(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function t() {
      var e = Y.A;
      return e === null ? null : e.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function c(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function s(e, r) {
      function n() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function E() {
      var e = d(this.type);
      return X[e] || (X[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function g(e, r, n, u, j, h, F, W) {
      return n = h.ref, e = {
        $$typeof: x,
        type: e,
        key: r,
        props: h,
        _owner: j
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: E
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function k(e, r, n, u, j, h, F, W) {
      var f = r.children;
      if (f !== void 0)
        if (u)
          if (te(f)) {
            for (u = 0; u < f.length; u++)
              _(f[u]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(f);
      if (J.call(r, "key")) {
        f = d(e);
        var N = Object.keys(r).filter(function(ne) {
          return ne !== "key";
        });
        u = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", Z[f + u] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          f,
          N,
          f
        ), Z[f + u] = !0);
      }
      if (f = null, n !== void 0 && (m(n), f = "" + n), c(r) && (m(r.key), f = "" + r.key), "key" in r) {
        n = {};
        for (var V in r)
          V !== "key" && (n[V] = r[V]);
      } else n = r;
      return f && s(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), g(
        e,
        f,
        h,
        j,
        t(),
        n,
        F,
        W
      );
    }
    function _(e) {
      typeof e == "object" && e !== null && e.$$typeof === x && e._store && (e._store.validated = 1);
    }
    var v = oe, x = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), b = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), Y = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, te = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var G, X = {}, B = v["react-stack-bottom-frame"].bind(
      v,
      a
    )(), H = L(p(a)), Z = {};
    M.Fragment = O, M.jsx = function(e, r, n, u, j) {
      var h = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return k(
        e,
        r,
        n,
        !1,
        u,
        j,
        h ? Error("react-stack-top-frame") : B,
        h ? L(p(e)) : H
      );
    }, M.jsxs = function(e, r, n, u, j) {
      var h = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return k(
        e,
        r,
        n,
        !0,
        u,
        j,
        h ? Error("react-stack-top-frame") : B,
        h ? L(p(e)) : H
      );
    };
  }()), M;
}
var ee;
function le() {
  return ee || (ee = 1, process.env.NODE_ENV === "production" ? D.exports = se() : D.exports = ae()), D.exports;
}
var T = le();
const ce = (d) => {
  const { selectedIndex: l } = d, m = q([]);
  return z(() => {
    const p = m.current[l];
    p && p.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [l]), {
    itemRefs: m
  };
}, ie = (d) => {
  const { usersList: l, listClass: m, listItemClass: p, selectedIndex: t, handleMentionClick: a } = d, {
    itemRefs: c
  } = ce({ selectedIndex: t });
  return /* @__PURE__ */ T.jsx("ul", { className: `${m ?? ""} users-list shadow-2xl list-none rounded-2xl overflow-auto scrollbar-none max-h-60 min-w-60`, children: l == null ? void 0 : l.map((s, E) => /* @__PURE__ */ T.jsxs(
    "li",
    {
      ref: (g) => {
        c.current[E] = g;
      },
      className: `${p ?? ""} ${E === t ? "bg-blue-100" : ""} users-list-item flex cursor-pointer items-center gap-x-4 border-b border-b-gray-200 hover:bg-blue-100 transition-all delay-100 p-3 over`,
      onClick: () => a(s),
      children: [
        /* @__PURE__ */ T.jsx("img", { className: "rounded-full h-8 w-8", src: s == null ? void 0 : s.profile_pic, alt: "ProfilePic" }),
        /* @__PURE__ */ T.jsx("span", { children: s == null ? void 0 : s.name })
      ]
    },
    s == null ? void 0 : s.id
  )) });
}, ue = (d) => {
  const { users: l, value: m, onChange: p } = d, t = q(null), a = q(null), [c, s] = U([]), [E, g] = U([]), [k, _] = U(!1), [v, x] = U(0);
  z(() => {
    const o = (i) => {
      const b = i.target;
      t.current && a.current && !t.current.contains(b) && !a.current.contains(b) && _(!1);
    };
    return document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, []), z(() => {
    x(0);
  }, [k]);
  const I = (o) => {
    const i = o.target.value, b = [];
    E.forEach((w) => {
      const C = w.name.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), y = new RegExp(`@${C}\\b`, "g"), S = i.match(y);
      (!S || S.length === 0) && b.push(w);
    });
    const A = E.filter((w) => !b.includes(w));
    g(A);
    const R = i.split(/\s/).pop();
    if (R != null && R.startsWith("@")) {
      const w = R.slice(1).toLowerCase();
      s((l == null ? void 0 : l.filter((C) => C.name.toLowerCase().includes(w))) ?? []), _(!0);
    } else
      _(!1);
    p(i, A);
  }, O = (o) => {
    k && c.length > 0 && (o.key === "ArrowDown" || o.code === "ArrowDown" ? (o.preventDefault(), x((i) => (i + 1) % c.length)) : o.key === "ArrowUp" || o.code === "ArrowUp" ? (o.preventDefault(), x(
      (i) => i === 0 ? c.length - 1 : i - 1
    )) : (o.key === "Enter" || o.code === "Enter") && (o.preventDefault(), c[v] && P(c[v])));
  }, P = (o) => {
    var y;
    const i = ((y = t == null ? void 0 : t.current) == null ? void 0 : y.selectionStart) ?? 0, b = m.slice(0, i).replace(/@\w*$/, `@${o.name}`), A = m.slice(i), R = `${b} ${A}`, C = E.some((S) => S.name === o.name) ? E : [...E, o];
    g(C), p(R, C), _(!1);
  };
  return {
    isMentioning: k,
    filteredUsers: c,
    selectedIndex: v,
    textareaRef: t,
    userListRef: a,
    handleKeyDown: O,
    handleMentionClick: P,
    handleInputChange: I
  };
}, de = (d) => {
  const {
    users: l,
    classNames: m = {},
    placeholder: p = "Enter @ to mention",
    name: t = "mention-input",
    rows: a = 1,
    value: c,
    onChange: s
  } = d, {
    isMentioning: E,
    filteredUsers: g,
    selectedIndex: k,
    textareaRef: _,
    userListRef: v,
    handleKeyDown: x,
    handleMentionClick: I,
    handleInputChange: O
  } = ue({ users: l, value: c, onChange: s }), {
    mainContainerClass: P,
    containerClass: o,
    inputClass: i,
    listContainerClass: b,
    listClass: A,
    listItemClass: R
  } = m;
  return /* @__PURE__ */ T.jsx("div", { className: `${P ?? ""}`, children: /* @__PURE__ */ T.jsxs("div", { className: `${o ?? ""} relative`, children: [
    /* @__PURE__ */ T.jsx(
      "textarea",
      {
        className: `${i ?? ""} p-2 w-100 rounded-md border-1 border-b-gray-600 resize-none`,
        ref: _,
        name: t,
        placeholder: p,
        rows: a,
        value: c ?? "",
        onKeyDown: x,
        onChange: O
      }
    ),
    E && /* @__PURE__ */ T.jsx(
      "div",
      {
        ref: v,
        className: `${b ?? ""} top-12 w-100 left-0 absolute z-10`,
        children: /* @__PURE__ */ T.jsx(
          ie,
          {
            selectedIndex: k,
            listClass: A,
            listItemClass: R,
            usersList: g,
            handleMentionClick: I
          }
        )
      }
    )
  ] }) });
};
export {
  de as ReactMentionInput
};
