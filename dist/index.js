var Yd = Object.defineProperty;
var zd = (s, t, e) => t in s ? Yd(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var ts = (s, t, e) => zd(s, typeof t != "symbol" ? t + "" : t, e);
import Oo from "mermaid";
function ue() {
}
function pc(s) {
  return s();
}
function ra() {
  return /* @__PURE__ */ Object.create(null);
}
function pi(s) {
  s.forEach(pc);
}
function jn(s) {
  return typeof s == "function";
}
function cr(s, t) {
  return s != s ? t == t : s !== t || s && typeof s == "object" || typeof s == "function";
}
function Gd(s) {
  return Object.keys(s).length === 0;
}
function W(s, t) {
  s.appendChild(t);
}
function Vi(s, t, e) {
  s.insertBefore(t, e || null);
}
function mi(s) {
  s.parentNode && s.parentNode.removeChild(s);
}
function X(s) {
  return document.createElement(s);
}
function Pn(s) {
  return document.createTextNode(s);
}
function _t() {
  return Pn(" ");
}
function kt(s, t, e, i) {
  return s.addEventListener(t, e, i), () => s.removeEventListener(t, e, i);
}
function K(s, t, e) {
  e == null ? s.removeAttribute(t) : s.getAttribute(t) !== e && s.setAttribute(t, e);
}
function Qd(s) {
  return Array.from(s.childNodes);
}
function mc(s, t) {
  t = "" + t, s.data !== t && (s.data = /** @type {string} */
  t);
}
function Rr(s, t) {
  s.value = t ?? "";
}
function Ti(s, t, e, i) {
  e == null ? s.style.removeProperty(t) : s.style.setProperty(t, e, "");
}
function oa(s, t, e) {
  for (let i = 0; i < s.options.length; i += 1) {
    const n = s.options[i];
    if (n.__value === t) {
      n.selected = !0;
      return;
    }
  }
  s.selectedIndex = -1;
}
function Pe(s, t, e) {
  s.classList.toggle(t, !!e);
}
function Bd(s, t, { bubbles: e = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(s, { detail: t, bubbles: e, cancelable: i });
}
let ys;
function us(s) {
  ys = s;
}
function gc() {
  if (!ys) throw new Error("Function called outside component initialization");
  return ys;
}
function $c(s) {
  gc().$$.on_mount.push(s);
}
function wc() {
  const s = gc();
  return (t, e, { cancelable: i = !1 } = {}) => {
    const n = s.$$.callbacks[t];
    if (n) {
      const r = Bd(
        /** @type {string} */
        t,
        e,
        { cancelable: i }
      );
      return n.slice().forEach((o) => {
        o.call(s, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
const vi = [], Nn = [];
let Ni = [];
const xo = [], Wd = /* @__PURE__ */ Promise.resolve();
let ko = !1;
function Md() {
  ko || (ko = !0, Wd.then(yc));
}
function So(s) {
  Ni.push(s);
}
function Ad(s) {
  xo.push(s);
}
const Tr = /* @__PURE__ */ new Set();
let yi = 0;
function yc() {
  if (yi !== 0)
    return;
  const s = ys;
  do {
    try {
      for (; yi < vi.length; ) {
        const t = vi[yi];
        yi++, us(t), Ld(t.$$);
      }
    } catch (t) {
      throw vi.length = 0, yi = 0, t;
    }
    for (us(null), vi.length = 0, yi = 0; Nn.length; ) Nn.pop()();
    for (let t = 0; t < Ni.length; t += 1) {
      const e = Ni[t];
      Tr.has(e) || (Tr.add(e), e());
    }
    Ni.length = 0;
  } while (vi.length);
  for (; xo.length; )
    xo.pop()();
  ko = !1, Tr.clear(), us(s);
}
function Ld(s) {
  if (s.fragment !== null) {
    s.update(), pi(s.before_update);
    const t = s.dirty;
    s.dirty = [-1], s.fragment && s.fragment.p(s.ctx, t), s.after_update.forEach(So);
  }
}
function Zd(s) {
  const t = [], e = [];
  Ni.forEach((i) => s.indexOf(i) === -1 ? t.push(i) : e.push(i)), e.forEach((i) => i()), Ni = t;
}
const $n = /* @__PURE__ */ new Set();
let _d;
function wn(s, t) {
  s && s.i && ($n.delete(s), s.i(t));
}
function Hr(s, t, e, i) {
  if (s && s.o) {
    if ($n.has(s)) return;
    $n.add(s), _d.c.push(() => {
      $n.delete(s);
    }), s.o(t);
  }
}
function qd(s, t, e) {
  const i = s.$$.props[t];
  i !== void 0 && (s.$$.bound[i] = e, e(s.$$.ctx[i]));
}
function Er(s) {
  s && s.c();
}
function yn(s, t, e) {
  const { fragment: i, after_update: n } = s.$$;
  i && i.m(t, e), So(() => {
    const r = s.$$.on_mount.map(pc).filter(jn);
    s.$$.on_destroy ? s.$$.on_destroy.push(...r) : pi(r), s.$$.on_mount = [];
  }), n.forEach(So);
}
function bn(s, t) {
  const e = s.$$;
  e.fragment !== null && (Zd(e.after_update), pi(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function Fd(s, t) {
  s.$$.dirty[0] === -1 && (vi.push(s), Md(), s.$$.dirty.fill(0)), s.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function fr(s, t, e, i, n, r, o = null, l = [-1]) {
  const a = ys;
  us(s);
  const h = s.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: ue,
    not_equal: n,
    bound: ra(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: ra(),
    dirty: l,
    skip_bound: !1,
    root: t.target || a.$$.root
  };
  o && o(h.root);
  let c = !1;
  if (h.ctx = e ? e(s, t.props || {}, (f, u, ...d) => {
    const p = d.length ? d[0] : u;
    return h.ctx && n(h.ctx[f], h.ctx[f] = p) && (!h.skip_bound && h.bound[f] && h.bound[f](p), c && Fd(s, f)), u;
  }) : [], h.update(), c = !0, pi(h.before_update), h.fragment = i ? i(h.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = Qd(t.target);
      h.fragment && h.fragment.l(f), f.forEach(mi);
    } else
      h.fragment && h.fragment.c();
    t.intro && wn(s.$$.fragment), yn(s, t.target, t.anchor), yc();
  }
  us(a);
}
class ur {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ts(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ts(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    bn(this, 1), this.$destroy = ue;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, e) {
    if (!jn(e))
      return ue;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(e), () => {
      const n = i.indexOf(e);
      n !== -1 && i.splice(n, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Gd(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Id = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Id);
let vo = [], bc = [];
(() => {
  let s = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t) => t ? parseInt(t, 36) : 1);
  for (let t = 0, e = 0; t < s.length; t++)
    (t % 2 ? bc : vo).push(e = e + s[t]);
})();
function Ud(s) {
  if (s < 768) return !1;
  for (let t = 0, e = vo.length; ; ) {
    let i = t + e >> 1;
    if (s < vo[i]) e = i;
    else if (s >= bc[i]) t = i + 1;
    else return !0;
    if (t == e) return !1;
  }
}
function la(s) {
  return s >= 127462 && s <= 127487;
}
const aa = 8205;
function Vd(s, t, e = !0, i = !0) {
  return (e ? Oc : Xd)(s, t, i);
}
function Oc(s, t, e) {
  if (t == s.length) return t;
  t && xc(s.charCodeAt(t)) && kc(s.charCodeAt(t - 1)) && t--;
  let i = jr(s, t);
  for (t += ha(i); t < s.length; ) {
    let n = jr(s, t);
    if (i == aa || n == aa || e && Ud(n))
      t += ha(n), i = n;
    else if (la(n)) {
      let r = 0, o = t - 2;
      for (; o >= 0 && la(jr(s, o)); )
        r++, o -= 2;
      if (r % 2 == 0) break;
      t += 2;
    } else
      break;
  }
  return t;
}
function Xd(s, t, e) {
  for (; t > 0; ) {
    let i = Oc(s, t - 2, e);
    if (i < t) return i;
    t--;
  }
  return 0;
}
function jr(s, t) {
  let e = s.charCodeAt(t);
  if (!kc(e) || t + 1 == s.length) return e;
  let i = s.charCodeAt(t + 1);
  return xc(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e;
}
function xc(s) {
  return s >= 56320 && s < 57344;
}
function kc(s) {
  return s >= 55296 && s < 56320;
}
function ha(s) {
  return s < 65536 ? 1 : 2;
}
class A {
  /**
  Get the line description around the given position.
  */
  lineAt(t) {
    if (t < 0 || t > this.length)
      throw new RangeError(`Invalid position ${t} in document of length ${this.length}`);
    return this.lineInner(t, !1, 1, 0);
  }
  /**
  Get the description for the given (1-based) line number.
  */
  line(t) {
    if (t < 1 || t > this.lines)
      throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`);
    return this.lineInner(t, !0, 1, 0);
  }
  /**
  Replace a range of the text with the given content.
  */
  replace(t, e, i) {
    [t, e] = Li(this, t, e);
    let n = [];
    return this.decompose(
      0,
      t,
      n,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      n,
      3
      /* Open.To */
    ), this.decompose(
      e,
      this.length,
      n,
      1
      /* Open.From */
    ), oe.from(n, this.length - (e - t) + i.length);
  }
  /**
  Append another document to this one.
  */
  append(t) {
    return this.replace(this.length, this.length, t);
  }
  /**
  Retrieve the text between the given points.
  */
  slice(t, e = this.length) {
    [t, e] = Li(this, t, e);
    let i = [];
    return this.decompose(t, e, i, 0), oe.from(i, e - t);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(t) {
    if (t == this)
      return !0;
    if (t.length != this.length || t.lines != this.lines)
      return !1;
    let e = this.scanIdentical(t, 1), i = this.length - this.scanIdentical(t, -1), n = new ds(this), r = new ds(t);
    for (let o = e, l = e; ; ) {
      if (n.next(o), r.next(o), o = 0, n.lineBreak != r.lineBreak || n.done != r.done || n.value != r.value)
        return !1;
      if (l += n.value.length, n.done || l >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(t = 1) {
    return new ds(this, t);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(t, e = this.length) {
    return new Sc(this, t, e);
  }
  /**
  Return a cursor that iterates over the given range of lines,
  _without_ returning the line breaks between, and yielding empty
  strings for empty lines.
  
  When `from` and `to` are given, they should be 1-based line numbers.
  */
  iterLines(t, e) {
    let i;
    if (t == null)
      i = this.iter();
    else {
      e == null && (e = this.lines + 1);
      let n = this.line(t).from;
      i = this.iterRange(n, Math.max(n, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to));
    }
    return new vc(i);
  }
  /**
  Return the document as a string, using newline characters to
  separate lines.
  */
  toString() {
    return this.sliceString(0);
  }
  /**
  Convert the document to an array of lines (which can be
  deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
  */
  toJSON() {
    let t = [];
    return this.flatten(t), t;
  }
  /**
  @internal
  */
  constructor() {
  }
  /**
  Create a `Text` instance for the given array of lines.
  */
  static of(t) {
    if (t.length == 0)
      throw new RangeError("A document must have at least one line");
    return t.length == 1 && !t[0] ? A.empty : t.length <= 32 ? new it(t) : oe.from(it.split(t, []));
  }
}
class it extends A {
  constructor(t, e = Kd(t)) {
    super(), this.text = t, this.length = e;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(t, e, i, n) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = n + o.length;
      if ((e ? i : l) >= t)
        return new Jd(n, l, i, o);
      n = l + 1, i++;
    }
  }
  decompose(t, e, i, n) {
    let r = t <= 0 && e >= this.length ? this : new it(ca(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
    if (n & 1) {
      let o = i.pop(), l = On(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        i.push(new it(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new it(l.slice(0, a)), new it(l.slice(a)));
      }
    } else
      i.push(r);
  }
  replace(t, e, i) {
    if (!(i instanceof it))
      return super.replace(t, e, i);
    [t, e] = Li(this, t, e);
    let n = On(this.text, On(i.text, ca(this.text, 0, t)), e), r = this.length + i.length - (e - t);
    return n.length <= 32 ? new it(n, r) : oe.from(it.split(n, []), r);
  }
  sliceString(t, e = this.length, i = `
`) {
    [t, e] = Li(this, t, e);
    let n = "";
    for (let r = 0, o = 0; r <= e && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > t && o && (n += i), t < a && e > r && (n += l.slice(Math.max(0, t - r), e - r)), r = a + 1;
    }
    return n;
  }
  flatten(t) {
    for (let e of this.text)
      t.push(e);
  }
  scanIdentical() {
    return 0;
  }
  static split(t, e) {
    let i = [], n = -1;
    for (let r of t)
      i.push(r), n += r.length + 1, i.length == 32 && (e.push(new it(i, n)), i = [], n = -1);
    return n > -1 && e.push(new it(i, n)), e;
  }
}
class oe extends A {
  constructor(t, e) {
    super(), this.children = t, this.length = e, this.lines = 0;
    for (let i of t)
      this.lines += i.lines;
  }
  lineInner(t, e, i, n) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = n + o.length, a = i + o.lines - 1;
      if ((e ? a : l) >= t)
        return o.lineInner(t, e, i, n);
      n = l + 1, i = a + 1;
    }
  }
  decompose(t, e, i, n) {
    for (let r = 0, o = 0; o <= e && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (t <= a && e >= o) {
        let h = n & ((o <= t ? 1 : 0) | (a >= e ? 2 : 0));
        o >= t && a <= e && !h ? i.push(l) : l.decompose(t - o, e - o, i, h);
      }
      o = a + 1;
    }
  }
  replace(t, e, i) {
    if ([t, e] = Li(this, t, e), i.lines < this.lines)
      for (let n = 0, r = 0; n < this.children.length; n++) {
        let o = this.children[n], l = r + o.length;
        if (t >= r && e <= l) {
          let a = o.replace(t - r, e - r, i), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            return c[n] = a, new oe(c, this.length - (e - t) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(t, e, i);
  }
  sliceString(t, e = this.length, i = `
`) {
    [t, e] = Li(this, t, e);
    let n = "";
    for (let r = 0, o = 0; r < this.children.length && o <= e; r++) {
      let l = this.children[r], a = o + l.length;
      o > t && r && (n += i), t < a && e > o && (n += l.sliceString(t - o, e - o, i)), o = a + 1;
    }
    return n;
  }
  flatten(t) {
    for (let e of this.children)
      e.flatten(t);
  }
  scanIdentical(t, e) {
    if (!(t instanceof oe))
      return 0;
    let i = 0, [n, r, o, l] = e > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
    for (; ; n += e, r += e) {
      if (n == o || r == l)
        return i;
      let a = this.children[n], h = t.children[r];
      if (a != h)
        return i + a.scanIdentical(h, e);
      i += a.length + 1;
    }
  }
  static from(t, e = t.reduce((i, n) => i + n.length + 1, -1)) {
    let i = 0;
    for (let d of t)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of t)
        p.flatten(d);
      return new it(d, e);
    }
    let n = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), r = n << 1, o = n >> 1, l = [], a = 0, h = -1, c = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof oe)
        for (let m of d.children)
          f(m);
      else d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof it && a && (p = c[c.length - 1]) instanceof it && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new it(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > n && u(), a += d.lines, h += d.length + 1, c.push(d));
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : oe.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let d of t)
      f(d);
    return u(), l.length == 1 ? l[0] : new oe(l, e);
  }
}
A.empty = /* @__PURE__ */ new it([""], 0);
function Kd(s) {
  let t = -1;
  for (let e of s)
    t += e.length + 1;
  return t;
}
function On(s, t, e = 0, i = 1e9) {
  for (let n = 0, r = 0, o = !0; r < s.length && n <= i; r++) {
    let l = s[r], a = n + l.length;
    a >= e && (a > i && (l = l.slice(0, i - n)), n < e && (l = l.slice(e - n)), o ? (t[t.length - 1] += l, o = !1) : t.push(l)), n = a + 1;
  }
  return t;
}
function ca(s, t, e) {
  return On(s, [""], t, e);
}
class ds {
  constructor(t, e = 1) {
    this.dir = e, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [t], this.offsets = [e > 0 ? 1 : (t instanceof it ? t.text.length : t.children.length) << 1];
  }
  nextInner(t, e) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, n = this.nodes[i], r = this.offsets[i], o = r >> 1, l = n instanceof it ? n.text.length : n.children.length;
      if (o == (e > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        e > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (e > 0 ? 0 : 1)) {
        if (this.offsets[i] += e, t == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        t--;
      } else if (n instanceof it) {
        let a = n.text[o + (e < 0 ? -1 : 0)];
        if (this.offsets[i] += e, a.length > Math.max(0, t))
          return this.value = t == 0 ? a : e > 0 ? a.slice(t) : a.slice(0, a.length - t), this;
        t -= a.length;
      } else {
        let a = n.children[o + (e < 0 ? -1 : 0)];
        t > a.length ? (t -= a.length, this.offsets[i] += e) : (e < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(e > 0 ? 1 : (a instanceof it ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(t = 0) {
    return t < 0 && (this.nextInner(-t, -this.dir), t = this.value.length), this.nextInner(t, this.dir);
  }
}
class Sc {
  constructor(t, e, i) {
    this.value = "", this.done = !1, this.cursor = new ds(t, e > i ? -1 : 1), this.pos = e > i ? t.length : 0, this.from = Math.min(e, i), this.to = Math.max(e, i);
  }
  nextInner(t, e) {
    if (e < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
    let i = e < 0 ? this.pos - this.from : this.to - this.pos;
    t > i && (t = i), i -= t;
    let { value: n } = this.cursor.next(t);
    return this.pos += (n.length + t) * e, this.value = n.length <= i ? n : e < 0 ? n.slice(n.length - i) : n.slice(0, i), this.done = !this.value, this;
  }
  next(t = 0) {
    return t < 0 ? t = Math.max(t, this.from - this.pos) : t > 0 && (t = Math.min(t, this.to - this.pos)), this.nextInner(t, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class vc {
  constructor(t) {
    this.inner = t, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(t = 0) {
    let { done: e, lineBreak: i, value: n } = this.inner.next(t);
    return e && this.afterBreak ? (this.value = "", this.afterBreak = !1) : e ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = n, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (A.prototype[Symbol.iterator] = function() {
  return this.iter();
}, ds.prototype[Symbol.iterator] = Sc.prototype[Symbol.iterator] = vc.prototype[Symbol.iterator] = function() {
  return this;
});
class Jd {
  /**
  @internal
  */
  constructor(t, e, i, n) {
    this.from = t, this.to = e, this.number = i, this.text = n;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function Li(s, t, e) {
  return t = Math.max(0, Math.min(s.length, t)), [t, Math.max(t, Math.min(s.length, e))];
}
function at(s, t, e = !0, i = !0) {
  return Vd(s, t, e, i);
}
function tp(s) {
  return s >= 56320 && s < 57344;
}
function ep(s) {
  return s >= 55296 && s < 56320;
}
function St(s, t) {
  let e = s.charCodeAt(t);
  if (!ep(e) || t + 1 == s.length)
    return e;
  let i = s.charCodeAt(t + 1);
  return tp(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e;
}
function wl(s) {
  return s <= 65535 ? String.fromCharCode(s) : (s -= 65536, String.fromCharCode((s >> 10) + 55296, (s & 1023) + 56320));
}
function le(s) {
  return s < 65536 ? 1 : 2;
}
const Co = /\r\n?|\n/;
var bt = /* @__PURE__ */ function(s) {
  return s[s.Simple = 0] = "Simple", s[s.TrackDel = 1] = "TrackDel", s[s.TrackBefore = 2] = "TrackBefore", s[s.TrackAfter = 3] = "TrackAfter", s;
}(bt || (bt = {}));
class de {
  // Sections are encoded as pairs of integers. The first is the
  // length in the current document, and the second is -1 for
  // unaffected sections, and the length of the replacement content
  // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
  // 0), and a replacement two positive numbers.
  /**
  @internal
  */
  constructor(t) {
    this.sections = t;
  }
  /**
  The length of the document before the change.
  */
  get length() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2)
      t += this.sections[e];
    return t;
  }
  /**
  The length of the document after the change.
  */
  get newLength() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2) {
      let i = this.sections[e + 1];
      t += i < 0 ? this.sections[e] : i;
    }
    return t;
  }
  /**
  False when there are actual changes in this set.
  */
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  /**
  Iterate over the unchanged parts left by these changes. `posA`
  provides the position of the range in the old document, `posB`
  the new position in the changed document.
  */
  iterGaps(t) {
    for (let e = 0, i = 0, n = 0; e < this.sections.length; ) {
      let r = this.sections[e++], o = this.sections[e++];
      o < 0 ? (t(i, n, r), n += r) : n += o, i += r;
    }
  }
  /**
  Iterate over the ranges changed by these changes. (See
  [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
  variant that also provides you with the inserted text.)
  `fromA`/`toA` provides the extent of the change in the starting
  document, `fromB`/`toB` the extent of the replacement in the
  changed document.
  
  When `individual` is true, adjacent changes (which are kept
  separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
  reported separately.
  */
  iterChangedRanges(t, e = !1) {
    Do(this, t, e);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let t = [];
    for (let e = 0; e < this.sections.length; ) {
      let i = this.sections[e++], n = this.sections[e++];
      n < 0 ? t.push(i, n) : t.push(n, i);
    }
    return new de(t);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(t) {
    return this.empty ? t : t.empty ? this : Cc(this, t);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(t, e = !1) {
    return t.empty ? this : Ro(this, t, e);
  }
  mapPos(t, e = -1, i = bt.Simple) {
    let n = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = n + l;
      if (a < 0) {
        if (h > t)
          return r + (t - n);
        r += l;
      } else {
        if (i != bt.Simple && h >= t && (i == bt.TrackDel && n < t && h > t || i == bt.TrackBefore && n < t || i == bt.TrackAfter && h > t))
          return null;
        if (h > t || h == t && e < 0 && !l)
          return t == n || e < 0 ? r : r + a;
        r += a;
      }
      n = h;
    }
    if (t > n)
      throw new RangeError(`Position ${t} is out of range for changeset of length ${n}`);
    return r;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(t, e = t) {
    for (let i = 0, n = 0; i < this.sections.length && n <= e; ) {
      let r = this.sections[i++], o = this.sections[i++], l = n + r;
      if (o >= 0 && n <= e && l >= t)
        return n < t && l > e ? "cover" : !0;
      n = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let t = "";
    for (let e = 0; e < this.sections.length; ) {
      let i = this.sections[e++], n = this.sections[e++];
      t += (t ? " " : "") + i + (n >= 0 ? ":" + n : "");
    }
    return t;
  }
  /**
  Serialize this change desc to a JSON-representable value.
  */
  toJSON() {
    return this.sections;
  }
  /**
  Create a change desc from its JSON representation (as produced
  by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
  */
  static fromJSON(t) {
    if (!Array.isArray(t) || t.length % 2 || t.some((e) => typeof e != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new de(t);
  }
  /**
  @internal
  */
  static create(t) {
    return new de(t);
  }
}
class rt extends de {
  constructor(t, e) {
    super(t), this.inserted = e;
  }
  /**
  Apply the changes to a document, returning the modified
  document.
  */
  apply(t) {
    if (this.length != t.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Do(this, (e, i, n, r, o) => t = t.replace(n, n + (i - e), o), !1), t;
  }
  mapDesc(t, e = !1) {
    return Ro(this, t, e, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(t) {
    let e = this.sections.slice(), i = [];
    for (let n = 0, r = 0; n < e.length; n += 2) {
      let o = e[n], l = e[n + 1];
      if (l >= 0) {
        e[n] = l, e[n + 1] = o;
        let a = n >> 1;
        for (; i.length < a; )
          i.push(A.empty);
        i.push(o ? t.slice(r, r + o) : A.empty);
      }
      r += o;
    }
    return new rt(e, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(t) {
    return this.empty ? t : t.empty ? this : Cc(this, t, !0);
  }
  /**
  Given another change set starting in the same document, maps this
  change set over the other, producing a new change set that can be
  applied to the document produced by applying `other`. When
  `before` is `true`, order changes as if `this` comes before
  `other`, otherwise (the default) treat `other` as coming first.
  
  Given two changes `A` and `B`, `A.compose(B.map(A))` and
  `B.compose(A.map(B, true))` will produce the same document. This
  provides a basic form of [operational
  transformation](https://en.wikipedia.org/wiki/Operational_transformation),
  and can be used for collaborative editing.
  */
  map(t, e = !1) {
    return t.empty ? this : Ro(this, t, e, !0);
  }
  /**
  Iterate over the changed ranges in the document, calling `f` for
  each, with the range in the original document (`fromA`-`toA`)
  and the range that replaces it in the new document
  (`fromB`-`toB`).
  
  When `individual` is true, adjacent changes are reported
  separately.
  */
  iterChanges(t, e = !1) {
    Do(this, t, e);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return de.create(this.sections);
  }
  /**
  @internal
  */
  filter(t) {
    let e = [], i = [], n = [], r = new bs(this);
    t: for (let o = 0, l = 0; ; ) {
      let a = o == t.length ? 1e9 : t[o++];
      for (; l < a || l == a && r.len == 0; ) {
        if (r.done)
          break t;
        let c = Math.min(r.len, a - l);
        dt(n, c, -1);
        let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        dt(e, c, f), f > 0 && Ge(i, e, r.text), r.forward(c), l += c;
      }
      let h = t[o++];
      for (; l < h; ) {
        if (r.done)
          break t;
        let c = Math.min(r.len, h - l);
        dt(e, c, -1), dt(n, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), l += c;
      }
    }
    return {
      changes: new rt(e, i),
      filtered: de.create(n)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let t = [];
    for (let e = 0; e < this.sections.length; e += 2) {
      let i = this.sections[e], n = this.sections[e + 1];
      n < 0 ? t.push(i) : n == 0 ? t.push([i]) : t.push([i].concat(this.inserted[e >> 1].toJSON()));
    }
    return t;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(t, e, i) {
    let n = [], r = [], o = 0, l = null;
    function a(c = !1) {
      if (!c && !n.length)
        return;
      o < e && dt(n, e - o, -1);
      let f = new rt(n, r);
      l = l ? l.compose(f.map(l)) : f, n = [], r = [], o = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let f of c)
          h(f);
      else if (c instanceof rt) {
        if (c.length != e)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${e})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > e)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${e})`);
        let p = d ? typeof d == "string" ? A.of(d.split(i || Co)) : d : A.empty, m = p.length;
        if (f == u && m == 0)
          return;
        f < o && a(), f > o && dt(n, f - o, -1), dt(n, u - f, m), Ge(r, n, p), o = u;
      }
    }
    return h(t), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(t) {
    return new rt(t ? [t, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(t) {
    if (!Array.isArray(t))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let e = [], i = [];
    for (let n = 0; n < t.length; n++) {
      let r = t[n];
      if (typeof r == "number")
        e.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          e.push(r[0], 0);
        else {
          for (; i.length < n; )
            i.push(A.empty);
          i[n] = A.of(r.slice(1)), e.push(r[0], i[n].length);
        }
      }
    }
    return new rt(e, i);
  }
  /**
  @internal
  */
  static createSet(t, e) {
    return new rt(t, e);
  }
}
function dt(s, t, e, i = !1) {
  if (t == 0 && e <= 0)
    return;
  let n = s.length - 2;
  n >= 0 && e <= 0 && e == s[n + 1] ? s[n] += t : n >= 0 && t == 0 && s[n] == 0 ? s[n + 1] += e : i ? (s[n] += t, s[n + 1] += e) : s.push(t, e);
}
function Ge(s, t, e) {
  if (e.length == 0)
    return;
  let i = t.length - 2 >> 1;
  if (i < s.length)
    s[s.length - 1] = s[s.length - 1].append(e);
  else {
    for (; s.length < i; )
      s.push(A.empty);
    s.push(e);
  }
}
function Do(s, t, e) {
  let i = s.inserted;
  for (let n = 0, r = 0, o = 0; o < s.sections.length; ) {
    let l = s.sections[o++], a = s.sections[o++];
    if (a < 0)
      n += l, r += l;
    else {
      let h = n, c = r, f = A.empty;
      for (; h += l, c += a, a && i && (f = f.append(i[o - 2 >> 1])), !(e || o == s.sections.length || s.sections[o + 1] < 0); )
        l = s.sections[o++], a = s.sections[o++];
      t(n, h, r, c, f), n = h, r = c;
    }
  }
}
function Ro(s, t, e, i = !1) {
  let n = [], r = i ? [] : null, o = new bs(s), l = new bs(t);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      dt(n, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !e))) {
      let h = l.len;
      for (dt(n, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (dt(n, 0, o.ins), r && Ge(r, n, o.text), a = o.i), o.forward(c), h -= c;
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0, c = o.len;
      for (; c; )
        if (l.ins == -1) {
          let f = Math.min(c, l.len);
          h += f, c -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < c)
          c -= l.len, l.next();
        else
          break;
      dt(n, h, a < o.i ? o.ins : 0), r && a < o.i && Ge(r, n, o.text), a = o.i, o.forward(o.len - c);
    } else {
      if (o.done && l.done)
        return r ? rt.createSet(n, r) : de.create(n);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Cc(s, t, e = !1) {
  let i = [], n = e ? [] : null, r = new bs(s), o = new bs(t);
  for (let l = !1; ; ) {
    if (r.done && o.done)
      return n ? rt.createSet(i, n) : de.create(i);
    if (r.ins == 0)
      dt(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      dt(i, 0, o.ins, l), n && Ge(n, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), h = i.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          dt(i, a, c, l), n && c && Ge(n, i, o.text);
        } else o.ins == -1 ? (dt(i, r.off ? 0 : r.len, a, l), n && Ge(n, i, r.textBit(a))) : (dt(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), n && !o.off && Ge(n, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h), r.forward2(a), o.forward(a);
      }
    }
  }
}
class bs {
  constructor(t) {
    this.set = t, this.i = 0, this.next();
  }
  next() {
    let { sections: t } = this.set;
    this.i < t.length ? (this.len = t[this.i++], this.ins = t[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: t } = this.set, e = this.i - 2 >> 1;
    return e >= t.length ? A.empty : t[e];
  }
  textBit(t) {
    let { inserted: e } = this.set, i = this.i - 2 >> 1;
    return i >= e.length && !t ? A.empty : e[i].slice(this.off, t == null ? void 0 : this.off + t);
  }
  forward(t) {
    t == this.len ? this.next() : (this.len -= t, this.off += t);
  }
  forward2(t) {
    this.ins == -1 ? this.forward(t) : t == this.ins ? this.next() : (this.ins -= t, this.off += t);
  }
}
class ni {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.flags = i;
  }
  /**
  The anchor of the range—the side that doesn't move when you
  extend it.
  */
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  /**
  The head of the range, which is moved when the range is
  [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
  */
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  /**
  True when `anchor` and `head` are at the same position.
  */
  get empty() {
    return this.from == this.to;
  }
  /**
  If this is a cursor that is explicitly associated with the
  character on one of its sides, this returns the side. -1 means
  the character before its position, 1 the character after, and 0
  means no association.
  */
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  /**
  The bidirectional text level associated with this cursor, if
  any.
  */
  get bidiLevel() {
    let t = this.flags & 7;
    return t == 7 ? null : t;
  }
  /**
  The goal column (stored vertical offset) associated with a
  cursor. This is used to preserve the vertical position when
  [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
  lines of different length.
  */
  get goalColumn() {
    let t = this.flags >> 6;
    return t == 16777215 ? void 0 : t;
  }
  /**
  Map this range through a change, producing a valid range in the
  updated document.
  */
  map(t, e = -1) {
    let i, n;
    return this.empty ? i = n = t.mapPos(this.from, e) : (i = t.mapPos(this.from, 1), n = t.mapPos(this.to, -1)), i == this.from && n == this.to ? this : new ni(i, n, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(t, e = t, i = 0) {
    if (t <= this.anchor && e >= this.anchor)
      return x.range(t, e, void 0, void 0, i);
    let n = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
    return x.range(this.anchor, n, void 0, void 0, i);
  }
  /**
  Compare this range to another range.
  */
  eq(t, e = !1) {
    return this.anchor == t.anchor && this.head == t.head && this.goalColumn == t.goalColumn && (!e || !this.empty || this.assoc == t.assoc);
  }
  /**
  Return a JSON-serializable object representing the range.
  */
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  /**
  Convert a JSON representation of a range to a `SelectionRange`
  instance.
  */
  static fromJSON(t) {
    if (!t || typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return x.range(t.anchor, t.head);
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new ni(t, e, i);
  }
}
class x {
  constructor(t, e) {
    this.ranges = t, this.mainIndex = e;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(t, e = -1) {
    return t.empty ? this : x.create(this.ranges.map((i) => i.map(t, e)), this.mainIndex);
  }
  /**
  Compare this selection to another selection. By default, ranges
  are compared only by position. When `includeAssoc` is true,
  cursor ranges must also have the same
  [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
  */
  eq(t, e = !1) {
    if (this.ranges.length != t.ranges.length || this.mainIndex != t.mainIndex)
      return !1;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(t.ranges[i], e))
        return !1;
    return !0;
  }
  /**
  Get the primary selection range. Usually, you should make sure
  your code applies to _all_ ranges, by using methods like
  [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
  */
  get main() {
    return this.ranges[this.mainIndex];
  }
  /**
  Make sure the selection only has one range. Returns a selection
  holding only the main range from this selection.
  */
  asSingle() {
    return this.ranges.length == 1 ? this : new x([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(t, e = !0) {
    return x.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(t, e = this.mainIndex) {
    let i = this.ranges.slice();
    return i[e] = t, x.create(i, this.mainIndex);
  }
  /**
  Convert this selection to an object that can be serialized to
  JSON.
  */
  toJSON() {
    return { ranges: this.ranges.map((t) => t.toJSON()), main: this.mainIndex };
  }
  /**
  Create a selection from a JSON representation.
  */
  static fromJSON(t) {
    if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new x(t.ranges.map((e) => ni.fromJSON(e)), t.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(t, e = t) {
    return new x([x.range(t, e)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(t, e = 0) {
    if (t.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, n = 0; n < t.length; n++) {
      let r = t[n];
      if (r.empty ? r.from <= i : r.from < i)
        return x.normalized(t.slice(), e);
      i = r.to;
    }
    return new x(t, e);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(t, e = 0, i, n) {
    return ni.create(t, t, (e == 0 ? 0 : e < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (n ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(t, e, i, n, r) {
    let o = (i ?? 16777215) << 6 | (n == null ? 7 : Math.min(6, n));
    return !r && t != e && (r = e < t ? 1 : -1), e < t ? ni.create(e, t, 48 | o) : ni.create(t, e, (r ? r < 0 ? 8 : 16 : 0) | o);
  }
  /**
  @internal
  */
  static normalized(t, e = 0) {
    let i = t[e];
    t.sort((n, r) => n.from - r.from), e = t.indexOf(i);
    for (let n = 1; n < t.length; n++) {
      let r = t[n], o = t[n - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        n <= e && e--, t.splice(--n, 2, r.anchor > r.head ? x.range(a, l) : x.range(l, a));
      }
    }
    return new x(t, e);
  }
}
function Dc(s, t) {
  for (let e of s.ranges)
    if (e.to > t)
      throw new RangeError("Selection points outside of document");
}
let yl = 0;
class T {
  constructor(t, e, i, n, r) {
    this.combine = t, this.compareInput = e, this.compare = i, this.isStatic = n, this.id = yl++, this.default = t([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  /**
  Returns a facet reader for this facet, which can be used to
  [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
  */
  get reader() {
    return this;
  }
  /**
  Define a new facet.
  */
  static define(t = {}) {
    return new T(t.combine || ((e) => e), t.compareInput || ((e, i) => e === i), t.compare || (t.combine ? (e, i) => e === i : bl), !!t.static, t.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(t) {
    return new xn([], this, 0, t);
  }
  /**
  Create an extension that computes a value for the facet from a
  state. You must take care to declare the parts of the state that
  this value depends on, since your function is only called again
  for a new state when one of those parts changed.
  
  In cases where your value depends only on a single field, you'll
  want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
  */
  compute(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new xn(t, this, 1, e);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new xn(t, this, 2, e);
  }
  from(t, e) {
    return e || (e = (i) => i), this.compute([t], (i) => e(i.field(t)));
  }
}
function bl(s, t) {
  return s == t || s.length == t.length && s.every((e, i) => e === t[i]);
}
class xn {
  constructor(t, e, i, n) {
    this.dependencies = t, this.facet = e, this.type = i, this.value = n, this.id = yl++;
  }
  dynamicSlot(t) {
    var e;
    let i = this.value, n = this.facet.compareInput, r = this.id, o = t[r] >> 1, l = this.type == 2, a = !1, h = !1, c = [];
    for (let f of this.dependencies)
      f == "doc" ? a = !0 : f == "selection" ? h = !0 : ((e = t[f.id]) !== null && e !== void 0 ? e : 1) & 1 || c.push(t[f.id]);
    return {
      create(f) {
        return f.values[o] = i(f), 1;
      },
      update(f, u) {
        if (a && u.docChanged || h && (u.docChanged || u.selection) || To(f, c)) {
          let d = i(f);
          if (l ? !fa(d, f.values[o], n) : !n(d, f.values[o]))
            return f.values[o] = d, 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d, p = u.config.address[r];
        if (p != null) {
          let m = zn(u, p);
          if (this.dependencies.every((g) => g instanceof T ? u.facet(g) === f.facet(g) : g instanceof mt ? u.field(g, !1) == f.field(g, !1) : !0) || (l ? fa(d = i(f), m, n) : n(d = i(f), m)))
            return f.values[o] = m, 0;
        } else
          d = i(f);
        return f.values[o] = d, 1;
      }
    };
  }
}
function fa(s, t, e) {
  if (s.length != t.length)
    return !1;
  for (let i = 0; i < s.length; i++)
    if (!e(s[i], t[i]))
      return !1;
  return !0;
}
function To(s, t) {
  let e = !1;
  for (let i of t)
    ps(s, i) & 1 && (e = !0);
  return e;
}
function ip(s, t, e) {
  let i = e.map((a) => s[a.id]), n = e.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = s[t.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let f = zn(a, i[c]);
      if (n[c] == 2)
        for (let u of f)
          h.push(u);
      else
        h.push(f);
    }
    return t.combine(h);
  }
  return {
    create(a) {
      for (let h of i)
        ps(a, h);
      return a.values[o] = l(a), 1;
    },
    update(a, h) {
      if (!To(a, r))
        return 0;
      let c = l(a);
      return t.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
    },
    reconfigure(a, h) {
      let c = To(a, i), f = h.config.facets[t.id], u = h.facet(t);
      if (f && !c && bl(e, f))
        return a.values[o] = u, 0;
      let d = l(a);
      return t.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
    }
  };
}
const Zs = /* @__PURE__ */ T.define({ static: !0 });
class mt {
  constructor(t, e, i, n, r) {
    this.id = t, this.createF = e, this.updateF = i, this.compareF = n, this.spec = r, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(t) {
    let e = new mt(yl++, t.create, t.update, t.compare || ((i, n) => i === n), t);
    return t.provide && (e.provides = t.provide(e)), e;
  }
  create(t) {
    let e = t.facet(Zs).find((i) => i.field == this);
    return ((e == null ? void 0 : e.create) || this.createF)(t);
  }
  /**
  @internal
  */
  slot(t) {
    let e = t[this.id] >> 1;
    return {
      create: (i) => (i.values[e] = this.create(i), 1),
      update: (i, n) => {
        let r = i.values[e], o = this.updateF(r, n);
        return this.compareF(r, o) ? 0 : (i.values[e] = o, 1);
      },
      reconfigure: (i, n) => {
        let r = i.facet(Zs), o = n.facet(Zs), l;
        return (l = r.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (i.values[e] = l.create(i), 1) : n.config.address[this.id] != null ? (i.values[e] = n.field(this), 0) : (i.values[e] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(t) {
    return [this, Zs.of({ field: this, create: t })];
  }
  /**
  State field instances can be used as
  [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
  given state.
  */
  get extension() {
    return this;
  }
}
const ii = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function es(s) {
  return (t) => new Rc(t, s);
}
const gi = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ es(ii.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ es(ii.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ es(ii.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ es(ii.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ es(ii.lowest)
};
class Rc {
  constructor(t, e) {
    this.inner = t, this.prec = e;
  }
}
class dr {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(t) {
    return new Ho(this, t);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(t) {
    return dr.reconfigure.of({ compartment: this, extension: t });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(t) {
    return t.config.compartments.get(this);
  }
}
class Ho {
  constructor(t, e) {
    this.compartment = t, this.inner = e;
  }
}
class Yn {
  constructor(t, e, i, n, r, o) {
    for (this.base = t, this.compartments = e, this.dynamicSlots = i, this.address = n, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(
        0
        /* SlotStatus.Unresolved */
      );
  }
  staticFacet(t) {
    let e = this.address[t.id];
    return e == null ? t.default : this.staticValues[e >> 1];
  }
  static resolve(t, e, i) {
    let n = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of sp(t, e, o))
      u instanceof mt ? n.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let u of n)
      l[u.id] = h.length << 1, h.push((d) => u.slot(d));
    let c = i == null ? void 0 : i.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, m = c && c[u] || [];
      if (d.every(
        (g) => g.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, bl(m, d))
          a.push(i.facet(p));
        else {
          let g = p.combine(d.map((w) => w.value));
          a.push(i && p.compare(g, i.facet(p)) ? i.facet(p) : g);
        }
      else {
        for (let g of d)
          g.type == 0 ? (l[g.id] = a.length << 1 | 1, a.push(g.value)) : (l[g.id] = h.length << 1, h.push((w) => g.dynamicSlot(w)));
        l[p.id] = h.length << 1, h.push((g) => ip(g, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new Yn(t, o, f, l, a, r);
  }
}
function sp(s, t, e) {
  let i = [[], [], [], [], []], n = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = n.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof Ho && e.delete(o.compartment);
    }
    if (n.set(o, l), Array.isArray(o))
      for (let h of o)
        r(h, l);
    else if (o instanceof Ho) {
      if (e.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = t.get(o.compartment) || o.inner;
      e.set(o.compartment, h), r(h, l);
    } else if (o instanceof Rc)
      r(o.inner, o.prec);
    else if (o instanceof mt)
      i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof xn)
      i[l].push(o), o.facet.extensions && r(o.facet.extensions, ii.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(h, l);
    }
  }
  return r(s, ii.default), i.reduce((o, l) => o.concat(l));
}
function ps(s, t) {
  if (t & 1)
    return 2;
  let e = t >> 1, i = s.status[e];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  s.status[e] = 4;
  let n = s.computeSlot(s, s.config.dynamicSlots[e]);
  return s.status[e] = 2 | n;
}
function zn(s, t) {
  return t & 1 ? s.config.staticValues[t >> 1] : s.values[t >> 1];
}
const Tc = /* @__PURE__ */ T.define(), Eo = /* @__PURE__ */ T.define({
  combine: (s) => s.some((t) => t),
  static: !0
}), Hc = /* @__PURE__ */ T.define({
  combine: (s) => s.length ? s[0] : void 0,
  static: !0
}), Ec = /* @__PURE__ */ T.define(), jc = /* @__PURE__ */ T.define(), Pc = /* @__PURE__ */ T.define(), Nc = /* @__PURE__ */ T.define({
  combine: (s) => s.length ? s[0] : !1
});
class He {
  /**
  @internal
  */
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  /**
  Define a new type of annotation.
  */
  static define() {
    return new np();
  }
}
class np {
  /**
  Create an instance of this annotation.
  */
  of(t) {
    return new He(this, t);
  }
}
class rp {
  /**
  @internal
  */
  constructor(t) {
    this.map = t;
  }
  /**
  Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
  type.
  */
  of(t) {
    return new Y(this, t);
  }
}
class Y {
  /**
  @internal
  */
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  /**
  Map this effect through a position mapping. Will return
  `undefined` when that ends up deleting the effect.
  */
  map(t) {
    let e = this.type.map(this.value, t);
    return e === void 0 ? void 0 : e == this.value ? this : new Y(this.type, e);
  }
  /**
  Tells you whether this effect object is of a given
  [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
  */
  is(t) {
    return this.type == t;
  }
  /**
  Define a new effect type. The type parameter indicates the type
  of values that his effect holds. It should be a type that
  doesn't include `undefined`, since that is used in
  [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
  removed.
  */
  static define(t = {}) {
    return new rp(t.map || ((e) => e));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(t, e) {
    if (!t.length)
      return t;
    let i = [];
    for (let n of t) {
      let r = n.map(e);
      r && i.push(r);
    }
    return i;
  }
}
Y.reconfigure = /* @__PURE__ */ Y.define();
Y.appendConfig = /* @__PURE__ */ Y.define();
class ot {
  constructor(t, e, i, n, r, o) {
    this.startState = t, this.changes = e, this.selection = i, this.effects = n, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && Dc(i, e.newLength), r.some((l) => l.type == ot.time) || (this.annotations = r.concat(ot.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(t, e, i, n, r, o) {
    return new ot(t, e, i, n, r, o);
  }
  /**
  The new document produced by the transaction. Contrary to
  [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
  force the entire new state to be computed right away, so it is
  recommended that [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
  when they need to look at the new document.
  */
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  /**
  The new selection produced by the transaction. If
  [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
  this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
  current selection through the changes made by the transaction.
  */
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  /**
  The new state created by the transaction. Computed on demand
  (but retained for subsequent access), so it is recommended not to
  access it in [transaction
  filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
  */
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  /**
  Get the value of the given annotation type, if any.
  */
  annotation(t) {
    for (let e of this.annotations)
      if (e.type == t)
        return e.value;
  }
  /**
  Indicates whether the transaction changed the document.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Indicates whether this transaction reconfigures the state
  (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
  with a top-level configuration
  [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
  */
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  /**
  Returns true if the transaction has a [user
  event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
  or more specific than `event`. For example, if the transaction
  has `"select.pointer"` as user event, `"select"` and
  `"select.pointer"` will match it.
  */
  isUserEvent(t) {
    let e = this.annotation(ot.userEvent);
    return !!(e && (e == t || e.length > t.length && e.slice(0, t.length) == t && e[t.length] == "."));
  }
}
ot.time = /* @__PURE__ */ He.define();
ot.userEvent = /* @__PURE__ */ He.define();
ot.addToHistory = /* @__PURE__ */ He.define();
ot.remote = /* @__PURE__ */ He.define();
function op(s, t) {
  let e = [];
  for (let i = 0, n = 0; ; ) {
    let r, o;
    if (i < s.length && (n == t.length || t[n] >= s[i]))
      r = s[i++], o = s[i++];
    else if (n < t.length)
      r = t[n++], o = t[n++];
    else
      return e;
    !e.length || e[e.length - 1] < r ? e.push(r, o) : e[e.length - 1] < o && (e[e.length - 1] = o);
  }
}
function Yc(s, t, e) {
  var i;
  let n, r, o;
  return e ? (n = t.changes, r = rt.empty(t.changes.length), o = s.changes.compose(t.changes)) : (n = t.changes.map(s.changes), r = s.changes.mapDesc(t.changes, !0), o = s.changes.compose(n)), {
    changes: o,
    selection: t.selection ? t.selection.map(r) : (i = s.selection) === null || i === void 0 ? void 0 : i.map(n),
    effects: Y.mapEffects(s.effects, n).concat(Y.mapEffects(t.effects, r)),
    annotations: s.annotations.length ? s.annotations.concat(t.annotations) : t.annotations,
    scrollIntoView: s.scrollIntoView || t.scrollIntoView
  };
}
function jo(s, t, e) {
  let i = t.selection, n = Yi(t.annotations);
  return t.userEvent && (n = n.concat(ot.userEvent.of(t.userEvent))), {
    changes: t.changes instanceof rt ? t.changes : rt.of(t.changes || [], e, s.facet(Hc)),
    selection: i && (i instanceof x ? i : x.single(i.anchor, i.head)),
    effects: Yi(t.effects),
    annotations: n,
    scrollIntoView: !!t.scrollIntoView
  };
}
function zc(s, t, e) {
  let i = jo(s, t.length ? t[0] : {}, s.doc.length);
  t.length && t[0].filter === !1 && (e = !1);
  for (let r = 1; r < t.length; r++) {
    t[r].filter === !1 && (e = !1);
    let o = !!t[r].sequential;
    i = Yc(i, jo(s, t[r], o ? i.changes.newLength : s.doc.length), o);
  }
  let n = ot.create(s, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return ap(e ? lp(n) : n);
}
function lp(s) {
  let t = s.startState, e = !0;
  for (let n of t.facet(Ec)) {
    let r = n(s);
    if (r === !1) {
      e = !1;
      break;
    }
    Array.isArray(r) && (e = e === !0 ? r : op(e, r));
  }
  if (e !== !0) {
    let n, r;
    if (e === !1)
      r = s.changes.invertedDesc, n = rt.empty(t.doc.length);
    else {
      let o = s.changes.filter(e);
      n = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    s = ot.create(t, n, s.selection && s.selection.map(r), Y.mapEffects(s.effects, r), s.annotations, s.scrollIntoView);
  }
  let i = t.facet(jc);
  for (let n = i.length - 1; n >= 0; n--) {
    let r = i[n](s);
    r instanceof ot ? s = r : Array.isArray(r) && r.length == 1 && r[0] instanceof ot ? s = r[0] : s = zc(t, Yi(r), !1);
  }
  return s;
}
function ap(s) {
  let t = s.startState, e = t.facet(Pc), i = s;
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n](s);
    r && Object.keys(r).length && (i = Yc(i, jo(t, r, s.changes.newLength), !0));
  }
  return i == s ? s : ot.create(t, s.changes, s.selection, i.effects, i.annotations, i.scrollIntoView);
}
const hp = [];
function Yi(s) {
  return s == null ? hp : Array.isArray(s) ? s : [s];
}
var J = /* @__PURE__ */ function(s) {
  return s[s.Word = 0] = "Word", s[s.Space = 1] = "Space", s[s.Other = 2] = "Other", s;
}(J || (J = {}));
const cp = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Po;
try {
  Po = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function fp(s) {
  if (Po)
    return Po.test(s);
  for (let t = 0; t < s.length; t++) {
    let e = s[t];
    if (/\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || cp.test(e)))
      return !0;
  }
  return !1;
}
function up(s) {
  return (t) => {
    if (!/\S/.test(t))
      return J.Space;
    if (fp(t))
      return J.Word;
    for (let e = 0; e < s.length; e++)
      if (t.indexOf(s[e]) > -1)
        return J.Word;
    return J.Other;
  };
}
class M {
  constructor(t, e, i, n, r, o) {
    this.config = t, this.doc = e, this.selection = i, this.values = n, this.status = t.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      ps(this, l << 1);
    this.computeSlot = null;
  }
  field(t, e = !0) {
    let i = this.config.address[t.id];
    if (i == null) {
      if (e)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return ps(this, i), zn(this, i);
  }
  /**
  Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
  state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
  can be passed. Unless
  [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
  [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
  are assumed to start in the _current_ document (not the document
  produced by previous specs), and its
  [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
  [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
  to the document created by its _own_ changes. The resulting
  transaction contains the combined effect of all the different
  specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
  specs take precedence over earlier ones.
  */
  update(...t) {
    return zc(this, t, !0);
  }
  /**
  @internal
  */
  applyTransaction(t) {
    let e = this.config, { base: i, compartments: n } = e;
    for (let l of t.effects)
      l.is(dr.reconfigure) ? (e && (n = /* @__PURE__ */ new Map(), e.compartments.forEach((a, h) => n.set(h, a)), e = null), n.set(l.value.compartment, l.value.extension)) : l.is(Y.reconfigure) ? (e = null, i = l.value) : l.is(Y.appendConfig) && (e = null, i = Yi(i).concat(l.value));
    let r;
    e ? r = t.startState.values.slice() : (e = Yn.resolve(i, n, this), r = new M(e, this.doc, this.selection, e.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
    let o = t.startState.facet(Eo) ? t.newSelection : t.newSelection.asSingle();
    new M(e, t.newDoc, o, r, (l, a) => a.update(l, t), t);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(t) {
    return typeof t == "string" && (t = this.toText(t)), this.changeByRange((e) => ({
      changes: { from: e.from, to: e.to, insert: t },
      range: x.cursor(e.from + t.length)
    }));
  }
  /**
  Create a set of changes and a new selection by running the given
  function for each range in the active selection. The function
  can return an optional set of changes (in the coordinate space
  of the start document), plus an updated range (in the coordinate
  space of the document produced by the call's own changes). This
  method will merge all the changes and ranges into a single
  changeset and selection, and return it as a [transaction
  spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
  [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
  */
  changeByRange(t) {
    let e = this.selection, i = t(e.ranges[0]), n = this.changes(i.changes), r = [i.range], o = Yi(i.effects);
    for (let l = 1; l < e.ranges.length; l++) {
      let a = t(e.ranges[l]), h = this.changes(a.changes), c = h.map(n);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(c);
      let f = n.mapDesc(h, !0);
      r.push(a.range.map(f)), n = n.compose(c), o = Y.mapEffects(o, c).concat(Y.mapEffects(Yi(a.effects), f));
    }
    return {
      changes: n,
      selection: x.create(r, e.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(t = []) {
    return t instanceof rt ? t : rt.of(t, this.doc.length, this.facet(M.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(t) {
    return A.of(t.split(this.facet(M.lineSeparator) || Co));
  }
  /**
  Return the given range of the document as a string.
  */
  sliceDoc(t = 0, e = this.doc.length) {
    return this.doc.sliceString(t, e, this.lineBreak);
  }
  /**
  Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
  */
  facet(t) {
    let e = this.config.address[t.id];
    return e == null ? t.default : (ps(this, e), zn(this, e));
  }
  /**
  Convert this state to a JSON-serializable object. When custom
  fields should be serialized, you can pass them in as an object
  mapping property names (in the resulting object, which should
  not use `doc` or `selection`) to fields.
  */
  toJSON(t) {
    let e = {
      doc: this.sliceDoc(),
      selection: this.selection.toJSON()
    };
    if (t)
      for (let i in t) {
        let n = t[i];
        n instanceof mt && this.config.address[n.id] != null && (e[i] = n.spec.toJSON(this.field(t[i]), this));
      }
    return e;
  }
  /**
  Deserialize a state from its JSON representation. When custom
  fields should be deserialized, pass the same object you passed
  to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
  third argument.
  */
  static fromJSON(t, e = {}, i) {
    if (!t || typeof t.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let n = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          let o = i[r], l = t[r];
          n.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return M.create({
      doc: t.doc,
      selection: x.fromJSON(t.selection),
      extensions: e.extensions ? n.concat([e.extensions]) : n
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(t = {}) {
    let e = Yn.resolve(t.extensions || [], /* @__PURE__ */ new Map()), i = t.doc instanceof A ? t.doc : A.of((t.doc || "").split(e.staticFacet(M.lineSeparator) || Co)), n = t.selection ? t.selection instanceof x ? t.selection : x.single(t.selection.anchor, t.selection.head) : x.single(0);
    return Dc(n, i.length), e.staticFacet(Eo) || (n = n.asSingle()), new M(e, i, n, e.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(M.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(M.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(Nc);
  }
  /**
  Look up a translation for the given phrase (via the
  [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
  original string if no translation is found.
  
  If additional arguments are passed, they will be inserted in
  place of markers like `$1` (for the first value) and `$2`, etc.
  A single `$` is equivalent to `$1`, and `$$` will produce a
  literal dollar sign.
  */
  phrase(t, ...e) {
    for (let i of this.facet(M.phrases))
      if (Object.prototype.hasOwnProperty.call(i, t)) {
        t = i[t];
        break;
      }
    return e.length && (t = t.replace(/\$(\$|\d*)/g, (i, n) => {
      if (n == "$")
        return "$";
      let r = +(n || 1);
      return !r || r > e.length ? i : e[r - 1];
    })), t;
  }
  /**
  Find the values for a given language data field, provided by the
  the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
  
  Examples of language data fields are...
  
  - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
    comment syntax.
  - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
    for providing language-specific completion sources.
  - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
    characters that should be considered part of words in this
    language.
  - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
    bracket closing behavior.
  */
  languageDataAt(t, e, i = -1) {
    let n = [];
    for (let r of this.facet(Tc))
      for (let o of r(this, e, i))
        Object.prototype.hasOwnProperty.call(o, t) && n.push(o[t]);
    return n;
  }
  /**
  Return a function that can categorize strings (expected to
  represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
  into one of:
  
   - Word (contains an alphanumeric character or a character
     explicitly listed in the local language's `"wordChars"`
     language data, which should be a string)
   - Space (contains only whitespace)
   - Other (anything else)
  */
  charCategorizer(t) {
    let e = this.languageDataAt("wordChars", t);
    return up(e.length ? e[0] : "");
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(t) {
    let { text: e, from: i, length: n } = this.doc.lineAt(t), r = this.charCategorizer(t), o = t - i, l = t - i;
    for (; o > 0; ) {
      let a = at(e, o, !1);
      if (r(e.slice(a, o)) != J.Word)
        break;
      o = a;
    }
    for (; l < n; ) {
      let a = at(e, l);
      if (r(e.slice(l, a)) != J.Word)
        break;
      l = a;
    }
    return o == l ? null : x.range(o + i, l + i);
  }
}
M.allowMultipleSelections = Eo;
M.tabSize = /* @__PURE__ */ T.define({
  combine: (s) => s.length ? s[0] : 4
});
M.lineSeparator = Hc;
M.readOnly = Nc;
M.phrases = /* @__PURE__ */ T.define({
  compare(s, t) {
    let e = Object.keys(s), i = Object.keys(t);
    return e.length == i.length && e.every((n) => s[n] == t[n]);
  }
});
M.languageData = Tc;
M.changeFilter = Ec;
M.transactionFilter = jc;
M.transactionExtender = Pc;
dr.reconfigure = /* @__PURE__ */ Y.define();
function ge(s, t, e = {}) {
  let i = {};
  for (let n of s)
    for (let r of Object.keys(n)) {
      let o = n[r], l = i[r];
      if (l === void 0)
        i[r] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(e, r))
        i[r] = e[r](l, o);
      else
        throw new Error("Config merge conflict for field " + r);
    }
  for (let n in t)
    i[n] === void 0 && (i[n] = t[n]);
  return i;
}
class We {
  /**
  Compare this value with another value. Used when comparing
  rangesets. The default implementation compares by identity.
  Unless you are only creating a fixed number of unique instances
  of your value type, it is a good idea to implement this
  properly.
  */
  eq(t) {
    return this == t;
  }
  /**
  Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
  */
  range(t, e = t) {
    return No.create(t, e, this);
  }
}
We.prototype.startSide = We.prototype.endSide = 0;
We.prototype.point = !1;
We.prototype.mapMode = bt.TrackDel;
function Ol(s, t) {
  return s == t || s.constructor == t.constructor && s.eq(t);
}
let No = class Gc {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.value = i;
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Gc(t, e, i);
  }
};
function Yo(s, t) {
  return s.from - t.from || s.value.startSide - t.value.startSide;
}
class xl {
  constructor(t, e, i, n) {
    this.from = t, this.to = e, this.value = i, this.maxPoint = n;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(t, e, i, n = 0) {
    let r = i ? this.to : this.from;
    for (let o = n, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, h = r[a] - t || (i ? this.value[a].endSide : this.value[a].startSide) - e;
      if (a == o)
        return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(t, e, i, n) {
    for (let r = this.findIndex(e, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (n(this.from[r] + t, this.to[r] + t, this.value[r]) === !1)
        return !1;
  }
  map(t, e) {
    let i = [], n = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], c = this.from[a] + t, f = this.to[a] + t, u, d;
      if (c == f) {
        let p = e.mapPos(c, h.startSide, h.mapMode);
        if (p == null || (u = d = p, h.startSide != h.endSide && (d = e.mapPos(c, h.endSide), d < u)))
          continue;
      } else if (u = e.mapPos(c, h.startSide), d = e.mapPos(f, h.endSide), u > d || u == d && h.startSide > 0 && h.endSide <= 0)
        continue;
      (d - u || h.endSide - h.startSide) < 0 || (o < 0 && (o = u), h.point && (l = Math.max(l, d - u)), i.push(h), n.push(u - o), r.push(d - o));
    }
    return { mapped: i.length ? new xl(n, r, i, l) : null, pos: o };
  }
}
class Q {
  constructor(t, e, i, n) {
    this.chunkPos = t, this.chunk = e, this.nextLayer = i, this.maxPoint = n;
  }
  /**
  @internal
  */
  static create(t, e, i, n) {
    return new Q(t, e, i, n);
  }
  /**
  @internal
  */
  get length() {
    let t = this.chunk.length - 1;
    return t < 0 ? 0 : Math.max(this.chunkEnd(t), this.nextLayer.length);
  }
  /**
  The number of ranges in the set.
  */
  get size() {
    if (this.isEmpty)
      return 0;
    let t = this.nextLayer.size;
    for (let e of this.chunk)
      t += e.value.length;
    return t;
  }
  /**
  @internal
  */
  chunkEnd(t) {
    return this.chunkPos[t] + this.chunk[t].length;
  }
  /**
  Update the range set, optionally adding new ranges or filtering
  out existing ones.
  
  (Note: The type parameter is just there as a kludge to work
  around TypeScript variance issues that prevented `RangeSet<X>`
  from being a subtype of `RangeSet<Y>` when `X` is a subtype of
  `Y`.)
  */
  update(t) {
    let { add: e = [], sort: i = !1, filterFrom: n = 0, filterTo: r = this.length } = t, o = t.filter;
    if (e.length == 0 && !o)
      return this;
    if (i && (e = e.slice().sort(Yo)), this.isEmpty)
      return e.length ? Q.of(e) : this;
    let l = new Qc(this, null, -1).goto(0), a = 0, h = [], c = new De();
    for (; l.value || a < e.length; )
      if (a < e.length && (l.from - e[a].from || l.startSide - e[a].value.startSide) >= 0) {
        let f = e[a++];
        c.addInner(f.from, f.to, f.value) || h.push(f);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == e.length || this.chunkEnd(l.chunkIndex) < e[a].from) && (!o || n > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || n > l.to || r < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(No.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? Q.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: n, filterTo: r }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(t) {
    if (t.empty || this.isEmpty)
      return this;
    let e = [], i = [], n = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], h = t.touchesRange(l, l + a.length);
      if (h === !1)
        n = Math.max(n, a.maxPoint), e.push(a), i.push(t.mapPos(l));
      else if (h === !0) {
        let { mapped: c, pos: f } = a.map(l, t);
        c && (n = Math.max(n, c.maxPoint), e.push(c), i.push(f));
      }
    }
    let r = this.nextLayer.map(t);
    return e.length == 0 ? r : new Q(i, e, r || Q.empty, n);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(t, e, i) {
    if (!this.isEmpty) {
      for (let n = 0; n < this.chunk.length; n++) {
        let r = this.chunkPos[n], o = this.chunk[n];
        if (e >= r && t <= r + o.length && o.between(r, t - r, e - r, i) === !1)
          return;
      }
      this.nextLayer.between(t, e, i);
    }
  }
  /**
  Iterate over the ranges in this set, in order, including all
  ranges that end at or after `from`.
  */
  iter(t = 0) {
    return Os.from([this]).goto(t);
  }
  /**
  @internal
  */
  get isEmpty() {
    return this.nextLayer == this;
  }
  /**
  Iterate over the ranges in a collection of sets, in order,
  starting from `from`.
  */
  static iter(t, e = 0) {
    return Os.from(t).goto(e);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(t, e, i, n, r = -1) {
    let o = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = ua(o, l, i), h = new is(o, a, r), c = new is(l, a, r);
    i.iterGaps((f, u, d) => da(h, f, c, u, d, n)), i.empty && i.length == 0 && da(h, 0, c, 0, 0, n);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(t, e, i = 0, n) {
    n == null && (n = 999999999);
    let r = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0), o = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0);
    if (r.length != o.length)
      return !1;
    if (!r.length)
      return !0;
    let l = ua(r, o), a = new is(r, l, 0).goto(i), h = new is(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !zo(a.active, h.active) || a.point && (!h.point || !Ol(a.point, h.point)))
        return !1;
      if (a.to > n)
        return !0;
      a.next(), h.next();
    }
  }
  /**
  Iterate over a group of range sets at the same time, notifying
  the iterator about the ranges covering every given piece of
  content. Returns the open count (see
  [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
  of the iteration.
  */
  static spans(t, e, i, n, r = -1) {
    let o = new is(t, null, r).goto(e), l = e, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let c = o.activeForPoint(o.to), f = o.pointFrom < e ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, a);
        n.point(l, h, o.point, c, f, o.pointRank), a = Math.min(o.openEnd(h), c.length);
      } else h > l && (n.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  /**
  Create a range set for the given range or array of ranges. By
  default, this expects the ranges to be _sorted_ (by start
  position and, if two start at the same position,
  `value.startSide`). You can pass `true` as second argument to
  cause the method to sort them.
  */
  static of(t, e = !1) {
    let i = new De();
    for (let n of t instanceof No ? [t] : e ? dp(t) : t)
      i.add(n.from, n.to, n.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(t) {
    if (!t.length)
      return Q.empty;
    let e = t[t.length - 1];
    for (let i = t.length - 2; i >= 0; i--)
      for (let n = t[i]; n != Q.empty; n = n.nextLayer)
        e = new Q(n.chunkPos, n.chunk, e, Math.max(n.maxPoint, e.maxPoint));
    return e;
  }
}
Q.empty = /* @__PURE__ */ new Q([], [], null, -1);
function dp(s) {
  if (s.length > 1)
    for (let t = s[0], e = 1; e < s.length; e++) {
      let i = s[e];
      if (Yo(t, i) > 0)
        return s.slice().sort(Yo);
      t = i;
    }
  return s;
}
Q.empty.nextLayer = Q.empty;
class De {
  finishChunk(t) {
    this.chunks.push(new xl(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = []);
  }
  /**
  Create an empty builder.
  */
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  /**
  Add a range. Ranges should be added in sorted (by `from` and
  `value.startSide`) order.
  */
  add(t, e, i) {
    this.addInner(t, e, i) || (this.nextLayer || (this.nextLayer = new De())).add(t, e, i);
  }
  /**
  @internal
  */
  addInner(t, e, i) {
    let n = t - this.lastTo || i.startSide - this.last.endSide;
    if (n <= 0 && (t - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return n < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = t), this.from.push(t - this.chunkStart), this.to.push(e - this.chunkStart), this.last = i, this.lastFrom = t, this.lastTo = e, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, e - t)), !0);
  }
  /**
  @internal
  */
  addChunk(t, e) {
    if ((t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0)
      return !1;
    this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint), this.chunks.push(e), this.chunkPos.push(t);
    let i = e.value.length - 1;
    return this.last = e.value[i], this.lastFrom = e.from[i] + t, this.lastTo = e.to[i] + t, !0;
  }
  /**
  Finish the range set. Returns the new set. The builder can't be
  used anymore after this has been called.
  */
  finish() {
    return this.finishInner(Q.empty);
  }
  /**
  @internal
  */
  finishInner(t) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return t;
    let e = Q.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
    return this.from = null, e;
  }
}
function ua(s, t, e) {
  let i = /* @__PURE__ */ new Map();
  for (let r of s)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let n = /* @__PURE__ */ new Set();
  for (let r of t)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      l != null && (e ? e.mapPos(l) : l) == r.chunkPos[o] && !(e != null && e.touchesRange(l, l + r.chunk[o].length)) && n.add(r.chunk[o]);
    }
  return n;
}
class Qc {
  constructor(t, e, i, n = 0) {
    this.layer = t, this.skip = e, this.minPoint = i, this.rank = n;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(t, e = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t, e, !1), this;
  }
  gotoInner(t, e, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let n = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(n) || this.layer.chunkEnd(this.chunkIndex) < t || n.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let n = this.layer.chunk[this.chunkIndex].findIndex(t - this.layer.chunkPos[this.chunkIndex], e, !0);
      (!i || this.rangeIndex < n) && this.setRangeIndex(n);
    }
    this.next();
  }
  forward(t, e) {
    (this.to - t || this.endSide - e) < 0 && this.gotoInner(t, e, !0);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let t = this.layer.chunkPos[this.chunkIndex], e = this.layer.chunk[this.chunkIndex], i = t + e.from[this.rangeIndex];
        if (this.from = i, this.to = t + e.to[this.rangeIndex], this.value = e.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(t) {
    if (t == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = t;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(t) {
    return this.from - t.from || this.startSide - t.startSide || this.rank - t.rank || this.to - t.to || this.endSide - t.endSide;
  }
}
class Os {
  constructor(t) {
    this.heap = t;
  }
  static from(t, e = null, i = -1) {
    let n = [];
    for (let r = 0; r < t.length; r++)
      for (let o = t[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && n.push(new Qc(o, e, i, r));
    return n.length == 1 ? n[0] : new Os(n);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(t, e = -1e9) {
    for (let i of this.heap)
      i.goto(t, e);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Pr(this.heap, i);
    return this.next(), this;
  }
  forward(t, e) {
    for (let i of this.heap)
      i.forward(t, e);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Pr(this.heap, i);
    (this.to - t || this.value.endSide - e) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let t = this.heap[0];
      this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), Pr(this.heap, 0);
    }
  }
}
function Pr(s, t) {
  for (let e = s[t]; ; ) {
    let i = (t << 1) + 1;
    if (i >= s.length)
      break;
    let n = s[i];
    if (i + 1 < s.length && n.compare(s[i + 1]) >= 0 && (n = s[i + 1], i++), e.compare(n) < 0)
      break;
    s[i] = e, s[t] = n, t = i;
  }
}
class is {
  constructor(t, e, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Os.from(t, e, i);
  }
  goto(t, e = -1e9) {
    return this.cursor.goto(t, e), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t, this.endSide = e, this.openStart = -1, this.next(), this;
  }
  forward(t, e) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(t, e);
  }
  removeActive(t) {
    _s(this.active, t), _s(this.activeTo, t), _s(this.activeRank, t), this.minActive = pa(this.active, this.activeTo);
  }
  addActive(t) {
    let e = 0, { value: i, to: n, rank: r } = this.cursor;
    for (; e < this.activeRank.length && (r - this.activeRank[e] || n - this.activeTo[e]) > 0; )
      e++;
    qs(this.active, e, i), qs(this.activeTo, e, n), qs(this.activeRank, e, r), t && qs(t, e, this.cursor.from), this.minActive = pa(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let t = this.to, e = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let n = this.minActive;
      if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[n] > t) {
          this.to = this.activeTo[n], this.endSide = this.active[n].endSide;
          break;
        }
        this.removeActive(n), i && _s(i, n);
      } else if (this.cursor.value)
        if (this.cursor.from > t) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(i), this.cursor.next();
          else if (e && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let n = i.length - 1; n >= 0 && i[n] < t; n--)
        this.openStart++;
    }
  }
  activeForPoint(t) {
    if (!this.active.length)
      return this.active;
    let e = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > t || this.activeTo[i] == t && this.active[i].endSide >= this.point.endSide) && e.push(this.active[i]);
    return e.reverse();
  }
  openEnd(t) {
    let e = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > t; i--)
      e++;
    return e;
  }
}
function da(s, t, e, i, n, r) {
  s.goto(t), e.goto(i);
  let o = i + n, l = i, a = i - t, h = !!r.boundChange;
  for (let c = !1; ; ) {
    let f = s.to + a - e.to, u = f || s.endSide - e.endSide, d = u < 0 ? s.to + a : e.to, p = Math.min(d, o);
    if (s.point || e.point ? (s.point && e.point && Ol(s.point, e.point) && zo(s.activeForPoint(s.to), e.activeForPoint(e.to)) || r.comparePoint(l, p, s.point, e.point), c = !1) : (c && r.boundChange(l), p > l && !zo(s.active, e.active) && r.compareRange(l, p, s.active, e.active), h && p < o && (f || s.openEnd(d) != e.openEnd(d)) && (c = !0)), d > o)
      break;
    l = d, u <= 0 && s.next(), u >= 0 && e.next();
  }
}
function zo(s, t) {
  if (s.length != t.length)
    return !1;
  for (let e = 0; e < s.length; e++)
    if (s[e] != t[e] && !Ol(s[e], t[e]))
      return !1;
  return !0;
}
function _s(s, t) {
  for (let e = t, i = s.length - 1; e < i; e++)
    s[e] = s[e + 1];
  s.pop();
}
function qs(s, t, e) {
  for (let i = s.length - 1; i >= t; i--)
    s[i + 1] = s[i];
  s[t] = e;
}
function pa(s, t) {
  let e = -1, i = 1e9;
  for (let n = 0; n < t.length; n++)
    (t[n] - i || s[n].endSide - s[e].endSide) < 0 && (e = n, i = t[n]);
  return e;
}
function Xi(s, t, e = s.length) {
  let i = 0;
  for (let n = 0; n < e && n < s.length; )
    s.charCodeAt(n) == 9 ? (i += t - i % t, n++) : (i++, n = at(s, n));
  return i;
}
function Go(s, t, e, i) {
  for (let n = 0, r = 0; ; ) {
    if (r >= t)
      return n;
    if (n == s.length)
      break;
    r += s.charCodeAt(n) == 9 ? e - r % e : 1, n = at(s, n);
  }
  return i === !0 ? -1 : s.length;
}
const Qo = "ͼ", ma = typeof Symbol > "u" ? "__" + Qo : Symbol.for(Qo), Bo = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), ga = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Me {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(t, e) {
    this.rules = [];
    let { finish: i } = e || {};
    function n(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, h) {
      let c = [], f = /^@(\w+)\b/.exec(o[0]), u = f && f[1] == "keyframes";
      if (f && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d.split(/,\s*/).map((m) => o.map((g) => m.replace(/&/, g))).reduce((m, g) => m.concat(g)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!f) throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          r(n(d), p, c, u);
        } else p != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()) + ": " + p + ";");
      }
      (c.length || u) && a.push((i && !f && !h ? o.map(i) : o).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let o in t) r(n(o), t[o], this.rules);
  }
  // :: () → string
  // Returns a string containing the module's CSS rules.
  getRules() {
    return this.rules.join(`
`);
  }
  // :: () → string
  // Generate a new unique CSS class name.
  static newName() {
    let t = ga[ma] || 1;
    return ga[ma] = t + 1, Qo + t.toString(36);
  }
  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})
  //
  // Mount the given set of modules in the given DOM root, which ensures
  // that the CSS rules defined by the module are available in that
  // context.
  //
  // Rules are only added to the document once per root.
  //
  // Rule order will follow the order of the modules, so that rules from
  // modules later in the array take precedence of those from earlier
  // modules. If you call this function multiple times for the same root
  // in a way that changes the order of already mounted modules, the old
  // order will be changed.
  //
  // If a Content Security Policy nonce is provided, it is added to
  // the `<style>` tag generated by the library.
  static mount(t, e, i) {
    let n = t[Bo], r = i && i.nonce;
    n ? r && n.setNonce(r) : n = new pp(t, r), n.mount(Array.isArray(e) ? e : [e], t);
  }
}
let $a = /* @__PURE__ */ new Map();
class pp {
  constructor(t, e) {
    let i = t.ownerDocument || t, n = i.defaultView;
    if (!t.head && t.adoptedStyleSheets && n.CSSStyleSheet) {
      let r = $a.get(i);
      if (r) return t[Bo] = r;
      this.sheet = new n.CSSStyleSheet(), $a.set(i, this);
    } else
      this.styleTag = i.createElement("style"), e && this.styleTag.setAttribute("nonce", e);
    this.modules = [], t[Bo] = this;
  }
  mount(t, e) {
    let i = this.sheet, n = 0, r = 0;
    for (let o = 0; o < t.length; o++) {
      let l = t[o], a = this.modules.indexOf(l);
      if (a < r && a > -1 && (this.modules.splice(a, 1), r--, a = -1), a == -1) {
        if (this.modules.splice(r++, 0, l), i) for (let h = 0; h < l.rules.length; h++)
          i.insertRule(l.rules[h], n++);
      } else {
        for (; r < a; ) n += this.modules[r++].rules.length;
        n += l.rules.length, r++;
      }
    }
    if (i)
      e.adoptedStyleSheets.indexOf(this.sheet) < 0 && (e.adoptedStyleSheets = [this.sheet, ...e.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = e.head || e;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(t) {
    this.styleTag && this.styleTag.getAttribute("nonce") != t && this.styleTag.setAttribute("nonce", t);
  }
}
var Ae = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, xs = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, mp = typeof navigator < "u" && /Mac/.test(navigator.platform), gp = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ft = 0; ft < 10; ft++) Ae[48 + ft] = Ae[96 + ft] = String(ft);
for (var ft = 1; ft <= 24; ft++) Ae[ft + 111] = "F" + ft;
for (var ft = 65; ft <= 90; ft++)
  Ae[ft] = String.fromCharCode(ft + 32), xs[ft] = String.fromCharCode(ft);
for (var Nr in Ae) xs.hasOwnProperty(Nr) || (xs[Nr] = Ae[Nr]);
function $p(s) {
  var t = mp && s.metaKey && s.shiftKey && !s.ctrlKey && !s.altKey || gp && s.shiftKey && s.key && s.key.length == 1 || s.key == "Unidentified", e = !t && s.key || (s.shiftKey ? xs : Ae)[s.keyCode] || s.key || "Unidentified";
  return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
function _() {
  var s = arguments[0];
  typeof s == "string" && (s = document.createElement(s));
  var t = 1, e = arguments[1];
  if (e && typeof e == "object" && e.nodeType == null && !Array.isArray(e)) {
    for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
      var n = e[i];
      typeof n == "string" ? s.setAttribute(i, n) : n != null && (s[i] = n);
    }
    t++;
  }
  for (; t < arguments.length; t++) Bc(s, arguments[t]);
  return s;
}
function Bc(s, t) {
  if (typeof t == "string")
    s.appendChild(document.createTextNode(t));
  else if (t != null) if (t.nodeType != null)
    s.appendChild(t);
  else if (Array.isArray(t))
    for (var e = 0; e < t.length; e++) Bc(s, t[e]);
  else
    throw new RangeError("Unsupported child node: " + t);
}
let yt = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Wo = typeof document < "u" ? document : { documentElement: { style: {} } };
const Mo = /* @__PURE__ */ /Edge\/(\d+)/.exec(yt.userAgent), Wc = /* @__PURE__ */ /MSIE \d/.test(yt.userAgent), Ao = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(yt.userAgent), pr = !!(Wc || Ao || Mo), wa = !pr && /* @__PURE__ */ /gecko\/(\d+)/i.test(yt.userAgent), Yr = !pr && /* @__PURE__ */ /Chrome\/(\d+)/.exec(yt.userAgent), ya = "webkitFontSmoothing" in Wo.documentElement.style, Lo = !pr && /* @__PURE__ */ /Apple Computer/.test(yt.vendor), ba = Lo && (/* @__PURE__ */ /Mobile\/\w+/.test(yt.userAgent) || yt.maxTouchPoints > 2);
var R = {
  mac: ba || /* @__PURE__ */ /Mac/.test(yt.platform),
  windows: /* @__PURE__ */ /Win/.test(yt.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(yt.platform),
  ie: pr,
  ie_version: Wc ? Wo.documentMode || 6 : Ao ? +Ao[1] : Mo ? +Mo[1] : 0,
  gecko: wa,
  gecko_version: wa ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(yt.userAgent) || [0, 0])[1] : 0,
  chrome: !!Yr,
  chrome_version: Yr ? +Yr[1] : 0,
  ios: ba,
  android: /* @__PURE__ */ /Android\b/.test(yt.userAgent),
  webkit: ya,
  webkit_version: ya ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(yt.userAgent) || [0, 0])[1] : 0,
  safari: Lo,
  safari_version: Lo ? +(/* @__PURE__ */ /\bVersion\/(\d+(\.\d+)?)/.exec(yt.userAgent) || [0, 0])[1] : 0,
  tabSize: Wo.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
function kl(s, t) {
  for (let e in s)
    e == "class" && t.class ? t.class += " " + s.class : e == "style" && t.style ? t.style += ";" + s.style : t[e] = s[e];
  return t;
}
const Gn = /* @__PURE__ */ Object.create(null);
function Sl(s, t, e) {
  if (s == t)
    return !0;
  s || (s = Gn), t || (t = Gn);
  let i = Object.keys(s), n = Object.keys(t);
  if (i.length - 0 != n.length - 0)
    return !1;
  for (let r of i)
    if (r != e && (n.indexOf(r) == -1 || s[r] !== t[r]))
      return !1;
  return !0;
}
function wp(s, t) {
  for (let e = s.attributes.length - 1; e >= 0; e--) {
    let i = s.attributes[e].name;
    t[i] == null && s.removeAttribute(i);
  }
  for (let e in t) {
    let i = t[e];
    e == "style" ? s.style.cssText = i : s.getAttribute(e) != i && s.setAttribute(e, i);
  }
}
function Oa(s, t, e) {
  let i = !1;
  if (t)
    for (let n in t)
      e && n in e || (i = !0, n == "style" ? s.style.cssText = "" : s.removeAttribute(n));
  if (e)
    for (let n in e)
      t && t[n] == e[n] || (i = !0, n == "style" ? s.style.cssText = e[n] : s.setAttribute(n, e[n]));
  return i;
}
function yp(s) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e = 0; e < s.attributes.length; e++) {
    let i = s.attributes[e];
    t[i.name] = i.value;
  }
  return t;
}
class Ee {
  /**
  Compare this instance to another instance of the same type.
  (TypeScript can't express this, but only instances of the same
  specific class will be passed to this method.) This is used to
  avoid redrawing widgets when they are replaced by a new
  decoration of the same type. The default implementation just
  returns `false`, which will cause new instances of the widget to
  always be redrawn.
  */
  eq(t) {
    return !1;
  }
  /**
  Update a DOM element created by a widget of the same type (but
  different, non-`eq` content) to reflect this widget. May return
  true to indicate that it could update, false to indicate it
  couldn't (in which case the widget will be redrawn). The default
  implementation just returns false.
  */
  updateDOM(t, e, i) {
    return !1;
  }
  /**
  @internal
  */
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  /**
  The estimated height this widget will have, to be used when
  estimating the height of content that hasn't been drawn. May
  return -1 to indicate you don't know. The default implementation
  returns -1.
  */
  get estimatedHeight() {
    return -1;
  }
  /**
  For inline widgets that are displayed inline (as opposed to
  `inline-block`) and introduce line breaks (through `<br>` tags
  or textual newlines), this must indicate the amount of line
  breaks they introduce. Defaults to 0.
  */
  get lineBreaks() {
    return 0;
  }
  /**
  Can be used to configure which kinds of events inside the widget
  should be ignored by the editor. The default is to ignore all
  events.
  */
  ignoreEvent(t) {
    return !0;
  }
  /**
  Override the way screen coordinates for positions at/in the
  widget are found. `pos` will be the offset into the widget, and
  `side` the side of the position that is being queried—less than
  zero for before, greater than zero for after, and zero for
  directly at that position.
  */
  coordsAt(t, e, i) {
    return null;
  }
  /**
  @internal
  */
  get isHidden() {
    return !1;
  }
  /**
  @internal
  */
  get editable() {
    return !1;
  }
  /**
  This is called when the an instance of the widget is removed
  from the editor view.
  */
  destroy(t) {
  }
}
var ut = /* @__PURE__ */ function(s) {
  return s[s.Text = 0] = "Text", s[s.WidgetBefore = 1] = "WidgetBefore", s[s.WidgetAfter = 2] = "WidgetAfter", s[s.WidgetRange = 3] = "WidgetRange", s;
}(ut || (ut = {}));
class N extends We {
  constructor(t, e, i, n) {
    super(), this.startSide = t, this.endSide = e, this.widget = i, this.spec = n;
  }
  /**
  @internal
  */
  get heightRelevant() {
    return !1;
  }
  /**
  Create a mark decoration, which influences the styling of the
  content in its range. Nested mark decorations will cause nested
  DOM elements to be created. Nesting order is determined by
  precedence of the [facet](https://codemirror.net/6/docs/ref/#view.EditorView^decorations), with
  the higher-precedence decorations creating the inner DOM nodes.
  Such elements are split on line boundaries and on the boundaries
  of lower-precedence decorations.
  */
  static mark(t) {
    return new zs(t);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(t) {
    let e = Math.max(-1e4, Math.min(1e4, t.side || 0)), i = !!t.block;
    return e += i && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new ci(t, e, e, i, t.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(t) {
    let e = !!t.block, i, n;
    if (t.isBlockGap)
      i = -5e8, n = 4e8;
    else {
      let { start: r, end: o } = Mc(t, e);
      i = (r ? e ? -3e8 : -1 : 5e8) - 1, n = (o ? e ? 2e8 : 1 : -6e8) + 1;
    }
    return new ci(t, i, n, e, t.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(t) {
    return new Gs(t);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(t, e = !1) {
    return Q.of(t, e);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
N.none = Q.empty;
class zs extends N {
  constructor(t) {
    let { start: e, end: i } = Mc(t);
    super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.attrs = t.class && t.attributes ? kl(t.attributes, { class: t.class }) : t.class ? { class: t.class } : t.attributes || Gn;
  }
  eq(t) {
    return this == t || t instanceof zs && this.tagName == t.tagName && Sl(this.attrs, t.attrs);
  }
  range(t, e = t) {
    if (t >= e)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(t, e);
  }
}
zs.prototype.point = !1;
class Gs extends N {
  constructor(t) {
    super(-2e8, -2e8, null, t);
  }
  eq(t) {
    return t instanceof Gs && this.spec.class == t.spec.class && Sl(this.spec.attributes, t.spec.attributes);
  }
  range(t, e = t) {
    if (e != t)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(t, e);
  }
}
Gs.prototype.mapMode = bt.TrackBefore;
Gs.prototype.point = !0;
class ci extends N {
  constructor(t, e, i, n, r, o) {
    super(e, i, r, t), this.block = n, this.isReplace = o, this.mapMode = n ? e <= 0 ? bt.TrackBefore : bt.TrackAfter : bt.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? ut.WidgetRange : this.startSide <= 0 ? ut.WidgetBefore : ut.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t) {
    return t instanceof ci && bp(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
  }
  range(t, e = t) {
    if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e != t)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t, e);
  }
}
ci.prototype.point = !0;
function Mc(s, t = !1) {
  let { inclusiveStart: e, inclusiveEnd: i } = s;
  return e == null && (e = s.inclusive), i == null && (i = s.inclusive), { start: e ?? t, end: i ?? t };
}
function bp(s, t) {
  return s == t || !!(s && t && s.compare(t));
}
function zi(s, t, e, i = 0) {
  let n = e.length - 1;
  n >= 0 && e[n] + i >= s ? e[n] = Math.max(e[n], t) : e.push(s, t);
}
class ks extends We {
  constructor(t, e) {
    super(), this.tagName = t, this.attributes = e;
  }
  eq(t) {
    return t == this || t instanceof ks && this.tagName == t.tagName && Sl(this.attributes, t.attributes);
  }
  /**
  Create a block wrapper object with the given tag name and
  attributes.
  */
  static create(t) {
    return new ks(t.tagName, t.attributes || Gn);
  }
  /**
  Create a range set from the given block wrapper ranges.
  */
  static set(t, e = !1) {
    return Q.of(t, e);
  }
}
ks.prototype.startSide = ks.prototype.endSide = -1;
function Ss(s) {
  let t;
  return s.nodeType == 11 ? t = s.getSelection ? s : s.ownerDocument : t = s, t.getSelection();
}
function Zo(s, t) {
  return t ? s == t || s.contains(t.nodeType != 1 ? t.parentNode : t) : !1;
}
function ms(s, t) {
  if (!t.anchorNode)
    return !1;
  try {
    return Zo(s, t.anchorNode);
  } catch {
    return !1;
  }
}
function kn(s) {
  return s.nodeType == 3 ? vs(s, 0, s.nodeValue.length).getClientRects() : s.nodeType == 1 ? s.getClientRects() : [];
}
function gs(s, t, e, i) {
  return e ? xa(s, t, e, i, -1) || xa(s, t, e, i, 1) : !1;
}
function Le(s) {
  for (var t = 0; ; t++)
    if (s = s.previousSibling, !s)
      return t;
}
function Qn(s) {
  return s.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(s.nodeName);
}
function xa(s, t, e, i, n) {
  for (; ; ) {
    if (s == e && t == i)
      return !0;
    if (t == (n < 0 ? 0 : Re(s))) {
      if (s.nodeName == "DIV")
        return !1;
      let r = s.parentNode;
      if (!r || r.nodeType != 1)
        return !1;
      t = Le(s) + (n < 0 ? 0 : 1), s = r;
    } else if (s.nodeType == 1) {
      if (s = s.childNodes[t + (n < 0 ? -1 : 0)], s.nodeType == 1 && s.contentEditable == "false")
        return !1;
      t = n < 0 ? Re(s) : 0;
    } else
      return !1;
  }
}
function Re(s) {
  return s.nodeType == 3 ? s.nodeValue.length : s.childNodes.length;
}
function Bn(s, t) {
  let e = t ? s.left : s.right;
  return { left: e, right: e, top: s.top, bottom: s.bottom };
}
function Op(s) {
  let t = s.visualViewport;
  return t ? {
    left: 0,
    right: t.width,
    top: 0,
    bottom: t.height
  } : {
    left: 0,
    right: s.innerWidth,
    top: 0,
    bottom: s.innerHeight
  };
}
function Ac(s, t) {
  let e = t.width / s.offsetWidth, i = t.height / s.offsetHeight;
  return (e > 0.995 && e < 1.005 || !isFinite(e) || Math.abs(t.width - s.offsetWidth) < 1) && (e = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(t.height - s.offsetHeight) < 1) && (i = 1), { scaleX: e, scaleY: i };
}
function xp(s, t, e, i, n, r, o, l) {
  let a = s.ownerDocument, h = a.defaultView || window;
  for (let c = s, f = !1; c && !f; )
    if (c.nodeType == 1) {
      let u, d = c == a.body, p = 1, m = 1;
      if (d)
        u = Op(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = !0), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let y = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: m } = Ac(c, y)), u = {
          left: y.left,
          right: y.left + c.clientWidth * p,
          top: y.top,
          bottom: y.top + c.clientHeight * m
        };
      }
      let g = 0, w = 0;
      if (n == "nearest")
        t.top < u.top + o ? (w = t.top - (u.top + o), e > 0 && t.bottom > u.bottom + w && (w = t.bottom - u.bottom + o)) : t.bottom > u.bottom - o && (w = t.bottom - u.bottom + o, e < 0 && t.top - w < u.top && (w = t.top - (u.top + o)));
      else {
        let y = t.bottom - t.top, b = u.bottom - u.top;
        w = (n == "center" && y <= b ? t.top + y / 2 - b / 2 : n == "start" || n == "center" && e < 0 ? t.top - o : t.bottom - b + o) - u.top;
      }
      if (i == "nearest" ? t.left < u.left + r ? (g = t.left - (u.left + r), e > 0 && t.right > u.right + g && (g = t.right - u.right + r)) : t.right > u.right - r && (g = t.right - u.right + r, e < 0 && t.left < u.left + g && (g = t.left - (u.left + r))) : g = (i == "center" ? t.left + (t.right - t.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? t.left - r : t.right - (u.right - u.left) + r) - u.left, g || w)
        if (d)
          h.scrollBy(g, w);
        else {
          let y = 0, b = 0;
          if (w) {
            let v = c.scrollTop;
            c.scrollTop += w / m, b = (c.scrollTop - v) * m;
          }
          if (g) {
            let v = c.scrollLeft;
            c.scrollLeft += g / p, y = (c.scrollLeft - v) * p;
          }
          t = {
            left: t.left - y,
            top: t.top - b,
            right: t.right - y,
            bottom: t.bottom - b
          }, y && Math.abs(y - g) < 1 && (i = "nearest"), b && Math.abs(b - w) < 1 && (n = "nearest");
        }
      if (d)
        break;
      (t.top < u.top || t.bottom > u.bottom || t.left < u.left || t.right > u.right) && (t = {
        left: Math.max(t.left, u.left),
        right: Math.min(t.right, u.right),
        top: Math.max(t.top, u.top),
        bottom: Math.min(t.bottom, u.bottom)
      }), c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function Lc(s, t = !0) {
  let e = s.ownerDocument, i = null, n = null;
  for (let r = s.parentNode; r && !(r == e.body || (!t || i) && n); )
    if (r.nodeType == 1)
      !n && r.scrollHeight > r.clientHeight && (n = r), t && !i && r.scrollWidth > r.clientWidth && (i = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11)
      r = r.host;
    else
      break;
  return { x: i, y: n };
}
class kp {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t) {
    return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
  }
  setRange(t) {
    let { anchorNode: e, focusNode: i } = t;
    this.set(e, Math.min(t.anchorOffset, e ? Re(e) : 0), i, Math.min(t.focusOffset, i ? Re(i) : 0));
  }
  set(t, e, i, n) {
    this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = n;
  }
}
let ti = null;
R.safari && R.safari_version >= 26 && (ti = !1);
function Zc(s) {
  if (s.setActive)
    return s.setActive();
  if (ti)
    return s.focus(ti);
  let t = [];
  for (let e = s; e && (t.push(e, e.scrollTop, e.scrollLeft), e != e.ownerDocument); e = e.parentNode)
    ;
  if (s.focus(ti == null ? {
    get preventScroll() {
      return ti = { preventScroll: !0 }, !0;
    }
  } : void 0), !ti) {
    ti = !1;
    for (let e = 0; e < t.length; ) {
      let i = t[e++], n = t[e++], r = t[e++];
      i.scrollTop != n && (i.scrollTop = n), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let ka;
function vs(s, t, e = t) {
  let i = ka || (ka = document.createRange());
  return i.setEnd(s, e), i.setStart(s, t), i;
}
function Gi(s, t, e, i) {
  let n = { key: t, code: t, keyCode: e, which: e, cancelable: !0 };
  i && ({ altKey: n.altKey, ctrlKey: n.ctrlKey, shiftKey: n.shiftKey, metaKey: n.metaKey } = i);
  let r = new KeyboardEvent("keydown", n);
  r.synthetic = !0, s.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", n);
  return o.synthetic = !0, s.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function Sp(s) {
  for (; s; ) {
    if (s && (s.nodeType == 9 || s.nodeType == 11 && s.host))
      return s;
    s = s.assignedSlot || s.parentNode;
  }
  return null;
}
function vp(s, t) {
  let e = t.focusNode, i = t.focusOffset;
  if (!e || t.anchorNode != e || t.anchorOffset != i)
    return !1;
  for (i = Math.min(i, Re(e)); ; )
    if (i) {
      if (e.nodeType != 1)
        return !1;
      let n = e.childNodes[i - 1];
      n.contentEditable == "false" ? i-- : (e = n, i = Re(e));
    } else {
      if (e == s)
        return !0;
      i = Le(e), e = e.parentNode;
    }
}
function _c(s) {
  return s instanceof Window ? s.pageYOffset > Math.max(0, s.document.documentElement.scrollHeight - s.innerHeight - 4) : s.scrollTop > Math.max(1, s.scrollHeight - s.clientHeight - 4);
}
function qc(s, t) {
  for (let e = s, i = t; ; ) {
    if (e.nodeType == 3 && i > 0)
      return { node: e, offset: i };
    if (e.nodeType == 1 && i > 0) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[i - 1], i = Re(e);
    } else if (e.parentNode && !Qn(e))
      i = Le(e), e = e.parentNode;
    else
      return null;
  }
}
function Fc(s, t) {
  for (let e = s, i = t; ; ) {
    if (e.nodeType == 3 && i < e.nodeValue.length)
      return { node: e, offset: i };
    if (e.nodeType == 1 && i < e.childNodes.length) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[i], i = 0;
    } else if (e.parentNode && !Qn(e))
      i = Le(e) + 1, e = e.parentNode;
    else
      return null;
  }
}
class Ft {
  constructor(t, e, i = !0) {
    this.node = t, this.offset = e, this.precise = i;
  }
  static before(t, e) {
    return new Ft(t.parentNode, Le(t), e);
  }
  static after(t, e) {
    return new Ft(t.parentNode, Le(t) + 1, e);
  }
}
var I = /* @__PURE__ */ function(s) {
  return s[s.LTR = 0] = "LTR", s[s.RTL = 1] = "RTL", s;
}(I || (I = {}));
const fi = I.LTR, vl = I.RTL;
function Ic(s) {
  let t = [];
  for (let e = 0; e < s.length; e++)
    t.push(1 << +s[e]);
  return t;
}
const Cp = /* @__PURE__ */ Ic("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Dp = /* @__PURE__ */ Ic("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), _o = /* @__PURE__ */ Object.create(null), ie = [];
for (let s of ["()", "[]", "{}"]) {
  let t = /* @__PURE__ */ s.charCodeAt(0), e = /* @__PURE__ */ s.charCodeAt(1);
  _o[t] = e, _o[e] = -t;
}
function Uc(s) {
  return s <= 247 ? Cp[s] : 1424 <= s && s <= 1524 ? 2 : 1536 <= s && s <= 1785 ? Dp[s - 1536] : 1774 <= s && s <= 2220 ? 4 : 8192 <= s && s <= 8204 ? 256 : 64336 <= s && s <= 65023 ? 4 : 1;
}
const Rp = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class he {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? vl : fi;
  }
  /**
  @internal
  */
  constructor(t, e, i) {
    this.from = t, this.to = e, this.level = i;
  }
  /**
  @internal
  */
  side(t, e) {
    return this.dir == e == t ? this.to : this.from;
  }
  /**
  @internal
  */
  forward(t, e) {
    return t == (this.dir == e);
  }
  /**
  @internal
  */
  static find(t, e, i, n) {
    let r = -1;
    for (let o = 0; o < t.length; o++) {
      let l = t[o];
      if (l.from <= e && l.to >= e) {
        if (l.level == i)
          return o;
        (r < 0 || (n != 0 ? n < 0 ? l.from < e : l.to > e : t[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function Vc(s, t) {
  if (s.length != t.length)
    return !1;
  for (let e = 0; e < s.length; e++) {
    let i = s[e], n = t[e];
    if (i.from != n.from || i.to != n.to || i.direction != n.direction || !Vc(i.inner, n.inner))
      return !1;
  }
  return !0;
}
const F = [];
function Tp(s, t, e, i, n) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : t, l = r < i.length ? i[r].from : e, a = r ? 256 : n;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = Uc(s.charCodeAt(h));
      u == 512 ? u = c : u == 8 && f == 4 && (u = 16), F[h] = u == 4 ? 2 : u, u & 7 && (f = u), c = u;
    }
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = F[h];
      if (u == 128)
        h < l - 1 && c == F[h + 1] && c & 24 ? u = F[h] = c : F[h] = 256;
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && F[d] == 64; )
          d++;
        let p = h && c == 8 || d < e && F[d] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let m = h; m < d; m++)
          F[m] = p;
        h = d - 1;
      } else u == 8 && f == 1 && (F[h] = 1);
      c = u, u & 7 && (f = u);
    }
  }
}
function Hp(s, t, e, i, n) {
  let r = n == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : t, c = o < i.length ? i[o].from : e;
    for (let f = h, u, d, p; f < c; f++)
      if (d = _o[u = s.charCodeAt(f)])
        if (d < 0) {
          for (let m = l - 3; m >= 0; m -= 3)
            if (ie[m + 1] == -d) {
              let g = ie[m + 2], w = g & 2 ? n : g & 4 ? g & 1 ? r : n : 0;
              w && (F[f] = F[ie[m]] = w), l = m;
              break;
            }
        } else {
          if (ie.length == 189)
            break;
          ie[l++] = f, ie[l++] = u, ie[l++] = a;
        }
      else if ((p = F[f]) == 2 || p == 1) {
        let m = p == n;
        a = m ? 0 : 1;
        for (let g = l - 3; g >= 0; g -= 3) {
          let w = ie[g + 2];
          if (w & 2)
            break;
          if (m)
            ie[g + 2] |= 2;
          else {
            if (w & 4)
              break;
            ie[g + 2] |= 4;
          }
        }
      }
  }
}
function Ep(s, t, e, i) {
  for (let n = 0, r = i; n <= e.length; n++) {
    let o = n ? e[n - 1].to : s, l = n < e.length ? e[n].from : t;
    for (let a = o; a < l; ) {
      let h = F[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; )
          if (c == l) {
            if (n == e.length)
              break;
            c = e[n++].to, l = n < e.length ? e[n].from : t;
          } else if (F[c] == 256)
            c++;
          else
            break;
        let f = r == 1, u = (c < t ? F[c] : i) == 1, d = f == u ? f ? 1 : 2 : i;
        for (let p = c, m = n, g = m ? e[m - 1].to : s; p > a; )
          p == g && (p = e[--m].from, g = m ? e[m - 1].to : s), F[--p] = d;
        a = c;
      } else
        r = h, a++;
    }
  }
}
function qo(s, t, e, i, n, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == n % 2)
    for (let a = t, h = 0; a < e; ) {
      let c = !0, f = !1;
      if (h == r.length || a < r[h].from) {
        let m = F[a];
        m != l && (c = !1, f = m == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      t: for (; ; )
        if (h < r.length && p == r[h].from) {
          if (f)
            break t;
          let m = r[h];
          if (!c)
            for (let g = m.to, w = h + 1; ; ) {
              if (g == e)
                break t;
              if (w < r.length && r[w].from == g)
                g = r[w++].to;
              else {
                if (F[g] == l)
                  break t;
                break;
              }
            }
          if (h++, u)
            u.push(m);
          else {
            m.from > a && o.push(new he(a, m.from, d));
            let g = m.direction == fi != !(d % 2);
            Fo(s, g ? i + 1 : i, n, m.inner, m.from, m.to, o), a = m.to;
          }
          p = m.to;
        } else {
          if (p == e || (c ? F[p] != l : F[p] == l))
            break;
          p++;
        }
      u ? qo(s, a, p, i + 1, n, u, o) : a < p && o.push(new he(a, p, d)), a = p;
    }
  else
    for (let a = e, h = r.length; a > t; ) {
      let c = !0, f = !1;
      if (!h || a > r[h - 1].to) {
        let m = F[a - 1];
        m != l && (c = !1, f = m == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      t: for (; ; )
        if (h && p == r[h - 1].to) {
          if (f)
            break t;
          let m = r[--h];
          if (!c)
            for (let g = m.from, w = h; ; ) {
              if (g == t)
                break t;
              if (w && r[w - 1].to == g)
                g = r[--w].from;
              else {
                if (F[g - 1] == l)
                  break t;
                break;
              }
            }
          if (u)
            u.push(m);
          else {
            m.to < a && o.push(new he(m.to, a, d));
            let g = m.direction == fi != !(d % 2);
            Fo(s, g ? i + 1 : i, n, m.inner, m.from, m.to, o), a = m.from;
          }
          p = m.from;
        } else {
          if (p == t || (c ? F[p - 1] != l : F[p - 1] == l))
            break;
          p--;
        }
      u ? qo(s, p, a, i + 1, n, u, o) : p < a && o.push(new he(p, a, d)), a = p;
    }
}
function Fo(s, t, e, i, n, r, o) {
  let l = t % 2 ? 2 : 1;
  Tp(s, n, r, i, l), Hp(s, n, r, i, l), Ep(n, r, i, l), qo(s, n, r, t, e, i, o);
}
function jp(s, t, e) {
  if (!s)
    return [new he(0, 0, t == vl ? 1 : 0)];
  if (t == fi && !e.length && !Rp.test(s))
    return Xc(s.length);
  if (e.length)
    for (; s.length > F.length; )
      F[F.length] = 256;
  let i = [], n = t == fi ? 0 : 1;
  return Fo(s, n, n, e, 0, s.length, i), i;
}
function Xc(s) {
  return [new he(0, s, 0)];
}
let Kc = "";
function Pp(s, t, e, i, n) {
  var r;
  let o = i.head - s.from, l = he.find(t, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), a = t[l], h = a.side(n, e);
  if (o == h) {
    let u = l += n ? 1 : -1;
    if (u < 0 || u >= t.length)
      return null;
    a = t[l = u], o = a.side(!n, e), h = a.side(n, e);
  }
  let c = at(s.text, o, a.forward(n, e));
  (c < a.from || c > a.to) && (c = h), Kc = s.text.slice(Math.min(o, c), Math.max(o, c));
  let f = l == (n ? t.length - 1 : 0) ? null : t[l + (n ? 1 : -1)];
  return f && c == h && f.level + (n ? 0 : 1) < a.level ? x.cursor(f.side(!n, e) + s.from, f.forward(n, e) ? 1 : -1, f.level) : x.cursor(c + s.from, a.forward(n, e) ? -1 : 1, a.level);
}
function Np(s, t, e) {
  for (let i = t; i < e; i++) {
    let n = Uc(s.charCodeAt(i));
    if (n == 1)
      return fi;
    if (n == 2 || n == 4)
      return vl;
  }
  return fi;
}
const Jc = /* @__PURE__ */ T.define(), tf = /* @__PURE__ */ T.define(), ef = /* @__PURE__ */ T.define(), sf = /* @__PURE__ */ T.define(), Io = /* @__PURE__ */ T.define(), nf = /* @__PURE__ */ T.define(), rf = /* @__PURE__ */ T.define(), Cl = /* @__PURE__ */ T.define(), Dl = /* @__PURE__ */ T.define(), of = /* @__PURE__ */ T.define({
  combine: (s) => s.some((t) => t)
}), lf = /* @__PURE__ */ T.define({
  combine: (s) => s.some((t) => t)
}), af = /* @__PURE__ */ T.define();
class Qi {
  constructor(t, e, i, n, r, o = !1) {
    this.range = t, this.y = e, this.x = i, this.yMargin = n, this.xMargin = r, this.isSnapshot = o;
  }
  map(t) {
    return t.empty ? this : new Qi(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(t) {
    return this.range.to <= t.doc.length ? this : new Qi(x.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Fs = /* @__PURE__ */ Y.define({ map: (s, t) => s.map(t) }), hf = /* @__PURE__ */ Y.define();
function Dt(s, t, e) {
  let i = s.facet(sf);
  i.length ? i[0](t) : window.onerror && window.onerror(String(t), e, void 0, void 0, t) || (e ? console.error(e + ":", t) : console.error(t));
}
const ke = /* @__PURE__ */ T.define({ combine: (s) => s.length ? s[0] : !0 });
let Yp = 0;
const Hi = /* @__PURE__ */ T.define({
  combine(s) {
    return s.filter((t, e) => {
      for (let i = 0; i < e; i++)
        if (s[i].plugin == t.plugin)
          return !1;
      return !0;
    });
  }
});
class st {
  constructor(t, e, i, n, r) {
    this.id = t, this.create = e, this.domEventHandlers = i, this.domEventObservers = n, this.baseExtensions = r(this), this.extension = this.baseExtensions.concat(Hi.of({ plugin: this, arg: void 0 }));
  }
  /**
  Create an extension for this plugin with the given argument.
  */
  of(t) {
    return this.baseExtensions.concat(Hi.of({ plugin: this, arg: t }));
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(t, e) {
    const { eventHandlers: i, eventObservers: n, provide: r, decorations: o } = e || {};
    return new st(Yp++, t, i, n, (l) => {
      let a = [];
      return o && a.push(mr.of((h) => {
        let c = h.plugin(l);
        return c ? o(c) : N.none;
      })), r && a.push(r(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(t, e) {
    return st.define((i, n) => new t(i, n), e);
  }
}
class zr {
  constructor(t) {
    this.spec = t, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(t) {
    if (this.value) {
      if (this.mustUpdate) {
        let e = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(e);
          } catch (i) {
            if (Dt(e.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.plugin.create(t, this.spec.arg);
      } catch (e) {
        Dt(t.state, e, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(t) {
    var e;
    if (!((e = this.value) === null || e === void 0) && e.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        Dt(t.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const cf = /* @__PURE__ */ T.define(), Rl = /* @__PURE__ */ T.define(), mr = /* @__PURE__ */ T.define(), ff = /* @__PURE__ */ T.define(), Tl = /* @__PURE__ */ T.define(), Qs = /* @__PURE__ */ T.define(), uf = /* @__PURE__ */ T.define();
function Sa(s, t) {
  let e = s.state.facet(uf);
  if (!e.length)
    return e;
  let i = e.map((r) => r instanceof Function ? r(s) : r), n = [];
  return Q.spans(i, t.from, t.to, {
    point() {
    },
    span(r, o, l, a) {
      let h = r - t.from, c = o - t.from, f = n;
      for (let u = l.length - 1; u >= 0; u--, a--) {
        let d = l[u].spec.bidiIsolate, p;
        if (d == null && (d = Np(t.text, h, c)), a > 0 && f.length && (p = f[f.length - 1]).to == h && p.direction == d)
          p.to = c, f = p.inner;
        else {
          let m = { from: h, to: c, direction: d, inner: [] };
          f.push(m), f = m.inner;
        }
      }
    }
  }), n;
}
const df = /* @__PURE__ */ T.define();
function Hl(s) {
  let t = 0, e = 0, i = 0, n = 0;
  for (let r of s.state.facet(df)) {
    let o = r(s);
    o && (o.left != null && (t = Math.max(t, o.left)), o.right != null && (e = Math.max(e, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (n = Math.max(n, o.bottom)));
  }
  return { left: t, right: e, top: i, bottom: n };
}
const hs = /* @__PURE__ */ T.define();
class Wt {
  constructor(t, e, i, n) {
    this.fromA = t, this.toA = e, this.fromB = i, this.toB = n;
  }
  join(t) {
    return new Wt(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
  }
  addToSet(t) {
    let e = t.length, i = this;
    for (; e > 0; e--) {
      let n = t[e - 1];
      if (!(n.fromA > i.toA)) {
        if (n.toA < i.fromA)
          break;
        i = i.join(n), t.splice(e - 1, 1);
      }
    }
    return t.splice(e, 0, i), t;
  }
  // Extend a set to cover all the content in `ranges`, which is a
  // flat array with each pair of numbers representing fromB/toB
  // positions. These pairs are generated in unchanged ranges, so the
  // offset between doc A and doc B is the same for their start and
  // end points.
  static extendWithRanges(t, e) {
    if (e.length == 0)
      return t;
    let i = [];
    for (let n = 0, r = 0, o = 0; ; ) {
      let l = n < t.length ? t[n].fromB : 1e9, a = r < e.length ? e[r] : 1e9, h = Math.min(l, a);
      if (h == 1e9)
        break;
      let c = h + o, f = h, u = c;
      for (; ; )
        if (r < e.length && e[r] <= f) {
          let d = e[r + 1];
          r += 2, f = Math.max(f, d);
          for (let p = n; p < t.length && t[p].fromB <= f; p++)
            o = t[p].toA - t[p].toB;
          u = Math.max(u, d + o);
        } else if (n < t.length && t[n].fromB <= f) {
          let d = t[n++];
          f = Math.max(f, d.toB), u = Math.max(u, d.toA), o = d.toA - d.toB;
        } else
          break;
      i.push(new Wt(c, u, h, f));
    }
    return i;
  }
}
class Wn {
  constructor(t, e, i) {
    this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = rt.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let n = [];
    this.changes.iterChangedRanges((r, o, l, a) => n.push(new Wt(r, o, l, a))), this.changedRanges = n;
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Wn(t, e, i);
  }
  /**
  Tells you whether the [viewport](https://codemirror.net/6/docs/ref/#view.EditorView.viewport) or
  [visible ranges](https://codemirror.net/6/docs/ref/#view.EditorView.visibleRanges) changed in this
  update.
  */
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  /**
  Returns true when
  [`viewportChanged`](https://codemirror.net/6/docs/ref/#view.ViewUpdate.viewportChanged) is true
  and the viewport change is not just the result of mapping it in
  response to document changes.
  */
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  /**
  Indicates whether the height of a block element in the editor
  changed in this update.
  */
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  /**
  Returns true when the document was modified or the size of the
  editor, or elements within the editor, changed.
  */
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  /**
  True when this update indicates a focus change.
  */
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  /**
  Whether the document changed in this update.
  */
  get docChanged() {
    return !this.changes.empty;
  }
  /**
  Whether the selection was explicitly set in this update.
  */
  get selectionSet() {
    return this.transactions.some((t) => t.selection);
  }
  /**
  @internal
  */
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
const zp = [];
class et {
  constructor(t, e, i = 0) {
    this.dom = t, this.length = e, this.flags = i, this.parent = null, t.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return zp;
  }
  isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  isComposite() {
    return !1;
  }
  isLine() {
    return !1;
  }
  isText() {
    return !1;
  }
  isBlock() {
    return !1;
  }
  get domAttrs() {
    return null;
  }
  sync(t) {
    if (this.flags |= 2, this.flags & 4) {
      this.flags &= -5;
      let e = this.domAttrs;
      e && wp(this.dom, e);
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
  }
  destroy() {
    this.parent = null;
  }
  setDOM(t) {
    this.dom = t, t.cmTile = this;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(t, e = this.posAtStart) {
    let i = e;
    for (let n of this.children) {
      if (n == t)
        return i;
      i += n.length + n.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(t) {
    return this.posBefore(t) + t.length;
  }
  covers(t) {
    return !0;
  }
  coordsIn(t, e) {
    return null;
  }
  domPosFor(t, e) {
    let i = Le(this.dom), n = this.length ? t > 0 : e > 0;
    return new Ft(this.parent.dom, i + (n ? 1 : 0), t == 0 || t == this.length);
  }
  markDirty(t) {
    this.flags &= -3, t && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let t = this; t; t = t.parent)
      if (t instanceof $r)
        return t;
    return null;
  }
  static get(t) {
    return t.cmTile;
  }
}
class gr extends et {
  constructor(t) {
    super(t, 0), this._children = [];
  }
  isComposite() {
    return !0;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : null;
  }
  append(t) {
    this.children.push(t), t.parent = this;
  }
  sync(t) {
    if (this.flags & 2)
      return;
    super.sync(t);
    let e = this.dom, i = null, n, r = (t == null ? void 0 : t.node) == e ? t : null, o = 0;
    for (let l of this.children) {
      if (l.sync(t), o += l.length + l.breakAfter, n = i ? i.nextSibling : e.firstChild, r && n != l.dom && (r.written = !0), l.dom.parentNode == e)
        for (; n && n != l.dom; )
          n = va(n);
      else
        e.insertBefore(l.dom, n);
      i = l.dom;
    }
    for (n = i ? i.nextSibling : e.firstChild, r && n && (r.written = !0); n; )
      n = va(n);
    this.length = o;
  }
}
function va(s) {
  let t = s.nextSibling;
  return s.parentNode.removeChild(s), t;
}
class $r extends gr {
  constructor(t, e) {
    super(e), this.view = t;
  }
  owns(t) {
    for (; t; t = t.parent)
      if (t == this)
        return !0;
    return !1;
  }
  isBlock() {
    return !0;
  }
  nearest(t) {
    for (; ; ) {
      if (!t)
        return null;
      let e = et.get(t);
      if (e && this.owns(e))
        return e;
      t = t.parentNode;
    }
  }
  blockTiles(t) {
    for (let e = [], i = this, n = 0, r = 0; ; )
      if (n == i.children.length) {
        if (!e.length)
          return;
        i = i.parent, i.breakAfter && r++, n = e.pop();
      } else {
        let o = i.children[n++];
        if (o instanceof ve)
          e.push(n), i = o, n = 0;
        else {
          let l = r + o.length, a = t(o, r);
          if (a !== void 0)
            return a;
          r = l + o.breakAfter;
        }
      }
  }
  // Find the block at the given position. If side < -1, make sure to
  // stay before block widgets at that position, if side > 1, after
  // such widgets (used for selection drawing, which needs to be able
  // to get coordinates for positions that aren't valid cursor positions).
  resolveBlock(t, e) {
    let i, n = -1, r, o = -1;
    if (this.blockTiles((l, a) => {
      let h = a + l.length;
      if (t >= a && t <= h) {
        if (l.isWidget() && e >= -1 && e <= 1) {
          if (l.flags & 32)
            return !0;
          l.flags & 16 && (i = void 0);
        }
        (a < t || t == h && (e < -1 ? l.length : l.covers(1))) && (!i || !l.isWidget() && i.isWidget()) && (i = l, n = t - a), (h > t || t == a && (e > 1 ? l.length : l.covers(-1))) && (!r || !l.isWidget() && r.isWidget()) && (r = l, o = t - a);
      }
    }), !i && !r)
      throw new Error("No tile at position " + t);
    return i && e < 0 || !r ? { tile: i, offset: n } : { tile: r, offset: o };
  }
}
class ve extends gr {
  constructor(t, e) {
    super(t), this.wrapper = e;
  }
  isBlock() {
    return !0;
  }
  covers(t) {
    return this.children.length ? t < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : !1;
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(t, e) {
    let i = new ve(e || document.createElement(t.tagName), t);
    return e || (i.flags |= 4), i;
  }
}
class Zi extends gr {
  constructor(t, e) {
    super(t), this.attrs = e;
  }
  isLine() {
    return !0;
  }
  static start(t, e, i) {
    let n = new Zi(e || document.createElement("div"), t);
    return (!e || !i) && (n.flags |= 4), n;
  }
  get domAttrs() {
    return this.attrs;
  }
  // Find the tile associated with a given position in this line.
  resolveInline(t, e, i) {
    let n = null, r = -1, o = null, l = -1;
    function a(c, f) {
      for (let u = 0, d = 0; u < c.children.length && d <= f; u++) {
        let p = c.children[u], m = d + p.length;
        m >= f && (p.isComposite() ? a(p, f - d) : (!o || o.isHidden && (e > 0 || i && Qp(o, p))) && (m > f || p.flags & 32) ? (o = p, l = f - d) : (d < f || p.flags & 16 && !p.isHidden) && (n = p, r = f - d)), d = m;
      }
    }
    a(this, t);
    let h = (e < 0 ? n : o) || n || o;
    return h ? { tile: h, offset: h == n ? r : l } : null;
  }
  coordsIn(t, e) {
    let i = this.resolveInline(t, e, !0);
    return i ? i.tile.coordsIn(Math.max(0, i.offset), e) : Gp(this);
  }
  domIn(t, e) {
    let i = this.resolveInline(t, e);
    if (i) {
      let { tile: n, offset: r } = i;
      if (this.dom.contains(n.dom))
        return n.isText() ? new Ft(n.dom, Math.min(n.dom.nodeValue.length, r)) : n.domPosFor(r, n.flags & 16 ? 1 : n.flags & 32 ? -1 : e);
      let o = i.tile.parent, l = !1;
      for (let a of o.children) {
        if (l)
          return new Ft(a.dom, 0);
        a == i.tile && (l = !0);
      }
    }
    return new Ft(this.dom, 0);
  }
}
function Gp(s) {
  let t = s.dom.lastChild;
  if (!t)
    return s.dom.getBoundingClientRect();
  let e = kn(t);
  return e[e.length - 1] || null;
}
function Qp(s, t) {
  let e = s.coordsIn(0, 1), i = t.coordsIn(0, 1);
  return e && i && i.top < e.bottom;
}
class Ct extends gr {
  constructor(t, e) {
    super(t), this.mark = e;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(t, e) {
    let i = new Ct(e || document.createElement(t.tagName), t);
    return e || (i.flags |= 4), i;
  }
}
class ri extends et {
  constructor(t, e) {
    super(t, e.length), this.text = e;
  }
  sync(t) {
    this.flags & 2 || (super.sync(t), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = !0), this.dom.nodeValue = this.text));
  }
  isText() {
    return !0;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(t, e) {
    let i = this.dom.nodeValue.length;
    t > i && (t = i);
    let n = t, r = t, o = 0;
    t == 0 && e < 0 || t == i && e >= 0 ? R.chrome || R.gecko || (t ? (n--, o = 1) : r < i && (r++, o = -1)) : e < 0 ? n-- : r < i && r++;
    let l = vs(this.dom, n, r).getClientRects();
    if (!l.length)
      return null;
    let a = l[(o ? o < 0 : e >= 0) ? 0 : l.length - 1];
    return R.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? Bn(a, o < 0) : a || null;
  }
  static of(t, e) {
    let i = new ri(e || document.createTextNode(t), t);
    return e || (i.flags |= 2), i;
  }
}
class ui extends et {
  constructor(t, e, i, n) {
    super(t, e, n), this.widget = i;
  }
  isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(t) {
    return this.flags & 48 ? !1 : (this.flags & (t < 0 ? 64 : 128)) > 0;
  }
  coordsIn(t, e) {
    return this.coordsInWidget(t, e, !1);
  }
  coordsInWidget(t, e, i) {
    let n = this.widget.coordsAt(this.dom, t, e);
    if (n)
      return n;
    if (i)
      return Bn(this.dom.getBoundingClientRect(), this.length ? t == 0 : e <= 0);
    {
      let r = this.dom.getClientRects(), o = null;
      if (!r.length)
        return null;
      let l = this.flags & 16 ? !0 : this.flags & 32 ? !1 : t > 0;
      for (let a = l ? r.length - 1 : 0; o = r[a], !(t > 0 ? a == 0 : a == r.length - 1 || o.top < o.bottom); a += l ? -1 : 1)
        ;
      return Bn(o, !l);
    }
  }
  get overrideDOMText() {
    if (!this.length)
      return A.empty;
    let { root: t } = this;
    if (!t)
      return A.empty;
    let e = this.posAtStart;
    return t.view.state.doc.slice(e, e + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(t, e, i, n, r) {
    return r || (r = t.toDOM(e), t.editable || (r.contentEditable = "false")), new ui(r, i, t, n);
  }
}
class Mn extends et {
  constructor(t) {
    let e = document.createElement("img");
    e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), super(e, 0, t);
  }
  get isHidden() {
    return !0;
  }
  get overrideDOMText() {
    return A.empty;
  }
  coordsIn(t) {
    return this.dom.getBoundingClientRect();
  }
}
class Bp {
  constructor(t) {
    this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = t;
  }
  // Advance by the given distance. If side is -1, stop leaving or
  // entering tiles, or skipping zero-length tiles, once the distance
  // has been traversed. When side is 1, leave, enter, or skip
  // everything at the end position.
  advance(t, e, i) {
    let { tile: n, index: r, beforeBreak: o, parents: l } = this;
    for (; t || e > 0; )
      if (n.isComposite())
        if (o) {
          if (!t)
            break;
          i && i.break(), t--, o = !1;
        } else if (r == n.children.length) {
          if (!t && !l.length)
            break;
          i && i.leave(n), o = !!n.breakAfter, { tile: n, index: r } = l.pop(), r++;
        } else {
          let a = n.children[r], h = a.breakAfter;
          (e > 0 ? a.length <= t : a.length < t) && (!i || i.skip(a, 0, a.length) !== !1 || !a.isComposite) ? (o = !!h, r++, t -= a.length) : (l.push({ tile: n, index: r }), n = a, r = 0, i && a.isComposite() && i.enter(a));
        }
      else if (r == n.length)
        o = !!n.breakAfter, { tile: n, index: r } = l.pop(), r++;
      else if (t) {
        let a = Math.min(t, n.length - r);
        i && i.skip(n, r, r + a), t -= a, r += a;
      } else
        break;
    return this.tile = n, this.index = r, this.beforeBreak = o, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class Wp {
  constructor(t, e, i, n) {
    this.from = t, this.to = e, this.wrapper = i, this.rank = n;
  }
}
class Mp {
  constructor(t, e, i) {
    this.cache = t, this.root = e, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(t, e, i, n) {
    var r;
    this.flushBuffer();
    let o = this.ensureMarks(e, i), l = o.lastChild;
    if (l && l.isText() && !(l.flags & 8) && l.length + t.length < 512) {
      this.cache.reused.set(
        l,
        2
        /* Reused.DOM */
      );
      let a = o.children[o.children.length - 1] = new ri(l.dom, l.text + t);
      a.parent = o;
    } else
      o.append(n || ri.of(t, (r = this.cache.find(ri)) === null || r === void 0 ? void 0 : r.dom));
    this.pos += t.length, this.afterWidget = null;
  }
  addComposition(t, e) {
    let i = this.curLine;
    i.dom != e.line.dom && (i.setDOM(this.cache.reused.has(e.line) ? Gr(e.line.dom) : e.line.dom), this.cache.reused.set(
      e.line,
      2
      /* Reused.DOM */
    ));
    let n = i;
    for (let l = e.marks.length - 1; l >= 0; l--) {
      let a = e.marks[l], h = n.lastChild;
      if (h instanceof Ct && h.mark.eq(a.mark))
        h.dom != a.dom && h.setDOM(Gr(a.dom)), n = h;
      else {
        if (this.cache.reused.get(a)) {
          let f = et.get(a.dom);
          f && f.setDOM(Gr(a.dom));
        }
        let c = Ct.of(a.mark, a.dom);
        n.append(c), n = c;
      }
      this.cache.reused.set(
        a,
        2
        /* Reused.DOM */
      );
    }
    let r = et.get(t.text);
    r && this.cache.reused.set(
      r,
      2
      /* Reused.DOM */
    );
    let o = new ri(t.text, t.text.nodeValue);
    o.flags |= 8, n.append(o);
  }
  addInlineWidget(t, e, i) {
    let n = this.afterWidget && t.flags & 48 && (this.afterWidget.flags & 48) == (t.flags & 48);
    n || this.flushBuffer();
    let r = this.ensureMarks(e, i);
    !n && !(t.flags & 16) && r.append(this.getBuffer(1)), r.append(t), this.pos += t.length, this.afterWidget = t;
  }
  addMark(t, e, i) {
    this.flushBuffer(), this.ensureMarks(e, i).append(t), this.pos += t.length, this.afterWidget = null;
  }
  addBlockWidget(t) {
    this.getBlockPos().append(t), this.pos += t.length, this.lastBlock = t, this.endLine();
  }
  continueWidget(t) {
    let e = this.afterWidget || this.lastBlock;
    e.length += t, this.pos += t;
  }
  addLineStart(t, e) {
    var i;
    t || (t = pf);
    let n = Zi.start(t, e || ((i = this.cache.find(Zi)) === null || i === void 0 ? void 0 : i.dom), !!e);
    this.getBlockPos().append(this.lastBlock = this.curLine = n);
  }
  addLine(t) {
    this.getBlockPos().append(t), this.pos += t.length, this.lastBlock = t, this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1, this.endLine(), this.pos++;
  }
  addLineStartIfNotCovered(t) {
    this.blockPosCovered() || this.addLineStart(t);
  }
  ensureLine(t) {
    this.curLine || this.addLineStart(t);
  }
  ensureMarks(t, e) {
    var i;
    let n = this.curLine;
    for (let r = t.length - 1; r >= 0; r--) {
      let o = t[r], l;
      if (e > 0 && (l = n.lastChild) && l instanceof Ct && l.mark.eq(o))
        n = l, e--;
      else {
        let a = Ct.of(o, (i = this.cache.find(Ct, (h) => h.mark.eq(o))) === null || i === void 0 ? void 0 : i.dom);
        n.append(a), n = a, e = 0;
      }
    }
    return n;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let t = this.curLine.lastChild;
      (!t || !Ca(this.curLine, !1) || t.dom.nodeName != "BR" && t.isWidget() && !(R.ios && Ca(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(
        Qr,
        0,
        32
        /* TileFlag.After */
      ) || new ui(
        Qr.toDOM(),
        0,
        Qr,
        32
        /* TileFlag.After */
      )), this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
    for (let t = this.wrappers.length - 1; t >= 0; t--)
      this.wrappers[t].to < this.pos && this.wrappers.splice(t, 1);
    for (let t = this.blockWrappers; t.value && t.from <= this.pos; t.next())
      if (t.to >= this.pos) {
        let e = new Wp(t.from, t.to, t.value, t.rank), i = this.wrappers.length;
        for (; i > 0 && (this.wrappers[i - 1].rank - e.rank || this.wrappers[i - 1].to - e.to) < 0; )
          i--;
        this.wrappers.splice(i, 0, e);
      }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var t;
    this.updateBlockWrappers();
    let e = this.root;
    for (let i of this.wrappers) {
      let n = e.lastChild;
      if (i.from < this.pos && n instanceof ve && n.wrapper.eq(i.wrapper))
        e = n;
      else {
        let r = ve.of(i.wrapper, (t = this.cache.find(ve, (o) => o.wrapper.eq(i.wrapper))) === null || t === void 0 ? void 0 : t.dom);
        e.append(r), e = r;
      }
    }
    return e;
  }
  blockPosCovered() {
    let t = this.lastBlock;
    return t != null && !t.breakAfter && (!t.isWidget() || (t.flags & 160) > 0);
  }
  getBuffer(t) {
    let e = 2 | (t < 0 ? 16 : 32), i = this.cache.find(
      Mn,
      void 0,
      1
      /* Reused.Full */
    );
    return i && (i.flags = e), i || new Mn(e);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class Ap {
  constructor(t) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = t.iter();
  }
  skip(t) {
    this.textOff + t <= this.text.length ? this.textOff += t : (this.skipCount += t - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(t) {
    if (this.textOff == this.text.length) {
      let { value: n, lineBreak: r, done: o } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, o)
        throw new Error("Ran out of text content when drawing inline views");
      this.text = n;
      let l = this.textOff = Math.min(t, n.length);
      return r ? null : n.slice(0, l);
    }
    let e = Math.min(this.text.length, this.textOff + t), i = this.text.slice(this.textOff, e);
    return this.textOff = e, i;
  }
}
const An = [ui, Zi, ri, Ct, Mn, ve, $r];
for (let s = 0; s < An.length; s++)
  An[s].bucket = s;
class Lp {
  constructor(t) {
    this.view = t, this.buckets = An.map(() => []), this.index = An.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  // Put a tile in the cache.
  add(t) {
    let e = t.constructor.bucket, i = this.buckets[e];
    i.length < 6 ? i.push(t) : i[
      this.index[e] = (this.index[e] + 1) % 6
      /* C.Bucket */
    ] = t;
  }
  find(t, e, i = 2) {
    let n = t.bucket, r = this.buckets[n], o = this.index[n];
    for (let l = r.length - 1; l >= 0; l--) {
      let a = (l + o) % r.length, h = r[a];
      if ((!e || e(h)) && !this.reused.has(h))
        return r.splice(a, 1), a < o && this.index[n]--, this.reused.set(h, i), h;
    }
    return null;
  }
  findWidget(t, e, i) {
    let n = this.buckets[0];
    if (n.length)
      for (let r = 0, o = 0; ; r++) {
        if (r == n.length) {
          if (o)
            return null;
          o = 1, r = 0;
        }
        let l = n[r];
        if (!this.reused.has(l) && (o == 0 ? l.widget.compare(t) : l.widget.constructor == t.constructor && t.updateDOM(l.dom, this.view, l.widget)))
          return n.splice(r, 1), r < this.index[0] && this.index[0]--, l.widget == t && l.length == e && (l.flags & 497) == i ? (this.reused.set(
            l,
            1
            /* Reused.Full */
          ), l) : (this.reused.set(
            l,
            2
            /* Reused.DOM */
          ), new ui(l.dom, e, t, l.flags & -498 | i));
      }
  }
  reuse(t) {
    return this.reused.set(
      t,
      1
      /* Reused.Full */
    ), t;
  }
  maybeReuse(t, e = 2) {
    if (!this.reused.has(t))
      return this.reused.set(t, e), t.dom;
  }
  clear() {
    for (let t = 0; t < this.buckets.length; t++)
      this.buckets[t].length = this.index[t] = 0;
  }
}
class Zp {
  constructor(t, e, i, n, r) {
    this.view = t, this.decorations = n, this.disallowBlockEffectsFor = r, this.openWidget = !1, this.openMarks = 0, this.cache = new Lp(t), this.text = new Ap(t.state.doc), this.builder = new Mp(this.cache, new $r(t, t.contentDOM), Q.iter(i)), this.cache.reused.set(
      e,
      2
      /* Reused.DOM */
    ), this.old = new Bp(e), this.reuseWalker = {
      skip: (o, l, a) => {
        if (this.cache.add(o), o.isComposite())
          return !1;
      },
      enter: (o) => this.cache.add(o),
      leave: () => {
      },
      break: () => {
      }
    };
  }
  run(t, e) {
    let i = e && this.getCompositionContext(e.text);
    for (let n = 0, r = 0, o = 0; ; ) {
      let l = o < t.length ? t[o++] : null, a = l ? l.fromA : this.old.root.length;
      if (a > n) {
        let h = a - n;
        this.preserve(h, !o, !l), n = a, r += h;
      }
      if (!l)
        break;
      e && l.fromA <= e.range.fromA && l.toA >= e.range.toA ? (this.forward(l.fromA, e.range.fromA, e.range.fromA < e.range.toA ? 1 : -1), this.emit(r, e.range.fromB), this.cache.clear(), this.builder.addComposition(e, i), this.text.skip(e.range.toB - e.range.fromB), this.forward(e.range.fromA, l.toA), this.emit(e.range.toB, l.toB)) : (this.forward(l.fromA, l.toA), this.emit(r, l.toB)), r = l.toB, n = l.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(t, e, i) {
    let n = Fp(this.old), r = this.openMarks;
    this.old.advance(t, i ? 1 : -1, {
      skip: (o, l, a) => {
        if (o.isWidget())
          if (this.openWidget)
            this.builder.continueWidget(a - l);
          else {
            let h = a > 0 || l < o.length ? ui.of(o.widget, this.view, a - l, o.flags & 496, this.cache.maybeReuse(o)) : this.cache.reuse(o);
            h.flags & 256 ? (h.flags &= -2, this.builder.addBlockWidget(h)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(h, n, r), r = n.length);
          }
        else if (o.isText())
          this.builder.ensureLine(null), !l && a == o.length && !this.cache.reused.has(o) ? this.builder.addText(o.text, n, r, this.cache.reuse(o)) : (this.cache.add(o), this.builder.addText(o.text.slice(l, a), n, r)), r = n.length;
        else if (o.isLine())
          o.flags &= -2, this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), this.builder.addLine(o);
        else if (o instanceof Mn)
          this.cache.add(o);
        else if (o instanceof Ct)
          this.builder.ensureLine(null), this.builder.addMark(o, n, r), this.cache.reused.set(
            o,
            1
            /* Reused.Full */
          ), r = n.length;
        else
          return !1;
        this.openWidget = !1;
      },
      enter: (o) => {
        o.isLine() ? this.builder.addLineStart(o.attrs, this.cache.maybeReuse(o)) : (this.cache.add(o), o instanceof Ct && n.unshift(o.mark)), this.openWidget = !1;
      },
      leave: (o) => {
        o.isLine() ? n.length && (n.length = r = 0) : o instanceof Ct && (n.shift(), r = Math.min(r, n.length));
      },
      break: () => {
        this.builder.addBreak(), this.openWidget = !1;
      }
    }), this.text.skip(t);
  }
  emit(t, e) {
    let i = null, n = this.builder, r = 0, o = Q.spans(this.decorations, t, e, {
      point: (l, a, h, c, f, u) => {
        if (h instanceof ci) {
          if (this.disallowBlockEffectsFor[u]) {
            if (h.block)
              throw new RangeError("Block decorations may not be specified via plugins");
            if (a > this.view.state.doc.lineAt(l).to)
              throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
          }
          if (r = c.length, f > c.length)
            n.continueWidget(a - l);
          else {
            let d = h.widget || (h.block ? _i.block : _i.inline), p = _p(h), m = this.cache.findWidget(d, a - l, p) || ui.of(d, this.view, a - l, p);
            h.block ? (h.startSide > 0 && n.addLineStartIfNotCovered(i), n.addBlockWidget(m)) : (n.ensureLine(i), n.addInlineWidget(m, c, f));
          }
          i = null;
        } else
          i = qp(i, h);
        a > l && this.text.skip(a - l);
      },
      span: (l, a, h, c) => {
        for (let f = l; f < a; ) {
          let u = this.text.next(Math.min(512, a - f));
          u == null ? (n.addLineStartIfNotCovered(i), n.addBreak(), f++) : (n.ensureLine(i), n.addText(u, h, f == l ? c : h.length), f += u.length), i = null;
        }
      }
    });
    n.addLineStartIfNotCovered(i), this.openWidget = o > r, this.openMarks = o;
  }
  forward(t, e, i = 1) {
    e - t <= 10 ? this.old.advance(e - t, i, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(e - t - 10, -1), this.old.advance(5, i, this.reuseWalker));
  }
  getCompositionContext(t) {
    let e = [], i = null;
    for (let n = t.parentNode; ; n = n.parentNode) {
      let r = et.get(n);
      if (n == this.view.contentDOM)
        break;
      r instanceof Ct ? e.push(r) : r != null && r.isLine() ? i = r : r instanceof ve || (n.nodeName == "DIV" && !i && n != this.view.contentDOM ? i = new Zi(n, pf) : i || e.push(Ct.of(new zs({ tagName: n.nodeName.toLowerCase(), attributes: yp(n) }), n)));
    }
    return { line: i, marks: e };
  }
}
function Ca(s, t) {
  let e = (i) => {
    for (let n of i.children)
      if ((t ? n.isText() : n.length) || e(n))
        return !0;
    return !1;
  };
  return e(s);
}
function _p(s) {
  let t = s.isReplace ? (s.startSide < 0 ? 64 : 0) | (s.endSide > 0 ? 128 : 0) : s.startSide > 0 ? 32 : 16;
  return s.block && (t |= 256), t;
}
const pf = { class: "cm-line" };
function qp(s, t) {
  let e = t.spec.attributes, i = t.spec.class;
  return !e && !i || (s || (s = { class: "cm-line" }), e && kl(e, s), i && (s.class += " " + i)), s;
}
function Fp(s) {
  let t = [];
  for (let e = s.parents.length; e > 1; e--) {
    let i = e == s.parents.length ? s.tile : s.parents[e].tile;
    i instanceof Ct && t.push(i.mark);
  }
  return t;
}
function Gr(s) {
  let t = et.get(s);
  return t && t.setDOM(s.cloneNode()), s;
}
class _i extends Ee {
  constructor(t) {
    super(), this.tag = t;
  }
  eq(t) {
    return t.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t) {
    return t.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
_i.inline = /* @__PURE__ */ new _i("span");
_i.block = /* @__PURE__ */ new _i("div");
const Qr = /* @__PURE__ */ new class extends Ee {
  toDOM() {
    return document.createElement("br");
  }
  get isHidden() {
    return !0;
  }
  get editable() {
    return !0;
  }
}();
class Da {
  constructor(t) {
    this.view = t, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = N.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new $r(t, t.contentDOM), this.updateInner([new Wt(0, 0, 0, t.state.doc.length)], null);
  }
  // Update the document view to a given state.
  update(t) {
    var e;
    let i = t.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: c, toA: f }) => f < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t);
    let n = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e = this.domChanged) === null || e === void 0) && e.newSel ? n = this.domChanged.newSel.head : !im(t.changes, this.hasComposition) && !t.selectionSet && (n = t.state.selection.main.head));
    let r = n > -1 ? Up(this.view, t.changes, n) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: c, to: f } = this.hasComposition;
      i = new Wt(c, f, t.changes.mapPos(c, -1), t.changes.mapPos(f, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (R.ie || R.chrome) && !r && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.blockWrappers;
    this.updateDeco();
    let a = Kp(o, this.decorations, t.changes);
    a.length && (i = Wt.extendWithRanges(i, a));
    let h = tm(l, this.blockWrappers, t.changes);
    return h.length && (i = Wt.extendWithRanges(i, h)), r && !i.some((c) => c.fromA <= r.range.fromA && c.toA >= r.range.toA) && (i = r.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? !1 : (this.updateInner(i, r), t.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(t, e) {
    this.view.viewState.mustMeasureContent = !0;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (e || t.length) {
        let o = this.tile, l = new Zp(this.view, o, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        e && et.get(e.text) && l.cache.reused.set(
          et.get(e.text),
          2
          /* Reused.DOM */
        ), this.tile = l.run(t, e), Uo(o, l.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r = R.chrome || R.ios ? { node: i.selectionRange.focusNode, written: !1 } : void 0;
      this.tile.sync(r), r && (r.written || i.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
    });
    let n = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let r of this.tile.children)
        r.isWidget() && r.widget instanceof Br && n.push(r.dom);
    i.updateGaps(n);
  }
  updateEditContextFormatting(t) {
    this.editContextFormatting = this.editContextFormatting.map(t.changes);
    for (let e of t.transactions)
      for (let i of e.effects)
        i.is(hf) && (this.editContextFormatting = i.value);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(t = !1, e = !1) {
    (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, n = this.view.root.activeElement, r = n == i, o = !r && !(this.view.state.facet(ke) || i.tabIndex > -1) && ms(i, this.view.observer.selectionRange) && !(n && i.contains(n));
    if (!(r || e || o))
      return;
    let l = this.forceSelection;
    this.forceSelection = !1;
    let a = this.view.state.selection.main, h, c;
    if (a.empty ? c = h = this.inlineDOMNearPos(a.anchor, a.assoc || 1) : (c = this.inlineDOMNearPos(a.head, a.head == a.from ? 1 : -1), h = this.inlineDOMNearPos(a.anchor, a.anchor == a.from ? 1 : -1)), R.gecko && a.empty && !this.hasComposition && Ip(h)) {
      let u = document.createTextNode("");
      this.view.observer.ignore(() => h.node.insertBefore(u, h.node.childNodes[h.offset] || null)), h = c = new Ft(u, 0), l = !0;
    }
    let f = this.view.observer.selectionRange;
    (l || !f.focusNode || (!gs(h.node, h.offset, f.anchorNode, f.anchorOffset) || !gs(c.node, c.offset, f.focusNode, f.focusOffset)) && !this.suppressWidgetCursorChange(f, a)) && (this.view.observer.ignore(() => {
      R.android && R.chrome && i.contains(f.focusNode) && em(f.focusNode, i) && (i.blur(), i.focus({ preventScroll: !0 }));
      let u = Ss(this.view.root);
      if (u) if (a.empty) {
        if (R.gecko) {
          let d = Vp(h.node, h.offset);
          if (d && d != 3) {
            let p = (d == 1 ? qc : Fc)(h.node, h.offset);
            p && (h = new Ft(p.node, p.offset));
          }
        }
        u.collapse(h.node, h.offset), a.bidiLevel != null && u.caretBidiLevel !== void 0 && (u.caretBidiLevel = a.bidiLevel);
      } else if (u.extend) {
        u.collapse(h.node, h.offset);
        try {
          u.extend(c.node, c.offset);
        } catch {
        }
      } else {
        let d = document.createRange();
        a.anchor > a.head && ([h, c] = [c, h]), d.setEnd(c.node, c.offset), d.setStart(h.node, h.offset), u.removeAllRanges(), u.addRange(d);
      }
      o && this.view.root.activeElement == i && (i.blur(), n && n.focus());
    }), this.view.observer.setSelectionRange(h, c)), this.impreciseAnchor = h.precise ? null : new Ft(f.anchorNode, f.anchorOffset), this.impreciseHead = c.precise ? null : new Ft(f.focusNode, f.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(t, e) {
    return this.hasComposition && e.empty && gs(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: t } = this, e = t.state.selection.main, i = Ss(t.root), { anchorNode: n, anchorOffset: r } = t.observer.selectionRange;
    if (!i || !e.empty || !e.assoc || !i.modify)
      return;
    let o = this.lineAt(e.head, e.assoc);
    if (!o)
      return;
    let l = o.posAtStart;
    if (e.head == l || e.head == l + o.length)
      return;
    let a = this.coordsAt(e.head, -1), h = this.coordsAt(e.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let c = this.domAtPos(e.head + e.assoc, e.assoc);
    i.collapse(c.node, c.offset), i.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
    let f = t.observer.selectionRange;
    t.docView.posFromDOM(f.anchorNode, f.anchorOffset) != e.from && i.collapse(n, r);
  }
  posFromDOM(t, e) {
    let i = this.tile.nearest(t);
    if (!i)
      return this.tile.dom.compareDocumentPosition(t) & 2 ? 0 : this.view.state.doc.length;
    let n = i.posAtStart;
    if (i.isComposite()) {
      let r;
      if (t == i.dom)
        r = i.dom.childNodes[e];
      else {
        let o = Re(t) == 0 ? 0 : e == 0 ? -1 : 1;
        for (; ; ) {
          let l = t.parentNode;
          if (l == i.dom)
            break;
          o == 0 && l.firstChild != l.lastChild && (t == l.firstChild ? o = -1 : o = 1), t = l;
        }
        o < 0 ? r = t : r = t.nextSibling;
      }
      if (r == i.dom.firstChild)
        return n;
      for (; r && !et.get(r); )
        r = r.nextSibling;
      if (!r)
        return n + i.length;
      for (let o = 0, l = n; ; o++) {
        let a = i.children[o];
        if (a.dom == r)
          return l;
        l += a.length + a.breakAfter;
      }
    } else return i.isText() ? t == i.dom ? n + e : n + (e ? i.length : 0) : n;
  }
  domAtPos(t, e) {
    let { tile: i, offset: n } = this.tile.resolveBlock(t, e);
    return i.isWidget() ? i.domPosFor(t, e) : i.domIn(n, e);
  }
  inlineDOMNearPos(t, e) {
    let i, n = -1, r = !1, o, l = -1, a = !1;
    return this.tile.blockTiles((h, c) => {
      if (h.isWidget()) {
        if (h.flags & 32 && c >= t)
          return !0;
        h.flags & 16 && (r = !0);
      } else {
        let f = c + h.length;
        if (c <= t && (i = h, n = t - c, r = f < t), f >= t && !o && (o = h, l = t - c, a = c > t), c > t && o)
          return !0;
      }
    }), !i && !o ? this.domAtPos(t, e) : (r && o ? i = null : a && i && (o = null), i && e < 0 || !o ? i.domIn(n, e) : o.domIn(l, e));
  }
  coordsAt(t, e) {
    let { tile: i, offset: n } = this.tile.resolveBlock(t, e);
    return i.isWidget() ? i.widget instanceof Br ? null : i.coordsInWidget(n, e, !0) : i.coordsIn(n, e);
  }
  lineAt(t, e) {
    let { tile: i } = this.tile.resolveBlock(t, e);
    return i.isLine() ? i : null;
  }
  coordsForChar(t) {
    let { tile: e, offset: i } = this.tile.resolveBlock(t, 1);
    if (!e.isLine())
      return null;
    function n(r, o) {
      if (r.isComposite())
        for (let l of r.children) {
          if (l.length >= o) {
            let a = n(l, o);
            if (a)
              return a;
          }
          if (o -= l.length, o < 0)
            break;
        }
      else if (r.isText() && o < r.length) {
        let l = at(r.text, o);
        if (l == o)
          return null;
        let a = vs(r.dom, o, l).getClientRects();
        for (let h = 0; h < a.length; h++) {
          let c = a[h];
          if (h == a.length - 1 || c.top < c.bottom && c.left < c.right)
            return c;
        }
      }
      return null;
    }
    return n(e, i);
  }
  measureVisibleLineHeights(t) {
    let e = [], { from: i, to: n } = t, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == I.LTR, h = 0, c = (f, u, d) => {
      for (let p = 0; p < f.children.length && !(u > n); p++) {
        let m = f.children[p], g = u + m.length, w = m.dom.getBoundingClientRect(), { height: y } = w;
        if (d && !p && (h += w.top - d.top), m instanceof ve)
          g > i && c(m, u, w);
        else if (u >= i && (h > 0 && e.push(-h), e.push(y + h), h = 0, o)) {
          let b = m.dom.lastChild, v = b ? kn(b) : [];
          if (v.length) {
            let k = v[v.length - 1], S = a ? k.right - w.left : w.right - k.left;
            S > l && (l = S, this.minWidth = r, this.minWidthFrom = u, this.minWidthTo = g);
          }
        }
        d && p == f.children.length - 1 && (h += d.bottom - w.bottom), u = g + m.breakAfter;
      }
    };
    return c(this.tile, 0, null), e;
  }
  textDirectionAt(t) {
    let { tile: e } = this.tile.resolveBlock(t, 1);
    return getComputedStyle(e.dom).direction == "rtl" ? I.RTL : I.LTR;
  }
  measureTextSize() {
    let t = this.tile.blockTiles((o) => {
      if (o.isLine() && o.children.length && o.length <= 20) {
        let l = 0, a;
        for (let h of o.children) {
          if (!h.isText() || /[^ -~]/.test(h.text))
            return;
          let c = kn(h.dom);
          if (c.length != 1)
            return;
          l += c[0].width, a = c[0].height;
        }
        if (l)
          return {
            lineHeight: o.dom.getBoundingClientRect().height,
            charWidth: l / o.length,
            textHeight: a
          };
      }
    });
    if (t)
      return t;
    let e = document.createElement("div"), i, n, r;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(e);
      let o = kn(e.firstChild)[0];
      i = e.getBoundingClientRect().height, n = o && o.width ? o.width / 27 : 7, r = o && o.height ? o.height : i, e.remove();
    }), { lineHeight: i, charWidth: n, textHeight: r };
  }
  computeBlockGapDeco() {
    let t = [], e = this.view.viewState;
    for (let i = 0, n = 0; ; n++) {
      let r = n == e.viewports.length ? null : e.viewports[n], o = r ? r.from - 1 : this.view.state.doc.length;
      if (o > i) {
        let l = (e.lineBlockAt(o).bottom - e.lineBlockAt(i).top) / this.view.scaleY;
        t.push(N.replace({
          widget: new Br(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return N.set(t);
  }
  updateDeco() {
    let t = 1, e = this.view.state.facet(mr).map((r) => (this.dynamicDecorationMap[t++] = typeof r == "function") ? r(this.view) : r), i = !1, n = this.view.state.facet(Tl).map((r, o) => {
      let l = typeof r == "function";
      return l && (i = !0), l ? r(this.view) : r;
    });
    for (n.length && (this.dynamicDecorationMap[t++] = i, e.push(Q.join(n))), this.decorations = [
      this.editContextFormatting,
      ...e,
      this.computeBlockGapDeco(),
      this.view.viewState.lineGapDeco
    ]; t < this.decorations.length; )
      this.dynamicDecorationMap[t++] = !1;
    this.blockWrappers = this.view.state.facet(ff).map((r) => typeof r == "function" ? r(this.view) : r);
  }
  scrollIntoView(t) {
    var e;
    if (t.isSnapshot) {
      let c = this.view.viewState.lineBlockAt(t.range.head);
      this.view.scrollDOM.scrollTop = c.top - t.yMargin, this.view.scrollDOM.scrollLeft = t.xMargin;
      return;
    }
    for (let c of this.view.state.facet(af))
      try {
        if (c(this.view, t.range, t))
          return !0;
      } catch (f) {
        Dt(this.view.state, f, "scroll handler");
      }
    let { range: i } = t, n = this.coordsAt(i.head, (e = i.assoc) !== null && e !== void 0 ? e : i.empty ? 0 : i.head > i.anchor ? -1 : 1), r;
    if (!n)
      return;
    !i.empty && (r = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) && (n = {
      left: Math.min(n.left, r.left),
      top: Math.min(n.top, r.top),
      right: Math.max(n.right, r.right),
      bottom: Math.max(n.bottom, r.bottom)
    });
    let o = Hl(this.view), l = {
      left: n.left - o.left,
      top: n.top - o.top,
      right: n.right + o.right,
      bottom: n.bottom + o.bottom
    }, { offsetWidth: a, offsetHeight: h } = this.view.scrollDOM;
    if (xp(this.view.scrollDOM, l, i.head < i.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, a), -a), Math.max(Math.min(t.yMargin, h), -h), this.view.textDirection == I.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (n.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || n.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
      let c = this.view.docView.lineAt(i.head, 1);
      c && c.dom.scrollIntoView({ block: "nearest" });
    }
  }
  lineHasWidget(t) {
    let e = (i) => i.isWidget() || i.children.some(e);
    return e(this.tile.resolveBlock(t, 1).tile);
  }
  destroy() {
    Uo(this.tile);
  }
}
function Uo(s, t) {
  let e = t == null ? void 0 : t.get(s);
  if (e != 1) {
    e == null && s.destroy();
    for (let i of s.children)
      Uo(i, t);
  }
}
function Ip(s) {
  return s.node.nodeType == 1 && s.node.firstChild && (s.offset == 0 || s.node.childNodes[s.offset - 1].contentEditable == "false") && (s.offset == s.node.childNodes.length || s.node.childNodes[s.offset].contentEditable == "false");
}
function mf(s, t) {
  let e = s.observer.selectionRange;
  if (!e.focusNode)
    return null;
  let i = qc(e.focusNode, e.focusOffset), n = Fc(e.focusNode, e.focusOffset), r = i || n;
  if (n && i && n.node != i.node) {
    let l = et.get(n.node);
    if (!l || l.isText() && l.text != n.node.nodeValue)
      r = n;
    else if (s.docView.lastCompositionAfterCursor) {
      let a = et.get(i.node);
      !a || a.isText() && a.text != i.node.nodeValue || (r = n);
    }
  }
  if (s.docView.lastCompositionAfterCursor = r != i, !r)
    return null;
  let o = t - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function Up(s, t, e) {
  let i = mf(s, e);
  if (!i)
    return null;
  let { node: n, from: r, to: o } = i, l = n.nodeValue;
  if (/[\n\r]/.test(l) || s.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = t.invertedDesc;
  return { range: new Wt(a.mapPos(r), a.mapPos(o), r, o), text: n };
}
function Vp(s, t) {
  return s.nodeType != 1 ? 0 : (t && s.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < s.childNodes.length && s.childNodes[t].contentEditable == "false" ? 2 : 0);
}
let Xp = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t, e) {
    zi(t, e, this.changes);
  }
  comparePoint(t, e) {
    zi(t, e, this.changes);
  }
  boundChange(t) {
    zi(t, t, this.changes);
  }
};
function Kp(s, t, e) {
  let i = new Xp();
  return Q.compare(s, t, e, i), i.changes;
}
class Jp {
  constructor() {
    this.changes = [];
  }
  compareRange(t, e) {
    zi(t, e, this.changes);
  }
  comparePoint() {
  }
  boundChange(t) {
    zi(t, t, this.changes);
  }
}
function tm(s, t, e) {
  let i = new Jp();
  return Q.compare(s, t, e, i), i.changes;
}
function em(s, t) {
  for (let e = s; e && e != t; e = e.assignedSlot || e.parentNode)
    if (e.nodeType == 1 && e.contentEditable == "false")
      return !0;
  return !1;
}
function im(s, t) {
  let e = !1;
  return t && s.iterChangedRanges((i, n) => {
    i < t.to && n > t.from && (e = !0);
  }), e;
}
class Br extends Ee {
  constructor(t) {
    super(), this.height = t;
  }
  toDOM() {
    let t = document.createElement("div");
    return t.className = "cm-gap", this.updateDOM(t), t;
  }
  eq(t) {
    return t.height == this.height;
  }
  updateDOM(t) {
    return t.style.height = this.height + "px", !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
function sm(s, t, e = 1) {
  let i = s.charCategorizer(t), n = s.doc.lineAt(t), r = t - n.from;
  if (n.length == 0)
    return x.cursor(t);
  r == 0 ? e = 1 : r == n.length && (e = -1);
  let o = r, l = r;
  e < 0 ? o = at(n.text, r, !1) : l = at(n.text, r);
  let a = i(n.text.slice(o, l));
  for (; o > 0; ) {
    let h = at(n.text, o, !1);
    if (i(n.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < n.length; ) {
    let h = at(n.text, l);
    if (i(n.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return x.range(o + n.from, l + n.from);
}
function nm(s, t, e, i, n) {
  let r = Math.round((i - t.left) * s.defaultCharacterWidth);
  if (s.lineWrapping && e.height > s.defaultLineHeight * 1.5) {
    let l = s.viewState.heightOracle.textHeight, a = Math.floor((n - e.top - (s.defaultLineHeight - l) * 0.5) / l);
    r += a * s.viewState.heightOracle.lineLength;
  }
  let o = s.state.sliceDoc(e.from, e.to);
  return e.from + Go(o, r, s.state.tabSize);
}
function Vo(s, t, e) {
  let i = s.lineBlockAt(t);
  if (Array.isArray(i.type)) {
    let n;
    for (let r of i.type) {
      if (r.from > t)
        break;
      if (!(r.to < t)) {
        if (r.from < t && r.to > t)
          return r;
        (!n || r.type == ut.Text && (n.type != r.type || (e < 0 ? r.from < t : r.to > t))) && (n = r);
      }
    }
    return n || i;
  }
  return i;
}
function rm(s, t, e, i) {
  let n = Vo(s, t.head, t.assoc || -1), r = !i || n.type != ut.Text || !(s.lineWrapping || n.widgetLineBreaks) ? null : s.coordsAtPos(t.assoc < 0 && t.head > n.from ? t.head - 1 : t.head);
  if (r) {
    let o = s.dom.getBoundingClientRect(), l = s.textDirectionAt(n.from), a = s.posAtCoords({
      x: e == (l == I.LTR) ? o.right - 1 : o.left + 1,
      y: (r.top + r.bottom) / 2
    });
    if (a != null)
      return x.cursor(a, e ? -1 : 1);
  }
  return x.cursor(e ? n.to : n.from, e ? -1 : 1);
}
function Ra(s, t, e, i) {
  let n = s.state.doc.lineAt(t.head), r = s.bidiSpans(n), o = s.textDirectionAt(n.from);
  for (let l = t, a = null; ; ) {
    let h = Pp(n, r, o, l, e), c = Kc;
    if (!h) {
      if (n.number == (e ? s.state.doc.lines : 1))
        return l;
      c = `
`, n = s.state.doc.line(n.number + (e ? 1 : -1)), r = s.bidiSpans(n), h = s.visualLineSide(n, !e);
    }
    if (a) {
      if (!a(c))
        return l;
    } else {
      if (!i)
        return h;
      a = i(c);
    }
    l = h;
  }
}
function om(s, t, e) {
  let i = s.state.charCategorizer(t), n = i(e);
  return (r) => {
    let o = i(r);
    return n == J.Space && (n = o), n == o;
  };
}
function lm(s, t, e, i) {
  let n = t.head, r = e ? 1 : -1;
  if (n == (e ? s.state.doc.length : 0))
    return x.cursor(n, t.assoc);
  let o = t.goalColumn, l, a = s.contentDOM.getBoundingClientRect(), h = s.coordsAtPos(n, t.assoc || ((t.empty ? e : t.head == t.from) ? 1 : -1)), c = s.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = r < 0 ? h.top : h.bottom;
  else {
    let p = s.viewState.lineBlockAt(n);
    o == null && (o = Math.min(a.right - a.left, s.defaultCharacterWidth * (n - p.from))), l = (r < 0 ? p.top : p.bottom) + c;
  }
  let f = a.left + o, u = s.viewState.heightOracle.textHeight >> 1, d = i ?? u;
  for (let p = 0; ; p += u) {
    let m = l + (d + p) * r, g = Xo(s, { x: f, y: m }, !1, r);
    if (e ? m > a.bottom : m < a.top)
      return x.cursor(g.pos, g.assoc);
    let w = s.coordsAtPos(g.pos, g.assoc), y = w ? (w.top + w.bottom) / 2 : 0;
    if (!w || (e ? y > l : y < l))
      return x.cursor(g.pos, g.assoc, void 0, o);
  }
}
function $s(s, t, e) {
  for (; ; ) {
    let i = 0;
    for (let n of s)
      n.between(t - 1, t + 1, (r, o, l) => {
        if (t > r && t < o) {
          let a = i || e || (t - r < o - t ? -1 : 1);
          t = a < 0 ? r : o, i = a;
        }
      });
    if (!i)
      return t;
  }
}
function gf(s, t) {
  let e = null;
  for (let i = 0; i < t.ranges.length; i++) {
    let n = t.ranges[i], r = null;
    if (n.empty) {
      let o = $s(s, n.from, 0);
      o != n.from && (r = x.cursor(o, -1));
    } else {
      let o = $s(s, n.from, -1), l = $s(s, n.to, 1);
      (o != n.from || l != n.to) && (r = x.range(n.from == n.anchor ? o : l, n.from == n.head ? o : l));
    }
    r && (e || (e = t.ranges.slice()), e[i] = r);
  }
  return e ? x.create(e, t.mainIndex) : t;
}
function Wr(s, t, e) {
  let i = $s(s.state.facet(Qs).map((n) => n(s)), e.from, t.head > e.from ? -1 : 1);
  return i == e.from ? e : x.cursor(i, i < e.from ? 1 : -1);
}
class ae {
  constructor(t, e) {
    this.pos = t, this.assoc = e;
  }
}
function Xo(s, t, e, i) {
  let n = s.contentDOM.getBoundingClientRect(), r = n.top + s.viewState.paddingTop, { x: o, y: l } = t, a = l - r, h;
  for (; ; ) {
    if (a < 0)
      return new ae(0, 1);
    if (a > s.viewState.docHeight)
      return new ae(s.state.doc.length, -1);
    if (h = s.elementAtHeight(a), i == null)
      break;
    if (h.type == ut.Text) {
      if (i < 0 ? h.to < s.viewport.from : h.from > s.viewport.to)
        break;
      let u = s.docView.coordsAt(i < 0 ? h.from : h.to, i > 0 ? -1 : 1);
      if (u && (i < 0 ? u.top <= a + r : u.bottom >= a + r))
        break;
    }
    let f = s.viewState.heightOracle.textHeight / 2;
    a = i > 0 ? h.bottom + f : h.top - f;
  }
  if (s.viewport.from >= h.to || s.viewport.to <= h.from) {
    if (e)
      return null;
    if (h.type == ut.Text) {
      let f = nm(s, n, h, o, l);
      return new ae(f, f == h.from ? 1 : -1);
    }
  }
  if (h.type != ut.Text)
    return a < (h.top + h.bottom) / 2 ? new ae(h.from, 1) : new ae(h.to, -1);
  let c = s.docView.lineAt(h.from, 2);
  return (!c || c.length != h.length) && (c = s.docView.lineAt(h.from, -2)), new am(s, o, l, s.textDirectionAt(h.from)).scanTile(c, h.from);
}
class am {
  constructor(t, e, i, n) {
    this.view = t, this.x = e, this.y = i, this.baseDir = n, this.line = null, this.spans = null;
  }
  bidiSpansAt(t) {
    return (!this.line || this.line.from > t || this.line.to < t) && (this.line = this.view.state.doc.lineAt(t), this.spans = this.view.bidiSpans(this.line)), this;
  }
  baseDirAt(t, e) {
    let { line: i, spans: n } = this.bidiSpansAt(t);
    return n[he.find(n, t - i.from, -1, e)].level == this.baseDir;
  }
  dirAt(t, e) {
    let { line: i, spans: n } = this.bidiSpansAt(t);
    return n[he.find(n, t - i.from, -1, e)].dir;
  }
  // Used to short-circuit bidi tests for content with a uniform direction
  bidiIn(t, e) {
    let { spans: i, line: n } = this.bidiSpansAt(t);
    return i.length > 1 || i.length && (i[0].level != this.baseDir || i[0].to + n.from < e);
  }
  // Scan through the rectangles for the content of a tile with inline
  // content, looking for one that overlaps the queried position
  // vertically andis
  // closest horizontally. The caller is responsible for dividing its
  // content into N pieces, and pass an array with N+1 positions
  // (including the position after the last piece). For a text tile,
  // these will be character clusters, for a composite tile, these
  // will be child tiles.
  scan(t, e) {
    let i = 0, n = t.length - 1, r = /* @__PURE__ */ new Set(), o = this.bidiIn(t[0], t[n]), l, a, h = -1, c = 1e9, f;
    t: for (; i < n; ) {
      let d = n - i, p = i + n >> 1;
      e: if (r.has(p)) {
        let g = i + Math.floor(Math.random() * d);
        for (let w = 0; w < d; w++) {
          if (!r.has(g)) {
            p = g;
            break e;
          }
          g++, g == n && (g = i);
        }
        break t;
      }
      r.add(p);
      let m = e(p);
      if (m)
        for (let g = 0; g < m.length; g++) {
          let w = m[g], y = 0;
          if (!(w.width == 0 && m.length > 1)) {
            if (w.bottom < this.y)
              (!l || l.bottom < w.bottom) && (l = w), y = 1;
            else if (w.top > this.y)
              (!a || a.top > w.top) && (a = w), y = -1;
            else {
              let b = w.left > this.x ? this.x - w.left : w.right < this.x ? this.x - w.right : 0, v = Math.abs(b);
              v < c && (h = p, c = v, f = w), b && (y = b < 0 == (this.baseDir == I.LTR) ? -1 : 1);
            }
            y == -1 && (!o || this.baseDirAt(t[p], 1)) ? n = p : y == 1 && (!o || this.baseDirAt(t[p + 1], -1)) && (i = p + 1);
          }
        }
    }
    if (!f) {
      let d = l && (!a || this.y - l.bottom < a.top - this.y) ? l : a;
      return this.y = (d.top + d.bottom) / 2, this.scan(t, e);
    }
    if (c) {
      let { top: d, bottom: p } = f;
      if (l && l.bottom > (d + d + p) / 3)
        return this.y = l.bottom - 1, this.scan(t, e);
      if (a && a.top < (d + p + p) / 3)
        return this.y = a.top + 1, this.scan(t, e);
    }
    let u = (o ? this.dirAt(t[h], 1) : this.baseDir) == I.LTR;
    return {
      i: h,
      // Test whether x is closes to the start or end of this element
      after: this.x > (f.left + f.right) / 2 == u
    };
  }
  scanText(t, e) {
    let i = [];
    for (let r = 0; r < t.length; r = at(t.text, r))
      i.push(e + r);
    i.push(e + t.length);
    let n = this.scan(i, (r) => {
      let o = i[r] - e, l = i[r + 1] - e;
      return vs(t.dom, o, l).getClientRects();
    });
    return n.after ? new ae(i[n.i + 1], -1) : new ae(i[n.i], 1);
  }
  scanTile(t, e) {
    if (!t.length)
      return new ae(e, 1);
    if (t.children.length == 1) {
      let l = t.children[0];
      if (l.isText())
        return this.scanText(l, e);
      if (l.isComposite())
        return this.scanTile(l, e);
    }
    let i = [e];
    for (let l = 0, a = e; l < t.children.length; l++)
      i.push(a += t.children[l].length);
    let n = this.scan(i, (l) => {
      let a = t.children[l];
      return a.flags & 48 ? null : (a.dom.nodeType == 1 ? a.dom : vs(a.dom, 0, a.length)).getClientRects();
    }), r = t.children[n.i], o = i[n.i];
    return r.isText() ? this.scanText(r, o) : r.isComposite() ? this.scanTile(r, o) : n.after ? new ae(i[n.i + 1], -1) : new ae(o, 1);
  }
}
const Ci = "￿";
class hm {
  constructor(t, e) {
    this.points = t, this.view = e, this.text = "", this.lineSeparator = e.state.facet(M.lineSeparator);
  }
  append(t) {
    this.text += t;
  }
  lineBreak() {
    this.text += Ci;
  }
  readRange(t, e) {
    if (!t)
      return this;
    let i = t.parentNode;
    for (let n = t; ; ) {
      this.findPointBefore(i, n);
      let r = this.text.length;
      this.readNode(n);
      let o = et.get(n), l = n.nextSibling;
      if (l == e) {
        o != null && o.breakAfter && !l && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let a = et.get(l);
      (o && a ? o.breakAfter : (o ? o.breakAfter : Qn(n)) || Qn(l) && (n.nodeName != "BR" || o != null && o.isWidget()) && this.text.length > r) && !fm(l, e) && this.lineBreak(), n = l;
    }
    return this.findPointBefore(i, e), this;
  }
  readTextNode(t) {
    let e = t.nodeValue;
    for (let i of this.points)
      i.node == t && (i.pos = this.text.length + Math.min(i.offset, e.length));
    for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = e.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = n.exec(e)) && (r = l.index, o = l[0].length), this.append(e.slice(i, r < 0 ? e.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == t && a.pos > this.text.length && (a.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(t) {
    let e = et.get(t), i = e && e.overrideDOMText;
    if (i != null) {
      this.findPointInside(t, i.length);
      for (let n = i.iter(); !n.next().done; )
        n.lineBreak ? this.lineBreak() : this.append(n.value);
    } else t.nodeType == 3 ? this.readTextNode(t) : t.nodeName == "BR" ? t.nextSibling && this.lineBreak() : t.nodeType == 1 && this.readRange(t.firstChild, null);
  }
  findPointBefore(t, e) {
    for (let i of this.points)
      i.node == t && t.childNodes[i.offset] == e && (i.pos = this.text.length);
  }
  findPointInside(t, e) {
    for (let i of this.points)
      (t.nodeType == 3 ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + (cm(t, i.node, i.offset) ? e : 0));
  }
}
function cm(s, t, e) {
  for (; ; ) {
    if (!t || e < Re(t))
      return !1;
    if (t == s)
      return !0;
    e = Le(t) + 1, t = t.parentNode;
  }
}
function fm(s, t) {
  let e;
  for (; !(s == t || !s); s = s.nextSibling) {
    let i = et.get(s);
    if (!(i != null && i.isWidget()))
      return !1;
    i && (e || (e = [])).push(i);
  }
  if (e)
    for (let i of e) {
      let n = i.overrideDOMText;
      if (n != null && n.length)
        return !1;
    }
  return !0;
}
class Ta {
  constructor(t, e) {
    this.node = t, this.offset = e, this.pos = -1;
  }
}
class um {
  constructor(t, e, i, n) {
    this.typeOver = n, this.bounds = null, this.text = "", this.domChanged = e > -1;
    let { impreciseHead: r, impreciseAnchor: o } = t.docView, l = t.state.selection;
    if (t.state.readOnly && e > -1)
      this.newSel = null;
    else if (e > -1 && (this.bounds = $f(t.docView.tile, e, i, 0))) {
      let a = r || o ? [] : pm(t), h = new hm(a, t);
      h.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = h.text, this.newSel = mm(a, this.bounds.from);
    } else {
      let a = t.observer.selectionRange, h = r && r.node == a.focusNode && r.offset == a.focusOffset || !Zo(t.contentDOM, a.focusNode) ? l.main.head : t.docView.posFromDOM(a.focusNode, a.focusOffset), c = o && o.node == a.anchorNode && o.offset == a.anchorOffset || !Zo(t.contentDOM, a.anchorNode) ? l.main.anchor : t.docView.posFromDOM(a.anchorNode, a.anchorOffset), f = t.viewport;
      if ((R.ios || R.chrome) && l.main.empty && h != c && (f.from > 0 || f.to < t.state.doc.length)) {
        let u = Math.min(h, c), d = Math.max(h, c), p = f.from - u, m = f.to - d;
        (p == 0 || p == 1 || u == 0) && (m == 0 || m == -1 || d == t.state.doc.length) && (h = 0, c = t.state.doc.length);
      }
      if (t.inputState.composing > -1 && l.ranges.length > 1)
        this.newSel = l.replaceRange(x.range(c, h));
      else if (t.lineWrapping && c == h && !(l.main.empty && l.main.head == h) && t.inputState.lastTouchTime > Date.now() - 100) {
        let u = t.coordsAtPos(h, -1), d = 0;
        u && (d = t.inputState.lastTouchY <= u.bottom ? -1 : 1), this.newSel = x.create([x.cursor(h, d)]);
      } else
        this.newSel = x.single(c, h);
    }
  }
}
function $f(s, t, e, i) {
  if (s.isComposite()) {
    let n = -1, r = -1, o = -1, l = -1;
    for (let a = 0, h = i, c = i; a < s.children.length; a++) {
      let f = s.children[a], u = h + f.length;
      if (h < t && u > e)
        return $f(f, t, e, h);
      if (u >= t && n == -1 && (n = a, r = h), h > e && f.dom.parentNode == s.dom) {
        o = a, l = c;
        break;
      }
      c = u, h = u + f.breakAfter;
    }
    return {
      from: r,
      to: l < 0 ? i + s.length : l,
      startDOM: (n ? s.children[n - 1].dom.nextSibling : null) || s.dom.firstChild,
      endDOM: o < s.children.length && o >= 0 ? s.children[o].dom : null
    };
  } else return s.isText() ? { from: i, to: i + s.length, startDOM: s.dom, endDOM: s.dom.nextSibling } : null;
}
function wf(s, t) {
  let e, { newSel: i } = t, { state: n } = s, r = n.selection.main, o = s.inputState.lastKeyTime > Date.now() - 100 ? s.inputState.lastKeyCode : -1;
  if (t.bounds) {
    let { from: l, to: a } = t.bounds, h = r.from, c = null;
    (o === 8 || R.android && t.text.length < a - l) && (h = r.to, c = "end");
    let f = n.doc.sliceString(l, a, Ci), u, d;
    !r.empty && r.from >= l && r.to <= a && (t.typeOver || f != t.text) && f.slice(0, r.from - l) == t.text.slice(0, r.from - l) && f.slice(r.to - l) == t.text.slice(u = t.text.length - (f.length - (r.to - l))) ? e = {
      from: r.from,
      to: r.to,
      insert: A.of(t.text.slice(r.from - l, u).split(Ci))
    } : (d = yf(f, t.text, h - l, c)) && (R.chrome && o == 13 && d.toB == d.from + 2 && t.text.slice(d.from, d.toB) == Ci + Ci && d.toB--, e = {
      from: l + d.from,
      to: l + d.toA,
      insert: A.of(t.text.slice(d.from, d.toB).split(Ci))
    });
  } else i && (!s.hasFocus && n.facet(ke) || Ln(i, r)) && (i = null);
  if (!e && !i)
    return !1;
  if ((R.mac || R.android) && e && e.from == e.to && e.from == r.head - 1 && /^\. ?$/.test(e.insert.toString()) && s.contentDOM.getAttribute("autocorrect") == "off" ? (i && e.insert.length == 2 && (i = x.single(i.main.anchor - 1, i.main.head - 1)), e = { from: e.from, to: e.to, insert: A.of([e.insert.toString().replace(".", " ")]) }) : n.doc.lineAt(r.from).to < r.to && s.docView.lineHasWidget(r.to) && s.inputState.insertingTextAt > Date.now() - 50 ? e = {
    from: r.from,
    to: r.to,
    insert: n.toText(s.inputState.insertingText)
  } : R.chrome && e && e.from == e.to && e.from == r.head && e.insert.toString() == `
 ` && s.lineWrapping && (i && (i = x.single(i.main.anchor - 1, i.main.head - 1)), e = { from: r.from, to: r.to, insert: A.of([" "]) }), e)
    return El(s, e, i, o);
  if (i && !Ln(i, r)) {
    let l = !1, a = "select";
    return s.inputState.lastSelectionTime > Date.now() - 50 && (s.inputState.lastSelectionOrigin == "select" && (l = !0), a = s.inputState.lastSelectionOrigin, a == "select.pointer" && (i = gf(n.facet(Qs).map((h) => h(s)), i))), s.dispatch({ selection: i, scrollIntoView: l, userEvent: a }), !0;
  } else
    return !1;
}
function El(s, t, e, i = -1) {
  if (R.ios && s.inputState.flushIOSKey(t))
    return !0;
  let n = s.state.selection.main;
  if (R.android && (t.to == n.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (t.from == n.from || t.from == n.from - 1 && s.state.sliceDoc(t.from, n.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && Gi(s.contentDOM, "Enter", 13) || (t.from == n.from - 1 && t.to == n.to && t.insert.length == 0 || i == 8 && t.insert.length < t.to - t.from && t.to > n.head) && Gi(s.contentDOM, "Backspace", 8) || t.from == n.from && t.to == n.to + 1 && t.insert.length == 0 && Gi(s.contentDOM, "Delete", 46)))
    return !0;
  let r = t.insert.toString();
  s.inputState.composing >= 0 && s.inputState.composing++;
  let o, l = () => o || (o = dm(s, t, e));
  return s.state.facet(nf).some((a) => a(s, t.from, t.to, r, l)) || s.dispatch(l()), !0;
}
function dm(s, t, e) {
  let i, n = s.state, r = n.selection.main, o = -1;
  if (t.from == t.to && t.from < r.from || t.from > r.to) {
    let a = t.from < r.from ? -1 : 1, h = a < 0 ? r.from : r.to, c = $s(n.facet(Qs).map((f) => f(s)), h, a);
    t.from == c && (o = c);
  }
  if (o > -1)
    i = {
      changes: t,
      selection: x.cursor(t.from + t.insert.length, -1)
    };
  else if (t.from >= r.from && t.to <= r.to && t.to - t.from >= (r.to - r.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && s.inputState.composing < 0) {
    let a = r.from < t.from ? n.sliceDoc(r.from, t.from) : "", h = r.to > t.to ? n.sliceDoc(t.to, r.to) : "";
    i = n.replaceSelection(s.state.toText(a + t.insert.sliceString(0, void 0, s.state.lineBreak) + h));
  } else {
    let a = n.changes(t), h = e && e.main.to <= a.newLength ? e.main : void 0;
    if (n.selection.ranges.length > 1 && (s.inputState.composing >= 0 || s.inputState.compositionPendingChange) && t.to <= r.to + 10 && t.to >= r.to - 10) {
      let c = s.state.sliceDoc(t.from, t.to), f, u = e && mf(s, e.main.head);
      if (u) {
        let p = t.insert.length - (t.to - t.from);
        f = { from: u.from, to: u.to - p };
      } else
        f = s.state.doc.lineAt(r.head);
      let d = r.to - t.to;
      i = n.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: a, range: h || p.map(a) };
        let m = p.to - d, g = m - c.length;
        if (s.state.sliceDoc(g, m) != c || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        m >= f.from && g <= f.to)
          return { range: p };
        let w = n.changes({ from: g, to: m, insert: t.insert }), y = p.to - r.to;
        return {
          changes: w,
          range: h ? x.range(Math.max(0, h.anchor + y), Math.max(0, h.head + y)) : p.map(w)
        };
      });
    } else
      i = {
        changes: a,
        selection: h && n.selection.replaceRange(h)
      };
  }
  let l = "input.type";
  return (s.composing || s.inputState.compositionPendingChange && s.inputState.compositionEndedAt > Date.now() - 50) && (s.inputState.compositionPendingChange = !1, l += ".compose", s.inputState.compositionFirstChange && (l += ".start", s.inputState.compositionFirstChange = !1)), n.update(i, { userEvent: l, scrollIntoView: !0 });
}
function yf(s, t, e, i) {
  let n = Math.min(s.length, t.length), r = 0;
  for (; r < n && s.charCodeAt(r) == t.charCodeAt(r); )
    r++;
  if (r == n && s.length == t.length)
    return null;
  let o = s.length, l = t.length;
  for (; o > 0 && l > 0 && s.charCodeAt(o - 1) == t.charCodeAt(l - 1); )
    o--, l--;
  if (i == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    e -= o + a - r;
  }
  if (o < r && s.length < t.length) {
    let a = e <= r && e >= o ? r - e : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = e <= r && e >= l ? r - e : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function pm(s) {
  let t = [];
  if (s.root.activeElement != s.contentDOM)
    return t;
  let { anchorNode: e, anchorOffset: i, focusNode: n, focusOffset: r } = s.observer.selectionRange;
  return e && (t.push(new Ta(e, i)), (n != e || r != i) && t.push(new Ta(n, r))), t;
}
function mm(s, t) {
  if (s.length == 0)
    return null;
  let e = s[0].pos, i = s.length == 2 ? s[1].pos : e;
  return e > -1 && i > -1 ? x.single(e + t, i + t) : null;
}
function Ln(s, t) {
  return t.head == s.main.head && t.anchor == s.main.anchor;
}
class gm {
  setSelectionOrigin(t) {
    this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
  }
  constructor(t) {
    this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, R.safari && t.contentDOM.addEventListener("input", () => null), R.gecko && Em(t.contentDOM.ownerDocument);
  }
  handleEvent(t) {
    !Sm(this.view, t) || this.ignoreDuringComposition(t) || t.type == "keydown" && this.keydown(t) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(t.type, t)) : this.runHandlers(t.type, t));
  }
  runHandlers(t, e) {
    let i = this.handlers[t];
    if (i) {
      for (let n of i.observers)
        n(this.view, e);
      for (let n of i.handlers) {
        if (e.defaultPrevented)
          break;
        if (n(this.view, e)) {
          e.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(t) {
    let e = $m(t), i = this.handlers, n = this.view.contentDOM;
    for (let r in e)
      if (r != "scroll") {
        let o = !e[r].handlers.length, l = i[r];
        l && o != !l.handlers.length && (n.removeEventListener(r, this.handleEvent), l = null), l || n.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in i)
      r != "scroll" && !e[r] && n.removeEventListener(r, this.handleEvent);
    this.handlers = e;
  }
  keydown(t) {
    if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && t.keyCode != 27 && Of.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), R.android && R.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8))
      return this.view.observer.delayAndroidKey(t.key, t.keyCode), !0;
    let e;
    return R.ios && !t.synthetic && !t.altKey && !t.metaKey && !t.shiftKey && ((e = bf.find((i) => i.keyCode == t.keyCode)) && !t.ctrlKey || wm.indexOf(t.key) > -1 && t.ctrlKey) ? (this.pendingIOSKey = e || t, setTimeout(() => this.flushIOSKey(), 250), !0) : (t.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(t) {
    let e = this.pendingIOSKey;
    return !e || e.key == "Enter" && t && t.from < t.to && /^\S+$/.test(t.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Gi(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : void 0));
  }
  ignoreDuringComposition(t) {
    return !/^key/.test(t.type) || t.synthetic ? !1 : this.composing > 0 ? !0 : R.safari && !R.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
  }
  startMouseSelection(t) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t;
  }
  update(t) {
    this.view.observer.update(t), this.mouseSelection && this.mouseSelection.update(t), this.draggedContent && t.docChanged && (this.draggedContent = this.draggedContent.map(t.changes)), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function Ha(s, t) {
  return (e, i) => {
    try {
      return t.call(s, i, e);
    } catch (n) {
      Dt(e.state, n);
    }
  };
}
function $m(s) {
  let t = /* @__PURE__ */ Object.create(null);
  function e(i) {
    return t[i] || (t[i] = { observers: [], handlers: [] });
  }
  for (let i of s) {
    let n = i.spec, r = n && n.plugin.domEventHandlers, o = n && n.plugin.domEventObservers;
    if (r)
      for (let l in r) {
        let a = r[l];
        a && e(l).handlers.push(Ha(i.value, a));
      }
    if (o)
      for (let l in o) {
        let a = o[l];
        a && e(l).observers.push(Ha(i.value, a));
      }
  }
  for (let i in Ut)
    e(i).handlers.push(Ut[i]);
  for (let i in Ht)
    e(i).observers.push(Ht[i]);
  return t;
}
const bf = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], wm = "dthko", Of = [16, 17, 18, 20, 91, 92, 224, 225], Is = 6;
function Us(s) {
  return Math.max(0, s) * 0.7 + 8;
}
function ym(s, t) {
  return Math.max(Math.abs(s.clientX - t.clientX), Math.abs(s.clientY - t.clientY));
}
class bm {
  constructor(t, e, i, n) {
    this.view = t, this.startEvent = e, this.style = i, this.mustSelect = n, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = Lc(t.contentDOM), this.atoms = t.state.facet(Qs).map((o) => o(t));
    let r = t.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(M.allowMultipleSelections) && Om(t, e), this.dragging = km(t, e) && Sf(e) == 1 ? null : !1;
  }
  start(t) {
    this.dragging === !1 && this.select(t);
  }
  move(t) {
    if (t.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && ym(this.startEvent, t) < 10)
      return;
    this.select(this.lastEvent = t);
    let e = 0, i = 0, n = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: n, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = Hl(this.view);
    t.clientX - a.left <= n + Is ? e = -Us(n - t.clientX) : t.clientX + a.right >= o - Is && (e = Us(t.clientX - o)), t.clientY - a.top <= r + Is ? i = -Us(r - t.clientY) : t.clientY + a.bottom >= l - Is && (i = Us(t.clientY - l)), this.setScrollSpeed(e, i);
  }
  up(t) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t = this.view.contentDOM.ownerDocument;
    t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(t, e) {
    this.scrollSpeed = { x: t, y: e }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: t, y: e } = this.scrollSpeed;
    t && this.scrollParents.x && (this.scrollParents.x.scrollLeft += t, t = 0), e && this.scrollParents.y && (this.scrollParents.y.scrollTop += e, e = 0), (t || e) && this.view.win.scrollBy(t, e), this.dragging === !1 && this.select(this.lastEvent);
  }
  select(t) {
    let { view: e } = this, i = gf(this.atoms, this.style.get(t, this.extend, this.multiple));
    (this.mustSelect || !i.eq(e.state.selection, this.dragging === !1)) && this.view.dispatch({
      selection: i,
      userEvent: "select.pointer"
    }), this.mustSelect = !1;
  }
  update(t) {
    t.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Om(s, t) {
  let e = s.state.facet(Jc);
  return e.length ? e[0](t) : R.mac ? t.metaKey : t.ctrlKey;
}
function xm(s, t) {
  let e = s.state.facet(tf);
  return e.length ? e[0](t) : R.mac ? !t.altKey : !t.ctrlKey;
}
function km(s, t) {
  let { main: e } = s.state.selection;
  if (e.empty)
    return !1;
  let i = Ss(s.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let n = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < n.length; r++) {
    let o = n[r];
    if (o.left <= t.clientX && o.right >= t.clientX && o.top <= t.clientY && o.bottom >= t.clientY)
      return !0;
  }
  return !1;
}
function Sm(s, t) {
  if (!t.bubbles)
    return !0;
  if (t.defaultPrevented)
    return !1;
  for (let e = t.target, i; e != s.contentDOM; e = e.parentNode)
    if (!e || e.nodeType == 11 || (i = et.get(e)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(t))
      return !1;
  return !0;
}
const Ut = /* @__PURE__ */ Object.create(null), Ht = /* @__PURE__ */ Object.create(null), xf = R.ie && R.ie_version < 15 || R.ios && R.webkit_version < 604;
function vm(s) {
  let t = s.dom.parentNode;
  if (!t)
    return;
  let e = t.appendChild(document.createElement("textarea"));
  e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
    s.focus(), e.remove(), kf(s, e.value);
  }, 50);
}
function wr(s, t, e) {
  for (let i of s.facet(t))
    e = i(e, s);
  return e;
}
function kf(s, t) {
  t = wr(s.state, Cl, t);
  let { state: e } = s, i, n = 1, r = e.toText(t), o = r.lines == e.selection.ranges.length;
  if (Ko != null && e.selection.ranges.every((a) => a.empty) && Ko == r.toString()) {
    let a = -1;
    i = e.changeByRange((h) => {
      let c = e.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let f = e.toText((o ? r.line(n++).text : t) + e.lineBreak);
      return {
        changes: { from: c.from, insert: f },
        range: x.cursor(h.from + f.length)
      };
    });
  } else o ? i = e.changeByRange((a) => {
    let h = r.line(n++);
    return {
      changes: { from: a.from, to: a.to, insert: h.text },
      range: x.cursor(a.from + h.length)
    };
  }) : i = e.replaceSelection(r);
  s.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
Ht.scroll = (s) => {
  s.inputState.lastScrollTop = s.scrollDOM.scrollTop, s.inputState.lastScrollLeft = s.scrollDOM.scrollLeft;
};
Ht.wheel = Ht.mousewheel = (s) => {
  s.inputState.lastWheelEvent = Date.now();
};
Ut.keydown = (s, t) => (s.inputState.setSelectionOrigin("select"), t.keyCode == 27 && s.inputState.tabFocusMode != 0 && (s.inputState.tabFocusMode = Date.now() + 2e3), !1);
Ht.touchstart = (s, t) => {
  let e = s.inputState, i = t.targetTouches[0];
  e.lastTouchTime = Date.now(), i && (e.lastTouchX = i.clientX, e.lastTouchY = i.clientY), e.setSelectionOrigin("select.pointer");
};
Ht.touchmove = (s) => {
  s.inputState.setSelectionOrigin("select.pointer");
};
Ut.mousedown = (s, t) => {
  if (s.observer.flush(), s.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let e = null;
  for (let i of s.state.facet(ef))
    if (e = i(s, t), e)
      break;
  if (!e && t.button == 0 && (e = Dm(s, t)), e) {
    let i = !s.hasFocus;
    s.inputState.startMouseSelection(new bm(s, t, e, i)), i && s.observer.ignore(() => {
      Zc(s.contentDOM);
      let r = s.root.activeElement;
      r && !r.contains(s.contentDOM) && r.blur();
    });
    let n = s.inputState.mouseSelection;
    if (n)
      return n.start(t), n.dragging === !1;
  } else
    s.inputState.setSelectionOrigin("select.pointer");
  return !1;
};
function Ea(s, t, e, i) {
  if (i == 1)
    return x.cursor(t, e);
  if (i == 2)
    return sm(s.state, t, e);
  {
    let n = s.docView.lineAt(t, e), r = s.state.doc.lineAt(n ? n.posAtEnd : t), o = n ? n.posAtStart : r.from, l = n ? n.posAtEnd : r.to;
    return l < s.state.doc.length && l == r.to && l++, x.range(o, l);
  }
}
const Cm = R.ie && R.ie_version <= 11;
let ja = null, Pa = 0, Na = 0;
function Sf(s) {
  if (!Cm)
    return s.detail;
  let t = ja, e = Na;
  return ja = s, Na = Date.now(), Pa = !t || e > Date.now() - 400 && Math.abs(t.clientX - s.clientX) < 2 && Math.abs(t.clientY - s.clientY) < 2 ? (Pa + 1) % 3 : 1;
}
function Dm(s, t) {
  let e = s.posAndSideAtCoords({ x: t.clientX, y: t.clientY }, !1), i = Sf(t), n = s.state.selection;
  return {
    update(r) {
      r.docChanged && (e.pos = r.changes.mapPos(e.pos), n = n.map(r.changes));
    },
    get(r, o, l) {
      let a = s.posAndSideAtCoords({ x: r.clientX, y: r.clientY }, !1), h, c = Ea(s, a.pos, a.assoc, i);
      if (e.pos != a.pos && !o) {
        let f = Ea(s, e.pos, e.assoc, i), u = Math.min(f.from, c.from), d = Math.max(f.to, c.to);
        c = u < c.from ? x.range(u, d, c.assoc) : x.range(d, u, c.assoc);
      }
      return o ? n.replaceRange(n.main.extend(c.from, c.to, c.assoc)) : l && i == 1 && n.ranges.length > 1 && (h = Rm(n, a.pos)) ? h : l ? n.addRange(c) : x.create([c]);
    }
  };
}
function Rm(s, t) {
  for (let e = 0; e < s.ranges.length; e++) {
    let { from: i, to: n } = s.ranges[e];
    if (i <= t && n >= t)
      return x.create(s.ranges.slice(0, e).concat(s.ranges.slice(e + 1)), s.mainIndex == e ? 0 : s.mainIndex - (s.mainIndex > e ? 1 : 0));
  }
  return null;
}
Ut.dragstart = (s, t) => {
  let { selection: { main: e } } = s.state;
  if (t.target.draggable) {
    let n = s.docView.tile.nearest(t.target);
    if (n && n.isWidget()) {
      let r = n.posAtStart, o = r + n.length;
      (r >= e.to || o <= e.from) && (e = x.range(r, o));
    }
  }
  let { inputState: i } = s;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = e, t.dataTransfer && (t.dataTransfer.setData("Text", wr(s.state, Dl, s.state.sliceDoc(e.from, e.to))), t.dataTransfer.effectAllowed = "copyMove"), !1;
};
Ut.dragend = (s) => (s.inputState.draggedContent = null, !1);
function Ya(s, t, e, i) {
  if (e = wr(s.state, Cl, e), !e)
    return;
  let n = s.posAtCoords({ x: t.clientX, y: t.clientY }, !1), { draggedContent: r } = s.inputState, o = i && r && xm(s, t) ? { from: r.from, to: r.to } : null, l = { from: n, insert: e }, a = s.state.changes(o ? [o, l] : l);
  s.focus(), s.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(n, -1), head: a.mapPos(n, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), s.inputState.draggedContent = null;
}
Ut.drop = (s, t) => {
  if (!t.dataTransfer)
    return !1;
  if (s.state.readOnly)
    return !0;
  let e = t.dataTransfer.files;
  if (e && e.length) {
    let i = Array(e.length), n = 0, r = () => {
      ++n == e.length && Ya(s, t, i.filter((o) => o != null).join(s.state.lineBreak), !1);
    };
    for (let o = 0; o < e.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
      }, l.readAsText(e[o]);
    }
    return !0;
  } else {
    let i = t.dataTransfer.getData("Text");
    if (i)
      return Ya(s, t, i, !0), !0;
  }
  return !1;
};
Ut.paste = (s, t) => {
  if (s.state.readOnly)
    return !0;
  s.observer.flush();
  let e = xf ? null : t.clipboardData;
  return e ? (kf(s, e.getData("text/plain") || e.getData("text/uri-list")), !0) : (vm(s), !1);
};
function Tm(s, t) {
  let e = s.dom.parentNode;
  if (!e)
    return;
  let i = e.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = t, i.focus(), i.selectionEnd = t.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), s.focus();
  }, 50);
}
function Hm(s) {
  let t = [], e = [], i = !1;
  for (let n of s.selection.ranges)
    n.empty || (t.push(s.sliceDoc(n.from, n.to)), e.push(n));
  if (!t.length) {
    let n = -1;
    for (let { from: r } of s.selection.ranges) {
      let o = s.doc.lineAt(r);
      o.number > n && (t.push(o.text), e.push({ from: o.from, to: Math.min(s.doc.length, o.to + 1) })), n = o.number;
    }
    i = !0;
  }
  return { text: wr(s, Dl, t.join(s.lineBreak)), ranges: e, linewise: i };
}
let Ko = null;
Ut.copy = Ut.cut = (s, t) => {
  if (!ms(s.contentDOM, s.observer.selectionRange))
    return !1;
  let { text: e, ranges: i, linewise: n } = Hm(s.state);
  if (!e && !n)
    return !1;
  Ko = n ? e : null, t.type == "cut" && !s.state.readOnly && s.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let r = xf ? null : t.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", e), !0) : (Tm(s, e), !1);
};
const vf = /* @__PURE__ */ He.define();
function Cf(s, t) {
  let e = [];
  for (let i of s.facet(rf)) {
    let n = i(s, t);
    n && e.push(n);
  }
  return e.length ? s.update({ effects: e, annotations: vf.of(!0) }) : null;
}
function Df(s) {
  setTimeout(() => {
    let t = s.hasFocus;
    if (t != s.inputState.notifiedFocused) {
      let e = Cf(s.state, t);
      e ? s.dispatch(e) : s.update([]);
    }
  }, 10);
}
Ht.focus = (s) => {
  s.inputState.lastFocusTime = Date.now(), !s.scrollDOM.scrollTop && (s.inputState.lastScrollTop || s.inputState.lastScrollLeft) && (s.scrollDOM.scrollTop = s.inputState.lastScrollTop, s.scrollDOM.scrollLeft = s.inputState.lastScrollLeft), Df(s);
};
Ht.blur = (s) => {
  s.observer.clearSelectionRange(), Df(s);
};
Ht.compositionstart = Ht.compositionupdate = (s) => {
  s.observer.editContext || (s.inputState.compositionFirstChange == null && (s.inputState.compositionFirstChange = !0), s.inputState.composing < 0 && (s.inputState.composing = 0));
};
Ht.compositionend = (s) => {
  s.observer.editContext || (s.inputState.composing = -1, s.inputState.compositionEndedAt = Date.now(), s.inputState.compositionPendingKey = !0, s.inputState.compositionPendingChange = s.observer.pendingRecords().length > 0, s.inputState.compositionFirstChange = null, R.chrome && R.android ? s.observer.flushSoon() : s.inputState.compositionPendingChange ? Promise.resolve().then(() => s.observer.flush()) : setTimeout(() => {
    s.inputState.composing < 0 && s.docView.hasComposition && s.update([]);
  }, 50));
};
Ht.contextmenu = (s) => {
  s.inputState.lastContextMenu = Date.now();
};
Ut.beforeinput = (s, t) => {
  var e, i;
  if ((t.inputType == "insertText" || t.inputType == "insertCompositionText") && (s.inputState.insertingText = t.data, s.inputState.insertingTextAt = Date.now()), t.inputType == "insertReplacementText" && s.observer.editContext) {
    let r = (e = t.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain"), o = t.getTargetRanges();
    if (r && o.length) {
      let l = o[0], a = s.posAtDOM(l.startContainer, l.startOffset), h = s.posAtDOM(l.endContainer, l.endOffset);
      return El(s, { from: a, to: h, insert: s.state.toText(r) }, null), !0;
    }
  }
  let n;
  if (R.chrome && R.android && (n = bf.find((r) => r.inputType == t.inputType)) && (s.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && s.hasFocus && (s.contentDOM.blur(), s.focus());
    }, 100);
  }
  return R.ios && t.inputType == "deleteContentForward" && s.observer.flushSoon(), R.safari && t.inputType == "insertText" && s.inputState.composing >= 0 && setTimeout(() => Ht.compositionend(s, t), 20), !1;
};
const za = /* @__PURE__ */ new Set();
function Em(s) {
  za.has(s) || (za.add(s), s.addEventListener("copy", () => {
  }), s.addEventListener("cut", () => {
  }));
}
const Ga = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let qi = !1;
function Qa() {
  qi = !1;
}
class jm {
  constructor(t) {
    this.lineWrapping = t, this.doc = A.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(t, e) {
    let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((e - t - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(t) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t) {
    return this.doc = t, this;
  }
  mustRefreshForWrapping(t) {
    return Ga.indexOf(t) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t) {
    let e = !1;
    for (let i = 0; i < t.length; i++) {
      let n = t[i];
      n < 0 ? i++ : this.heightSamples[Math.floor(n * 10)] || (e = !0, this.heightSamples[Math.floor(n * 10)] = !0);
    }
    return e;
  }
  refresh(t, e, i, n, r, o) {
    let l = Ga.indexOf(t) > -1, a = Math.abs(e - this.lineHeight) > 0.3 || this.lineWrapping != l || Math.abs(i - this.charWidth) > 0.1;
    if (this.lineWrapping = l, this.lineHeight = e, this.charWidth = i, this.textHeight = n, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = !0;
      }
    }
    return a;
  }
}
class Pm {
  constructor(t, e) {
    this.from = t, this.heights = e, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class qt {
  /**
  @internal
  */
  constructor(t, e, i, n, r) {
    this.from = t, this.length = e, this.top = i, this.height = n, this._content = r;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? ut.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  /**
  The end of the element as a document position.
  */
  get to() {
    return this.from + this.length;
  }
  /**
  The bottom position of the element.
  */
  get bottom() {
    return this.top + this.height;
  }
  /**
  If this is a widget block, this will return the widget
  associated with it.
  */
  get widget() {
    return this._content instanceof ci ? this._content.widget : null;
  }
  /**
  If this is a textblock, this holds the number of line breaks
  that appear in widgets inside the block.
  */
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  /**
  @internal
  */
  join(t) {
    let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
    return new qt(this.from, this.length + t.length, this.top, this.height + t.height, e);
  }
}
var V = /* @__PURE__ */ function(s) {
  return s[s.ByPos = 0] = "ByPos", s[s.ByHeight = 1] = "ByHeight", s[s.ByPosNoHeight = 2] = "ByPosNoHeight", s;
}(V || (V = {}));
const Sn = 1e-3;
class Ot {
  constructor(t, e, i = 2) {
    this.length = t, this.height = e, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(t) {
    this.flags = (t ? 2 : 0) | this.flags & -3;
  }
  setHeight(t) {
    this.height != t && (Math.abs(this.height - t) > Sn && (qi = !0), this.height = t);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(t, e, i) {
    return Ot.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(t, e) {
    e.push(this);
  }
  decomposeRight(t, e) {
    e.push(this);
  }
  applyChanges(t, e, i, n) {
    let r = this, o = i.doc;
    for (let l = n.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = n[l], u = r.lineAt(a, V.ByPosNoHeight, i.setDoc(e), 0, 0), d = u.to >= h ? u : r.lineAt(h, V.ByPosNoHeight, i, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= n[l - 1].toA; )
        a = n[l - 1].fromA, c = n[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, V.ByPosNoHeight, i, 0, 0));
      c += u.from - a, a = u.from;
      let p = jl.build(i.setDoc(o), t, c, f);
      r = Zn(r, r.replace(a, h, p));
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new Yt(0, 0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(t) {
    if (t.length == 1)
      return t[0];
    let e = 0, i = t.length, n = 0, r = 0;
    for (; ; )
      if (e == i)
        if (n > r * 2) {
          let l = t[e - 1];
          l.break ? t.splice(--e, 1, l.left, null, l.right) : t.splice(--e, 1, l.left, l.right), i += 1 + l.break, n -= l.size;
        } else if (r > n * 2) {
          let l = t[i];
          l.break ? t.splice(i, 1, l.left, null, l.right) : t.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
        } else
          break;
      else if (n < r) {
        let l = t[e++];
        l && (n += l.size);
      } else {
        let l = t[--i];
        l && (r += l.size);
      }
    let o = 0;
    return t[e - 1] == null ? (o = 1, e--) : t[e] == null && (o = 1, i++), new Ym(Ot.of(t.slice(0, e)), o, Ot.of(t.slice(i)));
  }
}
function Zn(s, t) {
  return s == t ? s : (s.constructor != t.constructor && (qi = !0), t);
}
Ot.prototype.size = 1;
const Nm = /* @__PURE__ */ N.replace({});
class Rf extends Ot {
  constructor(t, e, i) {
    super(t, e), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(t, e) {
    return new qt(e, this.length, t + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(t, e, i, n) {
    return this.spaceAbove && t < i + this.spaceAbove ? new qt(n, 0, i, this.spaceAbove, Nm) : this.mainBlock(i, n);
  }
  lineAt(t, e, i, n, r) {
    let o = this.mainBlock(n, r);
    return this.spaceAbove ? this.blockAt(0, i, n, r).join(o) : o;
  }
  forEachLine(t, e, i, n, r, o) {
    t <= r + this.length && e >= r && o(this.lineAt(0, V.ByPos, i, n, r));
  }
  setMeasuredHeight(t) {
    let e = t.heights[t.index++];
    e < 0 ? (this.spaceAbove = -e, e = t.heights[t.index++]) : this.spaceAbove = 0, this.setHeight(e);
  }
  updateHeight(t, e = 0, i = !1, n) {
    return n && n.from <= e && n.more && this.setMeasuredHeight(n), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Yt extends Rf {
  constructor(t, e, i) {
    super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = i;
  }
  mainBlock(t, e) {
    return new qt(e, this.length, t + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(t, e, i) {
    let n = i[0];
    return i.length == 1 && (n instanceof Yt || n instanceof ct && n.flags & 4) && Math.abs(this.length - n.length) < 10 ? (n instanceof ct ? n = new Yt(n.length, this.height, this.spaceAbove) : n.height = this.height, this.outdated || (n.outdated = !1), n) : Ot.of(i);
  }
  updateHeight(t, e = 0, i = !1, n) {
    return n && n.from <= e && n.more ? this.setMeasuredHeight(n) : (i || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight)), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class ct extends Ot {
  constructor(t) {
    super(t, 0);
  }
  heightMetrics(t, e) {
    let i = t.doc.lineAt(e).number, n = t.doc.lineAt(e + this.length).number, r = n - i + 1, o, l = 0;
    if (t.lineWrapping) {
      let a = Math.min(this.height, t.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: i, lastLine: n, perLine: o, perChar: l };
  }
  blockAt(t, e, i, n) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(e, n);
    if (e.lineWrapping) {
      let h = n + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length)), c = e.doc.lineAt(h), f = l + c.length * a, u = Math.max(i, t - f / 2);
      return new qt(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((t - i) / l))), { from: c, length: f } = e.doc.line(r + h);
      return new qt(c, f, i + l * h, l, 0);
    }
  }
  lineAt(t, e, i, n, r) {
    if (e == V.ByHeight)
      return this.blockAt(t, i, n, r);
    if (e == V.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(t);
      return new qt(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), h = i.doc.lineAt(t), c = l + h.length * a, f = h.number - o, u = n + l * f + a * (h.from - r - f);
    return new qt(h.from, h.length, Math.max(n, Math.min(u, n + this.height - c)), c, 0);
  }
  forEachLine(t, e, i, n, r, o) {
    t = Math.max(t, r), e = Math.min(e, r + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, r);
    for (let c = t, f = n; c <= e; ) {
      let u = i.doc.lineAt(c);
      if (c == t) {
        let p = u.number - l;
        f += a * p + h * (t - r - p);
      }
      let d = a + h * u.length;
      o(new qt(u.from, u.length, f, d, 0)), f += d, c = u.to + 1;
    }
  }
  replace(t, e, i) {
    let n = this.length - e;
    if (n > 0) {
      let r = i[i.length - 1];
      r instanceof ct ? i[i.length - 1] = new ct(r.length + n) : i.push(null, new ct(n - 1));
    }
    if (t > 0) {
      let r = i[0];
      r instanceof ct ? i[0] = new ct(t + r.length) : i.unshift(new ct(t - 1), null);
    }
    return Ot.of(i);
  }
  decomposeLeft(t, e) {
    e.push(new ct(t - 1), null);
  }
  decomposeRight(t, e) {
    e.push(null, new ct(this.length - t - 1));
  }
  updateHeight(t, e = 0, i = !1, n) {
    let r = e + this.length;
    if (n && n.from <= e + this.length && n.more) {
      let o = [], l = Math.max(e, n.from), a = -1;
      for (n.from > e && o.push(new ct(n.from - e - 1).updateHeight(t, e)); l <= r && n.more; ) {
        let c = t.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = n.heights[n.index++], u = 0;
        f < 0 && (u = -f, f = n.heights[n.index++]), a == -1 ? a = f : Math.abs(f - a) >= Sn && (a = -2);
        let d = new Yt(c, f, u);
        d.outdated = !1, o.push(d), l += c + 1;
      }
      l <= r && o.push(null, new ct(r - l).updateHeight(t, l));
      let h = Ot.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= Sn || Math.abs(a - this.heightMetrics(t, e).perLine) >= Sn) && (qi = !0), Zn(this, h);
    } else (i || this.outdated) && (this.setHeight(t.heightForGap(e, e + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Ym extends Ot {
  constructor(t, e, i) {
    super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0)), this.left = t, this.right = i, this.size = t.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(t, e, i, n) {
    let r = i + this.left.height;
    return t < r ? this.left.blockAt(t, e, i, n) : this.right.blockAt(t, e, r, n + this.left.length + this.break);
  }
  lineAt(t, e, i, n, r) {
    let o = n + this.left.height, l = r + this.left.length + this.break, a = e == V.ByHeight ? t < o : t < l, h = a ? this.left.lineAt(t, e, i, n, r) : this.right.lineAt(t, e, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = e == V.ByPosNoHeight ? V.ByPosNoHeight : V.ByPos;
    return a ? h.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, n, r).join(h);
  }
  forEachLine(t, e, i, n, r, o) {
    let l = n + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      t < a && this.left.forEachLine(t, e, i, n, r, o), e >= a && this.right.forEachLine(t, e, i, l, a, o);
    else {
      let h = this.lineAt(a, V.ByPos, i, n, r);
      t < h.from && this.left.forEachLine(t, h.from - 1, i, n, r, o), h.to >= t && h.from <= e && o(h), e > h.to && this.right.forEachLine(h.to + 1, e, i, l, a, o);
    }
  }
  replace(t, e, i) {
    let n = this.left.length + this.break;
    if (e < n)
      return this.balanced(this.left.replace(t, e, i), this.right);
    if (t > this.left.length)
      return this.balanced(this.left, this.right.replace(t - n, e - n, i));
    let r = [];
    t > 0 && this.decomposeLeft(t, r);
    let o = r.length;
    for (let l of i)
      r.push(l);
    if (t > 0 && Ba(r, o - 1), e < this.length) {
      let l = r.length;
      this.decomposeRight(e, r), Ba(r, l);
    }
    return Ot.of(r);
  }
  decomposeLeft(t, e) {
    let i = this.left.length;
    if (t <= i)
      return this.left.decomposeLeft(t, e);
    e.push(this.left), this.break && (i++, t >= i && e.push(null)), t > i && this.right.decomposeLeft(t - i, e);
  }
  decomposeRight(t, e) {
    let i = this.left.length, n = i + this.break;
    if (t >= n)
      return this.right.decomposeRight(t - n, e);
    t < i && this.left.decomposeRight(t, e), this.break && t < n && e.push(null), e.push(this.right);
  }
  balanced(t, e) {
    return t.size > 2 * e.size || e.size > 2 * t.size ? Ot.of(this.break ? [t, null, e] : [t, e]) : (this.left = Zn(this.left, t), this.right = Zn(this.right, e), this.setHeight(t.height + e.height), this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
  }
  updateHeight(t, e = 0, i = !1, n) {
    let { left: r, right: o } = this, l = e + r.length + this.break, a = null;
    return n && n.from <= e + r.length && n.more ? a = r = r.updateHeight(t, e, i, n) : r.updateHeight(t, e, i), n && n.from <= l + o.length && n.more ? a = o = o.updateHeight(t, l, i, n) : o.updateHeight(t, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Ba(s, t) {
  let e, i;
  s[t] == null && (e = s[t - 1]) instanceof ct && (i = s[t + 1]) instanceof ct && s.splice(t - 1, 3, new ct(e.length + 1 + i.length));
}
const zm = 5;
class jl {
  constructor(t, e) {
    this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t, e) {
    if (this.lineStart > -1) {
      let i = Math.min(e, this.lineEnd), n = this.nodes[this.nodes.length - 1];
      n instanceof Yt ? n.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new Yt(i - this.pos, -1, 0)), this.writtenTo = i, e > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e;
  }
  point(t, e, i) {
    if (t < e || i.heightRelevant) {
      let n = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      n < 0 && (n = this.oracle.lineHeight);
      let o = e - t;
      i.block ? this.addBlock(new Rf(o, n, i)) : (o || r || n >= zm) && this.addLineDeco(n, r, o);
    } else e > t && this.span(t, e);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new Yt(this.pos - t, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(t, e) {
    let i = new ct(e - t);
    return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t instanceof Yt)
      return t;
    let e = new Yt(0, -1, 0);
    return this.nodes.push(e), e;
  }
  addBlock(t) {
    this.enterLine();
    let e = t.deco;
    e && e.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, e && e.endSide > 0 && (this.covering = t);
  }
  addLineDeco(t, e, i) {
    let n = this.ensureLine();
    n.length += i, n.collapsed += i, n.widgetHeight = Math.max(n.widgetHeight, t), n.breaks += e, this.writtenTo = this.pos = this.pos + i;
  }
  finish(t) {
    let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(e instanceof Yt) && !this.isCovered ? this.nodes.push(new Yt(0, -1, 0)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = t;
    for (let n of this.nodes)
      n instanceof Yt && n.updateHeight(this.oracle, i), i += n ? n.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(t, e, i, n) {
    let r = new jl(i, t);
    return Q.spans(e, i, n, r, 0), r.finish(i);
  }
}
function Gm(s, t, e) {
  let i = new Qm();
  return Q.compare(s, t, e, i, 0), i.changes;
}
class Qm {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t, e, i, n) {
    (t < e || i && i.heightRelevant || n && n.heightRelevant) && zi(t, e, this.changes, 5);
  }
}
function Bm(s, t) {
  let e = s.getBoundingClientRect(), i = s.ownerDocument, n = i.defaultView || window, r = Math.max(0, e.left), o = Math.min(n.innerWidth, e.right), l = Math.max(0, e.top), a = Math.min(n.innerHeight, e.bottom);
  for (let h = s.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h, f = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && f.overflow != "visible") {
        let u = c.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = Math.min(h == s.parentNode ? n.innerHeight : a, u.bottom);
      }
      h = f.position == "absolute" || f.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return {
    left: r - e.left,
    right: Math.max(r, o) - e.left,
    top: l - (e.top + t),
    bottom: Math.max(l, a) - (e.top + t)
  };
}
function Wm(s) {
  let t = s.getBoundingClientRect(), e = s.ownerDocument.defaultView || window;
  return t.left < e.innerWidth && t.right > 0 && t.top < e.innerHeight && t.bottom > 0;
}
function Mm(s, t) {
  let e = s.getBoundingClientRect();
  return {
    left: 0,
    right: e.right - e.left,
    top: t,
    bottom: e.bottom - (e.top + t)
  };
}
class Mr {
  constructor(t, e, i, n) {
    this.from = t, this.to = e, this.size = i, this.displaySize = n;
  }
  static same(t, e) {
    if (t.length != e.length)
      return !1;
    for (let i = 0; i < t.length; i++) {
      let n = t[i], r = e[i];
      if (n.from != r.from || n.to != r.to || n.size != r.size)
        return !1;
    }
    return !0;
  }
  draw(t, e) {
    return N.replace({
      widget: new Am(this.displaySize * (e ? t.scaleY : t.scaleX), e)
    }).range(this.from, this.to);
  }
}
class Am extends Ee {
  constructor(t, e) {
    super(), this.size = t, this.vertical = e;
  }
  eq(t) {
    return t.size == this.size && t.vertical == this.vertical;
  }
  toDOM() {
    let t = document.createElement("div");
    return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Wa {
  constructor(t, e) {
    this.view = t, this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Ma, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = I.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let i = e.facet(Rl).some((n) => typeof n != "function" && n.class == "cm-lineWrapping");
    this.heightOracle = new jm(i), this.stateDeco = Aa(e), this.heightMap = Ot.empty().applyChanges(this.stateDeco, A.empty, this.heightOracle.setDoc(e.doc), [new Wt(0, 0, 0, e.doc.length)]);
    for (let n = 0; n < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); n++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = N.set(this.lineGaps.map((n) => n.draw(this, !1))), this.scrollParent = t.scrollDOM, this.computeVisibleRanges();
  }
  updateForViewport() {
    let t = [this.viewport], { main: e } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let n = i ? e.head : e.anchor;
      if (!t.some(({ from: r, to: o }) => n >= r && n <= o)) {
        let { from: r, to: o } = this.lineBlockAt(n);
        t.push(new Vs(r, o));
      }
    }
    return this.viewports = t.sort((i, n) => i.from - n.from), this.updateScaler();
  }
  updateScaler() {
    let t = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Ma : new Pl(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
      this.viewportLines.push(cs(t, this.scaler));
    });
  }
  update(t, e = null) {
    this.state = t.state;
    let i = this.stateDeco;
    this.stateDeco = Aa(this.state);
    let n = t.changedRanges, r = Wt.extendWithRanges(n, Gm(i, this.stateDeco, t ? t.changes : rt.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    Qa(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || qi) && (t.flags |= 2), l ? (this.scrollAnchorPos = t.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let a = r.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
    (e && (e.range.head < a.from || e.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, e));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, t.flags |= this.updateForViewport(), (h || !t.changes.empty || t.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(t.changes), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && (t.selectionSet || t.focusChanged) && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(lf) && (this.mustEnforceCursorAssoc = !0);
  }
  measure() {
    let { view: t } = this, e = t.contentDOM, i = window.getComputedStyle(e), n = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? I.RTL : I.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r) || this.mustMeasureContent === "refresh", l = e.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: k, scaleY: S } = Ac(e, l);
      (k > 5e-3 && Math.abs(this.scaleX - k) > 5e-3 || S > 5e-3 && Math.abs(this.scaleY - S) > 5e-3) && (this.scaleX = k, this.scaleY = S, h |= 16, o = a = !0);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, h |= 18), this.editorWidth != t.scrollDOM.clientWidth && (n.lineWrapping && (a = !0), this.editorWidth = t.scrollDOM.clientWidth, h |= 16);
    let d = Lc(this.view.contentDOM, !1).y;
    d != this.scrollParent && (this.scrollParent = d, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
    let p = this.getScrollOffset();
    this.scrollOffset != p && (this.scrollAnchorHeight = -1, this.scrollOffset = p), this.scrolledToBottom = _c(this.scrollParent || t.win);
    let m = (this.printing ? Mm : Bm)(e, this.paddingTop), g = m.top - this.pixelViewport.top, w = m.bottom - this.pixelViewport.bottom;
    this.pixelViewport = m;
    let y = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (y != this.inView && (this.inView = y, y && (a = !0)), !this.inView && !this.scrollTarget && !Wm(t.dom))
      return 0;
    let b = l.width;
    if ((this.contentDOMWidth != b || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = t.scrollDOM.clientHeight, h |= 16), a) {
      let k = t.docView.measureVisibleLineHeights(this.viewport);
      if (n.mustRefreshForHeights(k) && (o = !0), o || n.lineWrapping && Math.abs(b - this.contentDOMWidth) > n.charWidth) {
        let { lineHeight: S, charWidth: O, textHeight: H } = t.docView.measureTextSize();
        o = S > 0 && n.refresh(r, S, O, H, Math.max(5, b / O), k), o && (t.docView.minWidth = 0, h |= 16);
      }
      g > 0 && w > 0 ? c = Math.max(g, w) : g < 0 && w < 0 && (c = Math.min(g, w)), Qa();
      for (let S of this.viewports) {
        let O = S.from == this.viewport.from ? k : t.docView.measureVisibleLineHeights(S);
        this.heightMap = (o ? Ot.empty().applyChanges(this.stateDeco, A.empty, this.heightOracle, [new Wt(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(n, 0, o, new Pm(S.from, O));
      }
      qi && (h |= 2);
    }
    let v = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return v && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || v) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, t)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t, e) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)), n = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Vs(n.lineAt(o - i * 1e3, V.ByHeight, r, 0, 0).from, n.lineAt(l + (1 - i) * 1e3, V.ByHeight, r, 0, 0).to);
    if (e) {
      let { head: h } = e.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = n.lineAt(h, V.ByPos, r, 0, 0), u;
        e.y == "center" ? u = (f.top + f.bottom) / 2 - c / 2 : e.y == "start" || e.y == "nearest" && h < a.from ? u = f.top : u = f.bottom - c, a = new Vs(n.lineAt(u - 1e3 / 2, V.ByHeight, r, 0, 0).from, n.lineAt(u + c + 1e3 / 2, V.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(t, e) {
    let i = e.mapPos(t.from, -1), n = e.mapPos(t.to, 1);
    return new Vs(this.heightMap.lineAt(i, V.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, V.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: t, to: e }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: n } = this.heightMap.lineAt(t, V.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(e, V.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (t == 0 || n <= o - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (e == this.state.doc.length || r >= l + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && n > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(t, e) {
    if (!t.length || e.empty)
      return t;
    let i = [];
    for (let n of t)
      e.touchesRange(n.from, n.to) || i.push(new Mr(e.mapPos(n.from), e.mapPos(n.to), n.size, n.displaySize));
    return i;
  }
  // Computes positions in the viewport where the start or end of a
  // line should be hidden, trying to reuse existing line gaps when
  // appropriate to avoid unneccesary redraws.
  // Uses crude character-counting for the positioning and sizing,
  // since actual DOM coordinates aren't always available and
  // predictable. Relies on generous margins (see LG.Margin) to hide
  // the artifacts this might produce from the user.
  ensureLineGaps(t, e) {
    let i = this.heightOracle.lineWrapping, n = i ? 1e4 : 2e3, r = n >> 1, o = n << 1;
    if (this.defaultTextDirection != I.LTR && !i)
      return [];
    let l = [], a = (c, f, u, d) => {
      if (f - c < r)
        return;
      let p = this.state.selection.main, m = [p.from];
      p.empty || m.push(p.to);
      for (let w of m)
        if (w > c && w < f) {
          a(c, w - 10, u, d), a(w + 10, f, u, d);
          return;
        }
      let g = Zm(t, (w) => w.from >= u.from && w.to <= u.to && Math.abs(w.from - c) < r && Math.abs(w.to - f) < r && !m.some((y) => w.from < y && w.to > y));
      if (!g) {
        if (f < u.to && e && i && e.visibleRanges.some((b) => b.from <= f && b.to >= f)) {
          let b = e.moveToLineBoundary(x.cursor(f), !1, !0).head;
          b > c && (f = b);
        }
        let w = this.gapSize(u, c, f, d), y = i || w < 2e6 ? w : 2e6;
        g = new Mr(c, f, w, y);
      }
      l.push(g);
    }, h = (c) => {
      if (c.length < o || c.type != ut.Text)
        return;
      let f = Lm(c.from, c.to, this.stateDeco);
      if (f.total < o)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (i) {
        let m = n / this.heightOracle.lineLength * this.heightOracle.lineHeight, g, w;
        if (u != null) {
          let y = Ks(f, u), b = ((this.visibleBottom - this.visibleTop) / 2 + m) / c.height;
          g = y - b, w = y + b;
        } else
          g = (this.visibleTop - c.top - m) / c.height, w = (this.visibleBottom - c.top + m) / c.height;
        d = Xs(f, g), p = Xs(f, w);
      } else {
        let m = f.total * this.heightOracle.charWidth, g = n * this.heightOracle.charWidth, w = 0;
        if (m > 2e6)
          for (let S of t)
            S.from >= c.from && S.from < c.to && S.size != S.displaySize && S.from * this.heightOracle.charWidth + w < this.pixelViewport.left && (w = S.size - S.displaySize);
        let y = this.pixelViewport.left + w, b = this.pixelViewport.right + w, v, k;
        if (u != null) {
          let S = Ks(f, u), O = ((b - y) / 2 + g) / m;
          v = S - O, k = S + O;
        } else
          v = (y - g) / m, k = (b + g) / m;
        d = Xs(f, v), p = Xs(f, k);
      }
      d > c.from && a(c.from, d, c, f), p < c.to && a(p, c.to, c, f);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(t, e, i, n) {
    let r = Ks(n, i) - Ks(n, e);
    return this.heightOracle.lineWrapping ? t.height * r : n.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(t) {
    Mr.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = N.set(t.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(t) {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let i = [];
    Q.spans(e, this.viewport.from, this.viewport.to, {
      span(r, o) {
        i.push({ from: r, to: o });
      },
      point() {
      }
    }, 20);
    let n = 0;
    if (i.length != this.visibleRanges.length)
      n = 12;
    else
      for (let r = 0; r < i.length && !(n & 8); r++) {
        let o = this.visibleRanges[r], l = i[r];
        (o.from != l.from || o.to != l.to) && (n |= 4, t && t.mapPos(o.from, -1) == l.from && t.mapPos(o.to, 1) == l.to || (n |= 8));
      }
    return this.visibleRanges = i, n;
  }
  lineBlockAt(t) {
    return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t) || cs(this.heightMap.lineAt(t, V.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t) {
    return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e) => e.top <= t && e.bottom >= t) || cs(this.heightMap.lineAt(this.scaler.fromDOM(t), V.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  getScrollOffset() {
    return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY;
  }
  scrollAnchorAt(t) {
    let e = this.lineBlockAtHeight(t + 8);
    return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0];
  }
  elementAtHeight(t) {
    return cs(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Vs {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
function Lm(s, t, e) {
  let i = [], n = s, r = 0;
  return Q.spans(e, s, t, {
    span() {
    },
    point(o, l) {
      o > n && (i.push({ from: n, to: o }), r += o - n), n = l;
    }
  }, 20), n < t && (i.push({ from: n, to: t }), r += t - n), { total: r, ranges: i };
}
function Xs({ total: s, ranges: t }, e) {
  if (e <= 0)
    return t[0].from;
  if (e >= 1)
    return t[t.length - 1].to;
  let i = Math.floor(s * e);
  for (let n = 0; ; n++) {
    let { from: r, to: o } = t[n], l = o - r;
    if (i <= l)
      return r + i;
    i -= l;
  }
}
function Ks(s, t) {
  let e = 0;
  for (let { from: i, to: n } of s.ranges) {
    if (t <= n) {
      e += t - i;
      break;
    }
    e += n - i;
  }
  return e / s.total;
}
function Zm(s, t) {
  for (let e of s)
    if (t(e))
      return e;
}
const Ma = {
  toDOM(s) {
    return s;
  },
  fromDOM(s) {
    return s;
  },
  scale: 1,
  eq(s) {
    return s == this;
  }
};
function Aa(s) {
  let t = s.facet(mr).filter((i) => typeof i != "function"), e = s.facet(Tl).filter((i) => typeof i != "function");
  return e.length && t.push(Q.join(e)), t;
}
class Pl {
  constructor(t, e, i) {
    let n = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = e.lineAt(l, V.ByPos, t, 0, 0).top, c = e.lineAt(a, V.ByPos, t, 0, 0).bottom;
      return n += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - n) / (e.height - n);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(t) {
    for (let e = 0, i = 0, n = 0; ; e++) {
      let r = e < this.viewports.length ? this.viewports[e] : null;
      if (!r || t < r.top)
        return n + (t - i) * this.scale;
      if (t <= r.bottom)
        return r.domTop + (t - r.top);
      i = r.bottom, n = r.domBottom;
    }
  }
  fromDOM(t) {
    for (let e = 0, i = 0, n = 0; ; e++) {
      let r = e < this.viewports.length ? this.viewports[e] : null;
      if (!r || t < r.domTop)
        return i + (t - n) / this.scale;
      if (t <= r.domBottom)
        return r.top + (t - r.domTop);
      i = r.bottom, n = r.domBottom;
    }
  }
  eq(t) {
    return t instanceof Pl ? this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, i) => e.from == t.viewports[i].from && e.to == t.viewports[i].to) : !1;
  }
}
function cs(s, t) {
  if (t.scale == 1)
    return s;
  let e = t.toDOM(s.top), i = t.toDOM(s.bottom);
  return new qt(s.from, s.length, e, i - e, Array.isArray(s._content) ? s._content.map((n) => cs(n, t)) : s._content);
}
const Js = /* @__PURE__ */ T.define({ combine: (s) => s.join(" ") }), Jo = /* @__PURE__ */ T.define({ combine: (s) => s.indexOf(!0) > -1 }), tl = /* @__PURE__ */ Me.newName(), Tf = /* @__PURE__ */ Me.newName(), Hf = /* @__PURE__ */ Me.newName(), Ef = { "&light": "." + Tf, "&dark": "." + Hf };
function el(s, t, e) {
  return new Me(t, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (n) => {
        if (n == "&")
          return s;
        if (!e || !e[n])
          throw new RangeError(`Unsupported selector: ${n}`);
        return e[n];
      }) : s + " " + i;
    }
  });
}
const _m = /* @__PURE__ */ el("." + tl, {
  "&": {
    position: "relative !important",
    boxSizing: "border-box",
    "&.cm-focused": {
      // Provide a simple default outline to make sure a focused
      // editor is visually distinct. Can't leave the default behavior
      // because that will apply to the content element, which is
      // inside the scrollable container and doesn't include the
      // gutters. We also can't use an 'auto' outline, since those
      // are, for some reason, drawn behind the element content, which
      // will cause things like the active line background to cover
      // the outline (#297).
      outline: "1px dotted #212121"
    },
    display: "flex !important",
    flexDirection: "column"
  },
  ".cm-scroller": {
    display: "flex !important",
    alignItems: "flex-start !important",
    fontFamily: "monospace",
    lineHeight: 1.4,
    height: "100%",
    overflowX: "auto",
    position: "relative",
    zIndex: 0,
    overflowAnchor: "none"
  },
  ".cm-content": {
    margin: 0,
    flexGrow: 2,
    flexShrink: 0,
    display: "block",
    whiteSpace: "pre",
    wordWrap: "normal",
    // Issue #456
    boxSizing: "border-box",
    minHeight: "100%",
    padding: "4px 0",
    outline: "none",
    "&[contenteditable=true]": {
      WebkitUserModify: "read-write-plaintext-only"
    }
  },
  ".cm-lineWrapping": {
    whiteSpace_fallback: "pre-wrap",
    // For IE
    whiteSpace: "break-spaces",
    wordBreak: "break-word",
    // For Safari, which doesn't support overflow-wrap: anywhere
    overflowWrap: "anywhere",
    flexShrink: 1
  },
  "&light .cm-content": { caretColor: "black" },
  "&dark .cm-content": { caretColor: "white" },
  ".cm-line": {
    display: "block",
    padding: "0 2px 0 6px"
  },
  ".cm-layer": {
    position: "absolute",
    left: 0,
    top: 0,
    contain: "size style",
    "& > *": {
      position: "absolute"
    }
  },
  "&light .cm-selectionBackground": {
    background: "#d9d9d9"
  },
  "&dark .cm-selectionBackground": {
    background: "#222"
  },
  "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#d7d4f0"
  },
  "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "#233"
  },
  ".cm-cursorLayer": {
    pointerEvents: "none"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
    animation: "steps(1) cm-blink 1.2s infinite"
  },
  // Two animations defined so that we can switch between them to
  // restart the animation without forcing another style
  // recomputation.
  "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
  ".cm-cursor, .cm-dropCursor": {
    borderLeft: "1.2px solid black",
    marginLeft: "-0.6px",
    pointerEvents: "none"
  },
  ".cm-cursor": {
    display: "none"
  },
  "&dark .cm-cursor": {
    borderLeftColor: "#ddd"
  },
  ".cm-selectionHandle": {
    backgroundColor: "currentColor",
    width: "1.5px"
  },
  ".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": {
    content: '""',
    backgroundColor: "inherit",
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    position: "absolute",
    left: "-3.25px"
  },
  ".cm-selectionHandle-start::before": { top: "-8px" },
  ".cm-selectionHandle-end::before": { bottom: "-8px" },
  ".cm-dropCursor": {
    position: "absolute"
  },
  "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
    display: "block"
  },
  ".cm-iso": {
    unicodeBidi: "isolate"
  },
  ".cm-announced": {
    position: "fixed",
    top: "-10000px"
  },
  "@media print": {
    ".cm-announced": { display: "none" }
  },
  "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
  "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
  "&light .cm-specialChar": { color: "red" },
  "&dark .cm-specialChar": { color: "#f78" },
  ".cm-gutters": {
    flexShrink: 0,
    display: "flex",
    height: "100%",
    boxSizing: "border-box",
    zIndex: 200
  },
  ".cm-gutters-before": { insetInlineStart: 0 },
  ".cm-gutters-after": { insetInlineEnd: 0 },
  "&light .cm-gutters": {
    backgroundColor: "#f5f5f5",
    color: "#6c6c6c",
    border: "0px solid #ddd",
    "&.cm-gutters-before": { borderRightWidth: "1px" },
    "&.cm-gutters-after": { borderLeftWidth: "1px" }
  },
  "&dark .cm-gutters": {
    backgroundColor: "#333338",
    color: "#ccc"
  },
  ".cm-gutter": {
    display: "flex !important",
    // Necessary -- prevents margin collapsing
    flexDirection: "column",
    flexShrink: 0,
    boxSizing: "border-box",
    minHeight: "100%",
    overflow: "hidden"
  },
  ".cm-gutterElement": {
    boxSizing: "border-box"
  },
  ".cm-lineNumbers .cm-gutterElement": {
    padding: "0 3px 0 5px",
    minWidth: "20px",
    textAlign: "right",
    whiteSpace: "nowrap"
  },
  "&light .cm-activeLineGutter": {
    backgroundColor: "#e2f2ff"
  },
  "&dark .cm-activeLineGutter": {
    backgroundColor: "#222227"
  },
  ".cm-panels": {
    boxSizing: "border-box",
    position: "sticky",
    left: 0,
    right: 0,
    zIndex: 300
  },
  "&light .cm-panels": {
    backgroundColor: "#f5f5f5",
    color: "black"
  },
  "&light .cm-panels-top": {
    borderBottom: "1px solid #ddd"
  },
  "&light .cm-panels-bottom": {
    borderTop: "1px solid #ddd"
  },
  "&dark .cm-panels": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-dialog": {
    padding: "2px 19px 4px 6px",
    position: "relative",
    "& label": { fontSize: "80%" }
  },
  ".cm-dialog-close": {
    position: "absolute",
    top: "3px",
    right: "4px",
    backgroundColor: "inherit",
    border: "none",
    font: "inherit",
    fontSize: "14px",
    padding: "0"
  },
  ".cm-tab": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "bottom"
  },
  ".cm-widgetBuffer": {
    verticalAlign: "text-top",
    height: "1em",
    width: 0,
    display: "inline"
  },
  ".cm-placeholder": {
    color: "#888",
    display: "inline-block",
    verticalAlign: "top",
    userSelect: "none"
  },
  ".cm-highlightSpace": {
    backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
    backgroundPosition: "center"
  },
  ".cm-highlightTab": {
    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right 90%",
    backgroundRepeat: "no-repeat"
  },
  ".cm-trailingSpace": {
    backgroundColor: "#ff332255"
  },
  ".cm-button": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    padding: ".2em 1em",
    borderRadius: "1px"
  },
  "&light .cm-button": {
    backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
    }
  },
  "&dark .cm-button": {
    backgroundImage: "linear-gradient(#393939, #111)",
    border: "1px solid #888",
    "&:active": {
      backgroundImage: "linear-gradient(#111, #333)"
    }
  },
  ".cm-textfield": {
    verticalAlign: "middle",
    color: "inherit",
    fontSize: "70%",
    border: "1px solid silver",
    padding: ".2em .5em"
  },
  "&light .cm-textfield": {
    backgroundColor: "white"
  },
  "&dark .cm-textfield": {
    border: "1px solid #555",
    backgroundColor: "inherit"
  }
}, Ef), qm = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, Ar = R.ie && R.ie_version <= 11;
class Fm {
  constructor(t) {
    this.view = t, this.active = !1, this.editContext = null, this.selectionRange = new kp(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e) => {
      for (let i of e)
        this.queue.push(i);
      (R.ie && R.ie_version <= 11 || R.ios && t.composing) && e.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && R.android && t.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(R.chrome && R.chrome_version < 126) && (this.editContext = new Um(t), t.state.facet(ke) && (t.contentDOM.editContext = this.editContext.editContext)), Ar && (this.onCharData = (e) => {
      this.queue.push({
        target: e.target,
        type: "characterData",
        oldValue: e.prevValue
      }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var e;
      ((e = this.view.docView) === null || e === void 0 ? void 0 : e.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t.scrollDOM)), this.addWindowListeners(this.win = t.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e) => {
      e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t) {
    this.view.inputState.runHandlers("scroll", t), this.intersecting && this.view.measure();
  }
  onScroll(t) {
    this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(t);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(t) {
    (t.type == "change" || !t.type) && !t.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = !1, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(t) {
    if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, i) => e != t[i]))) {
      this.gapIntersection.disconnect();
      for (let e of t)
        this.gapIntersection.observe(e);
      this.gaps = t;
    }
  }
  onSelectionChange(t) {
    let e = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, n = this.selectionRange;
    if (i.state.facet(ke) ? i.root.activeElement != this.dom : !ms(this.dom, n))
      return;
    let r = n.anchorNode && i.docView.tile.nearest(n.anchorNode);
    if (r && r.isWidget() && r.widget.ignoreEvent(t)) {
      e || (this.selectionChanged = !1);
      return;
    }
    (R.ie && R.ie_version <= 11 || R.android && R.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    n.focusNode && gs(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: t } = this, e = Ss(t.root);
    if (!e)
      return !1;
    let i = R.safari && t.root.nodeType == 11 && t.root.activeElement == this.dom && Im(this.view, e) || e;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let n = ms(this.dom, i);
    return n && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && vp(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), n && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(t, e) {
    this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = !1;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t = 0, e = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !e && t < this.scrollTargets.length && this.scrollTargets[t] == i ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = e)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t) {
    if (!this.active)
      return t();
    try {
      return this.stop(), t();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, qm), Ar && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), Ar && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  // Throw away any pending changes
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
  }
  // Chrome Android, especially in combination with GBoard, not only
  // doesn't reliably fire regular key events, but also often
  // surrounds the effect of enter or backspace with a bunch of
  // composition events that, when interrupted, cause text duplication
  // or other kinds of corruption. This hack makes the editor back off
  // from handling DOM changes for a moment when such a key is
  // detected (via beforeinput or keydown), and then tries to flush
  // them or, if that has no effect, dispatches the given key.
  delayAndroidKey(t, e) {
    var i;
    if (!this.delayedAndroidKey) {
      let n = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && Gi(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(n);
    }
    (!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = {
      key: t,
      keyCode: e,
      // Only run the key handler when no changes are detected if
      // this isn't coming right after another change, in which case
      // it is probably part of a weird chain of updates, and should
      // be ignored if it returns the DOM to its previous state.
      force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force)
    });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let t of this.observer.takeRecords())
      this.queue.push(t);
    return this.queue;
  }
  processRecords() {
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let e = -1, i = -1, n = !1;
    for (let r of t) {
      let o = this.readMutation(r);
      o && (o.typeOver && (n = !0), e == -1 ? { from: e, to: i } = o : (e = Math.min(o.from, e), i = Math.max(o.to, i)));
    }
    return { from: e, to: i, typeOver: n };
  }
  readChange() {
    let { from: t, to: e, typeOver: i } = this.processRecords(), n = this.selectionChanged && ms(this.dom, this.selectionRange);
    if (t < 0 && !n)
      return null;
    t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let r = new um(this.view, t, e, i);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  // Apply pending changes, if any
  flush(t = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    t && this.readSelectionRange();
    let e = this.readChange();
    if (!e)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, n = wf(this.view, e);
    return this.view.state == i && (e.domChanged || e.newSel && !Ln(this.view.state.selection, e.newSel.main)) && this.view.update([]), n;
  }
  readMutation(t) {
    let e = this.view.docView.tile.nearest(t.target);
    if (!e || e.isWidget())
      return null;
    if (e.markDirty(t.type == "attributes"), t.type == "childList") {
      let i = La(e, t.previousSibling || t.target.previousSibling, -1), n = La(e, t.nextSibling || t.target.nextSibling, 1);
      return {
        from: i ? e.posAfter(i) : e.posAtStart,
        to: n ? e.posBefore(n) : e.posAtEnd,
        typeOver: !1
      };
    } else return t.type == "characterData" ? { from: e.posAtStart, to: e.posAtEnd, typeOver: t.target.nodeValue == t.oldValue } : null;
  }
  setWindow(t) {
    t != this.win && (this.removeWindowListeners(this.win), this.win = t, this.addWindowListeners(this.win));
  }
  addWindowListeners(t) {
    t.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : t.addEventListener("beforeprint", this.onPrint), t.addEventListener("scroll", this.onScroll), t.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t) {
    t.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : t.removeEventListener("beforeprint", this.onPrint), t.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(t) {
    this.editContext && (this.editContext.update(t), t.startState.facet(ke) != t.state.facet(ke) && (t.view.contentDOM.editContext = t.state.facet(ke) ? this.editContext.editContext : null));
  }
  destroy() {
    var t, e, i;
    this.stop(), (t = this.intersection) === null || t === void 0 || t.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let n of this.scrollTargets)
      n.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function La(s, t, e) {
  for (; t; ) {
    let i = et.get(t);
    if (i && i.parent == s)
      return i;
    let n = t.parentNode;
    t = n != s.dom ? n : e > 0 ? t.nextSibling : t.previousSibling;
  }
  return null;
}
function Za(s, t) {
  let e = t.startContainer, i = t.startOffset, n = t.endContainer, r = t.endOffset, o = s.docView.domAtPos(s.state.selection.main.anchor, 1);
  return gs(o.node, o.offset, n, r) && ([e, i, n, r] = [n, r, e, i]), { anchorNode: e, anchorOffset: i, focusNode: n, focusOffset: r };
}
function Im(s, t) {
  if (t.getComposedRanges) {
    let n = t.getComposedRanges(s.root)[0];
    if (n)
      return Za(s, n);
  }
  let e = null;
  function i(n) {
    n.preventDefault(), n.stopImmediatePropagation(), e = n.getTargetRanges()[0];
  }
  return s.contentDOM.addEventListener("beforeinput", i, !0), s.dom.ownerDocument.execCommand("indent"), s.contentDOM.removeEventListener("beforeinput", i, !0), e ? Za(s, e) : null;
}
class Um {
  constructor(t) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(t.state);
    let e = this.editContext = new window.EditContext({
      text: t.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(t.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let n = t.state.selection.main, { anchor: r, head: o } = n, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      t.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: !1 });
      let h = a - l > i.text.length;
      l == this.from && r < this.from ? l = r : a == this.to && r > this.to && (a = r);
      let c = yf(t.state.sliceDoc(l, a), i.text, (h ? n.from : n.to) - l, h ? "end" : null);
      if (!c) {
        let u = x.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        Ln(u, n) || t.dispatch({ selection: u, userEvent: "select" });
        return;
      }
      let f = {
        from: c.from + l,
        to: c.toA + l,
        insert: A.of(i.text.slice(c.from, c.toB).split(`
`))
      };
      if ((R.mac || R.android) && f.from == o - 1 && /^\. ?$/.test(i.text) && t.contentDOM.getAttribute("autocorrect") == "off" && (f = { from: l, to: a, insert: A.of([i.text.replace(".", " ")]) }), this.pendingContextChange = f, !t.state.readOnly) {
        let u = this.to - this.from + (f.to - f.from + f.insert.length);
        El(t, f, x.single(this.toEditorPos(i.selectionStart, u), this.toEditorPos(i.selectionEnd, u)));
      }
      this.pendingContextChange && (this.revertPending(t.state), this.setSelection(t.state)), f.from < f.to && !f.insert.length && t.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(e.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(e.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let n = [], r = null;
      for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
        let a = t.coordsForChar(o);
        r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect(), n.push(r);
      }
      e.updateCharacterBounds(i.rangeStart, n);
    }, this.handlers.textformatupdate = (i) => {
      let n = [];
      for (let r of i.getTextFormats()) {
        let o = r.underlineStyle, l = r.underlineThickness;
        if (!/none/i.test(o) && !/none/i.test(l)) {
          let a = this.toEditorPos(r.rangeStart), h = this.toEditorPos(r.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${/^[a-z]/.test(o) ? o + " " : o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${/thin/i.test(l) ? 1 : 2}px`;
            n.push(N.mark({ attributes: { style: c } }).range(a, h));
          }
        }
      }
      t.dispatch({ effects: hf.of(N.set(n)) });
    }, this.handlers.compositionstart = () => {
      t.inputState.composing < 0 && (t.inputState.composing = 0, t.inputState.compositionFirstChange = !0);
    }, this.handlers.compositionend = () => {
      if (t.inputState.composing = -1, t.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(t.state);
      }
    };
    for (let i in this.handlers)
      e.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let n = Ss(i.root);
      n && n.rangeCount && this.editContext.updateSelectionBounds(n.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(t) {
    let e = 0, i = !1, n = this.pendingContextChange;
    return t.changes.iterChanges((r, o, l, a, h) => {
      if (i)
        return;
      let c = h.length - (o - r);
      if (n && o >= n.to)
        if (n.from == r && n.to == o && n.insert.eq(h)) {
          n = this.pendingContextChange = null, e += c, this.to += c;
          return;
        } else
          n = null, this.revertPending(t.state);
      if (r += e, o += e, o <= this.from)
        this.from += c, this.to += c;
      else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + h.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), h.toString()), this.to += c;
      }
      e += c;
    }), n && !i && this.revertPending(t.state), !i;
  }
  update(t) {
    let e = this.pendingContextChange, i = t.startState.selection.main;
    this.composing && (this.composing.drifted || !t.changes.touchesRange(i.from, i.to) && t.transactions.some((n) => !n.isUserEvent("input.type") && n.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = t.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(t) || !this.rangeIsValid(t.state) ? (this.pendingContextChange = null, this.reset(t.state)) : (t.docChanged || t.selectionSet || e) && this.setSelection(t.state), (t.geometryChanged || t.docChanged || t.selectionSet) && t.view.requestMeasure(this.measureReq);
  }
  resetRange(t) {
    let { head: e } = t.selection.main;
    this.from = Math.max(
      0,
      e - 1e4
      /* CxVp.Margin */
    ), this.to = Math.min(
      t.doc.length,
      e + 1e4
      /* CxVp.Margin */
    );
  }
  reset(t) {
    this.resetRange(t), this.editContext.updateText(0, this.editContext.text.length, t.doc.sliceString(this.from, this.to)), this.setSelection(t);
  }
  revertPending(t) {
    let e = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(e.from), this.toContextPos(e.from + e.insert.length), t.doc.sliceString(e.from, e.to));
  }
  setSelection(t) {
    let { main: e } = t.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, e.anchor))), n = this.toContextPos(e.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != n) && this.editContext.updateSelection(i, n);
  }
  rangeIsValid(t) {
    let { head: e } = t.selection.main;
    return !(this.from > 0 && e - this.from < 500 || this.to < t.doc.length && this.to - e < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(t, e = this.to - this.from) {
    t = Math.min(t, e);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (t - i.contextBase) : t + this.from;
  }
  toContextPos(t) {
    let e = this.composing;
    return e && e.drifted ? e.contextBase + (t - e.editorBase) : t - this.from;
  }
  destroy() {
    for (let t in this.handlers)
      this.editContext.removeEventListener(t, this.handlers[t]);
  }
}
class D {
  /**
  The current editor state.
  */
  get state() {
    return this.viewState.state;
  }
  /**
  To be able to display large documents without consuming too much
  memory or overloading the browser, CodeMirror only draws the
  code that is visible (plus a margin around it) to the DOM. This
  property tells you the extent of the current drawn viewport, in
  document positions.
  */
  get viewport() {
    return this.viewState.viewport;
  }
  /**
  When there are, for example, large collapsed ranges in the
  viewport, its size can be a lot bigger than the actual visible
  content. Thus, if you are doing something like styling the
  content in the viewport, it is preferable to only do so for
  these ranges, which are the subset of the viewport that is
  actually drawn.
  */
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  /**
  Returns false when the editor is entirely scrolled out of view
  or otherwise hidden.
  */
  get inView() {
    return this.viewState.inView;
  }
  /**
  Indicates whether the user is currently composing text via
  [IME](https://en.wikipedia.org/wiki/Input_method), and at least
  one change has been made in the current composition.
  */
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  /**
  Indicates whether the user is currently in composing state. Note
  that on some platforms, like Android, this will be the case a
  lot, since just putting the cursor on a word starts a
  composition there.
  */
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  /**
  The document or shadow root that the view lives in.
  */
  get root() {
    return this._root;
  }
  /**
  @internal
  */
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  /**
  Construct a new view. You'll want to either provide a `parent`
  option, or put `view.dom` into your document after creating a
  view, so that the user can see the editor.
  */
  constructor(t = {}) {
    var e;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t.parent && t.parent.appendChild(this.dom);
    let { dispatch: i } = t;
    this.dispatchTransactions = t.dispatchTransactions || i && ((n) => n.forEach((r) => i(r, this))) || ((n) => this.update(n)), this.dispatch = this.dispatch.bind(this), this._root = t.root || Sp(t.parent) || document, this.viewState = new Wa(this, t.state || M.create(t)), t.scrollTo && t.scrollTo.is(Fs) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Hi).map((n) => new zr(n));
    for (let n of this.plugins)
      n.update(this);
    this.observer = new Fm(this), this.inputState = new gm(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Da(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((e = document.fonts) === null || e === void 0) && e.ready && document.fonts.ready.then(() => {
      this.viewState.mustMeasureContent = "refresh", this.requestMeasure();
    });
  }
  dispatch(...t) {
    let e = t.length == 1 && t[0] instanceof ot ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
    this.dispatchTransactions(e, this);
  }
  /**
  Update the view for the given array of transactions. This will
  update the visible document and selection to match the state
  produced by the transactions, and notify view plugins of the
  change. You should usually call
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead, which uses this
  as a primitive.
  */
  update(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e = !1, i = !1, n, r = this.state;
    for (let u of t) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    t.some((u) => u.annotation(vf)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = Cf(r, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (c = null)) : this.observer.clear(), r.facet(M.phrases) != this.state.facet(M.phrases))
      return this.setState(r);
    n = Wn.create(this, r, t), n.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of t) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection, { x: p, y: m } = this.state.facet(D.cursorScrollMargin);
          f = new Qi(d.empty ? d : x.cursor(d.head, d.head > d.anchor ? -1 : 1), "nearest", "nearest", m, p);
        }
        for (let d of u.effects)
          d.is(Fs) && (f = d.value.clip(this.state));
      }
      this.viewState.update(n, f), this.bidiCache = _n.update(this.bidiCache, n.changes), n.empty || (this.updatePlugins(n), this.inputState.update(n)), e = this.docView.update(n), this.state.facet(hs) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (n.startState.facet(Js) != n.state.facet(Js) && (this.viewState.mustMeasureContent = !0), (e || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e && this.docViewUpdate(), !n.empty)
      for (let u of this.state.facet(Io))
        try {
          u(n);
        } catch (d) {
          Dt(this.state, d, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !wf(this, c) && h.force && Gi(this.contentDOM, h.key, h.keyCode);
    });
  }
  /**
  Reset the view to the given state. (This will cause the entire
  document to be redrawn and all view plugins to be reinitialized,
  so you should probably only use it when the new state isn't
  derived from the old state. Otherwise, use
  [`dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch) instead.)
  */
  setState(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t;
      return;
    }
    this.updateState = 2;
    let e = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new Wa(this, t), this.plugins = t.facet(Hi).map((i) => new zr(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new Da(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e && this.focus(), this.requestMeasure();
  }
  updatePlugins(t) {
    let e = t.startState.facet(Hi), i = t.state.facet(Hi);
    if (e != i) {
      let n = [];
      for (let r of i) {
        let o = e.indexOf(r);
        if (o < 0)
          n.push(new zr(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = t, n.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != t && r.destroy(this);
      this.plugins = n, this.pluginMap.clear();
    } else
      for (let n of this.plugins)
        n.mustUpdate = t;
    for (let n = 0; n < this.plugins.length; n++)
      this.plugins[n].update(this);
    e != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let t of this.plugins) {
      let e = t.value;
      if (e && e.docViewUpdate)
        try {
          e.docViewUpdate(this);
        } catch (i) {
          Dt(this.state, i, "doc view update listener");
        }
    }
  }
  /**
  @internal
  */
  measure(t = !0) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, t && this.observer.forceFlush();
    let e = null, i = this.viewState.scrollParent, n = this.viewState.getScrollOffset(), { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(n - this.viewState.scrollOffset) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (_c(i || this.win))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(n);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure();
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return Dt(this.state, p), _a;
          }
        }), f = Wn.create(this, this.state, []), u = !1;
        f.flags |= a, e ? e.flags |= a : e = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f), u && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (c[d] != _a)
            try {
              let p = h[d];
              p.write && p.write(c[d], this);
            } catch (p) {
              Dt(this.state, p);
            }
        if (u && this.docView.updateSelection(!0), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = ((r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o) / this.scaleY;
              if ((p > 1 || p < -1) && (i == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                n = n + p, i ? i.scrollTop += p : this.win.scrollBy(0, p), o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (e && !e.empty)
      for (let l of this.state.facet(Io))
        l(e);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return tl + " " + (this.state.facet(Jo) ? Hf : Tf) + " " + this.state.facet(Js);
  }
  updateAttrs() {
    let t = qa(this, cf, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), e = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(ke) ? "true" : "false",
      class: "cm-content",
      style: `${R.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (e["aria-readonly"] = "true"), qa(this, Rl, e);
    let i = this.observer.ignore(() => {
      let n = Oa(this.contentDOM, this.contentAttrs, e), r = Oa(this.dom, this.editorAttrs, t);
      return n || r;
    });
    return this.editorAttrs = t, this.contentAttrs = e, i;
  }
  showAnnouncements(t) {
    let e = !0;
    for (let i of t)
      for (let n of i.effects)
        if (n.is(D.announce)) {
          e && (this.announceDOM.textContent = ""), e = !1;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = n.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(hs);
    let t = this.state.facet(D.cspNonce);
    Me.mount(this.root, this.styleModules.concat(_m).reverse(), t ? { nonce: t } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  /**
  Schedule a layout measurement, optionally providing callbacks to
  do custom DOM measuring followed by a DOM write phase. Using
  this is preferable reading DOM layout directly from, for
  example, an event handler, because it'll make sure measuring and
  drawing done by other components is synchronized, avoiding
  unnecessary DOM layout computations.
  */
  requestMeasure(t) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t) {
      if (this.measureRequests.indexOf(t) > -1)
        return;
      if (t.key != null) {
        for (let e = 0; e < this.measureRequests.length; e++)
          if (this.measureRequests[e].key === t.key) {
            this.measureRequests[e] = t;
            return;
          }
      }
      this.measureRequests.push(t);
    }
  }
  /**
  Get the value of a specific plugin, if present. Note that
  plugins that crash can be dropped from a view, so even when you
  know you registered a given plugin, it is recommended to check
  the return value of this method.
  */
  plugin(t) {
    let e = this.pluginMap.get(t);
    return (e === void 0 || e && e.plugin != t) && this.pluginMap.set(t, e = this.plugins.find((i) => i.plugin == t) || null), e && e.update(this).value;
  }
  /**
  The top position of the document, in screen coordinates. This
  may be negative when the editor is scrolled down. Points
  directly to the top of the first line, not above the padding.
  */
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  /**
  Reports the padding above and below the document.
  */
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  /**
  If the editor is transformed with CSS, this provides the scale
  along the X axis. Otherwise, it will just be 1. Note that
  transforms other than translation and scaling are not supported.
  */
  get scaleX() {
    return this.viewState.scaleX;
  }
  /**
  Provide the CSS transformed scale along the Y axis.
  */
  get scaleY() {
    return this.viewState.scaleY;
  }
  /**
  Find the text line or block widget at the given vertical
  position (which is interpreted as relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop)).
  */
  elementAtHeight(t) {
    return this.readMeasured(), this.viewState.elementAtHeight(t);
  }
  /**
  Find the line block (see
  [`lineBlockAt`](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt)) at the given
  height, again interpreted relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop).
  */
  lineBlockAtHeight(t) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
  }
  /**
  Get the extent and vertical position of all [line
  blocks](https://codemirror.net/6/docs/ref/#view.EditorView.lineBlockAt) in the viewport. Positions
  are relative to the [top of the
  document](https://codemirror.net/6/docs/ref/#view.EditorView.documentTop);
  */
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  /**
  Find the line block around the given document position. A line
  block is a range delimited on both sides by either a
  non-[hidden](https://codemirror.net/6/docs/ref/#view.Decoration^replace) line break, or the
  start/end of the document. It will usually just hold a line of
  text, but may be broken into multiple textblocks by block
  widgets.
  */
  lineBlockAt(t) {
    return this.viewState.lineBlockAt(t);
  }
  /**
  The editor's total content height.
  */
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  /**
  Move a cursor position by [grapheme
  cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak). `forward` determines whether
  the motion is away from the line start, or towards it. In
  bidirectional text, the line is traversed in visual order, using
  the editor's [text direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection).
  When the start position was the last one on the line, the
  returned position will be across the line break. If there is no
  further line, the original position is returned.
  
  By default, this method moves over a single cluster. The
  optional `by` argument can be used to move across more. It will
  be called with the first cluster as argument, and should return
  a predicate that determines, for each subsequent cluster,
  whether it should also be moved over.
  */
  moveByChar(t, e, i) {
    return Wr(this, t, Ra(this, t, e, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(t, e) {
    return Wr(this, t, Ra(this, t, e, (i) => om(this, t.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(t, e) {
    let i = this.bidiSpans(t), n = this.textDirectionAt(t.from), r = i[e ? i.length - 1 : 0];
    return x.cursor(r.side(e, n) + t.from, r.forward(!e, n) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(t, e, i = !0) {
    return rm(this, t, e, i);
  }
  /**
  Move a cursor position vertically. When `distance` isn't given,
  it defaults to moving to the next line (including wrapped
  lines). Otherwise, `distance` should provide a positive distance
  in pixels.
  
  When `start` has a
  [`goalColumn`](https://codemirror.net/6/docs/ref/#state.SelectionRange.goalColumn), the vertical
  motion will use that as a target horizontal position. Otherwise,
  the cursor's own horizontal position is used. The returned
  cursor will have its goal column set to whichever column was
  used.
  */
  moveVertically(t, e, i) {
    return Wr(this, t, lm(this, t, e, i));
  }
  /**
  Find the DOM parent node and offset (child offset if `node` is
  an element, character offset when it is a text node) at the
  given document position.
  
  Note that for positions that aren't currently in
  `visibleRanges`, the resulting DOM position isn't necessarily
  meaningful (it may just point before or after a placeholder
  element).
  */
  domAtPos(t, e = 1) {
    return this.docView.domAtPos(t, e);
  }
  /**
  Find the document position at the given DOM node. Can be useful
  for associating positions with DOM events. Will raise an error
  when `node` isn't part of the editor content.
  */
  posAtDOM(t, e = 0) {
    return this.docView.posFromDOM(t, e);
  }
  posAtCoords(t, e = !0) {
    this.readMeasured();
    let i = Xo(this, t, e);
    return i && i.pos;
  }
  posAndSideAtCoords(t, e = !0) {
    return this.readMeasured(), Xo(this, t, e);
  }
  /**
  Get the screen coordinates at the given document position.
  `side` determines whether the coordinates are based on the
  element before (-1) or after (1) the position (if no element is
  available on the given side, the method will transparently use
  another strategy to get reasonable coordinates).
  */
  coordsAtPos(t, e = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(t, e);
    if (!i || i.left == i.right)
      return i;
    let n = this.state.doc.lineAt(t), r = this.bidiSpans(n), o = r[he.find(r, t - n.from, -1, e)];
    return Bn(i, o.dir == I.LTR == e > 0);
  }
  /**
  Return the rectangle around a given character. If `pos` does not
  point in front of a character that is in the viewport and
  rendered (i.e. not replaced, not a line break), this will return
  null. For space characters that are a line wrap point, this will
  return the position before the line break.
  */
  coordsForChar(t) {
    return this.readMeasured(), this.docView.coordsForChar(t);
  }
  /**
  The default width of a character in the editor. May not
  accurately reflect the width of all characters (given variable
  width fonts or styling of invididual ranges).
  */
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  /**
  The default height of a line in the editor. May not be accurate
  for all lines.
  */
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  /**
  The text direction
  ([`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)
  CSS property) of the editor's content element.
  */
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  /**
  Find the text direction of the block at the given position, as
  assigned by CSS. If
  [`perLineTextDirection`](https://codemirror.net/6/docs/ref/#view.EditorView^perLineTextDirection)
  isn't enabled, or the given position is outside of the viewport,
  this will always return the same as
  [`textDirection`](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection). Note that
  this may trigger a DOM layout.
  */
  textDirectionAt(t) {
    return !this.state.facet(of) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
  }
  /**
  Whether this editor [wraps lines](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)
  (as determined by the
  [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)
  CSS property of its content element).
  */
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  /**
  Returns the bidirectional text structure of the given line
  (which should be in the current document) as an array of span
  objects. The order of these spans matches the [text
  direction](https://codemirror.net/6/docs/ref/#view.EditorView.textDirection)—if that is
  left-to-right, the leftmost spans come first, otherwise the
  rightmost spans come first.
  */
  bidiSpans(t) {
    if (t.length > Vm)
      return Xc(t.length);
    let e = this.textDirectionAt(t.from), i;
    for (let r of this.bidiCache)
      if (r.from == t.from && r.dir == e && (r.fresh || Vc(r.isolates, i = Sa(this, t))))
        return r.order;
    i || (i = Sa(this, t));
    let n = jp(t.text, e, i);
    return this.bidiCache.push(new _n(t.from, t.to, e, i, !0, n)), n;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var t;
    return (this.dom.ownerDocument.hasFocus() || R.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      Zc(this.contentDOM), this.docView.updateSelection();
    });
  }
  /**
  Update the [root](https://codemirror.net/6/docs/ref/##view.EditorViewConfig.root) in which the editor lives. This is only
  necessary when moving the editor's existing DOM to a new window or shadow root.
  */
  setRoot(t) {
    this._root != t && (this._root = t, this.observer.setWindow((t.nodeType == 9 ? t : t.ownerDocument).defaultView || window), this.mountStyles());
  }
  /**
  Clean up this editor view, removing its element from the
  document, unregistering event handlers, and notifying
  plugins. The view instance can no longer be used after
  calling this.
  */
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let t of this.plugins)
      t.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
  }
  /**
  Returns an effect that can be
  [added](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) to a transaction to
  cause it to scroll the given position or range into view.
  */
  static scrollIntoView(t, e = {}) {
    var i, n, r, o;
    return Fs.of(new Qi(typeof t == "number" ? x.cursor(t) : t, (i = e.y) !== null && i !== void 0 ? i : "nearest", (n = e.x) !== null && n !== void 0 ? n : "nearest", (r = e.yMargin) !== null && r !== void 0 ? r : 5, (o = e.xMargin) !== null && o !== void 0 ? o : 5));
  }
  /**
  Return an effect that resets the editor to its current (at the
  time this method was called) scroll position. Note that this
  only affects the editor's own scrollable element, not parents.
  See also
  [`EditorViewConfig.scrollTo`](https://codemirror.net/6/docs/ref/#view.EditorViewConfig.scrollTo).
  
  The effect should be used with a document identical to the one
  it was created for. Failing to do so is not an error, but may
  not scroll to the expected position. You can
  [map](https://codemirror.net/6/docs/ref/#state.StateEffect.map) the effect to account for changes.
  */
  scrollSnapshot() {
    let { scrollTop: t, scrollLeft: e } = this.scrollDOM, i = this.viewState.scrollAnchorAt(t);
    return Fs.of(new Qi(x.cursor(i.from), "start", "start", i.top - t, e, !0));
  }
  /**
  Enable or disable tab-focus mode, which disables key bindings
  for Tab and Shift-Tab, letting the browser's default
  focus-changing behavior go through instead. This is useful to
  prevent trapping keyboard users in your editor.
  
  Without argument, this toggles the mode. With a boolean, it
  enables (true) or disables it (false). Given a number, it
  temporarily enables the mode until that number of milliseconds
  have passed or another non-Tab key is pressed.
  */
  setTabFocusMode(t) {
    t == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof t == "boolean" ? this.inputState.tabFocusMode = t ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + t);
  }
  /**
  Returns an extension that can be used to add DOM event handlers.
  The value should be an object mapping event names to handler
  functions. For any given event, such functions are ordered by
  extension precedence, and the first handler to return true will
  be assumed to have handled that event, and no other handlers or
  built-in behavior will be activated for it. These are registered
  on the [content element](https://codemirror.net/6/docs/ref/#view.EditorView.contentDOM), except
  for `scroll` handlers, which will be called any time the
  editor's [scroll element](https://codemirror.net/6/docs/ref/#view.EditorView.scrollDOM) or one of
  its parent nodes is scrolled.
  */
  static domEventHandlers(t) {
    return st.define(() => ({}), { eventHandlers: t });
  }
  /**
  Create an extension that registers DOM event observers. Contrary
  to event [handlers](https://codemirror.net/6/docs/ref/#view.EditorView^domEventHandlers),
  observers can't be prevented from running by a higher-precedence
  handler returning true. They also don't prevent other handlers
  and observers from running when they return true, and should not
  call `preventDefault`.
  */
  static domEventObservers(t) {
    return st.define(() => ({}), { eventObservers: t });
  }
  /**
  Create a theme extension. The first argument can be a
  [`style-mod`](https://code.haverbeke.berlin/marijn/style-mod#documentation)
  style spec providing the styles for the theme. These will be
  prefixed with a generated class for the style.
  
  Because the selectors will be prefixed with a scope class, rule
  that directly match the editor's [wrapper
  element](https://codemirror.net/6/docs/ref/#view.EditorView.dom)—to which the scope class will be
  added—need to be explicitly differentiated by adding an `&` to
  the selector for that element—for example
  `&.cm-focused`.
  
  When `dark` is set to true, the theme will be marked as dark,
  which will cause the `&dark` rules from [base
  themes](https://codemirror.net/6/docs/ref/#view.EditorView^baseTheme) to be used (as opposed to
  `&light` when a light theme is active).
  */
  static theme(t, e) {
    let i = Me.newName(), n = [Js.of(i), hs.of(el(`.${i}`, t))];
    return e && e.dark && n.push(Jo.of(!0)), n;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(t) {
    return gi.lowest(hs.of(el("." + tl, t, Ef)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(t) {
    var e;
    let i = t.querySelector(".cm-content"), n = i && et.get(i) || et.get(t);
    return ((e = n == null ? void 0 : n.root) === null || e === void 0 ? void 0 : e.view) || null;
  }
}
D.styleModule = hs;
D.inputHandler = nf;
D.clipboardInputFilter = Cl;
D.clipboardOutputFilter = Dl;
D.scrollHandler = af;
D.focusChangeEffect = rf;
D.perLineTextDirection = of;
D.exceptionSink = sf;
D.updateListener = Io;
D.editable = ke;
D.mouseSelectionStyle = ef;
D.dragMovesSelection = tf;
D.clickAddsSelectionRange = Jc;
D.decorations = mr;
D.blockWrappers = ff;
D.outerDecorations = Tl;
D.atomicRanges = Qs;
D.bidiIsolatedRanges = uf;
D.cursorScrollMargin = /* @__PURE__ */ T.define({
  combine: (s) => {
    let t = 5, e = 5;
    for (let i of s)
      typeof i == "number" ? t = e = i : { x: t, y: e } = i;
    return { x: t, y: e };
  }
});
D.scrollMargins = df;
D.darkTheme = Jo;
D.cspNonce = /* @__PURE__ */ T.define({ combine: (s) => s.length ? s[0] : "" });
D.contentAttributes = Rl;
D.editorAttributes = cf;
D.lineWrapping = /* @__PURE__ */ D.contentAttributes.of({ class: "cm-lineWrapping" });
D.announce = /* @__PURE__ */ Y.define();
const Vm = 4096, _a = {};
class _n {
  constructor(t, e, i, n, r, o) {
    this.from = t, this.to = e, this.dir = i, this.isolates = n, this.fresh = r, this.order = o;
  }
  static update(t, e) {
    if (e.empty && !t.some((r) => r.fresh))
      return t;
    let i = [], n = t.length ? t[t.length - 1].dir : I.LTR;
    for (let r = Math.max(0, t.length - 10); r < t.length; r++) {
      let o = t[r];
      o.dir == n && !e.touchesRange(o.from, o.to) && i.push(new _n(e.mapPos(o.from, 1), e.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function qa(s, t, e) {
  for (let i = s.state.facet(t), n = i.length - 1; n >= 0; n--) {
    let r = i[n], o = typeof r == "function" ? r(s) : r;
    o && kl(o, e);
  }
  return e;
}
const Xm = R.mac ? "mac" : R.windows ? "win" : R.linux ? "linux" : "key";
function Km(s, t) {
  const e = s.split(/-(?!$)/);
  let i = e[e.length - 1];
  i == "Space" && (i = " ");
  let n, r, o, l;
  for (let a = 0; a < e.length - 1; ++a) {
    const h = e[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = !0;
    else if (/^a(lt)?$/i.test(h))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(h))
      r = !0;
    else if (/^s(hift)?$/i.test(h))
      o = !0;
    else if (/^mod$/i.test(h))
      t == "mac" ? l = !0 : r = !0;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return n && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function tn(s, t, e) {
  return t.altKey && (s = "Alt-" + s), t.ctrlKey && (s = "Ctrl-" + s), t.metaKey && (s = "Meta-" + s), e !== !1 && t.shiftKey && (s = "Shift-" + s), s;
}
const Jm = /* @__PURE__ */ gi.default(/* @__PURE__ */ D.domEventHandlers({
  keydown(s, t) {
    return Pf(jf(t.state), s, t, "editor");
  }
})), Nl = /* @__PURE__ */ T.define({ enables: Jm }), Fa = /* @__PURE__ */ new WeakMap();
function jf(s) {
  let t = s.facet(Nl), e = Fa.get(t);
  return e || Fa.set(t, e = ig(t.reduce((i, n) => i.concat(n), []))), e;
}
function tg(s, t, e) {
  return Pf(jf(s.state), t, s, e);
}
let ze = null;
const eg = 4e3;
function ig(s, t = Xm) {
  let e = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), n = (o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, h, c) => {
    var f, u;
    let d = e[o] || (e[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((w) => Km(w, t));
    for (let w = 1; w < p.length; w++) {
      let y = p.slice(0, w).join(" ");
      n(y, !0), d[y] || (d[y] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(b) => {
          let v = ze = { view: b, prefix: y, scope: o };
          return setTimeout(() => {
            ze == v && (ze = null);
          }, eg), !0;
        }]
      });
    }
    let m = p.join(" ");
    n(m, !1);
    let g = d[m] || (d[m] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0 ? void 0 : u.slice()) || []
    });
    a && g.run.push(a), h && (g.preventDefault = !0), c && (g.stopPropagation = !0);
  };
  for (let o of s) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let c = e[h] || (e[h] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: f } = o;
        for (let u in c)
          c[u].run.push((d) => f(d, il));
      }
    let a = o[t] || o.key;
    if (a)
      for (let h of l)
        r(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return e;
}
let il = null;
function Pf(s, t, e, i) {
  il = t;
  let n = $p(t), r = St(n, 0), o = le(r) == n.length && n != " ", l = "", a = !1, h = !1, c = !1;
  ze && ze.view == e && ze.scope == i && (l = ze.prefix + " ", Of.indexOf(t.keyCode) < 0 && (h = !0, ze = null));
  let f = /* @__PURE__ */ new Set(), u = (g) => {
    if (g) {
      for (let w of g.run)
        if (!f.has(w) && (f.add(w), w(e)))
          return g.stopPropagation && (c = !0), !0;
      g.preventDefault && (g.stopPropagation && (c = !0), h = !0);
    }
    return !1;
  }, d = s[i], p, m;
  return d && (u(d[l + tn(n, t, !o)]) ? a = !0 : o && (t.altKey || t.metaKey || t.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(R.windows && t.ctrlKey && t.altKey) && // Alt-combinations on macOS tend to be typed characters
  !(R.mac && t.altKey && !(t.ctrlKey || t.metaKey)) && (p = Ae[t.keyCode]) && p != n ? (u(d[l + tn(p, t, !0)]) || t.shiftKey && (m = xs[t.keyCode]) != n && m != p && u(d[l + tn(m, t, !1)])) && (a = !0) : o && t.shiftKey && u(d[l + tn(n, t, !0)]) && (a = !0), !a && u(d._any) && (a = !0)), h && (a = !0), a && c && t.stopPropagation(), il = null, a;
}
class ai {
  /**
  Create a marker with the given class and dimensions. If `width`
  is null, the DOM element will get no width style.
  */
  constructor(t, e, i, n, r) {
    this.className = t, this.left = e, this.top = i, this.width = n, this.height = r;
  }
  draw() {
    let t = document.createElement("div");
    return t.className = this.className, this.adjust(t), t;
  }
  update(t, e) {
    return e.className != this.className ? !1 : (this.adjust(t), !0);
  }
  adjust(t) {
    t.style.left = this.left + "px", t.style.top = this.top + "px", this.width != null && (t.style.width = this.width + "px"), t.style.height = this.height + "px";
  }
  eq(t) {
    return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className;
  }
  /**
  Create a set of rectangles for the given selection range,
  assigning them theclass`className`. Will create a single
  rectangle for empty ranges, and a set of selection-style
  rectangles covering the range's content (in a bidi-aware
  way) for non-empty ones.
  */
  static forRange(t, e, i) {
    if (i.empty) {
      let n = t.coordsAtPos(i.head, i.assoc || 1);
      if (!n)
        return [];
      let r = Nf(t);
      return [new ai(e, n.left - r.left, n.top - r.top, null, n.bottom - n.top)];
    } else
      return sg(t, e, i);
  }
}
function Nf(s) {
  let t = s.scrollDOM.getBoundingClientRect();
  return { left: (s.textDirection == I.LTR ? t.left : t.right - s.scrollDOM.clientWidth * s.scaleX) - s.scrollDOM.scrollLeft * s.scaleX, top: t.top - s.scrollDOM.scrollTop * s.scaleY };
}
function Ia(s, t, e, i) {
  let n = s.coordsAtPos(t, e * 2);
  if (!n)
    return i;
  let r = s.dom.getBoundingClientRect(), o = (n.top + n.bottom) / 2, l = s.posAtCoords({ x: r.left + 1, y: o }), a = s.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null ? i : { from: Math.max(i.from, Math.min(l, a)), to: Math.min(i.to, Math.max(l, a)) };
}
function sg(s, t, e) {
  if (e.to <= s.viewport.from || e.from >= s.viewport.to)
    return [];
  let i = Math.max(e.from, s.viewport.from), n = Math.min(e.to, s.viewport.to), r = s.textDirection == I.LTR, o = s.contentDOM, l = o.getBoundingClientRect(), a = Nf(s), h = o.querySelector(".cm-line"), c = h && window.getComputedStyle(h), f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), u = l.right - (c ? parseInt(c.paddingRight) : 0), d = Vo(s, i, 1), p = Vo(s, n, -1), m = d.type == ut.Text ? d : null, g = p.type == ut.Text ? p : null;
  if (m && (s.lineWrapping || d.widgetLineBreaks) && (m = Ia(s, i, 1, m)), g && (s.lineWrapping || p.widgetLineBreaks) && (g = Ia(s, n, -1, g)), m && g && m.from == g.from && m.to == g.to)
    return y(b(e.from, e.to, m));
  {
    let k = m ? b(e.from, null, m) : v(d, !1), S = g ? b(null, e.to, g) : v(p, !0), O = [];
    return (m || d).to < (g || p).from - (m && g ? 1 : 0) || d.widgetLineBreaks > 1 && k.bottom + s.defaultLineHeight / 2 < S.top ? O.push(w(f, k.bottom, u, S.top)) : k.bottom < S.top && s.elementAtHeight((k.bottom + S.top) / 2).type == ut.Text && (k.bottom = S.top = (k.bottom + S.top) / 2), y(k).concat(O).concat(y(S));
  }
  function w(k, S, O, H) {
    return new ai(t, k - a.left, S - a.top, Math.max(0, O - k), H - S);
  }
  function y({ top: k, bottom: S, horizontal: O }) {
    let H = [];
    for (let j = 0; j < O.length; j += 2)
      H.push(w(O[j], k, O[j + 1], S));
    return H;
  }
  function b(k, S, O) {
    let H = 1e9, j = -1e9, B = [];
    function G(L, U, wt, Et, te) {
      let ht = s.coordsAtPos(L, L == O.to ? -2 : 2), Gt = s.coordsAtPos(wt, wt == O.from ? 2 : -2);
      !ht || !Gt || (H = Math.min(ht.top, Gt.top, H), j = Math.max(ht.bottom, Gt.bottom, j), te == I.LTR ? B.push(r && U ? f : ht.left, r && Et ? u : Gt.right) : B.push(!r && Et ? f : Gt.left, !r && U ? u : ht.right));
    }
    let P = k ?? O.from, Z = S ?? O.to;
    for (let L of s.visibleRanges)
      if (L.to > P && L.from < Z)
        for (let U = Math.max(L.from, P), wt = Math.min(L.to, Z); ; ) {
          let Et = s.state.doc.lineAt(U);
          for (let te of s.bidiSpans(Et)) {
            let ht = te.from + Et.from, Gt = te.to + Et.from;
            if (ht >= wt)
              break;
            Gt > U && G(Math.max(ht, U), k == null && ht <= P, Math.min(Gt, wt), S == null && Gt >= Z, te.dir);
          }
          if (U = Et.to + 1, U >= wt)
            break;
        }
    return B.length == 0 && G(P, k == null, Z, S == null, s.textDirection), { top: H, bottom: j, horizontal: B };
  }
  function v(k, S) {
    let O = l.top + (S ? k.top : k.bottom);
    return { top: O, bottom: O, horizontal: [] };
  }
}
function ng(s, t) {
  return s.constructor == t.constructor && s.eq(t);
}
class rg {
  constructor(t, e) {
    this.view = t, this.layer = e, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t);
  }
  update(t) {
    t.startState.facet(vn) != t.state.facet(vn) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && (this.scale(), t.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(t) {
    this.layer.updateOnDocViewUpdate !== !1 && t.requestMeasure(this.measureReq);
  }
  setOrder(t) {
    let e = 0, i = t.facet(vn);
    for (; e < i.length && i[e] != this.layer; )
      e++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: t, scaleY: e } = this.view;
    (t != this.scaleX || e != this.scaleY) && (this.scaleX = t, this.scaleY = e, this.dom.style.transform = `scale(${1 / t}, ${1 / e})`);
  }
  draw(t) {
    if (t.length != this.drawn.length || t.some((e, i) => !ng(e, this.drawn[i]))) {
      let e = this.dom.firstChild, i = 0;
      for (let n of t)
        n.update && e && n.constructor && this.drawn[i].constructor && n.update(e, this.drawn[i]) ? (e = e.nextSibling, i++) : this.dom.insertBefore(n.draw(), e);
      for (; e; ) {
        let n = e.nextSibling;
        e.remove(), e = n;
      }
      this.drawn = t, R.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const vn = /* @__PURE__ */ T.define();
function Yf(s) {
  return [
    st.define((t) => new rg(t, s)),
    vn.of(s)
  ];
}
const Fi = /* @__PURE__ */ T.define({
  combine(s) {
    return ge(s, {
      cursorBlinkRate: 1200,
      drawRangeCursor: !0,
      iosSelectionHandles: !0
    }, {
      cursorBlinkRate: (t, e) => Math.min(t, e),
      drawRangeCursor: (t, e) => t || e
    });
  }
});
function og(s = {}) {
  return [
    Fi.of(s),
    lg,
    ag,
    hg,
    lf.of(!0)
  ];
}
function zf(s) {
  return s.startState.facet(Fi) != s.state.facet(Fi);
}
const lg = /* @__PURE__ */ Yf({
  above: !0,
  markers(s) {
    let { state: t } = s, e = t.facet(Fi), i = [];
    for (let n of t.selection.ranges) {
      let r = n == t.selection.main;
      if (n.empty || e.drawRangeCursor && !(r && R.ios && e.iosSelectionHandles)) {
        let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = n.empty ? n : x.cursor(n.head, n.assoc);
        for (let a of ai.forRange(s, o, l))
          i.push(a);
      }
    }
    return i;
  },
  update(s, t) {
    s.transactions.some((i) => i.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let e = zf(s);
    return e && Ua(s.state, t), s.docChanged || s.selectionSet || e;
  },
  mount(s, t) {
    Ua(t.state, s);
  },
  class: "cm-cursorLayer"
});
function Ua(s, t) {
  t.style.animationDuration = s.facet(Fi).cursorBlinkRate + "ms";
}
const ag = /* @__PURE__ */ Yf({
  above: !1,
  markers(s) {
    let t = [], { main: e, ranges: i } = s.state.selection;
    for (let n of i)
      if (!n.empty)
        for (let r of ai.forRange(s, "cm-selectionBackground", n))
          t.push(r);
    if (R.ios && !e.empty && s.state.facet(Fi).iosSelectionHandles) {
      for (let n of ai.forRange(s, "cm-selectionHandle cm-selectionHandle-start", x.cursor(e.from, 1)))
        t.push(n);
      for (let n of ai.forRange(s, "cm-selectionHandle cm-selectionHandle-end", x.cursor(e.to, 1)))
        t.push(n);
    }
    return t;
  },
  update(s, t) {
    return s.docChanged || s.selectionSet || s.viewportChanged || zf(s);
  },
  class: "cm-selectionLayer"
}), hg = /* @__PURE__ */ gi.highest(/* @__PURE__ */ D.theme({
  ".cm-line": {
    "& ::selection, &::selection": { backgroundColor: "transparent !important" },
    caretColor: "transparent !important"
  },
  ".cm-content": {
    caretColor: "transparent !important",
    "& :focus": {
      caretColor: "initial !important",
      "&::selection, & ::selection": {
        backgroundColor: "Highlight !important"
      }
    }
  }
})), Gf = /* @__PURE__ */ Y.define({
  map(s, t) {
    return s == null ? null : t.mapPos(s);
  }
}), fs = /* @__PURE__ */ mt.define({
  create() {
    return null;
  },
  update(s, t) {
    return s != null && (s = t.changes.mapPos(s)), t.effects.reduce((e, i) => i.is(Gf) ? i.value : e, s);
  }
}), cg = /* @__PURE__ */ st.fromClass(class {
  constructor(s) {
    this.view = s, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(s) {
    var t;
    let e = s.state.field(fs);
    e == null ? this.cursor != null && ((t = this.cursor) === null || t === void 0 || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (s.startState.field(fs) != e || s.docChanged || s.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: s } = this, t = s.state.field(fs), e = t != null && s.coordsAtPos(t);
    if (!e)
      return null;
    let i = s.scrollDOM.getBoundingClientRect();
    return {
      left: e.left - i.left + s.scrollDOM.scrollLeft * s.scaleX,
      top: e.top - i.top + s.scrollDOM.scrollTop * s.scaleY,
      height: e.bottom - e.top
    };
  }
  drawCursor(s) {
    if (this.cursor) {
      let { scaleX: t, scaleY: e } = this.view;
      s ? (this.cursor.style.left = s.left / t + "px", this.cursor.style.top = s.top / e + "px", this.cursor.style.height = s.height / e + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(s) {
    this.view.state.field(fs) != s && this.view.dispatch({ effects: Gf.of(s) });
  }
}, {
  eventObservers: {
    dragover(s) {
      this.setDropPos(this.view.posAtCoords({ x: s.clientX, y: s.clientY }));
    },
    dragleave(s) {
      (s.target == this.view.contentDOM || !this.view.contentDOM.contains(s.relatedTarget)) && this.setDropPos(null);
    },
    dragend() {
      this.setDropPos(null);
    },
    drop() {
      this.setDropPos(null);
    }
  }
});
function fg() {
  return [fs, cg];
}
function Va(s, t, e, i, n) {
  t.lastIndex = 0;
  for (let r = s.iterRange(e, i), o = e, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak)
      for (; l = t.exec(r.value); )
        n(o + l.index, l);
}
function ug(s, t) {
  let e = s.visibleRanges;
  if (e.length == 1 && e[0].from == s.viewport.from && e[0].to == s.viewport.to)
    return e;
  let i = [];
  for (let { from: n, to: r } of e)
    n = Math.max(s.state.doc.lineAt(n).from, n - t), r = Math.min(s.state.doc.lineAt(r).to, r + t), i.length && i[i.length - 1].to >= n ? i[i.length - 1].to = r : i.push({ from: n, to: r });
  return i;
}
class dg {
  /**
  Create a decorator.
  */
  constructor(t) {
    const { regexp: e, decoration: i, decorate: n, boundary: r, maxLength: o = 1e3 } = t;
    if (!e.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = e, n)
      this.addMatch = (l, a, h, c) => n(c, h, h + l[0].length, l, a);
    else if (typeof i == "function")
      this.addMatch = (l, a, h, c) => {
        let f = i(l, a, h);
        f && c(h, h + l[0].length, f);
      };
    else if (i)
      this.addMatch = (l, a, h, c) => c(h, h + l[0].length, i);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = r, this.maxLength = o;
  }
  /**
  Compute the full set of decorations for matches in the given
  view's viewport. You'll want to call this when initializing your
  plugin.
  */
  createDeco(t) {
    let e = new De(), i = e.add.bind(e);
    for (let { from: n, to: r } of ug(t, this.maxLength))
      Va(t.state.doc, this.regexp, n, r, (o, l) => this.addMatch(l, t, o, i));
    return e.finish();
  }
  /**
  Update a set of decorations for a view update. `deco` _must_ be
  the set of decorations produced by _this_ `MatchDecorator` for
  the view state before the update.
  */
  updateDeco(t, e) {
    let i = 1e9, n = -1;
    return t.docChanged && t.changes.iterChanges((r, o, l, a) => {
      a >= t.view.viewport.from && l <= t.view.viewport.to && (i = Math.min(l, i), n = Math.max(a, n));
    }), t.viewportMoved || n - i > 1e3 ? this.createDeco(t.view) : n > -1 ? this.updateRange(t.view, e.map(t.changes), i, n) : e;
  }
  updateRange(t, e, i, n) {
    for (let r of t.visibleRanges) {
      let o = Math.max(r.from, i), l = Math.min(r.to, n);
      if (l >= o) {
        let a = t.state.doc.lineAt(o), h = a.to < l ? t.state.doc.lineAt(l) : a, c = Math.max(r.from, a.from), f = Math.min(r.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              c = o;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              f = l;
              break;
            }
        }
        let u = [], d, p = (m, g, w) => u.push(w.range(m, g));
        if (a == h)
          for (this.regexp.lastIndex = c - a.from; (d = this.regexp.exec(a.text)) && d.index < f - a.from; )
            this.addMatch(d, t, d.index + a.from, p);
        else
          Va(t.state.doc, this.regexp, c, f, (m, g) => this.addMatch(g, t, m, p));
        e = e.update({ filterFrom: c, filterTo: f, filter: (m, g) => m < c || g > f, add: u });
      }
    }
    return e;
  }
}
const sl = /x/.unicode != null ? "gu" : "g", pg = /* @__PURE__ */ new RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`, sl), mg = {
  0: "null",
  7: "bell",
  8: "backspace",
  10: "newline",
  11: "vertical tab",
  13: "carriage return",
  27: "escape",
  8203: "zero width space",
  8204: "zero width non-joiner",
  8205: "zero width joiner",
  8206: "left-to-right mark",
  8207: "right-to-left mark",
  8232: "line separator",
  8237: "left-to-right override",
  8238: "right-to-left override",
  8294: "left-to-right isolate",
  8295: "right-to-left isolate",
  8297: "pop directional isolate",
  8233: "paragraph separator",
  65279: "zero width no-break space",
  65532: "object replacement"
};
let Lr = null;
function gg() {
  var s;
  if (Lr == null && typeof document < "u" && document.body) {
    let t = document.body.style;
    Lr = ((s = t.tabSize) !== null && s !== void 0 ? s : t.MozTabSize) != null;
  }
  return Lr || !1;
}
const Cn = /* @__PURE__ */ T.define({
  combine(s) {
    let t = ge(s, {
      render: null,
      specialChars: pg,
      addSpecialChars: null
    });
    return (t.replaceTabs = !gg()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, sl)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, sl)), t;
  }
});
function $g(s = {}) {
  return [Cn.of(s), wg()];
}
let Xa = null;
function wg() {
  return Xa || (Xa = st.fromClass(class {
    constructor(s) {
      this.view = s, this.decorations = N.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(s.state.facet(Cn)), this.decorations = this.decorator.createDeco(s);
    }
    makeDecorator(s) {
      return new dg({
        regexp: s.specialChars,
        decoration: (t, e, i) => {
          let { doc: n } = e.state, r = St(t[0], 0);
          if (r == 9) {
            let o = n.lineAt(i), l = e.state.tabSize, a = Xi(o.text, l, i - o.from);
            return N.replace({
              widget: new xg((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX)
            });
          }
          return this.decorationCache[r] || (this.decorationCache[r] = N.replace({ widget: new Og(s, r) }));
        },
        boundary: s.replaceTabs ? void 0 : /[^]/
      });
    }
    update(s) {
      let t = s.state.facet(Cn);
      s.startState.facet(Cn) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(s.view)) : this.decorations = this.decorator.updateDeco(s, this.decorations);
    }
  }, {
    decorations: (s) => s.decorations
  }));
}
const yg = "•";
function bg(s) {
  return s >= 32 ? yg : s == 10 ? "␤" : String.fromCharCode(9216 + s);
}
class Og extends Ee {
  constructor(t, e) {
    super(), this.options = t, this.code = e;
  }
  eq(t) {
    return t.code == this.code;
  }
  toDOM(t) {
    let e = bg(this.code), i = t.state.phrase("Control character") + " " + (mg[this.code] || "0x" + this.code.toString(16)), n = this.options.render && this.options.render(this.code, i, e);
    if (n)
      return n;
    let r = document.createElement("span");
    return r.textContent = e, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r;
  }
  ignoreEvent() {
    return !1;
  }
}
class xg extends Ee {
  constructor(t) {
    super(), this.width = t;
  }
  eq(t) {
    return t.width == this.width;
  }
  toDOM() {
    let t = document.createElement("span");
    return t.textContent = "	", t.className = "cm-tab", t.style.width = this.width + "px", t;
  }
  ignoreEvent() {
    return !1;
  }
}
function kg() {
  return vg;
}
const Sg = /* @__PURE__ */ N.line({ class: "cm-activeLine" }), vg = /* @__PURE__ */ st.fromClass(class {
  constructor(s) {
    this.decorations = this.getDeco(s);
  }
  update(s) {
    (s.docChanged || s.selectionSet) && (this.decorations = this.getDeco(s.view));
  }
  getDeco(s) {
    let t = -1, e = [];
    for (let i of s.state.selection.ranges) {
      let n = s.lineBlockAt(i.head);
      n.from > t && (e.push(Sg.range(n.from)), t = n.from);
    }
    return N.set(e);
  }
}, {
  decorations: (s) => s.decorations
}), nl = 2e3;
function Cg(s, t, e) {
  let i = Math.min(t.line, e.line), n = Math.max(t.line, e.line), r = [];
  if (t.off > nl || e.off > nl || t.col < 0 || e.col < 0) {
    let o = Math.min(t.off, e.off), l = Math.max(t.off, e.off);
    for (let a = i; a <= n; a++) {
      let h = s.doc.line(a);
      h.length <= l && r.push(x.range(h.from + o, h.to + l));
    }
  } else {
    let o = Math.min(t.col, e.col), l = Math.max(t.col, e.col);
    for (let a = i; a <= n; a++) {
      let h = s.doc.line(a), c = Go(h.text, o, s.tabSize, !0);
      if (c < 0)
        r.push(x.cursor(h.to));
      else {
        let f = Go(h.text, l, s.tabSize);
        r.push(x.range(h.from + c, h.from + f));
      }
    }
  }
  return r;
}
function Dg(s, t) {
  let e = s.coordsAtPos(s.viewport.from);
  return e ? Math.round(Math.abs((e.left - t) / s.defaultCharacterWidth)) : -1;
}
function Ka(s, t) {
  let e = s.posAtCoords({ x: t.clientX, y: t.clientY }, !1), i = s.state.doc.lineAt(e), n = e - i.from, r = n > nl ? -1 : n == i.length ? Dg(s, t.clientX) : Xi(i.text, s.state.tabSize, e - i.from);
  return { line: i.number, col: r, off: n };
}
function Rg(s, t) {
  let e = Ka(s, t), i = s.state.selection;
  return e ? {
    update(n) {
      if (n.docChanged) {
        let r = n.changes.mapPos(n.startState.doc.line(e.line).from), o = n.state.doc.lineAt(r);
        e = { line: o.number, col: e.col, off: Math.min(e.off, o.length) }, i = i.map(n.changes);
      }
    },
    get(n, r, o) {
      let l = Ka(s, n);
      if (!l)
        return i;
      let a = Cg(s.state, e, l);
      return a.length ? o ? x.create(a.concat(i.ranges)) : x.create(a) : i;
    }
  } : null;
}
function Tg(s) {
  let t = (e) => e.altKey && e.button == 0;
  return D.mouseSelectionStyle.of((e, i) => t(i) ? Rg(e, i) : null);
}
const Hg = {
  Alt: [18, (s) => !!s.altKey],
  Control: [17, (s) => !!s.ctrlKey],
  Shift: [16, (s) => !!s.shiftKey],
  Meta: [91, (s) => !!s.metaKey]
}, Eg = { style: "cursor: crosshair" };
function jg(s = {}) {
  let [t, e] = Hg[s.key || "Alt"], i = st.fromClass(class {
    constructor(n) {
      this.view = n, this.isDown = !1;
    }
    set(n) {
      this.isDown != n && (this.isDown = n, this.view.update([]));
    }
  }, {
    eventObservers: {
      keydown(n) {
        this.set(n.keyCode == t || e(n));
      },
      keyup(n) {
        (n.keyCode == t || !e(n)) && this.set(!1);
      },
      mousemove(n) {
        this.set(e(n));
      }
    }
  });
  return [
    i,
    D.contentAttributes.of((n) => {
      var r;
      return !((r = n.plugin(i)) === null || r === void 0) && r.isDown ? Eg : null;
    })
  ];
}
const en = "-10000px";
class Qf {
  constructor(t, e, i, n) {
    this.facet = e, this.createTooltipView = i, this.removeTooltipView = n, this.input = t.state.facet(e), this.tooltips = this.input.filter((o) => o);
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => r = i(o, r));
  }
  update(t, e) {
    var i;
    let n = t.state.facet(this.facet), r = n.filter((a) => a);
    if (n === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(t);
      return !1;
    }
    let o = [], l = e ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let h = r[a], c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          u && u.create == h.create && (c = f);
        }
        if (c < 0)
          o[a] = this.createTooltipView(h, a ? o[a - 1] : null), l && (l[a] = !!h.above);
        else {
          let f = o[a] = this.tooltipViews[c];
          l && (l[a] = e[c]), f.update && f.update(t);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return e && (l.forEach((a, h) => e[h] = a), e.length = l.length), this.input = n, this.tooltips = r, this.tooltipViews = o, !0;
  }
}
function Pg(s) {
  let t = s.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: t.clientHeight, right: t.clientWidth };
}
const Zr = /* @__PURE__ */ T.define({
  combine: (s) => {
    var t, e, i;
    return {
      position: R.ios ? "absolute" : ((t = s.find((n) => n.position)) === null || t === void 0 ? void 0 : t.position) || "fixed",
      parent: ((e = s.find((n) => n.parent)) === null || e === void 0 ? void 0 : e.parent) || null,
      tooltipSpace: ((i = s.find((n) => n.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || Pg
    };
  }
}), Ja = /* @__PURE__ */ new WeakMap(), Yl = /* @__PURE__ */ st.fromClass(class {
  constructor(s) {
    this.view = s, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
    let t = s.state.facet(Zr);
    this.position = t.position, this.parent = t.parent, this.classes = s.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Qf(s, zl, (e, i) => this.createTooltip(e, i), (e) => {
      this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove();
    }), this.above = this.manager.tooltips.map((e) => !!e.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e) => {
      Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), s.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let s of this.manager.tooltipViews)
        this.intersectionObserver.observe(s.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(s) {
    s.transactions.length && (this.lastTransaction = Date.now());
    let t = this.manager.update(s, this.above);
    t && this.observeIntersection();
    let e = t || s.geometryChanged, i = s.state.facet(Zr);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let n of this.manager.tooltipViews)
        n.dom.style.position = this.position;
      e = !0;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let n of this.manager.tooltipViews)
        this.container.appendChild(n.dom);
      e = !0;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    e && this.maybeMeasure();
  }
  createTooltip(s, t) {
    let e = s.create(this.view), i = t ? t.dom : null;
    if (e.dom.classList.add("cm-tooltip"), s.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let n = document.createElement("div");
      n.className = "cm-tooltip-arrow", e.dom.appendChild(n);
    }
    return e.dom.style.position = this.position, e.dom.style.top = en, e.dom.style.left = "0px", this.container.insertBefore(e.dom, i), e.mount && e.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e.dom), e;
  }
  destroy() {
    var s, t, e;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews)
      i.dom.remove(), (s = i.destroy) === null || s === void 0 || s.call(i);
    this.parent && this.container.remove(), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), (e = this.intersectionObserver) === null || e === void 0 || e.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let s = 1, t = 1, e = !1;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: r } = this.manager.tooltipViews[0];
      if (R.safari) {
        let o = r.getBoundingClientRect();
        e = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      } else
        e = !!r.offsetParent && r.offsetParent != this.container.ownerDocument.body;
    }
    if (e || this.position == "absolute")
      if (this.parent) {
        let r = this.parent.getBoundingClientRect();
        r.width && r.height && (s = r.width / this.parent.offsetWidth, t = r.height / this.parent.offsetHeight);
      } else
        ({ scaleX: s, scaleY: t } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), n = Hl(this.view);
    return {
      visible: {
        left: i.left + n.left,
        top: i.top + n.top,
        right: i.right - n.right,
        bottom: i.bottom - n.bottom
      },
      parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
      pos: this.manager.tooltips.map((r, o) => {
        let l = this.manager.tooltipViews[o];
        return l.getCoords ? l.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
      }),
      size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
      space: this.view.state.facet(Zr).tooltipSpace(this.view),
      scaleX: s,
      scaleY: t,
      makeAbsolute: e
    };
  }
  writeMeasure(s) {
    var t;
    if (s.makeAbsolute) {
      this.madeAbsolute = !0, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: e, space: i, scaleX: n, scaleY: r } = s, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: c } = h, f = s.pos[l], u = s.size[l];
      if (!f || a.clip !== !1 && (f.bottom <= Math.max(e.top, i.top) || f.top >= Math.min(e.bottom, i.bottom) || f.right < Math.max(e.left, i.left) - 0.1 || f.left > Math.min(e.right, i.right) + 0.1)) {
        c.style.top = en;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, m = u.right - u.left, g = (t = Ja.get(h)) !== null && t !== void 0 ? t : u.bottom - u.top, w = h.offset || Yg, y = this.view.textDirection == I.LTR, b = u.width > i.right - i.left ? y ? i.left : i.right - u.width : y ? Math.max(i.left, Math.min(f.left - (d ? 14 : 0) + w.x, i.right - m)) : Math.min(Math.max(i.left, f.left - m + (d ? 14 : 0) - w.x), i.right - m), v = this.above[l];
      !a.strictSide && (v ? f.top - g - p - w.y < i.top : f.bottom + g + p + w.y > i.bottom) && v == i.bottom - f.bottom > f.top - i.top && (v = this.above[l] = !v);
      let k = (v ? f.top - i.top : i.bottom - f.bottom) - p;
      if (k < g && h.resize !== !1) {
        if (k < this.view.defaultLineHeight) {
          c.style.top = en;
          continue;
        }
        Ja.set(h, g), c.style.height = (g = k) / r + "px";
      } else c.style.height && (c.style.height = "");
      let S = v ? f.top - g - p - w.y : f.bottom + p + w.y, O = b + m;
      if (h.overlap !== !0)
        for (let H of o)
          H.left < O && H.right > b && H.top < S + g && H.bottom > S && (S = v ? H.top - g - 2 - p : H.bottom + p + 2);
      if (this.position == "absolute" ? (c.style.top = (S - s.parent.top) / r + "px", th(c, (b - s.parent.left) / n)) : (c.style.top = S / r + "px", th(c, b / n)), d) {
        let H = f.left + (y ? w.x : -w.x) - (b + 14 - 7);
        d.style.left = H / n + "px";
      }
      h.overlap !== !0 && o.push({ left: b, top: S, right: O, bottom: S + g }), c.classList.toggle("cm-tooltip-above", v), c.classList.toggle("cm-tooltip-below", !v), h.positioned && h.positioned(s.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let s of this.manager.tooltipViews)
        s.dom.style.top = en;
  }
}, {
  eventObservers: {
    scroll() {
      this.maybeMeasure();
    }
  }
});
function th(s, t) {
  let e = parseInt(s.style.left, 10);
  (isNaN(e) || Math.abs(t - e) > 1) && (s.style.left = t + "px");
}
const Ng = /* @__PURE__ */ D.baseTheme({
  ".cm-tooltip": {
    zIndex: 500,
    boxSizing: "border-box"
  },
  "&light .cm-tooltip": {
    border: "1px solid #bbb",
    backgroundColor: "#f5f5f5"
  },
  "&light .cm-tooltip-section:not(:first-child)": {
    borderTop: "1px solid #bbb"
  },
  "&dark .cm-tooltip": {
    backgroundColor: "#333338",
    color: "white"
  },
  ".cm-tooltip-arrow": {
    height: "7px",
    width: `${7 * 2}px`,
    position: "absolute",
    zIndex: -1,
    overflow: "hidden",
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      width: 0,
      height: 0,
      borderLeft: "7px solid transparent",
      borderRight: "7px solid transparent"
    },
    ".cm-tooltip-above &": {
      bottom: "-7px",
      "&:before": {
        borderTop: "7px solid #bbb"
      },
      "&:after": {
        borderTop: "7px solid #f5f5f5",
        bottom: "1px"
      }
    },
    ".cm-tooltip-below &": {
      top: "-7px",
      "&:before": {
        borderBottom: "7px solid #bbb"
      },
      "&:after": {
        borderBottom: "7px solid #f5f5f5",
        top: "1px"
      }
    }
  },
  "&dark .cm-tooltip .cm-tooltip-arrow": {
    "&:before": {
      borderTopColor: "#333338",
      borderBottomColor: "#333338"
    },
    "&:after": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    }
  }
}), Yg = { x: 0, y: 0 }, zl = /* @__PURE__ */ T.define({
  enables: [Yl, Ng]
}), qn = /* @__PURE__ */ T.define({
  combine: (s) => s.reduce((t, e) => t.concat(e), [])
});
class yr {
  // Needs to be static so that host tooltip instances always match
  static create(t) {
    return new yr(t);
  }
  constructor(t) {
    this.view = t, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Qf(t, qn, (e, i) => this.createHostedView(e, i), (e) => e.dom.remove());
  }
  createHostedView(t, e) {
    let i = t.create(this.view);
    return i.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i.dom, e ? e.dom.nextSibling : this.dom.firstChild), this.mounted && i.mount && i.mount(this.view), i;
  }
  mount(t) {
    for (let e of this.manager.tooltipViews)
      e.mount && e.mount(t);
    this.mounted = !0;
  }
  positioned(t) {
    for (let e of this.manager.tooltipViews)
      e.positioned && e.positioned(t);
  }
  update(t) {
    this.manager.update(t);
  }
  destroy() {
    var t;
    for (let e of this.manager.tooltipViews)
      (t = e.destroy) === null || t === void 0 || t.call(e);
  }
  passProp(t) {
    let e;
    for (let i of this.manager.tooltipViews) {
      let n = i[t];
      if (n !== void 0) {
        if (e === void 0)
          e = n;
        else if (e !== n)
          return;
      }
    }
    return e;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const zg = /* @__PURE__ */ zl.compute([qn], (s) => {
  let t = s.facet(qn);
  return t.length === 0 ? null : {
    pos: Math.min(...t.map((e) => e.pos)),
    end: Math.max(...t.map((e) => {
      var i;
      return (i = e.end) !== null && i !== void 0 ? i : e.pos;
    })),
    create: yr.create,
    above: t[0].above,
    arrow: t.some((e) => e.arrow)
  };
});
class Gg {
  constructor(t, e, i, n, r) {
    this.view = t, this.source = e, this.field = i, this.setHover = n, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: t.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let t = Date.now() - this.lastMove.time;
    t < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: t, lastMove: e } = this, i = t.docView.tile.nearest(e.target);
    if (!i)
      return;
    let n, r = 1;
    if (i.isWidget())
      n = i.posAtStart;
    else {
      if (n = t.posAtCoords(e), n == null)
        return;
      let l = t.coordsAtPos(n);
      if (!l || e.y < l.top || e.y > l.bottom || e.x < l.left - t.defaultCharacterWidth || e.x > l.right + t.defaultCharacterWidth)
        return;
      let a = t.bidiSpans(t.state.doc.lineAt(n)).find((c) => c.from <= n && c.to >= n), h = a && a.dir == I.RTL ? -1 : 1;
      r = e.x < l.left ? -h : h;
    }
    let o = this.source(t, n, r);
    if (o != null && o.then) {
      let l = this.pending = { pos: n };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && !(Array.isArray(a) && !a.length) && t.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => Dt(t.state, a, "hover tooltip"));
    } else o && !(Array.isArray(o) && !o.length) && t.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let t = this.view.plugin(Yl), e = t ? t.manager.tooltips.findIndex((i) => i.create == yr.create) : -1;
    return e > -1 ? t.manager.tooltipViews[e] : null;
  }
  mousemove(t) {
    var e, i;
    this.lastMove = { x: t.clientX, y: t.clientY, target: t.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: n, tooltip: r } = this;
    if (n.length && r && !Qg(r.dom, t) || this.pending) {
      let { pos: o } = n[0] || this.pending, l = (i = (e = n[0]) === null || e === void 0 ? void 0 : e.end) !== null && i !== void 0 ? i : o;
      (o == l ? this.view.posAtCoords(this.lastMove) != o : !Bg(this.view, o, l, t.clientX, t.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(t) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: e } = this;
    if (e.length) {
      let { tooltip: i } = this;
      i && i.dom.contains(t.relatedTarget) ? this.watchTooltipLeave(i.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(t) {
    let e = (i) => {
      t.removeEventListener("mouseleave", e), this.active.length && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    t.addEventListener("mouseleave", e);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const sn = 4;
function Qg(s, t) {
  let { left: e, right: i, top: n, bottom: r } = s.getBoundingClientRect(), o;
  if (o = s.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    n = Math.min(l.top, n), r = Math.max(l.bottom, r);
  }
  return t.clientX >= e - sn && t.clientX <= i + sn && t.clientY >= n - sn && t.clientY <= r + sn;
}
function Bg(s, t, e, i, n, r) {
  let o = s.scrollDOM.getBoundingClientRect(), l = s.documentTop + s.documentPadding.top + s.contentHeight;
  if (o.left > i || o.right < i || o.top > n || Math.min(o.bottom, l) < n)
    return !1;
  let a = s.posAtCoords({ x: i, y: n }, !1);
  return a >= t && a <= e;
}
function Wg(s, t = {}) {
  let e = Y.define(), i = mt.define({
    create() {
      return [];
    },
    update(n, r) {
      if (n.length && (t.hideOnChange && (r.docChanged || r.selection) ? n = [] : t.hideOn && (n = n.filter((o) => !t.hideOn(r, o))), r.docChanged)) {
        let o = [];
        for (let l of n) {
          let a = r.changes.mapPos(l.pos, -1, bt.TrackDel);
          if (a != null) {
            let h = Object.assign(/* @__PURE__ */ Object.create(null), l);
            h.pos = a, h.end != null && (h.end = r.changes.mapPos(h.end)), o.push(h);
          }
        }
        n = o;
      }
      for (let o of r.effects)
        o.is(e) && (n = o.value), o.is(Mg) && (n = []);
      return n;
    },
    provide: (n) => qn.from(n)
  });
  return {
    active: i,
    extension: [
      i,
      st.define((n) => new Gg(
        n,
        s,
        i,
        e,
        t.hoverTime || 300
        /* Hover.Time */
      )),
      zg
    ]
  };
}
function Bf(s, t) {
  let e = s.plugin(Yl);
  if (!e)
    return null;
  let i = e.manager.tooltips.indexOf(t);
  return i < 0 ? null : e.manager.tooltipViews[i];
}
const Mg = /* @__PURE__ */ Y.define(), eh = /* @__PURE__ */ T.define({
  combine(s) {
    let t, e;
    for (let i of s)
      t = t || i.topContainer, e = e || i.bottomContainer;
    return { topContainer: t, bottomContainer: e };
  }
});
function Gl(s, t) {
  let e = s.plugin(Wf), i = e ? e.specs.indexOf(t) : -1;
  return i > -1 ? e.panels[i] : null;
}
const Wf = /* @__PURE__ */ st.fromClass(class {
  constructor(s) {
    this.input = s.state.facet(Cs), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((e) => e(s));
    let t = s.state.facet(eh);
    this.top = new nn(s, !0, t.topContainer), this.bottom = new nn(s, !1, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
    for (let e of this.panels)
      e.dom.classList.add("cm-panel"), e.mount && e.mount();
  }
  update(s) {
    let t = s.state.facet(eh);
    this.top.container != t.topContainer && (this.top.sync([]), this.top = new nn(s.view, !0, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new nn(s.view, !1, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let e = s.state.facet(Cs);
    if (e != this.input) {
      let i = e.filter((a) => a), n = [], r = [], o = [], l = [];
      for (let a of i) {
        let h = this.specs.indexOf(a), c;
        h < 0 ? (c = a(s.view), l.push(c)) : (c = this.panels[h], c.update && c.update(s)), n.push(c), (c.top ? r : o).push(c);
      }
      this.specs = i, this.panels = n, this.top.sync(r), this.bottom.sync(o);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let i of this.panels)
        i.update && i.update(s);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, {
  provide: (s) => D.scrollMargins.of((t) => {
    let e = t.plugin(s);
    return e && { top: e.top.scrollMargin(), bottom: e.bottom.scrollMargin() };
  })
});
class nn {
  constructor(t, e, i) {
    this.view = t, this.top = e, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(t) {
    for (let e of this.panels)
      e.destroy && t.indexOf(e) < 0 && e.destroy();
    this.panels = t, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let e = this.container || this.view.dom;
      e.insertBefore(this.dom, this.top ? e.firstChild : null);
    }
    let t = this.dom.firstChild;
    for (let e of this.panels)
      if (e.dom.parentNode == this.dom) {
        for (; t != e.dom; )
          t = ih(t);
        t = t.nextSibling;
      } else
        this.dom.insertBefore(e.dom, t);
    for (; t; )
      t = ih(t);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let t of this.classes.split(" "))
        t && this.container.classList.remove(t);
      for (let t of (this.classes = this.view.themeClasses).split(" "))
        t && this.container.classList.add(t);
    }
  }
}
function ih(s) {
  let t = s.nextSibling;
  return s.remove(), t;
}
const Cs = /* @__PURE__ */ T.define({
  enables: Wf
});
function Ag(s, t) {
  let e, i = new Promise((o) => e = o), n = (o) => Lg(o, t, e);
  s.state.field(_r, !1) ? s.dispatch({ effects: Mf.of(n) }) : s.dispatch({ effects: Y.appendConfig.of(_r.init(() => [n])) });
  let r = Af.of(n);
  return { close: r, result: i.then((o) => ((s.win.queueMicrotask || ((a) => s.win.setTimeout(a, 10)))(() => {
    s.state.field(_r).indexOf(n) > -1 && s.dispatch({ effects: r });
  }), o)) };
}
const _r = /* @__PURE__ */ mt.define({
  create() {
    return [];
  },
  update(s, t) {
    for (let e of t.effects)
      e.is(Mf) ? s = [e.value].concat(s) : e.is(Af) && (s = s.filter((i) => i != e.value));
    return s;
  },
  provide: (s) => Cs.computeN([s], (t) => t.field(s))
}), Mf = /* @__PURE__ */ Y.define(), Af = /* @__PURE__ */ Y.define();
function Lg(s, t, e) {
  let i = t.content ? t.content(s, () => o(null)) : null;
  if (!i) {
    if (i = _("form"), t.input) {
      let l = _("input", t.input);
      /^(text|password|number|email|tel|url)$/.test(l.type) && l.classList.add("cm-textfield"), l.name || (l.name = "input"), i.appendChild(_("label", (t.label || "") + ": ", l));
    } else
      i.appendChild(document.createTextNode(t.label || ""));
    i.appendChild(document.createTextNode(" ")), i.appendChild(_("button", { class: "cm-button", type: "submit" }, t.submitLabel || "OK"));
  }
  let n = i.nodeName == "FORM" ? [i] : i.querySelectorAll("form");
  for (let l = 0; l < n.length; l++) {
    let a = n[l];
    a.addEventListener("keydown", (h) => {
      h.keyCode == 27 ? (h.preventDefault(), o(null)) : h.keyCode == 13 && (h.preventDefault(), o(a));
    }), a.addEventListener("submit", (h) => {
      h.preventDefault(), o(a);
    });
  }
  let r = _("div", i, _("button", {
    onclick: () => o(null),
    "aria-label": s.state.phrase("close"),
    class: "cm-dialog-close",
    type: "button"
  }, ["×"]));
  t.class && (r.className = t.class), r.classList.add("cm-dialog");
  function o(l) {
    r.contains(r.ownerDocument.activeElement) && s.focus(), e(l);
  }
  return {
    dom: r,
    top: t.top,
    mount: () => {
      if (t.focus) {
        let l;
        typeof t.focus == "string" ? l = i.querySelector(t.focus) : l = i.querySelector("input") || i.querySelector("button"), l && "select" in l ? l.select() : l && "focus" in l && l.focus();
      }
    }
  };
}
class Te extends We {
  /**
  @internal
  */
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  /**
  Compare this marker to another marker of the same type.
  */
  eq(t) {
    return !1;
  }
  /**
  Called if the marker has a `toDOM` method and its representation
  was removed from a gutter.
  */
  destroy(t) {
  }
}
Te.prototype.elementClass = "";
Te.prototype.toDOM = void 0;
Te.prototype.mapMode = bt.TrackBefore;
Te.prototype.startSide = Te.prototype.endSide = -1;
Te.prototype.point = !0;
const Dn = /* @__PURE__ */ T.define(), Zg = /* @__PURE__ */ T.define(), _g = {
  class: "",
  renderEmptyElements: !1,
  elementStyle: "",
  markers: () => Q.empty,
  lineMarker: () => null,
  widgetMarker: () => null,
  lineMarkerChange: null,
  initialSpacer: null,
  updateSpacer: null,
  domEventHandlers: {},
  side: "before"
}, ws = /* @__PURE__ */ T.define();
function qg(s) {
  return [Lf(), ws.of({ ..._g, ...s })];
}
const sh = /* @__PURE__ */ T.define({
  combine: (s) => s.some((t) => t)
});
function Lf(s) {
  return [
    Fg
  ];
}
const Fg = /* @__PURE__ */ st.fromClass(class {
  constructor(s) {
    this.view = s, this.domAfter = null, this.prevViewport = s.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = s.state.facet(ws).map((t) => new rh(s, t)), this.fixed = !s.state.facet(sh);
    for (let t of this.gutters)
      t.config.side == "after" ? this.getDOMAfter().appendChild(t.dom) : this.dom.appendChild(t.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), s.scrollDOM.insertBefore(this.dom, s.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(s) {
    if (this.updateGutters(s)) {
      let t = this.prevViewport, e = s.view.viewport, i = Math.min(t.to, e.to) - Math.max(t.from, e.from);
      this.syncGutters(i < (e.to - e.from) * 0.8);
    }
    if (s.geometryChanged) {
      let t = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = t, this.domAfter && (this.domAfter.style.minHeight = t);
    }
    this.view.state.facet(sh) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = s.view.viewport;
  }
  syncGutters(s) {
    let t = this.dom.nextSibling;
    s && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let e = Q.iter(this.view.state.facet(Dn), this.view.viewport.from), i = [], n = this.gutters.map((r) => new Ig(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = !0;
        for (let l of r.type)
          if (l.type == ut.Text && o) {
            rl(e, i, l.from);
            for (let a of n)
              a.line(this.view, l, i);
            o = !1;
          } else if (l.widget)
            for (let a of n)
              a.widget(this.view, l);
      } else if (r.type == ut.Text) {
        rl(e, i, r.from);
        for (let o of n)
          o.line(this.view, r, i);
      } else if (r.widget)
        for (let o of n)
          o.widget(this.view, r);
    for (let r of n)
      r.finish();
    s && (this.view.scrollDOM.insertBefore(this.dom, t), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(s) {
    let t = s.startState.facet(ws), e = s.state.facet(ws), i = s.docChanged || s.heightChanged || s.viewportChanged || !Q.eq(s.startState.facet(Dn), s.state.facet(Dn), s.view.viewport.from, s.view.viewport.to);
    if (t == e)
      for (let n of this.gutters)
        n.update(s) && (i = !0);
    else {
      i = !0;
      let n = [];
      for (let r of e) {
        let o = t.indexOf(r);
        o < 0 ? n.push(new rh(this.view, r)) : (this.gutters[o].update(s), n.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), n.indexOf(r) < 0 && r.destroy();
      for (let r of n)
        r.config.side == "after" ? this.getDOMAfter().appendChild(r.dom) : this.dom.appendChild(r.dom);
      this.gutters = n;
    }
    return i;
  }
  destroy() {
    for (let s of this.gutters)
      s.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, {
  provide: (s) => D.scrollMargins.of((t) => {
    let e = t.plugin(s);
    if (!e || e.gutters.length == 0 || !e.fixed)
      return null;
    let i = e.dom.offsetWidth * t.scaleX, n = e.domAfter ? e.domAfter.offsetWidth * t.scaleX : 0;
    return t.textDirection == I.LTR ? { left: i, right: n } : { right: i, left: n };
  })
});
function nh(s) {
  return Array.isArray(s) ? s : [s];
}
function rl(s, t, e) {
  for (; s.value && s.from <= e; )
    s.from == e && t.push(s.value), s.next();
}
class Ig {
  constructor(t, e, i) {
    this.gutter = t, this.height = i, this.i = 0, this.cursor = Q.iter(t.markers, e.from);
  }
  addElement(t, e, i) {
    let { gutter: n } = this, r = (e.top - this.height) / t.scaleY, o = e.height / t.scaleY;
    if (this.i == n.elements.length) {
      let l = new Zf(t, o, r, i);
      n.elements.push(l), n.dom.appendChild(l.dom);
    } else
      n.elements[this.i].update(t, o, r, i);
    this.height = e.bottom, this.i++;
  }
  line(t, e, i) {
    let n = [];
    rl(this.cursor, n, e.from), i.length && (n = n.concat(i));
    let r = this.gutter.config.lineMarker(t, e, n);
    r && n.unshift(r);
    let o = this.gutter;
    n.length == 0 && !o.config.renderEmptyElements || this.addElement(t, e, n);
  }
  widget(t, e) {
    let i = this.gutter.config.widgetMarker(t, e.widget, e), n = i ? [i] : null;
    for (let r of t.state.facet(Zg)) {
      let o = r(t, e.widget, e);
      o && (n || (n = [])).push(o);
    }
    n && this.addElement(t, e, n);
  }
  finish() {
    let t = this.gutter;
    for (; t.elements.length > this.i; ) {
      let e = t.elements.pop();
      t.dom.removeChild(e.dom), e.destroy();
    }
  }
}
class rh {
  constructor(t, e) {
    this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in e.domEventHandlers)
      this.dom.addEventListener(i, (n) => {
        let r = n.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = n.clientY;
        let l = t.lineBlockAtHeight(o - t.documentTop);
        e.domEventHandlers[i](t, l, n) && n.preventDefault();
      });
    this.markers = nh(e.markers(t)), e.initialSpacer && (this.spacer = new Zf(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t) {
    let e = this.markers;
    if (this.markers = nh(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
      let n = this.config.updateSpacer(this.spacer.markers[0], t);
      n != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [n]);
    }
    let i = t.view.viewport;
    return !Q.eq(this.markers, e, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : !1);
  }
  destroy() {
    for (let t of this.elements)
      t.destroy();
  }
}
class Zf {
  constructor(t, e, i, n) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, n);
  }
  update(t, e, i, n) {
    this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), Ug(this.markers, n) || this.setMarkers(t, n);
  }
  setMarkers(t, e) {
    let i = "cm-gutterElement", n = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < e.length ? e[r++] : null, h = !1;
      if (a) {
        let c = a.elementClass;
        c && (i += " " + c);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, h = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(n);
          let f = n.nextSibling;
          n.remove(), n = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? n = n.nextSibling : this.dom.insertBefore(a.toDOM(t), n)), h && o++;
    }
    this.dom.className = i, this.markers = e;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Ug(s, t) {
  if (s.length != t.length)
    return !1;
  for (let e = 0; e < s.length; e++)
    if (!s[e].compare(t[e]))
      return !1;
  return !0;
}
const Vg = /* @__PURE__ */ T.define(), Xg = /* @__PURE__ */ T.define(), Ei = /* @__PURE__ */ T.define({
  combine(s) {
    return ge(s, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(t, e) {
        let i = Object.assign({}, t);
        for (let n in e) {
          let r = i[n], o = e[n];
          i[n] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
        }
        return i;
      }
    });
  }
});
class qr extends Te {
  constructor(t) {
    super(), this.number = t;
  }
  eq(t) {
    return this.number == t.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function Fr(s, t) {
  return s.state.facet(Ei).formatNumber(t, s.state);
}
const Kg = /* @__PURE__ */ ws.compute([Ei], (s) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(t) {
    return t.state.facet(Vg);
  },
  lineMarker(t, e, i) {
    return i.some((n) => n.toDOM) ? null : new qr(Fr(t, t.state.doc.lineAt(e.from).number));
  },
  widgetMarker: (t, e, i) => {
    for (let n of t.state.facet(Xg)) {
      let r = n(t, e, i);
      if (r)
        return r;
    }
    return null;
  },
  lineMarkerChange: (t) => t.startState.facet(Ei) != t.state.facet(Ei),
  initialSpacer(t) {
    return new qr(Fr(t, oh(t.state.doc.lines)));
  },
  updateSpacer(t, e) {
    let i = Fr(e.view, oh(e.view.state.doc.lines));
    return i == t.number ? t : new qr(i);
  },
  domEventHandlers: s.facet(Ei).domEventHandlers,
  side: "before"
}));
function Jg(s = {}) {
  return [
    Ei.of(s),
    Lf(),
    Kg
  ];
}
function oh(s) {
  let t = 9;
  for (; t < s; )
    t = t * 10 + 9;
  return t;
}
const t5 = /* @__PURE__ */ new class extends Te {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), e5 = /* @__PURE__ */ Dn.compute(["selection"], (s) => {
  let t = [], e = -1;
  for (let i of s.selection.ranges) {
    let n = s.doc.lineAt(i.head).from;
    n > e && (e = n, t.push(t5.range(n)));
  }
  return Q.of(t);
});
function i5() {
  return e5;
}
const _f = 1024;
let s5 = 0;
class Mt {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
class z {
  /**
  Create a new node prop type.
  */
  constructor(t = {}) {
    this.id = s5++, this.perNode = !!t.perNode, this.deserialize = t.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    }), this.combine = t.combine || null;
  }
  /**
  This is meant to be used with
  [`NodeSet.extend`](#common.NodeSet.extend) or
  [`LRParser.configure`](#lr.ParserConfig.props) to compute
  prop values for each node type in the set. Takes a [match
  object](#common.NodeType^match) or function that returns undefined
  if the node type doesn't get this prop, and the prop's value if
  it does.
  */
  add(t) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof t != "function" && (t = xt.match(t)), (e) => {
      let i = t(e);
      return i === void 0 ? null : [this, i];
    };
  }
}
z.closedBy = new z({ deserialize: (s) => s.split(" ") });
z.openedBy = new z({ deserialize: (s) => s.split(" ") });
z.group = new z({ deserialize: (s) => s.split(" ") });
z.isolate = new z({ deserialize: (s) => {
  if (s && s != "rtl" && s != "ltr" && s != "auto")
    throw new RangeError("Invalid value for isolate: " + s);
  return s || "auto";
} });
z.contextHash = new z({ perNode: !0 });
z.lookAhead = new z({ perNode: !0 });
z.mounted = new z({ perNode: !0 });
class Bi {
  constructor(t, e, i, n = !1) {
    this.tree = t, this.overlay = e, this.parser = i, this.bracketed = n;
  }
  /**
  @internal
  */
  static get(t) {
    return t && t.props && t.props[z.mounted.id];
  }
}
const n5 = /* @__PURE__ */ Object.create(null);
class xt {
  /**
  @internal
  */
  constructor(t, e, i, n = 0) {
    this.name = t, this.props = e, this.id = i, this.flags = n;
  }
  /**
  Define a node type.
  */
  static define(t) {
    let e = t.props && t.props.length ? /* @__PURE__ */ Object.create(null) : n5, i = (t.top ? 1 : 0) | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), n = new xt(t.name || "", e, t.id, i);
    if (t.props) {
      for (let r of t.props)
        if (Array.isArray(r) || (r = r(n)), r) {
          if (r[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          e[r[0].id] = r[1];
        }
    }
    return n;
  }
  /**
  Retrieves a node prop for this type. Will return `undefined` if
  the prop isn't present on this node.
  */
  prop(t) {
    return this.props[t.id];
  }
  /**
  True when this is the top node of a grammar.
  */
  get isTop() {
    return (this.flags & 1) > 0;
  }
  /**
  True when this node is produced by a skip rule.
  */
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  /**
  Indicates whether this is an error node.
  */
  get isError() {
    return (this.flags & 4) > 0;
  }
  /**
  When true, this node type doesn't correspond to a user-declared
  named node, for example because it is used to cache repetition.
  */
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  /**
  Returns true when this node's name or one of its
  [groups](#common.NodeProp^group) matches the given string.
  */
  is(t) {
    if (typeof t == "string") {
      if (this.name == t)
        return !0;
      let e = this.prop(z.group);
      return e ? e.indexOf(t) > -1 : !1;
    }
    return this.id == t;
  }
  /**
  Create a function from node types to arbitrary values by
  specifying an object whose property names are node or
  [group](#common.NodeProp^group) names. Often useful with
  [`NodeProp.add`](#common.NodeProp.add). You can put multiple
  names, separated by spaces, in a single property name to map
  multiple node names to a single value.
  */
  static match(t) {
    let e = /* @__PURE__ */ Object.create(null);
    for (let i in t)
      for (let n of i.split(" "))
        e[n] = t[i];
    return (i) => {
      for (let n = i.prop(z.group), r = -1; r < (n ? n.length : 0); r++) {
        let o = e[r < 0 ? i.name : n[r]];
        if (o)
          return o;
      }
    };
  }
}
xt.none = new xt(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
class Ql {
  /**
  Create a set with the given types. The `id` property of each
  type should correspond to its position within the array.
  */
  constructor(t) {
    this.types = t;
    for (let e = 0; e < t.length; e++)
      if (t[e].id != e)
        throw new RangeError("Node type ids should correspond to array positions when creating a node set");
  }
  /**
  Create a copy of this set with some node properties added. The
  arguments to this method can be created with
  [`NodeProp.add`](#common.NodeProp.add).
  */
  extend(...t) {
    let e = [];
    for (let i of this.types) {
      let n = null;
      for (let r of t) {
        let o = r(i);
        if (o) {
          n || (n = Object.assign({}, i.props));
          let l = o[1], a = o[0];
          a.combine && a.id in n && (l = a.combine(n[a.id], l)), n[a.id] = l;
        }
      }
      e.push(n ? new xt(i.name, n, i.id, i.flags) : i);
    }
    return new Ql(e);
  }
}
const rn = /* @__PURE__ */ new WeakMap(), lh = /* @__PURE__ */ new WeakMap();
var q;
(function(s) {
  s[s.ExcludeBuffers = 1] = "ExcludeBuffers", s[s.IncludeAnonymous = 2] = "IncludeAnonymous", s[s.IgnoreMounts = 4] = "IgnoreMounts", s[s.IgnoreOverlays = 8] = "IgnoreOverlays", s[s.EnterBracketed = 16] = "EnterBracketed";
})(q || (q = {}));
class tt {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(t, e, i, n, r) {
    if (this.type = t, this.children = e, this.positions = i, this.length = n, this.props = null, r && r.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of r)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let t = Bi.get(this);
    if (t && !t.overlay)
      return t.tree.toString();
    let e = "";
    for (let i of this.children) {
      let n = i.toString();
      n && (e && (e += ","), e += n);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "") : e;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(t = 0) {
    return new Fn(this.topNode, t);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(t, e = 0, i = 0) {
    let n = rn.get(this) || this.topNode, r = new Fn(n);
    return r.moveTo(t, e), rn.set(this, r._tree), r;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new Tt(this, 0, 0, null);
  }
  /**
  Get the [syntax node](#common.SyntaxNode) at the given position.
  If `side` is -1, this will move into nodes that end at the
  position. If 1, it'll move into nodes that start at the
  position. With 0, it'll only enter nodes that cover the position
  from both sides.
  
  Note that this will not enter
  [overlays](#common.MountedTree.overlay), and you often want
  [`resolveInner`](#common.Tree.resolveInner) instead.
  */
  resolve(t, e = 0) {
    let i = Ds(rn.get(this) || this.topNode, t, e, !1);
    return rn.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(t, e = 0) {
    let i = Ds(lh.get(this) || this.topNode, t, e, !0);
    return lh.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(t, e = 0) {
    return l5(this, t, e);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(t) {
    let { enter: e, leave: i, from: n = 0, to: r = this.length } = t, o = t.mode || 0, l = (o & q.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | q.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= r && a.to >= n && (!l && a.type.isAnonymous || e(a) !== !1)) {
        if (a.firstChild())
          continue;
        h = !0;
      }
      for (; h && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        h = !0;
      }
    }
  }
  /**
  Get the value of the given [node prop](#common.NodeProp) for this
  node. Works with both per-node and per-type props.
  */
  prop(t) {
    return t.perNode ? this.props ? this.props[t.id] : void 0 : this.type.prop(t);
  }
  /**
  Returns the node's [per-node props](#common.NodeProp.perNode) in a
  format that can be passed to the [`Tree`](#common.Tree)
  constructor.
  */
  get propValues() {
    let t = [];
    if (this.props)
      for (let e in this.props)
        t.push([+e, this.props[e]]);
    return t;
  }
  /**
  Balance the direct children of this tree, producing a copy of
  which may have children grouped into subtrees with type
  [`NodeType.none`](#common.NodeType^none).
  */
  balance(t = {}) {
    return this.children.length <= 8 ? this : Ml(xt.none, this.children, this.positions, 0, this.children.length, 0, this.length, (e, i, n) => new tt(this.type, e, i, n, this.propValues), t.makeTree || ((e, i, n) => new tt(xt.none, e, i, n)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(t) {
    return a5(t);
  }
}
tt.empty = new tt(xt.none, [], [], 0);
class Bl {
  constructor(t, e) {
    this.buffer = t, this.index = e;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Bl(this.buffer, this.index);
  }
}
class Ze {
  /**
  Create a tree buffer.
  */
  constructor(t, e, i) {
    this.buffer = t, this.length = e, this.set = i;
  }
  /**
  @internal
  */
  get type() {
    return xt.none;
  }
  /**
  @internal
  */
  toString() {
    let t = [];
    for (let e = 0; e < this.buffer.length; )
      t.push(this.childString(e)), e = this.buffer[e + 3];
    return t.join(",");
  }
  /**
  @internal
  */
  childString(t) {
    let e = this.buffer[t], i = this.buffer[t + 3], n = this.set.types[e], r = n.name;
    if (/\W/.test(r) && !n.isError && (r = JSON.stringify(r)), t += 4, i == t)
      return r;
    let o = [];
    for (; t < i; )
      o.push(this.childString(t)), t = this.buffer[t + 3];
    return r + "(" + o.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(t, e, i, n, r) {
    let { buffer: o } = this, l = -1;
    for (let a = t; a != e && !(qf(r, n, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(t, e, i) {
    let n = this.buffer, r = new Uint16Array(e - t), o = 0;
    for (let l = t, a = 0; l < e; ) {
      r[a++] = n[l++], r[a++] = n[l++] - i;
      let h = r[a++] = n[l++] - i;
      r[a++] = n[l++] - t, o = Math.max(o, h);
    }
    return new Ze(r, o, this.set);
  }
}
function qf(s, t, e, i) {
  switch (s) {
    case -2:
      return e < t;
    case -1:
      return i >= t && e < t;
    case 0:
      return e < t && i > t;
    case 1:
      return e <= t && i > t;
    case 2:
      return i > t;
    case 4:
      return !0;
  }
}
function Ds(s, t, e, i) {
  for (var n; s.from == s.to || (e < 1 ? s.from >= t : s.from > t) || (e > -1 ? s.to <= t : s.to < t); ) {
    let o = !i && s instanceof Tt && s.index < 0 ? null : s.parent;
    if (!o)
      return s;
    s = o;
  }
  let r = i ? 0 : q.IgnoreOverlays;
  if (i)
    for (let o = s, l = o.parent; l; o = l, l = o.parent)
      o instanceof Tt && o.index < 0 && ((n = l.enter(t, e, r)) === null || n === void 0 ? void 0 : n.from) != o.from && (s = l);
  for (; ; ) {
    let o = s.enter(t, e, r);
    if (!o)
      return s;
    s = o;
  }
}
class Ff {
  cursor(t = 0) {
    return new Fn(this, t);
  }
  getChild(t, e = null, i = null) {
    let n = ah(this, t, e, i);
    return n.length ? n[0] : null;
  }
  getChildren(t, e = null, i = null) {
    return ah(this, t, e, i);
  }
  resolve(t, e = 0) {
    return Ds(this, t, e, !1);
  }
  resolveInner(t, e = 0) {
    return Ds(this, t, e, !0);
  }
  matchContext(t) {
    return ol(this.parent, t);
  }
  enterUnfinishedNodesBefore(t) {
    let e = this.childBefore(t), i = this;
    for (; e; ) {
      let n = e.lastChild;
      if (!n || n.to != e.to)
        break;
      n.type.isError && n.from == n.to ? (i = e, e = n.prevSibling) : e = n;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class Tt extends Ff {
  constructor(t, e, i, n) {
    super(), this._tree = t, this.from = e, this.index = i, this._parent = n;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(t, e, i, n, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = e > 0 ? l.length : -1; t != h; t += e) {
        let c = l[t], f = a[t] + o.from, u;
        if (!(!(r & q.EnterBracketed && c instanceof tt && (u = Bi.get(c)) && !u.overlay && u.bracketed && i >= f && i <= f + c.length) && !qf(n, i, f, f + c.length))) {
          if (c instanceof Ze) {
            if (r & q.ExcludeBuffers)
              continue;
            let d = c.findChild(0, c.buffer.length, e, i - f, n);
            if (d > -1)
              return new Qe(new r5(o, c, t, f), null, d);
          } else if (r & q.IncludeAnonymous || !c.type.isAnonymous || Wl(c)) {
            let d;
            if (!(r & q.IgnoreMounts) && (d = Bi.get(c)) && !d.overlay)
              return new Tt(d.tree, f, t, o);
            let p = new Tt(c, f, t, o);
            return r & q.IncludeAnonymous || !p.type.isAnonymous ? p : p.nextChild(e < 0 ? c.children.length - 1 : 0, e, i, n, r);
          }
        }
      }
      if (r & q.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? t = o.index + e : t = e < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(
      0,
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(t) {
    return this.nextChild(
      0,
      1,
      t,
      2
      /* Side.After */
    );
  }
  childBefore(t) {
    return this.nextChild(
      this._tree.children.length - 1,
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  prop(t) {
    return this._tree.prop(t);
  }
  enter(t, e, i = 0) {
    let n;
    if (!(i & q.IgnoreOverlays) && (n = Bi.get(this._tree)) && n.overlay) {
      let r = t - this.from, o = i & q.EnterBracketed && n.bracketed;
      for (let { from: l, to: a } of n.overlay)
        if ((e > 0 || o ? l <= r : l < r) && (e < 0 || o ? a >= r : a > r))
          return new Tt(n.tree, n.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, t, e, i);
  }
  nextSignificantParent() {
    let t = this;
    for (; t.type.isAnonymous && t._parent; )
      t = t._parent;
    return t;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index + 1,
      1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(
      this.index - 1,
      -1,
      0,
      4
      /* Side.DontCare */
    ) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  /**
  @internal
  */
  toString() {
    return this._tree.toString();
  }
}
function ah(s, t, e, i) {
  let n = s.cursor(), r = [];
  if (!n.firstChild())
    return r;
  if (e != null) {
    for (let o = !1; !o; )
      if (o = n.type.is(e), !n.nextSibling())
        return r;
  }
  for (; ; ) {
    if (i != null && n.type.is(i))
      return r;
    if (n.type.is(t) && r.push(n.node), !n.nextSibling())
      return i == null ? r : [];
  }
}
function ol(s, t, e = t.length - 1) {
  for (let i = s; e >= 0; i = i.parent) {
    if (!i)
      return !1;
    if (!i.type.isAnonymous) {
      if (t[e] && t[e] != i.name)
        return !1;
      e--;
    }
  }
  return !0;
}
class r5 {
  constructor(t, e, i, n) {
    this.parent = t, this.buffer = e, this.index = i, this.start = n;
  }
}
class Qe extends Ff {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(t, e, i) {
    super(), this.context = t, this._parent = e, this.index = i, this.type = t.buffer.set.types[t.buffer.buffer[i]];
  }
  child(t, e, i) {
    let { buffer: n } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], t, e - this.context.start, i);
    return r < 0 ? null : new Qe(this.context, this, r);
  }
  get firstChild() {
    return this.child(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  get lastChild() {
    return this.child(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  childAfter(t) {
    return this.child(
      1,
      t,
      2
      /* Side.After */
    );
  }
  childBefore(t) {
    return this.child(
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  prop(t) {
    return this.type.prop(t);
  }
  enter(t, e, i = 0) {
    if (i & q.ExcludeBuffers)
      return null;
    let { buffer: n } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
    return r < 0 ? null : new Qe(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(t) {
    return this._parent ? null : this.context.parent.nextChild(
      this.context.index + t,
      t,
      0,
      4
      /* Side.DontCare */
    );
  }
  get nextSibling() {
    let { buffer: t } = this.context, e = t.buffer[this.index + 3];
    return e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new Qe(this.context, this._parent, e) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: t } = this.context, e = this._parent ? this._parent.index + 4 : 0;
    return this.index == e ? this.externalSibling(-1) : new Qe(this.context, this._parent, t.findChild(
      e,
      this.index,
      -1,
      0,
      4
      /* Side.DontCare */
    ));
  }
  get tree() {
    return null;
  }
  toTree() {
    let t = [], e = [], { buffer: i } = this.context, n = this.index + 4, r = i.buffer[this.index + 3];
    if (r > n) {
      let o = i.buffer[this.index + 1];
      t.push(i.slice(n, r, o)), e.push(0);
    }
    return new tt(this.type, t, e, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function If(s) {
  if (!s.length)
    return null;
  let t = 0, e = s[0];
  for (let r = 1; r < s.length; r++) {
    let o = s[r];
    (o.from > e.from || o.to < e.to) && (e = o, t = r);
  }
  let i = e instanceof Tt && e.index < 0 ? null : e.parent, n = s.slice();
  return i ? n[t] = i : n.splice(t, 1), new o5(n, e);
}
class o5 {
  constructor(t, e) {
    this.heads = t, this.node = e;
  }
  get next() {
    return If(this.heads);
  }
}
function l5(s, t, e) {
  let i = s.resolveInner(t, e), n = null;
  for (let r = i instanceof Tt ? i : i.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (n || (n = [i])).push(o.resolve(t, e)), r = o;
    } else {
      let o = Bi.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= t && o.overlay[o.overlay.length - 1].to >= t) {
        let l = new Tt(o.tree, o.overlay[0].from + r.from, -1, r);
        (n || (n = [i])).push(Ds(l, t, e, !1));
      }
    }
  return n ? If(n) : i;
}
class Fn {
  /**
  Shorthand for `.type.name`.
  */
  get name() {
    return this.type.name;
  }
  /**
  @internal
  */
  constructor(t, e = 0) {
    if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = e & ~q.EnterBracketed, t instanceof Tt)
      this.yieldNode(t);
    else {
      this._tree = t.context.parent, this.buffer = t.context;
      for (let i = t._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = t, this.yieldBuf(t.index);
    }
  }
  yieldNode(t) {
    return t ? (this._tree = t, this.type = t.type, this.from = t.from, this.to = t.to, !0) : !1;
  }
  yieldBuf(t, e) {
    this.index = t;
    let { start: i, buffer: n } = this.buffer;
    return this.type = e || n.set.types[n.buffer[t]], this.from = i + n.buffer[t + 1], this.to = i + n.buffer[t + 2], !0;
  }
  /**
  @internal
  */
  yield(t) {
    return t ? t instanceof Tt ? (this.buffer = null, this.yieldNode(t)) : (this.buffer = t.context, this.yieldBuf(t.index, t.type)) : !1;
  }
  /**
  @internal
  */
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  /**
  @internal
  */
  enterChild(t, e, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(t < 0 ? this._tree._tree.children.length - 1 : 0, t, e, i, this.mode));
    let { buffer: n } = this.buffer, r = n.findChild(this.index + 4, n.buffer[this.index + 3], t, e - this.buffer.start, i);
    return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
  }
  /**
  Move the cursor to this node's first child. When this returns
  false, the node has no child, and the cursor has not been moved.
  */
  firstChild() {
    return this.enterChild(
      1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to this node's last child.
  */
  lastChild() {
    return this.enterChild(
      -1,
      0,
      4
      /* Side.DontCare */
    );
  }
  /**
  Move the cursor to the first child that ends after `pos`.
  */
  childAfter(t) {
    return this.enterChild(
      1,
      t,
      2
      /* Side.After */
    );
  }
  /**
  Move to the last child that starts before `pos`.
  */
  childBefore(t) {
    return this.enterChild(
      -1,
      t,
      -2
      /* Side.Before */
    );
  }
  /**
  Move the cursor to the child around `pos`. If side is -1 the
  child may end at that position, when 1 it may start there. This
  will also enter [overlaid](#common.MountedTree.overlay)
  [mounted](#common.NodeProp^mounted) trees unless `overlays` is
  set to false.
  */
  enter(t, e, i = this.mode) {
    return this.buffer ? i & q.ExcludeBuffers ? !1 : this.enterChild(1, t, e) : this.yield(this._tree.enter(t, e, i));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & q.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let t = this.mode & q.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(t);
  }
  /**
  @internal
  */
  sibling(t) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t, t, 0, 4, this.mode)) : !1;
    let { buffer: e } = this.buffer, i = this.stack.length - 1;
    if (t < 0) {
      let n = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != n)
        return this.yieldBuf(e.findChild(
          n,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let n = e.buffer[this.index + 3];
      if (n < (i < 0 ? e.buffer.length : e.buffer[this.stack[i] + 3]))
        return this.yieldBuf(n);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + t, t, 0, 4, this.mode)) : !1;
  }
  /**
  Move to this node's next sibling, if any.
  */
  nextSibling() {
    return this.sibling(1);
  }
  /**
  Move to this node's previous sibling, if any.
  */
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(t) {
    let e, i, { buffer: n } = this;
    if (n) {
      if (t > 0) {
        if (this.index < n.buffer.buffer.length)
          return !1;
      } else
        for (let r = 0; r < this.index; r++)
          if (n.buffer.buffer[r + 3] < this.index)
            return !1;
      ({ index: e, parent: i } = n);
    } else
      ({ index: e, _parent: i } = this._tree);
    for (; i; { index: e, _parent: i } = i)
      if (e > -1)
        for (let r = e + t, o = t < 0 ? -1 : i._tree.children.length; r != o; r += t) {
          let l = i._tree.children[r];
          if (this.mode & q.IncludeAnonymous || l instanceof Ze || !l.type.isAnonymous || Wl(l))
            return !1;
        }
    return !0;
  }
  move(t, e) {
    if (e && this.enterChild(
      t,
      0,
      4
      /* Side.DontCare */
    ))
      return !0;
    for (; ; ) {
      if (this.sibling(t))
        return !0;
      if (this.atLastNode(t) || !this.parent())
        return !1;
    }
  }
  /**
  Move to the next node in a
  [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR)
  traversal, going from a node to its first child or, if the
  current node is empty or `enter` is false, its next sibling or
  the next sibling of the first parent node that has one.
  */
  next(t = !0) {
    return this.move(1, t);
  }
  /**
  Move to the next node in a last-to-first pre-order traversal. A
  node is followed by its last child or, if it has none, its
  previous sibling or the previous sibling of the first parent
  node that has one.
  */
  prev(t = !0) {
    return this.move(-1, t);
  }
  /**
  Move the cursor to the innermost node that covers `pos`. If
  `side` is -1, it will enter nodes that end at `pos`. If it is 1,
  it will enter nodes that start at `pos`.
  */
  moveTo(t, e = 0) {
    for (; (this.from == this.to || (e < 1 ? this.from >= t : this.from > t) || (e > -1 ? this.to <= t : this.to < t)) && this.parent(); )
      ;
    for (; this.enterChild(1, t, e); )
      ;
    return this;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) at the cursor's current
  position.
  */
  get node() {
    if (!this.buffer)
      return this._tree;
    let t = this.bufferNode, e = null, i = 0;
    if (t && t.context == this.buffer)
      t: for (let n = this.index, r = this.stack.length; r >= 0; ) {
        for (let o = t; o; o = o._parent)
          if (o.index == n) {
            if (n == this.index)
              return o;
            e = o, i = r + 1;
            break t;
          }
        n = this.stack[--r];
      }
    for (let n = i; n < this.stack.length; n++)
      e = new Qe(this.buffer, e, this.stack[n]);
    return this.bufferNode = new Qe(this.buffer, e, this.index);
  }
  /**
  Get the [tree](#common.Tree) that represents the current node, if
  any. Will return null when the node is in a [tree
  buffer](#common.TreeBuffer).
  */
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  /**
  Iterate over the current node and all its descendants, calling
  `enter` when entering a node and `leave`, if given, when leaving
  one. When `enter` returns `false`, any children of that node are
  skipped, and `leave` isn't called for it.
  */
  iterate(t, e) {
    for (let i = 0; ; ) {
      let n = !1;
      if (this.type.isAnonymous || t(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (n = !0);
      }
      for (; ; ) {
        if (n && e && e(this), n = this.type.isAnonymous, !i)
          return;
        if (this.nextSibling())
          break;
        this.parent(), i--, n = !0;
      }
    }
  }
  /**
  Test whether the current node matches a given context—a sequence
  of direct parent node names. Empty strings in the context array
  are treated as wildcards.
  */
  matchContext(t) {
    if (!this.buffer)
      return ol(this.node.parent, t);
    let { buffer: e } = this.buffer, { types: i } = e.set;
    for (let n = t.length - 1, r = this.stack.length - 1; n >= 0; r--) {
      if (r < 0)
        return ol(this._tree, t, n);
      let o = i[e.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (t[n] && t[n] != o.name)
          return !1;
        n--;
      }
    }
    return !0;
  }
}
function Wl(s) {
  return s.children.some((t) => t instanceof Ze || !t.type.isAnonymous || Wl(t));
}
function a5(s) {
  var t;
  let { buffer: e, nodeSet: i, maxBufferLength: n = _f, reused: r = [], minRepeatType: o = i.types.length } = s, l = Array.isArray(e) ? new Bl(e, e.length) : e, a = i.types, h = 0, c = 0;
  function f(k, S, O, H, j, B) {
    let { id: G, start: P, end: Z, size: L } = l, U = c, wt = h;
    if (L < 0)
      if (l.next(), L == -1) {
        let we = r[G];
        O.push(we), H.push(P - k);
        return;
      } else if (L == -3) {
        h = G;
        return;
      } else if (L == -4) {
        c = G;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${L}`);
    let Et = a[G], te, ht, Gt = P - k;
    if (Z - P <= n && (ht = g(l.pos - S, j))) {
      let we = new Uint16Array(ht.size - ht.skip), Qt = l.pos - ht.size, ee = we.length;
      for (; l.pos > Qt; )
        ee = w(ht.start, we, ee);
      te = new Ze(we, Z - ht.start, i), Gt = ht.start - k;
    } else {
      let we = l.pos - L;
      l.next();
      let Qt = [], ee = [], Ve = G >= o ? G : -1, wi = 0, Ls = Z;
      for (; l.pos > we; )
        Ve >= 0 && l.id == Ve && l.size >= 0 ? (l.end <= Ls - n && (p(Qt, ee, P, wi, l.end, Ls, Ve, U, wt), wi = Qt.length, Ls = l.end), l.next()) : B > 2500 ? u(P, we, Qt, ee) : f(P, we, Qt, ee, Ve, B + 1);
      if (Ve >= 0 && wi > 0 && wi < Qt.length && p(Qt, ee, P, wi, P, Ls, Ve, U, wt), Qt.reverse(), ee.reverse(), Ve > -1 && wi > 0) {
        let na = d(Et, wt);
        te = Ml(Et, Qt, ee, 0, Qt.length, 0, Z - P, na, na);
      } else
        te = m(Et, Qt, ee, Z - P, U - Z, wt);
    }
    O.push(te), H.push(Gt);
  }
  function u(k, S, O, H) {
    let j = [], B = 0, G = -1;
    for (; l.pos > S; ) {
      let { id: P, start: Z, end: L, size: U } = l;
      if (U > 4)
        l.next();
      else {
        if (G > -1 && Z < G)
          break;
        G < 0 && (G = L - n), j.push(P, Z, L), B++, l.next();
      }
    }
    if (B) {
      let P = new Uint16Array(B * 4), Z = j[j.length - 2];
      for (let L = j.length - 3, U = 0; L >= 0; L -= 3)
        P[U++] = j[L], P[U++] = j[L + 1] - Z, P[U++] = j[L + 2] - Z, P[U++] = U;
      O.push(new Ze(P, j[2] - Z, i)), H.push(Z - k);
    }
  }
  function d(k, S) {
    return (O, H, j) => {
      let B = 0, G = O.length - 1, P, Z;
      if (G >= 0 && (P = O[G]) instanceof tt) {
        if (!G && P.type == k && P.length == j)
          return P;
        (Z = P.prop(z.lookAhead)) && (B = H[G] + P.length + Z);
      }
      return m(k, O, H, j, B, S);
    };
  }
  function p(k, S, O, H, j, B, G, P, Z) {
    let L = [], U = [];
    for (; k.length > H; )
      L.push(k.pop()), U.push(S.pop() + O - j);
    k.push(m(i.types[G], L, U, B - j, P - B, Z)), S.push(j - O);
  }
  function m(k, S, O, H, j, B, G) {
    if (B) {
      let P = [z.contextHash, B];
      G = G ? [P].concat(G) : [P];
    }
    if (j > 25) {
      let P = [z.lookAhead, j];
      G = G ? [P].concat(G) : [P];
    }
    return new tt(k, S, O, H, G);
  }
  function g(k, S) {
    let O = l.fork(), H = 0, j = 0, B = 0, G = O.end - n, P = { size: 0, start: 0, skip: 0 };
    t: for (let Z = O.pos - k; O.pos > Z; ) {
      let L = O.size;
      if (O.id == S && L >= 0) {
        P.size = H, P.start = j, P.skip = B, B += 4, H += 4, O.next();
        continue;
      }
      let U = O.pos - L;
      if (L < 0 || U < Z || O.start < G)
        break;
      let wt = O.id >= o ? 4 : 0, Et = O.start;
      for (O.next(); O.pos > U; ) {
        if (O.size < 0)
          if (O.size == -3 || O.size == -4)
            wt += 4;
          else
            break t;
        else O.id >= o && (wt += 4);
        O.next();
      }
      j = Et, H += L, B += wt;
    }
    return (S < 0 || H == k) && (P.size = H, P.start = j, P.skip = B), P.size > 4 ? P : void 0;
  }
  function w(k, S, O) {
    let { id: H, start: j, end: B, size: G } = l;
    if (l.next(), G >= 0 && H < o) {
      let P = O;
      if (G > 4) {
        let Z = l.pos - (G - 4);
        for (; l.pos > Z; )
          O = w(k, S, O);
      }
      S[--O] = P, S[--O] = B - k, S[--O] = j - k, S[--O] = H;
    } else G == -3 ? h = H : G == -4 && (c = H);
    return O;
  }
  let y = [], b = [];
  for (; l.pos > 0; )
    f(s.start || 0, s.bufferStart || 0, y, b, -1, 0);
  let v = (t = s.length) !== null && t !== void 0 ? t : y.length ? b[0] + y[0].length : 0;
  return new tt(a[s.topID], y.reverse(), b.reverse(), v);
}
const hh = /* @__PURE__ */ new WeakMap();
function Rn(s, t) {
  if (!s.isAnonymous || t instanceof Ze || t.type != s)
    return 1;
  let e = hh.get(t);
  if (e == null) {
    e = 1;
    for (let i of t.children) {
      if (i.type != s || !(i instanceof tt)) {
        e = 1;
        break;
      }
      e += Rn(s, i);
    }
    hh.set(t, e);
  }
  return e;
}
function Ml(s, t, e, i, n, r, o, l, a) {
  let h = 0;
  for (let p = i; p < n; p++)
    h += Rn(s, t[p]);
  let c = Math.ceil(
    h * 1.5 / 8
    /* Balance.BranchFactor */
  ), f = [], u = [];
  function d(p, m, g, w, y) {
    for (let b = g; b < w; ) {
      let v = b, k = m[b], S = Rn(s, p[b]);
      for (b++; b < w; b++) {
        let O = Rn(s, p[b]);
        if (S + O >= c)
          break;
        S += O;
      }
      if (b == v + 1) {
        if (S > c) {
          let O = p[v];
          d(O.children, O.positions, 0, O.children.length, m[v] + y);
          continue;
        }
        f.push(p[v]);
      } else {
        let O = m[b - 1] + p[b - 1].length - k;
        f.push(Ml(s, p, m, v, b, k, O, null, a));
      }
      u.push(k + y - r);
    }
  }
  return d(t, e, i, n, 0), (l || a)(f, u, o);
}
class Ce {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(t, e, i, n, r = !1, o = !1) {
    this.from = t, this.to = e, this.tree = i, this.offset = n, this.open = (r ? 1 : 0) | (o ? 2 : 0);
  }
  /**
  Whether the start of the fragment represents the start of a
  parse, or the end of a change. (In the second case, it may not
  be safe to reuse some nodes at the start, depending on the
  parsing algorithm.)
  */
  get openStart() {
    return (this.open & 1) > 0;
  }
  /**
  Whether the end of the fragment represents the end of a
  full-document parse, or the start of a change.
  */
  get openEnd() {
    return (this.open & 2) > 0;
  }
  /**
  Create a set of fragments from a freshly parsed tree, or update
  an existing set of fragments by replacing the ones that overlap
  with a tree with content from the new tree. When `partial` is
  true, the parse is treated as incomplete, and the resulting
  fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
  true.
  */
  static addTree(t, e = [], i = !1) {
    let n = [new Ce(0, t.length, t, 0, !1, i)];
    for (let r of e)
      r.to > t.length && n.push(r);
    return n;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(t, e, i = 128) {
    if (!e.length)
      return t;
    let n = [], r = 1, o = t.length ? t[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let c = l < e.length ? e[l] : null, f = c ? c.fromA : 1e9;
      if (f - a >= i)
        for (; o && o.from < f; ) {
          let u = o;
          if (a >= u.from || f <= u.to || h) {
            let d = Math.max(u.from, a) - h, p = Math.min(u.to, f) - h;
            u = d >= p ? null : new Ce(d, p, u.tree, u.offset + h, l > 0, !!c);
          }
          if (u && n.push(u), o.to > f)
            break;
          o = r < t.length ? t[r++] : null;
        }
      if (!c)
        break;
      a = c.toA, h = c.toA - c.toB;
    }
    return n;
  }
}
class Uf {
  /**
  Start a parse, returning a [partial parse](#common.PartialParse)
  object. [`fragments`](#common.TreeFragment) can be passed in to
  make the parse incremental.
  
  By default, the entire input is parsed. You can pass `ranges`,
  which should be a sorted array of non-empty, non-overlapping
  ranges, to parse only those ranges. The tree returned in that
  case will start at `ranges[0].from`.
  */
  startParse(t, e, i) {
    return typeof t == "string" && (t = new h5(t)), i = i ? i.length ? i.map((n) => new Mt(n.from, n.to)) : [new Mt(0, 0)] : [new Mt(0, t.length)], this.createParse(t, e || [], i);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(t, e, i) {
    let n = this.startParse(t, e, i);
    for (; ; ) {
      let r = n.advance();
      if (r)
        return r;
    }
  }
}
class h5 {
  constructor(t) {
    this.string = t;
  }
  get length() {
    return this.string.length;
  }
  chunk(t) {
    return this.string.slice(t);
  }
  get lineChunks() {
    return !1;
  }
  read(t, e) {
    return this.string.slice(t, e);
  }
}
function c5(s) {
  return (t, e, i, n) => new u5(t, s, e, i, n);
}
class ch {
  constructor(t, e, i, n, r, o) {
    this.parser = t, this.parse = e, this.overlay = i, this.bracketed = n, this.target = r, this.from = o;
  }
}
function fh(s) {
  if (!s.length || s.some((t) => t.from >= t.to))
    throw new RangeError("Invalid inner parse ranges given: " + JSON.stringify(s));
}
class f5 {
  constructor(t, e, i, n, r, o, l, a) {
    this.parser = t, this.predicate = e, this.mounts = i, this.index = n, this.start = r, this.bracketed = o, this.target = l, this.prev = a, this.depth = 0, this.ranges = [];
  }
}
const ll = new z({ perNode: !0 });
class u5 {
  constructor(t, e, i, n, r) {
    this.nest = e, this.input = i, this.fragments = n, this.ranges = r, this.inner = [], this.innerDone = 0, this.baseTree = null, this.stoppedAt = null, this.baseParse = t;
  }
  advance() {
    if (this.baseParse) {
      let i = this.baseParse.advance();
      if (!i)
        return null;
      if (this.baseParse = null, this.baseTree = i, this.startInner(), this.stoppedAt != null)
        for (let n of this.inner)
          n.parse.stopAt(this.stoppedAt);
    }
    if (this.innerDone == this.inner.length) {
      let i = this.baseTree;
      return this.stoppedAt != null && (i = new tt(i.type, i.children, i.positions, i.length, i.propValues.concat([[ll, this.stoppedAt]]))), i;
    }
    let t = this.inner[this.innerDone], e = t.parse.advance();
    if (e) {
      this.innerDone++;
      let i = Object.assign(/* @__PURE__ */ Object.create(null), t.target.props);
      i[z.mounted.id] = new Bi(e, t.overlay, t.parser, t.bracketed), t.target.props = i;
    }
    return null;
  }
  get parsedPos() {
    if (this.baseParse)
      return 0;
    let t = this.input.length;
    for (let e = this.innerDone; e < this.inner.length; e++)
      this.inner[e].from < t && (t = Math.min(t, this.inner[e].parse.parsedPos));
    return t;
  }
  stopAt(t) {
    if (this.stoppedAt = t, this.baseParse)
      this.baseParse.stopAt(t);
    else
      for (let e = this.innerDone; e < this.inner.length; e++)
        this.inner[e].parse.stopAt(t);
  }
  startInner() {
    let t = new m5(this.fragments), e = null, i = null, n = new Fn(new Tt(this.baseTree, this.ranges[0].from, 0, null), q.IncludeAnonymous | q.IgnoreMounts);
    t: for (let r, o; ; ) {
      let l = !0, a;
      if (this.stoppedAt != null && n.from >= this.stoppedAt)
        l = !1;
      else if (t.hasNode(n)) {
        if (e) {
          let h = e.mounts.find((c) => c.frag.from <= n.from && c.frag.to >= n.to && c.mount.overlay);
          if (h)
            for (let c of h.mount.overlay) {
              let f = c.from + h.pos, u = c.to + h.pos;
              f >= n.from && u <= n.to && !e.ranges.some((d) => d.from < u && d.to > f) && e.ranges.push({ from: f, to: u });
            }
        }
        l = !1;
      } else if (i && (o = d5(i.ranges, n.from, n.to)))
        l = o != 2;
      else if (!n.type.isAnonymous && (r = this.nest(n, this.input)) && (n.from < n.to || !r.overlay)) {
        n.tree || (p5(n), e && e.depth++, i && i.depth++);
        let h = t.findMounts(n.from, r.parser);
        if (typeof r.overlay == "function")
          e = new f5(r.parser, r.overlay, h, this.inner.length, n.from, !!r.bracketed, n.tree, e);
        else {
          let c = ph(this.ranges, r.overlay || (n.from < n.to ? [new Mt(n.from, n.to)] : []));
          c.length && fh(c), (c.length || !r.overlay) && this.inner.push(new ch(r.parser, c.length ? r.parser.startParse(this.input, mh(h, c), c) : r.parser.startParse(""), r.overlay ? r.overlay.map((f) => new Mt(f.from - n.from, f.to - n.from)) : null, !!r.bracketed, n.tree, c.length ? c[0].from : n.from)), r.overlay ? c.length && (i = { ranges: c, depth: 0, prev: i }) : l = !1;
        }
      } else if (e && (a = e.predicate(n)) && (a === !0 && (a = new Mt(n.from, n.to)), a.from < a.to)) {
        let h = e.ranges.length - 1;
        h >= 0 && e.ranges[h].to == a.from ? e.ranges[h] = { from: e.ranges[h].from, to: a.to } : e.ranges.push(a);
      }
      if (l && n.firstChild())
        e && e.depth++, i && i.depth++;
      else
        for (; !n.nextSibling(); ) {
          if (!n.parent())
            break t;
          if (e && !--e.depth) {
            let h = ph(this.ranges, e.ranges);
            h.length && (fh(h), this.inner.splice(e.index, 0, new ch(e.parser, e.parser.startParse(this.input, mh(e.mounts, h), h), e.ranges.map((c) => new Mt(c.from - e.start, c.to - e.start)), e.bracketed, e.target, h[0].from))), e = e.prev;
          }
          i && !--i.depth && (i = i.prev);
        }
    }
  }
}
function d5(s, t, e) {
  for (let i of s) {
    if (i.from >= e)
      break;
    if (i.to > t)
      return i.from <= t && i.to >= e ? 2 : 1;
  }
  return 0;
}
function uh(s, t, e, i, n, r) {
  if (t < e) {
    let o = s.buffer[t + 1];
    i.push(s.slice(t, e, o)), n.push(o - r);
  }
}
function p5(s) {
  let { node: t } = s, e = [], i = t.context.buffer;
  do
    e.push(s.index), s.parent();
  while (!s.tree);
  let n = s.tree, r = n.children.indexOf(i), o = n.children[r], l = o.buffer, a = [r];
  function h(c, f, u, d, p, m) {
    let g = e[m], w = [], y = [];
    uh(o, c, g, w, y, d);
    let b = l[g + 1], v = l[g + 2];
    a.push(w.length);
    let k = m ? h(g + 4, l[g + 3], o.set.types[l[g]], b, v - b, m - 1) : t.toTree();
    return w.push(k), y.push(b - d), uh(o, l[g + 3], f, w, y, d), new tt(u, w, y, p);
  }
  n.children[r] = h(0, l.length, xt.none, 0, o.length, e.length - 1);
  for (let c of a) {
    let f = s.tree.children[c], u = s.tree.positions[c];
    s.yield(new Tt(f, u + s.from, c, s._tree));
  }
}
class dh {
  constructor(t, e) {
    this.offset = e, this.done = !1, this.cursor = t.cursor(q.IncludeAnonymous | q.IgnoreMounts);
  }
  // Move to the first node (in pre-order) that starts at or after `pos`.
  moveTo(t) {
    let { cursor: e } = this, i = t - this.offset;
    for (; !this.done && e.from < i; )
      if (!(e.to >= t && e.enter(i, 1, q.IgnoreOverlays | q.ExcludeBuffers))) if (e.to <= t)
        e.next(!1) || (this.done = !0);
      else
        break;
  }
  hasNode(t) {
    if (this.moveTo(t.from), !this.done && this.cursor.from + this.offset == t.from && this.cursor.tree)
      for (let e = this.cursor.tree; ; ) {
        if (e == t.tree)
          return !0;
        if (e.children.length && e.positions[0] == 0 && e.children[0] instanceof tt)
          e = e.children[0];
        else
          break;
      }
    return !1;
  }
}
let m5 = class {
  constructor(t) {
    var e;
    if (this.fragments = t, this.curTo = 0, this.fragI = 0, t.length) {
      let i = this.curFrag = t[0];
      this.curTo = (e = i.tree.prop(ll)) !== null && e !== void 0 ? e : i.to, this.inner = new dh(i.tree, -i.offset);
    } else
      this.curFrag = this.inner = null;
  }
  hasNode(t) {
    for (; this.curFrag && t.from >= this.curTo; )
      this.nextFrag();
    return this.curFrag && this.curFrag.from <= t.from && this.curTo >= t.to && this.inner.hasNode(t);
  }
  nextFrag() {
    var t;
    if (this.fragI++, this.fragI == this.fragments.length)
      this.curFrag = this.inner = null;
    else {
      let e = this.curFrag = this.fragments[this.fragI];
      this.curTo = (t = e.tree.prop(ll)) !== null && t !== void 0 ? t : e.to, this.inner = new dh(e.tree, -e.offset);
    }
  }
  findMounts(t, e) {
    var i;
    let n = [];
    if (this.inner) {
      this.inner.cursor.moveTo(t, 1);
      for (let r = this.inner.cursor.node; r; r = r.parent) {
        let o = (i = r.tree) === null || i === void 0 ? void 0 : i.prop(z.mounted);
        if (o && o.parser == e)
          for (let l = this.fragI; l < this.fragments.length; l++) {
            let a = this.fragments[l];
            if (a.from >= r.to)
              break;
            a.tree == this.curFrag.tree && n.push({
              frag: a,
              pos: r.from - a.offset,
              mount: o
            });
          }
      }
    }
    return n;
  }
};
function ph(s, t) {
  let e = null, i = t;
  for (let n = 1, r = 0; n < s.length; n++) {
    let o = s[n - 1].to, l = s[n].from;
    for (; r < i.length; r++) {
      let a = i[r];
      if (a.from >= l)
        break;
      a.to <= o || (e || (i = e = t.slice()), a.from < o ? (e[r] = new Mt(a.from, o), a.to > l && e.splice(r + 1, 0, new Mt(l, a.to))) : a.to > l ? e[r--] = new Mt(l, a.to) : e.splice(r--, 1));
    }
  }
  return i;
}
function g5(s, t, e, i) {
  let n = 0, r = 0, o = !1, l = !1, a = -1e9, h = [];
  for (; ; ) {
    let c = n == s.length ? 1e9 : o ? s[n].to : s[n].from, f = r == t.length ? 1e9 : l ? t[r].to : t[r].from;
    if (o != l) {
      let u = Math.max(a, e), d = Math.min(c, f, i);
      u < d && h.push(new Mt(u, d));
    }
    if (a = Math.min(c, f), a == 1e9)
      break;
    c == a && (o ? (o = !1, n++) : o = !0), f == a && (l ? (l = !1, r++) : l = !0);
  }
  return h;
}
function mh(s, t) {
  let e = [];
  for (let { pos: i, mount: n, frag: r } of s) {
    let o = i + (n.overlay ? n.overlay[0].from : 0), l = o + n.tree.length, a = Math.max(r.from, o), h = Math.min(r.to, l);
    if (n.overlay) {
      let c = n.overlay.map((u) => new Mt(u.from + i, u.to + i)), f = g5(t, c, a, h);
      for (let u = 0, d = a; ; u++) {
        let p = u == f.length, m = p ? h : f[u].from;
        if (m > d && e.push(new Ce(d, m, n.tree, -o, r.from >= d || r.openStart, r.to <= m || r.openEnd)), p)
          break;
        d = f[u].to;
      }
    } else
      e.push(new Ce(a, h, n.tree, -o, r.from >= o || r.openStart, r.to <= l || r.openEnd));
  }
  return e;
}
let $5 = 0;
class E {
  /**
  @internal
  */
  constructor(t, e, i, n) {
    this.name = t, this.set = e, this.base = i, this.modified = n, this.id = $5++;
  }
  toString() {
    let { name: t } = this;
    for (let e of this.modified)
      e.name && (t = `${e.name}(${t})`);
    return t;
  }
  static define(t, e) {
    let i = typeof t == "string" ? t : "?";
    if (t instanceof E && (e = t), e != null && e.base)
      throw new Error("Can not derive from a modified tag");
    let n = new E(i, [], null, []);
    if (n.set.push(n), e)
      for (let r of e.set)
        n.set.push(r);
    return n;
  }
  /**
  Define a tag _modifier_, which is a function that, given a tag,
  will return a tag that is a subtag of the original. Applying the
  same modifier to a twice tag will return the same value (`m1(t1)
  == m1(t1)`) and applying multiple modifiers will, regardless or
  order, produce the same tag (`m1(m2(t1)) == m2(m1(t1))`).
  
  When multiple modifiers are applied to a given base tag, each
  smaller set of modifiers is registered as a parent, so that for
  example `m1(m2(m3(t1)))` is a subtype of `m1(m2(t1))`,
  `m1(m3(t1)`, and so on.
  */
  static defineModifier(t) {
    let e = new In(t);
    return (i) => i.modified.indexOf(e) > -1 ? i : In.get(i.base || i, i.modified.concat(e).sort((n, r) => n.id - r.id));
  }
}
let w5 = 0;
class In {
  constructor(t) {
    this.name = t, this.instances = [], this.id = w5++;
  }
  static get(t, e) {
    if (!e.length)
      return t;
    let i = e[0].instances.find((l) => l.base == t && y5(e, l.modified));
    if (i)
      return i;
    let n = [], r = new E(t.name, n, t, e);
    for (let l of e)
      l.instances.push(r);
    let o = b5(e);
    for (let l of t.set)
      if (!l.modified.length)
        for (let a of o)
          n.push(In.get(l, a));
    return r;
  }
}
function y5(s, t) {
  return s.length == t.length && s.every((e, i) => e == t[i]);
}
function b5(s) {
  let t = [[]];
  for (let e = 0; e < s.length; e++)
    for (let i = 0, n = t.length; i < n; i++)
      t.push(t[i].concat(s[e]));
  return t.sort((e, i) => i.length - e.length);
}
function Fe(s) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e in s) {
    let i = s[e];
    Array.isArray(i) || (i = [i]);
    for (let n of e.split(" "))
      if (n) {
        let r = [], o = 2, l = n;
        for (let f = 0; ; ) {
          if (l == "..." && f > 0 && f + 3 == n.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u)
            throw new RangeError("Invalid path: " + n);
          if (r.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), f += u[0].length, f == n.length)
            break;
          let d = n[f++];
          if (f == n.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + n);
          l = n.slice(f);
        }
        let a = r.length - 1, h = r[a];
        if (!h)
          throw new RangeError("Invalid path: " + n);
        let c = new Rs(i, o, a > 0 ? r.slice(0, a) : null);
        t[h] = c.sort(t[h]);
      }
  }
  return Vf.add(t);
}
const Vf = new z({
  combine(s, t) {
    let e, i, n;
    for (; s || t; ) {
      if (!s || t && s.depth >= t.depth ? (n = t, t = t.next) : (n = s, s = s.next), e && e.mode == n.mode && !n.context && !e.context)
        continue;
      let r = new Rs(n.tags, n.mode, n.context);
      e ? e.next = r : i = r, e = r;
    }
    return i;
  }
});
class Rs {
  constructor(t, e, i, n) {
    this.tags = t, this.mode = e, this.context = i, this.next = n;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(t) {
    return !t || t.depth < this.depth ? (this.next = t, this) : (t.next = this.sort(t.next), t);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
Rs.empty = new Rs([], 2, null);
function Xf(s, t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let r of s)
    if (!Array.isArray(r.tag))
      e[r.tag.id] = r.class;
    else
      for (let o of r.tag)
        e[o.id] = r.class;
  let { scope: i, all: n = null } = t || {};
  return {
    style: (r) => {
      let o = n;
      for (let l of r)
        for (let a of l.set) {
          let h = e[a.id];
          if (h) {
            o = o ? o + " " + h : h;
            break;
          }
        }
      return o;
    },
    scope: i
  };
}
function O5(s, t) {
  let e = null;
  for (let i of s) {
    let n = i.style(t);
    n && (e = e ? e + " " + n : n);
  }
  return e;
}
function x5(s, t, e, i = 0, n = s.length) {
  let r = new k5(i, Array.isArray(t) ? t : [t], e);
  r.highlightRange(s.cursor(), i, n, "", r.highlighters), r.flush(n);
}
class k5 {
  constructor(t, e, i) {
    this.at = t, this.highlighters = e, this.span = i, this.class = "";
  }
  startSpan(t, e) {
    e != this.class && (this.flush(t), t > this.at && (this.at = t), this.class = e);
  }
  flush(t) {
    t > this.at && this.class && this.span(this.at, t, this.class);
  }
  highlightRange(t, e, i, n, r) {
    let { type: o, from: l, to: a } = t;
    if (l >= i || a <= e)
      return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let h = n, c = S5(t) || Rs.empty, f = O5(r, c.tags);
    if (f && (h && (h += " "), h += f, c.mode == 1 && (n += (n ? " " : "") + f)), this.startSpan(Math.max(e, l), h), c.opaque)
      return;
    let u = t.tree && t.tree.prop(z.mounted);
    if (u && u.overlay) {
      let d = t.node.enter(u.overlay[0].from + l, 1), p = this.highlighters.filter((g) => !g.scope || g.scope(u.tree.type)), m = t.firstChild();
      for (let g = 0, w = l; ; g++) {
        let y = g < u.overlay.length ? u.overlay[g] : null, b = y ? y.from + l : a, v = Math.max(e, w), k = Math.min(i, b);
        if (v < k && m)
          for (; t.from < k && (this.highlightRange(t, v, k, n, r), this.startSpan(Math.min(k, t.to), h), !(t.to >= b || !t.nextSibling())); )
            ;
        if (!y || b > i)
          break;
        w = y.to + l, w > e && (this.highlightRange(d.cursor(), Math.max(e, y.from + l), Math.min(i, w), "", p), this.startSpan(Math.min(i, w), h));
      }
      m && t.parent();
    } else if (t.firstChild()) {
      u && (n = "");
      do
        if (!(t.to <= e)) {
          if (t.from >= i)
            break;
          this.highlightRange(t, e, i, n, r), this.startSpan(Math.min(i, t.to), h);
        }
      while (t.nextSibling());
      t.parent();
    }
  }
}
function S5(s) {
  let t = s.type.prop(Vf);
  for (; t && t.context && !s.matchContext(t.context); )
    t = t.next;
  return t || null;
}
const C = E.define, on = C(), Ne = C(), gh = C(Ne), $h = C(Ne), Ye = C(), ln = C(Ye), Ir = C(Ye), re = C(), Xe = C(re), se = C(), ne = C(), al = C(), ss = C(al), an = C(), $ = {
  /**
  A comment.
  */
  comment: on,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: C(on),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: C(on),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: C(on),
  /**
  Any kind of identifier.
  */
  name: Ne,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: C(Ne),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: gh,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: C(gh),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: $h,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: C($h),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: C(Ne),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: C(Ne),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: C(Ne),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: C(Ne),
  /**
  A literal value.
  */
  literal: Ye,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: ln,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: C(ln),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: C(ln),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: C(ln),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: Ir,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: C(Ir),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: C(Ir),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: C(Ye),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: C(Ye),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: C(Ye),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: C(Ye),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: C(Ye),
  /**
  A language keyword.
  */
  keyword: se,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: C(se),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: C(se),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: C(se),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: C(se),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: C(se),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: C(se),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: C(se),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: C(se),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: C(se),
  /**
  An operator.
  */
  operator: ne,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: C(ne),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: C(ne),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: C(ne),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: C(ne),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: C(ne),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: C(ne),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: C(ne),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: C(ne),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: C(ne),
  /**
  Program or markup punctuation.
  */
  punctuation: al,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: C(al),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: ss,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: C(ss),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: C(ss),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: C(ss),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: C(ss),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: re,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: Xe,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: C(Xe),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: C(Xe),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: C(Xe),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: C(Xe),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: C(Xe),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: C(Xe),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: C(re),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: C(re),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: C(re),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: C(re),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: C(re),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: C(re),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: C(re),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: C(re),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: C(),
  /**
  Deleted text.
  */
  deleted: C(),
  /**
  Changed text.
  */
  changed: C(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: C(),
  /**
  Metadata or meta-instruction.
  */
  meta: an,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: C(an),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: C(an),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: C(an),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: E.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: E.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: E.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: E.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: E.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: E.defineModifier("special")
};
for (let s in $) {
  let t = $[s];
  t instanceof E && (t.name = s);
}
Xf([
  { tag: $.link, class: "tok-link" },
  { tag: $.heading, class: "tok-heading" },
  { tag: $.emphasis, class: "tok-emphasis" },
  { tag: $.strong, class: "tok-strong" },
  { tag: $.keyword, class: "tok-keyword" },
  { tag: $.atom, class: "tok-atom" },
  { tag: $.bool, class: "tok-bool" },
  { tag: $.url, class: "tok-url" },
  { tag: $.labelName, class: "tok-labelName" },
  { tag: $.inserted, class: "tok-inserted" },
  { tag: $.deleted, class: "tok-deleted" },
  { tag: $.literal, class: "tok-literal" },
  { tag: $.string, class: "tok-string" },
  { tag: $.number, class: "tok-number" },
  { tag: [$.regexp, $.escape, $.special($.string)], class: "tok-string2" },
  { tag: $.variableName, class: "tok-variableName" },
  { tag: $.local($.variableName), class: "tok-variableName tok-local" },
  { tag: $.definition($.variableName), class: "tok-variableName tok-definition" },
  { tag: $.special($.variableName), class: "tok-variableName2" },
  { tag: $.definition($.propertyName), class: "tok-propertyName tok-definition" },
  { tag: $.typeName, class: "tok-typeName" },
  { tag: $.namespace, class: "tok-namespace" },
  { tag: $.className, class: "tok-className" },
  { tag: $.macroName, class: "tok-macroName" },
  { tag: $.propertyName, class: "tok-propertyName" },
  { tag: $.operator, class: "tok-operator" },
  { tag: $.comment, class: "tok-comment" },
  { tag: $.meta, class: "tok-meta" },
  { tag: $.invalid, class: "tok-invalid" },
  { tag: $.punctuation, class: "tok-punctuation" }
]);
var Ur;
const ji = /* @__PURE__ */ new z();
function v5(s) {
  return T.define({
    combine: s ? (t) => t.concat(s) : void 0
  });
}
const C5 = /* @__PURE__ */ new z();
class It {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(t, e, i = [], n = "") {
    this.data = t, this.name = n, M.prototype.hasOwnProperty("tree") || Object.defineProperty(M.prototype, "tree", { get() {
      return pt(this);
    } }), this.parser = e, this.extension = [
      _e.of(this),
      M.languageData.of((r, o, l) => {
        let a = wh(r, o, l), h = a.type.prop(ji);
        if (!h)
          return [];
        let c = r.facet(h), f = a.type.prop(C5);
        if (f) {
          let u = a.resolve(o - a.from, l);
          for (let d of f)
            if (d.test(u, r)) {
              let p = r.facet(d.facet);
              return d.type == "replace" ? p : p.concat(c);
            }
        }
        return c;
      })
    ].concat(i);
  }
  /**
  Query whether this language is active at the given position.
  */
  isActiveAt(t, e, i = -1) {
    return wh(t, e, i).type.prop(ji) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(t) {
    let e = t.facet(_e);
    if ((e == null ? void 0 : e.data) == this.data)
      return [{ from: 0, to: t.doc.length }];
    if (!e || !e.allowsNesting)
      return [];
    let i = [], n = (r, o) => {
      if (r.prop(ji) == this.data) {
        i.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(z.mounted);
      if (l) {
        if (l.tree.prop(ji) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + o, to: a.to + o });
          else
            i.push({ from: o, to: o + r.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (n(l.tree, l.overlay[0].from + o), i.length > a)
            return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let h = r.children[a];
        h instanceof tt && n(h, r.positions[a] + o);
      }
    };
    return n(pt(t), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
It.setState = /* @__PURE__ */ Y.define();
function wh(s, t, e) {
  let i = s.facet(_e), n = pt(s).topNode;
  if (!i || i.allowsNesting)
    for (let r = n; r; r = r.enter(t, e, q.ExcludeBuffers | q.EnterBracketed))
      r.type.isTop && (n = r);
  return n;
}
class Vt extends It {
  constructor(t, e, i) {
    super(t, e, [], i), this.parser = e;
  }
  /**
  Define a language from a parser.
  */
  static define(t) {
    let e = v5(t.languageData);
    return new Vt(e, t.parser.configure({
      props: [ji.add((i) => i.isTop ? e : void 0)]
    }), t.name);
  }
  /**
  Create a new instance of this language with a reconfigured
  version of its parser and optionally a new name.
  */
  configure(t, e) {
    return new Vt(this.data, this.parser.configure(t), e || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function pt(s) {
  let t = s.field(It.state, !1);
  return t ? t.tree : tt.empty;
}
class D5 {
  /**
  Create an input object for the given document.
  */
  constructor(t) {
    this.doc = t, this.cursorPos = 0, this.string = "", this.cursor = t.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(t) {
    return this.string = this.cursor.next(t - this.cursorPos).value, this.cursorPos = t + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(t) {
    return this.syncTo(t), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(t, e) {
    let i = this.cursorPos - this.string.length;
    return t < i || e >= this.cursorPos ? this.doc.sliceString(t, e) : this.string.slice(t - i, e - i);
  }
}
let ns = null;
class Un {
  constructor(t, e, i = [], n, r, o, l, a) {
    this.parser = t, this.state = e, this.fragments = i, this.tree = n, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Un(t, e, [], tt.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new D5(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(t, e) {
    return e != null && e >= this.state.doc.length && (e = void 0), this.tree != tt.empty && this.isDone(e ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof t == "number") {
        let n = Date.now() + t;
        t = () => Date.now() > n;
      }
      for (this.parse || (this.parse = this.startParse()), e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length && this.parse.stopAt(e); ; ) {
        let n = this.parse.advance();
        if (n)
          if (this.fragments = this.withoutTempSkipped(Ce.addTree(n, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = n, this.parse = null, this.treeLen < (e ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return !0;
        if (t())
          return !1;
      }
    });
  }
  /**
  @internal
  */
  takeTree() {
    let t, e;
    this.parse && (t = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t) && this.parse.stopAt(t), this.withContext(() => {
      for (; !(e = this.parse.advance()); )
        ;
    }), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped(Ce.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(t) {
    let e = ns;
    ns = this;
    try {
      return t();
    } finally {
      ns = e;
    }
  }
  withoutTempSkipped(t) {
    for (let e; e = this.tempSkipped.pop(); )
      t = yh(t, e.from, e.to);
    return t;
  }
  /**
  @internal
  */
  changes(t, e) {
    let { fragments: i, tree: n, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !t.empty) {
      let a = [];
      if (t.iterChangedRanges((h, c, f, u) => a.push({ fromA: h, toA: c, fromB: f, toB: u })), i = Ce.applyChanges(i, a), n = tt.empty, r = 0, o = { from: t.mapPos(o.from, -1), to: t.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = t.mapPos(h.from, 1), f = t.mapPos(h.to, -1);
          c < f && l.push({ from: c, to: f });
        }
      }
    }
    return new Un(this.parser, e, i, n, r, o, l, this.scheduleOn);
  }
  /**
  @internal
  */
  updateViewport(t) {
    if (this.viewport.from == t.from && this.viewport.to == t.to)
      return !1;
    this.viewport = t;
    let e = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: n, to: r } = this.skipped[i];
      n < t.to && r > t.from && (this.fragments = yh(this.fragments, n, r), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= e ? !1 : (this.reset(), !0);
  }
  /**
  @internal
  */
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  /**
  Notify the parse scheduler that the given region was skipped
  because it wasn't in view, and the parse should be restarted
  when it comes into view.
  */
  skipUntilInView(t, e) {
    this.skipped.push({ from: t, to: e });
  }
  /**
  Returns a parser intended to be used as placeholder when
  asynchronously loading a nested parser. It'll skip its input and
  mark it as not-really-parsed, so that the next update will parse
  it again.
  
  When `until` is given, a reparse will be scheduled when that
  promise resolves.
  */
  static getSkippingParser(t) {
    return new class extends Uf {
      createParse(e, i, n) {
        let r = n[0].from, o = n[n.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = ns;
            if (a) {
              for (let h of n)
                a.tempSkipped.push(h);
              t && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, t]) : t);
            }
            return this.parsedPos = o, new tt(xt.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {
          }
        };
      }
    }();
  }
  /**
  @internal
  */
  isDone(t) {
    t = Math.min(t, this.state.doc.length);
    let e = this.fragments;
    return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
  }
  /**
  Get the context for the current parse, or `null` if no editor
  parse is in progress.
  */
  static get() {
    return ns;
  }
}
function yh(s, t, e) {
  return Ce.applyChanges(s, [{ fromA: t, toA: e, fromB: t, toB: e }]);
}
class Ii {
  constructor(t) {
    this.context = t, this.tree = t.tree;
  }
  apply(t) {
    if (!t.docChanged && this.tree == this.context.tree)
      return this;
    let e = this.context.changes(t.changes, t.state), i = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
    return e.work(20, i) || e.takeTree(), new Ii(e);
  }
  static init(t) {
    let e = Math.min(3e3, t.doc.length), i = Un.create(t.facet(_e).parser, t, { from: 0, to: e });
    return i.work(20, e) || i.takeTree(), new Ii(i);
  }
}
It.state = /* @__PURE__ */ mt.define({
  create: Ii.init,
  update(s, t) {
    for (let e of t.effects)
      if (e.is(It.setState))
        return e.value;
    return t.startState.facet(_e) != t.state.facet(_e) ? Ii.init(t.state) : s.apply(t);
  }
});
let Kf = (s) => {
  let t = setTimeout(
    () => s(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(t);
};
typeof requestIdleCallback < "u" && (Kf = (s) => {
  let t = -1, e = setTimeout(
    () => {
      t = requestIdleCallback(s, {
        timeout: 400
        /* Work.MinPause */
      });
    },
    100
    /* Work.MinPause */
  );
  return () => t < 0 ? clearTimeout(e) : cancelIdleCallback(t);
});
const Vr = typeof navigator < "u" && (!((Ur = navigator.scheduling) === null || Ur === void 0) && Ur.isInputPending) ? () => navigator.scheduling.isInputPending() : null, R5 = /* @__PURE__ */ st.fromClass(class {
  constructor(t) {
    this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(t) {
    let e = this.view.state.field(It.state).context;
    (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), (t.docChanged || t.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: t } = this.view, e = t.field(It.state);
    (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = Kf(this.work));
  }
  work(t) {
    this.working = null;
    let e = Date.now();
    if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: n } } = this.view, r = i.field(It.state);
    if (r.tree == r.context.tree && r.context.isDone(
      n + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, t && !Vr ? Math.max(25, t.timeRemaining() - 5) : 1e9), l = r.context.treeLen < n && i.doc.length > n + 1e3, a = r.context.work(() => Vr && Vr() || Date.now() > o, n + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: It.setState.of(new Ii(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(t) {
    t.scheduleOn && (this.workScheduled++, t.scheduleOn.then(() => this.scheduleWork()).catch((e) => Dt(this.view.state, e)).then(() => this.workScheduled--), t.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, {
  eventHandlers: { focus() {
    this.scheduleWork();
  } }
}), _e = /* @__PURE__ */ T.define({
  combine(s) {
    return s.length ? s[0] : null;
  },
  enables: (s) => [
    It.state,
    R5,
    D.contentAttributes.compute([s], (t) => {
      let e = t.facet(s);
      return e && e.name ? { "data-language": e.name } : {};
    })
  ]
});
class Ie {
  /**
  Create a language support object.
  */
  constructor(t, e = []) {
    this.language = t, this.support = e, this.extension = [t, e];
  }
}
class $e {
  constructor(t, e, i, n, r, o = void 0) {
    this.name = t, this.alias = e, this.extensions = i, this.filename = n, this.loadFunc = r, this.support = o, this.loading = null;
  }
  /**
  Start loading the the language. Will return a promise that
  resolves to a [`LanguageSupport`](https://codemirror.net/6/docs/ref/#language.LanguageSupport)
  object when the language successfully loads.
  */
  load() {
    return this.loading || (this.loading = this.loadFunc().then((t) => this.support = t, (t) => {
      throw this.loading = null, t;
    }));
  }
  /**
  Create a language description.
  */
  static of(t) {
    let { load: e, support: i } = t;
    if (!e) {
      if (!i)
        throw new RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");
      e = () => Promise.resolve(i);
    }
    return new $e(t.name, (t.alias || []).concat(t.name).map((n) => n.toLowerCase()), t.extensions || [], t.filename, e, i);
  }
  /**
  Look for a language in the given array of descriptions that
  matches the filename. Will first match
  [`filename`](https://codemirror.net/6/docs/ref/#language.LanguageDescription.filename) patterns,
  and then [extensions](https://codemirror.net/6/docs/ref/#language.LanguageDescription.extensions),
  and return the first language that matches.
  */
  static matchFilename(t, e) {
    for (let n of t)
      if (n.filename && n.filename.test(e))
        return n;
    let i = /\.([^.]+)$/.exec(e);
    if (i) {
      for (let n of t)
        if (n.extensions.indexOf(i[1]) > -1)
          return n;
    }
    return null;
  }
  /**
  Look for a language whose name or alias matches the the given
  name (case-insensitively). If `fuzzy` is true, and no direct
  matchs is found, this'll also search for a language whose name
  or alias occurs in the string (for names shorter than three
  characters, only when surrounded by non-word characters).
  */
  static matchLanguageName(t, e, i = !0) {
    e = e.toLowerCase();
    for (let n of t)
      if (n.alias.some((r) => r == e))
        return n;
    if (i)
      for (let n of t)
        for (let r of n.alias) {
          let o = e.indexOf(r);
          if (o > -1 && (r.length > 2 || !/\w/.test(e[o - 1]) && !/\w/.test(e[o + r.length])))
            return n;
        }
    return null;
  }
}
const T5 = /* @__PURE__ */ T.define(), Al = /* @__PURE__ */ T.define({
  combine: (s) => {
    if (!s.length)
      return "  ";
    let t = s[0];
    if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(s[0]));
    return t;
  }
});
function Vn(s) {
  let t = s.facet(Al);
  return t.charCodeAt(0) == 9 ? s.tabSize * t.length : t.length;
}
function Ts(s, t) {
  let e = "", i = s.tabSize, n = s.facet(Al)[0];
  if (n == "	") {
    for (; t >= i; )
      e += "	", t -= i;
    n = " ";
  }
  for (let r = 0; r < t; r++)
    e += n;
  return e;
}
function Ll(s, t) {
  s instanceof M && (s = new br(s));
  for (let i of s.state.facet(T5)) {
    let n = i(s, t);
    if (n !== void 0)
      return n;
  }
  let e = pt(s.state);
  return e.length >= t ? E5(s, e, t) : null;
}
class br {
  /**
  Create an indent context.
  */
  constructor(t, e = {}) {
    this.state = t, this.options = e, this.unit = Vn(t);
  }
  /**
  Get a description of the line at the given position, taking
  [simulated line
  breaks](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  into account. If there is such a break at `pos`, the `bias`
  argument determines whether the part of the line line before or
  after the break is used.
  */
  lineAt(t, e = 1) {
    let i = this.state.doc.lineAt(t), { simulateBreak: n, simulateDoubleBreak: r } = this.options;
    return n != null && n >= i.from && n <= i.to ? r && n == t ? { text: "", from: t } : (e < 0 ? n < t : n <= t) ? { text: i.text.slice(n - i.from), from: n } : { text: i.text.slice(0, n - i.from), from: i.from } : i;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(t, e = 1) {
    if (this.options.simulateDoubleBreak && t == this.options.simulateBreak)
      return "";
    let { text: i, from: n } = this.lineAt(t, e);
    return i.slice(t - n, Math.min(i.length, t + 100 - n));
  }
  /**
  Find the column for the given position.
  */
  column(t, e = 1) {
    let { text: i, from: n } = this.lineAt(t, e), r = this.countColumn(i, t - n), o = this.options.overrideIndentation ? this.options.overrideIndentation(n) : -1;
    return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(t, e = t.length) {
    return Xi(t, this.state.tabSize, e);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(t, e = 1) {
    let { text: i, from: n } = this.lineAt(t, e), r = this.options.overrideIndentation;
    if (r) {
      let o = r(n);
      if (o > -1)
        return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  /**
  Returns the [simulated line
  break](https://codemirror.net/6/docs/ref/#language.IndentContext.constructor^options.simulateBreak)
  for this context, if any.
  */
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const H5 = /* @__PURE__ */ new z();
function E5(s, t, e) {
  let i = t.resolveStack(e), n = t.resolveInner(e, -1).resolve(e, 0).enterUnfinishedNodesBefore(e);
  if (n != i.node) {
    let r = [];
    for (let o = n; o && !(o.from < i.node.from || o.to > i.node.to || o.from == i.node.from && o.type == i.node.type); o = o.parent)
      r.push(o);
    for (let o = r.length - 1; o >= 0; o--)
      i = { node: r[o], next: i };
  }
  return Jf(i, s, e);
}
function Jf(s, t, e) {
  for (let i = s; i; i = i.next) {
    let n = P5(i.node);
    if (n)
      return n(Zl.create(t, e, i));
  }
  return 0;
}
function j5(s) {
  return s.pos == s.options.simulateBreak && s.options.simulateDoubleBreak;
}
function P5(s) {
  let t = s.type.prop(H5);
  if (t)
    return t;
  let e = s.firstChild, i;
  if (e && (i = e.type.prop(z.closedBy))) {
    let n = s.lastChild, r = n && i.indexOf(n.name) > -1;
    return (o) => G5(o, !0, 1, void 0, r && !j5(o) ? n.from : void 0);
  }
  return s.parent == null ? N5 : null;
}
function N5() {
  return 0;
}
class Zl extends br {
  constructor(t, e, i) {
    super(t.state, t.options), this.base = t, this.pos = e, this.context = i;
  }
  /**
  The syntax tree node to which the indentation strategy
  applies.
  */
  get node() {
    return this.context.node;
  }
  /**
  @internal
  */
  static create(t, e, i) {
    return new Zl(t, e, i);
  }
  /**
  Get the text directly after `this.pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  /**
  Get the indentation at the reference line for `this.node`, which
  is the line on which it starts, unless there is a node that is
  _not_ a parent of this node covering the start of that line. If
  so, the line at the start of that node is tried, again skipping
  on if it is covered by another such node.
  */
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  /**
  Get the indentation for the reference line of the given node
  (see [`baseIndent`](https://codemirror.net/6/docs/ref/#language.TreeIndentContext.baseIndent)).
  */
  baseIndentFor(t) {
    let e = this.state.doc.lineAt(t.from);
    for (; ; ) {
      let i = t.resolve(e.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (Y5(i, t))
        break;
      e = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(e.from);
  }
  /**
  Continue looking for indentations in the node's parent nodes,
  and return the result of that.
  */
  continue() {
    return Jf(this.context.next, this.base, this.pos);
  }
}
function Y5(s, t) {
  for (let e = t; e; e = e.parent)
    if (s == e)
      return !0;
  return !1;
}
function z5(s) {
  let t = s.node, e = t.childAfter(t.from), i = t.lastChild;
  if (!e)
    return null;
  let n = s.options.simulateBreak, r = s.state.doc.lineAt(e.from), o = n == null || n <= r.from ? r.to : Math.min(r.to, n);
  for (let l = e.to; ; ) {
    let a = t.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let h = /^ */.exec(r.text.slice(e.to - r.from))[0].length;
      return { from: e.from, to: e.to + h };
    }
    l = a.to;
  }
}
function G5(s, t, e, i, n) {
  let r = s.textAfter, o = r.match(/^\s*/)[0].length, l = i && r.slice(o, o + i.length) == i || n == s.pos + o, a = z5(s);
  return a ? l ? s.column(a.from) : s.column(a.to) : s.baseIndent + (l ? 0 : s.unit * e);
}
const Q5 = 200;
function B5() {
  return M.transactionFilter.of((s) => {
    if (!s.docChanged || !s.isUserEvent("input.type") && !s.isUserEvent("input.complete"))
      return s;
    let t = s.startState.languageDataAt("indentOnInput", s.startState.selection.main.head);
    if (!t.length)
      return s;
    let e = s.newDoc, { head: i } = s.newSelection.main, n = e.lineAt(i);
    if (i > n.from + Q5)
      return s;
    let r = e.sliceString(n.from, i);
    if (!t.some((h) => h.test(r)))
      return s;
    let { state: o } = s, l = -1, a = [];
    for (let { head: h } of o.selection.ranges) {
      let c = o.doc.lineAt(h);
      if (c.from == l)
        continue;
      l = c.from;
      let f = Ll(o, c.from);
      if (f == null)
        continue;
      let u = /^\s*/.exec(c.text)[0], d = Ts(o, f);
      u != d && a.push({ from: c.from, to: c.from + u.length, insert: d });
    }
    return a.length ? [s, { changes: a, sequential: !0 }] : s;
  });
}
const W5 = /* @__PURE__ */ T.define(), M5 = /* @__PURE__ */ new z();
function A5(s, t, e) {
  let i = pt(s);
  if (i.length < e)
    return null;
  let n = i.resolveStack(e, 1), r = null;
  for (let o = n; o; o = o.next) {
    let l = o.node;
    if (l.to <= e || l.from > e)
      continue;
    if (r && l.from < t)
      break;
    let a = l.type.prop(M5);
    if (a && (l.to < i.length - 50 || i.length == s.doc.length || !L5(l))) {
      let h = a(l, s);
      h && h.from <= e && h.from >= t && h.to > e && (r = h);
    }
  }
  return r;
}
function L5(s) {
  let t = s.lastChild;
  return t && t.to == s.to && t.type.isError;
}
function Xn(s, t, e) {
  for (let i of s.facet(W5)) {
    let n = i(s, t, e);
    if (n)
      return n;
  }
  return A5(s, t, e);
}
function tu(s, t) {
  let e = t.mapPos(s.from, 1), i = t.mapPos(s.to, -1);
  return e >= i ? void 0 : { from: e, to: i };
}
const Or = /* @__PURE__ */ Y.define({ map: tu }), Bs = /* @__PURE__ */ Y.define({ map: tu });
function eu(s) {
  let t = [];
  for (let { head: e } of s.state.selection.ranges)
    t.some((i) => i.from <= e && i.to >= e) || t.push(s.lineBlockAt(e));
  return t;
}
const di = /* @__PURE__ */ mt.define({
  create() {
    return N.none;
  },
  update(s, t) {
    t.isUserEvent("delete") && t.changes.iterChangedRanges((e, i) => s = bh(s, e, i)), s = s.map(t.changes);
    for (let e of t.effects)
      if (e.is(Or) && !Z5(s, e.value.from, e.value.to)) {
        let { preparePlaceholder: i } = t.state.facet(nu), n = i ? N.replace({ widget: new X5(i(t.state, e.value)) }) : Oh;
        s = s.update({ add: [n.range(e.value.from, e.value.to)] });
      } else e.is(Bs) && (s = s.update({
        filter: (i, n) => e.value.from != i || e.value.to != n,
        filterFrom: e.value.from,
        filterTo: e.value.to
      }));
    return t.selection && (s = bh(s, t.selection.main.head)), s;
  },
  provide: (s) => D.decorations.from(s),
  toJSON(s, t) {
    let e = [];
    return s.between(0, t.doc.length, (i, n) => {
      e.push(i, n);
    }), e;
  },
  fromJSON(s) {
    if (!Array.isArray(s) || s.length % 2)
      throw new RangeError("Invalid JSON for fold state");
    let t = [];
    for (let e = 0; e < s.length; ) {
      let i = s[e++], n = s[e++];
      if (typeof i != "number" || typeof n != "number")
        throw new RangeError("Invalid JSON for fold state");
      t.push(Oh.range(i, n));
    }
    return N.set(t, !0);
  }
});
function bh(s, t, e = t) {
  let i = !1;
  return s.between(t, e, (n, r) => {
    n < e && r > t && (i = !0);
  }), i ? s.update({
    filterFrom: t,
    filterTo: e,
    filter: (n, r) => n >= e || r <= t
  }) : s;
}
function Kn(s, t, e) {
  var i;
  let n = null;
  return (i = s.field(di, !1)) === null || i === void 0 || i.between(t, e, (r, o) => {
    (!n || n.from > r) && (n = { from: r, to: o });
  }), n;
}
function Z5(s, t, e) {
  let i = !1;
  return s.between(t, t, (n, r) => {
    n == t && r == e && (i = !0);
  }), i;
}
function iu(s, t) {
  return s.field(di, !1) ? t : t.concat(Y.appendConfig.of(ru()));
}
const _5 = (s) => {
  for (let t of eu(s)) {
    let e = Xn(s.state, t.from, t.to);
    if (e)
      return s.dispatch({ effects: iu(s.state, [Or.of(e), su(s, e)]) }), !0;
  }
  return !1;
}, q5 = (s) => {
  if (!s.state.field(di, !1))
    return !1;
  let t = [];
  for (let e of eu(s)) {
    let i = Kn(s.state, e.from, e.to);
    i && t.push(Bs.of(i), su(s, i, !1));
  }
  return t.length && s.dispatch({ effects: t }), t.length > 0;
};
function su(s, t, e = !0) {
  let i = s.state.doc.lineAt(t.from).number, n = s.state.doc.lineAt(t.to).number;
  return D.announce.of(`${s.state.phrase(e ? "Folded lines" : "Unfolded lines")} ${i} ${s.state.phrase("to")} ${n}.`);
}
const F5 = (s) => {
  let { state: t } = s, e = [];
  for (let i = 0; i < t.doc.length; ) {
    let n = s.lineBlockAt(i), r = Xn(t, n.from, n.to);
    r && e.push(Or.of(r)), i = (r ? s.lineBlockAt(r.to) : n).to + 1;
  }
  return e.length && s.dispatch({ effects: iu(s.state, e) }), !!e.length;
}, I5 = (s) => {
  let t = s.state.field(di, !1);
  if (!t || !t.size)
    return !1;
  let e = [];
  return t.between(0, s.state.doc.length, (i, n) => {
    e.push(Bs.of({ from: i, to: n }));
  }), s.dispatch({ effects: e }), !0;
}, U5 = [
  { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: _5 },
  { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: q5 },
  { key: "Ctrl-Alt-[", run: F5 },
  { key: "Ctrl-Alt-]", run: I5 }
], V5 = {
  placeholderDOM: null,
  preparePlaceholder: null,
  placeholderText: "…"
}, nu = /* @__PURE__ */ T.define({
  combine(s) {
    return ge(s, V5);
  }
});
function ru(s) {
  return [di, t$];
}
function ou(s, t) {
  let { state: e } = s, i = e.facet(nu), n = (o) => {
    let l = s.lineBlockAt(s.posAtDOM(o.target)), a = Kn(s.state, l.from, l.to);
    a && s.dispatch({ effects: Bs.of(a) }), o.preventDefault();
  };
  if (i.placeholderDOM)
    return i.placeholderDOM(s, n, t);
  let r = document.createElement("span");
  return r.textContent = i.placeholderText, r.setAttribute("aria-label", e.phrase("folded code")), r.title = e.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = n, r;
}
const Oh = /* @__PURE__ */ N.replace({ widget: /* @__PURE__ */ new class extends Ee {
  toDOM(s) {
    return ou(s, null);
  }
}() });
class X5 extends Ee {
  constructor(t) {
    super(), this.value = t;
  }
  eq(t) {
    return this.value == t.value;
  }
  toDOM(t) {
    return ou(t, this.value);
  }
}
const K5 = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1
};
class Xr extends Te {
  constructor(t, e) {
    super(), this.config = t, this.open = e;
  }
  eq(t) {
    return this.config == t.config && this.open == t.open;
  }
  toDOM(t) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let e = document.createElement("span");
    return e.textContent = this.open ? this.config.openText : this.config.closedText, e.title = t.state.phrase(this.open ? "Fold line" : "Unfold line"), e;
  }
}
function J5(s = {}) {
  let t = { ...K5, ...s }, e = new Xr(t, !0), i = new Xr(t, !1), n = st.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(_e) != o.state.facet(_e) || o.startState.field(di, !1) != o.state.field(di, !1) || pt(o.startState) != pt(o.state) || t.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new De();
      for (let a of o.viewportLineBlocks) {
        let h = Kn(o.state, a.from, a.to) ? i : Xn(o.state, a.from, a.to) ? e : null;
        h && l.add(a.from, a.from, h);
      }
      return l.finish();
    }
  }), { domEventHandlers: r } = t;
  return [
    n,
    qg({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(n)) === null || l === void 0 ? void 0 : l.markers) || Q.empty;
      },
      initialSpacer() {
        return new Xr(t, !1);
      },
      domEventHandlers: {
        ...r,
        click: (o, l, a) => {
          if (r.click && r.click(o, l, a))
            return !0;
          let h = Kn(o.state, l.from, l.to);
          if (h)
            return o.dispatch({ effects: Bs.of(h) }), !0;
          let c = Xn(o.state, l.from, l.to);
          return c ? (o.dispatch({ effects: Or.of(c) }), !0) : !1;
        }
      }
    }),
    ru()
  ];
}
const t$ = /* @__PURE__ */ D.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer"
  },
  ".cm-foldGutter span": {
    padding: "0 1px",
    cursor: "pointer"
  }
});
class Ws {
  constructor(t, e) {
    this.specs = t;
    let i;
    function n(l) {
      let a = Me.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof e.all == "string" ? e.all : e.all ? n(e.all) : void 0, o = e.scope;
    this.scope = o instanceof It ? (l) => l.prop(ji) == o.data : o ? (l) => l == o : void 0, this.style = Xf(t.map((l) => ({
      tag: l.tag,
      class: l.class || n(Object.assign({}, l, { tag: null }))
    })), {
      all: r
    }).style, this.module = i ? new Me(i) : null, this.themeType = e.themeType;
  }
  /**
  Create a highlighter style that associates the given styles to
  the given tags. The specs must be objects that hold a style tag
  or array of tags in their `tag` property, and either a single
  `class` property providing a static CSS class (for highlighter
  that rely on external styling), or a
  [`style-mod`](https://github.com/marijnh/style-mod#documentation)-style
  set of CSS properties (which define the styling for those tags).
  
  The CSS rules created for a highlighter will be emitted in the
  order of the spec's properties. That means that for elements that
  have multiple tags associated with them, styles defined further
  down in the list will have a higher CSS precedence than styles
  defined earlier.
  */
  static define(t, e) {
    return new Ws(t, e || {});
  }
}
const hl = /* @__PURE__ */ T.define(), lu = /* @__PURE__ */ T.define({
  combine(s) {
    return s.length ? [s[0]] : null;
  }
});
function Kr(s) {
  let t = s.facet(hl);
  return t.length ? t : s.facet(lu);
}
function au(s, t) {
  let e = [i$], i;
  return s instanceof Ws && (s.module && e.push(D.styleModule.of(s.module)), i = s.themeType), t != null && t.fallback ? e.push(lu.of(s)) : i ? e.push(hl.computeN([D.darkTheme], (n) => n.facet(D.darkTheme) == (i == "dark") ? [s] : [])) : e.push(hl.of(s)), e;
}
class e$ {
  constructor(t) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = pt(t.state), this.decorations = this.buildDeco(t, Kr(t.state)), this.decoratedTo = t.viewport.to;
  }
  update(t) {
    let e = pt(t.state), i = Kr(t.state), n = i != Kr(t.startState), { viewport: r } = t.view, o = t.changes.mapPos(this.decoratedTo, 1);
    e.length < r.to && !n && e.type == this.tree.type && o >= r.to ? (this.decorations = this.decorations.map(t.changes), this.decoratedTo = o) : (e != this.tree || t.viewportChanged || n) && (this.tree = e, this.decorations = this.buildDeco(t.view, i), this.decoratedTo = r.to);
  }
  buildDeco(t, e) {
    if (!e || !this.tree.length)
      return N.none;
    let i = new De();
    for (let { from: n, to: r } of t.visibleRanges)
      x5(this.tree, e, (o, l, a) => {
        i.add(o, l, this.markCache[a] || (this.markCache[a] = N.mark({ class: a })));
      }, n, r);
    return i.finish();
  }
}
const i$ = /* @__PURE__ */ gi.high(/* @__PURE__ */ st.fromClass(e$, {
  decorations: (s) => s.decorations
})), s$ = /* @__PURE__ */ Ws.define([
  {
    tag: $.meta,
    color: "#404740"
  },
  {
    tag: $.link,
    textDecoration: "underline"
  },
  {
    tag: $.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  },
  {
    tag: $.emphasis,
    fontStyle: "italic"
  },
  {
    tag: $.strong,
    fontWeight: "bold"
  },
  {
    tag: $.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: $.keyword,
    color: "#708"
  },
  {
    tag: [$.atom, $.bool, $.url, $.contentSeparator, $.labelName],
    color: "#219"
  },
  {
    tag: [$.literal, $.inserted],
    color: "#164"
  },
  {
    tag: [$.string, $.deleted],
    color: "#a11"
  },
  {
    tag: [$.regexp, $.escape, /* @__PURE__ */ $.special($.string)],
    color: "#e40"
  },
  {
    tag: /* @__PURE__ */ $.definition($.variableName),
    color: "#00f"
  },
  {
    tag: /* @__PURE__ */ $.local($.variableName),
    color: "#30a"
  },
  {
    tag: [$.typeName, $.namespace],
    color: "#085"
  },
  {
    tag: $.className,
    color: "#167"
  },
  {
    tag: [/* @__PURE__ */ $.special($.variableName), $.macroName],
    color: "#256"
  },
  {
    tag: /* @__PURE__ */ $.definition($.propertyName),
    color: "#00c"
  },
  {
    tag: $.comment,
    color: "#940"
  },
  {
    tag: $.invalid,
    color: "#f00"
  }
]), n$ = /* @__PURE__ */ D.baseTheme({
  "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
  "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), hu = 1e4, cu = "()[]{}", fu = /* @__PURE__ */ T.define({
  combine(s) {
    return ge(s, {
      afterCursor: !0,
      brackets: cu,
      maxScanDistance: hu,
      renderMatch: l$
    });
  }
}), r$ = /* @__PURE__ */ N.mark({ class: "cm-matchingBracket" }), o$ = /* @__PURE__ */ N.mark({ class: "cm-nonmatchingBracket" });
function l$(s) {
  let t = [], e = s.matched ? r$ : o$;
  return t.push(e.range(s.start.from, s.start.to)), s.end && t.push(e.range(s.end.from, s.end.to)), t;
}
function xh(s) {
  let t = [], e = s.facet(fu);
  for (let i of s.selection.ranges) {
    if (!i.empty)
      continue;
    let n = ce(s, i.head, -1, e) || i.head > 0 && ce(s, i.head - 1, 1, e) || e.afterCursor && (ce(s, i.head, 1, e) || i.head < s.doc.length && ce(s, i.head + 1, -1, e));
    n && (t = t.concat(e.renderMatch(n, s)));
  }
  return N.set(t, !0);
}
const a$ = /* @__PURE__ */ st.fromClass(class {
  constructor(s) {
    this.paused = !1, this.decorations = xh(s.state);
  }
  update(s) {
    (s.docChanged || s.selectionSet || this.paused) && (s.view.composing ? (this.decorations = this.decorations.map(s.changes), this.paused = !0) : (this.decorations = xh(s.state), this.paused = !1));
  }
}, {
  decorations: (s) => s.decorations
}), h$ = [
  a$,
  n$
];
function c$(s = {}) {
  return [fu.of(s), h$];
}
const f$ = /* @__PURE__ */ new z();
function cl(s, t, e) {
  let i = s.prop(t < 0 ? z.openedBy : z.closedBy);
  if (i)
    return i;
  if (s.name.length == 1) {
    let n = e.indexOf(s.name);
    if (n > -1 && n % 2 == (t < 0 ? 1 : 0))
      return [e[n + t]];
  }
  return null;
}
function fl(s) {
  let t = s.type.prop(f$);
  return t ? t(s.node) : s;
}
function ce(s, t, e, i = {}) {
  let n = i.maxScanDistance || hu, r = i.brackets || cu, o = pt(s), l = o.resolveInner(t, e);
  for (let a = l; a; a = a.parent) {
    let h = cl(a.type, e, r);
    if (h && a.from < a.to) {
      let c = fl(a);
      if (c && (e > 0 ? t >= c.from && t < c.to : t > c.from && t <= c.to))
        return u$(s, t, e, a, c, h, r);
    }
  }
  return d$(s, t, e, o, l.type, n, r);
}
function u$(s, t, e, i, n, r, o) {
  let l = i.parent, a = { from: n.from, to: n.to }, h = 0, c = l == null ? void 0 : l.cursor();
  if (c && (e < 0 ? c.childBefore(i.from) : c.childAfter(i.to)))
    do
      if (e < 0 ? c.to <= i.from : c.from >= i.to) {
        if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
          let f = fl(c);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: !0 };
        } else if (cl(c.type, e, o))
          h++;
        else if (cl(c.type, -e, o)) {
          if (h == 0) {
            let f = fl(c);
            return {
              start: a,
              end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0,
              matched: !1
            };
          }
          h--;
        }
      }
    while (e < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: !1 };
}
function d$(s, t, e, i, n, r, o) {
  if (e < 0 ? !t : t == s.doc.length)
    return null;
  let l = e < 0 ? s.sliceDoc(t - 1, t) : s.sliceDoc(t, t + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != e > 0)
    return null;
  let h = { from: e < 0 ? t - 1 : t, to: e > 0 ? t + 1 : t }, c = s.doc.iterRange(t, e > 0 ? s.doc.length : 0), f = 0;
  for (let u = 0; !c.next().done && u <= r; ) {
    let d = c.value;
    e < 0 && (u += d.length);
    let p = t + u * e;
    for (let m = e > 0 ? 0 : d.length - 1, g = e > 0 ? d.length : -1; m != g; m += e) {
      let w = o.indexOf(d[m]);
      if (!(w < 0 || i.resolveInner(p + m, 1).type != n))
        if (w % 2 == 0 == e > 0)
          f++;
        else {
          if (f == 1)
            return { start: h, end: { from: p + m, to: p + m + 1 }, matched: w >> 1 == a >> 1 };
          f--;
        }
    }
    e > 0 && (u += d.length);
  }
  return c.done ? { start: h, matched: !1 } : null;
}
const p$ = /* @__PURE__ */ Object.create(null), kh = [xt.none], Sh = [], vh = /* @__PURE__ */ Object.create(null), m$ = /* @__PURE__ */ Object.create(null);
for (let [s, t] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"]
])
  m$[s] = /* @__PURE__ */ g$(p$, t);
function Jr(s, t) {
  Sh.indexOf(s) > -1 || (Sh.push(s), console.warn(t));
}
function g$(s, t) {
  let e = [];
  for (let l of t.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let c = s[h] || $[h];
      c ? typeof c == "function" ? a.length ? a = a.map(c) : Jr(h, `Modifier ${h} used at start of tag`) : a.length ? Jr(h, `Tag ${h} used as modifier`) : a = Array.isArray(c) ? c : [c] : Jr(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a)
      e.push(h);
  }
  if (!e.length)
    return 0;
  let i = t.replace(/ /g, "_"), n = i + " " + e.map((l) => l.id), r = vh[n];
  if (r)
    return r.id;
  let o = vh[n] = xt.define({
    id: kh.length,
    name: i,
    props: [Fe({ [i]: e })]
  });
  return kh.push(o), o.id;
}
I.RTL, I.LTR;
const $$ = (s) => {
  let { state: t } = s, e = t.doc.lineAt(t.selection.main.from), i = ql(s.state, e.from);
  return i.line ? w$(s) : i.block ? b$(s) : !1;
};
function _l(s, t) {
  return ({ state: e, dispatch: i }) => {
    if (e.readOnly)
      return !1;
    let n = s(t, e);
    return n ? (i(e.update(n)), !0) : !1;
  };
}
const w$ = /* @__PURE__ */ _l(
  k$,
  0
  /* CommentOption.Toggle */
), y$ = /* @__PURE__ */ _l(
  uu,
  0
  /* CommentOption.Toggle */
), b$ = /* @__PURE__ */ _l(
  (s, t) => uu(s, t, x$(t)),
  0
  /* CommentOption.Toggle */
);
function ql(s, t) {
  let e = s.languageDataAt("commentTokens", t, 1);
  return e.length ? e[0] : {};
}
const rs = 50;
function O$(s, { open: t, close: e }, i, n) {
  let r = s.sliceDoc(i - rs, i), o = s.sliceDoc(n, n + rs), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, h = r.length - l;
  if (r.slice(h - t.length, h) == t && o.slice(a, a + e.length) == e)
    return {
      open: { pos: i - l, margin: l && 1 },
      close: { pos: n + a, margin: a && 1 }
    };
  let c, f;
  n - i <= 2 * rs ? c = f = s.sliceDoc(i, n) : (c = s.sliceDoc(i, i + rs), f = s.sliceDoc(n - rs, n));
  let u = /^\s*/.exec(c)[0].length, d = /\s*$/.exec(f)[0].length, p = f.length - d - e.length;
  return c.slice(u, u + t.length) == t && f.slice(p, p + e.length) == e ? {
    open: {
      pos: i + u + t.length,
      margin: /\s/.test(c.charAt(u + t.length)) ? 1 : 0
    },
    close: {
      pos: n - d - e.length,
      margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function x$(s) {
  let t = [];
  for (let e of s.selection.ranges) {
    let i = s.doc.lineAt(e.from), n = e.to <= i.to ? i : s.doc.lineAt(e.to);
    n.from > i.from && n.from == e.to && (n = e.to == i.to + 1 ? i : s.doc.lineAt(e.to - 1));
    let r = t.length - 1;
    r >= 0 && t[r].to > i.from ? t[r].to = n.to : t.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: n.to });
  }
  return t;
}
function uu(s, t, e = t.selection.ranges) {
  let i = e.map((r) => ql(t, r.from).block);
  if (!i.every((r) => r))
    return null;
  let n = e.map((r, o) => O$(t, i[o], r.from, r.to));
  if (s != 2 && !n.every((r) => r))
    return { changes: t.changes(e.map((r, o) => n[o] ? [] : [{ from: r.from, insert: i[o].open + " " }, { from: r.to, insert: " " + i[o].close }])) };
  if (s != 1 && n.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < n.length; o++)
      if (l = n[o]) {
        let a = i[o], { open: h, close: c } = l;
        r.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
      }
    return { changes: r };
  }
  return null;
}
function k$(s, t, e = t.selection.ranges) {
  let i = [], n = -1;
  t: for (let { from: r, to: o } of e) {
    let l = i.length, a = 1e9, h;
    for (let c = r; c <= o; ) {
      let f = t.doc.lineAt(c);
      if (h == null && (h = ql(t, f.from).line, !h))
        continue t;
      if (f.from > n && (r == o || o > f.from)) {
        n = f.from;
        let u = /^\s*/.exec(f.text)[0].length, d = u == f.length, p = f.text.slice(u, u + h.length) == h ? u : -1;
        u < f.text.length && u < a && (a = u), i.push({ line: f, comment: p, token: h, indent: u, empty: d, single: !1 });
      }
      c = f.to + 1;
    }
    if (a < 1e9)
      for (let c = l; c < i.length; c++)
        i[c].indent < i[c].line.text.length && (i[c].indent = a);
    i.length == l + 1 && (i[l].single = !0);
  }
  if (s != 2 && i.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: h, empty: c, single: f } of i)
      (f || !c) && r.push({ from: l.from + h, insert: a + " " });
    let o = t.changes(r);
    return { changes: o, selection: t.selection.map(o, 1) };
  } else if (s != 1 && i.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of i)
      if (l >= 0) {
        let h = o.from + l, c = h + a.length;
        o.text[c - o.from] == " " && c++, r.push({ from: h, to: c });
      }
    return { changes: r };
  }
  return null;
}
const ul = /* @__PURE__ */ He.define(), S$ = /* @__PURE__ */ He.define(), v$ = /* @__PURE__ */ T.define(), du = /* @__PURE__ */ T.define({
  combine(s) {
    return ge(s, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (t, e) => e
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (t, e) => (i, n) => t(i, n) || e(i, n)
    });
  }
}), pu = /* @__PURE__ */ mt.define({
  create() {
    return fe.empty;
  },
  update(s, t) {
    let e = t.state.facet(du), i = t.annotation(ul);
    if (i) {
      let a = Rt.fromTransaction(t, i.selection), h = i.side, c = h == 0 ? s.undone : s.done;
      return a ? c = Jn(c, c.length, e.minDepth, a) : c = $u(c, t.startState.selection), new fe(h == 0 ? i.rest : c, h == 0 ? c : i.rest);
    }
    let n = t.annotation(S$);
    if ((n == "full" || n == "before") && (s = s.isolate()), t.annotation(ot.addToHistory) === !1)
      return t.changes.empty ? s : s.addMapping(t.changes.desc);
    let r = Rt.fromTransaction(t), o = t.annotation(ot.time), l = t.annotation(ot.userEvent);
    return r ? s = s.addChanges(r, o, l, e, t) : t.selection && (s = s.addSelection(t.startState.selection, o, l, e.newGroupDelay)), (n == "full" || n == "after") && (s = s.isolate()), s;
  },
  toJSON(s) {
    return { done: s.done.map((t) => t.toJSON()), undone: s.undone.map((t) => t.toJSON()) };
  },
  fromJSON(s) {
    return new fe(s.done.map(Rt.fromJSON), s.undone.map(Rt.fromJSON));
  }
});
function C$(s = {}) {
  return [
    pu,
    du.of(s),
    D.domEventHandlers({
      beforeinput(t, e) {
        let i = t.inputType == "historyUndo" ? mu : t.inputType == "historyRedo" ? dl : null;
        return i ? (t.preventDefault(), i(e)) : !1;
      }
    })
  ];
}
function xr(s, t) {
  return function({ state: e, dispatch: i }) {
    if (!t && e.readOnly)
      return !1;
    let n = e.field(pu, !1);
    if (!n)
      return !1;
    let r = n.pop(s, e, t);
    return r ? (i(r), !0) : !1;
  };
}
const mu = /* @__PURE__ */ xr(0, !1), dl = /* @__PURE__ */ xr(1, !1), D$ = /* @__PURE__ */ xr(0, !0), R$ = /* @__PURE__ */ xr(1, !0);
class Rt {
  constructor(t, e, i, n, r) {
    this.changes = t, this.effects = e, this.mapped = i, this.startSelection = n, this.selectionsAfter = r;
  }
  setSelAfter(t) {
    return new Rt(this.changes, this.effects, this.mapped, this.startSelection, t);
  }
  toJSON() {
    var t, e, i;
    return {
      changes: (t = this.changes) === null || t === void 0 ? void 0 : t.toJSON(),
      mapped: (e = this.mapped) === null || e === void 0 ? void 0 : e.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((n) => n.toJSON())
    };
  }
  static fromJSON(t) {
    return new Rt(t.changes && rt.fromJSON(t.changes), [], t.mapped && de.fromJSON(t.mapped), t.startSelection && x.fromJSON(t.startSelection), t.selectionsAfter.map(x.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(t, e) {
    let i = At;
    for (let n of t.startState.facet(v$)) {
      let r = n(t);
      r.length && (i = i.concat(r));
    }
    return !i.length && t.changes.empty ? null : new Rt(t.changes.invert(t.startState.doc), i, void 0, e || t.startState.selection, At);
  }
  static selection(t) {
    return new Rt(void 0, At, void 0, void 0, t);
  }
}
function Jn(s, t, e, i) {
  let n = t + 1 > e + 20 ? t - e - 1 : 0, r = s.slice(n, t);
  return r.push(i), r;
}
function T$(s, t) {
  let e = [], i = !1;
  return s.iterChangedRanges((n, r) => e.push(n, r)), t.iterChangedRanges((n, r, o, l) => {
    for (let a = 0; a < e.length; ) {
      let h = e[a++], c = e[a++];
      l >= h && o <= c && (i = !0);
    }
  }), i;
}
function H$(s, t) {
  return s.ranges.length == t.ranges.length && s.ranges.filter((e, i) => e.empty != t.ranges[i].empty).length === 0;
}
function gu(s, t) {
  return s.length ? t.length ? s.concat(t) : s : t;
}
const At = [], E$ = 200;
function $u(s, t) {
  if (s.length) {
    let e = s[s.length - 1], i = e.selectionsAfter.slice(Math.max(0, e.selectionsAfter.length - E$));
    return i.length && i[i.length - 1].eq(t) ? s : (i.push(t), Jn(s, s.length - 1, 1e9, e.setSelAfter(i)));
  } else
    return [Rt.selection([t])];
}
function j$(s) {
  let t = s[s.length - 1], e = s.slice();
  return e[s.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), e;
}
function to(s, t) {
  if (!s.length)
    return s;
  let e = s.length, i = At;
  for (; e; ) {
    let n = P$(s[e - 1], t, i);
    if (n.changes && !n.changes.empty || n.effects.length) {
      let r = s.slice(0, e);
      return r[e - 1] = n, r;
    } else
      t = n.mapped, e--, i = n.selectionsAfter;
  }
  return i.length ? [Rt.selection(i)] : At;
}
function P$(s, t, e) {
  let i = gu(s.selectionsAfter.length ? s.selectionsAfter.map((l) => l.map(t)) : At, e);
  if (!s.changes)
    return Rt.selection(i);
  let n = s.changes.map(t), r = t.mapDesc(s.changes, !0), o = s.mapped ? s.mapped.composeDesc(r) : r;
  return new Rt(n, Y.mapEffects(s.effects, t), o, s.startSelection.map(r), i);
}
const N$ = /^(input\.type|delete)($|\.)/;
class fe {
  constructor(t, e, i = 0, n = void 0) {
    this.done = t, this.undone = e, this.prevTime = i, this.prevUserEvent = n;
  }
  isolate() {
    return this.prevTime ? new fe(this.done, this.undone) : this;
  }
  addChanges(t, e, i, n, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && t.changes && (!i || N$.test(i)) && (!l.selectionsAfter.length && e - this.prevTime < n.newGroupDelay && n.joinToEvent(r, T$(l.changes, t.changes)) || // For compose (but not compose.start) events, always join with previous event
    i == "input.type.compose") ? o = Jn(o, o.length - 1, n.minDepth, new Rt(t.changes.compose(l.changes), gu(Y.mapEffects(t.effects, l.changes), l.effects), l.mapped, l.startSelection, At)) : o = Jn(o, o.length, n.minDepth, t), new fe(o, At, e, i);
  }
  addSelection(t, e, i, n) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : At;
    return r.length > 0 && e - this.prevTime < n && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && H$(r[r.length - 1], t) ? this : new fe($u(this.done, t), this.undone, e, i);
  }
  addMapping(t) {
    return new fe(to(this.done, t), to(this.undone, t), this.prevTime, this.prevUserEvent);
  }
  pop(t, e, i) {
    let n = t == 0 ? this.done : this.undone;
    if (n.length == 0)
      return null;
    let r = n[n.length - 1], o = r.selectionsAfter[0] || (r.startSelection ? r.startSelection.map(r.changes.invertedDesc, 1) : e.selection);
    if (i && r.selectionsAfter.length)
      return e.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: ul.of({ side: t, rest: j$(n), selection: o }),
        userEvent: t == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (r.changes) {
      let l = n.length == 1 ? At : n.slice(0, n.length - 1);
      return r.mapped && (l = to(l, r.mapped)), e.update({
        changes: r.changes,
        selection: r.startSelection,
        effects: r.effects,
        annotations: ul.of({ side: t, rest: l, selection: o }),
        filter: !1,
        userEvent: t == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
fe.empty = /* @__PURE__ */ new fe(At, At);
const Y$ = [
  { key: "Mod-z", run: mu, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: dl, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: dl, preventDefault: !0 },
  { key: "Mod-u", run: D$, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: R$, preventDefault: !0 }
];
function Ki(s, t) {
  return x.create(s.ranges.map(t), s.mainIndex);
}
function Kt(s, t) {
  return s.update({ selection: t, scrollIntoView: !0, userEvent: "select" });
}
function Jt({ state: s, dispatch: t }, e) {
  let i = Ki(s.selection, e);
  return i.eq(s.selection, !0) ? !1 : (t(Kt(s, i)), !0);
}
function kr(s, t) {
  return x.cursor(t ? s.to : s.from);
}
function wu(s, t) {
  return Jt(s, (e) => e.empty ? s.moveByChar(e, t) : kr(e, t));
}
function gt(s) {
  return s.textDirectionAt(s.state.selection.main.head) == I.LTR;
}
const yu = (s) => wu(s, !gt(s)), bu = (s) => wu(s, gt(s));
function Ou(s, t) {
  return Jt(s, (e) => e.empty ? s.moveByGroup(e, t) : kr(e, t));
}
const z$ = (s) => Ou(s, !gt(s)), G$ = (s) => Ou(s, gt(s));
function Q$(s, t, e) {
  if (t.type.prop(e))
    return !0;
  let i = t.to - t.from;
  return i && (i > 2 || /[^\s,.;:]/.test(s.sliceDoc(t.from, t.to))) || t.firstChild;
}
function Sr(s, t, e) {
  let i = pt(s).resolveInner(t.head), n = e ? z.closedBy : z.openedBy;
  for (let a = t.head; ; ) {
    let h = e ? i.childAfter(a) : i.childBefore(a);
    if (!h)
      break;
    Q$(s, h, n) ? i = h : a = e ? h.to : h.from;
  }
  let r = i.type.prop(n), o, l;
  return r && (o = e ? ce(s, i.from, 1) : ce(s, i.to, -1)) && o.matched ? l = e ? o.end.to : o.end.from : l = e ? i.to : i.from, x.cursor(l, e ? -1 : 1);
}
const B$ = (s) => Jt(s, (t) => Sr(s.state, t, !gt(s))), W$ = (s) => Jt(s, (t) => Sr(s.state, t, gt(s)));
function xu(s, t) {
  return Jt(s, (e) => {
    if (!e.empty)
      return kr(e, t);
    let i = s.moveVertically(e, t);
    return i.head != e.head ? i : s.moveToLineBoundary(e, t);
  });
}
const ku = (s) => xu(s, !1), Su = (s) => xu(s, !0);
function vu(s) {
  let t = s.scrollDOM.clientHeight < s.scrollDOM.scrollHeight - 2, e = 0, i = 0, n;
  if (t) {
    for (let r of s.state.facet(D.scrollMargins)) {
      let o = r(s);
      o != null && o.top && (e = Math.max(o == null ? void 0 : o.top, e)), o != null && o.bottom && (i = Math.max(o == null ? void 0 : o.bottom, i));
    }
    n = s.scrollDOM.clientHeight - e - i;
  } else
    n = (s.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: e,
    marginBottom: i,
    selfScroll: t,
    height: Math.max(s.defaultLineHeight, n - 5)
  };
}
function Cu(s, t) {
  let e = vu(s), { state: i } = s, n = Ki(i.selection, (o) => o.empty ? s.moveVertically(o, t, e.height) : kr(o, t));
  if (n.eq(i.selection))
    return !1;
  let r;
  if (e.selfScroll) {
    let o = s.coordsAtPos(i.selection.main.head), l = s.scrollDOM.getBoundingClientRect(), a = l.top + e.marginTop, h = l.bottom - e.marginBottom;
    o && o.top > a && o.bottom < h && (r = D.scrollIntoView(n.main.head, { y: "start", yMargin: o.top - a }));
  }
  return s.dispatch(Kt(i, n), { effects: r }), !0;
}
const Ch = (s) => Cu(s, !1), pl = (s) => Cu(s, !0);
function Ue(s, t, e) {
  let i = s.lineBlockAt(t.head), n = s.moveToLineBoundary(t, e);
  if (n.head == t.head && n.head != (e ? i.to : i.from) && (n = s.moveToLineBoundary(t, e, !1)), !e && n.head == i.from && i.length) {
    let r = /^\s*/.exec(s.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    r && t.head != i.from + r && (n = x.cursor(i.from + r));
  }
  return n;
}
const M$ = (s) => Jt(s, (t) => Ue(s, t, !0)), A$ = (s) => Jt(s, (t) => Ue(s, t, !1)), L$ = (s) => Jt(s, (t) => Ue(s, t, !gt(s))), Z$ = (s) => Jt(s, (t) => Ue(s, t, gt(s))), _$ = (s) => Jt(s, (t) => x.cursor(s.lineBlockAt(t.head).from, 1)), q$ = (s) => Jt(s, (t) => x.cursor(s.lineBlockAt(t.head).to, -1));
function F$(s, t, e) {
  let i = !1, n = Ki(s.selection, (r) => {
    let o = ce(s, r.head, -1) || ce(s, r.head, 1) || r.head > 0 && ce(s, r.head - 1, 1) || r.head < s.doc.length && ce(s, r.head + 1, -1);
    if (!o || !o.end)
      return r;
    i = !0;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return x.cursor(l);
  });
  return i ? (t(Kt(s, n)), !0) : !1;
}
const I$ = ({ state: s, dispatch: t }) => F$(s, t);
function Zt(s, t) {
  let e = Ki(s.state.selection, (i) => {
    let n = t(i);
    return x.range(i.anchor, n.head, n.goalColumn, n.bidiLevel || void 0, n.assoc);
  });
  return e.eq(s.state.selection) ? !1 : (s.dispatch(Kt(s.state, e)), !0);
}
function Du(s, t) {
  return Zt(s, (e) => s.moveByChar(e, t));
}
const Ru = (s) => Du(s, !gt(s)), Tu = (s) => Du(s, gt(s));
function Hu(s, t) {
  return Zt(s, (e) => s.moveByGroup(e, t));
}
const U$ = (s) => Hu(s, !gt(s)), V$ = (s) => Hu(s, gt(s)), X$ = (s) => Zt(s, (t) => Sr(s.state, t, !gt(s))), K$ = (s) => Zt(s, (t) => Sr(s.state, t, gt(s)));
function Eu(s, t) {
  return Zt(s, (e) => s.moveVertically(e, t));
}
const ju = (s) => Eu(s, !1), Pu = (s) => Eu(s, !0);
function Nu(s, t) {
  return Zt(s, (e) => s.moveVertically(e, t, vu(s).height));
}
const Dh = (s) => Nu(s, !1), Rh = (s) => Nu(s, !0), J$ = (s) => Zt(s, (t) => Ue(s, t, !0)), tw = (s) => Zt(s, (t) => Ue(s, t, !1)), ew = (s) => Zt(s, (t) => Ue(s, t, !gt(s))), iw = (s) => Zt(s, (t) => Ue(s, t, gt(s))), sw = (s) => Zt(s, (t) => x.cursor(s.lineBlockAt(t.head).from)), nw = (s) => Zt(s, (t) => x.cursor(s.lineBlockAt(t.head).to)), Th = ({ state: s, dispatch: t }) => (t(Kt(s, { anchor: 0 })), !0), Hh = ({ state: s, dispatch: t }) => (t(Kt(s, { anchor: s.doc.length })), !0), Eh = ({ state: s, dispatch: t }) => (t(Kt(s, { anchor: s.selection.main.anchor, head: 0 })), !0), jh = ({ state: s, dispatch: t }) => (t(Kt(s, { anchor: s.selection.main.anchor, head: s.doc.length })), !0), rw = ({ state: s, dispatch: t }) => (t(s.update({ selection: { anchor: 0, head: s.doc.length }, userEvent: "select" })), !0), ow = ({ state: s, dispatch: t }) => {
  let e = vr(s).map(({ from: i, to: n }) => x.range(i, Math.min(n + 1, s.doc.length)));
  return t(s.update({ selection: x.create(e), userEvent: "select" })), !0;
}, lw = ({ state: s, dispatch: t }) => {
  let e = Ki(s.selection, (i) => {
    let n = pt(s), r = n.resolveStack(i.from, 1);
    if (i.empty) {
      let o = n.resolveStack(i.from, -1);
      o.node.from >= r.node.from && o.node.to <= r.node.to && (r = o);
    }
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && o.next)
        return x.range(l.to, l.from);
    }
    return i;
  });
  return e.eq(s.selection) ? !1 : (t(Kt(s, e)), !0);
};
function Yu(s, t) {
  let { state: e } = s, i = e.selection, n = e.selection.ranges.slice();
  for (let r of e.selection.ranges) {
    let o = e.doc.lineAt(r.head);
    if (t ? o.to < s.state.doc.length : o.from > 0)
      for (let l = r; ; ) {
        let a = s.moveVertically(l, t);
        if (a.head < o.from || a.head > o.to) {
          n.some((h) => h.head == a.head) || n.push(a);
          break;
        } else {
          if (a.head == l.head)
            break;
          l = a;
        }
      }
  }
  return n.length == i.ranges.length ? !1 : (s.dispatch(Kt(e, x.create(n, n.length - 1))), !0);
}
const aw = (s) => Yu(s, !1), hw = (s) => Yu(s, !0), cw = ({ state: s, dispatch: t }) => {
  let e = s.selection, i = null;
  return e.ranges.length > 1 ? i = x.create([e.main]) : e.main.empty || (i = x.create([x.cursor(e.main.head)])), i ? (t(Kt(s, i)), !0) : !1;
};
function Ms(s, t) {
  if (s.state.readOnly)
    return !1;
  let e = "delete.selection", { state: i } = s, n = i.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = t(r);
      a < o ? (e = "delete.backward", a = hn(s, a, !1)) : a > o && (e = "delete.forward", a = hn(s, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = hn(s, o, !1), l = hn(s, l, !0);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: x.cursor(o, o < r.head ? -1 : 1) };
  });
  return n.changes.empty ? !1 : (s.dispatch(i.update(n, {
    scrollIntoView: !0,
    userEvent: e,
    effects: e == "delete.selection" ? D.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function hn(s, t, e) {
  if (s instanceof D)
    for (let i of s.state.facet(D.atomicRanges).map((n) => n(s)))
      i.between(t, t, (n, r) => {
        n < t && r > t && (t = e ? r : n);
      });
  return t;
}
const zu = (s, t, e) => Ms(s, (i) => {
  let n = i.from, { state: r } = s, o = r.doc.lineAt(n), l, a;
  if (e && !t && n > o.from && n < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, n - o.from))) {
    if (l[l.length - 1] == "	")
      return n - 1;
    let h = Xi(l, r.tabSize), c = h % Vn(r) || Vn(r);
    for (let f = 0; f < c && l[l.length - 1 - f] == " "; f++)
      n--;
    a = n;
  } else
    a = at(o.text, n - o.from, t, t) + o.from, a == n && o.number != (t ? r.doc.lines : 1) ? a += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, n - o.from)) && (a = at(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), ml = (s) => zu(s, !1, !0), Gu = (s) => zu(s, !0, !1), Qu = (s, t) => Ms(s, (e) => {
  let i = e.head, { state: n } = s, r = n.doc.lineAt(i), o = n.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (t ? r.to : r.from)) {
      i == e.head && r.number != (t ? n.doc.lines : 1) && (i += t ? 1 : -1);
      break;
    }
    let a = at(r.text, i - r.from, t) + r.from, h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from), c = o(h);
    if (l != null && c != l)
      break;
    (h != " " || i != e.head) && (l = c), i = a;
  }
  return i;
}), Bu = (s) => Qu(s, !1), fw = (s) => Qu(s, !0), uw = (s) => Ms(s, (t) => {
  let e = s.lineBlockAt(t.head).to;
  return t.head < e ? e : Math.min(s.state.doc.length, t.head + 1);
}), dw = (s) => Ms(s, (t) => {
  let e = s.moveToLineBoundary(t, !1).head;
  return t.head > e ? e : Math.max(0, t.head - 1);
}), pw = (s) => Ms(s, (t) => {
  let e = s.moveToLineBoundary(t, !0).head;
  return t.head < e ? e : Math.min(s.state.doc.length, t.head + 1);
}), mw = ({ state: s, dispatch: t }) => {
  if (s.readOnly)
    return !1;
  let e = s.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: A.of(["", ""]) },
    range: x.cursor(i.from)
  }));
  return t(s.update(e, { scrollIntoView: !0, userEvent: "input" })), !0;
}, gw = ({ state: s, dispatch: t }) => {
  if (s.readOnly)
    return !1;
  let e = s.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == s.doc.length)
      return { range: i };
    let n = i.from, r = s.doc.lineAt(n), o = n == r.from ? n - 1 : at(r.text, n - r.from, !1) + r.from, l = n == r.to ? n + 1 : at(r.text, n - r.from, !0) + r.from;
    return {
      changes: { from: o, to: l, insert: s.doc.slice(n, l).append(s.doc.slice(o, n)) },
      range: x.cursor(l)
    };
  });
  return e.changes.empty ? !1 : (t(s.update(e, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function vr(s) {
  let t = [], e = -1;
  for (let i of s.selection.ranges) {
    let n = s.doc.lineAt(i.from), r = s.doc.lineAt(i.to);
    if (!i.empty && i.to == r.from && (r = s.doc.lineAt(i.to - 1)), e >= n.number) {
      let o = t[t.length - 1];
      o.to = r.to, o.ranges.push(i);
    } else
      t.push({ from: n.from, to: r.to, ranges: [i] });
    e = r.number + 1;
  }
  return t;
}
function Wu(s, t, e) {
  if (s.readOnly)
    return !1;
  let i = [], n = [];
  for (let r of vr(s)) {
    if (e ? r.to == s.doc.length : r.from == 0)
      continue;
    let o = s.doc.lineAt(e ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (e) {
      i.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + s.lineBreak });
      for (let a of r.ranges)
        n.push(x.range(Math.min(s.doc.length, a.anchor + l), Math.min(s.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: r.from }, { from: r.to, insert: s.lineBreak + o.text });
      for (let a of r.ranges)
        n.push(x.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (t(s.update({
    changes: i,
    scrollIntoView: !0,
    selection: x.create(n, s.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const $w = ({ state: s, dispatch: t }) => Wu(s, t, !1), ww = ({ state: s, dispatch: t }) => Wu(s, t, !0);
function Mu(s, t, e) {
  if (s.readOnly)
    return !1;
  let i = [];
  for (let r of vr(s))
    e ? i.push({ from: r.from, insert: s.doc.slice(r.from, r.to) + s.lineBreak }) : i.push({ from: r.to, insert: s.lineBreak + s.doc.slice(r.from, r.to) });
  let n = s.changes(i);
  return t(s.update({
    changes: n,
    selection: s.selection.map(n, e ? 1 : -1),
    scrollIntoView: !0,
    userEvent: "input.copyline"
  })), !0;
}
const yw = ({ state: s, dispatch: t }) => Mu(s, t, !1), bw = ({ state: s, dispatch: t }) => Mu(s, t, !0), Ow = (s) => {
  if (s.state.readOnly)
    return !1;
  let { state: t } = s, e = t.changes(vr(t).map(({ from: n, to: r }) => (n > 0 ? n-- : r < t.doc.length && r++, { from: n, to: r }))), i = Ki(t.selection, (n) => {
    let r;
    if (s.lineWrapping) {
      let o = s.lineBlockAt(n.head), l = s.coordsAtPos(n.head, n.assoc || 1);
      l && (r = o.bottom + s.documentTop - l.bottom + s.defaultLineHeight / 2);
    }
    return s.moveVertically(n, !0, r);
  }).map(e);
  return s.dispatch({ changes: e, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function xw(s, t) {
  if (/\(\)|\[\]|\{\}/.test(s.sliceDoc(t - 1, t + 1)))
    return { from: t, to: t };
  let e = pt(s).resolveInner(t), i = e.childBefore(t), n = e.childAfter(t), r;
  return i && n && i.to <= t && n.from >= t && (r = i.type.prop(z.closedBy)) && r.indexOf(n.name) > -1 && s.doc.lineAt(i.to).from == s.doc.lineAt(n.from).from && !/\S/.test(s.sliceDoc(i.to, n.from)) ? { from: i.to, to: n.from } : null;
}
const Ph = /* @__PURE__ */ Au(!1), kw = /* @__PURE__ */ Au(!0);
function Au(s) {
  return ({ state: t, dispatch: e }) => {
    if (t.readOnly)
      return !1;
    let i = t.changeByRange((n) => {
      let { from: r, to: o } = n, l = t.doc.lineAt(r), a = !s && r == o && xw(t, r);
      s && (r = o = (o <= l.to ? l : t.doc.lineAt(o)).to);
      let h = new br(t, { simulateBreak: r, simulateDoubleBreak: !!a }), c = Ll(h, r);
      for (c == null && (c = Xi(/^\s*/.exec(t.doc.lineAt(r).text)[0], t.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let f = ["", Ts(t, c)];
      return a && f.push(Ts(t, h.lineIndent(l.from, -1))), {
        changes: { from: r, to: o, insert: A.of(f) },
        range: x.cursor(r + 1 + f[1].length)
      };
    });
    return e(t.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function Fl(s, t) {
  let e = -1;
  return s.changeByRange((i) => {
    let n = [];
    for (let o = i.from; o <= i.to; ) {
      let l = s.doc.lineAt(o);
      l.number > e && (i.empty || i.to > l.from) && (t(l, n, i), e = l.number), o = l.to + 1;
    }
    let r = s.changes(n);
    return {
      changes: n,
      range: x.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1))
    };
  });
}
const Sw = ({ state: s, dispatch: t }) => {
  if (s.readOnly)
    return !1;
  let e = /* @__PURE__ */ Object.create(null), i = new br(s, { overrideIndentation: (r) => {
    let o = e[r];
    return o ?? -1;
  } }), n = Fl(s, (r, o, l) => {
    let a = Ll(i, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let h = /^\s*/.exec(r.text)[0], c = Ts(s, a);
    (h != c || l.from < r.from + h.length) && (e[r.from] = a, o.push({ from: r.from, to: r.from + h.length, insert: c }));
  });
  return n.changes.empty || t(s.update(n, { userEvent: "indent" })), !0;
}, vw = ({ state: s, dispatch: t }) => s.readOnly ? !1 : (t(s.update(Fl(s, (e, i) => {
  i.push({ from: e.from, insert: s.facet(Al) });
}), { userEvent: "input.indent" })), !0), Cw = ({ state: s, dispatch: t }) => s.readOnly ? !1 : (t(s.update(Fl(s, (e, i) => {
  let n = /^\s*/.exec(e.text)[0];
  if (!n)
    return;
  let r = Xi(n, s.tabSize), o = 0, l = Ts(s, Math.max(0, r - Vn(s)));
  for (; o < n.length && o < l.length && n.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  i.push({ from: e.from + o, to: e.from + n.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), Dw = (s) => (s.setTabFocusMode(), !0), Rw = [
  { key: "Ctrl-b", run: yu, shift: Ru, preventDefault: !0 },
  { key: "Ctrl-f", run: bu, shift: Tu },
  { key: "Ctrl-p", run: ku, shift: ju },
  { key: "Ctrl-n", run: Su, shift: Pu },
  { key: "Ctrl-a", run: _$, shift: sw },
  { key: "Ctrl-e", run: q$, shift: nw },
  { key: "Ctrl-d", run: Gu },
  { key: "Ctrl-h", run: ml },
  { key: "Ctrl-k", run: uw },
  { key: "Ctrl-Alt-h", run: Bu },
  { key: "Ctrl-o", run: mw },
  { key: "Ctrl-t", run: gw },
  { key: "Ctrl-v", run: pl }
], Tw = /* @__PURE__ */ [
  { key: "ArrowLeft", run: yu, shift: Ru, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: z$, shift: U$, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: L$, shift: ew, preventDefault: !0 },
  { key: "ArrowRight", run: bu, shift: Tu, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: G$, shift: V$, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: Z$, shift: iw, preventDefault: !0 },
  { key: "ArrowUp", run: ku, shift: ju, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: Th, shift: Eh },
  { mac: "Ctrl-ArrowUp", run: Ch, shift: Dh },
  { key: "ArrowDown", run: Su, shift: Pu, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: Hh, shift: jh },
  { mac: "Ctrl-ArrowDown", run: pl, shift: Rh },
  { key: "PageUp", run: Ch, shift: Dh },
  { key: "PageDown", run: pl, shift: Rh },
  { key: "Home", run: A$, shift: tw, preventDefault: !0 },
  { key: "Mod-Home", run: Th, shift: Eh },
  { key: "End", run: M$, shift: J$, preventDefault: !0 },
  { key: "Mod-End", run: Hh, shift: jh },
  { key: "Enter", run: Ph, shift: Ph },
  { key: "Mod-a", run: rw },
  { key: "Backspace", run: ml, shift: ml, preventDefault: !0 },
  { key: "Delete", run: Gu, preventDefault: !0 },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: Bu, preventDefault: !0 },
  { key: "Mod-Delete", mac: "Alt-Delete", run: fw, preventDefault: !0 },
  { mac: "Mod-Backspace", run: dw, preventDefault: !0 },
  { mac: "Mod-Delete", run: pw, preventDefault: !0 }
].concat(/* @__PURE__ */ Rw.map((s) => ({ mac: s.key, run: s.run, shift: s.shift }))), Hw = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: B$, shift: X$ },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: W$, shift: K$ },
  { key: "Alt-ArrowUp", run: $w },
  { key: "Shift-Alt-ArrowUp", run: yw },
  { key: "Alt-ArrowDown", run: ww },
  { key: "Shift-Alt-ArrowDown", run: bw },
  { key: "Mod-Alt-ArrowUp", run: aw },
  { key: "Mod-Alt-ArrowDown", run: hw },
  { key: "Escape", run: cw },
  { key: "Mod-Enter", run: kw },
  { key: "Alt-l", mac: "Ctrl-l", run: ow },
  { key: "Mod-i", run: lw, preventDefault: !0 },
  { key: "Mod-[", run: Cw },
  { key: "Mod-]", run: vw },
  { key: "Mod-Alt-\\", run: Sw },
  { key: "Shift-Mod-k", run: Ow },
  { key: "Shift-Mod-\\", run: I$ },
  { key: "Mod-/", run: $$ },
  { key: "Alt-A", run: y$ },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: Dw }
].concat(Tw), Nh = typeof String.prototype.normalize == "function" ? (s) => s.normalize("NFKD") : (s) => s;
class Ui {
  /**
  Create a text cursor. The query is the search string, `from` to
  `to` provides the region to search.
  
  When `normalize` is given, it will be called, on both the query
  string and the content it is matched against, before comparing.
  You can, for example, create a case-insensitive search by
  passing `s => s.toLowerCase()`.
  
  Text is always normalized with
  [`.normalize("NFKD")`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
  (when supported).
  */
  constructor(t, e, i = 0, n = t.length, r, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = t.iterRange(i, n), this.bufferStart = i, this.normalize = r ? (l) => r(Nh(l)) : Nh, this.query = this.normalize(e);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return St(this.buffer, this.bufferPos);
  }
  /**
  Look for the next match. Updates the iterator's
  [`value`](https://codemirror.net/6/docs/ref/#search.SearchCursor.value) and
  [`done`](https://codemirror.net/6/docs/ref/#search.SearchCursor.done) properties. Should be called
  at least once before using the cursor.
  */
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  /**
  The `next` method will ignore matches that partially overlap a
  previous match. This method behaves like `next`, but includes
  such matches.
  */
  nextOverlapping() {
    for (; ; ) {
      let t = this.peek();
      if (t < 0)
        return this.done = !0, this;
      let e = wl(t), i = this.bufferStart + this.bufferPos;
      this.bufferPos += le(t);
      let n = this.normalize(e);
      if (n.length)
        for (let r = 0, o = i; ; r++) {
          let l = n.charCodeAt(r), a = this.match(l, o, this.bufferPos + this.bufferStart);
          if (r == n.length - 1) {
            if (a)
              return this.value = a, this;
            break;
          }
          o == i && r < e.length && e.charCodeAt(r) == l && o++;
        }
    }
  }
  match(t, e, i) {
    let n = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let o = this.matches[r], l = !1;
      this.query.charCodeAt(o) == t && (o == this.query.length - 1 ? n = { from: this.matches[r + 1], to: i } : (this.matches[r]++, l = !0)), l || (this.matches.splice(r, 2), r -= 2);
    }
    return this.query.charCodeAt(0) == t && (this.query.length == 1 ? n = { from: e, to: i } : this.matches.push(1, e)), n && this.test && !this.test(n.from, n.to, this.buffer, this.bufferStart) && (n = null), n;
  }
}
typeof Symbol < "u" && (Ui.prototype[Symbol.iterator] = function() {
  return this;
});
const Lu = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") }, Il = "gm" + (/x/.unicode == null ? "" : "u");
class Zu {
  /**
  Create a cursor that will search the given range in the given
  document. `query` should be the raw pattern (as you'd pass it to
  `new RegExp`).
  */
  constructor(t, e, i, n = 0, r = t.length) {
    if (this.text = t, this.to = r, this.curLine = "", this.done = !1, this.value = Lu, /\\[sWDnr]|\n|\r|\[\^/.test(e))
      return new _u(t, e, i, n, r);
    this.re = new RegExp(e, Il + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = t.iter();
    let o = t.lineAt(n);
    this.curLineStart = o.from, this.matchPos = tr(t, n), this.getLine(this.curLineStart);
  }
  getLine(t) {
    this.iter.next(t), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  /**
  Move to the next match, if there is one.
  */
  next() {
    for (let t = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = t;
      let e = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (e) {
        let i = this.curLineStart + e.index, n = i + e[0].length;
        if (this.matchPos = tr(this.text, n + (i == n ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < n || i > this.value.to) && (!this.test || this.test(i, n, e)))
          return this.value = { from: i, to: n, match: e }, this;
        t = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), t = 0;
      else
        return this.done = !0, this;
    }
  }
}
const eo = /* @__PURE__ */ new WeakMap();
class Wi {
  constructor(t, e) {
    this.from = t, this.text = e;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(t, e, i) {
    let n = eo.get(t);
    if (!n || n.from >= i || n.to <= e) {
      let l = new Wi(e, t.sliceString(e, i));
      return eo.set(t, l), l;
    }
    if (n.from == e && n.to == i)
      return n;
    let { text: r, from: o } = n;
    return o > e && (r = t.sliceString(e, o) + r, o = e), n.to < i && (r += t.sliceString(n.to, i)), eo.set(t, new Wi(o, r)), new Wi(e, r.slice(e - o, i - o));
  }
}
class _u {
  constructor(t, e, i, n, r) {
    this.text = t, this.to = r, this.done = !1, this.value = Lu, this.matchPos = tr(t, n), this.re = new RegExp(e, Il + (i != null && i.ignoreCase ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = Wi.get(t, n, this.chunkEnd(
      n + 5e3
      /* Chunk.Base */
    ));
  }
  chunkEnd(t) {
    return t >= this.to ? this.to : this.text.lineAt(t).to;
  }
  next() {
    for (; ; ) {
      let t = this.re.lastIndex = this.matchPos - this.flat.from, e = this.re.exec(this.flat.text);
      if (e && !e[0] && e.index == t && (this.re.lastIndex = t + 1, e = this.re.exec(this.flat.text)), e) {
        let i = this.flat.from + e.index, n = i + e[0].length;
        if ((this.flat.to >= this.to || e.index + e[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, n, e)))
          return this.value = { from: i, to: n, match: e }, this.matchPos = tr(this.text, n + (i == n ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = !0, this;
      this.flat = Wi.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (Zu.prototype[Symbol.iterator] = _u.prototype[Symbol.iterator] = function() {
  return this;
});
function Ew(s) {
  try {
    return new RegExp(s, Il), !0;
  } catch {
    return !1;
  }
}
function tr(s, t) {
  if (t >= s.length)
    return t;
  let e = s.lineAt(t), i;
  for (; t < e.to && (i = e.text.charCodeAt(t - e.from)) >= 56320 && i < 57344; )
    t++;
  return t;
}
const jw = (s) => {
  let { state: t } = s, e = String(t.doc.lineAt(s.state.selection.main.head).number), { close: i, result: n } = Ag(s, {
    label: t.phrase("Go to line"),
    input: { type: "text", name: "line", value: e },
    focus: !0,
    submitLabel: t.phrase("go")
  });
  return n.then((r) => {
    let o = r && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(r.elements.line.value);
    if (!o) {
      s.dispatch({ effects: i });
      return;
    }
    let l = t.doc.lineAt(t.selection.main.head), [, a, h, c, f] = o, u = c ? +c.slice(1) : 0, d = h ? +h : l.number;
    if (h && f) {
      let g = d / 100;
      a && (g = g * (a == "-" ? -1 : 1) + l.number / t.doc.lines), d = Math.round(t.doc.lines * g);
    } else h && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = t.doc.line(Math.max(1, Math.min(t.doc.lines, d))), m = x.cursor(p.from + Math.max(0, Math.min(u, p.length)));
    s.dispatch({
      effects: [i, D.scrollIntoView(m.from, { y: "center" })],
      selection: m
    });
  }), !0;
}, Pw = {
  highlightWordAroundCursor: !1,
  minSelectionLength: 1,
  maxMatches: 100,
  wholeWords: !1
}, Nw = /* @__PURE__ */ T.define({
  combine(s) {
    return ge(s, Pw, {
      highlightWordAroundCursor: (t, e) => t || e,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    });
  }
});
function Yw(s) {
  return [Ww, Bw];
}
const zw = /* @__PURE__ */ N.mark({ class: "cm-selectionMatch" }), Gw = /* @__PURE__ */ N.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Yh(s, t, e, i) {
  return (e == 0 || s(t.sliceDoc(e - 1, e)) != J.Word) && (i == t.doc.length || s(t.sliceDoc(i, i + 1)) != J.Word);
}
function Qw(s, t, e, i) {
  return s(t.sliceDoc(e, e + 1)) == J.Word && s(t.sliceDoc(i - 1, i)) == J.Word;
}
const Bw = /* @__PURE__ */ st.fromClass(class {
  constructor(s) {
    this.decorations = this.getDeco(s);
  }
  update(s) {
    (s.selectionSet || s.docChanged || s.viewportChanged) && (this.decorations = this.getDeco(s.view));
  }
  getDeco(s) {
    let t = s.state.facet(Nw), { state: e } = s, i = e.selection;
    if (i.ranges.length > 1)
      return N.none;
    let n = i.main, r, o = null;
    if (n.empty) {
      if (!t.highlightWordAroundCursor)
        return N.none;
      let a = e.wordAt(n.head);
      if (!a)
        return N.none;
      o = e.charCategorizer(n.head), r = e.sliceDoc(a.from, a.to);
    } else {
      let a = n.to - n.from;
      if (a < t.minSelectionLength || a > 200)
        return N.none;
      if (t.wholeWords) {
        if (r = e.sliceDoc(n.from, n.to), o = e.charCategorizer(n.head), !(Yh(o, e, n.from, n.to) && Qw(o, e, n.from, n.to)))
          return N.none;
      } else if (r = e.sliceDoc(n.from, n.to), !r)
        return N.none;
    }
    let l = [];
    for (let a of s.visibleRanges) {
      let h = new Ui(e.doc, r, a.from, a.to);
      for (; !h.next().done; ) {
        let { from: c, to: f } = h.value;
        if ((!o || Yh(o, e, c, f)) && (n.empty && c <= n.from && f >= n.to ? l.push(Gw.range(c, f)) : (c >= n.to || f <= n.from) && l.push(zw.range(c, f)), l.length > t.maxMatches))
          return N.none;
      }
    }
    return N.set(l);
  }
}, {
  decorations: (s) => s.decorations
}), Ww = /* @__PURE__ */ D.baseTheme({
  ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
  ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), Mw = ({ state: s, dispatch: t }) => {
  let { selection: e } = s, i = x.create(e.ranges.map((n) => s.wordAt(n.head) || x.cursor(n.head)), e.mainIndex);
  return i.eq(e) ? !1 : (t(s.update({ selection: i })), !0);
};
function Aw(s, t) {
  let { main: e, ranges: i } = s.selection, n = s.wordAt(e.head), r = n && n.from == e.from && n.to == e.to;
  for (let o = !1, l = new Ui(s.doc, t, i[i.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new Ui(s.doc, t, 0, Math.max(0, i[i.length - 1].from - 1)), o = !0;
    } else {
      if (o && i.some((a) => a.from == l.value.from))
        continue;
      if (r) {
        let a = s.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const Lw = ({ state: s, dispatch: t }) => {
  let { ranges: e } = s.selection;
  if (e.some((r) => r.from === r.to))
    return Mw({ state: s, dispatch: t });
  let i = s.sliceDoc(e[0].from, e[0].to);
  if (s.selection.ranges.some((r) => s.sliceDoc(r.from, r.to) != i))
    return !1;
  let n = Aw(s, i);
  return n ? (t(s.update({
    selection: s.selection.addRange(x.range(n.from, n.to), !1),
    effects: D.scrollIntoView(n.to)
  })), !0) : !1;
}, Ji = /* @__PURE__ */ T.define({
  combine(s) {
    return ge(s, {
      top: !1,
      caseSensitive: !1,
      literal: !1,
      regexp: !1,
      wholeWord: !1,
      createPanel: (t) => new s0(t),
      scrollToMatch: (t) => D.scrollIntoView(t)
    });
  }
});
class qu {
  /**
  Create a query object.
  */
  constructor(t) {
    this.search = t.search, this.caseSensitive = !!t.caseSensitive, this.literal = !!t.literal, this.regexp = !!t.regexp, this.replace = t.replace || "", this.valid = !!this.search && (!this.regexp || Ew(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!t.wholeWord, this.test = t.test;
  }
  /**
  @internal
  */
  unquote(t) {
    return this.literal ? t : t.replace(/\\([nrt\\])/g, (e, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
  }
  /**
  Compare this query to another query.
  */
  eq(t) {
    return this.search == t.search && this.replace == t.replace && this.caseSensitive == t.caseSensitive && this.regexp == t.regexp && this.wholeWord == t.wholeWord && this.test == t.test;
  }
  /**
  @internal
  */
  create() {
    return this.regexp ? new Uw(this) : new qw(this);
  }
  /**
  Get a search cursor for this query, searching through the given
  range in the given state.
  */
  getCursor(t, e = 0, i) {
    let n = t.doc ? t : M.create({ doc: t });
    return i == null && (i = n.doc.length), this.regexp ? Ri(this, n, e, i) : Di(this, n, e, i);
  }
}
class Fu {
  constructor(t) {
    this.spec = t;
  }
}
function Zw(s, t, e) {
  return (i, n, r, o) => {
    if (e && !e(i, n, r, o))
      return !1;
    let l = i >= o && n <= o + r.length ? r.slice(i - o, n - o) : t.doc.sliceString(i, n);
    return s(l, t, i, n);
  };
}
function Di(s, t, e, i) {
  let n;
  return s.wholeWord && (n = _w(t.doc, t.charCategorizer(t.selection.main.head))), s.test && (n = Zw(s.test, t, n)), new Ui(t.doc, s.unquoted, e, i, s.caseSensitive ? void 0 : (r) => r.toLowerCase(), n);
}
function _w(s, t) {
  return (e, i, n, r) => ((r > e || r + n.length < i) && (r = Math.max(0, e - 2), n = s.sliceString(r, Math.min(s.length, i + 2))), (t(er(n, e - r)) != J.Word || t(ir(n, e - r)) != J.Word) && (t(ir(n, i - r)) != J.Word || t(er(n, i - r)) != J.Word));
}
class qw extends Fu {
  constructor(t) {
    super(t);
  }
  nextMatch(t, e, i) {
    let n = Di(this.spec, t, i, t.doc.length).nextOverlapping();
    if (n.done) {
      let r = Math.min(t.doc.length, e + this.spec.unquoted.length);
      n = Di(this.spec, t, 0, r).nextOverlapping();
    }
    return n.done || n.value.from == e && n.value.to == i ? null : n.value;
  }
  // Searching in reverse is, rather than implementing an inverted search
  // cursor, done by scanning chunk after chunk forward.
  prevMatchInRange(t, e, i) {
    for (let n = i; ; ) {
      let r = Math.max(e, n - 1e4 - this.spec.unquoted.length), o = Di(this.spec, t, r, n), l = null;
      for (; !o.nextOverlapping().done; )
        l = o.value;
      if (l)
        return l;
      if (r == e)
        return null;
      n -= 1e4;
    }
  }
  prevMatch(t, e, i) {
    let n = this.prevMatchInRange(t, 0, e);
    return n || (n = this.prevMatchInRange(t, Math.max(0, i - this.spec.unquoted.length), t.doc.length)), n && (n.from != e || n.to != i) ? n : null;
  }
  getReplacement(t) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(t, e) {
    let i = Di(this.spec, t, 0, t.doc.length), n = [];
    for (; !i.next().done; ) {
      if (n.length >= e)
        return null;
      n.push(i.value);
    }
    return n;
  }
  highlight(t, e, i, n) {
    let r = Di(this.spec, t, Math.max(0, e - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, t.doc.length));
    for (; !r.next().done; )
      n(r.value.from, r.value.to);
  }
}
function Fw(s, t, e) {
  return (i, n, r) => (!e || e(i, n, r)) && s(r[0], t, i, n);
}
function Ri(s, t, e, i) {
  let n;
  return s.wholeWord && (n = Iw(t.charCategorizer(t.selection.main.head))), s.test && (n = Fw(s.test, t, n)), new Zu(t.doc, s.search, { ignoreCase: !s.caseSensitive, test: n }, e, i);
}
function er(s, t) {
  return s.slice(at(s, t, !1), t);
}
function ir(s, t) {
  return s.slice(t, at(s, t));
}
function Iw(s) {
  return (t, e, i) => !i[0].length || (s(er(i.input, i.index)) != J.Word || s(ir(i.input, i.index)) != J.Word) && (s(ir(i.input, i.index + i[0].length)) != J.Word || s(er(i.input, i.index + i[0].length)) != J.Word);
}
class Uw extends Fu {
  nextMatch(t, e, i) {
    let n = Ri(this.spec, t, i, t.doc.length).next();
    return n.done && (n = Ri(this.spec, t, 0, e).next()), n.done ? null : n.value;
  }
  prevMatchInRange(t, e, i) {
    for (let n = 1; ; n++) {
      let r = Math.max(
        e,
        i - n * 1e4
        /* FindPrev.ChunkSize */
      ), o = Ri(this.spec, t, r, i), l = null;
      for (; !o.next().done; )
        l = o.value;
      if (l && (r == e || l.from > r + 10))
        return l;
      if (r == e)
        return null;
    }
  }
  prevMatch(t, e, i) {
    return this.prevMatchInRange(t, 0, e) || this.prevMatchInRange(t, i, t.doc.length);
  }
  getReplacement(t) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (e, i) => {
      if (i == "&")
        return t.match[0];
      if (i == "$")
        return "$";
      for (let n = i.length; n > 0; n--) {
        let r = +i.slice(0, n);
        if (r > 0 && r < t.match.length)
          return t.match[r] + i.slice(n);
      }
      return e;
    });
  }
  matchAll(t, e) {
    let i = Ri(this.spec, t, 0, t.doc.length), n = [];
    for (; !i.next().done; ) {
      if (n.length >= e)
        return null;
      n.push(i.value);
    }
    return n;
  }
  highlight(t, e, i, n) {
    let r = Ri(this.spec, t, Math.max(
      0,
      e - 250
      /* RegExp.HighlightMargin */
    ), Math.min(i + 250, t.doc.length));
    for (; !r.next().done; )
      n(r.value.from, r.value.to);
  }
}
const Hs = /* @__PURE__ */ Y.define(), Ul = /* @__PURE__ */ Y.define(), Be = /* @__PURE__ */ mt.define({
  create(s) {
    return new io(gl(s).create(), null);
  },
  update(s, t) {
    for (let e of t.effects)
      e.is(Hs) ? s = new io(e.value.create(), s.panel) : e.is(Ul) && (s = new io(s.query, e.value ? Vl : null));
    return s;
  },
  provide: (s) => Cs.from(s, (t) => t.panel)
});
class io {
  constructor(t, e) {
    this.query = t, this.panel = e;
  }
}
const Vw = /* @__PURE__ */ N.mark({ class: "cm-searchMatch" }), Xw = /* @__PURE__ */ N.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), Kw = /* @__PURE__ */ st.fromClass(class {
  constructor(s) {
    this.view = s, this.decorations = this.highlight(s.state.field(Be));
  }
  update(s) {
    let t = s.state.field(Be);
    (t != s.startState.field(Be) || s.docChanged || s.selectionSet || s.viewportChanged) && (this.decorations = this.highlight(t));
  }
  highlight({ query: s, panel: t }) {
    if (!t || !s.spec.valid)
      return N.none;
    let { view: e } = this, i = new De();
    for (let n = 0, r = e.visibleRanges, o = r.length; n < o; n++) {
      let { from: l, to: a } = r[n];
      for (; n < o - 1 && a > r[n + 1].from - 2 * 250; )
        a = r[++n].to;
      s.highlight(e.state, l, a, (h, c) => {
        let f = e.state.selection.ranges.some((u) => u.from == h && u.to == c);
        i.add(h, c, f ? Xw : Vw);
      });
    }
    return i.finish();
  }
}, {
  decorations: (s) => s.decorations
});
function As(s) {
  return (t) => {
    let e = t.state.field(Be, !1);
    return e && e.query.spec.valid ? s(t, e) : Vu(t);
  };
}
const sr = /* @__PURE__ */ As((s, { query: t }) => {
  let { to: e } = s.state.selection.main, i = t.nextMatch(s.state, e, e);
  if (!i)
    return !1;
  let n = x.single(i.from, i.to), r = s.state.facet(Ji);
  return s.dispatch({
    selection: n,
    effects: [Xl(s, i), r.scrollToMatch(n.main, s)],
    userEvent: "select.search"
  }), Uu(s), !0;
}), nr = /* @__PURE__ */ As((s, { query: t }) => {
  let { state: e } = s, { from: i } = e.selection.main, n = t.prevMatch(e, i, i);
  if (!n)
    return !1;
  let r = x.single(n.from, n.to), o = s.state.facet(Ji);
  return s.dispatch({
    selection: r,
    effects: [Xl(s, n), o.scrollToMatch(r.main, s)],
    userEvent: "select.search"
  }), Uu(s), !0;
}), Jw = /* @__PURE__ */ As((s, { query: t }) => {
  let e = t.matchAll(s.state, 1e3);
  return !e || !e.length ? !1 : (s.dispatch({
    selection: x.create(e.map((i) => x.range(i.from, i.to))),
    userEvent: "select.search.matches"
  }), !0);
}), t0 = ({ state: s, dispatch: t }) => {
  let e = s.selection;
  if (e.ranges.length > 1 || e.main.empty)
    return !1;
  let { from: i, to: n } = e.main, r = [], o = 0;
  for (let l = new Ui(s.doc, s.sliceDoc(i, n)); !l.next().done; ) {
    if (r.length > 1e3)
      return !1;
    l.value.from == i && (o = r.length), r.push(x.range(l.value.from, l.value.to));
  }
  return t(s.update({
    selection: x.create(r, o),
    userEvent: "select.search.matches"
  })), !0;
}, zh = /* @__PURE__ */ As((s, { query: t }) => {
  let { state: e } = s, { from: i, to: n } = e.selection.main;
  if (e.readOnly)
    return !1;
  let r = t.nextMatch(e, i, i);
  if (!r)
    return !1;
  let o = r, l = [], a, h, c = [];
  o.from == i && o.to == n && (h = e.toText(t.getReplacement(o)), l.push({ from: o.from, to: o.to, insert: h }), o = t.nextMatch(e, o.from, o.to), c.push(D.announce.of(e.phrase("replaced match on line $", e.doc.lineAt(i).number) + ".")));
  let f = s.state.changes(l);
  return o && (a = x.single(o.from, o.to).map(f), c.push(Xl(s, o)), c.push(e.facet(Ji).scrollToMatch(a.main, s))), s.dispatch({
    changes: f,
    selection: a,
    effects: c,
    userEvent: "input.replace"
  }), !0;
}), e0 = /* @__PURE__ */ As((s, { query: t }) => {
  if (s.state.readOnly)
    return !1;
  let e = t.matchAll(s.state, 1e9).map((n) => {
    let { from: r, to: o } = n;
    return { from: r, to: o, insert: t.getReplacement(n) };
  });
  if (!e.length)
    return !1;
  let i = s.state.phrase("replaced $ matches", e.length) + ".";
  return s.dispatch({
    changes: e,
    effects: D.announce.of(i),
    userEvent: "input.replace.all"
  }), !0;
});
function Vl(s) {
  return s.state.facet(Ji).createPanel(s);
}
function gl(s, t) {
  var e, i, n, r, o;
  let l = s.selection.main, a = l.empty || l.to > l.from + 100 ? "" : s.sliceDoc(l.from, l.to);
  if (t && !a)
    return t;
  let h = s.facet(Ji);
  return new qu({
    search: ((e = t == null ? void 0 : t.literal) !== null && e !== void 0 ? e : h.literal) ? a : a.replace(/\n/g, "\\n"),
    caseSensitive: (i = t == null ? void 0 : t.caseSensitive) !== null && i !== void 0 ? i : h.caseSensitive,
    literal: (n = t == null ? void 0 : t.literal) !== null && n !== void 0 ? n : h.literal,
    regexp: (r = t == null ? void 0 : t.regexp) !== null && r !== void 0 ? r : h.regexp,
    wholeWord: (o = t == null ? void 0 : t.wholeWord) !== null && o !== void 0 ? o : h.wholeWord
  });
}
function Iu(s) {
  let t = Gl(s, Vl);
  return t && t.dom.querySelector("[main-field]");
}
function Uu(s) {
  let t = Iu(s);
  t && t == s.root.activeElement && t.select();
}
const Vu = (s) => {
  let t = s.state.field(Be, !1);
  if (t && t.panel) {
    let e = Iu(s);
    if (e && e != s.root.activeElement) {
      let i = gl(s.state, t.query.spec);
      i.valid && s.dispatch({ effects: Hs.of(i) }), e.focus(), e.select();
    }
  } else
    s.dispatch({ effects: [
      Ul.of(!0),
      t ? Hs.of(gl(s.state, t.query.spec)) : Y.appendConfig.of(r0)
    ] });
  return !0;
}, Xu = (s) => {
  let t = s.state.field(Be, !1);
  if (!t || !t.panel)
    return !1;
  let e = Gl(s, Vl);
  return e && e.dom.contains(s.root.activeElement) && s.focus(), s.dispatch({ effects: Ul.of(!1) }), !0;
}, i0 = [
  { key: "Mod-f", run: Vu, scope: "editor search-panel" },
  { key: "F3", run: sr, shift: nr, scope: "editor search-panel", preventDefault: !0 },
  { key: "Mod-g", run: sr, shift: nr, scope: "editor search-panel", preventDefault: !0 },
  { key: "Escape", run: Xu, scope: "editor search-panel" },
  { key: "Mod-Shift-l", run: t0 },
  { key: "Mod-Alt-g", run: jw },
  { key: "Mod-d", run: Lw, preventDefault: !0 }
];
class s0 {
  constructor(t) {
    this.view = t;
    let e = this.query = t.state.field(Be).query.spec;
    this.commit = this.commit.bind(this), this.searchField = _("input", {
      value: e.search,
      placeholder: jt(t, "Find"),
      "aria-label": jt(t, "Find"),
      class: "cm-textfield",
      name: "search",
      form: "",
      "main-field": "true",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.replaceField = _("input", {
      value: e.replace,
      placeholder: jt(t, "Replace"),
      "aria-label": jt(t, "Replace"),
      class: "cm-textfield",
      name: "replace",
      form: "",
      onchange: this.commit,
      onkeyup: this.commit
    }), this.caseField = _("input", {
      type: "checkbox",
      name: "case",
      form: "",
      checked: e.caseSensitive,
      onchange: this.commit
    }), this.reField = _("input", {
      type: "checkbox",
      name: "re",
      form: "",
      checked: e.regexp,
      onchange: this.commit
    }), this.wordField = _("input", {
      type: "checkbox",
      name: "word",
      form: "",
      checked: e.wholeWord,
      onchange: this.commit
    });
    function i(n, r, o) {
      return _("button", { class: "cm-button", name: n, onclick: r, type: "button" }, o);
    }
    this.dom = _("div", { onkeydown: (n) => this.keydown(n), class: "cm-search" }, [
      this.searchField,
      i("next", () => sr(t), [jt(t, "next")]),
      i("prev", () => nr(t), [jt(t, "previous")]),
      i("select", () => Jw(t), [jt(t, "all")]),
      _("label", null, [this.caseField, jt(t, "match case")]),
      _("label", null, [this.reField, jt(t, "regexp")]),
      _("label", null, [this.wordField, jt(t, "by word")]),
      ...t.state.readOnly ? [] : [
        _("br"),
        this.replaceField,
        i("replace", () => zh(t), [jt(t, "replace")]),
        i("replaceAll", () => e0(t), [jt(t, "replace all")])
      ],
      _("button", {
        name: "close",
        onclick: () => Xu(t),
        "aria-label": jt(t, "close"),
        type: "button"
      }, ["×"])
    ]);
  }
  commit() {
    let t = new qu({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value
    });
    t.eq(this.query) || (this.query = t, this.view.dispatch({ effects: Hs.of(t) }));
  }
  keydown(t) {
    tg(this.view, t, "search-panel") ? t.preventDefault() : t.keyCode == 13 && t.target == this.searchField ? (t.preventDefault(), (t.shiftKey ? nr : sr)(this.view)) : t.keyCode == 13 && t.target == this.replaceField && (t.preventDefault(), zh(this.view));
  }
  update(t) {
    for (let e of t.transactions)
      for (let i of e.effects)
        i.is(Hs) && !i.value.eq(this.query) && this.setQuery(i.value);
  }
  setQuery(t) {
    this.query = t, this.searchField.value = t.search, this.replaceField.value = t.replace, this.caseField.checked = t.caseSensitive, this.reField.checked = t.regexp, this.wordField.checked = t.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(Ji).top;
  }
}
function jt(s, t) {
  return s.state.phrase(t);
}
const cn = 30, fn = /[\s\.,:;?!]/;
function Xl(s, { from: t, to: e }) {
  let i = s.state.doc.lineAt(t), n = s.state.doc.lineAt(e).to, r = Math.max(i.from, t - cn), o = Math.min(n, e + cn), l = s.state.sliceDoc(r, o);
  if (r != i.from) {
    for (let a = 0; a < cn; a++)
      if (!fn.test(l[a + 1]) && fn.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != n) {
    for (let a = l.length - 1; a > l.length - cn; a--)
      if (!fn.test(l[a - 1]) && fn.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return D.announce.of(`${s.state.phrase("current match")}. ${l} ${s.state.phrase("on line")} ${i.number}.`);
}
const n0 = /* @__PURE__ */ D.baseTheme({
  ".cm-panel.cm-search": {
    padding: "2px 6px 4px",
    position: "relative",
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "4px",
      backgroundColor: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    },
    "& input, & button, & label": {
      margin: ".2em .6em .2em 0"
    },
    "& input[type=checkbox]": {
      marginRight: ".2em"
    },
    "& label": {
      fontSize: "80%",
      whiteSpace: "pre"
    }
  },
  "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
  "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
  "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
  "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), r0 = [
  Be,
  /* @__PURE__ */ gi.low(Kw),
  n0
];
class Ku {
  /**
  Create a new completion context. (Mostly useful for testing
  completion sources—in the editor, the extension will create
  these for you.)
  */
  constructor(t, e, i, n) {
    this.state = t, this.pos = e, this.explicit = i, this.view = n, this.abortListeners = [], this.abortOnDocChange = !1;
  }
  /**
  Get the extent, content, and (if there is a token) type of the
  token before `this.pos`.
  */
  tokenBefore(t) {
    let e = pt(this.state).resolveInner(this.pos, -1);
    for (; e && t.indexOf(e.name) < 0; )
      e = e.parent;
    return e ? {
      from: e.from,
      to: this.pos,
      text: this.state.sliceDoc(e.from, this.pos),
      type: e.type
    } : null;
  }
  /**
  Get the match of the given expression directly before the
  cursor.
  */
  matchBefore(t) {
    let e = this.state.doc.lineAt(this.pos), i = Math.max(e.from, this.pos - 250), n = e.text.slice(i - e.from, this.pos - e.from), r = n.search(Ju(t, !1));
    return r < 0 ? null : { from: i + r, to: this.pos, text: n.slice(r) };
  }
  /**
  Yields true when the query has been aborted. Can be useful in
  asynchronous queries to avoid doing work that will be ignored.
  */
  get aborted() {
    return this.abortListeners == null;
  }
  /**
  Allows you to register abort handlers, which will be called when
  the query is
  [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
  
  By default, running queries will not be aborted for regular
  typing or backspacing, on the assumption that they are likely to
  return a result with a
  [`validFor`](https://codemirror.net/6/docs/ref/#autocomplete.CompletionResult.validFor) field that
  allows the result to be used after all. Passing `onDocChange:
  true` will cause this query to be aborted for any document
  change.
  */
  addEventListener(t, e, i) {
    t == "abort" && this.abortListeners && (this.abortListeners.push(e), i && i.onDocChange && (this.abortOnDocChange = !0));
  }
}
function Gh(s) {
  let t = Object.keys(s).join(""), e = /\w/.test(t);
  return e && (t = t.replace(/\w/g, "")), `[${e ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
}
function o0(s) {
  let t = /* @__PURE__ */ Object.create(null), e = /* @__PURE__ */ Object.create(null);
  for (let { label: n } of s) {
    t[n[0]] = !0;
    for (let r = 1; r < n.length; r++)
      e[n[r]] = !0;
  }
  let i = Gh(t) + Gh(e) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function l0(s) {
  let t = s.map((n) => typeof n == "string" ? { label: n } : n), [e, i] = t.every((n) => /^\w+$/.test(n.label)) ? [/\w*$/, /\w+$/] : o0(t);
  return (n) => {
    let r = n.matchBefore(i);
    return r || n.explicit ? { from: r ? r.from : n.pos, options: t, validFor: e } : null;
  };
}
class Qh {
  constructor(t, e, i, n) {
    this.completion = t, this.source = e, this.match = i, this.score = n;
  }
}
function hi(s) {
  return s.selection.main.from;
}
function Ju(s, t) {
  var e;
  let { source: i } = s, n = t && i[0] != "^", r = i[i.length - 1] != "$";
  return !n && !r ? s : new RegExp(`${n ? "^" : ""}(?:${i})${r ? "$" : ""}`, (e = s.flags) !== null && e !== void 0 ? e : s.ignoreCase ? "i" : "");
}
const td = /* @__PURE__ */ He.define();
function a0(s, t, e, i) {
  let { main: n } = s.selection, r = e - n.from, o = i - n.from;
  return {
    ...s.changeByRange((l) => {
      if (l != n && e != i && s.sliceDoc(l.from + r, l.from + o) != s.sliceDoc(e, i))
        return { range: l };
      let a = s.toText(t);
      return {
        changes: { from: l.from + r, to: i == n.from ? l.to : l.from + o, insert: a },
        range: x.cursor(l.from + r + a.length)
      };
    }),
    scrollIntoView: !0,
    userEvent: "input.complete"
  };
}
const Bh = /* @__PURE__ */ new WeakMap();
function h0(s) {
  if (!Array.isArray(s))
    return s;
  let t = Bh.get(s);
  return t || Bh.set(s, t = l0(s)), t;
}
const rr = /* @__PURE__ */ Y.define(), Es = /* @__PURE__ */ Y.define();
class c0 {
  constructor(t) {
    this.pattern = t, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let e = 0; e < t.length; ) {
      let i = St(t, e), n = le(i);
      this.chars.push(i);
      let r = t.slice(e, e + n), o = r.toUpperCase();
      this.folded.push(St(o == r ? r.toLowerCase() : o, 0)), e += n;
    }
    this.astral = t.length != this.chars.length;
  }
  ret(t, e) {
    return this.score = t, this.matched = e, this;
  }
  // Matches a given word (completion) against the pattern (input).
  // Will return a boolean indicating whether there was a match and,
  // on success, set `this.score` to the score, `this.matched` to an
  // array of `from, to` pairs indicating the matched parts of `word`.
  //
  // The score is a number that is more negative the worse the match
  // is. See `Penalty` above.
  match(t) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (t.length < this.pattern.length)
      return null;
    let { chars: e, folded: i, any: n, precise: r, byWord: o } = this;
    if (e.length == 1) {
      let y = St(t, 0), b = le(y), v = b == t.length ? 0 : -100;
      if (y != e[0]) if (y == i[0])
        v += -200;
      else
        return null;
      return this.ret(v, [0, b]);
    }
    let l = t.indexOf(this.pattern);
    if (l == 0)
      return this.ret(t.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = e.length, h = 0;
    if (l < 0) {
      for (let y = 0, b = Math.min(t.length, 200); y < b && h < a; ) {
        let v = St(t, y);
        (v == e[h] || v == i[h]) && (n[h++] = y), y += le(v);
      }
      if (h < a)
        return null;
    }
    let c = 0, f = 0, u = !1, d = 0, p = -1, m = -1, g = /[a-z]/.test(t), w = !0;
    for (let y = 0, b = Math.min(t.length, 200), v = 0; y < b && f < a; ) {
      let k = St(t, y);
      l < 0 && (c < a && k == e[c] && (r[c++] = y), d < a && (k == e[d] || k == i[d] ? (d == 0 && (p = y), m = y + 1, d++) : d = 0));
      let S, O = k < 255 ? k >= 48 && k <= 57 || k >= 97 && k <= 122 ? 2 : k >= 65 && k <= 90 ? 1 : 0 : (S = wl(k)) != S.toLowerCase() ? 1 : S != S.toUpperCase() ? 2 : 0;
      (!y || O == 1 && g || v == 0 && O != 0) && (e[f] == k || i[f] == k && (u = !0) ? o[f++] = y : o.length && (w = !1)), v = O, y += le(k);
    }
    return f == a && o[0] == 0 && w ? this.result(-100 + (u ? -200 : 0), o, t) : d == a && p == 0 ? this.ret(-200 - t.length + (m == t.length ? 0 : -100), [0, m]) : l > -1 ? this.ret(-700 - t.length, [l, l + this.pattern.length]) : d == a ? this.ret(-900 - t.length, [p, m]) : f == a ? this.result(-100 + (u ? -200 : 0) + -700 + (w ? 0 : -1100), o, t) : e.length == 2 ? null : this.result((n[0] ? -700 : 0) + -200 + -1100, n, t);
  }
  result(t, e, i) {
    let n = [], r = 0;
    for (let o of e) {
      let l = o + (this.astral ? le(St(i, o)) : 1);
      r && n[r - 1] == o ? n[r - 1] = l : (n[r++] = o, n[r++] = l);
    }
    return this.ret(t - i.length, n);
  }
}
class f0 {
  constructor(t) {
    this.pattern = t, this.matched = [], this.score = 0, this.folded = t.toLowerCase();
  }
  match(t) {
    if (t.length < this.pattern.length)
      return null;
    let e = t.slice(0, this.pattern.length), i = e == this.pattern ? 0 : e.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, e.length], this.score = i + (t.length == this.pattern.length ? 0 : -100), this);
  }
}
const lt = /* @__PURE__ */ T.define({
  combine(s) {
    return ge(s, {
      activateOnTyping: !0,
      activateOnCompletion: () => !1,
      activateOnTypingDelay: 100,
      selectOnOpen: !0,
      override: null,
      closeOnBlur: !0,
      maxRenderedOptions: 100,
      defaultKeymap: !0,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: !1,
      icons: !0,
      addToOptions: [],
      positionInfo: u0,
      filterStrict: !1,
      compareCompletions: (t, e) => (t.sortText || t.label).localeCompare(e.sortText || e.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (t, e) => t && e,
      closeOnBlur: (t, e) => t && e,
      icons: (t, e) => t && e,
      tooltipClass: (t, e) => (i) => Wh(t(i), e(i)),
      optionClass: (t, e) => (i) => Wh(t(i), e(i)),
      addToOptions: (t, e) => t.concat(e),
      filterStrict: (t, e) => t || e
    });
  }
});
function Wh(s, t) {
  return s ? t ? s + " " + t : s : t;
}
function u0(s, t, e, i, n, r) {
  let o = s.textDirection == I.RTL, l = o, a = !1, h = "top", c, f, u = t.left - n.left, d = n.right - t.right, p = i.right - i.left, m = i.bottom - i.top;
  if (l && u < Math.min(p, d) ? l = !1 : !l && d < Math.min(p, u) && (l = !0), p <= (l ? u : d))
    c = Math.max(n.top, Math.min(e.top, n.bottom - m)) - t.top, f = Math.min(400, l ? u : d);
  else {
    a = !0, f = Math.min(
      400,
      (o ? t.right : n.right - t.left) - 30
      /* Info.Margin */
    );
    let y = n.bottom - t.bottom;
    y >= m || y > t.top ? c = e.bottom - t.top : (h = "bottom", c = t.bottom - e.top);
  }
  let g = (t.bottom - t.top) / r.offsetHeight, w = (t.right - t.left) / r.offsetWidth;
  return {
    style: `${h}: ${c / g}px; max-width: ${f / w}px`,
    class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right")
  };
}
const Kl = /* @__PURE__ */ Y.define();
function d0(s) {
  let t = s.addToOptions.slice();
  return s.icons && t.push({
    render(e) {
      let i = document.createElement("div");
      return i.classList.add("cm-completionIcon"), e.type && i.classList.add(...e.type.split(/\s+/g).map((n) => "cm-completionIcon-" + n)), i.setAttribute("aria-hidden", "true"), i;
    },
    position: 20
  }), t.push({
    render(e, i, n, r) {
      let o = document.createElement("span");
      o.className = "cm-completionLabel";
      let l = e.displayLabel || e.label, a = 0;
      for (let h = 0; h < r.length; ) {
        let c = r[h++], f = r[h++];
        c > a && o.appendChild(document.createTextNode(l.slice(a, c)));
        let u = o.appendChild(document.createElement("span"));
        u.appendChild(document.createTextNode(l.slice(c, f))), u.className = "cm-completionMatchedText", a = f;
      }
      return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
    },
    position: 50
  }, {
    render(e) {
      if (!e.detail)
        return null;
      let i = document.createElement("span");
      return i.className = "cm-completionDetail", i.textContent = e.detail, i;
    },
    position: 80
  }), t.sort((e, i) => e.position - i.position).map((e) => e.render);
}
function so(s, t, e) {
  if (s <= e)
    return { from: 0, to: s };
  if (t < 0 && (t = 0), t <= s >> 1) {
    let n = Math.floor(t / e);
    return { from: n * e, to: (n + 1) * e };
  }
  let i = Math.floor((s - t) / e);
  return { from: s - (i + 1) * e, to: s - i * e };
}
class p0 {
  constructor(t, e, i) {
    this.view = t, this.stateField = e, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: (a) => this.placeInfo(a),
      key: this
    }, this.space = null, this.currentClass = "";
    let n = t.state.field(e), { options: r, selected: o } = n.open, l = t.state.facet(lt);
    this.optionContent = d0(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = so(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = t.state.field(e).open;
      for (let c = a.target, f; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (f = /-(\d+)$/.exec(c.id)) && +f[1] < h.length) {
          this.applyCompletion(t, h[+f[1]]), a.preventDefault();
          return;
        }
      if (a.target == this.list) {
        let c = this.list.classList.contains("cm-completionListIncompleteTop") && a.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && a.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
        c != null && (t.dispatch({ effects: Kl.of(c) }), a.preventDefault());
      }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = t.state.field(this.stateField, !1);
      h && h.tooltip && t.state.facet(lt).closeOnBlur && a.relatedTarget != t.contentDOM && t.dispatch({ effects: Es.of(null) });
    }), this.showOptions(r, n.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(t, e) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t, e, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(t) {
    var e;
    let i = t.state.field(this.stateField), n = t.startState.field(this.stateField);
    if (this.updateTooltipClass(t.state), i != n) {
      let { options: r, selected: o, disabled: l } = i.open;
      (!n.open || n.open.options != r) && (this.range = so(r.length, o, t.state.facet(lt).maxRenderedOptions), this.showOptions(r, i.id)), this.updateSel(), l != ((e = n.open) === null || e === void 0 ? void 0 : e.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(t) {
    let e = this.tooltipClass(t);
    if (e != this.currentClass) {
      for (let i of this.currentClass.split(" "))
        i && this.dom.classList.remove(i);
      for (let i of e.split(" "))
        i && this.dom.classList.add(i);
      this.currentClass = e;
    }
  }
  positioned(t) {
    this.space = t, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let t = this.view.state.field(this.stateField), e = t.open;
    (e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) && (this.range = so(e.options.length, e.selected, this.view.state.facet(lt).maxRenderedOptions), this.showOptions(e.options, t.id));
    let i = this.updateSelectedOption(e.selected);
    if (i) {
      this.destroyInfo();
      let { completion: n } = e.options[e.selected], { info: r } = n;
      if (!r)
        return;
      let o = typeof r == "string" ? document.createTextNode(r) : r(n);
      if (!o)
        return;
      "then" in o ? o.then((l) => {
        l && this.view.state.field(this.stateField, !1) == t && this.addInfoPane(l, n);
      }).catch((l) => Dt(this.view.state, l, "completion info")) : (this.addInfoPane(o, n), i.setAttribute("aria-describedby", this.info.id));
    }
  }
  addInfoPane(t, e) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", i.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), t.nodeType != null)
      i.appendChild(t), this.infoDestroy = null;
    else {
      let { dom: n, destroy: r } = t;
      i.appendChild(n), this.infoDestroy = r || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(t) {
    let e = null;
    for (let i = this.list.firstChild, n = this.range.from; i; i = i.nextSibling, n++)
      i.nodeName != "LI" || !i.id ? n-- : n == t ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), e = i) : i.hasAttribute("aria-selected") && (i.removeAttribute("aria-selected"), i.removeAttribute("aria-describedby"));
    return e && g0(this.list, e), e;
  }
  measureInfo() {
    let t = this.dom.querySelector("[aria-selected]");
    if (!t || !this.info)
      return null;
    let e = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), n = t.getBoundingClientRect(), r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.documentElement;
      r = { left: 0, top: 0, right: o.clientWidth, bottom: o.clientHeight };
    }
    return n.top > Math.min(r.bottom, e.bottom) - 10 || n.bottom < Math.max(r.top, e.top) + 10 ? null : this.view.state.facet(lt).positionInfo(this.view, e, n, i, r, this.dom);
  }
  placeInfo(t) {
    this.info && (t ? (t.style && (this.info.style.cssText = t.style), this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(t, e, i) {
    const n = document.createElement("ul");
    n.id = e, n.setAttribute("role", "listbox"), n.setAttribute("aria-expanded", "true"), n.setAttribute("aria-label", this.view.state.phrase("Completions")), n.addEventListener("mousedown", (o) => {
      o.target == n && o.preventDefault();
    });
    let r = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = t[o], { section: h } = l;
      if (h) {
        let u = typeof h == "string" ? h : h.name;
        if (u != r && (o > i.from || i.from == 0))
          if (r = u, typeof h != "string" && h.header)
            n.appendChild(h.header(h));
          else {
            let d = n.appendChild(document.createElement("completion-section"));
            d.textContent = u;
          }
      }
      const c = n.appendChild(document.createElement("li"));
      c.id = e + "-" + o, c.setAttribute("role", "option");
      let f = this.optionClass(l);
      f && (c.className = f);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        d && c.appendChild(d);
      }
    }
    return i.from && n.classList.add("cm-completionListIncompleteTop"), i.to < t.length && n.classList.add("cm-completionListIncompleteBottom"), n;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function m0(s, t) {
  return (e) => new p0(e, s, t);
}
function g0(s, t) {
  let e = s.getBoundingClientRect(), i = t.getBoundingClientRect(), n = e.height / s.offsetHeight;
  i.top < e.top ? s.scrollTop -= (e.top - i.top) / n : i.bottom > e.bottom && (s.scrollTop += (i.bottom - e.bottom) / n);
}
function Mh(s) {
  return (s.boost || 0) * 100 + (s.apply ? 10 : 0) + (s.info ? 5 : 0) + (s.type ? 1 : 0);
}
function $0(s, t) {
  let e = [], i = null, n = null, r = (c) => {
    e.push(c);
    let { section: f } = c.completion;
    if (f) {
      i || (i = []);
      let u = typeof f == "string" ? f : f.name;
      i.some((d) => d.name == u) || i.push(typeof f == "string" ? { name: u } : f);
    }
  }, o = t.facet(lt);
  for (let c of s)
    if (c.hasResult()) {
      let f = c.result.getMatch;
      if (c.result.filter === !1)
        for (let u of c.result.options)
          r(new Qh(u, c.source, f ? f(u) : [], 1e9 - e.length));
      else {
        let u = t.sliceDoc(c.from, c.to), d, p = o.filterStrict ? new f0(u) : new c0(u);
        for (let m of c.result.options)
          if (d = p.match(m.label)) {
            let g = m.displayLabel ? f ? f(m, d.matched) : [] : d.matched, w = d.score + (m.boost || 0);
            if (r(new Qh(m, c.source, g, w)), typeof m.section == "object" && m.section.rank === "dynamic") {
              let { name: y } = m.section;
              n || (n = /* @__PURE__ */ Object.create(null)), n[y] = Math.max(w, n[y] || -1e9);
            }
          }
      }
    }
  if (i) {
    let c = /* @__PURE__ */ Object.create(null), f = 0, u = (d, p) => (d.rank === "dynamic" && p.rank === "dynamic" ? n[p.name] - n[d.name] : 0) || (typeof d.rank == "number" ? d.rank : 1e9) - (typeof p.rank == "number" ? p.rank : 1e9) || (d.name < p.name ? -1 : 1);
    for (let d of i.sort(u))
      f -= 1e5, c[d.name] = f;
    for (let d of e) {
      let { section: p } = d.completion;
      p && (d.score += c[typeof p == "string" ? p : p.name]);
    }
  }
  let l = [], a = null, h = o.compareCompletions;
  for (let c of e.sort((f, u) => u.score - f.score || h(f.completion, u.completion))) {
    let f = c.completion;
    !a || a.label != f.label || a.detail != f.detail || a.type != null && f.type != null && a.type != f.type || a.apply != f.apply || a.boost != f.boost ? l.push(c) : Mh(c.completion) > Mh(a) && (l[l.length - 1] = c), a = c.completion;
  }
  return l;
}
class Pi {
  constructor(t, e, i, n, r, o) {
    this.options = t, this.attrs = e, this.tooltip = i, this.timestamp = n, this.selected = r, this.disabled = o;
  }
  setSelected(t, e) {
    return t == this.selected || t >= this.options.length ? this : new Pi(this.options, Ah(e, t), this.tooltip, this.timestamp, t, this.disabled);
  }
  static build(t, e, i, n, r, o) {
    if (n && !o && t.some((h) => h.isPending))
      return n.setDisabled();
    let l = $0(t, e);
    if (!l.length)
      return n && t.some((h) => h.isPending) ? n.setDisabled() : null;
    let a = e.facet(lt).selectOnOpen ? 0 : -1;
    if (n && n.selected != a && n.selected != -1) {
      let h = n.options[n.selected].completion;
      for (let c = 0; c < l.length; c++)
        if (l[c].completion == h) {
          a = c;
          break;
        }
    }
    return new Pi(l, Ah(i, a), {
      pos: t.reduce((h, c) => c.hasResult() ? Math.min(h, c.from) : h, 1e8),
      create: k0,
      above: r.aboveCursor
    }, n ? n.timestamp : Date.now(), a, !1);
  }
  map(t) {
    return new Pi(this.options, this.attrs, { ...this.tooltip, pos: t.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new Pi(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class or {
  constructor(t, e, i) {
    this.active = t, this.id = e, this.open = i;
  }
  static start() {
    return new or(O0, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(t) {
    let { state: e } = t, i = e.facet(lt), r = (i.override || e.languageDataAt("autocomplete", hi(e)).map(h0)).map((a) => (this.active.find((c) => c.source == a) || new Lt(
      a,
      this.active.some(
        (c) => c.state != 0
        /* State.Inactive */
      ) ? 1 : 0
      /* State.Inactive */
    )).update(t, i));
    r.length == this.active.length && r.every((a, h) => a == this.active[h]) && (r = this.active);
    let o = this.open, l = t.effects.some((a) => a.is(Jl));
    o && t.docChanged && (o = o.map(t.changes)), t.selection || r.some((a) => a.hasResult() && t.changes.touchesRange(a.from, a.to)) || !w0(r, this.active) || l ? o = Pi.build(r, e, this.id, o, i, l) : o && o.disabled && !r.some((a) => a.isPending) && (o = null), !o && r.every((a) => !a.isPending) && r.some((a) => a.hasResult()) && (r = r.map((a) => a.hasResult() ? new Lt(
      a.source,
      0
      /* State.Inactive */
    ) : a));
    for (let a of t.effects)
      a.is(Kl) && (o = o && o.setSelected(a.value, this.id));
    return r == this.active && o == this.open ? this : new or(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? y0 : b0;
  }
}
function w0(s, t) {
  if (s == t)
    return !0;
  for (let e = 0, i = 0; ; ) {
    for (; e < s.length && !s[e].hasResult(); )
      e++;
    for (; i < t.length && !t[i].hasResult(); )
      i++;
    let n = e == s.length, r = i == t.length;
    if (n || r)
      return n == r;
    if (s[e++].result != t[i++].result)
      return !1;
  }
}
const y0 = {
  "aria-autocomplete": "list"
}, b0 = {};
function Ah(s, t) {
  let e = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": s
  };
  return t > -1 && (e["aria-activedescendant"] = s + "-" + t), e;
}
const O0 = [];
function ed(s, t) {
  if (s.isUserEvent("input.complete")) {
    let i = s.annotation(td);
    if (i && t.activateOnCompletion(i))
      return 12;
  }
  let e = s.isUserEvent("input.type");
  return e && t.activateOnTyping ? 5 : e ? 1 : s.isUserEvent("delete.backward") ? 2 : s.selection ? 8 : s.docChanged ? 16 : 0;
}
class Lt {
  constructor(t, e, i = !1) {
    this.source = t, this.state = e, this.explicit = i;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(t, e) {
    let i = ed(t, e), n = this;
    (i & 8 || i & 16 && this.touches(t)) && (n = new Lt(
      n.source,
      0
      /* State.Inactive */
    )), i & 4 && n.state == 0 && (n = new Lt(
      this.source,
      1
      /* State.Pending */
    )), n = n.updateFor(t, i);
    for (let r of t.effects)
      if (r.is(rr))
        n = new Lt(n.source, 1, r.value);
      else if (r.is(Es))
        n = new Lt(
          n.source,
          0
          /* State.Inactive */
        );
      else if (r.is(Jl))
        for (let o of r.value)
          o.source == n.source && (n = o);
    return n;
  }
  updateFor(t, e) {
    return this.map(t.changes);
  }
  map(t) {
    return this;
  }
  touches(t) {
    return t.changes.touchesRange(hi(t.state));
  }
}
class Mi extends Lt {
  constructor(t, e, i, n, r, o) {
    super(t, 3, e), this.limit = i, this.result = n, this.from = r, this.to = o;
  }
  hasResult() {
    return !0;
  }
  updateFor(t, e) {
    var i;
    if (!(e & 3))
      return this.map(t.changes);
    let n = this.result;
    n.map && !t.changes.empty && (n = n.map(n, t.changes));
    let r = t.changes.mapPos(this.from), o = t.changes.mapPos(this.to, 1), l = hi(t.state);
    if (l > o || !n || e & 2 && (hi(t.startState) == this.from || l < this.limit))
      return new Lt(
        this.source,
        e & 4 ? 1 : 0
        /* State.Inactive */
      );
    let a = t.changes.mapPos(this.limit);
    return x0(n.validFor, t.state, r, o) ? new Mi(this.source, this.explicit, a, n, r, o) : n.update && (n = n.update(n, r, o, new Ku(t.state, l, !1))) ? new Mi(this.source, this.explicit, a, n, n.from, (i = n.to) !== null && i !== void 0 ? i : hi(t.state)) : new Lt(this.source, 1, this.explicit);
  }
  map(t) {
    return t.empty ? this : (this.result.map ? this.result.map(this.result, t) : this.result) ? new Mi(this.source, this.explicit, t.mapPos(this.limit), this.result, t.mapPos(this.from), t.mapPos(this.to, 1)) : new Lt(
      this.source,
      0
      /* State.Inactive */
    );
  }
  touches(t) {
    return t.changes.touchesRange(this.from, this.to);
  }
}
function x0(s, t, e, i) {
  if (!s)
    return !1;
  let n = t.sliceDoc(e, i);
  return typeof s == "function" ? s(n, e, i, t) : Ju(s, !0).test(n);
}
const Jl = /* @__PURE__ */ Y.define({
  map(s, t) {
    return s.map((e) => e.map(t));
  }
}), vt = /* @__PURE__ */ mt.define({
  create() {
    return or.start();
  },
  update(s, t) {
    return s.update(t);
  },
  provide: (s) => [
    zl.from(s, (t) => t.tooltip),
    D.contentAttributes.from(s, (t) => t.attrs)
  ]
});
function ta(s, t) {
  const e = t.completion.apply || t.completion.label;
  let i = s.state.field(vt).active.find((n) => n.source == t.source);
  return i instanceof Mi ? (typeof e == "string" ? s.dispatch({
    ...a0(s.state, e, i.from, i.to),
    annotations: td.of(t.completion)
  }) : e(s, t.completion, i.from, i.to), !0) : !1;
}
const k0 = /* @__PURE__ */ m0(vt, ta);
function un(s, t = "option") {
  return (e) => {
    let i = e.state.field(vt, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < e.state.facet(lt).interactionDelay)
      return !1;
    let n = 1, r;
    t == "page" && (r = Bf(e, i.open.tooltip)) && (n = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + n * (s ? 1 : -1) : s ? 0 : o - 1;
    return l < 0 ? l = t == "page" ? 0 : o - 1 : l >= o && (l = t == "page" ? o - 1 : 0), e.dispatch({ effects: Kl.of(l) }), !0;
  };
}
const S0 = (s) => {
  let t = s.state.field(vt, !1);
  return s.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < s.state.facet(lt).interactionDelay ? !1 : ta(s, t.open.options[t.open.selected]);
}, no = (s) => s.state.field(vt, !1) ? (s.dispatch({ effects: rr.of(!0) }), !0) : !1, v0 = (s) => {
  let t = s.state.field(vt, !1);
  return !t || !t.active.some(
    (e) => e.state != 0
    /* State.Inactive */
  ) ? !1 : (s.dispatch({ effects: Es.of(null) }), !0);
};
class C0 {
  constructor(t, e) {
    this.active = t, this.context = e, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const D0 = 50, R0 = 1e3, T0 = /* @__PURE__ */ st.fromClass(class {
  constructor(s) {
    this.view = s, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
    for (let t of s.state.field(vt).active)
      t.isPending && this.startQuery(t);
  }
  update(s) {
    let t = s.state.field(vt), e = s.state.facet(lt);
    if (!s.selectionSet && !s.docChanged && s.startState.field(vt) == t)
      return;
    let i = s.transactions.some((r) => {
      let o = ed(r, e);
      return o & 8 || (r.selection || r.docChanged) && !(o & 3);
    });
    for (let r = 0; r < this.running.length; r++) {
      let o = this.running[r];
      if (i || o.context.abortOnDocChange && s.docChanged || o.updates.length + s.transactions.length > D0 && Date.now() - o.time > R0) {
        for (let l of o.context.abortListeners)
          try {
            l();
          } catch (a) {
            Dt(this.view.state, a);
          }
        o.context.abortListeners = null, this.running.splice(r--, 1);
      } else
        o.updates.push(...s.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), s.transactions.some((r) => r.effects.some((o) => o.is(rr))) && (this.pendingStart = !0);
    let n = this.pendingStart ? 50 : e.activateOnTypingDelay;
    if (this.debounceUpdate = t.active.some((r) => r.isPending && !this.running.some((o) => o.active.source == r.source)) ? setTimeout(() => this.startUpdate(), n) : -1, this.composing != 0)
      for (let r of s.transactions)
        r.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = !1;
    let { state: s } = this.view, t = s.field(vt);
    for (let e of t.active)
      e.isPending && !this.running.some((i) => i.active.source == e.source) && this.startQuery(e);
    this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(lt).updateSyncTime));
  }
  startQuery(s) {
    let { state: t } = this.view, e = hi(t), i = new Ku(t, e, s.explicit, this.view), n = new C0(s, i);
    this.running.push(n), Promise.resolve(s.source(i)).then((r) => {
      n.context.aborted || (n.done = r || null, this.scheduleAccept());
    }, (r) => {
      this.view.dispatch({ effects: Es.of(null) }), Dt(this.view.state, r);
    });
  }
  scheduleAccept() {
    this.running.every((s) => s.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(lt).updateSyncTime));
  }
  // For each finished query in this.running, try to create a result
  // or, if appropriate, restart the query.
  accept() {
    var s;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let t = [], e = this.view.state.facet(lt), i = this.view.state.field(vt);
    for (let n = 0; n < this.running.length; n++) {
      let r = this.running[n];
      if (r.done === void 0)
        continue;
      if (this.running.splice(n--, 1), r.done) {
        let l = hi(r.updates.length ? r.updates[0].startState : this.view.state), a = Math.min(l, r.done.from + (r.active.explicit ? 0 : 1)), h = new Mi(r.active.source, r.active.explicit, a, r.done, r.done.from, (s = r.done.to) !== null && s !== void 0 ? s : l);
        for (let c of r.updates)
          h = h.update(c, e);
        if (h.hasResult()) {
          t.push(h);
          continue;
        }
      }
      let o = i.active.find((l) => l.source == r.active.source);
      if (o && o.isPending)
        if (r.done == null) {
          let l = new Lt(
            r.active.source,
            0
            /* State.Inactive */
          );
          for (let a of r.updates)
            l = l.update(a, e);
          l.isPending || t.push(l);
        } else
          this.startQuery(o);
    }
    (t.length || i.open && i.open.disabled) && this.view.dispatch({ effects: Jl.of(t) });
  }
}, {
  eventHandlers: {
    blur(s) {
      let t = this.view.state.field(vt, !1);
      if (t && t.tooltip && this.view.state.facet(lt).closeOnBlur) {
        let e = t.open && Bf(this.view, t.open.tooltip);
        (!e || !e.dom.contains(s.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: Es.of(null) }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: rr.of(!1) }), 20), this.composing = 0;
    }
  }
}), H0 = typeof navigator == "object" && /* @__PURE__ */ /Win/.test(navigator.platform), E0 = /* @__PURE__ */ gi.highest(/* @__PURE__ */ D.domEventHandlers({
  keydown(s, t) {
    let e = t.state.field(vt, !1);
    if (!e || !e.open || e.open.disabled || e.open.selected < 0 || s.key.length > 1 || s.ctrlKey && !(H0 && s.altKey) || s.metaKey)
      return !1;
    let i = e.open.options[e.open.selected], n = e.active.find((o) => o.source == i.source), r = i.completion.commitCharacters || n.result.commitCharacters;
    return r && r.indexOf(s.key) > -1 && ta(t, i), !1;
  }
})), j0 = /* @__PURE__ */ D.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: 0.7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
  ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
  "&light .cm-snippetField": { backgroundColor: "#00000022" },
  "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'ƒ'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑︎'" }
    // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
}), js = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
}, oi = /* @__PURE__ */ Y.define({
  map(s, t) {
    let e = t.mapPos(s, -1, bt.TrackAfter);
    return e ?? void 0;
  }
}), ea = /* @__PURE__ */ new class extends We {
}();
ea.startSide = 1;
ea.endSide = -1;
const id = /* @__PURE__ */ mt.define({
  create() {
    return Q.empty;
  },
  update(s, t) {
    if (s = s.map(t.changes), t.selection) {
      let e = t.state.doc.lineAt(t.selection.main.head);
      s = s.update({ filter: (i) => i >= e.from && i <= e.to });
    }
    for (let e of t.effects)
      e.is(oi) && (s = s.update({ add: [ea.range(e.value, e.value + 1)] }));
    return s;
  }
});
function P0() {
  return [Y0, id];
}
const ro = "()[]{}<>«»»«［］｛｝";
function sd(s) {
  for (let t = 0; t < ro.length; t += 2)
    if (ro.charCodeAt(t) == s)
      return ro.charAt(t + 1);
  return wl(s < 128 ? s : s + 1);
}
function nd(s, t) {
  return s.languageDataAt("closeBrackets", t)[0] || js;
}
const N0 = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent), Y0 = /* @__PURE__ */ D.inputHandler.of((s, t, e, i) => {
  if ((N0 ? s.composing : s.compositionStarted) || s.state.readOnly)
    return !1;
  let n = s.state.selection.main;
  if (i.length > 2 || i.length == 2 && le(St(i, 0)) == 1 || t != n.from || e != n.to)
    return !1;
  let r = Q0(s.state, i);
  return r ? (s.dispatch(r), !0) : !1;
}), z0 = ({ state: s, dispatch: t }) => {
  if (s.readOnly)
    return !1;
  let i = nd(s, s.selection.main.head).brackets || js.brackets, n = null, r = s.changeByRange((o) => {
    if (o.empty) {
      let l = B0(s.doc, o.head);
      for (let a of i)
        if (a == l && Cr(s.doc, o.head) == sd(St(a, 0)))
          return {
            changes: { from: o.head - a.length, to: o.head + a.length },
            range: x.cursor(o.head - a.length)
          };
    }
    return { range: n = o };
  });
  return n || t(s.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })), !n;
}, G0 = [
  { key: "Backspace", run: z0 }
];
function Q0(s, t) {
  let e = nd(s, s.selection.main.head), i = e.brackets || js.brackets;
  for (let n of i) {
    let r = sd(St(n, 0));
    if (t == n)
      return r == n ? A0(s, n, i.indexOf(n + n + n) > -1, e) : W0(s, n, r, e.before || js.before);
    if (t == r && rd(s, s.selection.main.from))
      return M0(s, n, r);
  }
  return null;
}
function rd(s, t) {
  let e = !1;
  return s.field(id).between(0, s.doc.length, (i) => {
    i == t && (e = !0);
  }), e;
}
function Cr(s, t) {
  let e = s.sliceString(t, t + 2);
  return e.slice(0, le(St(e, 0)));
}
function B0(s, t) {
  let e = s.sliceString(t - 2, t);
  return le(St(e, 0)) == e.length ? e : e.slice(1);
}
function W0(s, t, e, i) {
  let n = null, r = s.changeByRange((o) => {
    if (!o.empty)
      return {
        changes: [{ insert: t, from: o.from }, { insert: e, from: o.to }],
        effects: oi.of(o.to + t.length),
        range: x.range(o.anchor + t.length, o.head + t.length)
      };
    let l = Cr(s.doc, o.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? {
      changes: { insert: t + e, from: o.head },
      effects: oi.of(o.head + t.length),
      range: x.cursor(o.head + t.length)
    } : { range: n = o };
  });
  return n ? null : s.update(r, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function M0(s, t, e) {
  let i = null, n = s.changeByRange((r) => r.empty && Cr(s.doc, r.head) == e ? {
    changes: { from: r.head, to: r.head + e.length, insert: e },
    range: x.cursor(r.head + e.length)
  } : i = { range: r });
  return i ? null : s.update(n, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function A0(s, t, e, i) {
  let n = i.stringPrefixes || js.stringPrefixes, r = null, o = s.changeByRange((l) => {
    if (!l.empty)
      return {
        changes: [{ insert: t, from: l.from }, { insert: t, from: l.to }],
        effects: oi.of(l.to + t.length),
        range: x.range(l.anchor + t.length, l.head + t.length)
      };
    let a = l.head, h = Cr(s.doc, a), c;
    if (h == t) {
      if (Lh(s, a))
        return {
          changes: { insert: t + t, from: a },
          effects: oi.of(a + t.length),
          range: x.cursor(a + t.length)
        };
      if (rd(s, a)) {
        let u = e && s.sliceDoc(a, a + t.length * 3) == t + t + t ? t + t + t : t;
        return {
          changes: { from: a, to: a + u.length, insert: u },
          range: x.cursor(a + u.length)
        };
      }
    } else {
      if (e && s.sliceDoc(a - 2 * t.length, a) == t + t && (c = Zh(s, a - 2 * t.length, n)) > -1 && Lh(s, c))
        return {
          changes: { insert: t + t + t + t, from: a },
          effects: oi.of(a + t.length),
          range: x.cursor(a + t.length)
        };
      if (s.charCategorizer(a)(h) != J.Word && Zh(s, a, n) > -1 && !L0(s, a, t, n))
        return {
          changes: { insert: t + t, from: a },
          effects: oi.of(a + t.length),
          range: x.cursor(a + t.length)
        };
    }
    return { range: r = l };
  });
  return r ? null : s.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function Lh(s, t) {
  let e = pt(s).resolveInner(t + 1);
  return e.parent && e.from == t;
}
function L0(s, t, e, i) {
  let n = pt(s).resolveInner(t, -1), r = i.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = s.sliceDoc(n.from, Math.min(n.to, n.from + e.length + r)), a = l.indexOf(e);
    if (!a || a > -1 && i.indexOf(l.slice(0, a)) > -1) {
      let c = n.firstChild;
      for (; c && c.from == n.from && c.to - c.from > e.length + a; ) {
        if (s.sliceDoc(c.to - e.length, c.to) == e)
          return !1;
        c = c.firstChild;
      }
      return !0;
    }
    let h = n.to == t && n.parent;
    if (!h)
      break;
    n = h;
  }
  return !1;
}
function Zh(s, t, e) {
  let i = s.charCategorizer(t);
  if (i(s.sliceDoc(t - 1, t)) != J.Word)
    return t;
  for (let n of e) {
    let r = t - n.length;
    if (s.sliceDoc(r, t) == n && i(s.sliceDoc(r - 1, r)) != J.Word)
      return r;
  }
  return -1;
}
function Z0(s = {}) {
  return [
    E0,
    vt,
    lt.of(s),
    T0,
    _0,
    j0
  ];
}
const od = [
  { key: "Ctrl-Space", run: no },
  { mac: "Alt-`", run: no },
  { mac: "Alt-i", run: no },
  { key: "Escape", run: v0 },
  { key: "ArrowDown", run: /* @__PURE__ */ un(!0) },
  { key: "ArrowUp", run: /* @__PURE__ */ un(!1) },
  { key: "PageDown", run: /* @__PURE__ */ un(!0, "page") },
  { key: "PageUp", run: /* @__PURE__ */ un(!1, "page") },
  { key: "Enter", run: S0 }
], _0 = /* @__PURE__ */ gi.highest(/* @__PURE__ */ Nl.computeN([lt], (s) => s.facet(lt).defaultKeymap ? [od] : []));
class _h {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.diagnostic = i;
  }
}
class si {
  constructor(t, e, i) {
    this.diagnostics = t, this.panel = e, this.selected = i;
  }
  static init(t, e, i) {
    let n = i.facet(Ps).markerFilter;
    n && (t = n(t, i));
    let r = t.slice().sort((d, p) => d.from - p.from || d.to - p.to), o = new De(), l = [], a = 0, h = i.doc.iter(), c = 0, f = i.doc.length;
    for (let d = 0; ; ) {
      let p = d == r.length ? null : r[d];
      if (!p && !l.length)
        break;
      let m, g;
      if (l.length)
        m = a, g = l.reduce((b, v) => Math.min(b, v.to), p && p.from > m ? p.from : 1e8);
      else {
        if (m = p.from, m > f)
          break;
        g = p.to, l.push(p), d++;
      }
      for (; d < r.length; ) {
        let b = r[d];
        if (b.from == m && (b.to > b.from || b.to == m))
          l.push(b), d++, g = Math.min(b.to, g);
        else {
          g = Math.min(b.from, g);
          break;
        }
      }
      g = Math.min(g, f);
      let w = !1;
      if (l.some((b) => b.from == m && (b.to == g || g == f)) && (w = m == g, !w && g - m < 10)) {
        let b = m - (c + h.value.length);
        b > 0 && (h.next(b), c = m);
        for (let v = m; ; ) {
          if (v >= g) {
            w = !0;
            break;
          }
          if (!h.lineBreak && c + h.value.length > v)
            break;
          v = c + h.value.length, c += h.value.length, h.next();
        }
      }
      let y = n2(l);
      if (w)
        o.add(m, m, N.widget({
          widget: new t2(y),
          diagnostics: l.slice()
        }));
      else {
        let b = l.reduce((v, k) => k.markClass ? v + " " + k.markClass : v, "");
        o.add(m, g, N.mark({
          class: "cm-lintRange cm-lintRange-" + y + b,
          diagnostics: l.slice(),
          inclusiveEnd: l.some((v) => v.to > g)
        }));
      }
      if (a = g, a == f)
        break;
      for (let b = 0; b < l.length; b++)
        l[b].to <= a && l.splice(b--, 1);
    }
    let u = o.finish();
    return new si(u, e, qe(u));
  }
}
function qe(s, t = null, e = 0) {
  let i = null;
  return s.between(e, 1e9, (n, r, { spec: o }) => {
    if (!(t && o.diagnostics.indexOf(t) < 0))
      if (!i)
        i = new _h(n, r, t || o.diagnostics[0]);
      else {
        if (o.diagnostics.indexOf(i.diagnostic) < 0)
          return !1;
        i = new _h(i.from, r, i.diagnostic);
      }
  }), i;
}
function q0(s, t) {
  let e = t.pos, i = t.end || e, n = s.state.facet(Ps).hideOn(s, e, i);
  if (n != null)
    return n;
  let r = s.startState.doc.lineAt(t.pos);
  return !!(s.effects.some((o) => o.is(ld)) || s.changes.touchesRange(r.from, Math.max(r.to, i)));
}
function F0(s, t) {
  return s.field(zt, !1) ? t : t.concat(Y.appendConfig.of(r2));
}
const ld = /* @__PURE__ */ Y.define(), ia = /* @__PURE__ */ Y.define(), ad = /* @__PURE__ */ Y.define(), zt = /* @__PURE__ */ mt.define({
  create() {
    return new si(N.none, null, null);
  },
  update(s, t) {
    if (t.docChanged && s.diagnostics.size) {
      let e = s.diagnostics.map(t.changes), i = null, n = s.panel;
      if (s.selected) {
        let r = t.changes.mapPos(s.selected.from, 1);
        i = qe(e, s.selected.diagnostic, r) || qe(e, null, r);
      }
      !e.size && n && t.state.facet(Ps).autoPanel && (n = null), s = new si(e, n, i);
    }
    for (let e of t.effects)
      if (e.is(ld)) {
        let i = t.state.facet(Ps).autoPanel ? e.value.length ? Ns.open : null : s.panel;
        s = si.init(e.value, i, t.state);
      } else e.is(ia) ? s = new si(s.diagnostics, e.value ? Ns.open : null, s.selected) : e.is(ad) && (s = new si(s.diagnostics, s.panel, e.value));
    return s;
  },
  provide: (s) => [
    Cs.from(s, (t) => t.panel),
    D.decorations.from(s, (t) => t.diagnostics)
  ]
}), I0 = /* @__PURE__ */ N.mark({ class: "cm-lintRange cm-lintRange-active" });
function U0(s, t, e) {
  let { diagnostics: i } = s.state.field(zt), n, r = -1, o = -1;
  i.between(t - (e < 0 ? 1 : 0), t + (e > 0 ? 1 : 0), (a, h, { spec: c }) => {
    if (t >= a && t <= h && (a == h || (t > a || e > 0) && (t < h || e < 0)))
      return n = c.diagnostics, r = a, o = h, !1;
  });
  let l = s.state.facet(Ps).tooltipFilter;
  return n && l && (n = l(n, s.state)), n ? {
    pos: r,
    end: o,
    above: s.state.doc.lineAt(r).to < o,
    create() {
      return { dom: V0(s, n) };
    }
  } : null;
}
function V0(s, t) {
  return _("ul", { class: "cm-tooltip-lint" }, t.map((e) => cd(s, e, !1)));
}
const X0 = (s) => {
  let t = s.state.field(zt, !1);
  (!t || !t.panel) && s.dispatch({ effects: F0(s.state, [ia.of(!0)]) });
  let e = Gl(s, Ns.open);
  return e && e.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, qh = (s) => {
  let t = s.state.field(zt, !1);
  return !t || !t.panel ? !1 : (s.dispatch({ effects: ia.of(!1) }), !0);
}, K0 = (s) => {
  let t = s.state.field(zt, !1);
  if (!t)
    return !1;
  let e = s.state.selection.main, i = qe(t.diagnostics, null, e.to + 1);
  return !i && (i = qe(t.diagnostics, null, 0), !i || i.from == e.from && i.to == e.to) ? !1 : (s.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: !0 }), !0);
}, J0 = [
  { key: "Mod-Shift-m", run: X0, preventDefault: !0 },
  { key: "F8", run: K0 }
], Ps = /* @__PURE__ */ T.define({
  combine(s) {
    return {
      sources: s.map((t) => t.source).filter((t) => t != null),
      ...ge(s.map((t) => t.config), {
        delay: 750,
        markerFilter: null,
        tooltipFilter: null,
        needsRefresh: null,
        hideOn: () => null
      }, {
        delay: Math.max,
        markerFilter: Fh,
        tooltipFilter: Fh,
        needsRefresh: (t, e) => t ? e ? (i) => t(i) || e(i) : t : e,
        hideOn: (t, e) => t ? e ? (i, n, r) => t(i, n, r) || e(i, n, r) : t : e,
        autoPanel: (t, e) => t || e
      })
    };
  }
});
function Fh(s, t) {
  return s ? t ? (e, i) => t(s(e, i), i) : s : t;
}
function hd(s) {
  let t = [];
  if (s)
    t: for (let { name: e } of s) {
      for (let i = 0; i < e.length; i++) {
        let n = e[i];
        if (/[a-zA-Z]/.test(n) && !t.some((r) => r.toLowerCase() == n.toLowerCase())) {
          t.push(n);
          continue t;
        }
      }
      t.push("");
    }
  return t;
}
function cd(s, t, e) {
  var i;
  let n = e ? hd(t.actions) : [];
  return _("li", { class: "cm-diagnostic cm-diagnostic-" + t.severity }, _("span", { class: "cm-diagnosticText" }, t.renderMessage ? t.renderMessage(s) : t.message), (i = t.actions) === null || i === void 0 ? void 0 : i.map((r, o) => {
    let l = !1, a = (d) => {
      if (d.preventDefault(), l)
        return;
      l = !0;
      let p = qe(s.state.field(zt).diagnostics, t);
      p && r.apply(s, p.from, p.to);
    }, { name: h } = r, c = n[o] ? h.indexOf(n[o]) : -1, f = c < 0 ? h : [
      h.slice(0, c),
      _("u", h.slice(c, c + 1)),
      h.slice(c + 1)
    ], u = r.markClass ? " " + r.markClass : "";
    return _("button", {
      type: "button",
      class: "cm-diagnosticAction" + u,
      onclick: a,
      onmousedown: a,
      "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${n[o]})"`}.`
    }, f);
  }), t.source && _("div", { class: "cm-diagnosticSource" }, t.source));
}
class t2 extends Ee {
  constructor(t) {
    super(), this.sev = t;
  }
  eq(t) {
    return t.sev == this.sev;
  }
  toDOM() {
    return _("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class Ih {
  constructor(t, e) {
    this.diagnostic = e, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = cd(t, e, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class Ns {
  constructor(t) {
    this.view = t, this.items = [];
    let e = (n) => {
      if (!(n.ctrlKey || n.altKey || n.metaKey)) {
        if (n.keyCode == 27)
          qh(this.view), this.view.focus();
        else if (n.keyCode == 38 || n.keyCode == 33)
          this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
        else if (n.keyCode == 40 || n.keyCode == 34)
          this.moveSelection((this.selectedIndex + 1) % this.items.length);
        else if (n.keyCode == 36)
          this.moveSelection(0);
        else if (n.keyCode == 35)
          this.moveSelection(this.items.length - 1);
        else if (n.keyCode == 13)
          this.view.focus();
        else if (n.keyCode >= 65 && n.keyCode <= 90 && this.selectedIndex >= 0) {
          let { diagnostic: r } = this.items[this.selectedIndex], o = hd(r.actions);
          for (let l = 0; l < o.length; l++)
            if (o[l].toUpperCase().charCodeAt(0) == n.keyCode) {
              let a = qe(this.view.state.field(zt).diagnostics, r);
              a && r.actions[l].apply(t, a.from, a.to);
            }
        } else
          return;
        n.preventDefault();
      }
    }, i = (n) => {
      for (let r = 0; r < this.items.length; r++)
        this.items[r].dom.contains(n.target) && this.moveSelection(r);
    };
    this.list = _("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: e,
      onclick: i
    }), this.dom = _("div", { class: "cm-panel-lint" }, this.list, _("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => qh(this.view)
    }, "×")), this.update();
  }
  get selectedIndex() {
    let t = this.view.state.field(zt).selected;
    if (!t)
      return -1;
    for (let e = 0; e < this.items.length; e++)
      if (this.items[e].diagnostic == t.diagnostic)
        return e;
    return -1;
  }
  update() {
    let { diagnostics: t, selected: e } = this.view.state.field(zt), i = 0, n = !1, r = null, o = /* @__PURE__ */ new Set();
    for (t.between(0, this.view.state.doc.length, (l, a, { spec: h }) => {
      for (let c of h.diagnostics) {
        if (o.has(c))
          continue;
        o.add(c);
        let f = -1, u;
        for (let d = i; d < this.items.length; d++)
          if (this.items[d].diagnostic == c) {
            f = d;
            break;
          }
        f < 0 ? (u = new Ih(this.view, c), this.items.splice(i, 0, u), n = !0) : (u = this.items[f], f > i && (this.items.splice(i, f - i), n = !0)), e && u.diagnostic == e.diagnostic ? u.dom.hasAttribute("aria-selected") || (u.dom.setAttribute("aria-selected", "true"), r = u) : u.dom.hasAttribute("aria-selected") && u.dom.removeAttribute("aria-selected"), i++;
      }
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      n = !0, this.items.pop();
    this.items.length == 0 && (this.items.push(new Ih(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), n = !0), r ? (this.list.setAttribute("aria-activedescendant", r.id), this.view.requestMeasure({
      key: this,
      read: () => ({ sel: r.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }),
      write: ({ sel: l, panel: a }) => {
        let h = a.height / this.list.offsetHeight;
        l.top < a.top ? this.list.scrollTop -= (a.top - l.top) / h : l.bottom > a.bottom && (this.list.scrollTop += (l.bottom - a.bottom) / h);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), n && this.sync();
  }
  sync() {
    let t = this.list.firstChild;
    function e() {
      let i = t;
      t = i.nextSibling, i.remove();
    }
    for (let i of this.items)
      if (i.dom.parentNode == this.list) {
        for (; t != i.dom; )
          e();
        t = i.dom.nextSibling;
      } else
        this.list.insertBefore(i.dom, t);
    for (; t; )
      e();
  }
  moveSelection(t) {
    if (this.selectedIndex < 0)
      return;
    let e = this.view.state.field(zt), i = qe(e.diagnostics, this.items[t].diagnostic);
    i && this.view.dispatch({
      selection: { anchor: i.from, head: i.to },
      scrollIntoView: !0,
      effects: ad.of(i)
    });
  }
  static open(t) {
    return new Ns(t);
  }
}
function e2(s, t = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(s)}</svg>')`;
}
function dn(s) {
  return e2(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${s}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const i2 = /* @__PURE__ */ D.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
  ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
  ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
  ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: 0.7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": { backgroundImage: /* @__PURE__ */ dn("#d11") },
  ".cm-lintRange-warning": { backgroundImage: /* @__PURE__ */ dn("orange") },
  ".cm-lintRange-info": { backgroundImage: /* @__PURE__ */ dn("#999") },
  ".cm-lintRange-hint": { backgroundImage: /* @__PURE__ */ dn("#66d") },
  ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": { borderBottomColor: "orange" }
  },
  ".cm-lintPoint-info": {
    "&:after": { borderBottomColor: "#999" }
  },
  ".cm-lintPoint-hint": {
    "&:after": { borderBottomColor: "#66d" }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": { textDecoration: "underline" }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": { textDecoration: "none" },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  },
  "&dark .cm-lintRange-active": { backgroundColor: "#86714a80" },
  "&dark .cm-panel.cm-panel-lint ul": {
    "& [aria-selected]": {
      backgroundColor: "#2e343e"
    }
  }
});
function s2(s) {
  return s == "error" ? 4 : s == "warning" ? 3 : s == "info" ? 2 : 1;
}
function n2(s) {
  let t = "hint", e = 1;
  for (let i of s) {
    let n = s2(i.severity);
    n > e && (e = n, t = i.severity);
  }
  return t;
}
const r2 = [
  zt,
  /* @__PURE__ */ D.decorations.compute([zt], (s) => {
    let { selected: t, panel: e } = s.field(zt);
    return !t || !e || t.from == t.to ? N.none : N.set([
      I0.range(t.from, t.to)
    ]);
  }),
  /* @__PURE__ */ Wg(U0, { hideOn: q0 }),
  i2
], o2 = [
  Jg(),
  i5(),
  $g(),
  C$(),
  J5(),
  og(),
  fg(),
  M.allowMultipleSelections.of(!0),
  B5(),
  au(s$, { fallback: !0 }),
  c$(),
  P0(),
  Z0(),
  Tg(),
  jg(),
  kg(),
  Yw(),
  Nl.of([
    ...G0,
    ...Hw,
    ...i0,
    ...Y$,
    ...U5,
    ...od,
    ...J0
  ])
], oo = {
  fontSize: "14px",
  fontFamily: "JetBrains Mono, Consolas, monospace",
  lineHeight: "1.6"
}, l2 = {
  borderLeftWidth: "2px"
}, Bt = {
  insertedTextDecoration: "none",
  deletedTextDecoration: "line-through",
  insertedLinePadding: "1px 3px",
  borderRadius: "3px"
}, Ke = {
  border: "none",
  paddingRight: "8px",
  fontSize: "0.9em",
  fontWeight: "500",
  lineHeight: "1.78"
  // Adjusted to compensate for 0.9em fontSize (1.6 / 0.9 ≈ 1.78)
}, lo = {
  border: "none",
  borderRadius: "4px",
  padding: "2px 10px"
}, a2 = {
  borderRadius: "2px"
}, ao = {
  borderRadius: "2px"
}, ho = {
  borderRadius: "4px",
  padding: "0 5px",
  margin: "0 2px"
}, co = {
  width: "12px",
  height: "12px",
  borderRadius: "6px"
}, pn = {
  borderRadius: "4px",
  padding: "2px 6px"
}, bi = {
  borderRadius: "4px",
  borderRadiusSelected: "3px",
  lineHeight: "1.3",
  padding: "4px 8px",
  paddingRight: "8px"
}, fd = "#212121", ud = "#505d64", fo = "#606f7a", nt = "#707d8b", h2 = "#a0a4ae", Oe = "#bdbdbd", uo = "#e0e0e0", c2 = "#202325", ei = "#ff5f52", os = "#ff6e40", f2 = "#fa5788", ls = "#facf4e", Tn = "#ffad42", Se = "#56c8d8", Oi = "#7186f0", Hn = "#cf6edf", u2 = "#6abf69", d2 = "#99d066", p2 = "#4ebaaa", li = ei, po = c2, m2 = "#2d333b30", as = fd, xi = ud, Uh = "#ffffff1f", g2 = "#4A707A80", mo = h2, $2 = "#39496650", w2 = Se, Vh = Tn, dd = Se, y2 = Hn, Xh = "#1e3d2780", Kh = "#4e282880", go = "#6abf69", $o = "#ff5f52", b2 = /* @__PURE__ */ D.theme({
  // Base editor styles
  "&": {
    color: Oe,
    backgroundColor: as,
    fontSize: oo.fontSize,
    fontFamily: oo.fontFamily
  },
  // Content and cursor
  ".cm-content": {
    caretColor: mo,
    lineHeight: oo.lineHeight
  },
  ".cm-cursor, .cm-dropCursor": {
    borderLeftColor: mo,
    borderLeftWidth: l2.borderLeftWidth
  },
  ".cm-fat-cursor": {
    backgroundColor: `${mo}99`,
    color: as
  },
  // Selection
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
    backgroundColor: Uh
  },
  // Make sure selection appears above active line
  ".cm-selectionLayer": {
    zIndex: 100
  },
  // Search functionality
  ".cm-searchMatch": {
    backgroundColor: "#394966cc",
    outline: `1px solid ${Se}`,
    color: uo,
    borderRadius: pn.borderRadius,
    "& span": {
      color: uo
    }
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: Se,
    color: as,
    padding: pn.padding,
    "& span": {
      color: as
    }
  },
  ".cm-search.cm-panel.cm-textfield": {
    color: Oe,
    borderRadius: pn.borderRadius,
    padding: pn.padding
  },
  // Panels
  ".cm-panels": {
    backgroundColor: fd,
    color: Oe,
    borderRadius: "4px"
  },
  ".cm-panels.cm-panels-top": {
    borderBottom: `1px solid ${nt}`
  },
  ".cm-panels.cm-panels-bottom": {
    borderTop: `1px solid ${nt}`
  },
  ".cm-panel button": {
    backgroundColor: xi,
    color: Oe,
    border: lo.border,
    borderRadius: lo.borderRadius,
    padding: lo.padding
  },
  ".cm-panel button:hover": {
    backgroundColor: fo
  },
  // Line highlighting
  ".cm-activeLine": {
    backgroundColor: m2,
    borderRadius: a2.borderRadius,
    zIndex: 1
  },
  // Gutters
  ".cm-gutters": {
    backgroundColor: po,
    color: nt,
    border: Ke.border,
    borderRight: `1px solid ${ud}`,
    paddingRight: Ke.paddingRight
  },
  ".cm-activeLineGutter": {
    backgroundColor: "#252a2c",
    color: Oe,
    fontWeight: Ke.fontWeight
  },
  ".cm-lineNumbers": {
    fontSize: Ke.fontSize,
    lineHeight: Ke.lineHeight
  },
  ".cm-foldGutter": {
    fontSize: Ke.fontSize,
    lineHeight: Ke.lineHeight
  },
  ".cm-foldGutter .cm-gutterElement": {
    color: nt,
    cursor: "pointer"
  },
  ".cm-foldGutter .cm-gutterElement:hover": {
    color: Oe
  },
  // Diff/Merge View Styles
  // Inserted/Added Content
  ".cm-insertedLine": {
    textDecoration: Bt.insertedTextDecoration,
    backgroundColor: Xh,
    color: go,
    padding: Bt.insertedLinePadding,
    borderRadius: Bt.borderRadius
  },
  "ins.cm-insertedLine, ins.cm-insertedLine:not(:has(.cm-changedText))": {
    textDecoration: Bt.insertedTextDecoration,
    backgroundColor: `${Xh} !important`,
    color: go,
    padding: Bt.insertedLinePadding,
    borderRadius: Bt.borderRadius,
    border: `1px solid ${go}40`
  },
  "ins.cm-insertedLine .cm-changedText": {
    background: "transparent !important"
  },
  // Deleted/Removed Content
  ".cm-deletedLine": {
    textDecoration: Bt.deletedTextDecoration,
    backgroundColor: Kh,
    color: $o,
    padding: Bt.insertedLinePadding,
    borderRadius: Bt.borderRadius
  },
  "del.cm-deletedLine, del, del:not(:has(.cm-deletedText))": {
    textDecoration: Bt.deletedTextDecoration,
    backgroundColor: `${Kh} !important`,
    color: $o,
    padding: Bt.insertedLinePadding,
    borderRadius: Bt.borderRadius,
    border: `1px solid ${$o}40`
  },
  "del .cm-deletedText, del .cm-changedText": {
    background: "transparent !important"
  },
  // Tooltips and autocomplete
  ".cm-tooltip": {
    backgroundColor: xi,
    border: `1px solid ${nt}`,
    borderRadius: bi.borderRadius,
    padding: bi.padding,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
  },
  ".cm-tooltip-autocomplete": {
    "& > ul": {
      backgroundColor: xi,
      border: "none"
    },
    "& > ul > li": {
      padding: bi.padding,
      lineHeight: bi.lineHeight
    },
    "& > ul > li[aria-selected]": {
      backgroundColor: Uh,
      color: uo,
      borderRadius: bi.borderRadiusSelected
    },
    "& > ul > li > span.cm-completionIcon": {
      color: nt,
      paddingRight: bi.paddingRight
    },
    "& > ul > li > span.cm-completionDetail": {
      color: nt,
      fontStyle: "italic"
    }
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: xi,
    borderBottomColor: xi
  },
  // Diagnostics styling
  ".cm-diagnostic": {
    "&-error": {
      borderLeft: `3px solid ${li}`
    },
    "&-warning": {
      borderLeft: `3px solid ${Vh}`
    },
    "&-info": {
      borderLeft: `3px solid ${dd}`
    }
  },
  ".cm-lintPoint-error": {
    borderBottom: `2px wavy ${li}`
  },
  ".cm-lintPoint-warning": {
    borderBottom: `2px wavy ${Vh}`
  },
  // Matching brackets
  ".cm-matchingBracket": {
    backgroundColor: $2,
    outline: `1px solid ${w2}`,
    borderRadius: ao.borderRadius
  },
  ".cm-nonmatchingBracket": {
    backgroundColor: "#ff5f5240",
    outline: `1px solid ${li}`,
    borderRadius: ao.borderRadius
  },
  // Selection matches
  ".cm-selectionMatch": {
    backgroundColor: g2,
    outline: `1px solid ${fo}50`,
    borderRadius: ao.borderRadius
  },
  // Fold placeholder
  ".cm-foldPlaceholder": {
    backgroundColor: xi,
    color: nt,
    border: `1px dotted ${nt}70`,
    borderRadius: ho.borderRadius,
    padding: ho.padding,
    margin: ho.margin
  },
  // Focus outline
  "&.cm-focused": {
    outline: "none",
    boxShadow: `0 0 0 2px ${as}, 0 0 0 3px ${Se}40`
  },
  // Scrollbars
  "& .cm-scroller::-webkit-scrollbar": {
    width: co.width,
    height: co.height
  },
  "& .cm-scroller::-webkit-scrollbar-track": {
    background: po
  },
  "& .cm-scroller::-webkit-scrollbar-thumb": {
    backgroundColor: fo,
    borderRadius: co.borderRadius,
    border: `3px solid ${po}`
  },
  "& .cm-scroller::-webkit-scrollbar-thumb:hover": {
    backgroundColor: nt
  },
  // Ghost text
  ".cm-ghostText": {
    opacity: "0.5",
    color: nt
  }
}, { dark: !0 }), O2 = /* @__PURE__ */ Ws.define([
  // Keywords and control flow
  { tag: $.keyword, color: ei, fontWeight: "bold" },
  { tag: $.controlKeyword, color: ei, fontWeight: "bold" },
  { tag: $.moduleKeyword, color: ei, fontWeight: "bold" },
  // Names and variables
  { tag: [$.name, $.deleted, $.character, $.macroName], color: Oi },
  { tag: [$.variableName], color: d2 },
  { tag: [$.propertyName], color: Hn, fontStyle: "normal" },
  // Classes and types
  { tag: [$.typeName], color: ei },
  { tag: [$.className], color: ls, fontStyle: "italic" },
  { tag: [$.namespace], color: Oi, fontStyle: "italic" },
  // Operators and punctuation
  { tag: [$.operator, $.operatorKeyword], color: Oe },
  { tag: [$.bracket], color: nt },
  { tag: [$.brace], color: nt },
  { tag: [$.punctuation], color: nt },
  // Functions and parameters
  { tag: [/* @__PURE__ */ $.function($.variableName)], color: Se },
  { tag: [$.labelName], color: Se, fontStyle: "italic" },
  { tag: [/* @__PURE__ */ $.definition(/* @__PURE__ */ $.function($.variableName))], color: Se },
  { tag: [/* @__PURE__ */ $.definition($.variableName)], color: Oi },
  // Constants and literals
  { tag: $.number, color: ls },
  { tag: $.changed, color: ls },
  { tag: $.annotation, color: li, fontStyle: "italic" },
  { tag: $.modifier, color: os, fontStyle: "italic" },
  { tag: $.self, color: os },
  {
    tag: [$.color, /* @__PURE__ */ $.constant($.name), /* @__PURE__ */ $.standard($.name)],
    color: os
  },
  { tag: [$.atom, $.bool, /* @__PURE__ */ $.special($.variableName)], color: os },
  // Strings and regex
  { tag: [$.processingInstruction, $.inserted], color: u2 },
  { tag: [/* @__PURE__ */ $.special($.string), $.regexp], color: f2 },
  { tag: $.string, color: Tn },
  // Punctuation and structure
  { tag: /* @__PURE__ */ $.definition($.typeName), color: ei, fontWeight: "bold" },
  // Comments and documentation
  { tag: $.meta, color: nt },
  { tag: $.comment, fontStyle: "italic", color: nt },
  { tag: $.docComment, fontStyle: "italic", color: nt },
  // HTML/XML elements
  { tag: [$.tagName], color: Hn },
  { tag: [$.attributeName], color: ls },
  // Markdown and text formatting
  { tag: [$.heading], fontWeight: "bold", color: p2 },
  { tag: $.heading1, color: ls },
  { tag: $.heading2, color: Tn },
  { tag: $.heading3, color: Se },
  { tag: $.heading4, color: Oi },
  { tag: $.heading5, color: Hn },
  { tag: $.heading6, color: ei },
  { tag: [$.strong], fontWeight: "bold", color: Oi },
  { tag: [$.emphasis], fontStyle: "italic", color: Tn },
  // Links and URLs
  {
    tag: [$.link],
    color: y2,
    fontWeight: "500",
    textDecoration: "underline",
    textUnderlinePosition: "under"
  },
  {
    tag: [$.url],
    color: dd,
    textDecoration: "underline",
    textUnderlineOffset: "2px"
  },
  // Special states
  {
    tag: [$.invalid],
    color: Oe,
    textDecoration: "underline wavy",
    borderBottom: `1px wavy ${li}`
  },
  { tag: [$.strikethrough], color: li, textDecoration: "line-through" },
  // Enhanced syntax highlighting
  { tag: /* @__PURE__ */ $.constant($.name), color: os },
  { tag: $.deleted, color: li },
  { tag: $.squareBracket, color: nt },
  { tag: $.angleBracket, color: nt },
  // Additional specific styles
  { tag: $.monospace, color: Oe },
  { tag: [$.contentSeparator], color: Oi },
  { tag: $.quote, color: nt }
]), x2 = [
  b2,
  /* @__PURE__ */ au(O2)
];
class lr {
  /**
  @internal
  */
  constructor(t, e, i, n, r, o, l, a, h, c = 0, f) {
    this.p = t, this.stack = e, this.state = i, this.reducePos = n, this.pos = r, this.score = o, this.buffer = l, this.bufferBase = a, this.curContext = h, this.lookAhead = c, this.parent = f;
  }
  /**
  @internal
  */
  toString() {
    return `[${this.stack.filter((t, e) => e % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  // Start an empty stack
  /**
  @internal
  */
  static start(t, e, i = 0) {
    let n = t.parser.context;
    return new lr(t, [], e, i, i, 0, [], 0, n ? new Jh(n, n.start) : null, 0, null);
  }
  /**
  The stack's current [context](#lr.ContextTracker) value, if
  any. Its type will depend on the context tracker's type
  parameter, or it will be `null` if there is no context
  tracker.
  */
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  // Push a state onto the stack, tracking its start position as well
  // as the buffer base at that point.
  /**
  @internal
  */
  pushState(t, e) {
    this.stack.push(this.state, e, this.bufferBase + this.buffer.length), this.state = t;
  }
  // Apply a reduce action
  /**
  @internal
  */
  reduce(t) {
    var e;
    let i = t >> 19, n = t & 65535, { parser: r } = this.p, o = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos), l = r.dynamicPrecedence(n);
    if (l && (this.score += l), i == 0) {
      n < r.minRepeatTerm && this.reducePos < this.pos && (this.reducePos = this.pos), this.pushState(r.getGoto(this.state, n, !0), this.reducePos), n < r.minRepeatTerm && this.storeNode(n, this.reducePos, this.reducePos, o ? 8 : 4, !0), this.reduceContext(n, this.reducePos);
      return;
    }
    let a = this.stack.length - (i - 1) * 3 - (t & 262144 ? 6 : 0), h = a ? this.stack[a - 2] : this.p.ranges[0].from;
    n < r.minRepeatTerm && h == this.reducePos && this.reducePos < this.pos && (this.reducePos = this.pos);
    let c = this.reducePos - h;
    c >= 2e3 && !(!((e = this.p.parser.nodeSet.types[n]) === null || e === void 0) && e.isAnonymous) && (h == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = c) : this.p.lastBigReductionSize < c && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = h, this.p.lastBigReductionSize = c));
    let f = a ? this.stack[a - 1] : 0, u = this.bufferBase + this.buffer.length - f;
    if (n < r.minRepeatTerm || t & 131072) {
      let d = r.stateFlag(
        this.state,
        1
        /* StateFlag.Skipped */
      ) ? this.pos : this.reducePos;
      this.storeNode(n, h, d, u + 4, !0);
    }
    if (t & 262144)
      this.state = this.stack[a];
    else {
      let d = this.stack[a - 3];
      this.state = r.getGoto(d, n, !0);
    }
    for (; this.stack.length > a; )
      this.stack.pop();
    this.reduceContext(n, h);
  }
  // Shift a value into the buffer
  /**
  @internal
  */
  storeNode(t, e, i, n = 4, r = !1) {
    if (t == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
      let o = this.buffer.length;
      if (o > 0 && this.buffer[o - 4] == 0 && this.buffer[o - 1] > -1) {
        if (e == i)
          return;
        if (this.buffer[o - 2] >= e) {
          this.buffer[o - 2] = i;
          return;
        }
      }
    }
    if (!r || this.pos == i)
      this.buffer.push(t, e, i, n);
    else {
      let o = this.buffer.length;
      if (o > 0 && (this.buffer[o - 4] != 0 || this.buffer[o - 1] < 0)) {
        let l = !1;
        for (let a = o; a > 0 && this.buffer[a - 2] > i; a -= 4)
          if (this.buffer[a - 1] >= 0) {
            l = !0;
            break;
          }
        if (l)
          for (; o > 0 && this.buffer[o - 2] > i; )
            this.buffer[o] = this.buffer[o - 4], this.buffer[o + 1] = this.buffer[o - 3], this.buffer[o + 2] = this.buffer[o - 2], this.buffer[o + 3] = this.buffer[o - 1], o -= 4, n > 4 && (n -= 4);
      }
      this.buffer[o] = t, this.buffer[o + 1] = e, this.buffer[o + 2] = i, this.buffer[o + 3] = n;
    }
  }
  // Apply a shift action
  /**
  @internal
  */
  shift(t, e, i, n) {
    if (t & 131072)
      this.pushState(t & 65535, this.pos);
    else if (t & 262144)
      this.pos = n, this.shiftContext(e, i), e <= this.p.parser.maxNode && this.buffer.push(e, i, n, 4);
    else {
      let r = t, { parser: o } = this.p;
      this.pos = n;
      let l = o.stateFlag(
        r,
        1
        /* StateFlag.Skipped */
      );
      !l && (n > i || e <= o.maxNode) && (this.reducePos = n), this.pushState(r, l ? i : Math.min(i, this.reducePos)), this.shiftContext(e, i), e <= o.maxNode && this.buffer.push(e, i, n, 4);
    }
  }
  // Apply an action
  /**
  @internal
  */
  apply(t, e, i, n) {
    t & 65536 ? this.reduce(t) : this.shift(t, e, i, n);
  }
  // Add a prebuilt (reused) node into the buffer.
  /**
  @internal
  */
  useNode(t, e) {
    let i = this.p.reused.length - 1;
    (i < 0 || this.p.reused[i] != t) && (this.p.reused.push(t), i++);
    let n = this.pos;
    this.reducePos = this.pos = n + t.length, this.pushState(e, n), this.buffer.push(
      i,
      n,
      this.reducePos,
      -1
      /* size == -1 means this is a reused value */
    ), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, t, this, this.p.stream.reset(this.pos - t.length)));
  }
  // Split the stack. Due to the buffer sharing and the fact
  // that `this.stack` tends to stay quite shallow, this isn't very
  // expensive.
  /**
  @internal
  */
  split() {
    let t = this, e = t.buffer.length;
    for (e && t.buffer[e - 4] == 0 && (e -= 4); e > 0 && t.buffer[e - 2] > t.reducePos; )
      e -= 4;
    let i = t.buffer.slice(e), n = t.bufferBase + e;
    for (; t && n == t.bufferBase; )
      t = t.parent;
    return new lr(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, i, n, this.curContext, this.lookAhead, t);
  }
  // Try to recover from an error by 'deleting' (ignoring) one token.
  /**
  @internal
  */
  recoverByDelete(t, e) {
    let i = t <= this.p.parser.maxNode;
    i && this.storeNode(t, this.pos, e, 4), this.storeNode(0, this.pos, e, i ? 8 : 4), this.pos = this.reducePos = e, this.score -= 190;
  }
  /**
  Check if the given term would be able to be shifted (optionally
  after some reductions) on this stack. This can be useful for
  external tokenizers that want to make sure they only provide a
  given token when it applies.
  */
  canShift(t) {
    for (let e = new k2(this); ; ) {
      let i = this.p.parser.stateSlot(
        e.state,
        4
        /* ParseState.DefaultReduce */
      ) || this.p.parser.hasAction(e.state, t);
      if (i == 0)
        return !1;
      if (!(i & 65536))
        return !0;
      e.reduce(i);
    }
  }
  // Apply up to Recover.MaxNext recovery actions that conceptually
  // inserts some missing token or rule.
  /**
  @internal
  */
  recoverByInsert(t) {
    if (this.stack.length >= 300)
      return [];
    let e = this.p.parser.nextStates(this.state);
    if (e.length > 8 || this.stack.length >= 120) {
      let n = [];
      for (let r = 0, o; r < e.length; r += 2)
        (o = e[r + 1]) != this.state && this.p.parser.hasAction(o, t) && n.push(e[r], o);
      if (this.stack.length < 120)
        for (let r = 0; n.length < 8 && r < e.length; r += 2) {
          let o = e[r + 1];
          n.some((l, a) => a & 1 && l == o) || n.push(e[r], o);
        }
      e = n;
    }
    let i = [];
    for (let n = 0; n < e.length && i.length < 4; n += 2) {
      let r = e[n + 1];
      if (r == this.state)
        continue;
      let o = this.split();
      o.pushState(r, this.pos), o.storeNode(0, o.pos, o.pos, 4, !0), o.shiftContext(e[n], this.pos), o.reducePos = this.pos, o.score -= 200, i.push(o);
    }
    return i;
  }
  // Force a reduce, if possible. Return false if that can't
  // be done.
  /**
  @internal
  */
  forceReduce() {
    let { parser: t } = this.p, e = t.stateSlot(
      this.state,
      5
      /* ParseState.ForcedReduce */
    );
    if (!(e & 65536))
      return !1;
    if (!t.validAction(this.state, e)) {
      let i = e >> 19, n = e & 65535, r = this.stack.length - i * 3;
      if (r < 0 || t.getGoto(this.stack[r], n, !1) < 0) {
        let o = this.findForcedReduction();
        if (o == null)
          return !1;
        e = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
    }
    return this.reducePos = this.pos, this.reduce(e), !0;
  }
  /**
  Try to scan through the automaton to find some kind of reduction
  that can be applied. Used when the regular ForcedReduce field
  isn't a valid action. @internal
  */
  findForcedReduction() {
    let { parser: t } = this.p, e = [], i = (n, r) => {
      if (!e.includes(n))
        return e.push(n), t.allActions(n, (o) => {
          if (!(o & 393216)) if (o & 65536) {
            let l = (o >> 19) - r;
            if (l > 1) {
              let a = o & 65535, h = this.stack.length - l * 3;
              if (h >= 0 && t.getGoto(this.stack[h], a, !1) >= 0)
                return l << 19 | 65536 | a;
            }
          } else {
            let l = i(o, r + 1);
            if (l != null)
              return l;
          }
        });
    };
    return i(this.state, 0);
  }
  /**
  @internal
  */
  forceAll() {
    for (; !this.p.parser.stateFlag(
      this.state,
      2
      /* StateFlag.Accepting */
    ); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  /**
  Check whether this state has no further actions (assumed to be a direct descendant of the
  top state, since any other states must be able to continue
  somehow). @internal
  */
  get deadEnd() {
    if (this.stack.length != 3)
      return !1;
    let { parser: t } = this.p;
    return t.data[t.stateSlot(
      this.state,
      1
      /* ParseState.Actions */
    )] == 65535 && !t.stateSlot(
      this.state,
      4
      /* ParseState.DefaultReduce */
    );
  }
  /**
  Restart the stack (put it back in its start state). Only safe
  when this.stack.length == 3 (state is directly below the top
  state). @internal
  */
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
  }
  /**
  @internal
  */
  sameState(t) {
    if (this.state != t.state || this.stack.length != t.stack.length)
      return !1;
    for (let e = 0; e < this.stack.length; e += 3)
      if (this.stack[e] != t.stack[e])
        return !1;
    return !0;
  }
  /**
  Get the parser used by this stack.
  */
  get parser() {
    return this.p.parser;
  }
  /**
  Test whether a given dialect (by numeric ID, as exported from
  the terms file) is enabled.
  */
  dialectEnabled(t) {
    return this.p.parser.dialect.flags[t];
  }
  shiftContext(t, e) {
    this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, t, this, this.p.stream.reset(e)));
  }
  reduceContext(t, e) {
    this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, t, this, this.p.stream.reset(e)));
  }
  /**
  @internal
  */
  emitContext() {
    let t = this.buffer.length - 1;
    (t < 0 || this.buffer[t] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  /**
  @internal
  */
  emitLookAhead() {
    let t = this.buffer.length - 1;
    (t < 0 || this.buffer[t] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(t) {
    if (t != this.curContext.context) {
      let e = new Jh(this.curContext.tracker, t);
      e.hash != this.curContext.hash && this.emitContext(), this.curContext = e;
    }
  }
  /**
  @internal
  */
  setLookAhead(t) {
    return t <= this.lookAhead ? !1 : (this.emitLookAhead(), this.lookAhead = t, !0);
  }
  /**
  @internal
  */
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
  }
}
class Jh {
  constructor(t, e) {
    this.tracker = t, this.context = e, this.hash = t.strict ? t.hash(e) : 0;
  }
}
class k2 {
  constructor(t) {
    this.start = t, this.state = t.state, this.stack = t.stack, this.base = this.stack.length;
  }
  reduce(t) {
    let e = t & 65535, i = t >> 19;
    i == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (i - 1) * 3;
    let n = this.start.p.parser.getGoto(this.stack[this.base - 3], e, !0);
    this.state = n;
  }
}
class ar {
  constructor(t, e, i) {
    this.stack = t, this.pos = e, this.index = i, this.buffer = t.buffer, this.index == 0 && this.maybeNext();
  }
  static create(t, e = t.bufferBase + t.buffer.length) {
    return new ar(t, e, e - t.bufferBase);
  }
  maybeNext() {
    let t = this.stack.parent;
    t != null && (this.index = this.stack.bufferBase - t.bufferBase, this.stack = t, this.buffer = t.buffer);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
  }
  fork() {
    return new ar(this.stack, this.pos, this.index);
  }
}
function mn(s, t = Uint16Array) {
  if (typeof s != "string")
    return s;
  let e = null;
  for (let i = 0, n = 0; i < s.length; ) {
    let r = 0;
    for (; ; ) {
      let o = s.charCodeAt(i++), l = !1;
      if (o == 126) {
        r = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if (a >= 46 && (a -= 46, l = !0), r += a, l)
        break;
      r *= 46;
    }
    e ? e[n++] = r : e = new t(r);
  }
  return e;
}
class En {
  constructor() {
    this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
  }
}
const tc = new En();
class S2 {
  /**
  @internal
  */
  constructor(t, e) {
    this.input = t, this.ranges = e, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = tc, this.rangeIndex = 0, this.pos = this.chunkPos = e[0].from, this.range = e[0], this.end = e[e.length - 1].to, this.readNext();
  }
  /**
  @internal
  */
  resolveOffset(t, e) {
    let i = this.range, n = this.rangeIndex, r = this.pos + t;
    for (; r < i.from; ) {
      if (!n)
        return null;
      let o = this.ranges[--n];
      r -= i.from - o.to, i = o;
    }
    for (; e < 0 ? r > i.to : r >= i.to; ) {
      if (n == this.ranges.length - 1)
        return null;
      let o = this.ranges[++n];
      r += o.from - i.to, i = o;
    }
    return r;
  }
  /**
  @internal
  */
  clipPos(t) {
    if (t >= this.range.from && t < this.range.to)
      return t;
    for (let e of this.ranges)
      if (e.to > t)
        return Math.max(t, e.from);
    return this.end;
  }
  /**
  Look at a code unit near the stream position. `.peek(0)` equals
  `.next`, `.peek(-1)` gives you the previous character, and so
  on.
  
  Note that looking around during tokenizing creates dependencies
  on potentially far-away content, which may reduce the
  effectiveness incremental parsing—when looking forward—or even
  cause invalid reparses when looking backward more than 25 code
  units, since the library does not track lookbehind.
  */
  peek(t) {
    let e = this.chunkOff + t, i, n;
    if (e >= 0 && e < this.chunk.length)
      i = this.pos + t, n = this.chunk.charCodeAt(e);
    else {
      let r = this.resolveOffset(t, 1);
      if (r == null)
        return -1;
      if (i = r, i >= this.chunk2Pos && i < this.chunk2Pos + this.chunk2.length)
        n = this.chunk2.charCodeAt(i - this.chunk2Pos);
      else {
        let o = this.rangeIndex, l = this.range;
        for (; l.to <= i; )
          l = this.ranges[++o];
        this.chunk2 = this.input.chunk(this.chunk2Pos = i), i + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - i)), n = this.chunk2.charCodeAt(0);
      }
    }
    return i >= this.token.lookAhead && (this.token.lookAhead = i + 1), n;
  }
  /**
  Accept a token. By default, the end of the token is set to the
  current stream position, but you can pass an offset (relative to
  the stream position) to change that.
  */
  acceptToken(t, e = 0) {
    let i = e ? this.resolveOffset(e, -1) : this.pos;
    if (i == null || i < this.token.start)
      throw new RangeError("Token end out of bounds");
    this.token.value = t, this.token.end = i;
  }
  /**
  Accept a token ending at a specific given position.
  */
  acceptTokenTo(t, e) {
    this.token.value = t, this.token.end = e;
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: t, chunkPos: e } = this;
      this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = t, this.chunk2Pos = e, this.chunkOff = this.pos - this.chunkPos;
    } else {
      this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
      let t = this.input.chunk(this.pos), e = this.pos + t.length;
      this.chunk = e > this.range.to ? t.slice(0, this.range.to - this.pos) : t, this.chunkPos = this.pos, this.chunkOff = 0;
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
  }
  /**
  Move the stream forward N (defaults to 1) code units. Returns
  the new value of [`next`](#lr.InputStream.next).
  */
  advance(t = 1) {
    for (this.chunkOff += t; this.pos + t >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1)
        return this.setDone();
      t -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
    }
    return this.pos += t, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
  }
  setDone() {
    return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1;
  }
  /**
  @internal
  */
  reset(t, e) {
    if (e ? (this.token = e, e.start = t, e.lookAhead = t + 1, e.value = e.extended = -1) : this.token = tc, this.pos != t) {
      if (this.pos = t, t == this.end)
        return this.setDone(), this;
      for (; t < this.range.from; )
        this.range = this.ranges[--this.rangeIndex];
      for (; t >= this.range.to; )
        this.range = this.ranges[++this.rangeIndex];
      t >= this.chunkPos && t < this.chunkPos + this.chunk.length ? this.chunkOff = t - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext();
    }
    return this;
  }
  /**
  @internal
  */
  read(t, e) {
    if (t >= this.chunkPos && e <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(t - this.chunkPos, e - this.chunkPos);
    if (t >= this.chunk2Pos && e <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(t - this.chunk2Pos, e - this.chunk2Pos);
    if (t >= this.range.from && e <= this.range.to)
      return this.input.read(t, e);
    let i = "";
    for (let n of this.ranges) {
      if (n.from >= e)
        break;
      n.to > t && (i += this.input.read(Math.max(n.from, t), Math.min(n.to, e)));
    }
    return i;
  }
}
class Ai {
  constructor(t, e) {
    this.data = t, this.id = e;
  }
  token(t, e) {
    let { parser: i } = e.p;
    v2(this.data, t, e, this.id, i.data, i.tokenPrecTable);
  }
}
Ai.prototype.contextual = Ai.prototype.fallback = Ai.prototype.extend = !1;
Ai.prototype.fallback = Ai.prototype.extend = !1;
class $t {
  /**
  Create a tokenizer. The first argument is the function that,
  given an input stream, scans for the types of tokens it
  recognizes at the stream's position, and calls
  [`acceptToken`](#lr.InputStream.acceptToken) when it finds
  one.
  */
  constructor(t, e = {}) {
    this.token = t, this.contextual = !!e.contextual, this.fallback = !!e.fallback, this.extend = !!e.extend;
  }
}
function v2(s, t, e, i, n, r) {
  let o = 0, l = 1 << i, { dialect: a } = e.p.parser;
  t: for (; l & s[o]; ) {
    let h = s[o + 1];
    for (let d = o + 3; d < h; d += 2)
      if ((s[d + 1] & l) > 0) {
        let p = s[d];
        if (a.allows(p) && (t.token.value == -1 || t.token.value == p || C2(p, t.token.value, n, r))) {
          t.acceptToken(p);
          break;
        }
      }
    let c = t.next, f = 0, u = s[o + 2];
    if (t.next < 0 && u > f && s[h + u * 3 - 3] == 65535) {
      o = s[h + u * 3 - 1];
      continue t;
    }
    for (; f < u; ) {
      let d = f + u >> 1, p = h + d + (d << 1), m = s[p], g = s[p + 1] || 65536;
      if (c < m)
        u = d;
      else if (c >= g)
        f = d + 1;
      else {
        o = s[p + 2], t.advance();
        continue t;
      }
    }
    break;
  }
}
function ec(s, t, e) {
  for (let i = t, n; (n = s[i]) != 65535; i++)
    if (n == e)
      return i - t;
  return -1;
}
function C2(s, t, e, i) {
  let n = ec(e, i, t);
  return n < 0 || ec(e, i, s) < n;
}
const Pt = typeof process < "u" && process.env && /\bparse\b/.test(process.env.LOG);
let wo = null;
function ic(s, t, e) {
  let i = s.cursor(q.IncludeAnonymous);
  for (i.moveTo(t); ; )
    if (!(e < 0 ? i.childBefore(t) : i.childAfter(t)))
      for (; ; ) {
        if ((e < 0 ? i.to < t : i.from > t) && !i.type.isError)
          return e < 0 ? Math.max(0, Math.min(
            i.to - 1,
            t - 25
            /* Lookahead.Margin */
          )) : Math.min(s.length, Math.max(
            i.from + 1,
            t + 25
            /* Lookahead.Margin */
          ));
        if (e < 0 ? i.prevSibling() : i.nextSibling())
          break;
        if (!i.parent())
          return e < 0 ? 0 : s.length;
      }
}
class D2 {
  constructor(t, e) {
    this.fragments = t, this.nodeSet = e, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
  }
  nextFragment() {
    let t = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
    if (t) {
      for (this.safeFrom = t.openStart ? ic(t.tree, t.from + t.offset, 1) - t.offset : t.from, this.safeTo = t.openEnd ? ic(t.tree, t.to + t.offset, -1) - t.offset : t.to; this.trees.length; )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(t.tree), this.start.push(-t.offset), this.index.push(0), this.nextStart = this.safeFrom;
    } else
      this.nextStart = 1e9;
  }
  // `pos` must be >= any previously given `pos` for this cursor
  nodeAt(t) {
    if (t < this.nextStart)
      return null;
    for (; this.fragment && this.safeTo <= t; )
      this.nextFragment();
    if (!this.fragment)
      return null;
    for (; ; ) {
      let e = this.trees.length - 1;
      if (e < 0)
        return this.nextFragment(), null;
      let i = this.trees[e], n = this.index[e];
      if (n == i.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let r = i.children[n], o = this.start[e] + i.positions[n];
      if (o > t)
        return this.nextStart = o, null;
      if (r instanceof tt) {
        if (o == t) {
          if (o < this.safeFrom)
            return null;
          let l = o + r.length;
          if (l <= this.safeTo) {
            let a = r.prop(z.lookAhead);
            if (!a || l + a < this.fragment.to)
              return r;
          }
        }
        this.index[e]++, o + r.length >= Math.max(this.safeFrom, t) && (this.trees.push(r), this.start.push(o), this.index.push(0));
      } else
        this.index[e]++, this.nextStart = o + r.length;
    }
  }
}
class R2 {
  constructor(t, e) {
    this.stream = e, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = t.tokenizers.map((i) => new En());
  }
  getActions(t) {
    let e = 0, i = null, { parser: n } = t.p, { tokenizers: r } = n, o = n.stateSlot(
      t.state,
      3
      /* ParseState.TokenizerMask */
    ), l = t.curContext ? t.curContext.hash : 0, a = 0;
    for (let h = 0; h < r.length; h++) {
      if (!(1 << h & o))
        continue;
      let c = r[h], f = this.tokens[h];
      if (!(i && !c.fallback) && ((c.contextual || f.start != t.pos || f.mask != o || f.context != l) && (this.updateCachedToken(f, c, t), f.mask = o, f.context = l), f.lookAhead > f.end + 25 && (a = Math.max(f.lookAhead, a)), f.value != 0)) {
        let u = e;
        if (f.extended > -1 && (e = this.addActions(t, f.extended, f.end, e)), e = this.addActions(t, f.value, f.end, e), !c.extend && (i = f, e > u))
          break;
      }
    }
    for (; this.actions.length > e; )
      this.actions.pop();
    return a && t.setLookAhead(a), !i && t.pos == this.stream.end && (i = new En(), i.value = t.p.parser.eofTerm, i.start = i.end = t.pos, e = this.addActions(t, i.value, i.end, e)), this.mainToken = i, this.actions;
  }
  getMainToken(t) {
    if (this.mainToken)
      return this.mainToken;
    let e = new En(), { pos: i, p: n } = t;
    return e.start = i, e.end = Math.min(i + 1, n.stream.end), e.value = i == n.stream.end ? n.parser.eofTerm : 0, e;
  }
  updateCachedToken(t, e, i) {
    let n = this.stream.clipPos(i.pos);
    if (e.token(this.stream.reset(n, t), i), t.value > -1) {
      let { parser: r } = i.p;
      for (let o = 0; o < r.specialized.length; o++)
        if (r.specialized[o] == t.value) {
          let l = r.specializers[o](this.stream.read(t.start, t.end), i);
          if (l >= 0 && i.p.parser.dialect.allows(l >> 1)) {
            l & 1 ? t.extended = l >> 1 : t.value = l >> 1;
            break;
          }
        }
    } else
      t.value = 0, t.end = this.stream.clipPos(n + 1);
  }
  putAction(t, e, i, n) {
    for (let r = 0; r < n; r += 3)
      if (this.actions[r] == t)
        return n;
    return this.actions[n++] = t, this.actions[n++] = e, this.actions[n++] = i, n;
  }
  addActions(t, e, i, n) {
    let { state: r } = t, { parser: o } = t.p, { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let h = o.stateSlot(
        r,
        a ? 2 : 1
        /* ParseState.Actions */
      ); ; h += 3) {
        if (l[h] == 65535)
          if (l[h + 1] == 1)
            h = xe(l, h + 2);
          else {
            n == 0 && l[h + 1] == 2 && (n = this.putAction(xe(l, h + 2), e, i, n));
            break;
          }
        l[h] == e && (n = this.putAction(xe(l, h + 1), e, i, n));
      }
    return n;
  }
}
class T2 {
  constructor(t, e, i, n) {
    this.parser = t, this.input = e, this.ranges = n, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new S2(e, n), this.tokens = new R2(t, this.stream), this.topTerm = t.top[1];
    let { from: r } = n[0];
    this.stacks = [lr.start(this, t.top[0], r)], this.fragments = i.length && this.stream.end - r > t.bufferLength * 4 ? new D2(i, t.nodeSet) : null;
  }
  get parsedPos() {
    return this.minStackPos;
  }
  // Move the parser forward. This will process all parse stacks at
  // `this.pos` and try to advance them to a further position. If no
  // stack for such a position is found, it'll start error-recovery.
  //
  // When the parse is finished, this will return a syntax tree. When
  // not, it returns `null`.
  advance() {
    let t = this.stacks, e = this.minStackPos, i = this.stacks = [], n, r;
    if (this.bigReductionCount > 300 && t.length == 1) {
      let [o] = t;
      for (; o.forceReduce() && o.stack.length && o.stack[o.stack.length - 2] >= this.lastBigReductionStart; )
        ;
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < t.length; o++) {
      let l = t[o];
      for (; ; ) {
        if (this.tokens.mainToken = null, l.pos > e)
          i.push(l);
        else {
          if (this.advanceStack(l, i, t))
            continue;
          {
            n || (n = [], r = []), n.push(l);
            let a = this.tokens.getMainToken(l);
            r.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!i.length) {
      let o = n && j2(n);
      if (o)
        return Pt && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw Pt && n && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + e);
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && n) {
      let o = this.stoppedAt != null && n[0].pos > this.stoppedAt ? n[0] : this.runRecovery(n, r, i);
      if (o)
        return Pt && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (i.length > o)
        for (i.sort((l, a) => a.score - l.score); i.length > o; )
          i.pop();
      i.some((l) => l.reducePos > e) && this.recovering--;
    } else if (i.length > 1) {
      t: for (let o = 0; o < i.length - 1; o++) {
        let l = i[o];
        for (let a = o + 1; a < i.length; a++) {
          let h = i[a];
          if (l.sameState(h) || l.buffer.length > 500 && h.buffer.length > 500)
            if ((l.score - h.score || l.buffer.length - h.buffer.length) > 0)
              i.splice(a--, 1);
            else {
              i.splice(o--, 1);
              continue t;
            }
        }
      }
      i.length > 12 && (i.sort((o, l) => l.score - o.score), i.splice(
        12,
        i.length - 12
        /* Rec.MaxStackCount */
      ));
    }
    this.minStackPos = i[0].pos;
    for (let o = 1; o < i.length; o++)
      i[o].pos < this.minStackPos && (this.minStackPos = i[o].pos);
    return null;
  }
  stopAt(t) {
    if (this.stoppedAt != null && this.stoppedAt < t)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = t;
  }
  // Returns an updated version of the given stack, or null if the
  // stack can't advance normally. When `split` and `stacks` are
  // given, stacks split off by ambiguous operations will be pushed to
  // `split`, or added to `stacks` if they move `pos` forward.
  advanceStack(t, e, i) {
    let n = t.pos, { parser: r } = this, o = Pt ? this.stackID(t) + " -> " : "";
    if (this.stoppedAt != null && n > this.stoppedAt)
      return t.forceReduce() ? t : null;
    if (this.fragments) {
      let h = t.curContext && t.curContext.tracker.strict, c = h ? t.curContext.hash : 0;
      for (let f = this.fragments.nodeAt(n); f; ) {
        let u = this.parser.nodeSet.types[f.type.id] == f.type ? r.getGoto(t.state, f.type.id) : -1;
        if (u > -1 && f.length && (!h || (f.prop(z.contextHash) || 0) == c))
          return t.useNode(f, u), Pt && console.log(o + this.stackID(t) + ` (via reuse of ${r.getName(f.type.id)})`), !0;
        if (!(f instanceof tt) || f.children.length == 0 || f.positions[0] > 0)
          break;
        let d = f.children[0];
        if (d instanceof tt && f.positions[0] == 0)
          f = d;
        else
          break;
      }
    }
    let l = r.stateSlot(
      t.state,
      4
      /* ParseState.DefaultReduce */
    );
    if (l > 0)
      return t.reduce(l), Pt && console.log(o + this.stackID(t) + ` (via always-reduce ${r.getName(
        l & 65535
        /* Action.ValueMask */
      )})`), !0;
    if (t.stack.length >= 8400)
      for (; t.stack.length > 6e3 && t.forceReduce(); )
        ;
    let a = this.tokens.getActions(t);
    for (let h = 0; h < a.length; ) {
      let c = a[h++], f = a[h++], u = a[h++], d = h == a.length || !i, p = d ? t : t.split(), m = this.tokens.mainToken;
      if (p.apply(c, f, m ? m.start : p.pos, u), Pt && console.log(o + this.stackID(p) + ` (via ${c & 65536 ? `reduce of ${r.getName(
        c & 65535
        /* Action.ValueMask */
      )}` : "shift"} for ${r.getName(f)} @ ${n}${p == t ? "" : ", split"})`), d)
        return !0;
      p.pos > n ? e.push(p) : i.push(p);
    }
    return !1;
  }
  // Advance a given stack forward as far as it will go. Returns the
  // (possibly updated) stack if it got stuck, or null if it moved
  // forward and was given to `pushStackDedup`.
  advanceFully(t, e) {
    let i = t.pos;
    for (; ; ) {
      if (!this.advanceStack(t, null, null))
        return !1;
      if (t.pos > i)
        return sc(t, e), !0;
    }
  }
  runRecovery(t, e, i) {
    let n = null, r = !1;
    for (let o = 0; o < t.length; o++) {
      let l = t[o], a = e[o << 1], h = e[(o << 1) + 1], c = Pt ? this.stackID(l) + " -> " : "";
      if (l.deadEnd && (r || (r = !0, l.restart(), Pt && console.log(c + this.stackID(l) + " (restarted)"), this.advanceFully(l, i))))
        continue;
      let f = l.split(), u = c;
      for (let d = 0; d < 10 && f.forceReduce() && (Pt && console.log(u + this.stackID(f) + " (via force-reduce)"), !this.advanceFully(f, i)); d++)
        Pt && (u = this.stackID(f) + " -> ");
      for (let d of l.recoverByInsert(a))
        Pt && console.log(c + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, i);
      this.stream.end > l.pos ? (h == l.pos && (h++, a = 0), l.recoverByDelete(a, h), Pt && console.log(c + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`), sc(l, i)) : (!n || n.score < f.score) && (n = f);
    }
    return n;
  }
  // Convert the stack's buffer to a syntax tree.
  stackToTree(t) {
    return t.close(), tt.build({
      buffer: ar.create(t),
      nodeSet: this.parser.nodeSet,
      topID: this.topTerm,
      maxBufferLength: this.parser.bufferLength,
      reused: this.reused,
      start: this.ranges[0].from,
      length: t.pos - this.ranges[0].from,
      minRepeatType: this.parser.minRepeatTerm
    });
  }
  stackID(t) {
    let e = (wo || (wo = /* @__PURE__ */ new WeakMap())).get(t);
    return e || wo.set(t, e = String.fromCodePoint(this.nextStackID++)), e + t;
  }
}
function sc(s, t) {
  for (let e = 0; e < t.length; e++) {
    let i = t[e];
    if (i.pos == s.pos && i.sameState(s)) {
      t[e].score < s.score && (t[e] = s);
      return;
    }
  }
  t.push(s);
}
class H2 {
  constructor(t, e, i) {
    this.source = t, this.flags = e, this.disabled = i;
  }
  allows(t) {
    return !this.disabled || this.disabled[t] == 0;
  }
}
const yo = (s) => s;
class E2 {
  /**
  Define a context tracker.
  */
  constructor(t) {
    this.start = t.start, this.shift = t.shift || yo, this.reduce = t.reduce || yo, this.reuse = t.reuse || yo, this.hash = t.hash || (() => 0), this.strict = t.strict !== !1;
  }
}
class Xt extends Uf {
  /**
  @internal
  */
  constructor(t) {
    if (super(), this.wrappers = [], t.version != 14)
      throw new RangeError(`Parser version (${t.version}) doesn't match runtime version (14)`);
    let e = t.nodeNames.split(" ");
    this.minRepeatTerm = e.length;
    for (let l = 0; l < t.repeatNodeCount; l++)
      e.push("");
    let i = Object.keys(t.topRules).map((l) => t.topRules[l][1]), n = [];
    for (let l = 0; l < e.length; l++)
      n.push([]);
    function r(l, a, h) {
      n[l].push([a, a.deserialize(String(h))]);
    }
    if (t.nodeProps)
      for (let l of t.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = z[a]);
        for (let h = 1; h < l.length; ) {
          let c = l[h++];
          if (c >= 0)
            r(c, a, l[h++]);
          else {
            let f = l[h + -c];
            for (let u = -c; u > 0; u--)
              r(l[h++], a, f);
            h++;
          }
        }
      }
    this.nodeSet = new Ql(e.map((l, a) => xt.define({
      name: a >= this.minRepeatTerm ? void 0 : l,
      id: a,
      props: n[a],
      top: i.indexOf(a) > -1,
      error: a == 0,
      skipped: t.skippedNodes && t.skippedNodes.indexOf(a) > -1
    }))), t.propSources && (this.nodeSet = this.nodeSet.extend(...t.propSources)), this.strict = !1, this.bufferLength = _f;
    let o = mn(t.tokenData);
    this.context = t.context, this.specializerSpecs = t.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    this.specializers = this.specializerSpecs.map(nc), this.states = mn(t.states, Uint32Array), this.data = mn(t.stateData), this.goto = mn(t.goto), this.maxTerm = t.maxTerm, this.tokenizers = t.tokenizers.map((l) => typeof l == "number" ? new Ai(o, l) : l), this.topRules = t.topRules, this.dialects = t.dialects || {}, this.dynamicPrecedences = t.dynamicPrecedences || null, this.tokenPrecTable = t.tokenPrec, this.termNames = t.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
  }
  createParse(t, e, i) {
    let n = new T2(this, t, e, i);
    for (let r of this.wrappers)
      n = r(n, t, e, i);
    return n;
  }
  /**
  Get a goto table entry @internal
  */
  getGoto(t, e, i = !1) {
    let n = this.goto;
    if (e >= n[0])
      return -1;
    for (let r = n[e + 1]; ; ) {
      let o = n[r++], l = o & 1, a = n[r++];
      if (l && i)
        return a;
      for (let h = r + (o >> 1); r < h; r++)
        if (n[r] == t)
          return a;
      if (l)
        return -1;
    }
  }
  /**
  Check if this state has an action for a given terminal @internal
  */
  hasAction(t, e) {
    let i = this.data;
    for (let n = 0; n < 2; n++)
      for (let r = this.stateSlot(
        t,
        n ? 2 : 1
        /* ParseState.Actions */
      ), o; ; r += 3) {
        if ((o = i[r]) == 65535)
          if (i[r + 1] == 1)
            o = i[r = xe(i, r + 2)];
          else {
            if (i[r + 1] == 2)
              return xe(i, r + 2);
            break;
          }
        if (o == e || o == 0)
          return xe(i, r + 1);
      }
    return 0;
  }
  /**
  @internal
  */
  stateSlot(t, e) {
    return this.states[t * 6 + e];
  }
  /**
  @internal
  */
  stateFlag(t, e) {
    return (this.stateSlot(
      t,
      0
      /* ParseState.Flags */
    ) & e) > 0;
  }
  /**
  @internal
  */
  validAction(t, e) {
    return !!this.allActions(t, (i) => i == e ? !0 : null);
  }
  /**
  @internal
  */
  allActions(t, e) {
    let i = this.stateSlot(
      t,
      4
      /* ParseState.DefaultReduce */
    ), n = i ? e(i) : void 0;
    for (let r = this.stateSlot(
      t,
      1
      /* ParseState.Actions */
    ); n == null; r += 3) {
      if (this.data[r] == 65535)
        if (this.data[r + 1] == 1)
          r = xe(this.data, r + 2);
        else
          break;
      n = e(xe(this.data, r + 1));
    }
    return n;
  }
  /**
  Get the states that can follow this one through shift actions or
  goto jumps. @internal
  */
  nextStates(t) {
    let e = [];
    for (let i = this.stateSlot(
      t,
      1
      /* ParseState.Actions */
    ); ; i += 3) {
      if (this.data[i] == 65535)
        if (this.data[i + 1] == 1)
          i = xe(this.data, i + 2);
        else
          break;
      if (!(this.data[i + 2] & 1)) {
        let n = this.data[i + 1];
        e.some((r, o) => o & 1 && r == n) || e.push(this.data[i], n);
      }
    }
    return e;
  }
  /**
  Configure the parser. Returns a new parser instance that has the
  given settings modified. Settings not provided in `config` are
  kept from the original parser.
  */
  configure(t) {
    let e = Object.assign(Object.create(Xt.prototype), this);
    if (t.props && (e.nodeSet = this.nodeSet.extend(...t.props)), t.top) {
      let i = this.topRules[t.top];
      if (!i)
        throw new RangeError(`Invalid top rule name ${t.top}`);
      e.top = i;
    }
    return t.tokenizers && (e.tokenizers = this.tokenizers.map((i) => {
      let n = t.tokenizers.find((r) => r.from == i);
      return n ? n.to : i;
    })), t.specializers && (e.specializers = this.specializers.slice(), e.specializerSpecs = this.specializerSpecs.map((i, n) => {
      let r = t.specializers.find((l) => l.from == i.external);
      if (!r)
        return i;
      let o = Object.assign(Object.assign({}, i), { external: r.to });
      return e.specializers[n] = nc(o), o;
    })), t.contextTracker && (e.context = t.contextTracker), t.dialect && (e.dialect = this.parseDialect(t.dialect)), t.strict != null && (e.strict = t.strict), t.wrap && (e.wrappers = e.wrappers.concat(t.wrap)), t.bufferLength != null && (e.bufferLength = t.bufferLength), e;
  }
  /**
  Tells you whether any [parse wrappers](#lr.ParserConfig.wrap)
  are registered for this parser.
  */
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  /**
  Returns the name associated with a given term. This will only
  work for all terms when the parser was generated with the
  `--names` option. By default, only the names of tagged terms are
  stored.
  */
  getName(t) {
    return this.termNames ? this.termNames[t] : String(t <= this.maxNode && this.nodeSet.types[t].name || t);
  }
  /**
  The eof term id is always allocated directly after the node
  types. @internal
  */
  get eofTerm() {
    return this.maxNode + 1;
  }
  /**
  The type of top node produced by the parser.
  */
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  /**
  @internal
  */
  dynamicPrecedence(t) {
    let e = this.dynamicPrecedences;
    return e == null ? 0 : e[t] || 0;
  }
  /**
  @internal
  */
  parseDialect(t) {
    let e = Object.keys(this.dialects), i = e.map(() => !1);
    if (t)
      for (let r of t.split(" ")) {
        let o = e.indexOf(r);
        o >= 0 && (i[o] = !0);
      }
    let n = null;
    for (let r = 0; r < e.length; r++)
      if (!i[r])
        for (let o = this.dialects[e[r]], l; (l = this.data[o++]) != 65535; )
          (n || (n = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new H2(t, i, n);
  }
  /**
  Used by the output of the parser generator. Not available to
  user code. @hide
  */
  static deserialize(t) {
    return new Xt(t);
  }
}
function xe(s, t) {
  return s[t] | s[t + 1] << 16;
}
function j2(s) {
  let t = null;
  for (let e of s) {
    let i = e.p.stoppedAt;
    (e.pos == e.p.stream.end || i != null && e.pos > i) && e.p.parser.stateFlag(
      e.state,
      2
      /* StateFlag.Accepting */
    ) && (!t || t.score < e.score) && (t = e);
  }
  return t;
}
function nc(s) {
  if (s.external) {
    let t = s.extend ? 1 : 0;
    return (e, i) => s.external(e, i) << 1 | t;
  }
  return s.get;
}
const P2 = 11, N2 = 1, Y2 = 2, rc = 3, z2 = 4, G2 = 5, Q2 = 6, B2 = 7, W2 = [-1, 9, 13, 32], pd = {
  mindmap: Y2,
  pie: N2,
  flowchart: rc,
  graph: rc,
  sequenceDiagram: z2,
  journey: G2,
  requirementDiagram: Q2,
  gantt: B2
}, M2 = Object.keys(pd), A2 = new $t((s) => {
  if (W2.includes(s.next))
    return;
  let t = "";
  for (; s.next != 10 && s.next !== -1; )
    t += String.fromCodePoint(s.next), s.advance();
  s.advance();
  const e = M2.filter((i) => t.startsWith(i));
  if (e.length > 0) {
    for (; s.next !== -1; )
      s.advance();
    s.acceptToken(pd[e[0]]);
  } else
    s.acceptToken(P2);
}), L2 = Xt.deserialize({
  version: 14,
  states: "nOVQROOOOQQ'#Ce'#CeOVQROOQOQPOOOOQQ-E6c-E6c",
  stateData: "q~O]OS~OPROQRORROSROTROUROVROZPO~O",
  goto: "aYPPPPPPPPPZQQORSQ",
  nodeNames: "⚠ PieDiagram MindmapDiagram FlowchartDiagram SequenceDiagram JourneyDiagram RequirementDiagram GanttDiagram MermaidDiagram",
  maxTerm: 13,
  skippedNodes: [0],
  repeatNodeCount: 1,
  tokenData: "j~RRXY[]^[pq[~aR]~XY[]^[pq[",
  tokenizers: [0, A2],
  topRules: { MermaidDiagram: [0, 8] },
  tokenPrec: 0
}), md = 16, gd = 1, Z2 = 2, _2 = 3, q2 = 4, F2 = 5, I2 = 17, U2 = 18, V2 = [gd, Z2, _2, q2, F2], hr = 10, $l = 13, $d = 32, sa = 9, wd = 35, X2 = 58, K2 = 40, J2 = 41, ty = 91, ey = 93, iy = 123, sy = 125, ny = new $t((s, t) => {
  if (!(s.next < 0)) {
    s.advance();
    let e = 0;
    for (; s.next == $d || s.next == sa; )
      s.advance(), e++;
    let i = s.next == hr || s.next == $l || s.next == wd;
    s.acceptToken(i ? U2 : I2, -e);
  }
}, { contextual: !0, fallback: !0 }), ry = new $t((s, t) => {
  let e = 0;
  for (; s.next > -1 && s.next !== hr; ) {
    if (s.next === X2)
      return;
    if (s.next === K2 || s.next === ty || s.next === iy)
      if (e > 0) {
        s.acceptToken(t.context.lineType);
        return;
      } else
        return;
    if ((s.next === J2 || s.next === ey || s.next === sy) && e > 0) {
      s.acceptToken(t.context.lineType);
      return;
    }
    s.advance(), e++;
  }
  s.acceptToken(t.context.lineType);
}), oy = (s) => 4 - s % 4, ly = new $t((s, t) => {
  let e = s.peek(-1);
  if (e == hr || e == $l) {
    for (; ; ) {
      if (s.next != $d) {
        if (s.next != sa)
          break;
      }
      s.advance();
    }
    s.next != hr && s.next != $l && s.next != wd && s.acceptToken(md);
  }
}), ay = {
  lineType: gd
}, hy = (s) => {
  let t = 0;
  for (let e = 0; e < s.length; e++)
    t += s.charCodeAt(e) == sa ? oy(t) : 1;
  return t;
}, cy = (s) => V2[s % 5], fy = new E2({
  start: ay,
  shift(s, t, e, i) {
    if (t === md) {
      const n = hy(i.read(i.pos, e.pos));
      s.lineType = cy(n);
    }
    return s;
  }
}), $i = {
  diagramName: E.define($.typeName)
}, ki = {
  diagramName: E.define($i.diagramName),
  lineText1: E.define(),
  lineText2: E.define(),
  lineText3: E.define(),
  lineText4: E.define(),
  lineText5: E.define()
}, Je = {
  diagramName: E.define($i.diagramName),
  lineComment: E.define($.lineComment),
  number: E.define($.number),
  showData: E.define($.keyword),
  string: E.define($.string),
  title: E.define($.keyword),
  titleText: E.define($.string)
}, Nt = {
  diagramName: E.define($i.diagramName),
  keyword: E.define($.keyword),
  lineComment: E.define($.lineComment),
  link: E.define($.contentSeparator),
  nodeEdge: E.define($.contentSeparator),
  nodeEdgeText: E.define($.string),
  nodeId: E.define($.variableName),
  nodeText: E.define($.string),
  number: E.define($.number),
  orientation: E.define($.modifier),
  string: E.define($.string)
}, ye = {
  diagramName: E.define($i.diagramName),
  arrow: E.define($.contentSeparator),
  keyword1: E.define($.keyword),
  keyword2: E.define($.controlKeyword),
  lineComment: E.define($.lineComment),
  messageText1: E.define($.string),
  messageText2: E.define($.content),
  nodeText: E.define($.variableName),
  position: E.define($.modifier)
}, Si = {
  diagramName: E.define($i.diagramName),
  actor: E.define($.variableName),
  keyword: E.define($.keyword),
  lineComment: E.define($.lineComment),
  score: E.define($.number),
  text: E.define($.string)
}, je = {
  diagramName: E.define($i.diagramName),
  arrow: E.define($.contentSeparator),
  keyword: E.define($.keyword),
  lineComment: E.define($.lineComment),
  number: E.define($.number),
  quotedString: E.define($.string),
  unquotedString: E.define($.content)
}, gn = {
  diagramName: E.define($i.diagramName),
  keyword: E.define($.keyword),
  lineComment: E.define($.lineComment),
  string: E.define($.string)
}, uy = Fe({
  DiagramName: ki.diagramName,
  LineText1: ki.lineText1,
  LineText2: ki.lineText2,
  LineText3: ki.lineText3,
  LineText4: ki.lineText4,
  LineText5: ki.lineText5
}), dy = { __proto__: null, mindmap: 44, icon: 50 }, yd = Xt.deserialize({
  version: 14,
  states: "&fOYQ[OOOOQW'#Ci'#CiQbQ[OOQgQ[OOOOQW'#Cc'#CcOOQW-E6g-E6gOlQ]O'#CdOOQW'#Cj'#CjQgQ[OOO!]Q^O,59OOOQW-E6h-E6hOOQW'#Cs'#CsO!vQ[O'#CeO!{Q^O'#CgO!{Q^O'#CyO!{Q^O'#C|O!{Q^O'#C}O!{Q^O'#DQO!{Q^O'#DRO!{Q^O'#DSOOQW'#Ch'#ChO#^Q[O1G.jOOQW1G.j1G.jO#hQ[O,59POOQW'#Cf'#CfOOQW,59R,59RO#mQ[O,59eO#rQ[O,59hO#wQ[O,59iO#|Q[O,59lO$RQ[O,59mO$WQ[O,59nOOQW7+$U7+$UO!{Q^O1G.kOOQW1G/P1G/POOQW1G/S1G/SOOQW1G/T1G/TOOQW1G/W1G/WOOQW1G/X1G/XOOQW1G/Y1G/YO$]Q[O7+$VOOQW<<Gq<<Gq",
  stateData: "$b~OdOSbOS~OaPOfSO~OaPO~OaUO~O`XO_WXaWX~Oj_OkbOn^Or`OsaOwcO~OPZOQZORZOSZOTZOh[Ol]O~PwOihO~OPZOQZORZOSZOTZO~O_WiaWi~PwOjqO~OorO~OksO~OstO~OruO~OjvO~OxwO~OkyO~O",
  goto: "#YwPPPPPPPx{!P!S!P!V!]!cPPPPPPPP!iPPPPP#UPP#U#UPP#U#U#URROTVRWRfXRg[QfXRpeQQORTQQWRRYWQeXQi]Qj^Qk_Ql`QmaQnbQocRxqTdXe",
  nodeNames: "⚠ LineText1 LineText2 LineText3 LineText4 LineText5 MindmapDiagram DiagramName Line IconLine Icon ClassLine ShapedText",
  maxTerm: 40,
  context: fy,
  propSources: [uy],
  skippedNodes: [0],
  repeatNodeCount: 2,
  tokenData: "$b~R]XYz[]zpqzxy!fyz!s![!]#Q!c!}#e!}#O#p#O#P!]#P#Q#u#T#o#e#o#p#z#q#r$V~!PSd~XYz[]zpqz#O#P!]~!`QYZz]^z~!kPj~xy!n~!sOr~~!xPk~yz!{~#QOs~~#TP![!]#W~#]Ph~![!]#`~#eOl~~#jQe~!c!}#e#T#o#e~#uOn~~#zOo~~#}P#o#p$Q~$VOw~~$YP#q#r$]~$bOx~",
  tokenizers: [ly, ry, 0, ny],
  topRules: { MindmapDiagram: [0, 6] },
  specialized: [{ term: 21, get: (s) => dy[s] || -1 }],
  tokenPrec: 0
}), oc = 1, py = new $t((s) => {
  if (s.next === 10) {
    s.acceptToken(oc);
    return;
  }
  if (s.next !== -1) {
    for (; s.next !== 10 && s.next !== -1; )
      s.advance();
    s.acceptToken(oc);
  }
}), my = Fe({
  DiagramName: Je.diagramName,
  LineComment: Je.lineComment,
  Number: Je.number,
  ShowData: Je.showData,
  String: Je.string,
  Title: Je.title,
  TitleText: Je.titleText
}), gy = { __proto__: null, pie: 34, showData: 36, title: 38 }, bd = Xt.deserialize({
  version: 14,
  states: "$nOYQQOOO_QQO'#CkOOQO'#Ce'#CeQYQQOOOOQO'#C`'#C`OpOSO'#CcOxQQO'#CpOOQO'#Cf'#CfO}QQO,59VO!YQRO,59VO!hQQO,59VOOQO'#Ca'#CaOOQP'#Cb'#CbOOQO-E6c-E6cOOOO'#Cg'#CgO!vOSO,58}OOQO,58},58}O#OQQO,59[OOQO-E6d-E6dO#TQQO1G.qO#TQQO1G.qO#`QRO1G.qOOOO-E6e-E6eOOQO1G.i1G.iOOQO1G.v1G.vO#nQQO7+$]O#nQQO7+$]O#yQQO<<Gw",
  stateData: "$U~O^OSQOS~OaSO~ObZOc[OeTO[_Xa_X~Oe`Of^O~OgaO~OeTO[_aa_a~OPdOeTO[_aa_a~Oc[OeTO[_aa_a~OegOf^O~OWhO~OeTO[_ia_i~OPjOeTO[_ia_i~OeTO[_qa_q~OeTO[_ya_y~O",
  goto: "#RePPPPfjmsP!P!V!kPPP!qPPPP!uTPORRYPQXPReYeUPWXYcdeijkQROR]RQWPWbWcikScXYSideRkjQ_TRf_TQOReVPWXYcdeijk",
  nodeNames: "⚠ TitleText LineComment PieDiagram DiagramName ShowData Title String Number",
  maxTerm: 23,
  propSources: [my],
  skippedNodes: [0, 2],
  repeatNodeCount: 3,
  tokenData: "*V~RrOX#]X^#t^p#]pq#tqr#]rs%gsu#]uv%lv!Q#]!Q!['`![!])R!]!c#]!c!})f!}#T#]#T#o)f#o#y#]#y#z#t#z$f#]$f$g#t$g#BY#]#BY#BZ#t#BZ$IS#]$IS$I_#t$I_$I|#]$I|$JO#t$JO$JT#]$JT$JU#t$JU$KV#]$KV$KW#t$KW&FU#]&FU&FV#t&FV;'S#];'S;=`#n<%lO#]Q#bSfQOr#]s;'S#];'S;=`#n<%lO#]Q#qP;=`<%l#]R#{h^PfQOX#]X^#t^p#]pq#tqr#]s#y#]#y#z#t#z$f#]$f$g#t$g#BY#]#BY#BZ#t#BZ$IS#]$IS$I_#t$I_$I|#]$I|$JO#t$JO$JT#]$JT$JU#t$JU$KV#]$KV$KW#t$KW&FU#]&FU&FV#t&FV;'S#];'S;=`#n<%lO#]~%lOe~R%qUfQOr#]su#]uv&Tv;'S#];'S;=`#n<%lO#]R&[VQPfQOY&TYZ#]Zr&Trs&qs;'S&T;'S;=`'Y<%lO&TP&vSQPOY&qZ;'S&q;'S;=`'S<%lO&qP'VP;=`<%l&qR']P;=`<%l&TR'gWWPfQOr#]s!O#]!O!P(P!P!Q#]!Q!['`![;'S#];'S;=`#n<%lO#]R(UUfQOr#]s!Q#]!Q![(h![;'S#];'S;=`#n<%lO#]R(oUWPfQOr#]s!Q#]!Q![(h![;'S#];'S;=`#n<%lO#]R)YSgPfQOr#]s;'S#];'S;=`#n<%lO#]R)mW`PfQOr#]s!c#]!c!})f!}#T#]#T#o)f#o;'S#];'S;=`#n<%lO#]",
  tokenizers: [py, 0, 1],
  topRules: { PieDiagram: [0, 3] },
  specialized: [{ term: 16, get: (s) => gy[s] || -1 }],
  tokenPrec: 0
}), $y = 1, wy = 2, yy = 3, Od = [-1, 9, 13, 32, 34, 39, 96], xd = [40, 62, 91, 123, 124], by = [41, 93, 124, 125], lc = 45, ac = 61, hc = 46, Oy = new $t((s) => {
  if (!(Od.includes(s.next) || xd.includes(s.next))) {
    for (; !by.includes(s.next) && s.next !== -1; )
      s.advance();
    s.acceptToken(wy);
  }
}), xy = new $t((s) => {
  if (!(Od.includes(s.next) || xd.includes(s.next) || s.next === lc || s.next === ac || s.next === hc)) {
    for (; s.next !== lc && s.next !== ac && s.next !== hc && s.next !== -1; )
      s.advance();
    s.acceptToken($y);
  }
}), ky = new $t((s) => {
  if (!(s.next === 10 || s.next === -1)) {
    for (; s.next !== 10 && s.next !== -1; )
      s.advance();
    s.acceptToken(yy);
  }
}), Sy = Fe({
  "( )": $.paren,
  "[ ]": $.squareBracket,
  "{ }": $.brace,
  "<": $.angleBracket,
  DiagramName: Nt.diagramName,
  DoubleEqual: Nt.link,
  DoubleHyphen: Nt.link,
  Keyword: Nt.keyword,
  LineComment: Nt.lineComment,
  Link: Nt.link,
  NodeEdge: Nt.nodeEdge,
  NodeEdgeText: Nt.nodeEdgeText,
  NodeId: Nt.nodeId,
  NodeText: Nt.nodeText,
  Number: Nt.number,
  Orientation: Nt.orientation,
  String: Nt.string
}), vy = { __proto__: null, flowchart: 60, graph: 62, TB: 64, TD: 66, BT: 68, RL: 70, LR: 72, subgraph: 148, end: 150, direction: 152, click: 154, call: 156, href: 158, _self: 160, _blank: 162, _parent: 164, _to: 166, style: 170, linkStyle: 172, class: 174, classDef: 176 }, kd = Xt.deserialize({
  version: 14,
  states: "*hOYQWOOOvQWO'#CxOOQO'#Co'#CoQYQWOOOOQO'#Cb'#CbOOQO'#Cp'#CpO!TQWO,59dO!cQWO,59dOOQS'#Cc'#CcOOQO-E6m-E6mOOQO-E6n-E6nO%aQWO1G/OOOQS'#Cd'#CdO(_O`O'#CfO(gOpO'#CfO(oO!bO'#CfO(wQYO'#CeO(wQYO'#CeO(wQYO'#CeO(wQYO'#CeO(wQYO'#CeO(wQYO'#CeO(wQYO'#CeO(wQYO'#CeO(wQYO'#CeO(wQYO'#CeOOQO'#Cg'#CgO)VQXO'#ChOOQO'#DS'#DSO)eQWO'#DSO%aQWO1G/OOOQO'#Ck'#CkOOQO'#Cn'#CnO)yQWO7+$jOOOO'#Cq'#CqO,wO`O,59QOOQO,59Q,59QOOOO'#Cr'#CrO-POpO,59QOOOO'#Cs'#CsO-XO!bO,59QOOQO'#DU'#DUO-aQWO,59PO-fQWO,59PO-kQWO,59PO-pQ#tO,59PO-uQ#tO,59PO-}Q#tO,59PO.SQ#tO,59PO.XQWO,59PO.^Q#tO,59PO.cQ&jO,59POOQO'#Dv'#DvO.hQWO,59SO.|Q[O,59nO)yQWO7+$jO/RQWO'#CtO)yQWO7+$jO2dQWO<<HUO2dQWO<<HUOOOO-E6o-E6oOOQO1G.l1G.lOOOO-E6p-E6pOOOO-E6q-E6qOOQO1G.k1G.kOOQO1G.n1G.nOOQO1G/Y1G/YO5bQWO,59`OOQO,59`,59`OOQO-E6r-E6rO8sQWOAN=pOOQO1G.z1G.zP;qQWO'#Cp",
  stateData: ">{~OkOSSOS~OnSOoSO~OpWOqWOrWOsWOtWOuTO~OilXnlXolX~PbOuTOilanlaola~O]kO^kO`lOalOm[Ow`Oy]O{^O}_O!QaO!SbO!TcO!VdO!WeO!ZfO!]aO!^gO!`hO!biO!djO!ejO!fjO!gjO!hjO!ijO!klO!loO!moO!noO!ooO!poO!qoO!roO!soO!toO!uoO!vlO!wpO!xpO!ypO!zpOilanlaola~PbO]kO^kO`lOalOm[Ow`Oy]O{^O}_O!QaO!SbO!TcO!VdO!WeO!ZfO!]aO!^gO!`hO!biO!djO!ejO!fjO!gjO!hjO!ijO!klO!loO!moO!noO!ooO!poO!qoO!roO!soO!toO!uoO!vlO!wpO!xpO!ypO!zpOilinlioli~PbOytOzrO~O{tO|uO~O}tO!OwO~OQyOy]O{^O}_O~OP!UOy]O{^O}_O~Om[OpWOqWOrWOsWOtWO~O]kO^kO`lOalOm[Ow`Oy]O{^O}_O!QaO!SbO!TcO!VdO!WeO!ZfO!]aO!^gO!`hO!biO!djO!ejO!fjO!gjO!hjO!ijO!klO!loO!moO!noO!ooO!poO!qoO!roO!soO!toO!uoO!vlO!wpO!xpO!ypO!zpOilqnlqolq~PbOy!_OzrO~O{!_O|uO~O}!_O!OwO~O!P!bO~O!R!bO~O!S!bO~O!U!bO~O!U!bO!Y!bO~O!X!bO~O![!bO~O!_!bO~O!a!bO~O!c!bO~O!djO!ejO!fjO!gjO!hjO!ijO~OR!dO~O!{!fO]hX^hX`hXahXihXmhXnhXohXphXqhXrhXshXthXuhXwhXyhX{hX}hX!QhX!ShX!ThX!VhX!WhX!ZhX!]hX!^hX!`hX!bhX!dhX!ehX!fhX!ghX!hhX!ihX!khX!lhX!mhX!nhX!ohX!phX!qhX!rhX!shX!thX!uhX!vhX!whX!xhX!yhX!zhX~O]kO^kO`lOalOm[Ow`Oy]O{^O}_O!QaO!SbO!TcO!VdO!WeO!ZfO!]aO!^gO!`hO!biO!djO!ejO!fjO!gjO!hjO!ijO!klO!loO!moO!noO!ooO!poO!qoO!roO!soO!toO!uoO!vlO!wpO!xpO!ypO!zpOilynlyoly~PbO!{!iO]ha^ha`haahaihamhanhaohaphaqharhashathauhawhayha{ha}ha!Qha!Sha!Tha!Vha!Wha!Zha!]ha!^ha!`ha!bha!dha!eha!fha!gha!hha!iha!kha!lha!mha!nha!oha!pha!qha!rha!sha!tha!uha!vha!wha!xha!yha!zha~O]kO^kO`lOalOm[Ow`Oy]O{^O}_O!QaO!SbO!TcO!VdO!WeO!ZfO!]aO!^gO!`hO!biO!djO!ejO!fjO!gjO!hjO!ijO!klO!loO!moO!noO!ooO!poO!qoO!roO!soO!toO!uoO!vlO!wpO!xpO!ypO!zpOil!Rnl!Rol!R~PbO]kO^kO`lOalOm[Ow`Oy]O{^O}_O!QaO!SbO!TcO!VdO!WeO!ZfO!]aO!^gO!`hO!biO!djO!ejO!fjO!gjO!hjO!ijO!klO!loO!moO!noO!ooO!poO!qoO!roO!soO!toO!uoO!vlO!wpO!xpO!ypO!zpO~PbOukS!d!e!f!g!h!i]^!k!{y{}a`m]~",
  goto: "'[!kPPPPPP!l!p#Q#a#m$Y#aPP#aPP$i$u${%e%k%q%wPPP&RPPPPPPPPP&VP&iPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP'XTPORQVPg[VZmnq!X!Z![!]!h!jdlVZnq!X!Z![!]!h!jR!WmelVZnq!X!Z![!]!h!jdlVZnq!X!Z![!]!h!jdy`abcdefghiR!UkdlVZnq!X!Z![!]!h!jR!c!VemVZnq!X!Z![!]!h!jQRORXRQUP[YUZ!X![!h!jQZVQ!XnS![q!ZR!h!]Qs]R!^sQv^R!`vQx_R!axQ!ZnQ!]qT!g!Z!]TQORQnVQqZW!Ynq!Z!]X!e!X![!h!jQz`Q{aQ|bQ}cQ!OdQ!PeQ!QfQ!RgQ!ShR!TiR!Vk",
  nodeNames: "⚠ NodeEdgeText NodeText StyleText LineComment FlowchartDiagram DiagramName Orientation NodeId Node String Link NodeEdge DoubleHyphen DoubleEqual Keyword : ::: StyleKeyword",
  maxTerm: 89,
  propSources: [Sy],
  skippedNodes: [0, 4],
  repeatNodeCount: 6,
  tokenData: "=3^!aR3ZOX!)tXY!.cYZ!0iZ^!.c^p!)tpq!.cqr!2wrs+ kst!2wtu!2wuv,(_vw6>_wx7ETxy8Kwyz9!^z{!2w{|!2w|}!)t}!O9&O!O!P9/Q!P!Q!2w!Q![!2w![!]:5y!]!^:8k!^!_:9c!_!`:Br!`!a:F`!a!b!2w!b!c!)t!c!}!2w!}#O:GW#O#P!2w#P#Q:Iw#Q#R!)t#R#S!2w#S#T:Lk#T#c!2w#c#d<%_#d#l!2w#l#m<%_#m#o!2w#o#p=,[#p#q=.Q#q#r=.x#r#s=0n#s#y!)t#y#z!.c#z$f!)t$f$g!.c$g$p!)t$p$q!2w$q${!)t${$|!2w$|%Q!)t%Q%R!2w%R%W!)t%W%o!2w%o%p!)t%p&a!2w&a&b!)t&b0`!2w0`0d!)t0d0p!2w0p1O!)t1O1T!2w1T1[!)t1[1]!2w1]1^!)t1^1_!2w1_4U!)t4U4Z!2w4Z4[!)t4[4]!2w4]4^!2w4^4`!)t4`4d!2w4d4l!)t4l4m!2w4m4n!)t4n4q!2w4q4r!)t4r4s!2w4s4t!)t4t5Y!2w5Y5Z!)t5Z7Q!2w7Q7R!)t7R:S!2w:S:[!)t:[=p!2w=p=y!)t=y>q!2w>q>s!)t>s>t!2w>t>{!)t>{?t!2w?tA`!)tA`A{!2wA{BQ!)tBQBT!2wBTCS!)tCSDP!2wDPDt!)tDtDu!2wDuDv!2wDvDw!)tDwGO!2wGOGP!)tGPGQ!2wGQGa!)tGaGb!2wGbGc!2wGcGj!)tGjGk!2wGkGl!2wGlGv!)tGvGy!2wGyG{!)tG{G|!2wG|H^!)tH^H_!2wH_H`!)tH`IO!2wIOIm!)tImKj!2wKjKu!)tKuKv!2wKvL`!)tL`MR!2wMRM[!)tM[M]!2wM]M^!2wM^Mb!)tMbMc!2wMcMh!)tMhNO!2wNONS!)tNSNT!2wNTN^!)tN^N_!2wN_Nb!)tNbNc!2wNcNz!)tNz! e!2w! e!#O!)t!#O!#P!2w!#P!#Q!)t!#Q!#]!2w!#]!%W!)t!%W!&`!2w!&`!&c!)t!&c!&d!2w!&d!&v!)t!&v!&w!2w!&w!'O!)t!'O!'Y!2w!'Y!'i!)t!'i!'p!2w!'p!'q!)t!'q!'x!2w!'x!'}!)t!'}!(V!2w!(V!(X!)t!(X!(Y!2w!(Y!(Z!2w!(Z!(]!)t!(]!(s!2w!(s!(t!)t!(t!({!2w!({!(|!)t!(|!(}!2w!(}!)Q!)t!)Q!)U!2w!)U!)X!)t!)X!)Y!2w!)Y!)j!)t!)j!)k!2w!)k!)x!)t!)x!)y!2w!)y!)z!2w!)z!){!)t!){!*O!2w!*O!*^!)t!*^!*_!2w!*_!*`!2w!*`!*s!)t!*s!*y!2w!*y!*}!)t!*}!+O!2w!+O!+P!2w!+P!+R!)t!+R!+i!2w!+i!+j!)t!+j!+q!2w!+q!+r!)t!+r!+s!2w!+s!+t!2w!+t!+u!)t!+u!+v!2w!+v!+w!2w!+w!+x!)t!+x!+y!2w!+y!+z!2w!+z!,k!)t!,k!,o!2w!,o!,p!)t!,p!,q!2w!,q!-U!)t!-U!-X!2w!-X!-i!)t!-i!-r!2w!-r!-s!)t!-s!-v!2w!-v!-w!)t!-w!._!2w!._!.`!)t!.`!.g!2w!.g!.h!)t!.h!.i!2w!.i!.j!2w!.j!.k!)t!.k!.p!2w!.p!.s!)t!.s!.t!2w!.t!/W!)t!/W!/X!2w!/X!/h!)t!/h!/i!2w!/i!/j!2w!/j!0_!)t!0_!0g!2w!0g!0i!)t!0i!0j!2w!0j!0k!2w!0k!0m!)t!0m!1T!2w!1T!1U!)t!1U!1]!2w!1]!1^!)t!1^!1_!2w!1_!1`!2w!1`!1a!)t!1a!1f!2w!1f!1i!)t!1i!1j!2w!1j!2Y!)t!2Y!2Z!2w!2Z!2[!2w!2[!2]!)t!2]!2`!2w!2`!2o!)t!2o!2p!2w!2p!3R!)t!3R!3S!2w!3S!3T!)t!3T!3Z!2w!3Z!3^!)t!3^!3a!2w!3a!3b!)t!3b!3f!2w!3f!3i!)t!3i!3j!2w!3j!3k!2w!3k!3l!)t!3l!3m!2w!3m!3n!)t!3n!3o!2w!3o!3p!2w!3p!3s!)t!3s!3t!2w!3t!3u!2w!3u!3x!)t!3x!3{!2w!3{!4O!)t!4O!4[!2w!4[!4r!)t!4r!4s!2w!4s!5y!)t!5y!6R!2w!6R!6S!)t!6S!6V!2w!6V!6W!)t!6W!6o!2w!6o!6p!)t!6p!6z!2w!6z!6{!)t!6{!7Q!2w!7Q!7T!)t!7T!7U!2w!7U!7p!)t!7p!7q!2w!7q!7r!2w!7r!7x!)t!7x!7y!2w!7y!7z!2w!7z!8o!)t!8o!8w!2w!8w!8x!)t!8x!8{!2w!8{!8|!)t!8|!9e!2w!9e!9f!)t!9f!9p!2w!9p!9q!)t!9q!9v!2w!9v!9y!)t!9y!9z!2w!9z!:l!)t!:l!:m!2w!:m!:n!)t!:n!:o!2w!:o!:p!2w!:p!;P!)t!;P!;Q!2w!;Q!;R!2w!;R!;e!)t!;e!;m!2w!;m!;n!)t!;n!;q!2w!;q!;r!)t!;r!<m!2w!<m!<o!)t!<o!<p!2w!<p!=Q!)t!=Q!=R!2w!=R!=d!)t!=d!=e!2w!=e!=f!2w!=f!>O!)t!>O!>U!2w!>U!>Z!)t!>Z!>m!2w!>m!>p!)t!>p!?Y!2w!?Y!?Z!)t!?Z!?d!2w!?d!?e!)t!?e!?f!2w!?f!?h!)t!?h!?o!2w!?o!@{!)t!@{!A}!2w!A}!BO!)t!BO!BP!2w!BP!BQ!2w!BQ!B^!)t!B^!Be!2w!Be!Cq!)t!Cq!Cr!2w!Cr!Cs!2w!Cs!Ct!)t!Ct!Cu!2w!Cu!Cw!)t!Cw!Cx!2w!Cx!Cy!2w!Cy!Cz!)t!Cz!C{!2w!C{!C}!)t!C}!DO!2w!DO!DU!)t!DU!DY!2w!DY!DZ!)t!DZ!Db!2w!Db!Dc!)t!Dc!Df!2w!Df!Dg!)t!Dg!Dh!2w!Dh!Di!)t!Di!Dj!2w!Dj!Dl!)t!Dl!Dm!2w!Dm!Dn!2w!Dn!Do!)t!Do!Ds!2w!Ds!Dt!)t!Dt!Du!2w!Du!Dv!2w!Dv!EP!)t!EP!EQ!2w!EQ!ES!)t!ES!EX!2w!EX!EY!)t!EY!EZ!2w!EZ!Ep!)t!Ep!Et!2w!Et!Ff!)t!Ff!Fg!2w!Fg!Gx!)t!Gx!HQ!2w!HQ!HR!)t!HR!Hw!2w!Hw!Id!)t!Id!Ii!2w!Ii!LQ!)t!LQ!L}!2w!L}!Mc!)t!Mc!Md!2w!Md!Mt!)t!Mt!Mz!2w!Mz!NO!)t!NO!NS!2w!NS!NV!)t!NV!NW!2w!NW!NZ!)t!NZ!N[!2w!N[!N]!2w!N]!Nd!)t!Nd!Ng!2w!Ng!Nk!)t!Nk!Nx!2w!Nx# U!)t# U# V!2w# V# h!)t# h#!`!2w#!`#!a!)t#!a#!b!2w#!b#!g!)t#!g#!h!2w#!h#!j!)t#!j##g!2w##g##h!)t##h#*s!2w#*s#*t!)t#*t#*x!2w#*x#*z!)t#*z#+R!2w#+R#+S!)t#+S#+T!2w#+T#+U!)t#+U#+Y!2w#+Y#+[!)t#+[#,V!2w#,V#,W!)t#,W#,[!2w#,[#,^!)t#,^#-P!2w#-P#-Q!)t#-Q#-U!2w#-U#-W!)t#-W#-_!2w#-_#-`!)t#-`#-a!2w#-a#-b!)t#-b#-f!2w#-f#-h!)t#-h#-w!2w#-w#-x!)t#-x#/T!2w#/T#/U!)t#/U#/Y!2w#/Y#/[!)t#/[#0q!2w#0q#1h!)t#1h#1x!2w#1x#2Y!)t#2Y#4R!2w#4R#4_!)t#4_#Au!2w#Au#Aw!)t#Aw#BY!2w#BY#BZ!.c#BZ#Bu!2w#Bu#Bz!)t#Bz#Di!2w#Di#EO!)t#EO#E]!2w#E]#E^!)t#E^#Eb!2w#Eb#Ep!)t#Ep#FS!2w#FS#Fb!)t#Fb#Ft!2w#Ft#GS!)t#GS#Ga!2w#Ga#Gb!)t#Gb#Ge!2w#Ge#Gt!)t#Gt#Hz!2w#Hz#Io!)t#Io#Ip!2w#Ip#It!)t#It#Iu!2w#Iu#K[!)t#K[#MW!2w#MW#M`!)t#M`#NZ!2w#NZ#N[!)t#N[#N]!2w#N]#Nb!)t#Nb$ z!2w$ z$!U!)t$!U$!s!2w$!s$#x!)t$#x$$h!2w$$h$$j!)t$$j$$o!2w$$o$$z!)t$$z$%x!2w$%x$&_!)t$&_$&f!2w$&f$'p!)t$'p$(X!2w$(X$(b!)t$(b$)i!2w$)i$+_!)t$+_$+`!2w$+`$-a!)t$-a$.b!2w$.b$.s!)t$.s$.z!2w$.z$0T!)t$0T$0s!2w$0s$1Q!)t$1Q$1R!2w$1R$1S!2w$1S$1^!)t$1^$2[!2w$2[$2v!)t$2v$3l!2w$3l$4g!)t$4g$4j!2w$4j$4t!)t$4t$5j!2w$5j$7y!)t$7y$7}!2w$7}$8O!)t$8O$8S!2w$8S$8V!)t$8V$8W!2w$8W$8X!2w$8X$8b!)t$8b$<j!2w$<j$=|!)t$=|$DO!2w$DO$DQ!)t$DQ$DW!2w$DW$DY!)t$DY$EQ!2w$EQ$ES!)t$ES$EY!2w$EY$E[!)t$E[$Ed!2w$Ed$Ee!)t$Ee$Ef!2w$Ef$Eg!)t$Eg$Eh!2w$Eh$Ei!)t$Ei$Ej!2w$Ej$Ek!)t$Ek$F[!2w$F[$F^!)t$F^$Ge!2w$Ge$Gf!)t$Gf$Gm!2w$Gm$Gn!)t$Gn$Go!2w$Go$Gr!)t$Gr$Gu!2w$Gu$Gv!)t$Gv$G}!2w$G}$HQ!)t$HQ$HU!2w$HU$HW!)t$HW$H^!2w$H^$Hb!)t$Hb$Ho!2w$Ho$Ht!)t$Ht$Hw!2w$Hw$Hx!)t$Hx$IP!2w$IP$IS!)t$IS$I_!.c$I_$I|!)t$I|$JO!.c$JO$JT!)t$JT$JU!.c$JU$KV!)t$KV$KW!.c$KW$Ki!)t$Ki$Kj!2w$Kj$Kw!)t$Kw$Kx!2w$Kx$LY!)t$LY$Lg!2w$Lg$Np!)t$Np$Nq!2w$Nq$Nu!)t$Nu$Nv!2w$Nv$Nx!)t$Nx% S!2w% S% T!)t% T% U!2w% U% X!)t% X% ^!2w% ^% d!)t% d% e!2w% e% f!)t% f% g!2w% g% h!)t% h% i!2w% i% j!)t% j% n!2w% n% o!)t% o% z!2w% z% |!)t% |%!Q!2w%!Q%!V!)t%!V%![!2w%![%!`!)t%!`%!a!2w%!a%#g!)t%#g%#h!2w%#h%#i!2w%#i&/x!)t&/x&0y!2w&0y&0z!)t&0z&1{!2w&1{&1|!)t&1|&4w!2w&4w&4}!)t&4}&5R!2w&5R&5U!)t&5U&5V!2w&5V&5W!2w&5W&5d!)t&5d&6[!2w&6[&6]!)t&6]&6^!2w&6^&6c!)t&6c&6d!2w&6d&6f!)t&6f&7p!2w&7p&7w!)t&7w&7x!2w&7x&8Y!)t&8Y&8q!2w&8q&8z!)t&8z&9R!2w&9R&9S!)t&9S&9Z!2w&9Z&9[!)t&9[&9c!2w&9c&9d!)t&9d&9k!2w&9k&9l!)t&9l&9s!2w&9s&9t!)t&9t&9{!2w&9{&9|!)t&9|&:T!2w&:T&:U!)t&:U&:]!2w&:]&<P!)t&<P&<Q!2w&<Q&FU!)t&FU&FV!.c&FV&FZ!)t&FZ&F[!2w&F[&F]!2w&F]&GX!)t&GX&G^!2w&G^&Gc!)t&Gc&Gd!2w&Gd&Ge!2w&Ge&Gi!)t&Gi&Ic!2w&Ic&Ii!)t&Ii&Il!2w&Il&Im!)t&Im&Kk!2w&Kk&Kl!)t&Kl&Kp!2w&Kp&Ku!)t&Ku&Lp!2w&Lp&Ls!)t&Ls&Nu!2w&Nu' W!)t' W' s!2w' s'!z!)t'!z'#[!2w'#['.b!)t'.b*3f!2w*3f*5S!)t*5S40_!2w40_41d!)t41d4Js!2w4Js4LY!)t4LY4MY!2w4MY4M[!)t4M[5%T!2w5%T5%W!)t5%W5%h!2w5%h5%r!)t5%r5%s!2w5%s5%t!2w5%t5&Y!)t5&Y5'Z!2w5'Z5'k!)t5'k5(U!2w5(U5(^!)t5(^5)v!2w5)v5*y!)t5*y5+S!2w5+S5+U!)t5+U5-a!2w5-a5-c!)t5-c5-g!2w5-g5-h!)t5-h5-l!2w5-l5-x!)t5-x5.T!2w5.T5/t!)t5/t50O!2w50O50P!)t50P50S!2w50S50T!)t50T50X!2w50X50Y!)t50Y50q!2w50q51`!)t51`52f!2w52f52t!)t52t53x!2w53x55Y!)t55Y55`!2w55`55c!)t55c55d!2w55d55r!)t55r56`!2w56`56j!)t56j57R!2w57R57l!)t57l58Z!2w58Z58b!)t58b59c!2w59c5:P!)t5:P5:Q!2w5:Q5;S!)t5;S5;}!2w5;}5<f!)t5<f5<i!2w5<i5<j!)t5<j5<r!2w5<r5=W!)t5=W5=o!2w5=o5=r!)t5=r5=s!2w5=s5=x!)t5=x5>z!2w5>z5>{!)t5>{5>|!2w5>|5?P!)t5?P5?Q!2w5?Q5?R!2w5?R5?T!)t5?T5?Y!2w5?Y5?[!)t5?[5?]!2w5?]5?^!)t5?^5?_!2w5?_5?w!)t5?w5?z!2w5?z5?|!)t5?|5@X!2w5@X5@`!)t5@`5@c!2w5@c5@o!)t5@o5@u!2w5@u5@w!)t5@w5@}!2w5@}5AP!)t5AP5AV!2w5AV5A`!)t5A`5Ag!2w5Ag5Ah!)t5Ah5Ao!2w5Ao5Dv!)t5Dv5Ek!2w5Ek5FY!)t5FY;%S!2w;%S;%`!)t;%`;%w!2w;%w;%{!)t;%{;'O!2w;'O;'S!)t;'S;=`!.]<%l?&r!)t?&r?.p!2w?.p?.r!)t?.r?1Q!2w?1Q?1x!)t?1x?2P!2w?2P?2]!)t?2]?2b!2w?2b?2g!)t?2g?2h!2w?2h?2i!)t?2i?2s!2w?2s?2t!)t?2t?3R!2w?3R?3S!)t?3S?3X!2w?3X?3Y!)t?3Y?3Z!2w?3Z?3[!)t?3[?3]!2w?3]?3^!2w?3^?3_!)t?3_?3`!2w?3`?3a!2w?3a?3b!)t?3b?5r!2w?5r?6e!)t?6e?>`!2w?>`?>r!)t?>r?@U!2w?@U?@W!)t?@W?A`!2w?A`?BY!)t?BY?Bf!2w?Bf?EO!)t?EO?ET!2w?ET?EU!)t?EU?HR!2w?HR?Hw!)t?Hw?Ic!2w?Ic?Ii!)t?Ii?JT!2w?JT?J`!)t?J`?L]!2w?L]?L`!)t?L`?Lf!2w?Lf?Lh!)t?Lh?Ln!2w?Ln?Lp!)t?Lp?Lv!2w?Lv?Lx!)t?Lx?L{!2w?L{O!)t^!)}X!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)tY!*qV!OWzQOw!*jwx!+Wx#S!*j#S#T!+o#T;'S!*j;'S;=`!,W<%lO!*jW!+]S!OWO#S!+W#T;'S!+W;'S;=`!+i<%lO!+WW!+lP;=`<%l!+WQ!+tSzQOw!+ox;'S!+o;'S;=`!,Q<%lO!+oQ!,TP;=`<%l!+oY!,ZP;=`<%l!*j[!,eV!OW|SOr!,^rs!+Ws#S!,^#S#T!,z#T;'S!,^;'S;=`!-c<%lO!,^S!-PS|SOr!,zs;'S!,z;'S;=`!-]<%lO!,zS!-`P;=`<%l!,z[!-fP;=`<%l!,^U!-pV|SzQOr!-irs!+osw!-iwx!,zx;'S!-i;'S;=`!.V<%lO!-iU!.YP;=`<%l!-i^!.`P;=`<%l!)t!a!.nm!OW|SzQk!ROX!)tX^!.c^p!)tpq!.cqr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T#y!)t#y#z!.c#z$f!)t$f$g!.c$g#BY!)t#BY#BZ!.c#BZ$IS!)t$IS$I_!.c$I_$I|!)t$I|$JO!.c$JO$JT!)t$JT$JU!.c$JU$KV!)t$KV$KW!.c$KW&FU!)t&FU&FV!.c&FV;'S!)t;'S;=`!.]<%lO!)t!a!0vo!OW|SzQuPk!ROX!)tXY!.cYZ!0iZ^!.c^p!)tpq!.cqr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T#y!)t#y#z!.c#z$f!)t$f$g!.c$g#BY!)t#BY#BZ!.c#BZ$IS!)t$IS$I_!.c$I_$I|!)t$I|$JO!.c$JO$JT!)t$JT$JU!.c$JU$KV!)t$KV$KW!.c$KW&FU!)t&FU&FV!.c&FV;'S!)t;'S;=`!.]<%lO!)t_!3S2g!OW|SzQmPOq!)tqr!2wrs#9kst!2wtu!2wuv!2wvw!2wwx';ixz!)tz{!2w{|!2w|!O!)t!O!P!2w!P!Q!2w!Q![!2w![!a!)t!a!b!2w!b!c!)t!c!}!2w!}#O!)t#O#P!2w#P#R!)t#R#S!2w#S#T)Hy#T#o!2w#o$p!)t$p$q!2w$q${!)t${$|!2w$|%Q!)t%Q%R!2w%R%W!)t%W%o!2w%o%p!)t%p&a!2w&a&b!)t&b0`!2w0`0d!)t0d0p!2w0p1O!)t1O1T!2w1T1[!)t1[1]!2w1]1^!)t1^1_!2w1_4U!)t4U4Z!2w4Z4[!)t4[4]!2w4]4^!2w4^4`!)t4`4d!2w4d4l!)t4l4m!2w4m4n!)t4n4q!2w4q4r!)t4r4s!2w4s4t!)t4t5Y!2w5Y5Z!)t5Z7Q!2w7Q7R!)t7R:S!2w:S:[!)t:[=p!2w=p=y!)t=y>q!2w>q>s!)t>s>t!2w>t>{!)t>{?t!2w?tA`!)tA`A{!2wA{BQ!)tBQBT!2wBTCS!)tCSDP!2wDPDt!)tDtDu!2wDuDv!2wDvDw!)tDwGO!2wGOGP!)tGPGQ!2wGQGa!)tGaGb!2wGbGc!2wGcGj!)tGjGk!2wGkGl!2wGlGv!)tGvGy!2wGyG{!)tG{G|!2wG|H^!)tH^H_!2wH_H`!)tH`IO!2wIOIm!)tImKj!2wKjKu!)tKuKv!2wKvL`!)tL`MR!2wMRM[!)tM[M]!2wM]M^!2wM^Mb!)tMbMc!2wMcMh!)tMhNO!2wNONS!)tNSNT!2wNTN^!)tN^N_!2wN_Nb!)tNbNc!2wNcNz!)tNz! e!2w! e!#O!)t!#O!#P!2w!#P!#Q!)t!#Q!#]!2w!#]!%W!)t!%W!&`!2w!&`!&c!)t!&c!&d!2w!&d!&v!)t!&v!&w!2w!&w!'O!)t!'O!'Y!2w!'Y!'i!)t!'i!'p!2w!'p!'q!)t!'q!'x!2w!'x!'}!)t!'}!(V!2w!(V!(X!)t!(X!(Y!2w!(Y!(Z!2w!(Z!(]!)t!(]!(s!2w!(s!(t!)t!(t!({!2w!({!(|!)t!(|!(}!2w!(}!)Q!)t!)Q!)U!2w!)U!)X!)t!)X!)Y!2w!)Y!)j!)t!)j!)k!2w!)k!)x!)t!)x!)y!2w!)y!)z!2w!)z!){!)t!){!*O!2w!*O!*^!)t!*^!*_!2w!*_!*`!2w!*`!*s!)t!*s!*y!2w!*y!*}!)t!*}!+O!2w!+O!+P!2w!+P!+R!)t!+R!+i!2w!+i!+j!)t!+j!+q!2w!+q!+r!)t!+r!+s!2w!+s!+t!2w!+t!+u!)t!+u!+v!2w!+v!+w!2w!+w!+x!)t!+x!+y!2w!+y!+z!2w!+z!,k!)t!,k!,o!2w!,o!,p!)t!,p!,q!2w!,q!-U!)t!-U!-X!2w!-X!-i!)t!-i!-r!2w!-r!-s!)t!-s!-v!2w!-v!-w!)t!-w!._!2w!._!.`!)t!.`!.g!2w!.g!.h!)t!.h!.i!2w!.i!.j!2w!.j!.k!)t!.k!.p!2w!.p!.s!)t!.s!.t!2w!.t!/W!)t!/W!/X!2w!/X!/h!)t!/h!/i!2w!/i!/j!2w!/j!0_!)t!0_!0g!2w!0g!0i!)t!0i!0j!2w!0j!0k!2w!0k!0m!)t!0m!1T!2w!1T!1U!)t!1U!1]!2w!1]!1^!)t!1^!1_!2w!1_!1`!2w!1`!1a!)t!1a!1f!2w!1f!1i!)t!1i!1j!2w!1j!2Y!)t!2Y!2Z!2w!2Z!2[!2w!2[!2]!)t!2]!2`!2w!2`!2o!)t!2o!2p!2w!2p!3R!)t!3R!3S!2w!3S!3T!)t!3T!3Z!2w!3Z!3^!)t!3^!3a!2w!3a!3b!)t!3b!3f!2w!3f!3i!)t!3i!3j!2w!3j!3k!2w!3k!3l!)t!3l!3m!2w!3m!3n!)t!3n!3o!2w!3o!3p!2w!3p!3s!)t!3s!3t!2w!3t!3u!2w!3u!3x!)t!3x!3{!2w!3{!4O!)t!4O!4[!2w!4[!4r!)t!4r!4s!2w!4s!5y!)t!5y!6R!2w!6R!6S!)t!6S!6V!2w!6V!6W!)t!6W!6o!2w!6o!6p!)t!6p!6z!2w!6z!6{!)t!6{!7Q!2w!7Q!7T!)t!7T!7U!2w!7U!7p!)t!7p!7q!2w!7q!7r!2w!7r!7x!)t!7x!7y!2w!7y!7z!2w!7z!8o!)t!8o!8w!2w!8w!8x!)t!8x!8{!2w!8{!8|!)t!8|!9e!2w!9e!9f!)t!9f!9p!2w!9p!9q!)t!9q!9v!2w!9v!9y!)t!9y!9z!2w!9z!:l!)t!:l!:m!2w!:m!:n!)t!:n!:o!2w!:o!:p!2w!:p!;P!)t!;P!;Q!2w!;Q!;R!2w!;R!;e!)t!;e!;m!2w!;m!;n!)t!;n!;q!2w!;q!;r!)t!;r!<m!2w!<m!<o!)t!<o!<p!2w!<p!=Q!)t!=Q!=R!2w!=R!=d!)t!=d!=e!2w!=e!=f!2w!=f!>O!)t!>O!>U!2w!>U!>Z!)t!>Z!>m!2w!>m!>p!)t!>p!?Y!2w!?Y!?Z!)t!?Z!?d!2w!?d!?e!)t!?e!?f!2w!?f!?h!)t!?h!?o!2w!?o!@{!)t!@{!A}!2w!A}!BO!)t!BO!BP!2w!BP!BQ!2w!BQ!B^!)t!B^!Be!2w!Be!Cq!)t!Cq!Cr!2w!Cr!Cs!2w!Cs!Ct!)t!Ct!Cu!2w!Cu!Cw!)t!Cw!Cx!2w!Cx!Cy!2w!Cy!Cz!)t!Cz!C{!2w!C{!C}!)t!C}!DO!2w!DO!DU!)t!DU!DY!2w!DY!DZ!)t!DZ!Db!2w!Db!Dc!)t!Dc!Df!2w!Df!Dg!)t!Dg!Dh!2w!Dh!Di!)t!Di!Dj!2w!Dj!Dl!)t!Dl!Dm!2w!Dm!Dn!2w!Dn!Do!)t!Do!Ds!2w!Ds!Dt!)t!Dt!Du!2w!Du!Dv!2w!Dv!EP!)t!EP!EQ!2w!EQ!ES!)t!ES!EX!2w!EX!EY!)t!EY!EZ!2w!EZ!Ep!)t!Ep!Et!2w!Et!Ff!)t!Ff!Fg!2w!Fg!Gx!)t!Gx!HQ!2w!HQ!HR!)t!HR!Hw!2w!Hw!Id!)t!Id!Ii!2w!Ii!LQ!)t!LQ!L}!2w!L}!Mc!)t!Mc!Md!2w!Md!Mt!)t!Mt!Mz!2w!Mz!NO!)t!NO!NS!2w!NS!NV!)t!NV!NW!2w!NW!NZ!)t!NZ!N[!2w!N[!N]!2w!N]!Nd!)t!Nd!Ng!2w!Ng!Nk!)t!Nk!Nx!2w!Nx# U!)t# U# V!2w# V# h!)t# h#!`!2w#!`#!a!)t#!a#!b!2w#!b#!g!)t#!g#!h!2w#!h#!j!)t#!j##g!2w##g##h!)t##h#*s!2w#*s#*t!)t#*t#*x!2w#*x#*z!)t#*z#+R!2w#+R#+S!)t#+S#+T!2w#+T#+U!)t#+U#+Y!2w#+Y#+[!)t#+[#,V!2w#,V#,W!)t#,W#,[!2w#,[#,^!)t#,^#-P!2w#-P#-Q!)t#-Q#-U!2w#-U#-W!)t#-W#-_!2w#-_#-`!)t#-`#-a!2w#-a#-b!)t#-b#-f!2w#-f#-h!)t#-h#-w!2w#-w#-x!)t#-x#/T!2w#/T#/U!)t#/U#/Y!2w#/Y#/[!)t#/[#0q!2w#0q#1h!)t#1h#1x!2w#1x#2Y!)t#2Y#4R!2w#4R#4_!)t#4_#Au!2w#Au#Aw!)t#Aw#BY!2w#BY#BZ!)t#BZ#Bu!2w#Bu#Bz!)t#Bz#Di!2w#Di#EO!)t#EO#E]!2w#E]#E^!)t#E^#Eb!2w#Eb#Ep!)t#Ep#FS!2w#FS#Fb!)t#Fb#Ft!2w#Ft#GS!)t#GS#Ga!2w#Ga#Gb!)t#Gb#Ge!2w#Ge#Gt!)t#Gt#Hz!2w#Hz#Io!)t#Io#Ip!2w#Ip#It!)t#It#Iu!2w#Iu#K[!)t#K[#MW!2w#MW#M`!)t#M`#NZ!2w#NZ#N[!)t#N[#N]!2w#N]#Nb!)t#Nb$ z!2w$ z$!U!)t$!U$!s!2w$!s$#x!)t$#x$$h!2w$$h$$j!)t$$j$$o!2w$$o$$z!)t$$z$%x!2w$%x$&_!)t$&_$&f!2w$&f$'p!)t$'p$(X!2w$(X$(b!)t$(b$)i!2w$)i$+_!)t$+_$+`!2w$+`$-a!)t$-a$.b!2w$.b$.s!)t$.s$.z!2w$.z$0T!)t$0T$0s!2w$0s$1Q!)t$1Q$1R!2w$1R$1S!2w$1S$1^!)t$1^$2[!2w$2[$2v!)t$2v$3l!2w$3l$4g!)t$4g$4j!2w$4j$4t!)t$4t$5j!2w$5j$7y!)t$7y$7}!2w$7}$8O!)t$8O$8S!2w$8S$8V!)t$8V$8W!2w$8W$8X!2w$8X$8b!)t$8b$<j!2w$<j$=|!)t$=|$DO!2w$DO$DQ!)t$DQ$DW!2w$DW$DY!)t$DY$EQ!2w$EQ$ES!)t$ES$EY!2w$EY$E[!)t$E[$Ed!2w$Ed$Ee!)t$Ee$Ef!2w$Ef$Eg!)t$Eg$Eh!2w$Eh$Ei!)t$Ei$Ej!2w$Ej$Ek!)t$Ek$F[!2w$F[$F^!)t$F^$Ge!2w$Ge$Gf!)t$Gf$Gm!2w$Gm$Gn!)t$Gn$Go!2w$Go$Gr!)t$Gr$Gu!2w$Gu$Gv!)t$Gv$G}!2w$G}$HQ!)t$HQ$HU!2w$HU$HW!)t$HW$H^!2w$H^$Hb!)t$Hb$Ho!2w$Ho$Ht!)t$Ht$Hw!2w$Hw$Hx!)t$Hx$IP!2w$IP$Ki!)t$Ki$Kj!2w$Kj$Kw!)t$Kw$Kx!2w$Kx$LY!)t$LY$Lg!2w$Lg$Np!)t$Np$Nq!2w$Nq$Nu!)t$Nu$Nv!2w$Nv$Nx!)t$Nx% S!2w% S% T!)t% T% U!2w% U% X!)t% X% ^!2w% ^% d!)t% d% e!2w% e% f!)t% f% g!2w% g% h!)t% h% i!2w% i% j!)t% j% n!2w% n% o!)t% o% z!2w% z% |!)t% |%!Q!2w%!Q%!V!)t%!V%![!2w%![%!`!)t%!`%!a!2w%!a%#g!)t%#g%#h!2w%#h%#i!2w%#i&/x!)t&/x&0y!2w&0y&0z!)t&0z&1{!2w&1{&1|!)t&1|&4w!2w&4w&4}!)t&4}&5R!2w&5R&5U!)t&5U&5V!2w&5V&5W!2w&5W&5d!)t&5d&6[!2w&6[&6]!)t&6]&6^!2w&6^&6c!)t&6c&6d!2w&6d&6f!)t&6f&7p!2w&7p&7w!)t&7w&7x!2w&7x&8Y!)t&8Y&8q!2w&8q&8z!)t&8z&9R!2w&9R&9S!)t&9S&9Z!2w&9Z&9[!)t&9[&9c!2w&9c&9d!)t&9d&9k!2w&9k&9l!)t&9l&9s!2w&9s&9t!)t&9t&9{!2w&9{&9|!)t&9|&:T!2w&:T&:U!)t&:U&:]!2w&:]&<P!)t&<P&<Q!2w&<Q&FZ!)t&FZ&F[!2w&F[&F]!2w&F]&GX!)t&GX&G^!2w&G^&Gc!)t&Gc&Gd!2w&Gd&Ge!2w&Ge&Gi!)t&Gi&Ic!2w&Ic&Ii!)t&Ii&Il!2w&Il&Im!)t&Im&Kk!2w&Kk&Kl!)t&Kl&Kp!2w&Kp&Ku!)t&Ku&Lp!2w&Lp&Ls!)t&Ls&Nu!2w&Nu' W!)t' W' s!2w' s'!z!)t'!z'#[!2w'#['.b!)t'.b*3f!2w*3f*5S!)t*5S40_!2w40_41d!)t41d4Js!2w4Js4LY!)t4LY4MY!2w4MY4M[!)t4M[5%T!2w5%T5%W!)t5%W5%h!2w5%h5%r!)t5%r5%s!2w5%s5%t!2w5%t5&Y!)t5&Y5'Z!2w5'Z5'k!)t5'k5(U!2w5(U5(^!)t5(^5)v!2w5)v5*y!)t5*y5+S!2w5+S5+U!)t5+U5-a!2w5-a5-c!)t5-c5-g!2w5-g5-h!)t5-h5-l!2w5-l5-x!)t5-x5.T!2w5.T5/t!)t5/t50O!2w50O50P!)t50P50S!2w50S50T!)t50T50X!2w50X50Y!)t50Y50q!2w50q51`!)t51`52f!2w52f52t!)t52t53x!2w53x55Y!)t55Y55`!2w55`55c!)t55c55d!2w55d55r!)t55r56`!2w56`56j!)t56j57R!2w57R57l!)t57l58Z!2w58Z58b!)t58b59c!2w59c5:P!)t5:P5:Q!2w5:Q5;S!)t5;S5;}!2w5;}5<f!)t5<f5<i!2w5<i5<j!)t5<j5<r!2w5<r5=W!)t5=W5=o!2w5=o5=r!)t5=r5=s!2w5=s5=x!)t5=x5>z!2w5>z5>{!)t5>{5>|!2w5>|5?P!)t5?P5?Q!2w5?Q5?R!2w5?R5?T!)t5?T5?Y!2w5?Y5?[!)t5?[5?]!2w5?]5?^!)t5?^5?_!2w5?_5?w!)t5?w5?z!2w5?z5?|!)t5?|5@X!2w5@X5@`!)t5@`5@c!2w5@c5@o!)t5@o5@u!2w5@u5@w!)t5@w5@}!2w5@}5AP!)t5AP5AV!2w5AV5A`!)t5A`5Ag!2w5Ag5Ah!)t5Ah5Ao!2w5Ao5Dv!)t5Dv5Ek!2w5Ek5FY!)t5FY;%S!2w;%S;%`!)t;%`;%w!2w;%w;%{!)t;%{;'O!2w;'O;'S!)t;'S;=`!.]<%l?&r!)t?&r?.p!2w?.p?.r!)t?.r?1Q!2w?1Q?1x!)t?1x?2P!2w?2P?2]!)t?2]?2b!2w?2b?2g!)t?2g?2h!2w?2h?2i!)t?2i?2s!2w?2s?2t!)t?2t?3R!2w?3R?3S!)t?3S?3X!2w?3X?3Y!)t?3Y?3Z!2w?3Z?3[!)t?3[?3]!2w?3]?3^!2w?3^?3_!)t?3_?3`!2w?3`?3a!2w?3a?3b!)t?3b?5r!2w?5r?6e!)t?6e?>`!2w?>`?>r!)t?>r?@U!2w?@U?@W!)t?@W?A`!2w?A`?BY!)t?BY?Bf!2w?Bf?EO!)t?EO?ET!2w?ET?EU!)t?EU?HR!2w?HR?Hw!)t?Hw?Ic!2w?Ic?Ii!)t?Ii?JT!2w?JT?J`!)t?J`?L]!2w?L]?L`!)t?L`?Lf!2w?Lf?Lh!)t?Lh?Ln!2w?Ln?Lp!)t?Lp?Lv!2w?Lv?Lx!)t?Lx?L{!2w?L{O!)tZ#9t2g!OWzQmPOq!*jqr#9krs#9kst#9ktu#9kuv#9kvw#9kwx$@]xz!*jz{#9k{|#9k|!O!*j!O!P#9k!P!Q#9k!Q![#9k![!a!*j!a!b#9k!b!c!*j!c!}#9k!}#O!*j#O#P#9k#P#R!*j#R#S#9k#S#T&4y#T#o#9k#o$p!*j$p$q#9k$q${!*j${$|#9k$|%Q!*j%Q%R#9k%R%W!*j%W%o#9k%o%p!*j%p&a#9k&a&b!*j&b0`#9k0`0d!*j0d0p#9k0p1O!*j1O1T#9k1T1[!*j1[1]#9k1]1^!*j1^1_#9k1_4U!*j4U4Z#9k4Z4[!*j4[4]#9k4]4^#9k4^4`!*j4`4d#9k4d4l!*j4l4m#9k4m4n!*j4n4q#9k4q4r!*j4r4s#9k4s4t!*j4t5Y#9k5Y5Z!*j5Z7Q#9k7Q7R!*j7R:S#9k:S:[!*j:[=p#9k=p=y!*j=y>q#9k>q>s!*j>s>t#9k>t>{!*j>{?t#9k?tA`!*jA`A{#9kA{BQ!*jBQBT#9kBTCS!*jCSDP#9kDPDt!*jDtDu#9kDuDv#9kDvDw!*jDwGO#9kGOGP!*jGPGQ#9kGQGa!*jGaGb#9kGbGc#9kGcGj!*jGjGk#9kGkGl#9kGlGv!*jGvGy#9kGyG{!*jG{G|#9kG|H^!*jH^H_#9kH_H`!*jH`IO#9kIOIm!*jImKj#9kKjKu!*jKuKv#9kKvL`!*jL`MR#9kMRM[!*jM[M]#9kM]M^#9kM^Mb!*jMbMc#9kMcMh!*jMhNO#9kNONS!*jNSNT#9kNTN^!*jN^N_#9kN_Nb!*jNbNc#9kNcNz!*jNz! e#9k! e!#O!*j!#O!#P#9k!#P!#Q!*j!#Q!#]#9k!#]!%W!*j!%W!&`#9k!&`!&c!*j!&c!&d#9k!&d!&v!*j!&v!&w#9k!&w!'O!*j!'O!'Y#9k!'Y!'i!*j!'i!'p#9k!'p!'q!*j!'q!'x#9k!'x!'}!*j!'}!(V#9k!(V!(X!*j!(X!(Y#9k!(Y!(Z#9k!(Z!(]!*j!(]!(s#9k!(s!(t!*j!(t!({#9k!({!(|!*j!(|!(}#9k!(}!)Q!*j!)Q!)U#9k!)U!)X!*j!)X!)Y#9k!)Y!)j!*j!)j!)k#9k!)k!)x!*j!)x!)y#9k!)y!)z#9k!)z!){!*j!){!*O#9k!*O!*^!*j!*^!*_#9k!*_!*`#9k!*`!*s!*j!*s!*y#9k!*y!*}!*j!*}!+O#9k!+O!+P#9k!+P!+R!*j!+R!+i#9k!+i!+j!*j!+j!+q#9k!+q!+r!*j!+r!+s#9k!+s!+t#9k!+t!+u!*j!+u!+v#9k!+v!+w#9k!+w!+x!*j!+x!+y#9k!+y!+z#9k!+z!,k!*j!,k!,o#9k!,o!,p!*j!,p!,q#9k!,q!-U!*j!-U!-X#9k!-X!-i!*j!-i!-r#9k!-r!-s!*j!-s!-v#9k!-v!-w!*j!-w!._#9k!._!.`!*j!.`!.g#9k!.g!.h!*j!.h!.i#9k!.i!.j#9k!.j!.k!*j!.k!.p#9k!.p!.s!*j!.s!.t#9k!.t!/W!*j!/W!/X#9k!/X!/h!*j!/h!/i#9k!/i!/j#9k!/j!0_!*j!0_!0g#9k!0g!0i!*j!0i!0j#9k!0j!0k#9k!0k!0m!*j!0m!1T#9k!1T!1U!*j!1U!1]#9k!1]!1^!*j!1^!1_#9k!1_!1`#9k!1`!1a!*j!1a!1f#9k!1f!1i!*j!1i!1j#9k!1j!2Y!*j!2Y!2Z#9k!2Z!2[#9k!2[!2]!*j!2]!2`#9k!2`!2o!*j!2o!2p#9k!2p!3R!*j!3R!3S#9k!3S!3T!*j!3T!3Z#9k!3Z!3^!*j!3^!3a#9k!3a!3b!*j!3b!3f#9k!3f!3i!*j!3i!3j#9k!3j!3k#9k!3k!3l!*j!3l!3m#9k!3m!3n!*j!3n!3o#9k!3o!3p#9k!3p!3s!*j!3s!3t#9k!3t!3u#9k!3u!3x!*j!3x!3{#9k!3{!4O!*j!4O!4[#9k!4[!4r!*j!4r!4s#9k!4s!5y!*j!5y!6R#9k!6R!6S!*j!6S!6V#9k!6V!6W!*j!6W!6o#9k!6o!6p!*j!6p!6z#9k!6z!6{!*j!6{!7Q#9k!7Q!7T!*j!7T!7U#9k!7U!7p!*j!7p!7q#9k!7q!7r#9k!7r!7x!*j!7x!7y#9k!7y!7z#9k!7z!8o!*j!8o!8w#9k!8w!8x!*j!8x!8{#9k!8{!8|!*j!8|!9e#9k!9e!9f!*j!9f!9p#9k!9p!9q!*j!9q!9v#9k!9v!9y!*j!9y!9z#9k!9z!:l!*j!:l!:m#9k!:m!:n!*j!:n!:o#9k!:o!:p#9k!:p!;P!*j!;P!;Q#9k!;Q!;R#9k!;R!;e!*j!;e!;m#9k!;m!;n!*j!;n!;q#9k!;q!;r!*j!;r!<m#9k!<m!<o!*j!<o!<p#9k!<p!=Q!*j!=Q!=R#9k!=R!=d!*j!=d!=e#9k!=e!=f#9k!=f!>O!*j!>O!>U#9k!>U!>Z!*j!>Z!>m#9k!>m!>p!*j!>p!?Y#9k!?Y!?Z!*j!?Z!?d#9k!?d!?e!*j!?e!?f#9k!?f!?h!*j!?h!?o#9k!?o!@{!*j!@{!A}#9k!A}!BO!*j!BO!BP#9k!BP!BQ#9k!BQ!B^!*j!B^!Be#9k!Be!Cq!*j!Cq!Cr#9k!Cr!Cs#9k!Cs!Ct!*j!Ct!Cu#9k!Cu!Cw!*j!Cw!Cx#9k!Cx!Cy#9k!Cy!Cz!*j!Cz!C{#9k!C{!C}!*j!C}!DO#9k!DO!DU!*j!DU!DY#9k!DY!DZ!*j!DZ!Db#9k!Db!Dc!*j!Dc!Df#9k!Df!Dg!*j!Dg!Dh#9k!Dh!Di!*j!Di!Dj#9k!Dj!Dl!*j!Dl!Dm#9k!Dm!Dn#9k!Dn!Do!*j!Do!Ds#9k!Ds!Dt!*j!Dt!Du#9k!Du!Dv#9k!Dv!EP!*j!EP!EQ#9k!EQ!ES!*j!ES!EX#9k!EX!EY!*j!EY!EZ#9k!EZ!Ep!*j!Ep!Et#9k!Et!Ff!*j!Ff!Fg#9k!Fg!Gx!*j!Gx!HQ#9k!HQ!HR!*j!HR!Hw#9k!Hw!Id!*j!Id!Ii#9k!Ii!LQ!*j!LQ!L}#9k!L}!Mc!*j!Mc!Md#9k!Md!Mt!*j!Mt!Mz#9k!Mz!NO!*j!NO!NS#9k!NS!NV!*j!NV!NW#9k!NW!NZ!*j!NZ!N[#9k!N[!N]#9k!N]!Nd!*j!Nd!Ng#9k!Ng!Nk!*j!Nk!Nx#9k!Nx# U!*j# U# V#9k# V# h!*j# h#!`#9k#!`#!a!*j#!a#!b#9k#!b#!g!*j#!g#!h#9k#!h#!j!*j#!j##g#9k##g##h!*j##h#*s#9k#*s#*t!*j#*t#*x#9k#*x#*z!*j#*z#+R#9k#+R#+S!*j#+S#+T#9k#+T#+U!*j#+U#+Y#9k#+Y#+[!*j#+[#,V#9k#,V#,W!*j#,W#,[#9k#,[#,^!*j#,^#-P#9k#-P#-Q!*j#-Q#-U#9k#-U#-W!*j#-W#-_#9k#-_#-`!*j#-`#-a#9k#-a#-b!*j#-b#-f#9k#-f#-h!*j#-h#-w#9k#-w#-x!*j#-x#/T#9k#/T#/U!*j#/U#/Y#9k#/Y#/[!*j#/[#0q#9k#0q#1h!*j#1h#1x#9k#1x#2Y!*j#2Y#4R#9k#4R#4_!*j#4_#Au#9k#Au#Aw!*j#Aw#BY#9k#BY#BZ!*j#BZ#Bu#9k#Bu#Bz!*j#Bz#Di#9k#Di#EO!*j#EO#E]#9k#E]#E^!*j#E^#Eb#9k#Eb#Ep!*j#Ep#FS#9k#FS#Fb!*j#Fb#Ft#9k#Ft#GS!*j#GS#Ga#9k#Ga#Gb!*j#Gb#Ge#9k#Ge#Gt!*j#Gt#Hz#9k#Hz#Io!*j#Io#Ip#9k#Ip#It!*j#It#Iu#9k#Iu#K[!*j#K[#MW#9k#MW#M`!*j#M`#NZ#9k#NZ#N[!*j#N[#N]#9k#N]#Nb!*j#Nb$ z#9k$ z$!U!*j$!U$!s#9k$!s$#x!*j$#x$$h#9k$$h$$j!*j$$j$$o#9k$$o$$z!*j$$z$%x#9k$%x$&_!*j$&_$&f#9k$&f$'p!*j$'p$(X#9k$(X$(b!*j$(b$)i#9k$)i$+_!*j$+_$+`#9k$+`$-a!*j$-a$.b#9k$.b$.s!*j$.s$.z#9k$.z$0T!*j$0T$0s#9k$0s$1Q!*j$1Q$1R#9k$1R$1S#9k$1S$1^!*j$1^$2[#9k$2[$2v!*j$2v$3l#9k$3l$4g!*j$4g$4j#9k$4j$4t!*j$4t$5j#9k$5j$7y!*j$7y$7}#9k$7}$8O!*j$8O$8S#9k$8S$8V!*j$8V$8W#9k$8W$8X#9k$8X$8b!*j$8b$<j#9k$<j$=|!*j$=|$DO#9k$DO$DQ!*j$DQ$DW#9k$DW$DY!*j$DY$EQ#9k$EQ$ES!*j$ES$EY#9k$EY$E[!*j$E[$Ed#9k$Ed$Ee!*j$Ee$Ef#9k$Ef$Eg!*j$Eg$Eh#9k$Eh$Ei!*j$Ei$Ej#9k$Ej$Ek!*j$Ek$F[#9k$F[$F^!*j$F^$Ge#9k$Ge$Gf!*j$Gf$Gm#9k$Gm$Gn!*j$Gn$Go#9k$Go$Gr!*j$Gr$Gu#9k$Gu$Gv!*j$Gv$G}#9k$G}$HQ!*j$HQ$HU#9k$HU$HW!*j$HW$H^#9k$H^$Hb!*j$Hb$Ho#9k$Ho$Ht!*j$Ht$Hw#9k$Hw$Hx!*j$Hx$IP#9k$IP$Ki!*j$Ki$Kj#9k$Kj$Kw!*j$Kw$Kx#9k$Kx$LY!*j$LY$Lg#9k$Lg$Np!*j$Np$Nq#9k$Nq$Nu!*j$Nu$Nv#9k$Nv$Nx!*j$Nx% S#9k% S% T!*j% T% U#9k% U% X!*j% X% ^#9k% ^% d!*j% d% e#9k% e% f!*j% f% g#9k% g% h!*j% h% i#9k% i% j!*j% j% n#9k% n% o!*j% o% z#9k% z% |!*j% |%!Q#9k%!Q%!V!*j%!V%![#9k%![%!`!*j%!`%!a#9k%!a%#g!*j%#g%#h#9k%#h%#i#9k%#i&/x!*j&/x&0y#9k&0y&0z!*j&0z&1{#9k&1{&1|!*j&1|&4w#9k&4w&4}!*j&4}&5R#9k&5R&5U!*j&5U&5V#9k&5V&5W#9k&5W&5d!*j&5d&6[#9k&6[&6]!*j&6]&6^#9k&6^&6c!*j&6c&6d#9k&6d&6f!*j&6f&7p#9k&7p&7w!*j&7w&7x#9k&7x&8Y!*j&8Y&8q#9k&8q&8z!*j&8z&9R#9k&9R&9S!*j&9S&9Z#9k&9Z&9[!*j&9[&9c#9k&9c&9d!*j&9d&9k#9k&9k&9l!*j&9l&9s#9k&9s&9t!*j&9t&9{#9k&9{&9|!*j&9|&:T#9k&:T&:U!*j&:U&:]#9k&:]&<P!*j&<P&<Q#9k&<Q&FZ!*j&FZ&F[#9k&F[&F]#9k&F]&GX!*j&GX&G^#9k&G^&Gc!*j&Gc&Gd#9k&Gd&Ge#9k&Ge&Gi!*j&Gi&Ic#9k&Ic&Ii!*j&Ii&Il#9k&Il&Im!*j&Im&Kk#9k&Kk&Kl!*j&Kl&Kp#9k&Kp&Ku!*j&Ku&Lp#9k&Lp&Ls!*j&Ls&Nu#9k&Nu' W!*j' W' s#9k' s'!z!*j'!z'#[#9k'#['.b!*j'.b*3f#9k*3f*5S!*j*5S40_#9k40_41d!*j41d4Js#9k4Js4LY!*j4LY4MY#9k4MY4M[!*j4M[5%T#9k5%T5%W!*j5%W5%h#9k5%h5%r!*j5%r5%s#9k5%s5%t#9k5%t5&Y!*j5&Y5'Z#9k5'Z5'k!*j5'k5(U#9k5(U5(^!*j5(^5)v#9k5)v5*y!*j5*y5+S#9k5+S5+U!*j5+U5-a#9k5-a5-c!*j5-c5-g#9k5-g5-h!*j5-h5-l#9k5-l5-x!*j5-x5.T#9k5.T5/t!*j5/t50O#9k50O50P!*j50P50S#9k50S50T!*j50T50X#9k50X50Y!*j50Y50q#9k50q51`!*j51`52f#9k52f52t!*j52t53x#9k53x55Y!*j55Y55`#9k55`55c!*j55c55d#9k55d55r!*j55r56`#9k56`56j!*j56j57R#9k57R57l!*j57l58Z#9k58Z58b!*j58b59c#9k59c5:P!*j5:P5:Q#9k5:Q5;S!*j5;S5;}#9k5;}5<f!*j5<f5<i#9k5<i5<j!*j5<j5<r#9k5<r5=W!*j5=W5=o#9k5=o5=r!*j5=r5=s#9k5=s5=x!*j5=x5>z#9k5>z5>{!*j5>{5>|#9k5>|5?P!*j5?P5?Q#9k5?Q5?R#9k5?R5?T!*j5?T5?Y#9k5?Y5?[!*j5?[5?]#9k5?]5?^!*j5?^5?_#9k5?_5?w!*j5?w5?z#9k5?z5?|!*j5?|5@X#9k5@X5@`!*j5@`5@c#9k5@c5@o!*j5@o5@u#9k5@u5@w!*j5@w5@}#9k5@}5AP!*j5AP5AV#9k5AV5A`!*j5A`5Ag#9k5Ag5Ah!*j5Ah5Ao#9k5Ao5Dv!*j5Dv5Ek#9k5Ek5FY!*j5FY;%S#9k;%S;%`!*j;%`;%w#9k;%w;%{!*j;%{;'O#9k;'O;'S!*j;'S;=`!,W<%l?&r!*j?&r?.p#9k?.p?.r!*j?.r?1Q#9k?1Q?1x!*j?1x?2P#9k?2P?2]!*j?2]?2b#9k?2b?2g!*j?2g?2h#9k?2h?2i!*j?2i?2s#9k?2s?2t!*j?2t?3R#9k?3R?3S!*j?3S?3X#9k?3X?3Y!*j?3Y?3Z#9k?3Z?3[!*j?3[?3]#9k?3]?3^#9k?3^?3_!*j?3_?3`#9k?3`?3a#9k?3a?3b!*j?3b?5r#9k?5r?6e!*j?6e?>`#9k?>`?>r!*j?>r?@U#9k?@U?@W!*j?@W?A`#9k?A`?BY!*j?BY?Bf#9k?Bf?EO!*j?EO?ET#9k?ET?EU!*j?EU?HR#9k?HR?Hw!*j?Hw?Ic#9k?Ic?Ii!*j?Ii?JT#9k?JT?J`!*j?J`?L]#9k?L]?L`!*j?L`?Lf#9k?Lf?Lh!*j?Lh?Ln#9k?Ln?Lp!*j?Lp?Lv#9k?Lv?Lx!*j?Lx?L{#9k?L{O!*jX$@d2g!OWmPOq!+Wqr$@]rs$@]st$@]tu$@]uv$@]vw$@]wx$@]xz!+Wz{$@]{|$@]|!O!+W!O!P$@]!P!Q$@]!Q![$@]![!a!+W!a!b$@]!b!c!+W!c!}$@]!}#O!+W#O#P$@]#P#R!+W#R#S$@]#S#T%F{#T#o$@]#o$p!+W$p$q$@]$q${!+W${$|$@]$|%Q!+W%Q%R$@]%R%W!+W%W%o$@]%o%p!+W%p&a$@]&a&b!+W&b0`$@]0`0d!+W0d0p$@]0p1O!+W1O1T$@]1T1[!+W1[1]$@]1]1^!+W1^1_$@]1_4U!+W4U4Z$@]4Z4[!+W4[4]$@]4]4^$@]4^4`!+W4`4d$@]4d4l!+W4l4m$@]4m4n!+W4n4q$@]4q4r!+W4r4s$@]4s4t!+W4t5Y$@]5Y5Z!+W5Z7Q$@]7Q7R!+W7R:S$@]:S:[!+W:[=p$@]=p=y!+W=y>q$@]>q>s!+W>s>t$@]>t>{!+W>{?t$@]?tA`!+WA`A{$@]A{BQ!+WBQBT$@]BTCS!+WCSDP$@]DPDt!+WDtDu$@]DuDv$@]DvDw!+WDwGO$@]GOGP!+WGPGQ$@]GQGa!+WGaGb$@]GbGc$@]GcGj!+WGjGk$@]GkGl$@]GlGv!+WGvGy$@]GyG{!+WG{G|$@]G|H^!+WH^H_$@]H_H`!+WH`IO$@]IOIm!+WImKj$@]KjKu!+WKuKv$@]KvL`!+WL`MR$@]MRM[!+WM[M]$@]M]M^$@]M^Mb!+WMbMc$@]McMh!+WMhNO$@]NONS!+WNSNT$@]NTN^!+WN^N_$@]N_Nb!+WNbNc$@]NcNz!+WNz! e$@]! e!#O!+W!#O!#P$@]!#P!#Q!+W!#Q!#]$@]!#]!%W!+W!%W!&`$@]!&`!&c!+W!&c!&d$@]!&d!&v!+W!&v!&w$@]!&w!'O!+W!'O!'Y$@]!'Y!'i!+W!'i!'p$@]!'p!'q!+W!'q!'x$@]!'x!'}!+W!'}!(V$@]!(V!(X!+W!(X!(Y$@]!(Y!(Z$@]!(Z!(]!+W!(]!(s$@]!(s!(t!+W!(t!({$@]!({!(|!+W!(|!(}$@]!(}!)Q!+W!)Q!)U$@]!)U!)X!+W!)X!)Y$@]!)Y!)j!+W!)j!)k$@]!)k!)x!+W!)x!)y$@]!)y!)z$@]!)z!){!+W!){!*O$@]!*O!*^!+W!*^!*_$@]!*_!*`$@]!*`!*s!+W!*s!*y$@]!*y!*}!+W!*}!+O$@]!+O!+P$@]!+P!+R!+W!+R!+i$@]!+i!+j!+W!+j!+q$@]!+q!+r!+W!+r!+s$@]!+s!+t$@]!+t!+u!+W!+u!+v$@]!+v!+w$@]!+w!+x!+W!+x!+y$@]!+y!+z$@]!+z!,k!+W!,k!,o$@]!,o!,p!+W!,p!,q$@]!,q!-U!+W!-U!-X$@]!-X!-i!+W!-i!-r$@]!-r!-s!+W!-s!-v$@]!-v!-w!+W!-w!._$@]!._!.`!+W!.`!.g$@]!.g!.h!+W!.h!.i$@]!.i!.j$@]!.j!.k!+W!.k!.p$@]!.p!.s!+W!.s!.t$@]!.t!/W!+W!/W!/X$@]!/X!/h!+W!/h!/i$@]!/i!/j$@]!/j!0_!+W!0_!0g$@]!0g!0i!+W!0i!0j$@]!0j!0k$@]!0k!0m!+W!0m!1T$@]!1T!1U!+W!1U!1]$@]!1]!1^!+W!1^!1_$@]!1_!1`$@]!1`!1a!+W!1a!1f$@]!1f!1i!+W!1i!1j$@]!1j!2Y!+W!2Y!2Z$@]!2Z!2[$@]!2[!2]!+W!2]!2`$@]!2`!2o!+W!2o!2p$@]!2p!3R!+W!3R!3S$@]!3S!3T!+W!3T!3Z$@]!3Z!3^!+W!3^!3a$@]!3a!3b!+W!3b!3f$@]!3f!3i!+W!3i!3j$@]!3j!3k$@]!3k!3l!+W!3l!3m$@]!3m!3n!+W!3n!3o$@]!3o!3p$@]!3p!3s!+W!3s!3t$@]!3t!3u$@]!3u!3x!+W!3x!3{$@]!3{!4O!+W!4O!4[$@]!4[!4r!+W!4r!4s$@]!4s!5y!+W!5y!6R$@]!6R!6S!+W!6S!6V$@]!6V!6W!+W!6W!6o$@]!6o!6p!+W!6p!6z$@]!6z!6{!+W!6{!7Q$@]!7Q!7T!+W!7T!7U$@]!7U!7p!+W!7p!7q$@]!7q!7r$@]!7r!7x!+W!7x!7y$@]!7y!7z$@]!7z!8o!+W!8o!8w$@]!8w!8x!+W!8x!8{$@]!8{!8|!+W!8|!9e$@]!9e!9f!+W!9f!9p$@]!9p!9q!+W!9q!9v$@]!9v!9y!+W!9y!9z$@]!9z!:l!+W!:l!:m$@]!:m!:n!+W!:n!:o$@]!:o!:p$@]!:p!;P!+W!;P!;Q$@]!;Q!;R$@]!;R!;e!+W!;e!;m$@]!;m!;n!+W!;n!;q$@]!;q!;r!+W!;r!<m$@]!<m!<o!+W!<o!<p$@]!<p!=Q!+W!=Q!=R$@]!=R!=d!+W!=d!=e$@]!=e!=f$@]!=f!>O!+W!>O!>U$@]!>U!>Z!+W!>Z!>m$@]!>m!>p!+W!>p!?Y$@]!?Y!?Z!+W!?Z!?d$@]!?d!?e!+W!?e!?f$@]!?f!?h!+W!?h!?o$@]!?o!@{!+W!@{!A}$@]!A}!BO!+W!BO!BP$@]!BP!BQ$@]!BQ!B^!+W!B^!Be$@]!Be!Cq!+W!Cq!Cr$@]!Cr!Cs$@]!Cs!Ct!+W!Ct!Cu$@]!Cu!Cw!+W!Cw!Cx$@]!Cx!Cy$@]!Cy!Cz!+W!Cz!C{$@]!C{!C}!+W!C}!DO$@]!DO!DU!+W!DU!DY$@]!DY!DZ!+W!DZ!Db$@]!Db!Dc!+W!Dc!Df$@]!Df!Dg!+W!Dg!Dh$@]!Dh!Di!+W!Di!Dj$@]!Dj!Dl!+W!Dl!Dm$@]!Dm!Dn$@]!Dn!Do!+W!Do!Ds$@]!Ds!Dt!+W!Dt!Du$@]!Du!Dv$@]!Dv!EP!+W!EP!EQ$@]!EQ!ES!+W!ES!EX$@]!EX!EY!+W!EY!EZ$@]!EZ!Ep!+W!Ep!Et$@]!Et!Ff!+W!Ff!Fg$@]!Fg!Gx!+W!Gx!HQ$@]!HQ!HR!+W!HR!Hw$@]!Hw!Id!+W!Id!Ii$@]!Ii!LQ!+W!LQ!L}$@]!L}!Mc!+W!Mc!Md$@]!Md!Mt!+W!Mt!Mz$@]!Mz!NO!+W!NO!NS$@]!NS!NV!+W!NV!NW$@]!NW!NZ!+W!NZ!N[$@]!N[!N]$@]!N]!Nd!+W!Nd!Ng$@]!Ng!Nk!+W!Nk!Nx$@]!Nx# U!+W# U# V$@]# V# h!+W# h#!`$@]#!`#!a!+W#!a#!b$@]#!b#!g!+W#!g#!h$@]#!h#!j!+W#!j##g$@]##g##h!+W##h#*s$@]#*s#*t!+W#*t#*x$@]#*x#*z!+W#*z#+R$@]#+R#+S!+W#+S#+T$@]#+T#+U!+W#+U#+Y$@]#+Y#+[!+W#+[#,V$@]#,V#,W!+W#,W#,[$@]#,[#,^!+W#,^#-P$@]#-P#-Q!+W#-Q#-U$@]#-U#-W!+W#-W#-_$@]#-_#-`!+W#-`#-a$@]#-a#-b!+W#-b#-f$@]#-f#-h!+W#-h#-w$@]#-w#-x!+W#-x#/T$@]#/T#/U!+W#/U#/Y$@]#/Y#/[!+W#/[#0q$@]#0q#1h!+W#1h#1x$@]#1x#2Y!+W#2Y#4R$@]#4R#4_!+W#4_#Au$@]#Au#Aw!+W#Aw#BY$@]#BY#BZ!+W#BZ#Bu$@]#Bu#Bz!+W#Bz#Di$@]#Di#EO!+W#EO#E]$@]#E]#E^!+W#E^#Eb$@]#Eb#Ep!+W#Ep#FS$@]#FS#Fb!+W#Fb#Ft$@]#Ft#GS!+W#GS#Ga$@]#Ga#Gb!+W#Gb#Ge$@]#Ge#Gt!+W#Gt#Hz$@]#Hz#Io!+W#Io#Ip$@]#Ip#It!+W#It#Iu$@]#Iu#K[!+W#K[#MW$@]#MW#M`!+W#M`#NZ$@]#NZ#N[!+W#N[#N]$@]#N]#Nb!+W#Nb$ z$@]$ z$!U!+W$!U$!s$@]$!s$#x!+W$#x$$h$@]$$h$$j!+W$$j$$o$@]$$o$$z!+W$$z$%x$@]$%x$&_!+W$&_$&f$@]$&f$'p!+W$'p$(X$@]$(X$(b!+W$(b$)i$@]$)i$+_!+W$+_$+`$@]$+`$-a!+W$-a$.b$@]$.b$.s!+W$.s$.z$@]$.z$0T!+W$0T$0s$@]$0s$1Q!+W$1Q$1R$@]$1R$1S$@]$1S$1^!+W$1^$2[$@]$2[$2v!+W$2v$3l$@]$3l$4g!+W$4g$4j$@]$4j$4t!+W$4t$5j$@]$5j$7y!+W$7y$7}$@]$7}$8O!+W$8O$8S$@]$8S$8V!+W$8V$8W$@]$8W$8X$@]$8X$8b!+W$8b$<j$@]$<j$=|!+W$=|$DO$@]$DO$DQ!+W$DQ$DW$@]$DW$DY!+W$DY$EQ$@]$EQ$ES!+W$ES$EY$@]$EY$E[!+W$E[$Ed$@]$Ed$Ee!+W$Ee$Ef$@]$Ef$Eg!+W$Eg$Eh$@]$Eh$Ei!+W$Ei$Ej$@]$Ej$Ek!+W$Ek$F[$@]$F[$F^!+W$F^$Ge$@]$Ge$Gf!+W$Gf$Gm$@]$Gm$Gn!+W$Gn$Go$@]$Go$Gr!+W$Gr$Gu$@]$Gu$Gv!+W$Gv$G}$@]$G}$HQ!+W$HQ$HU$@]$HU$HW!+W$HW$H^$@]$H^$Hb!+W$Hb$Ho$@]$Ho$Ht!+W$Ht$Hw$@]$Hw$Hx!+W$Hx$IP$@]$IP$Ki!+W$Ki$Kj$@]$Kj$Kw!+W$Kw$Kx$@]$Kx$LY!+W$LY$Lg$@]$Lg$Np!+W$Np$Nq$@]$Nq$Nu!+W$Nu$Nv$@]$Nv$Nx!+W$Nx% S$@]% S% T!+W% T% U$@]% U% X!+W% X% ^$@]% ^% d!+W% d% e$@]% e% f!+W% f% g$@]% g% h!+W% h% i$@]% i% j!+W% j% n$@]% n% o!+W% o% z$@]% z% |!+W% |%!Q$@]%!Q%!V!+W%!V%![$@]%![%!`!+W%!`%!a$@]%!a%#g!+W%#g%#h$@]%#h%#i$@]%#i&/x!+W&/x&0y$@]&0y&0z!+W&0z&1{$@]&1{&1|!+W&1|&4w$@]&4w&4}!+W&4}&5R$@]&5R&5U!+W&5U&5V$@]&5V&5W$@]&5W&5d!+W&5d&6[$@]&6[&6]!+W&6]&6^$@]&6^&6c!+W&6c&6d$@]&6d&6f!+W&6f&7p$@]&7p&7w!+W&7w&7x$@]&7x&8Y!+W&8Y&8q$@]&8q&8z!+W&8z&9R$@]&9R&9S!+W&9S&9Z$@]&9Z&9[!+W&9[&9c$@]&9c&9d!+W&9d&9k$@]&9k&9l!+W&9l&9s$@]&9s&9t!+W&9t&9{$@]&9{&9|!+W&9|&:T$@]&:T&:U!+W&:U&:]$@]&:]&<P!+W&<P&<Q$@]&<Q&FZ!+W&FZ&F[$@]&F[&F]$@]&F]&GX!+W&GX&G^$@]&G^&Gc!+W&Gc&Gd$@]&Gd&Ge$@]&Ge&Gi!+W&Gi&Ic$@]&Ic&Ii!+W&Ii&Il$@]&Il&Im!+W&Im&Kk$@]&Kk&Kl!+W&Kl&Kp$@]&Kp&Ku!+W&Ku&Lp$@]&Lp&Ls!+W&Ls&Nu$@]&Nu' W!+W' W' s$@]' s'!z!+W'!z'#[$@]'#['.b!+W'.b*3f$@]*3f*5S!+W*5S40_$@]40_41d!+W41d4Js$@]4Js4LY!+W4LY4MY$@]4MY4M[!+W4M[5%T$@]5%T5%W!+W5%W5%h$@]5%h5%r!+W5%r5%s$@]5%s5%t$@]5%t5&Y!+W5&Y5'Z$@]5'Z5'k!+W5'k5(U$@]5(U5(^!+W5(^5)v$@]5)v5*y!+W5*y5+S$@]5+S5+U!+W5+U5-a$@]5-a5-c!+W5-c5-g$@]5-g5-h!+W5-h5-l$@]5-l5-x!+W5-x5.T$@]5.T5/t!+W5/t50O$@]50O50P!+W50P50S$@]50S50T!+W50T50X$@]50X50Y!+W50Y50q$@]50q51`!+W51`52f$@]52f52t!+W52t53x$@]53x55Y!+W55Y55`$@]55`55c!+W55c55d$@]55d55r!+W55r56`$@]56`56j!+W56j57R$@]57R57l!+W57l58Z$@]58Z58b!+W58b59c$@]59c5:P!+W5:P5:Q$@]5:Q5;S!+W5;S5;}$@]5;}5<f!+W5<f5<i$@]5<i5<j!+W5<j5<r$@]5<r5=W!+W5=W5=o$@]5=o5=r!+W5=r5=s$@]5=s5=x!+W5=x5>z$@]5>z5>{!+W5>{5>|$@]5>|5?P!+W5?P5?Q$@]5?Q5?R$@]5?R5?T!+W5?T5?Y$@]5?Y5?[!+W5?[5?]$@]5?]5?^!+W5?^5?_$@]5?_5?w!+W5?w5?z$@]5?z5?|!+W5?|5@X$@]5@X5@`!+W5@`5@c$@]5@c5@o!+W5@o5@u$@]5@u5@w!+W5@w5@}$@]5@}5AP!+W5AP5AV$@]5AV5A`!+W5A`5Ag$@]5Ag5Ah!+W5Ah5Ao$@]5Ao5Dv!+W5Dv5Ek$@]5Ek5FY!+W5FY;%S$@];%S;%`!+W;%`;%w$@];%w;%{!+W;%{;'O$@];'O;'S!+W;'S;=`!+i<%l?&r!+W?&r?.p$@]?.p?.r!+W?.r?1Q$@]?1Q?1x!+W?1x?2P$@]?2P?2]!+W?2]?2b$@]?2b?2g!+W?2g?2h$@]?2h?2i!+W?2i?2s$@]?2s?2t!+W?2t?3R$@]?3R?3S!+W?3S?3X$@]?3X?3Y!+W?3Y?3Z$@]?3Z?3[!+W?3[?3]$@]?3]?3^$@]?3^?3_!+W?3_?3`$@]?3`?3a$@]?3a?3b!+W?3b?5r$@]?5r?6e!+W?6e?>`$@]?>`?>r!+W?>r?@U$@]?@U?@W!+W?@W?A`$@]?A`?BY!+W?BY?Bf$@]?Bf?EO!+W?EO?ET$@]?ET?EU!+W?EU?HR$@]?HR?Hw!+W?Hw?Ic$@]?Ic?Ii!+W?Ii?JT$@]?JT?J`!+W?J`?L]$@]?L]?L`!+W?L`?Lf$@]?Lf?Lh!+W?Lh?Ln$@]?Ln?Lp!+W?Lp?Lv$@]?Lv?Lx!+W?Lx?L{$@]?L{O!+WP%GQ*]mPqr%F{rs%F{st%F{tu%F{uv%F{vw%F{wx%F{z{%F{{|%F{!O!P%F{!P!Q%F{!Q![%F{!a!b%F{!c!}%F{#O#P%F{#R#S%F{#S#T%F{#T#o%F{$p$q%F{${$|%F{%Q%R%F{%W%o%F{%p&a%F{&b0`%F{0d0p%F{1O1T%F{1[1]%F{1^1_%F{4U4Z%F{4[4]%F{4]4^%F{4`4d%F{4l4m%F{4n4q%F{4r4s%F{4t5Y%F{5Z7Q%F{7R:S%F{:[=p%F{=y>q%F{>s>t%F{>{?t%F{A`A{%F{BQBT%F{CSDP%F{DtDu%F{DuDv%F{DwGO%F{GPGQ%F{GaGb%F{GbGc%F{GjGk%F{GkGl%F{GvGy%F{G{G|%F{H^H_%F{H`IO%F{ImKj%F{KuKv%F{L`MR%F{M[M]%F{M]M^%F{MbMc%F{MhNO%F{NSNT%F{N^N_%F{NbNc%F{Nz! e%F{!#O!#P%F{!#Q!#]%F{!%W!&`%F{!&c!&d%F{!&v!&w%F{!'O!'Y%F{!'i!'p%F{!'q!'x%F{!'}!(V%F{!(X!(Y%F{!(Y!(Z%F{!(]!(s%F{!(t!({%F{!(|!(}%F{!)Q!)U%F{!)X!)Y%F{!)j!)k%F{!)x!)y%F{!)y!)z%F{!){!*O%F{!*^!*_%F{!*_!*`%F{!*s!*y%F{!*}!+O%F{!+O!+P%F{!+R!+i%F{!+j!+q%F{!+r!+s%F{!+s!+t%F{!+u!+v%F{!+v!+w%F{!+x!+y%F{!+y!+z%F{!,k!,o%F{!,p!,q%F{!-U!-X%F{!-i!-r%F{!-s!-v%F{!-w!._%F{!.`!.g%F{!.h!.i%F{!.i!.j%F{!.k!.p%F{!.s!.t%F{!/W!/X%F{!/h!/i%F{!/i!/j%F{!0_!0g%F{!0i!0j%F{!0j!0k%F{!0m!1T%F{!1U!1]%F{!1^!1_%F{!1_!1`%F{!1a!1f%F{!1i!1j%F{!2Y!2Z%F{!2Z!2[%F{!2]!2`%F{!2o!2p%F{!3R!3S%F{!3T!3Z%F{!3^!3a%F{!3b!3f%F{!3i!3j%F{!3j!3k%F{!3l!3m%F{!3n!3o%F{!3o!3p%F{!3s!3t%F{!3t!3u%F{!3x!3{%F{!4O!4[%F{!4r!4s%F{!5y!6R%F{!6S!6V%F{!6W!6o%F{!6p!6z%F{!6{!7Q%F{!7T!7U%F{!7p!7q%F{!7q!7r%F{!7x!7y%F{!7y!7z%F{!8o!8w%F{!8x!8{%F{!8|!9e%F{!9f!9p%F{!9q!9v%F{!9y!9z%F{!:l!:m%F{!:n!:o%F{!:o!:p%F{!;P!;Q%F{!;Q!;R%F{!;e!;m%F{!;n!;q%F{!;r!<m%F{!<o!<p%F{!=Q!=R%F{!=d!=e%F{!=e!=f%F{!>O!>U%F{!>Z!>m%F{!>p!?Y%F{!?Z!?d%F{!?e!?f%F{!?h!?o%F{!@{!A}%F{!BO!BP%F{!BP!BQ%F{!B^!Be%F{!Cq!Cr%F{!Cr!Cs%F{!Ct!Cu%F{!Cw!Cx%F{!Cx!Cy%F{!Cz!C{%F{!C}!DO%F{!DU!DY%F{!DZ!Db%F{!Dc!Df%F{!Dg!Dh%F{!Di!Dj%F{!Dl!Dm%F{!Dm!Dn%F{!Do!Ds%F{!Dt!Du%F{!Du!Dv%F{!EP!EQ%F{!ES!EX%F{!EY!EZ%F{!Ep!Et%F{!Ff!Fg%F{!Gx!HQ%F{!HR!Hw%F{!Id!Ii%F{!LQ!L}%F{!Mc!Md%F{!Mt!Mz%F{!NO!NS%F{!NV!NW%F{!NZ!N[%F{!N[!N]%F{!Nd!Ng%F{!Nk!Nx%F{# U# V%F{# h#!`%F{#!a#!b%F{#!g#!h%F{#!j##g%F{##h#*s%F{#*t#*x%F{#*z#+R%F{#+S#+T%F{#+U#+Y%F{#+[#,V%F{#,W#,[%F{#,^#-P%F{#-Q#-U%F{#-W#-_%F{#-`#-a%F{#-b#-f%F{#-h#-w%F{#-x#/T%F{#/U#/Y%F{#/[#0q%F{#1h#1x%F{#2Y#4R%F{#4_#Au%F{#Aw#BY%F{#BZ#Bu%F{#Bz#Di%F{#EO#E]%F{#E^#Eb%F{#Ep#FS%F{#Fb#Ft%F{#GS#Ga%F{#Gb#Ge%F{#Gt#Hz%F{#Io#Ip%F{#It#Iu%F{#K[#MW%F{#M`#NZ%F{#N[#N]%F{#Nb$ z%F{$!U$!s%F{$#x$$h%F{$$j$$o%F{$$z$%x%F{$&_$&f%F{$'p$(X%F{$(b$)i%F{$+_$+`%F{$-a$.b%F{$.s$.z%F{$0T$0s%F{$1Q$1R%F{$1R$1S%F{$1^$2[%F{$2v$3l%F{$4g$4j%F{$4t$5j%F{$7y$7}%F{$8O$8S%F{$8V$8W%F{$8W$8X%F{$8b$<j%F{$=|$DO%F{$DQ$DW%F{$DY$EQ%F{$ES$EY%F{$E[$Ed%F{$Ee$Ef%F{$Eg$Eh%F{$Ei$Ej%F{$Ek$F[%F{$F^$Ge%F{$Gf$Gm%F{$Gn$Go%F{$Gr$Gu%F{$Gv$G}%F{$HQ$HU%F{$HW$H^%F{$Hb$Ho%F{$Ht$Hw%F{$Hx$IP%F{$Ki$Kj%F{$Kw$Kx%F{$LY$Lg%F{$Np$Nq%F{$Nu$Nv%F{$Nx% S%F{% T% U%F{% X% ^%F{% d% e%F{% f% g%F{% h% i%F{% j% n%F{% o% z%F{% |%!Q%F{%!V%![%F{%!`%!a%F{%#g%#h%F{%#h%#i%F{&/x&0y%F{&0z&1{%F{&1|&4w%F{&4}&5R%F{&5U&5V%F{&5V&5W%F{&5d&6[%F{&6]&6^%F{&6c&6d%F{&6f&7p%F{&7w&7x%F{&8Y&8q%F{&8z&9R%F{&9S&9Z%F{&9[&9c%F{&9d&9k%F{&9l&9s%F{&9t&9{%F{&9|&:T%F{&:U&:]%F{&<P&<Q%F{&FZ&F[%F{&F[&F]%F{&GX&G^%F{&Gc&Gd%F{&Gd&Ge%F{&Gi&Ic%F{&Ii&Il%F{&Im&Kk%F{&Kl&Kp%F{&Ku&Lp%F{&Ls&Nu%F{' W' s%F{'!z'#[%F{'.b*3f%F{*5S40_%F{41d4Js%F{4LY4MY%F{4M[5%T%F{5%W5%h%F{5%r5%s%F{5%s5%t%F{5&Y5'Z%F{5'k5(U%F{5(^5)v%F{5*y5+S%F{5+U5-a%F{5-c5-g%F{5-h5-l%F{5-x5.T%F{5/t50O%F{50P50S%F{50T50X%F{50Y50q%F{51`52f%F{52t53x%F{55Y55`%F{55c55d%F{55r56`%F{56j57R%F{57l58Z%F{58b59c%F{5:P5:Q%F{5;S5;}%F{5<f5<i%F{5<j5<r%F{5=W5=o%F{5=r5=s%F{5=x5>z%F{5>{5>|%F{5?P5?Q%F{5?Q5?R%F{5?T5?Y%F{5?[5?]%F{5?^5?_%F{5?w5?z%F{5?|5@X%F{5@`5@c%F{5@o5@u%F{5@w5@}%F{5AP5AV%F{5A`5Ag%F{5Ah5Ao%F{5Dv5Ek%F{5FY;%S%F{;%`;%w%F{;%{;'O%F{?&r?.p%F{?.r?1Q%F{?1x?2P%F{?2]?2b%F{?2g?2h%F{?2i?2s%F{?2t?3R%F{?3S?3X%F{?3Y?3Z%F{?3[?3]%F{?3]?3^%F{?3_?3`%F{?3`?3a%F{?3b?5r%F{?6e?>`%F{?>r?@U%F{?@W?A`%F{?BY?Bf%F{?EO?ET%F{?EU?HR%F{?Hw?Ic%F{?Ii?JT%F{?J`?L]%F{?L`?Lf%F{?Lh?Ln%F{?Lp?Lv%F{?Lx?L{%F{R&5Q2gzQmPOq!+oqr&4yrs&4yst&4ytu&4yuv&4yvw&4ywx%F{xz!+oz{&4y{|&4y|!O!+o!O!P&4y!P!Q&4y!Q![&4y![!a!+o!a!b&4y!b!c!+o!c!}&4y!}#O!+o#O#P&4y#P#R!+o#R#S&4y#S#T&4y#T#o&4y#o$p!+o$p$q&4y$q${!+o${$|&4y$|%Q!+o%Q%R&4y%R%W!+o%W%o&4y%o%p!+o%p&a&4y&a&b!+o&b0`&4y0`0d!+o0d0p&4y0p1O!+o1O1T&4y1T1[!+o1[1]&4y1]1^!+o1^1_&4y1_4U!+o4U4Z&4y4Z4[!+o4[4]&4y4]4^&4y4^4`!+o4`4d&4y4d4l!+o4l4m&4y4m4n!+o4n4q&4y4q4r!+o4r4s&4y4s4t!+o4t5Y&4y5Y5Z!+o5Z7Q&4y7Q7R!+o7R:S&4y:S:[!+o:[=p&4y=p=y!+o=y>q&4y>q>s!+o>s>t&4y>t>{!+o>{?t&4y?tA`!+oA`A{&4yA{BQ!+oBQBT&4yBTCS!+oCSDP&4yDPDt!+oDtDu&4yDuDv&4yDvDw!+oDwGO&4yGOGP!+oGPGQ&4yGQGa!+oGaGb&4yGbGc&4yGcGj!+oGjGk&4yGkGl&4yGlGv!+oGvGy&4yGyG{!+oG{G|&4yG|H^!+oH^H_&4yH_H`!+oH`IO&4yIOIm!+oImKj&4yKjKu!+oKuKv&4yKvL`!+oL`MR&4yMRM[!+oM[M]&4yM]M^&4yM^Mb!+oMbMc&4yMcMh!+oMhNO&4yNONS!+oNSNT&4yNTN^!+oN^N_&4yN_Nb!+oNbNc&4yNcNz!+oNz! e&4y! e!#O!+o!#O!#P&4y!#P!#Q!+o!#Q!#]&4y!#]!%W!+o!%W!&`&4y!&`!&c!+o!&c!&d&4y!&d!&v!+o!&v!&w&4y!&w!'O!+o!'O!'Y&4y!'Y!'i!+o!'i!'p&4y!'p!'q!+o!'q!'x&4y!'x!'}!+o!'}!(V&4y!(V!(X!+o!(X!(Y&4y!(Y!(Z&4y!(Z!(]!+o!(]!(s&4y!(s!(t!+o!(t!({&4y!({!(|!+o!(|!(}&4y!(}!)Q!+o!)Q!)U&4y!)U!)X!+o!)X!)Y&4y!)Y!)j!+o!)j!)k&4y!)k!)x!+o!)x!)y&4y!)y!)z&4y!)z!){!+o!){!*O&4y!*O!*^!+o!*^!*_&4y!*_!*`&4y!*`!*s!+o!*s!*y&4y!*y!*}!+o!*}!+O&4y!+O!+P&4y!+P!+R!+o!+R!+i&4y!+i!+j!+o!+j!+q&4y!+q!+r!+o!+r!+s&4y!+s!+t&4y!+t!+u!+o!+u!+v&4y!+v!+w&4y!+w!+x!+o!+x!+y&4y!+y!+z&4y!+z!,k!+o!,k!,o&4y!,o!,p!+o!,p!,q&4y!,q!-U!+o!-U!-X&4y!-X!-i!+o!-i!-r&4y!-r!-s!+o!-s!-v&4y!-v!-w!+o!-w!._&4y!._!.`!+o!.`!.g&4y!.g!.h!+o!.h!.i&4y!.i!.j&4y!.j!.k!+o!.k!.p&4y!.p!.s!+o!.s!.t&4y!.t!/W!+o!/W!/X&4y!/X!/h!+o!/h!/i&4y!/i!/j&4y!/j!0_!+o!0_!0g&4y!0g!0i!+o!0i!0j&4y!0j!0k&4y!0k!0m!+o!0m!1T&4y!1T!1U!+o!1U!1]&4y!1]!1^!+o!1^!1_&4y!1_!1`&4y!1`!1a!+o!1a!1f&4y!1f!1i!+o!1i!1j&4y!1j!2Y!+o!2Y!2Z&4y!2Z!2[&4y!2[!2]!+o!2]!2`&4y!2`!2o!+o!2o!2p&4y!2p!3R!+o!3R!3S&4y!3S!3T!+o!3T!3Z&4y!3Z!3^!+o!3^!3a&4y!3a!3b!+o!3b!3f&4y!3f!3i!+o!3i!3j&4y!3j!3k&4y!3k!3l!+o!3l!3m&4y!3m!3n!+o!3n!3o&4y!3o!3p&4y!3p!3s!+o!3s!3t&4y!3t!3u&4y!3u!3x!+o!3x!3{&4y!3{!4O!+o!4O!4[&4y!4[!4r!+o!4r!4s&4y!4s!5y!+o!5y!6R&4y!6R!6S!+o!6S!6V&4y!6V!6W!+o!6W!6o&4y!6o!6p!+o!6p!6z&4y!6z!6{!+o!6{!7Q&4y!7Q!7T!+o!7T!7U&4y!7U!7p!+o!7p!7q&4y!7q!7r&4y!7r!7x!+o!7x!7y&4y!7y!7z&4y!7z!8o!+o!8o!8w&4y!8w!8x!+o!8x!8{&4y!8{!8|!+o!8|!9e&4y!9e!9f!+o!9f!9p&4y!9p!9q!+o!9q!9v&4y!9v!9y!+o!9y!9z&4y!9z!:l!+o!:l!:m&4y!:m!:n!+o!:n!:o&4y!:o!:p&4y!:p!;P!+o!;P!;Q&4y!;Q!;R&4y!;R!;e!+o!;e!;m&4y!;m!;n!+o!;n!;q&4y!;q!;r!+o!;r!<m&4y!<m!<o!+o!<o!<p&4y!<p!=Q!+o!=Q!=R&4y!=R!=d!+o!=d!=e&4y!=e!=f&4y!=f!>O!+o!>O!>U&4y!>U!>Z!+o!>Z!>m&4y!>m!>p!+o!>p!?Y&4y!?Y!?Z!+o!?Z!?d&4y!?d!?e!+o!?e!?f&4y!?f!?h!+o!?h!?o&4y!?o!@{!+o!@{!A}&4y!A}!BO!+o!BO!BP&4y!BP!BQ&4y!BQ!B^!+o!B^!Be&4y!Be!Cq!+o!Cq!Cr&4y!Cr!Cs&4y!Cs!Ct!+o!Ct!Cu&4y!Cu!Cw!+o!Cw!Cx&4y!Cx!Cy&4y!Cy!Cz!+o!Cz!C{&4y!C{!C}!+o!C}!DO&4y!DO!DU!+o!DU!DY&4y!DY!DZ!+o!DZ!Db&4y!Db!Dc!+o!Dc!Df&4y!Df!Dg!+o!Dg!Dh&4y!Dh!Di!+o!Di!Dj&4y!Dj!Dl!+o!Dl!Dm&4y!Dm!Dn&4y!Dn!Do!+o!Do!Ds&4y!Ds!Dt!+o!Dt!Du&4y!Du!Dv&4y!Dv!EP!+o!EP!EQ&4y!EQ!ES!+o!ES!EX&4y!EX!EY!+o!EY!EZ&4y!EZ!Ep!+o!Ep!Et&4y!Et!Ff!+o!Ff!Fg&4y!Fg!Gx!+o!Gx!HQ&4y!HQ!HR!+o!HR!Hw&4y!Hw!Id!+o!Id!Ii&4y!Ii!LQ!+o!LQ!L}&4y!L}!Mc!+o!Mc!Md&4y!Md!Mt!+o!Mt!Mz&4y!Mz!NO!+o!NO!NS&4y!NS!NV!+o!NV!NW&4y!NW!NZ!+o!NZ!N[&4y!N[!N]&4y!N]!Nd!+o!Nd!Ng&4y!Ng!Nk!+o!Nk!Nx&4y!Nx# U!+o# U# V&4y# V# h!+o# h#!`&4y#!`#!a!+o#!a#!b&4y#!b#!g!+o#!g#!h&4y#!h#!j!+o#!j##g&4y##g##h!+o##h#*s&4y#*s#*t!+o#*t#*x&4y#*x#*z!+o#*z#+R&4y#+R#+S!+o#+S#+T&4y#+T#+U!+o#+U#+Y&4y#+Y#+[!+o#+[#,V&4y#,V#,W!+o#,W#,[&4y#,[#,^!+o#,^#-P&4y#-P#-Q!+o#-Q#-U&4y#-U#-W!+o#-W#-_&4y#-_#-`!+o#-`#-a&4y#-a#-b!+o#-b#-f&4y#-f#-h!+o#-h#-w&4y#-w#-x!+o#-x#/T&4y#/T#/U!+o#/U#/Y&4y#/Y#/[!+o#/[#0q&4y#0q#1h!+o#1h#1x&4y#1x#2Y!+o#2Y#4R&4y#4R#4_!+o#4_#Au&4y#Au#Aw!+o#Aw#BY&4y#BY#BZ!+o#BZ#Bu&4y#Bu#Bz!+o#Bz#Di&4y#Di#EO!+o#EO#E]&4y#E]#E^!+o#E^#Eb&4y#Eb#Ep!+o#Ep#FS&4y#FS#Fb!+o#Fb#Ft&4y#Ft#GS!+o#GS#Ga&4y#Ga#Gb!+o#Gb#Ge&4y#Ge#Gt!+o#Gt#Hz&4y#Hz#Io!+o#Io#Ip&4y#Ip#It!+o#It#Iu&4y#Iu#K[!+o#K[#MW&4y#MW#M`!+o#M`#NZ&4y#NZ#N[!+o#N[#N]&4y#N]#Nb!+o#Nb$ z&4y$ z$!U!+o$!U$!s&4y$!s$#x!+o$#x$$h&4y$$h$$j!+o$$j$$o&4y$$o$$z!+o$$z$%x&4y$%x$&_!+o$&_$&f&4y$&f$'p!+o$'p$(X&4y$(X$(b!+o$(b$)i&4y$)i$+_!+o$+_$+`&4y$+`$-a!+o$-a$.b&4y$.b$.s!+o$.s$.z&4y$.z$0T!+o$0T$0s&4y$0s$1Q!+o$1Q$1R&4y$1R$1S&4y$1S$1^!+o$1^$2[&4y$2[$2v!+o$2v$3l&4y$3l$4g!+o$4g$4j&4y$4j$4t!+o$4t$5j&4y$5j$7y!+o$7y$7}&4y$7}$8O!+o$8O$8S&4y$8S$8V!+o$8V$8W&4y$8W$8X&4y$8X$8b!+o$8b$<j&4y$<j$=|!+o$=|$DO&4y$DO$DQ!+o$DQ$DW&4y$DW$DY!+o$DY$EQ&4y$EQ$ES!+o$ES$EY&4y$EY$E[!+o$E[$Ed&4y$Ed$Ee!+o$Ee$Ef&4y$Ef$Eg!+o$Eg$Eh&4y$Eh$Ei!+o$Ei$Ej&4y$Ej$Ek!+o$Ek$F[&4y$F[$F^!+o$F^$Ge&4y$Ge$Gf!+o$Gf$Gm&4y$Gm$Gn!+o$Gn$Go&4y$Go$Gr!+o$Gr$Gu&4y$Gu$Gv!+o$Gv$G}&4y$G}$HQ!+o$HQ$HU&4y$HU$HW!+o$HW$H^&4y$H^$Hb!+o$Hb$Ho&4y$Ho$Ht!+o$Ht$Hw&4y$Hw$Hx!+o$Hx$IP&4y$IP$Ki!+o$Ki$Kj&4y$Kj$Kw!+o$Kw$Kx&4y$Kx$LY!+o$LY$Lg&4y$Lg$Np!+o$Np$Nq&4y$Nq$Nu!+o$Nu$Nv&4y$Nv$Nx!+o$Nx% S&4y% S% T!+o% T% U&4y% U% X!+o% X% ^&4y% ^% d!+o% d% e&4y% e% f!+o% f% g&4y% g% h!+o% h% i&4y% i% j!+o% j% n&4y% n% o!+o% o% z&4y% z% |!+o% |%!Q&4y%!Q%!V!+o%!V%![&4y%![%!`!+o%!`%!a&4y%!a%#g!+o%#g%#h&4y%#h%#i&4y%#i&/x!+o&/x&0y&4y&0y&0z!+o&0z&1{&4y&1{&1|!+o&1|&4w&4y&4w&4}!+o&4}&5R&4y&5R&5U!+o&5U&5V&4y&5V&5W&4y&5W&5d!+o&5d&6[&4y&6[&6]!+o&6]&6^&4y&6^&6c!+o&6c&6d&4y&6d&6f!+o&6f&7p&4y&7p&7w!+o&7w&7x&4y&7x&8Y!+o&8Y&8q&4y&8q&8z!+o&8z&9R&4y&9R&9S!+o&9S&9Z&4y&9Z&9[!+o&9[&9c&4y&9c&9d!+o&9d&9k&4y&9k&9l!+o&9l&9s&4y&9s&9t!+o&9t&9{&4y&9{&9|!+o&9|&:T&4y&:T&:U!+o&:U&:]&4y&:]&<P!+o&<P&<Q&4y&<Q&FZ!+o&FZ&F[&4y&F[&F]&4y&F]&GX!+o&GX&G^&4y&G^&Gc!+o&Gc&Gd&4y&Gd&Ge&4y&Ge&Gi!+o&Gi&Ic&4y&Ic&Ii!+o&Ii&Il&4y&Il&Im!+o&Im&Kk&4y&Kk&Kl!+o&Kl&Kp&4y&Kp&Ku!+o&Ku&Lp&4y&Lp&Ls!+o&Ls&Nu&4y&Nu' W!+o' W' s&4y' s'!z!+o'!z'#[&4y'#['.b!+o'.b*3f&4y*3f*5S!+o*5S40_&4y40_41d!+o41d4Js&4y4Js4LY!+o4LY4MY&4y4MY4M[!+o4M[5%T&4y5%T5%W!+o5%W5%h&4y5%h5%r!+o5%r5%s&4y5%s5%t&4y5%t5&Y!+o5&Y5'Z&4y5'Z5'k!+o5'k5(U&4y5(U5(^!+o5(^5)v&4y5)v5*y!+o5*y5+S&4y5+S5+U!+o5+U5-a&4y5-a5-c!+o5-c5-g&4y5-g5-h!+o5-h5-l&4y5-l5-x!+o5-x5.T&4y5.T5/t!+o5/t50O&4y50O50P!+o50P50S&4y50S50T!+o50T50X&4y50X50Y!+o50Y50q&4y50q51`!+o51`52f&4y52f52t!+o52t53x&4y53x55Y!+o55Y55`&4y55`55c!+o55c55d&4y55d55r!+o55r56`&4y56`56j!+o56j57R&4y57R57l!+o57l58Z&4y58Z58b!+o58b59c&4y59c5:P!+o5:P5:Q&4y5:Q5;S!+o5;S5;}&4y5;}5<f!+o5<f5<i&4y5<i5<j!+o5<j5<r&4y5<r5=W!+o5=W5=o&4y5=o5=r!+o5=r5=s&4y5=s5=x!+o5=x5>z&4y5>z5>{!+o5>{5>|&4y5>|5?P!+o5?P5?Q&4y5?Q5?R&4y5?R5?T!+o5?T5?Y&4y5?Y5?[!+o5?[5?]&4y5?]5?^!+o5?^5?_&4y5?_5?w!+o5?w5?z&4y5?z5?|!+o5?|5@X&4y5@X5@`!+o5@`5@c&4y5@c5@o!+o5@o5@u&4y5@u5@w!+o5@w5@}&4y5@}5AP!+o5AP5AV&4y5AV5A`!+o5A`5Ag&4y5Ag5Ah!+o5Ah5Ao&4y5Ao5Dv!+o5Dv5Ek&4y5Ek5FY!+o5FY;%S&4y;%S;%`!+o;%`;%w&4y;%w;%{!+o;%{;'O&4y;'O;'S!+o;'S;=`!,Q<%l?&r!+o?&r?.p&4y?.p?.r!+o?.r?1Q&4y?1Q?1x!+o?1x?2P&4y?2P?2]!+o?2]?2b&4y?2b?2g!+o?2g?2h&4y?2h?2i!+o?2i?2s&4y?2s?2t!+o?2t?3R&4y?3R?3S!+o?3S?3X&4y?3X?3Y!+o?3Y?3Z&4y?3Z?3[!+o?3[?3]&4y?3]?3^&4y?3^?3_!+o?3_?3`&4y?3`?3a&4y?3a?3b!+o?3b?5r&4y?5r?6e!+o?6e?>`&4y?>`?>r!+o?>r?@U&4y?@U?@W!+o?@W?A`&4y?A`?BY!+o?BY?Bf&4y?Bf?EO!+o?EO?ET&4y?ET?EU!+o?EU?HR&4y?HR?Hw!+o?Hw?Ic&4y?Ic?Ii!+o?Ii?JT&4y?JT?J`!+o?J`?L]&4y?L]?L`!+o?L`?Lf&4y?Lf?Lh!+o?Lh?Ln&4y?Ln?Lp!+o?Lp?Lv&4y?Lv?Lx!+o?Lx?L{&4y?L{O!+o]';r2g!OW|SmPOq!,^qr';irs$@]st';itu';iuv';ivw';iwx';ixz!,^z{';i{|';i|!O!,^!O!P';i!P!Q';i!Q![';i![!a!,^!a!b';i!b!c!,^!c!}';i!}#O!,^#O#P';i#P#R!,^#R#S';i#S#T(BZ#T#o';i#o$p!,^$p$q';i$q${!,^${$|';i$|%Q!,^%Q%R';i%R%W!,^%W%o';i%o%p!,^%p&a';i&a&b!,^&b0`';i0`0d!,^0d0p';i0p1O!,^1O1T';i1T1[!,^1[1]';i1]1^!,^1^1_';i1_4U!,^4U4Z';i4Z4[!,^4[4]';i4]4^';i4^4`!,^4`4d';i4d4l!,^4l4m';i4m4n!,^4n4q';i4q4r!,^4r4s';i4s4t!,^4t5Y';i5Y5Z!,^5Z7Q';i7Q7R!,^7R:S';i:S:[!,^:[=p';i=p=y!,^=y>q';i>q>s!,^>s>t';i>t>{!,^>{?t';i?tA`!,^A`A{';iA{BQ!,^BQBT';iBTCS!,^CSDP';iDPDt!,^DtDu';iDuDv';iDvDw!,^DwGO';iGOGP!,^GPGQ';iGQGa!,^GaGb';iGbGc';iGcGj!,^GjGk';iGkGl';iGlGv!,^GvGy';iGyG{!,^G{G|';iG|H^!,^H^H_';iH_H`!,^H`IO';iIOIm!,^ImKj';iKjKu!,^KuKv';iKvL`!,^L`MR';iMRM[!,^M[M]';iM]M^';iM^Mb!,^MbMc';iMcMh!,^MhNO';iNONS!,^NSNT';iNTN^!,^N^N_';iN_Nb!,^NbNc';iNcNz!,^Nz! e';i! e!#O!,^!#O!#P';i!#P!#Q!,^!#Q!#]';i!#]!%W!,^!%W!&`';i!&`!&c!,^!&c!&d';i!&d!&v!,^!&v!&w';i!&w!'O!,^!'O!'Y';i!'Y!'i!,^!'i!'p';i!'p!'q!,^!'q!'x';i!'x!'}!,^!'}!(V';i!(V!(X!,^!(X!(Y';i!(Y!(Z';i!(Z!(]!,^!(]!(s';i!(s!(t!,^!(t!({';i!({!(|!,^!(|!(}';i!(}!)Q!,^!)Q!)U';i!)U!)X!,^!)X!)Y';i!)Y!)j!,^!)j!)k';i!)k!)x!,^!)x!)y';i!)y!)z';i!)z!){!,^!){!*O';i!*O!*^!,^!*^!*_';i!*_!*`';i!*`!*s!,^!*s!*y';i!*y!*}!,^!*}!+O';i!+O!+P';i!+P!+R!,^!+R!+i';i!+i!+j!,^!+j!+q';i!+q!+r!,^!+r!+s';i!+s!+t';i!+t!+u!,^!+u!+v';i!+v!+w';i!+w!+x!,^!+x!+y';i!+y!+z';i!+z!,k!,^!,k!,o';i!,o!,p!,^!,p!,q';i!,q!-U!,^!-U!-X';i!-X!-i!,^!-i!-r';i!-r!-s!,^!-s!-v';i!-v!-w!,^!-w!._';i!._!.`!,^!.`!.g';i!.g!.h!,^!.h!.i';i!.i!.j';i!.j!.k!,^!.k!.p';i!.p!.s!,^!.s!.t';i!.t!/W!,^!/W!/X';i!/X!/h!,^!/h!/i';i!/i!/j';i!/j!0_!,^!0_!0g';i!0g!0i!,^!0i!0j';i!0j!0k';i!0k!0m!,^!0m!1T';i!1T!1U!,^!1U!1]';i!1]!1^!,^!1^!1_';i!1_!1`';i!1`!1a!,^!1a!1f';i!1f!1i!,^!1i!1j';i!1j!2Y!,^!2Y!2Z';i!2Z!2[';i!2[!2]!,^!2]!2`';i!2`!2o!,^!2o!2p';i!2p!3R!,^!3R!3S';i!3S!3T!,^!3T!3Z';i!3Z!3^!,^!3^!3a';i!3a!3b!,^!3b!3f';i!3f!3i!,^!3i!3j';i!3j!3k';i!3k!3l!,^!3l!3m';i!3m!3n!,^!3n!3o';i!3o!3p';i!3p!3s!,^!3s!3t';i!3t!3u';i!3u!3x!,^!3x!3{';i!3{!4O!,^!4O!4[';i!4[!4r!,^!4r!4s';i!4s!5y!,^!5y!6R';i!6R!6S!,^!6S!6V';i!6V!6W!,^!6W!6o';i!6o!6p!,^!6p!6z';i!6z!6{!,^!6{!7Q';i!7Q!7T!,^!7T!7U';i!7U!7p!,^!7p!7q';i!7q!7r';i!7r!7x!,^!7x!7y';i!7y!7z';i!7z!8o!,^!8o!8w';i!8w!8x!,^!8x!8{';i!8{!8|!,^!8|!9e';i!9e!9f!,^!9f!9p';i!9p!9q!,^!9q!9v';i!9v!9y!,^!9y!9z';i!9z!:l!,^!:l!:m';i!:m!:n!,^!:n!:o';i!:o!:p';i!:p!;P!,^!;P!;Q';i!;Q!;R';i!;R!;e!,^!;e!;m';i!;m!;n!,^!;n!;q';i!;q!;r!,^!;r!<m';i!<m!<o!,^!<o!<p';i!<p!=Q!,^!=Q!=R';i!=R!=d!,^!=d!=e';i!=e!=f';i!=f!>O!,^!>O!>U';i!>U!>Z!,^!>Z!>m';i!>m!>p!,^!>p!?Y';i!?Y!?Z!,^!?Z!?d';i!?d!?e!,^!?e!?f';i!?f!?h!,^!?h!?o';i!?o!@{!,^!@{!A}';i!A}!BO!,^!BO!BP';i!BP!BQ';i!BQ!B^!,^!B^!Be';i!Be!Cq!,^!Cq!Cr';i!Cr!Cs';i!Cs!Ct!,^!Ct!Cu';i!Cu!Cw!,^!Cw!Cx';i!Cx!Cy';i!Cy!Cz!,^!Cz!C{';i!C{!C}!,^!C}!DO';i!DO!DU!,^!DU!DY';i!DY!DZ!,^!DZ!Db';i!Db!Dc!,^!Dc!Df';i!Df!Dg!,^!Dg!Dh';i!Dh!Di!,^!Di!Dj';i!Dj!Dl!,^!Dl!Dm';i!Dm!Dn';i!Dn!Do!,^!Do!Ds';i!Ds!Dt!,^!Dt!Du';i!Du!Dv';i!Dv!EP!,^!EP!EQ';i!EQ!ES!,^!ES!EX';i!EX!EY!,^!EY!EZ';i!EZ!Ep!,^!Ep!Et';i!Et!Ff!,^!Ff!Fg';i!Fg!Gx!,^!Gx!HQ';i!HQ!HR!,^!HR!Hw';i!Hw!Id!,^!Id!Ii';i!Ii!LQ!,^!LQ!L}';i!L}!Mc!,^!Mc!Md';i!Md!Mt!,^!Mt!Mz';i!Mz!NO!,^!NO!NS';i!NS!NV!,^!NV!NW';i!NW!NZ!,^!NZ!N[';i!N[!N]';i!N]!Nd!,^!Nd!Ng';i!Ng!Nk!,^!Nk!Nx';i!Nx# U!,^# U# V';i# V# h!,^# h#!`';i#!`#!a!,^#!a#!b';i#!b#!g!,^#!g#!h';i#!h#!j!,^#!j##g';i##g##h!,^##h#*s';i#*s#*t!,^#*t#*x';i#*x#*z!,^#*z#+R';i#+R#+S!,^#+S#+T';i#+T#+U!,^#+U#+Y';i#+Y#+[!,^#+[#,V';i#,V#,W!,^#,W#,[';i#,[#,^!,^#,^#-P';i#-P#-Q!,^#-Q#-U';i#-U#-W!,^#-W#-_';i#-_#-`!,^#-`#-a';i#-a#-b!,^#-b#-f';i#-f#-h!,^#-h#-w';i#-w#-x!,^#-x#/T';i#/T#/U!,^#/U#/Y';i#/Y#/[!,^#/[#0q';i#0q#1h!,^#1h#1x';i#1x#2Y!,^#2Y#4R';i#4R#4_!,^#4_#Au';i#Au#Aw!,^#Aw#BY';i#BY#BZ!,^#BZ#Bu';i#Bu#Bz!,^#Bz#Di';i#Di#EO!,^#EO#E]';i#E]#E^!,^#E^#Eb';i#Eb#Ep!,^#Ep#FS';i#FS#Fb!,^#Fb#Ft';i#Ft#GS!,^#GS#Ga';i#Ga#Gb!,^#Gb#Ge';i#Ge#Gt!,^#Gt#Hz';i#Hz#Io!,^#Io#Ip';i#Ip#It!,^#It#Iu';i#Iu#K[!,^#K[#MW';i#MW#M`!,^#M`#NZ';i#NZ#N[!,^#N[#N]';i#N]#Nb!,^#Nb$ z';i$ z$!U!,^$!U$!s';i$!s$#x!,^$#x$$h';i$$h$$j!,^$$j$$o';i$$o$$z!,^$$z$%x';i$%x$&_!,^$&_$&f';i$&f$'p!,^$'p$(X';i$(X$(b!,^$(b$)i';i$)i$+_!,^$+_$+`';i$+`$-a!,^$-a$.b';i$.b$.s!,^$.s$.z';i$.z$0T!,^$0T$0s';i$0s$1Q!,^$1Q$1R';i$1R$1S';i$1S$1^!,^$1^$2[';i$2[$2v!,^$2v$3l';i$3l$4g!,^$4g$4j';i$4j$4t!,^$4t$5j';i$5j$7y!,^$7y$7}';i$7}$8O!,^$8O$8S';i$8S$8V!,^$8V$8W';i$8W$8X';i$8X$8b!,^$8b$<j';i$<j$=|!,^$=|$DO';i$DO$DQ!,^$DQ$DW';i$DW$DY!,^$DY$EQ';i$EQ$ES!,^$ES$EY';i$EY$E[!,^$E[$Ed';i$Ed$Ee!,^$Ee$Ef';i$Ef$Eg!,^$Eg$Eh';i$Eh$Ei!,^$Ei$Ej';i$Ej$Ek!,^$Ek$F[';i$F[$F^!,^$F^$Ge';i$Ge$Gf!,^$Gf$Gm';i$Gm$Gn!,^$Gn$Go';i$Go$Gr!,^$Gr$Gu';i$Gu$Gv!,^$Gv$G}';i$G}$HQ!,^$HQ$HU';i$HU$HW!,^$HW$H^';i$H^$Hb!,^$Hb$Ho';i$Ho$Ht!,^$Ht$Hw';i$Hw$Hx!,^$Hx$IP';i$IP$Ki!,^$Ki$Kj';i$Kj$Kw!,^$Kw$Kx';i$Kx$LY!,^$LY$Lg';i$Lg$Np!,^$Np$Nq';i$Nq$Nu!,^$Nu$Nv';i$Nv$Nx!,^$Nx% S';i% S% T!,^% T% U';i% U% X!,^% X% ^';i% ^% d!,^% d% e';i% e% f!,^% f% g';i% g% h!,^% h% i';i% i% j!,^% j% n';i% n% o!,^% o% z';i% z% |!,^% |%!Q';i%!Q%!V!,^%!V%![';i%![%!`!,^%!`%!a';i%!a%#g!,^%#g%#h';i%#h%#i';i%#i&/x!,^&/x&0y';i&0y&0z!,^&0z&1{';i&1{&1|!,^&1|&4w';i&4w&4}!,^&4}&5R';i&5R&5U!,^&5U&5V';i&5V&5W';i&5W&5d!,^&5d&6[';i&6[&6]!,^&6]&6^';i&6^&6c!,^&6c&6d';i&6d&6f!,^&6f&7p';i&7p&7w!,^&7w&7x';i&7x&8Y!,^&8Y&8q';i&8q&8z!,^&8z&9R';i&9R&9S!,^&9S&9Z';i&9Z&9[!,^&9[&9c';i&9c&9d!,^&9d&9k';i&9k&9l!,^&9l&9s';i&9s&9t!,^&9t&9{';i&9{&9|!,^&9|&:T';i&:T&:U!,^&:U&:]';i&:]&<P!,^&<P&<Q';i&<Q&FZ!,^&FZ&F[';i&F[&F]';i&F]&GX!,^&GX&G^';i&G^&Gc!,^&Gc&Gd';i&Gd&Ge';i&Ge&Gi!,^&Gi&Ic';i&Ic&Ii!,^&Ii&Il';i&Il&Im!,^&Im&Kk';i&Kk&Kl!,^&Kl&Kp';i&Kp&Ku!,^&Ku&Lp';i&Lp&Ls!,^&Ls&Nu';i&Nu' W!,^' W' s';i' s'!z!,^'!z'#[';i'#['.b!,^'.b*3f';i*3f*5S!,^*5S40_';i40_41d!,^41d4Js';i4Js4LY!,^4LY4MY';i4MY4M[!,^4M[5%T';i5%T5%W!,^5%W5%h';i5%h5%r!,^5%r5%s';i5%s5%t';i5%t5&Y!,^5&Y5'Z';i5'Z5'k!,^5'k5(U';i5(U5(^!,^5(^5)v';i5)v5*y!,^5*y5+S';i5+S5+U!,^5+U5-a';i5-a5-c!,^5-c5-g';i5-g5-h!,^5-h5-l';i5-l5-x!,^5-x5.T';i5.T5/t!,^5/t50O';i50O50P!,^50P50S';i50S50T!,^50T50X';i50X50Y!,^50Y50q';i50q51`!,^51`52f';i52f52t!,^52t53x';i53x55Y!,^55Y55`';i55`55c!,^55c55d';i55d55r!,^55r56`';i56`56j!,^56j57R';i57R57l!,^57l58Z';i58Z58b!,^58b59c';i59c5:P!,^5:P5:Q';i5:Q5;S!,^5;S5;}';i5;}5<f!,^5<f5<i';i5<i5<j!,^5<j5<r';i5<r5=W!,^5=W5=o';i5=o5=r!,^5=r5=s';i5=s5=x!,^5=x5>z';i5>z5>{!,^5>{5>|';i5>|5?P!,^5?P5?Q';i5?Q5?R';i5?R5?T!,^5?T5?Y';i5?Y5?[!,^5?[5?]';i5?]5?^!,^5?^5?_';i5?_5?w!,^5?w5?z';i5?z5?|!,^5?|5@X';i5@X5@`!,^5@`5@c';i5@c5@o!,^5@o5@u';i5@u5@w!,^5@w5@}';i5@}5AP!,^5AP5AV';i5AV5A`!,^5A`5Ag';i5Ag5Ah!,^5Ah5Ao';i5Ao5Dv!,^5Dv5Ek';i5Ek5FY!,^5FY;%S';i;%S;%`!,^;%`;%w';i;%w;%{!,^;%{;'O';i;'O;'S!,^;'S;=`!-c<%l?&r!,^?&r?.p';i?.p?.r!,^?.r?1Q';i?1Q?1x!,^?1x?2P';i?2P?2]!,^?2]?2b';i?2b?2g!,^?2g?2h';i?2h?2i!,^?2i?2s';i?2s?2t!,^?2t?3R';i?3R?3S!,^?3S?3X';i?3X?3Y!,^?3Y?3Z';i?3Z?3[!,^?3[?3]';i?3]?3^';i?3^?3_!,^?3_?3`';i?3`?3a';i?3a?3b!,^?3b?5r';i?5r?6e!,^?6e?>`';i?>`?>r!,^?>r?@U';i?@U?@W!,^?@W?A`';i?A`?BY!,^?BY?Bf';i?Bf?EO!,^?EO?ET';i?ET?EU!,^?EU?HR';i?HR?Hw!,^?Hw?Ic';i?Ic?Ii!,^?Ii?JT';i?JT?J`!,^?J`?L]';i?L]?L`!,^?L`?Lf';i?Lf?Lh!,^?Lh?Ln';i?Ln?Lp!,^?Lp?Lv';i?Lv?Lx!,^?Lx?L{';i?L{O!,^T(Bb2g|SmPOq!,zqr(BZrs%F{st(BZtu(BZuv(BZvw(BZwx(BZxz!,zz{(BZ{|(BZ|!O!,z!O!P(BZ!P!Q(BZ!Q![(BZ![!a!,z!a!b(BZ!b!c!,z!c!}(BZ!}#O!,z#O#P(BZ#P#R!,z#R#S(BZ#S#T(BZ#T#o(BZ#o$p!,z$p$q(BZ$q${!,z${$|(BZ$|%Q!,z%Q%R(BZ%R%W!,z%W%o(BZ%o%p!,z%p&a(BZ&a&b!,z&b0`(BZ0`0d!,z0d0p(BZ0p1O!,z1O1T(BZ1T1[!,z1[1](BZ1]1^!,z1^1_(BZ1_4U!,z4U4Z(BZ4Z4[!,z4[4](BZ4]4^(BZ4^4`!,z4`4d(BZ4d4l!,z4l4m(BZ4m4n!,z4n4q(BZ4q4r!,z4r4s(BZ4s4t!,z4t5Y(BZ5Y5Z!,z5Z7Q(BZ7Q7R!,z7R:S(BZ:S:[!,z:[=p(BZ=p=y!,z=y>q(BZ>q>s!,z>s>t(BZ>t>{!,z>{?t(BZ?tA`!,zA`A{(BZA{BQ!,zBQBT(BZBTCS!,zCSDP(BZDPDt!,zDtDu(BZDuDv(BZDvDw!,zDwGO(BZGOGP!,zGPGQ(BZGQGa!,zGaGb(BZGbGc(BZGcGj!,zGjGk(BZGkGl(BZGlGv!,zGvGy(BZGyG{!,zG{G|(BZG|H^!,zH^H_(BZH_H`!,zH`IO(BZIOIm!,zImKj(BZKjKu!,zKuKv(BZKvL`!,zL`MR(BZMRM[!,zM[M](BZM]M^(BZM^Mb!,zMbMc(BZMcMh!,zMhNO(BZNONS!,zNSNT(BZNTN^!,zN^N_(BZN_Nb!,zNbNc(BZNcNz!,zNz! e(BZ! e!#O!,z!#O!#P(BZ!#P!#Q!,z!#Q!#](BZ!#]!%W!,z!%W!&`(BZ!&`!&c!,z!&c!&d(BZ!&d!&v!,z!&v!&w(BZ!&w!'O!,z!'O!'Y(BZ!'Y!'i!,z!'i!'p(BZ!'p!'q!,z!'q!'x(BZ!'x!'}!,z!'}!(V(BZ!(V!(X!,z!(X!(Y(BZ!(Y!(Z(BZ!(Z!(]!,z!(]!(s(BZ!(s!(t!,z!(t!({(BZ!({!(|!,z!(|!(}(BZ!(}!)Q!,z!)Q!)U(BZ!)U!)X!,z!)X!)Y(BZ!)Y!)j!,z!)j!)k(BZ!)k!)x!,z!)x!)y(BZ!)y!)z(BZ!)z!){!,z!){!*O(BZ!*O!*^!,z!*^!*_(BZ!*_!*`(BZ!*`!*s!,z!*s!*y(BZ!*y!*}!,z!*}!+O(BZ!+O!+P(BZ!+P!+R!,z!+R!+i(BZ!+i!+j!,z!+j!+q(BZ!+q!+r!,z!+r!+s(BZ!+s!+t(BZ!+t!+u!,z!+u!+v(BZ!+v!+w(BZ!+w!+x!,z!+x!+y(BZ!+y!+z(BZ!+z!,k!,z!,k!,o(BZ!,o!,p!,z!,p!,q(BZ!,q!-U!,z!-U!-X(BZ!-X!-i!,z!-i!-r(BZ!-r!-s!,z!-s!-v(BZ!-v!-w!,z!-w!._(BZ!._!.`!,z!.`!.g(BZ!.g!.h!,z!.h!.i(BZ!.i!.j(BZ!.j!.k!,z!.k!.p(BZ!.p!.s!,z!.s!.t(BZ!.t!/W!,z!/W!/X(BZ!/X!/h!,z!/h!/i(BZ!/i!/j(BZ!/j!0_!,z!0_!0g(BZ!0g!0i!,z!0i!0j(BZ!0j!0k(BZ!0k!0m!,z!0m!1T(BZ!1T!1U!,z!1U!1](BZ!1]!1^!,z!1^!1_(BZ!1_!1`(BZ!1`!1a!,z!1a!1f(BZ!1f!1i!,z!1i!1j(BZ!1j!2Y!,z!2Y!2Z(BZ!2Z!2[(BZ!2[!2]!,z!2]!2`(BZ!2`!2o!,z!2o!2p(BZ!2p!3R!,z!3R!3S(BZ!3S!3T!,z!3T!3Z(BZ!3Z!3^!,z!3^!3a(BZ!3a!3b!,z!3b!3f(BZ!3f!3i!,z!3i!3j(BZ!3j!3k(BZ!3k!3l!,z!3l!3m(BZ!3m!3n!,z!3n!3o(BZ!3o!3p(BZ!3p!3s!,z!3s!3t(BZ!3t!3u(BZ!3u!3x!,z!3x!3{(BZ!3{!4O!,z!4O!4[(BZ!4[!4r!,z!4r!4s(BZ!4s!5y!,z!5y!6R(BZ!6R!6S!,z!6S!6V(BZ!6V!6W!,z!6W!6o(BZ!6o!6p!,z!6p!6z(BZ!6z!6{!,z!6{!7Q(BZ!7Q!7T!,z!7T!7U(BZ!7U!7p!,z!7p!7q(BZ!7q!7r(BZ!7r!7x!,z!7x!7y(BZ!7y!7z(BZ!7z!8o!,z!8o!8w(BZ!8w!8x!,z!8x!8{(BZ!8{!8|!,z!8|!9e(BZ!9e!9f!,z!9f!9p(BZ!9p!9q!,z!9q!9v(BZ!9v!9y!,z!9y!9z(BZ!9z!:l!,z!:l!:m(BZ!:m!:n!,z!:n!:o(BZ!:o!:p(BZ!:p!;P!,z!;P!;Q(BZ!;Q!;R(BZ!;R!;e!,z!;e!;m(BZ!;m!;n!,z!;n!;q(BZ!;q!;r!,z!;r!<m(BZ!<m!<o!,z!<o!<p(BZ!<p!=Q!,z!=Q!=R(BZ!=R!=d!,z!=d!=e(BZ!=e!=f(BZ!=f!>O!,z!>O!>U(BZ!>U!>Z!,z!>Z!>m(BZ!>m!>p!,z!>p!?Y(BZ!?Y!?Z!,z!?Z!?d(BZ!?d!?e!,z!?e!?f(BZ!?f!?h!,z!?h!?o(BZ!?o!@{!,z!@{!A}(BZ!A}!BO!,z!BO!BP(BZ!BP!BQ(BZ!BQ!B^!,z!B^!Be(BZ!Be!Cq!,z!Cq!Cr(BZ!Cr!Cs(BZ!Cs!Ct!,z!Ct!Cu(BZ!Cu!Cw!,z!Cw!Cx(BZ!Cx!Cy(BZ!Cy!Cz!,z!Cz!C{(BZ!C{!C}!,z!C}!DO(BZ!DO!DU!,z!DU!DY(BZ!DY!DZ!,z!DZ!Db(BZ!Db!Dc!,z!Dc!Df(BZ!Df!Dg!,z!Dg!Dh(BZ!Dh!Di!,z!Di!Dj(BZ!Dj!Dl!,z!Dl!Dm(BZ!Dm!Dn(BZ!Dn!Do!,z!Do!Ds(BZ!Ds!Dt!,z!Dt!Du(BZ!Du!Dv(BZ!Dv!EP!,z!EP!EQ(BZ!EQ!ES!,z!ES!EX(BZ!EX!EY!,z!EY!EZ(BZ!EZ!Ep!,z!Ep!Et(BZ!Et!Ff!,z!Ff!Fg(BZ!Fg!Gx!,z!Gx!HQ(BZ!HQ!HR!,z!HR!Hw(BZ!Hw!Id!,z!Id!Ii(BZ!Ii!LQ!,z!LQ!L}(BZ!L}!Mc!,z!Mc!Md(BZ!Md!Mt!,z!Mt!Mz(BZ!Mz!NO!,z!NO!NS(BZ!NS!NV!,z!NV!NW(BZ!NW!NZ!,z!NZ!N[(BZ!N[!N](BZ!N]!Nd!,z!Nd!Ng(BZ!Ng!Nk!,z!Nk!Nx(BZ!Nx# U!,z# U# V(BZ# V# h!,z# h#!`(BZ#!`#!a!,z#!a#!b(BZ#!b#!g!,z#!g#!h(BZ#!h#!j!,z#!j##g(BZ##g##h!,z##h#*s(BZ#*s#*t!,z#*t#*x(BZ#*x#*z!,z#*z#+R(BZ#+R#+S!,z#+S#+T(BZ#+T#+U!,z#+U#+Y(BZ#+Y#+[!,z#+[#,V(BZ#,V#,W!,z#,W#,[(BZ#,[#,^!,z#,^#-P(BZ#-P#-Q!,z#-Q#-U(BZ#-U#-W!,z#-W#-_(BZ#-_#-`!,z#-`#-a(BZ#-a#-b!,z#-b#-f(BZ#-f#-h!,z#-h#-w(BZ#-w#-x!,z#-x#/T(BZ#/T#/U!,z#/U#/Y(BZ#/Y#/[!,z#/[#0q(BZ#0q#1h!,z#1h#1x(BZ#1x#2Y!,z#2Y#4R(BZ#4R#4_!,z#4_#Au(BZ#Au#Aw!,z#Aw#BY(BZ#BY#BZ!,z#BZ#Bu(BZ#Bu#Bz!,z#Bz#Di(BZ#Di#EO!,z#EO#E](BZ#E]#E^!,z#E^#Eb(BZ#Eb#Ep!,z#Ep#FS(BZ#FS#Fb!,z#Fb#Ft(BZ#Ft#GS!,z#GS#Ga(BZ#Ga#Gb!,z#Gb#Ge(BZ#Ge#Gt!,z#Gt#Hz(BZ#Hz#Io!,z#Io#Ip(BZ#Ip#It!,z#It#Iu(BZ#Iu#K[!,z#K[#MW(BZ#MW#M`!,z#M`#NZ(BZ#NZ#N[!,z#N[#N](BZ#N]#Nb!,z#Nb$ z(BZ$ z$!U!,z$!U$!s(BZ$!s$#x!,z$#x$$h(BZ$$h$$j!,z$$j$$o(BZ$$o$$z!,z$$z$%x(BZ$%x$&_!,z$&_$&f(BZ$&f$'p!,z$'p$(X(BZ$(X$(b!,z$(b$)i(BZ$)i$+_!,z$+_$+`(BZ$+`$-a!,z$-a$.b(BZ$.b$.s!,z$.s$.z(BZ$.z$0T!,z$0T$0s(BZ$0s$1Q!,z$1Q$1R(BZ$1R$1S(BZ$1S$1^!,z$1^$2[(BZ$2[$2v!,z$2v$3l(BZ$3l$4g!,z$4g$4j(BZ$4j$4t!,z$4t$5j(BZ$5j$7y!,z$7y$7}(BZ$7}$8O!,z$8O$8S(BZ$8S$8V!,z$8V$8W(BZ$8W$8X(BZ$8X$8b!,z$8b$<j(BZ$<j$=|!,z$=|$DO(BZ$DO$DQ!,z$DQ$DW(BZ$DW$DY!,z$DY$EQ(BZ$EQ$ES!,z$ES$EY(BZ$EY$E[!,z$E[$Ed(BZ$Ed$Ee!,z$Ee$Ef(BZ$Ef$Eg!,z$Eg$Eh(BZ$Eh$Ei!,z$Ei$Ej(BZ$Ej$Ek!,z$Ek$F[(BZ$F[$F^!,z$F^$Ge(BZ$Ge$Gf!,z$Gf$Gm(BZ$Gm$Gn!,z$Gn$Go(BZ$Go$Gr!,z$Gr$Gu(BZ$Gu$Gv!,z$Gv$G}(BZ$G}$HQ!,z$HQ$HU(BZ$HU$HW!,z$HW$H^(BZ$H^$Hb!,z$Hb$Ho(BZ$Ho$Ht!,z$Ht$Hw(BZ$Hw$Hx!,z$Hx$IP(BZ$IP$Ki!,z$Ki$Kj(BZ$Kj$Kw!,z$Kw$Kx(BZ$Kx$LY!,z$LY$Lg(BZ$Lg$Np!,z$Np$Nq(BZ$Nq$Nu!,z$Nu$Nv(BZ$Nv$Nx!,z$Nx% S(BZ% S% T!,z% T% U(BZ% U% X!,z% X% ^(BZ% ^% d!,z% d% e(BZ% e% f!,z% f% g(BZ% g% h!,z% h% i(BZ% i% j!,z% j% n(BZ% n% o!,z% o% z(BZ% z% |!,z% |%!Q(BZ%!Q%!V!,z%!V%![(BZ%![%!`!,z%!`%!a(BZ%!a%#g!,z%#g%#h(BZ%#h%#i(BZ%#i&/x!,z&/x&0y(BZ&0y&0z!,z&0z&1{(BZ&1{&1|!,z&1|&4w(BZ&4w&4}!,z&4}&5R(BZ&5R&5U!,z&5U&5V(BZ&5V&5W(BZ&5W&5d!,z&5d&6[(BZ&6[&6]!,z&6]&6^(BZ&6^&6c!,z&6c&6d(BZ&6d&6f!,z&6f&7p(BZ&7p&7w!,z&7w&7x(BZ&7x&8Y!,z&8Y&8q(BZ&8q&8z!,z&8z&9R(BZ&9R&9S!,z&9S&9Z(BZ&9Z&9[!,z&9[&9c(BZ&9c&9d!,z&9d&9k(BZ&9k&9l!,z&9l&9s(BZ&9s&9t!,z&9t&9{(BZ&9{&9|!,z&9|&:T(BZ&:T&:U!,z&:U&:](BZ&:]&<P!,z&<P&<Q(BZ&<Q&FZ!,z&FZ&F[(BZ&F[&F](BZ&F]&GX!,z&GX&G^(BZ&G^&Gc!,z&Gc&Gd(BZ&Gd&Ge(BZ&Ge&Gi!,z&Gi&Ic(BZ&Ic&Ii!,z&Ii&Il(BZ&Il&Im!,z&Im&Kk(BZ&Kk&Kl!,z&Kl&Kp(BZ&Kp&Ku!,z&Ku&Lp(BZ&Lp&Ls!,z&Ls&Nu(BZ&Nu' W!,z' W' s(BZ' s'!z!,z'!z'#[(BZ'#['.b!,z'.b*3f(BZ*3f*5S!,z*5S40_(BZ40_41d!,z41d4Js(BZ4Js4LY!,z4LY4MY(BZ4MY4M[!,z4M[5%T(BZ5%T5%W!,z5%W5%h(BZ5%h5%r!,z5%r5%s(BZ5%s5%t(BZ5%t5&Y!,z5&Y5'Z(BZ5'Z5'k!,z5'k5(U(BZ5(U5(^!,z5(^5)v(BZ5)v5*y!,z5*y5+S(BZ5+S5+U!,z5+U5-a(BZ5-a5-c!,z5-c5-g(BZ5-g5-h!,z5-h5-l(BZ5-l5-x!,z5-x5.T(BZ5.T5/t!,z5/t50O(BZ50O50P!,z50P50S(BZ50S50T!,z50T50X(BZ50X50Y!,z50Y50q(BZ50q51`!,z51`52f(BZ52f52t!,z52t53x(BZ53x55Y!,z55Y55`(BZ55`55c!,z55c55d(BZ55d55r!,z55r56`(BZ56`56j!,z56j57R(BZ57R57l!,z57l58Z(BZ58Z58b!,z58b59c(BZ59c5:P!,z5:P5:Q(BZ5:Q5;S!,z5;S5;}(BZ5;}5<f!,z5<f5<i(BZ5<i5<j!,z5<j5<r(BZ5<r5=W!,z5=W5=o(BZ5=o5=r!,z5=r5=s(BZ5=s5=x!,z5=x5>z(BZ5>z5>{!,z5>{5>|(BZ5>|5?P!,z5?P5?Q(BZ5?Q5?R(BZ5?R5?T!,z5?T5?Y(BZ5?Y5?[!,z5?[5?](BZ5?]5?^!,z5?^5?_(BZ5?_5?w!,z5?w5?z(BZ5?z5?|!,z5?|5@X(BZ5@X5@`!,z5@`5@c(BZ5@c5@o!,z5@o5@u(BZ5@u5@w!,z5@w5@}(BZ5@}5AP!,z5AP5AV(BZ5AV5A`!,z5A`5Ag(BZ5Ag5Ah!,z5Ah5Ao(BZ5Ao5Dv!,z5Dv5Ek(BZ5Ek5FY!,z5FY;%S(BZ;%S;%`!,z;%`;%w(BZ;%w;%{!,z;%{;'O(BZ;'O;'S!,z;'S;=`!-]<%l?&r!,z?&r?.p(BZ?.p?.r!,z?.r?1Q(BZ?1Q?1x!,z?1x?2P(BZ?2P?2]!,z?2]?2b(BZ?2b?2g!,z?2g?2h(BZ?2h?2i!,z?2i?2s(BZ?2s?2t!,z?2t?3R(BZ?3R?3S!,z?3S?3X(BZ?3X?3Y!,z?3Y?3Z(BZ?3Z?3[!,z?3[?3](BZ?3]?3^(BZ?3^?3_!,z?3_?3`(BZ?3`?3a(BZ?3a?3b!,z?3b?5r(BZ?5r?6e!,z?6e?>`(BZ?>`?>r!,z?>r?@U(BZ?@U?@W!,z?@W?A`(BZ?A`?BY!,z?BY?Bf(BZ?Bf?EO!,z?EO?ET(BZ?ET?EU!,z?EU?HR(BZ?HR?Hw!,z?Hw?Ic(BZ?Ic?Ii!,z?Ii?JT(BZ?JT?J`!,z?J`?L](BZ?L]?L`!,z?L`?Lf(BZ?Lf?Lh!,z?Lh?Ln(BZ?Ln?Lp!,z?Lp?Lv(BZ?Lv?Lx!,z?Lx?L{(BZ?L{O!,zV)IS2g|SzQmPOq!-iqr)Hyrs&4yst)Hytu)Hyuv)Hyvw)Hywx(BZxz!-iz{)Hy{|)Hy|!O!-i!O!P)Hy!P!Q)Hy!Q![)Hy![!a!-i!a!b)Hy!b!c!-i!c!})Hy!}#O!-i#O#P)Hy#P#R!-i#R#S)Hy#S#T)Hy#T#o)Hy#o$p!-i$p$q)Hy$q${!-i${$|)Hy$|%Q!-i%Q%R)Hy%R%W!-i%W%o)Hy%o%p!-i%p&a)Hy&a&b!-i&b0`)Hy0`0d!-i0d0p)Hy0p1O!-i1O1T)Hy1T1[!-i1[1])Hy1]1^!-i1^1_)Hy1_4U!-i4U4Z)Hy4Z4[!-i4[4])Hy4]4^)Hy4^4`!-i4`4d)Hy4d4l!-i4l4m)Hy4m4n!-i4n4q)Hy4q4r!-i4r4s)Hy4s4t!-i4t5Y)Hy5Y5Z!-i5Z7Q)Hy7Q7R!-i7R:S)Hy:S:[!-i:[=p)Hy=p=y!-i=y>q)Hy>q>s!-i>s>t)Hy>t>{!-i>{?t)Hy?tA`!-iA`A{)HyA{BQ!-iBQBT)HyBTCS!-iCSDP)HyDPDt!-iDtDu)HyDuDv)HyDvDw!-iDwGO)HyGOGP!-iGPGQ)HyGQGa!-iGaGb)HyGbGc)HyGcGj!-iGjGk)HyGkGl)HyGlGv!-iGvGy)HyGyG{!-iG{G|)HyG|H^!-iH^H_)HyH_H`!-iH`IO)HyIOIm!-iImKj)HyKjKu!-iKuKv)HyKvL`!-iL`MR)HyMRM[!-iM[M])HyM]M^)HyM^Mb!-iMbMc)HyMcMh!-iMhNO)HyNONS!-iNSNT)HyNTN^!-iN^N_)HyN_Nb!-iNbNc)HyNcNz!-iNz! e)Hy! e!#O!-i!#O!#P)Hy!#P!#Q!-i!#Q!#])Hy!#]!%W!-i!%W!&`)Hy!&`!&c!-i!&c!&d)Hy!&d!&v!-i!&v!&w)Hy!&w!'O!-i!'O!'Y)Hy!'Y!'i!-i!'i!'p)Hy!'p!'q!-i!'q!'x)Hy!'x!'}!-i!'}!(V)Hy!(V!(X!-i!(X!(Y)Hy!(Y!(Z)Hy!(Z!(]!-i!(]!(s)Hy!(s!(t!-i!(t!({)Hy!({!(|!-i!(|!(})Hy!(}!)Q!-i!)Q!)U)Hy!)U!)X!-i!)X!)Y)Hy!)Y!)j!-i!)j!)k)Hy!)k!)x!-i!)x!)y)Hy!)y!)z)Hy!)z!){!-i!){!*O)Hy!*O!*^!-i!*^!*_)Hy!*_!*`)Hy!*`!*s!-i!*s!*y)Hy!*y!*}!-i!*}!+O)Hy!+O!+P)Hy!+P!+R!-i!+R!+i)Hy!+i!+j!-i!+j!+q)Hy!+q!+r!-i!+r!+s)Hy!+s!+t)Hy!+t!+u!-i!+u!+v)Hy!+v!+w)Hy!+w!+x!-i!+x!+y)Hy!+y!+z)Hy!+z!,k!-i!,k!,o)Hy!,o!,p!-i!,p!,q)Hy!,q!-U!-i!-U!-X)Hy!-X!-i!-i!-i!-r)Hy!-r!-s!-i!-s!-v)Hy!-v!-w!-i!-w!._)Hy!._!.`!-i!.`!.g)Hy!.g!.h!-i!.h!.i)Hy!.i!.j)Hy!.j!.k!-i!.k!.p)Hy!.p!.s!-i!.s!.t)Hy!.t!/W!-i!/W!/X)Hy!/X!/h!-i!/h!/i)Hy!/i!/j)Hy!/j!0_!-i!0_!0g)Hy!0g!0i!-i!0i!0j)Hy!0j!0k)Hy!0k!0m!-i!0m!1T)Hy!1T!1U!-i!1U!1])Hy!1]!1^!-i!1^!1_)Hy!1_!1`)Hy!1`!1a!-i!1a!1f)Hy!1f!1i!-i!1i!1j)Hy!1j!2Y!-i!2Y!2Z)Hy!2Z!2[)Hy!2[!2]!-i!2]!2`)Hy!2`!2o!-i!2o!2p)Hy!2p!3R!-i!3R!3S)Hy!3S!3T!-i!3T!3Z)Hy!3Z!3^!-i!3^!3a)Hy!3a!3b!-i!3b!3f)Hy!3f!3i!-i!3i!3j)Hy!3j!3k)Hy!3k!3l!-i!3l!3m)Hy!3m!3n!-i!3n!3o)Hy!3o!3p)Hy!3p!3s!-i!3s!3t)Hy!3t!3u)Hy!3u!3x!-i!3x!3{)Hy!3{!4O!-i!4O!4[)Hy!4[!4r!-i!4r!4s)Hy!4s!5y!-i!5y!6R)Hy!6R!6S!-i!6S!6V)Hy!6V!6W!-i!6W!6o)Hy!6o!6p!-i!6p!6z)Hy!6z!6{!-i!6{!7Q)Hy!7Q!7T!-i!7T!7U)Hy!7U!7p!-i!7p!7q)Hy!7q!7r)Hy!7r!7x!-i!7x!7y)Hy!7y!7z)Hy!7z!8o!-i!8o!8w)Hy!8w!8x!-i!8x!8{)Hy!8{!8|!-i!8|!9e)Hy!9e!9f!-i!9f!9p)Hy!9p!9q!-i!9q!9v)Hy!9v!9y!-i!9y!9z)Hy!9z!:l!-i!:l!:m)Hy!:m!:n!-i!:n!:o)Hy!:o!:p)Hy!:p!;P!-i!;P!;Q)Hy!;Q!;R)Hy!;R!;e!-i!;e!;m)Hy!;m!;n!-i!;n!;q)Hy!;q!;r!-i!;r!<m)Hy!<m!<o!-i!<o!<p)Hy!<p!=Q!-i!=Q!=R)Hy!=R!=d!-i!=d!=e)Hy!=e!=f)Hy!=f!>O!-i!>O!>U)Hy!>U!>Z!-i!>Z!>m)Hy!>m!>p!-i!>p!?Y)Hy!?Y!?Z!-i!?Z!?d)Hy!?d!?e!-i!?e!?f)Hy!?f!?h!-i!?h!?o)Hy!?o!@{!-i!@{!A})Hy!A}!BO!-i!BO!BP)Hy!BP!BQ)Hy!BQ!B^!-i!B^!Be)Hy!Be!Cq!-i!Cq!Cr)Hy!Cr!Cs)Hy!Cs!Ct!-i!Ct!Cu)Hy!Cu!Cw!-i!Cw!Cx)Hy!Cx!Cy)Hy!Cy!Cz!-i!Cz!C{)Hy!C{!C}!-i!C}!DO)Hy!DO!DU!-i!DU!DY)Hy!DY!DZ!-i!DZ!Db)Hy!Db!Dc!-i!Dc!Df)Hy!Df!Dg!-i!Dg!Dh)Hy!Dh!Di!-i!Di!Dj)Hy!Dj!Dl!-i!Dl!Dm)Hy!Dm!Dn)Hy!Dn!Do!-i!Do!Ds)Hy!Ds!Dt!-i!Dt!Du)Hy!Du!Dv)Hy!Dv!EP!-i!EP!EQ)Hy!EQ!ES!-i!ES!EX)Hy!EX!EY!-i!EY!EZ)Hy!EZ!Ep!-i!Ep!Et)Hy!Et!Ff!-i!Ff!Fg)Hy!Fg!Gx!-i!Gx!HQ)Hy!HQ!HR!-i!HR!Hw)Hy!Hw!Id!-i!Id!Ii)Hy!Ii!LQ!-i!LQ!L})Hy!L}!Mc!-i!Mc!Md)Hy!Md!Mt!-i!Mt!Mz)Hy!Mz!NO!-i!NO!NS)Hy!NS!NV!-i!NV!NW)Hy!NW!NZ!-i!NZ!N[)Hy!N[!N])Hy!N]!Nd!-i!Nd!Ng)Hy!Ng!Nk!-i!Nk!Nx)Hy!Nx# U!-i# U# V)Hy# V# h!-i# h#!`)Hy#!`#!a!-i#!a#!b)Hy#!b#!g!-i#!g#!h)Hy#!h#!j!-i#!j##g)Hy##g##h!-i##h#*s)Hy#*s#*t!-i#*t#*x)Hy#*x#*z!-i#*z#+R)Hy#+R#+S!-i#+S#+T)Hy#+T#+U!-i#+U#+Y)Hy#+Y#+[!-i#+[#,V)Hy#,V#,W!-i#,W#,[)Hy#,[#,^!-i#,^#-P)Hy#-P#-Q!-i#-Q#-U)Hy#-U#-W!-i#-W#-_)Hy#-_#-`!-i#-`#-a)Hy#-a#-b!-i#-b#-f)Hy#-f#-h!-i#-h#-w)Hy#-w#-x!-i#-x#/T)Hy#/T#/U!-i#/U#/Y)Hy#/Y#/[!-i#/[#0q)Hy#0q#1h!-i#1h#1x)Hy#1x#2Y!-i#2Y#4R)Hy#4R#4_!-i#4_#Au)Hy#Au#Aw!-i#Aw#BY)Hy#BY#BZ!-i#BZ#Bu)Hy#Bu#Bz!-i#Bz#Di)Hy#Di#EO!-i#EO#E])Hy#E]#E^!-i#E^#Eb)Hy#Eb#Ep!-i#Ep#FS)Hy#FS#Fb!-i#Fb#Ft)Hy#Ft#GS!-i#GS#Ga)Hy#Ga#Gb!-i#Gb#Ge)Hy#Ge#Gt!-i#Gt#Hz)Hy#Hz#Io!-i#Io#Ip)Hy#Ip#It!-i#It#Iu)Hy#Iu#K[!-i#K[#MW)Hy#MW#M`!-i#M`#NZ)Hy#NZ#N[!-i#N[#N])Hy#N]#Nb!-i#Nb$ z)Hy$ z$!U!-i$!U$!s)Hy$!s$#x!-i$#x$$h)Hy$$h$$j!-i$$j$$o)Hy$$o$$z!-i$$z$%x)Hy$%x$&_!-i$&_$&f)Hy$&f$'p!-i$'p$(X)Hy$(X$(b!-i$(b$)i)Hy$)i$+_!-i$+_$+`)Hy$+`$-a!-i$-a$.b)Hy$.b$.s!-i$.s$.z)Hy$.z$0T!-i$0T$0s)Hy$0s$1Q!-i$1Q$1R)Hy$1R$1S)Hy$1S$1^!-i$1^$2[)Hy$2[$2v!-i$2v$3l)Hy$3l$4g!-i$4g$4j)Hy$4j$4t!-i$4t$5j)Hy$5j$7y!-i$7y$7})Hy$7}$8O!-i$8O$8S)Hy$8S$8V!-i$8V$8W)Hy$8W$8X)Hy$8X$8b!-i$8b$<j)Hy$<j$=|!-i$=|$DO)Hy$DO$DQ!-i$DQ$DW)Hy$DW$DY!-i$DY$EQ)Hy$EQ$ES!-i$ES$EY)Hy$EY$E[!-i$E[$Ed)Hy$Ed$Ee!-i$Ee$Ef)Hy$Ef$Eg!-i$Eg$Eh)Hy$Eh$Ei!-i$Ei$Ej)Hy$Ej$Ek!-i$Ek$F[)Hy$F[$F^!-i$F^$Ge)Hy$Ge$Gf!-i$Gf$Gm)Hy$Gm$Gn!-i$Gn$Go)Hy$Go$Gr!-i$Gr$Gu)Hy$Gu$Gv!-i$Gv$G})Hy$G}$HQ!-i$HQ$HU)Hy$HU$HW!-i$HW$H^)Hy$H^$Hb!-i$Hb$Ho)Hy$Ho$Ht!-i$Ht$Hw)Hy$Hw$Hx!-i$Hx$IP)Hy$IP$Ki!-i$Ki$Kj)Hy$Kj$Kw!-i$Kw$Kx)Hy$Kx$LY!-i$LY$Lg)Hy$Lg$Np!-i$Np$Nq)Hy$Nq$Nu!-i$Nu$Nv)Hy$Nv$Nx!-i$Nx% S)Hy% S% T!-i% T% U)Hy% U% X!-i% X% ^)Hy% ^% d!-i% d% e)Hy% e% f!-i% f% g)Hy% g% h!-i% h% i)Hy% i% j!-i% j% n)Hy% n% o!-i% o% z)Hy% z% |!-i% |%!Q)Hy%!Q%!V!-i%!V%![)Hy%![%!`!-i%!`%!a)Hy%!a%#g!-i%#g%#h)Hy%#h%#i)Hy%#i&/x!-i&/x&0y)Hy&0y&0z!-i&0z&1{)Hy&1{&1|!-i&1|&4w)Hy&4w&4}!-i&4}&5R)Hy&5R&5U!-i&5U&5V)Hy&5V&5W)Hy&5W&5d!-i&5d&6[)Hy&6[&6]!-i&6]&6^)Hy&6^&6c!-i&6c&6d)Hy&6d&6f!-i&6f&7p)Hy&7p&7w!-i&7w&7x)Hy&7x&8Y!-i&8Y&8q)Hy&8q&8z!-i&8z&9R)Hy&9R&9S!-i&9S&9Z)Hy&9Z&9[!-i&9[&9c)Hy&9c&9d!-i&9d&9k)Hy&9k&9l!-i&9l&9s)Hy&9s&9t!-i&9t&9{)Hy&9{&9|!-i&9|&:T)Hy&:T&:U!-i&:U&:])Hy&:]&<P!-i&<P&<Q)Hy&<Q&FZ!-i&FZ&F[)Hy&F[&F])Hy&F]&GX!-i&GX&G^)Hy&G^&Gc!-i&Gc&Gd)Hy&Gd&Ge)Hy&Ge&Gi!-i&Gi&Ic)Hy&Ic&Ii!-i&Ii&Il)Hy&Il&Im!-i&Im&Kk)Hy&Kk&Kl!-i&Kl&Kp)Hy&Kp&Ku!-i&Ku&Lp)Hy&Lp&Ls!-i&Ls&Nu)Hy&Nu' W!-i' W' s)Hy' s'!z!-i'!z'#[)Hy'#['.b!-i'.b*3f)Hy*3f*5S!-i*5S40_)Hy40_41d!-i41d4Js)Hy4Js4LY!-i4LY4MY)Hy4MY4M[!-i4M[5%T)Hy5%T5%W!-i5%W5%h)Hy5%h5%r!-i5%r5%s)Hy5%s5%t)Hy5%t5&Y!-i5&Y5'Z)Hy5'Z5'k!-i5'k5(U)Hy5(U5(^!-i5(^5)v)Hy5)v5*y!-i5*y5+S)Hy5+S5+U!-i5+U5-a)Hy5-a5-c!-i5-c5-g)Hy5-g5-h!-i5-h5-l)Hy5-l5-x!-i5-x5.T)Hy5.T5/t!-i5/t50O)Hy50O50P!-i50P50S)Hy50S50T!-i50T50X)Hy50X50Y!-i50Y50q)Hy50q51`!-i51`52f)Hy52f52t!-i52t53x)Hy53x55Y!-i55Y55`)Hy55`55c!-i55c55d)Hy55d55r!-i55r56`)Hy56`56j!-i56j57R)Hy57R57l!-i57l58Z)Hy58Z58b!-i58b59c)Hy59c5:P!-i5:P5:Q)Hy5:Q5;S!-i5;S5;})Hy5;}5<f!-i5<f5<i)Hy5<i5<j!-i5<j5<r)Hy5<r5=W!-i5=W5=o)Hy5=o5=r!-i5=r5=s)Hy5=s5=x!-i5=x5>z)Hy5>z5>{!-i5>{5>|)Hy5>|5?P!-i5?P5?Q)Hy5?Q5?R)Hy5?R5?T!-i5?T5?Y)Hy5?Y5?[!-i5?[5?])Hy5?]5?^!-i5?^5?_)Hy5?_5?w!-i5?w5?z)Hy5?z5?|!-i5?|5@X)Hy5@X5@`!-i5@`5@c)Hy5@c5@o!-i5@o5@u)Hy5@u5@w!-i5@w5@})Hy5@}5AP!-i5AP5AV)Hy5AV5A`!-i5A`5Ag)Hy5Ag5Ah!-i5Ah5Ao)Hy5Ao5Dv!-i5Dv5Ek)Hy5Ek5FY!-i5FY;%S)Hy;%S;%`!-i;%`;%w)Hy;%w;%{!-i;%{;'O)Hy;'O;'S!-i;'S;=`!.V<%l?&r!-i?&r?.p)Hy?.p?.r!-i?.r?1Q)Hy?1Q?1x!-i?1x?2P)Hy?2P?2]!-i?2]?2b)Hy?2b?2g!-i?2g?2h)Hy?2h?2i!-i?2i?2s)Hy?2s?2t!-i?2t?3R)Hy?3R?3S!-i?3S?3X)Hy?3X?3Y!-i?3Y?3Z)Hy?3Z?3[!-i?3[?3])Hy?3]?3^)Hy?3^?3_!-i?3_?3`)Hy?3`?3a)Hy?3a?3b!-i?3b?5r)Hy?5r?6e!-i?6e?>`)Hy?>`?>r!-i?>r?@U)Hy?@U?@W!-i?@W?A`)Hy?A`?BY!-i?BY?Bf)Hy?Bf?EO!-i?EO?ET)Hy?ET?EU!-i?EU?HR)Hy?HR?Hw!-i?Hw?Ic)Hy?Ic?Ii!-i?Ii?JT)Hy?JT?J`!-i?J`?L])Hy?L]?L`!-i?L`?Lf)Hy?Lf?Lh!-i?Lh?Ln)Hy?Ln?Lp!-i?Lp?Lv)Hy?Lv?Lx!-i?Lx?L{)Hy?L{O!-i_+ v2g!OWzQ{TmPOq!*jqr#9krs#9kst#9ktu#9kuv#9kvw#9kwx$@]xz!*jz{#9k{|#9k|!O!*j!O!P#9k!P!Q#9k!Q![#9k![!a!*j!a!b#9k!b!c!*j!c!}#9k!}#O!*j#O#P#9k#P#R!*j#R#S#9k#S#T&4y#T#o#9k#o$p!*j$p$q#9k$q${!*j${$|#9k$|%Q!*j%Q%R#9k%R%W!*j%W%o#9k%o%p!*j%p&a#9k&a&b!*j&b0`#9k0`0d!*j0d0p#9k0p1O!*j1O1T#9k1T1[!*j1[1]#9k1]1^!*j1^1_#9k1_4U!*j4U4Z#9k4Z4[!*j4[4]#9k4]4^#9k4^4`!*j4`4d#9k4d4l!*j4l4m#9k4m4n!*j4n4q#9k4q4r!*j4r4s#9k4s4t!*j4t5Y#9k5Y5Z!*j5Z7Q#9k7Q7R!*j7R:S#9k:S:[!*j:[=p#9k=p=y!*j=y>q#9k>q>s!*j>s>t#9k>t>{!*j>{?t#9k?tA`!*jA`A{#9kA{BQ!*jBQBT#9kBTCS!*jCSDP#9kDPDt!*jDtDu#9kDuDv#9kDvDw!*jDwGO#9kGOGP!*jGPGQ#9kGQGa!*jGaGb#9kGbGc#9kGcGj!*jGjGk#9kGkGl#9kGlGv!*jGvGy#9kGyG{!*jG{G|#9kG|H^!*jH^H_#9kH_H`!*jH`IO#9kIOIm!*jImKj#9kKjKu!*jKuKv#9kKvL`!*jL`MR#9kMRM[!*jM[M]#9kM]M^#9kM^Mb!*jMbMc#9kMcMh!*jMhNO#9kNONS!*jNSNT#9kNTN^!*jN^N_#9kN_Nb!*jNbNc#9kNcNz!*jNz! e#9k! e!#O!*j!#O!#P#9k!#P!#Q!*j!#Q!#]#9k!#]!%W!*j!%W!&`#9k!&`!&c!*j!&c!&d#9k!&d!&v!*j!&v!&w#9k!&w!'O!*j!'O!'Y#9k!'Y!'i!*j!'i!'p#9k!'p!'q!*j!'q!'x#9k!'x!'}!*j!'}!(V#9k!(V!(X!*j!(X!(Y#9k!(Y!(Z#9k!(Z!(]!*j!(]!(s#9k!(s!(t!*j!(t!({#9k!({!(|!*j!(|!(}#9k!(}!)Q!*j!)Q!)U#9k!)U!)X!*j!)X!)Y#9k!)Y!)j!*j!)j!)k#9k!)k!)x!*j!)x!)y#9k!)y!)z#9k!)z!){!*j!){!*O#9k!*O!*^!*j!*^!*_#9k!*_!*`#9k!*`!*s!*j!*s!*y#9k!*y!*}!*j!*}!+O#9k!+O!+P#9k!+P!+R!*j!+R!+i#9k!+i!+j!*j!+j!+q#9k!+q!+r!*j!+r!+s#9k!+s!+t#9k!+t!+u!*j!+u!+v#9k!+v!+w#9k!+w!+x!*j!+x!+y#9k!+y!+z#9k!+z!,k!*j!,k!,o#9k!,o!,p!*j!,p!,q#9k!,q!-U!*j!-U!-X#9k!-X!-i!*j!-i!-r#9k!-r!-s!*j!-s!-v#9k!-v!-w!*j!-w!._#9k!._!.`!*j!.`!.g#9k!.g!.h!*j!.h!.i#9k!.i!.j#9k!.j!.k!*j!.k!.p#9k!.p!.s!*j!.s!.t#9k!.t!/W!*j!/W!/X#9k!/X!/h!*j!/h!/i#9k!/i!/j#9k!/j!0_!*j!0_!0g#9k!0g!0i!*j!0i!0j#9k!0j!0k#9k!0k!0m!*j!0m!1T#9k!1T!1U!*j!1U!1]#9k!1]!1^!*j!1^!1_#9k!1_!1`#9k!1`!1a!*j!1a!1f#9k!1f!1i!*j!1i!1j#9k!1j!2Y!*j!2Y!2Z#9k!2Z!2[#9k!2[!2]!*j!2]!2`#9k!2`!2o!*j!2o!2p#9k!2p!3R!*j!3R!3S#9k!3S!3T!*j!3T!3Z#9k!3Z!3^!*j!3^!3a#9k!3a!3b!*j!3b!3f#9k!3f!3i!*j!3i!3j#9k!3j!3k#9k!3k!3l!*j!3l!3m#9k!3m!3n!*j!3n!3o#9k!3o!3p#9k!3p!3s!*j!3s!3t#9k!3t!3u#9k!3u!3x!*j!3x!3{#9k!3{!4O!*j!4O!4[#9k!4[!4r!*j!4r!4s#9k!4s!5y!*j!5y!6R#9k!6R!6S!*j!6S!6V#9k!6V!6W!*j!6W!6o#9k!6o!6p!*j!6p!6z#9k!6z!6{!*j!6{!7Q#9k!7Q!7T!*j!7T!7U#9k!7U!7p!*j!7p!7q#9k!7q!7r#9k!7r!7x!*j!7x!7y#9k!7y!7z#9k!7z!8o!*j!8o!8w#9k!8w!8x!*j!8x!8{#9k!8{!8|!*j!8|!9e#9k!9e!9f!*j!9f!9p#9k!9p!9q!*j!9q!9v#9k!9v!9y!*j!9y!9z#9k!9z!:l!*j!:l!:m#9k!:m!:n!*j!:n!:o#9k!:o!:p#9k!:p!;P!*j!;P!;Q#9k!;Q!;R#9k!;R!;e!*j!;e!;m#9k!;m!;n!*j!;n!;q#9k!;q!;r!*j!;r!<m#9k!<m!<o!*j!<o!<p#9k!<p!=Q!*j!=Q!=R#9k!=R!=d!*j!=d!=e#9k!=e!=f#9k!=f!>O!*j!>O!>U#9k!>U!>Z!*j!>Z!>m#9k!>m!>p!*j!>p!?Y#9k!?Y!?Z!*j!?Z!?d#9k!?d!?e!*j!?e!?f#9k!?f!?h!*j!?h!?o#9k!?o!@{!*j!@{!A}#9k!A}!BO!*j!BO!BP#9k!BP!BQ#9k!BQ!B^!*j!B^!Be#9k!Be!Cq!*j!Cq!Cr#9k!Cr!Cs#9k!Cs!Ct!*j!Ct!Cu#9k!Cu!Cw!*j!Cw!Cx#9k!Cx!Cy#9k!Cy!Cz!*j!Cz!C{#9k!C{!C}!*j!C}!DO#9k!DO!DU!*j!DU!DY#9k!DY!DZ!*j!DZ!Db#9k!Db!Dc!*j!Dc!Df#9k!Df!Dg!*j!Dg!Dh#9k!Dh!Di!*j!Di!Dj#9k!Dj!Dl!*j!Dl!Dm#9k!Dm!Dn#9k!Dn!Do!*j!Do!Ds#9k!Ds!Dt!*j!Dt!Du#9k!Du!Dv#9k!Dv!EP!*j!EP!EQ#9k!EQ!ES!*j!ES!EX#9k!EX!EY!*j!EY!EZ#9k!EZ!Ep!*j!Ep!Et#9k!Et!Ff!*j!Ff!Fg#9k!Fg!Gx!*j!Gx!HQ#9k!HQ!HR!*j!HR!Hw#9k!Hw!Id!*j!Id!Ii#9k!Ii!LQ!*j!LQ!L}#9k!L}!Mc!*j!Mc!Md#9k!Md!Mt!*j!Mt!Mz#9k!Mz!NO!*j!NO!NS#9k!NS!NV!*j!NV!NW#9k!NW!NZ!*j!NZ!N[#9k!N[!N]#9k!N]!Nd!*j!Nd!Ng#9k!Ng!Nk!*j!Nk!Nx#9k!Nx# U!*j# U# V#9k# V# h!*j# h#!`#9k#!`#!a!*j#!a#!b#9k#!b#!g!*j#!g#!h#9k#!h#!j!*j#!j##g#9k##g##h!*j##h#*s#9k#*s#*t!*j#*t#*x#9k#*x#*z!*j#*z#+R#9k#+R#+S!*j#+S#+T#9k#+T#+U!*j#+U#+Y#9k#+Y#+[!*j#+[#,V#9k#,V#,W!*j#,W#,[#9k#,[#,^!*j#,^#-P#9k#-P#-Q!*j#-Q#-U#9k#-U#-W!*j#-W#-_#9k#-_#-`!*j#-`#-a#9k#-a#-b!*j#-b#-f#9k#-f#-h!*j#-h#-w#9k#-w#-x!*j#-x#/T#9k#/T#/U!*j#/U#/Y#9k#/Y#/[!*j#/[#0q#9k#0q#1h!*j#1h#1x#9k#1x#2Y!*j#2Y#4R#9k#4R#4_!*j#4_#Au#9k#Au#Aw!*j#Aw#BY#9k#BY#BZ!*j#BZ#Bu#9k#Bu#Bz!*j#Bz#Di#9k#Di#EO!*j#EO#E]#9k#E]#E^!*j#E^#Eb#9k#Eb#Ep!*j#Ep#FS#9k#FS#Fb!*j#Fb#Ft#9k#Ft#GS!*j#GS#Ga#9k#Ga#Gb!*j#Gb#Ge#9k#Ge#Gt!*j#Gt#Hz#9k#Hz#Io!*j#Io#Ip#9k#Ip#It!*j#It#Iu#9k#Iu#K[!*j#K[#MW#9k#MW#M`!*j#M`#NZ#9k#NZ#N[!*j#N[#N]#9k#N]#Nb!*j#Nb$ z#9k$ z$!U!*j$!U$!s#9k$!s$#x!*j$#x$$h#9k$$h$$j!*j$$j$$o#9k$$o$$z!*j$$z$%x#9k$%x$&_!*j$&_$&f#9k$&f$'p!*j$'p$(X#9k$(X$(b!*j$(b$)i#9k$)i$+_!*j$+_$+`#9k$+`$-a!*j$-a$.b#9k$.b$.s!*j$.s$.z#9k$.z$0T!*j$0T$0s#9k$0s$1Q!*j$1Q$1R#9k$1R$1S#9k$1S$1^!*j$1^$2[#9k$2[$2v!*j$2v$3l#9k$3l$4g!*j$4g$4j#9k$4j$4t!*j$4t$5j#9k$5j$7y!*j$7y$7}#9k$7}$8O!*j$8O$8S#9k$8S$8V!*j$8V$8W#9k$8W$8X#9k$8X$8b!*j$8b$<j#9k$<j$=|!*j$=|$DO#9k$DO$DQ!*j$DQ$DW#9k$DW$DY!*j$DY$EQ#9k$EQ$ES!*j$ES$EY#9k$EY$E[!*j$E[$Ed#9k$Ed$Ee!*j$Ee$Ef#9k$Ef$Eg!*j$Eg$Eh#9k$Eh$Ei!*j$Ei$Ej#9k$Ej$Ek!*j$Ek$F[#9k$F[$F^!*j$F^$Ge#9k$Ge$Gf!*j$Gf$Gm#9k$Gm$Gn!*j$Gn$Go#9k$Go$Gr!*j$Gr$Gu#9k$Gu$Gv!*j$Gv$G}#9k$G}$HQ!*j$HQ$HU#9k$HU$HW!*j$HW$H^#9k$H^$Hb!*j$Hb$Ho#9k$Ho$Ht!*j$Ht$Hw#9k$Hw$Hx!*j$Hx$IP#9k$IP$Ki!*j$Ki$Kj#9k$Kj$Kw!*j$Kw$Kx#9k$Kx$LY!*j$LY$Lg#9k$Lg$Np!*j$Np$Nq#9k$Nq$Nu!*j$Nu$Nv#9k$Nv$Nx!*j$Nx% S#9k% S% T!*j% T% U#9k% U% X!*j% X% ^#9k% ^% d!*j% d% e#9k% e% f!*j% f% g#9k% g% h!*j% h% i#9k% i% j!*j% j% n#9k% n% o!*j% o% z#9k% z% |!*j% |%!Q#9k%!Q%!V!*j%!V%![#9k%![%!`!*j%!`%!a#9k%!a%#g!*j%#g%#h#9k%#h%#i#9k%#i&/x!*j&/x&0y#9k&0y&0z!*j&0z&1{#9k&1{&1|!*j&1|&4w#9k&4w&4}!*j&4}&5R#9k&5R&5U!*j&5U&5V#9k&5V&5W#9k&5W&5d!*j&5d&6[#9k&6[&6]!*j&6]&6^#9k&6^&6c!*j&6c&6d#9k&6d&6f!*j&6f&7p#9k&7p&7w!*j&7w&7x#9k&7x&8Y!*j&8Y&8q#9k&8q&8z!*j&8z&9R#9k&9R&9S!*j&9S&9Z#9k&9Z&9[!*j&9[&9c#9k&9c&9d!*j&9d&9k#9k&9k&9l!*j&9l&9s#9k&9s&9t!*j&9t&9{#9k&9{&9|!*j&9|&:T#9k&:T&:U!*j&:U&:]#9k&:]&<P!*j&<P&<Q#9k&<Q&FZ!*j&FZ&F[#9k&F[&F]#9k&F]&GX!*j&GX&G^#9k&G^&Gc!*j&Gc&Gd#9k&Gd&Ge#9k&Ge&Gi!*j&Gi&Ic#9k&Ic&Ii!*j&Ii&Il#9k&Il&Im!*j&Im&Kk#9k&Kk&Kl!*j&Kl&Kp#9k&Kp&Ku!*j&Ku&Lp#9k&Lp&Ls!*j&Ls&Nu#9k&Nu' W!*j' W' s#9k' s'!z!*j'!z'#[#9k'#['.b!*j'.b*3f#9k*3f*5S!*j*5S40_#9k40_41d!*j41d4Js#9k4Js4LY!*j4LY4MY#9k4MY4M[!*j4M[5%T#9k5%T5%W!*j5%W5%h#9k5%h5%r!*j5%r5%s#9k5%s5%t#9k5%t5&Y!*j5&Y5'Z#9k5'Z5'k!*j5'k5(U#9k5(U5(^!*j5(^5)v#9k5)v5*y!*j5*y5+S#9k5+S5+U!*j5+U5-a#9k5-a5-c!*j5-c5-g#9k5-g5-h!*j5-h5-l#9k5-l5-x!*j5-x5.T#9k5.T5/t!*j5/t50O#9k50O50P!*j50P50S#9k50S50T!*j50T50X#9k50X50Y!*j50Y50q#9k50q51`!*j51`52f#9k52f52t!*j52t53x#9k53x55Y!*j55Y55`#9k55`55c!*j55c55d#9k55d55r!*j55r56`#9k56`56j!*j56j57R#9k57R57l!*j57l58Z#9k58Z58b!*j58b59c#9k59c5:P!*j5:P5:Q#9k5:Q5;S!*j5;S5;}#9k5;}5<f!*j5<f5<i#9k5<i5<j!*j5<j5<r#9k5<r5=W!*j5=W5=o#9k5=o5=r!*j5=r5=s#9k5=s5=x!*j5=x5>z#9k5>z5>{!*j5>{5>|#9k5>|5?P!*j5?P5?Q#9k5?Q5?R#9k5?R5?T!*j5?T5?Y#9k5?Y5?[!*j5?[5?]#9k5?]5?^!*j5?^5?_#9k5?_5?w!*j5?w5?z#9k5?z5?|!*j5?|5@X#9k5@X5@`!*j5@`5@c#9k5@c5@o!*j5@o5@u#9k5@u5@w!*j5@w5@}#9k5@}5AP!*j5AP5AV#9k5AV5A`!*j5A`5Ag#9k5Ag5Ah!*j5Ah5Ao#9k5Ao5Dv!*j5Dv5Ek#9k5Ek5FY!*j5FY;%S#9k;%S;%`!*j;%`;%w#9k;%w;%{!*j;%{;'O#9k;'O;'S!*j;'S;=`!,W<%l?&r!*j?&r?.p#9k?.p?.r!*j?.r?1Q#9k?1Q?1x!*j?1x?2P#9k?2P?2]!*j?2]?2b#9k?2b?2g!*j?2g?2h#9k?2h?2i!*j?2i?2s#9k?2s?2t!*j?2t?3R#9k?3R?3S!*j?3S?3X#9k?3X?3Y!*j?3Y?3Z#9k?3Z?3[!*j?3[?3]#9k?3]?3^#9k?3^?3_!*j?3_?3`#9k?3`?3a#9k?3a?3b!*j?3b?5r#9k?5r?6e!*j?6e?>`#9k?>`?>r!*j?>r?@U#9k?@U?@W!*j?@W?A`#9k?A`?BY!*j?BY?Bf#9k?Bf?EO!*j?EO?ET#9k?ET?EU!*j?EU?HR#9k?HR?Hw!*j?Hw?Ic#9k?Ic?Ii!*j?Ii?JT#9k?JT?J`!*j?J`?L]#9k?L]?L`!*j?L`?Lf#9k?Lf?Lh!*j?Lh?Ln#9k?Ln?Lp!*j?Lp?Lv#9k?Lv?Lx!*j?Lx?L{#9k?L{O!*j!a,(j2g!OW|SzQmPOq!)tqr!2wrs#9kst!2wtu!2wuv-/Rvw!2wwx';ixz!)tz{!2w{|!2w|!O!)t!O!P!2w!P!Q!2w!Q![!2w![!a!)t!a!b!2w!b!c!)t!c!}!2w!}#O!)t#O#P!2w#P#R!)t#R#S!2w#S#T)Hy#T#o!2w#o$p!)t$p$q!2w$q${!)t${$|!2w$|%Q!)t%Q%R!2w%R%W!)t%W%o!2w%o%p!)t%p&a!2w&a&b!)t&b0`!2w0`0d!)t0d0p!2w0p1O!)t1O1T!2w1T1[!)t1[1]!2w1]1^!)t1^1_!2w1_4U!)t4U4Z!2w4Z4[!)t4[4]!2w4]4^!2w4^4`!)t4`4d!2w4d4l!)t4l4m!2w4m4n!)t4n4q!2w4q4r!)t4r4s!2w4s4t!)t4t5Y!2w5Y5Z!)t5Z7Q!2w7Q7R!)t7R:S!2w:S:[!)t:[=p!2w=p=y!)t=y>q!2w>q>s!)t>s>t!2w>t>{!)t>{?t!2w?tA`!)tA`A{!2wA{BQ!)tBQBT!2wBTCS!)tCSDP!2wDPDt!)tDtDu!2wDuDv!2wDvDw!)tDwGO!2wGOGP!)tGPGQ!2wGQGa!)tGaGb!2wGbGc!2wGcGj!)tGjGk!2wGkGl!2wGlGv!)tGvGy!2wGyG{!)tG{G|!2wG|H^!)tH^H_!2wH_H`!)tH`IO!2wIOIm!)tImKj!2wKjKu!)tKuKv!2wKvL`!)tL`MR!2wMRM[!)tM[M]!2wM]M^!2wM^Mb!)tMbMc!2wMcMh!)tMhNO!2wNONS!)tNSNT!2wNTN^!)tN^N_!2wN_Nb!)tNbNc!2wNcNz!)tNz! e!2w! e!#O!)t!#O!#P!2w!#P!#Q!)t!#Q!#]!2w!#]!%W!)t!%W!&`!2w!&`!&c!)t!&c!&d!2w!&d!&v!)t!&v!&w!2w!&w!'O!)t!'O!'Y!2w!'Y!'i!)t!'i!'p!2w!'p!'q!)t!'q!'x!2w!'x!'}!)t!'}!(V!2w!(V!(X!)t!(X!(Y!2w!(Y!(Z!2w!(Z!(]!)t!(]!(s!2w!(s!(t!)t!(t!({!2w!({!(|!)t!(|!(}!2w!(}!)Q!)t!)Q!)U!2w!)U!)X!)t!)X!)Y!2w!)Y!)j!)t!)j!)k!2w!)k!)x!)t!)x!)y!2w!)y!)z!2w!)z!){!)t!){!*O!2w!*O!*^!)t!*^!*_!2w!*_!*`!2w!*`!*s!)t!*s!*y!2w!*y!*}!)t!*}!+O!2w!+O!+P!2w!+P!+R!)t!+R!+i!2w!+i!+j!)t!+j!+q!2w!+q!+r!)t!+r!+s!2w!+s!+t!2w!+t!+u!)t!+u!+v!2w!+v!+w!2w!+w!+x!)t!+x!+y!2w!+y!+z!2w!+z!,k!)t!,k!,o!2w!,o!,p!)t!,p!,q!2w!,q!-U!)t!-U!-X!2w!-X!-i!)t!-i!-r!2w!-r!-s!)t!-s!-v!2w!-v!-w!)t!-w!._!2w!._!.`!)t!.`!.g!2w!.g!.h!)t!.h!.i!2w!.i!.j!2w!.j!.k!)t!.k!.p!2w!.p!.s!)t!.s!.t!2w!.t!/W!)t!/W!/X!2w!/X!/h!)t!/h!/i!2w!/i!/j!2w!/j!0_!)t!0_!0g!2w!0g!0i!)t!0i!0j!2w!0j!0k!2w!0k!0m!)t!0m!1T!2w!1T!1U!)t!1U!1]!2w!1]!1^!)t!1^!1_!2w!1_!1`!2w!1`!1a!)t!1a!1f!2w!1f!1i!)t!1i!1j!2w!1j!2Y!)t!2Y!2Z!2w!2Z!2[!2w!2[!2]!)t!2]!2`!2w!2`!2o!)t!2o!2p!2w!2p!3R!)t!3R!3S!2w!3S!3T!)t!3T!3Z!2w!3Z!3^!)t!3^!3a!2w!3a!3b!)t!3b!3f!2w!3f!3i!)t!3i!3j!2w!3j!3k!2w!3k!3l!)t!3l!3m!2w!3m!3n!)t!3n!3o!2w!3o!3p!2w!3p!3s!)t!3s!3t!2w!3t!3u!2w!3u!3x!)t!3x!3{!2w!3{!4O!)t!4O!4[!2w!4[!4r!)t!4r!4s!2w!4s!5y!)t!5y!6R!2w!6R!6S!)t!6S!6V!2w!6V!6W!)t!6W!6o!2w!6o!6p!)t!6p!6z!2w!6z!6{!)t!6{!7Q!2w!7Q!7T!)t!7T!7U!2w!7U!7p!)t!7p!7q!2w!7q!7r!2w!7r!7x!)t!7x!7y!2w!7y!7z!2w!7z!8o!)t!8o!8w!2w!8w!8x!)t!8x!8{!2w!8{!8|!)t!8|!9e!2w!9e!9f!)t!9f!9p!2w!9p!9q!)t!9q!9v!2w!9v!9y!)t!9y!9z!2w!9z!:l!)t!:l!:m!2w!:m!:n!)t!:n!:o!2w!:o!:p!2w!:p!;P!)t!;P!;Q!2w!;Q!;R!2w!;R!;e!)t!;e!;m!2w!;m!;n!)t!;n!;q!2w!;q!;r!)t!;r!<m!2w!<m!<o!)t!<o!<p!2w!<p!=Q!)t!=Q!=R!2w!=R!=d!)t!=d!=e!2w!=e!=f!2w!=f!>O!)t!>O!>U!2w!>U!>Z!)t!>Z!>m!2w!>m!>p!)t!>p!?Y!2w!?Y!?Z!)t!?Z!?d!2w!?d!?e!)t!?e!?f!2w!?f!?h!)t!?h!?o!2w!?o!@{!)t!@{!A}!2w!A}!BO!)t!BO!BP!2w!BP!BQ!2w!BQ!B^!)t!B^!Be!2w!Be!Cq!)t!Cq!Cr!2w!Cr!Cs!2w!Cs!Ct!)t!Ct!Cu!2w!Cu!Cw!)t!Cw!Cx!2w!Cx!Cy!2w!Cy!Cz!)t!Cz!C{!2w!C{!C}!)t!C}!DO!2w!DO!DU!)t!DU!DY!2w!DY!DZ!)t!DZ!Db!2w!Db!Dc!)t!Dc!Df!2w!Df!Dg!)t!Dg!Dh!2w!Dh!Di!)t!Di!Dj!2w!Dj!Dl!)t!Dl!Dm!2w!Dm!Dn!2w!Dn!Do!)t!Do!Ds!2w!Ds!Dt!)t!Dt!Du!2w!Du!Dv!2w!Dv!EP!)t!EP!EQ!2w!EQ!ES!)t!ES!EX!2w!EX!EY!)t!EY!EZ!2w!EZ!Ep!)t!Ep!Et!2w!Et!Ff!)t!Ff!Fg!2w!Fg!Gx!)t!Gx!HQ!2w!HQ!HR!)t!HR!Hw!2w!Hw!Id!)t!Id!Ii!2w!Ii!LQ!)t!LQ!L}!2w!L}!Mc!)t!Mc!Md!2w!Md!Mt!)t!Mt!Mz!2w!Mz!NO!)t!NO!NS!2w!NS!NV!)t!NV!NW!2w!NW!NZ!)t!NZ!N[!2w!N[!N]!2w!N]!Nd!)t!Nd!Ng!2w!Ng!Nk!)t!Nk!Nx!2w!Nx# U!)t# U# V!2w# V# h!)t# h#!`!2w#!`#!a!)t#!a#!b!2w#!b#!g!)t#!g#!h!2w#!h#!j!)t#!j##g!2w##g##h!)t##h#*s!2w#*s#*t!)t#*t#*x!2w#*x#*z!)t#*z#+R!2w#+R#+S!)t#+S#+T!2w#+T#+U!)t#+U#+Y!2w#+Y#+[!)t#+[#,V!2w#,V#,W!)t#,W#,[!2w#,[#,^!)t#,^#-P!2w#-P#-Q!)t#-Q#-U!2w#-U#-W!)t#-W#-_!2w#-_#-`!)t#-`#-a!2w#-a#-b!)t#-b#-f!2w#-f#-h!)t#-h#-w!2w#-w#-x!)t#-x#/T!2w#/T#/U!)t#/U#/Y!2w#/Y#/[!)t#/[#0q!2w#0q#1h!)t#1h#1x!2w#1x#2Y!)t#2Y#4R!2w#4R#4_!)t#4_#Au!2w#Au#Aw!)t#Aw#BY!2w#BY#BZ!)t#BZ#Bu!2w#Bu#Bz!)t#Bz#Di!2w#Di#EO!)t#EO#E]!2w#E]#E^!)t#E^#Eb!2w#Eb#Ep!)t#Ep#FS!2w#FS#Fb!)t#Fb#Ft!2w#Ft#GS!)t#GS#Ga!2w#Ga#Gb!)t#Gb#Ge!2w#Ge#Gt!)t#Gt#Hz!2w#Hz#Io!)t#Io#Ip!2w#Ip#It!)t#It#Iu!2w#Iu#K[!)t#K[#MW!2w#MW#M`!)t#M`#NZ!2w#NZ#N[!)t#N[#N]!2w#N]#Nb!)t#Nb$ z!2w$ z$!U!)t$!U$!s!2w$!s$#x!)t$#x$$h!2w$$h$$j!)t$$j$$o!2w$$o$$z!)t$$z$%x!2w$%x$&_!)t$&_$&f!2w$&f$'p!)t$'p$(X!2w$(X$(b!)t$(b$)i!2w$)i$+_!)t$+_$+`!2w$+`$-a!)t$-a$.b!2w$.b$.s!)t$.s$.z!2w$.z$0T!)t$0T$0s!2w$0s$1Q!)t$1Q$1R!2w$1R$1S!2w$1S$1^!)t$1^$2[!2w$2[$2v!)t$2v$3l!2w$3l$4g!)t$4g$4j!2w$4j$4t!)t$4t$5j!2w$5j$7y!)t$7y$7}!2w$7}$8O!)t$8O$8S!2w$8S$8V!)t$8V$8W!2w$8W$8X!2w$8X$8b!)t$8b$<j!2w$<j$=|!)t$=|$DO!2w$DO$DQ!)t$DQ$DW!2w$DW$DY!)t$DY$EQ!2w$EQ$ES!)t$ES$EY!2w$EY$E[!)t$E[$Ed!2w$Ed$Ee!)t$Ee$Ef!2w$Ef$Eg!)t$Eg$Eh!2w$Eh$Ei!)t$Ei$Ej!2w$Ej$Ek!)t$Ek$F[!2w$F[$F^!)t$F^$Ge!2w$Ge$Gf!)t$Gf$Gm!2w$Gm$Gn!)t$Gn$Go!2w$Go$Gr!)t$Gr$Gu!2w$Gu$Gv!)t$Gv$G}!2w$G}$HQ!)t$HQ$HU!2w$HU$HW!)t$HW$H^!2w$H^$Hb!)t$Hb$Ho!2w$Ho$Ht!)t$Ht$Hw!2w$Hw$Hx!)t$Hx$IP!2w$IP$Ki!)t$Ki$Kj!2w$Kj$Kw!)t$Kw$Kx!2w$Kx$LY!)t$LY$Lg!2w$Lg$Np!)t$Np$Nq!2w$Nq$Nu!)t$Nu$Nv!2w$Nv$Nx!)t$Nx% S!2w% S% T!)t% T% U!2w% U% X!)t% X% ^!2w% ^% d!)t% d% e!2w% e% f!)t% f% g!2w% g% h!)t% h% i!2w% i% j!)t% j% n!2w% n% o!)t% o% z!2w% z% |!)t% |%!Q!2w%!Q%!V!)t%!V%![!2w%![%!`!)t%!`%!a!2w%!a%#g!)t%#g%#h!2w%#h%#i!2w%#i&/x!)t&/x&0y!2w&0y&0z!)t&0z&1{!2w&1{&1|!)t&1|&4w!2w&4w&4}!)t&4}&5R!2w&5R&5U!)t&5U&5V!2w&5V&5W!2w&5W&5d!)t&5d&6[!2w&6[&6]!)t&6]&6^!2w&6^&6c!)t&6c&6d!2w&6d&6f!)t&6f&7p!2w&7p&7w!)t&7w&7x!2w&7x&8Y!)t&8Y&8q!2w&8q&8z!)t&8z&9R!2w&9R&9S!)t&9S&9Z!2w&9Z&9[!)t&9[&9c!2w&9c&9d!)t&9d&9k!2w&9k&9l!)t&9l&9s!2w&9s&9t!)t&9t&9{!2w&9{&9|!)t&9|&:T!2w&:T&:U!)t&:U&:]!2w&:]&<P!)t&<P&<Q!2w&<Q&FZ!)t&FZ&F[!2w&F[&F]!2w&F]&GX!)t&GX&G^!2w&G^&Gc!)t&Gc&Gd!2w&Gd&Ge!2w&Ge&Gi!)t&Gi&Ic!2w&Ic&Ii!)t&Ii&Il!2w&Il&Im!)t&Im&Kk!2w&Kk&Kl!)t&Kl&Kp!2w&Kp&Ku!)t&Ku&Lp!2w&Lp&Ls!)t&Ls&Nu!2w&Nu' W!)t' W' s!2w' s'!z!)t'!z'#[!2w'#['.b!)t'.b*3f!2w*3f*5S!)t*5S40_!2w40_41d!)t41d4Js!2w4Js4LY!)t4LY4MY!2w4MY4M[!)t4M[5%T!2w5%T5%W!)t5%W5%h!2w5%h5%r!)t5%r5%s!2w5%s5%t!2w5%t5&Y!)t5&Y5'Z!2w5'Z5'k!)t5'k5(U!2w5(U5(^!)t5(^5)v!2w5)v5*y!)t5*y5+S!2w5+S5+U!)t5+U5-a!2w5-a5-c!)t5-c5-g!2w5-g5-h!)t5-h5-l!2w5-l5-x!)t5-x5.T!2w5.T5/t!)t5/t50O!2w50O50P!)t50P50S!2w50S50T!)t50T50X!2w50X50Y!)t50Y50q!2w50q51`!)t51`52f!2w52f52t!)t52t53x!2w53x55Y!)t55Y55`!2w55`55c!)t55c55d!2w55d55r!)t55r56`!2w56`56j!)t56j57R!2w57R57l!)t57l58Z!2w58Z58b!)t58b59c!2w59c5:P!)t5:P5:Q!2w5:Q5;S!)t5;S5;}!2w5;}5<f!)t5<f5<i!2w5<i5<j!)t5<j5<r!2w5<r5=W!)t5=W5=o!2w5=o5=r!)t5=r5=s!2w5=s5=x!)t5=x5>z!2w5>z5>{!)t5>{5>|!2w5>|5?P!)t5?P5?Q!2w5?Q5?R!2w5?R5?T!)t5?T5?Y!2w5?Y5?[!)t5?[5?]!2w5?]5?^!)t5?^5?_!2w5?_5?w!)t5?w5?z!2w5?z5?|!)t5?|5@X!2w5@X5@`!)t5@`5@c!2w5@c5@o!)t5@o5@u!2w5@u5@w!)t5@w5@}!2w5@}5AP!)t5AP5AV!2w5AV5A`!)t5A`5Ag!2w5Ag5Ah!)t5Ah5Ao!2w5Ao5Dv!)t5Dv5Ek!2w5Ek5FY!)t5FY;%S!2w;%S;%`!)t;%`;%w!2w;%w;%{!)t;%{;'O!2w;'O;'S!)t;'S;=`!.]<%l?&r!)t?&r?.p!2w?.p?.r!)t?.r?1Q!2w?1Q?1x!)t?1x?2P!2w?2P?2]!)t?2]?2b!2w?2b?2g!)t?2g?2h!2w?2h?2i!)t?2i?2s!2w?2s?2t!)t?2t?3R!2w?3R?3S!)t?3S?3X!2w?3X?3Y!)t?3Y?3Z!2w?3Z?3[!)t?3[?3]!2w?3]?3^!2w?3^?3_!)t?3_?3`!2w?3`?3a!2w?3a?3b!)t?3b?5r!2w?5r?6e!)t?6e?>`!2w?>`?>r!)t?>r?@U!2w?@U?@W!)t?@W?A`!2w?A`?BY!)t?BY?Bf!2w?Bf?EO!)t?EO?ET!2w?ET?EU!)t?EU?HR!2w?HR?Hw!)t?Hw?Ic!2w?Ic?Ii!)t?Ii?JT!2w?JT?J`!)t?J`?L]!2w?L]?L`!)t?L`?Lf!2w?Lf?Lh!)t?Lh?Ln!2w?Ln?Lp!)t?Lp?Lv!2w?Lv?Lx!)t?Lx?L{!2w?L{O!)t!a-/`2i!OW|SzQS!RmPOY.5}YZ!)tZq.5}qr-/Rrs.<hst-/Rtu-/Ruv-/Rvw-/Rwx3)sxz.5}z{-/R{|-/R|!O.5}!O!P-/R!P!Q-/R!Q![-/R![!a.5}!a!b-/R!b!c.5}!c!}-/R!}#O.5}#O#P-/R#P#R.5}#R#S-/R#S#T57e#T#o-/R#o$p.5}$p$q-/R$q${.5}${$|-/R$|%Q.5}%Q%R-/R%R%W.5}%W%o-/R%o%p.5}%p&a-/R&a&b.5}&b0`-/R0`0d.5}0d0p-/R0p1O.5}1O1T-/R1T1[.5}1[1]-/R1]1^.5}1^1_-/R1_4U.5}4U4Z-/R4Z4[.5}4[4]-/R4]4^-/R4^4`.5}4`4d-/R4d4l.5}4l4m-/R4m4n.5}4n4q-/R4q4r.5}4r4s-/R4s4t.5}4t5Y-/R5Y5Z.5}5Z7Q-/R7Q7R.5}7R:S-/R:S:[.5}:[=p-/R=p=y.5}=y>q-/R>q>s.5}>s>t-/R>t>{.5}>{?t-/R?tA`.5}A`A{-/RA{BQ.5}BQBT-/RBTCS.5}CSDP-/RDPDt.5}DtDu-/RDuDv-/RDvDw.5}DwGO-/RGOGP.5}GPGQ-/RGQGa.5}GaGb-/RGbGc-/RGcGj.5}GjGk-/RGkGl-/RGlGv.5}GvGy-/RGyG{.5}G{G|-/RG|H^.5}H^H_-/RH_H`.5}H`IO-/RIOIm.5}ImKj-/RKjKu.5}KuKv-/RKvL`.5}L`MR-/RMRM[.5}M[M]-/RM]M^-/RM^Mb.5}MbMc-/RMcMh.5}MhNO-/RNONS.5}NSNT-/RNTN^.5}N^N_-/RN_Nb.5}NbNc-/RNcNz.5}Nz! e-/R! e!#O.5}!#O!#P-/R!#P!#Q.5}!#Q!#]-/R!#]!%W.5}!%W!&`-/R!&`!&c.5}!&c!&d-/R!&d!&v.5}!&v!&w-/R!&w!'O.5}!'O!'Y-/R!'Y!'i.5}!'i!'p-/R!'p!'q.5}!'q!'x-/R!'x!'}.5}!'}!(V-/R!(V!(X.5}!(X!(Y-/R!(Y!(Z-/R!(Z!(].5}!(]!(s-/R!(s!(t.5}!(t!({-/R!({!(|.5}!(|!(}-/R!(}!)Q.5}!)Q!)U-/R!)U!)X.5}!)X!)Y-/R!)Y!)j.5}!)j!)k-/R!)k!)x.5}!)x!)y-/R!)y!)z-/R!)z!){.5}!){!*O-/R!*O!*^.5}!*^!*_-/R!*_!*`-/R!*`!*s.5}!*s!*y-/R!*y!*}.5}!*}!+O-/R!+O!+P-/R!+P!+R.5}!+R!+i-/R!+i!+j.5}!+j!+q-/R!+q!+r.5}!+r!+s-/R!+s!+t-/R!+t!+u.5}!+u!+v-/R!+v!+w-/R!+w!+x.5}!+x!+y-/R!+y!+z-/R!+z!,k.5}!,k!,o-/R!,o!,p.5}!,p!,q-/R!,q!-U.5}!-U!-X-/R!-X!-i.5}!-i!-r-/R!-r!-s.5}!-s!-v-/R!-v!-w.5}!-w!._-/R!._!.`.5}!.`!.g-/R!.g!.h.5}!.h!.i-/R!.i!.j-/R!.j!.k.5}!.k!.p-/R!.p!.s.5}!.s!.t-/R!.t!/W.5}!/W!/X-/R!/X!/h.5}!/h!/i-/R!/i!/j-/R!/j!0_.5}!0_!0g-/R!0g!0i.5}!0i!0j-/R!0j!0k-/R!0k!0m.5}!0m!1T-/R!1T!1U.5}!1U!1]-/R!1]!1^.5}!1^!1_-/R!1_!1`-/R!1`!1a.5}!1a!1f-/R!1f!1i.5}!1i!1j-/R!1j!2Y.5}!2Y!2Z-/R!2Z!2[-/R!2[!2].5}!2]!2`-/R!2`!2o.5}!2o!2p-/R!2p!3R.5}!3R!3S-/R!3S!3T.5}!3T!3Z-/R!3Z!3^.5}!3^!3a-/R!3a!3b.5}!3b!3f-/R!3f!3i.5}!3i!3j-/R!3j!3k-/R!3k!3l.5}!3l!3m-/R!3m!3n.5}!3n!3o-/R!3o!3p-/R!3p!3s.5}!3s!3t-/R!3t!3u-/R!3u!3x.5}!3x!3{-/R!3{!4O.5}!4O!4[-/R!4[!4r.5}!4r!4s-/R!4s!5y.5}!5y!6R-/R!6R!6S.5}!6S!6V-/R!6V!6W.5}!6W!6o-/R!6o!6p.5}!6p!6z-/R!6z!6{.5}!6{!7Q-/R!7Q!7T.5}!7T!7U-/R!7U!7p.5}!7p!7q-/R!7q!7r-/R!7r!7x.5}!7x!7y-/R!7y!7z-/R!7z!8o.5}!8o!8w-/R!8w!8x.5}!8x!8{-/R!8{!8|.5}!8|!9e-/R!9e!9f.5}!9f!9p-/R!9p!9q.5}!9q!9v-/R!9v!9y.5}!9y!9z-/R!9z!:l.5}!:l!:m-/R!:m!:n.5}!:n!:o-/R!:o!:p-/R!:p!;P.5}!;P!;Q-/R!;Q!;R-/R!;R!;e.5}!;e!;m-/R!;m!;n.5}!;n!;q-/R!;q!;r.5}!;r!<m-/R!<m!<o.5}!<o!<p-/R!<p!=Q.5}!=Q!=R-/R!=R!=d.5}!=d!=e-/R!=e!=f-/R!=f!>O.5}!>O!>U-/R!>U!>Z.5}!>Z!>m-/R!>m!>p.5}!>p!?Y-/R!?Y!?Z.5}!?Z!?d-/R!?d!?e.5}!?e!?f-/R!?f!?h.5}!?h!?o-/R!?o!@{.5}!@{!A}-/R!A}!BO.5}!BO!BP-/R!BP!BQ-/R!BQ!B^.5}!B^!Be-/R!Be!Cq.5}!Cq!Cr-/R!Cr!Cs-/R!Cs!Ct.5}!Ct!Cu-/R!Cu!Cw.5}!Cw!Cx-/R!Cx!Cy-/R!Cy!Cz.5}!Cz!C{-/R!C{!C}.5}!C}!DO-/R!DO!DU.5}!DU!DY-/R!DY!DZ.5}!DZ!Db-/R!Db!Dc.5}!Dc!Df-/R!Df!Dg.5}!Dg!Dh-/R!Dh!Di.5}!Di!Dj-/R!Dj!Dl.5}!Dl!Dm-/R!Dm!Dn-/R!Dn!Do.5}!Do!Ds-/R!Ds!Dt.5}!Dt!Du-/R!Du!Dv-/R!Dv!EP.5}!EP!EQ-/R!EQ!ES.5}!ES!EX-/R!EX!EY.5}!EY!EZ-/R!EZ!Ep.5}!Ep!Et-/R!Et!Ff.5}!Ff!Fg-/R!Fg!Gx.5}!Gx!HQ-/R!HQ!HR.5}!HR!Hw-/R!Hw!Id.5}!Id!Ii-/R!Ii!LQ.5}!LQ!L}-/R!L}!Mc.5}!Mc!Md-/R!Md!Mt.5}!Mt!Mz-/R!Mz!NO.5}!NO!NS-/R!NS!NV.5}!NV!NW-/R!NW!NZ.5}!NZ!N[-/R!N[!N]-/R!N]!Nd.5}!Nd!Ng-/R!Ng!Nk.5}!Nk!Nx-/R!Nx# U.5}# U# V-/R# V# h.5}# h#!`-/R#!`#!a.5}#!a#!b-/R#!b#!g.5}#!g#!h-/R#!h#!j.5}#!j##g-/R##g##h.5}##h#*s-/R#*s#*t.5}#*t#*x-/R#*x#*z.5}#*z#+R-/R#+R#+S.5}#+S#+T-/R#+T#+U.5}#+U#+Y-/R#+Y#+[.5}#+[#,V-/R#,V#,W.5}#,W#,[-/R#,[#,^.5}#,^#-P-/R#-P#-Q.5}#-Q#-U-/R#-U#-W.5}#-W#-_-/R#-_#-`.5}#-`#-a-/R#-a#-b.5}#-b#-f-/R#-f#-h.5}#-h#-w-/R#-w#-x.5}#-x#/T-/R#/T#/U.5}#/U#/Y-/R#/Y#/[.5}#/[#0q-/R#0q#1h.5}#1h#1x-/R#1x#2Y.5}#2Y#4R-/R#4R#4_.5}#4_#Au-/R#Au#Aw.5}#Aw#BY-/R#BY#BZ.5}#BZ#Bu-/R#Bu#Bz.5}#Bz#Di-/R#Di#EO.5}#EO#E]-/R#E]#E^.5}#E^#Eb-/R#Eb#Ep.5}#Ep#FS-/R#FS#Fb.5}#Fb#Ft-/R#Ft#GS.5}#GS#Ga-/R#Ga#Gb.5}#Gb#Ge-/R#Ge#Gt.5}#Gt#Hz-/R#Hz#Io.5}#Io#Ip-/R#Ip#It.5}#It#Iu-/R#Iu#K[.5}#K[#MW-/R#MW#M`.5}#M`#NZ-/R#NZ#N[.5}#N[#N]-/R#N]#Nb.5}#Nb$ z-/R$ z$!U.5}$!U$!s-/R$!s$#x.5}$#x$$h-/R$$h$$j.5}$$j$$o-/R$$o$$z.5}$$z$%x-/R$%x$&_.5}$&_$&f-/R$&f$'p.5}$'p$(X-/R$(X$(b.5}$(b$)i-/R$)i$+_.5}$+_$+`-/R$+`$-a.5}$-a$.b-/R$.b$.s.5}$.s$.z-/R$.z$0T.5}$0T$0s-/R$0s$1Q.5}$1Q$1R-/R$1R$1S-/R$1S$1^.5}$1^$2[-/R$2[$2v.5}$2v$3l-/R$3l$4g.5}$4g$4j-/R$4j$4t.5}$4t$5j-/R$5j$7y.5}$7y$7}-/R$7}$8O.5}$8O$8S-/R$8S$8V.5}$8V$8W-/R$8W$8X-/R$8X$8b.5}$8b$<j-/R$<j$=|.5}$=|$DO-/R$DO$DQ.5}$DQ$DW-/R$DW$DY.5}$DY$EQ-/R$EQ$ES.5}$ES$EY-/R$EY$E[.5}$E[$Ed-/R$Ed$Ee.5}$Ee$Ef-/R$Ef$Eg.5}$Eg$Eh-/R$Eh$Ei.5}$Ei$Ej-/R$Ej$Ek.5}$Ek$F[-/R$F[$F^.5}$F^$Ge-/R$Ge$Gf.5}$Gf$Gm-/R$Gm$Gn.5}$Gn$Go-/R$Go$Gr.5}$Gr$Gu-/R$Gu$Gv.5}$Gv$G}-/R$G}$HQ.5}$HQ$HU-/R$HU$HW.5}$HW$H^-/R$H^$Hb.5}$Hb$Ho-/R$Ho$Ht.5}$Ht$Hw-/R$Hw$Hx.5}$Hx$IP-/R$IP$Ki.5}$Ki$Kj-/R$Kj$Kw.5}$Kw$Kx-/R$Kx$LY.5}$LY$Lg-/R$Lg$Np.5}$Np$Nq-/R$Nq$Nu.5}$Nu$Nv-/R$Nv$Nx.5}$Nx% S-/R% S% T.5}% T% U-/R% U% X.5}% X% ^-/R% ^% d.5}% d% e-/R% e% f.5}% f% g-/R% g% h.5}% h% i-/R% i% j.5}% j% n-/R% n% o.5}% o% z-/R% z% |.5}% |%!Q-/R%!Q%!V.5}%!V%![-/R%![%!`.5}%!`%!a-/R%!a%#g.5}%#g%#h-/R%#h%#i-/R%#i&/x.5}&/x&0y-/R&0y&0z.5}&0z&1{-/R&1{&1|.5}&1|&4w-/R&4w&4}.5}&4}&5R-/R&5R&5U.5}&5U&5V-/R&5V&5W-/R&5W&5d.5}&5d&6[-/R&6[&6].5}&6]&6^-/R&6^&6c.5}&6c&6d-/R&6d&6f.5}&6f&7p-/R&7p&7w.5}&7w&7x-/R&7x&8Y.5}&8Y&8q-/R&8q&8z.5}&8z&9R-/R&9R&9S.5}&9S&9Z-/R&9Z&9[.5}&9[&9c-/R&9c&9d.5}&9d&9k-/R&9k&9l.5}&9l&9s-/R&9s&9t.5}&9t&9{-/R&9{&9|.5}&9|&:T-/R&:T&:U.5}&:U&:]-/R&:]&<P.5}&<P&<Q-/R&<Q&FZ.5}&FZ&F[-/R&F[&F]-/R&F]&GX.5}&GX&G^-/R&G^&Gc.5}&Gc&Gd-/R&Gd&Ge-/R&Ge&Gi.5}&Gi&Ic-/R&Ic&Ii.5}&Ii&Il-/R&Il&Im.5}&Im&Kk-/R&Kk&Kl.5}&Kl&Kp-/R&Kp&Ku.5}&Ku&Lp-/R&Lp&Ls.5}&Ls&Nu-/R&Nu' W.5}' W' s-/R' s'!z.5}'!z'#[-/R'#['.b.5}'.b*3f-/R*3f*5S.5}*5S40_-/R40_41d.5}41d4Js-/R4Js4LY.5}4LY4MY-/R4MY4M[.5}4M[5%T-/R5%T5%W.5}5%W5%h-/R5%h5%r.5}5%r5%s-/R5%s5%t-/R5%t5&Y.5}5&Y5'Z-/R5'Z5'k.5}5'k5(U-/R5(U5(^.5}5(^5)v-/R5)v5*y.5}5*y5+S-/R5+S5+U.5}5+U5-a-/R5-a5-c.5}5-c5-g-/R5-g5-h.5}5-h5-l-/R5-l5-x.5}5-x5.T-/R5.T5/t.5}5/t50O-/R50O50P.5}50P50S-/R50S50T.5}50T50X-/R50X50Y.5}50Y50q-/R50q51`.5}51`52f-/R52f52t.5}52t53x-/R53x55Y.5}55Y55`-/R55`55c.5}55c55d-/R55d55r.5}55r56`-/R56`56j.5}56j57R-/R57R57l.5}57l58Z-/R58Z58b.5}58b59c-/R59c5:P.5}5:P5:Q-/R5:Q5;S.5}5;S5;}-/R5;}5<f.5}5<f5<i-/R5<i5<j.5}5<j5<r-/R5<r5=W.5}5=W5=o-/R5=o5=r.5}5=r5=s-/R5=s5=x.5}5=x5>z-/R5>z5>{.5}5>{5>|-/R5>|5?P.5}5?P5?Q-/R5?Q5?R-/R5?R5?T.5}5?T5?Y-/R5?Y5?[.5}5?[5?]-/R5?]5?^.5}5?^5?_-/R5?_5?w.5}5?w5?z-/R5?z5?|.5}5?|5@X-/R5@X5@`.5}5@`5@c-/R5@c5@o.5}5@o5@u-/R5@u5@w.5}5@w5@}-/R5@}5AP.5}5AP5AV-/R5AV5A`.5}5A`5Ag-/R5Ag5Ah.5}5Ah5Ao-/R5Ao5Dv.5}5Dv5Ek-/R5Ek5FY.5}5FY;%S-/R;%S;%`.5};%`;%w-/R;%w;%{.5};%{;'O-/R;'O;'S.5};'S;=`.<b<%l?&r.5}?&r?.p-/R?.p?.r.5}?.r?1Q-/R?1Q?1x.5}?1x?2P-/R?2P?2].5}?2]?2b-/R?2b?2g.5}?2g?2h-/R?2h?2i.5}?2i?2s-/R?2s?2t.5}?2t?3R-/R?3R?3S.5}?3S?3X-/R?3X?3Y.5}?3Y?3Z-/R?3Z?3[.5}?3[?3]-/R?3]?3^-/R?3^?3_.5}?3_?3`-/R?3`?3a-/R?3a?3b.5}?3b?5r-/R?5r?6e.5}?6e?>`-/R?>`?>r.5}?>r?@U-/R?@U?@W.5}?@W?A`-/R?A`?BY.5}?BY?Bf-/R?Bf?EO.5}?EO?ET-/R?ET?EU.5}?EU?HR-/R?HR?Hw.5}?Hw?Ic-/R?Ic?Ii.5}?Ii?JT-/R?JT?J`.5}?J`?L]-/R?L]?L`.5}?L`?Lf-/R?Lf?Lh.5}?Lh?Ln-/R?Ln?Lp.5}?Lp?Lv-/R?Lv?Lx.5}?Lx?L{-/R?L{O.5}!a.6YZ!OW|SzQS!ROY.5}YZ!)tZr.5}rs.6{sw.5}wx.9vx#S.5}#S#T.;f#T;'S.5};'S;=`.<b<%lO.5}!].7UX!OWzQS!ROY.6{YZ!*jZw.6{wx.7qx#S.6{#S#T.8|#T;'S.6{;'S;=`.9p<%lO.6{!Z.7xV!OWS!ROY.7qYZ!+WZ#S.7q#S#T.8_#T;'S.7q;'S;=`.8v<%lO.7q!R.8dSS!ROY.8_Z;'S.8_;'S;=`.8p<%lO.8_!R.8sP;=`<%l.8_!Z.8yP;=`<%l.7q!T.9TVzQS!ROY.8|YZ!+oZw.8|wx.8_x;'S.8|;'S;=`.9j<%lO.8|!T.9mP;=`<%l.8|!].9sP;=`<%l.6{!_.:PX!OW|SS!ROY.9vYZ!,^Zr.9vrs.7qs#S.9v#S#T.:l#T;'S.9v;'S;=`.;`<%lO.9v!V.:sV|SS!ROY.:lYZ!,zZr.:lrs.8_s;'S.:l;'S;=`.;Y<%lO.:l!V.;]P;=`<%l.:l!_.;cP;=`<%l.9v!X.;oX|SzQS!ROY.;fYZ!-iZr.;frs.8|sw.;fwx.:lx;'S.;f;'S;=`.<[<%lO.;f!X.<_P;=`<%l.;f!a.<eP;=`<%l.5}!].<s2i!OWzQS!RmPOY.6{YZ!*jZq.6{qr.<hrs.<hst.<htu.<huv.<hvw.<hwx/Cbxz.6{z{.<h{|.<h|!O.6{!O!P.<h!P!Q.<h!Q![.<h![!a.6{!a!b.<h!b!c.6{!c!}.<h!}#O.6{#O#P.<h#P#R.6{#R#S.<h#S#T2!{#T#o.<h#o$p.6{$p$q.<h$q${.6{${$|.<h$|%Q.6{%Q%R.<h%R%W.6{%W%o.<h%o%p.6{%p&a.<h&a&b.6{&b0`.<h0`0d.6{0d0p.<h0p1O.6{1O1T.<h1T1[.6{1[1].<h1]1^.6{1^1_.<h1_4U.6{4U4Z.<h4Z4[.6{4[4].<h4]4^.<h4^4`.6{4`4d.<h4d4l.6{4l4m.<h4m4n.6{4n4q.<h4q4r.6{4r4s.<h4s4t.6{4t5Y.<h5Y5Z.6{5Z7Q.<h7Q7R.6{7R:S.<h:S:[.6{:[=p.<h=p=y.6{=y>q.<h>q>s.6{>s>t.<h>t>{.6{>{?t.<h?tA`.6{A`A{.<hA{BQ.6{BQBT.<hBTCS.6{CSDP.<hDPDt.6{DtDu.<hDuDv.<hDvDw.6{DwGO.<hGOGP.6{GPGQ.<hGQGa.6{GaGb.<hGbGc.<hGcGj.6{GjGk.<hGkGl.<hGlGv.6{GvGy.<hGyG{.6{G{G|.<hG|H^.6{H^H_.<hH_H`.6{H`IO.<hIOIm.6{ImKj.<hKjKu.6{KuKv.<hKvL`.6{L`MR.<hMRM[.6{M[M].<hM]M^.<hM^Mb.6{MbMc.<hMcMh.6{MhNO.<hNONS.6{NSNT.<hNTN^.6{N^N_.<hN_Nb.6{NbNc.<hNcNz.6{Nz! e.<h! e!#O.6{!#O!#P.<h!#P!#Q.6{!#Q!#].<h!#]!%W.6{!%W!&`.<h!&`!&c.6{!&c!&d.<h!&d!&v.6{!&v!&w.<h!&w!'O.6{!'O!'Y.<h!'Y!'i.6{!'i!'p.<h!'p!'q.6{!'q!'x.<h!'x!'}.6{!'}!(V.<h!(V!(X.6{!(X!(Y.<h!(Y!(Z.<h!(Z!(].6{!(]!(s.<h!(s!(t.6{!(t!({.<h!({!(|.6{!(|!(}.<h!(}!)Q.6{!)Q!)U.<h!)U!)X.6{!)X!)Y.<h!)Y!)j.6{!)j!)k.<h!)k!)x.6{!)x!)y.<h!)y!)z.<h!)z!){.6{!){!*O.<h!*O!*^.6{!*^!*_.<h!*_!*`.<h!*`!*s.6{!*s!*y.<h!*y!*}.6{!*}!+O.<h!+O!+P.<h!+P!+R.6{!+R!+i.<h!+i!+j.6{!+j!+q.<h!+q!+r.6{!+r!+s.<h!+s!+t.<h!+t!+u.6{!+u!+v.<h!+v!+w.<h!+w!+x.6{!+x!+y.<h!+y!+z.<h!+z!,k.6{!,k!,o.<h!,o!,p.6{!,p!,q.<h!,q!-U.6{!-U!-X.<h!-X!-i.6{!-i!-r.<h!-r!-s.6{!-s!-v.<h!-v!-w.6{!-w!._.<h!._!.`.6{!.`!.g.<h!.g!.h.6{!.h!.i.<h!.i!.j.<h!.j!.k.6{!.k!.p.<h!.p!.s.6{!.s!.t.<h!.t!/W.6{!/W!/X.<h!/X!/h.6{!/h!/i.<h!/i!/j.<h!/j!0_.6{!0_!0g.<h!0g!0i.6{!0i!0j.<h!0j!0k.<h!0k!0m.6{!0m!1T.<h!1T!1U.6{!1U!1].<h!1]!1^.6{!1^!1_.<h!1_!1`.<h!1`!1a.6{!1a!1f.<h!1f!1i.6{!1i!1j.<h!1j!2Y.6{!2Y!2Z.<h!2Z!2[.<h!2[!2].6{!2]!2`.<h!2`!2o.6{!2o!2p.<h!2p!3R.6{!3R!3S.<h!3S!3T.6{!3T!3Z.<h!3Z!3^.6{!3^!3a.<h!3a!3b.6{!3b!3f.<h!3f!3i.6{!3i!3j.<h!3j!3k.<h!3k!3l.6{!3l!3m.<h!3m!3n.6{!3n!3o.<h!3o!3p.<h!3p!3s.6{!3s!3t.<h!3t!3u.<h!3u!3x.6{!3x!3{.<h!3{!4O.6{!4O!4[.<h!4[!4r.6{!4r!4s.<h!4s!5y.6{!5y!6R.<h!6R!6S.6{!6S!6V.<h!6V!6W.6{!6W!6o.<h!6o!6p.6{!6p!6z.<h!6z!6{.6{!6{!7Q.<h!7Q!7T.6{!7T!7U.<h!7U!7p.6{!7p!7q.<h!7q!7r.<h!7r!7x.6{!7x!7y.<h!7y!7z.<h!7z!8o.6{!8o!8w.<h!8w!8x.6{!8x!8{.<h!8{!8|.6{!8|!9e.<h!9e!9f.6{!9f!9p.<h!9p!9q.6{!9q!9v.<h!9v!9y.6{!9y!9z.<h!9z!:l.6{!:l!:m.<h!:m!:n.6{!:n!:o.<h!:o!:p.<h!:p!;P.6{!;P!;Q.<h!;Q!;R.<h!;R!;e.6{!;e!;m.<h!;m!;n.6{!;n!;q.<h!;q!;r.6{!;r!<m.<h!<m!<o.6{!<o!<p.<h!<p!=Q.6{!=Q!=R.<h!=R!=d.6{!=d!=e.<h!=e!=f.<h!=f!>O.6{!>O!>U.<h!>U!>Z.6{!>Z!>m.<h!>m!>p.6{!>p!?Y.<h!?Y!?Z.6{!?Z!?d.<h!?d!?e.6{!?e!?f.<h!?f!?h.6{!?h!?o.<h!?o!@{.6{!@{!A}.<h!A}!BO.6{!BO!BP.<h!BP!BQ.<h!BQ!B^.6{!B^!Be.<h!Be!Cq.6{!Cq!Cr.<h!Cr!Cs.<h!Cs!Ct.6{!Ct!Cu.<h!Cu!Cw.6{!Cw!Cx.<h!Cx!Cy.<h!Cy!Cz.6{!Cz!C{.<h!C{!C}.6{!C}!DO.<h!DO!DU.6{!DU!DY.<h!DY!DZ.6{!DZ!Db.<h!Db!Dc.6{!Dc!Df.<h!Df!Dg.6{!Dg!Dh.<h!Dh!Di.6{!Di!Dj.<h!Dj!Dl.6{!Dl!Dm.<h!Dm!Dn.<h!Dn!Do.6{!Do!Ds.<h!Ds!Dt.6{!Dt!Du.<h!Du!Dv.<h!Dv!EP.6{!EP!EQ.<h!EQ!ES.6{!ES!EX.<h!EX!EY.6{!EY!EZ.<h!EZ!Ep.6{!Ep!Et.<h!Et!Ff.6{!Ff!Fg.<h!Fg!Gx.6{!Gx!HQ.<h!HQ!HR.6{!HR!Hw.<h!Hw!Id.6{!Id!Ii.<h!Ii!LQ.6{!LQ!L}.<h!L}!Mc.6{!Mc!Md.<h!Md!Mt.6{!Mt!Mz.<h!Mz!NO.6{!NO!NS.<h!NS!NV.6{!NV!NW.<h!NW!NZ.6{!NZ!N[.<h!N[!N].<h!N]!Nd.6{!Nd!Ng.<h!Ng!Nk.6{!Nk!Nx.<h!Nx# U.6{# U# V.<h# V# h.6{# h#!`.<h#!`#!a.6{#!a#!b.<h#!b#!g.6{#!g#!h.<h#!h#!j.6{#!j##g.<h##g##h.6{##h#*s.<h#*s#*t.6{#*t#*x.<h#*x#*z.6{#*z#+R.<h#+R#+S.6{#+S#+T.<h#+T#+U.6{#+U#+Y.<h#+Y#+[.6{#+[#,V.<h#,V#,W.6{#,W#,[.<h#,[#,^.6{#,^#-P.<h#-P#-Q.6{#-Q#-U.<h#-U#-W.6{#-W#-_.<h#-_#-`.6{#-`#-a.<h#-a#-b.6{#-b#-f.<h#-f#-h.6{#-h#-w.<h#-w#-x.6{#-x#/T.<h#/T#/U.6{#/U#/Y.<h#/Y#/[.6{#/[#0q.<h#0q#1h.6{#1h#1x.<h#1x#2Y.6{#2Y#4R.<h#4R#4_.6{#4_#Au.<h#Au#Aw.6{#Aw#BY.<h#BY#BZ.6{#BZ#Bu.<h#Bu#Bz.6{#Bz#Di.<h#Di#EO.6{#EO#E].<h#E]#E^.6{#E^#Eb.<h#Eb#Ep.6{#Ep#FS.<h#FS#Fb.6{#Fb#Ft.<h#Ft#GS.6{#GS#Ga.<h#Ga#Gb.6{#Gb#Ge.<h#Ge#Gt.6{#Gt#Hz.<h#Hz#Io.6{#Io#Ip.<h#Ip#It.6{#It#Iu.<h#Iu#K[.6{#K[#MW.<h#MW#M`.6{#M`#NZ.<h#NZ#N[.6{#N[#N].<h#N]#Nb.6{#Nb$ z.<h$ z$!U.6{$!U$!s.<h$!s$#x.6{$#x$$h.<h$$h$$j.6{$$j$$o.<h$$o$$z.6{$$z$%x.<h$%x$&_.6{$&_$&f.<h$&f$'p.6{$'p$(X.<h$(X$(b.6{$(b$)i.<h$)i$+_.6{$+_$+`.<h$+`$-a.6{$-a$.b.<h$.b$.s.6{$.s$.z.<h$.z$0T.6{$0T$0s.<h$0s$1Q.6{$1Q$1R.<h$1R$1S.<h$1S$1^.6{$1^$2[.<h$2[$2v.6{$2v$3l.<h$3l$4g.6{$4g$4j.<h$4j$4t.6{$4t$5j.<h$5j$7y.6{$7y$7}.<h$7}$8O.6{$8O$8S.<h$8S$8V.6{$8V$8W.<h$8W$8X.<h$8X$8b.6{$8b$<j.<h$<j$=|.6{$=|$DO.<h$DO$DQ.6{$DQ$DW.<h$DW$DY.6{$DY$EQ.<h$EQ$ES.6{$ES$EY.<h$EY$E[.6{$E[$Ed.<h$Ed$Ee.6{$Ee$Ef.<h$Ef$Eg.6{$Eg$Eh.<h$Eh$Ei.6{$Ei$Ej.<h$Ej$Ek.6{$Ek$F[.<h$F[$F^.6{$F^$Ge.<h$Ge$Gf.6{$Gf$Gm.<h$Gm$Gn.6{$Gn$Go.<h$Go$Gr.6{$Gr$Gu.<h$Gu$Gv.6{$Gv$G}.<h$G}$HQ.6{$HQ$HU.<h$HU$HW.6{$HW$H^.<h$H^$Hb.6{$Hb$Ho.<h$Ho$Ht.6{$Ht$Hw.<h$Hw$Hx.6{$Hx$IP.<h$IP$Ki.6{$Ki$Kj.<h$Kj$Kw.6{$Kw$Kx.<h$Kx$LY.6{$LY$Lg.<h$Lg$Np.6{$Np$Nq.<h$Nq$Nu.6{$Nu$Nv.<h$Nv$Nx.6{$Nx% S.<h% S% T.6{% T% U.<h% U% X.6{% X% ^.<h% ^% d.6{% d% e.<h% e% f.6{% f% g.<h% g% h.6{% h% i.<h% i% j.6{% j% n.<h% n% o.6{% o% z.<h% z% |.6{% |%!Q.<h%!Q%!V.6{%!V%![.<h%![%!`.6{%!`%!a.<h%!a%#g.6{%#g%#h.<h%#h%#i.<h%#i&/x.6{&/x&0y.<h&0y&0z.6{&0z&1{.<h&1{&1|.6{&1|&4w.<h&4w&4}.6{&4}&5R.<h&5R&5U.6{&5U&5V.<h&5V&5W.<h&5W&5d.6{&5d&6[.<h&6[&6].6{&6]&6^.<h&6^&6c.6{&6c&6d.<h&6d&6f.6{&6f&7p.<h&7p&7w.6{&7w&7x.<h&7x&8Y.6{&8Y&8q.<h&8q&8z.6{&8z&9R.<h&9R&9S.6{&9S&9Z.<h&9Z&9[.6{&9[&9c.<h&9c&9d.6{&9d&9k.<h&9k&9l.6{&9l&9s.<h&9s&9t.6{&9t&9{.<h&9{&9|.6{&9|&:T.<h&:T&:U.6{&:U&:].<h&:]&<P.6{&<P&<Q.<h&<Q&FZ.6{&FZ&F[.<h&F[&F].<h&F]&GX.6{&GX&G^.<h&G^&Gc.6{&Gc&Gd.<h&Gd&Ge.<h&Ge&Gi.6{&Gi&Ic.<h&Ic&Ii.6{&Ii&Il.<h&Il&Im.6{&Im&Kk.<h&Kk&Kl.6{&Kl&Kp.<h&Kp&Ku.6{&Ku&Lp.<h&Lp&Ls.6{&Ls&Nu.<h&Nu' W.6{' W' s.<h' s'!z.6{'!z'#[.<h'#['.b.6{'.b*3f.<h*3f*5S.6{*5S40_.<h40_41d.6{41d4Js.<h4Js4LY.6{4LY4MY.<h4MY4M[.6{4M[5%T.<h5%T5%W.6{5%W5%h.<h5%h5%r.6{5%r5%s.<h5%s5%t.<h5%t5&Y.6{5&Y5'Z.<h5'Z5'k.6{5'k5(U.<h5(U5(^.6{5(^5)v.<h5)v5*y.6{5*y5+S.<h5+S5+U.6{5+U5-a.<h5-a5-c.6{5-c5-g.<h5-g5-h.6{5-h5-l.<h5-l5-x.6{5-x5.T.<h5.T5/t.6{5/t50O.<h50O50P.6{50P50S.<h50S50T.6{50T50X.<h50X50Y.6{50Y50q.<h50q51`.6{51`52f.<h52f52t.6{52t53x.<h53x55Y.6{55Y55`.<h55`55c.6{55c55d.<h55d55r.6{55r56`.<h56`56j.6{56j57R.<h57R57l.6{57l58Z.<h58Z58b.6{58b59c.<h59c5:P.6{5:P5:Q.<h5:Q5;S.6{5;S5;}.<h5;}5<f.6{5<f5<i.<h5<i5<j.6{5<j5<r.<h5<r5=W.6{5=W5=o.<h5=o5=r.6{5=r5=s.<h5=s5=x.6{5=x5>z.<h5>z5>{.6{5>{5>|.<h5>|5?P.6{5?P5?Q.<h5?Q5?R.<h5?R5?T.6{5?T5?Y.<h5?Y5?[.6{5?[5?].<h5?]5?^.6{5?^5?_.<h5?_5?w.6{5?w5?z.<h5?z5?|.6{5?|5@X.<h5@X5@`.6{5@`5@c.<h5@c5@o.6{5@o5@u.<h5@u5@w.6{5@w5@}.<h5@}5AP.6{5AP5AV.<h5AV5A`.6{5A`5Ag.<h5Ag5Ah.6{5Ah5Ao.<h5Ao5Dv.6{5Dv5Ek.<h5Ek5FY.6{5FY;%S.<h;%S;%`.6{;%`;%w.<h;%w;%{.6{;%{;'O.<h;'O;'S.6{;'S;=`.9p<%l?&r.6{?&r?.p.<h?.p?.r.6{?.r?1Q.<h?1Q?1x.6{?1x?2P.<h?2P?2].6{?2]?2b.<h?2b?2g.6{?2g?2h.<h?2h?2i.6{?2i?2s.<h?2s?2t.6{?2t?3R.<h?3R?3S.6{?3S?3X.<h?3X?3Y.6{?3Y?3Z.<h?3Z?3[.6{?3[?3].<h?3]?3^.<h?3^?3_.6{?3_?3`.<h?3`?3a.<h?3a?3b.6{?3b?5r.<h?5r?6e.6{?6e?>`.<h?>`?>r.6{?>r?@U.<h?@U?@W.6{?@W?A`.<h?A`?BY.6{?BY?Bf.<h?Bf?EO.6{?EO?ET.<h?ET?EU.6{?EU?HR.<h?HR?Hw.6{?Hw?Ic.<h?Ic?Ii.6{?Ii?JT.<h?JT?J`.6{?J`?L].<h?L]?L`.6{?L`?Lf.<h?Lf?Lh.6{?Lh?Ln.<h?Ln?Lp.6{?Lp?Lv.<h?Lv?Lx.6{?Lx?L{.<h?L{O.6{!Z/Ck2i!OWS!RmPOY.7qYZ!+WZq.7qqr/Cbrs/Cbst/Cbtu/Cbuv/Cbvw/Cbwx/Cbxz.7qz{/Cb{|/Cb|!O.7q!O!P/Cb!P!Q/Cb!Q![/Cb![!a.7q!a!b/Cb!b!c.7q!c!}/Cb!}#O.7q#O#P/Cb#P#R.7q#R#S/Cb#S#T0JY#T#o/Cb#o$p.7q$p$q/Cb$q${.7q${$|/Cb$|%Q.7q%Q%R/Cb%R%W.7q%W%o/Cb%o%p.7q%p&a/Cb&a&b.7q&b0`/Cb0`0d.7q0d0p/Cb0p1O.7q1O1T/Cb1T1[.7q1[1]/Cb1]1^.7q1^1_/Cb1_4U.7q4U4Z/Cb4Z4[.7q4[4]/Cb4]4^/Cb4^4`.7q4`4d/Cb4d4l.7q4l4m/Cb4m4n.7q4n4q/Cb4q4r.7q4r4s/Cb4s4t.7q4t5Y/Cb5Y5Z.7q5Z7Q/Cb7Q7R.7q7R:S/Cb:S:[.7q:[=p/Cb=p=y.7q=y>q/Cb>q>s.7q>s>t/Cb>t>{.7q>{?t/Cb?tA`.7qA`A{/CbA{BQ.7qBQBT/CbBTCS.7qCSDP/CbDPDt.7qDtDu/CbDuDv/CbDvDw.7qDwGO/CbGOGP.7qGPGQ/CbGQGa.7qGaGb/CbGbGc/CbGcGj.7qGjGk/CbGkGl/CbGlGv.7qGvGy/CbGyG{.7qG{G|/CbG|H^.7qH^H_/CbH_H`.7qH`IO/CbIOIm.7qImKj/CbKjKu.7qKuKv/CbKvL`.7qL`MR/CbMRM[.7qM[M]/CbM]M^/CbM^Mb.7qMbMc/CbMcMh.7qMhNO/CbNONS.7qNSNT/CbNTN^.7qN^N_/CbN_Nb.7qNbNc/CbNcNz.7qNz! e/Cb! e!#O.7q!#O!#P/Cb!#P!#Q.7q!#Q!#]/Cb!#]!%W.7q!%W!&`/Cb!&`!&c.7q!&c!&d/Cb!&d!&v.7q!&v!&w/Cb!&w!'O.7q!'O!'Y/Cb!'Y!'i.7q!'i!'p/Cb!'p!'q.7q!'q!'x/Cb!'x!'}.7q!'}!(V/Cb!(V!(X.7q!(X!(Y/Cb!(Y!(Z/Cb!(Z!(].7q!(]!(s/Cb!(s!(t.7q!(t!({/Cb!({!(|.7q!(|!(}/Cb!(}!)Q.7q!)Q!)U/Cb!)U!)X.7q!)X!)Y/Cb!)Y!)j.7q!)j!)k/Cb!)k!)x.7q!)x!)y/Cb!)y!)z/Cb!)z!){.7q!){!*O/Cb!*O!*^.7q!*^!*_/Cb!*_!*`/Cb!*`!*s.7q!*s!*y/Cb!*y!*}.7q!*}!+O/Cb!+O!+P/Cb!+P!+R.7q!+R!+i/Cb!+i!+j.7q!+j!+q/Cb!+q!+r.7q!+r!+s/Cb!+s!+t/Cb!+t!+u.7q!+u!+v/Cb!+v!+w/Cb!+w!+x.7q!+x!+y/Cb!+y!+z/Cb!+z!,k.7q!,k!,o/Cb!,o!,p.7q!,p!,q/Cb!,q!-U.7q!-U!-X/Cb!-X!-i.7q!-i!-r/Cb!-r!-s.7q!-s!-v/Cb!-v!-w.7q!-w!._/Cb!._!.`.7q!.`!.g/Cb!.g!.h.7q!.h!.i/Cb!.i!.j/Cb!.j!.k.7q!.k!.p/Cb!.p!.s.7q!.s!.t/Cb!.t!/W.7q!/W!/X/Cb!/X!/h.7q!/h!/i/Cb!/i!/j/Cb!/j!0_.7q!0_!0g/Cb!0g!0i.7q!0i!0j/Cb!0j!0k/Cb!0k!0m.7q!0m!1T/Cb!1T!1U.7q!1U!1]/Cb!1]!1^.7q!1^!1_/Cb!1_!1`/Cb!1`!1a.7q!1a!1f/Cb!1f!1i.7q!1i!1j/Cb!1j!2Y.7q!2Y!2Z/Cb!2Z!2[/Cb!2[!2].7q!2]!2`/Cb!2`!2o.7q!2o!2p/Cb!2p!3R.7q!3R!3S/Cb!3S!3T.7q!3T!3Z/Cb!3Z!3^.7q!3^!3a/Cb!3a!3b.7q!3b!3f/Cb!3f!3i.7q!3i!3j/Cb!3j!3k/Cb!3k!3l.7q!3l!3m/Cb!3m!3n.7q!3n!3o/Cb!3o!3p/Cb!3p!3s.7q!3s!3t/Cb!3t!3u/Cb!3u!3x.7q!3x!3{/Cb!3{!4O.7q!4O!4[/Cb!4[!4r.7q!4r!4s/Cb!4s!5y.7q!5y!6R/Cb!6R!6S.7q!6S!6V/Cb!6V!6W.7q!6W!6o/Cb!6o!6p.7q!6p!6z/Cb!6z!6{.7q!6{!7Q/Cb!7Q!7T.7q!7T!7U/Cb!7U!7p.7q!7p!7q/Cb!7q!7r/Cb!7r!7x.7q!7x!7y/Cb!7y!7z/Cb!7z!8o.7q!8o!8w/Cb!8w!8x.7q!8x!8{/Cb!8{!8|.7q!8|!9e/Cb!9e!9f.7q!9f!9p/Cb!9p!9q.7q!9q!9v/Cb!9v!9y.7q!9y!9z/Cb!9z!:l.7q!:l!:m/Cb!:m!:n.7q!:n!:o/Cb!:o!:p/Cb!:p!;P.7q!;P!;Q/Cb!;Q!;R/Cb!;R!;e.7q!;e!;m/Cb!;m!;n.7q!;n!;q/Cb!;q!;r.7q!;r!<m/Cb!<m!<o.7q!<o!<p/Cb!<p!=Q.7q!=Q!=R/Cb!=R!=d.7q!=d!=e/Cb!=e!=f/Cb!=f!>O.7q!>O!>U/Cb!>U!>Z.7q!>Z!>m/Cb!>m!>p.7q!>p!?Y/Cb!?Y!?Z.7q!?Z!?d/Cb!?d!?e.7q!?e!?f/Cb!?f!?h.7q!?h!?o/Cb!?o!@{.7q!@{!A}/Cb!A}!BO.7q!BO!BP/Cb!BP!BQ/Cb!BQ!B^.7q!B^!Be/Cb!Be!Cq.7q!Cq!Cr/Cb!Cr!Cs/Cb!Cs!Ct.7q!Ct!Cu/Cb!Cu!Cw.7q!Cw!Cx/Cb!Cx!Cy/Cb!Cy!Cz.7q!Cz!C{/Cb!C{!C}.7q!C}!DO/Cb!DO!DU.7q!DU!DY/Cb!DY!DZ.7q!DZ!Db/Cb!Db!Dc.7q!Dc!Df/Cb!Df!Dg.7q!Dg!Dh/Cb!Dh!Di.7q!Di!Dj/Cb!Dj!Dl.7q!Dl!Dm/Cb!Dm!Dn/Cb!Dn!Do.7q!Do!Ds/Cb!Ds!Dt.7q!Dt!Du/Cb!Du!Dv/Cb!Dv!EP.7q!EP!EQ/Cb!EQ!ES.7q!ES!EX/Cb!EX!EY.7q!EY!EZ/Cb!EZ!Ep.7q!Ep!Et/Cb!Et!Ff.7q!Ff!Fg/Cb!Fg!Gx.7q!Gx!HQ/Cb!HQ!HR.7q!HR!Hw/Cb!Hw!Id.7q!Id!Ii/Cb!Ii!LQ.7q!LQ!L}/Cb!L}!Mc.7q!Mc!Md/Cb!Md!Mt.7q!Mt!Mz/Cb!Mz!NO.7q!NO!NS/Cb!NS!NV.7q!NV!NW/Cb!NW!NZ.7q!NZ!N[/Cb!N[!N]/Cb!N]!Nd.7q!Nd!Ng/Cb!Ng!Nk.7q!Nk!Nx/Cb!Nx# U.7q# U# V/Cb# V# h.7q# h#!`/Cb#!`#!a.7q#!a#!b/Cb#!b#!g.7q#!g#!h/Cb#!h#!j.7q#!j##g/Cb##g##h.7q##h#*s/Cb#*s#*t.7q#*t#*x/Cb#*x#*z.7q#*z#+R/Cb#+R#+S.7q#+S#+T/Cb#+T#+U.7q#+U#+Y/Cb#+Y#+[.7q#+[#,V/Cb#,V#,W.7q#,W#,[/Cb#,[#,^.7q#,^#-P/Cb#-P#-Q.7q#-Q#-U/Cb#-U#-W.7q#-W#-_/Cb#-_#-`.7q#-`#-a/Cb#-a#-b.7q#-b#-f/Cb#-f#-h.7q#-h#-w/Cb#-w#-x.7q#-x#/T/Cb#/T#/U.7q#/U#/Y/Cb#/Y#/[.7q#/[#0q/Cb#0q#1h.7q#1h#1x/Cb#1x#2Y.7q#2Y#4R/Cb#4R#4_.7q#4_#Au/Cb#Au#Aw.7q#Aw#BY/Cb#BY#BZ.7q#BZ#Bu/Cb#Bu#Bz.7q#Bz#Di/Cb#Di#EO.7q#EO#E]/Cb#E]#E^.7q#E^#Eb/Cb#Eb#Ep.7q#Ep#FS/Cb#FS#Fb.7q#Fb#Ft/Cb#Ft#GS.7q#GS#Ga/Cb#Ga#Gb.7q#Gb#Ge/Cb#Ge#Gt.7q#Gt#Hz/Cb#Hz#Io.7q#Io#Ip/Cb#Ip#It.7q#It#Iu/Cb#Iu#K[.7q#K[#MW/Cb#MW#M`.7q#M`#NZ/Cb#NZ#N[.7q#N[#N]/Cb#N]#Nb.7q#Nb$ z/Cb$ z$!U.7q$!U$!s/Cb$!s$#x.7q$#x$$h/Cb$$h$$j.7q$$j$$o/Cb$$o$$z.7q$$z$%x/Cb$%x$&_.7q$&_$&f/Cb$&f$'p.7q$'p$(X/Cb$(X$(b.7q$(b$)i/Cb$)i$+_.7q$+_$+`/Cb$+`$-a.7q$-a$.b/Cb$.b$.s.7q$.s$.z/Cb$.z$0T.7q$0T$0s/Cb$0s$1Q.7q$1Q$1R/Cb$1R$1S/Cb$1S$1^.7q$1^$2[/Cb$2[$2v.7q$2v$3l/Cb$3l$4g.7q$4g$4j/Cb$4j$4t.7q$4t$5j/Cb$5j$7y.7q$7y$7}/Cb$7}$8O.7q$8O$8S/Cb$8S$8V.7q$8V$8W/Cb$8W$8X/Cb$8X$8b.7q$8b$<j/Cb$<j$=|.7q$=|$DO/Cb$DO$DQ.7q$DQ$DW/Cb$DW$DY.7q$DY$EQ/Cb$EQ$ES.7q$ES$EY/Cb$EY$E[.7q$E[$Ed/Cb$Ed$Ee.7q$Ee$Ef/Cb$Ef$Eg.7q$Eg$Eh/Cb$Eh$Ei.7q$Ei$Ej/Cb$Ej$Ek.7q$Ek$F[/Cb$F[$F^.7q$F^$Ge/Cb$Ge$Gf.7q$Gf$Gm/Cb$Gm$Gn.7q$Gn$Go/Cb$Go$Gr.7q$Gr$Gu/Cb$Gu$Gv.7q$Gv$G}/Cb$G}$HQ.7q$HQ$HU/Cb$HU$HW.7q$HW$H^/Cb$H^$Hb.7q$Hb$Ho/Cb$Ho$Ht.7q$Ht$Hw/Cb$Hw$Hx.7q$Hx$IP/Cb$IP$Ki.7q$Ki$Kj/Cb$Kj$Kw.7q$Kw$Kx/Cb$Kx$LY.7q$LY$Lg/Cb$Lg$Np.7q$Np$Nq/Cb$Nq$Nu.7q$Nu$Nv/Cb$Nv$Nx.7q$Nx% S/Cb% S% T.7q% T% U/Cb% U% X.7q% X% ^/Cb% ^% d.7q% d% e/Cb% e% f.7q% f% g/Cb% g% h.7q% h% i/Cb% i% j.7q% j% n/Cb% n% o.7q% o% z/Cb% z% |.7q% |%!Q/Cb%!Q%!V.7q%!V%![/Cb%![%!`.7q%!`%!a/Cb%!a%#g.7q%#g%#h/Cb%#h%#i/Cb%#i&/x.7q&/x&0y/Cb&0y&0z.7q&0z&1{/Cb&1{&1|.7q&1|&4w/Cb&4w&4}.7q&4}&5R/Cb&5R&5U.7q&5U&5V/Cb&5V&5W/Cb&5W&5d.7q&5d&6[/Cb&6[&6].7q&6]&6^/Cb&6^&6c.7q&6c&6d/Cb&6d&6f.7q&6f&7p/Cb&7p&7w.7q&7w&7x/Cb&7x&8Y.7q&8Y&8q/Cb&8q&8z.7q&8z&9R/Cb&9R&9S.7q&9S&9Z/Cb&9Z&9[.7q&9[&9c/Cb&9c&9d.7q&9d&9k/Cb&9k&9l.7q&9l&9s/Cb&9s&9t.7q&9t&9{/Cb&9{&9|.7q&9|&:T/Cb&:T&:U.7q&:U&:]/Cb&:]&<P.7q&<P&<Q/Cb&<Q&FZ.7q&FZ&F[/Cb&F[&F]/Cb&F]&GX.7q&GX&G^/Cb&G^&Gc.7q&Gc&Gd/Cb&Gd&Ge/Cb&Ge&Gi.7q&Gi&Ic/Cb&Ic&Ii.7q&Ii&Il/Cb&Il&Im.7q&Im&Kk/Cb&Kk&Kl.7q&Kl&Kp/Cb&Kp&Ku.7q&Ku&Lp/Cb&Lp&Ls.7q&Ls&Nu/Cb&Nu' W.7q' W' s/Cb' s'!z.7q'!z'#[/Cb'#['.b.7q'.b*3f/Cb*3f*5S.7q*5S40_/Cb40_41d.7q41d4Js/Cb4Js4LY.7q4LY4MY/Cb4MY4M[.7q4M[5%T/Cb5%T5%W.7q5%W5%h/Cb5%h5%r.7q5%r5%s/Cb5%s5%t/Cb5%t5&Y.7q5&Y5'Z/Cb5'Z5'k.7q5'k5(U/Cb5(U5(^.7q5(^5)v/Cb5)v5*y.7q5*y5+S/Cb5+S5+U.7q5+U5-a/Cb5-a5-c.7q5-c5-g/Cb5-g5-h.7q5-h5-l/Cb5-l5-x.7q5-x5.T/Cb5.T5/t.7q5/t50O/Cb50O50P.7q50P50S/Cb50S50T.7q50T50X/Cb50X50Y.7q50Y50q/Cb50q51`.7q51`52f/Cb52f52t.7q52t53x/Cb53x55Y.7q55Y55`/Cb55`55c.7q55c55d/Cb55d55r.7q55r56`/Cb56`56j.7q56j57R/Cb57R57l.7q57l58Z/Cb58Z58b.7q58b59c/Cb59c5:P.7q5:P5:Q/Cb5:Q5;S.7q5;S5;}/Cb5;}5<f.7q5<f5<i/Cb5<i5<j.7q5<j5<r/Cb5<r5=W.7q5=W5=o/Cb5=o5=r.7q5=r5=s/Cb5=s5=x.7q5=x5>z/Cb5>z5>{.7q5>{5>|/Cb5>|5?P.7q5?P5?Q/Cb5?Q5?R/Cb5?R5?T.7q5?T5?Y/Cb5?Y5?[.7q5?[5?]/Cb5?]5?^.7q5?^5?_/Cb5?_5?w.7q5?w5?z/Cb5?z5?|.7q5?|5@X/Cb5@X5@`.7q5@`5@c/Cb5@c5@o.7q5@o5@u/Cb5@u5@w.7q5@w5@}/Cb5@}5AP.7q5AP5AV/Cb5AV5A`.7q5A`5Ag/Cb5Ag5Ah.7q5Ah5Ao/Cb5Ao5Dv.7q5Dv5Ek/Cb5Ek5FY.7q5FY;%S/Cb;%S;%`.7q;%`;%w/Cb;%w;%{.7q;%{;'O/Cb;'O;'S.7q;'S;=`.8v<%l?&r.7q?&r?.p/Cb?.p?.r.7q?.r?1Q/Cb?1Q?1x.7q?1x?2P/Cb?2P?2].7q?2]?2b/Cb?2b?2g.7q?2g?2h/Cb?2h?2i.7q?2i?2s/Cb?2s?2t.7q?2t?3R/Cb?3R?3S.7q?3S?3X/Cb?3X?3Y.7q?3Y?3Z/Cb?3Z?3[.7q?3[?3]/Cb?3]?3^/Cb?3^?3_.7q?3_?3`/Cb?3`?3a/Cb?3a?3b.7q?3b?5r/Cb?5r?6e.7q?6e?>`/Cb?>`?>r.7q?>r?@U/Cb?@U?@W.7q?@W?A`/Cb?A`?BY.7q?BY?Bf/Cb?Bf?EO.7q?EO?ET/Cb?ET?EU.7q?EU?HR/Cb?HR?Hw.7q?Hw?Ic/Cb?Ic?Ii.7q?Ii?JT/Cb?JT?J`.7q?J`?L]/Cb?L]?L`.7q?L`?Lf/Cb?Lf?Lh.7q?Lh?Ln/Cb?Ln?Lp.7q?Lp?Lv/Cb?Lv?Lx.7q?Lx?L{/Cb?L{O.7q!R0Ja2hS!RmPOY.8_Zq.8_qr0JYrs0JYst0JYtu0JYuv0JYvw0JYwx0JYxz.8_z{0JY{|0JY|!O.8_!O!P0JY!P!Q0JY!Q![0JY![!a.8_!a!b0JY!b!c.8_!c!}0JY!}#O.8_#O#P0JY#P#R.8_#R#S0JY#S#T0JY#T#o0JY#o$p.8_$p$q0JY$q${.8_${$|0JY$|%Q.8_%Q%R0JY%R%W.8_%W%o0JY%o%p.8_%p&a0JY&a&b.8_&b0`0JY0`0d.8_0d0p0JY0p1O.8_1O1T0JY1T1[.8_1[1]0JY1]1^.8_1^1_0JY1_4U.8_4U4Z0JY4Z4[.8_4[4]0JY4]4^0JY4^4`.8_4`4d0JY4d4l.8_4l4m0JY4m4n.8_4n4q0JY4q4r.8_4r4s0JY4s4t.8_4t5Y0JY5Y5Z.8_5Z7Q0JY7Q7R.8_7R:S0JY:S:[.8_:[=p0JY=p=y.8_=y>q0JY>q>s.8_>s>t0JY>t>{.8_>{?t0JY?tA`.8_A`A{0JYA{BQ.8_BQBT0JYBTCS.8_CSDP0JYDPDt.8_DtDu0JYDuDv0JYDvDw.8_DwGO0JYGOGP.8_GPGQ0JYGQGa.8_GaGb0JYGbGc0JYGcGj.8_GjGk0JYGkGl0JYGlGv.8_GvGy0JYGyG{.8_G{G|0JYG|H^.8_H^H_0JYH_H`.8_H`IO0JYIOIm.8_ImKj0JYKjKu.8_KuKv0JYKvL`.8_L`MR0JYMRM[.8_M[M]0JYM]M^0JYM^Mb.8_MbMc0JYMcMh.8_MhNO0JYNONS.8_NSNT0JYNTN^.8_N^N_0JYN_Nb.8_NbNc0JYNcNz.8_Nz! e0JY! e!#O.8_!#O!#P0JY!#P!#Q.8_!#Q!#]0JY!#]!%W.8_!%W!&`0JY!&`!&c.8_!&c!&d0JY!&d!&v.8_!&v!&w0JY!&w!'O.8_!'O!'Y0JY!'Y!'i.8_!'i!'p0JY!'p!'q.8_!'q!'x0JY!'x!'}.8_!'}!(V0JY!(V!(X.8_!(X!(Y0JY!(Y!(Z0JY!(Z!(].8_!(]!(s0JY!(s!(t.8_!(t!({0JY!({!(|.8_!(|!(}0JY!(}!)Q.8_!)Q!)U0JY!)U!)X.8_!)X!)Y0JY!)Y!)j.8_!)j!)k0JY!)k!)x.8_!)x!)y0JY!)y!)z0JY!)z!){.8_!){!*O0JY!*O!*^.8_!*^!*_0JY!*_!*`0JY!*`!*s.8_!*s!*y0JY!*y!*}.8_!*}!+O0JY!+O!+P0JY!+P!+R.8_!+R!+i0JY!+i!+j.8_!+j!+q0JY!+q!+r.8_!+r!+s0JY!+s!+t0JY!+t!+u.8_!+u!+v0JY!+v!+w0JY!+w!+x.8_!+x!+y0JY!+y!+z0JY!+z!,k.8_!,k!,o0JY!,o!,p.8_!,p!,q0JY!,q!-U.8_!-U!-X0JY!-X!-i.8_!-i!-r0JY!-r!-s.8_!-s!-v0JY!-v!-w.8_!-w!._0JY!._!.`.8_!.`!.g0JY!.g!.h.8_!.h!.i0JY!.i!.j0JY!.j!.k.8_!.k!.p0JY!.p!.s.8_!.s!.t0JY!.t!/W.8_!/W!/X0JY!/X!/h.8_!/h!/i0JY!/i!/j0JY!/j!0_.8_!0_!0g0JY!0g!0i.8_!0i!0j0JY!0j!0k0JY!0k!0m.8_!0m!1T0JY!1T!1U.8_!1U!1]0JY!1]!1^.8_!1^!1_0JY!1_!1`0JY!1`!1a.8_!1a!1f0JY!1f!1i.8_!1i!1j0JY!1j!2Y.8_!2Y!2Z0JY!2Z!2[0JY!2[!2].8_!2]!2`0JY!2`!2o.8_!2o!2p0JY!2p!3R.8_!3R!3S0JY!3S!3T.8_!3T!3Z0JY!3Z!3^.8_!3^!3a0JY!3a!3b.8_!3b!3f0JY!3f!3i.8_!3i!3j0JY!3j!3k0JY!3k!3l.8_!3l!3m0JY!3m!3n.8_!3n!3o0JY!3o!3p0JY!3p!3s.8_!3s!3t0JY!3t!3u0JY!3u!3x.8_!3x!3{0JY!3{!4O.8_!4O!4[0JY!4[!4r.8_!4r!4s0JY!4s!5y.8_!5y!6R0JY!6R!6S.8_!6S!6V0JY!6V!6W.8_!6W!6o0JY!6o!6p.8_!6p!6z0JY!6z!6{.8_!6{!7Q0JY!7Q!7T.8_!7T!7U0JY!7U!7p.8_!7p!7q0JY!7q!7r0JY!7r!7x.8_!7x!7y0JY!7y!7z0JY!7z!8o.8_!8o!8w0JY!8w!8x.8_!8x!8{0JY!8{!8|.8_!8|!9e0JY!9e!9f.8_!9f!9p0JY!9p!9q.8_!9q!9v0JY!9v!9y.8_!9y!9z0JY!9z!:l.8_!:l!:m0JY!:m!:n.8_!:n!:o0JY!:o!:p0JY!:p!;P.8_!;P!;Q0JY!;Q!;R0JY!;R!;e.8_!;e!;m0JY!;m!;n.8_!;n!;q0JY!;q!;r.8_!;r!<m0JY!<m!<o.8_!<o!<p0JY!<p!=Q.8_!=Q!=R0JY!=R!=d.8_!=d!=e0JY!=e!=f0JY!=f!>O.8_!>O!>U0JY!>U!>Z.8_!>Z!>m0JY!>m!>p.8_!>p!?Y0JY!?Y!?Z.8_!?Z!?d0JY!?d!?e.8_!?e!?f0JY!?f!?h.8_!?h!?o0JY!?o!@{.8_!@{!A}0JY!A}!BO.8_!BO!BP0JY!BP!BQ0JY!BQ!B^.8_!B^!Be0JY!Be!Cq.8_!Cq!Cr0JY!Cr!Cs0JY!Cs!Ct.8_!Ct!Cu0JY!Cu!Cw.8_!Cw!Cx0JY!Cx!Cy0JY!Cy!Cz.8_!Cz!C{0JY!C{!C}.8_!C}!DO0JY!DO!DU.8_!DU!DY0JY!DY!DZ.8_!DZ!Db0JY!Db!Dc.8_!Dc!Df0JY!Df!Dg.8_!Dg!Dh0JY!Dh!Di.8_!Di!Dj0JY!Dj!Dl.8_!Dl!Dm0JY!Dm!Dn0JY!Dn!Do.8_!Do!Ds0JY!Ds!Dt.8_!Dt!Du0JY!Du!Dv0JY!Dv!EP.8_!EP!EQ0JY!EQ!ES.8_!ES!EX0JY!EX!EY.8_!EY!EZ0JY!EZ!Ep.8_!Ep!Et0JY!Et!Ff.8_!Ff!Fg0JY!Fg!Gx.8_!Gx!HQ0JY!HQ!HR.8_!HR!Hw0JY!Hw!Id.8_!Id!Ii0JY!Ii!LQ.8_!LQ!L}0JY!L}!Mc.8_!Mc!Md0JY!Md!Mt.8_!Mt!Mz0JY!Mz!NO.8_!NO!NS0JY!NS!NV.8_!NV!NW0JY!NW!NZ.8_!NZ!N[0JY!N[!N]0JY!N]!Nd.8_!Nd!Ng0JY!Ng!Nk.8_!Nk!Nx0JY!Nx# U.8_# U# V0JY# V# h.8_# h#!`0JY#!`#!a.8_#!a#!b0JY#!b#!g.8_#!g#!h0JY#!h#!j.8_#!j##g0JY##g##h.8_##h#*s0JY#*s#*t.8_#*t#*x0JY#*x#*z.8_#*z#+R0JY#+R#+S.8_#+S#+T0JY#+T#+U.8_#+U#+Y0JY#+Y#+[.8_#+[#,V0JY#,V#,W.8_#,W#,[0JY#,[#,^.8_#,^#-P0JY#-P#-Q.8_#-Q#-U0JY#-U#-W.8_#-W#-_0JY#-_#-`.8_#-`#-a0JY#-a#-b.8_#-b#-f0JY#-f#-h.8_#-h#-w0JY#-w#-x.8_#-x#/T0JY#/T#/U.8_#/U#/Y0JY#/Y#/[.8_#/[#0q0JY#0q#1h.8_#1h#1x0JY#1x#2Y.8_#2Y#4R0JY#4R#4_.8_#4_#Au0JY#Au#Aw.8_#Aw#BY0JY#BY#BZ.8_#BZ#Bu0JY#Bu#Bz.8_#Bz#Di0JY#Di#EO.8_#EO#E]0JY#E]#E^.8_#E^#Eb0JY#Eb#Ep.8_#Ep#FS0JY#FS#Fb.8_#Fb#Ft0JY#Ft#GS.8_#GS#Ga0JY#Ga#Gb.8_#Gb#Ge0JY#Ge#Gt.8_#Gt#Hz0JY#Hz#Io.8_#Io#Ip0JY#Ip#It.8_#It#Iu0JY#Iu#K[.8_#K[#MW0JY#MW#M`.8_#M`#NZ0JY#NZ#N[.8_#N[#N]0JY#N]#Nb.8_#Nb$ z0JY$ z$!U.8_$!U$!s0JY$!s$#x.8_$#x$$h0JY$$h$$j.8_$$j$$o0JY$$o$$z.8_$$z$%x0JY$%x$&_.8_$&_$&f0JY$&f$'p.8_$'p$(X0JY$(X$(b.8_$(b$)i0JY$)i$+_.8_$+_$+`0JY$+`$-a.8_$-a$.b0JY$.b$.s.8_$.s$.z0JY$.z$0T.8_$0T$0s0JY$0s$1Q.8_$1Q$1R0JY$1R$1S0JY$1S$1^.8_$1^$2[0JY$2[$2v.8_$2v$3l0JY$3l$4g.8_$4g$4j0JY$4j$4t.8_$4t$5j0JY$5j$7y.8_$7y$7}0JY$7}$8O.8_$8O$8S0JY$8S$8V.8_$8V$8W0JY$8W$8X0JY$8X$8b.8_$8b$<j0JY$<j$=|.8_$=|$DO0JY$DO$DQ.8_$DQ$DW0JY$DW$DY.8_$DY$EQ0JY$EQ$ES.8_$ES$EY0JY$EY$E[.8_$E[$Ed0JY$Ed$Ee.8_$Ee$Ef0JY$Ef$Eg.8_$Eg$Eh0JY$Eh$Ei.8_$Ei$Ej0JY$Ej$Ek.8_$Ek$F[0JY$F[$F^.8_$F^$Ge0JY$Ge$Gf.8_$Gf$Gm0JY$Gm$Gn.8_$Gn$Go0JY$Go$Gr.8_$Gr$Gu0JY$Gu$Gv.8_$Gv$G}0JY$G}$HQ.8_$HQ$HU0JY$HU$HW.8_$HW$H^0JY$H^$Hb.8_$Hb$Ho0JY$Ho$Ht.8_$Ht$Hw0JY$Hw$Hx.8_$Hx$IP0JY$IP$Ki.8_$Ki$Kj0JY$Kj$Kw.8_$Kw$Kx0JY$Kx$LY.8_$LY$Lg0JY$Lg$Np.8_$Np$Nq0JY$Nq$Nu.8_$Nu$Nv0JY$Nv$Nx.8_$Nx% S0JY% S% T.8_% T% U0JY% U% X.8_% X% ^0JY% ^% d.8_% d% e0JY% e% f.8_% f% g0JY% g% h.8_% h% i0JY% i% j.8_% j% n0JY% n% o.8_% o% z0JY% z% |.8_% |%!Q0JY%!Q%!V.8_%!V%![0JY%![%!`.8_%!`%!a0JY%!a%#g.8_%#g%#h0JY%#h%#i0JY%#i&/x.8_&/x&0y0JY&0y&0z.8_&0z&1{0JY&1{&1|.8_&1|&4w0JY&4w&4}.8_&4}&5R0JY&5R&5U.8_&5U&5V0JY&5V&5W0JY&5W&5d.8_&5d&6[0JY&6[&6].8_&6]&6^0JY&6^&6c.8_&6c&6d0JY&6d&6f.8_&6f&7p0JY&7p&7w.8_&7w&7x0JY&7x&8Y.8_&8Y&8q0JY&8q&8z.8_&8z&9R0JY&9R&9S.8_&9S&9Z0JY&9Z&9[.8_&9[&9c0JY&9c&9d.8_&9d&9k0JY&9k&9l.8_&9l&9s0JY&9s&9t.8_&9t&9{0JY&9{&9|.8_&9|&:T0JY&:T&:U.8_&:U&:]0JY&:]&<P.8_&<P&<Q0JY&<Q&FZ.8_&FZ&F[0JY&F[&F]0JY&F]&GX.8_&GX&G^0JY&G^&Gc.8_&Gc&Gd0JY&Gd&Ge0JY&Ge&Gi.8_&Gi&Ic0JY&Ic&Ii.8_&Ii&Il0JY&Il&Im.8_&Im&Kk0JY&Kk&Kl.8_&Kl&Kp0JY&Kp&Ku.8_&Ku&Lp0JY&Lp&Ls.8_&Ls&Nu0JY&Nu' W.8_' W' s0JY' s'!z.8_'!z'#[0JY'#['.b.8_'.b*3f0JY*3f*5S.8_*5S40_0JY40_41d.8_41d4Js0JY4Js4LY.8_4LY4MY0JY4MY4M[.8_4M[5%T0JY5%T5%W.8_5%W5%h0JY5%h5%r.8_5%r5%s0JY5%s5%t0JY5%t5&Y.8_5&Y5'Z0JY5'Z5'k.8_5'k5(U0JY5(U5(^.8_5(^5)v0JY5)v5*y.8_5*y5+S0JY5+S5+U.8_5+U5-a0JY5-a5-c.8_5-c5-g0JY5-g5-h.8_5-h5-l0JY5-l5-x.8_5-x5.T0JY5.T5/t.8_5/t50O0JY50O50P.8_50P50S0JY50S50T.8_50T50X0JY50X50Y.8_50Y50q0JY50q51`.8_51`52f0JY52f52t.8_52t53x0JY53x55Y.8_55Y55`0JY55`55c.8_55c55d0JY55d55r.8_55r56`0JY56`56j.8_56j57R0JY57R57l.8_57l58Z0JY58Z58b.8_58b59c0JY59c5:P.8_5:P5:Q0JY5:Q5;S.8_5;S5;}0JY5;}5<f.8_5<f5<i0JY5<i5<j.8_5<j5<r0JY5<r5=W.8_5=W5=o0JY5=o5=r.8_5=r5=s0JY5=s5=x.8_5=x5>z0JY5>z5>{.8_5>{5>|0JY5>|5?P.8_5?P5?Q0JY5?Q5?R0JY5?R5?T.8_5?T5?Y0JY5?Y5?[.8_5?[5?]0JY5?]5?^.8_5?^5?_0JY5?_5?w.8_5?w5?z0JY5?z5?|.8_5?|5@X0JY5@X5@`.8_5@`5@c0JY5@c5@o.8_5@o5@u0JY5@u5@w.8_5@w5@}0JY5@}5AP.8_5AP5AV0JY5AV5A`.8_5A`5Ag0JY5Ag5Ah.8_5Ah5Ao0JY5Ao5Dv.8_5Dv5Ek0JY5Ek5FY.8_5FY;%S0JY;%S;%`.8_;%`;%w0JY;%w;%{.8_;%{;'O0JY;'O;'S.8_;'S;=`.8p<%l?&r.8_?&r?.p0JY?.p?.r.8_?.r?1Q0JY?1Q?1x.8_?1x?2P0JY?2P?2].8_?2]?2b0JY?2b?2g.8_?2g?2h0JY?2h?2i.8_?2i?2s0JY?2s?2t.8_?2t?3R0JY?3R?3S.8_?3S?3X0JY?3X?3Y.8_?3Y?3Z0JY?3Z?3[.8_?3[?3]0JY?3]?3^0JY?3^?3_.8_?3_?3`0JY?3`?3a0JY?3a?3b.8_?3b?5r0JY?5r?6e.8_?6e?>`0JY?>`?>r.8_?>r?@U0JY?@U?@W.8_?@W?A`0JY?A`?BY.8_?BY?Bf0JY?Bf?EO.8_?EO?ET0JY?ET?EU.8_?EU?HR0JY?HR?Hw.8_?Hw?Ic0JY?Ic?Ii.8_?Ii?JT0JY?JT?J`.8_?J`?L]0JY?L]?L`.8_?L`?Lf0JY?Lf?Lh.8_?Lh?Ln0JY?Ln?Lp.8_?Lp?Lv0JY?Lv?Lx.8_?Lx?L{0JY?L{O.8_!T2#U2izQS!RmPOY.8|YZ!+oZq.8|qr2!{rs2!{st2!{tu2!{uv2!{vw2!{wx0JYxz.8|z{2!{{|2!{|!O.8|!O!P2!{!P!Q2!{!Q![2!{![!a.8|!a!b2!{!b!c.8|!c!}2!{!}#O.8|#O#P2!{#P#R.8|#R#S2!{#S#T2!{#T#o2!{#o$p.8|$p$q2!{$q${.8|${$|2!{$|%Q.8|%Q%R2!{%R%W.8|%W%o2!{%o%p.8|%p&a2!{&a&b.8|&b0`2!{0`0d.8|0d0p2!{0p1O.8|1O1T2!{1T1[.8|1[1]2!{1]1^.8|1^1_2!{1_4U.8|4U4Z2!{4Z4[.8|4[4]2!{4]4^2!{4^4`.8|4`4d2!{4d4l.8|4l4m2!{4m4n.8|4n4q2!{4q4r.8|4r4s2!{4s4t.8|4t5Y2!{5Y5Z.8|5Z7Q2!{7Q7R.8|7R:S2!{:S:[.8|:[=p2!{=p=y.8|=y>q2!{>q>s.8|>s>t2!{>t>{.8|>{?t2!{?tA`.8|A`A{2!{A{BQ.8|BQBT2!{BTCS.8|CSDP2!{DPDt.8|DtDu2!{DuDv2!{DvDw.8|DwGO2!{GOGP.8|GPGQ2!{GQGa.8|GaGb2!{GbGc2!{GcGj.8|GjGk2!{GkGl2!{GlGv.8|GvGy2!{GyG{.8|G{G|2!{G|H^.8|H^H_2!{H_H`.8|H`IO2!{IOIm.8|ImKj2!{KjKu.8|KuKv2!{KvL`.8|L`MR2!{MRM[.8|M[M]2!{M]M^2!{M^Mb.8|MbMc2!{McMh.8|MhNO2!{NONS.8|NSNT2!{NTN^.8|N^N_2!{N_Nb.8|NbNc2!{NcNz.8|Nz! e2!{! e!#O.8|!#O!#P2!{!#P!#Q.8|!#Q!#]2!{!#]!%W.8|!%W!&`2!{!&`!&c.8|!&c!&d2!{!&d!&v.8|!&v!&w2!{!&w!'O.8|!'O!'Y2!{!'Y!'i.8|!'i!'p2!{!'p!'q.8|!'q!'x2!{!'x!'}.8|!'}!(V2!{!(V!(X.8|!(X!(Y2!{!(Y!(Z2!{!(Z!(].8|!(]!(s2!{!(s!(t.8|!(t!({2!{!({!(|.8|!(|!(}2!{!(}!)Q.8|!)Q!)U2!{!)U!)X.8|!)X!)Y2!{!)Y!)j.8|!)j!)k2!{!)k!)x.8|!)x!)y2!{!)y!)z2!{!)z!){.8|!){!*O2!{!*O!*^.8|!*^!*_2!{!*_!*`2!{!*`!*s.8|!*s!*y2!{!*y!*}.8|!*}!+O2!{!+O!+P2!{!+P!+R.8|!+R!+i2!{!+i!+j.8|!+j!+q2!{!+q!+r.8|!+r!+s2!{!+s!+t2!{!+t!+u.8|!+u!+v2!{!+v!+w2!{!+w!+x.8|!+x!+y2!{!+y!+z2!{!+z!,k.8|!,k!,o2!{!,o!,p.8|!,p!,q2!{!,q!-U.8|!-U!-X2!{!-X!-i.8|!-i!-r2!{!-r!-s.8|!-s!-v2!{!-v!-w.8|!-w!._2!{!._!.`.8|!.`!.g2!{!.g!.h.8|!.h!.i2!{!.i!.j2!{!.j!.k.8|!.k!.p2!{!.p!.s.8|!.s!.t2!{!.t!/W.8|!/W!/X2!{!/X!/h.8|!/h!/i2!{!/i!/j2!{!/j!0_.8|!0_!0g2!{!0g!0i.8|!0i!0j2!{!0j!0k2!{!0k!0m.8|!0m!1T2!{!1T!1U.8|!1U!1]2!{!1]!1^.8|!1^!1_2!{!1_!1`2!{!1`!1a.8|!1a!1f2!{!1f!1i.8|!1i!1j2!{!1j!2Y.8|!2Y!2Z2!{!2Z!2[2!{!2[!2].8|!2]!2`2!{!2`!2o.8|!2o!2p2!{!2p!3R.8|!3R!3S2!{!3S!3T.8|!3T!3Z2!{!3Z!3^.8|!3^!3a2!{!3a!3b.8|!3b!3f2!{!3f!3i.8|!3i!3j2!{!3j!3k2!{!3k!3l.8|!3l!3m2!{!3m!3n.8|!3n!3o2!{!3o!3p2!{!3p!3s.8|!3s!3t2!{!3t!3u2!{!3u!3x.8|!3x!3{2!{!3{!4O.8|!4O!4[2!{!4[!4r.8|!4r!4s2!{!4s!5y.8|!5y!6R2!{!6R!6S.8|!6S!6V2!{!6V!6W.8|!6W!6o2!{!6o!6p.8|!6p!6z2!{!6z!6{.8|!6{!7Q2!{!7Q!7T.8|!7T!7U2!{!7U!7p.8|!7p!7q2!{!7q!7r2!{!7r!7x.8|!7x!7y2!{!7y!7z2!{!7z!8o.8|!8o!8w2!{!8w!8x.8|!8x!8{2!{!8{!8|.8|!8|!9e2!{!9e!9f.8|!9f!9p2!{!9p!9q.8|!9q!9v2!{!9v!9y.8|!9y!9z2!{!9z!:l.8|!:l!:m2!{!:m!:n.8|!:n!:o2!{!:o!:p2!{!:p!;P.8|!;P!;Q2!{!;Q!;R2!{!;R!;e.8|!;e!;m2!{!;m!;n.8|!;n!;q2!{!;q!;r.8|!;r!<m2!{!<m!<o.8|!<o!<p2!{!<p!=Q.8|!=Q!=R2!{!=R!=d.8|!=d!=e2!{!=e!=f2!{!=f!>O.8|!>O!>U2!{!>U!>Z.8|!>Z!>m2!{!>m!>p.8|!>p!?Y2!{!?Y!?Z.8|!?Z!?d2!{!?d!?e.8|!?e!?f2!{!?f!?h.8|!?h!?o2!{!?o!@{.8|!@{!A}2!{!A}!BO.8|!BO!BP2!{!BP!BQ2!{!BQ!B^.8|!B^!Be2!{!Be!Cq.8|!Cq!Cr2!{!Cr!Cs2!{!Cs!Ct.8|!Ct!Cu2!{!Cu!Cw.8|!Cw!Cx2!{!Cx!Cy2!{!Cy!Cz.8|!Cz!C{2!{!C{!C}.8|!C}!DO2!{!DO!DU.8|!DU!DY2!{!DY!DZ.8|!DZ!Db2!{!Db!Dc.8|!Dc!Df2!{!Df!Dg.8|!Dg!Dh2!{!Dh!Di.8|!Di!Dj2!{!Dj!Dl.8|!Dl!Dm2!{!Dm!Dn2!{!Dn!Do.8|!Do!Ds2!{!Ds!Dt.8|!Dt!Du2!{!Du!Dv2!{!Dv!EP.8|!EP!EQ2!{!EQ!ES.8|!ES!EX2!{!EX!EY.8|!EY!EZ2!{!EZ!Ep.8|!Ep!Et2!{!Et!Ff.8|!Ff!Fg2!{!Fg!Gx.8|!Gx!HQ2!{!HQ!HR.8|!HR!Hw2!{!Hw!Id.8|!Id!Ii2!{!Ii!LQ.8|!LQ!L}2!{!L}!Mc.8|!Mc!Md2!{!Md!Mt.8|!Mt!Mz2!{!Mz!NO.8|!NO!NS2!{!NS!NV.8|!NV!NW2!{!NW!NZ.8|!NZ!N[2!{!N[!N]2!{!N]!Nd.8|!Nd!Ng2!{!Ng!Nk.8|!Nk!Nx2!{!Nx# U.8|# U# V2!{# V# h.8|# h#!`2!{#!`#!a.8|#!a#!b2!{#!b#!g.8|#!g#!h2!{#!h#!j.8|#!j##g2!{##g##h.8|##h#*s2!{#*s#*t.8|#*t#*x2!{#*x#*z.8|#*z#+R2!{#+R#+S.8|#+S#+T2!{#+T#+U.8|#+U#+Y2!{#+Y#+[.8|#+[#,V2!{#,V#,W.8|#,W#,[2!{#,[#,^.8|#,^#-P2!{#-P#-Q.8|#-Q#-U2!{#-U#-W.8|#-W#-_2!{#-_#-`.8|#-`#-a2!{#-a#-b.8|#-b#-f2!{#-f#-h.8|#-h#-w2!{#-w#-x.8|#-x#/T2!{#/T#/U.8|#/U#/Y2!{#/Y#/[.8|#/[#0q2!{#0q#1h.8|#1h#1x2!{#1x#2Y.8|#2Y#4R2!{#4R#4_.8|#4_#Au2!{#Au#Aw.8|#Aw#BY2!{#BY#BZ.8|#BZ#Bu2!{#Bu#Bz.8|#Bz#Di2!{#Di#EO.8|#EO#E]2!{#E]#E^.8|#E^#Eb2!{#Eb#Ep.8|#Ep#FS2!{#FS#Fb.8|#Fb#Ft2!{#Ft#GS.8|#GS#Ga2!{#Ga#Gb.8|#Gb#Ge2!{#Ge#Gt.8|#Gt#Hz2!{#Hz#Io.8|#Io#Ip2!{#Ip#It.8|#It#Iu2!{#Iu#K[.8|#K[#MW2!{#MW#M`.8|#M`#NZ2!{#NZ#N[.8|#N[#N]2!{#N]#Nb.8|#Nb$ z2!{$ z$!U.8|$!U$!s2!{$!s$#x.8|$#x$$h2!{$$h$$j.8|$$j$$o2!{$$o$$z.8|$$z$%x2!{$%x$&_.8|$&_$&f2!{$&f$'p.8|$'p$(X2!{$(X$(b.8|$(b$)i2!{$)i$+_.8|$+_$+`2!{$+`$-a.8|$-a$.b2!{$.b$.s.8|$.s$.z2!{$.z$0T.8|$0T$0s2!{$0s$1Q.8|$1Q$1R2!{$1R$1S2!{$1S$1^.8|$1^$2[2!{$2[$2v.8|$2v$3l2!{$3l$4g.8|$4g$4j2!{$4j$4t.8|$4t$5j2!{$5j$7y.8|$7y$7}2!{$7}$8O.8|$8O$8S2!{$8S$8V.8|$8V$8W2!{$8W$8X2!{$8X$8b.8|$8b$<j2!{$<j$=|.8|$=|$DO2!{$DO$DQ.8|$DQ$DW2!{$DW$DY.8|$DY$EQ2!{$EQ$ES.8|$ES$EY2!{$EY$E[.8|$E[$Ed2!{$Ed$Ee.8|$Ee$Ef2!{$Ef$Eg.8|$Eg$Eh2!{$Eh$Ei.8|$Ei$Ej2!{$Ej$Ek.8|$Ek$F[2!{$F[$F^.8|$F^$Ge2!{$Ge$Gf.8|$Gf$Gm2!{$Gm$Gn.8|$Gn$Go2!{$Go$Gr.8|$Gr$Gu2!{$Gu$Gv.8|$Gv$G}2!{$G}$HQ.8|$HQ$HU2!{$HU$HW.8|$HW$H^2!{$H^$Hb.8|$Hb$Ho2!{$Ho$Ht.8|$Ht$Hw2!{$Hw$Hx.8|$Hx$IP2!{$IP$Ki.8|$Ki$Kj2!{$Kj$Kw.8|$Kw$Kx2!{$Kx$LY.8|$LY$Lg2!{$Lg$Np.8|$Np$Nq2!{$Nq$Nu.8|$Nu$Nv2!{$Nv$Nx.8|$Nx% S2!{% S% T.8|% T% U2!{% U% X.8|% X% ^2!{% ^% d.8|% d% e2!{% e% f.8|% f% g2!{% g% h.8|% h% i2!{% i% j.8|% j% n2!{% n% o.8|% o% z2!{% z% |.8|% |%!Q2!{%!Q%!V.8|%!V%![2!{%![%!`.8|%!`%!a2!{%!a%#g.8|%#g%#h2!{%#h%#i2!{%#i&/x.8|&/x&0y2!{&0y&0z.8|&0z&1{2!{&1{&1|.8|&1|&4w2!{&4w&4}.8|&4}&5R2!{&5R&5U.8|&5U&5V2!{&5V&5W2!{&5W&5d.8|&5d&6[2!{&6[&6].8|&6]&6^2!{&6^&6c.8|&6c&6d2!{&6d&6f.8|&6f&7p2!{&7p&7w.8|&7w&7x2!{&7x&8Y.8|&8Y&8q2!{&8q&8z.8|&8z&9R2!{&9R&9S.8|&9S&9Z2!{&9Z&9[.8|&9[&9c2!{&9c&9d.8|&9d&9k2!{&9k&9l.8|&9l&9s2!{&9s&9t.8|&9t&9{2!{&9{&9|.8|&9|&:T2!{&:T&:U.8|&:U&:]2!{&:]&<P.8|&<P&<Q2!{&<Q&FZ.8|&FZ&F[2!{&F[&F]2!{&F]&GX.8|&GX&G^2!{&G^&Gc.8|&Gc&Gd2!{&Gd&Ge2!{&Ge&Gi.8|&Gi&Ic2!{&Ic&Ii.8|&Ii&Il2!{&Il&Im.8|&Im&Kk2!{&Kk&Kl.8|&Kl&Kp2!{&Kp&Ku.8|&Ku&Lp2!{&Lp&Ls.8|&Ls&Nu2!{&Nu' W.8|' W' s2!{' s'!z.8|'!z'#[2!{'#['.b.8|'.b*3f2!{*3f*5S.8|*5S40_2!{40_41d.8|41d4Js2!{4Js4LY.8|4LY4MY2!{4MY4M[.8|4M[5%T2!{5%T5%W.8|5%W5%h2!{5%h5%r.8|5%r5%s2!{5%s5%t2!{5%t5&Y.8|5&Y5'Z2!{5'Z5'k.8|5'k5(U2!{5(U5(^.8|5(^5)v2!{5)v5*y.8|5*y5+S2!{5+S5+U.8|5+U5-a2!{5-a5-c.8|5-c5-g2!{5-g5-h.8|5-h5-l2!{5-l5-x.8|5-x5.T2!{5.T5/t.8|5/t50O2!{50O50P.8|50P50S2!{50S50T.8|50T50X2!{50X50Y.8|50Y50q2!{50q51`.8|51`52f2!{52f52t.8|52t53x2!{53x55Y.8|55Y55`2!{55`55c.8|55c55d2!{55d55r.8|55r56`2!{56`56j.8|56j57R2!{57R57l.8|57l58Z2!{58Z58b.8|58b59c2!{59c5:P.8|5:P5:Q2!{5:Q5;S.8|5;S5;}2!{5;}5<f.8|5<f5<i2!{5<i5<j.8|5<j5<r2!{5<r5=W.8|5=W5=o2!{5=o5=r.8|5=r5=s2!{5=s5=x.8|5=x5>z2!{5>z5>{.8|5>{5>|2!{5>|5?P.8|5?P5?Q2!{5?Q5?R2!{5?R5?T.8|5?T5?Y2!{5?Y5?[.8|5?[5?]2!{5?]5?^.8|5?^5?_2!{5?_5?w.8|5?w5?z2!{5?z5?|.8|5?|5@X2!{5@X5@`.8|5@`5@c2!{5@c5@o.8|5@o5@u2!{5@u5@w.8|5@w5@}2!{5@}5AP.8|5AP5AV2!{5AV5A`.8|5A`5Ag2!{5Ag5Ah.8|5Ah5Ao2!{5Ao5Dv.8|5Dv5Ek2!{5Ek5FY.8|5FY;%S2!{;%S;%`.8|;%`;%w2!{;%w;%{.8|;%{;'O2!{;'O;'S.8|;'S;=`.9j<%l?&r.8|?&r?.p2!{?.p?.r.8|?.r?1Q2!{?1Q?1x.8|?1x?2P2!{?2P?2].8|?2]?2b2!{?2b?2g.8|?2g?2h2!{?2h?2i.8|?2i?2s2!{?2s?2t.8|?2t?3R2!{?3R?3S.8|?3S?3X2!{?3X?3Y.8|?3Y?3Z2!{?3Z?3[.8|?3[?3]2!{?3]?3^2!{?3^?3_.8|?3_?3`2!{?3`?3a2!{?3a?3b.8|?3b?5r2!{?5r?6e.8|?6e?>`2!{?>`?>r.8|?>r?@U2!{?@U?@W.8|?@W?A`2!{?A`?BY.8|?BY?Bf2!{?Bf?EO.8|?EO?ET2!{?ET?EU.8|?EU?HR2!{?HR?Hw.8|?Hw?Ic2!{?Ic?Ii.8|?Ii?JT2!{?JT?J`.8|?J`?L]2!{?L]?L`.8|?L`?Lf2!{?Lf?Lh.8|?Lh?Ln2!{?Ln?Lp.8|?Lp?Lv2!{?Lv?Lx.8|?Lx?L{2!{?L{O.8|!_3*O2i!OW|SS!RmPOY.9vYZ!,^Zq.9vqr3)srs/Cbst3)stu3)suv3)svw3)swx3)sxz.9vz{3)s{|3)s|!O.9v!O!P3)s!P!Q3)s!Q![3)s![!a.9v!a!b3)s!b!c.9v!c!}3)s!}#O.9v#O#P3)s#P#R.9v#R#S3)s#S#T40m#T#o3)s#o$p.9v$p$q3)s$q${.9v${$|3)s$|%Q.9v%Q%R3)s%R%W.9v%W%o3)s%o%p.9v%p&a3)s&a&b.9v&b0`3)s0`0d.9v0d0p3)s0p1O.9v1O1T3)s1T1[.9v1[1]3)s1]1^.9v1^1_3)s1_4U.9v4U4Z3)s4Z4[.9v4[4]3)s4]4^3)s4^4`.9v4`4d3)s4d4l.9v4l4m3)s4m4n.9v4n4q3)s4q4r.9v4r4s3)s4s4t.9v4t5Y3)s5Y5Z.9v5Z7Q3)s7Q7R.9v7R:S3)s:S:[.9v:[=p3)s=p=y.9v=y>q3)s>q>s.9v>s>t3)s>t>{.9v>{?t3)s?tA`.9vA`A{3)sA{BQ.9vBQBT3)sBTCS.9vCSDP3)sDPDt.9vDtDu3)sDuDv3)sDvDw.9vDwGO3)sGOGP.9vGPGQ3)sGQGa.9vGaGb3)sGbGc3)sGcGj.9vGjGk3)sGkGl3)sGlGv.9vGvGy3)sGyG{.9vG{G|3)sG|H^.9vH^H_3)sH_H`.9vH`IO3)sIOIm.9vImKj3)sKjKu.9vKuKv3)sKvL`.9vL`MR3)sMRM[.9vM[M]3)sM]M^3)sM^Mb.9vMbMc3)sMcMh.9vMhNO3)sNONS.9vNSNT3)sNTN^.9vN^N_3)sN_Nb.9vNbNc3)sNcNz.9vNz! e3)s! e!#O.9v!#O!#P3)s!#P!#Q.9v!#Q!#]3)s!#]!%W.9v!%W!&`3)s!&`!&c.9v!&c!&d3)s!&d!&v.9v!&v!&w3)s!&w!'O.9v!'O!'Y3)s!'Y!'i.9v!'i!'p3)s!'p!'q.9v!'q!'x3)s!'x!'}.9v!'}!(V3)s!(V!(X.9v!(X!(Y3)s!(Y!(Z3)s!(Z!(].9v!(]!(s3)s!(s!(t.9v!(t!({3)s!({!(|.9v!(|!(}3)s!(}!)Q.9v!)Q!)U3)s!)U!)X.9v!)X!)Y3)s!)Y!)j.9v!)j!)k3)s!)k!)x.9v!)x!)y3)s!)y!)z3)s!)z!){.9v!){!*O3)s!*O!*^.9v!*^!*_3)s!*_!*`3)s!*`!*s.9v!*s!*y3)s!*y!*}.9v!*}!+O3)s!+O!+P3)s!+P!+R.9v!+R!+i3)s!+i!+j.9v!+j!+q3)s!+q!+r.9v!+r!+s3)s!+s!+t3)s!+t!+u.9v!+u!+v3)s!+v!+w3)s!+w!+x.9v!+x!+y3)s!+y!+z3)s!+z!,k.9v!,k!,o3)s!,o!,p.9v!,p!,q3)s!,q!-U.9v!-U!-X3)s!-X!-i.9v!-i!-r3)s!-r!-s.9v!-s!-v3)s!-v!-w.9v!-w!._3)s!._!.`.9v!.`!.g3)s!.g!.h.9v!.h!.i3)s!.i!.j3)s!.j!.k.9v!.k!.p3)s!.p!.s.9v!.s!.t3)s!.t!/W.9v!/W!/X3)s!/X!/h.9v!/h!/i3)s!/i!/j3)s!/j!0_.9v!0_!0g3)s!0g!0i.9v!0i!0j3)s!0j!0k3)s!0k!0m.9v!0m!1T3)s!1T!1U.9v!1U!1]3)s!1]!1^.9v!1^!1_3)s!1_!1`3)s!1`!1a.9v!1a!1f3)s!1f!1i.9v!1i!1j3)s!1j!2Y.9v!2Y!2Z3)s!2Z!2[3)s!2[!2].9v!2]!2`3)s!2`!2o.9v!2o!2p3)s!2p!3R.9v!3R!3S3)s!3S!3T.9v!3T!3Z3)s!3Z!3^.9v!3^!3a3)s!3a!3b.9v!3b!3f3)s!3f!3i.9v!3i!3j3)s!3j!3k3)s!3k!3l.9v!3l!3m3)s!3m!3n.9v!3n!3o3)s!3o!3p3)s!3p!3s.9v!3s!3t3)s!3t!3u3)s!3u!3x.9v!3x!3{3)s!3{!4O.9v!4O!4[3)s!4[!4r.9v!4r!4s3)s!4s!5y.9v!5y!6R3)s!6R!6S.9v!6S!6V3)s!6V!6W.9v!6W!6o3)s!6o!6p.9v!6p!6z3)s!6z!6{.9v!6{!7Q3)s!7Q!7T.9v!7T!7U3)s!7U!7p.9v!7p!7q3)s!7q!7r3)s!7r!7x.9v!7x!7y3)s!7y!7z3)s!7z!8o.9v!8o!8w3)s!8w!8x.9v!8x!8{3)s!8{!8|.9v!8|!9e3)s!9e!9f.9v!9f!9p3)s!9p!9q.9v!9q!9v3)s!9v!9y.9v!9y!9z3)s!9z!:l.9v!:l!:m3)s!:m!:n.9v!:n!:o3)s!:o!:p3)s!:p!;P.9v!;P!;Q3)s!;Q!;R3)s!;R!;e.9v!;e!;m3)s!;m!;n.9v!;n!;q3)s!;q!;r.9v!;r!<m3)s!<m!<o.9v!<o!<p3)s!<p!=Q.9v!=Q!=R3)s!=R!=d.9v!=d!=e3)s!=e!=f3)s!=f!>O.9v!>O!>U3)s!>U!>Z.9v!>Z!>m3)s!>m!>p.9v!>p!?Y3)s!?Y!?Z.9v!?Z!?d3)s!?d!?e.9v!?e!?f3)s!?f!?h.9v!?h!?o3)s!?o!@{.9v!@{!A}3)s!A}!BO.9v!BO!BP3)s!BP!BQ3)s!BQ!B^.9v!B^!Be3)s!Be!Cq.9v!Cq!Cr3)s!Cr!Cs3)s!Cs!Ct.9v!Ct!Cu3)s!Cu!Cw.9v!Cw!Cx3)s!Cx!Cy3)s!Cy!Cz.9v!Cz!C{3)s!C{!C}.9v!C}!DO3)s!DO!DU.9v!DU!DY3)s!DY!DZ.9v!DZ!Db3)s!Db!Dc.9v!Dc!Df3)s!Df!Dg.9v!Dg!Dh3)s!Dh!Di.9v!Di!Dj3)s!Dj!Dl.9v!Dl!Dm3)s!Dm!Dn3)s!Dn!Do.9v!Do!Ds3)s!Ds!Dt.9v!Dt!Du3)s!Du!Dv3)s!Dv!EP.9v!EP!EQ3)s!EQ!ES.9v!ES!EX3)s!EX!EY.9v!EY!EZ3)s!EZ!Ep.9v!Ep!Et3)s!Et!Ff.9v!Ff!Fg3)s!Fg!Gx.9v!Gx!HQ3)s!HQ!HR.9v!HR!Hw3)s!Hw!Id.9v!Id!Ii3)s!Ii!LQ.9v!LQ!L}3)s!L}!Mc.9v!Mc!Md3)s!Md!Mt.9v!Mt!Mz3)s!Mz!NO.9v!NO!NS3)s!NS!NV.9v!NV!NW3)s!NW!NZ.9v!NZ!N[3)s!N[!N]3)s!N]!Nd.9v!Nd!Ng3)s!Ng!Nk.9v!Nk!Nx3)s!Nx# U.9v# U# V3)s# V# h.9v# h#!`3)s#!`#!a.9v#!a#!b3)s#!b#!g.9v#!g#!h3)s#!h#!j.9v#!j##g3)s##g##h.9v##h#*s3)s#*s#*t.9v#*t#*x3)s#*x#*z.9v#*z#+R3)s#+R#+S.9v#+S#+T3)s#+T#+U.9v#+U#+Y3)s#+Y#+[.9v#+[#,V3)s#,V#,W.9v#,W#,[3)s#,[#,^.9v#,^#-P3)s#-P#-Q.9v#-Q#-U3)s#-U#-W.9v#-W#-_3)s#-_#-`.9v#-`#-a3)s#-a#-b.9v#-b#-f3)s#-f#-h.9v#-h#-w3)s#-w#-x.9v#-x#/T3)s#/T#/U.9v#/U#/Y3)s#/Y#/[.9v#/[#0q3)s#0q#1h.9v#1h#1x3)s#1x#2Y.9v#2Y#4R3)s#4R#4_.9v#4_#Au3)s#Au#Aw.9v#Aw#BY3)s#BY#BZ.9v#BZ#Bu3)s#Bu#Bz.9v#Bz#Di3)s#Di#EO.9v#EO#E]3)s#E]#E^.9v#E^#Eb3)s#Eb#Ep.9v#Ep#FS3)s#FS#Fb.9v#Fb#Ft3)s#Ft#GS.9v#GS#Ga3)s#Ga#Gb.9v#Gb#Ge3)s#Ge#Gt.9v#Gt#Hz3)s#Hz#Io.9v#Io#Ip3)s#Ip#It.9v#It#Iu3)s#Iu#K[.9v#K[#MW3)s#MW#M`.9v#M`#NZ3)s#NZ#N[.9v#N[#N]3)s#N]#Nb.9v#Nb$ z3)s$ z$!U.9v$!U$!s3)s$!s$#x.9v$#x$$h3)s$$h$$j.9v$$j$$o3)s$$o$$z.9v$$z$%x3)s$%x$&_.9v$&_$&f3)s$&f$'p.9v$'p$(X3)s$(X$(b.9v$(b$)i3)s$)i$+_.9v$+_$+`3)s$+`$-a.9v$-a$.b3)s$.b$.s.9v$.s$.z3)s$.z$0T.9v$0T$0s3)s$0s$1Q.9v$1Q$1R3)s$1R$1S3)s$1S$1^.9v$1^$2[3)s$2[$2v.9v$2v$3l3)s$3l$4g.9v$4g$4j3)s$4j$4t.9v$4t$5j3)s$5j$7y.9v$7y$7}3)s$7}$8O.9v$8O$8S3)s$8S$8V.9v$8V$8W3)s$8W$8X3)s$8X$8b.9v$8b$<j3)s$<j$=|.9v$=|$DO3)s$DO$DQ.9v$DQ$DW3)s$DW$DY.9v$DY$EQ3)s$EQ$ES.9v$ES$EY3)s$EY$E[.9v$E[$Ed3)s$Ed$Ee.9v$Ee$Ef3)s$Ef$Eg.9v$Eg$Eh3)s$Eh$Ei.9v$Ei$Ej3)s$Ej$Ek.9v$Ek$F[3)s$F[$F^.9v$F^$Ge3)s$Ge$Gf.9v$Gf$Gm3)s$Gm$Gn.9v$Gn$Go3)s$Go$Gr.9v$Gr$Gu3)s$Gu$Gv.9v$Gv$G}3)s$G}$HQ.9v$HQ$HU3)s$HU$HW.9v$HW$H^3)s$H^$Hb.9v$Hb$Ho3)s$Ho$Ht.9v$Ht$Hw3)s$Hw$Hx.9v$Hx$IP3)s$IP$Ki.9v$Ki$Kj3)s$Kj$Kw.9v$Kw$Kx3)s$Kx$LY.9v$LY$Lg3)s$Lg$Np.9v$Np$Nq3)s$Nq$Nu.9v$Nu$Nv3)s$Nv$Nx.9v$Nx% S3)s% S% T.9v% T% U3)s% U% X.9v% X% ^3)s% ^% d.9v% d% e3)s% e% f.9v% f% g3)s% g% h.9v% h% i3)s% i% j.9v% j% n3)s% n% o.9v% o% z3)s% z% |.9v% |%!Q3)s%!Q%!V.9v%!V%![3)s%![%!`.9v%!`%!a3)s%!a%#g.9v%#g%#h3)s%#h%#i3)s%#i&/x.9v&/x&0y3)s&0y&0z.9v&0z&1{3)s&1{&1|.9v&1|&4w3)s&4w&4}.9v&4}&5R3)s&5R&5U.9v&5U&5V3)s&5V&5W3)s&5W&5d.9v&5d&6[3)s&6[&6].9v&6]&6^3)s&6^&6c.9v&6c&6d3)s&6d&6f.9v&6f&7p3)s&7p&7w.9v&7w&7x3)s&7x&8Y.9v&8Y&8q3)s&8q&8z.9v&8z&9R3)s&9R&9S.9v&9S&9Z3)s&9Z&9[.9v&9[&9c3)s&9c&9d.9v&9d&9k3)s&9k&9l.9v&9l&9s3)s&9s&9t.9v&9t&9{3)s&9{&9|.9v&9|&:T3)s&:T&:U.9v&:U&:]3)s&:]&<P.9v&<P&<Q3)s&<Q&FZ.9v&FZ&F[3)s&F[&F]3)s&F]&GX.9v&GX&G^3)s&G^&Gc.9v&Gc&Gd3)s&Gd&Ge3)s&Ge&Gi.9v&Gi&Ic3)s&Ic&Ii.9v&Ii&Il3)s&Il&Im.9v&Im&Kk3)s&Kk&Kl.9v&Kl&Kp3)s&Kp&Ku.9v&Ku&Lp3)s&Lp&Ls.9v&Ls&Nu3)s&Nu' W.9v' W' s3)s' s'!z.9v'!z'#[3)s'#['.b.9v'.b*3f3)s*3f*5S.9v*5S40_3)s40_41d.9v41d4Js3)s4Js4LY.9v4LY4MY3)s4MY4M[.9v4M[5%T3)s5%T5%W.9v5%W5%h3)s5%h5%r.9v5%r5%s3)s5%s5%t3)s5%t5&Y.9v5&Y5'Z3)s5'Z5'k.9v5'k5(U3)s5(U5(^.9v5(^5)v3)s5)v5*y.9v5*y5+S3)s5+S5+U.9v5+U5-a3)s5-a5-c.9v5-c5-g3)s5-g5-h.9v5-h5-l3)s5-l5-x.9v5-x5.T3)s5.T5/t.9v5/t50O3)s50O50P.9v50P50S3)s50S50T.9v50T50X3)s50X50Y.9v50Y50q3)s50q51`.9v51`52f3)s52f52t.9v52t53x3)s53x55Y.9v55Y55`3)s55`55c.9v55c55d3)s55d55r.9v55r56`3)s56`56j.9v56j57R3)s57R57l.9v57l58Z3)s58Z58b.9v58b59c3)s59c5:P.9v5:P5:Q3)s5:Q5;S.9v5;S5;}3)s5;}5<f.9v5<f5<i3)s5<i5<j.9v5<j5<r3)s5<r5=W.9v5=W5=o3)s5=o5=r.9v5=r5=s3)s5=s5=x.9v5=x5>z3)s5>z5>{.9v5>{5>|3)s5>|5?P.9v5?P5?Q3)s5?Q5?R3)s5?R5?T.9v5?T5?Y3)s5?Y5?[.9v5?[5?]3)s5?]5?^.9v5?^5?_3)s5?_5?w.9v5?w5?z3)s5?z5?|.9v5?|5@X3)s5@X5@`.9v5@`5@c3)s5@c5@o.9v5@o5@u3)s5@u5@w.9v5@w5@}3)s5@}5AP.9v5AP5AV3)s5AV5A`.9v5A`5Ag3)s5Ag5Ah.9v5Ah5Ao3)s5Ao5Dv.9v5Dv5Ek3)s5Ek5FY.9v5FY;%S3)s;%S;%`.9v;%`;%w3)s;%w;%{.9v;%{;'O3)s;'O;'S.9v;'S;=`.;`<%l?&r.9v?&r?.p3)s?.p?.r.9v?.r?1Q3)s?1Q?1x.9v?1x?2P3)s?2P?2].9v?2]?2b3)s?2b?2g.9v?2g?2h3)s?2h?2i.9v?2i?2s3)s?2s?2t.9v?2t?3R3)s?3R?3S.9v?3S?3X3)s?3X?3Y.9v?3Y?3Z3)s?3Z?3[.9v?3[?3]3)s?3]?3^3)s?3^?3_.9v?3_?3`3)s?3`?3a3)s?3a?3b.9v?3b?5r3)s?5r?6e.9v?6e?>`3)s?>`?>r.9v?>r?@U3)s?@U?@W.9v?@W?A`3)s?A`?BY.9v?BY?Bf3)s?Bf?EO.9v?EO?ET3)s?ET?EU.9v?EU?HR3)s?HR?Hw.9v?Hw?Ic3)s?Ic?Ii.9v?Ii?JT3)s?JT?J`.9v?J`?L]3)s?L]?L`.9v?L`?Lf3)s?Lf?Lh.9v?Lh?Ln3)s?Ln?Lp.9v?Lp?Lv3)s?Lv?Lx.9v?Lx?L{3)s?L{O.9v!V40v2i|SS!RmPOY.:lYZ!,zZq.:lqr40mrs0JYst40mtu40muv40mvw40mwx40mxz.:lz{40m{|40m|!O.:l!O!P40m!P!Q40m!Q![40m![!a.:l!a!b40m!b!c.:l!c!}40m!}#O.:l#O#P40m#P#R.:l#R#S40m#S#T40m#T#o40m#o$p.:l$p$q40m$q${.:l${$|40m$|%Q.:l%Q%R40m%R%W.:l%W%o40m%o%p.:l%p&a40m&a&b.:l&b0`40m0`0d.:l0d0p40m0p1O.:l1O1T40m1T1[.:l1[1]40m1]1^.:l1^1_40m1_4U.:l4U4Z40m4Z4[.:l4[4]40m4]4^40m4^4`.:l4`4d40m4d4l.:l4l4m40m4m4n.:l4n4q40m4q4r.:l4r4s40m4s4t.:l4t5Y40m5Y5Z.:l5Z7Q40m7Q7R.:l7R:S40m:S:[.:l:[=p40m=p=y.:l=y>q40m>q>s.:l>s>t40m>t>{.:l>{?t40m?tA`.:lA`A{40mA{BQ.:lBQBT40mBTCS.:lCSDP40mDPDt.:lDtDu40mDuDv40mDvDw.:lDwGO40mGOGP.:lGPGQ40mGQGa.:lGaGb40mGbGc40mGcGj.:lGjGk40mGkGl40mGlGv.:lGvGy40mGyG{.:lG{G|40mG|H^.:lH^H_40mH_H`.:lH`IO40mIOIm.:lImKj40mKjKu.:lKuKv40mKvL`.:lL`MR40mMRM[.:lM[M]40mM]M^40mM^Mb.:lMbMc40mMcMh.:lMhNO40mNONS.:lNSNT40mNTN^.:lN^N_40mN_Nb.:lNbNc40mNcNz.:lNz! e40m! e!#O.:l!#O!#P40m!#P!#Q.:l!#Q!#]40m!#]!%W.:l!%W!&`40m!&`!&c.:l!&c!&d40m!&d!&v.:l!&v!&w40m!&w!'O.:l!'O!'Y40m!'Y!'i.:l!'i!'p40m!'p!'q.:l!'q!'x40m!'x!'}.:l!'}!(V40m!(V!(X.:l!(X!(Y40m!(Y!(Z40m!(Z!(].:l!(]!(s40m!(s!(t.:l!(t!({40m!({!(|.:l!(|!(}40m!(}!)Q.:l!)Q!)U40m!)U!)X.:l!)X!)Y40m!)Y!)j.:l!)j!)k40m!)k!)x.:l!)x!)y40m!)y!)z40m!)z!){.:l!){!*O40m!*O!*^.:l!*^!*_40m!*_!*`40m!*`!*s.:l!*s!*y40m!*y!*}.:l!*}!+O40m!+O!+P40m!+P!+R.:l!+R!+i40m!+i!+j.:l!+j!+q40m!+q!+r.:l!+r!+s40m!+s!+t40m!+t!+u.:l!+u!+v40m!+v!+w40m!+w!+x.:l!+x!+y40m!+y!+z40m!+z!,k.:l!,k!,o40m!,o!,p.:l!,p!,q40m!,q!-U.:l!-U!-X40m!-X!-i.:l!-i!-r40m!-r!-s.:l!-s!-v40m!-v!-w.:l!-w!._40m!._!.`.:l!.`!.g40m!.g!.h.:l!.h!.i40m!.i!.j40m!.j!.k.:l!.k!.p40m!.p!.s.:l!.s!.t40m!.t!/W.:l!/W!/X40m!/X!/h.:l!/h!/i40m!/i!/j40m!/j!0_.:l!0_!0g40m!0g!0i.:l!0i!0j40m!0j!0k40m!0k!0m.:l!0m!1T40m!1T!1U.:l!1U!1]40m!1]!1^.:l!1^!1_40m!1_!1`40m!1`!1a.:l!1a!1f40m!1f!1i.:l!1i!1j40m!1j!2Y.:l!2Y!2Z40m!2Z!2[40m!2[!2].:l!2]!2`40m!2`!2o.:l!2o!2p40m!2p!3R.:l!3R!3S40m!3S!3T.:l!3T!3Z40m!3Z!3^.:l!3^!3a40m!3a!3b.:l!3b!3f40m!3f!3i.:l!3i!3j40m!3j!3k40m!3k!3l.:l!3l!3m40m!3m!3n.:l!3n!3o40m!3o!3p40m!3p!3s.:l!3s!3t40m!3t!3u40m!3u!3x.:l!3x!3{40m!3{!4O.:l!4O!4[40m!4[!4r.:l!4r!4s40m!4s!5y.:l!5y!6R40m!6R!6S.:l!6S!6V40m!6V!6W.:l!6W!6o40m!6o!6p.:l!6p!6z40m!6z!6{.:l!6{!7Q40m!7Q!7T.:l!7T!7U40m!7U!7p.:l!7p!7q40m!7q!7r40m!7r!7x.:l!7x!7y40m!7y!7z40m!7z!8o.:l!8o!8w40m!8w!8x.:l!8x!8{40m!8{!8|.:l!8|!9e40m!9e!9f.:l!9f!9p40m!9p!9q.:l!9q!9v40m!9v!9y.:l!9y!9z40m!9z!:l.:l!:l!:m40m!:m!:n.:l!:n!:o40m!:o!:p40m!:p!;P.:l!;P!;Q40m!;Q!;R40m!;R!;e.:l!;e!;m40m!;m!;n.:l!;n!;q40m!;q!;r.:l!;r!<m40m!<m!<o.:l!<o!<p40m!<p!=Q.:l!=Q!=R40m!=R!=d.:l!=d!=e40m!=e!=f40m!=f!>O.:l!>O!>U40m!>U!>Z.:l!>Z!>m40m!>m!>p.:l!>p!?Y40m!?Y!?Z.:l!?Z!?d40m!?d!?e.:l!?e!?f40m!?f!?h.:l!?h!?o40m!?o!@{.:l!@{!A}40m!A}!BO.:l!BO!BP40m!BP!BQ40m!BQ!B^.:l!B^!Be40m!Be!Cq.:l!Cq!Cr40m!Cr!Cs40m!Cs!Ct.:l!Ct!Cu40m!Cu!Cw.:l!Cw!Cx40m!Cx!Cy40m!Cy!Cz.:l!Cz!C{40m!C{!C}.:l!C}!DO40m!DO!DU.:l!DU!DY40m!DY!DZ.:l!DZ!Db40m!Db!Dc.:l!Dc!Df40m!Df!Dg.:l!Dg!Dh40m!Dh!Di.:l!Di!Dj40m!Dj!Dl.:l!Dl!Dm40m!Dm!Dn40m!Dn!Do.:l!Do!Ds40m!Ds!Dt.:l!Dt!Du40m!Du!Dv40m!Dv!EP.:l!EP!EQ40m!EQ!ES.:l!ES!EX40m!EX!EY.:l!EY!EZ40m!EZ!Ep.:l!Ep!Et40m!Et!Ff.:l!Ff!Fg40m!Fg!Gx.:l!Gx!HQ40m!HQ!HR.:l!HR!Hw40m!Hw!Id.:l!Id!Ii40m!Ii!LQ.:l!LQ!L}40m!L}!Mc.:l!Mc!Md40m!Md!Mt.:l!Mt!Mz40m!Mz!NO.:l!NO!NS40m!NS!NV.:l!NV!NW40m!NW!NZ.:l!NZ!N[40m!N[!N]40m!N]!Nd.:l!Nd!Ng40m!Ng!Nk.:l!Nk!Nx40m!Nx# U.:l# U# V40m# V# h.:l# h#!`40m#!`#!a.:l#!a#!b40m#!b#!g.:l#!g#!h40m#!h#!j.:l#!j##g40m##g##h.:l##h#*s40m#*s#*t.:l#*t#*x40m#*x#*z.:l#*z#+R40m#+R#+S.:l#+S#+T40m#+T#+U.:l#+U#+Y40m#+Y#+[.:l#+[#,V40m#,V#,W.:l#,W#,[40m#,[#,^.:l#,^#-P40m#-P#-Q.:l#-Q#-U40m#-U#-W.:l#-W#-_40m#-_#-`.:l#-`#-a40m#-a#-b.:l#-b#-f40m#-f#-h.:l#-h#-w40m#-w#-x.:l#-x#/T40m#/T#/U.:l#/U#/Y40m#/Y#/[.:l#/[#0q40m#0q#1h.:l#1h#1x40m#1x#2Y.:l#2Y#4R40m#4R#4_.:l#4_#Au40m#Au#Aw.:l#Aw#BY40m#BY#BZ.:l#BZ#Bu40m#Bu#Bz.:l#Bz#Di40m#Di#EO.:l#EO#E]40m#E]#E^.:l#E^#Eb40m#Eb#Ep.:l#Ep#FS40m#FS#Fb.:l#Fb#Ft40m#Ft#GS.:l#GS#Ga40m#Ga#Gb.:l#Gb#Ge40m#Ge#Gt.:l#Gt#Hz40m#Hz#Io.:l#Io#Ip40m#Ip#It.:l#It#Iu40m#Iu#K[.:l#K[#MW40m#MW#M`.:l#M`#NZ40m#NZ#N[.:l#N[#N]40m#N]#Nb.:l#Nb$ z40m$ z$!U.:l$!U$!s40m$!s$#x.:l$#x$$h40m$$h$$j.:l$$j$$o40m$$o$$z.:l$$z$%x40m$%x$&_.:l$&_$&f40m$&f$'p.:l$'p$(X40m$(X$(b.:l$(b$)i40m$)i$+_.:l$+_$+`40m$+`$-a.:l$-a$.b40m$.b$.s.:l$.s$.z40m$.z$0T.:l$0T$0s40m$0s$1Q.:l$1Q$1R40m$1R$1S40m$1S$1^.:l$1^$2[40m$2[$2v.:l$2v$3l40m$3l$4g.:l$4g$4j40m$4j$4t.:l$4t$5j40m$5j$7y.:l$7y$7}40m$7}$8O.:l$8O$8S40m$8S$8V.:l$8V$8W40m$8W$8X40m$8X$8b.:l$8b$<j40m$<j$=|.:l$=|$DO40m$DO$DQ.:l$DQ$DW40m$DW$DY.:l$DY$EQ40m$EQ$ES.:l$ES$EY40m$EY$E[.:l$E[$Ed40m$Ed$Ee.:l$Ee$Ef40m$Ef$Eg.:l$Eg$Eh40m$Eh$Ei.:l$Ei$Ej40m$Ej$Ek.:l$Ek$F[40m$F[$F^.:l$F^$Ge40m$Ge$Gf.:l$Gf$Gm40m$Gm$Gn.:l$Gn$Go40m$Go$Gr.:l$Gr$Gu40m$Gu$Gv.:l$Gv$G}40m$G}$HQ.:l$HQ$HU40m$HU$HW.:l$HW$H^40m$H^$Hb.:l$Hb$Ho40m$Ho$Ht.:l$Ht$Hw40m$Hw$Hx.:l$Hx$IP40m$IP$Ki.:l$Ki$Kj40m$Kj$Kw.:l$Kw$Kx40m$Kx$LY.:l$LY$Lg40m$Lg$Np.:l$Np$Nq40m$Nq$Nu.:l$Nu$Nv40m$Nv$Nx.:l$Nx% S40m% S% T.:l% T% U40m% U% X.:l% X% ^40m% ^% d.:l% d% e40m% e% f.:l% f% g40m% g% h.:l% h% i40m% i% j.:l% j% n40m% n% o.:l% o% z40m% z% |.:l% |%!Q40m%!Q%!V.:l%!V%![40m%![%!`.:l%!`%!a40m%!a%#g.:l%#g%#h40m%#h%#i40m%#i&/x.:l&/x&0y40m&0y&0z.:l&0z&1{40m&1{&1|.:l&1|&4w40m&4w&4}.:l&4}&5R40m&5R&5U.:l&5U&5V40m&5V&5W40m&5W&5d.:l&5d&6[40m&6[&6].:l&6]&6^40m&6^&6c.:l&6c&6d40m&6d&6f.:l&6f&7p40m&7p&7w.:l&7w&7x40m&7x&8Y.:l&8Y&8q40m&8q&8z.:l&8z&9R40m&9R&9S.:l&9S&9Z40m&9Z&9[.:l&9[&9c40m&9c&9d.:l&9d&9k40m&9k&9l.:l&9l&9s40m&9s&9t.:l&9t&9{40m&9{&9|.:l&9|&:T40m&:T&:U.:l&:U&:]40m&:]&<P.:l&<P&<Q40m&<Q&FZ.:l&FZ&F[40m&F[&F]40m&F]&GX.:l&GX&G^40m&G^&Gc.:l&Gc&Gd40m&Gd&Ge40m&Ge&Gi.:l&Gi&Ic40m&Ic&Ii.:l&Ii&Il40m&Il&Im.:l&Im&Kk40m&Kk&Kl.:l&Kl&Kp40m&Kp&Ku.:l&Ku&Lp40m&Lp&Ls.:l&Ls&Nu40m&Nu' W.:l' W' s40m' s'!z.:l'!z'#[40m'#['.b.:l'.b*3f40m*3f*5S.:l*5S40_40m40_41d.:l41d4Js40m4Js4LY.:l4LY4MY40m4MY4M[.:l4M[5%T40m5%T5%W.:l5%W5%h40m5%h5%r.:l5%r5%s40m5%s5%t40m5%t5&Y.:l5&Y5'Z40m5'Z5'k.:l5'k5(U40m5(U5(^.:l5(^5)v40m5)v5*y.:l5*y5+S40m5+S5+U.:l5+U5-a40m5-a5-c.:l5-c5-g40m5-g5-h.:l5-h5-l40m5-l5-x.:l5-x5.T40m5.T5/t.:l5/t50O40m50O50P.:l50P50S40m50S50T.:l50T50X40m50X50Y.:l50Y50q40m50q51`.:l51`52f40m52f52t.:l52t53x40m53x55Y.:l55Y55`40m55`55c.:l55c55d40m55d55r.:l55r56`40m56`56j.:l56j57R40m57R57l.:l57l58Z40m58Z58b.:l58b59c40m59c5:P.:l5:P5:Q40m5:Q5;S.:l5;S5;}40m5;}5<f.:l5<f5<i40m5<i5<j.:l5<j5<r40m5<r5=W.:l5=W5=o40m5=o5=r.:l5=r5=s40m5=s5=x.:l5=x5>z40m5>z5>{.:l5>{5>|40m5>|5?P.:l5?P5?Q40m5?Q5?R40m5?R5?T.:l5?T5?Y40m5?Y5?[.:l5?[5?]40m5?]5?^.:l5?^5?_40m5?_5?w.:l5?w5?z40m5?z5?|.:l5?|5@X40m5@X5@`.:l5@`5@c40m5@c5@o.:l5@o5@u40m5@u5@w.:l5@w5@}40m5@}5AP.:l5AP5AV40m5AV5A`.:l5A`5Ag40m5Ag5Ah.:l5Ah5Ao40m5Ao5Dv.:l5Dv5Ek40m5Ek5FY.:l5FY;%S40m;%S;%`.:l;%`;%w40m;%w;%{.:l;%{;'O40m;'O;'S.:l;'S;=`.;Y<%l?&r.:l?&r?.p40m?.p?.r.:l?.r?1Q40m?1Q?1x.:l?1x?2P40m?2P?2].:l?2]?2b40m?2b?2g.:l?2g?2h40m?2h?2i.:l?2i?2s40m?2s?2t.:l?2t?3R40m?3R?3S.:l?3S?3X40m?3X?3Y.:l?3Y?3Z40m?3Z?3[.:l?3[?3]40m?3]?3^40m?3^?3_.:l?3_?3`40m?3`?3a40m?3a?3b.:l?3b?5r40m?5r?6e.:l?6e?>`40m?>`?>r.:l?>r?@U40m?@U?@W.:l?@W?A`40m?A`?BY.:l?BY?Bf40m?Bf?EO.:l?EO?ET40m?ET?EU.:l?EU?HR40m?HR?Hw.:l?Hw?Ic40m?Ic?Ii.:l?Ii?JT40m?JT?J`.:l?J`?L]40m?L]?L`.:l?L`?Lf40m?Lf?Lh.:l?Lh?Ln40m?Ln?Lp.:l?Lp?Lv40m?Lv?Lx.:l?Lx?L{40m?L{O.:l!X57p2i|SzQS!RmPOY.;fYZ!-iZq.;fqr57ers2!{st57etu57euv57evw57ewx40mxz.;fz{57e{|57e|!O.;f!O!P57e!P!Q57e!Q![57e![!a.;f!a!b57e!b!c.;f!c!}57e!}#O.;f#O#P57e#P#R.;f#R#S57e#S#T57e#T#o57e#o$p.;f$p$q57e$q${.;f${$|57e$|%Q.;f%Q%R57e%R%W.;f%W%o57e%o%p.;f%p&a57e&a&b.;f&b0`57e0`0d.;f0d0p57e0p1O.;f1O1T57e1T1[.;f1[1]57e1]1^.;f1^1_57e1_4U.;f4U4Z57e4Z4[.;f4[4]57e4]4^57e4^4`.;f4`4d57e4d4l.;f4l4m57e4m4n.;f4n4q57e4q4r.;f4r4s57e4s4t.;f4t5Y57e5Y5Z.;f5Z7Q57e7Q7R.;f7R:S57e:S:[.;f:[=p57e=p=y.;f=y>q57e>q>s.;f>s>t57e>t>{.;f>{?t57e?tA`.;fA`A{57eA{BQ.;fBQBT57eBTCS.;fCSDP57eDPDt.;fDtDu57eDuDv57eDvDw.;fDwGO57eGOGP.;fGPGQ57eGQGa.;fGaGb57eGbGc57eGcGj.;fGjGk57eGkGl57eGlGv.;fGvGy57eGyG{.;fG{G|57eG|H^.;fH^H_57eH_H`.;fH`IO57eIOIm.;fImKj57eKjKu.;fKuKv57eKvL`.;fL`MR57eMRM[.;fM[M]57eM]M^57eM^Mb.;fMbMc57eMcMh.;fMhNO57eNONS.;fNSNT57eNTN^.;fN^N_57eN_Nb.;fNbNc57eNcNz.;fNz! e57e! e!#O.;f!#O!#P57e!#P!#Q.;f!#Q!#]57e!#]!%W.;f!%W!&`57e!&`!&c.;f!&c!&d57e!&d!&v.;f!&v!&w57e!&w!'O.;f!'O!'Y57e!'Y!'i.;f!'i!'p57e!'p!'q.;f!'q!'x57e!'x!'}.;f!'}!(V57e!(V!(X.;f!(X!(Y57e!(Y!(Z57e!(Z!(].;f!(]!(s57e!(s!(t.;f!(t!({57e!({!(|.;f!(|!(}57e!(}!)Q.;f!)Q!)U57e!)U!)X.;f!)X!)Y57e!)Y!)j.;f!)j!)k57e!)k!)x.;f!)x!)y57e!)y!)z57e!)z!){.;f!){!*O57e!*O!*^.;f!*^!*_57e!*_!*`57e!*`!*s.;f!*s!*y57e!*y!*}.;f!*}!+O57e!+O!+P57e!+P!+R.;f!+R!+i57e!+i!+j.;f!+j!+q57e!+q!+r.;f!+r!+s57e!+s!+t57e!+t!+u.;f!+u!+v57e!+v!+w57e!+w!+x.;f!+x!+y57e!+y!+z57e!+z!,k.;f!,k!,o57e!,o!,p.;f!,p!,q57e!,q!-U.;f!-U!-X57e!-X!-i.;f!-i!-r57e!-r!-s.;f!-s!-v57e!-v!-w.;f!-w!._57e!._!.`.;f!.`!.g57e!.g!.h.;f!.h!.i57e!.i!.j57e!.j!.k.;f!.k!.p57e!.p!.s.;f!.s!.t57e!.t!/W.;f!/W!/X57e!/X!/h.;f!/h!/i57e!/i!/j57e!/j!0_.;f!0_!0g57e!0g!0i.;f!0i!0j57e!0j!0k57e!0k!0m.;f!0m!1T57e!1T!1U.;f!1U!1]57e!1]!1^.;f!1^!1_57e!1_!1`57e!1`!1a.;f!1a!1f57e!1f!1i.;f!1i!1j57e!1j!2Y.;f!2Y!2Z57e!2Z!2[57e!2[!2].;f!2]!2`57e!2`!2o.;f!2o!2p57e!2p!3R.;f!3R!3S57e!3S!3T.;f!3T!3Z57e!3Z!3^.;f!3^!3a57e!3a!3b.;f!3b!3f57e!3f!3i.;f!3i!3j57e!3j!3k57e!3k!3l.;f!3l!3m57e!3m!3n.;f!3n!3o57e!3o!3p57e!3p!3s.;f!3s!3t57e!3t!3u57e!3u!3x.;f!3x!3{57e!3{!4O.;f!4O!4[57e!4[!4r.;f!4r!4s57e!4s!5y.;f!5y!6R57e!6R!6S.;f!6S!6V57e!6V!6W.;f!6W!6o57e!6o!6p.;f!6p!6z57e!6z!6{.;f!6{!7Q57e!7Q!7T.;f!7T!7U57e!7U!7p.;f!7p!7q57e!7q!7r57e!7r!7x.;f!7x!7y57e!7y!7z57e!7z!8o.;f!8o!8w57e!8w!8x.;f!8x!8{57e!8{!8|.;f!8|!9e57e!9e!9f.;f!9f!9p57e!9p!9q.;f!9q!9v57e!9v!9y.;f!9y!9z57e!9z!:l.;f!:l!:m57e!:m!:n.;f!:n!:o57e!:o!:p57e!:p!;P.;f!;P!;Q57e!;Q!;R57e!;R!;e.;f!;e!;m57e!;m!;n.;f!;n!;q57e!;q!;r.;f!;r!<m57e!<m!<o.;f!<o!<p57e!<p!=Q.;f!=Q!=R57e!=R!=d.;f!=d!=e57e!=e!=f57e!=f!>O.;f!>O!>U57e!>U!>Z.;f!>Z!>m57e!>m!>p.;f!>p!?Y57e!?Y!?Z.;f!?Z!?d57e!?d!?e.;f!?e!?f57e!?f!?h.;f!?h!?o57e!?o!@{.;f!@{!A}57e!A}!BO.;f!BO!BP57e!BP!BQ57e!BQ!B^.;f!B^!Be57e!Be!Cq.;f!Cq!Cr57e!Cr!Cs57e!Cs!Ct.;f!Ct!Cu57e!Cu!Cw.;f!Cw!Cx57e!Cx!Cy57e!Cy!Cz.;f!Cz!C{57e!C{!C}.;f!C}!DO57e!DO!DU.;f!DU!DY57e!DY!DZ.;f!DZ!Db57e!Db!Dc.;f!Dc!Df57e!Df!Dg.;f!Dg!Dh57e!Dh!Di.;f!Di!Dj57e!Dj!Dl.;f!Dl!Dm57e!Dm!Dn57e!Dn!Do.;f!Do!Ds57e!Ds!Dt.;f!Dt!Du57e!Du!Dv57e!Dv!EP.;f!EP!EQ57e!EQ!ES.;f!ES!EX57e!EX!EY.;f!EY!EZ57e!EZ!Ep.;f!Ep!Et57e!Et!Ff.;f!Ff!Fg57e!Fg!Gx.;f!Gx!HQ57e!HQ!HR.;f!HR!Hw57e!Hw!Id.;f!Id!Ii57e!Ii!LQ.;f!LQ!L}57e!L}!Mc.;f!Mc!Md57e!Md!Mt.;f!Mt!Mz57e!Mz!NO.;f!NO!NS57e!NS!NV.;f!NV!NW57e!NW!NZ.;f!NZ!N[57e!N[!N]57e!N]!Nd.;f!Nd!Ng57e!Ng!Nk.;f!Nk!Nx57e!Nx# U.;f# U# V57e# V# h.;f# h#!`57e#!`#!a.;f#!a#!b57e#!b#!g.;f#!g#!h57e#!h#!j.;f#!j##g57e##g##h.;f##h#*s57e#*s#*t.;f#*t#*x57e#*x#*z.;f#*z#+R57e#+R#+S.;f#+S#+T57e#+T#+U.;f#+U#+Y57e#+Y#+[.;f#+[#,V57e#,V#,W.;f#,W#,[57e#,[#,^.;f#,^#-P57e#-P#-Q.;f#-Q#-U57e#-U#-W.;f#-W#-_57e#-_#-`.;f#-`#-a57e#-a#-b.;f#-b#-f57e#-f#-h.;f#-h#-w57e#-w#-x.;f#-x#/T57e#/T#/U.;f#/U#/Y57e#/Y#/[.;f#/[#0q57e#0q#1h.;f#1h#1x57e#1x#2Y.;f#2Y#4R57e#4R#4_.;f#4_#Au57e#Au#Aw.;f#Aw#BY57e#BY#BZ.;f#BZ#Bu57e#Bu#Bz.;f#Bz#Di57e#Di#EO.;f#EO#E]57e#E]#E^.;f#E^#Eb57e#Eb#Ep.;f#Ep#FS57e#FS#Fb.;f#Fb#Ft57e#Ft#GS.;f#GS#Ga57e#Ga#Gb.;f#Gb#Ge57e#Ge#Gt.;f#Gt#Hz57e#Hz#Io.;f#Io#Ip57e#Ip#It.;f#It#Iu57e#Iu#K[.;f#K[#MW57e#MW#M`.;f#M`#NZ57e#NZ#N[.;f#N[#N]57e#N]#Nb.;f#Nb$ z57e$ z$!U.;f$!U$!s57e$!s$#x.;f$#x$$h57e$$h$$j.;f$$j$$o57e$$o$$z.;f$$z$%x57e$%x$&_.;f$&_$&f57e$&f$'p.;f$'p$(X57e$(X$(b.;f$(b$)i57e$)i$+_.;f$+_$+`57e$+`$-a.;f$-a$.b57e$.b$.s.;f$.s$.z57e$.z$0T.;f$0T$0s57e$0s$1Q.;f$1Q$1R57e$1R$1S57e$1S$1^.;f$1^$2[57e$2[$2v.;f$2v$3l57e$3l$4g.;f$4g$4j57e$4j$4t.;f$4t$5j57e$5j$7y.;f$7y$7}57e$7}$8O.;f$8O$8S57e$8S$8V.;f$8V$8W57e$8W$8X57e$8X$8b.;f$8b$<j57e$<j$=|.;f$=|$DO57e$DO$DQ.;f$DQ$DW57e$DW$DY.;f$DY$EQ57e$EQ$ES.;f$ES$EY57e$EY$E[.;f$E[$Ed57e$Ed$Ee.;f$Ee$Ef57e$Ef$Eg.;f$Eg$Eh57e$Eh$Ei.;f$Ei$Ej57e$Ej$Ek.;f$Ek$F[57e$F[$F^.;f$F^$Ge57e$Ge$Gf.;f$Gf$Gm57e$Gm$Gn.;f$Gn$Go57e$Go$Gr.;f$Gr$Gu57e$Gu$Gv.;f$Gv$G}57e$G}$HQ.;f$HQ$HU57e$HU$HW.;f$HW$H^57e$H^$Hb.;f$Hb$Ho57e$Ho$Ht.;f$Ht$Hw57e$Hw$Hx.;f$Hx$IP57e$IP$Ki.;f$Ki$Kj57e$Kj$Kw.;f$Kw$Kx57e$Kx$LY.;f$LY$Lg57e$Lg$Np.;f$Np$Nq57e$Nq$Nu.;f$Nu$Nv57e$Nv$Nx.;f$Nx% S57e% S% T.;f% T% U57e% U% X.;f% X% ^57e% ^% d.;f% d% e57e% e% f.;f% f% g57e% g% h.;f% h% i57e% i% j.;f% j% n57e% n% o.;f% o% z57e% z% |.;f% |%!Q57e%!Q%!V.;f%!V%![57e%![%!`.;f%!`%!a57e%!a%#g.;f%#g%#h57e%#h%#i57e%#i&/x.;f&/x&0y57e&0y&0z.;f&0z&1{57e&1{&1|.;f&1|&4w57e&4w&4}.;f&4}&5R57e&5R&5U.;f&5U&5V57e&5V&5W57e&5W&5d.;f&5d&6[57e&6[&6].;f&6]&6^57e&6^&6c.;f&6c&6d57e&6d&6f.;f&6f&7p57e&7p&7w.;f&7w&7x57e&7x&8Y.;f&8Y&8q57e&8q&8z.;f&8z&9R57e&9R&9S.;f&9S&9Z57e&9Z&9[.;f&9[&9c57e&9c&9d.;f&9d&9k57e&9k&9l.;f&9l&9s57e&9s&9t.;f&9t&9{57e&9{&9|.;f&9|&:T57e&:T&:U.;f&:U&:]57e&:]&<P.;f&<P&<Q57e&<Q&FZ.;f&FZ&F[57e&F[&F]57e&F]&GX.;f&GX&G^57e&G^&Gc.;f&Gc&Gd57e&Gd&Ge57e&Ge&Gi.;f&Gi&Ic57e&Ic&Ii.;f&Ii&Il57e&Il&Im.;f&Im&Kk57e&Kk&Kl.;f&Kl&Kp57e&Kp&Ku.;f&Ku&Lp57e&Lp&Ls.;f&Ls&Nu57e&Nu' W.;f' W' s57e' s'!z.;f'!z'#[57e'#['.b.;f'.b*3f57e*3f*5S.;f*5S40_57e40_41d.;f41d4Js57e4Js4LY.;f4LY4MY57e4MY4M[.;f4M[5%T57e5%T5%W.;f5%W5%h57e5%h5%r.;f5%r5%s57e5%s5%t57e5%t5&Y.;f5&Y5'Z57e5'Z5'k.;f5'k5(U57e5(U5(^.;f5(^5)v57e5)v5*y.;f5*y5+S57e5+S5+U.;f5+U5-a57e5-a5-c.;f5-c5-g57e5-g5-h.;f5-h5-l57e5-l5-x.;f5-x5.T57e5.T5/t.;f5/t50O57e50O50P.;f50P50S57e50S50T.;f50T50X57e50X50Y.;f50Y50q57e50q51`.;f51`52f57e52f52t.;f52t53x57e53x55Y.;f55Y55`57e55`55c.;f55c55d57e55d55r.;f55r56`57e56`56j.;f56j57R57e57R57l.;f57l58Z57e58Z58b.;f58b59c57e59c5:P.;f5:P5:Q57e5:Q5;S.;f5;S5;}57e5;}5<f.;f5<f5<i57e5<i5<j.;f5<j5<r57e5<r5=W.;f5=W5=o57e5=o5=r.;f5=r5=s57e5=s5=x.;f5=x5>z57e5>z5>{.;f5>{5>|57e5>|5?P.;f5?P5?Q57e5?Q5?R57e5?R5?T.;f5?T5?Y57e5?Y5?[.;f5?[5?]57e5?]5?^.;f5?^5?_57e5?_5?w.;f5?w5?z57e5?z5?|.;f5?|5@X57e5@X5@`.;f5@`5@c57e5@c5@o.;f5@o5@u57e5@u5@w.;f5@w5@}57e5@}5AP.;f5AP5AV57e5AV5A`.;f5A`5Ag57e5Ag5Ah.;f5Ah5Ao57e5Ao5Dv.;f5Dv5Ek57e5Ek5FY.;f5FY;%S57e;%S;%`.;f;%`;%w57e;%w;%{.;f;%{;'O57e;'O;'S.;f;'S;=`.<[<%l?&r.;f?&r?.p57e?.p?.r.;f?.r?1Q57e?1Q?1x.;f?1x?2P57e?2P?2].;f?2]?2b57e?2b?2g.;f?2g?2h57e?2h?2i.;f?2i?2s57e?2s?2t.;f?2t?3R57e?3R?3S.;f?3S?3X57e?3X?3Y.;f?3Y?3Z57e?3Z?3[.;f?3[?3]57e?3]?3^57e?3^?3_.;f?3_?3`57e?3`?3a57e?3a?3b.;f?3b?5r57e?5r?6e.;f?6e?>`57e?>`?>r.;f?>r?@U57e?@U?@W.;f?@W?A`57e?A`?BY.;f?BY?Bf57e?Bf?EO.;f?EO?ET57e?ET?EU.;f?EU?HR57e?HR?Hw.;f?Hw?Ic57e?Ic?Ii.;f?Ii?JT57e?JT?J`.;f?J`?L]57e?L]?L`.;f?L`?Lf57e?Lf?Lh.;f?Lh?Ln57e?Ln?Lp.;f?Lp?Lv57e?Lv?Lx.;f?Lx?L{57e?L{O.;f_6>l2g!OW|SzQ!kPmPOq!)tqr!2wrs#9kst!2wtu!2wuv!2wvw!2wwx';ixz!)tz{!2w{|!2w|!O!)t!O!P!2w!P!Q!2w!Q![!2w![!a!)t!a!b!2w!b!c!)t!c!}!2w!}#O!)t#O#P!2w#P#R!)t#R#S!2w#S#T)Hy#T#o!2w#o$p!)t$p$q!2w$q${!)t${$|!2w$|%Q!)t%Q%R!2w%R%W!)t%W%o!2w%o%p!)t%p&a!2w&a&b!)t&b0`!2w0`0d!)t0d0p!2w0p1O!)t1O1T!2w1T1[!)t1[1]!2w1]1^!)t1^1_!2w1_4U!)t4U4Z!2w4Z4[!)t4[4]!2w4]4^!2w4^4`!)t4`4d!2w4d4l!)t4l4m!2w4m4n!)t4n4q!2w4q4r!)t4r4s!2w4s4t!)t4t5Y!2w5Y5Z!)t5Z7Q!2w7Q7R!)t7R:S!2w:S:[!)t:[=p!2w=p=y!)t=y>q!2w>q>s!)t>s>t!2w>t>{!)t>{?t!2w?tA`!)tA`A{!2wA{BQ!)tBQBT!2wBTCS!)tCSDP!2wDPDt!)tDtDu!2wDuDv!2wDvDw!)tDwGO!2wGOGP!)tGPGQ!2wGQGa!)tGaGb!2wGbGc!2wGcGj!)tGjGk!2wGkGl!2wGlGv!)tGvGy!2wGyG{!)tG{G|!2wG|H^!)tH^H_!2wH_H`!)tH`IO!2wIOIm!)tImKj!2wKjKu!)tKuKv!2wKvL`!)tL`MR!2wMRM[!)tM[M]!2wM]M^!2wM^Mb!)tMbMc!2wMcMh!)tMhNO!2wNONS!)tNSNT!2wNTN^!)tN^N_!2wN_Nb!)tNbNc!2wNcNz!)tNz! e!2w! e!#O!)t!#O!#P!2w!#P!#Q!)t!#Q!#]!2w!#]!%W!)t!%W!&`!2w!&`!&c!)t!&c!&d!2w!&d!&v!)t!&v!&w!2w!&w!'O!)t!'O!'Y!2w!'Y!'i!)t!'i!'p!2w!'p!'q!)t!'q!'x!2w!'x!'}!)t!'}!(V!2w!(V!(X!)t!(X!(Y!2w!(Y!(Z!2w!(Z!(]!)t!(]!(s!2w!(s!(t!)t!(t!({!2w!({!(|!)t!(|!(}!2w!(}!)Q!)t!)Q!)U!2w!)U!)X!)t!)X!)Y!2w!)Y!)j!)t!)j!)k!2w!)k!)x!)t!)x!)y!2w!)y!)z!2w!)z!){!)t!){!*O!2w!*O!*^!)t!*^!*_!2w!*_!*`!2w!*`!*s!)t!*s!*y!2w!*y!*}!)t!*}!+O!2w!+O!+P!2w!+P!+R!)t!+R!+i!2w!+i!+j!)t!+j!+q!2w!+q!+r!)t!+r!+s!2w!+s!+t!2w!+t!+u!)t!+u!+v!2w!+v!+w!2w!+w!+x!)t!+x!+y!2w!+y!+z!2w!+z!,k!)t!,k!,o!2w!,o!,p!)t!,p!,q!2w!,q!-U!)t!-U!-X!2w!-X!-i!)t!-i!-r!2w!-r!-s!)t!-s!-v!2w!-v!-w!)t!-w!._!2w!._!.`!)t!.`!.g!2w!.g!.h!)t!.h!.i!2w!.i!.j!2w!.j!.k!)t!.k!.p!2w!.p!.s!)t!.s!.t!2w!.t!/W!)t!/W!/X!2w!/X!/h!)t!/h!/i!2w!/i!/j!2w!/j!0_!)t!0_!0g!2w!0g!0i!)t!0i!0j!2w!0j!0k!2w!0k!0m!)t!0m!1T!2w!1T!1U!)t!1U!1]!2w!1]!1^!)t!1^!1_!2w!1_!1`!2w!1`!1a!)t!1a!1f!2w!1f!1i!)t!1i!1j!2w!1j!2Y!)t!2Y!2Z!2w!2Z!2[!2w!2[!2]!)t!2]!2`!2w!2`!2o!)t!2o!2p!2w!2p!3R!)t!3R!3S!2w!3S!3T!)t!3T!3Z!2w!3Z!3^!)t!3^!3a!2w!3a!3b!)t!3b!3f!2w!3f!3i!)t!3i!3j!2w!3j!3k!2w!3k!3l!)t!3l!3m!2w!3m!3n!)t!3n!3o!2w!3o!3p!2w!3p!3s!)t!3s!3t!2w!3t!3u!2w!3u!3x!)t!3x!3{!2w!3{!4O!)t!4O!4[!2w!4[!4r!)t!4r!4s!2w!4s!5y!)t!5y!6R!2w!6R!6S!)t!6S!6V!2w!6V!6W!)t!6W!6o!2w!6o!6p!)t!6p!6z!2w!6z!6{!)t!6{!7Q!2w!7Q!7T!)t!7T!7U!2w!7U!7p!)t!7p!7q!2w!7q!7r!2w!7r!7x!)t!7x!7y!2w!7y!7z!2w!7z!8o!)t!8o!8w!2w!8w!8x!)t!8x!8{!2w!8{!8|!)t!8|!9e!2w!9e!9f!)t!9f!9p!2w!9p!9q!)t!9q!9v!2w!9v!9y!)t!9y!9z!2w!9z!:l!)t!:l!:m!2w!:m!:n!)t!:n!:o!2w!:o!:p!2w!:p!;P!)t!;P!;Q!2w!;Q!;R!2w!;R!;e!)t!;e!;m!2w!;m!;n!)t!;n!;q!2w!;q!;r!)t!;r!<m!2w!<m!<o!)t!<o!<p!2w!<p!=Q!)t!=Q!=R!2w!=R!=d!)t!=d!=e!2w!=e!=f!2w!=f!>O!)t!>O!>U!2w!>U!>Z!)t!>Z!>m!2w!>m!>p!)t!>p!?Y!2w!?Y!?Z!)t!?Z!?d!2w!?d!?e!)t!?e!?f!2w!?f!?h!)t!?h!?o!2w!?o!@{!)t!@{!A}!2w!A}!BO!)t!BO!BP!2w!BP!BQ!2w!BQ!B^!)t!B^!Be!2w!Be!Cq!)t!Cq!Cr!2w!Cr!Cs!2w!Cs!Ct!)t!Ct!Cu!2w!Cu!Cw!)t!Cw!Cx!2w!Cx!Cy!2w!Cy!Cz!)t!Cz!C{!2w!C{!C}!)t!C}!DO!2w!DO!DU!)t!DU!DY!2w!DY!DZ!)t!DZ!Db!2w!Db!Dc!)t!Dc!Df!2w!Df!Dg!)t!Dg!Dh!2w!Dh!Di!)t!Di!Dj!2w!Dj!Dl!)t!Dl!Dm!2w!Dm!Dn!2w!Dn!Do!)t!Do!Ds!2w!Ds!Dt!)t!Dt!Du!2w!Du!Dv!2w!Dv!EP!)t!EP!EQ!2w!EQ!ES!)t!ES!EX!2w!EX!EY!)t!EY!EZ!2w!EZ!Ep!)t!Ep!Et!2w!Et!Ff!)t!Ff!Fg!2w!Fg!Gx!)t!Gx!HQ!2w!HQ!HR!)t!HR!Hw!2w!Hw!Id!)t!Id!Ii!2w!Ii!LQ!)t!LQ!L}!2w!L}!Mc!)t!Mc!Md!2w!Md!Mt!)t!Mt!Mz!2w!Mz!NO!)t!NO!NS!2w!NS!NV!)t!NV!NW!2w!NW!NZ!)t!NZ!N[!2w!N[!N]!2w!N]!Nd!)t!Nd!Ng!2w!Ng!Nk!)t!Nk!Nx!2w!Nx# U!)t# U# V!2w# V# h!)t# h#!`!2w#!`#!a!)t#!a#!b!2w#!b#!g!)t#!g#!h!2w#!h#!j!)t#!j##g!2w##g##h!)t##h#*s!2w#*s#*t!)t#*t#*x!2w#*x#*z!)t#*z#+R!2w#+R#+S!)t#+S#+T!2w#+T#+U!)t#+U#+Y!2w#+Y#+[!)t#+[#,V!2w#,V#,W!)t#,W#,[!2w#,[#,^!)t#,^#-P!2w#-P#-Q!)t#-Q#-U!2w#-U#-W!)t#-W#-_!2w#-_#-`!)t#-`#-a!2w#-a#-b!)t#-b#-f!2w#-f#-h!)t#-h#-w!2w#-w#-x!)t#-x#/T!2w#/T#/U!)t#/U#/Y!2w#/Y#/[!)t#/[#0q!2w#0q#1h!)t#1h#1x!2w#1x#2Y!)t#2Y#4R!2w#4R#4_!)t#4_#Au!2w#Au#Aw!)t#Aw#BY!2w#BY#BZ!)t#BZ#Bu!2w#Bu#Bz!)t#Bz#Di!2w#Di#EO!)t#EO#E]!2w#E]#E^!)t#E^#Eb!2w#Eb#Ep!)t#Ep#FS!2w#FS#Fb!)t#Fb#Ft!2w#Ft#GS!)t#GS#Ga!2w#Ga#Gb!)t#Gb#Ge!2w#Ge#Gt!)t#Gt#Hz!2w#Hz#Io!)t#Io#Ip!2w#Ip#It!)t#It#Iu!2w#Iu#K[!)t#K[#MW!2w#MW#M`!)t#M`#NZ!2w#NZ#N[!)t#N[#N]!2w#N]#Nb!)t#Nb$ z!2w$ z$!U!)t$!U$!s!2w$!s$#x!)t$#x$$h!2w$$h$$j!)t$$j$$o!2w$$o$$z!)t$$z$%x!2w$%x$&_!)t$&_$&f!2w$&f$'p!)t$'p$(X!2w$(X$(b!)t$(b$)i!2w$)i$+_!)t$+_$+`!2w$+`$-a!)t$-a$.b!2w$.b$.s!)t$.s$.z!2w$.z$0T!)t$0T$0s!2w$0s$1Q!)t$1Q$1R!2w$1R$1S!2w$1S$1^!)t$1^$2[!2w$2[$2v!)t$2v$3l!2w$3l$4g!)t$4g$4j!2w$4j$4t!)t$4t$5j!2w$5j$7y!)t$7y$7}!2w$7}$8O!)t$8O$8S!2w$8S$8V!)t$8V$8W!2w$8W$8X!2w$8X$8b!)t$8b$<j!2w$<j$=|!)t$=|$DO!2w$DO$DQ!)t$DQ$DW!2w$DW$DY!)t$DY$EQ!2w$EQ$ES!)t$ES$EY!2w$EY$E[!)t$E[$Ed!2w$Ed$Ee!)t$Ee$Ef!2w$Ef$Eg!)t$Eg$Eh!2w$Eh$Ei!)t$Ei$Ej!2w$Ej$Ek!)t$Ek$F[!2w$F[$F^!)t$F^$Ge!2w$Ge$Gf!)t$Gf$Gm!2w$Gm$Gn!)t$Gn$Go!2w$Go$Gr!)t$Gr$Gu!2w$Gu$Gv!)t$Gv$G}!2w$G}$HQ!)t$HQ$HU!2w$HU$HW!)t$HW$H^!2w$H^$Hb!)t$Hb$Ho!2w$Ho$Ht!)t$Ht$Hw!2w$Hw$Hx!)t$Hx$IP!2w$IP$Ki!)t$Ki$Kj!2w$Kj$Kw!)t$Kw$Kx!2w$Kx$LY!)t$LY$Lg!2w$Lg$Np!)t$Np$Nq!2w$Nq$Nu!)t$Nu$Nv!2w$Nv$Nx!)t$Nx% S!2w% S% T!)t% T% U!2w% U% X!)t% X% ^!2w% ^% d!)t% d% e!2w% e% f!)t% f% g!2w% g% h!)t% h% i!2w% i% j!)t% j% n!2w% n% o!)t% o% z!2w% z% |!)t% |%!Q!2w%!Q%!V!)t%!V%![!2w%![%!`!)t%!`%!a!2w%!a%#g!)t%#g%#h!2w%#h%#i!2w%#i&/x!)t&/x&0y!2w&0y&0z!)t&0z&1{!2w&1{&1|!)t&1|&4w!2w&4w&4}!)t&4}&5R!2w&5R&5U!)t&5U&5V!2w&5V&5W!2w&5W&5d!)t&5d&6[!2w&6[&6]!)t&6]&6^!2w&6^&6c!)t&6c&6d!2w&6d&6f!)t&6f&7p!2w&7p&7w!)t&7w&7x!2w&7x&8Y!)t&8Y&8q!2w&8q&8z!)t&8z&9R!2w&9R&9S!)t&9S&9Z!2w&9Z&9[!)t&9[&9c!2w&9c&9d!)t&9d&9k!2w&9k&9l!)t&9l&9s!2w&9s&9t!)t&9t&9{!2w&9{&9|!)t&9|&:T!2w&:T&:U!)t&:U&:]!2w&:]&<P!)t&<P&<Q!2w&<Q&FZ!)t&FZ&F[!2w&F[&F]!2w&F]&GX!)t&GX&G^!2w&G^&Gc!)t&Gc&Gd!2w&Gd&Ge!2w&Ge&Gi!)t&Gi&Ic!2w&Ic&Ii!)t&Ii&Il!2w&Il&Im!)t&Im&Kk!2w&Kk&Kl!)t&Kl&Kp!2w&Kp&Ku!)t&Ku&Lp!2w&Lp&Ls!)t&Ls&Nu!2w&Nu' W!)t' W' s!2w' s'!z!)t'!z'#[!2w'#['.b!)t'.b*3f!2w*3f*5S!)t*5S40_!2w40_41d!)t41d4Js!2w4Js4LY!)t4LY4MY!2w4MY4M[!)t4M[5%T!2w5%T5%W!)t5%W5%h!2w5%h5%r!)t5%r5%s!2w5%s5%t!2w5%t5&Y!)t5&Y5'Z!2w5'Z5'k!)t5'k5(U!2w5(U5(^!)t5(^5)v!2w5)v5*y!)t5*y5+S!2w5+S5+U!)t5+U5-a!2w5-a5-c!)t5-c5-g!2w5-g5-h!)t5-h5-l!2w5-l5-x!)t5-x5.T!2w5.T5/t!)t5/t50O!2w50O50P!)t50P50S!2w50S50T!)t50T50X!2w50X50Y!)t50Y50q!2w50q51`!)t51`52f!2w52f52t!)t52t53x!2w53x55Y!)t55Y55`!2w55`55c!)t55c55d!2w55d55r!)t55r56`!2w56`56j!)t56j57R!2w57R57l!)t57l58Z!2w58Z58b!)t58b59c!2w59c5:P!)t5:P5:Q!2w5:Q5;S!)t5;S5;}!2w5;}5<f!)t5<f5<i!2w5<i5<j!)t5<j5<r!2w5<r5=W!)t5=W5=o!2w5=o5=r!)t5=r5=s!2w5=s5=x!)t5=x5>z!2w5>z5>{!)t5>{5>|!2w5>|5?P!)t5?P5?Q!2w5?Q5?R!2w5?R5?T!)t5?T5?Y!2w5?Y5?[!)t5?[5?]!2w5?]5?^!)t5?^5?_!2w5?_5?w!)t5?w5?z!2w5?z5?|!)t5?|5@X!2w5@X5@`!)t5@`5@c!2w5@c5@o!)t5@o5@u!2w5@u5@w!)t5@w5@}!2w5@}5AP!)t5AP5AV!2w5AV5A`!)t5A`5Ag!2w5Ag5Ah!)t5Ah5Ao!2w5Ao5Dv!)t5Dv5Ek!2w5Ek5FY!)t5FY;%S!2w;%S;%`!)t;%`;%w!2w;%w;%{!)t;%{;'O!2w;'O;'S!)t;'S;=`!.]<%l?&r!)t?&r?.p!2w?.p?.r!)t?.r?1Q!2w?1Q?1x!)t?1x?2P!2w?2P?2]!)t?2]?2b!2w?2b?2g!)t?2g?2h!2w?2h?2i!)t?2i?2s!2w?2s?2t!)t?2t?3R!2w?3R?3S!)t?3S?3X!2w?3X?3Y!)t?3Y?3Z!2w?3Z?3[!)t?3[?3]!2w?3]?3^!2w?3^?3_!)t?3_?3`!2w?3`?3a!2w?3a?3b!)t?3b?5r!2w?5r?6e!)t?6e?>`!2w?>`?>r!)t?>r?@U!2w?@U?@W!)t?@W?A`!2w?A`?BY!)t?BY?Bf!2w?Bf?EO!)t?EO?ET!2w?ET?EU!)t?EU?HR!2w?HR?Hw!)t?Hw?Ic!2w?Ic?Ii!)t?Ii?JT!2w?JT?J`!)t?J`?L]!2w?L]?L`!)t?L`?Lf!2w?Lf?Lh!)t?Lh?Ln!2w?Ln?Lp!)t?Lp?Lv!2w?Lv?Lx!)t?Lx?L{!2w?L{O!)t_7E`2g!OW|SyRmPOq!,^qr';irs$@]st';itu';iuv';ivw';iwx';ixz!,^z{';i{|';i|!O!,^!O!P';i!P!Q';i!Q![';i![!a!,^!a!b';i!b!c!,^!c!}';i!}#O!,^#O#P';i#P#R!,^#R#S';i#S#T(BZ#T#o';i#o$p!,^$p$q';i$q${!,^${$|';i$|%Q!,^%Q%R';i%R%W!,^%W%o';i%o%p!,^%p&a';i&a&b!,^&b0`';i0`0d!,^0d0p';i0p1O!,^1O1T';i1T1[!,^1[1]';i1]1^!,^1^1_';i1_4U!,^4U4Z';i4Z4[!,^4[4]';i4]4^';i4^4`!,^4`4d';i4d4l!,^4l4m';i4m4n!,^4n4q';i4q4r!,^4r4s';i4s4t!,^4t5Y';i5Y5Z!,^5Z7Q';i7Q7R!,^7R:S';i:S:[!,^:[=p';i=p=y!,^=y>q';i>q>s!,^>s>t';i>t>{!,^>{?t';i?tA`!,^A`A{';iA{BQ!,^BQBT';iBTCS!,^CSDP';iDPDt!,^DtDu';iDuDv';iDvDw!,^DwGO';iGOGP!,^GPGQ';iGQGa!,^GaGb';iGbGc';iGcGj!,^GjGk';iGkGl';iGlGv!,^GvGy';iGyG{!,^G{G|';iG|H^!,^H^H_';iH_H`!,^H`IO';iIOIm!,^ImKj';iKjKu!,^KuKv';iKvL`!,^L`MR';iMRM[!,^M[M]';iM]M^';iM^Mb!,^MbMc';iMcMh!,^MhNO';iNONS!,^NSNT';iNTN^!,^N^N_';iN_Nb!,^NbNc';iNcNz!,^Nz! e';i! e!#O!,^!#O!#P';i!#P!#Q!,^!#Q!#]';i!#]!%W!,^!%W!&`';i!&`!&c!,^!&c!&d';i!&d!&v!,^!&v!&w';i!&w!'O!,^!'O!'Y';i!'Y!'i!,^!'i!'p';i!'p!'q!,^!'q!'x';i!'x!'}!,^!'}!(V';i!(V!(X!,^!(X!(Y';i!(Y!(Z';i!(Z!(]!,^!(]!(s';i!(s!(t!,^!(t!({';i!({!(|!,^!(|!(}';i!(}!)Q!,^!)Q!)U';i!)U!)X!,^!)X!)Y';i!)Y!)j!,^!)j!)k';i!)k!)x!,^!)x!)y';i!)y!)z';i!)z!){!,^!){!*O';i!*O!*^!,^!*^!*_';i!*_!*`';i!*`!*s!,^!*s!*y';i!*y!*}!,^!*}!+O';i!+O!+P';i!+P!+R!,^!+R!+i';i!+i!+j!,^!+j!+q';i!+q!+r!,^!+r!+s';i!+s!+t';i!+t!+u!,^!+u!+v';i!+v!+w';i!+w!+x!,^!+x!+y';i!+y!+z';i!+z!,k!,^!,k!,o';i!,o!,p!,^!,p!,q';i!,q!-U!,^!-U!-X';i!-X!-i!,^!-i!-r';i!-r!-s!,^!-s!-v';i!-v!-w!,^!-w!._';i!._!.`!,^!.`!.g';i!.g!.h!,^!.h!.i';i!.i!.j';i!.j!.k!,^!.k!.p';i!.p!.s!,^!.s!.t';i!.t!/W!,^!/W!/X';i!/X!/h!,^!/h!/i';i!/i!/j';i!/j!0_!,^!0_!0g';i!0g!0i!,^!0i!0j';i!0j!0k';i!0k!0m!,^!0m!1T';i!1T!1U!,^!1U!1]';i!1]!1^!,^!1^!1_';i!1_!1`';i!1`!1a!,^!1a!1f';i!1f!1i!,^!1i!1j';i!1j!2Y!,^!2Y!2Z';i!2Z!2[';i!2[!2]!,^!2]!2`';i!2`!2o!,^!2o!2p';i!2p!3R!,^!3R!3S';i!3S!3T!,^!3T!3Z';i!3Z!3^!,^!3^!3a';i!3a!3b!,^!3b!3f';i!3f!3i!,^!3i!3j';i!3j!3k';i!3k!3l!,^!3l!3m';i!3m!3n!,^!3n!3o';i!3o!3p';i!3p!3s!,^!3s!3t';i!3t!3u';i!3u!3x!,^!3x!3{';i!3{!4O!,^!4O!4[';i!4[!4r!,^!4r!4s';i!4s!5y!,^!5y!6R';i!6R!6S!,^!6S!6V';i!6V!6W!,^!6W!6o';i!6o!6p!,^!6p!6z';i!6z!6{!,^!6{!7Q';i!7Q!7T!,^!7T!7U';i!7U!7p!,^!7p!7q';i!7q!7r';i!7r!7x!,^!7x!7y';i!7y!7z';i!7z!8o!,^!8o!8w';i!8w!8x!,^!8x!8{';i!8{!8|!,^!8|!9e';i!9e!9f!,^!9f!9p';i!9p!9q!,^!9q!9v';i!9v!9y!,^!9y!9z';i!9z!:l!,^!:l!:m';i!:m!:n!,^!:n!:o';i!:o!:p';i!:p!;P!,^!;P!;Q';i!;Q!;R';i!;R!;e!,^!;e!;m';i!;m!;n!,^!;n!;q';i!;q!;r!,^!;r!<m';i!<m!<o!,^!<o!<p';i!<p!=Q!,^!=Q!=R';i!=R!=d!,^!=d!=e';i!=e!=f';i!=f!>O!,^!>O!>U';i!>U!>Z!,^!>Z!>m';i!>m!>p!,^!>p!?Y';i!?Y!?Z!,^!?Z!?d';i!?d!?e!,^!?e!?f';i!?f!?h!,^!?h!?o';i!?o!@{!,^!@{!A}';i!A}!BO!,^!BO!BP';i!BP!BQ';i!BQ!B^!,^!B^!Be';i!Be!Cq!,^!Cq!Cr';i!Cr!Cs';i!Cs!Ct!,^!Ct!Cu';i!Cu!Cw!,^!Cw!Cx';i!Cx!Cy';i!Cy!Cz!,^!Cz!C{';i!C{!C}!,^!C}!DO';i!DO!DU!,^!DU!DY';i!DY!DZ!,^!DZ!Db';i!Db!Dc!,^!Dc!Df';i!Df!Dg!,^!Dg!Dh';i!Dh!Di!,^!Di!Dj';i!Dj!Dl!,^!Dl!Dm';i!Dm!Dn';i!Dn!Do!,^!Do!Ds';i!Ds!Dt!,^!Dt!Du';i!Du!Dv';i!Dv!EP!,^!EP!EQ';i!EQ!ES!,^!ES!EX';i!EX!EY!,^!EY!EZ';i!EZ!Ep!,^!Ep!Et';i!Et!Ff!,^!Ff!Fg';i!Fg!Gx!,^!Gx!HQ';i!HQ!HR!,^!HR!Hw';i!Hw!Id!,^!Id!Ii';i!Ii!LQ!,^!LQ!L}';i!L}!Mc!,^!Mc!Md';i!Md!Mt!,^!Mt!Mz';i!Mz!NO!,^!NO!NS';i!NS!NV!,^!NV!NW';i!NW!NZ!,^!NZ!N[';i!N[!N]';i!N]!Nd!,^!Nd!Ng';i!Ng!Nk!,^!Nk!Nx';i!Nx# U!,^# U# V';i# V# h!,^# h#!`';i#!`#!a!,^#!a#!b';i#!b#!g!,^#!g#!h';i#!h#!j!,^#!j##g';i##g##h!,^##h#*s';i#*s#*t!,^#*t#*x';i#*x#*z!,^#*z#+R';i#+R#+S!,^#+S#+T';i#+T#+U!,^#+U#+Y';i#+Y#+[!,^#+[#,V';i#,V#,W!,^#,W#,[';i#,[#,^!,^#,^#-P';i#-P#-Q!,^#-Q#-U';i#-U#-W!,^#-W#-_';i#-_#-`!,^#-`#-a';i#-a#-b!,^#-b#-f';i#-f#-h!,^#-h#-w';i#-w#-x!,^#-x#/T';i#/T#/U!,^#/U#/Y';i#/Y#/[!,^#/[#0q';i#0q#1h!,^#1h#1x';i#1x#2Y!,^#2Y#4R';i#4R#4_!,^#4_#Au';i#Au#Aw!,^#Aw#BY';i#BY#BZ!,^#BZ#Bu';i#Bu#Bz!,^#Bz#Di';i#Di#EO!,^#EO#E]';i#E]#E^!,^#E^#Eb';i#Eb#Ep!,^#Ep#FS';i#FS#Fb!,^#Fb#Ft';i#Ft#GS!,^#GS#Ga';i#Ga#Gb!,^#Gb#Ge';i#Ge#Gt!,^#Gt#Hz';i#Hz#Io!,^#Io#Ip';i#Ip#It!,^#It#Iu';i#Iu#K[!,^#K[#MW';i#MW#M`!,^#M`#NZ';i#NZ#N[!,^#N[#N]';i#N]#Nb!,^#Nb$ z';i$ z$!U!,^$!U$!s';i$!s$#x!,^$#x$$h';i$$h$$j!,^$$j$$o';i$$o$$z!,^$$z$%x';i$%x$&_!,^$&_$&f';i$&f$'p!,^$'p$(X';i$(X$(b!,^$(b$)i';i$)i$+_!,^$+_$+`';i$+`$-a!,^$-a$.b';i$.b$.s!,^$.s$.z';i$.z$0T!,^$0T$0s';i$0s$1Q!,^$1Q$1R';i$1R$1S';i$1S$1^!,^$1^$2[';i$2[$2v!,^$2v$3l';i$3l$4g!,^$4g$4j';i$4j$4t!,^$4t$5j';i$5j$7y!,^$7y$7}';i$7}$8O!,^$8O$8S';i$8S$8V!,^$8V$8W';i$8W$8X';i$8X$8b!,^$8b$<j';i$<j$=|!,^$=|$DO';i$DO$DQ!,^$DQ$DW';i$DW$DY!,^$DY$EQ';i$EQ$ES!,^$ES$EY';i$EY$E[!,^$E[$Ed';i$Ed$Ee!,^$Ee$Ef';i$Ef$Eg!,^$Eg$Eh';i$Eh$Ei!,^$Ei$Ej';i$Ej$Ek!,^$Ek$F[';i$F[$F^!,^$F^$Ge';i$Ge$Gf!,^$Gf$Gm';i$Gm$Gn!,^$Gn$Go';i$Go$Gr!,^$Gr$Gu';i$Gu$Gv!,^$Gv$G}';i$G}$HQ!,^$HQ$HU';i$HU$HW!,^$HW$H^';i$H^$Hb!,^$Hb$Ho';i$Ho$Ht!,^$Ht$Hw';i$Hw$Hx!,^$Hx$IP';i$IP$Ki!,^$Ki$Kj';i$Kj$Kw!,^$Kw$Kx';i$Kx$LY!,^$LY$Lg';i$Lg$Np!,^$Np$Nq';i$Nq$Nu!,^$Nu$Nv';i$Nv$Nx!,^$Nx% S';i% S% T!,^% T% U';i% U% X!,^% X% ^';i% ^% d!,^% d% e';i% e% f!,^% f% g';i% g% h!,^% h% i';i% i% j!,^% j% n';i% n% o!,^% o% z';i% z% |!,^% |%!Q';i%!Q%!V!,^%!V%![';i%![%!`!,^%!`%!a';i%!a%#g!,^%#g%#h';i%#h%#i';i%#i&/x!,^&/x&0y';i&0y&0z!,^&0z&1{';i&1{&1|!,^&1|&4w';i&4w&4}!,^&4}&5R';i&5R&5U!,^&5U&5V';i&5V&5W';i&5W&5d!,^&5d&6[';i&6[&6]!,^&6]&6^';i&6^&6c!,^&6c&6d';i&6d&6f!,^&6f&7p';i&7p&7w!,^&7w&7x';i&7x&8Y!,^&8Y&8q';i&8q&8z!,^&8z&9R';i&9R&9S!,^&9S&9Z';i&9Z&9[!,^&9[&9c';i&9c&9d!,^&9d&9k';i&9k&9l!,^&9l&9s';i&9s&9t!,^&9t&9{';i&9{&9|!,^&9|&:T';i&:T&:U!,^&:U&:]';i&:]&<P!,^&<P&<Q';i&<Q&FZ!,^&FZ&F[';i&F[&F]';i&F]&GX!,^&GX&G^';i&G^&Gc!,^&Gc&Gd';i&Gd&Ge';i&Ge&Gi!,^&Gi&Ic';i&Ic&Ii!,^&Ii&Il';i&Il&Im!,^&Im&Kk';i&Kk&Kl!,^&Kl&Kp';i&Kp&Ku!,^&Ku&Lp';i&Lp&Ls!,^&Ls&Nu';i&Nu' W!,^' W' s';i' s'!z!,^'!z'#[';i'#['.b!,^'.b*3f';i*3f*5S!,^*5S40_';i40_41d!,^41d4Js';i4Js4LY!,^4LY4MY';i4MY4M[!,^4M[5%T';i5%T5%W!,^5%W5%h';i5%h5%r!,^5%r5%s';i5%s5%t';i5%t5&Y!,^5&Y5'Z';i5'Z5'k!,^5'k5(U';i5(U5(^!,^5(^5)v';i5)v5*y!,^5*y5+S';i5+S5+U!,^5+U5-a';i5-a5-c!,^5-c5-g';i5-g5-h!,^5-h5-l';i5-l5-x!,^5-x5.T';i5.T5/t!,^5/t50O';i50O50P!,^50P50S';i50S50T!,^50T50X';i50X50Y!,^50Y50q';i50q51`!,^51`52f';i52f52t!,^52t53x';i53x55Y!,^55Y55`';i55`55c!,^55c55d';i55d55r!,^55r56`';i56`56j!,^56j57R';i57R57l!,^57l58Z';i58Z58b!,^58b59c';i59c5:P!,^5:P5:Q';i5:Q5;S!,^5;S5;}';i5;}5<f!,^5<f5<i';i5<i5<j!,^5<j5<r';i5<r5=W!,^5=W5=o';i5=o5=r!,^5=r5=s';i5=s5=x!,^5=x5>z';i5>z5>{!,^5>{5>|';i5>|5?P!,^5?P5?Q';i5?Q5?R';i5?R5?T!,^5?T5?Y';i5?Y5?[!,^5?[5?]';i5?]5?^!,^5?^5?_';i5?_5?w!,^5?w5?z';i5?z5?|!,^5?|5@X';i5@X5@`!,^5@`5@c';i5@c5@o!,^5@o5@u';i5@u5@w!,^5@w5@}';i5@}5AP!,^5AP5AV';i5AV5A`!,^5A`5Ag';i5Ag5Ah!,^5Ah5Ao';i5Ao5Dv!,^5Dv5Ek';i5Ek5FY!,^5FY;%S';i;%S;%`!,^;%`;%w';i;%w;%{!,^;%{;'O';i;'O;'S!,^;'S;=`!-c<%l?&r!,^?&r?.p';i?.p?.r!,^?.r?1Q';i?1Q?1x!,^?1x?2P';i?2P?2]!,^?2]?2b';i?2b?2g!,^?2g?2h';i?2h?2i!,^?2i?2s';i?2s?2t!,^?2t?3R';i?3R?3S!,^?3S?3X';i?3X?3Y!,^?3Y?3Z';i?3Z?3[!,^?3[?3]';i?3]?3^';i?3^?3_!,^?3_?3`';i?3`?3a';i?3a?3b!,^?3b?5r';i?5r?6e!,^?6e?>`';i?>`?>r!,^?>r?@U';i?@U?@W!,^?@W?A`';i?A`?BY!,^?BY?Bf';i?Bf?EO!,^?EO?ET';i?ET?EU!,^?EU?HR';i?HR?Hw!,^?Hw?Ic';i?Ic?Ii!,^?Ii?JT';i?JT?J`!,^?J`?L]';i?L]?L`!,^?L`?Lf';i?Lf?Lh!,^?Lh?Ln';i?Ln?Lp!,^?Lp?Lv';i?Lv?Lx!,^?Lx?L{';i?L{O!,^_8LS]wP!OW|SzQOr!)trs!*jsw!)twx!,^xy8L{yz8Nnz!}!)t!}#O9 f#O#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_8MWY!ZP!OW|SzQOr!)trs!*jsw!)twx!,^xy8Mvy#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_8NRX!bP!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_8NyX!vP!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_9 qX!TP!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t!a9!i]!PP!OW|SzQOr!)trs!*jsw!)twx!,^xy!)tyz9#bz#P!)t#P#Q9%W#Q#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t!`9#mZ![`!OW|SzQOr!)trs!*jsw!)twx!,^xy!)tyz9$`z#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t!O9$kX!cp!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)tn9%cX!Y`!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_9&Z[!OW|SzQ!fPOr!)trs!*jsw!)twx!,^x}!)t}!O9'P!O!P9+}!P#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_9'^a!OW|SzQ!fP]POr!)trs!*jsw!)twx!,^x}!)t}!O9(c!O!`!)t!`!a9+V!a#S!)t#S#T!-i#T#c!)t#c#d9+V#d#l!)t#l#m9+V#m;'S!)t;'S;=`!.]<%lO!)t_9(pa!OW|SzQ!fP!iPOr!)trs!*jsw!)twx!,^x}!)t}!O9)u!O!`!)t!`!a9+V!a#S!)t#S#T!-i#T#c!)t#c#d9+V#d#l!)t#l#m9+V#m;'S!)t;'S;=`!.]<%lO!)t_9*Qa!OW|SzQ!fPOr!)trs!*jsw!)twx!,^x}!)t}!O9)u!O!`!)t!`!a9+V!a#S!)t#S#T!-i#T#c!)t#c#d9+V#d#l!)t#l#m9+V#m;'S!)t;'S;=`!.]<%lO!)t_9+bX!OW|SzQ!fPOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_9,Y[!OW|SzQ!hPOr!)trs!*jsw!)twx!,^x}!)t}!O9-O!O!P9+}!P#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_9-Z_!OW|SzQ!hPOr!)trs!*jsw!)twx!,^x!`!)t!`!a9.Y!a#S!)t#S#T!-i#T#c!)t#c#d9.Y#d#l!)t#l#m9.Y#m;'S!)t;'S;=`!.]<%lO!)t_9.eX!OW|SzQ!hPOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_9/_2h!OW|SzQ!hPmPOq!)tqr!2wrs#9kst!2wtu!2wuv!2wvw!2wwx';ixz!)tz{!2w{|!2w|}!)t}!O9-O!O!P9/Q!P!Q!2w!Q![!2w![!a!)t!a!b!2w!b!c!)t!c!}!2w!}#O!)t#O#P!2w#P#R!)t#R#S!2w#S#T)Hy#T#o!2w#o$p!)t$p$q!2w$q${!)t${$|!2w$|%Q!)t%Q%R!2w%R%W!)t%W%o!2w%o%p!)t%p&a!2w&a&b!)t&b0`!2w0`0d!)t0d0p!2w0p1O!)t1O1T!2w1T1[!)t1[1]!2w1]1^!)t1^1_!2w1_4U!)t4U4Z!2w4Z4[!)t4[4]!2w4]4^!2w4^4`!)t4`4d!2w4d4l!)t4l4m!2w4m4n!)t4n4q!2w4q4r!)t4r4s!2w4s4t!)t4t5Y!2w5Y5Z!)t5Z7Q!2w7Q7R!)t7R:S!2w:S:[!)t:[=p!2w=p=y!)t=y>q!2w>q>s!)t>s>t!2w>t>{!)t>{?t!2w?tA`!)tA`A{!2wA{BQ!)tBQBT!2wBTCS!)tCSDP!2wDPDt!)tDtDu!2wDuDv!2wDvDw!)tDwGO!2wGOGP!)tGPGQ!2wGQGa!)tGaGb!2wGbGc!2wGcGj!)tGjGk!2wGkGl!2wGlGv!)tGvGy!2wGyG{!)tG{G|!2wG|H^!)tH^H_!2wH_H`!)tH`IO!2wIOIm!)tImKj!2wKjKu!)tKuKv!2wKvL`!)tL`MR!2wMRM[!)tM[M]!2wM]M^!2wM^Mb!)tMbMc!2wMcMh!)tMhNO!2wNONS!)tNSNT!2wNTN^!)tN^N_!2wN_Nb!)tNbNc!2wNcNz!)tNz! e!2w! e!#O!)t!#O!#P!2w!#P!#Q!)t!#Q!#]!2w!#]!%W!)t!%W!&`!2w!&`!&c!)t!&c!&d!2w!&d!&v!)t!&v!&w!2w!&w!'O!)t!'O!'Y!2w!'Y!'i!)t!'i!'p!2w!'p!'q!)t!'q!'x!2w!'x!'}!)t!'}!(V!2w!(V!(X!)t!(X!(Y!2w!(Y!(Z!2w!(Z!(]!)t!(]!(s!2w!(s!(t!)t!(t!({!2w!({!(|!)t!(|!(}!2w!(}!)Q!)t!)Q!)U!2w!)U!)X!)t!)X!)Y!2w!)Y!)j!)t!)j!)k!2w!)k!)x!)t!)x!)y!2w!)y!)z!2w!)z!){!)t!){!*O!2w!*O!*^!)t!*^!*_!2w!*_!*`!2w!*`!*s!)t!*s!*y!2w!*y!*}!)t!*}!+O!2w!+O!+P!2w!+P!+R!)t!+R!+i!2w!+i!+j!)t!+j!+q!2w!+q!+r!)t!+r!+s!2w!+s!+t!2w!+t!+u!)t!+u!+v!2w!+v!+w!2w!+w!+x!)t!+x!+y!2w!+y!+z!2w!+z!,k!)t!,k!,o!2w!,o!,p!)t!,p!,q!2w!,q!-U!)t!-U!-X!2w!-X!-i!)t!-i!-r!2w!-r!-s!)t!-s!-v!2w!-v!-w!)t!-w!._!2w!._!.`!)t!.`!.g!2w!.g!.h!)t!.h!.i!2w!.i!.j!2w!.j!.k!)t!.k!.p!2w!.p!.s!)t!.s!.t!2w!.t!/W!)t!/W!/X!2w!/X!/h!)t!/h!/i!2w!/i!/j!2w!/j!0_!)t!0_!0g!2w!0g!0i!)t!0i!0j!2w!0j!0k!2w!0k!0m!)t!0m!1T!2w!1T!1U!)t!1U!1]!2w!1]!1^!)t!1^!1_!2w!1_!1`!2w!1`!1a!)t!1a!1f!2w!1f!1i!)t!1i!1j!2w!1j!2Y!)t!2Y!2Z!2w!2Z!2[!2w!2[!2]!)t!2]!2`!2w!2`!2o!)t!2o!2p!2w!2p!3R!)t!3R!3S!2w!3S!3T!)t!3T!3Z!2w!3Z!3^!)t!3^!3a!2w!3a!3b!)t!3b!3f!2w!3f!3i!)t!3i!3j!2w!3j!3k!2w!3k!3l!)t!3l!3m!2w!3m!3n!)t!3n!3o!2w!3o!3p!2w!3p!3s!)t!3s!3t!2w!3t!3u!2w!3u!3x!)t!3x!3{!2w!3{!4O!)t!4O!4[!2w!4[!4r!)t!4r!4s!2w!4s!5y!)t!5y!6R!2w!6R!6S!)t!6S!6V!2w!6V!6W!)t!6W!6o!2w!6o!6p!)t!6p!6z!2w!6z!6{!)t!6{!7Q!2w!7Q!7T!)t!7T!7U!2w!7U!7p!)t!7p!7q!2w!7q!7r!2w!7r!7x!)t!7x!7y!2w!7y!7z!2w!7z!8o!)t!8o!8w!2w!8w!8x!)t!8x!8{!2w!8{!8|!)t!8|!9e!2w!9e!9f!)t!9f!9p!2w!9p!9q!)t!9q!9v!2w!9v!9y!)t!9y!9z!2w!9z!:l!)t!:l!:m!2w!:m!:n!)t!:n!:o!2w!:o!:p!2w!:p!;P!)t!;P!;Q!2w!;Q!;R!2w!;R!;e!)t!;e!;m!2w!;m!;n!)t!;n!;q!2w!;q!;r!)t!;r!<m!2w!<m!<o!)t!<o!<p!2w!<p!=Q!)t!=Q!=R!2w!=R!=d!)t!=d!=e!2w!=e!=f!2w!=f!>O!)t!>O!>U!2w!>U!>Z!)t!>Z!>m!2w!>m!>p!)t!>p!?Y!2w!?Y!?Z!)t!?Z!?d!2w!?d!?e!)t!?e!?f!2w!?f!?h!)t!?h!?o!2w!?o!@{!)t!@{!A}!2w!A}!BO!)t!BO!BP!2w!BP!BQ!2w!BQ!B^!)t!B^!Be!2w!Be!Cq!)t!Cq!Cr!2w!Cr!Cs!2w!Cs!Ct!)t!Ct!Cu!2w!Cu!Cw!)t!Cw!Cx!2w!Cx!Cy!2w!Cy!Cz!)t!Cz!C{!2w!C{!C}!)t!C}!DO!2w!DO!DU!)t!DU!DY!2w!DY!DZ!)t!DZ!Db!2w!Db!Dc!)t!Dc!Df!2w!Df!Dg!)t!Dg!Dh!2w!Dh!Di!)t!Di!Dj!2w!Dj!Dl!)t!Dl!Dm!2w!Dm!Dn!2w!Dn!Do!)t!Do!Ds!2w!Ds!Dt!)t!Dt!Du!2w!Du!Dv!2w!Dv!EP!)t!EP!EQ!2w!EQ!ES!)t!ES!EX!2w!EX!EY!)t!EY!EZ!2w!EZ!Ep!)t!Ep!Et!2w!Et!Ff!)t!Ff!Fg!2w!Fg!Gx!)t!Gx!HQ!2w!HQ!HR!)t!HR!Hw!2w!Hw!Id!)t!Id!Ii!2w!Ii!LQ!)t!LQ!L}!2w!L}!Mc!)t!Mc!Md!2w!Md!Mt!)t!Mt!Mz!2w!Mz!NO!)t!NO!NS!2w!NS!NV!)t!NV!NW!2w!NW!NZ!)t!NZ!N[!2w!N[!N]!2w!N]!Nd!)t!Nd!Ng!2w!Ng!Nk!)t!Nk!Nx!2w!Nx# U!)t# U# V!2w# V# h!)t# h#!`!2w#!`#!a!)t#!a#!b!2w#!b#!g!)t#!g#!h!2w#!h#!j!)t#!j##g!2w##g##h!)t##h#*s!2w#*s#*t!)t#*t#*x!2w#*x#*z!)t#*z#+R!2w#+R#+S!)t#+S#+T!2w#+T#+U!)t#+U#+Y!2w#+Y#+[!)t#+[#,V!2w#,V#,W!)t#,W#,[!2w#,[#,^!)t#,^#-P!2w#-P#-Q!)t#-Q#-U!2w#-U#-W!)t#-W#-_!2w#-_#-`!)t#-`#-a!2w#-a#-b!)t#-b#-f!2w#-f#-h!)t#-h#-w!2w#-w#-x!)t#-x#/T!2w#/T#/U!)t#/U#/Y!2w#/Y#/[!)t#/[#0q!2w#0q#1h!)t#1h#1x!2w#1x#2Y!)t#2Y#4R!2w#4R#4_!)t#4_#Au!2w#Au#Aw!)t#Aw#BY!2w#BY#BZ!)t#BZ#Bu!2w#Bu#Bz!)t#Bz#Di!2w#Di#EO!)t#EO#E]!2w#E]#E^!)t#E^#Eb!2w#Eb#Ep!)t#Ep#FS!2w#FS#Fb!)t#Fb#Ft!2w#Ft#GS!)t#GS#Ga!2w#Ga#Gb!)t#Gb#Ge!2w#Ge#Gt!)t#Gt#Hz!2w#Hz#Io!)t#Io#Ip!2w#Ip#It!)t#It#Iu!2w#Iu#K[!)t#K[#MW!2w#MW#M`!)t#M`#NZ!2w#NZ#N[!)t#N[#N]!2w#N]#Nb!)t#Nb$ z!2w$ z$!U!)t$!U$!s!2w$!s$#x!)t$#x$$h!2w$$h$$j!)t$$j$$o!2w$$o$$z!)t$$z$%x!2w$%x$&_!)t$&_$&f!2w$&f$'p!)t$'p$(X!2w$(X$(b!)t$(b$)i!2w$)i$+_!)t$+_$+`!2w$+`$-a!)t$-a$.b!2w$.b$.s!)t$.s$.z!2w$.z$0T!)t$0T$0s!2w$0s$1Q!)t$1Q$1R!2w$1R$1S!2w$1S$1^!)t$1^$2[!2w$2[$2v!)t$2v$3l!2w$3l$4g!)t$4g$4j!2w$4j$4t!)t$4t$5j!2w$5j$7y!)t$7y$7}!2w$7}$8O!)t$8O$8S!2w$8S$8V!)t$8V$8W!2w$8W$8X!2w$8X$8b!)t$8b$<j!2w$<j$=|!)t$=|$DO!2w$DO$DQ!)t$DQ$DW!2w$DW$DY!)t$DY$EQ!2w$EQ$ES!)t$ES$EY!2w$EY$E[!)t$E[$Ed!2w$Ed$Ee!)t$Ee$Ef!2w$Ef$Eg!)t$Eg$Eh!2w$Eh$Ei!)t$Ei$Ej!2w$Ej$Ek!)t$Ek$F[!2w$F[$F^!)t$F^$Ge!2w$Ge$Gf!)t$Gf$Gm!2w$Gm$Gn!)t$Gn$Go!2w$Go$Gr!)t$Gr$Gu!2w$Gu$Gv!)t$Gv$G}!2w$G}$HQ!)t$HQ$HU!2w$HU$HW!)t$HW$H^!2w$H^$Hb!)t$Hb$Ho!2w$Ho$Ht!)t$Ht$Hw!2w$Hw$Hx!)t$Hx$IP!2w$IP$Ki!)t$Ki$Kj!2w$Kj$Kw!)t$Kw$Kx!2w$Kx$LY!)t$LY$Lg!2w$Lg$Np!)t$Np$Nq!2w$Nq$Nu!)t$Nu$Nv!2w$Nv$Nx!)t$Nx% S!2w% S% T!)t% T% U!2w% U% X!)t% X% ^!2w% ^% d!)t% d% e!2w% e% f!)t% f% g!2w% g% h!)t% h% i!2w% i% j!)t% j% n!2w% n% o!)t% o% z!2w% z% |!)t% |%!Q!2w%!Q%!V!)t%!V%![!2w%![%!`!)t%!`%!a!2w%!a%#g!)t%#g%#h!2w%#h%#i!2w%#i&/x!)t&/x&0y!2w&0y&0z!)t&0z&1{!2w&1{&1|!)t&1|&4w!2w&4w&4}!)t&4}&5R!2w&5R&5U!)t&5U&5V!2w&5V&5W!2w&5W&5d!)t&5d&6[!2w&6[&6]!)t&6]&6^!2w&6^&6c!)t&6c&6d!2w&6d&6f!)t&6f&7p!2w&7p&7w!)t&7w&7x!2w&7x&8Y!)t&8Y&8q!2w&8q&8z!)t&8z&9R!2w&9R&9S!)t&9S&9Z!2w&9Z&9[!)t&9[&9c!2w&9c&9d!)t&9d&9k!2w&9k&9l!)t&9l&9s!2w&9s&9t!)t&9t&9{!2w&9{&9|!)t&9|&:T!2w&:T&:U!)t&:U&:]!2w&:]&<P!)t&<P&<Q!2w&<Q&FZ!)t&FZ&F[!2w&F[&F]!2w&F]&GX!)t&GX&G^!2w&G^&Gc!)t&Gc&Gd!2w&Gd&Ge!2w&Ge&Gi!)t&Gi&Ic!2w&Ic&Ii!)t&Ii&Il!2w&Il&Im!)t&Im&Kk!2w&Kk&Kl!)t&Kl&Kp!2w&Kp&Ku!)t&Ku&Lp!2w&Lp&Ls!)t&Ls&Nu!2w&Nu' W!)t' W' s!2w' s'!z!)t'!z'#[!2w'#['.b!)t'.b*3f!2w*3f*5S!)t*5S40_!2w40_41d!)t41d4Js!2w4Js4LY!)t4LY4MY!2w4MY4M[!)t4M[5%T!2w5%T5%W!)t5%W5%h!2w5%h5%r!)t5%r5%s!2w5%s5%t!2w5%t5&Y!)t5&Y5'Z!2w5'Z5'k!)t5'k5(U!2w5(U5(^!)t5(^5)v!2w5)v5*y!)t5*y5+S!2w5+S5+U!)t5+U5-a!2w5-a5-c!)t5-c5-g!2w5-g5-h!)t5-h5-l!2w5-l5-x!)t5-x5.T!2w5.T5/t!)t5/t50O!2w50O50P!)t50P50S!2w50S50T!)t50T50X!2w50X50Y!)t50Y50q!2w50q51`!)t51`52f!2w52f52t!)t52t53x!2w53x55Y!)t55Y55`!2w55`55c!)t55c55d!2w55d55r!)t55r56`!2w56`56j!)t56j57R!2w57R57l!)t57l58Z!2w58Z58b!)t58b59c!2w59c5:P!)t5:P5:Q!2w5:Q5;S!)t5;S5;}!2w5;}5<f!)t5<f5<i!2w5<i5<j!)t5<j5<r!2w5<r5=W!)t5=W5=o!2w5=o5=r!)t5=r5=s!2w5=s5=x!)t5=x5>z!2w5>z5>{!)t5>{5>|!2w5>|5?P!)t5?P5?Q!2w5?Q5?R!2w5?R5?T!)t5?T5?Y!2w5?Y5?[!)t5?[5?]!2w5?]5?^!)t5?^5?_!2w5?_5?w!)t5?w5?z!2w5?z5?|!)t5?|5@X!2w5@X5@`!)t5@`5@c!2w5@c5@o!)t5@o5@u!2w5@u5@w!)t5@w5@}!2w5@}5AP!)t5AP5AV!2w5AV5A`!)t5A`5Ag!2w5Ag5Ah!)t5Ah5Ao!2w5Ao5Dv!)t5Dv5Ek!2w5Ek5FY!)t5FY;%S!2w;%S;%`!)t;%`;%w!2w;%w;%{!)t;%{;'O!2w;'O;'S!)t;'S;=`!.]<%l?&r!)t?&r?.p!2w?.p?.r!)t?.r?1Q!2w?1Q?1x!)t?1x?2P!2w?2P?2]!)t?2]?2b!2w?2b?2g!)t?2g?2h!2w?2h?2i!)t?2i?2s!2w?2s?2t!)t?2t?3R!2w?3R?3S!)t?3S?3X!2w?3X?3Y!)t?3Y?3Z!2w?3Z?3[!)t?3[?3]!2w?3]?3^!2w?3^?3_!)t?3_?3`!2w?3`?3a!2w?3a?3b!)t?3b?5r!2w?5r?6e!)t?6e?>`!2w?>`?>r!)t?>r?@U!2w?@U?@W!)t?@W?A`!2w?A`?BY!)t?BY?Bf!2w?Bf?EO!)t?EO?ET!2w?ET?EU!)t?EU?HR!2w?HR?Hw!)t?Hw?Ic!2w?Ic?Ii!)t?Ii?JT!2w?JT?J`!)t?J`?L]!2w?L]?L`!)t?L`?Lf!2w?Lf?Lh!)t?Lh?Ln!2w?Ln?Lp!)t?Lp?Lv!2w?Lv?Lx!)t?Lx?L{!2w?L{O!)t_:6UZ!OW|SzQ`POr!)trs!*jsw!)twx!,^x![!)t![!]:6w!]#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:7QZ!OW|SzQOr!)trs!*jsw!)twx!,^x![!)t![!]:7s!]#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:8OX!OW|SzQaPOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:8vX!OW|SzQ!{POr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:9l]!OW|SzQOr!)trs!*jsw!)twx!,^x}!)t}!O::e!O!_!)t!_!`:=l!`#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_::n[!OW|SzQOr!)trs!*jsw!)twx!,^x}!)t}!O:;d!O!P9+}!P#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:;oa!OW|SzQ!fPOr!)trs!*jsw!)twx!,^x}!)t}!O9)u!O!`!)t!`!a:<t!a#S!)t#S#T!-i#T#c!)t#c#d:<t#d#l!)t#l#m:<t#m;'S!)t;'S;=`!.]<%lO!)t_:=PX!OW|SzQ!dPOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:=uZ!OW|SzQOr!)trs!*jsw!)twx!,^x!_!)t!_!`:>h!`#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:>s`!OW|SzQ!gPOr!)trs!*jsw!)twx!,^x!_!)t!_!`:?u!`!a:Az!a#S!)t#S#T!-i#T#c!)t#c#d:Az#d#l!)t#l#m:Az#m;'S!)t;'S;=`!.]<%lO!)t_:@Q`!OW|SzQ!gPOr!)trs!*jsw!)twx!,^x!_!)t!_!`:?u!`!a:AS!a#S!)t#S#T!-i#T#c!)t#c#d:AS#d#l!)t#l#m:AS#m;'S!)t;'S;=`!.]<%lO!)t_:A_X!OW|SzQ!gPOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:BVX!OW|SzQ!ePOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:B}Z!OW|SzQ!gPOr!)trs!*jsw!)twx!,^x!_!)t!_!`:Cp!`#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:C}`!OW|SzQ!gP^POr!)trs!*jsw!)twx!,^x!_!)t!_!`:EP!`!a:AS!a#S!)t#S#T!-i#T#c!)t#c#d:AS#d#l!)t#l#m:AS#m;'S!)t;'S;=`!.]<%lO!)t_:E^`!OW|SzQ!gP!iPOr!)trs!*jsw!)twx!,^x!_!)t!_!`:?u!`!a:AS!a#S!)t#S#T!-i#T#c!)t#c#d:AS#d#l!)t#l#m:AS#m;'S!)t;'S;=`!.]<%lO!)t_:FkX!]P!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:Gc[!QP!OW|SzQOr!)trs!*jsw!)twx!,^xy:HXy!}!)t!}#O:IP#O#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:HdX!VP!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:I[X!WP!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)to:JS]!RP!OW|SzQOr!)trs!*jsw!)twx!,^xy!)tyz:J{z#P!)t#P#Q:Ks#Q#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)tn:KWX!U`!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)tn:LOX!X`!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_:Lv2g|SzQ}XmPOq!-iqr)Hyrs&4yst)Hytu)Hyuv)Hyvw)Hywx(BZxz!-iz{)Hy{|)Hy|!O!-i!O!P)Hy!P!Q)Hy!Q![)Hy![!a!-i!a!b)Hy!b!c!-i!c!})Hy!}#O!-i#O#P)Hy#P#R!-i#R#S)Hy#S#T)Hy#T#o)Hy#o$p!-i$p$q)Hy$q${!-i${$|)Hy$|%Q!-i%Q%R)Hy%R%W!-i%W%o)Hy%o%p!-i%p&a)Hy&a&b!-i&b0`)Hy0`0d!-i0d0p)Hy0p1O!-i1O1T)Hy1T1[!-i1[1])Hy1]1^!-i1^1_)Hy1_4U!-i4U4Z)Hy4Z4[!-i4[4])Hy4]4^)Hy4^4`!-i4`4d)Hy4d4l!-i4l4m)Hy4m4n!-i4n4q)Hy4q4r!-i4r4s)Hy4s4t!-i4t5Y)Hy5Y5Z!-i5Z7Q)Hy7Q7R!-i7R:S)Hy:S:[!-i:[=p)Hy=p=y!-i=y>q)Hy>q>s!-i>s>t)Hy>t>{!-i>{?t)Hy?tA`!-iA`A{)HyA{BQ!-iBQBT)HyBTCS!-iCSDP)HyDPDt!-iDtDu)HyDuDv)HyDvDw!-iDwGO)HyGOGP!-iGPGQ)HyGQGa!-iGaGb)HyGbGc)HyGcGj!-iGjGk)HyGkGl)HyGlGv!-iGvGy)HyGyG{!-iG{G|)HyG|H^!-iH^H_)HyH_H`!-iH`IO)HyIOIm!-iImKj)HyKjKu!-iKuKv)HyKvL`!-iL`MR)HyMRM[!-iM[M])HyM]M^)HyM^Mb!-iMbMc)HyMcMh!-iMhNO)HyNONS!-iNSNT)HyNTN^!-iN^N_)HyN_Nb!-iNbNc)HyNcNz!-iNz! e)Hy! e!#O!-i!#O!#P)Hy!#P!#Q!-i!#Q!#])Hy!#]!%W!-i!%W!&`)Hy!&`!&c!-i!&c!&d)Hy!&d!&v!-i!&v!&w)Hy!&w!'O!-i!'O!'Y)Hy!'Y!'i!-i!'i!'p)Hy!'p!'q!-i!'q!'x)Hy!'x!'}!-i!'}!(V)Hy!(V!(X!-i!(X!(Y)Hy!(Y!(Z)Hy!(Z!(]!-i!(]!(s)Hy!(s!(t!-i!(t!({)Hy!({!(|!-i!(|!(})Hy!(}!)Q!-i!)Q!)U)Hy!)U!)X!-i!)X!)Y)Hy!)Y!)j!-i!)j!)k)Hy!)k!)x!-i!)x!)y)Hy!)y!)z)Hy!)z!){!-i!){!*O)Hy!*O!*^!-i!*^!*_)Hy!*_!*`)Hy!*`!*s!-i!*s!*y)Hy!*y!*}!-i!*}!+O)Hy!+O!+P)Hy!+P!+R!-i!+R!+i)Hy!+i!+j!-i!+j!+q)Hy!+q!+r!-i!+r!+s)Hy!+s!+t)Hy!+t!+u!-i!+u!+v)Hy!+v!+w)Hy!+w!+x!-i!+x!+y)Hy!+y!+z)Hy!+z!,k!-i!,k!,o)Hy!,o!,p!-i!,p!,q)Hy!,q!-U!-i!-U!-X)Hy!-X!-i!-i!-i!-r)Hy!-r!-s!-i!-s!-v)Hy!-v!-w!-i!-w!._)Hy!._!.`!-i!.`!.g)Hy!.g!.h!-i!.h!.i)Hy!.i!.j)Hy!.j!.k!-i!.k!.p)Hy!.p!.s!-i!.s!.t)Hy!.t!/W!-i!/W!/X)Hy!/X!/h!-i!/h!/i)Hy!/i!/j)Hy!/j!0_!-i!0_!0g)Hy!0g!0i!-i!0i!0j)Hy!0j!0k)Hy!0k!0m!-i!0m!1T)Hy!1T!1U!-i!1U!1])Hy!1]!1^!-i!1^!1_)Hy!1_!1`)Hy!1`!1a!-i!1a!1f)Hy!1f!1i!-i!1i!1j)Hy!1j!2Y!-i!2Y!2Z)Hy!2Z!2[)Hy!2[!2]!-i!2]!2`)Hy!2`!2o!-i!2o!2p)Hy!2p!3R!-i!3R!3S)Hy!3S!3T!-i!3T!3Z)Hy!3Z!3^!-i!3^!3a)Hy!3a!3b!-i!3b!3f)Hy!3f!3i!-i!3i!3j)Hy!3j!3k)Hy!3k!3l!-i!3l!3m)Hy!3m!3n!-i!3n!3o)Hy!3o!3p)Hy!3p!3s!-i!3s!3t)Hy!3t!3u)Hy!3u!3x!-i!3x!3{)Hy!3{!4O!-i!4O!4[)Hy!4[!4r!-i!4r!4s)Hy!4s!5y!-i!5y!6R)Hy!6R!6S!-i!6S!6V)Hy!6V!6W!-i!6W!6o)Hy!6o!6p!-i!6p!6z)Hy!6z!6{!-i!6{!7Q)Hy!7Q!7T!-i!7T!7U)Hy!7U!7p!-i!7p!7q)Hy!7q!7r)Hy!7r!7x!-i!7x!7y)Hy!7y!7z)Hy!7z!8o!-i!8o!8w)Hy!8w!8x!-i!8x!8{)Hy!8{!8|!-i!8|!9e)Hy!9e!9f!-i!9f!9p)Hy!9p!9q!-i!9q!9v)Hy!9v!9y!-i!9y!9z)Hy!9z!:l!-i!:l!:m)Hy!:m!:n!-i!:n!:o)Hy!:o!:p)Hy!:p!;P!-i!;P!;Q)Hy!;Q!;R)Hy!;R!;e!-i!;e!;m)Hy!;m!;n!-i!;n!;q)Hy!;q!;r!-i!;r!<m)Hy!<m!<o!-i!<o!<p)Hy!<p!=Q!-i!=Q!=R)Hy!=R!=d!-i!=d!=e)Hy!=e!=f)Hy!=f!>O!-i!>O!>U)Hy!>U!>Z!-i!>Z!>m)Hy!>m!>p!-i!>p!?Y)Hy!?Y!?Z!-i!?Z!?d)Hy!?d!?e!-i!?e!?f)Hy!?f!?h!-i!?h!?o)Hy!?o!@{!-i!@{!A})Hy!A}!BO!-i!BO!BP)Hy!BP!BQ)Hy!BQ!B^!-i!B^!Be)Hy!Be!Cq!-i!Cq!Cr)Hy!Cr!Cs)Hy!Cs!Ct!-i!Ct!Cu)Hy!Cu!Cw!-i!Cw!Cx)Hy!Cx!Cy)Hy!Cy!Cz!-i!Cz!C{)Hy!C{!C}!-i!C}!DO)Hy!DO!DU!-i!DU!DY)Hy!DY!DZ!-i!DZ!Db)Hy!Db!Dc!-i!Dc!Df)Hy!Df!Dg!-i!Dg!Dh)Hy!Dh!Di!-i!Di!Dj)Hy!Dj!Dl!-i!Dl!Dm)Hy!Dm!Dn)Hy!Dn!Do!-i!Do!Ds)Hy!Ds!Dt!-i!Dt!Du)Hy!Du!Dv)Hy!Dv!EP!-i!EP!EQ)Hy!EQ!ES!-i!ES!EX)Hy!EX!EY!-i!EY!EZ)Hy!EZ!Ep!-i!Ep!Et)Hy!Et!Ff!-i!Ff!Fg)Hy!Fg!Gx!-i!Gx!HQ)Hy!HQ!HR!-i!HR!Hw)Hy!Hw!Id!-i!Id!Ii)Hy!Ii!LQ!-i!LQ!L})Hy!L}!Mc!-i!Mc!Md)Hy!Md!Mt!-i!Mt!Mz)Hy!Mz!NO!-i!NO!NS)Hy!NS!NV!-i!NV!NW)Hy!NW!NZ!-i!NZ!N[)Hy!N[!N])Hy!N]!Nd!-i!Nd!Ng)Hy!Ng!Nk!-i!Nk!Nx)Hy!Nx# U!-i# U# V)Hy# V# h!-i# h#!`)Hy#!`#!a!-i#!a#!b)Hy#!b#!g!-i#!g#!h)Hy#!h#!j!-i#!j##g)Hy##g##h!-i##h#*s)Hy#*s#*t!-i#*t#*x)Hy#*x#*z!-i#*z#+R)Hy#+R#+S!-i#+S#+T)Hy#+T#+U!-i#+U#+Y)Hy#+Y#+[!-i#+[#,V)Hy#,V#,W!-i#,W#,[)Hy#,[#,^!-i#,^#-P)Hy#-P#-Q!-i#-Q#-U)Hy#-U#-W!-i#-W#-_)Hy#-_#-`!-i#-`#-a)Hy#-a#-b!-i#-b#-f)Hy#-f#-h!-i#-h#-w)Hy#-w#-x!-i#-x#/T)Hy#/T#/U!-i#/U#/Y)Hy#/Y#/[!-i#/[#0q)Hy#0q#1h!-i#1h#1x)Hy#1x#2Y!-i#2Y#4R)Hy#4R#4_!-i#4_#Au)Hy#Au#Aw!-i#Aw#BY)Hy#BY#BZ!-i#BZ#Bu)Hy#Bu#Bz!-i#Bz#Di)Hy#Di#EO!-i#EO#E])Hy#E]#E^!-i#E^#Eb)Hy#Eb#Ep!-i#Ep#FS)Hy#FS#Fb!-i#Fb#Ft)Hy#Ft#GS!-i#GS#Ga)Hy#Ga#Gb!-i#Gb#Ge)Hy#Ge#Gt!-i#Gt#Hz)Hy#Hz#Io!-i#Io#Ip)Hy#Ip#It!-i#It#Iu)Hy#Iu#K[!-i#K[#MW)Hy#MW#M`!-i#M`#NZ)Hy#NZ#N[!-i#N[#N])Hy#N]#Nb!-i#Nb$ z)Hy$ z$!U!-i$!U$!s)Hy$!s$#x!-i$#x$$h)Hy$$h$$j!-i$$j$$o)Hy$$o$$z!-i$$z$%x)Hy$%x$&_!-i$&_$&f)Hy$&f$'p!-i$'p$(X)Hy$(X$(b!-i$(b$)i)Hy$)i$+_!-i$+_$+`)Hy$+`$-a!-i$-a$.b)Hy$.b$.s!-i$.s$.z)Hy$.z$0T!-i$0T$0s)Hy$0s$1Q!-i$1Q$1R)Hy$1R$1S)Hy$1S$1^!-i$1^$2[)Hy$2[$2v!-i$2v$3l)Hy$3l$4g!-i$4g$4j)Hy$4j$4t!-i$4t$5j)Hy$5j$7y!-i$7y$7})Hy$7}$8O!-i$8O$8S)Hy$8S$8V!-i$8V$8W)Hy$8W$8X)Hy$8X$8b!-i$8b$<j)Hy$<j$=|!-i$=|$DO)Hy$DO$DQ!-i$DQ$DW)Hy$DW$DY!-i$DY$EQ)Hy$EQ$ES!-i$ES$EY)Hy$EY$E[!-i$E[$Ed)Hy$Ed$Ee!-i$Ee$Ef)Hy$Ef$Eg!-i$Eg$Eh)Hy$Eh$Ei!-i$Ei$Ej)Hy$Ej$Ek!-i$Ek$F[)Hy$F[$F^!-i$F^$Ge)Hy$Ge$Gf!-i$Gf$Gm)Hy$Gm$Gn!-i$Gn$Go)Hy$Go$Gr!-i$Gr$Gu)Hy$Gu$Gv!-i$Gv$G})Hy$G}$HQ!-i$HQ$HU)Hy$HU$HW!-i$HW$H^)Hy$H^$Hb!-i$Hb$Ho)Hy$Ho$Ht!-i$Ht$Hw)Hy$Hw$Hx!-i$Hx$IP)Hy$IP$Ki!-i$Ki$Kj)Hy$Kj$Kw!-i$Kw$Kx)Hy$Kx$LY!-i$LY$Lg)Hy$Lg$Np!-i$Np$Nq)Hy$Nq$Nu!-i$Nu$Nv)Hy$Nv$Nx!-i$Nx% S)Hy% S% T!-i% T% U)Hy% U% X!-i% X% ^)Hy% ^% d!-i% d% e)Hy% e% f!-i% f% g)Hy% g% h!-i% h% i)Hy% i% j!-i% j% n)Hy% n% o!-i% o% z)Hy% z% |!-i% |%!Q)Hy%!Q%!V!-i%!V%![)Hy%![%!`!-i%!`%!a)Hy%!a%#g!-i%#g%#h)Hy%#h%#i)Hy%#i&/x!-i&/x&0y)Hy&0y&0z!-i&0z&1{)Hy&1{&1|!-i&1|&4w)Hy&4w&4}!-i&4}&5R)Hy&5R&5U!-i&5U&5V)Hy&5V&5W)Hy&5W&5d!-i&5d&6[)Hy&6[&6]!-i&6]&6^)Hy&6^&6c!-i&6c&6d)Hy&6d&6f!-i&6f&7p)Hy&7p&7w!-i&7w&7x)Hy&7x&8Y!-i&8Y&8q)Hy&8q&8z!-i&8z&9R)Hy&9R&9S!-i&9S&9Z)Hy&9Z&9[!-i&9[&9c)Hy&9c&9d!-i&9d&9k)Hy&9k&9l!-i&9l&9s)Hy&9s&9t!-i&9t&9{)Hy&9{&9|!-i&9|&:T)Hy&:T&:U!-i&:U&:])Hy&:]&<P!-i&<P&<Q)Hy&<Q&FZ!-i&FZ&F[)Hy&F[&F])Hy&F]&GX!-i&GX&G^)Hy&G^&Gc!-i&Gc&Gd)Hy&Gd&Ge)Hy&Ge&Gi!-i&Gi&Ic)Hy&Ic&Ii!-i&Ii&Il)Hy&Il&Im!-i&Im&Kk)Hy&Kk&Kl!-i&Kl&Kp)Hy&Kp&Ku!-i&Ku&Lp)Hy&Lp&Ls!-i&Ls&Nu)Hy&Nu' W!-i' W' s)Hy' s'!z!-i'!z'#[)Hy'#['.b!-i'.b*3f)Hy*3f*5S!-i*5S40_)Hy40_41d!-i41d4Js)Hy4Js4LY!-i4LY4MY)Hy4MY4M[!-i4M[5%T)Hy5%T5%W!-i5%W5%h)Hy5%h5%r!-i5%r5%s)Hy5%s5%t)Hy5%t5&Y!-i5&Y5'Z)Hy5'Z5'k!-i5'k5(U)Hy5(U5(^!-i5(^5)v)Hy5)v5*y!-i5*y5+S)Hy5+S5+U!-i5+U5-a)Hy5-a5-c!-i5-c5-g)Hy5-g5-h!-i5-h5-l)Hy5-l5-x!-i5-x5.T)Hy5.T5/t!-i5/t50O)Hy50O50P!-i50P50S)Hy50S50T!-i50T50X)Hy50X50Y!-i50Y50q)Hy50q51`!-i51`52f)Hy52f52t!-i52t53x)Hy53x55Y!-i55Y55`)Hy55`55c!-i55c55d)Hy55d55r!-i55r56`)Hy56`56j!-i56j57R)Hy57R57l!-i57l58Z)Hy58Z58b!-i58b59c)Hy59c5:P!-i5:P5:Q)Hy5:Q5;S!-i5;S5;})Hy5;}5<f!-i5<f5<i)Hy5<i5<j!-i5<j5<r)Hy5<r5=W!-i5=W5=o)Hy5=o5=r!-i5=r5=s)Hy5=s5=x!-i5=x5>z)Hy5>z5>{!-i5>{5>|)Hy5>|5?P!-i5?P5?Q)Hy5?Q5?R)Hy5?R5?T!-i5?T5?Y)Hy5?Y5?[!-i5?[5?])Hy5?]5?^!-i5?^5?_)Hy5?_5?w!-i5?w5?z)Hy5?z5?|!-i5?|5@X)Hy5@X5@`!-i5@`5@c)Hy5@c5@o!-i5@o5@u)Hy5@u5@w!-i5@w5@})Hy5@}5AP!-i5AP5AV)Hy5AV5A`!-i5A`5Ag)Hy5Ag5Ah!-i5Ah5Ao)Hy5Ao5Dv!-i5Dv5Ek)Hy5Ek5FY!-i5FY;%S)Hy;%S;%`!-i;%`;%w)Hy;%w;%{!-i;%{;'O)Hy;'O;'S!-i;'S;=`!.V<%l?&r!-i?&r?.p)Hy?.p?.r!-i?.r?1Q)Hy?1Q?1x!-i?1x?2P)Hy?2P?2]!-i?2]?2b)Hy?2b?2g!-i?2g?2h)Hy?2h?2i!-i?2i?2s)Hy?2s?2t!-i?2t?3R)Hy?3R?3S!-i?3S?3X)Hy?3X?3Y!-i?3Y?3Z)Hy?3Z?3[!-i?3[?3])Hy?3]?3^)Hy?3^?3_!-i?3_?3`)Hy?3`?3a)Hy?3a?3b!-i?3b?5r)Hy?5r?6e!-i?6e?>`)Hy?>`?>r!-i?>r?@U)Hy?@U?@W!-i?@W?A`)Hy?A`?BY!-i?BY?Bf)Hy?Bf?EO!-i?EO?ET)Hy?ET?EU!-i?EU?HR)Hy?HR?Hw!-i?Hw?Ic)Hy?Ic?Ii!-i?Ii?JT)Hy?JT?J`!-i?J`?L])Hy?L]?L`!-i?L`?Lf)Hy?Lf?Lh!-i?Lh?Ln)Hy?Ln?Lp!-i?Lp?Lv)Hy?Lv?Lx!-i?Lx?L{)Hy?L{O!-i_<%j2j!OW|SzQmPOq!)tqr!2wrs#9kst!2wtu!2wuv!2wvw!2wwx';ixz!)tz{!2w{|!2w|}!)t}!O::e!O!P!2w!P!Q!2w!Q![!2w![!_!)t!_!`:=l!`!a!)t!a!b!2w!b!c!)t!c!}!2w!}#O!)t#O#P!2w#P#R!)t#R#S!2w#S#T)Hy#T#o!2w#o$p!)t$p$q!2w$q${!)t${$|!2w$|%Q!)t%Q%R!2w%R%W!)t%W%o!2w%o%p!)t%p&a!2w&a&b!)t&b0`!2w0`0d!)t0d0p!2w0p1O!)t1O1T!2w1T1[!)t1[1]!2w1]1^!)t1^1_!2w1_4U!)t4U4Z!2w4Z4[!)t4[4]!2w4]4^!2w4^4`!)t4`4d!2w4d4l!)t4l4m!2w4m4n!)t4n4q!2w4q4r!)t4r4s!2w4s4t!)t4t5Y!2w5Y5Z!)t5Z7Q!2w7Q7R!)t7R:S!2w:S:[!)t:[=p!2w=p=y!)t=y>q!2w>q>s!)t>s>t!2w>t>{!)t>{?t!2w?tA`!)tA`A{!2wA{BQ!)tBQBT!2wBTCS!)tCSDP!2wDPDt!)tDtDu!2wDuDv!2wDvDw!)tDwGO!2wGOGP!)tGPGQ!2wGQGa!)tGaGb!2wGbGc!2wGcGj!)tGjGk!2wGkGl!2wGlGv!)tGvGy!2wGyG{!)tG{G|!2wG|H^!)tH^H_!2wH_H`!)tH`IO!2wIOIm!)tImKj!2wKjKu!)tKuKv!2wKvL`!)tL`MR!2wMRM[!)tM[M]!2wM]M^!2wM^Mb!)tMbMc!2wMcMh!)tMhNO!2wNONS!)tNSNT!2wNTN^!)tN^N_!2wN_Nb!)tNbNc!2wNcNz!)tNz! e!2w! e!#O!)t!#O!#P!2w!#P!#Q!)t!#Q!#]!2w!#]!%W!)t!%W!&`!2w!&`!&c!)t!&c!&d!2w!&d!&v!)t!&v!&w!2w!&w!'O!)t!'O!'Y!2w!'Y!'i!)t!'i!'p!2w!'p!'q!)t!'q!'x!2w!'x!'}!)t!'}!(V!2w!(V!(X!)t!(X!(Y!2w!(Y!(Z!2w!(Z!(]!)t!(]!(s!2w!(s!(t!)t!(t!({!2w!({!(|!)t!(|!(}!2w!(}!)Q!)t!)Q!)U!2w!)U!)X!)t!)X!)Y!2w!)Y!)j!)t!)j!)k!2w!)k!)x!)t!)x!)y!2w!)y!)z!2w!)z!){!)t!){!*O!2w!*O!*^!)t!*^!*_!2w!*_!*`!2w!*`!*s!)t!*s!*y!2w!*y!*}!)t!*}!+O!2w!+O!+P!2w!+P!+R!)t!+R!+i!2w!+i!+j!)t!+j!+q!2w!+q!+r!)t!+r!+s!2w!+s!+t!2w!+t!+u!)t!+u!+v!2w!+v!+w!2w!+w!+x!)t!+x!+y!2w!+y!+z!2w!+z!,k!)t!,k!,o!2w!,o!,p!)t!,p!,q!2w!,q!-U!)t!-U!-X!2w!-X!-i!)t!-i!-r!2w!-r!-s!)t!-s!-v!2w!-v!-w!)t!-w!._!2w!._!.`!)t!.`!.g!2w!.g!.h!)t!.h!.i!2w!.i!.j!2w!.j!.k!)t!.k!.p!2w!.p!.s!)t!.s!.t!2w!.t!/W!)t!/W!/X!2w!/X!/h!)t!/h!/i!2w!/i!/j!2w!/j!0_!)t!0_!0g!2w!0g!0i!)t!0i!0j!2w!0j!0k!2w!0k!0m!)t!0m!1T!2w!1T!1U!)t!1U!1]!2w!1]!1^!)t!1^!1_!2w!1_!1`!2w!1`!1a!)t!1a!1f!2w!1f!1i!)t!1i!1j!2w!1j!2Y!)t!2Y!2Z!2w!2Z!2[!2w!2[!2]!)t!2]!2`!2w!2`!2o!)t!2o!2p!2w!2p!3R!)t!3R!3S!2w!3S!3T!)t!3T!3Z!2w!3Z!3^!)t!3^!3a!2w!3a!3b!)t!3b!3f!2w!3f!3i!)t!3i!3j!2w!3j!3k!2w!3k!3l!)t!3l!3m!2w!3m!3n!)t!3n!3o!2w!3o!3p!2w!3p!3s!)t!3s!3t!2w!3t!3u!2w!3u!3x!)t!3x!3{!2w!3{!4O!)t!4O!4[!2w!4[!4r!)t!4r!4s!2w!4s!5y!)t!5y!6R!2w!6R!6S!)t!6S!6V!2w!6V!6W!)t!6W!6o!2w!6o!6p!)t!6p!6z!2w!6z!6{!)t!6{!7Q!2w!7Q!7T!)t!7T!7U!2w!7U!7p!)t!7p!7q!2w!7q!7r!2w!7r!7x!)t!7x!7y!2w!7y!7z!2w!7z!8o!)t!8o!8w!2w!8w!8x!)t!8x!8{!2w!8{!8|!)t!8|!9e!2w!9e!9f!)t!9f!9p!2w!9p!9q!)t!9q!9v!2w!9v!9y!)t!9y!9z!2w!9z!:l!)t!:l!:m!2w!:m!:n!)t!:n!:o!2w!:o!:p!2w!:p!;P!)t!;P!;Q!2w!;Q!;R!2w!;R!;e!)t!;e!;m!2w!;m!;n!)t!;n!;q!2w!;q!;r!)t!;r!<m!2w!<m!<o!)t!<o!<p!2w!<p!=Q!)t!=Q!=R!2w!=R!=d!)t!=d!=e!2w!=e!=f!2w!=f!>O!)t!>O!>U!2w!>U!>Z!)t!>Z!>m!2w!>m!>p!)t!>p!?Y!2w!?Y!?Z!)t!?Z!?d!2w!?d!?e!)t!?e!?f!2w!?f!?h!)t!?h!?o!2w!?o!@{!)t!@{!A}!2w!A}!BO!)t!BO!BP!2w!BP!BQ!2w!BQ!B^!)t!B^!Be!2w!Be!Cq!)t!Cq!Cr!2w!Cr!Cs!2w!Cs!Ct!)t!Ct!Cu!2w!Cu!Cw!)t!Cw!Cx!2w!Cx!Cy!2w!Cy!Cz!)t!Cz!C{!2w!C{!C}!)t!C}!DO!2w!DO!DU!)t!DU!DY!2w!DY!DZ!)t!DZ!Db!2w!Db!Dc!)t!Dc!Df!2w!Df!Dg!)t!Dg!Dh!2w!Dh!Di!)t!Di!Dj!2w!Dj!Dl!)t!Dl!Dm!2w!Dm!Dn!2w!Dn!Do!)t!Do!Ds!2w!Ds!Dt!)t!Dt!Du!2w!Du!Dv!2w!Dv!EP!)t!EP!EQ!2w!EQ!ES!)t!ES!EX!2w!EX!EY!)t!EY!EZ!2w!EZ!Ep!)t!Ep!Et!2w!Et!Ff!)t!Ff!Fg!2w!Fg!Gx!)t!Gx!HQ!2w!HQ!HR!)t!HR!Hw!2w!Hw!Id!)t!Id!Ii!2w!Ii!LQ!)t!LQ!L}!2w!L}!Mc!)t!Mc!Md!2w!Md!Mt!)t!Mt!Mz!2w!Mz!NO!)t!NO!NS!2w!NS!NV!)t!NV!NW!2w!NW!NZ!)t!NZ!N[!2w!N[!N]!2w!N]!Nd!)t!Nd!Ng!2w!Ng!Nk!)t!Nk!Nx!2w!Nx# U!)t# U# V!2w# V# h!)t# h#!`!2w#!`#!a!)t#!a#!b!2w#!b#!g!)t#!g#!h!2w#!h#!j!)t#!j##g!2w##g##h!)t##h#*s!2w#*s#*t!)t#*t#*x!2w#*x#*z!)t#*z#+R!2w#+R#+S!)t#+S#+T!2w#+T#+U!)t#+U#+Y!2w#+Y#+[!)t#+[#,V!2w#,V#,W!)t#,W#,[!2w#,[#,^!)t#,^#-P!2w#-P#-Q!)t#-Q#-U!2w#-U#-W!)t#-W#-_!2w#-_#-`!)t#-`#-a!2w#-a#-b!)t#-b#-f!2w#-f#-h!)t#-h#-w!2w#-w#-x!)t#-x#/T!2w#/T#/U!)t#/U#/Y!2w#/Y#/[!)t#/[#0q!2w#0q#1h!)t#1h#1x!2w#1x#2Y!)t#2Y#4R!2w#4R#4_!)t#4_#Au!2w#Au#Aw!)t#Aw#BY!2w#BY#BZ!)t#BZ#Bu!2w#Bu#Bz!)t#Bz#Di!2w#Di#EO!)t#EO#E]!2w#E]#E^!)t#E^#Eb!2w#Eb#Ep!)t#Ep#FS!2w#FS#Fb!)t#Fb#Ft!2w#Ft#GS!)t#GS#Ga!2w#Ga#Gb!)t#Gb#Ge!2w#Ge#Gt!)t#Gt#Hz!2w#Hz#Io!)t#Io#Ip!2w#Ip#It!)t#It#Iu!2w#Iu#K[!)t#K[#MW!2w#MW#M`!)t#M`#NZ!2w#NZ#N[!)t#N[#N]!2w#N]#Nb!)t#Nb$ z!2w$ z$!U!)t$!U$!s!2w$!s$#x!)t$#x$$h!2w$$h$$j!)t$$j$$o!2w$$o$$z!)t$$z$%x!2w$%x$&_!)t$&_$&f!2w$&f$'p!)t$'p$(X!2w$(X$(b!)t$(b$)i!2w$)i$+_!)t$+_$+`!2w$+`$-a!)t$-a$.b!2w$.b$.s!)t$.s$.z!2w$.z$0T!)t$0T$0s!2w$0s$1Q!)t$1Q$1R!2w$1R$1S!2w$1S$1^!)t$1^$2[!2w$2[$2v!)t$2v$3l!2w$3l$4g!)t$4g$4j!2w$4j$4t!)t$4t$5j!2w$5j$7y!)t$7y$7}!2w$7}$8O!)t$8O$8S!2w$8S$8V!)t$8V$8W!2w$8W$8X!2w$8X$8b!)t$8b$<j!2w$<j$=|!)t$=|$DO!2w$DO$DQ!)t$DQ$DW!2w$DW$DY!)t$DY$EQ!2w$EQ$ES!)t$ES$EY!2w$EY$E[!)t$E[$Ed!2w$Ed$Ee!)t$Ee$Ef!2w$Ef$Eg!)t$Eg$Eh!2w$Eh$Ei!)t$Ei$Ej!2w$Ej$Ek!)t$Ek$F[!2w$F[$F^!)t$F^$Ge!2w$Ge$Gf!)t$Gf$Gm!2w$Gm$Gn!)t$Gn$Go!2w$Go$Gr!)t$Gr$Gu!2w$Gu$Gv!)t$Gv$G}!2w$G}$HQ!)t$HQ$HU!2w$HU$HW!)t$HW$H^!2w$H^$Hb!)t$Hb$Ho!2w$Ho$Ht!)t$Ht$Hw!2w$Hw$Hx!)t$Hx$IP!2w$IP$Ki!)t$Ki$Kj!2w$Kj$Kw!)t$Kw$Kx!2w$Kx$LY!)t$LY$Lg!2w$Lg$Np!)t$Np$Nq!2w$Nq$Nu!)t$Nu$Nv!2w$Nv$Nx!)t$Nx% S!2w% S% T!)t% T% U!2w% U% X!)t% X% ^!2w% ^% d!)t% d% e!2w% e% f!)t% f% g!2w% g% h!)t% h% i!2w% i% j!)t% j% n!2w% n% o!)t% o% z!2w% z% |!)t% |%!Q!2w%!Q%!V!)t%!V%![!2w%![%!`!)t%!`%!a!2w%!a%#g!)t%#g%#h!2w%#h%#i!2w%#i&/x!)t&/x&0y!2w&0y&0z!)t&0z&1{!2w&1{&1|!)t&1|&4w!2w&4w&4}!)t&4}&5R!2w&5R&5U!)t&5U&5V!2w&5V&5W!2w&5W&5d!)t&5d&6[!2w&6[&6]!)t&6]&6^!2w&6^&6c!)t&6c&6d!2w&6d&6f!)t&6f&7p!2w&7p&7w!)t&7w&7x!2w&7x&8Y!)t&8Y&8q!2w&8q&8z!)t&8z&9R!2w&9R&9S!)t&9S&9Z!2w&9Z&9[!)t&9[&9c!2w&9c&9d!)t&9d&9k!2w&9k&9l!)t&9l&9s!2w&9s&9t!)t&9t&9{!2w&9{&9|!)t&9|&:T!2w&:T&:U!)t&:U&:]!2w&:]&<P!)t&<P&<Q!2w&<Q&FZ!)t&FZ&F[!2w&F[&F]!2w&F]&GX!)t&GX&G^!2w&G^&Gc!)t&Gc&Gd!2w&Gd&Ge!2w&Ge&Gi!)t&Gi&Ic!2w&Ic&Ii!)t&Ii&Il!2w&Il&Im!)t&Im&Kk!2w&Kk&Kl!)t&Kl&Kp!2w&Kp&Ku!)t&Ku&Lp!2w&Lp&Ls!)t&Ls&Nu!2w&Nu' W!)t' W' s!2w' s'!z!)t'!z'#[!2w'#['.b!)t'.b*3f!2w*3f*5S!)t*5S40_!2w40_41d!)t41d4Js!2w4Js4LY!)t4LY4MY!2w4MY4M[!)t4M[5%T!2w5%T5%W!)t5%W5%h!2w5%h5%r!)t5%r5%s!2w5%s5%t!2w5%t5&Y!)t5&Y5'Z!2w5'Z5'k!)t5'k5(U!2w5(U5(^!)t5(^5)v!2w5)v5*y!)t5*y5+S!2w5+S5+U!)t5+U5-a!2w5-a5-c!)t5-c5-g!2w5-g5-h!)t5-h5-l!2w5-l5-x!)t5-x5.T!2w5.T5/t!)t5/t50O!2w50O50P!)t50P50S!2w50S50T!)t50T50X!2w50X50Y!)t50Y50q!2w50q51`!)t51`52f!2w52f52t!)t52t53x!2w53x55Y!)t55Y55`!2w55`55c!)t55c55d!2w55d55r!)t55r56`!2w56`56j!)t56j57R!2w57R57l!)t57l58Z!2w58Z58b!)t58b59c!2w59c5:P!)t5:P5:Q!2w5:Q5;S!)t5;S5;}!2w5;}5<f!)t5<f5<i!2w5<i5<j!)t5<j5<r!2w5<r5=W!)t5=W5=o!2w5=o5=r!)t5=r5=s!2w5=s5=x!)t5=x5>z!2w5>z5>{!)t5>{5>|!2w5>|5?P!)t5?P5?Q!2w5?Q5?R!2w5?R5?T!)t5?T5?Y!2w5?Y5?[!)t5?[5?]!2w5?]5?^!)t5?^5?_!2w5?_5?w!)t5?w5?z!2w5?z5?|!)t5?|5@X!2w5@X5@`!)t5@`5@c!2w5@c5@o!)t5@o5@u!2w5@u5@w!)t5@w5@}!2w5@}5AP!)t5AP5AV!2w5AV5A`!)t5A`5Ag!2w5Ag5Ah!)t5Ah5Ao!2w5Ao5Dv!)t5Dv5Ek!2w5Ek5FY!)t5FY;%S!2w;%S;%`!)t;%`;%w!2w;%w;%{!)t;%{;'O!2w;'O;'S!)t;'S;=`!.]<%l?&r!)t?&r?.p!2w?.p?.r!)t?.r?1Q!2w?1Q?1x!)t?1x?2P!2w?2P?2]!)t?2]?2b!2w?2b?2g!)t?2g?2h!2w?2h?2i!)t?2i?2s!2w?2s?2t!)t?2t?3R!2w?3R?3S!)t?3S?3X!2w?3X?3Y!)t?3Y?3Z!2w?3Z?3[!)t?3[?3]!2w?3]?3^!2w?3^?3_!)t?3_?3`!2w?3`?3a!2w?3a?3b!)t?3b?5r!2w?5r?6e!)t?6e?>`!2w?>`?>r!)t?>r?@U!2w?@U?@W!)t?@W?A`!2w?A`?BY!)t?BY?Bf!2w?Bf?EO!)t?EO?ET!2w?ET?EU!)t?EU?HR!2w?HR?Hw!)t?Hw?Ic!2w?Ic?Ii!)t?Ii?JT!2w?JT?J`!)t?J`?L]!2w?L]?L`!)t?L`?Lf!2w?Lf?Lh!)t?Lh?Ln!2w?Ln?Lp!)t?Lp?Lv!2w?Lv?Lx!)t?Lx?L{!2w?L{O!)t_=,gZ!^P!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T#o!)t#o#p=-Y#p;'S!)t;'S;=`!.]<%lO!)t_=-eX!`P!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_=.]X!SP!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)to=/TZ!_P!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T#q!)t#q#r=/v#r;'S!)t;'S;=`!.]<%lO!)tn=0RX!a`!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t_=0wZ!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T#r!)t#r#s=1j#s;'S!)t;'S;=`!.]<%lO!)t_=1sZ!OW|SzQOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T#r!)t#r#s=2f#s;'S!)t;'S;=`!.]<%lO!)t_=2qX!OW|SzQ!iPOr!)trs!*jsw!)twx!,^x#S!)t#S#T!-i#T;'S!)t;'S;=`!.]<%lO!)t",
  tokenizers: [xy, Oy, ky, 0, 1, 2, 3, 4, 5],
  topRules: { FlowchartDiagram: [0, 5] },
  specialized: [{ term: 29, get: (s) => vy[s] || -1 }],
  tokenPrec: 1356
}), Cy = 24, Dy = 1, Ry = 2, Ty = 3, Hy = 4, Ey = 5, jy = 6, Py = 7, Ny = 8, Yy = 9, zy = 10, Gy = 11, bo = 12, Qy = 25, By = 26, Wy = 27, My = 28, Ay = 29, Ly = 30, Zy = 31, _y = 32, qy = 33, Fy = 34, Iy = 35, Uy = 36, Vy = 37, Sd = [-1, 9, 10, 13, 32, 37], Xy = [43, 45], Ky = [44, 58, 62], Jy = ["->", "-x", "-)", " -", "  "], tb = ["-->", "->>", "--x", "--)", " as"], vd = {
  "left of": bo,
  "right of": bo,
  activate: Dy,
  actor: Ny,
  alt: Qy,
  and: By,
  as: Yy,
  autonumber: Ry,
  box: Wy,
  break: My,
  create: Ty,
  critical: Ay,
  deactivate: Hy,
  destroy: Ey,
  else: Ly,
  end: jy,
  link: Zy,
  links: _y,
  loop: qy,
  note: Py,
  opt: Fy,
  option: Iy,
  over: bo,
  par: Uy,
  participant: zy,
  rect: Vy
}, eb = Object.keys(vd), ib = new $t((s) => {
  if (!Sd.includes(s.next)) {
    for (; s.next !== 10 && s.next !== -1; )
      s.advance();
    s.acceptToken(Cy);
  }
}), sb = new $t((s) => {
  if (Sd.includes(s.next) || Xy.includes(s.next))
    return;
  const t = () => {
    if (s.peek(0) === -1 || s.peek(1) === -1 || s.peek(2) === -1)
      return !1;
    let n = String.fromCodePoint(s.peek(0)) + String.fromCodePoint(s.peek(1));
    return !!(Jy.includes(n) || (n += String.fromCodePoint(s.peek(2)), tb.includes(n)));
  };
  let e = "";
  for (; !Ky.includes(s.next) && !t() && s.next !== 10 && s.next !== -1; )
    e += String.fromCodePoint(s.next), s.advance();
  const i = eb.filter((n) => n === e ? e.toLowerCase().startsWith(n) : e.toLowerCase().startsWith(n + " "));
  if (i.length > 0) {
    s.acceptToken(vd[i[0]], i[0].length - e.length);
    return;
  }
  s.acceptToken(Gy);
}), nb = Fe({
  DiagramName: ye.diagramName,
  NodeText: ye.nodeText,
  Keyword1: ye.keyword1,
  Keyword2: ye.keyword2,
  LineComment: ye.lineComment,
  "Arrow ArrowSuffix": ye.arrow,
  Position: ye.position,
  MessageText1: ye.messageText1,
  MessageText2: ye.messageText2
}), rb = { __proto__: null, sequenceDiagram: 84 }, Cd = Xt.deserialize({
  version: 14,
  states: "'nOVQSOOO[QSO'#DUQOQSOOOOQO'#Cj'#CjO#QQUO,59pOOQP'#Co'#CoOOQQ'#Cq'#CqOOQO'#DY'#DYO#XQUO'#DYO#gQUO'#DYO#lQUO'#DYO#wQUO'#DYO#|QUO'#DYO$RQTO'#DYO$WQUO'#DYO$]QSO1G/[O$eQYO,59tO$sQUO,59tO$xQUO,59tO%TQUO,59tOOQO,59t,59tO%YQUO,59tOOQO'#Cp'#CpO%_QSO,59tO%dQUO7+$vO%kQSO7+$vOOQQ'#Cm'#CmO%sQSO1G/`O%xQUO1G/`O%}QUO1G/`OOQO1G/`1G/`O&VQUO1G/`O&[QUO1G/`O&gQSO1G/`O&oQTO1G/`OOQO,59^,59^O&tQUO<<HbOOQO-E6p-E6pO&oQTO7+$zO&{QSO7+$zO'QQUO7+$zOOQO7+$z7+$zO'VQUO7+$zOOQO'#Cn'#CnPdQUO'#CrOOQO<<Hf<<HfO&oQTO<<HfO'[QSO<<HfOOQOAN>QAN>QO&oQTOAN>QOOQOG23lG23l",
  stateData: "'g~OwOS~OzRO~O{SOgxX~OPZOQVORYOSZOTYOUVOV[OWXOYXOZWO_VOiTOjTOkTOlTOmTOnTOoUOpUOqTOrTOsTOtTOuTO~Ogxa~PdOXaO``Og|X{|X~OZbO~OWcOYcOZbO~OZdO~O[eO~OhfO~OZgO~O{hOgxi~OZkO{lO}jO!OjO~OZnO~OXoOg|a{|a~OZpO~OZqO~O!PrO~Ogxq~PdO{tOgxq~O!PvO~OZwO~OZwO{xO~OZyO~OXzOg|i{|i~O!PvO!QxO~Oh{O~Ogxy~PdO!P!OO~OZ!PO~OZ}O~O!P!RO~O{w`y`~",
  goto: "#S}PPPPPPPPPPPPPP!OPP!R!U!b!h!k!qPPPPPPPPPPPPPPPPP!wPPP!zRPORm`QyrQ}vQ!Q!OR!S!RX]Sht|Rd]X^Sht|Qi_RuiRQOQ_SVsht|",
  nodeNames: "⚠ Activate Autonumber Create Deactivate Destroy End Note Actor As Participant NodeText Position SequenceDiagram DiagramName LineComment Arrow ArrowSuffix MessageText1 Keyword MessageText2 Link",
  maxTerm: 48,
  nodeProps: [
    ["group", -9, 1, 2, 3, 4, 5, 6, 7, 19, 21, "Keyword1", -3, 8, 9, 10, "Keyword2"]
  ],
  propSources: [nb],
  skippedNodes: [0],
  repeatNodeCount: 1,
  tokenData: "(x~RmXY!|YZ#qZ^!|pq!|tu$nuv%`{|%}|}&S}!O&X![!]'T!c!}$n#T#o$n#y#z!|$f$g!|$g#BY$n#BY#BZ'Y#BZ$IS$n$IS$I_'Y$I_$I|$n$I|$JO'Y$JO$JT$n$JT$JU'Y$JU$KV$n$KV$KW'Y$KW&FU$n&FU&FV'Y&FV;'S$n;'S;=`%Y<%lO$n~#RYw~X^!|pq!|#y#z!|$f$g!|#BY#BZ!|$IS$I_!|$I|$JO!|$JT$JU!|$KV$KW!|&FU&FV!|~#x[{~w~XY!|YZ#qZ^!|pq!|#y#z!|$f$g!|#BY#BZ!|$IS$I_!|$I|$JO!|$JT$JU!|$KV$KW!|&FU&FV!|~$sVy~tu$n!Q![$n!c!}$n#T#o$n$g;'S$n;'S;=`%Y<%lO$n~%]P;=`<%l$n~%cPuv%f~%kS_~OY%fZ;'S%f;'S;=`%w<%lO%f~%zP;=`<%l%f~&SO}~~&XO!Q~R&^S!OQyz&j}!O&o!`!a&{#l#m&jP&oO`PP&rRyz&j!`!a&{#l#m&jP'QP`P!`!a&j~'YO!P~~'agw~y~X^!|pq!|tu$n!Q![$n!c!}$n#T#o$n#y#z!|$f$g!|$g#BY$n#BY#BZ'Y#BZ$IS$n$IS$I_'Y$I_$I|$n$I|$JO'Y$JO$JT$n$JT$JU'Y$JU$KV$n$KV$KW'Y$KW&FU$n&FU&FV'Y&FV;'S$n;'S;=`%Y<%lO$n",
  tokenizers: [ib, sb, 0, 1],
  topRules: { SequenceDiagram: [0, 13] },
  specialized: [{ term: 41, get: (s) => rb[s] || -1 }],
  tokenPrec: 293
}), ob = 1, lb = 14, ab = 15, hb = 16, Dd = [-1, 9, 10, 13, 32], cb = ["title", "section"], fb = (s) => s.peek(0) === 37 && s.peek(1) === 37, Dr = (s) => Dd.includes(s.next) || fb(s), ub = new $t((s) => {
  if (Dr(s))
    return;
  let t = "";
  for (; !Dd.includes(s.next); )
    t += String.fromCodePoint(s.next), s.advance();
  const e = cb.filter((i) => i === t ? t.toLowerCase().startsWith(i) : t.toLowerCase().startsWith(i + " "));
  if (e.length > 0) {
    s.acceptToken(ob, e[0].length - t.length);
    return;
  }
}), db = new $t((s) => {
  if (!Dr(s)) {
    for (; s.next !== 10 && s.next !== -1; )
      s.advance();
    s.acceptToken(lb);
  }
}), pb = new $t((s) => {
  if (!Dr(s)) {
    for (; s.next !== 58 && s.next !== 10 && s.next !== -1; )
      s.advance();
    s.acceptToken(ab);
  }
}), mb = new $t((s) => {
  if (!Dr(s)) {
    for (; s.next !== 44 && s.next !== 10 && s.next !== -1; )
      s.advance();
    s.acceptToken(hb);
  }
}), gb = Fe({
  DiagramName: Si.diagramName,
  "Text TaskName": Si.text,
  Actor: Si.actor,
  Keyword: Si.keyword,
  LineComment: Si.lineComment,
  Score: Si.score
}), $b = { __proto__: null, journey: 42 }, Rd = Xt.deserialize({
  version: 14,
  states: "%^OVQ`OOO[QeO'#CoQOQ`OOOOQT'#C_'#C_OOQT'#Cf'#CfOmQeO,59ZOOQO'#Cc'#CcO!OQ`O'#CbOOQO'#Cs'#CsO!TQbO'#CsOvQ`O,59ZOOQT-E6d-E6dO!YQ`O1G.uO!bQdO,58|OOQO'#Ca'#CaOOQO,59_,59_O!gQeO1G.uO!YQ`O1G.uO!xQeO7+$aO#RQ`O7+$aOOQO'#Cd'#CdO#ZQ`O1G.hOOQO,59S,59SOOQO-E6f-E6fO#fQeO<<G{O#wQhO7+$SP#|QeO'#CfOOQO'#Ce'#CeO$[Q`O<<GnO#wQhO'#CgO$gQ`OAN=YOOQO,59R,59ROOQO-E6e-E6e",
  stateData: "$u~ObOS~OeRO~OPXOSWO_UOfSO]cX~OPXOSWO_UOfSO]ca~Oh]O~O^^O~OfSO]ci~O_dO~OPXOSWO_UOfSO]ci~OPXOSWO_UOfSO]cq~OhiO]UifUi~OPXOSWO_UOfSO]cy~O`kO~OPXOSWO_UOfSO~OimO]UyfUy~OimO]U!RfU!R~Ofb~",
  goto: "#_hPPPiPlow!P!S!Y!n!tPPPPPP#OPPP#RRPOR_X]WPT`bhj]VPT`bhjRe]QliRomQTPYZT`bhjQ`YSb[aRhcQnlRpnQaYQc[TgacRQOQYPQ[TXf`bhj",
  nodeNames: "⚠ Keyword JourneyDiagram DiagramName LineComment Text Task TaskName Score Actor",
  maxTerm: 25,
  propSources: [gb],
  skippedNodes: [0],
  repeatNodeCount: 3,
  tokenData: "$|~RaXY!WYZ!{Z^!Wpq!Wuv#x|}$g![!]$l!c!}$q#T#o$q#y#z!W$f$g!W#BY#BZ!W$IS$I_!W$I|$JO!W$JT$JU!W$KV$KW!W&FU&FV!W~!]Yb~X^!Wpq!W#y#z!W$f$g!W#BY#BZ!W$IS$I_!W$I|$JO!W$JT$JU!W$KV$KW!W&FU&FV!W~#S[f~b~XY!WYZ!{Z^!Wpq!W#y#z!W$f$g!W#BY#BZ!W$IS$I_!W$I|$JO!W$JT$JU!W$KV$KW!W&FU&FV!W~#{Puv$O~$TSS~OY$OZ;'S$O;'S;=`$a<%lO$O~$dP;=`<%l$O~$lOi~~$qOh~~$vQd~!c!}$q#T#o$q",
  tokenizers: [ub, db, pb, mb, 0],
  topRules: { JourneyDiagram: [0, 2] },
  specialized: [{ term: 20, get: (s) => $b[s] || -1 }],
  tokenPrec: 172
}), wb = 1, cc = [-1, 45, 60, 62, 10, 13, 123, 61], yb = new $t((s) => {
  if (cc.includes(s.next) || s.next === 32)
    return;
  let t, e = "", i = 0;
  do {
    if (t = s.peek(i), t === -1)
      return;
    e += String.fromCodePoint(t), i++;
  } while (!cc.includes(t));
  (t === 45 || t === 60) && (e = e.slice(0, -1).trim(), s.acceptToken(wb, e.length));
}), bb = Fe({
  "DiagramName SubDiagramType": je.diagramName,
  LineComment: je.lineComment,
  IDNumber: je.number,
  "UnquotedString RelationshipStart": je.unquotedString,
  QuotedString: je.quotedString,
  PropKeyword: je.unquotedString,
  Keyword: je.keyword,
  "ForwardArrow BackArrow Hyphen": je.arrow
}), Ob = { __proto__: null, requirementDiagram: 144, requirement: 150, Requirement: 152, functionalRequirement: 154, FunctionalRequirement: 156, performanceRequirement: 158, PerformanceRequirement: 160, interfaceRequirement: 162, InterfaceRequirement: 164, physicalRequirement: 166, PhysicalRequirement: 168, designConstraint: 170, DesignConstraint: 172, element: 174, Element: 176, id: 18, Id: 20, ID: 22, text: 28, Text: 30, risk: 34, Risk: 36, low: 40, Low: 42, medium: 44, Medium: 46, high: 48, High: 50, verifymethod: 54, verifyMethod: 56, VerifyMethod: 58, analysis: 62, Analysis: 64, demonstration: 66, Demonstration: 68, inspection: 70, Inspection: 72, test: 74, Test: 76, type: 80, Type: 82, docRef: 86, DocRef: 88, contains: 96, Contains: 98, copies: 100, Copies: 102, derives: 104, Derives: 106, satisfies: 108, Satisfies: 110, verifies: 112, Verifies: 114, refines: 116, Refines: 118, traces: 120, Traces: 122 }, Td = Xt.deserialize({
  version: 14,
  states: ")`OYQQOOO_QQO'#DtQOQQOOOOQO'#C`'#C`O!kQRO,5:`O!rOSO'#CcOOQO'#Ef'#EfO!zQQO'#DZO#SQRO'#DnO$^QRO1G/zOOQO'#Ca'#CaO$eQWO'#DxOOOO'#Do'#DoO$mOSO,58}OOQP,58},58}O$uQQO,59uO$uQQO,59uOOQP,5:Y,5:YOOQP-E7l-E7lOOQP'#Cb'#CbOOQP'#Eg'#EgO%sQQO,5:dOOOO-E7m-E7mOOQP1G.i1G.iO%xQQO1G/aOOQO'#D]'#D]O%}QQO1G/aO&SQQO1G0OO$eQWO7+${O'VQQO7+%jOOQP<<Hg<<HgO'^QQO'#E_O'cQQO'#EbO'hQQO'#EcO'mQQO'#E^OOQO'#Dp'#DpO(qQQO<<IUOOQO'#Cd'#CdOOQO'#Ci'#CiOOQO'#Cl'#ClOOQO'#Cv'#CvOOQO'#DT'#DTOOQO'#DW'#DWO(xQQO'#EaO(}QQO'#EdO)SQQO'#EeOOQP<<IU<<IUO)XQQO,5:yO)^QQO,5:|O)rQQO,5:}OOQO,5:x,5:xOOQO-E7n-E7nOOQPAN>pAN>pO$eQWO,5:{O$eQWO,5;OO$eQWO,5;POOQO1G0e1G0eOOQO1G0h1G0hOOQO'#Co'#CoOOQO1G0i1G0iOOQO'#Cz'#CzOOQO1G0g1G0gOOQO1G0j1G0jOOQO1G0k1G0k",
  stateData: "*e~O!gOSQOS~O!jRO~O!kSO!e!hX~OPUO!mYO!nYO!oYO!pYO!qYO!rYO!sYO!tYO!uYO!vYO!wYO!xYO!yYO!zYO!|TO~O!e!ha~PgO!|^O!}[O~O!O_O!a`O~O!kaOP!bX!e!bX!m!bX!n!bX!o!bX!p!bX!q!bX!r!bX!s!bX!t!bX!u!bX!v!bX!w!bX!x!bX!y!bX!z!bX!|!bX~O!e!hi~PgO!{cO!|TO~O!|gO!}[O~O!QiO!RiO!SiO!TiO!UiO!ViO!WiO!XiO!YiO!ZiO![iO!]iO!^iO!_iO~O#OkO~O!`lO~O!OlO~O!kmO~OXuOYuOZuO^vO_vOawObwOkxOlxOmxOxyOyyO{zO|zO~O#P!OO~P&XO#S!PO~O#S!QO~O#S!RO~O!k!SOX#QXY#QXZ#QX^#QX_#QXa#QXb#QXk#QXl#QXm#QXx#QXy#QX{#QX|#QX#P#QX~O#P!UO~P&XO#S!VO~O#S!WO~O#S!XO~O[!YO~Od![Oe![Of![Og![Oh![Oi![O~Oo!^Op!^Oq!^Or!^Os!^Ot!^Ou!^Ov!^O~O!k!a!g!`!O!`~",
  goto: "%r#[PPPP#]#`#d#k#vPPPP#zPP$OPP$SPPPPPP$VPPP$ZPPPPPPPP$^PP$bPP$fP$jPPPPPPPPPPPPPPPP$p$v$|PPP%SPPP$fPPPPPPPPPPPPPPPPPPP%V%ZP%Z%Z%Z%Z%Z%_%cRPOTZSXZdZl!V!W!XSUSXZdZl!V!W!XTomtT{mtTpmtR!Z!QTqmtR!]!RT|mtT}mtTWSXQh_Rj`QXSRbXQ]TRf]QtmR!TtRQOTsmtTrmtTVSXQeZQnlQ!_!VQ!`!WR!a!X",
  nodeNames: "⚠ RelationshipStart LineComment RequirementDiagram DiagramName SubDiagramType UnquotedString QuotedString ID PropKeyword PropKeyword PropKeyword IDNumber Text PropKeyword PropKeyword Risk PropKeyword PropKeyword RiskType Keyword Keyword Keyword Keyword Keyword Keyword VerifyMethod PropKeyword PropKeyword PropKeyword VerifyMethodType Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Type PropKeyword PropKeyword DocRef PropKeyword PropKeyword RelationshipLine Hyphen RelationshipType Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword Keyword ForwardArrow BackArrow",
  maxTerm: 103,
  propSources: [bb],
  skippedNodes: [0, 2],
  repeatNodeCount: 3,
  tokenData: "1g~R{OX#xXY$aYZ&SZ^$a^p#xpq$aqr#xrs'}su#xuv(Sv}#x}!O)v!O!Q#x!Q![*t![!]+|!]!^#x!^!_,a!_!c#x!c!}-]!}#T#x#T#o-]#o#p0o#p#q#x#q#r1S#r#y#x#y#z$a#z$f#x$f$g$a$g#BY#x#BY#BZ$a#BZ$IS#x$IS$I_$a$I_$I|#x$I|$JO$a$JO$JT#x$JT$JU$a$JU$KV#x$KV$KW$a$KW&FU#x&FU&FV$a&FV;'S#x;'S;=`$Z<%lO#xQ#}S!}QOr#xs;'S#x;'S;=`$Z<%lO#xQ$^P;=`<%l#xV$hh!}Q!gTOX#xX^$a^p#xpq$aqr#xs#y#x#y#z$a#z$f#x$f$g$a$g#BY#x#BY#BZ$a#BZ$IS#x$IS$I_$a$I_$I|#x$I|$JO$a$JO$JT#x$JT$JU$a$JU$KV#x$KV$KW$a$KW&FU#x&FU&FV$a&FV;'S#x;'S;=`$Z<%lO#xV&]j!}Q!kP!gTOX#xXY$aYZ&SZ^$a^p#xpq$aqr#xs#y#x#y#z$a#z$f#x$f$g$a$g#BY#x#BY#BZ$a#BZ$IS#x$IS$I_$a$I_$I|#x$I|$JO$a$JO$JT#x$JT$JU$a$JU$KV#x$KV$KW$a$KW&FU#x&FU&FV$a&FV;'S#x;'S;=`$Z<%lO#x~(SO!|~V(XU!}QOr#xsu#xuv(kv;'S#x;'S;=`$Z<%lO#xV(rVQT!}QOY(kYZ#xZr(krs)Xs;'S(k;'S;=`)p<%lO(kT)^SQTOY)XZ;'S)X;'S;=`)j<%lO)XT)mP;=`<%l)XV)sP;=`<%l(kR)}U!}Q!OPOr#xs!`#x!`!a*a!a;'S#x;'S;=`$Z<%lO#xR*hS!}Q!`POr#xs;'S#x;'S;=`$Z<%lO#xR*{W[P!}QOr#xs!O#x!O!P+e!P!Q#x!Q![*t![;'S#x;'S;=`$Z<%lO#xR+jU!}QOr#xs!Q#x!Q![*t![;'S#x;'S;=`$Z<%lO#xR,TS#SP!}QOr#xs;'S#x;'S;=`$Z<%lO#xR,fU!}QOr#xs}#x}!O,x!O;'S#x;'S;=`$Z<%lO#xR-PS!}Q!aPOr#xs;'S#x;'S;=`$Z<%lO#xV-fb!}Q!{S!iPOY.nYZ#xZ].n]^#x^r.nrs/ts}.n}!O#x!O!^.n!^!a#x!a!c.n!c!}-]!}#T.n#T#o-]#o#p#x#p;'S.n;'S;=`0i<%lO.nU.u_!}Q!{SOY.nYZ#xZ].n]^#x^r.nrs/ts}.n}!O#x!O!^.n!^!a#x!a#o.n#o#p#x#p;'S.n;'S;=`0i<%lO.nS/yW!{SOY/tZ]/t^}/t!O!^/t!a#o/t#p;'S/t;'S;=`0c<%lO/tS0fP;=`<%l/tU0lP;=`<%l.nR0vS#OP!}QOr#xs;'S#x;'S;=`$Z<%lO#xR1ZS#PP!}QOr#xs;'S#x;'S;=`$Z<%lO#x",
  tokenizers: [yb, 0, 1, 2],
  topRules: { RequirementDiagram: [0, 3] },
  specialized: [{ term: 71, get: (s) => Ob[s] || -1 }],
  tokenPrec: 428
}), xb = 1, kb = 2, Sb = 3, vb = 4, Cb = 5, Db = 6, Rb = 7, Tb = 8, Hb = 9, Eb = 17, Hd = {
  axisFormat: xb,
  dateFormat: kb,
  excludes: Sb,
  inclusiveEndDates: vb,
  section: Hb,
  tickInterval: Cb,
  title: Db,
  todayMarker: Rb,
  weekday: Tb
}, jb = Object.keys(Hd), Pb = new $t((s) => {
  if (s.next === 32 || s.next === 10 || s.next === -1 || s.next === 37 && s.peek(1) === 37)
    return;
  let t = "";
  for (; s.next !== 10 && s.next !== -1; )
    t += String.fromCodePoint(s.next), s.advance();
  const e = jb.filter((i) => i === t ? t.startsWith(i) : t.startsWith(i + " "));
  if (e.length > 0) {
    s.acceptToken(Hd[e[0]], e[0].length - t.length);
    return;
  }
  s.acceptToken(Eb);
}), Nb = Fe({
  "DiagramName Section": gn.diagramName,
  Keyword: gn.keyword,
  ImportantText: gn.string,
  LineComment: gn.lineComment
}), Yb = { __proto__: null, gantt: 44 }, Ed = Xt.deserialize({
  version: 14,
  states: "!|OVQQOOO[QQO'#CpQOQQOOOOQO'#Cg'#CgO!XQRO,59[OOQP'#Ci'#CiO!`QRO'#CtO!SQRO'#CtOOQP'#Ct'#CtO!eQRO'#CkO#`QRO1G.vOOQP'#Ch'#ChOOQP,59`,59`OOQP,59V,59VOOQP-E6i-E6i",
  stateData: "#j~OcOS~OfRO~OgSO`dX~OPVOQVORVOSWOTVOUUOVVOWVOXUO^WOaTO~O`da~PdOaZO~Og]OP_XQ_XR_XS_XT_XU_XV_XW_XX_X^_X`_Xa_X~O`di~PdOgc~",
  goto: "!UiPPPPPPPPPPPjmpPwPPPP}PPP!QRPOR[USWSYR[VQYSR^YRQOTXSY",
  nodeNames: "⚠ AxisFormat DateFormat Excludes InclusiveEndDates TickInterval Title TodayMarker Weekday Section GanttDiagram DiagramName ImportantText Text LineComment",
  maxTerm: 24,
  nodeProps: [
    ["group", -8, 1, 2, 3, 4, 5, 6, 7, 8, "Keyword"]
  ],
  propSources: [Nb],
  skippedNodes: [0],
  repeatNodeCount: 1,
  tokenData: "$l~R_XY!QYZ!uZ^!Qpq!Quv#r!c!}$a#T#o$a#y#z!Q$f$g!Q#BY#BZ!Q$IS$I_!Q$I|$JO!Q$JT$JU!Q$KV$KW!Q&FU&FV!Q~!VYc~X^!Qpq!Q#y#z!Q$f$g!Q#BY#BZ!Q$IS$I_!Q$I|$JO!Q$JT$JU!Q$KV$KW!Q&FU&FV!Q~!|[g~c~XY!QYZ!uZ^!Qpq!Q#y#z!Q$f$g!Q#BY#BZ!Q$IS$I_!Q$I|$JO!Q$JT$JU!Q$KV$KW!Q&FU&FV!Q~#uPuv#x~#}S^~OY#xZ;'S#x;'S;=`$Z<%lO#x~$^P;=`<%l#x~$fQe~!c!}$a#T#o$a",
  tokenizers: [Pb, 0],
  topRules: { GanttDiagram: [0, 10] },
  specialized: [{ term: 21, get: (s) => Yb[s] || -1 }],
  tokenPrec: 115
});
var be;
(function(s) {
  s.Mermaid = "MermaidDiagram", s.Mindmap = "MindmapDiagram", s.Pie = "PieDiagram", s.Flowchart = "FlowchartDiagram", s.Sequence = "SequenceDiagram", s.Journey = "JourneyDiagram", s.Requirement = "RequirementDiagram", s.Gantt = "GanttDiagram";
})(be || (be = {}));
var pe;
(function(s) {
  s.Mermaid = "mermaid", s.Mindmap = "mindmap", s.Pie = "pie", s.Flowchart = "flowchart", s.Sequence = "sequenceDiagram", s.Journey = "journey", s.Requirement = "requirementDiagram", s.Gantt = "gantt";
})(pe || (pe = {}));
var me;
(function(s) {
  s.Mermaid = "mermaid", s.Mindmap = "mindmap", s.Pie = "pie", s.Flowchart = "flowchart", s.Sequence = "sequence", s.Journey = "journey", s.Requirement = "requirement", s.Gantt = "gantt";
})(me || (me = {}));
var Ys;
(function(s) {
  s.Graph = "graph", s.Sequence = "sequence", s.Requirement = "requirement";
})(Ys || (Ys = {}));
const zb = Vt.define({
  name: me.Mermaid,
  parser: L2.configure({
    wrap: c5((s) => {
      switch (s.name) {
        case be.Mindmap:
          return { parser: yd };
        case be.Pie:
          return { parser: bd };
        case be.Flowchart:
          return { parser: kd };
        case be.Sequence:
          return { parser: Cd };
        case be.Journey:
          return { parser: Rd };
        case be.Requirement:
          return { parser: Td };
        case be.Gantt:
          return { parser: Ed };
        default:
          return null;
      }
    })
  })
}), Gb = Vt.define({
  name: me.Mindmap,
  parser: yd
}), Qb = Vt.define({
  name: me.Pie,
  parser: bd
}), Bb = Vt.define({
  name: me.Flowchart,
  parser: kd
}), Wb = Vt.define({
  name: me.Sequence,
  parser: Cd
}), Mb = Vt.define({
  name: me.Journey,
  parser: Rd
}), Ab = Vt.define({
  name: me.Requirement,
  parser: Td
}), Lb = Vt.define({
  name: me.Gantt,
  parser: Ed
});
function jd() {
  return new Ie(zb);
}
function Zb() {
  return new Ie(Gb);
}
function _b() {
  return new Ie(Qb);
}
function qb() {
  return new Ie(Bb);
}
function Fb() {
  return new Ie(Wb);
}
function Ib() {
  return new Ie(Mb);
}
function Ub() {
  return new Ie(Ab);
}
function Vb() {
  return new Ie(Lb);
}
$e.of({
  name: pe.Mermaid,
  load: async () => jd()
});
$e.of({
  name: pe.Mindmap,
  load: async () => Zb()
});
$e.of({
  name: pe.Pie,
  load: async () => _b()
});
$e.of({
  name: pe.Flowchart,
  alias: [Ys.Graph],
  load: async () => qb()
});
$e.of({
  name: pe.Sequence,
  alias: [Ys.Sequence],
  load: async () => Fb()
});
$e.of({
  name: pe.Journey,
  load: async () => Ib()
});
$e.of({
  name: pe.Requirement,
  alias: [Ys.Requirement],
  load: async () => Ub()
});
$e.of({
  name: pe.Gantt,
  load: async () => Vb()
});
function Xb(s) {
  let t;
  return {
    c() {
      t = X("div"), K(t, "class", "cm-editor-container svelte-1wj1fmo");
    },
    m(e, i) {
      Vi(e, t, i), s[5](t);
    },
    p: ue,
    i: ue,
    o: ue,
    d(e) {
      e && mi(t), s[5](null);
    }
  };
}
function Kb(s, t, e) {
  let { code: i } = t, { editable: n = !0 } = t, { theme: r = "light" } = t, o, l;
  $c(() => (e(4, l = new D({
    state: M.create({
      doc: i,
      extensions: [
        o2,
        jd(),
        D.editable.of(n),
        D.theme({
          "&": {
            fontSize: "14px",
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
            height: "100%"
          },
          ".cm-scroller": {
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace"
          }
        }),
        x2,
        D.updateListener.of((h) => {
          h.docChanged && e(1, i = h.state.doc.toString());
        })
      ]
    }),
    parent: o
  })), () => {
    l.destroy();
  }));
  function a(h) {
    Nn[h ? "unshift" : "push"](() => {
      o = h, e(0, o);
    });
  }
  return s.$$set = (h) => {
    "code" in h && e(1, i = h.code), "editable" in h && e(2, n = h.editable), "theme" in h && e(3, r = h.theme);
  }, s.$$.update = () => {
    s.$$.dirty & /*view, code*/
    18 && l && l.state.doc.toString() !== i && l.dispatch({
      changes: {
        from: 0,
        to: l.state.doc.length,
        insert: i
      }
    });
  }, [o, i, n, r, l, a];
}
class Jb extends ur {
  constructor(t) {
    super(), fr(this, t, Kb, Xb, cr, { code: 1, editable: 2, theme: 3 });
  }
}
const tO = {
  light: "default",
  dark: "dark",
  neutral: "neutral"
};
function fc(s = "light") {
  var t, e;
  (e = (t = Oo).globalReset) == null || e.call(t), Oo.initialize({
    startOnLoad: !1,
    theme: tO[s],
    securityLevel: "loose",
    flowchart: {
      useMaxWidth: !1,
      htmlLabels: !1
      // 禁用 HTML 标签，防止外部依赖
    },
    sequence: {
      showSequenceNumbers: !1
    },
    gantt: {
      fontSize: 14
    }
  });
}
async function eO(s, t) {
  try {
    const { svg: e } = await Oo.render(t, s);
    return e;
  } catch (e) {
    throw e;
  }
}
function uc(s) {
  let t, e, i, n, r;
  return {
    c() {
      t = X("div"), e = X("strong"), e.textContent = "Error:", i = _t(), n = X("pre"), r = Pn(
        /*error*/
        s[1]
      ), K(n, "class", "svelte-nfvf64"), K(t, "class", "error svelte-nfvf64");
    },
    m(o, l) {
      Vi(o, t, l), W(t, e), W(t, i), W(t, n), W(n, r);
    },
    p(o, l) {
      l & /*error*/
      2 && mc(
        r,
        /*error*/
        o[1]
      );
    },
    d(o) {
      o && mi(t);
    }
  };
}
function dc(s) {
  let t;
  return {
    c() {
      t = X("div"), K(t, "class", "svg-container svelte-nfvf64"), Ti(t, "transform", "translate(" + /*offsetX*/
      s[3] + "px, " + /*offsetY*/
      s[4] + "px) scale(" + /*scale*/
      s[2] + ")");
    },
    m(e, i) {
      Vi(e, t, i), t.innerHTML = /*svg*/
      s[0];
    },
    p(e, i) {
      i & /*svg*/
      1 && (t.innerHTML = /*svg*/
      e[0]), i & /*offsetX, offsetY, scale*/
      28 && Ti(t, "transform", "translate(" + /*offsetX*/
      e[3] + "px, " + /*offsetY*/
      e[4] + "px) scale(" + /*scale*/
      e[2] + ")");
    },
    d(e) {
      e && mi(t);
    }
  };
}
function iO(s) {
  let t, e, i, n, r, o = Math.round(
    /*scale*/
    s[2] * 100
  ) + "", l, a, h, c, f, u, d, p, m, g, w, y = (
    /*error*/
    s[1] && uc(s)
  ), b = (
    /*svg*/
    s[0] && dc(s)
  );
  return {
    c() {
      t = X("div"), e = X("div"), i = X("button"), i.textContent = "−", n = _t(), r = X("span"), l = Pn(o), a = Pn("%"), h = _t(), c = X("button"), c.textContent = "100%", f = _t(), u = X("button"), u.textContent = "+", d = _t(), y && y.c(), p = _t(), m = X("div"), b && b.c(), K(i, "title", "缩小"), K(i, "class", "svelte-nfvf64"), K(r, "class", "scale-display svelte-nfvf64"), K(c, "title", "还原"), K(c, "class", "svelte-nfvf64"), K(u, "title", "放大"), K(u, "class", "svelte-nfvf64"), K(e, "class", "zoom-controls svelte-nfvf64"), K(m, "class", "svg-wrapper svelte-nfvf64"), Pe(
        m,
        "dragging",
        /*isDragging*/
        s[5]
      ), K(t, "class", "preview-container svelte-nfvf64");
    },
    m(v, k) {
      Vi(v, t, k), W(t, e), W(e, i), W(e, n), W(e, r), W(r, l), W(r, a), W(e, h), W(e, c), W(e, f), W(e, u), W(t, d), y && y.m(t, null), W(t, p), W(t, m), b && b.m(m, null), g || (w = [
        kt(
          i,
          "click",
          /*zoomOut*/
          s[7]
        ),
        kt(
          c,
          "click",
          /*resetZoom*/
          s[8]
        ),
        kt(
          u,
          "click",
          /*zoomIn*/
          s[6]
        ),
        kt(
          m,
          "wheel",
          /*handleWheel*/
          s[9]
        ),
        kt(
          m,
          "mousedown",
          /*handleMouseDown*/
          s[10]
        ),
        kt(
          m,
          "mousemove",
          /*handleMouseMove*/
          s[11]
        ),
        kt(
          m,
          "mouseup",
          /*handleMouseUp*/
          s[12]
        ),
        kt(
          m,
          "mouseleave",
          /*handleMouseLeave*/
          s[13]
        )
      ], g = !0);
    },
    p(v, [k]) {
      k & /*scale*/
      4 && o !== (o = Math.round(
        /*scale*/
        v[2] * 100
      ) + "") && mc(l, o), /*error*/
      v[1] ? y ? y.p(v, k) : (y = uc(v), y.c(), y.m(t, p)) : y && (y.d(1), y = null), /*svg*/
      v[0] ? b ? b.p(v, k) : (b = dc(v), b.c(), b.m(m, null)) : b && (b.d(1), b = null), k & /*isDragging*/
      32 && Pe(
        m,
        "dragging",
        /*isDragging*/
        v[5]
      );
    },
    i: ue,
    o: ue,
    d(v) {
      v && mi(t), y && y.d(), b && b.d(), g = !1, pi(w);
    }
  };
}
function sO(s, t, e) {
  const i = wc();
  let { code: n } = t, { theme: r = "light" } = t, o = "", l = "", a, h = 1, c = 0, f = 0, u = !1, d = 0, p = 0;
  $c(() => {
    e(16, a = `mermaid-preview-${Math.random().toString(36).substr(2, 9)}`), fc(r), O();
  });
  function m() {
    e(2, h = Math.min(h + 0.25, 3));
  }
  function g() {
    e(2, h = Math.max(h - 0.25, 0.25));
  }
  function w() {
    e(2, h = 1), e(3, c = 0), e(4, f = 0);
  }
  function y(H) {
    H.preventDefault();
    const j = H.deltaY > 0 ? -0.1 : 0.1;
    e(2, h = Math.max(0.25, Math.min(3, h + j)));
  }
  function b(H) {
    e(5, u = !0), d = H.clientX - c, p = H.clientY - f;
  }
  function v(H) {
    u && (e(3, c = H.clientX - d), e(4, f = H.clientY - p));
  }
  function k() {
    e(5, u = !1);
  }
  function S() {
    e(5, u = !1);
  }
  async function O() {
    try {
      e(1, l = "");
      const H = n && n.trim() ? n : `graph TD
  A[Start] --> B[End]`, j = `${a}-${Date.now()}`;
      e(0, o = await eO(H, j)), i("svgChange", o);
    } catch (H) {
      e(1, l = H instanceof Error ? H.message : "Unknown error"), console.error("Mermaid 渲染错误:", H);
    }
  }
  return s.$$set = (H) => {
    "code" in H && e(14, n = H.code), "theme" in H && e(15, r = H.theme);
  }, s.$$.update = () => {
    s.$$.dirty & /*code, theme, previewId*/
    114688 && a && (fc(r), O(), e(3, c = 0), e(4, f = 0));
  }, [
    o,
    l,
    h,
    c,
    f,
    u,
    m,
    g,
    w,
    y,
    b,
    v,
    k,
    S,
    n,
    r,
    a
  ];
}
class nO extends ur {
  constructor(t) {
    super(), fr(this, t, sO, iO, cr, { code: 14, theme: 15 });
  }
}
function rO(s) {
  let t, e, i, n, r, o, l, a, h, c, f, u;
  return {
    c() {
      t = X("div"), e = X("select"), i = X("option"), i.textContent = "Light", n = X("option"), n.textContent = "Dark", r = X("option"), r.textContent = "Neutral", o = _t(), l = X("div"), a = X("button"), a.textContent = "Export PNG", h = _t(), c = X("button"), c.textContent = "Export SVG", i.__value = "light", Rr(i, i.__value), n.__value = "dark", Rr(n, n.__value), r.__value = "neutral", Rr(r, r.__value), K(e, "class", "svelte-xrqed8"), K(a, "class", "svelte-xrqed8"), K(c, "class", "svelte-xrqed8"), K(l, "class", "export-group svelte-xrqed8"), K(t, "class", "toolbar svelte-xrqed8");
    },
    m(d, p) {
      Vi(d, t, p), W(t, e), W(e, i), W(e, n), W(e, r), oa(
        e,
        /*theme*/
        s[0]
      ), W(t, o), W(t, l), W(l, a), W(l, h), W(l, c), f || (u = [
        kt(
          e,
          "change",
          /*handleThemeChange*/
          s[3]
        ),
        kt(a, "click", function() {
          jn(
            /*onExportPNG*/
            s[1]
          ) && s[1].apply(this, arguments);
        }),
        kt(c, "click", function() {
          jn(
            /*onExportSVG*/
            s[2]
          ) && s[2].apply(this, arguments);
        })
      ], f = !0);
    },
    p(d, [p]) {
      s = d, p & /*theme*/
      1 && oa(
        e,
        /*theme*/
        s[0]
      );
    },
    i: ue,
    o: ue,
    d(d) {
      d && mi(t), f = !1, pi(u);
    }
  };
}
function oO(s, t, e) {
  const i = wc();
  let { theme: n } = t, { onExportPNG: r } = t, { onExportSVG: o } = t;
  function l(a) {
    const h = a.target;
    i("themeChange", h.value);
  }
  return s.$$set = (a) => {
    "theme" in a && e(0, n = a.theme), "onExportPNG" in a && e(1, r = a.onExportPNG), "onExportSVG" in a && e(2, o = a.onExportSVG);
  }, [n, r, o, l];
}
class lO extends ur {
  constructor(t) {
    super(), fr(this, t, oO, rO, cr, { theme: 0, onExportPNG: 1, onExportSVG: 2 });
  }
}
async function Pd(s) {
  return new Promise((t, e) => {
    try {
      let i = s;
      i.includes('xmlns="http://www.w3.org/2000/svg"') || (i = i.replace(
        "<svg",
        '<svg xmlns="http://www.w3.org/2000/svg"'
      )), i = i.replace(/@font-face\s*\{[^}]*\}/g, "");
      const n = i.match(/width="([^"]+)"/), r = i.match(/height="([^"]+)"/), o = i.match(/viewBox="([^"]+)"/);
      let l = 800, a = 600;
      if (n && r)
        l = parseFloat(n[1]), a = parseFloat(r[1]);
      else if (o) {
        const m = o[1].split(/\s+/).map(Number);
        m.length === 4 && (l = m[2], a = m[3]);
      }
      console.log("SVG 尺寸:", { width: l, height: a });
      const h = 4096;
      let c = 2, f = l * c, u = a * c;
      if (f > h || u > h) {
        const m = h / l, g = h / a;
        c = Math.min(m, g, 2), f = Math.floor(l * c), u = Math.floor(a * c), console.log("调整缩放因子以适应 canvas 限制:", { scale: c, canvasWidth: f, canvasHeight: u });
      }
      const d = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(i), p = new Image();
      p.onload = () => {
        try {
          const m = document.createElement("canvas");
          m.width = f, m.height = u;
          const g = m.getContext("2d");
          g ? (g.fillStyle = "white", g.fillRect(0, 0, f, u), g.imageSmoothingEnabled = !0, g.imageSmoothingQuality = "high", g.drawImage(p, 0, 0, f, u), m.toBlob((w) => {
            w ? (console.log("PNG 导出成功，大小:", w.size), t(w)) : e(new Error("Failed to create PNG blob"));
          }, "image/png", 1)) : e(new Error("Failed to get canvas context"));
        } catch (m) {
          console.error("Canvas 处理失败:", m), e(m);
        }
      }, p.onerror = (m) => {
        console.error("SVG 加载失败:", m), e(new Error("Failed to load SVG"));
      }, p.src = d;
    } catch (i) {
      console.error("导出 PNG 异常:", i), e(i);
    }
  });
}
function Nd(s) {
  return s.includes('xmlns="http://www.w3.org/2000/svg"') ? s : s.replace(
    "<svg",
    '<svg xmlns="http://www.w3.org/2000/svg"'
  );
}
function aO(s) {
  let t, e, i, n, r, o, l, a, h, c, f, u, d, p, m;
  e = new lO({
    props: {
      theme: (
        /*theme*/
        s[0]
      ),
      onExportPNG: (
        /*handleExportPNG*/
        s[10]
      ),
      onExportSVG: (
        /*handleExportSVG*/
        s[11]
      )
    }
  }), e.$on(
    "themeChange",
    /*themeChange_handler*/
    s[17]
  );
  function g(y) {
    s[18](y);
  }
  let w = {
    editable: (
      /*editable*/
      s[2]
    ),
    theme: (
      /*theme*/
      s[0] === "dark" ? "dark" : "light"
    )
  };
  return (
    /*code*/
    s[1] !== void 0 && (w.code = /*code*/
    s[1]), o = new Jb({ props: w }), Nn.push(() => qd(o, "code", g)), u = new nO({
      props: {
        code: (
          /*code*/
          s[1]
        ),
        theme: (
          /*theme*/
          s[0]
        )
      }
    }), u.$on(
      "svgChange",
      /*svgChange_handler*/
      s[19]
    ), {
      c() {
        t = X("div"), Er(e.$$.fragment), i = _t(), n = X("div"), r = X("div"), Er(o.$$.fragment), a = _t(), h = X("div"), c = _t(), f = X("div"), Er(u.$$.fragment), K(r, "class", "editor-pane svelte-1mvdkrk"), Ti(
          r,
          "width",
          /*editorPaneWidth*/
          s[4] + "%"
        ), K(h, "class", "resizer svelte-1mvdkrk"), Pe(
          h,
          "resizing",
          /*isResizing*/
          s[3]
        ), K(f, "class", "preview-pane svelte-1mvdkrk"), Ti(f, "width", 100 - /*editorPaneWidth*/
        s[4] + "%"), K(n, "class", "editor-main svelte-1mvdkrk"), K(t, "class", "editor-root svelte-1mvdkrk"), Pe(
          t,
          "theme-dark",
          /*theme*/
          s[0] === "dark"
        ), Pe(
          t,
          "theme-neutral",
          /*theme*/
          s[0] === "neutral"
        );
      },
      m(y, b) {
        Vi(y, t, b), yn(e, t, null), W(t, i), W(t, n), W(n, r), yn(o, r, null), W(n, a), W(n, h), W(n, c), W(n, f), yn(u, f, null), d = !0, p || (m = [
          kt(
            window,
            "mousemove",
            /*handleMouseMove*/
            s[8]
          ),
          kt(
            window,
            "mouseup",
            /*handleMouseUp*/
            s[9]
          ),
          kt(
            h,
            "mousedown",
            /*handleMouseDown*/
            s[7]
          )
        ], p = !0);
      },
      p(y, [b]) {
        const v = {};
        b & /*theme*/
        1 && (v.theme = /*theme*/
        y[0]), e.$set(v);
        const k = {};
        b & /*editable*/
        4 && (k.editable = /*editable*/
        y[2]), b & /*theme*/
        1 && (k.theme = /*theme*/
        y[0] === "dark" ? "dark" : "light"), !l && b & /*code*/
        2 && (l = !0, k.code = /*code*/
        y[1], Ad(() => l = !1)), o.$set(k), (!d || b & /*editorPaneWidth*/
        16) && Ti(
          r,
          "width",
          /*editorPaneWidth*/
          y[4] + "%"
        ), (!d || b & /*isResizing*/
        8) && Pe(
          h,
          "resizing",
          /*isResizing*/
          y[3]
        );
        const S = {};
        b & /*code*/
        2 && (S.code = /*code*/
        y[1]), b & /*theme*/
        1 && (S.theme = /*theme*/
        y[0]), u.$set(S), (!d || b & /*editorPaneWidth*/
        16) && Ti(f, "width", 100 - /*editorPaneWidth*/
        y[4] + "%"), (!d || b & /*theme*/
        1) && Pe(
          t,
          "theme-dark",
          /*theme*/
          y[0] === "dark"
        ), (!d || b & /*theme*/
        1) && Pe(
          t,
          "theme-neutral",
          /*theme*/
          y[0] === "neutral"
        );
      },
      i(y) {
        d || (wn(e.$$.fragment, y), wn(o.$$.fragment, y), wn(u.$$.fragment, y), d = !0);
      },
      o(y) {
        Hr(e.$$.fragment, y), Hr(o.$$.fragment, y), Hr(u.$$.fragment, y), d = !1;
      },
      d(y) {
        y && mi(t), bn(e), bn(o), bn(u), p = !1, pi(m);
      }
    }
  );
}
function hO(s, t, e) {
  let { initialCode: i = "" } = t, { theme: n = "light" } = t, { autoRender: r = !0 } = t, { editable: o = !0 } = t, { code: l = i } = t, { svg: a = "" } = t, h = !1, c = 50;
  function f() {
    return l;
  }
  function u(O) {
    e(1, l = O);
  }
  function d(O) {
    e(0, n = O);
  }
  function p(O) {
    e(12, a = O);
  }
  function m(O) {
    e(3, h = !0), O.preventDefault();
  }
  function g(O) {
    if (h) {
      const H = document.querySelector(".editor-main");
      if (H) {
        const j = H.getBoundingClientRect(), B = (O.clientX - j.left) / j.width * 100;
        e(4, c = Math.max(20, Math.min(80, B)));
      }
    }
  }
  function w() {
    e(3, h = !1);
  }
  async function y() {
    if (console.log("handleExportPNG 被调用"), console.log("svg 是否存在:", !!a), a) {
      console.log("svg 长度:", a.length);
      try {
        console.log("开始调用 exportPNG...");
        const O = await Pd(a);
        console.log("得到 blob:", O);
        const H = URL.createObjectURL(O), j = document.createElement("a");
        j.href = H, j.download = "diagram.png", j.click(), URL.revokeObjectURL(H);
      } catch (O) {
        console.error("导出 PNG 失败:", O);
      }
    }
  }
  function b() {
    if (a)
      try {
        const O = Nd(a), H = new Blob([O], { type: "image/svg+xml" }), j = URL.createObjectURL(H), B = document.createElement("a");
        B.href = j, B.download = "diagram.svg", B.click(), URL.revokeObjectURL(j);
      } catch (O) {
        console.error("导出 SVG 失败:", O);
      }
  }
  const v = (O) => d(O.detail);
  function k(O) {
    l = O, e(1, l);
  }
  const S = (O) => p(O.detail);
  return s.$$set = (O) => {
    "initialCode" in O && e(13, i = O.initialCode), "theme" in O && e(0, n = O.theme), "autoRender" in O && e(14, r = O.autoRender), "editable" in O && e(2, o = O.editable), "code" in O && e(1, l = O.code), "svg" in O && e(12, a = O.svg);
  }, [
    n,
    l,
    o,
    h,
    c,
    d,
    p,
    m,
    g,
    w,
    y,
    b,
    a,
    i,
    r,
    f,
    u,
    v,
    k,
    S
  ];
}
class cO extends ur {
  constructor(t) {
    super(), fr(this, t, hO, aO, cr, {
      initialCode: 13,
      theme: 0,
      autoRender: 14,
      editable: 2,
      code: 1,
      svg: 12,
      getCode: 15,
      setCode: 16
    });
  }
  get getCode() {
    return this.$$.ctx[15];
  }
  get setCode() {
    return this.$$.ctx[16];
  }
}
class gO {
  constructor(t) {
    ts(this, "config");
    ts(this, "component");
    this.config = {
      initialCode: "",
      theme: "light",
      autoRender: !0,
      editable: !0,
      ...t
    };
  }
  init() {
    this.component = new cO({
      target: this.config.container,
      props: {
        initialCode: this.config.initialCode,
        theme: this.config.theme,
        autoRender: this.config.autoRender,
        editable: this.config.editable
      }
    });
  }
  getCode() {
    var t;
    return ((t = this.component) == null ? void 0 : t.getCode()) || "";
  }
  setCode(t) {
    this.component && this.component.setCode(t);
  }
  setTheme(t) {
    this.component && this.component.$set({ theme: t });
  }
  async exportPNG() {
    if (!this.component)
      throw new Error("Editor not initialized");
    const t = this.component.svg;
    if (!t)
      throw new Error("No SVG content");
    return Pd(t);
  }
  async exportSVG() {
    if (!this.component)
      throw new Error("Editor not initialized");
    const t = this.component.svg;
    if (!t)
      throw new Error("No SVG content");
    return Nd(t);
  }
  destroy() {
    var t;
    (t = this.component) == null || t.$destroy();
  }
}
export {
  cO as Editor,
  gO as MermaidEditor
};
