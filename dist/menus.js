(() => {
  // node_modules/@finsweet/attributes-cmsfilter/cmsfilter.js
  (() => {
    var pe = Object.create;
    var lt = Object.defineProperty;
    var fe = Object.getOwnPropertyDescriptor;
    var de = Object.getOwnPropertyNames;
    var Ee = Object.getPrototypeOf, Te = Object.prototype.hasOwnProperty;
    var ge = (t, e, r) => e in t ? lt(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r;
    var Se = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
    var ye = (t, e, r, n) => {
      if (e && typeof e == "object" || typeof e == "function")
        for (let o of de(e))
          !Te.call(t, o) && o !== r && lt(t, o, { get: () => e[o], enumerable: !(n = fe(e, o)) || n.enumerable });
      return t;
    };
    var be = (t, e, r) => (r = t != null ? pe(Ee(t)) : {}, ye(e || !t || !t.__esModule ? lt(r, "default", { value: t, enumerable: true }) : r, t));
    var ht = (t, e, r) => (ge(t, typeof e != "symbol" ? e + "" : e, r), r);
    var Xt = Se((Dn, Qt) => {
      Qt.exports = dr;
      function dr(t, e, r, n) {
        var o, s, i;
        return function() {
          if (i = this, s = Array.prototype.slice.call(arguments), o && (r || n))
            return;
          if (!r)
            return m(), o = setTimeout(a, e), o;
          o = setTimeout(m, e), t.apply(i, s);
          function a() {
            m(), t.apply(i, s);
          }
          function m() {
            clearTimeout(o), o = null;
          }
        };
      }
    });
    var K = "fs-attributes";
    var At = "animation";
    var Ct = "cmsattribute";
    var xt = "cmscore";
    var O = "cmsfilter";
    var _t = "queryparam";
    var at = "support";
    var Ft = async (...t) => {
      var r;
      let e = [];
      for (let n of t) {
        let o = await ((r = window.fsAttributes[n]) == null ? void 0 : r.loading);
        e.push(o);
      }
      return e;
    };
    var w = class {
      static activateAlerts() {
        this.alertsActivated = true;
      }
      static alert(e, r) {
        if (this.alertsActivated && window.alert(e), r === "error")
          throw new Error(e);
      }
    };
    ht(w, "alertsActivated", false);
    var V = () => {
    };
    function I(t, e, r, n) {
      return t ? (t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n)) : V;
    }
    var wt = (t) => t instanceof Element;
    var R = (t) => t instanceof HTMLInputElement, It = (t) => t instanceof HTMLSelectElement, Lt = (t) => t instanceof HTMLTextAreaElement;
    var G = (t) => R(t) || It(t) || Lt(t);
    var L = (t, e) => !!t && e.includes(t);
    var ct = (t) => t != null;
    var Q = (t) => typeof t == "string";
    var Y = (t) => t === void 0;
    var Mt = { wrapper: "w-dyn-list", list: "w-dyn-items", item: "w-dyn-item", paginationWrapper: "w-pagination-wrapper", paginationNext: "w-pagination-next", paginationPrevious: "w-pagination-previous", pageCount: "w-page-count", emptyState: "w-dyn-empty" }, D = { formBlock: "w-form", checkboxField: "w-checkbox", checkboxInput: "w-checkbox-input", radioField: "w-radio", radioInput: "w-radio-input", checkboxOrRadioLabel: "w-form-label", checkboxOrRadioFocus: "w--redirected-focus", checkboxOrRadioChecked: "w--redirected-checked", successMessage: "w-form-done", errorMessage: "w-form-fail" };
    var P = (t, e) => (Array.isArray(e) || (e = [e]), e.map((n) => t.dispatchEvent(new Event(n, { bubbles: true }))).every((n) => n));
    var { radioInput: he, checkboxOrRadioFocus: Ae, checkboxOrRadioChecked: Ce } = D, mt = (t, e = []) => {
      let { type: r } = t;
      if (R(t) && ["checkbox", "radio"].includes(r)) {
        if (!t.checked || (t.checked = false, P(t, ["click", "input", "change"].filter((s) => !e.includes(s))), r === "checkbox"))
          return;
        let { parentElement: n } = t;
        if (!n)
          return;
        let o = n.querySelector(`.${he}`);
        if (!o)
          return;
        o.classList.remove(Ae, Ce);
        return;
      }
      t.value = "", P(t, ["input", "change"].filter((n) => !e.includes(n)));
    };
    var ut = (t, e = true) => t.cloneNode(e);
    function $2(t, e, r, n = true) {
      let o = r ? [r] : [];
      if (!t)
        return o;
      let s = t.split(",").reduce((i, l) => {
        let a = l.trim();
        return (!n || a) && i.push(a), i;
      }, []);
      if (e) {
        let i = s.filter((l) => L(l, e));
        return i.length ? i : o;
      }
      return s;
    }
    var pt = (t) => Object.entries(t);
    var X = (t) => !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    var q = (t, e) => t.every((r) => e.includes(r)) && e.every((r) => t.includes(r));
    var k = (t, e) => {
      let { type: r } = t, n = r === "radio";
      if (n || r === "checkbox") {
        if (!R(t) || typeof e != "boolean" || e === t.checked || n && e === false)
          return;
        t.checked = e;
      } else {
        if (t.value === e)
          return;
        t.value = e.toString();
      }
      P(t, ["click", "input", "change"]);
    };
    function vt(t, e, r) {
      var o;
      let n = window.fsAttributes[t];
      return n.destroy = r || V, (o = n.resolve) == null || o.call(n, e), e;
    }
    var H = (t, e = "1", r = "iife") => {
      let o = `${t}${r === "esm" ? ".esm" : ""}.js`;
      return `https://cdn.jsdelivr.net/npm/@finsweet/attributes-${t}@${e}/${o}`;
    };
    var xe = H(At, "1", "esm"), J = async () => {
      let { fsAttributes: t } = window;
      t.animation || (t.animation = {});
      let { animation: e } = t;
      if (e.import)
        return e.import;
      try {
        return e.import = import(xe), e.import;
      } catch (r) {
        w.alert(`${r}`, "error");
        return;
      }
    };
    var _e = H(xt, "1"), Rt = async () => {
      let { fsAttributes: t } = window;
      t.cmscore || (t.cmscore = {});
      let { cmscore: e } = t;
      if (e.import)
        return e.import;
      try {
        return e.import = import(_e), e.import.then((r) => {
          r && (e.version || (e.version = r.version));
        }), e.import;
      } catch (r) {
        w.alert(`${r}`, "error");
        return;
      }
    };
    var Fe = `${K}-${at}`, Dt = async () => {
      var o;
      let { fsAttributes: t, location: e } = window, { host: r, searchParams: n } = new URL(e.href);
      return !r.includes("webflow.io") || !n.has(Fe) ? false : (o = t.import) == null ? void 0 : o.call(t, at, "1");
    };
    var _ = (t) => (e) => `${t}${e ? `-${e}` : ""}`, Z = (t) => {
      let e = (o, s, i) => {
        let l = t[o], { key: a, values: m } = l, c;
        if (!s)
          return `[${a}]`;
        let u = m == null ? void 0 : m[s];
        Q(u) ? c = u : c = u(i && "instanceIndex" in i ? i.instanceIndex : void 0);
        let p = i && "caseInsensitive" in i && i.caseInsensitive ? "i" : "";
        if (!(i != null && i.operator))
          return `[${a}="${c}"${p}]`;
        switch (i.operator) {
          case "prefixed":
            return `[${a}^="${c}"${p}]`;
          case "suffixed":
            return `[${a}$="${c}"${p}]`;
          case "contains":
            return `[${a}*="${c}"${p}]`;
        }
      };
      function r(o, s) {
        let i = e("element", o, s), l = (s == null ? void 0 : s.scope) || document;
        return s != null && s.all ? [...l.querySelectorAll(i)] : l.querySelector(i);
      }
      return [e, r, (o, s) => {
        let i = t[s];
        return i ? o.getAttribute(i.key) : null;
      }];
    };
    var j = { preventLoad: { key: `${K}-preventload` }, debugMode: { key: `${K}-debug` }, src: { key: "src", values: { finsweet: "@finsweet/attributes" } }, dev: { key: `${K}-dev` } }, [ft, pn] = Z(j);
    var kt = (t) => {
      let { currentScript: e } = document, r = {};
      if (!e)
        return { attributes: r, preventsLoad: false };
      let o = { preventsLoad: Q(e.getAttribute(j.preventLoad.key)), attributes: r };
      for (let s in t) {
        let i = e.getAttribute(t[s]);
        o.attributes[s] = i;
      }
      return o;
    };
    var Ut = ({ scriptAttributes: t, attributeKey: e, version: r, init: n }) => {
      var l;
      we(), (l = window.fsAttributes)[e] || (l[e] = {});
      let { preventsLoad: o, attributes: s } = kt(t), i = window.fsAttributes[e];
      i.version = r, i.init = n, o || (window.Webflow || (window.Webflow = []), window.Webflow.push(() => n(s)));
    }, we = () => {
      let t = Le();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        dt(window.fsAttributes, t);
        return;
      }
      let e = Ie(t);
      dt(e, t), Me(e), window.fsAttributes = e, window.FsAttributes = window.fsAttributes, Dt();
    }, Ie = (t) => {
      let e = { cms: {}, push(...r) {
        var n, o;
        for (let [s, i] of r)
          (o = (n = this[s]) == null ? void 0 : n.loading) == null || o.then(i);
      }, async import(r, n) {
        let o = e[r];
        return o || new Promise((s) => {
          let i = document.createElement("script");
          i.src = H(r, n), i.async = true, i.onload = () => {
            let [l] = dt(e, [r]);
            s(l);
          }, document.head.append(i);
        });
      }, destroy() {
        var r, n;
        for (let o of t)
          (n = (r = window.fsAttributes[o]) == null ? void 0 : r.destroy) == null || n.call(r);
      } };
      return e;
    }, Le = () => {
      let t = ft("src", "finsweet", { operator: "contains" }), e = ft("dev");
      return [...document.querySelectorAll(`script${t}, script${e}`)].reduce((o, s) => {
        var l;
        let i = s.getAttribute(j.dev.key) || ((l = s.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : l[0]);
        return i && !o.includes(i) && o.push(i), o;
      }, []);
    }, dt = (t, e) => e.map((n) => {
      let o = t[n];
      return o || (t[n] = {}, o = t[n], o.loading = new Promise((s) => {
        o.resolve = (i) => {
          s(i), delete o.resolve;
        };
      }), o);
    }), Me = (t) => {
      let e = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      t.push(...e);
    };
    var Bt = "1.16.2";
    var y = `fs-${O}`, Re = "list", De = "filters", ke = "empty", Ue = "initial", Be = "results-count", Ne = "filter-results-count", Ke = "items-count", Oe = "tag-template", Pe = "tag-text", $e = "tag-remove", He = "scroll-anchor", Ve = "clear", Ge = "reset", Ye = "field", qe = "clear", je = "reset", We = "match", Nt = { any: "any", all: "all" }, ze = "range", Kt = { from: "from", to: "to" }, Qe = "type", Xe = { date: "date" }, Je = "showquery", Ze = { true: "true" }, tr = "allowsubmit", er = { true: "true" }, rr = "hideempty", or = { true: "true" }, nr = "highlight", sr = { true: "true" }, ir = "highlightclass", lr = "active", ar = "debounce", cr = "tagformat", mr = { category: "category" }, ur = "tagcategory", pr = "easing", fr = "duration", F = { element: { key: `${y}-element`, values: { list: _(Re), filters: _(De), empty: _(ke), initial: _(Ue), resultsCount: _(Be), filterResultsCount: _(Ne), itemsCount: _(Ke), tagTemplate: _(Oe), tagText: _(Pe), tagRemove: _($e), scrollAnchor: _(He), reset: Ve, resetFallback: Ge } }, field: { key: `${y}-${Ye}` }, reset: { key: `${y}-${qe}` }, resetFallback: { key: `${y}-${je}` }, match: { key: `${y}-${We}`, values: Nt }, range: { key: `${y}-${ze}`, values: Kt }, type: { key: `${y}-${Qe}`, values: Xe }, showQuery: { key: `${y}-${Je}`, values: Ze }, allowSubmit: { key: `${y}-${tr}`, values: er }, hideEmpty: { key: `${y}-${rr}`, values: or }, highlight: { key: `${y}-${nr}`, values: sr }, highlightCSS: { key: `${y}-${ir}` }, activeCSS: { key: `${y}-${lr}` }, debouncing: { key: `${y}-${ar}` }, tagFormat: { key: `${y}-${cr}` }, tagCategory: { key: `${y}-${ur}` }, easing: { key: `${y}-${pr}` }, duration: { key: `${y}-${fr}` } }, [U, h] = Z(F), Ot = Object.values(Nt), Pt = { range: Object.values(Kt) }, tt = Object.values(mr), $t = "fs-cmsfilter_highlight", Ht = "fs-cmsfilter_active", Vt = "50";
    var et = ({ filtersData: t }) => {
      for (let { elements: e } of t)
        for (let r of e) {
          let { resultsCount: n, hidden: o, hideEmpty: s } = r;
          if (!s)
            continue;
          let i = n === 0;
          i !== o && (r.hidden = i, s.style.display = i ? "none" : "");
        }
    };
    var Gt = ({ props: t }) => {
      for (let e in t) {
        let { elements: r, values: n, highlightData: o } = t[e];
        if (o)
          for (let s of n) {
            let i = r.get(s);
            if (!i)
              continue;
            let { element: l, originalHTML: a } = i, m = o.get(s);
            if (!m) {
              l.innerHTML = a;
              continue;
            }
            let { filterValue: c, highlightCSSClass: u } = m, p = new RegExp(c || s, "gi");
            l.innerHTML = a.replace(p, `<span class="${u}">$&</span>`);
          }
      }
    }, Yt = ({ props: t }) => {
      for (let e in t)
        t[e].highlightData = /* @__PURE__ */ new Map();
    };
    var rt = ({ resultsElement: t }, { validItems: e }) => {
      t && (t.textContent = `${e.length}`);
    }, ot = ({ filtersData: t }) => {
      for (let { elements: e } of t)
        for (let { resultsElement: r, resultsCount: n } of e)
          r && (r.textContent = `${n}`);
    }, nt = ({ filtersData: t }, { validItems: e }) => {
      var n, o;
      let r = {};
      for (let { elements: s, filterKeys: i } of t) {
        if (i.length > 1)
          continue;
        let [l] = i;
        r[l] || (r[l] = {});
        for (let a of s)
          a.resultsCount = 0, (n = r[l])[o = a.value] || (n[o] = []), r[l][a.value].push(a);
      }
      for (let { props: s } of e)
        for (let i in s) {
          let l = r[i];
          if (!l)
            continue;
          let { values: a } = s[i];
          for (let m of a) {
            let c = l[m];
            if (c)
              for (let u of c)
                u.resultsCount += 1;
          }
        }
    };
    var { field: { key: qt }, range: { key: jt }, type: { key: Wt } } = F, zt = (t, e) => {
      let { highlightResults: r, showFilterResults: n, hideEmptyFilters: o } = t;
      e.on("shouldcollectprops", (s) => {
        for (let i of s)
          i.collectProps({ fieldKey: qt, rangeKey: jt, typeKey: Wt });
      }), e.on("shouldfilter", async () => await t.applyFilters(true)), e.on("renderitems", (s) => {
        if (rt(t, e), nt(t, e), o && et(t), n && ot(t), r)
          for (let i of s)
            Gt(i);
      }), e.once("nestinitialitems").then(async (s) => {
        for (let i of s)
          i.collectProps({ fieldKey: qt, rangeKey: jt, typeKey: Wt });
        await t.applyFilters(true), await e.renderItems(true);
      });
    };
    var St = be(Xt(), 1);
    var Et = ({ elements: t, values: e }, r) => {
      let n;
      r ? (e.delete(r), n = t.filter((o) => o.value === r)) : (e.clear(), n = t);
      for (let { element: o } of n)
        mt(o);
    };
    var Er = "fs-cms-element", Tr = { wrapper: "wrapper", list: "list", item: "item", paginationWrapper: "pagination-wrapper", paginationNext: "pagination-next", paginationPrevious: "pagination-previous", pageCount: "page-count", emptyState: "empty" }, Jt = (t) => {
      let e = `.${Mt[t]}`, r = `[${Er}="${Tr[t]}"]`;
      return `:is(${e}, ${r})`;
    };
    var gr = Intl.DateTimeFormat(), Tt = (t) => {
      if (t)
        return new Date(gr.format(new Date(t)));
    };
    var Zt = (t) => {
      if (t)
        return parseFloat(t.replace(/[^0-9.-]+/g, ""));
    };
    function W(t) {
      return t == null ? void 0 : t.trim().toLowerCase();
    }
    var gt = (t, e) => {
      t.closest(Jt("item")) && (t.id = `${t.id}-${e}`);
    };
    var M = (t, e, r) => {
      var u, p;
      let { value: n } = t, { elements: o, values: s, mode: i } = e, { value: l, mode: a, type: m, activeCSSClass: c } = r;
      switch (m) {
        case "checkbox": {
          let { checked: E } = t;
          if (!l)
            break;
          (u = t.parentElement) == null || u.classList[E ? "add" : "remove"](c), s[E ? "add" : "delete"](l);
          break;
        }
        case "radio": {
          let { checked: E } = t;
          for (let { element: f, type: T } of o) {
            if (T !== "radio")
              return false;
            let d = f.checked;
            (p = f.parentElement) == null || p.classList[d ? "add" : "remove"](c);
          }
          if (!E || !l)
            break;
          s.clear(), s.add(l);
          break;
        }
        default: {
          if (r.value = n, t.classList[n ? "add" : "remove"](c), i === "range") {
            let E = [...s];
            E[a === "from" ? 0 : 1] = n, E.some((f) => !!f) ? e.values = new Set(E) : s.clear();
            break;
          }
          s.clear(), n && s.add(n);
          break;
        }
      }
      return true;
    };
    var { field: { key: Sr }, reset: { key: yr }, resetFallback: { key: br }, range: { key: hr }, match: { key: Ar }, tagFormat: { key: Cr }, tagCategory: { key: xr }, hideEmpty: { key: _r, values: Fr }, highlight: { key: wr, values: Ir }, highlightCSS: { key: Lr }, activeCSS: { key: Mr }, debouncing: { key: vr } } = F, { checkboxField: Rr, radioField: Dr } = D, te = (t) => {
      let e = t.querySelector("form"), r = t.querySelector('input[type="submit"]'), n = [...h("reset", { scope: t, operator: "prefixed", all: true }), ...h("resetFallback", { scope: t, operator: "prefixed", all: true })], o = /* @__PURE__ */ new Map();
      for (let s of n) {
        let i = s.getAttribute(yr) || s.getAttribute(br), l = i ? [...new Set($2(i))].map((a) => W(a)) : [];
        o.set(s, l);
      }
      return { form: e, submitButton: r, resetButtonsData: o };
    }, ee = (t, e, r, n, o) => {
      let s = [];
      return t.querySelectorAll(U("field")).forEach((l, a) => {
        let m = l.getAttribute(Sr);
        if (!m)
          return;
        let c = [...new Set($2(m))], u = c.map((S) => W(S));
        if (!u.length)
          return;
        let p = kr(l, c, u, e, r, n, o);
        if (!p)
          return;
        let [E, f] = p, T = s.find((S) => q(u, S.filterKeys)), d = T || { ...E, elements: [] };
        T || s.push(d);
        let g = l.closest(`.${Rr}, .${Dr}`);
        if (g) {
          let S = R(l), b = S ? "true" : l.textContent || "", x = S ? l : g.querySelector("input");
          gt(x, a);
          let z = h("filterResultsCount", { operator: "prefixed", scope: g }), N = l.getAttribute(_r) === Fr.true ? g : void 0, bt = { ...f, value: b, resultsElement: z, hideEmpty: N, element: x, type: x.type };
          d.elements.push(bt), M(x, d, bt);
          return;
        }
        if (!G(l) || l.type === "submit")
          return;
        let { type: A, value: C } = l;
        gt(l, a);
        let v = { ...f, element: l, type: A, value: C };
        d.elements.push(v), A === "select-one" && M(l, d, v);
      }), s;
    }, kr = (t, e, r, n, o, s, i) => {
      let [l, a, m, c, u, p] = [Ar, Cr, Mr, vr, wr, Lr].map((B) => t.getAttribute(B)), E = L(l, Ot) ? l : void 0, f = L(a, tt) ? a : void 0, T = t.getAttribute(xr), d = m || n, g = c ? parseFloat(c) : o, A = s || u === Ir.true, C = p || i, v = t.getAttribute(hr), S, b;
      for (let [B, N] of pt(Pt))
        if (L(v, N)) {
          S = B, b = v;
          break;
        }
      return [{ match: E, filterKeys: r, originalFilterKeys: e, highlight: A, tagFormat: f, tagCategory: T, highlightCSSClass: C, mode: S, values: /* @__PURE__ */ new Set() }, { activeCSSClass: d, debouncing: g, resultsCount: 0, mode: b, hidden: false }];
    };
    var oe = (t, e, r, n) => (n && Yt(t), r ? true : e.every((o) => Ur(t, o))), Ur = (t, { filterKeys: e, values: r, match: n, mode: o, highlight: s, highlightCSSClass: i, elements: l }) => {
      let a = [...r];
      if (!a.length)
        return true;
      let m = e.includes("*");
      m && (e = Object.keys(t.props));
      let c = e.filter((u) => {
        let p = t.props[u];
        if (!p)
          return false;
        let { values: E, highlightData: f, type: T, range: d } = p, g = [...E];
        if (!g.length)
          return false;
        if (o === "range") {
          let [C] = g, [v, S] = a, b = re(C, v, S, T);
          return b && s && (f == null || f.set(C, { highlightCSSClass: i })), b;
        }
        let A = a.filter((C) => {
          if (d === "from" || d === "to") {
            let [S, b] = g, x = re(C, S, b, T);
            return x && s && (f == null || f.set(S, { highlightCSSClass: i }), f == null || f.set(b, { highlightCSSClass: i })), x;
          }
          return g.some((S) => {
            let b;
            if (T === "date" && !m) {
              let [x, z] = [C, S].map((B) => {
                var N;
                return (N = Tt(B)) == null ? void 0 : N.getTime();
              });
              b = x === z;
            } else
              l.some(({ type: x }) => !["checkbox", "radio", "select-one"].includes(x)) || e.length > 1 ? b = S.toLowerCase().includes(C.toLowerCase()) : b = C.toLowerCase() === S.toLowerCase();
            return b && s && (f == null || f.set(S, { highlightCSSClass: i, filterValue: C })), b;
          });
        });
        return n === "all" ? A.length === a.length : A.length > 0;
      });
      return n === "all" ? c.length === e.length : c.length > 0;
    }, re = (t, e, r, n) => {
      let [o, s, i] = [t, e, r].map((l) => n === "date" ? Tt(l) : Zt(l));
      return o ? !e && !Y(i) ? o <= i : !r && !Y(s) ? o >= s : Y(i) || Y(s) ? false : o >= s && o <= i : false;
    };
    var { location: ne, history: Br } = window, se = (t) => {
      let e = false, { filtersData: r } = t, n = new URL(ne.href), { searchParams: o } = n;
      for (let s of o) {
        let i = W(s[0]), l = s[1], a = r.find(({ filterKeys: p }) => p.length === 1 && p.includes(i));
        if (!a)
          continue;
        let m = $2(l, void 0, void 0, false);
        if (!m.length)
          continue;
        e = true;
        let { elements: c, mode: u } = a;
        if (u === "range") {
          let [p, E] = m, f = c.filter(({ mode: d }) => d === "from"), T = c.filter(({ mode: d }) => d === "to");
          if (p && f.length)
            for (let d of f) {
              let { element: g, type: A } = d;
              A === "checkbox" || A === "radio" ? k(g, true) : k(g, p), M(g, a, d);
            }
          if (E && T)
            for (let d of T) {
              let { element: g, type: A } = d;
              A === "checkbox" || A === "radio" ? k(g, true) : k(g, E), M(g, a, d);
            }
          continue;
        }
        for (let p of m)
          for (let E of c) {
            let { element: f, value: T, type: d } = E;
            if (T === p && (d === "checkbox" || d === "radio"))
              k(f, true);
            else if (!T && d !== "checkbox" && d !== "radio")
              k(f, p);
            else
              continue;
            M(f, a, E);
          }
      }
      return e;
    }, ie = (t) => {
      let e = new URL(ne.href), { searchParams: r } = e;
      for (let { filterKeys: [n], values: o } of t) {
        if (!o.size) {
          r.delete(n);
          continue;
        }
        let s = [...o].join(",");
        r.set(n, s);
      }
      Br.replaceState(null, "", e.toString());
    };
    var { field: { key: Nr }, range: { key: Kr }, type: { key: Or } } = F, st = class {
      constructor(e, r, { resultsElement: n, showQueryParams: o, allowSubmit: s, highlightAll: i, highlightCSSClass: l, activeCSSClass: a, debouncing: m }) {
        this.formBlock = e;
        this.listInstance = r;
        this.restartingFilters = false;
        let { form: c, submitButton: u, resetButtonsData: p } = te(e);
        this.form = c, this.submitButton = u, this.resetButtonsData = p, this.resultsElement = n, this.showQueryParams = o, this.allowSubmit = s, this.activeCSSClass = a, this.debouncing = m, this.highlightAll = i, this.highlightCSSClass = l, this.submitButtonVisible = !!u && X(u);
        let E = this.init();
        this.destroy = async () => {
          (await E)();
        };
      }
      async init() {
        let { listInstance: e, hideEmptyFilters: r, showFilterResults: n } = this;
        this.storeFiltersData();
        for (let o of e.items)
          o.collectProps({ fieldKey: Nr, rangeKey: Kr, typeKey: Or });
        return rt(this, e), nt(this, e), r && et(this), n && ot(this), se(this), await J(), this.applyFilters(), this.listenEvents();
      }
      async listenEvents() {
        let { form: e, resetButtonsData: r, submitButton: n } = this, o = I(e, "submit", (a) => this.handleSubmit(a)), s = I(e, "input", (a) => this.handleInputEvents(a)), i = [];
        for (let [a, m] of r) {
          let c = I(a, "click", () => this.resetFilters(m));
          i.push(c);
          let u = a.closest(`.${D.radioField}`);
          if (!u)
            continue;
          let p = u.querySelector("input");
          if (!p)
            continue;
          let E = I(p, "input", () => {
            p.checked && this.resetFilters(m);
          });
          i.push(E);
        }
        let l;
        return n && (l = I(window, "resize", (0, St.default)(() => {
          this.submitButtonVisible = X(n);
        }, 50))), () => {
          o(), s(), l == null || l();
          for (let a of i)
            a();
        };
      }
      async handleInputEvents({ target: e }) {
        let { submitButtonVisible: r, filtersData: n, restartingFilters: o } = this;
        if (!G(e))
          return;
        let s, i = n.find(({ elements: m }) => (s = m.find((c) => c.element === e), s));
        if (!i || !s || !M(e, i, s) || o || r)
          return;
        let { debouncing: a } = s;
        this.debouncedApplyFilters || (this.debouncedApplyFilters = (0, St.default)(this.applyFilters, a)), await this.debouncedApplyFilters();
      }
      async handleSubmit(e) {
        this.allowSubmit || (e.preventDefault(), e.stopImmediatePropagation()), await this.applyFilters();
      }
      async toggleFiltersState(e) {
        let { listInstance: r, filtersActive: n } = this, o = !e;
        n !== o && (this.filtersActive = o, r.initialElement && (await r.displayElement(o ? "initialElement" : "wrapper", false, false), await r.displayElement(o ? "wrapper" : "initialElement", true, n !== void 0)));
      }
      async applyFilters(e, r = true) {
        this.debouncedApplyFilters = void 0;
        let { listInstance: n, filtersData: o, filtersActive: s, highlightResults: i, tagsInstance: l, showQueryParams: a } = this, { items: m, initialElement: c } = n, u = o.every(({ values: p }) => !p.size);
        if (u && !s) {
          await this.toggleFiltersState(u);
          return;
        }
        for (let p of m)
          p.valid = oe(p, o, u, i);
        e || (await n.switchPage(1, false), n.scrollToAnchor(), a && ie(o), await Promise.all([(async () => {
          u ? (await this.toggleFiltersState(u), await n.renderItems(false, !c)) : (await n.renderItems(false, !c), await this.toggleFiltersState(u));
        })(), (async () => {
          r && await (l == null ? void 0 : l.syncTags());
        })()]));
      }
      async resetFilters(e, r) {
        this.restartingFilters = true;
        let { filtersData: n } = this;
        if (!e || !e.length)
          for (let s of n)
            Et(s);
        else {
          let s = n.find((i) => q(i.filterKeys, e));
          if (!s)
            return;
          Et(s, r);
        }
        let o = !r;
        await this.applyFilters(false, o), this.restartingFilters = false;
      }
      async addTagsInstance(e) {
        this.tagsInstance = e, await e.syncTags();
      }
      storeFiltersData() {
        let { form: e, activeCSSClass: r, debouncing: n, highlightAll: o, highlightCSSClass: s } = this, i = ee(e, r, n, o, s);
        return this.filtersData = i, this.showFilterResults = i.some(({ elements: l }) => l.some(({ resultsElement: a }) => a)), this.hideEmptyFilters = i.some(({ elements: l }) => l.some(({ hideEmpty: a }) => a)), this.highlightResults = i.some(({ highlight: l }) => l), i;
      }
    };
    var yt = ({ values: t, textNode: e, filterData: { originalFilterKeys: r, mode: n, tagFormat: o, tagCategory: s } }, i) => {
      let l = s || r.join(", "), a;
      n === "range" ? a = `[${t.map((c) => c || "--").join(", ")}]` : [a] = t;
      let m;
      a === "true" ? m = l : (o || i) === "category" ? m = `${l}: ${a}` : m = a, e.textContent = m;
    }, le = (t) => !!h("tagRemove", { operator: "prefixed", scope: t });
    var it = class {
      constructor(e, r, n, o) {
        this.template = e;
        this.filtersInstance = r;
        this.listInstance = n;
        this.globalTagsFormat = o;
        this.tagsData = [];
        this.hasRemoveTrigger = false;
        this.wrapper = e.parentElement || w.alert("The tags have no parent wrapper.", "error"), this.destroy = this.init();
      }
      init() {
        let { template: e, wrapper: r } = this;
        e.remove(), this.hasRemoveTrigger = le(e);
        let n = I(r, "click", (o) => this.handleClick(o));
        return () => n();
      }
      handleClick(e) {
        let { target: r } = e;
        if (!wt(r))
          return;
        let { hasRemoveTrigger: n, tagsData: o, listInstance: s } = this, i = r.closest(U("element", "tagTemplate", { instanceIndex: s.getInstanceIndex(F.element.key) }));
        if (!i)
          return;
        let l = r.closest(U("element", "tagRemove", { operator: "prefixed" }));
        if (n && !l)
          return;
        let a = o.find(({ element: m }) => m === i);
        a && this.removeTag(a, true);
      }
      async addTag(e, r) {
        let { wrapper: n, template: o, tagsData: s, globalTagsFormat: i, listInstance: { listAnimation: l } } = this, a = ut(o), m = h("tagText", { operator: "prefixed", scope: a }) || a, c = { element: a, values: r, textNode: m, filterData: e };
        if (yt(c, i), s.push(c), l) {
          let { animateIn: u, options: p } = l;
          await u(a, { target: n, ...p });
        } else
          a.style.opacity = "1", n.appendChild(a);
      }
      async updateTag(e, r) {
        let { globalTagsFormat: n } = this;
        e.values = r, yt(e, n);
      }
      async removeTag(e, r) {
        let { element: n, values: o, filterData: { filterKeys: s } } = e, { tagsData: i, filtersInstance: l, listInstance: { listAnimation: a } } = this;
        this.tagsData = i.filter((m) => m !== e), await Promise.all([Promise.all(o.map(async (m) => {
          if (r)
            return l.resetFilters(s, m);
        })), (async () => {
          if (a) {
            let { animateOut: m, options: c } = a;
            await m(n, { remove: true, ...c });
          } else
            n.remove();
        })()]);
      }
      async syncTags() {
        let { tagsData: e, filtersInstance: { filtersData: r } } = this;
        await Promise.all(r.map((n) => {
          let { values: o, mode: s } = n, i = [...o], l = e.filter((c) => c.filterData === n);
          if (l.length === 1 && (i.length === 1 || s === "range" && i.length)) {
            let [c] = l;
            this.updateTag(c, i);
            return;
          }
          let a = [...i].filter((c) => !l.some(({ values: u }) => u.includes(c))), m = l.filter(({ values: c }) => c.every((u) => !i.includes(u)));
          return Promise.all([(async () => s === "range" && a.length ? this.addTag(n, a) : Promise.all(a.map((c) => this.addTag(n, [c]))))(), Promise.all(m.map((c) => this.removeTag(c)))]);
        }));
      }
    };
    var { element: { key: ae }, duration: { key: Pr }, easing: { key: $r }, showQuery: { key: Hr, values: Vr }, allowSubmit: { key: Gr, values: Yr }, tagFormat: { key: qr }, highlight: { key: jr, values: Wr }, highlightCSS: { key: zr }, activeCSS: { key: Qr }, debouncing: { key: Xr } } = F, ce = (t, e) => {
      let r = t.getInstanceIndex(ae), n = h("filters", { instanceIndex: r });
      if (!n)
        return;
      let o = n.closest(`.${D.formBlock}`);
      if (!o)
        return;
      let s = h("empty", { instanceIndex: r });
      s && t.addEmptyElement(s);
      let i = h("initial", { instanceIndex: r });
      if (i && (t.initialElement = i), !t.scrollAnchor) {
        let T = h("scrollAnchor", { instanceIndex: r });
        T && (t.scrollAnchor = T);
      }
      if (!t.itemsCount) {
        let T = h("itemsCount", { instanceIndex: r });
        T && t.addItemsCount(T);
      }
      let l = h("resultsCount", { instanceIndex: r }), a = t.getAttribute(Hr) === Vr.true, m = t.getAttribute(Gr) === Yr.true, c = t.getAttribute(jr) === Wr.true, u = t.getAttribute(zr) || $t, p = t.getAttribute(Qr) || Ht, E = parseFloat(t.getAttribute(Xr) || Vt), f = new st(o, t, { resultsElement: l, showQueryParams: a, allowSubmit: m, highlightAll: c, highlightCSSClass: u, activeCSSClass: p, debouncing: E });
      return e.addListAnimation(t, { durationKey: Pr, easingKey: $r }), f;
    }, me = async (t, e) => {
      let r = t.getInstanceIndex(ae), n = h("tagTemplate", { instanceIndex: r });
      if (!n)
        return;
      let o = t.getAttribute(qr), s = L(o, tt) ? o : void 0, i = new it(n, e, t, s);
      return await e.addTagsInstance(i), i;
    };
    var ue = async () => {
      let t = await Rt();
      if (!t)
        return [];
      await Ft(Ct, _t);
      let e = t.createCMSListInstances([U("element", "list", { operator: "prefixed" })]), r = (await Promise.all(e.map((o) => Jr(o, t)))).filter(ct), n = r.map(({ filtersInstance: o }) => o);
      return vt(O, n, () => {
        var o;
        for (let s of e)
          (o = s.destroy) == null || o.call(s);
        for (let { cleanup: s } of r)
          s();
      });
    }, Jr = async (t, e) => {
      let r = ce(t, e);
      if (!r)
        return;
      zt(r, t);
      let n = await me(t, r);
      return { filtersInstance: r, cleanup: () => {
        r.destroy(), n == null || n.destroy();
      } };
    };
    Ut({ init: ue, version: Bt, attributeKey: O });
    J();
  })();

  // menus.js
  $("[spice-level='Medium']").each(function() {
    $(this).addClass("is-medium");
  });
  $("[spice-level='Spicy']").each(function() {
    $(this).addClass("is-spicy");
  });
  $("#open-filters").on("click", function() {
    if ($(this).attr("aria-expanded") === "false") {
      $(this).attr("aria-expanded", "true");
      $("#filters").attr("aria-hidden", "false");
    }
  });
  $("#apply-filters").on("click", function() {
    if ($("#open-filters").attr("aria-expanded") === "true") {
      $("#open-filters").attr("aria-expanded", "fasle");
      $("#filters").attr("aria-hidden", "true");
    }
  });
  $("[data-filter-button]").on("click", function() {
    let button = $(this).attr("data-filter-button");
    let filter = '[data-filter-checkbox="' + button + '"]';
    if (button === "Vegetarian") {
      let vegan = $('[data-filter-checkbox="Vegan"]').is(":checked");
      if (vegan) {
        $('[data-filter-checkbox="Vegan"]').trigger("click");
      }
    }
    ;
    if (button === "Vegan") {
      let vegetarian = $('[data-filter-checkbox="Vegetarian"]').is(":checked");
      if (vegetarian) {
        $('[data-filter-checkbox="Vegetarian"]').trigger("click");
      }
    }
    ;
    $(filter).trigger("click");
  });
  $("[data-filter-checkbox]").on("change", function() {
    let checked = $(this).is(":checked");
    let checkbox = $(this).attr("data-filter-checkbox");
    let button = '[data-filter-button="' + checkbox + '"]';
    let filterCount = $("[data-filter-checkbox]:checked").length;
    if (filterCount > 0) {
      $("[data-filter-count]").css("display", "block");
      $("[data-filter-count]").text(filterCount);
    } else {
      $("[data-filter-count]").css("display", "none");
      $("[data-filter-count]").text(filterCount);
    }
    ;
    if (checked) {
      $(button).addClass("filter__btn--active");
    } else if (!checked) {
      $(button).removeClass("filter__btn--active");
    }
    ;
  });
  $('[fs-cmsfilter-element="clear"]').on("click", function() {
    $("[data-filter-button]").removeClass("filter__btn--active");
  });
})();
