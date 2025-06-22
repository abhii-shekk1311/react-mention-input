import oe, { useRef as G, useEffect as X, useState as F } from "react";
var V = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee;
function se() {
  if (ee) return M;
  ee = 1;
  var d = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function m(p, t, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), t.key !== void 0 && (i = "" + t.key), "key" in t) {
      a = {};
      for (var s in t)
        s !== "key" && (a[s] = t[s]);
    } else a = t;
    return t = a.ref, {
      $$typeof: d,
      type: p,
      key: i,
      ref: t !== void 0 ? t : null,
      props: a
    };
  }
  return M.Fragment = c, M.jsx = m, M.jsxs = m, M;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var re;
function ae() {
  return re || (re = 1, process.env.NODE_ENV !== "production" && function() {
    function d(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === b ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case y:
          return "Fragment";
        case P:
          return "Profiler";
        case I:
          return "StrictMode";
        case k:
          return "Suspense";
        case j:
          return "SuspenseList";
        case N:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case S:
            return "Portal";
          case l:
            return (e.displayName || "Context") + ".Provider";
          case n:
            return (e._context.displayName || "Context") + ".Consumer";
          case w:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case D:
            return r = e.displayName || null, r !== null ? r : d(e.type) || "Memo";
          case C:
            r = e._payload, e = e._init;
            try {
              return d(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function m(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), c(e);
      }
    }
    function p(e) {
      if (e === y) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === C)
        return "<...>";
      try {
        var r = d(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function t() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function s(e, r) {
      function o() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function E() {
      var e = d(this.type);
      return B[e] || (B[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function _(e, r, o, u, A, R, z, q) {
      return o = R.ref, e = {
        $$typeof: T,
        type: e,
        key: r,
        props: R,
        _owner: A
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: z
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, r, o, u, A, R, z, q) {
      var f = r.children;
      if (f !== void 0)
        if (u)
          if (Y(f)) {
            for (u = 0; u < f.length; u++)
              g(f[u]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(f);
      if (L.call(r, "key")) {
        f = d(e);
        var $ = Object.keys(r).filter(function(ne) {
          return ne !== "key";
        });
        u = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", Q[f + u] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          f,
          $,
          f
        ), Q[f + u] = !0);
      }
      if (f = null, o !== void 0 && (m(o), f = "" + o), i(r) && (m(r.key), f = "" + r.key), "key" in r) {
        o = {};
        for (var J in r)
          J !== "key" && (o[J] = r[J]);
      } else o = r;
      return f && s(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), _(
        e,
        f,
        R,
        A,
        t(),
        o,
        z,
        q
      );
    }
    function g(e) {
      typeof e == "object" && e !== null && e.$$typeof === T && e._store && (e._store.validated = 1);
    }
    var v = oe, T = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), n = Symbol.for("react.consumer"), l = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), b = Symbol.for("react.client.reference"), O = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, Y = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var H, B = {}, Z = v["react-stack-bottom-frame"].bind(
      v,
      a
    )(), K = W(p(a)), Q = {};
    U.Fragment = y, U.jsx = function(e, r, o, u, A) {
      var R = 1e4 > O.recentlyCreatedOwnerStacks++;
      return x(
        e,
        r,
        o,
        !1,
        u,
        A,
        R ? Error("react-stack-top-frame") : Z,
        R ? W(p(e)) : K
      );
    }, U.jsxs = function(e, r, o, u, A) {
      var R = 1e4 > O.recentlyCreatedOwnerStacks++;
      return x(
        e,
        r,
        o,
        !0,
        u,
        A,
        R ? Error("react-stack-top-frame") : Z,
        R ? W(p(e)) : K
      );
    };
  }()), U;
}
var te;
function le() {
  return te || (te = 1, process.env.NODE_ENV === "production" ? V.exports = se() : V.exports = ae()), V.exports;
}
var h = le();
const ce = (d) => {
  const { selectedIndex: c } = d, m = G([]);
  return X(() => {
    const p = m.current[c];
    p && p.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [c]), {
    itemRefs: m
  };
}, ie = (d) => {
  const { usersList: c, listClass: m, listItemClass: p, selectedIndex: t, handleMentionClick: a } = d, {
    itemRefs: i
  } = ce({ selectedIndex: t });
  return /* @__PURE__ */ h.jsx("ul", { className: `${m ?? ""} users-list shadow-2xl list-none rounded-2xl overflow-auto scrollbar-none max-h-60 min-w-60`, children: c == null ? void 0 : c.map((s, E) => /* @__PURE__ */ h.jsxs(
    "li",
    {
      ref: (_) => {
        i.current[E] = _;
      },
      className: `${p ?? ""} ${E === t ? "bg-blue-100" : ""} users-list-item flex cursor-pointer items-center gap-x-4 border-b border-b-gray-200 hover:bg-blue-100 transition-all delay-100 p-3 over`,
      onClick: () => a(s),
      children: [
        /* @__PURE__ */ h.jsx("img", { className: "rounded-full h-8 w-8", src: s == null ? void 0 : s.profile_pic, alt: "ProfilePic" }),
        /* @__PURE__ */ h.jsx("span", { children: s == null ? void 0 : s.name })
      ]
    },
    s == null ? void 0 : s.id
  )) });
}, ue = (d) => {
  const { users: c, value: m, onChange: p } = d, t = G(null), a = G(null), [i, s] = F([]), [E, _] = F([]), [x, g] = F(!1), [v, T] = F(0);
  X(() => {
    const n = (l) => {
      const w = l.target;
      t.current && a.current && !t.current.contains(w) && !a.current.contains(w) && g(!1);
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, []), X(() => {
    T(0);
  }, [x]);
  const S = (n) => n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), y = (n) => {
    const l = n.target.value, w = [];
    E.forEach((b) => {
      const O = b.name.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), L = new RegExp(`@${O}\\b`, "g"), Y = l.match(L);
      (!Y || Y.length === 0) && w.push(b);
    });
    const k = E.filter((b) => !w.includes(b));
    _(k);
    const j = l.split(/\s/).pop();
    if (j != null && j.startsWith("@")) {
      const b = j.slice(1).toLowerCase();
      s((c == null ? void 0 : c.filter((O) => O.name.toLowerCase().includes(b))) ?? []), g(!0);
    } else
      g(!1);
    if (!k.length) return S(l);
    const D = k.map((b) => b.name.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"), C = new RegExp(`@(?:${D})\\b`, "g"), N = S(l).replace(C, (b) => `<span class="text-primary">${b}</span>`).replace(/\n/g, "<br>");
    p(N, k);
  }, I = (n) => {
    x && i.length > 0 && (n.key === "ArrowDown" || n.code === "ArrowDown" ? (n.preventDefault(), T((l) => (l + 1) % i.length)) : n.key === "ArrowUp" || n.code === "ArrowUp" ? (n.preventDefault(), T(
      (l) => l === 0 ? i.length - 1 : l - 1
    )) : (n.key === "Enter" || n.code === "Enter") && (n.preventDefault(), i[v] && P(i[v])));
  }, P = (n) => {
    var N;
    const l = ((N = t == null ? void 0 : t.current) == null ? void 0 : N.selectionStart) ?? 0, w = m.slice(0, l).replace(/@\w*$/, `@${n.name}`), k = m.slice(l), j = `${w} ${k}`, C = E.some((b) => b.name === n.name) ? E : [...E, n];
    _(C), p(j, C), g(!1);
  };
  return {
    isMentioning: x,
    filteredUsers: i,
    selectedIndex: v,
    textareaRef: t,
    userListRef: a,
    handleKeyDown: I,
    handleMentionClick: P,
    handleInputChange: y
  };
}, de = ({ users: d, classNames: c = {}, placeholder: m, rows: p, value: t, onChange: a }) => {
  const {
    isMentioning: i,
    filteredUsers: s,
    selectedIndex: E,
    textareaRef: _,
    userListRef: x,
    handleKeyDown: g,
    handleMentionClick: v,
    handleInputChange: T
  } = ue({ users: d, value: t, onChange: a }), {
    mainContainerClass: S,
    containerClass: y,
    inputClass: I,
    listContainerClass: P,
    listClass: n,
    listItemClass: l
  } = c;
  return (
    // <div className={`${mainContainerClass ?? ""}`}>
    //     <div className={`${containerClass ?? ""} relative`}>
    //         <textarea
    //             className={`${inputClass ?? ""} p-2 w-100 rounded-md border-1 border-b-gray-600 resize-none`}
    //             ref={textareaRef}
    //             placeholder={placeholder}
    //             rows={rows ?? 1}
    //             value={value ?? ""}
    //             onKeyDown={handleKeyDown}
    //             onChange={handleInputChange}
    //         />
    //         {isMentioning
    //             && (
    //                 <div
    //                     ref={userListRef}
    //                     className={`${listContainerClass ?? ""} top-12 w-100 left-0 absolute z-10`}
    //                 >
    //                     <UsersList
    //                         selectedIndex={selectedIndex}
    //                         listClass={listClass}
    //                         listItemClass={listItemClass}
    //                         usersList={filteredUsers}
    //                         handleMentionClick={handleMentionClick}
    //                     />
    //                 </div>
    //             )}
    //     </div>
    // </div>
    /* @__PURE__ */ h.jsx("div", { className: `${S ?? ""}`, children: /* @__PURE__ */ h.jsxs("div", { className: `${y ?? ""} relative`, children: [
      /* @__PURE__ */ h.jsx(
        "div",
        {
          "aria-hidden": !0,
          className: `pointer-events-none absolute top-0 left-0 w-full h-full 
                   whitespace-pre-wrap break-words rounded-md p-2`,
          dangerouslySetInnerHTML: { __html: t + "​" }
        }
      ),
      /* @__PURE__ */ h.jsx(
        "textarea",
        {
          ref: _,
          className: `${I ?? ""} relative z-10 p-2 w-full rounded-md 
                    border border-gray-300 resize-none bg-transparent 
                    text-transparent caret-black 
                    selection:text-white selection:bg-blue-600`,
          placeholder: m,
          rows: p ?? 1,
          value: t ?? "",
          onKeyDown: g,
          onChange: T
        }
      ),
      i && /* @__PURE__ */ h.jsx(
        "div",
        {
          ref: x,
          className: `${P ?? ""} absolute top-12 left-0 z-20 w-full`,
          children: /* @__PURE__ */ h.jsx(
            ie,
            {
              selectedIndex: E,
              listClass: n,
              listItemClass: l,
              usersList: s,
              handleMentionClick: v
            }
          )
        }
      )
    ] }) })
  );
};
export {
  de as ReactMentionInput
};
