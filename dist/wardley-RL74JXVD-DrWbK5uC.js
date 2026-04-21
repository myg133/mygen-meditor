var Fp = Object.defineProperty;
var Gp = (t, e, r) => e in t ? Fp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Qt = (t, e, r) => Gp(t, typeof e != "symbol" ? e + "" : e, r);
import { m as Ft, f as jp, d as zp } from "./min-YjuzaSlk.js";
import { b as Up, l as Bp, c as Wp, m as Kp, r as Xc, n as ro } from "./_baseUniq-5vmkzwto.js";
import { bc as Vp, aJ as at, bF as qp } from "./index-DWbaqf43.js";
function Hp(t, e) {
  return Up(Ft(t, e));
}
function Xp(t, e) {
  return t && t.length ? Bp(t, Wp(e)) : [];
}
function je(t) {
  return typeof t == "object" && t !== null && typeof t.$type == "string";
}
function pt(t) {
  return typeof t == "object" && t !== null && typeof t.$refText == "string" && "ref" in t;
}
function tr(t) {
  return typeof t == "object" && t !== null && typeof t.$refText == "string" && "items" in t;
}
function Yp(t) {
  return typeof t == "object" && t !== null && typeof t.name == "string" && typeof t.type == "string" && typeof t.path == "string";
}
function li(t) {
  return typeof t == "object" && t !== null && typeof t.info == "object" && typeof t.message == "string";
}
class kd {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  getAllTypes() {
    return Object.keys(this.types);
  }
  getReferenceType(e) {
    var i;
    const r = this.types[e.container.$type];
    if (!r)
      throw new Error(`Type ${e.container.$type || "undefined"} not found.`);
    const n = (i = r.properties[e.property]) == null ? void 0 : i.referenceType;
    if (!n)
      throw new Error(`Property ${e.property || "undefined"} of type ${e.container.$type} is not a reference.`);
    return n;
  }
  getTypeMetaData(e) {
    const r = this.types[e];
    return r || {
      name: e,
      properties: {},
      superTypes: []
    };
  }
  isInstance(e, r) {
    return je(e) && this.isSubtype(e.$type, r);
  }
  isSubtype(e, r) {
    if (e === r)
      return !0;
    let n = this.subtypes[e];
    n || (n = this.subtypes[e] = {});
    const i = n[r];
    if (i !== void 0)
      return i;
    {
      const a = this.types[e], s = a ? a.superTypes.some((o) => this.isSubtype(o, r)) : !1;
      return n[r] = s, s;
    }
  }
  getAllSubTypes(e) {
    const r = this.allSubtypes[e];
    if (r)
      return r;
    {
      const n = this.getAllTypes(), i = [];
      for (const a of n)
        this.isSubtype(a, e) && i.push(a);
      return this.allSubtypes[e] = i, i;
    }
  }
}
function Pi(t) {
  return typeof t == "object" && t !== null && Array.isArray(t.content);
}
function Nd(t) {
  return typeof t == "object" && t !== null && typeof t.tokenType == "object";
}
function _d(t) {
  return Pi(t) && typeof t.fullText == "string";
}
class xe {
  constructor(e, r) {
    this.startFn = e, this.nextFn = r;
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      [Symbol.iterator]: () => e
    };
    return e;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    return !!this.iterator().next().done;
  }
  count() {
    const e = this.iterator();
    let r = 0, n = e.next();
    for (; !n.done; )
      r++, n = e.next();
    return r;
  }
  toArray() {
    const e = [], r = this.iterator();
    let n;
    do
      n = r.next(), n.value !== void 0 && e.push(n.value);
    while (!n.done);
    return e;
  }
  toSet() {
    return new Set(this);
  }
  toMap(e, r) {
    const n = this.map((i) => [
      e ? e(i) : i,
      r ? r(i) : i
    ]);
    return new Map(n);
  }
  toString() {
    return this.join();
  }
  concat(e) {
    return new xe(() => ({ first: this.startFn(), firstDone: !1, iterator: e[Symbol.iterator]() }), (r) => {
      let n;
      if (!r.firstDone) {
        do
          if (n = this.nextFn(r.first), !n.done)
            return n;
        while (!n.done);
        r.firstDone = !0;
      }
      do
        if (n = r.iterator.next(), !n.done)
          return n;
      while (!n.done);
      return Qe;
    });
  }
  join(e = ",") {
    const r = this.iterator();
    let n = "", i, a = !1;
    do
      i = r.next(), i.done || (a && (n += e), n += Jp(i.value)), a = !0;
    while (!i.done);
    return n;
  }
  indexOf(e, r = 0) {
    const n = this.iterator();
    let i = 0, a = n.next();
    for (; !a.done; ) {
      if (i >= r && a.value === e)
        return i;
      a = n.next(), i++;
    }
    return -1;
  }
  every(e) {
    const r = this.iterator();
    let n = r.next();
    for (; !n.done; ) {
      if (!e(n.value))
        return !1;
      n = r.next();
    }
    return !0;
  }
  some(e) {
    const r = this.iterator();
    let n = r.next();
    for (; !n.done; ) {
      if (e(n.value))
        return !0;
      n = r.next();
    }
    return !1;
  }
  forEach(e) {
    const r = this.iterator();
    let n = 0, i = r.next();
    for (; !i.done; )
      e(i.value, n), i = r.next(), n++;
  }
  map(e) {
    return new xe(this.startFn, (r) => {
      const { done: n, value: i } = this.nextFn(r);
      return n ? Qe : { done: !1, value: e(i) };
    });
  }
  filter(e) {
    return new xe(this.startFn, (r) => {
      let n;
      do
        if (n = this.nextFn(r), !n.done && e(n.value))
          return n;
      while (!n.done);
      return Qe;
    });
  }
  nonNullable() {
    return this.filter((e) => e != null);
  }
  reduce(e, r) {
    const n = this.iterator();
    let i = r, a = n.next();
    for (; !a.done; )
      i === void 0 ? i = a.value : i = e(i, a.value), a = n.next();
    return i;
  }
  reduceRight(e, r) {
    return this.recursiveReduce(this.iterator(), e, r);
  }
  recursiveReduce(e, r, n) {
    const i = e.next();
    if (i.done)
      return n;
    const a = this.recursiveReduce(e, r, n);
    return a === void 0 ? i.value : r(a, i.value);
  }
  find(e) {
    const r = this.iterator();
    let n = r.next();
    for (; !n.done; ) {
      if (e(n.value))
        return n.value;
      n = r.next();
    }
  }
  findIndex(e) {
    const r = this.iterator();
    let n = 0, i = r.next();
    for (; !i.done; ) {
      if (e(i.value))
        return n;
      i = r.next(), n++;
    }
    return -1;
  }
  includes(e) {
    const r = this.iterator();
    let n = r.next();
    for (; !n.done; ) {
      if (n.value === e)
        return !0;
      n = r.next();
    }
    return !1;
  }
  flatMap(e) {
    return new xe(() => ({ this: this.startFn() }), (r) => {
      do {
        if (r.iterator) {
          const a = r.iterator.next();
          if (a.done)
            r.iterator = void 0;
          else
            return a;
        }
        const { done: n, value: i } = this.nextFn(r.this);
        if (!n) {
          const a = e(i);
          if (Qa(a))
            r.iterator = a[Symbol.iterator]();
          else
            return { done: !1, value: a };
        }
      } while (r.iterator);
      return Qe;
    });
  }
  flat(e) {
    if (e === void 0 && (e = 1), e <= 0)
      return this;
    const r = e > 1 ? this.flat(e - 1) : this;
    return new xe(() => ({ this: r.startFn() }), (n) => {
      do {
        if (n.iterator) {
          const s = n.iterator.next();
          if (s.done)
            n.iterator = void 0;
          else
            return s;
        }
        const { done: i, value: a } = r.nextFn(n.this);
        if (!i)
          if (Qa(a))
            n.iterator = a[Symbol.iterator]();
          else
            return { done: !1, value: a };
      } while (n.iterator);
      return Qe;
    });
  }
  head() {
    const r = this.iterator().next();
    if (!r.done)
      return r.value;
  }
  tail(e = 1) {
    return new xe(() => {
      const r = this.startFn();
      for (let n = 0; n < e; n++)
        if (this.nextFn(r).done)
          return r;
      return r;
    }, this.nextFn);
  }
  limit(e) {
    return new xe(() => ({ size: 0, state: this.startFn() }), (r) => (r.size++, r.size > e ? Qe : this.nextFn(r.state)));
  }
  distinct(e) {
    return new xe(() => ({ set: /* @__PURE__ */ new Set(), internalState: this.startFn() }), (r) => {
      let n;
      do
        if (n = this.nextFn(r.internalState), !n.done) {
          const i = e ? e(n.value) : n.value;
          if (!r.set.has(i))
            return r.set.add(i), n;
        }
      while (!n.done);
      return Qe;
    });
  }
  exclude(e, r) {
    const n = /* @__PURE__ */ new Set();
    for (const i of e) {
      const a = r ? r(i) : i;
      n.add(a);
    }
    return this.filter((i) => {
      const a = r ? r(i) : i;
      return !n.has(a);
    });
  }
}
function Jp(t) {
  return typeof t == "string" ? t : typeof t > "u" ? "undefined" : typeof t.toString == "function" ? t.toString() : Object.prototype.toString.call(t);
}
function Qa(t) {
  return !!t && typeof t[Symbol.iterator] == "function";
}
const Id = new xe(() => {
}, () => Qe), Qe = Object.freeze({ done: !0, value: void 0 });
function ce(...t) {
  if (t.length === 1) {
    const e = t[0];
    if (e instanceof xe)
      return e;
    if (Qa(e))
      return new xe(() => e[Symbol.iterator](), (r) => r.next());
    if (typeof e.length == "number")
      return new xe(() => ({ index: 0 }), (r) => r.index < e.length ? { done: !1, value: e[r.index++] } : Qe);
  }
  return t.length > 1 ? new xe(() => ({ collIndex: 0, arrIndex: 0 }), (e) => {
    do {
      if (e.iterator) {
        const r = e.iterator.next();
        if (!r.done)
          return r;
        e.iterator = void 0;
      }
      if (e.array) {
        if (e.arrIndex < e.array.length)
          return { done: !1, value: e.array[e.arrIndex++] };
        e.array = void 0, e.arrIndex = 0;
      }
      if (e.collIndex < t.length) {
        const r = t[e.collIndex++];
        Qa(r) ? e.iterator = r[Symbol.iterator]() : r && typeof r.length == "number" && (e.array = r);
      }
    } while (e.iterator || e.array || e.collIndex < t.length);
    return Qe;
  }) : Id;
}
class Cc extends xe {
  constructor(e, r, n) {
    super(() => ({
      iterators: n != null && n.includeRoot ? [[e][Symbol.iterator]()] : [r(e)[Symbol.iterator]()],
      pruned: !1
    }), (i) => {
      for (i.pruned && (i.iterators.pop(), i.pruned = !1); i.iterators.length > 0; ) {
        const s = i.iterators[i.iterators.length - 1].next();
        if (s.done)
          i.iterators.pop();
        else
          return i.iterators.push(r(s.value)[Symbol.iterator]()), s;
      }
      return Qe;
    });
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      prune: () => {
        e.state.pruned = !0;
      },
      [Symbol.iterator]: () => e
    };
    return e;
  }
}
var _o;
(function(t) {
  function e(a) {
    return a.reduce((s, o) => s + o, 0);
  }
  t.sum = e;
  function r(a) {
    return a.reduce((s, o) => s * o, 0);
  }
  t.product = r;
  function n(a) {
    return a.reduce((s, o) => Math.min(s, o));
  }
  t.min = n;
  function i(a) {
    return a.reduce((s, o) => Math.max(s, o));
  }
  t.max = i;
})(_o || (_o = {}));
function Io(t, e = {}) {
  for (const [r, n] of Object.entries(t))
    r.startsWith("$") || (Array.isArray(n) ? n.forEach((i, a) => {
      je(i) && (i.$container = t, i.$containerProperty = r, i.$containerIndex = a, e.deep && Io(i, e));
    }) : je(n) && (n.$container = t, n.$containerProperty = r, e.deep && Io(n, e)));
}
function Ns(t, e) {
  let r = t;
  for (; r; ) {
    if (e(r))
      return r;
    r = r.$container;
  }
}
function Gt(t) {
  const r = Fa(t).$document;
  if (!r)
    throw new Error("AST node has no document.");
  return r;
}
function Fa(t) {
  for (; t.$container; )
    t = t.$container;
  return t;
}
function Yc(t) {
  return pt(t) ? t.ref ? [t.ref] : [] : tr(t) ? t.items.map((e) => e.ref) : [];
}
function Sc(t, e) {
  if (!t)
    throw new Error("Node must be an AstNode.");
  const r = e == null ? void 0 : e.range;
  return new xe(() => ({
    keys: Object.keys(t),
    keyIndex: 0,
    arrayIndex: 0
  }), (n) => {
    for (; n.keyIndex < n.keys.length; ) {
      const i = n.keys[n.keyIndex];
      if (!i.startsWith("$")) {
        const a = t[i];
        if (je(a)) {
          if (n.keyIndex++, Jc(a, r))
            return { done: !1, value: a };
        } else if (Array.isArray(a)) {
          for (; n.arrayIndex < a.length; ) {
            const s = n.arrayIndex++, o = a[s];
            if (je(o) && Jc(o, r))
              return { done: !1, value: o };
          }
          n.arrayIndex = 0;
        }
      }
      n.keyIndex++;
    }
    return Qe;
  });
}
function qi(t, e) {
  if (!t)
    throw new Error("Root node must be an AstNode.");
  return new Cc(t, (r) => Sc(r, e));
}
function jt(t, e) {
  if (!t)
    throw new Error("Root node must be an AstNode.");
  return new Cc(t, (r) => Sc(r, e), { includeRoot: !0 });
}
function Jc(t, e) {
  var n;
  if (!e)
    return !0;
  const r = (n = t.$cstNode) == null ? void 0 : n.range;
  return r ? vm(r, e) : !1;
}
function es(t) {
  return new xe(() => ({
    keys: Object.keys(t),
    keyIndex: 0,
    arrayIndex: 0
  }), (e) => {
    for (; e.keyIndex < e.keys.length; ) {
      const r = e.keys[e.keyIndex];
      if (!r.startsWith("$")) {
        const n = t[r];
        if (pt(n) || tr(n))
          return e.keyIndex++, { done: !1, value: { reference: n, container: t, property: r } };
        if (Array.isArray(n)) {
          for (; e.arrayIndex < n.length; ) {
            const i = e.arrayIndex++, a = n[i];
            if (pt(a) || tr(n))
              return { done: !1, value: { reference: a, container: t, property: r, index: i } };
          }
          e.arrayIndex = 0;
        }
      }
      e.keyIndex++;
    }
    return Qe;
  });
}
function Zp(t, e) {
  const r = t.getTypeMetaData(e.$type), n = e;
  for (const i of Object.values(r.properties))
    i.defaultValue !== void 0 && n[i.name] === void 0 && (n[i.name] = Pd(i.defaultValue));
}
function Pd(t) {
  return Array.isArray(t) ? [...t.map(Pd)] : t;
}
const Ze = {
  $type: "AbstractElement",
  cardinality: "cardinality"
};
function Qp(t) {
  return Y.isInstance(t, Ze.$type);
}
const Ga = {
  $type: "AbstractParserRule"
};
function Hi(t) {
  return Y.isInstance(t, Ga.$type);
}
const va = {
  $type: "AbstractRule"
}, ft = {
  $type: "AbstractType"
}, vr = {
  $type: "Action",
  cardinality: "cardinality",
  feature: "feature",
  inferredType: "inferredType",
  operator: "operator",
  type: "type"
};
function _s(t) {
  return Y.isInstance(t, vr.$type);
}
const ja = {
  $type: "Alternatives",
  cardinality: "cardinality",
  elements: "elements"
};
function Od(t) {
  return Y.isInstance(t, ja.$type);
}
const Zc = {
  $type: "ArrayLiteral",
  elements: "elements"
}, Qc = {
  $type: "ArrayType",
  elementType: "elementType"
}, Er = {
  $type: "Assignment",
  cardinality: "cardinality",
  feature: "feature",
  operator: "operator",
  predicate: "predicate",
  terminal: "terminal"
};
function Nr(t) {
  return Y.isInstance(t, Er.$type);
}
const Po = {
  $type: "BooleanLiteral",
  true: "true"
};
function em(t) {
  return Y.isInstance(t, Po.$type);
}
const $r = {
  $type: "CharacterRange",
  cardinality: "cardinality",
  left: "left",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  right: "right"
};
function tm(t) {
  return Y.isInstance(t, $r.$type);
}
const Gr = {
  $type: "Condition"
}, za = {
  $type: "Conjunction",
  left: "left",
  right: "right"
};
function rm(t) {
  return Y.isInstance(t, za.$type);
}
const Ar = {
  $type: "CrossReference",
  cardinality: "cardinality",
  deprecatedSyntax: "deprecatedSyntax",
  isMulti: "isMulti",
  terminal: "terminal",
  type: "type"
};
function Is(t) {
  return Y.isInstance(t, Ar.$type);
}
const Ua = {
  $type: "Disjunction",
  left: "left",
  right: "right"
};
function nm(t) {
  return Y.isInstance(t, Ua.$type);
}
const Oo = {
  $type: "EndOfFile",
  cardinality: "cardinality"
};
function im(t) {
  return Y.isInstance(t, Oo.$type);
}
const gr = {
  $type: "Grammar",
  imports: "imports",
  interfaces: "interfaces",
  isDeclared: "isDeclared",
  name: "name",
  rules: "rules",
  types: "types"
}, eu = {
  $type: "GrammarImport",
  path: "path"
}, Kr = {
  $type: "Group",
  cardinality: "cardinality",
  elements: "elements",
  guardCondition: "guardCondition",
  predicate: "predicate"
};
function wc(t) {
  return Y.isInstance(t, Kr.$type);
}
const Lo = {
  $type: "InferredType",
  name: "name"
};
function Ld(t) {
  return Y.isInstance(t, Lo.$type);
}
const Ot = {
  $type: "InfixRule",
  call: "call",
  dataType: "dataType",
  inferredType: "inferredType",
  name: "name",
  operators: "operators",
  parameters: "parameters",
  returnType: "returnType"
};
function ts(t) {
  return Y.isInstance(t, Ot.$type);
}
const no = {
  $type: "InfixRuleOperatorList",
  associativity: "associativity",
  operators: "operators"
}, tu = {
  $type: "InfixRuleOperators",
  precedences: "precedences"
}, vi = {
  $type: "Interface",
  attributes: "attributes",
  name: "name",
  superTypes: "superTypes"
};
function am(t) {
  return Y.isInstance(t, vi.$type);
}
const Ei = {
  $type: "Keyword",
  cardinality: "cardinality",
  predicate: "predicate",
  value: "value"
};
function _r(t) {
  return Y.isInstance(t, Ei.$type);
}
const Ea = {
  $type: "NamedArgument",
  calledByName: "calledByName",
  parameter: "parameter",
  value: "value"
}, Vr = {
  $type: "NegatedToken",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  terminal: "terminal"
};
function sm(t) {
  return Y.isInstance(t, Vr.$type);
}
const xo = {
  $type: "Negation",
  value: "value"
};
function om(t) {
  return Y.isInstance(t, xo.$type);
}
const ru = {
  $type: "NumberLiteral",
  value: "value"
}, $a = {
  $type: "Parameter",
  name: "name"
}, Do = {
  $type: "ParameterReference",
  parameter: "parameter"
};
function lm(t) {
  return Y.isInstance(t, Do.$type);
}
const Rt = {
  $type: "ParserRule",
  dataType: "dataType",
  definition: "definition",
  entry: "entry",
  fragment: "fragment",
  inferredType: "inferredType",
  name: "name",
  parameters: "parameters",
  returnType: "returnType"
};
function Kt(t) {
  return Y.isInstance(t, Rt.$type);
}
const io = {
  $type: "ReferenceType",
  isMulti: "isMulti",
  referenceType: "referenceType"
}, qr = {
  $type: "RegexToken",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  regex: "regex"
};
function cm(t) {
  return Y.isInstance(t, qr.$type);
}
const Mo = {
  $type: "ReturnType",
  name: "name"
};
function um(t) {
  return Y.isInstance(t, Mo.$type);
}
const Hr = {
  $type: "RuleCall",
  arguments: "arguments",
  cardinality: "cardinality",
  predicate: "predicate",
  rule: "rule"
};
function Ir(t) {
  return Y.isInstance(t, Hr.$type);
}
const $i = {
  $type: "SimpleType",
  primitiveType: "primitiveType",
  stringType: "stringType",
  typeRef: "typeRef"
};
function fm(t) {
  return Y.isInstance(t, $i.$type);
}
const nu = {
  $type: "StringLiteral",
  value: "value"
}, Xr = {
  $type: "TerminalAlternatives",
  cardinality: "cardinality",
  elements: "elements",
  lookahead: "lookahead",
  parenthesized: "parenthesized"
};
function dm(t) {
  return Y.isInstance(t, Xr.$type);
}
const nt = {
  $type: "TerminalElement",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized"
}, Yr = {
  $type: "TerminalGroup",
  cardinality: "cardinality",
  elements: "elements",
  lookahead: "lookahead",
  parenthesized: "parenthesized"
};
function hm(t) {
  return Y.isInstance(t, Yr.$type);
}
const er = {
  $type: "TerminalRule",
  definition: "definition",
  fragment: "fragment",
  hidden: "hidden",
  name: "name",
  type: "type"
};
function Vt(t) {
  return Y.isInstance(t, er.$type);
}
const Jr = {
  $type: "TerminalRuleCall",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  rule: "rule"
};
function pm(t) {
  return Y.isInstance(t, Jr.$type);
}
const Ba = {
  $type: "Type",
  name: "name",
  type: "type"
};
function mm(t) {
  return Y.isInstance(t, Ba.$type);
}
const ci = {
  $type: "TypeAttribute",
  defaultValue: "defaultValue",
  isOptional: "isOptional",
  name: "name",
  type: "type"
}, ui = {
  $type: "TypeDefinition"
}, iu = {
  $type: "UnionType",
  types: "types"
}, Wa = {
  $type: "UnorderedGroup",
  cardinality: "cardinality",
  elements: "elements"
};
function xd(t) {
  return Y.isInstance(t, Wa.$type);
}
const Zr = {
  $type: "UntilToken",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  terminal: "terminal"
};
function gm(t) {
  return Y.isInstance(t, Zr.$type);
}
const fi = {
  $type: "ValueLiteral"
}, Ai = {
  $type: "Wildcard",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized"
};
function ym(t) {
  return Y.isInstance(t, Ai.$type);
}
class Dd extends kd {
  constructor() {
    super(...arguments), this.types = {
      AbstractElement: {
        name: Ze.$type,
        properties: {
          cardinality: {
            name: Ze.cardinality
          }
        },
        superTypes: []
      },
      AbstractParserRule: {
        name: Ga.$type,
        properties: {},
        superTypes: [va.$type, ft.$type]
      },
      AbstractRule: {
        name: va.$type,
        properties: {},
        superTypes: []
      },
      AbstractType: {
        name: ft.$type,
        properties: {},
        superTypes: []
      },
      Action: {
        name: vr.$type,
        properties: {
          cardinality: {
            name: vr.cardinality
          },
          feature: {
            name: vr.feature
          },
          inferredType: {
            name: vr.inferredType
          },
          operator: {
            name: vr.operator
          },
          type: {
            name: vr.type,
            referenceType: ft.$type
          }
        },
        superTypes: [Ze.$type]
      },
      Alternatives: {
        name: ja.$type,
        properties: {
          cardinality: {
            name: ja.cardinality
          },
          elements: {
            name: ja.elements,
            defaultValue: []
          }
        },
        superTypes: [Ze.$type]
      },
      ArrayLiteral: {
        name: Zc.$type,
        properties: {
          elements: {
            name: Zc.elements,
            defaultValue: []
          }
        },
        superTypes: [fi.$type]
      },
      ArrayType: {
        name: Qc.$type,
        properties: {
          elementType: {
            name: Qc.elementType
          }
        },
        superTypes: [ui.$type]
      },
      Assignment: {
        name: Er.$type,
        properties: {
          cardinality: {
            name: Er.cardinality
          },
          feature: {
            name: Er.feature
          },
          operator: {
            name: Er.operator
          },
          predicate: {
            name: Er.predicate
          },
          terminal: {
            name: Er.terminal
          }
        },
        superTypes: [Ze.$type]
      },
      BooleanLiteral: {
        name: Po.$type,
        properties: {
          true: {
            name: Po.true,
            defaultValue: !1
          }
        },
        superTypes: [Gr.$type, fi.$type]
      },
      CharacterRange: {
        name: $r.$type,
        properties: {
          cardinality: {
            name: $r.cardinality
          },
          left: {
            name: $r.left
          },
          lookahead: {
            name: $r.lookahead
          },
          parenthesized: {
            name: $r.parenthesized,
            defaultValue: !1
          },
          right: {
            name: $r.right
          }
        },
        superTypes: [nt.$type]
      },
      Condition: {
        name: Gr.$type,
        properties: {},
        superTypes: []
      },
      Conjunction: {
        name: za.$type,
        properties: {
          left: {
            name: za.left
          },
          right: {
            name: za.right
          }
        },
        superTypes: [Gr.$type]
      },
      CrossReference: {
        name: Ar.$type,
        properties: {
          cardinality: {
            name: Ar.cardinality
          },
          deprecatedSyntax: {
            name: Ar.deprecatedSyntax,
            defaultValue: !1
          },
          isMulti: {
            name: Ar.isMulti,
            defaultValue: !1
          },
          terminal: {
            name: Ar.terminal
          },
          type: {
            name: Ar.type,
            referenceType: ft.$type
          }
        },
        superTypes: [Ze.$type]
      },
      Disjunction: {
        name: Ua.$type,
        properties: {
          left: {
            name: Ua.left
          },
          right: {
            name: Ua.right
          }
        },
        superTypes: [Gr.$type]
      },
      EndOfFile: {
        name: Oo.$type,
        properties: {
          cardinality: {
            name: Oo.cardinality
          }
        },
        superTypes: [Ze.$type]
      },
      Grammar: {
        name: gr.$type,
        properties: {
          imports: {
            name: gr.imports,
            defaultValue: []
          },
          interfaces: {
            name: gr.interfaces,
            defaultValue: []
          },
          isDeclared: {
            name: gr.isDeclared,
            defaultValue: !1
          },
          name: {
            name: gr.name
          },
          rules: {
            name: gr.rules,
            defaultValue: []
          },
          types: {
            name: gr.types,
            defaultValue: []
          }
        },
        superTypes: []
      },
      GrammarImport: {
        name: eu.$type,
        properties: {
          path: {
            name: eu.path
          }
        },
        superTypes: []
      },
      Group: {
        name: Kr.$type,
        properties: {
          cardinality: {
            name: Kr.cardinality
          },
          elements: {
            name: Kr.elements,
            defaultValue: []
          },
          guardCondition: {
            name: Kr.guardCondition
          },
          predicate: {
            name: Kr.predicate
          }
        },
        superTypes: [Ze.$type]
      },
      InferredType: {
        name: Lo.$type,
        properties: {
          name: {
            name: Lo.name
          }
        },
        superTypes: [ft.$type]
      },
      InfixRule: {
        name: Ot.$type,
        properties: {
          call: {
            name: Ot.call
          },
          dataType: {
            name: Ot.dataType
          },
          inferredType: {
            name: Ot.inferredType
          },
          name: {
            name: Ot.name
          },
          operators: {
            name: Ot.operators
          },
          parameters: {
            name: Ot.parameters,
            defaultValue: []
          },
          returnType: {
            name: Ot.returnType,
            referenceType: ft.$type
          }
        },
        superTypes: [Ga.$type]
      },
      InfixRuleOperatorList: {
        name: no.$type,
        properties: {
          associativity: {
            name: no.associativity
          },
          operators: {
            name: no.operators,
            defaultValue: []
          }
        },
        superTypes: []
      },
      InfixRuleOperators: {
        name: tu.$type,
        properties: {
          precedences: {
            name: tu.precedences,
            defaultValue: []
          }
        },
        superTypes: []
      },
      Interface: {
        name: vi.$type,
        properties: {
          attributes: {
            name: vi.attributes,
            defaultValue: []
          },
          name: {
            name: vi.name
          },
          superTypes: {
            name: vi.superTypes,
            defaultValue: [],
            referenceType: ft.$type
          }
        },
        superTypes: [ft.$type]
      },
      Keyword: {
        name: Ei.$type,
        properties: {
          cardinality: {
            name: Ei.cardinality
          },
          predicate: {
            name: Ei.predicate
          },
          value: {
            name: Ei.value
          }
        },
        superTypes: [Ze.$type]
      },
      NamedArgument: {
        name: Ea.$type,
        properties: {
          calledByName: {
            name: Ea.calledByName,
            defaultValue: !1
          },
          parameter: {
            name: Ea.parameter,
            referenceType: $a.$type
          },
          value: {
            name: Ea.value
          }
        },
        superTypes: []
      },
      NegatedToken: {
        name: Vr.$type,
        properties: {
          cardinality: {
            name: Vr.cardinality
          },
          lookahead: {
            name: Vr.lookahead
          },
          parenthesized: {
            name: Vr.parenthesized,
            defaultValue: !1
          },
          terminal: {
            name: Vr.terminal
          }
        },
        superTypes: [nt.$type]
      },
      Negation: {
        name: xo.$type,
        properties: {
          value: {
            name: xo.value
          }
        },
        superTypes: [Gr.$type]
      },
      NumberLiteral: {
        name: ru.$type,
        properties: {
          value: {
            name: ru.value
          }
        },
        superTypes: [fi.$type]
      },
      Parameter: {
        name: $a.$type,
        properties: {
          name: {
            name: $a.name
          }
        },
        superTypes: []
      },
      ParameterReference: {
        name: Do.$type,
        properties: {
          parameter: {
            name: Do.parameter,
            referenceType: $a.$type
          }
        },
        superTypes: [Gr.$type]
      },
      ParserRule: {
        name: Rt.$type,
        properties: {
          dataType: {
            name: Rt.dataType
          },
          definition: {
            name: Rt.definition
          },
          entry: {
            name: Rt.entry,
            defaultValue: !1
          },
          fragment: {
            name: Rt.fragment,
            defaultValue: !1
          },
          inferredType: {
            name: Rt.inferredType
          },
          name: {
            name: Rt.name
          },
          parameters: {
            name: Rt.parameters,
            defaultValue: []
          },
          returnType: {
            name: Rt.returnType,
            referenceType: ft.$type
          }
        },
        superTypes: [Ga.$type]
      },
      ReferenceType: {
        name: io.$type,
        properties: {
          isMulti: {
            name: io.isMulti,
            defaultValue: !1
          },
          referenceType: {
            name: io.referenceType
          }
        },
        superTypes: [ui.$type]
      },
      RegexToken: {
        name: qr.$type,
        properties: {
          cardinality: {
            name: qr.cardinality
          },
          lookahead: {
            name: qr.lookahead
          },
          parenthesized: {
            name: qr.parenthesized,
            defaultValue: !1
          },
          regex: {
            name: qr.regex
          }
        },
        superTypes: [nt.$type]
      },
      ReturnType: {
        name: Mo.$type,
        properties: {
          name: {
            name: Mo.name
          }
        },
        superTypes: []
      },
      RuleCall: {
        name: Hr.$type,
        properties: {
          arguments: {
            name: Hr.arguments,
            defaultValue: []
          },
          cardinality: {
            name: Hr.cardinality
          },
          predicate: {
            name: Hr.predicate
          },
          rule: {
            name: Hr.rule,
            referenceType: va.$type
          }
        },
        superTypes: [Ze.$type]
      },
      SimpleType: {
        name: $i.$type,
        properties: {
          primitiveType: {
            name: $i.primitiveType
          },
          stringType: {
            name: $i.stringType
          },
          typeRef: {
            name: $i.typeRef,
            referenceType: ft.$type
          }
        },
        superTypes: [ui.$type]
      },
      StringLiteral: {
        name: nu.$type,
        properties: {
          value: {
            name: nu.value
          }
        },
        superTypes: [fi.$type]
      },
      TerminalAlternatives: {
        name: Xr.$type,
        properties: {
          cardinality: {
            name: Xr.cardinality
          },
          elements: {
            name: Xr.elements,
            defaultValue: []
          },
          lookahead: {
            name: Xr.lookahead
          },
          parenthesized: {
            name: Xr.parenthesized,
            defaultValue: !1
          }
        },
        superTypes: [nt.$type]
      },
      TerminalElement: {
        name: nt.$type,
        properties: {
          cardinality: {
            name: nt.cardinality
          },
          lookahead: {
            name: nt.lookahead
          },
          parenthesized: {
            name: nt.parenthesized,
            defaultValue: !1
          }
        },
        superTypes: [Ze.$type]
      },
      TerminalGroup: {
        name: Yr.$type,
        properties: {
          cardinality: {
            name: Yr.cardinality
          },
          elements: {
            name: Yr.elements,
            defaultValue: []
          },
          lookahead: {
            name: Yr.lookahead
          },
          parenthesized: {
            name: Yr.parenthesized,
            defaultValue: !1
          }
        },
        superTypes: [nt.$type]
      },
      TerminalRule: {
        name: er.$type,
        properties: {
          definition: {
            name: er.definition
          },
          fragment: {
            name: er.fragment,
            defaultValue: !1
          },
          hidden: {
            name: er.hidden,
            defaultValue: !1
          },
          name: {
            name: er.name
          },
          type: {
            name: er.type
          }
        },
        superTypes: [va.$type]
      },
      TerminalRuleCall: {
        name: Jr.$type,
        properties: {
          cardinality: {
            name: Jr.cardinality
          },
          lookahead: {
            name: Jr.lookahead
          },
          parenthesized: {
            name: Jr.parenthesized,
            defaultValue: !1
          },
          rule: {
            name: Jr.rule,
            referenceType: er.$type
          }
        },
        superTypes: [nt.$type]
      },
      Type: {
        name: Ba.$type,
        properties: {
          name: {
            name: Ba.name
          },
          type: {
            name: Ba.type
          }
        },
        superTypes: [ft.$type]
      },
      TypeAttribute: {
        name: ci.$type,
        properties: {
          defaultValue: {
            name: ci.defaultValue
          },
          isOptional: {
            name: ci.isOptional,
            defaultValue: !1
          },
          name: {
            name: ci.name
          },
          type: {
            name: ci.type
          }
        },
        superTypes: []
      },
      TypeDefinition: {
        name: ui.$type,
        properties: {},
        superTypes: []
      },
      UnionType: {
        name: iu.$type,
        properties: {
          types: {
            name: iu.types,
            defaultValue: []
          }
        },
        superTypes: [ui.$type]
      },
      UnorderedGroup: {
        name: Wa.$type,
        properties: {
          cardinality: {
            name: Wa.cardinality
          },
          elements: {
            name: Wa.elements,
            defaultValue: []
          }
        },
        superTypes: [Ze.$type]
      },
      UntilToken: {
        name: Zr.$type,
        properties: {
          cardinality: {
            name: Zr.cardinality
          },
          lookahead: {
            name: Zr.lookahead
          },
          parenthesized: {
            name: Zr.parenthesized,
            defaultValue: !1
          },
          terminal: {
            name: Zr.terminal
          }
        },
        superTypes: [nt.$type]
      },
      ValueLiteral: {
        name: fi.$type,
        properties: {},
        superTypes: []
      },
      Wildcard: {
        name: Ai.$type,
        properties: {
          cardinality: {
            name: Ai.cardinality
          },
          lookahead: {
            name: Ai.lookahead
          },
          parenthesized: {
            name: Ai.parenthesized,
            defaultValue: !1
          }
        },
        superTypes: [nt.$type]
      }
    };
  }
}
const Y = new Dd();
function Fo(t) {
  return new Cc(t, (e) => Pi(e) ? e.content : [], { includeRoot: !0 });
}
function Tm(t, e) {
  for (; t.container; )
    if (t = t.container, t === e)
      return !0;
  return !1;
}
function Go(t) {
  return {
    start: {
      character: t.startColumn - 1,
      line: t.startLine - 1
    },
    end: {
      character: t.endColumn,
      // endColumn uses the correct index
      line: t.endLine - 1
    }
  };
}
function rs(t) {
  if (!t)
    return;
  const { offset: e, end: r, range: n } = t;
  return {
    range: n,
    offset: e,
    end: r,
    length: r - e
  };
}
var Dt;
(function(t) {
  t[t.Before = 0] = "Before", t[t.After = 1] = "After", t[t.OverlapFront = 2] = "OverlapFront", t[t.OverlapBack = 3] = "OverlapBack", t[t.Inside = 4] = "Inside", t[t.Outside = 5] = "Outside";
})(Dt || (Dt = {}));
function Rm(t, e) {
  if (t.end.line < e.start.line || t.end.line === e.start.line && t.end.character <= e.start.character)
    return Dt.Before;
  if (t.start.line > e.end.line || t.start.line === e.end.line && t.start.character >= e.end.character)
    return Dt.After;
  const r = t.start.line > e.start.line || t.start.line === e.start.line && t.start.character >= e.start.character, n = t.end.line < e.end.line || t.end.line === e.end.line && t.end.character <= e.end.character;
  return r && n ? Dt.Inside : r ? Dt.OverlapBack : n ? Dt.OverlapFront : Dt.Outside;
}
function vm(t, e) {
  return Rm(t, e) > Dt.After;
}
const Em = /^[\w\p{L}]$/u;
function $m(t, e) {
  if (t) {
    const r = Am(t, !0);
    if (r && au(r, e))
      return r;
    if (_d(t)) {
      const n = t.content.findIndex((i) => !i.hidden);
      for (let i = n - 1; i >= 0; i--) {
        const a = t.content[i];
        if (au(a, e))
          return a;
      }
    }
  }
}
function au(t, e) {
  return Nd(t) && e.includes(t.tokenType.name);
}
function Am(t, e = !0) {
  for (; t.container; ) {
    const r = t.container;
    let n = r.content.indexOf(t);
    for (; n > 0; ) {
      n--;
      const i = r.content[n];
      if (e || !i.hidden)
        return i;
    }
    t = r;
  }
}
class Md extends Error {
  constructor(e, r) {
    super(e ? `${r} at ${e.range.start.line}:${e.range.start.character}` : r);
  }
}
function Xi(t, e = "Error: Got unexpected value.") {
  throw new Error(e);
}
function U(t) {
  return t.charCodeAt(0);
}
function ao(t, e) {
  Array.isArray(t) ? t.forEach(function(r) {
    e.push(r);
  }) : e.push(t);
}
function di(t, e) {
  if (t[e] === !0)
    throw "duplicate flag " + e;
  t[e], t[e] = !0;
}
function jr(t) {
  if (t === void 0)
    throw Error("Internal Error - Should never get here!");
  return !0;
}
function Cm() {
  throw Error("Internal Error - Should never get here!");
}
function su(t) {
  return t.type === "Character";
}
const ns = [];
for (let t = U("0"); t <= U("9"); t++)
  ns.push(t);
const is = [U("_")].concat(ns);
for (let t = U("a"); t <= U("z"); t++)
  is.push(t);
for (let t = U("A"); t <= U("Z"); t++)
  is.push(t);
const ou = [
  U(" "),
  U("\f"),
  U(`
`),
  U("\r"),
  U("	"),
  U("\v"),
  U("	"),
  U(" "),
  U(" "),
  U(" "),
  U(" "),
  U(" "),
  U(" "),
  U(" "),
  U(" "),
  U(" "),
  U(" "),
  U(" "),
  U(" "),
  U(" "),
  U("\u2028"),
  U("\u2029"),
  U(" "),
  U(" "),
  U("　"),
  U("\uFEFF")
], Sm = /[0-9a-fA-F]/, Aa = /[0-9]/, wm = /[1-9]/;
class Fd {
  constructor() {
    this.idx = 0, this.input = "", this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(e) {
    this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
  }
  pattern(e) {
    this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
    const r = this.disjunction();
    this.consumeChar("/");
    const n = {
      type: "Flags",
      loc: { begin: this.idx, end: e.length },
      global: !1,
      ignoreCase: !1,
      multiLine: !1,
      unicode: !1,
      sticky: !1
    };
    for (; this.isRegExpFlag(); )
      switch (this.popChar()) {
        case "g":
          di(n, "global");
          break;
        case "i":
          di(n, "ignoreCase");
          break;
        case "m":
          di(n, "multiLine");
          break;
        case "u":
          di(n, "unicode");
          break;
        case "y":
          di(n, "sticky");
          break;
      }
    if (this.idx !== this.input.length)
      throw Error("Redundant input: " + this.input.substring(this.idx));
    return {
      type: "Pattern",
      flags: n,
      value: r,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const e = [], r = this.idx;
    for (e.push(this.alternative()); this.peekChar() === "|"; )
      this.consumeChar("|"), e.push(this.alternative());
    return { type: "Disjunction", value: e, loc: this.loc(r) };
  }
  alternative() {
    const e = [], r = this.idx;
    for (; this.isTerm(); )
      e.push(this.term());
    return { type: "Alternative", value: e, loc: this.loc(r) };
  }
  term() {
    return this.isAssertion() ? this.assertion() : this.atom();
  }
  assertion() {
    const e = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(e)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(e) };
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(e)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(e)
            };
        }
        throw Error("Invalid Assertion Escape");
      case "(":
        this.consumeChar("?");
        let r;
        switch (this.popChar()) {
          case "=":
            r = "Lookahead";
            break;
          case "!":
            r = "NegativeLookahead";
            break;
          case "<": {
            switch (this.popChar()) {
              case "=":
                r = "Lookbehind";
                break;
              case "!":
                r = "NegativeLookbehind";
            }
            break;
          }
        }
        jr(r);
        const n = this.disjunction();
        return this.consumeChar(")"), {
          type: r,
          value: n,
          loc: this.loc(e)
        };
    }
    return Cm();
  }
  quantifier(e = !1) {
    let r;
    const n = this.idx;
    switch (this.popChar()) {
      case "*":
        r = {
          atLeast: 0,
          atMost: 1 / 0
        };
        break;
      case "+":
        r = {
          atLeast: 1,
          atMost: 1 / 0
        };
        break;
      case "?":
        r = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const i = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            r = {
              atLeast: i,
              atMost: i
            };
            break;
          case ",":
            let a;
            this.isDigit() ? (a = this.integerIncludingZero(), r = {
              atLeast: i,
              atMost: a
            }) : r = {
              atLeast: i,
              atMost: 1 / 0
            }, this.consumeChar("}");
            break;
        }
        if (e === !0 && r === void 0)
          return;
        jr(r);
        break;
    }
    if (!(e === !0 && r === void 0) && jr(r))
      return this.peekChar(0) === "?" ? (this.consumeChar("?"), r.greedy = !1) : r.greedy = !0, r.type = "Quantifier", r.loc = this.loc(n), r;
  }
  atom() {
    let e;
    const r = this.idx;
    switch (this.peekChar()) {
      case ".":
        e = this.dotAll();
        break;
      case "\\":
        e = this.atomEscape();
        break;
      case "[":
        e = this.characterClass();
        break;
      case "(":
        e = this.group();
        break;
    }
    if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), jr(e))
      return e.loc = this.loc(r), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: !0,
      value: [U(`
`), U("\r"), U("\u2028"), U("\u2029")]
    };
  }
  atomEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    return { type: "GroupBackReference", value: this.positiveInteger() };
  }
  characterClassEscape() {
    let e, r = !1;
    switch (this.popChar()) {
      case "d":
        e = ns;
        break;
      case "D":
        e = ns, r = !0;
        break;
      case "s":
        e = ou;
        break;
      case "S":
        e = ou, r = !0;
        break;
      case "w":
        e = is;
        break;
      case "W":
        e = is, r = !0;
        break;
    }
    if (jr(e))
      return { type: "Set", value: e, complement: r };
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = U("\f");
        break;
      case "n":
        e = U(`
`);
        break;
      case "r":
        e = U("\r");
        break;
      case "t":
        e = U("	");
        break;
      case "v":
        e = U("\v");
        break;
    }
    if (jr(e))
      return { type: "Character", value: e };
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const e = this.popChar();
    if (/[a-zA-Z]/.test(e) === !1)
      throw Error("Invalid ");
    return { type: "Character", value: e.toUpperCase().charCodeAt(0) - 64 };
  }
  nulCharacterAtom() {
    return this.consumeChar("0"), { type: "Character", value: U("\0") };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const e = this.popChar();
    return { type: "Character", value: U(e) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
      case "\\":
      case "]":
        throw Error("TBD");
      default:
        const e = this.popChar();
        return { type: "Character", value: U(e) };
    }
  }
  characterClass() {
    const e = [];
    let r = !1;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), r = !0); this.isClassAtom(); ) {
      const n = this.classAtom();
      if (n.type, su(n) && this.isRangeDash()) {
        this.consumeChar("-");
        const i = this.classAtom();
        if (i.type, su(i)) {
          if (i.value < n.value)
            throw Error("Range out of order in character class");
          e.push({ from: n.value, to: i.value });
        } else
          ao(n.value, e), e.push(U("-")), ao(i.value, e);
      } else
        ao(n.value, e);
    }
    return this.consumeChar("]"), { type: "Set", complement: r, value: e };
  }
  classAtom() {
    switch (this.peekChar()) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "b":
        return this.consumeChar("b"), { type: "Character", value: U("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let e = !0;
    switch (this.consumeChar("("), this.peekChar(0)) {
      case "?":
        this.consumeChar("?"), this.consumeChar(":"), e = !1;
        break;
      default:
        this.groupIdx++;
        break;
    }
    const r = this.disjunction();
    this.consumeChar(")");
    const n = {
      type: "Group",
      capturing: e,
      value: r
    };
    return e && (n.idx = this.groupIdx), n;
  }
  positiveInteger() {
    let e = this.popChar();
    if (wm.test(e) === !1)
      throw Error("Expecting a positive integer");
    for (; Aa.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = this.popChar();
    if (Aa.test(e) === !1)
      throw Error("Expecting an integer");
    for (; Aa.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  patternCharacter() {
    const e = this.popChar();
    switch (e) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: U(e) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return !0;
      default:
        return !1;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return Aa.test(this.peekChar(0));
  }
  isClassAtom(e = 0) {
    switch (this.peekChar(e)) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter())
      return !0;
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      case "[":
      case "(":
        return !0;
      default:
        return !1;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return !0;
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return !0;
          default:
            return !1;
        }
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!" || this.peekChar(2) === "<" && (this.peekChar(3) === "=" || this.peekChar(3) === "!"));
      default:
        return !1;
    }
  }
  isQuantifier() {
    const e = this.saveState();
    try {
      return this.quantifier(!0) !== void 0;
    } catch {
      return !1;
    } finally {
      this.restoreState(e);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  parseHexDigits(e) {
    let r = "";
    for (let i = 0; i < e; i++) {
      const a = this.popChar();
      if (Sm.test(a) === !1)
        throw Error("Expecting a HexDecimal digits");
      r += a;
    }
    return { type: "Character", value: parseInt(r, 16) };
  }
  peekChar(e = 0) {
    return this.input[this.idx + e];
  }
  popChar() {
    const e = this.peekChar(0);
    return this.consumeChar(void 0), e;
  }
  consumeChar(e) {
    if (e !== void 0 && this.input[this.idx] !== e)
      throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    if (this.idx >= this.input.length)
      throw Error("Unexpected end of input");
    this.idx++;
  }
  loc(e) {
    return { begin: e, end: this.idx };
  }
}
class Ps {
  visitChildren(e) {
    for (const r in e) {
      const n = e[r];
      e.hasOwnProperty(r) && (n.type !== void 0 ? this.visit(n) : Array.isArray(n) && n.forEach((i) => {
        this.visit(i);
      }, this));
    }
  }
  visit(e) {
    switch (e.type) {
      case "Pattern":
        this.visitPattern(e);
        break;
      case "Flags":
        this.visitFlags(e);
        break;
      case "Disjunction":
        this.visitDisjunction(e);
        break;
      case "Alternative":
        this.visitAlternative(e);
        break;
      case "StartAnchor":
        this.visitStartAnchor(e);
        break;
      case "EndAnchor":
        this.visitEndAnchor(e);
        break;
      case "WordBoundary":
        this.visitWordBoundary(e);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(e);
        break;
      case "Lookahead":
        this.visitLookahead(e);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(e);
        break;
      case "Lookbehind":
        this.visitLookbehind(e);
        break;
      case "NegativeLookbehind":
        this.visitNegativeLookbehind(e);
        break;
      case "Character":
        this.visitCharacter(e);
        break;
      case "Set":
        this.visitSet(e);
        break;
      case "Group":
        this.visitGroup(e);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(e);
        break;
      case "Quantifier":
        this.visitQuantifier(e);
        break;
    }
    this.visitChildren(e);
  }
  visitPattern(e) {
  }
  visitFlags(e) {
  }
  visitDisjunction(e) {
  }
  visitAlternative(e) {
  }
  // Assertion
  visitStartAnchor(e) {
  }
  visitEndAnchor(e) {
  }
  visitWordBoundary(e) {
  }
  visitNonWordBoundary(e) {
  }
  visitLookahead(e) {
  }
  visitNegativeLookahead(e) {
  }
  visitLookbehind(e) {
  }
  visitNegativeLookbehind(e) {
  }
  // atoms
  visitCharacter(e) {
  }
  visitSet(e) {
  }
  visitGroup(e) {
  }
  visitGroupBackReference(e) {
  }
  visitQuantifier(e) {
  }
}
const bm = /\r?\n/gm, km = new Fd();
class Nm extends Ps {
  constructor() {
    super(...arguments), this.isStarting = !0, this.endRegexpStack = [], this.multiline = !1;
  }
  get endRegex() {
    return this.endRegexpStack.join("");
  }
  reset(e) {
    this.multiline = !1, this.regex = e, this.startRegexp = "", this.isStarting = !0, this.endRegexpStack = [];
  }
  visitGroup(e) {
    e.quantifier && (this.isStarting = !1, this.endRegexpStack = []);
  }
  visitCharacter(e) {
    const r = String.fromCharCode(e.value);
    if (!this.multiline && r === `
` && (this.multiline = !0), e.quantifier)
      this.isStarting = !1, this.endRegexpStack = [];
    else {
      const n = Os(r);
      this.endRegexpStack.push(n), this.isStarting && (this.startRegexp += n);
    }
  }
  visitSet(e) {
    if (!this.multiline) {
      const r = this.regex.substring(e.loc.begin, e.loc.end), n = new RegExp(r);
      this.multiline = !!`
`.match(n);
    }
    if (e.quantifier)
      this.isStarting = !1, this.endRegexpStack = [];
    else {
      const r = this.regex.substring(e.loc.begin, e.loc.end);
      this.endRegexpStack.push(r), this.isStarting && (this.startRegexp += r);
    }
  }
  visitChildren(e) {
    e.type === "Group" && e.quantifier || super.visitChildren(e);
  }
}
const so = new Nm();
function _m(t) {
  try {
    return typeof t == "string" && (t = new RegExp(t)), t = t.toString(), so.reset(t), so.visit(km.pattern(t)), so.multiline;
  } catch {
    return !1;
  }
}
const Im = `\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");
function Gd(t) {
  const e = typeof t == "string" ? new RegExp(t) : t;
  return Im.some((r) => e.test(r));
}
function Os(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Pm(t, e) {
  const r = Om(t), n = e.match(r);
  return !!n && n[0].length > 0;
}
function Om(t) {
  typeof t == "string" && (t = new RegExp(t));
  const e = t, r = t.source;
  let n = 0;
  function i() {
    let a = "", s;
    function o(c) {
      a += r.substr(n, c), n += c;
    }
    function l(c) {
      a += "(?:" + r.substr(n, c) + "|$)", n += c;
    }
    for (; n < r.length; )
      switch (r[n]) {
        case "\\":
          switch (r[n + 1]) {
            case "c":
              l(3);
              break;
            case "x":
              l(4);
              break;
            case "u":
              e.unicode ? r[n + 2] === "{" ? l(r.indexOf("}", n) - n + 1) : l(6) : l(2);
              break;
            case "p":
            case "P":
              e.unicode ? l(r.indexOf("}", n) - n + 1) : l(2);
              break;
            case "k":
              l(r.indexOf(">", n) - n + 1);
              break;
            default:
              l(2);
              break;
          }
          break;
        case "[":
          s = /\[(?:\\.|.)*?\]/g, s.lastIndex = n, s = s.exec(r) || [], l(s[0].length);
          break;
        case "|":
        case "^":
        case "$":
        case "*":
        case "+":
        case "?":
          o(1);
          break;
        case "{":
          s = /\{\d+,?\d*\}/g, s.lastIndex = n, s = s.exec(r), s ? o(s[0].length) : l(1);
          break;
        case "(":
          if (r[n + 1] === "?")
            switch (r[n + 2]) {
              case ":":
                a += "(?:", n += 3, a += i() + "|$)";
                break;
              case "=":
                a += "(?=", n += 3, a += i() + ")";
                break;
              case "!":
                s = n, n += 3, i(), a += r.substr(s, n - s);
                break;
              case "<":
                switch (r[n + 3]) {
                  case "=":
                  case "!":
                    s = n, n += 4, i(), a += r.substr(s, n - s);
                    break;
                  default:
                    o(r.indexOf(">", n) - n + 1), a += i() + "|$)";
                    break;
                }
                break;
            }
          else
            o(1), a += i() + "|$)";
          break;
        case ")":
          return ++n, a;
        default:
          l(1);
          break;
      }
    return a;
  }
  return new RegExp(i(), t.flags);
}
function Lm(t) {
  return t.rules.find((e) => Kt(e) && e.entry);
}
function xm(t) {
  return t.rules.filter((e) => Vt(e) && e.hidden);
}
function jd(t, e) {
  const r = /* @__PURE__ */ new Set(), n = Lm(t);
  if (!n)
    return new Set(t.rules);
  const i = [n].concat(xm(t));
  for (const s of i)
    zd(s, r, e);
  const a = /* @__PURE__ */ new Set();
  for (const s of t.rules)
    (r.has(s.name) || Vt(s) && s.hidden) && a.add(s);
  return a;
}
function zd(t, e, r) {
  e.add(t.name), qi(t).forEach((n) => {
    if (Ir(n) || r) {
      const i = n.rule.ref;
      i && !e.has(i.name) && zd(i, e, r);
    }
  });
}
function Dm(t) {
  if (t.terminal)
    return t.terminal;
  if (t.type.ref) {
    const e = Bd(t.type.ref);
    return e == null ? void 0 : e.terminal;
  }
}
function Mm(t) {
  return t.hidden && !Gd(kc(t));
}
function Fm(t, e) {
  return !t || !e ? [] : bc(t, e, t.astNode, !0);
}
function Ud(t, e, r) {
  if (!t || !e)
    return;
  const n = bc(t, e, t.astNode, !0);
  if (n.length !== 0)
    return r !== void 0 ? r = Math.max(0, Math.min(r, n.length - 1)) : r = 0, n[r];
}
function bc(t, e, r, n) {
  if (!n) {
    const i = Ns(t.grammarSource, Nr);
    if (i && i.feature === e)
      return [t];
  }
  return Pi(t) && t.astNode === r ? t.content.flatMap((i) => bc(i, e, r, !1)) : [];
}
function Gm(t, e, r) {
  if (!t)
    return;
  const n = jm(t, e, t == null ? void 0 : t.astNode);
  if (n.length !== 0)
    return r !== void 0 ? r = Math.max(0, Math.min(r, n.length - 1)) : r = 0, n[r];
}
function jm(t, e, r) {
  if (t.astNode !== r)
    return [];
  if (_r(t.grammarSource) && t.grammarSource.value === e)
    return [t];
  const n = Fo(t).iterator();
  let i;
  const a = [];
  do
    if (i = n.next(), !i.done) {
      const s = i.value;
      s.astNode === r ? _r(s.grammarSource) && s.grammarSource.value === e && a.push(s) : n.prune();
    }
  while (!i.done);
  return a;
}
function zm(t) {
  var r;
  const e = t.astNode;
  for (; e === ((r = t.container) == null ? void 0 : r.astNode); ) {
    const n = Ns(t.grammarSource, Nr);
    if (n)
      return n;
    t = t.container;
  }
}
function Bd(t) {
  let e = t;
  return Ld(e) && (_s(e.$container) ? e = e.$container.$container : Hi(e.$container) ? e = e.$container : Xi(e.$container)), Wd(t, e, /* @__PURE__ */ new Map());
}
function Wd(t, e, r) {
  var i;
  function n(a, s) {
    let o;
    return Ns(a, Nr) || (o = Wd(s, s, r)), r.set(t, o), o;
  }
  if (r.has(t))
    return r.get(t);
  r.set(t, void 0);
  for (const a of qi(e)) {
    if (Nr(a) && a.feature.toLowerCase() === "name")
      return r.set(t, a), a;
    if (Ir(a) && Kt(a.rule.ref))
      return n(a, a.rule.ref);
    if (fm(a) && ((i = a.typeRef) != null && i.ref))
      return n(a, a.typeRef.ref);
  }
}
function Kd(t) {
  return Vd(t, /* @__PURE__ */ new Set());
}
function Vd(t, e) {
  if (e.has(t))
    return !0;
  e.add(t);
  for (const r of qi(t))
    if (Ir(r)) {
      if (!r.rule.ref || Kt(r.rule.ref) && !Vd(r.rule.ref, e) || ts(r.rule.ref))
        return !1;
    } else {
      if (Nr(r))
        return !1;
      if (_s(r))
        return !1;
    }
  return !!t.definition;
}
function qd(t) {
  if (!Vt(t)) {
    if (t.inferredType)
      return t.inferredType.name;
    if (t.dataType)
      return t.dataType;
    if (t.returnType) {
      const e = t.returnType.ref;
      if (e)
        return e.name;
    }
  }
}
function Oi(t) {
  if (Hi(t))
    return Kt(t) && Kd(t) ? t.name : qd(t) ?? t.name;
  if (am(t) || mm(t) || um(t))
    return t.name;
  if (_s(t)) {
    const e = Um(t);
    if (e)
      return e;
  } else if (Ld(t))
    return t.name;
  throw new Error("Cannot get name of Unknown Type");
}
function Um(t) {
  var e;
  if (t.inferredType)
    return t.inferredType.name;
  if ((e = t.type) != null && e.ref)
    return Oi(t.type.ref);
}
function Bm(t) {
  var e;
  return Vt(t) ? ((e = t.type) == null ? void 0 : e.name) ?? "string" : qd(t) ?? t.name;
}
function kc(t) {
  const e = {
    s: !1,
    i: !1,
    u: !1
  }, r = Vn(t.definition, e), n = Object.entries(e).filter(([, i]) => i).map(([i]) => i).join("");
  return new RegExp(r, n);
}
const Nc = /[\s\S]/.source;
function Vn(t, e) {
  var r;
  if (dm(t))
    return Wm(t);
  if (hm(t))
    return Km(t);
  if (tm(t))
    return Hm(t);
  if (pm(t)) {
    const n = t.rule.ref;
    if (!n)
      throw new Error("Missing rule reference.");
    return zt(Vn(n.definition), {
      cardinality: t.cardinality,
      lookahead: t.lookahead,
      parenthesized: t.parenthesized
    });
  } else {
    if (sm(t))
      return qm(t);
    if (gm(t))
      return Vm(t);
    if (cm(t)) {
      const n = t.regex.lastIndexOf("/"), i = t.regex.substring(1, n), a = t.regex.substring(n + 1);
      return e && (e.i = a.includes("i"), e.s = a.includes("s"), e.u = a.includes("u")), zt(i, {
        cardinality: t.cardinality,
        lookahead: t.lookahead,
        parenthesized: t.parenthesized,
        wrap: !1
      });
    } else {
      if (ym(t))
        return zt(Nc, {
          cardinality: t.cardinality,
          lookahead: t.lookahead,
          parenthesized: t.parenthesized
        });
      throw new Error(`Invalid terminal element: ${t == null ? void 0 : t.$type}, ${(r = t == null ? void 0 : t.$cstNode) == null ? void 0 : r.text}`);
    }
  }
}
function Wm(t) {
  return zt(t.elements.map((e) => Vn(e)).join("|"), {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    parenthesized: t.parenthesized,
    wrap: !1
    // wrapping is not required for top level alternatives, and nested alternatives are already parenthesized according to the grammar
  });
}
function Km(t) {
  return zt(t.elements.map((e) => Vn(e)).join(""), {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    parenthesized: t.parenthesized,
    wrap: !1
    // wrapping is not required for top level group, and nested group are already parenthesized according to the grammar
  });
}
function Vm(t) {
  return zt(`${Nc}*?${Vn(t.terminal)}`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    parenthesized: t.parenthesized
  });
}
function qm(t) {
  return zt(`(?!${Vn(t.terminal)})${Nc}*?`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    parenthesized: t.parenthesized
  });
}
function Hm(t) {
  return t.right ? zt(`[${oo(t.left)}-${oo(t.right)}]`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    parenthesized: t.parenthesized,
    wrap: !1
  }) : zt(oo(t.left), {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    parenthesized: t.parenthesized,
    wrap: !1
  });
}
function oo(t) {
  return Os(t.value);
}
function zt(t, e) {
  return (e.parenthesized || e.lookahead || e.wrap !== !1) && (t = `(${e.lookahead ?? (e.parenthesized ? "" : "?:")}${t})`), e.cardinality ? `${t}${e.cardinality}` : t;
}
function Xm(t) {
  const e = [], r = t.Grammar;
  for (const n of r.rules)
    Vt(n) && Mm(n) && _m(kc(n)) && e.push(n.name);
  return {
    multilineCommentRules: e,
    nameRegexp: Em
  };
}
function jo(t) {
  console && console.error && console.error(`Error: ${t}`);
}
function Hd(t) {
  console && console.warn && console.warn(`Warning: ${t}`);
}
function Xd(t) {
  const e = (/* @__PURE__ */ new Date()).getTime(), r = t();
  return { time: (/* @__PURE__ */ new Date()).getTime() - e, value: r };
}
function Yd(t) {
  function e() {
  }
  e.prototype = t;
  const r = new e();
  function n() {
    return typeof r.bar;
  }
  return n(), n(), t;
}
function Ym(t) {
  return Jm(t) ? t.LABEL : t.name;
}
function Jm(t) {
  return typeof t.LABEL == "string" && t.LABEL !== "";
}
class wt {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    this._definition = e;
  }
  accept(e) {
    e.visit(this), this.definition.forEach((r) => {
      r.accept(e);
    });
  }
}
class We extends wt {
  constructor(e) {
    super([]), this.idx = 1, Object.assign(this, bt(e));
  }
  set definition(e) {
  }
  get definition() {
    return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
  }
  accept(e) {
    e.visit(this);
  }
}
class qn extends wt {
  constructor(e) {
    super(e.definition), this.orgText = "", Object.assign(this, bt(e));
  }
}
class He extends wt {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = !1, Object.assign(this, bt(e));
  }
}
let Me = class extends wt {
  constructor(e) {
    super(e.definition), this.idx = 1, Object.assign(this, bt(e));
  }
};
class tt extends wt {
  constructor(e) {
    super(e.definition), this.idx = 1, Object.assign(this, bt(e));
  }
}
class rt extends wt {
  constructor(e) {
    super(e.definition), this.idx = 1, Object.assign(this, bt(e));
  }
}
class ye extends wt {
  constructor(e) {
    super(e.definition), this.idx = 1, Object.assign(this, bt(e));
  }
}
class Xe extends wt {
  constructor(e) {
    super(e.definition), this.idx = 1, Object.assign(this, bt(e));
  }
}
class Ye extends wt {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, Object.assign(this, bt(e));
  }
}
class se {
  constructor(e) {
    this.idx = 1, Object.assign(this, bt(e));
  }
  accept(e) {
    e.visit(this);
  }
}
function Zm(t) {
  return t.map(Ka);
}
function Ka(t) {
  function e(r) {
    return r.map(Ka);
  }
  if (t instanceof We) {
    const r = {
      type: "NonTerminal",
      name: t.nonTerminalName,
      idx: t.idx
    };
    return typeof t.label == "string" && (r.label = t.label), r;
  } else {
    if (t instanceof He)
      return {
        type: "Alternative",
        definition: e(t.definition)
      };
    if (t instanceof Me)
      return {
        type: "Option",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof tt)
      return {
        type: "RepetitionMandatory",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof rt)
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: t.idx,
        separator: Ka(new se({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof Xe)
      return {
        type: "RepetitionWithSeparator",
        idx: t.idx,
        separator: Ka(new se({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof ye)
      return {
        type: "Repetition",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof Ye)
      return {
        type: "Alternation",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof se) {
      const r = {
        type: "Terminal",
        name: t.terminalType.name,
        label: Ym(t.terminalType),
        idx: t.idx
      };
      typeof t.label == "string" && (r.terminalLabel = t.label);
      const n = t.terminalType.PATTERN;
      return t.terminalType.PATTERN && (r.pattern = n instanceof RegExp ? n.source : n), r;
    } else {
      if (t instanceof qn)
        return {
          type: "Rule",
          name: t.name,
          orgText: t.orgText,
          definition: e(t.definition)
        };
      throw Error("non exhaustive match");
    }
  }
}
function bt(t) {
  return Object.fromEntries(Object.entries(t).filter(([, e]) => e !== void 0));
}
class Hn {
  visit(e) {
    const r = e;
    switch (r.constructor) {
      case We:
        return this.visitNonTerminal(r);
      case He:
        return this.visitAlternative(r);
      case Me:
        return this.visitOption(r);
      case tt:
        return this.visitRepetitionMandatory(r);
      case rt:
        return this.visitRepetitionMandatoryWithSeparator(r);
      case Xe:
        return this.visitRepetitionWithSeparator(r);
      case ye:
        return this.visitRepetition(r);
      case Ye:
        return this.visitAlternation(r);
      case se:
        return this.visitTerminal(r);
      case qn:
        return this.visitRule(r);
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(e) {
  }
  /* c8 ignore next */
  visitAlternative(e) {
  }
  /* c8 ignore next */
  visitOption(e) {
  }
  /* c8 ignore next */
  visitRepetition(e) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(e) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(e) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(e) {
  }
  /* c8 ignore next */
  visitAlternation(e) {
  }
  /* c8 ignore next */
  visitTerminal(e) {
  }
  /* c8 ignore next */
  visitRule(e) {
  }
}
function Qm(t) {
  return t instanceof He || t instanceof Me || t instanceof ye || t instanceof tt || t instanceof rt || t instanceof Xe || t instanceof se || t instanceof qn;
}
function as(t, e = []) {
  return t instanceof Me || t instanceof ye || t instanceof Xe ? !0 : t instanceof Ye ? t.definition.some((n) => as(n, e)) : t instanceof We && e.includes(t) ? !1 : t instanceof wt ? (t instanceof We && e.push(t), t.definition.every((n) => as(n, e))) : !1;
}
function eg(t) {
  return t instanceof Ye;
}
function vt(t) {
  if (t instanceof We)
    return "SUBRULE";
  if (t instanceof Me)
    return "OPTION";
  if (t instanceof Ye)
    return "OR";
  if (t instanceof tt)
    return "AT_LEAST_ONE";
  if (t instanceof rt)
    return "AT_LEAST_ONE_SEP";
  if (t instanceof Xe)
    return "MANY_SEP";
  if (t instanceof ye)
    return "MANY";
  if (t instanceof se)
    return "CONSUME";
  throw Error("non exhaustive match");
}
class Ls {
  walk(e, r = []) {
    e.definition.forEach((n, i) => {
      const a = e.definition.slice(i + 1);
      if (n instanceof We)
        this.walkProdRef(n, a, r);
      else if (n instanceof se)
        this.walkTerminal(n, a, r);
      else if (n instanceof He)
        this.walkFlat(n, a, r);
      else if (n instanceof Me)
        this.walkOption(n, a, r);
      else if (n instanceof tt)
        this.walkAtLeastOne(n, a, r);
      else if (n instanceof rt)
        this.walkAtLeastOneSep(n, a, r);
      else if (n instanceof Xe)
        this.walkManySep(n, a, r);
      else if (n instanceof ye)
        this.walkMany(n, a, r);
      else if (n instanceof Ye)
        this.walkOr(n, a, r);
      else
        throw Error("non exhaustive match");
    });
  }
  walkTerminal(e, r, n) {
  }
  walkProdRef(e, r, n) {
  }
  walkFlat(e, r, n) {
    const i = r.concat(n);
    this.walk(e, i);
  }
  walkOption(e, r, n) {
    const i = r.concat(n);
    this.walk(e, i);
  }
  walkAtLeastOne(e, r, n) {
    const i = [
      new Me({ definition: e.definition })
    ].concat(r, n);
    this.walk(e, i);
  }
  walkAtLeastOneSep(e, r, n) {
    const i = lu(e, r, n);
    this.walk(e, i);
  }
  walkMany(e, r, n) {
    const i = [
      new Me({ definition: e.definition })
    ].concat(r, n);
    this.walk(e, i);
  }
  walkManySep(e, r, n) {
    const i = lu(e, r, n);
    this.walk(e, i);
  }
  walkOr(e, r, n) {
    const i = r.concat(n);
    e.definition.forEach((a) => {
      const s = new He({ definition: [a] });
      this.walk(s, i);
    });
  }
}
function lu(t, e, r) {
  return [
    new Me({
      definition: [
        new se({ terminalType: t.separator })
      ].concat(t.definition)
    })
  ].concat(e, r);
}
function Yi(t) {
  if (t instanceof We)
    return Yi(t.referencedRule);
  if (t instanceof se)
    return ng(t);
  if (Qm(t))
    return tg(t);
  if (eg(t))
    return rg(t);
  throw Error("non exhaustive match");
}
function tg(t) {
  let e = [];
  const r = t.definition;
  let n = 0, i = r.length > n, a, s = !0;
  for (; i && s; )
    a = r[n], s = as(a), e = e.concat(Yi(a)), n = n + 1, i = r.length > n;
  return [...new Set(e)];
}
function rg(t) {
  const e = t.definition.map((r) => Yi(r));
  return [...new Set(e.flat())];
}
function ng(t) {
  return [t.terminalType];
}
const Jd = "_~IN~_";
class ig extends Ls {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, r, n) {
  }
  walkProdRef(e, r, n) {
    const i = sg(e.referencedRule, e.idx) + this.topProd.name, a = r.concat(n), s = new He({ definition: a }), o = Yi(s);
    this.follows[i] = o;
  }
}
function ag(t) {
  const e = {};
  return t.forEach((r) => {
    const n = new ig(r).startWalking();
    Object.assign(e, n);
  }), e;
}
function sg(t, e) {
  return t.name + e + Jd;
}
let Va = {};
const og = new Fd();
function xs(t) {
  const e = t.toString();
  if (Va.hasOwnProperty(e))
    return Va[e];
  {
    const r = og.pattern(e);
    return Va[e] = r, r;
  }
}
function lg() {
  Va = {};
}
const Zd = "Complement Sets are not supported for first char optimization", ss = `Unable to use "first char" lexer optimizations:
`;
function cg(t, e = !1) {
  try {
    const r = xs(t);
    return zo(r.value, {}, r.flags.ignoreCase);
  } catch (r) {
    if (r.message === Zd)
      e && Hd(`${ss}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let n = "";
      e && (n = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), jo(`${ss}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + n);
    }
  }
  return [];
}
function zo(t, e, r) {
  switch (t.type) {
    case "Disjunction":
      for (let i = 0; i < t.value.length; i++)
        zo(t.value[i], e, r);
      break;
    case "Alternative":
      const n = t.value;
      for (let i = 0; i < n.length; i++) {
        const a = n[i];
        switch (a.type) {
          case "EndAnchor":
          case "GroupBackReference":
          case "Lookahead":
          case "NegativeLookahead":
          case "Lookbehind":
          case "NegativeLookbehind":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const s = a;
        switch (s.type) {
          case "Character":
            Ca(s.value, e, r);
            break;
          case "Set":
            if (s.complement === !0)
              throw Error(Zd);
            s.value.forEach((l) => {
              if (typeof l == "number")
                Ca(l, e, r);
              else {
                const c = l;
                if (r === !0)
                  for (let f = c.from; f <= c.to; f++)
                    Ca(f, e, r);
                else {
                  for (let f = c.from; f <= c.to && f < Si; f++)
                    Ca(f, e, r);
                  if (c.to >= Si) {
                    const f = c.from >= Si ? c.from : Si, h = c.to, p = cr(f), g = cr(h);
                    for (let C = p; C <= g; C++)
                      e[C] = C;
                  }
                }
              }
            });
            break;
          case "Group":
            zo(s.value, e, r);
            break;
          default:
            throw Error("Non Exhaustive Match");
        }
        const o = s.quantifier !== void 0 && s.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          s.type === "Group" && Uo(s) === !1 || // If this term is not a group it may only be optional if it has an optional quantifier
          s.type !== "Group" && o === !1
        )
          break;
      }
      break;
    default:
      throw Error("non exhaustive match!");
  }
  return Object.values(e);
}
function Ca(t, e, r) {
  const n = cr(t);
  e[n] = n, r === !0 && ug(t, e);
}
function ug(t, e) {
  const r = String.fromCharCode(t), n = r.toUpperCase();
  if (n !== r) {
    const i = cr(n.charCodeAt(0));
    e[i] = i;
  } else {
    const i = r.toLowerCase();
    if (i !== r) {
      const a = cr(i.charCodeAt(0));
      e[a] = a;
    }
  }
}
function cu(t, e) {
  return t.value.find((r) => {
    if (typeof r == "number")
      return e.includes(r);
    {
      const n = r;
      return e.find((i) => n.from <= i && i <= n.to) !== void 0;
    }
  });
}
function Uo(t) {
  const e = t.quantifier;
  return e && e.atLeast === 0 ? !0 : t.value ? Array.isArray(t.value) ? t.value.every(Uo) : Uo(t.value) : !1;
}
class fg extends Ps {
  constructor(e) {
    super(), this.targetCharCodes = e, this.found = !1;
  }
  visitChildren(e) {
    if (this.found !== !0) {
      switch (e.type) {
        case "Lookahead":
          this.visitLookahead(e);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(e);
          return;
        case "Lookbehind":
          this.visitLookbehind(e);
          return;
        case "NegativeLookbehind":
          this.visitNegativeLookbehind(e);
          return;
      }
      super.visitChildren(e);
    }
  }
  visitCharacter(e) {
    this.targetCharCodes.includes(e.value) && (this.found = !0);
  }
  visitSet(e) {
    e.complement ? cu(e, this.targetCharCodes) === void 0 && (this.found = !0) : cu(e, this.targetCharCodes) !== void 0 && (this.found = !0);
  }
}
function _c(t, e) {
  if (e instanceof RegExp) {
    const r = xs(e), n = new fg(t);
    return n.visit(r), n.found;
  } else {
    for (const r of e) {
      const n = r.charCodeAt(0);
      if (t.includes(n))
        return !0;
    }
    return !1;
  }
}
const Pr = "PATTERN", Ci = "defaultMode", Sa = "modes";
function dg(t, e) {
  e = Object.assign({ safeMode: !1, positionTracking: "full", lineTerminatorCharacters: ["\r", `
`], tracer: (O, N) => N() }, e);
  const r = e.tracer;
  r("initCharCodeToOptimizedIndexMap", () => {
    Dg();
  });
  let n;
  r("Reject Lexer.NA", () => {
    n = t.filter((O) => O[Pr] !== qe.NA);
  });
  let i = !1, a;
  r("Transform Patterns", () => {
    i = !1, a = n.map((O) => {
      const N = O[Pr];
      if (N instanceof RegExp) {
        const L = N.source;
        return L.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        L !== "^" && L !== "$" && L !== "." && !N.ignoreCase ? L : L.length === 2 && L[0] === "\\" && // not a meta character
        ![
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ].includes(L[1]) ? L[1] : uu(N);
      } else {
        if (typeof N == "function")
          return i = !0, { exec: N };
        if (typeof N == "object")
          return i = !0, N;
        if (typeof N == "string") {
          if (N.length === 1)
            return N;
          {
            const L = N.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), H = new RegExp(L);
            return uu(H);
          }
        } else
          throw Error("non exhaustive match");
      }
    });
  });
  let s, o, l, c, f;
  r("misc mapping", () => {
    s = n.map((O) => O.tokenTypeIdx), o = n.map((O) => {
      const N = O.GROUP;
      if (N !== qe.SKIPPED) {
        if (typeof N == "string")
          return N;
        if (N === void 0)
          return !1;
        throw Error("non exhaustive match");
      }
    }), l = n.map((O) => {
      const N = O.LONGER_ALT;
      if (N)
        return Array.isArray(N) ? N.map((H) => n.indexOf(H)) : [n.indexOf(N)];
    }), c = n.map((O) => O.PUSH_MODE), f = n.map((O) => Object.hasOwn(O, "POP_MODE"));
  });
  let h;
  r("Line Terminator Handling", () => {
    const O = th(e.lineTerminatorCharacters);
    h = n.map((N) => !1), e.positionTracking !== "onlyOffset" && (h = n.map((N) => Object.hasOwn(N, "LINE_BREAKS") ? !!N.LINE_BREAKS : eh(N, O) === !1 && _c(O, N.PATTERN)));
  });
  let p, g, C, b;
  r("Misc Mapping #2", () => {
    p = n.map(Qd), g = a.map(Og), C = n.reduce((O, N) => {
      const L = N.GROUP;
      return typeof L == "string" && L !== qe.SKIPPED && (O[L] = []), O;
    }, {}), b = a.map((O, N) => ({
      pattern: a[N],
      longerAlt: l[N],
      canLineTerminator: h[N],
      isCustom: p[N],
      short: g[N],
      group: o[N],
      push: c[N],
      pop: f[N],
      tokenTypeIdx: s[N],
      tokenType: n[N]
    }));
  });
  let D = !0, k = [];
  return e.safeMode || r("First Char Optimization", () => {
    k = n.reduce((O, N, L) => {
      if (typeof N.PATTERN == "string") {
        const H = N.PATTERN.charCodeAt(0), ee = cr(H);
        lo(O, ee, b[L]);
      } else if (Array.isArray(N.START_CHARS_HINT)) {
        let H;
        N.START_CHARS_HINT.forEach((ee) => {
          const te = typeof ee == "string" ? ee.charCodeAt(0) : ee, Ae = cr(te);
          H !== Ae && (H = Ae, lo(O, Ae, b[L]));
        });
      } else if (N.PATTERN instanceof RegExp)
        if (N.PATTERN.unicode)
          D = !1, e.ensureOptimizations && jo(`${ss}	Unable to analyze < ${N.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
        else {
          const H = cg(N.PATTERN, e.ensureOptimizations);
          H.length === 0 && (D = !1), H.forEach((ee) => {
            lo(O, ee, b[L]);
          });
        }
      else
        e.ensureOptimizations && jo(`${ss}	TokenType: <${N.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), D = !1;
      return O;
    }, []);
  }), {
    emptyGroups: C,
    patternIdxToConfig: b,
    charCodeToPatternIdxToConfig: k,
    hasCustom: i,
    canBeOptimized: D
  };
}
function hg(t, e) {
  let r = [];
  const n = mg(t);
  r = r.concat(n.errors);
  const i = gg(n.valid), a = i.valid;
  return r = r.concat(i.errors), r = r.concat(pg(a)), r = r.concat(Cg(a)), r = r.concat(Sg(a, e)), r = r.concat(wg(a)), r;
}
function pg(t) {
  let e = [];
  const r = t.filter((n) => n[Pr] instanceof RegExp);
  return e = e.concat(Tg(r)), e = e.concat(Eg(r)), e = e.concat($g(r)), e = e.concat(Ag(r)), e = e.concat(Rg(r)), e;
}
function mg(t) {
  const e = t.filter((i) => !Object.hasOwn(i, Pr)), r = e.map((i) => ({
    message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
    type: Te.MISSING_PATTERN,
    tokenTypes: [i]
  })), n = t.filter((i) => !e.includes(i));
  return { errors: r, valid: n };
}
function gg(t) {
  const e = t.filter((i) => {
    const a = i[Pr];
    return !(a instanceof RegExp) && typeof a != "function" && !Object.hasOwn(a, "exec") && typeof a != "string";
  }), r = e.map((i) => ({
    message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: Te.INVALID_PATTERN,
    tokenTypes: [i]
  })), n = t.filter((i) => !e.includes(i));
  return { errors: r, valid: n };
}
const yg = /[^\\][$]/;
function Tg(t) {
  class e extends Ps {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitEndAnchor(a) {
      this.found = !0;
    }
  }
  return t.filter((i) => {
    const a = i.PATTERN;
    try {
      const s = xs(a), o = new e();
      return o.visit(s), o.found;
    } catch {
      return yg.test(a.source);
    }
  }).map((i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: Te.EOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function Rg(t) {
  return t.filter((n) => n.PATTERN.test("")).map((n) => ({
    message: "Token Type: ->" + n.name + "<- static 'PATTERN' must not match an empty string",
    type: Te.EMPTY_MATCH_PATTERN,
    tokenTypes: [n]
  }));
}
const vg = /[^\\[][\^]|^\^/;
function Eg(t) {
  class e extends Ps {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitStartAnchor(a) {
      this.found = !0;
    }
  }
  return t.filter((i) => {
    const a = i.PATTERN;
    try {
      const s = xs(a), o = new e();
      return o.visit(s), o.found;
    } catch {
      return vg.test(a.source);
    }
  }).map((i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: Te.SOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function $g(t) {
  return t.filter((n) => {
    const i = n[Pr];
    return i instanceof RegExp && (i.multiline || i.global);
  }).map((n) => ({
    message: "Token Type: ->" + n.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: Te.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [n]
  }));
}
function Ag(t) {
  const e = [];
  let r = t.map((a) => t.reduce((s, o) => (a.PATTERN.source === o.PATTERN.source && !e.includes(o) && o.PATTERN !== qe.NA && (e.push(o), s.push(o)), s), []));
  return r = r.filter(Boolean), r.filter((a) => a.length > 1).map((a) => {
    const s = a.map((l) => l.name);
    return {
      message: `The same RegExp pattern ->${a[0].PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,
      type: Te.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: a
    };
  });
}
function Cg(t) {
  return t.filter((n) => {
    if (!Object.hasOwn(n, "GROUP"))
      return !1;
    const i = n.GROUP;
    return i !== qe.SKIPPED && i !== qe.NA && typeof i != "string";
  }).map((n) => ({
    message: "Token Type: ->" + n.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: Te.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [n]
  }));
}
function Sg(t, e) {
  return t.filter((i) => i.PUSH_MODE !== void 0 && !e.includes(i.PUSH_MODE)).map((i) => ({
    message: `Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,
    type: Te.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [i]
  }));
}
function wg(t) {
  const e = [], r = t.reduce((n, i, a) => {
    const s = i.PATTERN;
    return s === qe.NA || (typeof s == "string" ? n.push({ str: s, idx: a, tokenType: i }) : s instanceof RegExp && kg(s) && n.push({ str: s.source, idx: a, tokenType: i })), n;
  }, []);
  return t.forEach((n, i) => {
    r.forEach(({ str: a, idx: s, tokenType: o }) => {
      if (i < s && bg(a, n.PATTERN)) {
        const l = `Token: ->${o.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: l,
          type: Te.UNREACHABLE_PATTERN,
          tokenTypes: [n, o]
        });
      }
    });
  }), e;
}
function bg(t, e) {
  if (e instanceof RegExp) {
    if (Ng(e))
      return !1;
    const r = e.exec(t);
    return r !== null && r.index === 0;
  } else {
    if (typeof e == "function")
      return e(t, 0, [], {});
    if (Object.hasOwn(e, "exec"))
      return e.exec(t, 0, [], {});
    if (typeof e == "string")
      return e === t;
    throw Error("non exhaustive match");
  }
}
function kg(t) {
  return [
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ].find((r) => t.source.indexOf(r) !== -1) === void 0;
}
function Ng(t) {
  return /(\(\?=)|(\(\?!)|(\(\?<=)|(\(\?<!)/.test(t.source);
}
function uu(t) {
  const e = t.ignoreCase ? "iy" : "y";
  return new RegExp(`${t.source}`, e);
}
function _g(t, e, r) {
  const n = [];
  return Object.hasOwn(t, Ci) || n.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Ci + `> property in its definition
`,
    type: Te.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), Object.hasOwn(t, Sa) || n.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Sa + `> property in its definition
`,
    type: Te.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), Object.hasOwn(t, Sa) && Object.hasOwn(t, Ci) && !Object.hasOwn(t.modes, t.defaultMode) && n.push({
    message: `A MultiMode Lexer cannot be initialized with a ${Ci}: <${t.defaultMode}>which does not exist
`,
    type: Te.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), Object.hasOwn(t, Sa) && Object.keys(t.modes).forEach((i) => {
    const a = t.modes[i];
    a.forEach((s, o) => {
      s === void 0 ? n.push({
        message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${i}> at index: <${o}>
`,
        type: Te.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
      }) : Object.hasOwn(s, "LONGER_ALT") && (Array.isArray(s.LONGER_ALT) ? s.LONGER_ALT : [s.LONGER_ALT]).forEach((c) => {
        c !== void 0 && !a.includes(c) && n.push({
          message: `A MultiMode Lexer cannot be initialized with a longer_alt <${c.name}> on token <${s.name}> outside of mode <${i}>
`,
          type: Te.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
        });
      });
    });
  }), n;
}
function Ig(t, e, r) {
  const n = [];
  let i = !1;
  const s = Object.values(t.modes || {}).flat().filter(Boolean).filter((l) => l[Pr] !== qe.NA), o = th(r);
  return e && s.forEach((l) => {
    const c = eh(l, o);
    if (c !== !1) {
      const h = {
        message: xg(l, c),
        type: c.issue,
        tokenType: l
      };
      n.push(h);
    } else
      Object.hasOwn(l, "LINE_BREAKS") ? l.LINE_BREAKS === !0 && (i = !0) : _c(o, l.PATTERN) && (i = !0);
  }), e && !i && n.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: Te.NO_LINE_BREAKS_FLAGS
  }), n;
}
function Pg(t) {
  const e = {};
  return Object.keys(t).forEach((n) => {
    const i = t[n];
    if (Array.isArray(i))
      e[n] = [];
    else
      throw Error("non exhaustive match");
  }), e;
}
function Qd(t) {
  const e = t.PATTERN;
  if (e instanceof RegExp)
    return !1;
  if (typeof e == "function")
    return !0;
  if (Object.hasOwn(e, "exec"))
    return !0;
  if (typeof e == "string")
    return !1;
  throw Error("non exhaustive match");
}
function Og(t) {
  return typeof t == "string" && t.length === 1 ? t.charCodeAt(0) : !1;
}
const Lg = {
  // implements /\n|\r\n?/g.test
  test: function(t) {
    const e = t.length;
    for (let r = this.lastIndex; r < e; r++) {
      const n = t.charCodeAt(r);
      if (n === 10)
        return this.lastIndex = r + 1, !0;
      if (n === 13)
        return t.charCodeAt(r + 1) === 10 ? this.lastIndex = r + 2 : this.lastIndex = r + 1, !0;
    }
    return !1;
  },
  lastIndex: 0
};
function eh(t, e) {
  if (Object.hasOwn(t, "LINE_BREAKS"))
    return !1;
  if (t.PATTERN instanceof RegExp) {
    try {
      _c(e, t.PATTERN);
    } catch (r) {
      return {
        issue: Te.IDENTIFY_TERMINATOR,
        errMsg: r.message
      };
    }
    return !1;
  } else {
    if (typeof t.PATTERN == "string")
      return !1;
    if (Qd(t))
      return { issue: Te.CUSTOM_LINE_BREAK };
    throw Error("non exhaustive match");
  }
}
function xg(t, e) {
  if (e.issue === Te.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === Te.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
function th(t) {
  return t.map((r) => typeof r == "string" ? r.charCodeAt(0) : r);
}
function lo(t, e, r) {
  t[e] === void 0 ? t[e] = [r] : t[e].push(r);
}
const Si = 256;
let qa = [];
function cr(t) {
  return t < Si ? t : qa[t];
}
function Dg() {
  if (qa.length === 0) {
    qa = new Array(65536);
    for (let t = 0; t < 65536; t++)
      qa[t] = t > 255 ? 255 + ~~(t / 255) : t;
  }
}
function Ji(t, e) {
  const r = t.tokenTypeIdx;
  return r === e.tokenTypeIdx ? !0 : e.isParent === !0 && e.categoryMatchesMap[r] === !0;
}
function os(t, e) {
  return t.tokenTypeIdx === e.tokenTypeIdx;
}
let fu = 1;
const rh = {};
function Zi(t) {
  const e = Mg(t);
  Fg(e), jg(e), Gg(e), e.forEach((r) => {
    r.isParent = r.categoryMatches.length > 0;
  });
}
function Mg(t) {
  let e = [...t], r = t, n = !0;
  for (; n; ) {
    r = r.map((a) => a.CATEGORIES).flat().filter(Boolean);
    const i = r.filter((a) => !e.includes(a));
    e = e.concat(i), i.length === 0 ? n = !1 : r = i;
  }
  return e;
}
function Fg(t) {
  t.forEach((e) => {
    ih(e) || (rh[fu] = e, e.tokenTypeIdx = fu++), du(e) && !Array.isArray(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), du(e) || (e.CATEGORIES = []), zg(e) || (e.categoryMatches = []), Ug(e) || (e.categoryMatchesMap = {});
  });
}
function Gg(t) {
  t.forEach((e) => {
    e.categoryMatches = [], Object.keys(e.categoryMatchesMap).forEach((r) => {
      e.categoryMatches.push(rh[r].tokenTypeIdx);
    });
  });
}
function jg(t) {
  t.forEach((e) => {
    nh([], e);
  });
}
function nh(t, e) {
  t.forEach((r) => {
    e.categoryMatchesMap[r.tokenTypeIdx] = !0;
  }), e.CATEGORIES.forEach((r) => {
    const n = t.concat(e);
    n.includes(r) || nh(n, r);
  });
}
function ih(t) {
  return Object.hasOwn(t ?? {}, "tokenTypeIdx");
}
function du(t) {
  return Object.hasOwn(t ?? {}, "CATEGORIES");
}
function zg(t) {
  return Object.hasOwn(t ?? {}, "categoryMatches");
}
function Ug(t) {
  return Object.hasOwn(t ?? {}, "categoryMatchesMap");
}
function Bg(t) {
  return Object.hasOwn(t ?? {}, "tokenTypeIdx");
}
const Bo = {
  buildUnableToPopLexerModeMessage(t) {
    return `Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(t, e, r, n, i, a) {
    return `unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`;
  }
};
var Te;
(function(t) {
  t[t.MISSING_PATTERN = 0] = "MISSING_PATTERN", t[t.INVALID_PATTERN = 1] = "INVALID_PATTERN", t[t.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", t[t.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", t[t.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", t[t.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", t[t.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", t[t.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", t[t.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", t[t.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", t[t.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", t[t.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", t[t.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(Te || (Te = {}));
const wi = {
  deferDefinitionErrorsHandling: !1,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [`
`, "\r"],
  ensureOptimizations: !1,
  safeMode: !1,
  errorMessageProvider: Bo,
  traceInitPerf: !1,
  skipValidations: !1,
  recoveryEnabled: !0
};
Object.freeze(wi);
class qe {
  constructor(e, r = wi) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, a) => {
      if (this.traceInitPerf === !0) {
        this.traceInitIndent++;
        const s = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${s}--> <${i}>`);
        const { time: o, value: l } = Xd(a), c = o > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && c(`${s}<-- <${i}> time: ${o}ms`), this.traceInitIndent--, l;
      } else
        return a();
    }, typeof r == "boolean")
      throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = Object.assign({}, wi, r);
    const n = this.config.traceInitPerf;
    n === !0 ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : typeof n == "number" && (this.traceInitMaxIdent = n, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let i, a = !0;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === wi.lineTerminatorsPattern)
          this.config.lineTerminatorsPattern = Lg;
        else if (this.config.lineTerminatorCharacters === wi.lineTerminatorCharacters)
          throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (r.safeMode && r.ensureOptimizations)
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), Array.isArray(e) ? i = {
          modes: { defaultMode: [...e] },
          defaultMode: Ci
        } : (a = !1, i = Object.assign({}, e));
      }), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(_g(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(Ig(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), i.modes = i.modes ? i.modes : {}, Object.entries(i.modes).forEach(([o, l]) => {
        i.modes[o] = l.filter((c) => c !== void 0);
      });
      const s = Object.keys(i.modes);
      if (Object.entries(i.modes).forEach(([o, l]) => {
        this.TRACE_INIT(`Mode: <${o}> processing`, () => {
          if (this.modes.push(o), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(hg(l, s));
          }), this.lexerDefinitionErrors.length === 0) {
            Zi(l);
            let c;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              c = dg(l, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: r.positionTracking,
                ensureOptimizations: r.ensureOptimizations,
                safeMode: r.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[o] = c.patternIdxToConfig, this.charCodeToPatternIdxToConfig[o] = c.charCodeToPatternIdxToConfig, this.emptyGroups = Object.assign({}, this.emptyGroups, c.emptyGroups), this.hasCustom = c.hasCustom || this.hasCustom, this.canModeBeOptimized[o] = c.canBeOptimized;
          }
        });
      }), this.defaultMode = i.defaultMode, this.lexerDefinitionErrors.length > 0 && !this.config.deferDefinitionErrorsHandling) {
        const l = this.lexerDefinitionErrors.map((c) => c.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + l);
      }
      this.lexerDefinitionWarning.forEach((o) => {
        Hd(o.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (a && (this.handleModes = () => {
        }), this.trackStartLines === !1 && (this.computeNewColumn = (o) => o), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = () => {
        }), /full/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createOffsetOnlyToken;
        else
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        const o = Object.entries(this.canModeBeOptimized).reduce((l, [c, f]) => (f === !1 && l.push(c), l), []);
        if (r.ensureOptimizations && o.length > 0)
          throw Error(`Lexer Modes: < ${o.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        lg();
      }), this.TRACE_INIT("toFastProperties", () => {
        Yd(this);
      });
    });
  }
  tokenize(e, r = this.defaultMode) {
    if (this.lexerDefinitionErrors.length > 0) {
      const i = this.lexerDefinitionErrors.map((a) => a.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + i);
    }
    return this.tokenizeInternal(e, r);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(e, r) {
    let n, i, a, s, o, l, c, f, h, p, g, C, b, D, k;
    const O = e, N = O.length;
    let L = 0, H = 0;
    const ee = this.hasCustom ? 0 : Math.floor(e.length / 10), te = new Array(ee), Ae = [];
    let ke = this.trackStartLines ? 1 : void 0, Re = this.trackStartLines ? 1 : void 0;
    const w = Pg(this.emptyGroups), E = this.trackStartLines, m = this.config.lineTerminatorsPattern;
    let A = 0, y = [], T = [];
    const v = [], I = [];
    Object.freeze(I);
    let x = !1;
    const P = (z) => {
      if (v.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      z.tokenType.PUSH_MODE === void 0) {
        const Z = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(z);
        Ae.push({
          offset: z.startOffset,
          line: z.startLine,
          column: z.startColumn,
          length: z.image.length,
          message: Z
        });
      } else {
        v.pop();
        const Z = v.at(-1);
        y = this.patternIdxToConfig[Z], T = this.charCodeToPatternIdxToConfig[Z], A = y.length;
        const Pe = this.canModeBeOptimized[Z] && this.config.safeMode === !1;
        T && Pe ? x = !0 : x = !1;
      }
    };
    function j(z) {
      v.push(z), T = this.charCodeToPatternIdxToConfig[z], y = this.patternIdxToConfig[z], A = y.length, A = y.length;
      const Z = this.canModeBeOptimized[z] && this.config.safeMode === !1;
      T && Z ? x = !0 : x = !1;
    }
    j.call(this, r);
    let F;
    const re = this.config.recoveryEnabled;
    for (; L < N; ) {
      l = null, h = -1;
      const z = O.charCodeAt(L);
      let Z;
      if (x) {
        const he = cr(z), oe = T[he];
        Z = oe !== void 0 ? oe : I;
      } else
        Z = y;
      const Pe = Z.length;
      for (n = 0; n < Pe; n++) {
        F = Z[n];
        const he = F.pattern;
        c = null;
        const oe = F.short;
        if (oe !== !1 ? z === oe && (h = 1, l = he) : F.isCustom === !0 ? (k = he.exec(O, L, te, w), k !== null ? (l = k[0], h = l.length, k.payload !== void 0 && (c = k.payload)) : l = null) : (he.lastIndex = L, h = this.matchLength(he, e, L)), h !== -1) {
          if (o = F.longerAlt, o !== void 0) {
            l = e.substring(L, L + h);
            const Ne = o.length;
            for (a = 0; a < Ne; a++) {
              const Oe = y[o[a]], Ce = Oe.pattern;
              if (f = null, Oe.isCustom === !0 ? (k = Ce.exec(O, L, te, w), k !== null ? (s = k[0], k.payload !== void 0 && (f = k.payload)) : s = null) : (Ce.lastIndex = L, s = this.match(Ce, e, L)), s && s.length > l.length) {
                l = s, h = s.length, c = f, F = Oe;
                break;
              }
            }
          }
          break;
        }
      }
      if (h !== -1) {
        if (p = F.group, p !== void 0 && (l = l !== null ? l : e.substring(L, L + h), g = F.tokenTypeIdx, C = this.createTokenInstance(l, L, g, F.tokenType, ke, Re, h), this.handlePayload(C, c), p === !1 ? H = this.addToken(te, H, C) : w[p].push(C)), E === !0 && F.canLineTerminator === !0) {
          let he = 0, oe, Ne;
          m.lastIndex = 0;
          do
            l = l !== null ? l : e.substring(L, L + h), oe = m.test(l), oe === !0 && (Ne = m.lastIndex - 1, he++);
          while (oe === !0);
          he !== 0 ? (ke = ke + he, Re = h - Ne, this.updateTokenEndLineColumnLocation(C, p, Ne, he, ke, Re, h)) : Re = this.computeNewColumn(Re, h);
        } else
          Re = this.computeNewColumn(Re, h);
        L = L + h, this.handleModes(F, P, j, C);
      } else {
        const he = L, oe = ke, Ne = Re;
        let Oe = re === !1;
        for (; Oe === !1 && L < N; )
          for (L++, i = 0; i < A; i++) {
            const Ce = y[i], X = Ce.pattern, Je = Ce.short;
            if (Je !== !1 ? O.charCodeAt(L) === Je && (Oe = !0) : Ce.isCustom === !0 ? Oe = X.exec(O, L, te, w) !== null : (X.lastIndex = L, Oe = X.exec(e) !== null), Oe === !0)
              break;
          }
        if (b = L - he, Re = this.computeNewColumn(Re, b), D = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(O, he, b, oe, Ne, v.at(-1)), Ae.push({
          offset: he,
          line: oe,
          column: Ne,
          length: b,
          message: D
        }), re === !1)
          break;
      }
    }
    return this.hasCustom || (te.length = H), {
      tokens: te,
      groups: w,
      errors: Ae
    };
  }
  handleModes(e, r, n, i) {
    if (e.pop === !0) {
      const a = e.push;
      r(i), a !== void 0 && n.call(this, a);
    } else e.push !== void 0 && n.call(this, e.push);
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(e, r, n, i, a, s, o) {
    let l, c;
    r !== void 0 && (l = n === o - 1, c = l ? -1 : 0, i === 1 && l === !0 || (e.endLine = a + c, e.endColumn = s - 1 + -c));
  }
  computeNewColumn(e, r) {
    return e + r;
  }
  createOffsetOnlyToken(e, r, n, i) {
    return {
      image: e,
      startOffset: r,
      tokenTypeIdx: n,
      tokenType: i
    };
  }
  createStartOnlyToken(e, r, n, i, a, s) {
    return {
      image: e,
      startOffset: r,
      startLine: a,
      startColumn: s,
      tokenTypeIdx: n,
      tokenType: i
    };
  }
  createFullToken(e, r, n, i, a, s, o) {
    return {
      image: e,
      startOffset: r,
      endOffset: r + o - 1,
      startLine: a,
      endLine: a,
      startColumn: s,
      endColumn: s + o - 1,
      tokenTypeIdx: n,
      tokenType: i
    };
  }
  addTokenUsingPush(e, r, n) {
    return e.push(n), r;
  }
  addTokenUsingMemberAccess(e, r, n) {
    return e[r] = n, r++, r;
  }
  handlePayloadNoCustom(e, r) {
  }
  handlePayloadWithCustom(e, r) {
    r !== null && (e.payload = r);
  }
  match(e, r, n) {
    return e.test(r) === !0 ? r.substring(n, e.lastIndex) : null;
  }
  matchLength(e, r, n) {
    return e.test(r) === !0 ? e.lastIndex - n : -1;
  }
}
qe.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it will be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
qe.NA = /NOT_APPLICABLE/;
function ln(t) {
  return ah(t) ? t.LABEL : t.name;
}
function ah(t) {
  return typeof t.LABEL == "string" && t.LABEL !== "";
}
const Wg = "parent", hu = "categories", pu = "label", mu = "group", gu = "push_mode", yu = "pop_mode", Tu = "longer_alt", Ru = "line_breaks", vu = "start_chars_hint";
function sh(t) {
  return Kg(t);
}
function Kg(t) {
  const e = t.pattern, r = {};
  if (r.name = t.name, e !== void 0 && (r.PATTERN = e), Object.hasOwn(t, Wg))
    throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return Object.hasOwn(t, hu) && (r.CATEGORIES = t[hu]), Zi([r]), Object.hasOwn(t, pu) && (r.LABEL = t[pu]), Object.hasOwn(t, mu) && (r.GROUP = t[mu]), Object.hasOwn(t, yu) && (r.POP_MODE = t[yu]), Object.hasOwn(t, gu) && (r.PUSH_MODE = t[gu]), Object.hasOwn(t, Tu) && (r.LONGER_ALT = t[Tu]), Object.hasOwn(t, Ru) && (r.LINE_BREAKS = t[Ru]), Object.hasOwn(t, vu) && (r.START_CHARS_HINT = t[vu]), r;
}
const ur = sh({ name: "EOF", pattern: qe.NA });
Zi([ur]);
function Ic(t, e, r, n, i, a, s, o) {
  return {
    image: e,
    startOffset: r,
    endOffset: n,
    startLine: i,
    endLine: a,
    startColumn: s,
    endColumn: o,
    tokenTypeIdx: t.tokenTypeIdx,
    tokenType: t
  };
}
function oh(t, e) {
  return Ji(t, e);
}
const sn = {
  buildMismatchTokenMessage({ expected: t, actual: e, previous: r, ruleName: n }) {
    return `Expecting ${ah(t) ? `--> ${ln(t)} <--` : `token of type --> ${t.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant: t, ruleName: e }) {
    return "Redundant input, expecting EOF but found: " + t.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt: t, actual: e, previous: r, customUserDescription: n, ruleName: i }) {
    const a = "Expecting: ", o = `
but found: '` + e[0].image + "'";
    if (n)
      return a + n + o;
    {
      const h = `one of these possible Token sequences:
${t.reduce((p, g) => p.concat(g), []).map((p) => `[${p.map((g) => ln(g)).join(", ")}]`).map((p, g) => `  ${g + 1}. ${p}`).join(`
`)}`;
      return a + h + o;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths: t, actual: e, customUserDescription: r, ruleName: n }) {
    const i = "Expecting: ", s = `
but found: '` + e[0].image + "'";
    if (r)
      return i + r + s;
    {
      const l = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${t.map((c) => `[${c.map((f) => ln(f)).join(",")}]`).join(" ,")}>`;
      return i + l + s;
    }
  }
};
Object.freeze(sn);
const Vg = {
  buildRuleNotFoundError(t, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + t.name + "<-";
  }
}, br = {
  buildDuplicateFoundError(t, e) {
    function r(f) {
      return f instanceof se ? f.terminalType.name : f instanceof We ? f.nonTerminalName : "";
    }
    const n = t.name, i = e[0], a = i.idx, s = vt(i), o = r(i), l = a > 0;
    let c = `->${s}${l ? a : ""}<- ${o ? `with argument: ->${o}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    return c = c.replace(/[ \t]+/g, " "), c = c.replace(/\s\s+/g, `
`), c;
  },
  buildNamespaceConflictError(t) {
    return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
  },
  buildAlternationPrefixAmbiguityError(t) {
    const e = t.prefixPath.map((i) => ln(i)).join(", "), r = t.alternation.idx === 0 ? "" : t.alternation.idx;
    return `Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(t) {
    const e = t.alternation.idx === 0 ? "" : t.alternation.idx, r = t.prefixPath.length === 0;
    let n = `Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${e}> inside <${t.topLevelRule.name}> Rule,
`;
    if (r)
      n += `These alternatives are all empty (match no tokens), making them indistinguishable.
Only the last alternative may be empty.
`;
    else {
      const i = t.prefixPath.map((a) => ln(a)).join(", ");
      n += `<${i}> may appears as a prefix path in all these alternatives.
`;
    }
    return n += `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n;
  },
  buildEmptyRepetitionError(t) {
    let e = vt(t.repetition);
    return t.repetition.idx !== 0 && (e += t.repetition.idx), `The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(t) {
    return "deprecated";
  },
  buildEmptyAlternationError(t) {
    return `Ambiguous empty alternative: <${t.emptyChoiceIdx + 1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
  },
  buildTooManyAlternativesError(t) {
    return `An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length + 1} alternatives.`;
  },
  buildLeftRecursionError(t) {
    const e = t.topLevelRule.name, r = t.leftRecursionPath.map((a) => a.name), n = `${e} --> ${r.concat([e]).join(" --> ")}`;
    return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(t) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(t) {
    let e;
    return t.topLevelRule instanceof qn ? e = t.topLevelRule.name : e = t.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`;
  }
};
function qg(t, e) {
  const r = new Hg(t, e);
  return r.resolveRefs(), r.errors;
}
class Hg extends Hn {
  constructor(e, r) {
    super(), this.nameToTopRule = e, this.errMsgProvider = r, this.errors = [];
  }
  resolveRefs() {
    Object.values(this.nameToTopRule).forEach((e) => {
      this.currTopLevel = e, e.accept(this);
    });
  }
  visitNonTerminal(e) {
    const r = this.nameToTopRule[e.nonTerminalName];
    if (r)
      e.referencedRule = r;
    else {
      const n = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
      this.errors.push({
        message: n,
        type: Ke.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
}
class Xg extends Ls {
  constructor(e, r) {
    super(), this.topProd = e, this.path = r, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
  }
  startWalking() {
    if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name)
      throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = [...this.path.ruleStack].reverse(), this.occurrenceStack = [...this.path.occurrenceStack].reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e, r = []) {
    this.found || super.walk(e, r);
  }
  walkProdRef(e, r, n) {
    if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
      const i = r.concat(n);
      this.updateExpectedNext(), this.walk(e.referencedRule, i);
    }
  }
  updateExpectedNext() {
    this.ruleStack.length === 0 ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
}
class Yg extends Xg {
  constructor(e, r) {
    super(e, r), this.path = r, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, r, n) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      const i = r.concat(n), a = new He({ definition: i });
      this.possibleTokTypes = Yi(a), this.found = !0;
    }
  }
}
class Ds extends Ls {
  constructor(e, r) {
    super(), this.topRule = e, this.occurrence = r, this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
}
class Jg extends Ds {
  walkMany(e, r, n) {
    if (e.idx === this.occurrence) {
      const i = r.concat(n)[0];
      this.result.isEndOfRule = i === void 0, i instanceof se && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkMany(e, r, n);
  }
}
class Eu extends Ds {
  walkManySep(e, r, n) {
    if (e.idx === this.occurrence) {
      const i = r.concat(n)[0];
      this.result.isEndOfRule = i === void 0, i instanceof se && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkManySep(e, r, n);
  }
}
class Zg extends Ds {
  walkAtLeastOne(e, r, n) {
    if (e.idx === this.occurrence) {
      const i = r.concat(n)[0];
      this.result.isEndOfRule = i === void 0, i instanceof se && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOne(e, r, n);
  }
}
class $u extends Ds {
  walkAtLeastOneSep(e, r, n) {
    if (e.idx === this.occurrence) {
      const i = r.concat(n)[0];
      this.result.isEndOfRule = i === void 0, i instanceof se && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOneSep(e, r, n);
  }
}
function Wo(t, e, r = []) {
  r = [...r];
  let n = [], i = 0;
  function a(o) {
    return o.concat(t.slice(i + 1));
  }
  function s(o) {
    const l = Wo(a(o), e, r);
    return n.concat(l);
  }
  for (; r.length < e && i < t.length; ) {
    const o = t[i];
    if (o instanceof He)
      return s(o.definition);
    if (o instanceof We)
      return s(o.definition);
    if (o instanceof Me)
      n = s(o.definition);
    else if (o instanceof tt) {
      const l = o.definition.concat([
        new ye({
          definition: o.definition
        })
      ]);
      return s(l);
    } else if (o instanceof rt) {
      const l = [
        new He({ definition: o.definition }),
        new ye({
          definition: [new se({ terminalType: o.separator })].concat(o.definition)
        })
      ];
      return s(l);
    } else if (o instanceof Xe) {
      const l = o.definition.concat([
        new ye({
          definition: [new se({ terminalType: o.separator })].concat(o.definition)
        })
      ]);
      n = s(l);
    } else if (o instanceof ye) {
      const l = o.definition.concat([
        new ye({
          definition: o.definition
        })
      ]);
      n = s(l);
    } else {
      if (o instanceof Ye)
        return o.definition.forEach((l) => {
          l.definition.length !== 0 && (n = s(l.definition));
        }), n;
      if (o instanceof se)
        r.push(o.terminalType);
      else
        throw Error("non exhaustive match");
    }
    i++;
  }
  return n.push({
    partialPath: r,
    suffixDef: t.slice(i)
  }), n;
}
function Qg(t, e, r, n) {
  const i = "EXIT_NONE_TERMINAL", a = [i], s = "EXIT_ALTERNATIVE";
  let o = !1;
  const l = e.length, c = l - n - 1, f = [], h = [];
  for (h.push({
    idx: -1,
    def: t,
    ruleStack: [],
    occurrenceStack: []
  }); h.length !== 0; ) {
    const p = h.pop();
    if (p === s) {
      o && h.at(-1).idx <= c && h.pop();
      continue;
    }
    const g = p.def, C = p.idx, b = p.ruleStack, D = p.occurrenceStack;
    if (g.length === 0)
      continue;
    const k = g[0];
    if (k === i) {
      const O = {
        idx: C,
        def: g.slice(1),
        ruleStack: b.slice(0, -1),
        occurrenceStack: D.slice(0, -1)
      };
      h.push(O);
    } else if (k instanceof se)
      if (C < l - 1) {
        const O = C + 1, N = e[O];
        if (r(N, k.terminalType)) {
          const L = {
            idx: O,
            def: g.slice(1),
            ruleStack: b,
            occurrenceStack: D
          };
          h.push(L);
        }
      } else if (C === l - 1)
        f.push({
          nextTokenType: k.terminalType,
          nextTokenOccurrence: k.idx,
          ruleStack: b,
          occurrenceStack: D
        }), o = !0;
      else
        throw Error("non exhaustive match");
    else if (k instanceof We) {
      const O = [...b];
      O.push(k.nonTerminalName);
      const N = [...D];
      N.push(k.idx);
      const L = {
        idx: C,
        def: k.definition.concat(a, g.slice(1)),
        ruleStack: O,
        occurrenceStack: N
      };
      h.push(L);
    } else if (k instanceof Me) {
      const O = {
        idx: C,
        def: g.slice(1),
        ruleStack: b,
        occurrenceStack: D
      };
      h.push(O), h.push(s);
      const N = {
        idx: C,
        def: k.definition.concat(g.slice(1)),
        ruleStack: b,
        occurrenceStack: D
      };
      h.push(N);
    } else if (k instanceof tt) {
      const O = new ye({
        definition: k.definition,
        idx: k.idx
      }), N = k.definition.concat([O], g.slice(1)), L = {
        idx: C,
        def: N,
        ruleStack: b,
        occurrenceStack: D
      };
      h.push(L);
    } else if (k instanceof rt) {
      const O = new se({
        terminalType: k.separator
      }), N = new ye({
        definition: [O].concat(k.definition),
        idx: k.idx
      }), L = k.definition.concat([N], g.slice(1)), H = {
        idx: C,
        def: L,
        ruleStack: b,
        occurrenceStack: D
      };
      h.push(H);
    } else if (k instanceof Xe) {
      const O = {
        idx: C,
        def: g.slice(1),
        ruleStack: b,
        occurrenceStack: D
      };
      h.push(O), h.push(s);
      const N = new se({
        terminalType: k.separator
      }), L = new ye({
        definition: [N].concat(k.definition),
        idx: k.idx
      }), H = k.definition.concat([L], g.slice(1)), ee = {
        idx: C,
        def: H,
        ruleStack: b,
        occurrenceStack: D
      };
      h.push(ee);
    } else if (k instanceof ye) {
      const O = {
        idx: C,
        def: g.slice(1),
        ruleStack: b,
        occurrenceStack: D
      };
      h.push(O), h.push(s);
      const N = new ye({
        definition: k.definition,
        idx: k.idx
      }), L = k.definition.concat([N], g.slice(1)), H = {
        idx: C,
        def: L,
        ruleStack: b,
        occurrenceStack: D
      };
      h.push(H);
    } else if (k instanceof Ye)
      for (let O = k.definition.length - 1; O >= 0; O--) {
        const N = k.definition[O], L = {
          idx: C,
          def: N.definition.concat(g.slice(1)),
          ruleStack: b,
          occurrenceStack: D
        };
        h.push(L), h.push(s);
      }
    else if (k instanceof He)
      h.push({
        idx: C,
        def: k.definition.concat(g.slice(1)),
        ruleStack: b,
        occurrenceStack: D
      });
    else if (k instanceof qn)
      h.push(ey(k, C, b, D));
    else
      throw Error("non exhaustive match");
  }
  return f;
}
function ey(t, e, r, n) {
  const i = [...r];
  i.push(t.name);
  const a = [...n];
  return a.push(1), {
    idx: e,
    def: t.definition,
    ruleStack: i,
    occurrenceStack: a
  };
}
var ue;
(function(t) {
  t[t.OPTION = 0] = "OPTION", t[t.REPETITION = 1] = "REPETITION", t[t.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", t[t.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", t[t.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", t[t.ALTERNATION = 5] = "ALTERNATION";
})(ue || (ue = {}));
function Pc(t) {
  if (t instanceof Me || t === "Option")
    return ue.OPTION;
  if (t instanceof ye || t === "Repetition")
    return ue.REPETITION;
  if (t instanceof tt || t === "RepetitionMandatory")
    return ue.REPETITION_MANDATORY;
  if (t instanceof rt || t === "RepetitionMandatoryWithSeparator")
    return ue.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (t instanceof Xe || t === "RepetitionWithSeparator")
    return ue.REPETITION_WITH_SEPARATOR;
  if (t instanceof Ye || t === "Alternation")
    return ue.ALTERNATION;
  throw Error("non exhaustive match");
}
function Au(t) {
  const { occurrence: e, rule: r, prodType: n, maxLookahead: i } = t, a = Pc(n);
  return a === ue.ALTERNATION ? Ms(e, r, i) : Fs(e, r, a, i);
}
function ty(t, e, r, n, i, a) {
  const s = Ms(t, e, r), o = uh(s) ? os : Ji;
  return a(s, n, o, i);
}
function ry(t, e, r, n, i, a) {
  const s = Fs(t, e, i, r), o = uh(s) ? os : Ji;
  return a(s[0], o, n);
}
function ny(t, e, r, n) {
  const i = t.length, a = t.every((s) => s.every((o) => o.length === 1));
  if (e)
    return function(s) {
      const o = s.map((l) => l.GATE);
      for (let l = 0; l < i; l++) {
        const c = t[l], f = c.length, h = o[l];
        if (!(h !== void 0 && h.call(this) === !1))
          e: for (let p = 0; p < f; p++) {
            const g = c[p], C = g.length;
            for (let b = 0; b < C; b++) {
              const D = this.LA_FAST(b + 1);
              if (r(D, g[b]) === !1)
                continue e;
            }
            return l;
          }
      }
    };
  if (a && !n) {
    const o = t.map((l) => l.flat()).reduce((l, c, f) => (c.forEach((h) => {
      h.tokenTypeIdx in l || (l[h.tokenTypeIdx] = f), h.categoryMatches.forEach((p) => {
        Object.hasOwn(l, p) || (l[p] = f);
      });
    }), l), {});
    return function() {
      const l = this.LA_FAST(1);
      return o[l.tokenTypeIdx];
    };
  } else
    return function() {
      for (let s = 0; s < i; s++) {
        const o = t[s], l = o.length;
        e: for (let c = 0; c < l; c++) {
          const f = o[c], h = f.length;
          for (let p = 0; p < h; p++) {
            const g = this.LA_FAST(p + 1);
            if (r(g, f[p]) === !1)
              continue e;
          }
          return s;
        }
      }
    };
}
function iy(t, e, r) {
  const n = t.every((a) => a.length === 1), i = t.length;
  if (n && !r) {
    const a = t.flat();
    if (a.length === 1 && a[0].categoryMatches.length === 0) {
      const o = a[0].tokenTypeIdx;
      return function() {
        return this.LA_FAST(1).tokenTypeIdx === o;
      };
    } else {
      const s = a.reduce((o, l, c) => (o[l.tokenTypeIdx] = !0, l.categoryMatches.forEach((f) => {
        o[f] = !0;
      }), o), []);
      return function() {
        const o = this.LA_FAST(1);
        return s[o.tokenTypeIdx] === !0;
      };
    }
  } else
    return function() {
      e: for (let a = 0; a < i; a++) {
        const s = t[a], o = s.length;
        for (let l = 0; l < o; l++) {
          const c = this.LA_FAST(l + 1);
          if (e(c, s[l]) === !1)
            continue e;
        }
        return !0;
      }
      return !1;
    };
}
class ay extends Ls {
  constructor(e, r, n) {
    super(), this.topProd = e, this.targetOccurrence = r, this.targetProdType = n;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e, r, n, i) {
    return e.idx === this.targetOccurrence && this.targetProdType === r ? (this.restDef = n.concat(i), !0) : !1;
  }
  walkOption(e, r, n) {
    this.checkIsTarget(e, ue.OPTION, r, n) || super.walkOption(e, r, n);
  }
  walkAtLeastOne(e, r, n) {
    this.checkIsTarget(e, ue.REPETITION_MANDATORY, r, n) || super.walkOption(e, r, n);
  }
  walkAtLeastOneSep(e, r, n) {
    this.checkIsTarget(e, ue.REPETITION_MANDATORY_WITH_SEPARATOR, r, n) || super.walkOption(e, r, n);
  }
  walkMany(e, r, n) {
    this.checkIsTarget(e, ue.REPETITION, r, n) || super.walkOption(e, r, n);
  }
  walkManySep(e, r, n) {
    this.checkIsTarget(e, ue.REPETITION_WITH_SEPARATOR, r, n) || super.walkOption(e, r, n);
  }
}
class lh extends Hn {
  constructor(e, r, n) {
    super(), this.targetOccurrence = e, this.targetProdType = r, this.targetRef = n, this.result = [];
  }
  checkIsTarget(e, r) {
    e.idx === this.targetOccurrence && this.targetProdType === r && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, ue.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, ue.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, ue.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, ue.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, ue.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, ue.ALTERNATION);
  }
}
function Cu(t) {
  const e = new Array(t);
  for (let r = 0; r < t; r++)
    e[r] = [];
  return e;
}
function co(t) {
  let e = [""];
  for (let r = 0; r < t.length; r++) {
    const n = t[r], i = [];
    for (let a = 0; a < e.length; a++) {
      const s = e[a];
      i.push(s + "_" + n.tokenTypeIdx);
      for (let o = 0; o < n.categoryMatches.length; o++) {
        const l = "_" + n.categoryMatches[o];
        i.push(s + l);
      }
    }
    e = i;
  }
  return e;
}
function sy(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    if (n === r)
      continue;
    const i = t[n];
    for (let a = 0; a < e.length; a++) {
      const s = e[a];
      if (i[s] === !0)
        return !1;
    }
  }
  return !0;
}
function ch(t, e) {
  const r = t.map((s) => Wo([s], 1)), n = Cu(r.length), i = r.map((s) => {
    const o = {};
    return s.forEach((l) => {
      co(l.partialPath).forEach((f) => {
        o[f] = !0;
      });
    }), o;
  });
  let a = r;
  for (let s = 1; s <= e; s++) {
    const o = a;
    a = Cu(o.length);
    for (let l = 0; l < o.length; l++) {
      const c = o[l];
      for (let f = 0; f < c.length; f++) {
        const h = c[f].partialPath, p = c[f].suffixDef, g = co(h);
        if (sy(i, g, l) || p.length === 0 || h.length === e) {
          const b = n[l];
          if (Ko(b, h) === !1) {
            b.push(h);
            for (let D = 0; D < g.length; D++) {
              const k = g[D];
              i[l][k] = !0;
            }
          }
        } else {
          const b = Wo(p, s + 1, h);
          a[l] = a[l].concat(b), b.forEach((D) => {
            co(D.partialPath).forEach((O) => {
              i[l][O] = !0;
            });
          });
        }
      }
    }
  }
  return n;
}
function Ms(t, e, r, n) {
  const i = new lh(t, ue.ALTERNATION, n);
  return e.accept(i), ch(i.result, r);
}
function Fs(t, e, r, n) {
  const i = new lh(t, r);
  e.accept(i);
  const a = i.result, o = new ay(e, t, r).startWalking(), l = new He({ definition: a }), c = new He({ definition: o });
  return ch([l, c], n);
}
function Ko(t, e) {
  e: for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (n.length === e.length) {
      for (let i = 0; i < n.length; i++) {
        const a = e[i], s = n[i];
        if ((a === s || s.categoryMatchesMap[a.tokenTypeIdx] !== void 0) === !1)
          continue e;
      }
      return !0;
    }
  }
  return !1;
}
function oy(t, e) {
  return t.length < e.length && t.every((r, n) => {
    const i = e[n];
    return r === i || i.categoryMatchesMap[r.tokenTypeIdx];
  });
}
function uh(t) {
  return t.every((e) => e.every((r) => r.every((n) => n.categoryMatches.length === 0)));
}
function ly(t) {
  return t.lookaheadStrategy.validate({
    rules: t.rules,
    tokenTypes: t.tokenTypes,
    grammarName: t.grammarName
  }).map((r) => Object.assign({ type: Ke.CUSTOM_LOOKAHEAD_VALIDATION }, r));
}
function cy(t, e, r, n) {
  const i = t.flatMap((l) => uy(l, r)), a = $y(t, e, r), s = t.flatMap((l) => Ty(l, r)), o = t.flatMap((l) => hy(l, t, n, r));
  return i.concat(a, s, o);
}
function uy(t, e) {
  const r = new dy();
  t.accept(r);
  const n = r.allProductions, i = Object.groupBy(n, fy), a = Object.fromEntries(Object.entries(i).filter(([o, l]) => l.length > 1));
  return Object.values(a).map((o) => {
    const l = o[0], c = e.buildDuplicateFoundError(t, o), f = vt(l), h = {
      message: c,
      type: Ke.DUPLICATE_PRODUCTIONS,
      ruleName: t.name,
      dslName: f,
      occurrence: l.idx
    }, p = fh(l);
    return p && (h.parameter = p), h;
  });
}
function fy(t) {
  return `${vt(t)}_#_${t.idx}_#_${fh(t)}`;
}
function fh(t) {
  return t instanceof se ? t.terminalType.name : t instanceof We ? t.nonTerminalName : "";
}
class dy extends Hn {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitNonTerminal(e) {
    this.allProductions.push(e);
  }
  visitOption(e) {
    this.allProductions.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
  visitAlternation(e) {
    this.allProductions.push(e);
  }
  visitTerminal(e) {
    this.allProductions.push(e);
  }
}
function hy(t, e, r, n) {
  const i = [];
  if (e.reduce((s, o) => o.name === t.name ? s + 1 : s, 0) > 1) {
    const s = n.buildDuplicateRuleNameError({
      topLevelRule: t,
      grammarName: r
    });
    i.push({
      message: s,
      type: Ke.DUPLICATE_RULE_NAME,
      ruleName: t.name
    });
  }
  return i;
}
function py(t, e, r) {
  const n = [];
  let i;
  return e.includes(t) || (i = `Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `, n.push({
    message: i,
    type: Ke.INVALID_RULE_OVERRIDE,
    ruleName: t
  })), n;
}
function dh(t, e, r, n = []) {
  const i = [], a = Ha(e.definition);
  if (a.length === 0)
    return [];
  {
    const s = t.name;
    a.includes(t) && i.push({
      message: r.buildLeftRecursionError({
        topLevelRule: t,
        leftRecursionPath: n
      }),
      type: Ke.LEFT_RECURSION,
      ruleName: s
    });
    const l = n.concat([t]), f = a.filter((h) => !l.includes(h)).flatMap((h) => {
      const p = [...n];
      return p.push(h), dh(t, h, r, p);
    });
    return i.concat(f);
  }
}
function Ha(t) {
  let e = [];
  if (t.length === 0)
    return e;
  const r = t[0];
  if (r instanceof We)
    e.push(r.referencedRule);
  else if (r instanceof He || r instanceof Me || r instanceof tt || r instanceof rt || r instanceof Xe || r instanceof ye)
    e = e.concat(Ha(r.definition));
  else if (r instanceof Ye)
    e = r.definition.map((a) => Ha(a.definition)).flat();
  else if (!(r instanceof se)) throw Error("non exhaustive match");
  const n = as(r), i = t.length > 1;
  if (n && i) {
    const a = t.slice(1);
    return e.concat(Ha(a));
  } else
    return e;
}
class Oc extends Hn {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
}
function my(t, e) {
  const r = new Oc();
  return t.accept(r), r.alternations.flatMap((a) => a.definition.slice(0, -1).flatMap((o, l) => Qg([o], [], Ji, 1).length === 0 ? [
    {
      message: e.buildEmptyAlternationError({
        topLevelRule: t,
        alternation: a,
        emptyChoiceIdx: l
      }),
      type: Ke.NONE_LAST_EMPTY_ALT,
      ruleName: t.name,
      occurrence: a.idx,
      alternative: l + 1
    }
  ] : []));
}
function gy(t, e, r) {
  const n = new Oc();
  t.accept(n);
  let i = n.alternations;
  return i = i.filter((s) => s.ignoreAmbiguities !== !0), i.flatMap((s) => {
    const o = s.idx, l = s.maxLookahead || e, c = Ms(o, t, l, s), f = vy(c, s, t, r), h = Ey(c, s, t, r);
    return f.concat(h);
  });
}
class yy extends Hn {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
}
function Ty(t, e) {
  const r = new Oc();
  return t.accept(r), r.alternations.flatMap((a) => a.definition.length > 255 ? [
    {
      message: e.buildTooManyAlternativesError({
        topLevelRule: t,
        alternation: a
      }),
      type: Ke.TOO_MANY_ALTS,
      ruleName: t.name,
      occurrence: a.idx
    }
  ] : []);
}
function Ry(t, e, r) {
  const n = [];
  return t.forEach((i) => {
    const a = new yy();
    i.accept(a), a.allProductions.forEach((o) => {
      const l = Pc(o), c = o.maxLookahead || e, f = o.idx;
      if (Fs(f, i, l, c)[0].flat().length === 0) {
        const g = r.buildEmptyRepetitionError({
          topLevelRule: i,
          repetition: o
        });
        n.push({
          message: g,
          type: Ke.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: i.name
        });
      }
    });
  }), n;
}
function vy(t, e, r, n) {
  const i = [];
  return t.reduce((o, l, c) => (e.definition[c].ignoreAmbiguities === !0 || l.forEach((f) => {
    const h = [c];
    t.forEach((p, g) => {
      c !== g && Ko(p, f) && // ignore (skip) ambiguities with this "other" alternative
      e.definition[g].ignoreAmbiguities !== !0 && h.push(g);
    }), h.length > 1 && !Ko(i, f) && (i.push(f), o.push({
      alts: h,
      path: f
    }));
  }), o), []).map((o) => {
    const l = o.alts.map((f) => f + 1);
    return {
      message: n.buildAlternationAmbiguityError({
        topLevelRule: r,
        alternation: e,
        ambiguityIndices: l,
        prefixPath: o.path
      }),
      type: Ke.AMBIGUOUS_ALTS,
      ruleName: r.name,
      occurrence: e.idx,
      alternatives: o.alts
    };
  });
}
function Ey(t, e, r, n) {
  const i = t.reduce((s, o, l) => {
    const c = o.map((f) => ({ idx: l, path: f }));
    return s.concat(c);
  }, []);
  return i.flatMap((s) => {
    if (e.definition[s.idx].ignoreAmbiguities === !0)
      return [];
    const l = s.idx, c = s.path;
    return i.filter((p) => (
      // ignore (skip) ambiguities with this "other" alternative
      e.definition[p.idx].ignoreAmbiguities !== !0 && p.idx < l && // checking for strict prefix because identical lookaheads
      // will be be detected using a different validation.
      oy(p.path, c)
    )).map((p) => {
      const g = [p.idx + 1, l + 1], C = e.idx === 0 ? "" : e.idx;
      return {
        message: n.buildAlternationPrefixAmbiguityError({
          topLevelRule: r,
          alternation: e,
          ambiguityIndices: g,
          prefixPath: p.path
        }),
        type: Ke.AMBIGUOUS_PREFIX_ALTS,
        ruleName: r.name,
        occurrence: C,
        alternatives: g
      };
    });
  });
}
function $y(t, e, r) {
  const n = [], i = e.map((a) => a.name);
  return t.forEach((a) => {
    const s = a.name;
    if (i.includes(s)) {
      const o = r.buildNamespaceConflictError(a);
      n.push({
        message: o,
        type: Ke.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: s
      });
    }
  }), n;
}
function Ay(t) {
  const e = Object.assign({ errMsgProvider: Vg }, t), r = {};
  return t.rules.forEach((n) => {
    r[n.name] = n;
  }), qg(r, e.errMsgProvider);
}
function Cy(t) {
  var e;
  const r = (e = t.errMsgProvider) !== null && e !== void 0 ? e : br;
  return cy(t.rules, t.tokenTypes, r, t.grammarName);
}
const hh = "MismatchedTokenException", ph = "NoViableAltException", mh = "EarlyExitException", gh = "NotAllInputParsedException", yh = [
  hh,
  ph,
  mh,
  gh
];
Object.freeze(yh);
function ls(t) {
  return yh.includes(t.name);
}
class Gs extends Error {
  constructor(e, r) {
    super(e), this.token = r, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
class Th extends Gs {
  constructor(e, r, n) {
    super(e, r), this.previousToken = n, this.name = hh;
  }
}
class Sy extends Gs {
  constructor(e, r, n) {
    super(e, r), this.previousToken = n, this.name = ph;
  }
}
class wy extends Gs {
  constructor(e, r) {
    super(e, r), this.name = gh;
  }
}
class by extends Gs {
  constructor(e, r, n) {
    super(e, r), this.previousToken = n, this.name = mh;
  }
}
const uo = {}, Rh = "InRuleRecoveryException";
class ky extends Error {
  constructor(e) {
    super(e), this.name = Rh;
  }
}
class Ny {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = Object.hasOwn(e, "recoveryEnabled") ? e.recoveryEnabled : Bt.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = _y);
  }
  getTokenToInsert(e) {
    const r = Ic(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return r.isInsertedInRecovery = !0, r;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return !0;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return !0;
  }
  tryInRepetitionRecovery(e, r, n, i) {
    const a = this.findReSyncTokenType(), s = this.exportLexerState(), o = [];
    let l = !1;
    const c = this.LA_FAST(1);
    let f = this.LA_FAST(1);
    const h = () => {
      const p = this.LA(0), g = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: i,
        actual: c,
        previous: p,
        ruleName: this.getCurrRuleFullName()
      }), C = new Th(g, c, this.LA(0));
      C.resyncedTokens = o.slice(0, -1), this.SAVE_ERROR(C);
    };
    for (; !l; )
      if (this.tokenMatcher(f, i)) {
        h();
        return;
      } else if (n.call(this)) {
        h(), e.apply(this, r);
        return;
      } else this.tokenMatcher(f, a) ? l = !0 : (f = this.SKIP_TOKEN(), this.addToResyncTokens(f, o));
    this.importLexerState(s);
  }
  shouldInRepetitionRecoveryBeTried(e, r, n) {
    return !(n === !1 || this.tokenMatcher(this.LA_FAST(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, r)));
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(e) {
    const r = e.ruleStack[0], i = this.getGAstProductions()[r];
    return new Yg(i, e).startWalking();
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(e, r) {
    const n = this.getCurrentGrammarPath(e, r);
    return this.getNextPossibleTokenTypes(n);
  }
  tryInRuleRecovery(e, r) {
    if (this.canRecoverWithSingleTokenInsertion(e, r))
      return this.getTokenToInsert(e);
    if (this.canRecoverWithSingleTokenDeletion(e)) {
      const n = this.SKIP_TOKEN();
      return this.consumeToken(), n;
    }
    throw new ky("sad sad panda");
  }
  canPerformInRuleRecovery(e, r) {
    return this.canRecoverWithSingleTokenInsertion(e, r) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, r) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || r.length === 0)
      return !1;
    const n = this.LA_FAST(1);
    return r.find((a) => this.tokenMatcher(n, a)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(
      // not using LA_FAST because LA(2) might be un-safe with maxLookahead=1
      // in some edge cases (?)
      this.LA(2),
      e
    ) : !1;
  }
  isInCurrentRuleReSyncSet(e) {
    const r = this.getCurrFollowKey();
    return this.getFollowSetFromFollowKey(r).includes(e);
  }
  findReSyncTokenType() {
    const e = this.flattenFollowSet();
    let r = this.LA_FAST(1), n = 2;
    for (; ; ) {
      const i = e.find((a) => oh(r, a));
      if (i !== void 0)
        return i;
      r = this.LA(n), n++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK_IDX === 0)
      return uo;
    const e = this.currRuleShortName, r = this.getLastExplicitRuleOccurrenceIndex(), n = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(e),
      idxInCallingRule: r,
      inRule: this.shortRuleNameToFullName(n)
    };
  }
  buildFullFollowKeyStack() {
    const e = this.RULE_STACK, r = this.RULE_OCCURRENCE_STACK, n = this.RULE_STACK_IDX + 1, i = new Array(n);
    for (let a = 0; a < n; a++)
      a === 0 ? i[a] = uo : i[a] = {
        ruleName: this.shortRuleNameToFullName(e[a]),
        idxInCallingRule: r[a],
        inRule: this.shortRuleNameToFullName(e[a - 1])
      };
    return i;
  }
  flattenFollowSet() {
    return this.buildFullFollowKeyStack().map((r) => this.getFollowSetFromFollowKey(r)).flat();
  }
  getFollowSetFromFollowKey(e) {
    if (e === uo)
      return [ur];
    const r = e.ruleName + e.idxInCallingRule + Jd + e.inRule;
    return this.resyncFollows[r];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(e, r) {
    return this.tokenMatcher(e, ur) || r.push(e), r;
  }
  reSyncTo(e) {
    const r = [];
    let n = this.LA_FAST(1);
    for (; this.tokenMatcher(n, e) === !1; )
      n = this.SKIP_TOKEN(), this.addToResyncTokens(n, r);
    return r.slice(0, -1);
  }
  attemptInRepetitionRecovery(e, r, n, i, a, s, o) {
  }
  getCurrentGrammarPath(e, r) {
    const n = this.getHumanReadableRuleStack(), i = this.RULE_OCCURRENCE_STACK.slice(0, this.RULE_OCCURRENCE_STACK_IDX + 1);
    return {
      ruleStack: n,
      occurrenceStack: i,
      lastTok: e,
      lastTokOccurrence: r
    };
  }
  getHumanReadableRuleStack() {
    const e = this.RULE_STACK_IDX + 1, r = new Array(e);
    for (let n = 0; n < e; n++)
      r[n] = this.shortRuleNameToFullName(this.RULE_STACK[n]);
    return r;
  }
}
function _y(t, e, r, n, i, a, s) {
  const o = this.getKeyForAutomaticLookahead(n, i);
  let l = this.firstAfterRepMap[o];
  if (l === void 0) {
    const p = this.getCurrRuleFullName(), g = this.getGAstProductions()[p];
    l = new a(g, i).startWalking(), this.firstAfterRepMap[o] = l;
  }
  let c = l.token, f = l.occurrence;
  const h = l.isEndOfRule;
  this.RULE_STACK_IDX === 0 && h && c === void 0 && (c = ur, f = 1), !(c === void 0 || f === void 0) && this.shouldInRepetitionRecoveryBeTried(c, f, s) && this.tryInRepetitionRecovery(t, e, r, c);
}
const Iy = 4, hr = 8, vh = 1 << hr, Eh = 2 << hr, Vo = 3 << hr, qo = 4 << hr, Ho = 5 << hr, Xa = 6 << hr;
function fo(t, e, r) {
  return r | e | t;
}
class Lc {
  constructor(e) {
    var r;
    this.maxLookahead = (r = e == null ? void 0 : e.maxLookahead) !== null && r !== void 0 ? r : Bt.maxLookahead;
  }
  validate(e) {
    const r = this.validateNoLeftRecursion(e.rules);
    if (r.length === 0) {
      const n = this.validateEmptyOrAlternatives(e.rules), i = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), a = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
      return [
        ...r,
        ...n,
        ...i,
        ...a
      ];
    }
    return r;
  }
  validateNoLeftRecursion(e) {
    return e.flatMap((r) => dh(r, r, br));
  }
  validateEmptyOrAlternatives(e) {
    return e.flatMap((r) => my(r, br));
  }
  validateAmbiguousAlternationAlternatives(e, r) {
    return e.flatMap((n) => gy(n, r, br));
  }
  validateSomeNonEmptyLookaheadPath(e, r) {
    return Ry(e, r, br);
  }
  buildLookaheadForAlternation(e) {
    return ty(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, ny);
  }
  buildLookaheadForOptional(e) {
    return ry(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, Pc(e.prodType), iy);
  }
}
class Py {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = Object.hasOwn(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : Bt.dynamicTokensEnabled, this.maxLookahead = Object.hasOwn(e, "maxLookahead") ? e.maxLookahead : Bt.maxLookahead, this.lookaheadStrategy = Object.hasOwn(e, "lookaheadStrategy") ? e.lookaheadStrategy : new Lc({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    e.forEach((r) => {
      this.TRACE_INIT(`${r.name} Rule Lookahead`, () => {
        const { alternation: n, repetition: i, option: a, repetitionMandatory: s, repetitionMandatoryWithSeparator: o, repetitionWithSeparator: l } = Ly(r);
        n.forEach((c) => {
          const f = c.idx === 0 ? "" : c.idx;
          this.TRACE_INIT(`${vt(c)}${f}`, () => {
            const h = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: c.idx,
              rule: r,
              maxLookahead: c.maxLookahead || this.maxLookahead,
              hasPredicates: c.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), p = fo(this.fullRuleNameToShort[r.name], vh, c.idx);
            this.setLaFuncCache(p, h);
          });
        }), i.forEach((c) => {
          this.computeLookaheadFunc(r, c.idx, Vo, "Repetition", c.maxLookahead, vt(c));
        }), a.forEach((c) => {
          this.computeLookaheadFunc(r, c.idx, Eh, "Option", c.maxLookahead, vt(c));
        }), s.forEach((c) => {
          this.computeLookaheadFunc(r, c.idx, qo, "RepetitionMandatory", c.maxLookahead, vt(c));
        }), o.forEach((c) => {
          this.computeLookaheadFunc(r, c.idx, Xa, "RepetitionMandatoryWithSeparator", c.maxLookahead, vt(c));
        }), l.forEach((c) => {
          this.computeLookaheadFunc(r, c.idx, Ho, "RepetitionWithSeparator", c.maxLookahead, vt(c));
        });
      });
    });
  }
  computeLookaheadFunc(e, r, n, i, a, s) {
    this.TRACE_INIT(`${s}${r === 0 ? "" : r}`, () => {
      const o = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence: r,
        rule: e,
        maxLookahead: a || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType: i
      }), l = fo(this.fullRuleNameToShort[e.name], n, r);
      this.setLaFuncCache(l, o);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(e, r) {
    return fo(this.currRuleShortName, e, r);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  /* istanbul ignore next */
  setLaFuncCache(e, r) {
    this.lookAheadFuncsCache.set(e, r);
  }
}
class Oy extends Hn {
  constructor() {
    super(...arguments), this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(e) {
    this.dslMethods.option.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.dslMethods.repetitionWithSeparator.push(e);
  }
  visitRepetitionMandatory(e) {
    this.dslMethods.repetitionMandatory.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(e);
  }
  visitRepetition(e) {
    this.dslMethods.repetition.push(e);
  }
  visitAlternation(e) {
    this.dslMethods.alternation.push(e);
  }
}
const wa = new Oy();
function Ly(t) {
  wa.reset(), t.accept(wa);
  const e = wa.dslMethods;
  return wa.reset(), e;
}
function Su(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.endOffset = e.endOffset) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset);
}
function wu(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.startColumn = e.startColumn, t.startLine = e.startLine, t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine);
}
function xy(t, e, r) {
  t.children[r] === void 0 ? t.children[r] = [e] : t.children[r].push(e);
}
function Dy(t, e, r) {
  t.children[e] === void 0 ? t.children[e] = [r] : t.children[e].push(r);
}
const My = "name";
function $h(t, e) {
  Object.defineProperty(t, My, {
    enumerable: !1,
    configurable: !0,
    writable: !1,
    value: e
  });
}
function Fy(t, e) {
  const r = Object.keys(t), n = r.length;
  for (let i = 0; i < n; i++) {
    const a = r[i], s = t[a], o = s.length;
    for (let l = 0; l < o; l++) {
      const c = s[l];
      c.tokenTypeIdx === void 0 && this[c.name](c.children, e);
    }
  }
}
function Gy(t, e) {
  const r = function() {
  };
  $h(r, t + "BaseSemantics");
  const n = {
    visit: function(i, a) {
      if (Array.isArray(i) && (i = i[0]), i !== void 0)
        return this[i.name](i.children, a);
    },
    validateVisitor: function() {
      const i = zy(this, e);
      if (i.length !== 0) {
        const a = i.map((s) => s.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${a.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }
  };
  return r.prototype = n, r.prototype.constructor = r, r._RULE_NAMES = e, r;
}
function jy(t, e, r) {
  const n = function() {
  };
  $h(n, t + "BaseSemanticsWithDefaults");
  const i = Object.create(r.prototype);
  return e.forEach((a) => {
    i[a] = Fy;
  }), n.prototype = i, n.prototype.constructor = n, n;
}
var Xo;
(function(t) {
  t[t.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", t[t.MISSING_METHOD = 1] = "MISSING_METHOD";
})(Xo || (Xo = {}));
function zy(t, e) {
  return Uy(t, e);
}
function Uy(t, e) {
  return e.filter((i) => typeof t[i] != "function").map((i) => ({
    msg: `Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,
    type: Xo.MISSING_METHOD,
    methodName: i
  })).filter(Boolean);
}
class By {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = Object.hasOwn(e, "nodeLocationTracking") ? e.nodeLocationTracking : Bt.nodeLocationTracking, !this.outputCst)
      this.cstInvocationStateUpdate = () => {
      }, this.cstFinallyStateUpdate = () => {
      }, this.cstPostTerminal = () => {
      }, this.cstPostNonTerminal = () => {
      }, this.cstPostRule = () => {
      };
    else if (/full/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = wu, this.setNodeLocationFromNode = wu, this.cstPostRule = () => {
      }, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = () => {
      }, this.setNodeLocationFromNode = () => {
      }, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Su, this.setNodeLocationFromNode = Su, this.cstPostRule = () => {
      }, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = () => {
      }, this.setNodeLocationFromNode = () => {
      }, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking))
      this.setNodeLocationFromToken = () => {
      }, this.setNodeLocationFromNode = () => {
      }, this.cstPostRule = () => {
      }, this.setInitialNodeLocation = () => {
      };
    else
      throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
  }
  setInitialNodeLocationOnlyOffsetRecovery(e) {
    e.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(e) {
    e.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA_FAST(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(e) {
    e.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(e) {
    const r = this.LA_FAST(1);
    e.location = {
      startOffset: r.startOffset,
      startLine: r.startLine,
      startColumn: r.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(e) {
    const r = {
      name: e,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(r), this.CST_STACK.push(r);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e) {
    const r = this.LA(0), n = e.location;
    n.startOffset <= r.startOffset ? (n.endOffset = r.endOffset, n.endLine = r.endLine, n.endColumn = r.endColumn) : (n.startOffset = NaN, n.startLine = NaN, n.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e) {
    const r = this.LA(0), n = e.location;
    n.startOffset <= r.startOffset ? n.endOffset = r.endOffset : n.startOffset = NaN;
  }
  cstPostTerminal(e, r) {
    const n = this.CST_STACK[this.CST_STACK.length - 1];
    xy(n, r, e), this.setNodeLocationFromToken(n.location, r);
  }
  cstPostNonTerminal(e, r) {
    const n = this.CST_STACK[this.CST_STACK.length - 1];
    Dy(n, r, e), this.setNodeLocationFromNode(n.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (this.baseCstVisitorConstructor === void 0) {
      const e = Gy(this.className, Object.keys(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (this.baseCstVisitorWithDefaultsConstructor === void 0) {
      const e = jy(this.className, Object.keys(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      return this.baseCstVisitorWithDefaultsConstructor = e, e;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getPreviousExplicitRuleShortName() {
    return this.RULE_STACK[this.RULE_STACK_IDX - 1];
  }
  getLastExplicitRuleOccurrenceIndex() {
    return this.RULE_OCCURRENCE_STACK[this.RULE_OCCURRENCE_STACK_IDX];
  }
}
class Wy {
  initLexerAdapter() {
    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
  }
  set input(e) {
    if (this.selfAnalysisDone !== !0)
      throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
    this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    return this.currIdx <= this.tokVectorLength - 2 ? (this.consumeToken(), this.LA_FAST(1)) : Nn;
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  // Performance Optimized version of LA without bound checks
  // note that token beyond the end of the token vector EOF Token will still be returned
  // due to using sentinels at the end of the token vector. (for K=max lookahead)
  LA_FAST(e) {
    const r = this.currIdx + e;
    return this.tokVector[r];
  }
  LA(e) {
    const r = this.currIdx + e;
    return r < 0 || this.tokVectorLength <= r ? Nn : this.tokVector[r];
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(e) {
    this.currIdx = e;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVectorLength - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
}
class Ky {
  ACTION(e) {
    return e.call(this);
  }
  consume(e, r, n) {
    return this.consumeInternal(r, e, n);
  }
  subrule(e, r, n) {
    return this.subruleInternal(r, e, n);
  }
  option(e, r) {
    return this.optionInternal(r, e);
  }
  or(e, r) {
    return this.orInternal(r, e);
  }
  many(e, r) {
    return this.manyInternal(e, r);
  }
  atLeastOne(e, r) {
    return this.atLeastOneInternal(e, r);
  }
  CONSUME(e, r) {
    return this.consumeInternal(e, 0, r);
  }
  CONSUME1(e, r) {
    return this.consumeInternal(e, 1, r);
  }
  CONSUME2(e, r) {
    return this.consumeInternal(e, 2, r);
  }
  CONSUME3(e, r) {
    return this.consumeInternal(e, 3, r);
  }
  CONSUME4(e, r) {
    return this.consumeInternal(e, 4, r);
  }
  CONSUME5(e, r) {
    return this.consumeInternal(e, 5, r);
  }
  CONSUME6(e, r) {
    return this.consumeInternal(e, 6, r);
  }
  CONSUME7(e, r) {
    return this.consumeInternal(e, 7, r);
  }
  CONSUME8(e, r) {
    return this.consumeInternal(e, 8, r);
  }
  CONSUME9(e, r) {
    return this.consumeInternal(e, 9, r);
  }
  SUBRULE(e, r) {
    return this.subruleInternal(e, 0, r);
  }
  SUBRULE1(e, r) {
    return this.subruleInternal(e, 1, r);
  }
  SUBRULE2(e, r) {
    return this.subruleInternal(e, 2, r);
  }
  SUBRULE3(e, r) {
    return this.subruleInternal(e, 3, r);
  }
  SUBRULE4(e, r) {
    return this.subruleInternal(e, 4, r);
  }
  SUBRULE5(e, r) {
    return this.subruleInternal(e, 5, r);
  }
  SUBRULE6(e, r) {
    return this.subruleInternal(e, 6, r);
  }
  SUBRULE7(e, r) {
    return this.subruleInternal(e, 7, r);
  }
  SUBRULE8(e, r) {
    return this.subruleInternal(e, 8, r);
  }
  SUBRULE9(e, r) {
    return this.subruleInternal(e, 9, r);
  }
  OPTION(e) {
    return this.optionInternal(e, 0);
  }
  OPTION1(e) {
    return this.optionInternal(e, 1);
  }
  OPTION2(e) {
    return this.optionInternal(e, 2);
  }
  OPTION3(e) {
    return this.optionInternal(e, 3);
  }
  OPTION4(e) {
    return this.optionInternal(e, 4);
  }
  OPTION5(e) {
    return this.optionInternal(e, 5);
  }
  OPTION6(e) {
    return this.optionInternal(e, 6);
  }
  OPTION7(e) {
    return this.optionInternal(e, 7);
  }
  OPTION8(e) {
    return this.optionInternal(e, 8);
  }
  OPTION9(e) {
    return this.optionInternal(e, 9);
  }
  OR(e) {
    return this.orInternal(e, 0);
  }
  OR1(e) {
    return this.orInternal(e, 1);
  }
  OR2(e) {
    return this.orInternal(e, 2);
  }
  OR3(e) {
    return this.orInternal(e, 3);
  }
  OR4(e) {
    return this.orInternal(e, 4);
  }
  OR5(e) {
    return this.orInternal(e, 5);
  }
  OR6(e) {
    return this.orInternal(e, 6);
  }
  OR7(e) {
    return this.orInternal(e, 7);
  }
  OR8(e) {
    return this.orInternal(e, 8);
  }
  OR9(e) {
    return this.orInternal(e, 9);
  }
  MANY(e) {
    this.manyInternal(0, e);
  }
  MANY1(e) {
    this.manyInternal(1, e);
  }
  MANY2(e) {
    this.manyInternal(2, e);
  }
  MANY3(e) {
    this.manyInternal(3, e);
  }
  MANY4(e) {
    this.manyInternal(4, e);
  }
  MANY5(e) {
    this.manyInternal(5, e);
  }
  MANY6(e) {
    this.manyInternal(6, e);
  }
  MANY7(e) {
    this.manyInternal(7, e);
  }
  MANY8(e) {
    this.manyInternal(8, e);
  }
  MANY9(e) {
    this.manyInternal(9, e);
  }
  MANY_SEP(e) {
    this.manySepFirstInternal(0, e);
  }
  MANY_SEP1(e) {
    this.manySepFirstInternal(1, e);
  }
  MANY_SEP2(e) {
    this.manySepFirstInternal(2, e);
  }
  MANY_SEP3(e) {
    this.manySepFirstInternal(3, e);
  }
  MANY_SEP4(e) {
    this.manySepFirstInternal(4, e);
  }
  MANY_SEP5(e) {
    this.manySepFirstInternal(5, e);
  }
  MANY_SEP6(e) {
    this.manySepFirstInternal(6, e);
  }
  MANY_SEP7(e) {
    this.manySepFirstInternal(7, e);
  }
  MANY_SEP8(e) {
    this.manySepFirstInternal(8, e);
  }
  MANY_SEP9(e) {
    this.manySepFirstInternal(9, e);
  }
  AT_LEAST_ONE(e) {
    this.atLeastOneInternal(0, e);
  }
  AT_LEAST_ONE1(e) {
    return this.atLeastOneInternal(1, e);
  }
  AT_LEAST_ONE2(e) {
    this.atLeastOneInternal(2, e);
  }
  AT_LEAST_ONE3(e) {
    this.atLeastOneInternal(3, e);
  }
  AT_LEAST_ONE4(e) {
    this.atLeastOneInternal(4, e);
  }
  AT_LEAST_ONE5(e) {
    this.atLeastOneInternal(5, e);
  }
  AT_LEAST_ONE6(e) {
    this.atLeastOneInternal(6, e);
  }
  AT_LEAST_ONE7(e) {
    this.atLeastOneInternal(7, e);
  }
  AT_LEAST_ONE8(e) {
    this.atLeastOneInternal(8, e);
  }
  AT_LEAST_ONE9(e) {
    this.atLeastOneInternal(9, e);
  }
  AT_LEAST_ONE_SEP(e) {
    this.atLeastOneSepFirstInternal(0, e);
  }
  AT_LEAST_ONE_SEP1(e) {
    this.atLeastOneSepFirstInternal(1, e);
  }
  AT_LEAST_ONE_SEP2(e) {
    this.atLeastOneSepFirstInternal(2, e);
  }
  AT_LEAST_ONE_SEP3(e) {
    this.atLeastOneSepFirstInternal(3, e);
  }
  AT_LEAST_ONE_SEP4(e) {
    this.atLeastOneSepFirstInternal(4, e);
  }
  AT_LEAST_ONE_SEP5(e) {
    this.atLeastOneSepFirstInternal(5, e);
  }
  AT_LEAST_ONE_SEP6(e) {
    this.atLeastOneSepFirstInternal(6, e);
  }
  AT_LEAST_ONE_SEP7(e) {
    this.atLeastOneSepFirstInternal(7, e);
  }
  AT_LEAST_ONE_SEP8(e) {
    this.atLeastOneSepFirstInternal(8, e);
  }
  AT_LEAST_ONE_SEP9(e) {
    this.atLeastOneSepFirstInternal(9, e);
  }
  RULE(e, r, n = us) {
    if (this.definedRulesNames.includes(e)) {
      const s = {
        message: br.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: Ke.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(s);
    }
    this.definedRulesNames.push(e);
    const i = this.defineRule(e, r, n);
    return this[e] = i, i;
  }
  OVERRIDE_RULE(e, r, n = us) {
    const i = py(e, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(i);
    const a = this.defineRule(e, r, n);
    return this[e] = a, a;
  }
  BACKTRACK(e, r) {
    var n;
    const i = (n = e.coreRule) !== null && n !== void 0 ? n : e;
    return function() {
      this.isBackTrackingStack.push(1);
      const a = this.saveRecogState();
      try {
        return i.apply(this, r), !0;
      } catch (s) {
        if (ls(s))
          return !1;
        throw s;
      } finally {
        this.reloadRecogState(a), this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return Zm(Object.values(this.gastProductionsCache));
  }
}
class Vy {
  initRecognizerEngine(e, r) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = os, this.subruleIdx = 0, this.currRuleShortName = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_STACK_IDX = -1, this.RULE_OCCURRENCE_STACK = [], this.RULE_OCCURRENCE_STACK_IDX = -1, this.gastProductionsCache = {}, Object.hasOwn(r, "serializedGrammar"))
      throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (Array.isArray(e)) {
      if (e.length === 0)
        throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number")
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (Array.isArray(e))
      this.tokensMap = e.reduce((a, s) => (a[s.name] = s, a), {});
    else if (Object.hasOwn(e, "modes") && Object.values(e.modes).flat().every(Bg)) {
      const a = Object.values(e.modes).flat(), s = [...new Set(a)];
      this.tokensMap = s.reduce((o, l) => (o[l.name] = l, o), {});
    } else if (typeof e == "object" && e !== null)
      this.tokensMap = Object.assign({}, e);
    else
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = ur;
    const i = (Object.hasOwn(e, "modes") ? Object.values(e.modes).flat() : Object.values(e)).every(
      // intentional "==" to also cover "undefined"
      (a) => {
        var s;
        return ((s = a.categoryMatches) === null || s === void 0 ? void 0 : s.length) == 0;
      }
    );
    this.tokenMatcher = i ? os : Ji, Zi(Object.values(this.tokensMap));
  }
  defineRule(e, r, n) {
    if (this.selfAnalysisDone)
      throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    const i = Object.hasOwn(n, "resyncEnabled") ? n.resyncEnabled : us.resyncEnabled, a = Object.hasOwn(n, "recoveryValueFunc") ? n.recoveryValueFunc : us.recoveryValueFunc, s = this.ruleShortNameIdx << Iy + hr;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[s] = e, this.fullRuleNameToShort[e] = s;
    let o;
    return this.outputCst === !0 ? o = function(...h) {
      try {
        this.ruleInvocationStateUpdate(s, e, this.subruleIdx), r.apply(this, h);
        const p = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(p), p;
      } catch (p) {
        return this.invokeRuleCatch(p, i, a);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    } : o = function(...h) {
      try {
        return this.ruleInvocationStateUpdate(s, e, this.subruleIdx), r.apply(this, h);
      } catch (p) {
        return this.invokeRuleCatch(p, i, a);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, Object.assign(function(...h) {
      this.onBeforeParse(e);
      try {
        return o.apply(this, h);
      } finally {
        this.onAfterParse(e);
      }
    }, { ruleName: e, originalGrammarAction: r, coreRule: o });
  }
  invokeRuleCatch(e, r, n) {
    const i = this.RULE_STACK_IDX === 0, a = r && !this.isBackTracking() && this.recoveryEnabled;
    if (ls(e)) {
      const s = e;
      if (a) {
        const o = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(o))
          if (s.resyncedTokens = this.reSyncTo(o), this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            return l.recoveredNode = !0, l;
          } else
            return n(e);
        else {
          if (this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            l.recoveredNode = !0, s.partialCstResult = l;
          }
          throw s;
        }
      } else {
        if (i)
          return this.moveToTerminatedState(), n(e);
        throw s;
      }
    } else
      throw e;
  }
  // Implementation of parsing DSL
  optionInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(Eh, r);
    return this.optionInternalLogic(e, r, n);
  }
  optionInternalLogic(e, r, n) {
    let i = this.getLaFuncFromCache(n), a;
    if (typeof e != "function") {
      a = e.DEF;
      const s = e.GATE;
      if (s !== void 0) {
        const o = i;
        i = () => s.call(this) && o.call(this);
      }
    } else
      a = e;
    if (i.call(this) === !0)
      return a.call(this);
  }
  atLeastOneInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(qo, e);
    return this.atLeastOneInternalLogic(e, r, n);
  }
  atLeastOneInternalLogic(e, r, n) {
    let i = this.getLaFuncFromCache(n), a;
    if (typeof r != "function") {
      a = r.DEF;
      const s = r.GATE;
      if (s !== void 0) {
        const o = i;
        i = () => s.call(this) && o.call(this);
      }
    } else
      a = r;
    if (i.call(this) === !0) {
      let s = this.doSingleRepetition(a);
      for (; i.call(this) === !0 && s === !0; )
        s = this.doSingleRepetition(a);
    } else
      throw this.raiseEarlyExitException(e, ue.REPETITION_MANDATORY, r.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, r], i, qo, e, Zg);
  }
  atLeastOneSepFirstInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(Xa, e);
    this.atLeastOneSepFirstInternalLogic(e, r, n);
  }
  atLeastOneSepFirstInternalLogic(e, r, n) {
    const i = r.DEF, a = r.SEP;
    if (this.getLaFuncFromCache(n).call(this) === !0) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA_FAST(1), a);
      for (; this.tokenMatcher(this.LA_FAST(1), a) === !0; )
        this.CONSUME(a), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        a,
        o,
        i,
        $u
      ], o, Xa, e, $u);
    } else
      throw this.raiseEarlyExitException(e, ue.REPETITION_MANDATORY_WITH_SEPARATOR, r.ERR_MSG);
  }
  manyInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(Vo, e);
    return this.manyInternalLogic(e, r, n);
  }
  manyInternalLogic(e, r, n) {
    let i = this.getLaFuncFromCache(n), a;
    if (typeof r != "function") {
      a = r.DEF;
      const o = r.GATE;
      if (o !== void 0) {
        const l = i;
        i = () => o.call(this) && l.call(this);
      }
    } else
      a = r;
    let s = !0;
    for (; i.call(this) === !0 && s === !0; )
      s = this.doSingleRepetition(a);
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [e, r],
      i,
      Vo,
      e,
      Jg,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      s
    );
  }
  manySepFirstInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(Ho, e);
    this.manySepFirstInternalLogic(e, r, n);
  }
  manySepFirstInternalLogic(e, r, n) {
    const i = r.DEF, a = r.SEP;
    if (this.getLaFuncFromCache(n).call(this) === !0) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA_FAST(1), a);
      for (; this.tokenMatcher(this.LA_FAST(1), a) === !0; )
        this.CONSUME(a), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        a,
        o,
        i,
        Eu
      ], o, Ho, e, Eu);
    }
  }
  repetitionSepSecondInternal(e, r, n, i, a) {
    for (; n(); )
      this.CONSUME(r), i.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      e,
      r,
      n,
      i,
      a
    ], n, Xa, e, a);
  }
  doSingleRepetition(e) {
    const r = this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > r;
  }
  orInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(vh, r), i = Array.isArray(e) ? e : e.DEF, s = this.getLaFuncFromCache(n).call(this, i);
    if (s !== void 0)
      return i[s].ALT.call(this);
    this.raiseNoAltException(r, e.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    this.RULE_STACK_IDX--, this.RULE_OCCURRENCE_STACK_IDX--, this.RULE_STACK_IDX >= 0 && (this.currRuleShortName = this.RULE_STACK[this.RULE_STACK_IDX]), this.cstFinallyStateUpdate();
  }
  subruleInternal(e, r, n) {
    let i;
    try {
      const a = n !== void 0 ? n.ARGS : void 0;
      return this.subruleIdx = r, i = e.coreRule.apply(this, a), this.cstPostNonTerminal(i, n !== void 0 && n.LABEL !== void 0 ? n.LABEL : e.ruleName), i;
    } catch (a) {
      throw this.subruleInternalError(a, n, e.ruleName);
    }
  }
  subruleInternalError(e, r, n) {
    throw ls(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, r !== void 0 && r.LABEL !== void 0 ? r.LABEL : n), delete e.partialCstResult), e;
  }
  consumeInternal(e, r, n) {
    let i;
    try {
      const a = this.LA_FAST(1);
      this.tokenMatcher(a, e) === !0 ? (this.consumeToken(), i = a) : this.consumeInternalError(e, a, n);
    } catch (a) {
      i = this.consumeInternalRecovery(e, r, a);
    }
    return this.cstPostTerminal(n !== void 0 && n.LABEL !== void 0 ? n.LABEL : e.name, i), i;
  }
  consumeInternalError(e, r, n) {
    let i;
    const a = this.LA(0);
    throw n !== void 0 && n.ERR_MSG ? i = n.ERR_MSG : i = this.errorMessageProvider.buildMismatchTokenMessage({
      expected: e,
      actual: r,
      previous: a,
      ruleName: this.getCurrRuleFullName()
    }), this.SAVE_ERROR(new Th(i, r, a));
  }
  consumeInternalRecovery(e, r, n) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    n.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const i = this.getFollowsForInRuleRecovery(e, r);
      try {
        return this.tryInRuleRecovery(e, i);
      } catch (a) {
        throw a.name === Rh ? n : a;
      }
    } else
      throw n;
  }
  saveRecogState() {
    const e = this.errors, r = this.RULE_STACK.slice(0, this.RULE_STACK_IDX + 1);
    return {
      errors: e,
      lexerState: this.exportLexerState(),
      RULE_STACK: r,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(e) {
    this.errors = e.errors, this.importLexerState(e.lexerState);
    const r = e.RULE_STACK;
    for (let n = 0; n < r.length; n++)
      this.RULE_STACK[n] = r[n];
    this.RULE_STACK_IDX = r.length - 1, this.RULE_STACK_IDX >= 0 && (this.currRuleShortName = this.RULE_STACK[this.RULE_STACK_IDX]);
  }
  ruleInvocationStateUpdate(e, r, n) {
    this.RULE_OCCURRENCE_STACK[++this.RULE_OCCURRENCE_STACK_IDX] = n, this.RULE_STACK[++this.RULE_STACK_IDX] = e, this.currRuleShortName = e, this.cstInvocationStateUpdate(r);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const e = this.currRuleShortName;
    return this.shortRuleNameToFull[e];
  }
  shortRuleNameToFullName(e) {
    return this.shortRuleNameToFull[e];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), ur);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.currRuleShortName = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK_IDX = -1, this.RULE_OCCURRENCE_STACK_IDX = -1, this.CST_STACK = [];
  }
  /**
   * Hook called before the root-level parsing rule is invoked.
   * This is only called when a rule is invoked directly by the consumer
   * (e.g., `parser.json()`), not when invoked as a sub-rule via SUBRULE.
   *
   * Override this method to perform actions before parsing begins.
   * The default implementation is a no-op.
   *
   * @param ruleName - The name of the root rule being invoked.
   */
  onBeforeParse(e) {
    for (let r = 0; r < this.maxLookahead + 1; r++)
      this.tokVector.push(Nn);
  }
  /**
   * Hook called after the root-level parsing rule has completed (or thrown).
   * This is only called when a rule is invoked directly by the consumer
   * (e.g., `parser.json()`), not when invoked as a sub-rule via SUBRULE.
   *
   * This hook is called in a `finally` block, so it executes regardless of
   * whether parsing succeeded or threw an error.
   *
   * Override this method to perform actions after parsing completes.
   * The default implementation is a no-op.
   *
   * @param ruleName - The name of the root rule that was invoked.
   */
  onAfterParse(e) {
    if (this.isAtEndOfInput() === !1) {
      const r = this.LA(1), n = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: r,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new wy(n, r));
    }
    for (; this.tokVector.at(-1) === Nn; )
      this.tokVector.pop();
  }
}
class qy {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = Object.hasOwn(e, "errorMessageProvider") ? e.errorMessageProvider : Bt.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (ls(e))
      return e.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: this.RULE_OCCURRENCE_STACK.slice(0, this.RULE_OCCURRENCE_STACK_IDX + 1)
      }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return [...this._errors];
  }
  set errors(e) {
    this._errors = e;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(e, r, n) {
    const i = this.getCurrRuleFullName(), a = this.getGAstProductions()[i], o = Fs(e, a, r, this.maxLookahead)[0], l = [];
    for (let f = 1; f <= this.maxLookahead; f++)
      l.push(this.LA(f));
    const c = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: o,
      actual: l,
      previous: this.LA(0),
      customUserDescription: n,
      ruleName: i
    });
    throw this.SAVE_ERROR(new by(c, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(e, r) {
    const n = this.getCurrRuleFullName(), i = this.getGAstProductions()[n], a = Ms(e, i, this.maxLookahead), s = [];
    for (let c = 1; c <= this.maxLookahead; c++)
      s.push(this.LA(c));
    const o = this.LA(0), l = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: a,
      actual: s,
      previous: o,
      customUserDescription: r,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new Sy(l, this.LA(1), o));
  }
}
const js = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(js);
const bu = !0, ku = Math.pow(2, hr) - 1, Ah = sh({ name: "RECORDING_PHASE_TOKEN", pattern: qe.NA });
Zi([Ah]);
const Ch = Ic(
  Ah,
  `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(Ch);
const Hy = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
};
class Xy {
  initGastRecorder(e) {
    this.recordingProdStack = [], this.RECORDING_PHASE = !1;
  }
  enableRecording() {
    this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", () => {
      for (let e = 0; e < 10; e++) {
        const r = e > 0 ? e : "";
        this[`CONSUME${r}`] = function(n, i) {
          return this.consumeInternalRecord(n, e, i);
        }, this[`SUBRULE${r}`] = function(n, i) {
          return this.subruleInternalRecord(n, e, i);
        }, this[`OPTION${r}`] = function(n) {
          return this.optionInternalRecord(n, e);
        }, this[`OR${r}`] = function(n) {
          return this.orInternalRecord(n, e);
        }, this[`MANY${r}`] = function(n) {
          this.manyInternalRecord(e, n);
        }, this[`MANY_SEP${r}`] = function(n) {
          this.manySepFirstInternalRecord(e, n);
        }, this[`AT_LEAST_ONE${r}`] = function(n) {
          this.atLeastOneInternalRecord(e, n);
        }, this[`AT_LEAST_ONE_SEP${r}`] = function(n) {
          this.atLeastOneSepFirstInternalRecord(e, n);
        };
      }
      this.consume = function(e, r, n) {
        return this.consumeInternalRecord(r, e, n);
      }, this.subrule = function(e, r, n) {
        return this.subruleInternalRecord(r, e, n);
      }, this.option = function(e, r) {
        return this.optionInternalRecord(r, e);
      }, this.or = function(e, r) {
        return this.orInternalRecord(r, e);
      }, this.many = function(e, r) {
        this.manyInternalRecord(e, r);
      }, this.atLeastOne = function(e, r) {
        this.atLeastOneInternalRecord(e, r);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", () => {
      const e = this;
      for (let r = 0; r < 10; r++) {
        const n = r > 0 ? r : "";
        delete e[`CONSUME${n}`], delete e[`SUBRULE${n}`], delete e[`OPTION${n}`], delete e[`OR${n}`], delete e[`MANY${n}`], delete e[`MANY_SEP${n}`], delete e[`AT_LEAST_ONE${n}`], delete e[`AT_LEAST_ONE_SEP${n}`];
      }
      delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(e) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(e, r) {
    return () => !0;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(e) {
    return Nn;
  }
  topLevelRuleRecord(e, r) {
    try {
      const n = new qn({ definition: [], name: e });
      return n.name = e, this.recordingProdStack.push(n), r.call(this), this.recordingProdStack.pop(), n;
    } catch (n) {
      if (n.KNOWN_RECORDER_ERROR !== !0)
        try {
          n.message = n.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
        } catch {
          throw n;
        }
      throw n;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(e, r) {
    return hi.call(this, Me, e, r);
  }
  atLeastOneInternalRecord(e, r) {
    hi.call(this, tt, r, e);
  }
  atLeastOneSepFirstInternalRecord(e, r) {
    hi.call(this, rt, r, e, bu);
  }
  manyInternalRecord(e, r) {
    hi.call(this, ye, r, e);
  }
  manySepFirstInternalRecord(e, r) {
    hi.call(this, Xe, r, e, bu);
  }
  orInternalRecord(e, r) {
    return Yy.call(this, e, r);
  }
  subruleInternalRecord(e, r, n) {
    if (cs(r), !e || !Object.hasOwn(e, "ruleName")) {
      const o = new Error(`<SUBRULE${Nu(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o.KNOWN_RECORDER_ERROR = !0, o;
    }
    const i = this.recordingProdStack.at(-1), a = e.ruleName, s = new We({
      idx: r,
      nonTerminalName: a,
      label: n == null ? void 0 : n.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    return i.definition.push(s), this.outputCst ? Hy : js;
  }
  consumeInternalRecord(e, r, n) {
    if (cs(r), !ih(e)) {
      const s = new Error(`<CONSUME${Nu(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw s.KNOWN_RECORDER_ERROR = !0, s;
    }
    const i = this.recordingProdStack.at(-1), a = new se({
      idx: r,
      terminalType: e,
      label: n == null ? void 0 : n.LABEL
    });
    return i.definition.push(a), Ch;
  }
}
function hi(t, e, r, n = !1) {
  cs(r);
  const i = this.recordingProdStack.at(-1), a = typeof e == "function" ? e : e.DEF, s = new t({ definition: [], idx: r });
  return n && (s.separator = e.SEP), Object.hasOwn(e, "MAX_LOOKAHEAD") && (s.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(s), a.call(this), i.definition.push(s), this.recordingProdStack.pop(), js;
}
function Yy(t, e) {
  cs(e);
  const r = this.recordingProdStack.at(-1), n = Array.isArray(t) === !1, i = n === !1 ? t : t.DEF, a = new Ye({
    definition: [],
    idx: e,
    ignoreAmbiguities: n && t.IGNORE_AMBIGUITIES === !0
  });
  Object.hasOwn(t, "MAX_LOOKAHEAD") && (a.maxLookahead = t.MAX_LOOKAHEAD);
  const s = i.some((o) => typeof o.GATE == "function");
  return a.hasPredicates = s, r.definition.push(a), i.forEach((o) => {
    const l = new He({ definition: [] });
    a.definition.push(l), Object.hasOwn(o, "IGNORE_AMBIGUITIES") ? l.ignoreAmbiguities = o.IGNORE_AMBIGUITIES : Object.hasOwn(o, "GATE") && (l.ignoreAmbiguities = !0), this.recordingProdStack.push(l), o.ALT.call(this), this.recordingProdStack.pop();
  }), js;
}
function Nu(t) {
  return t === 0 ? "" : `${t}`;
}
function cs(t) {
  if (t < 0 || t > ku) {
    const e = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${ku + 1}`
    );
    throw e.KNOWN_RECORDER_ERROR = !0, e;
  }
}
class Jy {
  initPerformanceTracer(e) {
    if (Object.hasOwn(e, "traceInitPerf")) {
      const r = e.traceInitPerf, n = typeof r == "number";
      this.traceInitMaxIdent = n ? r : 1 / 0, this.traceInitPerf = n ? r > 0 : r;
    } else
      this.traceInitMaxIdent = 0, this.traceInitPerf = Bt.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, r) {
    if (this.traceInitPerf === !0) {
      this.traceInitIndent++;
      const n = new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n}--> <${e}>`);
      const { time: i, value: a } = Xd(r), s = i > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && s(`${n}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, a;
    } else
      return r();
  }
}
function Zy(t, e) {
  e.forEach((r) => {
    const n = r.prototype;
    Object.getOwnPropertyNames(n).forEach((i) => {
      if (i === "constructor")
        return;
      const a = Object.getOwnPropertyDescriptor(n, i);
      a && (a.get || a.set) ? Object.defineProperty(t.prototype, i, a) : t.prototype[i] = r.prototype[i];
    });
  });
}
const Nn = Ic(ur, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(Nn);
const Bt = Object.freeze({
  recoveryEnabled: !1,
  maxLookahead: 3,
  dynamicTokensEnabled: !1,
  outputCst: !0,
  errorMessageProvider: sn,
  nodeLocationTracking: "none",
  traceInitPerf: !1,
  skipValidations: !1
}), us = Object.freeze({
  recoveryValueFunc: () => {
  },
  resyncEnabled: !0
});
var Ke;
(function(t) {
  t[t.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", t[t.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", t[t.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", t[t.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", t[t.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", t[t.LEFT_RECURSION = 5] = "LEFT_RECURSION", t[t.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", t[t.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", t[t.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", t[t.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", t[t.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", t[t.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", t[t.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", t[t.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(Ke || (Ke = {}));
function _u(t = void 0) {
  return function() {
    return t;
  };
}
class Qi {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(e) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let e;
      this.selfAnalysisDone = !0;
      const r = this.className;
      this.TRACE_INIT("toFastProps", () => {
        Yd(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), this.definedRulesNames.forEach((i) => {
            const s = this[i].originalGrammarAction;
            let o;
            this.TRACE_INIT(`${i} Rule`, () => {
              o = this.topLevelRuleRecord(i, s);
            }), this.gastProductionsCache[i] = o;
          });
        } finally {
          this.disableRecording();
        }
      });
      let n = [];
      if (this.TRACE_INIT("Grammar Resolving", () => {
        n = Ay({
          rules: Object.values(this.gastProductionsCache)
        }), this.definitionErrors = this.definitionErrors.concat(n);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (n.length === 0 && this.skipValidations === !1) {
          const i = Cy({
            rules: Object.values(this.gastProductionsCache),
            tokenTypes: Object.values(this.tokensMap),
            errMsgProvider: br,
            grammarName: r
          }), a = ly({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: Object.values(this.gastProductionsCache),
            tokenTypes: Object.values(this.tokensMap),
            grammarName: r
          });
          this.definitionErrors = this.definitionErrors.concat(i, a);
        }
      }), this.definitionErrors.length === 0 && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        const i = ag(Object.values(this.gastProductionsCache));
        this.resyncFollows = i;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var i, a;
        (a = (i = this.lookaheadStrategy).initialize) === null || a === void 0 || a.call(i, {
          rules: Object.values(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(Object.values(this.gastProductionsCache));
      })), !Qi.DEFER_DEFINITION_ERRORS_HANDLING && this.definitionErrors.length !== 0)
        throw e = this.definitionErrors.map((i) => i.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, r) {
    this.definitionErrors = [], this.selfAnalysisDone = !1;
    const n = this;
    if (n.initErrorHandler(r), n.initLexerAdapter(), n.initLooksAhead(r), n.initRecognizerEngine(e, r), n.initRecoverable(r), n.initTreeBuilder(r), n.initGastRecorder(r), n.initPerformanceTracer(r), Object.hasOwn(r, "ignoredIssues"))
      throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = Object.hasOwn(r, "skipValidations") ? r.skipValidations : Bt.skipValidations;
  }
}
Qi.DEFER_DEFINITION_ERRORS_HANDLING = !1;
Zy(Qi, [
  Ny,
  Py,
  By,
  Wy,
  Vy,
  Ky,
  qy,
  Xy,
  Jy
]);
class Qy extends Qi {
  constructor(e, r = Bt) {
    const n = Object.assign({}, r);
    n.outputCst = !1, super(e, n);
  }
}
function _n(t, e, r) {
  return `${t.name}_${e}_${r}`;
}
const fr = 1, eT = 2, Sh = 4, wh = 5, ea = 7, tT = 8, rT = 9, nT = 10, iT = 11, bh = 12;
class xc {
  constructor(e) {
    this.target = e;
  }
  isEpsilon() {
    return !1;
  }
}
class Dc extends xc {
  constructor(e, r) {
    super(e), this.tokenType = r;
  }
}
class kh extends xc {
  constructor(e) {
    super(e);
  }
  isEpsilon() {
    return !0;
  }
}
class Mc extends xc {
  constructor(e, r, n) {
    super(e), this.rule = r, this.followState = n;
  }
  isEpsilon() {
    return !0;
  }
}
function aT(t) {
  const e = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  sT(e, t);
  const r = t.length;
  for (let n = 0; n < r; n++) {
    const i = t[n], a = xr(e, i, i);
    a !== void 0 && yT(e, i, a);
  }
  return e;
}
function sT(t, e) {
  const r = e.length;
  for (let n = 0; n < r; n++) {
    const i = e[n], a = Ie(t, i, void 0, {
      type: eT
    }), s = Ie(t, i, void 0, {
      type: ea
    });
    a.stop = s, t.ruleToStartState.set(i, a), t.ruleToStopState.set(i, s);
  }
}
function Nh(t, e, r) {
  return r instanceof se ? Fc(t, e, r.terminalType, r) : r instanceof We ? gT(t, e, r) : r instanceof Ye ? fT(t, e, r) : r instanceof Me ? dT(t, e, r) : r instanceof ye ? oT(t, e, r) : r instanceof Xe ? lT(t, e, r) : r instanceof tt ? cT(t, e, r) : r instanceof rt ? uT(t, e, r) : xr(t, e, r);
}
function oT(t, e, r) {
  const n = Ie(t, e, r, {
    type: wh
  });
  pr(t, n);
  const i = Xn(t, e, n, r, xr(t, e, r));
  return Ih(t, e, r, i);
}
function lT(t, e, r) {
  const n = Ie(t, e, r, {
    type: wh
  });
  pr(t, n);
  const i = Xn(t, e, n, r, xr(t, e, r)), a = Fc(t, e, r.separator, r);
  return Ih(t, e, r, i, a);
}
function cT(t, e, r) {
  const n = Ie(t, e, r, {
    type: Sh
  });
  pr(t, n);
  const i = Xn(t, e, n, r, xr(t, e, r));
  return _h(t, e, r, i);
}
function uT(t, e, r) {
  const n = Ie(t, e, r, {
    type: Sh
  });
  pr(t, n);
  const i = Xn(t, e, n, r, xr(t, e, r)), a = Fc(t, e, r.separator, r);
  return _h(t, e, r, i, a);
}
function fT(t, e, r) {
  const n = Ie(t, e, r, {
    type: fr
  });
  pr(t, n);
  const i = Ft(r.definition, (s) => Nh(t, e, s));
  return Xn(t, e, n, r, ...i);
}
function dT(t, e, r) {
  const n = Ie(t, e, r, {
    type: fr
  });
  pr(t, n);
  const i = Xn(t, e, n, r, xr(t, e, r));
  return hT(t, e, r, i);
}
function xr(t, e, r) {
  const n = Kp(Ft(r.definition, (i) => Nh(t, e, i)), (i) => i !== void 0);
  return n.length === 1 ? n[0] : n.length === 0 ? void 0 : mT(t, n);
}
function _h(t, e, r, n, i) {
  const a = n.left, s = n.right, o = Ie(t, e, r, {
    type: iT
  });
  pr(t, o);
  const l = Ie(t, e, r, {
    type: bh
  });
  return a.loopback = o, l.loopback = o, t.decisionMap[_n(e, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", r.idx)] = o, Se(s, o), i === void 0 ? (Se(o, a), Se(o, l)) : (Se(o, l), Se(o, i.left), Se(i.right, a)), {
    left: a,
    right: l
  };
}
function Ih(t, e, r, n, i) {
  const a = n.left, s = n.right, o = Ie(t, e, r, {
    type: nT
  });
  pr(t, o);
  const l = Ie(t, e, r, {
    type: bh
  }), c = Ie(t, e, r, {
    type: rT
  });
  return o.loopback = c, l.loopback = c, Se(o, a), Se(o, l), Se(s, c), i !== void 0 ? (Se(c, l), Se(c, i.left), Se(i.right, a)) : Se(c, o), t.decisionMap[_n(e, i ? "RepetitionWithSeparator" : "Repetition", r.idx)] = o, {
    left: o,
    right: l
  };
}
function hT(t, e, r, n) {
  const i = n.left, a = n.right;
  return Se(i, a), t.decisionMap[_n(e, "Option", r.idx)] = i, n;
}
function pr(t, e) {
  return t.decisionStates.push(e), e.decision = t.decisionStates.length - 1, e.decision;
}
function Xn(t, e, r, n, ...i) {
  const a = Ie(t, e, n, {
    type: tT,
    start: r
  });
  r.end = a;
  for (const o of i)
    o !== void 0 ? (Se(r, o.left), Se(o.right, a)) : Se(r, a);
  const s = {
    left: r,
    right: a
  };
  return t.decisionMap[_n(e, pT(n), n.idx)] = r, s;
}
function pT(t) {
  if (t instanceof Ye)
    return "Alternation";
  if (t instanceof Me)
    return "Option";
  if (t instanceof ye)
    return "Repetition";
  if (t instanceof Xe)
    return "RepetitionWithSeparator";
  if (t instanceof tt)
    return "RepetitionMandatory";
  if (t instanceof rt)
    return "RepetitionMandatoryWithSeparator";
  throw new Error("Invalid production type encountered");
}
function mT(t, e) {
  const r = e.length;
  for (let a = 0; a < r - 1; a++) {
    const s = e[a];
    let o;
    s.left.transitions.length === 1 && (o = s.left.transitions[0]);
    const l = o instanceof Mc, c = o, f = e[a + 1].left;
    s.left.type === fr && s.right.type === fr && o !== void 0 && (l && c.followState === s.right || o.target === s.right) ? (l ? c.followState = f : o.target = f, TT(t, s.right)) : Se(s.right, f);
  }
  const n = e[0], i = e[r - 1];
  return {
    left: n.left,
    right: i.right
  };
}
function Fc(t, e, r, n) {
  const i = Ie(t, e, n, {
    type: fr
  }), a = Ie(t, e, n, {
    type: fr
  });
  return Gc(i, new Dc(a, r)), {
    left: i,
    right: a
  };
}
function gT(t, e, r) {
  const n = r.referencedRule, i = t.ruleToStartState.get(n), a = Ie(t, e, r, {
    type: fr
  }), s = Ie(t, e, r, {
    type: fr
  }), o = new Mc(i, n, s);
  return Gc(a, o), {
    left: a,
    right: s
  };
}
function yT(t, e, r) {
  const n = t.ruleToStartState.get(e);
  Se(n, r.left);
  const i = t.ruleToStopState.get(e);
  return Se(r.right, i), {
    left: n,
    right: i
  };
}
function Se(t, e) {
  const r = new kh(e);
  Gc(t, r);
}
function Ie(t, e, r, n) {
  const i = Object.assign({
    atn: t,
    production: r,
    epsilonOnlyTransitions: !1,
    rule: e,
    transitions: [],
    nextTokenWithinRule: [],
    stateNumber: t.states.length
  }, n);
  return t.states.push(i), i;
}
function Gc(t, e) {
  t.transitions.length === 0 && (t.epsilonOnlyTransitions = e.isEpsilon()), t.transitions.push(e);
}
function TT(t, e) {
  t.states.splice(t.states.indexOf(e), 1);
}
const fs = {};
class Yo {
  constructor() {
    this.map = {}, this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(e) {
    const r = Ph(e);
    r in this.map || (this.map[r] = this.configs.length, this.configs.push(e));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return Ft(this.configs, (e) => e.alt);
  }
  get key() {
    let e = "";
    for (const r in this.map)
      e += r + ":";
    return e;
  }
}
function Ph(t, e = !0) {
  return `${e ? `a${t.alt}` : ""}s${t.state.stateNumber}:${t.stack.map((r) => r.stateNumber.toString()).join("_")}`;
}
function RT(t, e) {
  const r = {};
  return (n) => {
    const i = n.toString();
    let a = r[i];
    return a !== void 0 || (a = {
      atnStartState: t,
      decision: e,
      states: {}
    }, r[i] = a), a;
  };
}
class Oh {
  constructor() {
    this.predicates = [];
  }
  is(e) {
    return e >= this.predicates.length || this.predicates[e];
  }
  set(e, r) {
    this.predicates[e] = r;
  }
  toString() {
    let e = "";
    const r = this.predicates.length;
    for (let n = 0; n < r; n++)
      e += this.predicates[n] === !0 ? "1" : "0";
    return e;
  }
}
const Iu = new Oh();
class vT extends Lc {
  constructor(e) {
    var r;
    super(), this.logging = (r = e == null ? void 0 : e.logging) !== null && r !== void 0 ? r : (n) => console.log(n);
  }
  initialize(e) {
    this.atn = aT(e.rules), this.dfas = ET(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e) {
    const { prodOccurrence: r, rule: n, hasPredicates: i, dynamicTokensEnabled: a } = e, s = this.dfas, o = this.logging, l = _n(n, "Alternation", r), f = this.atn.decisionMap[l].decision, h = Ft(Au({
      maxLookahead: 1,
      occurrence: r,
      prodType: "Alternation",
      rule: n
    }), (p) => Ft(p, (g) => g[0]));
    if (Pu(h, !1) && !a) {
      const p = Xc(h, (g, C, b) => (ro(C, (D) => {
        D && (g[D.tokenTypeIdx] = b, ro(D.categoryMatches, (k) => {
          g[k] = b;
        }));
      }), g), {});
      return i ? function(g) {
        var C;
        const b = this.LA_FAST(1), D = p[b.tokenTypeIdx];
        if (g !== void 0 && D !== void 0) {
          const k = (C = g[D]) === null || C === void 0 ? void 0 : C.GATE;
          if (k !== void 0 && k.call(this) === !1)
            return;
        }
        return D;
      } : function() {
        const g = this.LA_FAST(1);
        return p[g.tokenTypeIdx];
      };
    } else return i ? function(p) {
      const g = new Oh(), C = p === void 0 ? 0 : p.length;
      for (let D = 0; D < C; D++) {
        const k = p == null ? void 0 : p[D].GATE;
        g.set(D, k === void 0 || k.call(this));
      }
      const b = ho.call(this, s, f, g, o);
      return typeof b == "number" ? b : void 0;
    } : function() {
      const p = ho.call(this, s, f, Iu, o);
      return typeof p == "number" ? p : void 0;
    };
  }
  buildLookaheadForOptional(e) {
    const { prodOccurrence: r, rule: n, prodType: i, dynamicTokensEnabled: a } = e, s = this.dfas, o = this.logging, l = _n(n, i, r), f = this.atn.decisionMap[l].decision, h = Ft(Au({
      maxLookahead: 1,
      occurrence: r,
      prodType: i,
      rule: n
    }), (p) => Ft(p, (g) => g[0]));
    if (Pu(h) && h[0][0] && !a) {
      const p = h[0], g = jp(p);
      if (g.length === 1 && Vp(g[0].categoryMatches)) {
        const b = g[0].tokenTypeIdx;
        return function() {
          return this.LA_FAST(1).tokenTypeIdx === b;
        };
      } else {
        const C = Xc(g, (b, D) => (D !== void 0 && (b[D.tokenTypeIdx] = !0, ro(D.categoryMatches, (k) => {
          b[k] = !0;
        })), b), {});
        return function() {
          const b = this.LA_FAST(1);
          return C[b.tokenTypeIdx] === !0;
        };
      }
    }
    return function() {
      const p = ho.call(this, s, f, Iu, o);
      return typeof p == "object" ? !1 : p === 0;
    };
  }
}
function Pu(t, e = !0) {
  const r = /* @__PURE__ */ new Set();
  for (const n of t) {
    const i = /* @__PURE__ */ new Set();
    for (const a of n) {
      if (a === void 0) {
        if (e)
          break;
        return !1;
      }
      const s = [a.tokenTypeIdx].concat(a.categoryMatches);
      for (const o of s)
        if (r.has(o)) {
          if (!i.has(o))
            return !1;
        } else
          r.add(o), i.add(o);
    }
  }
  return !0;
}
function ET(t) {
  const e = t.decisionStates.length, r = Array(e);
  for (let n = 0; n < e; n++)
    r[n] = RT(t.decisionStates[n], n);
  return r;
}
function ho(t, e, r, n) {
  const i = t[e](r);
  let a = i.start;
  if (a === void 0) {
    const o = PT(i.atnStartState);
    a = xh(i, Lh(o)), i.start = a;
  }
  return $T.apply(this, [i, a, r, n]);
}
function $T(t, e, r, n) {
  let i = e, a = 1;
  const s = [];
  let o = this.LA_FAST(a++);
  for (; ; ) {
    let l = kT(i, o);
    if (l === void 0 && (l = AT.apply(this, [t, i, o, a, r, n])), l === fs)
      return bT(s, i, o);
    if (l.isAcceptState === !0)
      return l.prediction;
    i = l, s.push(o), o = this.LA(a++);
  }
}
function AT(t, e, r, n, i, a) {
  const s = NT(e.configs, r, i);
  if (s.size === 0)
    return Ou(t, e, r, fs), fs;
  let o = Lh(s);
  const l = IT(s, i);
  if (l !== void 0)
    o.isAcceptState = !0, o.prediction = l, o.configs.uniqueAlt = l;
  else if (DT(s)) {
    const c = zp(s.alts);
    o.isAcceptState = !0, o.prediction = c, o.configs.uniqueAlt = c, CT.apply(this, [t, n, s.alts, a]);
  }
  return o = Ou(t, e, r, o), o;
}
function CT(t, e, r, n) {
  const i = [];
  for (let c = 1; c <= e; c++)
    i.push(this.LA(c).tokenType);
  const a = t.atnStartState, s = a.rule, o = a.production, l = ST({
    topLevelRule: s,
    ambiguityIndices: r,
    production: o,
    prefixPath: i
  });
  n(l);
}
function ST(t) {
  const e = Ft(t.prefixPath, (i) => ln(i)).join(", "), r = t.production.idx === 0 ? "" : t.production.idx;
  let n = `Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${wT(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
  return n = n + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n;
}
function wT(t) {
  if (t instanceof We)
    return "SUBRULE";
  if (t instanceof Me)
    return "OPTION";
  if (t instanceof Ye)
    return "OR";
  if (t instanceof tt)
    return "AT_LEAST_ONE";
  if (t instanceof rt)
    return "AT_LEAST_ONE_SEP";
  if (t instanceof Xe)
    return "MANY_SEP";
  if (t instanceof ye)
    return "MANY";
  if (t instanceof se)
    return "CONSUME";
  throw Error("non exhaustive match");
}
function bT(t, e, r) {
  const n = Hp(e.configs.elements, (a) => a.state.transitions), i = Xp(n.filter((a) => a instanceof Dc).map((a) => a.tokenType), (a) => a.tokenTypeIdx);
  return {
    actualToken: r,
    possibleTokenTypes: i,
    tokenPath: t
  };
}
function kT(t, e) {
  return t.edges[e.tokenTypeIdx];
}
function NT(t, e, r) {
  const n = new Yo(), i = [];
  for (const s of t.elements) {
    if (r.is(s.alt) === !1)
      continue;
    if (s.state.type === ea) {
      i.push(s);
      continue;
    }
    const o = s.state.transitions.length;
    for (let l = 0; l < o; l++) {
      const c = s.state.transitions[l], f = _T(c, e);
      f !== void 0 && n.add({
        state: f,
        alt: s.alt,
        stack: s.stack
      });
    }
  }
  let a;
  if (i.length === 0 && n.size === 1 && (a = n), a === void 0) {
    a = new Yo();
    for (const s of n.elements)
      ds(s, a);
  }
  if (i.length > 0 && !LT(a))
    for (const s of i)
      a.add(s);
  return a;
}
function _T(t, e) {
  if (t instanceof Dc && oh(e, t.tokenType))
    return t.target;
}
function IT(t, e) {
  let r;
  for (const n of t.elements)
    if (e.is(n.alt) === !0) {
      if (r === void 0)
        r = n.alt;
      else if (r !== n.alt)
        return;
    }
  return r;
}
function Lh(t) {
  return {
    configs: t,
    edges: {},
    isAcceptState: !1,
    prediction: -1
  };
}
function Ou(t, e, r, n) {
  return n = xh(t, n), e.edges[r.tokenTypeIdx] = n, n;
}
function xh(t, e) {
  if (e === fs)
    return e;
  const r = e.configs.key, n = t.states[r];
  return n !== void 0 ? n : (e.configs.finalize(), t.states[r] = e, e);
}
function PT(t) {
  const e = new Yo(), r = t.transitions.length;
  for (let n = 0; n < r; n++) {
    const a = {
      state: t.transitions[n].target,
      alt: n,
      stack: []
    };
    ds(a, e);
  }
  return e;
}
function ds(t, e) {
  const r = t.state;
  if (r.type === ea) {
    if (t.stack.length > 0) {
      const i = [...t.stack], s = {
        state: i.pop(),
        alt: t.alt,
        stack: i
      };
      ds(s, e);
    } else
      e.add(t);
    return;
  }
  r.epsilonOnlyTransitions || e.add(t);
  const n = r.transitions.length;
  for (let i = 0; i < n; i++) {
    const a = r.transitions[i], s = OT(t, a);
    s !== void 0 && ds(s, e);
  }
}
function OT(t, e) {
  if (e instanceof kh)
    return {
      state: e.target,
      alt: t.alt,
      stack: t.stack
    };
  if (e instanceof Mc) {
    const r = [...t.stack, e.followState];
    return {
      state: e.target,
      alt: t.alt,
      stack: r
    };
  }
}
function LT(t) {
  for (const e of t.elements)
    if (e.state.type === ea)
      return !0;
  return !1;
}
function xT(t) {
  for (const e of t.elements)
    if (e.state.type !== ea)
      return !1;
  return !0;
}
function DT(t) {
  if (xT(t))
    return !0;
  const e = MT(t.elements);
  return FT(e) && !GT(e);
}
function MT(t) {
  const e = /* @__PURE__ */ new Map();
  for (const r of t) {
    const n = Ph(r, !1);
    let i = e.get(n);
    i === void 0 && (i = {}, e.set(n, i)), i[r.alt] = !0;
  }
  return e;
}
function FT(t) {
  for (const e of Array.from(t.values()))
    if (Object.keys(e).length > 1)
      return !0;
  return !1;
}
function GT(t) {
  for (const e of Array.from(t.values()))
    if (Object.keys(e).length === 1)
      return !0;
  return !1;
}
var Jo;
(function(t) {
  function e(r) {
    return typeof r == "string";
  }
  t.is = e;
})(Jo || (Jo = {}));
var hs;
(function(t) {
  function e(r) {
    return typeof r == "string";
  }
  t.is = e;
})(hs || (hs = {}));
var Zo;
(function(t) {
  t.MIN_VALUE = -2147483648, t.MAX_VALUE = 2147483647;
  function e(r) {
    return typeof r == "number" && t.MIN_VALUE <= r && r <= t.MAX_VALUE;
  }
  t.is = e;
})(Zo || (Zo = {}));
var Li;
(function(t) {
  t.MIN_VALUE = 0, t.MAX_VALUE = 2147483647;
  function e(r) {
    return typeof r == "number" && t.MIN_VALUE <= r && r <= t.MAX_VALUE;
  }
  t.is = e;
})(Li || (Li = {}));
var J;
(function(t) {
  function e(n, i) {
    return n === Number.MAX_VALUE && (n = Li.MAX_VALUE), i === Number.MAX_VALUE && (i = Li.MAX_VALUE), { line: n, character: i };
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.objectLiteral(i) && R.uinteger(i.line) && R.uinteger(i.character);
  }
  t.is = r;
})(J || (J = {}));
var V;
(function(t) {
  function e(n, i, a, s) {
    if (R.uinteger(n) && R.uinteger(i) && R.uinteger(a) && R.uinteger(s))
      return { start: J.create(n, i), end: J.create(a, s) };
    if (J.is(n) && J.is(i))
      return { start: n, end: i };
    throw new Error(`Range#create called with invalid arguments[${n}, ${i}, ${a}, ${s}]`);
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.objectLiteral(i) && J.is(i.start) && J.is(i.end);
  }
  t.is = r;
})(V || (V = {}));
var xi;
(function(t) {
  function e(n, i) {
    return { uri: n, range: i };
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.objectLiteral(i) && V.is(i.range) && (R.string(i.uri) || R.undefined(i.uri));
  }
  t.is = r;
})(xi || (xi = {}));
var Qo;
(function(t) {
  function e(n, i, a, s) {
    return { targetUri: n, targetRange: i, targetSelectionRange: a, originSelectionRange: s };
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.objectLiteral(i) && V.is(i.targetRange) && R.string(i.targetUri) && V.is(i.targetSelectionRange) && (V.is(i.originSelectionRange) || R.undefined(i.originSelectionRange));
  }
  t.is = r;
})(Qo || (Qo = {}));
var ps;
(function(t) {
  function e(n, i, a, s) {
    return {
      red: n,
      green: i,
      blue: a,
      alpha: s
    };
  }
  t.create = e;
  function r(n) {
    const i = n;
    return R.objectLiteral(i) && R.numberRange(i.red, 0, 1) && R.numberRange(i.green, 0, 1) && R.numberRange(i.blue, 0, 1) && R.numberRange(i.alpha, 0, 1);
  }
  t.is = r;
})(ps || (ps = {}));
var el;
(function(t) {
  function e(n, i) {
    return {
      range: n,
      color: i
    };
  }
  t.create = e;
  function r(n) {
    const i = n;
    return R.objectLiteral(i) && V.is(i.range) && ps.is(i.color);
  }
  t.is = r;
})(el || (el = {}));
var tl;
(function(t) {
  function e(n, i, a) {
    return {
      label: n,
      textEdit: i,
      additionalTextEdits: a
    };
  }
  t.create = e;
  function r(n) {
    const i = n;
    return R.objectLiteral(i) && R.string(i.label) && (R.undefined(i.textEdit) || At.is(i)) && (R.undefined(i.additionalTextEdits) || R.typedArray(i.additionalTextEdits, At.is));
  }
  t.is = r;
})(tl || (tl = {}));
var rl;
(function(t) {
  t.Comment = "comment", t.Imports = "imports", t.Region = "region";
})(rl || (rl = {}));
var nl;
(function(t) {
  function e(n, i, a, s, o, l) {
    const c = {
      startLine: n,
      endLine: i
    };
    return R.defined(a) && (c.startCharacter = a), R.defined(s) && (c.endCharacter = s), R.defined(o) && (c.kind = o), R.defined(l) && (c.collapsedText = l), c;
  }
  t.create = e;
  function r(n) {
    const i = n;
    return R.objectLiteral(i) && R.uinteger(i.startLine) && R.uinteger(i.startLine) && (R.undefined(i.startCharacter) || R.uinteger(i.startCharacter)) && (R.undefined(i.endCharacter) || R.uinteger(i.endCharacter)) && (R.undefined(i.kind) || R.string(i.kind));
  }
  t.is = r;
})(nl || (nl = {}));
var ms;
(function(t) {
  function e(n, i) {
    return {
      location: n,
      message: i
    };
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.defined(i) && xi.is(i.location) && R.string(i.message);
  }
  t.is = r;
})(ms || (ms = {}));
var il;
(function(t) {
  t.Error = 1, t.Warning = 2, t.Information = 3, t.Hint = 4;
})(il || (il = {}));
var al;
(function(t) {
  t.Unnecessary = 1, t.Deprecated = 2;
})(al || (al = {}));
var sl;
(function(t) {
  function e(r) {
    const n = r;
    return R.objectLiteral(n) && R.string(n.href);
  }
  t.is = e;
})(sl || (sl = {}));
var Di;
(function(t) {
  function e(n, i, a, s, o, l) {
    let c = { range: n, message: i };
    return R.defined(a) && (c.severity = a), R.defined(s) && (c.code = s), R.defined(o) && (c.source = o), R.defined(l) && (c.relatedInformation = l), c;
  }
  t.create = e;
  function r(n) {
    var i;
    let a = n;
    return R.defined(a) && V.is(a.range) && R.string(a.message) && (R.number(a.severity) || R.undefined(a.severity)) && (R.integer(a.code) || R.string(a.code) || R.undefined(a.code)) && (R.undefined(a.codeDescription) || R.string((i = a.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (R.string(a.source) || R.undefined(a.source)) && (R.undefined(a.relatedInformation) || R.typedArray(a.relatedInformation, ms.is));
  }
  t.is = r;
})(Di || (Di = {}));
var Or;
(function(t) {
  function e(n, i, ...a) {
    let s = { title: n, command: i };
    return R.defined(a) && a.length > 0 && (s.arguments = a), s;
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.defined(i) && R.string(i.title) && R.string(i.command);
  }
  t.is = r;
})(Or || (Or = {}));
var At;
(function(t) {
  function e(a, s) {
    return { range: a, newText: s };
  }
  t.replace = e;
  function r(a, s) {
    return { range: { start: a, end: a }, newText: s };
  }
  t.insert = r;
  function n(a) {
    return { range: a, newText: "" };
  }
  t.del = n;
  function i(a) {
    const s = a;
    return R.objectLiteral(s) && R.string(s.newText) && V.is(s.range);
  }
  t.is = i;
})(At || (At = {}));
var kr;
(function(t) {
  function e(n, i, a) {
    const s = { label: n };
    return i !== void 0 && (s.needsConfirmation = i), a !== void 0 && (s.description = a), s;
  }
  t.create = e;
  function r(n) {
    const i = n;
    return R.objectLiteral(i) && R.string(i.label) && (R.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (R.string(i.description) || i.description === void 0);
  }
  t.is = r;
})(kr || (kr = {}));
var De;
(function(t) {
  function e(r) {
    const n = r;
    return R.string(n);
  }
  t.is = e;
})(De || (De = {}));
var Mt;
(function(t) {
  function e(a, s, o) {
    return { range: a, newText: s, annotationId: o };
  }
  t.replace = e;
  function r(a, s, o) {
    return { range: { start: a, end: a }, newText: s, annotationId: o };
  }
  t.insert = r;
  function n(a, s) {
    return { range: a, newText: "", annotationId: s };
  }
  t.del = n;
  function i(a) {
    const s = a;
    return At.is(s) && (kr.is(s.annotationId) || De.is(s.annotationId));
  }
  t.is = i;
})(Mt || (Mt = {}));
var Mi;
(function(t) {
  function e(n, i) {
    return { textDocument: n, edits: i };
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.defined(i) && Fi.is(i.textDocument) && Array.isArray(i.edits);
  }
  t.is = r;
})(Mi || (Mi = {}));
var In;
(function(t) {
  function e(n, i, a) {
    let s = {
      kind: "create",
      uri: n
    };
    return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (s.options = i), a !== void 0 && (s.annotationId = a), s;
  }
  t.create = e;
  function r(n) {
    let i = n;
    return i && i.kind === "create" && R.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || R.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || R.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || De.is(i.annotationId));
  }
  t.is = r;
})(In || (In = {}));
var Pn;
(function(t) {
  function e(n, i, a, s) {
    let o = {
      kind: "rename",
      oldUri: n,
      newUri: i
    };
    return a !== void 0 && (a.overwrite !== void 0 || a.ignoreIfExists !== void 0) && (o.options = a), s !== void 0 && (o.annotationId = s), o;
  }
  t.create = e;
  function r(n) {
    let i = n;
    return i && i.kind === "rename" && R.string(i.oldUri) && R.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || R.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || R.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || De.is(i.annotationId));
  }
  t.is = r;
})(Pn || (Pn = {}));
var On;
(function(t) {
  function e(n, i, a) {
    let s = {
      kind: "delete",
      uri: n
    };
    return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (s.options = i), a !== void 0 && (s.annotationId = a), s;
  }
  t.create = e;
  function r(n) {
    let i = n;
    return i && i.kind === "delete" && R.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || R.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || R.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || De.is(i.annotationId));
  }
  t.is = r;
})(On || (On = {}));
var gs;
(function(t) {
  function e(r) {
    let n = r;
    return n && (n.changes !== void 0 || n.documentChanges !== void 0) && (n.documentChanges === void 0 || n.documentChanges.every((i) => R.string(i.kind) ? In.is(i) || Pn.is(i) || On.is(i) : Mi.is(i)));
  }
  t.is = e;
})(gs || (gs = {}));
class ba {
  constructor(e, r) {
    this.edits = e, this.changeAnnotations = r;
  }
  insert(e, r, n) {
    let i, a;
    if (n === void 0 ? i = At.insert(e, r) : De.is(n) ? (a = n, i = Mt.insert(e, r, n)) : (this.assertChangeAnnotations(this.changeAnnotations), a = this.changeAnnotations.manage(n), i = Mt.insert(e, r, a)), this.edits.push(i), a !== void 0)
      return a;
  }
  replace(e, r, n) {
    let i, a;
    if (n === void 0 ? i = At.replace(e, r) : De.is(n) ? (a = n, i = Mt.replace(e, r, n)) : (this.assertChangeAnnotations(this.changeAnnotations), a = this.changeAnnotations.manage(n), i = Mt.replace(e, r, a)), this.edits.push(i), a !== void 0)
      return a;
  }
  delete(e, r) {
    let n, i;
    if (r === void 0 ? n = At.del(e) : De.is(r) ? (i = r, n = Mt.del(e, r)) : (this.assertChangeAnnotations(this.changeAnnotations), i = this.changeAnnotations.manage(r), n = Mt.del(e, i)), this.edits.push(n), i !== void 0)
      return i;
  }
  add(e) {
    this.edits.push(e);
  }
  all() {
    return this.edits;
  }
  clear() {
    this.edits.splice(0, this.edits.length);
  }
  assertChangeAnnotations(e) {
    if (e === void 0)
      throw new Error("Text edit change is not configured to manage change annotations.");
  }
}
class Lu {
  constructor(e) {
    this._annotations = e === void 0 ? /* @__PURE__ */ Object.create(null) : e, this._counter = 0, this._size = 0;
  }
  all() {
    return this._annotations;
  }
  get size() {
    return this._size;
  }
  manage(e, r) {
    let n;
    if (De.is(e) ? n = e : (n = this.nextId(), r = e), this._annotations[n] !== void 0)
      throw new Error(`Id ${n} is already in use.`);
    if (r === void 0)
      throw new Error(`No annotation provided for id ${n}`);
    return this._annotations[n] = r, this._size++, n;
  }
  nextId() {
    return this._counter++, this._counter.toString();
  }
}
class jT {
  constructor(e) {
    this._textEditChanges = /* @__PURE__ */ Object.create(null), e !== void 0 ? (this._workspaceEdit = e, e.documentChanges ? (this._changeAnnotations = new Lu(e.changeAnnotations), e.changeAnnotations = this._changeAnnotations.all(), e.documentChanges.forEach((r) => {
      if (Mi.is(r)) {
        const n = new ba(r.edits, this._changeAnnotations);
        this._textEditChanges[r.textDocument.uri] = n;
      }
    })) : e.changes && Object.keys(e.changes).forEach((r) => {
      const n = new ba(e.changes[r]);
      this._textEditChanges[r] = n;
    })) : this._workspaceEdit = {};
  }
  /**
   * Returns the underlying {@link WorkspaceEdit} literal
   * use to be returned from a workspace edit operation like rename.
   */
  get edit() {
    return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit;
  }
  getTextEditChange(e) {
    if (Fi.is(e)) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
        throw new Error("Workspace edit is not configured for document changes.");
      const r = { uri: e.uri, version: e.version };
      let n = this._textEditChanges[r.uri];
      if (!n) {
        const i = [], a = {
          textDocument: r,
          edits: i
        };
        this._workspaceEdit.documentChanges.push(a), n = new ba(i, this._changeAnnotations), this._textEditChanges[r.uri] = n;
      }
      return n;
    } else {
      if (this.initChanges(), this._workspaceEdit.changes === void 0)
        throw new Error("Workspace edit is not configured for normal text edit changes.");
      let r = this._textEditChanges[e];
      if (!r) {
        let n = [];
        this._workspaceEdit.changes[e] = n, r = new ba(n), this._textEditChanges[e] = r;
      }
      return r;
    }
  }
  initDocumentChanges() {
    this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new Lu(), this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
  }
  initChanges() {
    this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null));
  }
  createFile(e, r, n) {
    if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
      throw new Error("Workspace edit is not configured for document changes.");
    let i;
    kr.is(r) || De.is(r) ? i = r : n = r;
    let a, s;
    if (i === void 0 ? a = In.create(e, n) : (s = De.is(i) ? i : this._changeAnnotations.manage(i), a = In.create(e, n, s)), this._workspaceEdit.documentChanges.push(a), s !== void 0)
      return s;
  }
  renameFile(e, r, n, i) {
    if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
      throw new Error("Workspace edit is not configured for document changes.");
    let a;
    kr.is(n) || De.is(n) ? a = n : i = n;
    let s, o;
    if (a === void 0 ? s = Pn.create(e, r, i) : (o = De.is(a) ? a : this._changeAnnotations.manage(a), s = Pn.create(e, r, i, o)), this._workspaceEdit.documentChanges.push(s), o !== void 0)
      return o;
  }
  deleteFile(e, r, n) {
    if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
      throw new Error("Workspace edit is not configured for document changes.");
    let i;
    kr.is(r) || De.is(r) ? i = r : n = r;
    let a, s;
    if (i === void 0 ? a = On.create(e, n) : (s = De.is(i) ? i : this._changeAnnotations.manage(i), a = On.create(e, n, s)), this._workspaceEdit.documentChanges.push(a), s !== void 0)
      return s;
  }
}
var ol;
(function(t) {
  function e(n) {
    return { uri: n };
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.defined(i) && R.string(i.uri);
  }
  t.is = r;
})(ol || (ol = {}));
var ll;
(function(t) {
  function e(n, i) {
    return { uri: n, version: i };
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.defined(i) && R.string(i.uri) && R.integer(i.version);
  }
  t.is = r;
})(ll || (ll = {}));
var Fi;
(function(t) {
  function e(n, i) {
    return { uri: n, version: i };
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.defined(i) && R.string(i.uri) && (i.version === null || R.integer(i.version));
  }
  t.is = r;
})(Fi || (Fi = {}));
var cl;
(function(t) {
  function e(n, i, a, s) {
    return { uri: n, languageId: i, version: a, text: s };
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.defined(i) && R.string(i.uri) && R.string(i.languageId) && R.integer(i.version) && R.string(i.text);
  }
  t.is = r;
})(cl || (cl = {}));
var ys;
(function(t) {
  t.PlainText = "plaintext", t.Markdown = "markdown";
  function e(r) {
    const n = r;
    return n === t.PlainText || n === t.Markdown;
  }
  t.is = e;
})(ys || (ys = {}));
var Ln;
(function(t) {
  function e(r) {
    const n = r;
    return R.objectLiteral(r) && ys.is(n.kind) && R.string(n.value);
  }
  t.is = e;
})(Ln || (Ln = {}));
var ul;
(function(t) {
  t.Text = 1, t.Method = 2, t.Function = 3, t.Constructor = 4, t.Field = 5, t.Variable = 6, t.Class = 7, t.Interface = 8, t.Module = 9, t.Property = 10, t.Unit = 11, t.Value = 12, t.Enum = 13, t.Keyword = 14, t.Snippet = 15, t.Color = 16, t.File = 17, t.Reference = 18, t.Folder = 19, t.EnumMember = 20, t.Constant = 21, t.Struct = 22, t.Event = 23, t.Operator = 24, t.TypeParameter = 25;
})(ul || (ul = {}));
var fl;
(function(t) {
  t.PlainText = 1, t.Snippet = 2;
})(fl || (fl = {}));
var dl;
(function(t) {
  t.Deprecated = 1;
})(dl || (dl = {}));
var hl;
(function(t) {
  function e(n, i, a) {
    return { newText: n, insert: i, replace: a };
  }
  t.create = e;
  function r(n) {
    const i = n;
    return i && R.string(i.newText) && V.is(i.insert) && V.is(i.replace);
  }
  t.is = r;
})(hl || (hl = {}));
var pl;
(function(t) {
  t.asIs = 1, t.adjustIndentation = 2;
})(pl || (pl = {}));
var ml;
(function(t) {
  function e(r) {
    const n = r;
    return n && (R.string(n.detail) || n.detail === void 0) && (R.string(n.description) || n.description === void 0);
  }
  t.is = e;
})(ml || (ml = {}));
var gl;
(function(t) {
  function e(r) {
    return { label: r };
  }
  t.create = e;
})(gl || (gl = {}));
var yl;
(function(t) {
  function e(r, n) {
    return { items: r || [], isIncomplete: !!n };
  }
  t.create = e;
})(yl || (yl = {}));
var Gi;
(function(t) {
  function e(n) {
    return n.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  t.fromPlainText = e;
  function r(n) {
    const i = n;
    return R.string(i) || R.objectLiteral(i) && R.string(i.language) && R.string(i.value);
  }
  t.is = r;
})(Gi || (Gi = {}));
var Tl;
(function(t) {
  function e(r) {
    let n = r;
    return !!n && R.objectLiteral(n) && (Ln.is(n.contents) || Gi.is(n.contents) || R.typedArray(n.contents, Gi.is)) && (r.range === void 0 || V.is(r.range));
  }
  t.is = e;
})(Tl || (Tl = {}));
var Rl;
(function(t) {
  function e(r, n) {
    return n ? { label: r, documentation: n } : { label: r };
  }
  t.create = e;
})(Rl || (Rl = {}));
var vl;
(function(t) {
  function e(r, n, ...i) {
    let a = { label: r };
    return R.defined(n) && (a.documentation = n), R.defined(i) ? a.parameters = i : a.parameters = [], a;
  }
  t.create = e;
})(vl || (vl = {}));
var El;
(function(t) {
  t.Text = 1, t.Read = 2, t.Write = 3;
})(El || (El = {}));
var $l;
(function(t) {
  function e(r, n) {
    let i = { range: r };
    return R.number(n) && (i.kind = n), i;
  }
  t.create = e;
})($l || ($l = {}));
var Al;
(function(t) {
  t.File = 1, t.Module = 2, t.Namespace = 3, t.Package = 4, t.Class = 5, t.Method = 6, t.Property = 7, t.Field = 8, t.Constructor = 9, t.Enum = 10, t.Interface = 11, t.Function = 12, t.Variable = 13, t.Constant = 14, t.String = 15, t.Number = 16, t.Boolean = 17, t.Array = 18, t.Object = 19, t.Key = 20, t.Null = 21, t.EnumMember = 22, t.Struct = 23, t.Event = 24, t.Operator = 25, t.TypeParameter = 26;
})(Al || (Al = {}));
var Cl;
(function(t) {
  t.Deprecated = 1;
})(Cl || (Cl = {}));
var Sl;
(function(t) {
  function e(r, n, i, a, s) {
    let o = {
      name: r,
      kind: n,
      location: { uri: a, range: i }
    };
    return s && (o.containerName = s), o;
  }
  t.create = e;
})(Sl || (Sl = {}));
var wl;
(function(t) {
  function e(r, n, i, a) {
    return a !== void 0 ? { name: r, kind: n, location: { uri: i, range: a } } : { name: r, kind: n, location: { uri: i } };
  }
  t.create = e;
})(wl || (wl = {}));
var bl;
(function(t) {
  function e(n, i, a, s, o, l) {
    let c = {
      name: n,
      detail: i,
      kind: a,
      range: s,
      selectionRange: o
    };
    return l !== void 0 && (c.children = l), c;
  }
  t.create = e;
  function r(n) {
    let i = n;
    return i && R.string(i.name) && R.number(i.kind) && V.is(i.range) && V.is(i.selectionRange) && (i.detail === void 0 || R.string(i.detail)) && (i.deprecated === void 0 || R.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
  }
  t.is = r;
})(bl || (bl = {}));
var kl;
(function(t) {
  t.Empty = "", t.QuickFix = "quickfix", t.Refactor = "refactor", t.RefactorExtract = "refactor.extract", t.RefactorInline = "refactor.inline", t.RefactorRewrite = "refactor.rewrite", t.Source = "source", t.SourceOrganizeImports = "source.organizeImports", t.SourceFixAll = "source.fixAll";
})(kl || (kl = {}));
var ji;
(function(t) {
  t.Invoked = 1, t.Automatic = 2;
})(ji || (ji = {}));
var Nl;
(function(t) {
  function e(n, i, a) {
    let s = { diagnostics: n };
    return i != null && (s.only = i), a != null && (s.triggerKind = a), s;
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.defined(i) && R.typedArray(i.diagnostics, Di.is) && (i.only === void 0 || R.typedArray(i.only, R.string)) && (i.triggerKind === void 0 || i.triggerKind === ji.Invoked || i.triggerKind === ji.Automatic);
  }
  t.is = r;
})(Nl || (Nl = {}));
var _l;
(function(t) {
  function e(n, i, a) {
    let s = { title: n }, o = !0;
    return typeof i == "string" ? (o = !1, s.kind = i) : Or.is(i) ? s.command = i : s.edit = i, o && a !== void 0 && (s.kind = a), s;
  }
  t.create = e;
  function r(n) {
    let i = n;
    return i && R.string(i.title) && (i.diagnostics === void 0 || R.typedArray(i.diagnostics, Di.is)) && (i.kind === void 0 || R.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Or.is(i.command)) && (i.isPreferred === void 0 || R.boolean(i.isPreferred)) && (i.edit === void 0 || gs.is(i.edit));
  }
  t.is = r;
})(_l || (_l = {}));
var Il;
(function(t) {
  function e(n, i) {
    let a = { range: n };
    return R.defined(i) && (a.data = i), a;
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.defined(i) && V.is(i.range) && (R.undefined(i.command) || Or.is(i.command));
  }
  t.is = r;
})(Il || (Il = {}));
var Pl;
(function(t) {
  function e(n, i) {
    return { tabSize: n, insertSpaces: i };
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.defined(i) && R.uinteger(i.tabSize) && R.boolean(i.insertSpaces);
  }
  t.is = r;
})(Pl || (Pl = {}));
var Ol;
(function(t) {
  function e(n, i, a) {
    return { range: n, target: i, data: a };
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.defined(i) && V.is(i.range) && (R.undefined(i.target) || R.string(i.target));
  }
  t.is = r;
})(Ol || (Ol = {}));
var Ll;
(function(t) {
  function e(n, i) {
    return { range: n, parent: i };
  }
  t.create = e;
  function r(n) {
    let i = n;
    return R.objectLiteral(i) && V.is(i.range) && (i.parent === void 0 || t.is(i.parent));
  }
  t.is = r;
})(Ll || (Ll = {}));
var xl;
(function(t) {
  t.namespace = "namespace", t.type = "type", t.class = "class", t.enum = "enum", t.interface = "interface", t.struct = "struct", t.typeParameter = "typeParameter", t.parameter = "parameter", t.variable = "variable", t.property = "property", t.enumMember = "enumMember", t.event = "event", t.function = "function", t.method = "method", t.macro = "macro", t.keyword = "keyword", t.modifier = "modifier", t.comment = "comment", t.string = "string", t.number = "number", t.regexp = "regexp", t.operator = "operator", t.decorator = "decorator";
})(xl || (xl = {}));
var Dl;
(function(t) {
  t.declaration = "declaration", t.definition = "definition", t.readonly = "readonly", t.static = "static", t.deprecated = "deprecated", t.abstract = "abstract", t.async = "async", t.modification = "modification", t.documentation = "documentation", t.defaultLibrary = "defaultLibrary";
})(Dl || (Dl = {}));
var Ml;
(function(t) {
  function e(r) {
    const n = r;
    return R.objectLiteral(n) && (n.resultId === void 0 || typeof n.resultId == "string") && Array.isArray(n.data) && (n.data.length === 0 || typeof n.data[0] == "number");
  }
  t.is = e;
})(Ml || (Ml = {}));
var Fl;
(function(t) {
  function e(n, i) {
    return { range: n, text: i };
  }
  t.create = e;
  function r(n) {
    const i = n;
    return i != null && V.is(i.range) && R.string(i.text);
  }
  t.is = r;
})(Fl || (Fl = {}));
var Gl;
(function(t) {
  function e(n, i, a) {
    return { range: n, variableName: i, caseSensitiveLookup: a };
  }
  t.create = e;
  function r(n) {
    const i = n;
    return i != null && V.is(i.range) && R.boolean(i.caseSensitiveLookup) && (R.string(i.variableName) || i.variableName === void 0);
  }
  t.is = r;
})(Gl || (Gl = {}));
var jl;
(function(t) {
  function e(n, i) {
    return { range: n, expression: i };
  }
  t.create = e;
  function r(n) {
    const i = n;
    return i != null && V.is(i.range) && (R.string(i.expression) || i.expression === void 0);
  }
  t.is = r;
})(jl || (jl = {}));
var zl;
(function(t) {
  function e(n, i) {
    return { frameId: n, stoppedLocation: i };
  }
  t.create = e;
  function r(n) {
    const i = n;
    return R.defined(i) && V.is(n.stoppedLocation);
  }
  t.is = r;
})(zl || (zl = {}));
var Ts;
(function(t) {
  t.Type = 1, t.Parameter = 2;
  function e(r) {
    return r === 1 || r === 2;
  }
  t.is = e;
})(Ts || (Ts = {}));
var Rs;
(function(t) {
  function e(n) {
    return { value: n };
  }
  t.create = e;
  function r(n) {
    const i = n;
    return R.objectLiteral(i) && (i.tooltip === void 0 || R.string(i.tooltip) || Ln.is(i.tooltip)) && (i.location === void 0 || xi.is(i.location)) && (i.command === void 0 || Or.is(i.command));
  }
  t.is = r;
})(Rs || (Rs = {}));
var Ul;
(function(t) {
  function e(n, i, a) {
    const s = { position: n, label: i };
    return a !== void 0 && (s.kind = a), s;
  }
  t.create = e;
  function r(n) {
    const i = n;
    return R.objectLiteral(i) && J.is(i.position) && (R.string(i.label) || R.typedArray(i.label, Rs.is)) && (i.kind === void 0 || Ts.is(i.kind)) && i.textEdits === void 0 || R.typedArray(i.textEdits, At.is) && (i.tooltip === void 0 || R.string(i.tooltip) || Ln.is(i.tooltip)) && (i.paddingLeft === void 0 || R.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || R.boolean(i.paddingRight));
  }
  t.is = r;
})(Ul || (Ul = {}));
var Bl;
(function(t) {
  function e(r) {
    return { kind: "snippet", value: r };
  }
  t.createSnippet = e;
})(Bl || (Bl = {}));
var Wl;
(function(t) {
  function e(r, n, i, a) {
    return { insertText: r, filterText: n, range: i, command: a };
  }
  t.create = e;
})(Wl || (Wl = {}));
var Kl;
(function(t) {
  function e(r) {
    return { items: r };
  }
  t.create = e;
})(Kl || (Kl = {}));
var Vl;
(function(t) {
  t.Invoked = 0, t.Automatic = 1;
})(Vl || (Vl = {}));
var ql;
(function(t) {
  function e(r, n) {
    return { range: r, text: n };
  }
  t.create = e;
})(ql || (ql = {}));
var Hl;
(function(t) {
  function e(r, n) {
    return { triggerKind: r, selectedCompletionInfo: n };
  }
  t.create = e;
})(Hl || (Hl = {}));
var Xl;
(function(t) {
  function e(r) {
    const n = r;
    return R.objectLiteral(n) && hs.is(n.uri) && R.string(n.name);
  }
  t.is = e;
})(Xl || (Xl = {}));
const zT = [`
`, `\r
`, "\r"];
var Yl;
(function(t) {
  function e(a, s, o, l) {
    return new UT(a, s, o, l);
  }
  t.create = e;
  function r(a) {
    let s = a;
    return !!(R.defined(s) && R.string(s.uri) && (R.undefined(s.languageId) || R.string(s.languageId)) && R.uinteger(s.lineCount) && R.func(s.getText) && R.func(s.positionAt) && R.func(s.offsetAt));
  }
  t.is = r;
  function n(a, s) {
    let o = a.getText(), l = i(s, (f, h) => {
      let p = f.range.start.line - h.range.start.line;
      return p === 0 ? f.range.start.character - h.range.start.character : p;
    }), c = o.length;
    for (let f = l.length - 1; f >= 0; f--) {
      let h = l[f], p = a.offsetAt(h.range.start), g = a.offsetAt(h.range.end);
      if (g <= c)
        o = o.substring(0, p) + h.newText + o.substring(g, o.length);
      else
        throw new Error("Overlapping edit");
      c = p;
    }
    return o;
  }
  t.applyEdits = n;
  function i(a, s) {
    if (a.length <= 1)
      return a;
    const o = a.length / 2 | 0, l = a.slice(0, o), c = a.slice(o);
    i(l, s), i(c, s);
    let f = 0, h = 0, p = 0;
    for (; f < l.length && h < c.length; )
      s(l[f], c[h]) <= 0 ? a[p++] = l[f++] : a[p++] = c[h++];
    for (; f < l.length; )
      a[p++] = l[f++];
    for (; h < c.length; )
      a[p++] = c[h++];
    return a;
  }
})(Yl || (Yl = {}));
let UT = class {
  constructor(e, r, n, i) {
    this._uri = e, this._languageId = r, this._version = n, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      let r = this.offsetAt(e.start), n = this.offsetAt(e.end);
      return this._content.substring(r, n);
    }
    return this._content;
  }
  update(e, r) {
    this._content = e.text, this._version = r, this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let e = [], r = this._content, n = !0;
      for (let i = 0; i < r.length; i++) {
        n && (e.push(i), n = !1);
        let a = r.charAt(i);
        n = a === "\r" || a === `
`, a === "\r" && i + 1 < r.length && r.charAt(i + 1) === `
` && i++;
      }
      n && r.length > 0 && e.push(r.length), this._lineOffsets = e;
    }
    return this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    let r = this.getLineOffsets(), n = 0, i = r.length;
    if (i === 0)
      return J.create(0, e);
    for (; n < i; ) {
      let s = Math.floor((n + i) / 2);
      r[s] > e ? i = s : n = s + 1;
    }
    let a = n - 1;
    return J.create(a, e - r[a]);
  }
  offsetAt(e) {
    let r = this.getLineOffsets();
    if (e.line >= r.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    let n = r[e.line], i = e.line + 1 < r.length ? r[e.line + 1] : this._content.length;
    return Math.max(Math.min(n + e.character, i), n);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
};
var R;
(function(t) {
  const e = Object.prototype.toString;
  function r(g) {
    return typeof g < "u";
  }
  t.defined = r;
  function n(g) {
    return typeof g > "u";
  }
  t.undefined = n;
  function i(g) {
    return g === !0 || g === !1;
  }
  t.boolean = i;
  function a(g) {
    return e.call(g) === "[object String]";
  }
  t.string = a;
  function s(g) {
    return e.call(g) === "[object Number]";
  }
  t.number = s;
  function o(g, C, b) {
    return e.call(g) === "[object Number]" && C <= g && g <= b;
  }
  t.numberRange = o;
  function l(g) {
    return e.call(g) === "[object Number]" && -2147483648 <= g && g <= 2147483647;
  }
  t.integer = l;
  function c(g) {
    return e.call(g) === "[object Number]" && 0 <= g && g <= 2147483647;
  }
  t.uinteger = c;
  function f(g) {
    return e.call(g) === "[object Function]";
  }
  t.func = f;
  function h(g) {
    return g !== null && typeof g == "object";
  }
  t.objectLiteral = h;
  function p(g, C) {
    return Array.isArray(g) && g.every(C);
  }
  t.typedArray = p;
})(R || (R = {}));
const BT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get AnnotatedTextEdit() {
    return Mt;
  },
  get ChangeAnnotation() {
    return kr;
  },
  get ChangeAnnotationIdentifier() {
    return De;
  },
  get CodeAction() {
    return _l;
  },
  get CodeActionContext() {
    return Nl;
  },
  get CodeActionKind() {
    return kl;
  },
  get CodeActionTriggerKind() {
    return ji;
  },
  get CodeDescription() {
    return sl;
  },
  get CodeLens() {
    return Il;
  },
  get Color() {
    return ps;
  },
  get ColorInformation() {
    return el;
  },
  get ColorPresentation() {
    return tl;
  },
  get Command() {
    return Or;
  },
  get CompletionItem() {
    return gl;
  },
  get CompletionItemKind() {
    return ul;
  },
  get CompletionItemLabelDetails() {
    return ml;
  },
  get CompletionItemTag() {
    return dl;
  },
  get CompletionList() {
    return yl;
  },
  get CreateFile() {
    return In;
  },
  get DeleteFile() {
    return On;
  },
  get Diagnostic() {
    return Di;
  },
  get DiagnosticRelatedInformation() {
    return ms;
  },
  get DiagnosticSeverity() {
    return il;
  },
  get DiagnosticTag() {
    return al;
  },
  get DocumentHighlight() {
    return $l;
  },
  get DocumentHighlightKind() {
    return El;
  },
  get DocumentLink() {
    return Ol;
  },
  get DocumentSymbol() {
    return bl;
  },
  get DocumentUri() {
    return Jo;
  },
  EOL: zT,
  get FoldingRange() {
    return nl;
  },
  get FoldingRangeKind() {
    return rl;
  },
  get FormattingOptions() {
    return Pl;
  },
  get Hover() {
    return Tl;
  },
  get InlayHint() {
    return Ul;
  },
  get InlayHintKind() {
    return Ts;
  },
  get InlayHintLabelPart() {
    return Rs;
  },
  get InlineCompletionContext() {
    return Hl;
  },
  get InlineCompletionItem() {
    return Wl;
  },
  get InlineCompletionList() {
    return Kl;
  },
  get InlineCompletionTriggerKind() {
    return Vl;
  },
  get InlineValueContext() {
    return zl;
  },
  get InlineValueEvaluatableExpression() {
    return jl;
  },
  get InlineValueText() {
    return Fl;
  },
  get InlineValueVariableLookup() {
    return Gl;
  },
  get InsertReplaceEdit() {
    return hl;
  },
  get InsertTextFormat() {
    return fl;
  },
  get InsertTextMode() {
    return pl;
  },
  get Location() {
    return xi;
  },
  get LocationLink() {
    return Qo;
  },
  get MarkedString() {
    return Gi;
  },
  get MarkupContent() {
    return Ln;
  },
  get MarkupKind() {
    return ys;
  },
  get OptionalVersionedTextDocumentIdentifier() {
    return Fi;
  },
  get ParameterInformation() {
    return Rl;
  },
  get Position() {
    return J;
  },
  get Range() {
    return V;
  },
  get RenameFile() {
    return Pn;
  },
  get SelectedCompletionInfo() {
    return ql;
  },
  get SelectionRange() {
    return Ll;
  },
  get SemanticTokenModifiers() {
    return Dl;
  },
  get SemanticTokenTypes() {
    return xl;
  },
  get SemanticTokens() {
    return Ml;
  },
  get SignatureInformation() {
    return vl;
  },
  get StringValue() {
    return Bl;
  },
  get SymbolInformation() {
    return Sl;
  },
  get SymbolKind() {
    return Al;
  },
  get SymbolTag() {
    return Cl;
  },
  get TextDocument() {
    return Yl;
  },
  get TextDocumentEdit() {
    return Mi;
  },
  get TextDocumentIdentifier() {
    return ol;
  },
  get TextDocumentItem() {
    return cl;
  },
  get TextEdit() {
    return At;
  },
  get URI() {
    return hs;
  },
  get VersionedTextDocumentIdentifier() {
    return ll;
  },
  WorkspaceChange: jT,
  get WorkspaceEdit() {
    return gs;
  },
  get WorkspaceFolder() {
    return Xl;
  },
  get WorkspaceSymbol() {
    return wl;
  },
  get integer() {
    return Zo;
  },
  get uinteger() {
    return Li;
  }
}, Symbol.toStringTag, { value: "Module" }));
class WT {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    return this.nodeStack[this.nodeStack.length - 1] ?? this.rootNode;
  }
  buildRootNode(e) {
    return this.rootNode = new Mh(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
  }
  buildCompositeNode(e) {
    const r = new jc();
    return r.grammarSource = e, r.root = this.rootNode, this.current.content.push(r), this.nodeStack.push(r), r;
  }
  buildLeafNode(e, r) {
    const n = new Jl(e.startOffset, e.image.length, Go(e), e.tokenType, !r);
    return n.grammarSource = r, n.root = this.rootNode, this.current.content.push(n), n;
  }
  removeNode(e) {
    const r = e.container;
    if (r) {
      const n = r.content.indexOf(e);
      n >= 0 && r.content.splice(n, 1);
    }
  }
  addHiddenNodes(e) {
    const r = [];
    for (const a of e) {
      const s = new Jl(a.startOffset, a.image.length, Go(a), a.tokenType, !0);
      s.root = this.rootNode, r.push(s);
    }
    let n = this.current, i = !1;
    if (n.content.length > 0) {
      n.content.push(...r);
      return;
    }
    for (; n.container; ) {
      const a = n.container.content.indexOf(n);
      if (a > 0) {
        n.container.content.splice(a, 0, ...r), i = !0;
        break;
      }
      n = n.container;
    }
    i || this.rootNode.content.unshift(...r);
  }
  construct(e) {
    const r = this.current;
    typeof e.$type == "string" && !e.$infixName && (this.current.astNode = e), e.$cstNode = r;
    const n = this.nodeStack.pop();
    (n == null ? void 0 : n.content.length) === 0 && this.removeNode(n);
  }
}
class Dh {
  get hidden() {
    return !1;
  }
  get astNode() {
    var r, n;
    const e = typeof ((r = this._astNode) == null ? void 0 : r.$type) == "string" ? this._astNode : (n = this.container) == null ? void 0 : n.astNode;
    if (!e)
      throw new Error("This node has no associated AST element");
    return e;
  }
  set astNode(e) {
    this._astNode = e;
  }
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
}
class Jl extends Dh {
  get offset() {
    return this._offset;
  }
  get length() {
    return this._length;
  }
  get end() {
    return this._offset + this._length;
  }
  get hidden() {
    return this._hidden;
  }
  get tokenType() {
    return this._tokenType;
  }
  get range() {
    return this._range;
  }
  constructor(e, r, n, i, a = !1) {
    super(), this._hidden = a, this._offset = e, this._tokenType = i, this._length = r, this._range = n;
  }
}
class jc extends Dh {
  constructor() {
    super(...arguments), this.content = new zc(this);
  }
  get offset() {
    var e;
    return ((e = this.firstNonHiddenNode) == null ? void 0 : e.offset) ?? 0;
  }
  get length() {
    return this.end - this.offset;
  }
  get end() {
    var e;
    return ((e = this.lastNonHiddenNode) == null ? void 0 : e.end) ?? 0;
  }
  get range() {
    const e = this.firstNonHiddenNode, r = this.lastNonHiddenNode;
    if (e && r) {
      if (this._rangeCache === void 0) {
        const { range: n } = e, { range: i } = r;
        this._rangeCache = { start: n.start, end: i.end.line < n.start.line ? n.start : i.end };
      }
      return this._rangeCache;
    } else
      return { start: J.create(0, 0), end: J.create(0, 0) };
  }
  get firstNonHiddenNode() {
    for (const e of this.content)
      if (!e.hidden)
        return e;
    return this.content[0];
  }
  get lastNonHiddenNode() {
    for (let e = this.content.length - 1; e >= 0; e--) {
      const r = this.content[e];
      if (!r.hidden)
        return r;
    }
    return this.content[this.content.length - 1];
  }
}
class zc extends Array {
  constructor(e) {
    super(), this.parent = e, Object.setPrototypeOf(this, zc.prototype);
  }
  push(...e) {
    return this.addParents(e), super.push(...e);
  }
  unshift(...e) {
    return this.addParents(e), super.unshift(...e);
  }
  splice(e, r, ...n) {
    return this.addParents(n), super.splice(e, r, ...n);
  }
  addParents(e) {
    for (const r of e)
      r.container = this.parent;
  }
}
class Mh extends jc {
  get text() {
    return this._text.substring(this.offset, this.end);
  }
  get fullText() {
    return this._text;
  }
  constructor(e) {
    super(), this._text = "", this._text = e ?? "";
  }
}
const Zl = Symbol("Datatype");
function po(t) {
  return t.$type === Zl;
}
const xu = "​", Fh = (t) => t.endsWith(xu) ? t : t + xu;
class Gh {
  constructor(e) {
    var i;
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
    const r = this.lexer.definition, n = e.LanguageMetaData.mode === "production";
    (i = e.shared.profilers.LangiumProfiler) != null && i.isActive("parsing") ? this.wrapper = new XT(r, {
      ...e.parser.ParserConfig,
      skipValidations: n,
      errorMessageProvider: e.parser.ParserErrorMessageProvider
    }, e.shared.profilers.LangiumProfiler.createTask("parsing", e.LanguageMetaData.languageId)) : this.wrapper = new zh(r, {
      ...e.parser.ParserConfig,
      skipValidations: n,
      errorMessageProvider: e.parser.ParserErrorMessageProvider
    });
  }
  alternatives(e, r) {
    this.wrapper.wrapOr(e, r);
  }
  optional(e, r) {
    this.wrapper.wrapOption(e, r);
  }
  many(e, r) {
    this.wrapper.wrapMany(e, r);
  }
  atLeastOne(e, r) {
    this.wrapper.wrapAtLeastOne(e, r);
  }
  getRule(e) {
    return this.allRules.get(e);
  }
  isRecording() {
    return this.wrapper.IS_RECORDING;
  }
  get unorderedGroups() {
    return this._unorderedGroups;
  }
  getRuleStack() {
    return this.wrapper.RULE_STACK;
  }
  finalize() {
    this.wrapper.wrapSelfAnalysis();
  }
}
class KT extends Gh {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e) {
    super(e), this.nodeBuilder = new WT(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.operatorPrecedence = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
  }
  rule(e, r) {
    const n = this.computeRuleType(e);
    let i;
    ts(e) && (i = e.name, this.registerPrecedenceMap(e));
    const a = this.wrapper.DEFINE_RULE(Fh(e.name), this.startImplementation(n, i, r).bind(this));
    return this.allRules.set(e.name, a), Kt(e) && e.entry && (this.mainRule = a), a;
  }
  registerPrecedenceMap(e) {
    const r = e.name, n = /* @__PURE__ */ new Map();
    for (let i = 0; i < e.operators.precedences.length; i++) {
      const a = e.operators.precedences[i];
      for (const s of a.operators)
        n.set(s.value, {
          precedence: i,
          rightAssoc: a.associativity === "right"
        });
    }
    this.operatorPrecedence.set(r, n);
  }
  computeRuleType(e) {
    return ts(e) ? Oi(e) : e.fragment ? void 0 : Kd(e) ? Zl : Oi(e);
  }
  parse(e, r = {}) {
    this.nodeBuilder.buildRootNode(e);
    const n = this.lexerResult = this.lexer.tokenize(e);
    this.wrapper.input = n.tokens;
    const i = r.rule ? this.allRules.get(r.rule) : this.mainRule;
    if (!i)
      throw new Error(r.rule ? `No rule found with name '${r.rule}'` : "No main rule available.");
    const a = this.doParse(i);
    return this.nodeBuilder.addHiddenNodes(n.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, Io(a, { deep: !0 }), {
      value: a,
      lexerErrors: n.errors,
      lexerReport: n.report,
      parserErrors: this.wrapper.errors
    };
  }
  doParse(e) {
    let r = this.wrapper.rule(e);
    if (this.stack.length > 0 && (r = this.construct()), r === void 0)
      throw new Error("No result from parser");
    if (this.stack.length > 0)
      throw new Error("Parser stack is not empty after parsing");
    return r;
  }
  startImplementation(e, r, n) {
    return (i) => {
      const a = !this.isRecording() && e !== void 0;
      if (a) {
        const s = { $type: e };
        this.stack.push(s), e === Zl ? s.value = "" : r !== void 0 && (s.$infixName = r);
      }
      return n(i), a ? this.construct() : void 0;
    };
  }
  extractHiddenTokens(e) {
    const r = this.lexerResult.hidden;
    if (!r.length)
      return [];
    const n = e.startOffset;
    for (let i = 0; i < r.length; i++)
      if (r[i].startOffset > n)
        return r.splice(0, i);
    return r.splice(0, r.length);
  }
  consume(e, r, n) {
    const i = this.wrapper.wrapConsume(e, r);
    if (!this.isRecording() && this.isValidToken(i)) {
      const a = this.extractHiddenTokens(i);
      this.nodeBuilder.addHiddenNodes(a);
      const s = this.nodeBuilder.buildLeafNode(i, n), { assignment: o, crossRef: l } = this.getAssignment(n), c = this.current;
      if (o) {
        const f = _r(n) ? i.image : this.converter.convert(i.image, s);
        this.assign(o.operator, o.feature, f, s, l);
      } else if (po(c)) {
        let f = i.image;
        _r(n) || (f = this.converter.convert(f, s).toString()), c.value += f;
      }
    }
  }
  /**
   * Most consumed parser tokens are valid. However there are two cases in which they are not valid:
   *
   * 1. They were inserted during error recovery by the parser. These tokens don't really exist and should not be further processed
   * 2. They contain invalid token ranges. This might include the special EOF token, or other tokens produced by invalid token builders.
   */
  isValidToken(e) {
    return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
  }
  subrule(e, r, n, i, a) {
    let s;
    !this.isRecording() && !n && (s = this.nodeBuilder.buildCompositeNode(i));
    let o;
    try {
      o = this.wrapper.wrapSubrule(e, r, a);
    } finally {
      this.isRecording() || (o === void 0 && !n && (o = this.construct()), o !== void 0 && s && s.length > 0 && this.performSubruleAssignment(o, i, s));
    }
  }
  performSubruleAssignment(e, r, n) {
    const { assignment: i, crossRef: a } = this.getAssignment(r);
    if (i)
      this.assign(i.operator, i.feature, e, n, a);
    else if (!i) {
      const s = this.current;
      if (po(s))
        s.value += e.toString();
      else if (typeof e == "object" && e) {
        const l = this.assignWithoutOverride(e, s);
        this.stack.pop(), this.stack.push(l);
      }
    }
  }
  action(e, r) {
    if (!this.isRecording()) {
      let n = this.current;
      if (r.feature && r.operator) {
        n = this.construct(), this.nodeBuilder.removeNode(n.$cstNode), this.nodeBuilder.buildCompositeNode(r).content.push(n.$cstNode);
        const a = { $type: e };
        this.stack.push(a), this.assign(r.operator, r.feature, n, n.$cstNode);
      } else
        n.$type = e;
    }
  }
  construct() {
    if (this.isRecording())
      return;
    const e = this.stack.pop();
    return this.nodeBuilder.construct(e), "$infixName" in e ? this.constructInfix(e, this.operatorPrecedence.get(e.$infixName)) : po(e) ? this.converter.convert(e.value, e.$cstNode) : (Zp(this.astReflection, e), e);
  }
  constructInfix(e, r) {
    const n = e.parts;
    if (!Array.isArray(n) || n.length === 0)
      return;
    const i = e.operators;
    if (!Array.isArray(i) || n.length < 2)
      return n[0];
    let a = 0, s = -1;
    for (let b = 0; b < i.length; b++) {
      const D = i[b], k = r.get(D) ?? {
        precedence: 1 / 0,
        rightAssoc: !1
      };
      k.precedence > s ? (s = k.precedence, a = b) : k.precedence === s && (k.rightAssoc || (a = b));
    }
    const o = i.slice(0, a), l = i.slice(a + 1), c = n.slice(0, a + 1), f = n.slice(a + 1), h = {
      $infixName: e.$infixName,
      $type: e.$type,
      $cstNode: e.$cstNode,
      parts: c,
      operators: o
    }, p = {
      $infixName: e.$infixName,
      $type: e.$type,
      $cstNode: e.$cstNode,
      parts: f,
      operators: l
    }, g = this.constructInfix(h, r), C = this.constructInfix(p, r);
    return {
      $type: e.$type,
      $cstNode: e.$cstNode,
      left: g,
      operator: i[a],
      right: C
    };
  }
  getAssignment(e) {
    if (!this.assignmentMap.has(e)) {
      const r = Ns(e, Nr);
      this.assignmentMap.set(e, {
        assignment: r,
        crossRef: r && Is(r.terminal) ? r.terminal.isMulti ? "multi" : "single" : void 0
      });
    }
    return this.assignmentMap.get(e);
  }
  assign(e, r, n, i, a) {
    const s = this.current;
    let o;
    switch (a === "single" && typeof n == "string" ? o = this.linker.buildReference(s, r, i, n) : a === "multi" && typeof n == "string" ? o = this.linker.buildMultiReference(s, r, i, n) : o = n, e) {
      case "=": {
        s[r] = o;
        break;
      }
      case "?=": {
        s[r] = !0;
        break;
      }
      case "+=":
        Array.isArray(s[r]) || (s[r] = []), s[r].push(o);
    }
  }
  assignWithoutOverride(e, r) {
    for (const [i, a] of Object.entries(r)) {
      const s = e[i];
      s === void 0 ? e[i] = a : Array.isArray(s) && Array.isArray(a) && (a.push(...s), e[i] = a);
    }
    const n = e.$cstNode;
    return n && (n.astNode = void 0, e.$cstNode = void 0), e;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
}
class VT {
  buildMismatchTokenMessage(e) {
    return sn.buildMismatchTokenMessage(e);
  }
  buildNotAllInputParsedMessage(e) {
    return sn.buildNotAllInputParsedMessage(e);
  }
  buildNoViableAltMessage(e) {
    return sn.buildNoViableAltMessage(e);
  }
  buildEarlyExitMessage(e) {
    return sn.buildEarlyExitMessage(e);
  }
}
class jh extends VT {
  buildMismatchTokenMessage({ expected: e, actual: r }) {
    return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${r.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant: e }) {
    return `Expecting end of file but found \`${e.image}\`.`;
  }
}
class qT extends Gh {
  constructor() {
    super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  action() {
  }
  construct() {
  }
  parse(e) {
    this.resetState();
    const r = this.lexer.tokenize(e, { mode: "partial" });
    return this.tokens = r.tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
      tokens: this.tokens,
      elementStack: [...this.lastElementStack],
      tokenIndex: this.nextTokenIndex
    };
  }
  rule(e, r) {
    const n = this.wrapper.DEFINE_RULE(Fh(e.name), this.startImplementation(r).bind(this));
    return this.allRules.set(e.name, n), e.entry && (this.mainRule = n), n;
  }
  resetState() {
    this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  startImplementation(e) {
    return (r) => {
      const n = this.keepStackSize();
      try {
        e(r);
      } finally {
        this.resetStackSize(n);
      }
    };
  }
  removeUnexpectedElements() {
    this.elementStack.splice(this.stackSize);
  }
  keepStackSize() {
    const e = this.elementStack.length;
    return this.stackSize = e, e;
  }
  resetStackSize(e) {
    this.removeUnexpectedElements(), this.stackSize = e;
  }
  consume(e, r, n) {
    this.wrapper.wrapConsume(e, r), this.isRecording() || (this.lastElementStack = [...this.elementStack, n], this.nextTokenIndex = this.currIdx + 1);
  }
  subrule(e, r, n, i, a) {
    this.before(i), this.wrapper.wrapSubrule(e, r, a), this.after(i);
  }
  before(e) {
    this.isRecording() || this.elementStack.push(e);
  }
  after(e) {
    if (!this.isRecording()) {
      const r = this.elementStack.lastIndexOf(e);
      r >= 0 && this.elementStack.splice(r);
    }
  }
  get currIdx() {
    return this.wrapper.currIdx;
  }
}
const HT = {
  recoveryEnabled: !0,
  nodeLocationTracking: "full",
  skipValidations: !0,
  errorMessageProvider: new jh()
};
class zh extends Qy {
  constructor(e, r) {
    const n = r && "maxLookahead" in r;
    super(e, {
      ...HT,
      lookaheadStrategy: n ? new Lc({ maxLookahead: r.maxLookahead }) : new vT({
        // If validations are skipped, don't log the lookahead warnings
        logging: r.skipValidations ? () => {
        } : void 0
      }),
      ...r
    });
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(e, r, n) {
    return this.RULE(e, r, n);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(e, r) {
    return this.consume(e, r, void 0);
  }
  wrapSubrule(e, r, n) {
    return this.subrule(e, r, {
      ARGS: [n]
    });
  }
  wrapOr(e, r) {
    this.or(e, r);
  }
  wrapOption(e, r) {
    this.option(e, r);
  }
  wrapMany(e, r) {
    this.many(e, r);
  }
  wrapAtLeastOne(e, r) {
    this.atLeastOne(e, r);
  }
  rule(e) {
    return e.call(this, {});
  }
}
class XT extends zh {
  constructor(e, r, n) {
    super(e, r), this.task = n;
  }
  rule(e) {
    this.task.start(), this.task.startSubTask(this.ruleName(e));
    try {
      return super.rule(e);
    } finally {
      this.task.stopSubTask(this.ruleName(e)), this.task.stop();
    }
  }
  ruleName(e) {
    return e.ruleName;
  }
  subrule(e, r, n) {
    this.task.startSubTask(this.ruleName(r));
    try {
      return super.subrule(e, r, n);
    } finally {
      this.task.stopSubTask(this.ruleName(r));
    }
  }
}
function Uh(t, e, r) {
  return YT({
    parser: e,
    tokens: r,
    ruleNames: /* @__PURE__ */ new Map()
  }, t), e;
}
function YT(t, e) {
  const r = jd(e, !1), n = ce(e.rules).filter(Kt).filter((a) => r.has(a));
  for (const a of n) {
    const s = {
      ...t,
      consume: 1,
      optional: 1,
      subrule: 1,
      many: 1,
      or: 1
    };
    t.parser.rule(a, Lr(s, a.definition));
  }
  const i = ce(e.rules).filter(ts).filter((a) => r.has(a));
  for (const a of i)
    t.parser.rule(a, JT(t, a));
}
function JT(t, e) {
  const r = e.call.rule.ref;
  if (!r)
    throw new Error("Could not resolve reference to infix operator rule: " + e.call.rule.$refText);
  if (Vt(r))
    throw new Error("Cannot use terminal rule in infix expression");
  const n = e.operators.precedences.flatMap((g) => g.operators), i = {
    $type: "Group",
    elements: []
  }, a = {
    $container: i,
    $type: "Assignment",
    feature: "parts",
    operator: "+=",
    terminal: e.call
  }, s = {
    $container: i,
    $type: "Group",
    elements: [],
    cardinality: "*"
  };
  i.elements.push(a, s);
  const l = {
    $container: s,
    $type: "Assignment",
    feature: "operators",
    operator: "+=",
    terminal: {
      $type: "Alternatives",
      elements: n
    }
  }, c = {
    ...a,
    $container: s
  };
  s.elements.push(l, c);
  const h = n.map((g) => t.tokens[g.value]).map((g, C) => ({
    ALT: () => t.parser.consume(C, g, l)
  }));
  let p;
  return (g) => {
    p ?? (p = Uc(t, r)), t.parser.subrule(0, p, !1, a, g), t.parser.many(0, {
      DEF: () => {
        t.parser.alternatives(0, h), t.parser.subrule(1, p, !1, c, g);
      }
    });
  };
}
function Lr(t, e, r = !1) {
  let n;
  if (_r(e))
    n = iR(t, e);
  else if (_s(e))
    n = ZT(t, e);
  else if (Nr(e))
    n = Lr(t, e.terminal);
  else if (Is(e))
    n = Bh(t, e);
  else if (Ir(e))
    n = QT(t, e);
  else if (Od(e))
    n = tR(t, e);
  else if (xd(e))
    n = rR(t, e);
  else if (wc(e))
    n = nR(t, e);
  else if (im(e)) {
    const i = t.consume++;
    n = () => t.parser.consume(i, ur, e);
  } else
    throw new Md(e.$cstNode, `Unexpected element type: ${e.$type}`);
  return Wh(t, r ? void 0 : vs(e), n, e.cardinality);
}
function ZT(t, e) {
  const r = Oi(e);
  return () => t.parser.action(r, e);
}
function QT(t, e) {
  const r = e.rule.ref;
  if (Hi(r)) {
    const n = t.subrule++, i = Kt(r) && r.fragment, a = e.arguments.length > 0 ? eR(r, e.arguments) : () => ({});
    let s;
    return (o) => {
      s ?? (s = Uc(t, r)), t.parser.subrule(n, s, i, e, a(o));
    };
  } else if (Vt(r)) {
    const n = t.consume++, i = Ql(t, r.name);
    return () => t.parser.consume(n, i, e);
  } else if (r)
    Xi();
  else
    throw new Md(e.$cstNode, `Undefined rule: ${e.rule.$refText}`);
}
function eR(t, e) {
  if (e.some((n) => n.calledByName)) {
    const n = e.map((i) => {
      var a, s;
      return {
        parameterName: (s = (a = i.parameter) == null ? void 0 : a.ref) == null ? void 0 : s.name,
        predicate: Et(i.value)
      };
    });
    return (i) => {
      const a = {};
      for (const { parameterName: s, predicate: o } of n)
        s && (a[s] = o(i));
      return a;
    };
  } else {
    const n = e.map((i) => Et(i.value));
    return (i) => {
      const a = {};
      for (let s = 0; s < n.length; s++)
        if (s < t.parameters.length) {
          const o = t.parameters[s].name, l = n[s];
          a[o] = l(i);
        }
      return a;
    };
  }
}
function Et(t) {
  if (nm(t)) {
    const e = Et(t.left), r = Et(t.right);
    return (n) => e(n) || r(n);
  } else if (rm(t)) {
    const e = Et(t.left), r = Et(t.right);
    return (n) => e(n) && r(n);
  } else if (om(t)) {
    const e = Et(t.value);
    return (r) => !e(r);
  } else if (lm(t)) {
    const e = t.parameter.ref.name;
    return (r) => r !== void 0 && r[e] === !0;
  } else if (em(t)) {
    const e = !!t.true;
    return () => e;
  }
  Xi();
}
function tR(t, e) {
  if (e.elements.length === 1)
    return Lr(t, e.elements[0]);
  {
    const r = [];
    for (const i of e.elements) {
      const a = {
        // Since we handle the guard condition in the alternative already
        // We can ignore the group guard condition inside
        ALT: Lr(t, i, !0)
      }, s = vs(i);
      s && (a.GATE = Et(s)), r.push(a);
    }
    const n = t.or++;
    return (i) => t.parser.alternatives(n, r.map((a) => {
      const s = {
        ALT: () => a.ALT(i)
      }, o = a.GATE;
      return o && (s.GATE = () => o(i)), s;
    }));
  }
}
function rR(t, e) {
  if (e.elements.length === 1)
    return Lr(t, e.elements[0]);
  const r = [];
  for (const o of e.elements) {
    const l = {
      // Since we handle the guard condition in the alternative already
      // We can ignore the group guard condition inside
      ALT: Lr(t, o, !0)
    }, c = vs(o);
    c && (l.GATE = Et(c)), r.push(l);
  }
  const n = t.or++, i = (o, l) => {
    const c = l.getRuleStack().join("-");
    return `uGroup_${o}_${c}`;
  }, a = (o) => t.parser.alternatives(n, r.map((l, c) => {
    const f = { ALT: () => !0 }, h = t.parser;
    f.ALT = () => {
      if (l.ALT(o), !h.isRecording()) {
        const g = i(n, h);
        h.unorderedGroups.get(g) || h.unorderedGroups.set(g, []);
        const C = h.unorderedGroups.get(g);
        typeof (C == null ? void 0 : C[c]) > "u" && (C[c] = !0);
      }
    };
    const p = l.GATE;
    return p ? f.GATE = () => p(o) : f.GATE = () => {
      const g = h.unorderedGroups.get(i(n, h));
      return !(g != null && g[c]);
    }, f;
  })), s = Wh(t, vs(e), a, "*");
  return (o) => {
    s(o), t.parser.isRecording() || t.parser.unorderedGroups.delete(i(n, t.parser));
  };
}
function nR(t, e) {
  const r = e.elements.map((n) => Lr(t, n));
  return (n) => r.forEach((i) => i(n));
}
function vs(t) {
  if (wc(t))
    return t.guardCondition;
}
function Bh(t, e, r = e.terminal) {
  if (r)
    if (Ir(r) && Kt(r.rule.ref)) {
      const n = r.rule.ref, i = t.subrule++;
      let a;
      return (s) => {
        a ?? (a = Uc(t, n)), t.parser.subrule(i, a, !1, e, s);
      };
    } else if (Ir(r) && Vt(r.rule.ref)) {
      const n = t.consume++, i = Ql(t, r.rule.ref.name);
      return () => t.parser.consume(n, i, e);
    } else if (_r(r)) {
      const n = t.consume++, i = Ql(t, r.value);
      return () => t.parser.consume(n, i, e);
    } else
      throw new Error("Could not build cross reference parser");
  else {
    if (!e.type.ref)
      throw new Error("Could not resolve reference to type: " + e.type.$refText);
    const n = Bd(e.type.ref), i = n == null ? void 0 : n.terminal;
    if (!i)
      throw new Error("Could not find name assignment for type: " + Oi(e.type.ref));
    return Bh(t, e, i);
  }
}
function iR(t, e) {
  const r = t.consume++, n = t.tokens[e.value];
  if (!n)
    throw new Error("Could not find token for keyword: " + e.value);
  return () => t.parser.consume(r, n, e);
}
function Wh(t, e, r, n) {
  const i = e && Et(e);
  if (!n)
    if (i) {
      const a = t.or++;
      return (s) => t.parser.alternatives(a, [
        {
          ALT: () => r(s),
          GATE: () => i(s)
        },
        {
          ALT: _u(),
          GATE: () => !i(s)
        }
      ]);
    } else
      return r;
  if (n === "*") {
    const a = t.many++;
    return (s) => t.parser.many(a, {
      DEF: () => r(s),
      GATE: i ? () => i(s) : void 0
    });
  } else if (n === "+") {
    const a = t.many++;
    if (i) {
      const s = t.or++;
      return (o) => t.parser.alternatives(s, [
        {
          ALT: () => t.parser.atLeastOne(a, {
            DEF: () => r(o)
          }),
          GATE: () => i(o)
        },
        {
          ALT: _u(),
          GATE: () => !i(o)
        }
      ]);
    } else
      return (s) => t.parser.atLeastOne(a, {
        DEF: () => r(s)
      });
  } else if (n === "?") {
    const a = t.optional++;
    return (s) => t.parser.optional(a, {
      DEF: () => r(s),
      GATE: i ? () => i(s) : void 0
    });
  } else
    Xi();
}
function Uc(t, e) {
  const r = aR(t, e), n = t.parser.getRule(r);
  if (!n)
    throw new Error(`Rule "${r}" not found."`);
  return n;
}
function aR(t, e) {
  if (Hi(e))
    return e.name;
  if (t.ruleNames.has(e))
    return t.ruleNames.get(e);
  {
    let r = e, n = r.$container, i = e.$type;
    for (; !Kt(n); )
      (wc(n) || Od(n) || xd(n)) && (i = n.elements.indexOf(r).toString() + ":" + i), r = n, n = n.$container;
    return i = n.name + ":" + i, t.ruleNames.set(e, i), i;
  }
}
function Ql(t, e) {
  const r = t.tokens[e];
  if (!r)
    throw new Error(`Token "${e}" not found."`);
  return r;
}
function sR(t) {
  const e = t.Grammar, r = t.parser.Lexer, n = new qT(t);
  return Uh(e, n, r.definition), n.finalize(), n;
}
function oR(t) {
  const e = lR(t);
  return e.finalize(), e;
}
function lR(t) {
  const e = t.Grammar, r = t.parser.Lexer, n = new KT(t);
  return Uh(e, n, r.definition);
}
class Kh {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e, r) {
    const n = ce(jd(e, !1)), i = this.buildTerminalTokens(n), a = this.buildKeywordTokens(n, i, r);
    return a.push(...i), a;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  flushLexingReport(e) {
    return { diagnostics: this.popDiagnostics() };
  }
  popDiagnostics() {
    const e = [...this.diagnostics];
    return this.diagnostics = [], e;
  }
  buildTerminalTokens(e) {
    return e.filter(Vt).filter((r) => !r.fragment).map((r) => this.buildTerminalToken(r)).toArray();
  }
  buildTerminalToken(e) {
    const r = kc(e), n = this.requiresCustomPattern(r) ? this.regexPatternFunction(r) : r, i = {
      name: e.name,
      PATTERN: n
    };
    return typeof n == "function" && (i.LINE_BREAKS = !0), e.hidden && (i.GROUP = Gd(r) ? qe.SKIPPED : "hidden"), i;
  }
  requiresCustomPattern(e) {
    return !!(e.flags.includes("u") || e.flags.includes("s"));
  }
  regexPatternFunction(e) {
    const r = new RegExp(e, e.flags + "y");
    return (n, i) => (r.lastIndex = i, r.exec(n));
  }
  buildKeywordTokens(e, r, n) {
    return e.filter(Hi).flatMap((i) => qi(i).filter(_r)).distinct((i) => i.value).toArray().sort((i, a) => a.value.length - i.value.length).map((i) => this.buildKeywordToken(i, r, !!(n != null && n.caseInsensitive)));
  }
  buildKeywordToken(e, r, n) {
    const i = this.buildKeywordPattern(e, n), a = {
      name: e.value,
      PATTERN: i,
      LONGER_ALT: this.findLongerAlt(e, r)
    };
    return typeof i == "function" && (a.LINE_BREAKS = !0), a;
  }
  buildKeywordPattern(e, r) {
    return r ? new RegExp(Os(e.value), "i") : e.value;
  }
  findLongerAlt(e, r) {
    return r.reduce((n, i) => {
      const a = i == null ? void 0 : i.PATTERN;
      return a != null && a.source && Pm("^" + a.source + "$", e.value) && n.push(i), n;
    }, []);
  }
}
class Vh {
  convert(e, r) {
    let n = r.grammarSource;
    if (Is(n) && (n = Dm(n)), Ir(n)) {
      const i = n.rule.ref;
      if (!i)
        throw new Error("This cst node was not parsed by a rule.");
      return this.runConverter(i, e, r);
    }
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  runConverter(e, r, n) {
    var i;
    switch (e.name.toUpperCase()) {
      case "INT":
        return xt.convertInt(r);
      case "STRING":
        return xt.convertString(r);
      case "ID":
        return xt.convertID(r);
    }
    switch ((i = Bm(e)) == null ? void 0 : i.toLowerCase()) {
      case "number":
        return xt.convertNumber(r);
      case "boolean":
        return xt.convertBoolean(r);
      case "bigint":
        return xt.convertBigint(r);
      case "date":
        return xt.convertDate(r);
      default:
        return r;
    }
  }
}
var xt;
(function(t) {
  function e(c) {
    let f = "";
    for (let h = 1; h < c.length - 1; h++) {
      const p = c.charAt(h);
      if (p === "\\") {
        const g = c.charAt(++h);
        f += r(g);
      } else
        f += p;
    }
    return f;
  }
  t.convertString = e;
  function r(c) {
    switch (c) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return `
`;
      case "r":
        return "\r";
      case "t":
        return "	";
      case "v":
        return "\v";
      case "0":
        return "\0";
      default:
        return c;
    }
  }
  function n(c) {
    return c.charAt(0) === "^" ? c.substring(1) : c;
  }
  t.convertID = n;
  function i(c) {
    return parseInt(c);
  }
  t.convertInt = i;
  function a(c) {
    return BigInt(c);
  }
  t.convertBigint = a;
  function s(c) {
    return new Date(c);
  }
  t.convertDate = s;
  function o(c) {
    return Number(c);
  }
  t.convertNumber = o;
  function l(c) {
    return c.toLowerCase() === "true";
  }
  t.convertBoolean = l;
})(xt || (xt = {}));
var dr = {}, qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
let ec;
function tc() {
  if (ec === void 0)
    throw new Error("No runtime abstraction layer installed");
  return ec;
}
(function(t) {
  function e(r) {
    if (r === void 0)
      throw new Error("No runtime abstraction layer provided");
    ec = r;
  }
  t.install = e;
})(tc || (tc = {}));
qt.default = tc;
var we = {};
Object.defineProperty(we, "__esModule", { value: !0 });
we.stringArray = we.array = we.func = we.error = we.number = we.string = we.boolean = void 0;
function cR(t) {
  return t === !0 || t === !1;
}
we.boolean = cR;
function qh(t) {
  return typeof t == "string" || t instanceof String;
}
we.string = qh;
function uR(t) {
  return typeof t == "number" || t instanceof Number;
}
we.number = uR;
function fR(t) {
  return t instanceof Error;
}
we.error = fR;
function dR(t) {
  return typeof t == "function";
}
we.func = dR;
function Hh(t) {
  return Array.isArray(t);
}
we.array = Hh;
function hR(t) {
  return Hh(t) && t.every((e) => qh(e));
}
we.stringArray = hR;
var Ct = {};
Object.defineProperty(Ct, "__esModule", { value: !0 });
var Xh = Ct.Emitter = Ct.Event = void 0;
const pR = qt;
var Du;
(function(t) {
  const e = { dispose() {
  } };
  t.None = function() {
    return e;
  };
})(Du || (Ct.Event = Du = {}));
class mR {
  add(e, r = null, n) {
    this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e), this._contexts.push(r), Array.isArray(n) && n.push({ dispose: () => this.remove(e, r) });
  }
  remove(e, r = null) {
    if (!this._callbacks)
      return;
    let n = !1;
    for (let i = 0, a = this._callbacks.length; i < a; i++)
      if (this._callbacks[i] === e)
        if (this._contexts[i] === r) {
          this._callbacks.splice(i, 1), this._contexts.splice(i, 1);
          return;
        } else
          n = !0;
    if (n)
      throw new Error("When adding a listener with a context, you should remove it with the same context");
  }
  invoke(...e) {
    if (!this._callbacks)
      return [];
    const r = [], n = this._callbacks.slice(0), i = this._contexts.slice(0);
    for (let a = 0, s = n.length; a < s; a++)
      try {
        r.push(n[a].apply(i[a], e));
      } catch (o) {
        (0, pR.default)().console.error(o);
      }
    return r;
  }
  isEmpty() {
    return !this._callbacks || this._callbacks.length === 0;
  }
  dispose() {
    this._callbacks = void 0, this._contexts = void 0;
  }
}
class zs {
  constructor(e) {
    this._options = e;
  }
  /**
   * For the public to allow to subscribe
   * to events from this Emitter
   */
  get event() {
    return this._event || (this._event = (e, r, n) => {
      this._callbacks || (this._callbacks = new mR()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(e, r);
      const i = {
        dispose: () => {
          this._callbacks && (this._callbacks.remove(e, r), i.dispose = zs._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
        }
      };
      return Array.isArray(n) && n.push(i), i;
    }), this._event;
  }
  /**
   * To be kept private to fire an event to
   * subscribers
   */
  fire(e) {
    this._callbacks && this._callbacks.invoke.call(this._callbacks, e);
  }
  dispose() {
    this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
  }
}
Xh = Ct.Emitter = zs;
zs._noop = function() {
};
var fe;
Object.defineProperty(dr, "__esModule", { value: !0 });
var Bc = dr.CancellationTokenSource = fe = dr.CancellationToken = void 0;
const gR = qt, yR = we, rc = Ct;
var Es;
(function(t) {
  t.None = Object.freeze({
    isCancellationRequested: !1,
    onCancellationRequested: rc.Event.None
  }), t.Cancelled = Object.freeze({
    isCancellationRequested: !0,
    onCancellationRequested: rc.Event.None
  });
  function e(r) {
    const n = r;
    return n && (n === t.None || n === t.Cancelled || yR.boolean(n.isCancellationRequested) && !!n.onCancellationRequested);
  }
  t.is = e;
})(Es || (fe = dr.CancellationToken = Es = {}));
const TR = Object.freeze(function(t, e) {
  const r = (0, gR.default)().timer.setTimeout(t.bind(e), 0);
  return { dispose() {
    r.dispose();
  } };
});
class Mu {
  constructor() {
    this._isCancelled = !1;
  }
  cancel() {
    this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
  }
  get isCancellationRequested() {
    return this._isCancelled;
  }
  get onCancellationRequested() {
    return this._isCancelled ? TR : (this._emitter || (this._emitter = new rc.Emitter()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = void 0);
  }
}
class RR {
  get token() {
    return this._token || (this._token = new Mu()), this._token;
  }
  cancel() {
    this._token ? this._token.cancel() : this._token = Es.Cancelled;
  }
  dispose() {
    this._token ? this._token instanceof Mu && this._token.dispose() : this._token = Es.None;
  }
}
Bc = dr.CancellationTokenSource = RR;
function vR() {
  return new Promise((t) => {
    typeof setImmediate > "u" ? setTimeout(t, 0) : setImmediate(t);
  });
}
let Ya = 0, ER = 10;
function $R() {
  return Ya = performance.now(), new Bc();
}
const on = Symbol("OperationCancelled");
function Us(t) {
  return t === on;
}
async function Be(t) {
  if (t === fe.None)
    return;
  const e = performance.now();
  if (e - Ya >= ER && (Ya = e, await vR(), Ya = performance.now()), t.isCancellationRequested)
    throw on;
}
class Wc {
  constructor() {
    this.promise = new Promise((e, r) => {
      this.resolve = (n) => (e(n), this), this.reject = (n) => (r(n), this);
    });
  }
}
class zi {
  constructor(e, r, n, i) {
    this._uri = e, this._languageId = r, this._version = n, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      const r = this.offsetAt(e.start), n = this.offsetAt(e.end);
      return this._content.substring(r, n);
    }
    return this._content;
  }
  update(e, r) {
    for (const n of e)
      if (zi.isIncremental(n)) {
        const i = Jh(n.range), a = this.offsetAt(i.start), s = this.offsetAt(i.end);
        this._content = this._content.substring(0, a) + n.text + this._content.substring(s, this._content.length);
        const o = Math.max(i.start.line, 0), l = Math.max(i.end.line, 0);
        let c = this._lineOffsets;
        const f = Fu(n.text, !1, a);
        if (l - o === f.length)
          for (let p = 0, g = f.length; p < g; p++)
            c[p + o + 1] = f[p];
        else
          f.length < 1e4 ? c.splice(o + 1, l - o, ...f) : this._lineOffsets = c = c.slice(0, o + 1).concat(f, c.slice(l + 1));
        const h = n.text.length - (s - a);
        if (h !== 0)
          for (let p = o + 1 + f.length, g = c.length; p < g; p++)
            c[p] = c[p] + h;
      } else if (zi.isFull(n))
        this._content = n.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = r;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = Fu(this._content, !0)), this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    const r = this.getLineOffsets();
    let n = 0, i = r.length;
    if (i === 0)
      return { line: 0, character: e };
    for (; n < i; ) {
      const s = Math.floor((n + i) / 2);
      r[s] > e ? i = s : n = s + 1;
    }
    const a = n - 1;
    return e = this.ensureBeforeEOL(e, r[a]), { line: a, character: e - r[a] };
  }
  offsetAt(e) {
    const r = this.getLineOffsets();
    if (e.line >= r.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    const n = r[e.line];
    if (e.character <= 0)
      return n;
    const i = e.line + 1 < r.length ? r[e.line + 1] : this._content.length, a = Math.min(n + e.character, i);
    return this.ensureBeforeEOL(a, n);
  }
  ensureBeforeEOL(e, r) {
    for (; e > r && Yh(this._content.charCodeAt(e - 1)); )
      e--;
    return e;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(e) {
    const r = e;
    return r != null && typeof r.text == "string" && r.range !== void 0 && (r.rangeLength === void 0 || typeof r.rangeLength == "number");
  }
  static isFull(e) {
    const r = e;
    return r != null && typeof r.text == "string" && r.range === void 0 && r.rangeLength === void 0;
  }
}
var nc;
(function(t) {
  function e(i, a, s, o) {
    return new zi(i, a, s, o);
  }
  t.create = e;
  function r(i, a, s) {
    if (i instanceof zi)
      return i.update(a, s), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  t.update = r;
  function n(i, a) {
    const s = i.getText(), o = ic(a.map(AR), (f, h) => {
      const p = f.range.start.line - h.range.start.line;
      return p === 0 ? f.range.start.character - h.range.start.character : p;
    });
    let l = 0;
    const c = [];
    for (const f of o) {
      const h = i.offsetAt(f.range.start);
      if (h < l)
        throw new Error("Overlapping edit");
      h > l && c.push(s.substring(l, h)), f.newText.length && c.push(f.newText), l = i.offsetAt(f.range.end);
    }
    return c.push(s.substr(l)), c.join("");
  }
  t.applyEdits = n;
})(nc || (nc = {}));
function ic(t, e) {
  if (t.length <= 1)
    return t;
  const r = t.length / 2 | 0, n = t.slice(0, r), i = t.slice(r);
  ic(n, e), ic(i, e);
  let a = 0, s = 0, o = 0;
  for (; a < n.length && s < i.length; )
    e(n[a], i[s]) <= 0 ? t[o++] = n[a++] : t[o++] = i[s++];
  for (; a < n.length; )
    t[o++] = n[a++];
  for (; s < i.length; )
    t[o++] = i[s++];
  return t;
}
function Fu(t, e, r = 0) {
  const n = e ? [r] : [];
  for (let i = 0; i < t.length; i++) {
    const a = t.charCodeAt(i);
    Yh(a) && (a === 13 && i + 1 < t.length && t.charCodeAt(i + 1) === 10 && i++, n.push(r + i + 1));
  }
  return n;
}
function Yh(t) {
  return t === 13 || t === 10;
}
function Jh(t) {
  const e = t.start, r = t.end;
  return e.line > r.line || e.line === r.line && e.character > r.character ? { start: r, end: e } : t;
}
function AR(t) {
  const e = Jh(t.range);
  return e !== t.range ? { newText: t.newText, range: e } : t;
}
var Zh;
(() => {
  var t = { 975: (w) => {
    function E(y) {
      if (typeof y != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(y));
    }
    function m(y, T) {
      for (var v, I = "", x = 0, P = -1, j = 0, F = 0; F <= y.length; ++F) {
        if (F < y.length) v = y.charCodeAt(F);
        else {
          if (v === 47) break;
          v = 47;
        }
        if (v === 47) {
          if (!(P === F - 1 || j === 1)) if (P !== F - 1 && j === 2) {
            if (I.length < 2 || x !== 2 || I.charCodeAt(I.length - 1) !== 46 || I.charCodeAt(I.length - 2) !== 46) {
              if (I.length > 2) {
                var re = I.lastIndexOf("/");
                if (re !== I.length - 1) {
                  re === -1 ? (I = "", x = 0) : x = (I = I.slice(0, re)).length - 1 - I.lastIndexOf("/"), P = F, j = 0;
                  continue;
                }
              } else if (I.length === 2 || I.length === 1) {
                I = "", x = 0, P = F, j = 0;
                continue;
              }
            }
            T && (I.length > 0 ? I += "/.." : I = "..", x = 2);
          } else I.length > 0 ? I += "/" + y.slice(P + 1, F) : I = y.slice(P + 1, F), x = F - P - 1;
          P = F, j = 0;
        } else v === 46 && j !== -1 ? ++j : j = -1;
      }
      return I;
    }
    var A = { resolve: function() {
      for (var y, T = "", v = !1, I = arguments.length - 1; I >= -1 && !v; I--) {
        var x;
        I >= 0 ? x = arguments[I] : (y === void 0 && (y = process.cwd()), x = y), E(x), x.length !== 0 && (T = x + "/" + T, v = x.charCodeAt(0) === 47);
      }
      return T = m(T, !v), v ? T.length > 0 ? "/" + T : "/" : T.length > 0 ? T : ".";
    }, normalize: function(y) {
      if (E(y), y.length === 0) return ".";
      var T = y.charCodeAt(0) === 47, v = y.charCodeAt(y.length - 1) === 47;
      return (y = m(y, !T)).length !== 0 || T || (y = "."), y.length > 0 && v && (y += "/"), T ? "/" + y : y;
    }, isAbsolute: function(y) {
      return E(y), y.length > 0 && y.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return ".";
      for (var y, T = 0; T < arguments.length; ++T) {
        var v = arguments[T];
        E(v), v.length > 0 && (y === void 0 ? y = v : y += "/" + v);
      }
      return y === void 0 ? "." : A.normalize(y);
    }, relative: function(y, T) {
      if (E(y), E(T), y === T || (y = A.resolve(y)) === (T = A.resolve(T))) return "";
      for (var v = 1; v < y.length && y.charCodeAt(v) === 47; ++v) ;
      for (var I = y.length, x = I - v, P = 1; P < T.length && T.charCodeAt(P) === 47; ++P) ;
      for (var j = T.length - P, F = x < j ? x : j, re = -1, z = 0; z <= F; ++z) {
        if (z === F) {
          if (j > F) {
            if (T.charCodeAt(P + z) === 47) return T.slice(P + z + 1);
            if (z === 0) return T.slice(P + z);
          } else x > F && (y.charCodeAt(v + z) === 47 ? re = z : z === 0 && (re = 0));
          break;
        }
        var Z = y.charCodeAt(v + z);
        if (Z !== T.charCodeAt(P + z)) break;
        Z === 47 && (re = z);
      }
      var Pe = "";
      for (z = v + re + 1; z <= I; ++z) z !== I && y.charCodeAt(z) !== 47 || (Pe.length === 0 ? Pe += ".." : Pe += "/..");
      return Pe.length > 0 ? Pe + T.slice(P + re) : (P += re, T.charCodeAt(P) === 47 && ++P, T.slice(P));
    }, _makeLong: function(y) {
      return y;
    }, dirname: function(y) {
      if (E(y), y.length === 0) return ".";
      for (var T = y.charCodeAt(0), v = T === 47, I = -1, x = !0, P = y.length - 1; P >= 1; --P) if ((T = y.charCodeAt(P)) === 47) {
        if (!x) {
          I = P;
          break;
        }
      } else x = !1;
      return I === -1 ? v ? "/" : "." : v && I === 1 ? "//" : y.slice(0, I);
    }, basename: function(y, T) {
      if (T !== void 0 && typeof T != "string") throw new TypeError('"ext" argument must be a string');
      E(y);
      var v, I = 0, x = -1, P = !0;
      if (T !== void 0 && T.length > 0 && T.length <= y.length) {
        if (T.length === y.length && T === y) return "";
        var j = T.length - 1, F = -1;
        for (v = y.length - 1; v >= 0; --v) {
          var re = y.charCodeAt(v);
          if (re === 47) {
            if (!P) {
              I = v + 1;
              break;
            }
          } else F === -1 && (P = !1, F = v + 1), j >= 0 && (re === T.charCodeAt(j) ? --j == -1 && (x = v) : (j = -1, x = F));
        }
        return I === x ? x = F : x === -1 && (x = y.length), y.slice(I, x);
      }
      for (v = y.length - 1; v >= 0; --v) if (y.charCodeAt(v) === 47) {
        if (!P) {
          I = v + 1;
          break;
        }
      } else x === -1 && (P = !1, x = v + 1);
      return x === -1 ? "" : y.slice(I, x);
    }, extname: function(y) {
      E(y);
      for (var T = -1, v = 0, I = -1, x = !0, P = 0, j = y.length - 1; j >= 0; --j) {
        var F = y.charCodeAt(j);
        if (F !== 47) I === -1 && (x = !1, I = j + 1), F === 46 ? T === -1 ? T = j : P !== 1 && (P = 1) : T !== -1 && (P = -1);
        else if (!x) {
          v = j + 1;
          break;
        }
      }
      return T === -1 || I === -1 || P === 0 || P === 1 && T === I - 1 && T === v + 1 ? "" : y.slice(T, I);
    }, format: function(y) {
      if (y === null || typeof y != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof y);
      return function(T, v) {
        var I = v.dir || v.root, x = v.base || (v.name || "") + (v.ext || "");
        return I ? I === v.root ? I + x : I + "/" + x : x;
      }(0, y);
    }, parse: function(y) {
      E(y);
      var T = { root: "", dir: "", base: "", ext: "", name: "" };
      if (y.length === 0) return T;
      var v, I = y.charCodeAt(0), x = I === 47;
      x ? (T.root = "/", v = 1) : v = 0;
      for (var P = -1, j = 0, F = -1, re = !0, z = y.length - 1, Z = 0; z >= v; --z) if ((I = y.charCodeAt(z)) !== 47) F === -1 && (re = !1, F = z + 1), I === 46 ? P === -1 ? P = z : Z !== 1 && (Z = 1) : P !== -1 && (Z = -1);
      else if (!re) {
        j = z + 1;
        break;
      }
      return P === -1 || F === -1 || Z === 0 || Z === 1 && P === F - 1 && P === j + 1 ? F !== -1 && (T.base = T.name = j === 0 && x ? y.slice(1, F) : y.slice(j, F)) : (j === 0 && x ? (T.name = y.slice(1, P), T.base = y.slice(1, F)) : (T.name = y.slice(j, P), T.base = y.slice(j, F)), T.ext = y.slice(P, F)), j > 0 ? T.dir = y.slice(0, j - 1) : x && (T.dir = "/"), T;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    A.posix = A, w.exports = A;
  } }, e = {};
  function r(w) {
    var E = e[w];
    if (E !== void 0) return E.exports;
    var m = e[w] = { exports: {} };
    return t[w](m, m.exports, r), m.exports;
  }
  r.d = (w, E) => {
    for (var m in E) r.o(E, m) && !r.o(w, m) && Object.defineProperty(w, m, { enumerable: !0, get: E[m] });
  }, r.o = (w, E) => Object.prototype.hasOwnProperty.call(w, E), r.r = (w) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(w, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(w, "__esModule", { value: !0 });
  };
  var n = {};
  let i;
  r.r(n), r.d(n, { URI: () => p, Utils: () => Re }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
  const a = /^\w[\w\d+.-]*$/, s = /^\//, o = /^\/\//;
  function l(w, E) {
    if (!w.scheme && E) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${w.authority}", path: "${w.path}", query: "${w.query}", fragment: "${w.fragment}"}`);
    if (w.scheme && !a.test(w.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
    if (w.path) {
      if (w.authority) {
        if (!s.test(w.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
      } else if (o.test(w.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
    }
  }
  const c = "", f = "/", h = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  class p {
    constructor(E, m, A, y, T, v = !1) {
      Qt(this, "scheme");
      Qt(this, "authority");
      Qt(this, "path");
      Qt(this, "query");
      Qt(this, "fragment");
      typeof E == "object" ? (this.scheme = E.scheme || c, this.authority = E.authority || c, this.path = E.path || c, this.query = E.query || c, this.fragment = E.fragment || c) : (this.scheme = /* @__PURE__ */ function(I, x) {
        return I || x ? I : "file";
      }(E, v), this.authority = m || c, this.path = function(I, x) {
        switch (I) {
          case "https":
          case "http":
          case "file":
            x ? x[0] !== f && (x = f + x) : x = f;
        }
        return x;
      }(this.scheme, A || c), this.query = y || c, this.fragment = T || c, l(this, v));
    }
    static isUri(E) {
      return E instanceof p || !!E && typeof E.authority == "string" && typeof E.fragment == "string" && typeof E.path == "string" && typeof E.query == "string" && typeof E.scheme == "string" && typeof E.fsPath == "string" && typeof E.with == "function" && typeof E.toString == "function";
    }
    get fsPath() {
      return O(this);
    }
    with(E) {
      if (!E) return this;
      let { scheme: m, authority: A, path: y, query: T, fragment: v } = E;
      return m === void 0 ? m = this.scheme : m === null && (m = c), A === void 0 ? A = this.authority : A === null && (A = c), y === void 0 ? y = this.path : y === null && (y = c), T === void 0 ? T = this.query : T === null && (T = c), v === void 0 ? v = this.fragment : v === null && (v = c), m === this.scheme && A === this.authority && y === this.path && T === this.query && v === this.fragment ? this : new C(m, A, y, T, v);
    }
    static parse(E, m = !1) {
      const A = h.exec(E);
      return A ? new C(A[2] || c, ee(A[4] || c), ee(A[5] || c), ee(A[7] || c), ee(A[9] || c), m) : new C(c, c, c, c, c);
    }
    static file(E) {
      let m = c;
      if (i && (E = E.replace(/\\/g, f)), E[0] === f && E[1] === f) {
        const A = E.indexOf(f, 2);
        A === -1 ? (m = E.substring(2), E = f) : (m = E.substring(2, A), E = E.substring(A) || f);
      }
      return new C("file", m, E, c, c);
    }
    static from(E) {
      const m = new C(E.scheme, E.authority, E.path, E.query, E.fragment);
      return l(m, !0), m;
    }
    toString(E = !1) {
      return N(this, E);
    }
    toJSON() {
      return this;
    }
    static revive(E) {
      if (E) {
        if (E instanceof p) return E;
        {
          const m = new C(E);
          return m._formatted = E.external, m._fsPath = E._sep === g ? E.fsPath : null, m;
        }
      }
      return E;
    }
  }
  const g = i ? 1 : void 0;
  class C extends p {
    constructor() {
      super(...arguments);
      Qt(this, "_formatted", null);
      Qt(this, "_fsPath", null);
    }
    get fsPath() {
      return this._fsPath || (this._fsPath = O(this)), this._fsPath;
    }
    toString(m = !1) {
      return m ? N(this, !0) : (this._formatted || (this._formatted = N(this, !1)), this._formatted);
    }
    toJSON() {
      const m = { $mid: 1 };
      return this._fsPath && (m.fsPath = this._fsPath, m._sep = g), this._formatted && (m.external = this._formatted), this.path && (m.path = this.path), this.scheme && (m.scheme = this.scheme), this.authority && (m.authority = this.authority), this.query && (m.query = this.query), this.fragment && (m.fragment = this.fragment), m;
    }
  }
  const b = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
  function D(w, E, m) {
    let A, y = -1;
    for (let T = 0; T < w.length; T++) {
      const v = w.charCodeAt(T);
      if (v >= 97 && v <= 122 || v >= 65 && v <= 90 || v >= 48 && v <= 57 || v === 45 || v === 46 || v === 95 || v === 126 || E && v === 47 || m && v === 91 || m && v === 93 || m && v === 58) y !== -1 && (A += encodeURIComponent(w.substring(y, T)), y = -1), A !== void 0 && (A += w.charAt(T));
      else {
        A === void 0 && (A = w.substr(0, T));
        const I = b[v];
        I !== void 0 ? (y !== -1 && (A += encodeURIComponent(w.substring(y, T)), y = -1), A += I) : y === -1 && (y = T);
      }
    }
    return y !== -1 && (A += encodeURIComponent(w.substring(y))), A !== void 0 ? A : w;
  }
  function k(w) {
    let E;
    for (let m = 0; m < w.length; m++) {
      const A = w.charCodeAt(m);
      A === 35 || A === 63 ? (E === void 0 && (E = w.substr(0, m)), E += b[A]) : E !== void 0 && (E += w[m]);
    }
    return E !== void 0 ? E : w;
  }
  function O(w, E) {
    let m;
    return m = w.authority && w.path.length > 1 && w.scheme === "file" ? `//${w.authority}${w.path}` : w.path.charCodeAt(0) === 47 && (w.path.charCodeAt(1) >= 65 && w.path.charCodeAt(1) <= 90 || w.path.charCodeAt(1) >= 97 && w.path.charCodeAt(1) <= 122) && w.path.charCodeAt(2) === 58 ? w.path[1].toLowerCase() + w.path.substr(2) : w.path, i && (m = m.replace(/\//g, "\\")), m;
  }
  function N(w, E) {
    const m = E ? k : D;
    let A = "", { scheme: y, authority: T, path: v, query: I, fragment: x } = w;
    if (y && (A += y, A += ":"), (T || y === "file") && (A += f, A += f), T) {
      let P = T.indexOf("@");
      if (P !== -1) {
        const j = T.substr(0, P);
        T = T.substr(P + 1), P = j.lastIndexOf(":"), P === -1 ? A += m(j, !1, !1) : (A += m(j.substr(0, P), !1, !1), A += ":", A += m(j.substr(P + 1), !1, !0)), A += "@";
      }
      T = T.toLowerCase(), P = T.lastIndexOf(":"), P === -1 ? A += m(T, !1, !0) : (A += m(T.substr(0, P), !1, !0), A += T.substr(P));
    }
    if (v) {
      if (v.length >= 3 && v.charCodeAt(0) === 47 && v.charCodeAt(2) === 58) {
        const P = v.charCodeAt(1);
        P >= 65 && P <= 90 && (v = `/${String.fromCharCode(P + 32)}:${v.substr(3)}`);
      } else if (v.length >= 2 && v.charCodeAt(1) === 58) {
        const P = v.charCodeAt(0);
        P >= 65 && P <= 90 && (v = `${String.fromCharCode(P + 32)}:${v.substr(2)}`);
      }
      A += m(v, !0, !1);
    }
    return I && (A += "?", A += m(I, !1, !1)), x && (A += "#", A += E ? x : D(x, !1, !1)), A;
  }
  function L(w) {
    try {
      return decodeURIComponent(w);
    } catch {
      return w.length > 3 ? w.substr(0, 3) + L(w.substr(3)) : w;
    }
  }
  const H = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
  function ee(w) {
    return w.match(H) ? w.replace(H, (E) => L(E)) : w;
  }
  var te = r(975);
  const Ae = te.posix || te, ke = "/";
  var Re;
  (function(w) {
    w.joinPath = function(E, ...m) {
      return E.with({ path: Ae.join(E.path, ...m) });
    }, w.resolvePath = function(E, ...m) {
      let A = E.path, y = !1;
      A[0] !== ke && (A = ke + A, y = !0);
      let T = Ae.resolve(A, ...m);
      return y && T[0] === ke && !E.authority && (T = T.substring(1)), E.with({ path: T });
    }, w.dirname = function(E) {
      if (E.path.length === 0 || E.path === ke) return E;
      let m = Ae.dirname(E.path);
      return m.length === 1 && m.charCodeAt(0) === 46 && (m = ""), E.with({ path: m });
    }, w.basename = function(E) {
      return Ae.basename(E.path);
    }, w.extname = function(E) {
      return Ae.extname(E.path);
    };
  })(Re || (Re = {})), Zh = n;
})();
const { URI: gt, Utils: pi } = Zh;
var et;
(function(t) {
  t.basename = pi.basename, t.dirname = pi.dirname, t.extname = pi.extname, t.joinPath = pi.joinPath, t.resolvePath = pi.resolvePath;
  const e = typeof process == "object" && (process == null ? void 0 : process.platform) === "win32";
  function r(s, o) {
    return (s == null ? void 0 : s.toString()) === (o == null ? void 0 : o.toString());
  }
  t.equals = r;
  function n(s, o) {
    const l = typeof s == "string" ? gt.parse(s).path : s.path, c = typeof o == "string" ? gt.parse(o).path : o.path, f = l.split("/").filter((b) => b.length > 0), h = c.split("/").filter((b) => b.length > 0);
    if (e) {
      const b = /^[A-Z]:$/;
      if (f[0] && b.test(f[0]) && (f[0] = f[0].toLowerCase()), h[0] && b.test(h[0]) && (h[0] = h[0].toLowerCase()), f[0] !== h[0])
        return c.substring(1);
    }
    let p = 0;
    for (; p < f.length && f[p] === h[p]; p++)
      ;
    const g = "../".repeat(f.length - p), C = h.slice(p).join("/");
    return g + C;
  }
  t.relative = n;
  function i(s) {
    return gt.parse(s.toString()).toString();
  }
  t.normalize = i;
  function a(s, o) {
    let l = typeof s == "string" ? s : s.path, c = typeof o == "string" ? o : o.path;
    return c.charAt(c.length - 1) === "/" && (c = c.slice(0, -1)), l.charAt(l.length - 1) === "/" && (l = l.slice(0, -1)), c === l ? !0 : c.length < l.length || c.charAt(l.length) !== "/" ? !1 : c.startsWith(l);
  }
  t.contains = a;
})(et || (et = {}));
class CR {
  constructor() {
    this.root = { name: "", children: /* @__PURE__ */ new Map() };
  }
  normalizeUri(e) {
    return et.normalize(e);
  }
  clear() {
    this.root.children.clear();
  }
  insert(e, r) {
    const n = this.getNode(this.normalizeUri(e), !0);
    n.element = r;
  }
  delete(e) {
    const r = this.getNode(this.normalizeUri(e), !1);
    r != null && r.parent && r.parent.children.delete(r.name);
  }
  has(e) {
    var r;
    return ((r = this.getNode(this.normalizeUri(e), !1)) == null ? void 0 : r.element) !== void 0;
  }
  hasNode(e) {
    return this.getNode(this.normalizeUri(e), !1) !== void 0;
  }
  find(e) {
    var r;
    return (r = this.getNode(this.normalizeUri(e), !1)) == null ? void 0 : r.element;
  }
  findNode(e) {
    const r = this.normalizeUri(e), n = this.getNode(r, !1);
    if (n)
      return {
        name: n.name,
        uri: et.joinPath(gt.parse(r), n.name).toString(),
        element: n.element
      };
  }
  findChildren(e) {
    const r = this.normalizeUri(e), n = this.getNode(r, !1);
    return n ? Array.from(n.children.values()).map((i) => ({
      name: i.name,
      uri: et.joinPath(gt.parse(r), i.name).toString(),
      element: i.element
    })) : [];
  }
  all() {
    return this.collectValues(this.root);
  }
  findAll(e) {
    const r = this.getNode(et.normalize(e), !1);
    return r ? this.collectValues(r) : [];
  }
  getNode(e, r) {
    const n = e.split("/");
    e.charAt(e.length - 1) === "/" && n.pop();
    let i = this.root;
    for (const a of n) {
      let s = i.children.get(a);
      if (!s)
        if (r)
          s = {
            name: a,
            children: /* @__PURE__ */ new Map(),
            parent: i
          }, i.children.set(a, s);
        else
          return;
      i = s;
    }
    return i;
  }
  collectValues(e) {
    const r = [];
    e.element && r.push(e.element);
    for (const n of e.children.values())
      r.push(...this.collectValues(n));
    return r;
  }
}
var W;
(function(t) {
  t[t.Changed = 0] = "Changed", t[t.Parsed = 1] = "Parsed", t[t.IndexedContent = 2] = "IndexedContent", t[t.ComputedScopes = 3] = "ComputedScopes", t[t.Linked = 4] = "Linked", t[t.IndexedReferences = 5] = "IndexedReferences", t[t.Validated = 6] = "Validated";
})(W || (W = {}));
class SR {
  constructor(e) {
    this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
  }
  async fromUri(e, r = fe.None) {
    const n = await this.fileSystemProvider.readFile(e);
    return this.createAsync(e, n, r);
  }
  fromTextDocument(e, r, n) {
    return r = r ?? gt.parse(e.uri), fe.is(n) ? this.createAsync(r, e, n) : this.create(r, e, n);
  }
  fromString(e, r, n) {
    return fe.is(n) ? this.createAsync(r, e, n) : this.create(r, e, n);
  }
  fromModel(e, r) {
    return this.create(r, { $model: e });
  }
  create(e, r, n) {
    if (typeof r == "string") {
      const i = this.parse(e, r, n);
      return this.createLangiumDocument(i, e, void 0, r);
    } else if ("$model" in r) {
      const i = { value: r.$model, parserErrors: [], lexerErrors: [] };
      return this.createLangiumDocument(i, e);
    } else {
      const i = this.parse(e, r.getText(), n);
      return this.createLangiumDocument(i, e, r);
    }
  }
  async createAsync(e, r, n) {
    if (typeof r == "string") {
      const i = await this.parseAsync(e, r, n);
      return this.createLangiumDocument(i, e, void 0, r);
    } else {
      const i = await this.parseAsync(e, r.getText(), n);
      return this.createLangiumDocument(i, e, r);
    }
  }
  /**
   * Create a LangiumDocument from a given parse result.
   *
   * A TextDocument is created on demand if it is not provided as argument here. Usually this
   * should not be necessary because the main purpose of the TextDocument is to convert between
   * text ranges and offsets, which is done solely in LSP request handling.
   *
   * With the introduction of {@link update} below this method is supposed to be mainly called
   * during workspace initialization and on addition/recognition of new files, while changes in
   * existing documents are processed via {@link update}.
   */
  createLangiumDocument(e, r, n, i) {
    let a;
    if (n)
      a = {
        parseResult: e,
        uri: r,
        state: W.Parsed,
        references: [],
        textDocument: n
      };
    else {
      const s = this.createTextDocumentGetter(r, i);
      a = {
        parseResult: e,
        uri: r,
        state: W.Parsed,
        references: [],
        get textDocument() {
          return s();
        }
      };
    }
    return e.value.$document = a, a;
  }
  async update(e, r) {
    var s, o;
    const n = (s = e.parseResult.value.$cstNode) == null ? void 0 : s.root.fullText, i = (o = this.textDocuments) == null ? void 0 : o.get(e.uri.toString()), a = i ? i.getText() : await this.fileSystemProvider.readFile(e.uri);
    if (i)
      Object.defineProperty(e, "textDocument", {
        value: i
      });
    else {
      const l = this.createTextDocumentGetter(e.uri, a);
      Object.defineProperty(e, "textDocument", {
        get: l
      });
    }
    return n !== a && (e.parseResult = await this.parseAsync(e.uri, a, r), e.parseResult.value.$document = e), e.state = W.Parsed, e;
  }
  parse(e, r, n) {
    return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r, n);
  }
  parseAsync(e, r, n) {
    return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(r, n);
  }
  createTextDocumentGetter(e, r) {
    const n = this.serviceRegistry;
    let i;
    return () => i ?? (i = nc.create(e.toString(), n.getServices(e).LanguageMetaData.languageId, 0, r ?? ""));
  }
}
class wR {
  constructor(e) {
    this.documentTrie = new CR(), this.services = e, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.documentBuilder = () => e.workspace.DocumentBuilder;
  }
  get all() {
    return ce(this.documentTrie.all());
  }
  addDocument(e) {
    const r = e.uri.toString();
    if (this.documentTrie.has(r))
      throw new Error(`A document with the URI '${r}' is already present.`);
    this.documentTrie.insert(r, e);
  }
  getDocument(e) {
    const r = e.toString();
    return this.documentTrie.find(r);
  }
  getDocuments(e) {
    const r = e.toString();
    return this.documentTrie.findAll(r);
  }
  async getOrCreateDocument(e, r) {
    let n = this.getDocument(e);
    return n || (n = await this.langiumDocumentFactory.fromUri(e, r), this.addDocument(n), n);
  }
  createDocument(e, r, n) {
    if (n)
      return this.langiumDocumentFactory.fromString(r, e, n).then((i) => (this.addDocument(i), i));
    {
      const i = this.langiumDocumentFactory.fromString(r, e);
      return this.addDocument(i), i;
    }
  }
  hasDocument(e) {
    return this.documentTrie.has(e.toString());
  }
  /**
   * @deprecated Since 4.2 use `DocumentBuilder.resetToState(DocumentState.Changed)` instead
   * TODO remove this for the next major release
   */
  invalidateDocument(e) {
    const r = e.toString(), n = this.documentTrie.find(r);
    return n && this.documentBuilder().resetToState(n, W.Changed), n;
  }
  deleteDocument(e) {
    const r = e.toString(), n = this.documentTrie.find(r);
    return n && (n.state = W.Changed, this.documentTrie.delete(r)), n;
  }
  deleteDocuments(e) {
    const r = e.toString(), n = this.documentTrie.findAll(r);
    for (const i of n)
      i.state = W.Changed;
    return this.documentTrie.delete(r), n;
  }
}
const zr = Symbol("RefResolving");
class bR {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator, this.profiler = e.shared.profilers.LangiumProfiler, this.languageId = e.LanguageMetaData.languageId;
  }
  async link(e, r = fe.None) {
    var n;
    if ((n = this.profiler) != null && n.isActive("linking")) {
      const i = this.profiler.createTask("linking", this.languageId);
      i.start();
      try {
        for (const a of jt(e.parseResult.value))
          await Be(r), es(a).forEach((s) => {
            const o = `${a.$type}:${s.property}`;
            i.startSubTask(o);
            try {
              this.doLink(s, e);
            } finally {
              i.stopSubTask(o);
            }
          });
      } finally {
        i.stop();
      }
    } else
      for (const i of jt(e.parseResult.value))
        await Be(r), es(i).forEach((a) => this.doLink(a, e));
  }
  doLink(e, r) {
    const n = e.reference;
    if ("_ref" in n && n._ref === void 0) {
      n._ref = zr;
      try {
        const i = this.getCandidate(e);
        if (li(i))
          n._ref = i;
        else {
          n._nodeDescription = i;
          const a = this.loadAstNode(i);
          n._ref = a ?? this.createLinkingError(e, i);
        }
      } catch (i) {
        console.error(`An error occurred while resolving reference to '${n.$refText}':`, i);
        const a = i.message ?? String(i);
        n._ref = {
          info: e,
          message: `An error occurred while resolving reference to '${n.$refText}': ${a}`
        };
      }
      r.references.push(n);
    } else if ("_items" in n && n._items === void 0) {
      n._items = zr;
      try {
        const i = this.getCandidates(e), a = [];
        if (li(i))
          n._linkingError = i;
        else
          for (const s of i) {
            const o = this.loadAstNode(s);
            o && a.push({ ref: o, $nodeDescription: s });
          }
        n._items = a;
      } catch (i) {
        n._linkingError = {
          info: e,
          message: `An error occurred while resolving reference to '${n.$refText}': ${i}`
        }, n._items = [];
      }
      r.references.push(n);
    }
  }
  unlink(e) {
    for (const r of e.references)
      "_ref" in r ? (r._ref = void 0, delete r._nodeDescription) : "_items" in r && (r._items = void 0, delete r._linkingError);
    e.references = [];
  }
  getCandidate(e) {
    return this.scopeProvider.getScope(e).getElement(e.reference.$refText) ?? this.createLinkingError(e);
  }
  getCandidates(e) {
    const n = this.scopeProvider.getScope(e).getElements(e.reference.$refText).distinct((i) => `${i.documentUri}#${i.path}`).toArray();
    return n.length > 0 ? n : this.createLinkingError(e);
  }
  buildReference(e, r, n, i) {
    const a = this, s = {
      $refNode: n,
      $refText: i,
      _ref: void 0,
      get ref() {
        if (je(this._ref))
          return this._ref;
        if (Yp(this._nodeDescription)) {
          const o = a.loadAstNode(this._nodeDescription);
          this._ref = o ?? a.createLinkingError({ reference: s, container: e, property: r }, this._nodeDescription);
        } else if (this._ref === void 0) {
          this._ref = zr;
          const o = Fa(e).$document, l = a.getLinkedNode({ reference: s, container: e, property: r });
          if (l.error && o && o.state < W.ComputedScopes)
            return this._ref = void 0;
          this._ref = l.node ?? l.error, this._nodeDescription = l.descr, o == null || o.references.push(this);
        } else this._ref === zr && a.throwCyclicReferenceError(e, r, i);
        return je(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return li(this._ref) ? this._ref : void 0;
      }
    };
    return s;
  }
  buildMultiReference(e, r, n, i) {
    const a = this, s = {
      $refNode: n,
      $refText: i,
      _items: void 0,
      get items() {
        if (Array.isArray(this._items))
          return this._items;
        if (this._items === void 0) {
          this._items = zr;
          const o = Fa(e).$document, l = a.getCandidates({
            reference: s,
            container: e,
            property: r
          }), c = [];
          if (li(l))
            this._linkingError = l;
          else
            for (const f of l) {
              const h = a.loadAstNode(f);
              h && c.push({ ref: h, $nodeDescription: f });
            }
          this._items = c, o == null || o.references.push(this);
        } else this._items === zr && a.throwCyclicReferenceError(e, r, i);
        return Array.isArray(this._items) ? this._items : [];
      },
      get error() {
        if (this._linkingError)
          return this._linkingError;
        if (!(this.items.length > 0))
          return this._linkingError = a.createLinkingError({ reference: s, container: e, property: r });
      }
    };
    return s;
  }
  throwCyclicReferenceError(e, r, n) {
    throw new Error(`Cyclic reference resolution detected: ${this.astNodeLocator.getAstNodePath(e)}/${r} (symbol '${n}')`);
  }
  getLinkedNode(e) {
    try {
      const r = this.getCandidate(e);
      if (li(r))
        return { error: r };
      const n = this.loadAstNode(r);
      return n ? { node: n, descr: r } : {
        descr: r,
        error: this.createLinkingError(e, r)
      };
    } catch (r) {
      console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, r);
      const n = r.message ?? String(r);
      return {
        error: {
          info: e,
          message: `An error occurred while resolving reference to '${e.reference.$refText}': ${n}`
        }
      };
    }
  }
  loadAstNode(e) {
    if (e.node)
      return e.node;
    const r = this.langiumDocuments().getDocument(e.documentUri);
    if (r)
      return this.astNodeLocator.getAstNode(r.parseResult.value, e.path);
  }
  createLinkingError(e, r) {
    const n = Fa(e.container).$document;
    n && n.state < W.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);
    const i = this.reflection.getReferenceType(e);
    return {
      info: e,
      message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`,
      targetDescription: r
    };
  }
}
function kR(t) {
  return typeof t.name == "string";
}
class NR {
  getName(e) {
    if (kR(e))
      return e.name;
  }
  getNameNode(e) {
    return Ud(e.$cstNode, "name");
  }
}
class _R {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator, this.documents = e.shared.workspace.LangiumDocuments, this.hasMultiReference = jt(e.Grammar).some((r) => Is(r) && r.isMulti);
  }
  findDeclarations(e) {
    if (e) {
      const r = zm(e), n = e.astNode;
      if (r && n) {
        const i = n[r.feature];
        if (pt(i) || tr(i))
          return Yc(i);
        if (Array.isArray(i)) {
          for (const a of i)
            if ((pt(a) || tr(a)) && a.$refNode && a.$refNode.offset <= e.offset && a.$refNode.end >= e.end)
              return Yc(a);
        }
      }
      if (n) {
        const i = this.nameProvider.getNameNode(n);
        if (i && (i === e || Tm(e, i)))
          return this.getSelfNodes(n);
      }
    }
    return [];
  }
  /**
   * Returns all self-references for the specified node.
   * Since the node can be part of a multi-reference, this method returns all nodes that are part of the same multi-reference.
   */
  getSelfNodes(e) {
    if (this.hasMultiReference) {
      const r = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e)), n = this.getNodeFromReferenceDescription(r.head());
      if (n) {
        for (const i of es(n))
          if (tr(i.reference) && i.reference.items.some((a) => a.ref === e))
            return i.reference.items.map((a) => a.ref);
      }
      return [e];
    } else
      return [e];
  }
  getNodeFromReferenceDescription(e) {
    if (!e)
      return;
    const r = this.documents.getDocument(e.sourceUri);
    if (r)
      return this.nodeLocator.getAstNode(r.parseResult.value, e.sourcePath);
  }
  findDeclarationNodes(e) {
    const r = this.findDeclarations(e), n = [];
    for (const i of r) {
      const a = this.nameProvider.getNameNode(i) ?? i.$cstNode;
      a && n.push(a);
    }
    return n;
  }
  findReferences(e, r) {
    const n = [];
    r.includeDeclaration && n.push(...this.getSelfReferences(e));
    let i = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
    return r.documentUri && (i = i.filter((a) => et.equals(a.sourceUri, r.documentUri))), n.push(...i), ce(n);
  }
  getSelfReferences(e) {
    const r = this.getSelfNodes(e), n = [];
    for (const i of r) {
      const a = this.nameProvider.getNameNode(i);
      if (a) {
        const s = Gt(i), o = this.nodeLocator.getAstNodePath(i);
        n.push({
          sourceUri: s.uri,
          sourcePath: o,
          targetUri: s.uri,
          targetPath: o,
          segment: rs(a),
          local: !0
        });
      }
    }
    return n;
  }
}
class Ui {
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), e)
      for (const [r, n] of e)
        this.add(r, n);
  }
  /**
   * The total number of values in the multimap.
   */
  get size() {
    return _o.sum(ce(this.map.values()).map((e) => e.length));
  }
  /**
   * Clear all entries in the multimap.
   */
  clear() {
    this.map.clear();
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method deletes the specific key / value pair from the multimap.
   *  * Without a value, all values associated with the given key are deleted.
   *
   * @returns `true` if a value existed and has been removed, or `false` if the specified
   *     key / value does not exist.
   */
  delete(e, r) {
    if (r === void 0)
      return this.map.delete(e);
    {
      const n = this.map.get(e);
      if (n) {
        const i = n.indexOf(r);
        if (i >= 0)
          return n.length === 1 ? this.map.delete(e) : n.splice(i, 1), !0;
      }
      return !1;
    }
  }
  /**
   * Returns an array of all values associated with the given key. If no value exists,
   * an empty array is returned.
   *
   * _Note:_ The returned array is assumed not to be modified. Use the `set` method to add a
   * value and `delete` to remove a value from the multimap.
   */
  get(e) {
    return this.map.get(e) ?? [];
  }
  /**
   * Returns a stream of all values associated with the given key. If no value exists,
   * {@link EMPTY_STREAM} is returned.
   */
  getStream(e) {
    const r = this.map.get(e);
    return r ? ce(r) : Id;
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method returns `true` if the specific key / value pair is present in the multimap.
   *  * Without a value, this method returns `true` if the given key is present in the multimap.
   */
  has(e, r) {
    if (r === void 0)
      return this.map.has(e);
    {
      const n = this.map.get(e);
      return n ? n.indexOf(r) >= 0 : !1;
    }
  }
  /**
   * Add the given key / value pair to the multimap.
   */
  add(e, r) {
    return this.map.has(e) ? this.map.get(e).push(r) : this.map.set(e, [r]), this;
  }
  /**
   * Add the given set of key / value pairs to the multimap.
   */
  addAll(e, r) {
    return this.map.has(e) ? this.map.get(e).push(...r) : this.map.set(e, Array.from(r)), this;
  }
  /**
   * Invokes the given callback function for every key / value pair in the multimap.
   */
  forEach(e) {
    this.map.forEach((r, n) => r.forEach((i) => e(i, n, this)));
  }
  /**
   * Returns an iterator of key, value pairs for every entry in the map.
   */
  [Symbol.iterator]() {
    return this.entries().iterator();
  }
  /**
   * Returns a stream of key, value pairs for every entry in the map.
   */
  entries() {
    return ce(this.map.entries()).flatMap(([e, r]) => r.map((n) => [e, n]));
  }
  /**
   * Returns a stream of keys in the map.
   */
  keys() {
    return ce(this.map.keys());
  }
  /**
   * Returns a stream of values in the map.
   */
  values() {
    return ce(this.map.values()).flat();
  }
  /**
   * Returns a stream of key, value set pairs for every key in the map.
   */
  entriesGroupedByKey() {
    return ce(this.map.entries());
  }
}
class Gu {
  get size() {
    return this.map.size;
  }
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e)
      for (const [r, n] of e)
        this.set(r, n);
  }
  clear() {
    this.map.clear(), this.inverse.clear();
  }
  set(e, r) {
    return this.map.set(e, r), this.inverse.set(r, e), this;
  }
  get(e) {
    return this.map.get(e);
  }
  getKey(e) {
    return this.inverse.get(e);
  }
  delete(e) {
    const r = this.map.get(e);
    return r !== void 0 ? (this.map.delete(e), this.inverse.delete(r), !0) : !1;
  }
}
class IR {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
  }
  async collectExportedSymbols(e, r = fe.None) {
    return this.collectExportedSymbolsForNode(e.parseResult.value, e, void 0, r);
  }
  /**
   * Creates {@link AstNodeDescription AstNodeDescriptions} for the given {@link AstNode parentNode} and its children.
   * The list of children to be considered is determined by the function parameter {@link children}.
   * By default only the direct children of {@link parentNode} are visited, nested nodes are not exported.
   *
   * @param parentNode AST node to be exported, i.e., of which an {@link AstNodeDescription} shall be added to the returned list.
   * @param document The document containing the AST node to be exported.
   * @param children A function called with {@link parentNode} as single argument and returning an {@link Iterable} supplying the children to be visited, which must be directly or transitively contained in {@link parentNode}.
   * @param cancelToken Indicates when to cancel the current operation.
   * @throws `OperationCancelled` if a user action occurs during execution.
   * @returns A list of {@link AstNodeDescription AstNodeDescriptions} to be published to index.
   */
  async collectExportedSymbolsForNode(e, r, n = Sc, i = fe.None) {
    const a = [];
    this.addExportedSymbol(e, a, r);
    for (const s of n(e))
      await Be(i), this.addExportedSymbol(s, a, r);
    return a;
  }
  /**
   * Adds a single node to the list of exports if it has a name. Override this method to change how
   * symbols are exported, e.g. by modifying their exported name.
   */
  addExportedSymbol(e, r, n) {
    const i = this.nameProvider.getName(e);
    i && r.push(this.descriptions.createDescription(e, i, n));
  }
  // --- local symbols gathering ---
  async collectLocalSymbols(e, r = fe.None) {
    const n = e.parseResult.value, i = new Ui();
    for (const a of qi(n))
      await Be(r), this.addLocalSymbol(a, e, i);
    return i;
  }
  /**
   * Adds a single node to the local symbols of its containing document if it has a name.
   * The default implementation makes the node visible in the subtree of its container if it does have a container.
   * Override this method to change this, e.g. by increasing the visibility to a higher level in the AST.
   */
  addLocalSymbol(e, r, n) {
    const i = e.$container;
    if (i) {
      const a = this.nameProvider.getName(e);
      a && n.add(i, this.descriptions.createDescription(e, a, r));
    }
  }
}
class ju {
  constructor(e, r, n) {
    this.elements = e, this.outerScope = r, this.caseInsensitive = (n == null ? void 0 : n.caseInsensitive) ?? !1, this.concatOuterScope = (n == null ? void 0 : n.concatOuterScope) ?? !0;
  }
  getAllElements() {
    return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
  }
  getElement(e) {
    const r = this.caseInsensitive ? e.toLowerCase() : e, n = this.caseInsensitive ? this.elements.find((i) => i.name.toLowerCase() === r) : this.elements.find((i) => i.name === e);
    if (n)
      return n;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
  getElements(e) {
    const r = this.caseInsensitive ? e.toLowerCase() : e, n = this.caseInsensitive ? this.elements.filter((i) => i.name.toLowerCase() === r) : this.elements.filter((i) => i.name === e);
    return (this.concatOuterScope || n.isEmpty()) && this.outerScope ? n.concat(this.outerScope.getElements(e)) : n;
  }
}
class PR {
  constructor(e, r, n) {
    this.elements = new Ui(), this.caseInsensitive = (n == null ? void 0 : n.caseInsensitive) ?? !1, this.concatOuterScope = (n == null ? void 0 : n.concatOuterScope) ?? !0;
    for (const i of e) {
      const a = this.caseInsensitive ? i.name.toLowerCase() : i.name;
      this.elements.add(a, i);
    }
    this.outerScope = r;
  }
  getElement(e) {
    const r = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(r)[0];
    if (n)
      return n;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
  getElements(e) {
    const r = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(r);
    return (this.concatOuterScope || n.length === 0) && this.outerScope ? ce(n).concat(this.outerScope.getElements(e)) : ce(n);
  }
  getAllElements() {
    let e = ce(this.elements.values());
    return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
  }
}
class Qh {
  constructor() {
    this.toDispose = [], this.isDisposed = !1;
  }
  onDispose(e) {
    this.toDispose.push(e);
  }
  dispose() {
    this.throwIfDisposed(), this.clear(), this.isDisposed = !0, this.toDispose.forEach((e) => e.dispose());
  }
  throwIfDisposed() {
    if (this.isDisposed)
      throw new Error("This cache has already been disposed");
  }
}
class OR extends Qh {
  constructor() {
    super(...arguments), this.cache = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this.throwIfDisposed(), this.cache.has(e);
  }
  set(e, r) {
    this.throwIfDisposed(), this.cache.set(e, r);
  }
  get(e, r) {
    if (this.throwIfDisposed(), this.cache.has(e))
      return this.cache.get(e);
    if (r) {
      const n = r();
      return this.cache.set(e, n), n;
    } else
      return;
  }
  delete(e) {
    return this.throwIfDisposed(), this.cache.delete(e);
  }
  clear() {
    this.throwIfDisposed(), this.cache.clear();
  }
}
class LR extends Qh {
  constructor(e) {
    super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((r) => r);
  }
  has(e, r) {
    return this.throwIfDisposed(), this.cacheForContext(e).has(r);
  }
  set(e, r, n) {
    this.throwIfDisposed(), this.cacheForContext(e).set(r, n);
  }
  get(e, r, n) {
    this.throwIfDisposed();
    const i = this.cacheForContext(e);
    if (i.has(r))
      return i.get(r);
    if (n) {
      const a = n();
      return i.set(r, a), a;
    } else
      return;
  }
  delete(e, r) {
    return this.throwIfDisposed(), this.cacheForContext(e).delete(r);
  }
  clear(e) {
    if (this.throwIfDisposed(), e) {
      const r = this.converter(e);
      this.cache.delete(r);
    } else
      this.cache.clear();
  }
  cacheForContext(e) {
    const r = this.converter(e);
    let n = this.cache.get(r);
    return n || (n = /* @__PURE__ */ new Map(), this.cache.set(r, n)), n;
  }
}
class xR extends OR {
  /**
   * Creates a new workspace cache.
   *
   * @param sharedServices Service container instance to hook into document lifecycle events.
   * @param state Optional document state on which the cache should evict.
   * If not provided, the cache will evict on `DocumentBuilder#onUpdate`.
   * *Deleted* documents are considered in both cases.
   */
  constructor(e, r) {
    super(), r ? (this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(r, () => {
      this.clear();
    })), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((n, i) => {
      i.length > 0 && this.clear();
    }))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
}
class DR {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new xR(e.shared);
  }
  getScope(e) {
    const r = [], n = this.reflection.getReferenceType(e), i = Gt(e.container).localSymbols;
    if (i) {
      let s = e.container;
      do
        i.has(s) && r.push(i.getStream(s).filter((o) => this.reflection.isSubtype(o.type, n))), s = s.$container;
      while (s);
    }
    let a = this.getGlobalScope(n, e);
    for (let s = r.length - 1; s >= 0; s--)
      a = this.createScope(r[s], a);
    return a;
  }
  /**
   * Create a scope for the given collection of AST node descriptions.
   */
  createScope(e, r, n) {
    return new ju(ce(e), r, n);
  }
  /**
   * Create a scope for the given collection of AST nodes, which need to be transformed into respective
   * descriptions first. This is done using the `NameProvider` and `AstNodeDescriptionProvider` services.
   */
  createScopeForNodes(e, r, n) {
    const i = ce(e).map((a) => {
      const s = this.nameProvider.getName(a);
      if (s)
        return this.descriptions.createDescription(a, s);
    }).nonNullable();
    return new ju(i, r, n);
  }
  /**
   * Create a global scope filtered for the given reference type.
   */
  getGlobalScope(e, r) {
    return this.globalScopeCache.get(e, () => new PR(this.indexManager.allElements(e)));
  }
}
function MR(t) {
  return typeof t.$comment == "string";
}
function zu(t) {
  return typeof t == "object" && !!t && ("$ref" in t || "$error" in t);
}
class FR {
  constructor(e) {
    this.ignoreProperties = /* @__PURE__ */ new Set(["$container", "$containerProperty", "$containerIndex", "$document", "$cstNode"]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
  }
  serialize(e, r) {
    const n = r ?? {}, i = r == null ? void 0 : r.replacer, a = (o, l) => this.replacer(o, l, n), s = i ? (o, l) => i(o, l, a) : a;
    try {
      return this.currentDocument = Gt(e), JSON.stringify(e, s, r == null ? void 0 : r.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(e, r) {
    const n = r ?? {}, i = JSON.parse(e);
    return this.linkNode(i, i, n), i;
  }
  replacer(e, r, { refText: n, sourceText: i, textRegions: a, comments: s, uriConverter: o }) {
    var l, c, f;
    if (!this.ignoreProperties.has(e))
      if (pt(r)) {
        const h = r.ref, p = n ? r.$refText : void 0;
        if (h) {
          const g = Gt(h);
          let C = "";
          this.currentDocument && this.currentDocument !== g && (o ? C = o(g.uri, h) : C = g.uri.toString());
          const b = this.astNodeLocator.getAstNodePath(h);
          return {
            $ref: `${C}#${b}`,
            $refText: p
          };
        } else
          return {
            $error: ((l = r.error) == null ? void 0 : l.message) ?? "Could not resolve reference",
            $refText: p
          };
      } else if (tr(r)) {
        const h = n ? r.$refText : void 0, p = [];
        for (const g of r.items) {
          const C = g.ref, b = Gt(g.ref);
          let D = "";
          this.currentDocument && this.currentDocument !== b && (o ? D = o(b.uri, C) : D = b.uri.toString());
          const k = this.astNodeLocator.getAstNodePath(C);
          p.push(`${D}#${k}`);
        }
        return {
          $refs: p,
          $refText: h
        };
      } else if (je(r)) {
        let h;
        if (a && (h = this.addAstNodeRegionWithAssignmentsTo({ ...r }), (!e || r.$document) && (h != null && h.$textRegion) && (h.$textRegion.documentURI = (c = this.currentDocument) == null ? void 0 : c.uri.toString())), i && !e && (h ?? (h = { ...r }), h.$sourceText = (f = r.$cstNode) == null ? void 0 : f.text), s) {
          h ?? (h = { ...r });
          const p = this.commentProvider.getComment(r);
          p && (h.$comment = p.replace(/\r/g, ""));
        }
        return h ?? r;
      } else
        return r;
  }
  addAstNodeRegionWithAssignmentsTo(e) {
    const r = (n) => ({
      offset: n.offset,
      end: n.end,
      length: n.length,
      range: n.range
    });
    if (e.$cstNode) {
      const n = e.$textRegion = r(e.$cstNode), i = n.assignments = {};
      return Object.keys(e).filter((a) => !a.startsWith("$")).forEach((a) => {
        const s = Fm(e.$cstNode, a).map(r);
        s.length !== 0 && (i[a] = s);
      }), e;
    }
  }
  linkNode(e, r, n, i, a, s) {
    for (const [l, c] of Object.entries(e))
      if (Array.isArray(c))
        for (let f = 0; f < c.length; f++) {
          const h = c[f];
          zu(h) ? c[f] = this.reviveReference(e, l, r, h, n) : je(h) && this.linkNode(h, r, n, e, l, f);
        }
      else zu(c) ? e[l] = this.reviveReference(e, l, r, c, n) : je(c) && this.linkNode(c, r, n, e, l);
    const o = e;
    o.$container = i, o.$containerProperty = a, o.$containerIndex = s;
  }
  reviveReference(e, r, n, i, a) {
    let s = i.$refText, o = i.$error, l;
    if (i.$ref) {
      const c = this.getRefNode(n, i.$ref, a.uriConverter);
      if (je(c))
        return s || (s = this.nameProvider.getName(c)), {
          $refText: s ?? "",
          ref: c
        };
      o = c;
    } else if (i.$refs) {
      const c = [];
      for (const f of i.$refs) {
        const h = this.getRefNode(n, f, a.uriConverter);
        je(h) && c.push({ ref: h });
      }
      if (c.length === 0)
        l = {
          $refText: s ?? "",
          items: c
        }, o ?? (o = "Could not resolve multi-reference");
      else
        return {
          $refText: s ?? "",
          items: c
        };
    }
    if (o)
      return l ?? (l = {
        $refText: s ?? "",
        ref: void 0
      }), l.error = {
        info: {
          container: e,
          property: r,
          reference: l
        },
        message: o
      }, l;
  }
  getRefNode(e, r, n) {
    try {
      const i = r.indexOf("#");
      if (i === 0) {
        const l = this.astNodeLocator.getAstNode(e, r.substring(1));
        return l || "Could not resolve path: " + r;
      }
      if (i < 0) {
        const l = n ? n(r) : gt.parse(r), c = this.langiumDocuments.getDocument(l);
        return c ? c.parseResult.value : "Could not find document for URI: " + r;
      }
      const a = n ? n(r.substring(0, i)) : gt.parse(r.substring(0, i)), s = this.langiumDocuments.getDocument(a);
      if (!s)
        return "Could not find document for URI: " + r;
      if (i === r.length - 1)
        return s.parseResult.value;
      const o = this.astNodeLocator.getAstNode(s.parseResult.value, r.substring(i + 1));
      return o || "Could not resolve URI: " + r;
    } catch (i) {
      return String(i);
    }
  }
}
class GR {
  /**
   * @deprecated Since 3.1.0. Use the new `fileExtensionMap` (or `languageIdMap`) property instead.
   */
  get map() {
    return this.fileExtensionMap;
  }
  constructor(e) {
    this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.fileNameMap = /* @__PURE__ */ new Map(), this.textDocuments = e == null ? void 0 : e.workspace.TextDocuments;
  }
  register(e) {
    const r = e.LanguageMetaData;
    for (const n of r.fileExtensions)
      this.fileExtensionMap.has(n) && console.warn(`The file extension ${n} is used by multiple languages. It is now assigned to '${r.languageId}'.`), this.fileExtensionMap.set(n, e);
    if (r.fileNames)
      for (const n of r.fileNames)
        this.fileNameMap.has(n) && console.warn(`The file name ${n} is used by multiple languages. It is now assigned to '${r.languageId}'.`), this.fileNameMap.set(n, e);
    this.languageIdMap.set(r.languageId, e);
  }
  getServices(e) {
    var s, o;
    if (this.languageIdMap.size === 0)
      throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    const r = (o = (s = this.textDocuments) == null ? void 0 : s.get(e)) == null ? void 0 : o.languageId;
    if (r !== void 0) {
      const l = this.languageIdMap.get(r);
      if (l)
        return l;
    }
    const n = et.extname(e), i = et.basename(e), a = this.fileNameMap.get(i) ?? this.fileExtensionMap.get(n);
    if (!a)
      throw r ? new Error(`The service registry contains no services for the extension '${n}' for language '${r}'.`) : new Error(`The service registry contains no services for the extension '${n}'.`);
    return a;
  }
  hasServices(e) {
    try {
      return this.getServices(e), !0;
    } catch {
      return !1;
    }
  }
  get all() {
    return Array.from(this.languageIdMap.values());
  }
}
function bi(t) {
  return { code: t };
}
var ac;
(function(t) {
  t.defaults = ["fast", "slow", "built-in"], t.all = t.defaults;
})(ac || (ac = {}));
class jR {
  constructor(e) {
    this.entries = new Ui(), this.knownCategories = new Set(ac.defaults), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
  }
  /**
   * Register a set of validation checks. Each value in the record can be either a single validation check (i.e. a function)
   * or an array of validation checks.
   *
   * @param checksRecord Set of validation checks to register.
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   * @param category Optional category for the validation checks (defaults to `'fast'`).
   */
  register(e, r = this, n = "fast") {
    if (n === "built-in")
      throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
    this.knownCategories.add(n);
    for (const [i, a] of Object.entries(e)) {
      const s = a;
      if (Array.isArray(s))
        for (const o of s) {
          const l = {
            check: this.wrapValidationException(o, r),
            category: n
          };
          this.addEntry(i, l);
        }
      else if (typeof s == "function") {
        const o = {
          check: this.wrapValidationException(s, r),
          category: n
        };
        this.addEntry(i, o);
      } else
        Xi();
    }
  }
  wrapValidationException(e, r) {
    return async (n, i, a) => {
      await this.handleException(() => e.call(r, n, i, a), "An error occurred during validation", i, n);
    };
  }
  async handleException(e, r, n, i) {
    try {
      await e();
    } catch (a) {
      if (Us(a))
        throw a;
      console.error(`${r}:`, a), a instanceof Error && a.stack && console.error(a.stack);
      const s = a instanceof Error ? a.message : String(a);
      n("error", `${r}: ${s}`, { node: i });
    }
  }
  addEntry(e, r) {
    if (e === "AstNode") {
      this.entries.add("AstNode", r);
      return;
    }
    for (const n of this.reflection.getAllSubTypes(e))
      this.entries.add(n, r);
  }
  getChecks(e, r) {
    let n = ce(this.entries.get(e)).concat(this.entries.get("AstNode"));
    return r && (n = n.filter((i) => r.includes(i.category))), n.map((i) => i.check);
  }
  /**
   * Register logic which will be executed once before validating all the nodes of an AST/Langium document.
   * This helps to prepare or initialize some information which are required or reusable for the following checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map for mapping names to nodes could be established.
   * During the usual checks on the nodes, they are put into this map with their name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerBeforeDocument(e, r = this) {
    this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", r));
  }
  /**
   * Register logic which will be executed once after validating all the nodes of an AST/Langium document.
   * This helps to finally evaluate information which are collected during the checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map with all the collected nodes and their names is checked
   * and validation hints are created for all nodes with the same name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerAfterDocument(e, r = this) {
    this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", r));
  }
  wrapPreparationException(e, r, n) {
    return async (i, a, s, o) => {
      await this.handleException(() => e.call(n, i, a, s, o), r, a, i);
    };
  }
  get checksBefore() {
    return this.entriesBefore;
  }
  get checksAfter() {
    return this.entriesAfter;
  }
  getAllValidationCategories(e) {
    return this.knownCategories;
  }
}
const zR = Object.freeze({
  validateNode: !0,
  validateChildren: !0
});
class UR {
  constructor(e) {
    this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData, this.profiler = e.shared.profilers.LangiumProfiler, this.languageId = e.LanguageMetaData.languageId;
  }
  async validateDocument(e, r = {}, n = fe.None) {
    const i = e.parseResult, a = [];
    if (await Be(n), (!r.categories || r.categories.includes("built-in")) && (this.processLexingErrors(i, a, r), r.stopAfterLexingErrors && a.some((s) => {
      var o;
      return ((o = s.data) == null ? void 0 : o.code) === ht.LexingError;
    }) || (this.processParsingErrors(i, a, r), r.stopAfterParsingErrors && a.some((s) => {
      var o;
      return ((o = s.data) == null ? void 0 : o.code) === ht.ParsingError;
    })) || (this.processLinkingErrors(e, a, r), r.stopAfterLinkingErrors && a.some((s) => {
      var o;
      return ((o = s.data) == null ? void 0 : o.code) === ht.LinkingError;
    }))))
      return a;
    try {
      a.push(...await this.validateAst(i.value, r, n));
    } catch (s) {
      if (Us(s))
        throw s;
      console.error("An error occurred during validation:", s);
    }
    return await Be(n), a;
  }
  processLexingErrors(e, r, n) {
    var a;
    const i = [...e.lexerErrors, ...((a = e.lexerReport) == null ? void 0 : a.diagnostics) ?? []];
    for (const s of i) {
      const o = s.severity ?? "error", l = {
        severity: mo(o),
        range: {
          start: {
            line: s.line - 1,
            character: s.column - 1
          },
          end: {
            line: s.line - 1,
            character: s.column + s.length - 1
          }
        },
        message: s.message,
        data: WR(o),
        source: this.getSource()
      };
      r.push(l);
    }
  }
  processParsingErrors(e, r, n) {
    for (const i of e.parserErrors) {
      let a;
      if (isNaN(i.token.startOffset)) {
        if ("previousToken" in i) {
          const s = i.previousToken;
          if (isNaN(s.startOffset)) {
            const o = { line: 0, character: 0 };
            a = { start: o, end: o };
          } else {
            const o = { line: s.endLine - 1, character: s.endColumn };
            a = { start: o, end: o };
          }
        }
      } else
        a = Go(i.token);
      if (a) {
        const s = {
          severity: mo("error"),
          range: a,
          message: i.message,
          data: bi(ht.ParsingError),
          source: this.getSource()
        };
        r.push(s);
      }
    }
  }
  processLinkingErrors(e, r, n) {
    var i;
    for (const a of e.references) {
      const s = a.error;
      if (s) {
        const o = {
          node: s.info.container,
          range: (i = a.$refNode) == null ? void 0 : i.range,
          property: s.info.property,
          index: s.info.index,
          data: {
            code: ht.LinkingError,
            containerType: s.info.container.$type,
            property: s.info.property,
            refText: s.info.reference.$refText
          }
        };
        r.push(this.toDiagnostic("error", s.message, o));
      }
    }
  }
  async validateAst(e, r, n = fe.None) {
    const i = [], a = (s, o, l) => {
      i.push(this.toDiagnostic(s, o, l));
    };
    return await this.validateAstBefore(e, r, a, n), await this.validateAstNodes(e, r, a, n), await this.validateAstAfter(e, r, a, n), i;
  }
  async validateAstBefore(e, r, n, i = fe.None) {
    const a = this.validationRegistry.checksBefore;
    for (const s of a)
      await Be(i), await s(e, n, r.categories ?? [], i);
  }
  async validateAstNodes(e, r, n, i = fe.None) {
    var a;
    if ((a = this.profiler) != null && a.isActive("validating")) {
      const s = this.profiler.createTask("validating", this.languageId);
      s.start();
      try {
        const o = jt(e).iterator();
        for (const l of o) {
          s.startSubTask(l.$type);
          const c = this.validateSingleNodeOptions(l, r);
          if (c.validateNode)
            try {
              const f = this.validationRegistry.getChecks(l.$type, r.categories);
              for (const h of f)
                await h(l, n, i);
            } finally {
              s.stopSubTask(l.$type);
            }
          c.validateChildren || o.prune();
        }
      } finally {
        s.stop();
      }
    } else {
      const s = jt(e).iterator();
      for (const o of s) {
        await Be(i);
        const l = this.validateSingleNodeOptions(o, r);
        if (l.validateNode) {
          const c = this.validationRegistry.getChecks(o.$type, r.categories);
          for (const f of c)
            await f(o, n, i);
        }
        l.validateChildren || s.prune();
      }
    }
  }
  validateSingleNodeOptions(e, r) {
    return zR;
  }
  async validateAstAfter(e, r, n, i = fe.None) {
    const a = this.validationRegistry.checksAfter;
    for (const s of a)
      await Be(i), await s(e, n, r.categories ?? [], i);
  }
  toDiagnostic(e, r, n) {
    return {
      message: r,
      range: BR(n),
      severity: mo(e),
      code: n.code,
      codeDescription: n.codeDescription,
      tags: n.tags,
      relatedInformation: n.relatedInformation,
      data: n.data,
      source: this.getSource()
    };
  }
  getSource() {
    return this.metadata.languageId;
  }
}
function BR(t) {
  if (t.range)
    return t.range;
  let e;
  return typeof t.property == "string" ? e = Ud(t.node.$cstNode, t.property, t.index) : typeof t.keyword == "string" && (e = Gm(t.node.$cstNode, t.keyword, t.index)), e ?? (e = t.node.$cstNode), e ? e.range : {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
function mo(t) {
  switch (t) {
    case "error":
      return 1;
    case "warning":
      return 2;
    case "info":
      return 3;
    case "hint":
      return 4;
    default:
      throw new Error("Invalid diagnostic severity: " + t);
  }
}
function WR(t) {
  switch (t) {
    case "error":
      return bi(ht.LexingError);
    case "warning":
      return bi(ht.LexingWarning);
    case "info":
      return bi(ht.LexingInfo);
    case "hint":
      return bi(ht.LexingHint);
    default:
      throw new Error("Invalid diagnostic severity: " + t);
  }
}
var ht;
(function(t) {
  t.LexingError = "lexing-error", t.LexingWarning = "lexing-warning", t.LexingInfo = "lexing-info", t.LexingHint = "lexing-hint", t.ParsingError = "parsing-error", t.LinkingError = "linking-error";
})(ht || (ht = {}));
class KR {
  constructor(e) {
    this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
  }
  createDescription(e, r, n) {
    const i = n ?? Gt(e);
    r ?? (r = this.nameProvider.getName(e));
    const a = this.astNodeLocator.getAstNodePath(e);
    if (!r)
      throw new Error(`Node at path ${a} has no name.`);
    let s;
    const o = () => s ?? (s = rs(this.nameProvider.getNameNode(e) ?? e.$cstNode));
    return {
      node: e,
      name: r,
      get nameSegment() {
        return o();
      },
      selectionSegment: rs(e.$cstNode),
      type: e.$type,
      documentUri: i.uri,
      path: a
    };
  }
}
class VR {
  constructor(e) {
    this.nodeLocator = e.workspace.AstNodeLocator;
  }
  async createDescriptions(e, r = fe.None) {
    const n = [], i = e.parseResult.value;
    for (const a of jt(i))
      await Be(r), es(a).forEach((s) => {
        s.reference.error || n.push(...this.createInfoDescriptions(s));
      });
    return n;
  }
  createInfoDescriptions(e) {
    const r = e.reference;
    if (r.error || !r.$refNode)
      return [];
    let n = [];
    pt(r) && r.$nodeDescription ? n = [r.$nodeDescription] : tr(r) && (n = r.items.map((l) => l.$nodeDescription).filter((l) => l !== void 0));
    const i = Gt(e.container).uri, a = this.nodeLocator.getAstNodePath(e.container), s = [], o = rs(r.$refNode);
    for (const l of n)
      s.push({
        sourceUri: i,
        sourcePath: a,
        targetUri: l.documentUri,
        targetPath: l.path,
        segment: o,
        local: et.equals(l.documentUri, i)
      });
    return s;
  }
}
class qR {
  constructor() {
    this.segmentSeparator = "/", this.indexSeparator = "@";
  }
  getAstNodePath(e) {
    if (e.$container) {
      const r = this.getAstNodePath(e.$container), n = this.getPathSegment(e);
      return r + this.segmentSeparator + n;
    }
    return "";
  }
  getPathSegment({ $containerProperty: e, $containerIndex: r }) {
    if (!e)
      throw new Error("Missing '$containerProperty' in AST node.");
    return r !== void 0 ? e + this.indexSeparator + r : e;
  }
  getAstNode(e, r) {
    return r.split(this.segmentSeparator).reduce((i, a) => {
      if (!i || a.length === 0)
        return i;
      const s = a.indexOf(this.indexSeparator);
      if (s > 0) {
        const o = a.substring(0, s), l = parseInt(a.substring(s + 1)), c = i[o];
        return c == null ? void 0 : c[l];
      }
      return i[a];
    }, e);
  }
}
class HR {
  constructor(e) {
    this._ready = new Wc(), this.onConfigurationSectionUpdateEmitter = new Xh(), this.settings = {}, this.workspaceConfig = !1, this.serviceRegistry = e.ServiceRegistry;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(e) {
    var r;
    this.workspaceConfig = ((r = e.capabilities.workspace) == null ? void 0 : r.configuration) ?? !1;
  }
  async initialized(e) {
    if (this.workspaceConfig) {
      if (e.register) {
        const r = this.serviceRegistry.all;
        e.register({
          // Listen to configuration changes for all languages
          section: r.map((n) => this.toSectionName(n.LanguageMetaData.languageId))
        });
      }
      if (e.fetchConfiguration) {
        const r = this.serviceRegistry.all.map((i) => ({
          // Fetch the configuration changes for all languages
          section: this.toSectionName(i.LanguageMetaData.languageId)
        })), n = await e.fetchConfiguration(r);
        r.forEach((i, a) => {
          this.updateSectionConfiguration(i.section, n[a]);
        });
      }
    }
    this._ready.resolve();
  }
  /**
   *  Updates the cached configurations using the `change` notification parameters.
   *
   * @param change The parameters of a change configuration notification.
   * `settings` property of the change object could be expressed as `Record<string, Record<string, any>>`
   */
  updateConfiguration(e) {
    typeof e.settings != "object" || e.settings === null || Object.entries(e.settings).forEach(([r, n]) => {
      this.updateSectionConfiguration(r, n), this.onConfigurationSectionUpdateEmitter.fire({ section: r, configuration: n });
    });
  }
  updateSectionConfiguration(e, r) {
    this.settings[e] = r;
  }
  /**
  * Returns a configuration value stored for the given language.
  *
  * @param language The language id
  * @param configuration Configuration name
  */
  async getConfiguration(e, r) {
    await this.ready;
    const n = this.toSectionName(e);
    if (this.settings[n])
      return this.settings[n][r];
  }
  toSectionName(e) {
    return `${e}`;
  }
  get onConfigurationSectionUpdate() {
    return this.onConfigurationSectionUpdateEmitter.event;
  }
}
var ki = {}, Dr = {}, Kc = {}, $s = {}, G = {};
Object.defineProperty(G, "__esModule", { value: !0 });
G.Message = G.NotificationType9 = G.NotificationType8 = G.NotificationType7 = G.NotificationType6 = G.NotificationType5 = G.NotificationType4 = G.NotificationType3 = G.NotificationType2 = G.NotificationType1 = G.NotificationType0 = G.NotificationType = G.RequestType9 = G.RequestType8 = G.RequestType7 = G.RequestType6 = G.RequestType5 = G.RequestType4 = G.RequestType3 = G.RequestType2 = G.RequestType1 = G.RequestType = G.RequestType0 = G.AbstractMessageSignature = G.ParameterStructures = G.ResponseError = G.ErrorCodes = void 0;
const Cr = we;
var sc;
(function(t) {
  t.ParseError = -32700, t.InvalidRequest = -32600, t.MethodNotFound = -32601, t.InvalidParams = -32602, t.InternalError = -32603, t.jsonrpcReservedErrorRangeStart = -32099, t.serverErrorStart = -32099, t.MessageWriteError = -32099, t.MessageReadError = -32098, t.PendingResponseRejected = -32097, t.ConnectionInactive = -32096, t.ServerNotInitialized = -32002, t.UnknownErrorCode = -32001, t.jsonrpcReservedErrorRangeEnd = -32e3, t.serverErrorEnd = -32e3;
})(sc || (G.ErrorCodes = sc = {}));
class Vc extends Error {
  constructor(e, r, n) {
    super(r), this.code = Cr.number(e) ? e : sc.UnknownErrorCode, this.data = n, Object.setPrototypeOf(this, Vc.prototype);
  }
  toJson() {
    const e = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (e.data = this.data), e;
  }
}
G.ResponseError = Vc;
class ze {
  constructor(e) {
    this.kind = e;
  }
  static is(e) {
    return e === ze.auto || e === ze.byName || e === ze.byPosition;
  }
  toString() {
    return this.kind;
  }
}
G.ParameterStructures = ze;
ze.auto = new ze("auto");
ze.byPosition = new ze("byPosition");
ze.byName = new ze("byName");
class de {
  constructor(e, r) {
    this.method = e, this.numberOfParams = r;
  }
  get parameterStructures() {
    return ze.auto;
  }
}
G.AbstractMessageSignature = de;
class XR extends de {
  constructor(e) {
    super(e, 0);
  }
}
G.RequestType0 = XR;
class YR extends de {
  constructor(e, r = ze.auto) {
    super(e, 1), this._parameterStructures = r;
  }
  get parameterStructures() {
    return this._parameterStructures;
  }
}
G.RequestType = YR;
class JR extends de {
  constructor(e, r = ze.auto) {
    super(e, 1), this._parameterStructures = r;
  }
  get parameterStructures() {
    return this._parameterStructures;
  }
}
G.RequestType1 = JR;
class ZR extends de {
  constructor(e) {
    super(e, 2);
  }
}
G.RequestType2 = ZR;
class QR extends de {
  constructor(e) {
    super(e, 3);
  }
}
G.RequestType3 = QR;
class ev extends de {
  constructor(e) {
    super(e, 4);
  }
}
G.RequestType4 = ev;
class tv extends de {
  constructor(e) {
    super(e, 5);
  }
}
G.RequestType5 = tv;
class rv extends de {
  constructor(e) {
    super(e, 6);
  }
}
G.RequestType6 = rv;
class nv extends de {
  constructor(e) {
    super(e, 7);
  }
}
G.RequestType7 = nv;
class iv extends de {
  constructor(e) {
    super(e, 8);
  }
}
G.RequestType8 = iv;
class av extends de {
  constructor(e) {
    super(e, 9);
  }
}
G.RequestType9 = av;
class sv extends de {
  constructor(e, r = ze.auto) {
    super(e, 1), this._parameterStructures = r;
  }
  get parameterStructures() {
    return this._parameterStructures;
  }
}
G.NotificationType = sv;
class ov extends de {
  constructor(e) {
    super(e, 0);
  }
}
G.NotificationType0 = ov;
class lv extends de {
  constructor(e, r = ze.auto) {
    super(e, 1), this._parameterStructures = r;
  }
  get parameterStructures() {
    return this._parameterStructures;
  }
}
G.NotificationType1 = lv;
class cv extends de {
  constructor(e) {
    super(e, 2);
  }
}
G.NotificationType2 = cv;
class uv extends de {
  constructor(e) {
    super(e, 3);
  }
}
G.NotificationType3 = uv;
class fv extends de {
  constructor(e) {
    super(e, 4);
  }
}
G.NotificationType4 = fv;
class dv extends de {
  constructor(e) {
    super(e, 5);
  }
}
G.NotificationType5 = dv;
class hv extends de {
  constructor(e) {
    super(e, 6);
  }
}
G.NotificationType6 = hv;
class pv extends de {
  constructor(e) {
    super(e, 7);
  }
}
G.NotificationType7 = pv;
class mv extends de {
  constructor(e) {
    super(e, 8);
  }
}
G.NotificationType8 = mv;
class gv extends de {
  constructor(e) {
    super(e, 9);
  }
}
G.NotificationType9 = gv;
var Uu;
(function(t) {
  function e(i) {
    const a = i;
    return a && Cr.string(a.method) && (Cr.string(a.id) || Cr.number(a.id));
  }
  t.isRequest = e;
  function r(i) {
    const a = i;
    return a && Cr.string(a.method) && i.id === void 0;
  }
  t.isNotification = r;
  function n(i) {
    const a = i;
    return a && (a.result !== void 0 || !!a.error) && (Cr.string(a.id) || Cr.number(a.id) || a.id === null);
  }
  t.isResponse = n;
})(Uu || (G.Message = Uu = {}));
var Ut = {}, Bu;
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.LRUCache = Ut.LinkedMap = Ut.Touch = void 0;
var Fe;
(function(t) {
  t.None = 0, t.First = 1, t.AsOld = t.First, t.Last = 2, t.AsNew = t.Last;
})(Fe || (Ut.Touch = Fe = {}));
class ep {
  constructor() {
    this[Bu] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
  }
  clear() {
    this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
  }
  isEmpty() {
    return !this._head && !this._tail;
  }
  get size() {
    return this._size;
  }
  get first() {
    var e;
    return (e = this._head) == null ? void 0 : e.value;
  }
  get last() {
    var e;
    return (e = this._tail) == null ? void 0 : e.value;
  }
  has(e) {
    return this._map.has(e);
  }
  get(e, r = Fe.None) {
    const n = this._map.get(e);
    if (n)
      return r !== Fe.None && this.touch(n, r), n.value;
  }
  set(e, r, n = Fe.None) {
    let i = this._map.get(e);
    if (i)
      i.value = r, n !== Fe.None && this.touch(i, n);
    else {
      switch (i = { key: e, value: r, next: void 0, previous: void 0 }, n) {
        case Fe.None:
          this.addItemLast(i);
          break;
        case Fe.First:
          this.addItemFirst(i);
          break;
        case Fe.Last:
          this.addItemLast(i);
          break;
        default:
          this.addItemLast(i);
          break;
      }
      this._map.set(e, i), this._size++;
    }
    return this;
  }
  delete(e) {
    return !!this.remove(e);
  }
  remove(e) {
    const r = this._map.get(e);
    if (r)
      return this._map.delete(e), this.removeItem(r), this._size--, r.value;
  }
  shift() {
    if (!this._head && !this._tail)
      return;
    if (!this._head || !this._tail)
      throw new Error("Invalid list");
    const e = this._head;
    return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
  }
  forEach(e, r) {
    const n = this._state;
    let i = this._head;
    for (; i; ) {
      if (r ? e.bind(r)(i.value, i.key, this) : e(i.value, i.key, this), this._state !== n)
        throw new Error("LinkedMap got modified during iteration.");
      i = i.next;
    }
  }
  keys() {
    const e = this._state;
    let r = this._head;
    const n = {
      [Symbol.iterator]: () => n,
      next: () => {
        if (this._state !== e)
          throw new Error("LinkedMap got modified during iteration.");
        if (r) {
          const i = { value: r.key, done: !1 };
          return r = r.next, i;
        } else
          return { value: void 0, done: !0 };
      }
    };
    return n;
  }
  values() {
    const e = this._state;
    let r = this._head;
    const n = {
      [Symbol.iterator]: () => n,
      next: () => {
        if (this._state !== e)
          throw new Error("LinkedMap got modified during iteration.");
        if (r) {
          const i = { value: r.value, done: !1 };
          return r = r.next, i;
        } else
          return { value: void 0, done: !0 };
      }
    };
    return n;
  }
  entries() {
    const e = this._state;
    let r = this._head;
    const n = {
      [Symbol.iterator]: () => n,
      next: () => {
        if (this._state !== e)
          throw new Error("LinkedMap got modified during iteration.");
        if (r) {
          const i = { value: [r.key, r.value], done: !1 };
          return r = r.next, i;
        } else
          return { value: void 0, done: !0 };
      }
    };
    return n;
  }
  [(Bu = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(e) {
    if (e >= this.size)
      return;
    if (e === 0) {
      this.clear();
      return;
    }
    let r = this._head, n = this.size;
    for (; r && n > e; )
      this._map.delete(r.key), r = r.next, n--;
    this._head = r, this._size = n, r && (r.previous = void 0), this._state++;
  }
  addItemFirst(e) {
    if (!this._head && !this._tail)
      this._tail = e;
    else if (this._head)
      e.next = this._head, this._head.previous = e;
    else
      throw new Error("Invalid list");
    this._head = e, this._state++;
  }
  addItemLast(e) {
    if (!this._head && !this._tail)
      this._head = e;
    else if (this._tail)
      e.previous = this._tail, this._tail.next = e;
    else
      throw new Error("Invalid list");
    this._tail = e, this._state++;
  }
  removeItem(e) {
    if (e === this._head && e === this._tail)
      this._head = void 0, this._tail = void 0;
    else if (e === this._head) {
      if (!e.next)
        throw new Error("Invalid list");
      e.next.previous = void 0, this._head = e.next;
    } else if (e === this._tail) {
      if (!e.previous)
        throw new Error("Invalid list");
      e.previous.next = void 0, this._tail = e.previous;
    } else {
      const r = e.next, n = e.previous;
      if (!r || !n)
        throw new Error("Invalid list");
      r.previous = n, n.next = r;
    }
    e.next = void 0, e.previous = void 0, this._state++;
  }
  touch(e, r) {
    if (!this._head || !this._tail)
      throw new Error("Invalid list");
    if (!(r !== Fe.First && r !== Fe.Last)) {
      if (r === Fe.First) {
        if (e === this._head)
          return;
        const n = e.next, i = e.previous;
        e === this._tail ? (i.next = void 0, this._tail = i) : (n.previous = i, i.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
      } else if (r === Fe.Last) {
        if (e === this._tail)
          return;
        const n = e.next, i = e.previous;
        e === this._head ? (n.previous = void 0, this._head = n) : (n.previous = i, i.next = n), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
      }
    }
  }
  toJSON() {
    const e = [];
    return this.forEach((r, n) => {
      e.push([n, r]);
    }), e;
  }
  fromJSON(e) {
    this.clear();
    for (const [r, n] of e)
      this.set(r, n);
  }
}
Ut.LinkedMap = ep;
class yv extends ep {
  constructor(e, r = 1) {
    super(), this._limit = e, this._ratio = Math.min(Math.max(0, r), 1);
  }
  get limit() {
    return this._limit;
  }
  set limit(e) {
    this._limit = e, this.checkTrim();
  }
  get ratio() {
    return this._ratio;
  }
  set ratio(e) {
    this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim();
  }
  get(e, r = Fe.AsNew) {
    return super.get(e, r);
  }
  peek(e) {
    return super.get(e, Fe.None);
  }
  set(e, r) {
    return super.set(e, r, Fe.Last), this.checkTrim(), this;
  }
  checkTrim() {
    this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio));
  }
}
Ut.LRUCache = yv;
var Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
Bs.Disposable = void 0;
var Wu;
(function(t) {
  function e(r) {
    return {
      dispose: r
    };
  }
  t.create = e;
})(Wu || (Bs.Disposable = Wu = {}));
var xn = {};
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.SharedArrayReceiverStrategy = xn.SharedArraySenderStrategy = void 0;
const Tv = dr;
var Bi;
(function(t) {
  t.Continue = 0, t.Cancelled = 1;
})(Bi || (Bi = {}));
class Rv {
  constructor() {
    this.buffers = /* @__PURE__ */ new Map();
  }
  enableCancellation(e) {
    if (e.id === null)
      return;
    const r = new SharedArrayBuffer(4), n = new Int32Array(r, 0, 1);
    n[0] = Bi.Continue, this.buffers.set(e.id, r), e.$cancellationData = r;
  }
  async sendCancellation(e, r) {
    const n = this.buffers.get(r);
    if (n === void 0)
      return;
    const i = new Int32Array(n, 0, 1);
    Atomics.store(i, 0, Bi.Cancelled);
  }
  cleanup(e) {
    this.buffers.delete(e);
  }
  dispose() {
    this.buffers.clear();
  }
}
xn.SharedArraySenderStrategy = Rv;
class vv {
  constructor(e) {
    this.data = new Int32Array(e, 0, 1);
  }
  get isCancellationRequested() {
    return Atomics.load(this.data, 0) === Bi.Cancelled;
  }
  get onCancellationRequested() {
    throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events");
  }
}
class Ev {
  constructor(e) {
    this.token = new vv(e);
  }
  cancel() {
  }
  dispose() {
  }
}
class $v {
  constructor() {
    this.kind = "request";
  }
  createCancellationTokenSource(e) {
    const r = e.$cancellationData;
    return r === void 0 ? new Tv.CancellationTokenSource() : new Ev(r);
  }
}
xn.SharedArrayReceiverStrategy = $v;
var rr = {}, ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
ta.Semaphore = void 0;
const Av = qt;
class Cv {
  constructor(e = 1) {
    if (e <= 0)
      throw new Error("Capacity must be greater than 0");
    this._capacity = e, this._active = 0, this._waiting = [];
  }
  lock(e) {
    return new Promise((r, n) => {
      this._waiting.push({ thunk: e, resolve: r, reject: n }), this.runNext();
    });
  }
  get active() {
    return this._active;
  }
  runNext() {
    this._waiting.length === 0 || this._active === this._capacity || (0, Av.default)().timer.setImmediate(() => this.doRunNext());
  }
  doRunNext() {
    if (this._waiting.length === 0 || this._active === this._capacity)
      return;
    const e = this._waiting.shift();
    if (this._active++, this._active > this._capacity)
      throw new Error("To many thunks active");
    try {
      const r = e.thunk();
      r instanceof Promise ? r.then((n) => {
        this._active--, e.resolve(n), this.runNext();
      }, (n) => {
        this._active--, e.reject(n), this.runNext();
      }) : (this._active--, e.resolve(r), this.runNext());
    } catch (r) {
      this._active--, e.reject(r), this.runNext();
    }
  }
}
ta.Semaphore = Cv;
Object.defineProperty(rr, "__esModule", { value: !0 });
rr.ReadableStreamMessageReader = rr.AbstractMessageReader = rr.MessageReader = void 0;
const oc = qt, Qr = we, go = Ct, Sv = ta;
var Ku;
(function(t) {
  function e(r) {
    let n = r;
    return n && Qr.func(n.listen) && Qr.func(n.dispose) && Qr.func(n.onError) && Qr.func(n.onClose) && Qr.func(n.onPartialMessage);
  }
  t.is = e;
})(Ku || (rr.MessageReader = Ku = {}));
class tp {
  constructor() {
    this.errorEmitter = new go.Emitter(), this.closeEmitter = new go.Emitter(), this.partialMessageEmitter = new go.Emitter();
  }
  dispose() {
    this.errorEmitter.dispose(), this.closeEmitter.dispose();
  }
  get onError() {
    return this.errorEmitter.event;
  }
  fireError(e) {
    this.errorEmitter.fire(this.asError(e));
  }
  get onClose() {
    return this.closeEmitter.event;
  }
  fireClose() {
    this.closeEmitter.fire(void 0);
  }
  get onPartialMessage() {
    return this.partialMessageEmitter.event;
  }
  firePartialMessage(e) {
    this.partialMessageEmitter.fire(e);
  }
  asError(e) {
    return e instanceof Error ? e : new Error(`Reader received error. Reason: ${Qr.string(e.message) ? e.message : "unknown"}`);
  }
}
rr.AbstractMessageReader = tp;
var lc;
(function(t) {
  function e(r) {
    let n, i;
    const a = /* @__PURE__ */ new Map();
    let s;
    const o = /* @__PURE__ */ new Map();
    if (r === void 0 || typeof r == "string")
      n = r ?? "utf-8";
    else {
      if (n = r.charset ?? "utf-8", r.contentDecoder !== void 0 && (i = r.contentDecoder, a.set(i.name, i)), r.contentDecoders !== void 0)
        for (const l of r.contentDecoders)
          a.set(l.name, l);
      if (r.contentTypeDecoder !== void 0 && (s = r.contentTypeDecoder, o.set(s.name, s)), r.contentTypeDecoders !== void 0)
        for (const l of r.contentTypeDecoders)
          o.set(l.name, l);
    }
    return s === void 0 && (s = (0, oc.default)().applicationJson.decoder, o.set(s.name, s)), { charset: n, contentDecoder: i, contentDecoders: a, contentTypeDecoder: s, contentTypeDecoders: o };
  }
  t.fromOptions = e;
})(lc || (lc = {}));
class wv extends tp {
  constructor(e, r) {
    super(), this.readable = e, this.options = lc.fromOptions(r), this.buffer = (0, oc.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new Sv.Semaphore(1);
  }
  set partialMessageTimeout(e) {
    this._partialMessageTimeout = e;
  }
  get partialMessageTimeout() {
    return this._partialMessageTimeout;
  }
  listen(e) {
    this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, this.callback = e;
    const r = this.readable.onData((n) => {
      this.onData(n);
    });
    return this.readable.onError((n) => this.fireError(n)), this.readable.onClose(() => this.fireClose()), r;
  }
  onData(e) {
    try {
      for (this.buffer.append(e); ; ) {
        if (this.nextMessageLength === -1) {
          const n = this.buffer.tryReadHeaders(!0);
          if (!n)
            return;
          const i = n.get("content-length");
          if (!i) {
            this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(n))}`));
            return;
          }
          const a = parseInt(i);
          if (isNaN(a)) {
            this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));
            return;
          }
          this.nextMessageLength = a;
        }
        const r = this.buffer.tryReadBody(this.nextMessageLength);
        if (r === void 0) {
          this.setPartialMessageTimer();
          return;
        }
        this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore.lock(async () => {
          const n = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(r) : r, i = await this.options.contentTypeDecoder.decode(n, this.options);
          this.callback(i);
        }).catch((n) => {
          this.fireError(n);
        });
      }
    } catch (r) {
      this.fireError(r);
    }
  }
  clearPartialMessageTimer() {
    this.partialMessageTimer && (this.partialMessageTimer.dispose(), this.partialMessageTimer = void 0);
  }
  setPartialMessageTimer() {
    this.clearPartialMessageTimer(), !(this._partialMessageTimeout <= 0) && (this.partialMessageTimer = (0, oc.default)().timer.setTimeout((e, r) => {
      this.partialMessageTimer = void 0, e === this.messageToken && (this.firePartialMessage({ messageToken: e, waitingTime: r }), this.setPartialMessageTimer());
    }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout));
  }
}
rr.ReadableStreamMessageReader = wv;
var nr = {};
Object.defineProperty(nr, "__esModule", { value: !0 });
nr.WriteableStreamMessageWriter = nr.AbstractMessageWriter = nr.MessageWriter = void 0;
const Vu = qt, Ni = we, bv = ta, qu = Ct, kv = "Content-Length: ", Hu = `\r
`;
var Xu;
(function(t) {
  function e(r) {
    let n = r;
    return n && Ni.func(n.dispose) && Ni.func(n.onClose) && Ni.func(n.onError) && Ni.func(n.write);
  }
  t.is = e;
})(Xu || (nr.MessageWriter = Xu = {}));
class rp {
  constructor() {
    this.errorEmitter = new qu.Emitter(), this.closeEmitter = new qu.Emitter();
  }
  dispose() {
    this.errorEmitter.dispose(), this.closeEmitter.dispose();
  }
  get onError() {
    return this.errorEmitter.event;
  }
  fireError(e, r, n) {
    this.errorEmitter.fire([this.asError(e), r, n]);
  }
  get onClose() {
    return this.closeEmitter.event;
  }
  fireClose() {
    this.closeEmitter.fire(void 0);
  }
  asError(e) {
    return e instanceof Error ? e : new Error(`Writer received error. Reason: ${Ni.string(e.message) ? e.message : "unknown"}`);
  }
}
nr.AbstractMessageWriter = rp;
var cc;
(function(t) {
  function e(r) {
    return r === void 0 || typeof r == "string" ? { charset: r ?? "utf-8", contentTypeEncoder: (0, Vu.default)().applicationJson.encoder } : { charset: r.charset ?? "utf-8", contentEncoder: r.contentEncoder, contentTypeEncoder: r.contentTypeEncoder ?? (0, Vu.default)().applicationJson.encoder };
  }
  t.fromOptions = e;
})(cc || (cc = {}));
class Nv extends rp {
  constructor(e, r) {
    super(), this.writable = e, this.options = cc.fromOptions(r), this.errorCount = 0, this.writeSemaphore = new bv.Semaphore(1), this.writable.onError((n) => this.fireError(n)), this.writable.onClose(() => this.fireClose());
  }
  async write(e) {
    return this.writeSemaphore.lock(async () => this.options.contentTypeEncoder.encode(e, this.options).then((n) => this.options.contentEncoder !== void 0 ? this.options.contentEncoder.encode(n) : n).then((n) => {
      const i = [];
      return i.push(kv, n.byteLength.toString(), Hu), i.push(Hu), this.doWrite(e, i, n);
    }, (n) => {
      throw this.fireError(n), n;
    }));
  }
  async doWrite(e, r, n) {
    try {
      return await this.writable.write(r.join(""), "ascii"), this.writable.write(n);
    } catch (i) {
      return this.handleError(i, e), Promise.reject(i);
    }
  }
  handleError(e, r) {
    this.errorCount++, this.fireError(e, r, this.errorCount);
  }
  end() {
    this.writable.end();
  }
}
nr.WriteableStreamMessageWriter = Nv;
var Ws = {};
Object.defineProperty(Ws, "__esModule", { value: !0 });
Ws.AbstractMessageBuffer = void 0;
const _v = 13, Iv = 10, Pv = `\r
`;
class Ov {
  constructor(e = "utf-8") {
    this._encoding = e, this._chunks = [], this._totalLength = 0;
  }
  get encoding() {
    return this._encoding;
  }
  append(e) {
    const r = typeof e == "string" ? this.fromString(e, this._encoding) : e;
    this._chunks.push(r), this._totalLength += r.byteLength;
  }
  tryReadHeaders(e = !1) {
    if (this._chunks.length === 0)
      return;
    let r = 0, n = 0, i = 0, a = 0;
    e: for (; n < this._chunks.length; ) {
      const c = this._chunks[n];
      for (i = 0; i < c.length; ) {
        switch (c[i]) {
          case _v:
            switch (r) {
              case 0:
                r = 1;
                break;
              case 2:
                r = 3;
                break;
              default:
                r = 0;
            }
            break;
          case Iv:
            switch (r) {
              case 1:
                r = 2;
                break;
              case 3:
                r = 4, i++;
                break e;
              default:
                r = 0;
            }
            break;
          default:
            r = 0;
        }
        i++;
      }
      a += c.byteLength, n++;
    }
    if (r !== 4)
      return;
    const s = this._read(a + i), o = /* @__PURE__ */ new Map(), l = this.toString(s, "ascii").split(Pv);
    if (l.length < 2)
      return o;
    for (let c = 0; c < l.length - 2; c++) {
      const f = l[c], h = f.indexOf(":");
      if (h === -1)
        throw new Error(`Message header must separate key and value using ':'
${f}`);
      const p = f.substr(0, h), g = f.substr(h + 1).trim();
      o.set(e ? p.toLowerCase() : p, g);
    }
    return o;
  }
  tryReadBody(e) {
    if (!(this._totalLength < e))
      return this._read(e);
  }
  get numberOfBytes() {
    return this._totalLength;
  }
  _read(e) {
    if (e === 0)
      return this.emptyBuffer();
    if (e > this._totalLength)
      throw new Error("Cannot read so many bytes!");
    if (this._chunks[0].byteLength === e) {
      const a = this._chunks[0];
      return this._chunks.shift(), this._totalLength -= e, this.asNative(a);
    }
    if (this._chunks[0].byteLength > e) {
      const a = this._chunks[0], s = this.asNative(a, e);
      return this._chunks[0] = a.slice(e), this._totalLength -= e, s;
    }
    const r = this.allocNative(e);
    let n = 0, i = 0;
    for (; e > 0; ) {
      const a = this._chunks[i];
      if (a.byteLength > e) {
        const s = a.slice(0, e);
        r.set(s, n), n += e, this._chunks[i] = a.slice(e), this._totalLength -= e, e -= e;
      } else
        r.set(a, n), n += a.byteLength, this._chunks.shift(), this._totalLength -= a.byteLength, e -= a.byteLength;
    }
    return r;
  }
}
Ws.AbstractMessageBuffer = Ov;
var np = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.createMessageConnection = t.ConnectionOptions = t.MessageStrategy = t.CancellationStrategy = t.CancellationSenderStrategy = t.CancellationReceiverStrategy = t.RequestCancellationReceiverStrategy = t.IdCancellationReceiverStrategy = t.ConnectionStrategy = t.ConnectionError = t.ConnectionErrors = t.LogTraceNotification = t.SetTraceNotification = t.TraceFormat = t.TraceValues = t.Trace = t.NullLogger = t.ProgressType = t.ProgressToken = void 0;
  const e = qt, r = we, n = G, i = Ut, a = Ct, s = dr;
  var o;
  (function(m) {
    m.type = new n.NotificationType("$/cancelRequest");
  })(o || (o = {}));
  var l;
  (function(m) {
    function A(y) {
      return typeof y == "string" || typeof y == "number";
    }
    m.is = A;
  })(l || (t.ProgressToken = l = {}));
  var c;
  (function(m) {
    m.type = new n.NotificationType("$/progress");
  })(c || (c = {}));
  class f {
    constructor() {
    }
  }
  t.ProgressType = f;
  var h;
  (function(m) {
    function A(y) {
      return r.func(y);
    }
    m.is = A;
  })(h || (h = {})), t.NullLogger = Object.freeze({
    error: () => {
    },
    warn: () => {
    },
    info: () => {
    },
    log: () => {
    }
  });
  var p;
  (function(m) {
    m[m.Off = 0] = "Off", m[m.Messages = 1] = "Messages", m[m.Compact = 2] = "Compact", m[m.Verbose = 3] = "Verbose";
  })(p || (t.Trace = p = {}));
  var g;
  (function(m) {
    m.Off = "off", m.Messages = "messages", m.Compact = "compact", m.Verbose = "verbose";
  })(g || (t.TraceValues = g = {})), function(m) {
    function A(T) {
      if (!r.string(T))
        return m.Off;
      switch (T = T.toLowerCase(), T) {
        case "off":
          return m.Off;
        case "messages":
          return m.Messages;
        case "compact":
          return m.Compact;
        case "verbose":
          return m.Verbose;
        default:
          return m.Off;
      }
    }
    m.fromString = A;
    function y(T) {
      switch (T) {
        case m.Off:
          return "off";
        case m.Messages:
          return "messages";
        case m.Compact:
          return "compact";
        case m.Verbose:
          return "verbose";
        default:
          return "off";
      }
    }
    m.toString = y;
  }(p || (t.Trace = p = {}));
  var C;
  (function(m) {
    m.Text = "text", m.JSON = "json";
  })(C || (t.TraceFormat = C = {})), function(m) {
    function A(y) {
      return r.string(y) ? (y = y.toLowerCase(), y === "json" ? m.JSON : m.Text) : m.Text;
    }
    m.fromString = A;
  }(C || (t.TraceFormat = C = {}));
  var b;
  (function(m) {
    m.type = new n.NotificationType("$/setTrace");
  })(b || (t.SetTraceNotification = b = {}));
  var D;
  (function(m) {
    m.type = new n.NotificationType("$/logTrace");
  })(D || (t.LogTraceNotification = D = {}));
  var k;
  (function(m) {
    m[m.Closed = 1] = "Closed", m[m.Disposed = 2] = "Disposed", m[m.AlreadyListening = 3] = "AlreadyListening";
  })(k || (t.ConnectionErrors = k = {}));
  class O extends Error {
    constructor(A, y) {
      super(y), this.code = A, Object.setPrototypeOf(this, O.prototype);
    }
  }
  t.ConnectionError = O;
  var N;
  (function(m) {
    function A(y) {
      const T = y;
      return T && r.func(T.cancelUndispatched);
    }
    m.is = A;
  })(N || (t.ConnectionStrategy = N = {}));
  var L;
  (function(m) {
    function A(y) {
      const T = y;
      return T && (T.kind === void 0 || T.kind === "id") && r.func(T.createCancellationTokenSource) && (T.dispose === void 0 || r.func(T.dispose));
    }
    m.is = A;
  })(L || (t.IdCancellationReceiverStrategy = L = {}));
  var H;
  (function(m) {
    function A(y) {
      const T = y;
      return T && T.kind === "request" && r.func(T.createCancellationTokenSource) && (T.dispose === void 0 || r.func(T.dispose));
    }
    m.is = A;
  })(H || (t.RequestCancellationReceiverStrategy = H = {}));
  var ee;
  (function(m) {
    m.Message = Object.freeze({
      createCancellationTokenSource(y) {
        return new s.CancellationTokenSource();
      }
    });
    function A(y) {
      return L.is(y) || H.is(y);
    }
    m.is = A;
  })(ee || (t.CancellationReceiverStrategy = ee = {}));
  var te;
  (function(m) {
    m.Message = Object.freeze({
      sendCancellation(y, T) {
        return y.sendNotification(o.type, { id: T });
      },
      cleanup(y) {
      }
    });
    function A(y) {
      const T = y;
      return T && r.func(T.sendCancellation) && r.func(T.cleanup);
    }
    m.is = A;
  })(te || (t.CancellationSenderStrategy = te = {}));
  var Ae;
  (function(m) {
    m.Message = Object.freeze({
      receiver: ee.Message,
      sender: te.Message
    });
    function A(y) {
      const T = y;
      return T && ee.is(T.receiver) && te.is(T.sender);
    }
    m.is = A;
  })(Ae || (t.CancellationStrategy = Ae = {}));
  var ke;
  (function(m) {
    function A(y) {
      const T = y;
      return T && r.func(T.handleMessage);
    }
    m.is = A;
  })(ke || (t.MessageStrategy = ke = {}));
  var Re;
  (function(m) {
    function A(y) {
      const T = y;
      return T && (Ae.is(T.cancellationStrategy) || N.is(T.connectionStrategy) || ke.is(T.messageStrategy));
    }
    m.is = A;
  })(Re || (t.ConnectionOptions = Re = {}));
  var w;
  (function(m) {
    m[m.New = 1] = "New", m[m.Listening = 2] = "Listening", m[m.Closed = 3] = "Closed", m[m.Disposed = 4] = "Disposed";
  })(w || (w = {}));
  function E(m, A, y, T) {
    const v = y !== void 0 ? y : t.NullLogger;
    let I = 0, x = 0, P = 0;
    const j = "2.0";
    let F;
    const re = /* @__PURE__ */ new Map();
    let z;
    const Z = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map();
    let he, oe = new i.LinkedMap(), Ne = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Map(), X = p.Off, Je = C.Text, pe, lt = w.New;
    const Mr = new a.Emitter(), Jn = new a.Emitter(), Zn = new a.Emitter(), Qn = new a.Emitter(), ei = new a.Emitter(), ct = T && T.cancellationStrategy ? T.cancellationStrategy : Ae.Message;
    function ti(d) {
      if (d === null)
        throw new Error("Can't send requests with id null since the response can't be correlated.");
      return "req-" + d.toString();
    }
    function ra(d) {
      return d === null ? "res-unknown-" + (++P).toString() : "res-" + d.toString();
    }
    function na() {
      return "not-" + (++x).toString();
    }
    function ia(d, $) {
      n.Message.isRequest($) ? d.set(ti($.id), $) : n.Message.isResponse($) ? d.set(ra($.id), $) : d.set(na(), $);
    }
    function aa(d) {
    }
    function ri() {
      return lt === w.Listening;
    }
    function ni() {
      return lt === w.Closed;
    }
    function It() {
      return lt === w.Disposed;
    }
    function ii() {
      (lt === w.New || lt === w.Listening) && (lt = w.Closed, Jn.fire(void 0));
    }
    function sa(d) {
      Mr.fire([d, void 0, void 0]);
    }
    function oa(d) {
      Mr.fire(d);
    }
    m.onClose(ii), m.onError(sa), A.onClose(ii), A.onError(oa);
    function ai() {
      he || oe.size === 0 || (he = (0, e.default)().timer.setImmediate(() => {
        he = void 0, la();
      }));
    }
    function si(d) {
      n.Message.isRequest(d) ? ua(d) : n.Message.isNotification(d) ? da(d) : n.Message.isResponse(d) ? fa(d) : ha(d);
    }
    function la() {
      if (oe.size === 0)
        return;
      const d = oe.shift();
      try {
        const $ = T == null ? void 0 : T.messageStrategy;
        ke.is($) ? $.handleMessage(d, si) : si(d);
      } finally {
        ai();
      }
    }
    const ca = (d) => {
      try {
        if (n.Message.isNotification(d) && d.method === o.type.method) {
          const $ = d.params.id, _ = ti($), M = oe.get(_);
          if (n.Message.isRequest(M)) {
            const ne = T == null ? void 0 : T.connectionStrategy, ie = ne && ne.cancelUndispatched ? ne.cancelUndispatched(M, aa) : void 0;
            if (ie && (ie.error !== void 0 || ie.result !== void 0)) {
              oe.delete(_), Ce.delete($), ie.id = M.id, mr(ie, d.method, Date.now()), A.write(ie).catch(() => v.error("Sending response for canceled message failed."));
              return;
            }
          }
          const ae = Ce.get($);
          if (ae !== void 0) {
            ae.cancel(), Fr(d);
            return;
          } else
            Oe.add($);
        }
        ia(oe, d);
      } finally {
        ai();
      }
    };
    function ua(d) {
      if (It())
        return;
      function $(q, le, Q) {
        const _e = {
          jsonrpc: j,
          id: d.id
        };
        q instanceof n.ResponseError ? _e.error = q.toJson() : _e.result = q === void 0 ? null : q, mr(_e, le, Q), A.write(_e).catch(() => v.error("Sending response failed."));
      }
      function _(q, le, Q) {
        const _e = {
          jsonrpc: j,
          id: d.id,
          error: q.toJson()
        };
        mr(_e, le, Q), A.write(_e).catch(() => v.error("Sending response failed."));
      }
      function M(q, le, Q) {
        q === void 0 && (q = null);
        const _e = {
          jsonrpc: j,
          id: d.id,
          result: q
        };
        mr(_e, le, Q), A.write(_e).catch(() => v.error("Sending response failed."));
      }
      ga(d);
      const ae = re.get(d.method);
      let ne, ie;
      ae && (ne = ae.type, ie = ae.handler);
      const $e = Date.now();
      if (ie || F) {
        const q = d.id ?? String(Date.now()), le = L.is(ct.receiver) ? ct.receiver.createCancellationTokenSource(q) : ct.receiver.createCancellationTokenSource(d);
        d.id !== null && Oe.has(d.id) && le.cancel(), d.id !== null && Ce.set(q, le);
        try {
          let Q;
          if (ie)
            if (d.params === void 0) {
              if (ne !== void 0 && ne.numberOfParams !== 0) {
                _(new n.ResponseError(n.ErrorCodes.InvalidParams, `Request ${d.method} defines ${ne.numberOfParams} params but received none.`), d.method, $e);
                return;
              }
              Q = ie(le.token);
            } else if (Array.isArray(d.params)) {
              if (ne !== void 0 && ne.parameterStructures === n.ParameterStructures.byName) {
                _(new n.ResponseError(n.ErrorCodes.InvalidParams, `Request ${d.method} defines parameters by name but received parameters by position`), d.method, $e);
                return;
              }
              Q = ie(...d.params, le.token);
            } else {
              if (ne !== void 0 && ne.parameterStructures === n.ParameterStructures.byPosition) {
                _(new n.ResponseError(n.ErrorCodes.InvalidParams, `Request ${d.method} defines parameters by position but received parameters by name`), d.method, $e);
                return;
              }
              Q = ie(d.params, le.token);
            }
          else F && (Q = F(d.method, d.params, le.token));
          const _e = Q;
          Q ? _e.then ? _e.then((Ue) => {
            Ce.delete(q), $(Ue, d.method, $e);
          }, (Ue) => {
            Ce.delete(q), Ue instanceof n.ResponseError ? _(Ue, d.method, $e) : Ue && r.string(Ue.message) ? _(new n.ResponseError(n.ErrorCodes.InternalError, `Request ${d.method} failed with message: ${Ue.message}`), d.method, $e) : _(new n.ResponseError(n.ErrorCodes.InternalError, `Request ${d.method} failed unexpectedly without providing any details.`), d.method, $e);
          }) : (Ce.delete(q), $(Q, d.method, $e)) : (Ce.delete(q), M(Q, d.method, $e));
        } catch (Q) {
          Ce.delete(q), Q instanceof n.ResponseError ? $(Q, d.method, $e) : Q && r.string(Q.message) ? _(new n.ResponseError(n.ErrorCodes.InternalError, `Request ${d.method} failed with message: ${Q.message}`), d.method, $e) : _(new n.ResponseError(n.ErrorCodes.InternalError, `Request ${d.method} failed unexpectedly without providing any details.`), d.method, $e);
        }
      } else
        _(new n.ResponseError(n.ErrorCodes.MethodNotFound, `Unhandled method ${d.method}`), d.method, $e);
    }
    function fa(d) {
      if (!It())
        if (d.id === null)
          d.error ? v.error(`Received response message without id: Error is: 
${JSON.stringify(d.error, void 0, 4)}`) : v.error("Received response message without id. No further error information provided.");
        else {
          const $ = d.id, _ = Ne.get($);
          if (ya(d, _), _ !== void 0) {
            Ne.delete($);
            try {
              if (d.error) {
                const M = d.error;
                _.reject(new n.ResponseError(M.code, M.message, M.data));
              } else if (d.result !== void 0)
                _.resolve(d.result);
              else
                throw new Error("Should never happen.");
            } catch (M) {
              M.message ? v.error(`Response handler '${_.method}' failed with message: ${M.message}`) : v.error(`Response handler '${_.method}' failed unexpectedly.`);
            }
          }
        }
    }
    function da(d) {
      if (It())
        return;
      let $, _;
      if (d.method === o.type.method) {
        const M = d.params.id;
        Oe.delete(M), Fr(d);
        return;
      } else {
        const M = Z.get(d.method);
        M && (_ = M.handler, $ = M.type);
      }
      if (_ || z)
        try {
          if (Fr(d), _)
            if (d.params === void 0)
              $ !== void 0 && $.numberOfParams !== 0 && $.parameterStructures !== n.ParameterStructures.byName && v.error(`Notification ${d.method} defines ${$.numberOfParams} params but received none.`), _();
            else if (Array.isArray(d.params)) {
              const M = d.params;
              d.method === c.type.method && M.length === 2 && l.is(M[0]) ? _({ token: M[0], value: M[1] }) : ($ !== void 0 && ($.parameterStructures === n.ParameterStructures.byName && v.error(`Notification ${d.method} defines parameters by name but received parameters by position`), $.numberOfParams !== d.params.length && v.error(`Notification ${d.method} defines ${$.numberOfParams} params but received ${M.length} arguments`)), _(...M));
            } else
              $ !== void 0 && $.parameterStructures === n.ParameterStructures.byPosition && v.error(`Notification ${d.method} defines parameters by position but received parameters by name`), _(d.params);
          else z && z(d.method, d.params);
        } catch (M) {
          M.message ? v.error(`Notification handler '${d.method}' failed with message: ${M.message}`) : v.error(`Notification handler '${d.method}' failed unexpectedly.`);
        }
      else
        Zn.fire(d);
    }
    function ha(d) {
      if (!d) {
        v.error("Received empty message.");
        return;
      }
      v.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(d, null, 4)}`);
      const $ = d;
      if (r.string($.id) || r.number($.id)) {
        const _ = $.id, M = Ne.get(_);
        M && M.reject(new Error("The received response has neither a result nor an error property."));
      }
    }
    function ut(d) {
      if (d != null)
        switch (X) {
          case p.Verbose:
            return JSON.stringify(d, null, 4);
          case p.Compact:
            return JSON.stringify(d);
          default:
            return;
        }
    }
    function pa(d) {
      if (!(X === p.Off || !pe))
        if (Je === C.Text) {
          let $;
          (X === p.Verbose || X === p.Compact) && d.params && ($ = `Params: ${ut(d.params)}

`), pe.log(`Sending request '${d.method} - (${d.id})'.`, $);
        } else
          Pt("send-request", d);
    }
    function ma(d) {
      if (!(X === p.Off || !pe))
        if (Je === C.Text) {
          let $;
          (X === p.Verbose || X === p.Compact) && (d.params ? $ = `Params: ${ut(d.params)}

` : $ = `No parameters provided.

`), pe.log(`Sending notification '${d.method}'.`, $);
        } else
          Pt("send-notification", d);
    }
    function mr(d, $, _) {
      if (!(X === p.Off || !pe))
        if (Je === C.Text) {
          let M;
          (X === p.Verbose || X === p.Compact) && (d.error && d.error.data ? M = `Error data: ${ut(d.error.data)}

` : d.result ? M = `Result: ${ut(d.result)}

` : d.error === void 0 && (M = `No result returned.

`)), pe.log(`Sending response '${$} - (${d.id})'. Processing request took ${Date.now() - _}ms`, M);
        } else
          Pt("send-response", d);
    }
    function ga(d) {
      if (!(X === p.Off || !pe))
        if (Je === C.Text) {
          let $;
          (X === p.Verbose || X === p.Compact) && d.params && ($ = `Params: ${ut(d.params)}

`), pe.log(`Received request '${d.method} - (${d.id})'.`, $);
        } else
          Pt("receive-request", d);
    }
    function Fr(d) {
      if (!(X === p.Off || !pe || d.method === D.type.method))
        if (Je === C.Text) {
          let $;
          (X === p.Verbose || X === p.Compact) && (d.params ? $ = `Params: ${ut(d.params)}

` : $ = `No parameters provided.

`), pe.log(`Received notification '${d.method}'.`, $);
        } else
          Pt("receive-notification", d);
    }
    function ya(d, $) {
      if (!(X === p.Off || !pe))
        if (Je === C.Text) {
          let _;
          if ((X === p.Verbose || X === p.Compact) && (d.error && d.error.data ? _ = `Error data: ${ut(d.error.data)}

` : d.result ? _ = `Result: ${ut(d.result)}

` : d.error === void 0 && (_ = `No result returned.

`)), $) {
            const M = d.error ? ` Request failed: ${d.error.message} (${d.error.code}).` : "";
            pe.log(`Received response '${$.method} - (${d.id})' in ${Date.now() - $.timerStart}ms.${M}`, _);
          } else
            pe.log(`Received response ${d.id} without active response promise.`, _);
        } else
          Pt("receive-response", d);
    }
    function Pt(d, $) {
      if (!pe || X === p.Off)
        return;
      const _ = {
        isLSPMessage: !0,
        type: d,
        message: $,
        timestamp: Date.now()
      };
      pe.log(_);
    }
    function Jt() {
      if (ni())
        throw new O(k.Closed, "Connection is closed.");
      if (It())
        throw new O(k.Disposed, "Connection is disposed.");
    }
    function Ta() {
      if (ri())
        throw new O(k.AlreadyListening, "Connection is already listening");
    }
    function Ra() {
      if (!ri())
        throw new Error("Call listen() first.");
    }
    function Zt(d) {
      return d === void 0 ? null : d;
    }
    function oi(d) {
      if (d !== null)
        return d;
    }
    function u(d) {
      return d != null && !Array.isArray(d) && typeof d == "object";
    }
    function ve(d, $) {
      switch (d) {
        case n.ParameterStructures.auto:
          return u($) ? oi($) : [Zt($)];
        case n.ParameterStructures.byName:
          if (!u($))
            throw new Error("Received parameters by name but param is not an object literal.");
          return oi($);
        case n.ParameterStructures.byPosition:
          return [Zt($)];
        default:
          throw new Error(`Unknown parameter structure ${d.toString()}`);
      }
    }
    function Ee(d, $) {
      let _;
      const M = d.numberOfParams;
      switch (M) {
        case 0:
          _ = void 0;
          break;
        case 1:
          _ = ve(d.parameterStructures, $[0]);
          break;
        default:
          _ = [];
          for (let ae = 0; ae < $.length && ae < M; ae++)
            _.push(Zt($[ae]));
          if ($.length < M)
            for (let ae = $.length; ae < M; ae++)
              _.push(null);
          break;
      }
      return _;
    }
    const B = {
      sendNotification: (d, ...$) => {
        Jt();
        let _, M;
        if (r.string(d)) {
          _ = d;
          const ne = $[0];
          let ie = 0, $e = n.ParameterStructures.auto;
          n.ParameterStructures.is(ne) && (ie = 1, $e = ne);
          let q = $.length;
          const le = q - ie;
          switch (le) {
            case 0:
              M = void 0;
              break;
            case 1:
              M = ve($e, $[ie]);
              break;
            default:
              if ($e === n.ParameterStructures.byName)
                throw new Error(`Received ${le} parameters for 'by Name' notification parameter structure.`);
              M = $.slice(ie, q).map((Q) => Zt(Q));
              break;
          }
        } else {
          const ne = $;
          _ = d.method, M = Ee(d, ne);
        }
        const ae = {
          jsonrpc: j,
          method: _,
          params: M
        };
        return ma(ae), A.write(ae).catch((ne) => {
          throw v.error("Sending notification failed."), ne;
        });
      },
      onNotification: (d, $) => {
        Jt();
        let _;
        return r.func(d) ? z = d : $ && (r.string(d) ? (_ = d, Z.set(d, { type: void 0, handler: $ })) : (_ = d.method, Z.set(d.method, { type: d, handler: $ }))), {
          dispose: () => {
            _ !== void 0 ? Z.delete(_) : z = void 0;
          }
        };
      },
      onProgress: (d, $, _) => {
        if (Pe.has($))
          throw new Error(`Progress handler for token ${$} already registered`);
        return Pe.set($, _), {
          dispose: () => {
            Pe.delete($);
          }
        };
      },
      sendProgress: (d, $, _) => B.sendNotification(c.type, { token: $, value: _ }),
      onUnhandledProgress: Qn.event,
      sendRequest: (d, ...$) => {
        Jt(), Ra();
        let _, M, ae;
        if (r.string(d)) {
          _ = d;
          const q = $[0], le = $[$.length - 1];
          let Q = 0, _e = n.ParameterStructures.auto;
          n.ParameterStructures.is(q) && (Q = 1, _e = q);
          let Ue = $.length;
          s.CancellationToken.is(le) && (Ue = Ue - 1, ae = le);
          const yt = Ue - Q;
          switch (yt) {
            case 0:
              M = void 0;
              break;
            case 1:
              M = ve(_e, $[Q]);
              break;
            default:
              if (_e === n.ParameterStructures.byName)
                throw new Error(`Received ${yt} parameters for 'by Name' request parameter structure.`);
              M = $.slice(Q, Ue).map((Mp) => Zt(Mp));
              break;
          }
        } else {
          const q = $;
          _ = d.method, M = Ee(d, q);
          const le = d.numberOfParams;
          ae = s.CancellationToken.is(q[le]) ? q[le] : void 0;
        }
        const ne = I++;
        let ie;
        ae && (ie = ae.onCancellationRequested(() => {
          const q = ct.sender.sendCancellation(B, ne);
          return q === void 0 ? (v.log(`Received no promise from cancellation strategy when cancelling id ${ne}`), Promise.resolve()) : q.catch(() => {
            v.log(`Sending cancellation messages for id ${ne} failed`);
          });
        }));
        const $e = {
          jsonrpc: j,
          id: ne,
          method: _,
          params: M
        };
        return pa($e), typeof ct.sender.enableCancellation == "function" && ct.sender.enableCancellation($e), new Promise(async (q, le) => {
          const Q = (yt) => {
            q(yt), ct.sender.cleanup(ne), ie == null || ie.dispose();
          }, _e = (yt) => {
            le(yt), ct.sender.cleanup(ne), ie == null || ie.dispose();
          }, Ue = { method: _, timerStart: Date.now(), resolve: Q, reject: _e };
          try {
            await A.write($e), Ne.set(ne, Ue);
          } catch (yt) {
            throw v.error("Sending request failed."), Ue.reject(new n.ResponseError(n.ErrorCodes.MessageWriteError, yt.message ? yt.message : "Unknown reason")), yt;
          }
        });
      },
      onRequest: (d, $) => {
        Jt();
        let _ = null;
        return h.is(d) ? (_ = void 0, F = d) : r.string(d) ? (_ = null, $ !== void 0 && (_ = d, re.set(d, { handler: $, type: void 0 }))) : $ !== void 0 && (_ = d.method, re.set(d.method, { type: d, handler: $ })), {
          dispose: () => {
            _ !== null && (_ !== void 0 ? re.delete(_) : F = void 0);
          }
        };
      },
      hasPendingResponse: () => Ne.size > 0,
      trace: async (d, $, _) => {
        let M = !1, ae = C.Text;
        _ !== void 0 && (r.boolean(_) ? M = _ : (M = _.sendNotification || !1, ae = _.traceFormat || C.Text)), X = d, Je = ae, X === p.Off ? pe = void 0 : pe = $, M && !ni() && !It() && await B.sendNotification(b.type, { value: p.toString(d) });
      },
      onError: Mr.event,
      onClose: Jn.event,
      onUnhandledNotification: Zn.event,
      onDispose: ei.event,
      end: () => {
        A.end();
      },
      dispose: () => {
        if (It())
          return;
        lt = w.Disposed, ei.fire(void 0);
        const d = new n.ResponseError(n.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
        for (const $ of Ne.values())
          $.reject(d);
        Ne = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Set(), oe = new i.LinkedMap(), r.func(A.dispose) && A.dispose(), r.func(m.dispose) && m.dispose();
      },
      listen: () => {
        Jt(), Ta(), lt = w.Listening, m.listen(ca);
      },
      inspect: () => {
        (0, e.default)().console.log("inspect");
      }
    };
    return B.onNotification(D.type, (d) => {
      if (X === p.Off || !pe)
        return;
      const $ = X === p.Verbose || X === p.Compact;
      pe.log(d.message, $ ? d.verbose : void 0);
    }), B.onNotification(c.type, (d) => {
      const $ = Pe.get(d.token);
      $ ? $(d.value) : Qn.fire(d);
    }), B;
  }
  t.createMessageConnection = E;
})(np);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ProgressType = t.ProgressToken = t.createMessageConnection = t.NullLogger = t.ConnectionOptions = t.ConnectionStrategy = t.AbstractMessageBuffer = t.WriteableStreamMessageWriter = t.AbstractMessageWriter = t.MessageWriter = t.ReadableStreamMessageReader = t.AbstractMessageReader = t.MessageReader = t.SharedArrayReceiverStrategy = t.SharedArraySenderStrategy = t.CancellationToken = t.CancellationTokenSource = t.Emitter = t.Event = t.Disposable = t.LRUCache = t.Touch = t.LinkedMap = t.ParameterStructures = t.NotificationType9 = t.NotificationType8 = t.NotificationType7 = t.NotificationType6 = t.NotificationType5 = t.NotificationType4 = t.NotificationType3 = t.NotificationType2 = t.NotificationType1 = t.NotificationType0 = t.NotificationType = t.ErrorCodes = t.ResponseError = t.RequestType9 = t.RequestType8 = t.RequestType7 = t.RequestType6 = t.RequestType5 = t.RequestType4 = t.RequestType3 = t.RequestType2 = t.RequestType1 = t.RequestType0 = t.RequestType = t.Message = t.RAL = void 0, t.MessageStrategy = t.CancellationStrategy = t.CancellationSenderStrategy = t.CancellationReceiverStrategy = t.ConnectionError = t.ConnectionErrors = t.LogTraceNotification = t.SetTraceNotification = t.TraceFormat = t.TraceValues = t.Trace = void 0;
  const e = G;
  Object.defineProperty(t, "Message", { enumerable: !0, get: function() {
    return e.Message;
  } }), Object.defineProperty(t, "RequestType", { enumerable: !0, get: function() {
    return e.RequestType;
  } }), Object.defineProperty(t, "RequestType0", { enumerable: !0, get: function() {
    return e.RequestType0;
  } }), Object.defineProperty(t, "RequestType1", { enumerable: !0, get: function() {
    return e.RequestType1;
  } }), Object.defineProperty(t, "RequestType2", { enumerable: !0, get: function() {
    return e.RequestType2;
  } }), Object.defineProperty(t, "RequestType3", { enumerable: !0, get: function() {
    return e.RequestType3;
  } }), Object.defineProperty(t, "RequestType4", { enumerable: !0, get: function() {
    return e.RequestType4;
  } }), Object.defineProperty(t, "RequestType5", { enumerable: !0, get: function() {
    return e.RequestType5;
  } }), Object.defineProperty(t, "RequestType6", { enumerable: !0, get: function() {
    return e.RequestType6;
  } }), Object.defineProperty(t, "RequestType7", { enumerable: !0, get: function() {
    return e.RequestType7;
  } }), Object.defineProperty(t, "RequestType8", { enumerable: !0, get: function() {
    return e.RequestType8;
  } }), Object.defineProperty(t, "RequestType9", { enumerable: !0, get: function() {
    return e.RequestType9;
  } }), Object.defineProperty(t, "ResponseError", { enumerable: !0, get: function() {
    return e.ResponseError;
  } }), Object.defineProperty(t, "ErrorCodes", { enumerable: !0, get: function() {
    return e.ErrorCodes;
  } }), Object.defineProperty(t, "NotificationType", { enumerable: !0, get: function() {
    return e.NotificationType;
  } }), Object.defineProperty(t, "NotificationType0", { enumerable: !0, get: function() {
    return e.NotificationType0;
  } }), Object.defineProperty(t, "NotificationType1", { enumerable: !0, get: function() {
    return e.NotificationType1;
  } }), Object.defineProperty(t, "NotificationType2", { enumerable: !0, get: function() {
    return e.NotificationType2;
  } }), Object.defineProperty(t, "NotificationType3", { enumerable: !0, get: function() {
    return e.NotificationType3;
  } }), Object.defineProperty(t, "NotificationType4", { enumerable: !0, get: function() {
    return e.NotificationType4;
  } }), Object.defineProperty(t, "NotificationType5", { enumerable: !0, get: function() {
    return e.NotificationType5;
  } }), Object.defineProperty(t, "NotificationType6", { enumerable: !0, get: function() {
    return e.NotificationType6;
  } }), Object.defineProperty(t, "NotificationType7", { enumerable: !0, get: function() {
    return e.NotificationType7;
  } }), Object.defineProperty(t, "NotificationType8", { enumerable: !0, get: function() {
    return e.NotificationType8;
  } }), Object.defineProperty(t, "NotificationType9", { enumerable: !0, get: function() {
    return e.NotificationType9;
  } }), Object.defineProperty(t, "ParameterStructures", { enumerable: !0, get: function() {
    return e.ParameterStructures;
  } });
  const r = Ut;
  Object.defineProperty(t, "LinkedMap", { enumerable: !0, get: function() {
    return r.LinkedMap;
  } }), Object.defineProperty(t, "LRUCache", { enumerable: !0, get: function() {
    return r.LRUCache;
  } }), Object.defineProperty(t, "Touch", { enumerable: !0, get: function() {
    return r.Touch;
  } });
  const n = Bs;
  Object.defineProperty(t, "Disposable", { enumerable: !0, get: function() {
    return n.Disposable;
  } });
  const i = Ct;
  Object.defineProperty(t, "Event", { enumerable: !0, get: function() {
    return i.Event;
  } }), Object.defineProperty(t, "Emitter", { enumerable: !0, get: function() {
    return i.Emitter;
  } });
  const a = dr;
  Object.defineProperty(t, "CancellationTokenSource", { enumerable: !0, get: function() {
    return a.CancellationTokenSource;
  } }), Object.defineProperty(t, "CancellationToken", { enumerable: !0, get: function() {
    return a.CancellationToken;
  } });
  const s = xn;
  Object.defineProperty(t, "SharedArraySenderStrategy", { enumerable: !0, get: function() {
    return s.SharedArraySenderStrategy;
  } }), Object.defineProperty(t, "SharedArrayReceiverStrategy", { enumerable: !0, get: function() {
    return s.SharedArrayReceiverStrategy;
  } });
  const o = rr;
  Object.defineProperty(t, "MessageReader", { enumerable: !0, get: function() {
    return o.MessageReader;
  } }), Object.defineProperty(t, "AbstractMessageReader", { enumerable: !0, get: function() {
    return o.AbstractMessageReader;
  } }), Object.defineProperty(t, "ReadableStreamMessageReader", { enumerable: !0, get: function() {
    return o.ReadableStreamMessageReader;
  } });
  const l = nr;
  Object.defineProperty(t, "MessageWriter", { enumerable: !0, get: function() {
    return l.MessageWriter;
  } }), Object.defineProperty(t, "AbstractMessageWriter", { enumerable: !0, get: function() {
    return l.AbstractMessageWriter;
  } }), Object.defineProperty(t, "WriteableStreamMessageWriter", { enumerable: !0, get: function() {
    return l.WriteableStreamMessageWriter;
  } });
  const c = Ws;
  Object.defineProperty(t, "AbstractMessageBuffer", { enumerable: !0, get: function() {
    return c.AbstractMessageBuffer;
  } });
  const f = np;
  Object.defineProperty(t, "ConnectionStrategy", { enumerable: !0, get: function() {
    return f.ConnectionStrategy;
  } }), Object.defineProperty(t, "ConnectionOptions", { enumerable: !0, get: function() {
    return f.ConnectionOptions;
  } }), Object.defineProperty(t, "NullLogger", { enumerable: !0, get: function() {
    return f.NullLogger;
  } }), Object.defineProperty(t, "createMessageConnection", { enumerable: !0, get: function() {
    return f.createMessageConnection;
  } }), Object.defineProperty(t, "ProgressToken", { enumerable: !0, get: function() {
    return f.ProgressToken;
  } }), Object.defineProperty(t, "ProgressType", { enumerable: !0, get: function() {
    return f.ProgressType;
  } }), Object.defineProperty(t, "Trace", { enumerable: !0, get: function() {
    return f.Trace;
  } }), Object.defineProperty(t, "TraceValues", { enumerable: !0, get: function() {
    return f.TraceValues;
  } }), Object.defineProperty(t, "TraceFormat", { enumerable: !0, get: function() {
    return f.TraceFormat;
  } }), Object.defineProperty(t, "SetTraceNotification", { enumerable: !0, get: function() {
    return f.SetTraceNotification;
  } }), Object.defineProperty(t, "LogTraceNotification", { enumerable: !0, get: function() {
    return f.LogTraceNotification;
  } }), Object.defineProperty(t, "ConnectionErrors", { enumerable: !0, get: function() {
    return f.ConnectionErrors;
  } }), Object.defineProperty(t, "ConnectionError", { enumerable: !0, get: function() {
    return f.ConnectionError;
  } }), Object.defineProperty(t, "CancellationReceiverStrategy", { enumerable: !0, get: function() {
    return f.CancellationReceiverStrategy;
  } }), Object.defineProperty(t, "CancellationSenderStrategy", { enumerable: !0, get: function() {
    return f.CancellationSenderStrategy;
  } }), Object.defineProperty(t, "CancellationStrategy", { enumerable: !0, get: function() {
    return f.CancellationStrategy;
  } }), Object.defineProperty(t, "MessageStrategy", { enumerable: !0, get: function() {
    return f.MessageStrategy;
  } });
  const h = qt;
  t.RAL = h.default;
})($s);
Object.defineProperty(Kc, "__esModule", { value: !0 });
const $t = $s;
class Ks extends $t.AbstractMessageBuffer {
  constructor(e = "utf-8") {
    super(e), this.asciiDecoder = new TextDecoder("ascii");
  }
  emptyBuffer() {
    return Ks.emptyBuffer;
  }
  fromString(e, r) {
    return new TextEncoder().encode(e);
  }
  toString(e, r) {
    return r === "ascii" ? this.asciiDecoder.decode(e) : new TextDecoder(r).decode(e);
  }
  asNative(e, r) {
    return r === void 0 ? e : e.slice(0, r);
  }
  allocNative(e) {
    return new Uint8Array(e);
  }
}
Ks.emptyBuffer = new Uint8Array(0);
class Lv {
  constructor(e) {
    this.socket = e, this._onData = new $t.Emitter(), this._messageListener = (r) => {
      r.data.arrayBuffer().then((i) => {
        this._onData.fire(new Uint8Array(i));
      }, () => {
        (0, $t.RAL)().console.error("Converting blob to array buffer failed.");
      });
    }, this.socket.addEventListener("message", this._messageListener);
  }
  onClose(e) {
    return this.socket.addEventListener("close", e), $t.Disposable.create(() => this.socket.removeEventListener("close", e));
  }
  onError(e) {
    return this.socket.addEventListener("error", e), $t.Disposable.create(() => this.socket.removeEventListener("error", e));
  }
  onEnd(e) {
    return this.socket.addEventListener("end", e), $t.Disposable.create(() => this.socket.removeEventListener("end", e));
  }
  onData(e) {
    return this._onData.event(e);
  }
}
class xv {
  constructor(e) {
    this.socket = e;
  }
  onClose(e) {
    return this.socket.addEventListener("close", e), $t.Disposable.create(() => this.socket.removeEventListener("close", e));
  }
  onError(e) {
    return this.socket.addEventListener("error", e), $t.Disposable.create(() => this.socket.removeEventListener("error", e));
  }
  onEnd(e) {
    return this.socket.addEventListener("end", e), $t.Disposable.create(() => this.socket.removeEventListener("end", e));
  }
  write(e, r) {
    if (typeof e == "string") {
      if (r !== void 0 && r !== "utf-8")
        throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);
      this.socket.send(e);
    } else
      this.socket.send(e);
    return Promise.resolve();
  }
  end() {
    this.socket.close();
  }
}
const Dv = new TextEncoder(), ip = Object.freeze({
  messageBuffer: Object.freeze({
    create: (t) => new Ks(t)
  }),
  applicationJson: Object.freeze({
    encoder: Object.freeze({
      name: "application/json",
      encode: (t, e) => {
        if (e.charset !== "utf-8")
          throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);
        return Promise.resolve(Dv.encode(JSON.stringify(t, void 0, 0)));
      }
    }),
    decoder: Object.freeze({
      name: "application/json",
      decode: (t, e) => {
        if (!(t instanceof Uint8Array))
          throw new Error("In a Browser environments only Uint8Arrays are supported.");
        return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)));
      }
    })
  }),
  stream: Object.freeze({
    asReadableStream: (t) => new Lv(t),
    asWritableStream: (t) => new xv(t)
  }),
  console,
  timer: Object.freeze({
    setTimeout(t, e, ...r) {
      const n = setTimeout(t, e, ...r);
      return { dispose: () => clearTimeout(n) };
    },
    setImmediate(t, ...e) {
      const r = setTimeout(t, 0, ...e);
      return { dispose: () => clearTimeout(r) };
    },
    setInterval(t, e, ...r) {
      const n = setInterval(t, e, ...r);
      return { dispose: () => clearInterval(n) };
    }
  })
});
function uc() {
  return ip;
}
(function(t) {
  function e() {
    $t.RAL.install(ip);
  }
  t.install = e;
})(uc || (uc = {}));
Kc.default = uc;
(function(t) {
  var e = at && at.__createBinding || (Object.create ? function(l, c, f, h) {
    h === void 0 && (h = f);
    var p = Object.getOwnPropertyDescriptor(c, f);
    (!p || ("get" in p ? !c.__esModule : p.writable || p.configurable)) && (p = { enumerable: !0, get: function() {
      return c[f];
    } }), Object.defineProperty(l, h, p);
  } : function(l, c, f, h) {
    h === void 0 && (h = f), l[h] = c[f];
  }), r = at && at.__exportStar || function(l, c) {
    for (var f in l) f !== "default" && !Object.prototype.hasOwnProperty.call(c, f) && e(c, l, f);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.createMessageConnection = t.BrowserMessageWriter = t.BrowserMessageReader = void 0, Kc.default.install();
  const i = $s;
  r($s, t);
  class a extends i.AbstractMessageReader {
    constructor(c) {
      super(), this._onData = new i.Emitter(), this._messageListener = (f) => {
        this._onData.fire(f.data);
      }, c.addEventListener("error", (f) => this.fireError(f)), c.onmessage = this._messageListener;
    }
    listen(c) {
      return this._onData.event(c);
    }
  }
  t.BrowserMessageReader = a;
  class s extends i.AbstractMessageWriter {
    constructor(c) {
      super(), this.port = c, this.errorCount = 0, c.addEventListener("error", (f) => this.fireError(f));
    }
    write(c) {
      try {
        return this.port.postMessage(c), Promise.resolve();
      } catch (f) {
        return this.handleError(f, c), Promise.reject(f);
      }
    }
    handleError(c, f) {
      this.errorCount++, this.fireError(c, f, this.errorCount);
    }
    end() {
    }
  }
  t.BrowserMessageWriter = s;
  function o(l, c, f, h) {
    return f === void 0 && (f = i.NullLogger), i.ConnectionStrategy.is(h) && (h = { connectionStrategy: h }), (0, i.createMessageConnection)(l, c, f, h);
  }
  t.createMessageConnection = o;
})(Dr);
var Yu = Dr, ap = {};
const qc = /* @__PURE__ */ qp(BT);
var K = {};
Object.defineProperty(K, "__esModule", { value: !0 });
K.ProtocolNotificationType = K.ProtocolNotificationType0 = K.ProtocolRequestType = K.ProtocolRequestType0 = K.RegistrationType = K.MessageDirection = void 0;
const Dn = Dr;
var Ju;
(function(t) {
  t.clientToServer = "clientToServer", t.serverToClient = "serverToClient", t.both = "both";
})(Ju || (K.MessageDirection = Ju = {}));
class Mv {
  constructor(e) {
    this.method = e;
  }
}
K.RegistrationType = Mv;
class Fv extends Dn.RequestType0 {
  constructor(e) {
    super(e);
  }
}
K.ProtocolRequestType0 = Fv;
class Gv extends Dn.RequestType {
  constructor(e) {
    super(e, Dn.ParameterStructures.byName);
  }
}
K.ProtocolRequestType = Gv;
class jv extends Dn.NotificationType0 {
  constructor(e) {
    super(e);
  }
}
K.ProtocolNotificationType0 = jv;
class zv extends Dn.NotificationType {
  constructor(e) {
    super(e, Dn.ParameterStructures.byName);
  }
}
K.ProtocolNotificationType = zv;
var sp = {}, ge = {};
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.objectLiteral = ge.typedArray = ge.stringArray = ge.array = ge.func = ge.error = ge.number = ge.string = ge.boolean = void 0;
function Uv(t) {
  return t === !0 || t === !1;
}
ge.boolean = Uv;
function op(t) {
  return typeof t == "string" || t instanceof String;
}
ge.string = op;
function Bv(t) {
  return typeof t == "number" || t instanceof Number;
}
ge.number = Bv;
function Wv(t) {
  return t instanceof Error;
}
ge.error = Wv;
function Kv(t) {
  return typeof t == "function";
}
ge.func = Kv;
function lp(t) {
  return Array.isArray(t);
}
ge.array = lp;
function Vv(t) {
  return lp(t) && t.every((e) => op(e));
}
ge.stringArray = Vv;
function qv(t, e) {
  return Array.isArray(t) && t.every(e);
}
ge.typedArray = qv;
function Hv(t) {
  return t !== null && typeof t == "object";
}
ge.objectLiteral = Hv;
var Vs = {};
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.ImplementationRequest = void 0;
const Zu = K;
var Qu;
(function(t) {
  t.method = "textDocument/implementation", t.messageDirection = Zu.MessageDirection.clientToServer, t.type = new Zu.ProtocolRequestType(t.method);
})(Qu || (Vs.ImplementationRequest = Qu = {}));
var qs = {};
Object.defineProperty(qs, "__esModule", { value: !0 });
qs.TypeDefinitionRequest = void 0;
const ef = K;
var tf;
(function(t) {
  t.method = "textDocument/typeDefinition", t.messageDirection = ef.MessageDirection.clientToServer, t.type = new ef.ProtocolRequestType(t.method);
})(tf || (qs.TypeDefinitionRequest = tf = {}));
var Mn = {};
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.DidChangeWorkspaceFoldersNotification = Mn.WorkspaceFoldersRequest = void 0;
const As = K;
var rf;
(function(t) {
  t.method = "workspace/workspaceFolders", t.messageDirection = As.MessageDirection.serverToClient, t.type = new As.ProtocolRequestType0(t.method);
})(rf || (Mn.WorkspaceFoldersRequest = rf = {}));
var nf;
(function(t) {
  t.method = "workspace/didChangeWorkspaceFolders", t.messageDirection = As.MessageDirection.clientToServer, t.type = new As.ProtocolNotificationType(t.method);
})(nf || (Mn.DidChangeWorkspaceFoldersNotification = nf = {}));
var Hs = {};
Object.defineProperty(Hs, "__esModule", { value: !0 });
Hs.ConfigurationRequest = void 0;
const af = K;
var sf;
(function(t) {
  t.method = "workspace/configuration", t.messageDirection = af.MessageDirection.serverToClient, t.type = new af.ProtocolRequestType(t.method);
})(sf || (Hs.ConfigurationRequest = sf = {}));
var Fn = {};
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.ColorPresentationRequest = Fn.DocumentColorRequest = void 0;
const Cs = K;
var of;
(function(t) {
  t.method = "textDocument/documentColor", t.messageDirection = Cs.MessageDirection.clientToServer, t.type = new Cs.ProtocolRequestType(t.method);
})(of || (Fn.DocumentColorRequest = of = {}));
var lf;
(function(t) {
  t.method = "textDocument/colorPresentation", t.messageDirection = Cs.MessageDirection.clientToServer, t.type = new Cs.ProtocolRequestType(t.method);
})(lf || (Fn.ColorPresentationRequest = lf = {}));
var Gn = {};
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.FoldingRangeRefreshRequest = Gn.FoldingRangeRequest = void 0;
const Ss = K;
var cf;
(function(t) {
  t.method = "textDocument/foldingRange", t.messageDirection = Ss.MessageDirection.clientToServer, t.type = new Ss.ProtocolRequestType(t.method);
})(cf || (Gn.FoldingRangeRequest = cf = {}));
var uf;
(function(t) {
  t.method = "workspace/foldingRange/refresh", t.messageDirection = Ss.MessageDirection.serverToClient, t.type = new Ss.ProtocolRequestType0(t.method);
})(uf || (Gn.FoldingRangeRefreshRequest = uf = {}));
var Xs = {};
Object.defineProperty(Xs, "__esModule", { value: !0 });
Xs.DeclarationRequest = void 0;
const ff = K;
var df;
(function(t) {
  t.method = "textDocument/declaration", t.messageDirection = ff.MessageDirection.clientToServer, t.type = new ff.ProtocolRequestType(t.method);
})(df || (Xs.DeclarationRequest = df = {}));
var Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
Ys.SelectionRangeRequest = void 0;
const hf = K;
var pf;
(function(t) {
  t.method = "textDocument/selectionRange", t.messageDirection = hf.MessageDirection.clientToServer, t.type = new hf.ProtocolRequestType(t.method);
})(pf || (Ys.SelectionRangeRequest = pf = {}));
var ir = {};
Object.defineProperty(ir, "__esModule", { value: !0 });
ir.WorkDoneProgressCancelNotification = ir.WorkDoneProgressCreateRequest = ir.WorkDoneProgress = void 0;
const Xv = Dr, ws = K;
var mf;
(function(t) {
  t.type = new Xv.ProgressType();
  function e(r) {
    return r === t.type;
  }
  t.is = e;
})(mf || (ir.WorkDoneProgress = mf = {}));
var gf;
(function(t) {
  t.method = "window/workDoneProgress/create", t.messageDirection = ws.MessageDirection.serverToClient, t.type = new ws.ProtocolRequestType(t.method);
})(gf || (ir.WorkDoneProgressCreateRequest = gf = {}));
var yf;
(function(t) {
  t.method = "window/workDoneProgress/cancel", t.messageDirection = ws.MessageDirection.clientToServer, t.type = new ws.ProtocolNotificationType(t.method);
})(yf || (ir.WorkDoneProgressCancelNotification = yf = {}));
var ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.CallHierarchyOutgoingCallsRequest = ar.CallHierarchyIncomingCallsRequest = ar.CallHierarchyPrepareRequest = void 0;
const jn = K;
var Tf;
(function(t) {
  t.method = "textDocument/prepareCallHierarchy", t.messageDirection = jn.MessageDirection.clientToServer, t.type = new jn.ProtocolRequestType(t.method);
})(Tf || (ar.CallHierarchyPrepareRequest = Tf = {}));
var Rf;
(function(t) {
  t.method = "callHierarchy/incomingCalls", t.messageDirection = jn.MessageDirection.clientToServer, t.type = new jn.ProtocolRequestType(t.method);
})(Rf || (ar.CallHierarchyIncomingCallsRequest = Rf = {}));
var vf;
(function(t) {
  t.method = "callHierarchy/outgoingCalls", t.messageDirection = jn.MessageDirection.clientToServer, t.type = new jn.ProtocolRequestType(t.method);
})(vf || (ar.CallHierarchyOutgoingCallsRequest = vf = {}));
var Ve = {};
Object.defineProperty(Ve, "__esModule", { value: !0 });
Ve.SemanticTokensRefreshRequest = Ve.SemanticTokensRangeRequest = Ve.SemanticTokensDeltaRequest = Ve.SemanticTokensRequest = Ve.SemanticTokensRegistrationType = Ve.TokenFormat = void 0;
const Wt = K;
var Ef;
(function(t) {
  t.Relative = "relative";
})(Ef || (Ve.TokenFormat = Ef = {}));
var Wi;
(function(t) {
  t.method = "textDocument/semanticTokens", t.type = new Wt.RegistrationType(t.method);
})(Wi || (Ve.SemanticTokensRegistrationType = Wi = {}));
var $f;
(function(t) {
  t.method = "textDocument/semanticTokens/full", t.messageDirection = Wt.MessageDirection.clientToServer, t.type = new Wt.ProtocolRequestType(t.method), t.registrationMethod = Wi.method;
})($f || (Ve.SemanticTokensRequest = $f = {}));
var Af;
(function(t) {
  t.method = "textDocument/semanticTokens/full/delta", t.messageDirection = Wt.MessageDirection.clientToServer, t.type = new Wt.ProtocolRequestType(t.method), t.registrationMethod = Wi.method;
})(Af || (Ve.SemanticTokensDeltaRequest = Af = {}));
var Cf;
(function(t) {
  t.method = "textDocument/semanticTokens/range", t.messageDirection = Wt.MessageDirection.clientToServer, t.type = new Wt.ProtocolRequestType(t.method), t.registrationMethod = Wi.method;
})(Cf || (Ve.SemanticTokensRangeRequest = Cf = {}));
var Sf;
(function(t) {
  t.method = "workspace/semanticTokens/refresh", t.messageDirection = Wt.MessageDirection.serverToClient, t.type = new Wt.ProtocolRequestType0(t.method);
})(Sf || (Ve.SemanticTokensRefreshRequest = Sf = {}));
var Js = {};
Object.defineProperty(Js, "__esModule", { value: !0 });
Js.ShowDocumentRequest = void 0;
const wf = K;
var bf;
(function(t) {
  t.method = "window/showDocument", t.messageDirection = wf.MessageDirection.serverToClient, t.type = new wf.ProtocolRequestType(t.method);
})(bf || (Js.ShowDocumentRequest = bf = {}));
var Zs = {};
Object.defineProperty(Zs, "__esModule", { value: !0 });
Zs.LinkedEditingRangeRequest = void 0;
const kf = K;
var Nf;
(function(t) {
  t.method = "textDocument/linkedEditingRange", t.messageDirection = kf.MessageDirection.clientToServer, t.type = new kf.ProtocolRequestType(t.method);
})(Nf || (Zs.LinkedEditingRangeRequest = Nf = {}));
var Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.WillDeleteFilesRequest = Ge.DidDeleteFilesNotification = Ge.DidRenameFilesNotification = Ge.WillRenameFilesRequest = Ge.DidCreateFilesNotification = Ge.WillCreateFilesRequest = Ge.FileOperationPatternKind = void 0;
const st = K;
var _f;
(function(t) {
  t.file = "file", t.folder = "folder";
})(_f || (Ge.FileOperationPatternKind = _f = {}));
var If;
(function(t) {
  t.method = "workspace/willCreateFiles", t.messageDirection = st.MessageDirection.clientToServer, t.type = new st.ProtocolRequestType(t.method);
})(If || (Ge.WillCreateFilesRequest = If = {}));
var Pf;
(function(t) {
  t.method = "workspace/didCreateFiles", t.messageDirection = st.MessageDirection.clientToServer, t.type = new st.ProtocolNotificationType(t.method);
})(Pf || (Ge.DidCreateFilesNotification = Pf = {}));
var Of;
(function(t) {
  t.method = "workspace/willRenameFiles", t.messageDirection = st.MessageDirection.clientToServer, t.type = new st.ProtocolRequestType(t.method);
})(Of || (Ge.WillRenameFilesRequest = Of = {}));
var Lf;
(function(t) {
  t.method = "workspace/didRenameFiles", t.messageDirection = st.MessageDirection.clientToServer, t.type = new st.ProtocolNotificationType(t.method);
})(Lf || (Ge.DidRenameFilesNotification = Lf = {}));
var xf;
(function(t) {
  t.method = "workspace/didDeleteFiles", t.messageDirection = st.MessageDirection.clientToServer, t.type = new st.ProtocolNotificationType(t.method);
})(xf || (Ge.DidDeleteFilesNotification = xf = {}));
var Df;
(function(t) {
  t.method = "workspace/willDeleteFiles", t.messageDirection = st.MessageDirection.clientToServer, t.type = new st.ProtocolRequestType(t.method);
})(Df || (Ge.WillDeleteFilesRequest = Df = {}));
var sr = {};
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.MonikerRequest = sr.MonikerKind = sr.UniquenessLevel = void 0;
const Mf = K;
var Ff;
(function(t) {
  t.document = "document", t.project = "project", t.group = "group", t.scheme = "scheme", t.global = "global";
})(Ff || (sr.UniquenessLevel = Ff = {}));
var Gf;
(function(t) {
  t.$import = "import", t.$export = "export", t.local = "local";
})(Gf || (sr.MonikerKind = Gf = {}));
var jf;
(function(t) {
  t.method = "textDocument/moniker", t.messageDirection = Mf.MessageDirection.clientToServer, t.type = new Mf.ProtocolRequestType(t.method);
})(jf || (sr.MonikerRequest = jf = {}));
var or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
or.TypeHierarchySubtypesRequest = or.TypeHierarchySupertypesRequest = or.TypeHierarchyPrepareRequest = void 0;
const zn = K;
var zf;
(function(t) {
  t.method = "textDocument/prepareTypeHierarchy", t.messageDirection = zn.MessageDirection.clientToServer, t.type = new zn.ProtocolRequestType(t.method);
})(zf || (or.TypeHierarchyPrepareRequest = zf = {}));
var Uf;
(function(t) {
  t.method = "typeHierarchy/supertypes", t.messageDirection = zn.MessageDirection.clientToServer, t.type = new zn.ProtocolRequestType(t.method);
})(Uf || (or.TypeHierarchySupertypesRequest = Uf = {}));
var Bf;
(function(t) {
  t.method = "typeHierarchy/subtypes", t.messageDirection = zn.MessageDirection.clientToServer, t.type = new zn.ProtocolRequestType(t.method);
})(Bf || (or.TypeHierarchySubtypesRequest = Bf = {}));
var Un = {};
Object.defineProperty(Un, "__esModule", { value: !0 });
Un.InlineValueRefreshRequest = Un.InlineValueRequest = void 0;
const bs = K;
var Wf;
(function(t) {
  t.method = "textDocument/inlineValue", t.messageDirection = bs.MessageDirection.clientToServer, t.type = new bs.ProtocolRequestType(t.method);
})(Wf || (Un.InlineValueRequest = Wf = {}));
var Kf;
(function(t) {
  t.method = "workspace/inlineValue/refresh", t.messageDirection = bs.MessageDirection.serverToClient, t.type = new bs.ProtocolRequestType0(t.method);
})(Kf || (Un.InlineValueRefreshRequest = Kf = {}));
var lr = {};
Object.defineProperty(lr, "__esModule", { value: !0 });
lr.InlayHintRefreshRequest = lr.InlayHintResolveRequest = lr.InlayHintRequest = void 0;
const Bn = K;
var Vf;
(function(t) {
  t.method = "textDocument/inlayHint", t.messageDirection = Bn.MessageDirection.clientToServer, t.type = new Bn.ProtocolRequestType(t.method);
})(Vf || (lr.InlayHintRequest = Vf = {}));
var qf;
(function(t) {
  t.method = "inlayHint/resolve", t.messageDirection = Bn.MessageDirection.clientToServer, t.type = new Bn.ProtocolRequestType(t.method);
})(qf || (lr.InlayHintResolveRequest = qf = {}));
var Hf;
(function(t) {
  t.method = "workspace/inlayHint/refresh", t.messageDirection = Bn.MessageDirection.serverToClient, t.type = new Bn.ProtocolRequestType0(t.method);
})(Hf || (lr.InlayHintRefreshRequest = Hf = {}));
var it = {};
Object.defineProperty(it, "__esModule", { value: !0 });
it.DiagnosticRefreshRequest = it.WorkspaceDiagnosticRequest = it.DocumentDiagnosticRequest = it.DocumentDiagnosticReportKind = it.DiagnosticServerCancellationData = void 0;
const cp = Dr, Yv = ge, Wn = K;
var Xf;
(function(t) {
  function e(r) {
    const n = r;
    return n && Yv.boolean(n.retriggerRequest);
  }
  t.is = e;
})(Xf || (it.DiagnosticServerCancellationData = Xf = {}));
var Yf;
(function(t) {
  t.Full = "full", t.Unchanged = "unchanged";
})(Yf || (it.DocumentDiagnosticReportKind = Yf = {}));
var Jf;
(function(t) {
  t.method = "textDocument/diagnostic", t.messageDirection = Wn.MessageDirection.clientToServer, t.type = new Wn.ProtocolRequestType(t.method), t.partialResult = new cp.ProgressType();
})(Jf || (it.DocumentDiagnosticRequest = Jf = {}));
var Zf;
(function(t) {
  t.method = "workspace/diagnostic", t.messageDirection = Wn.MessageDirection.clientToServer, t.type = new Wn.ProtocolRequestType(t.method), t.partialResult = new cp.ProgressType();
})(Zf || (it.WorkspaceDiagnosticRequest = Zf = {}));
var Qf;
(function(t) {
  t.method = "workspace/diagnostic/refresh", t.messageDirection = Wn.MessageDirection.serverToClient, t.type = new Wn.ProtocolRequestType0(t.method);
})(Qf || (it.DiagnosticRefreshRequest = Qf = {}));
var me = {};
Object.defineProperty(me, "__esModule", { value: !0 });
me.DidCloseNotebookDocumentNotification = me.DidSaveNotebookDocumentNotification = me.DidChangeNotebookDocumentNotification = me.NotebookCellArrayChange = me.DidOpenNotebookDocumentNotification = me.NotebookDocumentSyncRegistrationType = me.NotebookDocument = me.NotebookCell = me.ExecutionSummary = me.NotebookCellKind = void 0;
const Ki = qc, mt = ge, St = K;
var fc;
(function(t) {
  t.Markup = 1, t.Code = 2;
  function e(r) {
    return r === 1 || r === 2;
  }
  t.is = e;
})(fc || (me.NotebookCellKind = fc = {}));
var dc;
(function(t) {
  function e(i, a) {
    const s = { executionOrder: i };
    return (a === !0 || a === !1) && (s.success = a), s;
  }
  t.create = e;
  function r(i) {
    const a = i;
    return mt.objectLiteral(a) && Ki.uinteger.is(a.executionOrder) && (a.success === void 0 || mt.boolean(a.success));
  }
  t.is = r;
  function n(i, a) {
    return i === a ? !0 : i == null || a === null || a === void 0 ? !1 : i.executionOrder === a.executionOrder && i.success === a.success;
  }
  t.equals = n;
})(dc || (me.ExecutionSummary = dc = {}));
var ks;
(function(t) {
  function e(a, s) {
    return { kind: a, document: s };
  }
  t.create = e;
  function r(a) {
    const s = a;
    return mt.objectLiteral(s) && fc.is(s.kind) && Ki.DocumentUri.is(s.document) && (s.metadata === void 0 || mt.objectLiteral(s.metadata));
  }
  t.is = r;
  function n(a, s) {
    const o = /* @__PURE__ */ new Set();
    return a.document !== s.document && o.add("document"), a.kind !== s.kind && o.add("kind"), a.executionSummary !== s.executionSummary && o.add("executionSummary"), (a.metadata !== void 0 || s.metadata !== void 0) && !i(a.metadata, s.metadata) && o.add("metadata"), (a.executionSummary !== void 0 || s.executionSummary !== void 0) && !dc.equals(a.executionSummary, s.executionSummary) && o.add("executionSummary"), o;
  }
  t.diff = n;
  function i(a, s) {
    if (a === s)
      return !0;
    if (a == null || s === null || s === void 0 || typeof a != typeof s || typeof a != "object")
      return !1;
    const o = Array.isArray(a), l = Array.isArray(s);
    if (o !== l)
      return !1;
    if (o && l) {
      if (a.length !== s.length)
        return !1;
      for (let c = 0; c < a.length; c++)
        if (!i(a[c], s[c]))
          return !1;
    }
    if (mt.objectLiteral(a) && mt.objectLiteral(s)) {
      const c = Object.keys(a), f = Object.keys(s);
      if (c.length !== f.length || (c.sort(), f.sort(), !i(c, f)))
        return !1;
      for (let h = 0; h < c.length; h++) {
        const p = c[h];
        if (!i(a[p], s[p]))
          return !1;
      }
    }
    return !0;
  }
})(ks || (me.NotebookCell = ks = {}));
var ed;
(function(t) {
  function e(n, i, a, s) {
    return { uri: n, notebookType: i, version: a, cells: s };
  }
  t.create = e;
  function r(n) {
    const i = n;
    return mt.objectLiteral(i) && mt.string(i.uri) && Ki.integer.is(i.version) && mt.typedArray(i.cells, ks.is);
  }
  t.is = r;
})(ed || (me.NotebookDocument = ed = {}));
var Kn;
(function(t) {
  t.method = "notebookDocument/sync", t.messageDirection = St.MessageDirection.clientToServer, t.type = new St.RegistrationType(t.method);
})(Kn || (me.NotebookDocumentSyncRegistrationType = Kn = {}));
var td;
(function(t) {
  t.method = "notebookDocument/didOpen", t.messageDirection = St.MessageDirection.clientToServer, t.type = new St.ProtocolNotificationType(t.method), t.registrationMethod = Kn.method;
})(td || (me.DidOpenNotebookDocumentNotification = td = {}));
var rd;
(function(t) {
  function e(n) {
    const i = n;
    return mt.objectLiteral(i) && Ki.uinteger.is(i.start) && Ki.uinteger.is(i.deleteCount) && (i.cells === void 0 || mt.typedArray(i.cells, ks.is));
  }
  t.is = e;
  function r(n, i, a) {
    const s = { start: n, deleteCount: i };
    return a !== void 0 && (s.cells = a), s;
  }
  t.create = r;
})(rd || (me.NotebookCellArrayChange = rd = {}));
var nd;
(function(t) {
  t.method = "notebookDocument/didChange", t.messageDirection = St.MessageDirection.clientToServer, t.type = new St.ProtocolNotificationType(t.method), t.registrationMethod = Kn.method;
})(nd || (me.DidChangeNotebookDocumentNotification = nd = {}));
var id;
(function(t) {
  t.method = "notebookDocument/didSave", t.messageDirection = St.MessageDirection.clientToServer, t.type = new St.ProtocolNotificationType(t.method), t.registrationMethod = Kn.method;
})(id || (me.DidSaveNotebookDocumentNotification = id = {}));
var ad;
(function(t) {
  t.method = "notebookDocument/didClose", t.messageDirection = St.MessageDirection.clientToServer, t.type = new St.ProtocolNotificationType(t.method), t.registrationMethod = Kn.method;
})(ad || (me.DidCloseNotebookDocumentNotification = ad = {}));
var Qs = {};
Object.defineProperty(Qs, "__esModule", { value: !0 });
Qs.InlineCompletionRequest = void 0;
const sd = K;
var od;
(function(t) {
  t.method = "textDocument/inlineCompletion", t.messageDirection = sd.MessageDirection.clientToServer, t.type = new sd.ProtocolRequestType(t.method);
})(od || (Qs.InlineCompletionRequest = od = {}));
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.WorkspaceSymbolRequest = t.CodeActionResolveRequest = t.CodeActionRequest = t.DocumentSymbolRequest = t.DocumentHighlightRequest = t.ReferencesRequest = t.DefinitionRequest = t.SignatureHelpRequest = t.SignatureHelpTriggerKind = t.HoverRequest = t.CompletionResolveRequest = t.CompletionRequest = t.CompletionTriggerKind = t.PublishDiagnosticsNotification = t.WatchKind = t.RelativePattern = t.FileChangeType = t.DidChangeWatchedFilesNotification = t.WillSaveTextDocumentWaitUntilRequest = t.WillSaveTextDocumentNotification = t.TextDocumentSaveReason = t.DidSaveTextDocumentNotification = t.DidCloseTextDocumentNotification = t.DidChangeTextDocumentNotification = t.TextDocumentContentChangeEvent = t.DidOpenTextDocumentNotification = t.TextDocumentSyncKind = t.TelemetryEventNotification = t.LogMessageNotification = t.ShowMessageRequest = t.ShowMessageNotification = t.MessageType = t.DidChangeConfigurationNotification = t.ExitNotification = t.ShutdownRequest = t.InitializedNotification = t.InitializeErrorCodes = t.InitializeRequest = t.WorkDoneProgressOptions = t.TextDocumentRegistrationOptions = t.StaticRegistrationOptions = t.PositionEncodingKind = t.FailureHandlingKind = t.ResourceOperationKind = t.UnregistrationRequest = t.RegistrationRequest = t.DocumentSelector = t.NotebookCellTextDocumentFilter = t.NotebookDocumentFilter = t.TextDocumentFilter = void 0, t.MonikerRequest = t.MonikerKind = t.UniquenessLevel = t.WillDeleteFilesRequest = t.DidDeleteFilesNotification = t.WillRenameFilesRequest = t.DidRenameFilesNotification = t.WillCreateFilesRequest = t.DidCreateFilesNotification = t.FileOperationPatternKind = t.LinkedEditingRangeRequest = t.ShowDocumentRequest = t.SemanticTokensRegistrationType = t.SemanticTokensRefreshRequest = t.SemanticTokensRangeRequest = t.SemanticTokensDeltaRequest = t.SemanticTokensRequest = t.TokenFormat = t.CallHierarchyPrepareRequest = t.CallHierarchyOutgoingCallsRequest = t.CallHierarchyIncomingCallsRequest = t.WorkDoneProgressCancelNotification = t.WorkDoneProgressCreateRequest = t.WorkDoneProgress = t.SelectionRangeRequest = t.DeclarationRequest = t.FoldingRangeRefreshRequest = t.FoldingRangeRequest = t.ColorPresentationRequest = t.DocumentColorRequest = t.ConfigurationRequest = t.DidChangeWorkspaceFoldersNotification = t.WorkspaceFoldersRequest = t.TypeDefinitionRequest = t.ImplementationRequest = t.ApplyWorkspaceEditRequest = t.ExecuteCommandRequest = t.PrepareRenameRequest = t.RenameRequest = t.PrepareSupportDefaultBehavior = t.DocumentOnTypeFormattingRequest = t.DocumentRangesFormattingRequest = t.DocumentRangeFormattingRequest = t.DocumentFormattingRequest = t.DocumentLinkResolveRequest = t.DocumentLinkRequest = t.CodeLensRefreshRequest = t.CodeLensResolveRequest = t.CodeLensRequest = t.WorkspaceSymbolResolveRequest = void 0, t.InlineCompletionRequest = t.DidCloseNotebookDocumentNotification = t.DidSaveNotebookDocumentNotification = t.DidChangeNotebookDocumentNotification = t.NotebookCellArrayChange = t.DidOpenNotebookDocumentNotification = t.NotebookDocumentSyncRegistrationType = t.NotebookDocument = t.NotebookCell = t.ExecutionSummary = t.NotebookCellKind = t.DiagnosticRefreshRequest = t.WorkspaceDiagnosticRequest = t.DocumentDiagnosticRequest = t.DocumentDiagnosticReportKind = t.DiagnosticServerCancellationData = t.InlayHintRefreshRequest = t.InlayHintResolveRequest = t.InlayHintRequest = t.InlineValueRefreshRequest = t.InlineValueRequest = t.TypeHierarchySupertypesRequest = t.TypeHierarchySubtypesRequest = t.TypeHierarchyPrepareRequest = void 0;
  const e = K, r = qc, n = ge, i = Vs;
  Object.defineProperty(t, "ImplementationRequest", { enumerable: !0, get: function() {
    return i.ImplementationRequest;
  } });
  const a = qs;
  Object.defineProperty(t, "TypeDefinitionRequest", { enumerable: !0, get: function() {
    return a.TypeDefinitionRequest;
  } });
  const s = Mn;
  Object.defineProperty(t, "WorkspaceFoldersRequest", { enumerable: !0, get: function() {
    return s.WorkspaceFoldersRequest;
  } }), Object.defineProperty(t, "DidChangeWorkspaceFoldersNotification", { enumerable: !0, get: function() {
    return s.DidChangeWorkspaceFoldersNotification;
  } });
  const o = Hs;
  Object.defineProperty(t, "ConfigurationRequest", { enumerable: !0, get: function() {
    return o.ConfigurationRequest;
  } });
  const l = Fn;
  Object.defineProperty(t, "DocumentColorRequest", { enumerable: !0, get: function() {
    return l.DocumentColorRequest;
  } }), Object.defineProperty(t, "ColorPresentationRequest", { enumerable: !0, get: function() {
    return l.ColorPresentationRequest;
  } });
  const c = Gn;
  Object.defineProperty(t, "FoldingRangeRequest", { enumerable: !0, get: function() {
    return c.FoldingRangeRequest;
  } }), Object.defineProperty(t, "FoldingRangeRefreshRequest", { enumerable: !0, get: function() {
    return c.FoldingRangeRefreshRequest;
  } });
  const f = Xs;
  Object.defineProperty(t, "DeclarationRequest", { enumerable: !0, get: function() {
    return f.DeclarationRequest;
  } });
  const h = Ys;
  Object.defineProperty(t, "SelectionRangeRequest", { enumerable: !0, get: function() {
    return h.SelectionRangeRequest;
  } });
  const p = ir;
  Object.defineProperty(t, "WorkDoneProgress", { enumerable: !0, get: function() {
    return p.WorkDoneProgress;
  } }), Object.defineProperty(t, "WorkDoneProgressCreateRequest", { enumerable: !0, get: function() {
    return p.WorkDoneProgressCreateRequest;
  } }), Object.defineProperty(t, "WorkDoneProgressCancelNotification", { enumerable: !0, get: function() {
    return p.WorkDoneProgressCancelNotification;
  } });
  const g = ar;
  Object.defineProperty(t, "CallHierarchyIncomingCallsRequest", { enumerable: !0, get: function() {
    return g.CallHierarchyIncomingCallsRequest;
  } }), Object.defineProperty(t, "CallHierarchyOutgoingCallsRequest", { enumerable: !0, get: function() {
    return g.CallHierarchyOutgoingCallsRequest;
  } }), Object.defineProperty(t, "CallHierarchyPrepareRequest", { enumerable: !0, get: function() {
    return g.CallHierarchyPrepareRequest;
  } });
  const C = Ve;
  Object.defineProperty(t, "TokenFormat", { enumerable: !0, get: function() {
    return C.TokenFormat;
  } }), Object.defineProperty(t, "SemanticTokensRequest", { enumerable: !0, get: function() {
    return C.SemanticTokensRequest;
  } }), Object.defineProperty(t, "SemanticTokensDeltaRequest", { enumerable: !0, get: function() {
    return C.SemanticTokensDeltaRequest;
  } }), Object.defineProperty(t, "SemanticTokensRangeRequest", { enumerable: !0, get: function() {
    return C.SemanticTokensRangeRequest;
  } }), Object.defineProperty(t, "SemanticTokensRefreshRequest", { enumerable: !0, get: function() {
    return C.SemanticTokensRefreshRequest;
  } }), Object.defineProperty(t, "SemanticTokensRegistrationType", { enumerable: !0, get: function() {
    return C.SemanticTokensRegistrationType;
  } });
  const b = Js;
  Object.defineProperty(t, "ShowDocumentRequest", { enumerable: !0, get: function() {
    return b.ShowDocumentRequest;
  } });
  const D = Zs;
  Object.defineProperty(t, "LinkedEditingRangeRequest", { enumerable: !0, get: function() {
    return D.LinkedEditingRangeRequest;
  } });
  const k = Ge;
  Object.defineProperty(t, "FileOperationPatternKind", { enumerable: !0, get: function() {
    return k.FileOperationPatternKind;
  } }), Object.defineProperty(t, "DidCreateFilesNotification", { enumerable: !0, get: function() {
    return k.DidCreateFilesNotification;
  } }), Object.defineProperty(t, "WillCreateFilesRequest", { enumerable: !0, get: function() {
    return k.WillCreateFilesRequest;
  } }), Object.defineProperty(t, "DidRenameFilesNotification", { enumerable: !0, get: function() {
    return k.DidRenameFilesNotification;
  } }), Object.defineProperty(t, "WillRenameFilesRequest", { enumerable: !0, get: function() {
    return k.WillRenameFilesRequest;
  } }), Object.defineProperty(t, "DidDeleteFilesNotification", { enumerable: !0, get: function() {
    return k.DidDeleteFilesNotification;
  } }), Object.defineProperty(t, "WillDeleteFilesRequest", { enumerable: !0, get: function() {
    return k.WillDeleteFilesRequest;
  } });
  const O = sr;
  Object.defineProperty(t, "UniquenessLevel", { enumerable: !0, get: function() {
    return O.UniquenessLevel;
  } }), Object.defineProperty(t, "MonikerKind", { enumerable: !0, get: function() {
    return O.MonikerKind;
  } }), Object.defineProperty(t, "MonikerRequest", { enumerable: !0, get: function() {
    return O.MonikerRequest;
  } });
  const N = or;
  Object.defineProperty(t, "TypeHierarchyPrepareRequest", { enumerable: !0, get: function() {
    return N.TypeHierarchyPrepareRequest;
  } }), Object.defineProperty(t, "TypeHierarchySubtypesRequest", { enumerable: !0, get: function() {
    return N.TypeHierarchySubtypesRequest;
  } }), Object.defineProperty(t, "TypeHierarchySupertypesRequest", { enumerable: !0, get: function() {
    return N.TypeHierarchySupertypesRequest;
  } });
  const L = Un;
  Object.defineProperty(t, "InlineValueRequest", { enumerable: !0, get: function() {
    return L.InlineValueRequest;
  } }), Object.defineProperty(t, "InlineValueRefreshRequest", { enumerable: !0, get: function() {
    return L.InlineValueRefreshRequest;
  } });
  const H = lr;
  Object.defineProperty(t, "InlayHintRequest", { enumerable: !0, get: function() {
    return H.InlayHintRequest;
  } }), Object.defineProperty(t, "InlayHintResolveRequest", { enumerable: !0, get: function() {
    return H.InlayHintResolveRequest;
  } }), Object.defineProperty(t, "InlayHintRefreshRequest", { enumerable: !0, get: function() {
    return H.InlayHintRefreshRequest;
  } });
  const ee = it;
  Object.defineProperty(t, "DiagnosticServerCancellationData", { enumerable: !0, get: function() {
    return ee.DiagnosticServerCancellationData;
  } }), Object.defineProperty(t, "DocumentDiagnosticReportKind", { enumerable: !0, get: function() {
    return ee.DocumentDiagnosticReportKind;
  } }), Object.defineProperty(t, "DocumentDiagnosticRequest", { enumerable: !0, get: function() {
    return ee.DocumentDiagnosticRequest;
  } }), Object.defineProperty(t, "WorkspaceDiagnosticRequest", { enumerable: !0, get: function() {
    return ee.WorkspaceDiagnosticRequest;
  } }), Object.defineProperty(t, "DiagnosticRefreshRequest", { enumerable: !0, get: function() {
    return ee.DiagnosticRefreshRequest;
  } });
  const te = me;
  Object.defineProperty(t, "NotebookCellKind", { enumerable: !0, get: function() {
    return te.NotebookCellKind;
  } }), Object.defineProperty(t, "ExecutionSummary", { enumerable: !0, get: function() {
    return te.ExecutionSummary;
  } }), Object.defineProperty(t, "NotebookCell", { enumerable: !0, get: function() {
    return te.NotebookCell;
  } }), Object.defineProperty(t, "NotebookDocument", { enumerable: !0, get: function() {
    return te.NotebookDocument;
  } }), Object.defineProperty(t, "NotebookDocumentSyncRegistrationType", { enumerable: !0, get: function() {
    return te.NotebookDocumentSyncRegistrationType;
  } }), Object.defineProperty(t, "DidOpenNotebookDocumentNotification", { enumerable: !0, get: function() {
    return te.DidOpenNotebookDocumentNotification;
  } }), Object.defineProperty(t, "NotebookCellArrayChange", { enumerable: !0, get: function() {
    return te.NotebookCellArrayChange;
  } }), Object.defineProperty(t, "DidChangeNotebookDocumentNotification", { enumerable: !0, get: function() {
    return te.DidChangeNotebookDocumentNotification;
  } }), Object.defineProperty(t, "DidSaveNotebookDocumentNotification", { enumerable: !0, get: function() {
    return te.DidSaveNotebookDocumentNotification;
  } }), Object.defineProperty(t, "DidCloseNotebookDocumentNotification", { enumerable: !0, get: function() {
    return te.DidCloseNotebookDocumentNotification;
  } });
  const Ae = Qs;
  Object.defineProperty(t, "InlineCompletionRequest", { enumerable: !0, get: function() {
    return Ae.InlineCompletionRequest;
  } });
  var ke;
  (function(u) {
    function ve(Ee) {
      const B = Ee;
      return n.string(B) || n.string(B.language) || n.string(B.scheme) || n.string(B.pattern);
    }
    u.is = ve;
  })(ke || (t.TextDocumentFilter = ke = {}));
  var Re;
  (function(u) {
    function ve(Ee) {
      const B = Ee;
      return n.objectLiteral(B) && (n.string(B.notebookType) || n.string(B.scheme) || n.string(B.pattern));
    }
    u.is = ve;
  })(Re || (t.NotebookDocumentFilter = Re = {}));
  var w;
  (function(u) {
    function ve(Ee) {
      const B = Ee;
      return n.objectLiteral(B) && (n.string(B.notebook) || Re.is(B.notebook)) && (B.language === void 0 || n.string(B.language));
    }
    u.is = ve;
  })(w || (t.NotebookCellTextDocumentFilter = w = {}));
  var E;
  (function(u) {
    function ve(Ee) {
      if (!Array.isArray(Ee))
        return !1;
      for (let B of Ee)
        if (!n.string(B) && !ke.is(B) && !w.is(B))
          return !1;
      return !0;
    }
    u.is = ve;
  })(E || (t.DocumentSelector = E = {}));
  var m;
  (function(u) {
    u.method = "client/registerCapability", u.messageDirection = e.MessageDirection.serverToClient, u.type = new e.ProtocolRequestType(u.method);
  })(m || (t.RegistrationRequest = m = {}));
  var A;
  (function(u) {
    u.method = "client/unregisterCapability", u.messageDirection = e.MessageDirection.serverToClient, u.type = new e.ProtocolRequestType(u.method);
  })(A || (t.UnregistrationRequest = A = {}));
  var y;
  (function(u) {
    u.Create = "create", u.Rename = "rename", u.Delete = "delete";
  })(y || (t.ResourceOperationKind = y = {}));
  var T;
  (function(u) {
    u.Abort = "abort", u.Transactional = "transactional", u.TextOnlyTransactional = "textOnlyTransactional", u.Undo = "undo";
  })(T || (t.FailureHandlingKind = T = {}));
  var v;
  (function(u) {
    u.UTF8 = "utf-8", u.UTF16 = "utf-16", u.UTF32 = "utf-32";
  })(v || (t.PositionEncodingKind = v = {}));
  var I;
  (function(u) {
    function ve(Ee) {
      const B = Ee;
      return B && n.string(B.id) && B.id.length > 0;
    }
    u.hasId = ve;
  })(I || (t.StaticRegistrationOptions = I = {}));
  var x;
  (function(u) {
    function ve(Ee) {
      const B = Ee;
      return B && (B.documentSelector === null || E.is(B.documentSelector));
    }
    u.is = ve;
  })(x || (t.TextDocumentRegistrationOptions = x = {}));
  var P;
  (function(u) {
    function ve(B) {
      const d = B;
      return n.objectLiteral(d) && (d.workDoneProgress === void 0 || n.boolean(d.workDoneProgress));
    }
    u.is = ve;
    function Ee(B) {
      const d = B;
      return d && n.boolean(d.workDoneProgress);
    }
    u.hasWorkDoneProgress = Ee;
  })(P || (t.WorkDoneProgressOptions = P = {}));
  var j;
  (function(u) {
    u.method = "initialize", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(j || (t.InitializeRequest = j = {}));
  var F;
  (function(u) {
    u.unknownProtocolVersion = 1;
  })(F || (t.InitializeErrorCodes = F = {}));
  var re;
  (function(u) {
    u.method = "initialized", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolNotificationType(u.method);
  })(re || (t.InitializedNotification = re = {}));
  var z;
  (function(u) {
    u.method = "shutdown", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType0(u.method);
  })(z || (t.ShutdownRequest = z = {}));
  var Z;
  (function(u) {
    u.method = "exit", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolNotificationType0(u.method);
  })(Z || (t.ExitNotification = Z = {}));
  var Pe;
  (function(u) {
    u.method = "workspace/didChangeConfiguration", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolNotificationType(u.method);
  })(Pe || (t.DidChangeConfigurationNotification = Pe = {}));
  var he;
  (function(u) {
    u.Error = 1, u.Warning = 2, u.Info = 3, u.Log = 4, u.Debug = 5;
  })(he || (t.MessageType = he = {}));
  var oe;
  (function(u) {
    u.method = "window/showMessage", u.messageDirection = e.MessageDirection.serverToClient, u.type = new e.ProtocolNotificationType(u.method);
  })(oe || (t.ShowMessageNotification = oe = {}));
  var Ne;
  (function(u) {
    u.method = "window/showMessageRequest", u.messageDirection = e.MessageDirection.serverToClient, u.type = new e.ProtocolRequestType(u.method);
  })(Ne || (t.ShowMessageRequest = Ne = {}));
  var Oe;
  (function(u) {
    u.method = "window/logMessage", u.messageDirection = e.MessageDirection.serverToClient, u.type = new e.ProtocolNotificationType(u.method);
  })(Oe || (t.LogMessageNotification = Oe = {}));
  var Ce;
  (function(u) {
    u.method = "telemetry/event", u.messageDirection = e.MessageDirection.serverToClient, u.type = new e.ProtocolNotificationType(u.method);
  })(Ce || (t.TelemetryEventNotification = Ce = {}));
  var X;
  (function(u) {
    u.None = 0, u.Full = 1, u.Incremental = 2;
  })(X || (t.TextDocumentSyncKind = X = {}));
  var Je;
  (function(u) {
    u.method = "textDocument/didOpen", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolNotificationType(u.method);
  })(Je || (t.DidOpenTextDocumentNotification = Je = {}));
  var pe;
  (function(u) {
    function ve(B) {
      let d = B;
      return d != null && typeof d.text == "string" && d.range !== void 0 && (d.rangeLength === void 0 || typeof d.rangeLength == "number");
    }
    u.isIncremental = ve;
    function Ee(B) {
      let d = B;
      return d != null && typeof d.text == "string" && d.range === void 0 && d.rangeLength === void 0;
    }
    u.isFull = Ee;
  })(pe || (t.TextDocumentContentChangeEvent = pe = {}));
  var lt;
  (function(u) {
    u.method = "textDocument/didChange", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolNotificationType(u.method);
  })(lt || (t.DidChangeTextDocumentNotification = lt = {}));
  var Mr;
  (function(u) {
    u.method = "textDocument/didClose", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolNotificationType(u.method);
  })(Mr || (t.DidCloseTextDocumentNotification = Mr = {}));
  var Jn;
  (function(u) {
    u.method = "textDocument/didSave", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolNotificationType(u.method);
  })(Jn || (t.DidSaveTextDocumentNotification = Jn = {}));
  var Zn;
  (function(u) {
    u.Manual = 1, u.AfterDelay = 2, u.FocusOut = 3;
  })(Zn || (t.TextDocumentSaveReason = Zn = {}));
  var Qn;
  (function(u) {
    u.method = "textDocument/willSave", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolNotificationType(u.method);
  })(Qn || (t.WillSaveTextDocumentNotification = Qn = {}));
  var ei;
  (function(u) {
    u.method = "textDocument/willSaveWaitUntil", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(ei || (t.WillSaveTextDocumentWaitUntilRequest = ei = {}));
  var ct;
  (function(u) {
    u.method = "workspace/didChangeWatchedFiles", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolNotificationType(u.method);
  })(ct || (t.DidChangeWatchedFilesNotification = ct = {}));
  var ti;
  (function(u) {
    u.Created = 1, u.Changed = 2, u.Deleted = 3;
  })(ti || (t.FileChangeType = ti = {}));
  var ra;
  (function(u) {
    function ve(Ee) {
      const B = Ee;
      return n.objectLiteral(B) && (r.URI.is(B.baseUri) || r.WorkspaceFolder.is(B.baseUri)) && n.string(B.pattern);
    }
    u.is = ve;
  })(ra || (t.RelativePattern = ra = {}));
  var na;
  (function(u) {
    u.Create = 1, u.Change = 2, u.Delete = 4;
  })(na || (t.WatchKind = na = {}));
  var ia;
  (function(u) {
    u.method = "textDocument/publishDiagnostics", u.messageDirection = e.MessageDirection.serverToClient, u.type = new e.ProtocolNotificationType(u.method);
  })(ia || (t.PublishDiagnosticsNotification = ia = {}));
  var aa;
  (function(u) {
    u.Invoked = 1, u.TriggerCharacter = 2, u.TriggerForIncompleteCompletions = 3;
  })(aa || (t.CompletionTriggerKind = aa = {}));
  var ri;
  (function(u) {
    u.method = "textDocument/completion", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(ri || (t.CompletionRequest = ri = {}));
  var ni;
  (function(u) {
    u.method = "completionItem/resolve", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(ni || (t.CompletionResolveRequest = ni = {}));
  var It;
  (function(u) {
    u.method = "textDocument/hover", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(It || (t.HoverRequest = It = {}));
  var ii;
  (function(u) {
    u.Invoked = 1, u.TriggerCharacter = 2, u.ContentChange = 3;
  })(ii || (t.SignatureHelpTriggerKind = ii = {}));
  var sa;
  (function(u) {
    u.method = "textDocument/signatureHelp", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(sa || (t.SignatureHelpRequest = sa = {}));
  var oa;
  (function(u) {
    u.method = "textDocument/definition", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(oa || (t.DefinitionRequest = oa = {}));
  var ai;
  (function(u) {
    u.method = "textDocument/references", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(ai || (t.ReferencesRequest = ai = {}));
  var si;
  (function(u) {
    u.method = "textDocument/documentHighlight", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(si || (t.DocumentHighlightRequest = si = {}));
  var la;
  (function(u) {
    u.method = "textDocument/documentSymbol", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(la || (t.DocumentSymbolRequest = la = {}));
  var ca;
  (function(u) {
    u.method = "textDocument/codeAction", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(ca || (t.CodeActionRequest = ca = {}));
  var ua;
  (function(u) {
    u.method = "codeAction/resolve", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(ua || (t.CodeActionResolveRequest = ua = {}));
  var fa;
  (function(u) {
    u.method = "workspace/symbol", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(fa || (t.WorkspaceSymbolRequest = fa = {}));
  var da;
  (function(u) {
    u.method = "workspaceSymbol/resolve", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(da || (t.WorkspaceSymbolResolveRequest = da = {}));
  var ha;
  (function(u) {
    u.method = "textDocument/codeLens", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(ha || (t.CodeLensRequest = ha = {}));
  var ut;
  (function(u) {
    u.method = "codeLens/resolve", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(ut || (t.CodeLensResolveRequest = ut = {}));
  var pa;
  (function(u) {
    u.method = "workspace/codeLens/refresh", u.messageDirection = e.MessageDirection.serverToClient, u.type = new e.ProtocolRequestType0(u.method);
  })(pa || (t.CodeLensRefreshRequest = pa = {}));
  var ma;
  (function(u) {
    u.method = "textDocument/documentLink", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(ma || (t.DocumentLinkRequest = ma = {}));
  var mr;
  (function(u) {
    u.method = "documentLink/resolve", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(mr || (t.DocumentLinkResolveRequest = mr = {}));
  var ga;
  (function(u) {
    u.method = "textDocument/formatting", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(ga || (t.DocumentFormattingRequest = ga = {}));
  var Fr;
  (function(u) {
    u.method = "textDocument/rangeFormatting", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(Fr || (t.DocumentRangeFormattingRequest = Fr = {}));
  var ya;
  (function(u) {
    u.method = "textDocument/rangesFormatting", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(ya || (t.DocumentRangesFormattingRequest = ya = {}));
  var Pt;
  (function(u) {
    u.method = "textDocument/onTypeFormatting", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(Pt || (t.DocumentOnTypeFormattingRequest = Pt = {}));
  var Jt;
  (function(u) {
    u.Identifier = 1;
  })(Jt || (t.PrepareSupportDefaultBehavior = Jt = {}));
  var Ta;
  (function(u) {
    u.method = "textDocument/rename", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(Ta || (t.RenameRequest = Ta = {}));
  var Ra;
  (function(u) {
    u.method = "textDocument/prepareRename", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(Ra || (t.PrepareRenameRequest = Ra = {}));
  var Zt;
  (function(u) {
    u.method = "workspace/executeCommand", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
  })(Zt || (t.ExecuteCommandRequest = Zt = {}));
  var oi;
  (function(u) {
    u.method = "workspace/applyEdit", u.messageDirection = e.MessageDirection.serverToClient, u.type = new e.ProtocolRequestType("workspace/applyEdit");
  })(oi || (t.ApplyWorkspaceEditRequest = oi = {}));
})(sp);
var eo = {};
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.createProtocolConnection = void 0;
const ld = Dr;
function Jv(t, e, r, n) {
  return ld.ConnectionStrategy.is(n) && (n = { connectionStrategy: n }), (0, ld.createMessageConnection)(t, e, r, n);
}
eo.createProtocolConnection = Jv;
(function(t) {
  var e = at && at.__createBinding || (Object.create ? function(a, s, o, l) {
    l === void 0 && (l = o);
    var c = Object.getOwnPropertyDescriptor(s, o);
    (!c || ("get" in c ? !s.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return s[o];
    } }), Object.defineProperty(a, l, c);
  } : function(a, s, o, l) {
    l === void 0 && (l = o), a[l] = s[o];
  }), r = at && at.__exportStar || function(a, s) {
    for (var o in a) o !== "default" && !Object.prototype.hasOwnProperty.call(s, o) && e(s, a, o);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.LSPErrorCodes = t.createProtocolConnection = void 0, r(Dr, t), r(qc, t), r(K, t), r(sp, t);
  var n = eo;
  Object.defineProperty(t, "createProtocolConnection", { enumerable: !0, get: function() {
    return n.createProtocolConnection;
  } });
  var i;
  (function(a) {
    a.lspReservedErrorRangeStart = -32899, a.RequestFailed = -32803, a.ServerCancelled = -32802, a.ContentModified = -32801, a.RequestCancelled = -32800, a.lspReservedErrorRangeEnd = -32800;
  })(i || (t.LSPErrorCodes = i = {}));
})(ap);
(function(t) {
  var e = at && at.__createBinding || (Object.create ? function(a, s, o, l) {
    l === void 0 && (l = o);
    var c = Object.getOwnPropertyDescriptor(s, o);
    (!c || ("get" in c ? !s.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return s[o];
    } }), Object.defineProperty(a, l, c);
  } : function(a, s, o, l) {
    l === void 0 && (l = o), a[l] = s[o];
  }), r = at && at.__exportStar || function(a, s) {
    for (var o in a) o !== "default" && !Object.prototype.hasOwnProperty.call(s, o) && e(s, a, o);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.createProtocolConnection = void 0;
  const n = Yu;
  r(Yu, t), r(ap, t);
  function i(a, s, o, l) {
    return (0, n.createMessageConnection)(a, s, o, l);
  }
  t.createProtocolConnection = i;
})(ki);
var Ii;
(function(t) {
  function e(r) {
    return {
      dispose: async () => await r()
    };
  }
  t.create = e;
})(Ii || (Ii = {}));
class Zv {
  constructor(e) {
    this.updateBuildOptions = {
      // Default: run only the built-in validation checks and those in the _fast_ category (includes those without category)
      validation: {
        categories: ["built-in", "fast"]
      }
    }, this.updateListeners = [], this.buildPhaseListeners = new Ui(), this.documentPhaseListeners = new Ui(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = W.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.fileSystemProvider = e.workspace.FileSystemProvider, this.workspaceManager = () => e.workspace.WorkspaceManager, this.serviceRegistry = e.ServiceRegistry;
  }
  async build(e, r = {}, n = fe.None) {
    var i;
    for (const a of e) {
      const s = a.uri.toString();
      if (a.state === W.Validated) {
        if (typeof r.validation == "boolean" && r.validation)
          this.resetToState(a, W.IndexedReferences);
        else if (typeof r.validation == "object") {
          const o = this.findMissingValidationCategories(a, r);
          o.length > 0 && (this.buildState.set(s, {
            completed: !1,
            options: {
              validation: {
                categories: o
              }
            },
            result: (i = this.buildState.get(s)) == null ? void 0 : i.result
          }), a.state = W.IndexedReferences);
        }
      } else
        this.buildState.delete(s);
    }
    this.currentState = W.Changed, await this.emitUpdate(e.map((a) => a.uri), []), await this.buildDocuments(e, r, n);
  }
  async update(e, r, n = fe.None) {
    this.currentState = W.Changed;
    const i = [];
    for (const l of r) {
      const c = this.langiumDocuments.deleteDocuments(l);
      for (const f of c)
        i.push(f.uri), this.cleanUpDeleted(f);
    }
    const a = (await Promise.all(e.map((l) => this.findChangedUris(l)))).flat();
    for (const l of a) {
      let c = this.langiumDocuments.getDocument(l);
      c === void 0 && (c = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, l), c.state = W.Changed, this.langiumDocuments.addDocument(c)), this.resetToState(c, W.Changed);
    }
    const s = ce(a).concat(i).map((l) => l.toString()).toSet();
    this.langiumDocuments.all.filter((l) => !s.has(l.uri.toString()) && this.shouldRelink(l, s)).forEach((l) => this.resetToState(l, W.ComputedScopes)), await this.emitUpdate(a, i), await Be(n);
    const o = this.sortDocuments(this.langiumDocuments.all.filter((l) => {
      var c;
      return (
        // This includes those that were reported as changed and those that we selected for relinking
        l.state < W.Validated || !((c = this.buildState.get(l.uri.toString())) != null && c.completed) || this.resultsAreIncomplete(l, this.updateBuildOptions)
      );
    }).toArray());
    await this.buildDocuments(o, this.updateBuildOptions, n);
  }
  resultsAreIncomplete(e, r) {
    return this.findMissingValidationCategories(e, r).length >= 1;
  }
  findMissingValidationCategories(e, r) {
    var o, l;
    const n = this.buildState.get(e.uri.toString()), i = this.serviceRegistry.getServices(e.uri).validation.ValidationRegistry.getAllValidationCategories(e), a = (o = n == null ? void 0 : n.result) != null && o.validationChecks ? new Set((l = n == null ? void 0 : n.result) == null ? void 0 : l.validationChecks) : n != null && n.completed ? i : /* @__PURE__ */ new Set(), s = r === void 0 || r.validation === !0 ? i : typeof r.validation == "object" ? r.validation.categories ?? i : [];
    return ce(s).filter((c) => !a.has(c)).toArray();
  }
  async findChangedUris(e) {
    var n;
    if (this.langiumDocuments.getDocument(e) ?? ((n = this.textDocuments) == null ? void 0 : n.get(e)))
      return [e];
    try {
      const i = await this.fileSystemProvider.stat(e);
      if (i.isDirectory)
        return await this.workspaceManager().searchFolder(e);
      if (this.workspaceManager().shouldIncludeEntry(i))
        return [e];
    } catch {
    }
    return [];
  }
  async emitUpdate(e, r) {
    await Promise.all(this.updateListeners.map((n) => n(e, r)));
  }
  /**
   * Sort the given documents by priority. By default, documents with an open text document are prioritized.
   * This is useful to ensure that visible documents show their diagnostics before all other documents.
   *
   * This improves the responsiveness in large workspaces as users usually don't care about diagnostics
   * in files that are currently not opened in the editor.
   */
  sortDocuments(e) {
    let r = 0, n = e.length - 1;
    for (; r < n; ) {
      for (; r < e.length && this.hasTextDocument(e[r]); )
        r++;
      for (; n >= 0 && !this.hasTextDocument(e[n]); )
        n--;
      r < n && ([e[r], e[n]] = [e[n], e[r]]);
    }
    return e;
  }
  hasTextDocument(e) {
    var r;
    return !!((r = this.textDocuments) != null && r.get(e.uri));
  }
  /**
   * Check whether the given document should be relinked after changes were found in the given URIs.
   */
  shouldRelink(e, r) {
    return e.references.some((n) => n.error !== void 0) ? !0 : this.indexManager.isAffected(e, r);
  }
  onUpdate(e) {
    return this.updateListeners.push(e), Ii.create(() => {
      const r = this.updateListeners.indexOf(e);
      r >= 0 && this.updateListeners.splice(r, 1);
    });
  }
  resetToState(e, r) {
    switch (r) {
      case W.Changed:
      case W.Parsed:
        this.indexManager.removeContent(e.uri);
      case W.IndexedContent:
        e.localSymbols = void 0;
      case W.ComputedScopes:
        this.serviceRegistry.getServices(e.uri).references.Linker.unlink(e);
      case W.Linked:
        this.indexManager.removeReferences(e.uri);
      case W.IndexedReferences:
        e.diagnostics = void 0, this.buildState.delete(e.uri.toString());
      case W.Validated:
    }
    e.state > r && (e.state = r);
  }
  cleanUpDeleted(e) {
    this.buildState.delete(e.uri.toString()), this.indexManager.remove(e.uri), e.state = W.Changed;
  }
  /**
   * Build the given documents by stepping through all build phases. If a document's state indicates
   * that a certain build phase is already done, the phase is skipped for that document.
   *
   * @param documents The documents to build.
   * @param options the {@link BuildOptions} to use.
   * @param cancelToken A cancellation token that can be used to cancel the build.
   * @returns A promise that resolves when the build is done.
   */
  async buildDocuments(e, r, n) {
    this.prepareBuild(e, r), await this.runCancelable(e, W.Parsed, n, (s) => this.langiumDocumentFactory.update(s, n)), await this.runCancelable(e, W.IndexedContent, n, (s) => this.indexManager.updateContent(s, n)), await this.runCancelable(e, W.ComputedScopes, n, async (s) => {
      const o = this.serviceRegistry.getServices(s.uri).references.ScopeComputation;
      s.localSymbols = await o.collectLocalSymbols(s, n);
    });
    const i = e.filter((s) => this.shouldLink(s));
    await this.runCancelable(i, W.Linked, n, (s) => this.serviceRegistry.getServices(s.uri).references.Linker.link(s, n)), await this.runCancelable(i, W.IndexedReferences, n, (s) => this.indexManager.updateReferences(s, n));
    const a = e.filter((s) => this.shouldValidate(s) ? !0 : (this.markAsCompleted(s), !1));
    await this.runCancelable(a, W.Validated, n, async (s) => {
      await this.validate(s, n), this.markAsCompleted(s);
    });
  }
  markAsCompleted(e) {
    const r = this.buildState.get(e.uri.toString());
    r && (r.completed = !0);
  }
  /**
   * Runs prior to beginning the build process to update the {@link DocumentBuildState} for each document
   *
   * @param documents collection of documents to be built
   * @param options the {@link BuildOptions} to use
   */
  prepareBuild(e, r) {
    for (const n of e) {
      const i = n.uri.toString(), a = this.buildState.get(i);
      (!a || a.completed) && this.buildState.set(i, {
        completed: !1,
        options: r,
        result: a == null ? void 0 : a.result
      });
    }
  }
  /**
   * Runs a cancelable operation on a set of documents to bring them to a specified {@link DocumentState}.
   *
   * @param documents The array of documents to process.
   * @param targetState The target {@link DocumentState} to bring the documents to.
   * @param cancelToken A token that can be used to cancel the operation.
   * @param callback A function to be called for each document.
   * @returns A promise that resolves when all documents have been processed or the operation is canceled.
   * @throws Will throw `OperationCancelled` if the operation is canceled via a `CancellationToken`.
   */
  async runCancelable(e, r, n, i) {
    for (const s of e)
      s.state < r && (await Be(n), await i(s), s.state = r, await this.notifyDocumentPhase(s, r, n));
    const a = e.filter((s) => s.state === r);
    await this.notifyBuildPhase(a, r, n), this.currentState = r;
  }
  onBuildPhase(e, r) {
    return this.buildPhaseListeners.add(e, r), Ii.create(() => {
      this.buildPhaseListeners.delete(e, r);
    });
  }
  onDocumentPhase(e, r) {
    return this.documentPhaseListeners.add(e, r), Ii.create(() => {
      this.documentPhaseListeners.delete(e, r);
    });
  }
  waitUntil(e, r, n) {
    let i;
    return r && "path" in r ? i = r : n = r, n ?? (n = fe.None), i ? this.awaitDocumentState(e, i, n) : this.awaitBuilderState(e, n);
  }
  awaitDocumentState(e, r, n) {
    const i = this.langiumDocuments.getDocument(r);
    if (i) {
      if (i.state >= e)
        return Promise.resolve(r);
      if (n.isCancellationRequested)
        return Promise.reject(on);
      if (this.currentState >= e && e > i.state)
        return Promise.reject(new ki.ResponseError(ki.LSPErrorCodes.RequestFailed, `Document state of ${r.toString()} is ${W[i.state]}, requiring ${W[e]}, but workspace state is already ${W[this.currentState]}. Returning undefined.`));
    } else return Promise.reject(new ki.ResponseError(ki.LSPErrorCodes.ServerCancelled, `No document found for URI: ${r.toString()}`));
    return new Promise((a, s) => {
      const o = this.onDocumentPhase(e, (c) => {
        et.equals(c.uri, r) && (o.dispose(), l.dispose(), a(c.uri));
      }), l = n.onCancellationRequested(() => {
        o.dispose(), l.dispose(), s(on);
      });
    });
  }
  awaitBuilderState(e, r) {
    return this.currentState >= e ? Promise.resolve() : r.isCancellationRequested ? Promise.reject(on) : new Promise((n, i) => {
      const a = this.onBuildPhase(e, () => {
        a.dispose(), s.dispose(), n();
      }), s = r.onCancellationRequested(() => {
        a.dispose(), s.dispose(), i(on);
      });
    });
  }
  async notifyDocumentPhase(e, r, n) {
    const a = this.documentPhaseListeners.get(r).slice();
    for (const s of a)
      try {
        await Be(n), await s(e, n);
      } catch (o) {
        if (!Us(o))
          throw o;
      }
  }
  async notifyBuildPhase(e, r, n) {
    if (e.length === 0)
      return;
    const a = this.buildPhaseListeners.get(r).slice();
    for (const s of a)
      await Be(n), await s(e, n);
  }
  /**
   * Determine whether the given document should be linked during a build. The default
   * implementation checks the `eagerLinking` property of the build options. If it's set to `true`
   * or `undefined`, the document is included in the linking phase. This also affects the
   * references indexing phase, which depends on eager linking.
   */
  shouldLink(e) {
    return this.getBuildOptions(e).eagerLinking ?? !0;
  }
  /**
   * Determine whether the given document should be validated during a build. The default
   * implementation checks the `validation` property of the build options. If it's set to `true`
   * or a `ValidationOptions` object, the document is included in the validation phase.
   */
  shouldValidate(e) {
    return !!this.getBuildOptions(e).validation;
  }
  /**
   * Run validation checks on the given document and store the resulting diagnostics in the document.
   * If the document already contains diagnostics, the new ones are added to the list.
   */
  async validate(e, r) {
    const n = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, i = this.getBuildOptions(e), a = typeof i.validation == "object" ? { ...i.validation } : {};
    a.categories = this.findMissingValidationCategories(e, i);
    const s = await n.validateDocument(e, a, r);
    e.diagnostics ? e.diagnostics.push(...s) : e.diagnostics = s;
    const o = this.buildState.get(e.uri.toString());
    o && (o.result ?? (o.result = {}), o.result.validationChecks ? o.result.validationChecks = ce(o.result.validationChecks).concat(a.categories).distinct().toArray() : o.result.validationChecks = [...a.categories]);
  }
  getBuildOptions(e) {
    var r;
    return ((r = this.buildState.get(e.uri.toString())) == null ? void 0 : r.options) ?? {};
  }
}
class Qv {
  constructor(e) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new LR(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
  }
  findAllReferences(e, r) {
    const n = Gt(e).uri, i = [];
    return this.referenceIndex.forEach((a) => {
      a.forEach((s) => {
        et.equals(s.targetUri, n) && s.targetPath === r && i.push(s);
      });
    }), ce(i);
  }
  allElements(e, r) {
    let n = ce(this.symbolIndex.keys());
    return r && (n = n.filter((i) => !r || r.has(i))), n.map((i) => this.getFileDescriptions(i, e)).flat();
  }
  getFileDescriptions(e, r) {
    return r ? this.symbolByTypeIndex.get(e, r, () => (this.symbolIndex.get(e) ?? []).filter((a) => this.astReflection.isSubtype(a.type, r))) : this.symbolIndex.get(e) ?? [];
  }
  remove(e) {
    this.removeContent(e), this.removeReferences(e);
  }
  removeContent(e) {
    const r = e.toString();
    this.symbolIndex.delete(r), this.symbolByTypeIndex.clear(r);
  }
  removeReferences(e) {
    const r = e.toString();
    this.referenceIndex.delete(r);
  }
  async updateContent(e, r = fe.None) {
    const i = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.collectExportedSymbols(e, r), a = e.uri.toString();
    this.symbolIndex.set(a, i), this.symbolByTypeIndex.clear(a);
  }
  async updateReferences(e, r = fe.None) {
    const i = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, r);
    this.referenceIndex.set(e.uri.toString(), i);
  }
  isAffected(e, r) {
    const n = this.referenceIndex.get(e.uri.toString());
    return n ? n.some((i) => !i.local && r.has(i.targetUri.toString())) : !1;
  }
}
class eE {
  constructor(e) {
    this.initialBuildOptions = {}, this._ready = new Wc(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  get workspaceFolders() {
    return this.folders;
  }
  initialize(e) {
    this.folders = e.workspaceFolders ?? void 0;
  }
  initialized(e) {
    return this.mutex.write((r) => this.initializeWorkspace(this.folders ?? [], r));
  }
  async initializeWorkspace(e, r = fe.None) {
    const n = await this.performStartup(e);
    await Be(r), await this.documentBuilder.build(n, this.initialBuildOptions, r);
  }
  /**
   * Performs the uninterruptable startup sequence of the workspace manager.
   * This methods loads all documents in the workspace and other documents and returns them.
   */
  async performStartup(e) {
    const r = [], n = (s) => {
      r.push(s), this.langiumDocuments.hasDocument(s.uri) || this.langiumDocuments.addDocument(s);
    };
    await this.loadAdditionalDocuments(e, n);
    const i = [];
    await Promise.all(e.map((s) => this.getRootFolder(s)).map(async (s) => this.traverseFolder(s, i)));
    const a = ce(i).distinct((s) => s.toString()).filter((s) => !this.langiumDocuments.hasDocument(s));
    return await this.loadWorkspaceDocuments(a, n), this._ready.resolve(), r;
  }
  async loadWorkspaceDocuments(e, r) {
    await Promise.all(e.map(async (n) => {
      const i = await this.langiumDocuments.getOrCreateDocument(n);
      r(i);
    }));
  }
  /**
   * Load all additional documents that shall be visible in the context of the given workspace
   * folders and add them to the collector. This can be used to include built-in libraries of
   * your language, which can be either loaded from provided files or constructed in memory.
   */
  loadAdditionalDocuments(e, r) {
    return Promise.resolve();
  }
  /**
   * Determine the root folder of the source documents in the given workspace folder.
   * The default implementation returns the URI of the workspace folder, but you can override
   * this to return a subfolder like `src` instead.
   */
  getRootFolder(e) {
    return gt.parse(e.uri);
  }
  /**
   * Traverse the file system folder identified by the given URI and its subfolders. All
   * contained files that match the file extensions are added to the `uris` array.
   */
  async traverseFolder(e, r) {
    try {
      const n = await this.fileSystemProvider.readDirectory(e);
      await Promise.all(n.map(async (i) => {
        this.shouldIncludeEntry(i) && (i.isDirectory ? await this.traverseFolder(i.uri, r) : i.isFile && r.push(i.uri));
      }));
    } catch (n) {
      console.error("Failure to read directory content of " + e.toString(!0), n);
    }
  }
  async searchFolder(e) {
    const r = [];
    return await this.traverseFolder(e, r), r;
  }
  /**
   * Determine whether the given folder entry shall be included while indexing the workspace.
   */
  shouldIncludeEntry(e) {
    const r = et.basename(e.uri);
    return r.startsWith(".") ? !1 : e.isDirectory ? r !== "node_modules" && r !== "out" : e.isFile ? this.serviceRegistry.hasServices(e.uri) : !1;
  }
}
class tE {
  buildUnexpectedCharactersMessage(e, r, n, i, a) {
    return Bo.buildUnexpectedCharactersMessage(e, r, n, i, a);
  }
  buildUnableToPopLexerModeMessage(e) {
    return Bo.buildUnableToPopLexerModeMessage(e);
  }
}
const rE = { mode: "full" };
class nE {
  constructor(e) {
    this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
    const r = this.tokenBuilder.buildTokens(e.Grammar, {
      caseInsensitive: e.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = this.toTokenTypeDictionary(r);
    const n = cd(r) ? Object.values(r) : r, i = e.LanguageMetaData.mode === "production";
    this.chevrotainLexer = new qe(n, {
      positionTracking: "full",
      skipValidations: i,
      errorMessageProvider: this.errorMessageProvider
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e, r = rE) {
    var i, a;
    const n = this.chevrotainLexer.tokenize(e);
    return {
      tokens: n.tokens,
      errors: n.errors,
      hidden: n.groups.hidden ?? [],
      report: (a = (i = this.tokenBuilder).flushLexingReport) == null ? void 0 : a.call(i, e)
    };
  }
  toTokenTypeDictionary(e) {
    if (cd(e))
      return e;
    const r = up(e) ? Object.values(e.modes).flat() : e, n = {};
    return r.forEach((i) => n[i.name] = i), n;
  }
}
function iE(t) {
  return Array.isArray(t) && (t.length === 0 || "name" in t[0]);
}
function up(t) {
  return t && "modes" in t && "defaultMode" in t;
}
function cd(t) {
  return !iE(t) && !up(t);
}
function aE(t, e, r) {
  let n, i;
  typeof t == "string" ? (i = e, n = r) : (i = t.range.start, n = e), i || (i = J.create(0, 0));
  const a = fp(t), s = Hc(n), o = lE({
    lines: a,
    position: i,
    options: s
  });
  return hE({
    index: 0,
    tokens: o,
    position: i
  });
}
function sE(t, e) {
  const r = Hc(e), n = fp(t);
  if (n.length === 0)
    return !1;
  const i = n[0], a = n[n.length - 1], s = r.start, o = r.end;
  return !!(s != null && s.exec(i)) && !!(o != null && o.exec(a));
}
function fp(t) {
  let e = "";
  return typeof t == "string" ? e = t : e = t.text, e.split(bm);
}
const ud = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, oE = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function lE(t) {
  var i, a, s;
  const e = [];
  let r = t.position.line, n = t.position.character;
  for (let o = 0; o < t.lines.length; o++) {
    const l = o === 0, c = o === t.lines.length - 1;
    let f = t.lines[o], h = 0;
    if (l && t.options.start) {
      const g = (i = t.options.start) == null ? void 0 : i.exec(f);
      g && (h = g.index + g[0].length);
    } else {
      const g = (a = t.options.line) == null ? void 0 : a.exec(f);
      g && (h = g.index + g[0].length);
    }
    if (c) {
      const g = (s = t.options.end) == null ? void 0 : s.exec(f);
      g && (f = f.substring(0, g.index));
    }
    if (f = f.substring(0, dE(f)), hc(f, h) >= f.length) {
      if (e.length > 0) {
        const g = J.create(r, n);
        e.push({
          type: "break",
          content: "",
          range: V.create(g, g)
        });
      }
    } else {
      ud.lastIndex = h;
      const g = ud.exec(f);
      if (g) {
        const C = g[0], b = g[1], D = J.create(r, n + h), k = J.create(r, n + h + C.length);
        e.push({
          type: "tag",
          content: b,
          range: V.create(D, k)
        }), h += C.length, h = hc(f, h);
      }
      if (h < f.length) {
        const C = f.substring(h), b = Array.from(C.matchAll(oE));
        e.push(...cE(b, C, r, n + h));
      }
    }
    r++, n = 0;
  }
  return e.length > 0 && e[e.length - 1].type === "break" ? e.slice(0, -1) : e;
}
function cE(t, e, r, n) {
  const i = [];
  if (t.length === 0) {
    const a = J.create(r, n), s = J.create(r, n + e.length);
    i.push({
      type: "text",
      content: e,
      range: V.create(a, s)
    });
  } else {
    let a = 0;
    for (const o of t) {
      const l = o.index, c = e.substring(a, l);
      c.length > 0 && i.push({
        type: "text",
        content: e.substring(a, l),
        range: V.create(J.create(r, a + n), J.create(r, l + n))
      });
      let f = c.length + 1;
      const h = o[1];
      if (i.push({
        type: "inline-tag",
        content: h,
        range: V.create(J.create(r, a + f + n), J.create(r, a + f + h.length + n))
      }), f += h.length, o.length === 4) {
        f += o[2].length;
        const p = o[3];
        i.push({
          type: "text",
          content: p,
          range: V.create(J.create(r, a + f + n), J.create(r, a + f + p.length + n))
        });
      } else
        i.push({
          type: "text",
          content: "",
          range: V.create(J.create(r, a + f + n), J.create(r, a + f + n))
        });
      a = l + o[0].length;
    }
    const s = e.substring(a);
    s.length > 0 && i.push({
      type: "text",
      content: s,
      range: V.create(J.create(r, a + n), J.create(r, a + n + s.length))
    });
  }
  return i;
}
const uE = /\S/, fE = /\s*$/;
function hc(t, e) {
  const r = t.substring(e).match(uE);
  return r ? e + r.index : t.length;
}
function dE(t) {
  const e = t.match(fE);
  if (e && typeof e.index == "number")
    return e.index;
}
function hE(t) {
  var a, s;
  const e = J.create(t.position.line, t.position.character);
  if (t.tokens.length === 0)
    return new fd([], V.create(e, e));
  const r = [];
  for (; t.index < t.tokens.length; ) {
    const o = pE(t, r[r.length - 1]);
    o && r.push(o);
  }
  const n = ((a = r[0]) == null ? void 0 : a.range.start) ?? e, i = ((s = r[r.length - 1]) == null ? void 0 : s.range.end) ?? e;
  return new fd(r, V.create(n, i));
}
function pE(t, e) {
  const r = t.tokens[t.index];
  if (r.type === "tag")
    return hp(t, !1);
  if (r.type === "text" || r.type === "inline-tag")
    return dp(t);
  mE(r, e), t.index++;
}
function mE(t, e) {
  if (e) {
    const r = new mp("", t.range);
    "inlines" in e ? e.inlines.push(r) : e.content.inlines.push(r);
  }
}
function dp(t) {
  let e = t.tokens[t.index];
  const r = e;
  let n = e;
  const i = [];
  for (; e && e.type !== "break" && e.type !== "tag"; )
    i.push(gE(t)), n = e, e = t.tokens[t.index];
  return new pc(i, V.create(r.range.start, n.range.end));
}
function gE(t) {
  return t.tokens[t.index].type === "inline-tag" ? hp(t, !0) : pp(t);
}
function hp(t, e) {
  const r = t.tokens[t.index++], n = r.content.substring(1), i = t.tokens[t.index];
  if ((i == null ? void 0 : i.type) === "text")
    if (e) {
      const a = pp(t);
      return new To(n, new pc([a], a.range), e, V.create(r.range.start, a.range.end));
    } else {
      const a = dp(t);
      return new To(n, a, e, V.create(r.range.start, a.range.end));
    }
  else {
    const a = r.range;
    return new To(n, new pc([], a), e, a);
  }
}
function pp(t) {
  const e = t.tokens[t.index++];
  return new mp(e.content, e.range);
}
function Hc(t) {
  if (!t)
    return Hc({
      start: "/**",
      end: "*/",
      line: "*"
    });
  const { start: e, end: r, line: n } = t;
  return {
    start: yo(e, !0),
    end: yo(r, !1),
    line: yo(n, !0)
  };
}
function yo(t, e) {
  if (typeof t == "string" || typeof t == "object") {
    const r = typeof t == "string" ? Os(t) : t.source;
    return e ? new RegExp(`^\\s*${r}`) : new RegExp(`\\s*${r}\\s*$`);
  } else
    return t;
}
class fd {
  constructor(e, r) {
    this.elements = e, this.range = r;
  }
  getTag(e) {
    return this.getAllTags().find((r) => r.name === e);
  }
  getTags(e) {
    return this.getAllTags().filter((r) => r.name === e);
  }
  getAllTags() {
    return this.elements.filter((e) => "name" in e);
  }
  toString() {
    let e = "";
    for (const r of this.elements)
      if (e.length === 0)
        e = r.toString();
      else {
        const n = r.toString();
        e += dd(e) + n;
      }
    return e.trim();
  }
  toMarkdown(e) {
    let r = "";
    for (const n of this.elements)
      if (r.length === 0)
        r = n.toMarkdown(e);
      else {
        const i = n.toMarkdown(e);
        r += dd(r) + i;
      }
    return r.trim();
  }
}
class To {
  constructor(e, r, n, i) {
    this.name = e, this.content = r, this.inline = n, this.range = i;
  }
  toString() {
    let e = `@${this.name}`;
    const r = this.content.toString();
    return this.content.inlines.length === 1 ? e = `${e} ${r}` : this.content.inlines.length > 1 && (e = `${e}
${r}`), this.inline ? `{${e}}` : e;
  }
  toMarkdown(e) {
    var r;
    return ((r = e == null ? void 0 : e.renderTag) == null ? void 0 : r.call(e, this)) ?? this.toMarkdownDefault(e);
  }
  toMarkdownDefault(e) {
    const r = this.content.toMarkdown(e);
    if (this.inline) {
      const a = yE(this.name, r, e ?? {});
      if (typeof a == "string")
        return a;
    }
    let n = "";
    (e == null ? void 0 : e.tag) === "italic" || (e == null ? void 0 : e.tag) === void 0 ? n = "*" : (e == null ? void 0 : e.tag) === "bold" ? n = "**" : (e == null ? void 0 : e.tag) === "bold-italic" && (n = "***");
    let i = `${n}@${this.name}${n}`;
    return this.content.inlines.length === 1 ? i = `${i} — ${r}` : this.content.inlines.length > 1 && (i = `${i}
${r}`), this.inline ? `{${i}}` : i;
  }
}
function yE(t, e, r) {
  var n;
  if (t === "linkplain" || t === "linkcode" || t === "link") {
    const i = e.indexOf(" ");
    let a = e;
    if (i > 0) {
      const o = hc(e, i);
      a = e.substring(o), e = e.substring(0, i);
    }
    return (t === "linkcode" || t === "link" && r.link === "code") && (a = `\`${a}\``), ((n = r.renderLink) == null ? void 0 : n.call(r, e, a)) ?? TE(e, a);
  }
}
function TE(t, e) {
  try {
    return gt.parse(t, !0), `[${e}](${t})`;
  } catch {
    return t;
  }
}
class pc {
  constructor(e, r) {
    this.inlines = e, this.range = r;
  }
  toString() {
    let e = "";
    for (let r = 0; r < this.inlines.length; r++) {
      const n = this.inlines[r], i = this.inlines[r + 1];
      e += n.toString(), i && i.range.start.line > n.range.start.line && (e += `
`);
    }
    return e;
  }
  toMarkdown(e) {
    let r = "";
    for (let n = 0; n < this.inlines.length; n++) {
      const i = this.inlines[n], a = this.inlines[n + 1];
      r += i.toMarkdown(e), a && a.range.start.line > i.range.start.line && (r += `
`);
    }
    return r;
  }
}
class mp {
  constructor(e, r) {
    this.text = e, this.range = r;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
}
function dd(t) {
  return t.endsWith(`
`) ? `
` : `

`;
}
class RE {
  constructor(e) {
    this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
  }
  getDocumentation(e) {
    const r = this.commentProvider.getComment(e);
    if (r && sE(r))
      return aE(r).toMarkdown({
        renderLink: (i, a) => this.documentationLinkRenderer(e, i, a),
        renderTag: (i) => this.documentationTagRenderer(e, i)
      });
  }
  documentationLinkRenderer(e, r, n) {
    const i = this.findNameInLocalSymbols(e, r) ?? this.findNameInGlobalScope(e, r);
    if (i && i.nameSegment) {
      const a = i.nameSegment.range.start.line + 1, s = i.nameSegment.range.start.character + 1, o = i.documentUri.with({ fragment: `L${a},${s}` });
      return `[${n}](${o.toString()})`;
    } else
      return;
  }
  documentationTagRenderer(e, r) {
  }
  findNameInLocalSymbols(e, r) {
    const i = Gt(e).localSymbols;
    if (!i)
      return;
    let a = e;
    do {
      const o = i.getStream(a).find((l) => l.name === r);
      if (o)
        return o;
      a = a.$container;
    } while (a);
  }
  findNameInGlobalScope(e, r) {
    return this.indexManager.allElements().find((i) => i.name === r);
  }
}
class vE {
  constructor(e) {
    this.grammarConfig = () => e.parser.GrammarConfig;
  }
  getComment(e) {
    var r;
    return MR(e) ? e.$comment : (r = $m(e.$cstNode, this.grammarConfig().multilineCommentRules)) == null ? void 0 : r.text;
  }
}
class EE {
  constructor(e) {
    this.syncParser = e.parser.LangiumParser;
  }
  parse(e, r) {
    return Promise.resolve(this.syncParser.parse(e));
  }
}
class $E {
  constructor() {
    this.previousTokenSource = new Bc(), this.writeQueue = [], this.readQueue = [], this.done = !0;
  }
  write(e) {
    this.cancelWrite();
    const r = $R();
    return this.previousTokenSource = r, this.enqueue(this.writeQueue, e, r.token);
  }
  read(e) {
    return this.enqueue(this.readQueue, e);
  }
  enqueue(e, r, n = fe.None) {
    const i = new Wc(), a = {
      action: r,
      deferred: i,
      cancellationToken: n
    };
    return e.push(a), this.performNextOperation(), i.promise;
  }
  async performNextOperation() {
    if (!this.done)
      return;
    const e = [];
    if (this.writeQueue.length > 0)
      e.push(this.writeQueue.shift());
    else if (this.readQueue.length > 0)
      e.push(...this.readQueue.splice(0, this.readQueue.length));
    else
      return;
    this.done = !1, await Promise.all(e.map(async ({ action: r, deferred: n, cancellationToken: i }) => {
      try {
        const a = await Promise.resolve().then(() => r(i));
        n.resolve(a);
      } catch (a) {
        Us(a) ? n.resolve(void 0) : n.reject(a);
      }
    })), this.done = !0, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
}
class AE {
  constructor(e) {
    this.grammarElementIdMap = new Gu(), this.tokenTypeIdMap = new Gu(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
  }
  dehydrate(e) {
    return {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
      // We need to create shallow copies of the errors
      // The original errors inherit from the `Error` class, which is not transferable across worker threads
      parserErrors: e.parserErrors.map((r) => ({ ...r, message: r.message })),
      value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
    };
  }
  dehydrateLexerReport(e) {
    return e;
  }
  createDehyrationContext(e) {
    const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
    for (const i of jt(e))
      r.set(i, {});
    if (e.$cstNode)
      for (const i of Fo(e.$cstNode))
        n.set(i, {});
    return {
      astNodes: r,
      cstNodes: n
    };
  }
  dehydrateAstNode(e, r) {
    const n = r.astNodes.get(e);
    n.$type = e.$type, n.$containerIndex = e.$containerIndex, n.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (n.$cstNode = this.dehydrateCstNode(e.$cstNode, r));
    for (const [i, a] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(a)) {
          const s = [];
          n[i] = s;
          for (const o of a)
            je(o) ? s.push(this.dehydrateAstNode(o, r)) : pt(o) ? s.push(this.dehydrateReference(o, r)) : s.push(o);
        } else je(a) ? n[i] = this.dehydrateAstNode(a, r) : pt(a) ? n[i] = this.dehydrateReference(a, r) : a !== void 0 && (n[i] = a);
    return n;
  }
  dehydrateReference(e, r) {
    const n = {};
    return n.$refText = e.$refText, e.$refNode && (n.$refNode = r.cstNodes.get(e.$refNode)), n;
  }
  dehydrateCstNode(e, r) {
    const n = r.cstNodes.get(e);
    return _d(e) ? n.fullText = e.fullText : n.grammarSource = this.getGrammarElementId(e.grammarSource), n.hidden = e.hidden, n.astNode = r.astNodes.get(e.astNode), Pi(e) ? n.content = e.content.map((i) => this.dehydrateCstNode(i, r)) : Nd(e) && (n.tokenType = e.tokenType.name, n.offset = e.offset, n.length = e.length, n.startLine = e.range.start.line, n.startColumn = e.range.start.character, n.endLine = e.range.end.line, n.endColumn = e.range.end.character), n;
  }
  hydrate(e) {
    const r = e.value, n = this.createHydrationContext(r);
    return "$cstNode" in r && this.hydrateCstNode(r.$cstNode, n), {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport,
      parserErrors: e.parserErrors,
      value: this.hydrateAstNode(r, n)
    };
  }
  createHydrationContext(e) {
    const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
    for (const a of jt(e))
      r.set(a, {});
    let i;
    if (e.$cstNode)
      for (const a of Fo(e.$cstNode)) {
        let s;
        "fullText" in a ? (s = new Mh(a.fullText), i = s) : "content" in a ? s = new jc() : "tokenType" in a && (s = this.hydrateCstLeafNode(a)), s && (n.set(a, s), s.root = i);
      }
    return {
      astNodes: r,
      cstNodes: n
    };
  }
  hydrateAstNode(e, r) {
    const n = r.astNodes.get(e);
    n.$type = e.$type, n.$containerIndex = e.$containerIndex, n.$containerProperty = e.$containerProperty, e.$cstNode && (n.$cstNode = r.cstNodes.get(e.$cstNode));
    for (const [i, a] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(a)) {
          const s = [];
          n[i] = s;
          for (const o of a)
            je(o) ? s.push(this.setParent(this.hydrateAstNode(o, r), n)) : pt(o) ? s.push(this.hydrateReference(o, n, i, r)) : s.push(o);
        } else je(a) ? n[i] = this.setParent(this.hydrateAstNode(a, r), n) : pt(a) ? n[i] = this.hydrateReference(a, n, i, r) : a !== void 0 && (n[i] = a);
    return n;
  }
  setParent(e, r) {
    return e.$container = r, e;
  }
  hydrateReference(e, r, n, i) {
    return this.linker.buildReference(r, n, i.cstNodes.get(e.$refNode), e.$refText);
  }
  hydrateCstNode(e, r, n = 0) {
    const i = r.cstNodes.get(e);
    if (typeof e.grammarSource == "number" && (i.grammarSource = this.getGrammarElement(e.grammarSource)), i.astNode = r.astNodes.get(e.astNode), Pi(i))
      for (const a of e.content) {
        const s = this.hydrateCstNode(a, r, n++);
        i.content.push(s);
      }
    return i;
  }
  hydrateCstLeafNode(e) {
    const r = this.getTokenType(e.tokenType), n = e.offset, i = e.length, a = e.startLine, s = e.startColumn, o = e.endLine, l = e.endColumn, c = e.hidden;
    return new Jl(n, i, {
      start: {
        line: a,
        character: s
      },
      end: {
        line: o,
        character: l
      }
    }, r, c);
  }
  getTokenType(e) {
    return this.lexer.definition[e];
  }
  getGrammarElementId(e) {
    if (e)
      return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
  }
  getGrammarElement(e) {
    return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
  }
  createGrammarElementIdMap() {
    let e = 0;
    for (const r of jt(this.grammar))
      Qp(r) && this.grammarElementIdMap.set(r, e++);
  }
}
function kt(t) {
  return {
    documentation: {
      CommentProvider: (e) => new vE(e),
      DocumentationProvider: (e) => new RE(e)
    },
    parser: {
      AsyncParser: (e) => new EE(e),
      GrammarConfig: (e) => Xm(e),
      LangiumParser: (e) => oR(e),
      CompletionParser: (e) => sR(e),
      ValueConverter: () => new Vh(),
      TokenBuilder: () => new Kh(),
      Lexer: (e) => new nE(e),
      ParserErrorMessageProvider: () => new jh(),
      LexerErrorMessageProvider: () => new tE()
    },
    workspace: {
      AstNodeLocator: () => new qR(),
      AstNodeDescriptionProvider: (e) => new KR(e),
      ReferenceDescriptionProvider: (e) => new VR(e)
    },
    references: {
      Linker: (e) => new bR(e),
      NameProvider: () => new NR(),
      ScopeProvider: (e) => new DR(e),
      ScopeComputation: (e) => new IR(e),
      References: (e) => new _R(e)
    },
    serializer: {
      Hydrator: (e) => new AE(e),
      JsonSerializer: (e) => new FR(e)
    },
    validation: {
      DocumentValidator: (e) => new UR(e),
      ValidationRegistry: (e) => new jR(e)
    },
    shared: () => t.shared
  };
}
function Nt(t) {
  return {
    ServiceRegistry: (e) => new GR(e),
    workspace: {
      LangiumDocuments: (e) => new wR(e),
      LangiumDocumentFactory: (e) => new SR(e),
      DocumentBuilder: (e) => new Zv(e),
      IndexManager: (e) => new Qv(e),
      WorkspaceManager: (e) => new eE(e),
      FileSystemProvider: (e) => t.fileSystemProvider(e),
      WorkspaceLock: () => new $E(),
      ConfigurationProvider: (e) => new HR(e)
    },
    profilers: {}
  };
}
var hd;
(function(t) {
  t.merge = (e, r) => Vi(Vi({}, e), r);
})(hd || (hd = {}));
function be(t, e, r, n, i, a, s, o, l) {
  const c = [t, e, r, n, i, a, s, o, l].reduce(Vi, {});
  return gp(c);
}
const CE = Symbol("isProxy");
function gp(t, e) {
  const r = new Proxy({}, {
    deleteProperty: () => !1,
    set: () => {
      throw new Error("Cannot set property on injected service container");
    },
    get: (n, i) => i === CE ? !0 : md(n, i, t, e || r),
    getOwnPropertyDescriptor: (n, i) => (md(n, i, t, e || r), Object.getOwnPropertyDescriptor(n, i)),
    // used by for..in
    has: (n, i) => i in t,
    // used by ..in..
    ownKeys: () => [...Object.getOwnPropertyNames(t)]
    // used by for..in
  });
  return r;
}
const pd = Symbol();
function md(t, e, r, n) {
  if (e in t) {
    if (t[e] instanceof Error)
      throw new Error("Construction failure. Please make sure that your dependencies are constructable. Cause: " + t[e]);
    if (t[e] === pd)
      throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
    return t[e];
  } else if (e in r) {
    const i = r[e];
    t[e] = pd;
    try {
      t[e] = typeof i == "function" ? i(n) : gp(i, n);
    } catch (a) {
      throw t[e] = a instanceof Error ? a : void 0, a;
    }
    return t[e];
  } else
    return;
}
function Vi(t, e) {
  if (e) {
    for (const [r, n] of Object.entries(e))
      if (n != null)
        if (typeof n == "object") {
          const i = t[r];
          typeof i == "object" && i !== null ? t[r] = Vi(i, n) : t[r] = Vi({}, n);
        } else
          t[r] = n;
  }
  return t;
}
class SE {
  stat(e) {
    throw new Error("No file system is available.");
  }
  statSync(e) {
    throw new Error("No file system is available.");
  }
  async exists() {
    return !1;
  }
  existsSync() {
    return !1;
  }
  readBinary() {
    throw new Error("No file system is available.");
  }
  readBinarySync() {
    throw new Error("No file system is available.");
  }
  readFile() {
    throw new Error("No file system is available.");
  }
  readFileSync() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
  readDirectorySync() {
    return [];
  }
}
const _t = {
  fileSystemProvider: () => new SE()
}, wE = {
  Grammar: () => {
  },
  LanguageMetaData: () => ({
    caseInsensitive: !1,
    fileExtensions: [".langium"],
    languageId: "langium"
  })
}, bE = {
  AstReflection: () => new Dd()
};
function kE() {
  const t = be(Nt(_t), bE), e = be(kt({ shared: t }), wE);
  return t.ServiceRegistry.register(e), e;
}
function Ht(t) {
  const e = kE(), r = e.serializer.JsonSerializer.deserialize(t);
  return e.shared.workspace.LangiumDocumentFactory.fromModel(r, gt.parse(`memory:/${r.name ?? "grammar"}.langium`)), r;
}
var NE = Object.defineProperty, S = (t, e) => NE(t, "name", { value: e, configurable: !0 }), mc;
((t) => {
  t.Terminals = {
    ARROW_DIRECTION: /L|R|T|B/,
    ARROW_GROUP: /\{group\}/,
    ARROW_INTO: /<|>/,
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
    ID: /[\w]([-\w]*\w)?/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
    ARCH_ICON: /\([\w-:]+\)/,
    ARCH_TITLE: /\[(?:"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|[\w ]+)\]/
  };
})(mc || (mc = {}));
var gc;
((t) => {
  t.Terminals = {
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    INT: /0|[1-9][0-9]*(?!\.)/,
    STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
    REFERENCE: /\w([-\./\w]*[-\w])?/
  };
})(gc || (gc = {}));
var yc;
((t) => {
  t.Terminals = {
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
  };
})(yc || (yc = {}));
var Tc;
((t) => {
  t.Terminals = {
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    INT: /0|[1-9][0-9]*(?!\.)/,
    STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
  };
})(Tc || (Tc = {}));
var Rc;
((t) => {
  t.Terminals = {
    NUMBER_PIE: /(?:-?[0-9]+\.[0-9]+(?!\.))|(?:-?(0|[1-9][0-9]*)(?!\.))/,
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
  };
})(Rc || (Rc = {}));
var vc;
((t) => {
  t.Terminals = {
    GRATICULE: /circle|polygon/,
    BOOLEAN: /true|false/,
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    NUMBER: /(?:[0-9]+\.[0-9]+(?!\.))|(?:0|[1-9][0-9]*(?!\.))/,
    STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
    ID: /[\w]([-\w]*\w)?/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
  };
})(vc || (vc = {}));
var Ec;
((t) => {
  t.Terminals = {
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    TREEMAP_KEYWORD: /treemap-beta|treemap/,
    CLASS_DEF: /classDef\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\s+([^;\r\n]*))?(?:;)?/,
    STYLE_SEPARATOR: /:::/,
    SEPARATOR: /:/,
    COMMA: /,/,
    INDENTATION: /[ \t]{1,}/,
    WS: /[ \t]+/,
    ML_COMMENT: /\%\%[^\n]*/,
    NL: /\r?\n/,
    ID2: /[a-zA-Z_][a-zA-Z0-9_]*/,
    NUMBER2: /[0-9_\.\,]+/,
    STRING2: /"[^"]*"|'[^']*'/
  };
})(Ec || (Ec = {}));
var $c;
((t) => {
  t.Terminals = {
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    INDENTATION: /[ \t]{1,}/,
    WS: /[ \t]+/,
    ML_COMMENT: /\%\%[^\n]*/,
    NL: /\r?\n/,
    STRING2: /"[^"]*"|'[^']*'/
  };
})($c || ($c = {}));
var Ac;
((t) => {
  t.Terminals = {
    WARDLEY_NUMBER: /[0-9]+\.[0-9]+/,
    ARROW: /->/,
    LINK_PORT: /\+<>|\+>|\+</,
    LINK_ARROW: /-->|-\.->|>|\+'[^']*'<>|\+'[^']*'<|\+'[^']*'>/,
    LINK_LABEL: /;[^\n\r]+/,
    STRATEGY: /build|buy|outsource|market/,
    KW_WARDLEY: /wardley-beta/,
    KW_SIZE: /size/,
    KW_EVOLUTION: /evolution/,
    KW_ANCHOR: /anchor/,
    KW_COMPONENT: /component/,
    KW_LABEL: /label/,
    KW_INERTIA: /inertia/,
    KW_EVOLVE: /evolve/,
    KW_PIPELINE: /pipeline/,
    KW_NOTE: /note/,
    KW_ANNOTATIONS: /annotations/,
    KW_ANNOTATION: /annotation/,
    KW_ACCELERATOR: /accelerator/,
    KW_DEACCELERATOR: /deaccelerator/,
    NAME_WITH_SPACES: /(?!title\s|accTitle|accDescr)[A-Za-z][A-Za-z0-9_()&]*(?:[ \t]+[A-Za-z(][A-Za-z0-9_()&]*)*/,
    WS: /[ \t]+/,
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    INT: /0|[1-9][0-9]*(?!\.)/,
    STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
    ID: /[\w]([-\w]*\w)?/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
  };
})(Ac || (Ac = {}));
({
  ...mc.Terminals,
  ...gc.Terminals,
  ...yc.Terminals,
  ...Tc.Terminals,
  ...Rc.Terminals,
  ...vc.Terminals,
  ...$c.Terminals,
  ...Ec.Terminals,
  ...Ac.Terminals
});
var ka = {
  $type: "Accelerator",
  name: "name",
  x: "x",
  y: "y"
}, Na = {
  $type: "Anchor",
  evolution: "evolution",
  name: "name",
  visibility: "visibility"
}, mi = {
  $type: "Annotation",
  number: "number",
  text: "text",
  x: "x",
  y: "y"
}, Ro = {
  $type: "Annotations",
  x: "x",
  y: "y"
}, Lt = {
  $type: "Architecture",
  accDescr: "accDescr",
  accTitle: "accTitle",
  edges: "edges",
  groups: "groups",
  junctions: "junctions",
  services: "services",
  title: "title"
};
function _E(t) {
  return ot.isInstance(t, Lt.$type);
}
S(_E, "isArchitecture");
var _a = {
  $type: "Axis",
  label: "label",
  name: "name"
}, Ja = {
  $type: "Branch",
  name: "name",
  order: "order"
};
function IE(t) {
  return ot.isInstance(t, Ja.$type);
}
S(IE, "isBranch");
var gd = {
  $type: "Checkout",
  branch: "branch"
}, Ia = {
  $type: "CherryPicking",
  id: "id",
  parent: "parent",
  tags: "tags"
}, vo = {
  $type: "ClassDefStatement",
  className: "className",
  styleText: "styleText"
}, en = {
  $type: "Commit",
  id: "id",
  message: "message",
  tags: "tags",
  type: "type"
};
function PE(t) {
  return ot.isInstance(t, en.$type);
}
S(PE, "isCommit");
var yr = {
  $type: "Component",
  decorator: "decorator",
  evolution: "evolution",
  inertia: "inertia",
  label: "label",
  name: "name",
  visibility: "visibility"
}, Pa = {
  $type: "Curve",
  entries: "entries",
  label: "label",
  name: "name"
}, Oa = {
  $type: "Deaccelerator",
  name: "name",
  x: "x",
  y: "y"
}, yd = {
  $type: "Decorator",
  strategy: "strategy"
}, Ur = {
  $type: "Direction",
  accDescr: "accDescr",
  accTitle: "accTitle",
  dir: "dir",
  statements: "statements",
  title: "title"
}, Tt = {
  $type: "Edge",
  lhsDir: "lhsDir",
  lhsGroup: "lhsGroup",
  lhsId: "lhsId",
  lhsInto: "lhsInto",
  rhsDir: "rhsDir",
  rhsGroup: "rhsGroup",
  rhsId: "rhsId",
  rhsInto: "rhsInto",
  title: "title"
}, Eo = {
  $type: "Entry",
  axis: "axis",
  value: "value"
}, Td = {
  $type: "Evolution",
  stages: "stages"
}, La = {
  $type: "EvolutionStage",
  boundary: "boundary",
  name: "name",
  secondName: "secondName"
}, $o = {
  $type: "Evolve",
  component: "component",
  target: "target"
}, Sr = {
  $type: "GitGraph",
  accDescr: "accDescr",
  accTitle: "accTitle",
  statements: "statements",
  title: "title"
};
function OE(t) {
  return ot.isInstance(t, Sr.$type);
}
S(OE, "isGitGraph");
var gi = {
  $type: "Group",
  icon: "icon",
  id: "id",
  in: "in",
  title: "title"
}, _i = {
  $type: "Info",
  accDescr: "accDescr",
  accTitle: "accTitle",
  title: "title"
};
function LE(t) {
  return ot.isInstance(t, _i.$type);
}
S(LE, "isInfo");
var yi = {
  $type: "Item",
  classSelector: "classSelector",
  name: "name"
}, Ao = {
  $type: "Junction",
  id: "id",
  in: "in"
}, Ti = {
  $type: "Label",
  negX: "negX",
  negY: "negY",
  offsetX: "offsetX",
  offsetY: "offsetY"
}, xa = {
  $type: "Leaf",
  classSelector: "classSelector",
  name: "name",
  value: "value"
}, Tr = {
  $type: "Link",
  arrow: "arrow",
  from: "from",
  fromPort: "fromPort",
  linkLabel: "linkLabel",
  to: "to",
  toPort: "toPort"
}, tn = {
  $type: "Merge",
  branch: "branch",
  id: "id",
  tags: "tags",
  type: "type"
};
function xE(t) {
  return ot.isInstance(t, tn.$type);
}
S(xE, "isMerge");
var Da = {
  $type: "Note",
  evolution: "evolution",
  text: "text",
  visibility: "visibility"
}, Co = {
  $type: "Option",
  name: "name",
  value: "value"
}, rn = {
  $type: "Packet",
  accDescr: "accDescr",
  accTitle: "accTitle",
  blocks: "blocks",
  title: "title"
};
function DE(t) {
  return ot.isInstance(t, rn.$type);
}
S(DE, "isPacket");
var nn = {
  $type: "PacketBlock",
  bits: "bits",
  end: "end",
  label: "label",
  start: "start"
};
function ME(t) {
  return ot.isInstance(t, nn.$type);
}
S(ME, "isPacketBlock");
var wr = {
  $type: "Pie",
  accDescr: "accDescr",
  accTitle: "accTitle",
  sections: "sections",
  showData: "showData",
  title: "title"
};
function FE(t) {
  return ot.isInstance(t, wr.$type);
}
S(FE, "isPie");
var Za = {
  $type: "PieSection",
  label: "label",
  value: "value"
};
function GE(t) {
  return ot.isInstance(t, Za.$type);
}
S(GE, "isPieSection");
var So = {
  $type: "Pipeline",
  components: "components",
  parent: "parent"
}, Ma = {
  $type: "PipelineComponent",
  evolution: "evolution",
  label: "label",
  name: "name"
}, Rr = {
  $type: "Radar",
  accDescr: "accDescr",
  accTitle: "accTitle",
  axes: "axes",
  curves: "curves",
  options: "options",
  title: "title"
}, wo = {
  $type: "Section",
  classSelector: "classSelector",
  name: "name"
}, Br = {
  $type: "Service",
  icon: "icon",
  iconText: "iconText",
  id: "id",
  in: "in",
  title: "title"
}, bo = {
  $type: "Size",
  height: "height",
  width: "width"
}, Wr = {
  $type: "Statement"
}, an = {
  $type: "Treemap",
  accDescr: "accDescr",
  accTitle: "accTitle",
  title: "title",
  TreemapRows: "TreemapRows"
};
function jE(t) {
  return ot.isInstance(t, an.$type);
}
S(jE, "isTreemap");
var ko = {
  $type: "TreemapRow",
  indent: "indent",
  item: "item"
}, No = {
  $type: "TreeNode",
  indent: "indent",
  name: "name"
}, Ri = {
  $type: "TreeView",
  accDescr: "accDescr",
  accTitle: "accTitle",
  nodes: "nodes",
  title: "title"
}, Le = {
  $type: "Wardley",
  accDescr: "accDescr",
  accelerators: "accelerators",
  accTitle: "accTitle",
  anchors: "anchors",
  annotation: "annotation",
  annotations: "annotations",
  components: "components",
  deaccelerators: "deaccelerators",
  evolution: "evolution",
  evolves: "evolves",
  links: "links",
  notes: "notes",
  pipelines: "pipelines",
  size: "size",
  title: "title"
};
function zE(t) {
  return ot.isInstance(t, Le.$type);
}
S(zE, "isWardley");
var cn, yp = (cn = class extends kd {
  constructor() {
    super(...arguments), this.types = {
      Accelerator: {
        name: ka.$type,
        properties: {
          name: {
            name: ka.name
          },
          x: {
            name: ka.x
          },
          y: {
            name: ka.y
          }
        },
        superTypes: []
      },
      Anchor: {
        name: Na.$type,
        properties: {
          evolution: {
            name: Na.evolution
          },
          name: {
            name: Na.name
          },
          visibility: {
            name: Na.visibility
          }
        },
        superTypes: []
      },
      Annotation: {
        name: mi.$type,
        properties: {
          number: {
            name: mi.number
          },
          text: {
            name: mi.text
          },
          x: {
            name: mi.x
          },
          y: {
            name: mi.y
          }
        },
        superTypes: []
      },
      Annotations: {
        name: Ro.$type,
        properties: {
          x: {
            name: Ro.x
          },
          y: {
            name: Ro.y
          }
        },
        superTypes: []
      },
      Architecture: {
        name: Lt.$type,
        properties: {
          accDescr: {
            name: Lt.accDescr
          },
          accTitle: {
            name: Lt.accTitle
          },
          edges: {
            name: Lt.edges,
            defaultValue: []
          },
          groups: {
            name: Lt.groups,
            defaultValue: []
          },
          junctions: {
            name: Lt.junctions,
            defaultValue: []
          },
          services: {
            name: Lt.services,
            defaultValue: []
          },
          title: {
            name: Lt.title
          }
        },
        superTypes: []
      },
      Axis: {
        name: _a.$type,
        properties: {
          label: {
            name: _a.label
          },
          name: {
            name: _a.name
          }
        },
        superTypes: []
      },
      Branch: {
        name: Ja.$type,
        properties: {
          name: {
            name: Ja.name
          },
          order: {
            name: Ja.order
          }
        },
        superTypes: [Wr.$type]
      },
      Checkout: {
        name: gd.$type,
        properties: {
          branch: {
            name: gd.branch
          }
        },
        superTypes: [Wr.$type]
      },
      CherryPicking: {
        name: Ia.$type,
        properties: {
          id: {
            name: Ia.id
          },
          parent: {
            name: Ia.parent
          },
          tags: {
            name: Ia.tags,
            defaultValue: []
          }
        },
        superTypes: [Wr.$type]
      },
      ClassDefStatement: {
        name: vo.$type,
        properties: {
          className: {
            name: vo.className
          },
          styleText: {
            name: vo.styleText
          }
        },
        superTypes: []
      },
      Commit: {
        name: en.$type,
        properties: {
          id: {
            name: en.id
          },
          message: {
            name: en.message
          },
          tags: {
            name: en.tags,
            defaultValue: []
          },
          type: {
            name: en.type
          }
        },
        superTypes: [Wr.$type]
      },
      Component: {
        name: yr.$type,
        properties: {
          decorator: {
            name: yr.decorator
          },
          evolution: {
            name: yr.evolution
          },
          inertia: {
            name: yr.inertia,
            defaultValue: !1
          },
          label: {
            name: yr.label
          },
          name: {
            name: yr.name
          },
          visibility: {
            name: yr.visibility
          }
        },
        superTypes: []
      },
      Curve: {
        name: Pa.$type,
        properties: {
          entries: {
            name: Pa.entries,
            defaultValue: []
          },
          label: {
            name: Pa.label
          },
          name: {
            name: Pa.name
          }
        },
        superTypes: []
      },
      Deaccelerator: {
        name: Oa.$type,
        properties: {
          name: {
            name: Oa.name
          },
          x: {
            name: Oa.x
          },
          y: {
            name: Oa.y
          }
        },
        superTypes: []
      },
      Decorator: {
        name: yd.$type,
        properties: {
          strategy: {
            name: yd.strategy
          }
        },
        superTypes: []
      },
      Direction: {
        name: Ur.$type,
        properties: {
          accDescr: {
            name: Ur.accDescr
          },
          accTitle: {
            name: Ur.accTitle
          },
          dir: {
            name: Ur.dir
          },
          statements: {
            name: Ur.statements,
            defaultValue: []
          },
          title: {
            name: Ur.title
          }
        },
        superTypes: [Sr.$type]
      },
      Edge: {
        name: Tt.$type,
        properties: {
          lhsDir: {
            name: Tt.lhsDir
          },
          lhsGroup: {
            name: Tt.lhsGroup,
            defaultValue: !1
          },
          lhsId: {
            name: Tt.lhsId
          },
          lhsInto: {
            name: Tt.lhsInto,
            defaultValue: !1
          },
          rhsDir: {
            name: Tt.rhsDir
          },
          rhsGroup: {
            name: Tt.rhsGroup,
            defaultValue: !1
          },
          rhsId: {
            name: Tt.rhsId
          },
          rhsInto: {
            name: Tt.rhsInto,
            defaultValue: !1
          },
          title: {
            name: Tt.title
          }
        },
        superTypes: []
      },
      Entry: {
        name: Eo.$type,
        properties: {
          axis: {
            name: Eo.axis,
            referenceType: _a.$type
          },
          value: {
            name: Eo.value
          }
        },
        superTypes: []
      },
      Evolution: {
        name: Td.$type,
        properties: {
          stages: {
            name: Td.stages,
            defaultValue: []
          }
        },
        superTypes: []
      },
      EvolutionStage: {
        name: La.$type,
        properties: {
          boundary: {
            name: La.boundary
          },
          name: {
            name: La.name
          },
          secondName: {
            name: La.secondName
          }
        },
        superTypes: []
      },
      Evolve: {
        name: $o.$type,
        properties: {
          component: {
            name: $o.component
          },
          target: {
            name: $o.target
          }
        },
        superTypes: []
      },
      GitGraph: {
        name: Sr.$type,
        properties: {
          accDescr: {
            name: Sr.accDescr
          },
          accTitle: {
            name: Sr.accTitle
          },
          statements: {
            name: Sr.statements,
            defaultValue: []
          },
          title: {
            name: Sr.title
          }
        },
        superTypes: []
      },
      Group: {
        name: gi.$type,
        properties: {
          icon: {
            name: gi.icon
          },
          id: {
            name: gi.id
          },
          in: {
            name: gi.in
          },
          title: {
            name: gi.title
          }
        },
        superTypes: []
      },
      Info: {
        name: _i.$type,
        properties: {
          accDescr: {
            name: _i.accDescr
          },
          accTitle: {
            name: _i.accTitle
          },
          title: {
            name: _i.title
          }
        },
        superTypes: []
      },
      Item: {
        name: yi.$type,
        properties: {
          classSelector: {
            name: yi.classSelector
          },
          name: {
            name: yi.name
          }
        },
        superTypes: []
      },
      Junction: {
        name: Ao.$type,
        properties: {
          id: {
            name: Ao.id
          },
          in: {
            name: Ao.in
          }
        },
        superTypes: []
      },
      Label: {
        name: Ti.$type,
        properties: {
          negX: {
            name: Ti.negX,
            defaultValue: !1
          },
          negY: {
            name: Ti.negY,
            defaultValue: !1
          },
          offsetX: {
            name: Ti.offsetX
          },
          offsetY: {
            name: Ti.offsetY
          }
        },
        superTypes: []
      },
      Leaf: {
        name: xa.$type,
        properties: {
          classSelector: {
            name: xa.classSelector
          },
          name: {
            name: xa.name
          },
          value: {
            name: xa.value
          }
        },
        superTypes: [yi.$type]
      },
      Link: {
        name: Tr.$type,
        properties: {
          arrow: {
            name: Tr.arrow
          },
          from: {
            name: Tr.from
          },
          fromPort: {
            name: Tr.fromPort
          },
          linkLabel: {
            name: Tr.linkLabel
          },
          to: {
            name: Tr.to
          },
          toPort: {
            name: Tr.toPort
          }
        },
        superTypes: []
      },
      Merge: {
        name: tn.$type,
        properties: {
          branch: {
            name: tn.branch
          },
          id: {
            name: tn.id
          },
          tags: {
            name: tn.tags,
            defaultValue: []
          },
          type: {
            name: tn.type
          }
        },
        superTypes: [Wr.$type]
      },
      Note: {
        name: Da.$type,
        properties: {
          evolution: {
            name: Da.evolution
          },
          text: {
            name: Da.text
          },
          visibility: {
            name: Da.visibility
          }
        },
        superTypes: []
      },
      Option: {
        name: Co.$type,
        properties: {
          name: {
            name: Co.name
          },
          value: {
            name: Co.value,
            defaultValue: !1
          }
        },
        superTypes: []
      },
      Packet: {
        name: rn.$type,
        properties: {
          accDescr: {
            name: rn.accDescr
          },
          accTitle: {
            name: rn.accTitle
          },
          blocks: {
            name: rn.blocks,
            defaultValue: []
          },
          title: {
            name: rn.title
          }
        },
        superTypes: []
      },
      PacketBlock: {
        name: nn.$type,
        properties: {
          bits: {
            name: nn.bits
          },
          end: {
            name: nn.end
          },
          label: {
            name: nn.label
          },
          start: {
            name: nn.start
          }
        },
        superTypes: []
      },
      Pie: {
        name: wr.$type,
        properties: {
          accDescr: {
            name: wr.accDescr
          },
          accTitle: {
            name: wr.accTitle
          },
          sections: {
            name: wr.sections,
            defaultValue: []
          },
          showData: {
            name: wr.showData,
            defaultValue: !1
          },
          title: {
            name: wr.title
          }
        },
        superTypes: []
      },
      PieSection: {
        name: Za.$type,
        properties: {
          label: {
            name: Za.label
          },
          value: {
            name: Za.value
          }
        },
        superTypes: []
      },
      Pipeline: {
        name: So.$type,
        properties: {
          components: {
            name: So.components,
            defaultValue: []
          },
          parent: {
            name: So.parent
          }
        },
        superTypes: []
      },
      PipelineComponent: {
        name: Ma.$type,
        properties: {
          evolution: {
            name: Ma.evolution
          },
          label: {
            name: Ma.label
          },
          name: {
            name: Ma.name
          }
        },
        superTypes: []
      },
      Radar: {
        name: Rr.$type,
        properties: {
          accDescr: {
            name: Rr.accDescr
          },
          accTitle: {
            name: Rr.accTitle
          },
          axes: {
            name: Rr.axes,
            defaultValue: []
          },
          curves: {
            name: Rr.curves,
            defaultValue: []
          },
          options: {
            name: Rr.options,
            defaultValue: []
          },
          title: {
            name: Rr.title
          }
        },
        superTypes: []
      },
      Section: {
        name: wo.$type,
        properties: {
          classSelector: {
            name: wo.classSelector
          },
          name: {
            name: wo.name
          }
        },
        superTypes: [yi.$type]
      },
      Service: {
        name: Br.$type,
        properties: {
          icon: {
            name: Br.icon
          },
          iconText: {
            name: Br.iconText
          },
          id: {
            name: Br.id
          },
          in: {
            name: Br.in
          },
          title: {
            name: Br.title
          }
        },
        superTypes: []
      },
      Size: {
        name: bo.$type,
        properties: {
          height: {
            name: bo.height
          },
          width: {
            name: bo.width
          }
        },
        superTypes: []
      },
      Statement: {
        name: Wr.$type,
        properties: {},
        superTypes: []
      },
      TreeNode: {
        name: No.$type,
        properties: {
          indent: {
            name: No.indent
          },
          name: {
            name: No.name
          }
        },
        superTypes: []
      },
      TreeView: {
        name: Ri.$type,
        properties: {
          accDescr: {
            name: Ri.accDescr
          },
          accTitle: {
            name: Ri.accTitle
          },
          nodes: {
            name: Ri.nodes,
            defaultValue: []
          },
          title: {
            name: Ri.title
          }
        },
        superTypes: []
      },
      Treemap: {
        name: an.$type,
        properties: {
          accDescr: {
            name: an.accDescr
          },
          accTitle: {
            name: an.accTitle
          },
          title: {
            name: an.title
          },
          TreemapRows: {
            name: an.TreemapRows,
            defaultValue: []
          }
        },
        superTypes: []
      },
      TreemapRow: {
        name: ko.$type,
        properties: {
          indent: {
            name: ko.indent
          },
          item: {
            name: ko.item
          }
        },
        superTypes: []
      },
      Wardley: {
        name: Le.$type,
        properties: {
          accDescr: {
            name: Le.accDescr
          },
          accelerators: {
            name: Le.accelerators,
            defaultValue: []
          },
          accTitle: {
            name: Le.accTitle
          },
          anchors: {
            name: Le.anchors,
            defaultValue: []
          },
          annotation: {
            name: Le.annotation,
            defaultValue: []
          },
          annotations: {
            name: Le.annotations,
            defaultValue: []
          },
          components: {
            name: Le.components,
            defaultValue: []
          },
          deaccelerators: {
            name: Le.deaccelerators,
            defaultValue: []
          },
          evolution: {
            name: Le.evolution
          },
          evolves: {
            name: Le.evolves,
            defaultValue: []
          },
          links: {
            name: Le.links,
            defaultValue: []
          },
          notes: {
            name: Le.notes,
            defaultValue: []
          },
          pipelines: {
            name: Le.pipelines,
            defaultValue: []
          },
          size: {
            name: Le.size
          },
          title: {
            name: Le.title
          }
        },
        superTypes: []
      }
    };
  }
}, S(cn, "MermaidAstReflection"), cn), ot = new yp(), Rd, UE = /* @__PURE__ */ S(() => Rd ?? (Rd = Ht(`{"$type":"Grammar","isDeclared":true,"name":"ArchitectureGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[(?:\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'|[\\\\w ]+)\\\\]/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[],"types":[]}`)), "ArchitectureGrammarGrammar"), vd, BE = /* @__PURE__ */ S(() => vd ?? (vd = Ht(`{"$type":"Grammar","isDeclared":true,"name":"GitGraphGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[],"types":[]}`)), "GitGraphGrammarGrammar"), Ed, WE = /* @__PURE__ */ S(() => Ed ?? (Ed = Ht(`{"$type":"Grammar","isDeclared":true,"name":"InfoGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), "InfoGrammarGrammar"), $d, KE = /* @__PURE__ */ S(() => $d ?? ($d = Ht(`{"$type":"Grammar","isDeclared":true,"name":"PacketGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), "PacketGrammarGrammar"), Ad, VE = /* @__PURE__ */ S(() => Ad ?? (Ad = Ht(`{"$type":"Grammar","isDeclared":true,"name":"PieGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"FLOAT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?(0|[1-9][0-9]*)(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@2"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@3"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@11"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@12"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), "PieGrammarGrammar"), Cd, qE = /* @__PURE__ */ S(() => Cd ?? (Cd = Ht(`{"$type":"Grammar","isDeclared":true,"name":"RadarGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}},"isMulti":false}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"types":[]}`)), "RadarGrammarGrammar"), Sd, HE = /* @__PURE__ */ S(() => Sd ?? (Sd = Ht(`{"$type":"Grammar","isDeclared":true,"name":"TreemapGrammar","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@15"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"imports":[],"types":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`)), "TreemapGrammarGrammar"), wd, XE = /* @__PURE__ */ S(() => wd ?? (wd = Ht(`{"$type":"Grammar","isDeclared":true,"name":"TreeViewGrammar","rules":[{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"TreeView","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"treeView-beta"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"nodes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false},{"$type":"ParserRule","name":"TreeNode","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"TreeView","attributes":[{"$type":"TypeAttribute","name":"nodes","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@9"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"imports":[],"types":[],"$comment":"/**\\n * TreeView grammar for Langium\\n * Converted from treemap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treeView declaration.\\n */"}`)), "TreeViewGrammarGrammar"), bd, YE = /* @__PURE__ */ S(() => bd ?? (bd = Ht(`{"$type":"Grammar","isDeclared":true,"name":"WardleyGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Wardley","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@25"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@42"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"size","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"anchors","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"components","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"links","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"evolves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"pipelines","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"notes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"annotations","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Assignment","feature":"annotation","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accelerators","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"Assignment","feature":"deaccelerators","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"Size","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@26"},"arguments":[]},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"width","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"height","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Evolution","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@27"},"arguments":[]},{"$type":"Assignment","feature":"stages","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]},{"$type":"Assignment","feature":"stages","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EvolutionStage","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"@"},{"$type":"Assignment","feature":"boundary","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}}],"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"/"},{"$type":"Assignment","feature":"secondName","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}}],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Anchor","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"visibility","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Component","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"visibility","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"decorator","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"inertia","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"Assignment","feature":"inertia","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]}},{"$type":"Keyword","value":")"}]}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Label","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@30"},"arguments":[]},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"negX","operator":"?=","terminal":{"$type":"Keyword","value":"-"},"cardinality":"?"},{"$type":"Assignment","feature":"offsetX","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"negY","operator":"?=","terminal":{"$type":"Keyword","value":"-"},"cardinality":"?"},{"$type":"Assignment","feature":"offsetY","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Decorator","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"Assignment","feature":"strategy","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]}},{"$type":"Keyword","value":")"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Link","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"from","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Assignment","feature":"fromPort","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"arrow","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]},"cardinality":"?"},{"$type":"Assignment","feature":"to","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Assignment","feature":"toPort","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"linkLabel","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Evolve","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@32"},"arguments":[]},{"$type":"Assignment","feature":"component","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Assignment","feature":"target","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Pipeline","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@33"},"arguments":[]},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"components","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},"cardinality":"+"},{"$type":"Keyword","value":"}"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"PipelineComponent","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Note","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@34"},"arguments":[]},{"$type":"Assignment","feature":"text","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"visibility","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Annotations","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@35"},"arguments":[]},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Annotation","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@36"},"arguments":[]},{"$type":"Assignment","feature":"number","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"Assignment","feature":"text","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"CoordinateValue","dataType":"number","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Accelerator","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@37"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Deaccelerator","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@38"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"WARDLEY_NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"->"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"LINK_PORT","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"+<>"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"+>"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"+<"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"LINK_ARROW","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"-->"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"-.->"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":">"},"parenthesized":false}],"parenthesized":false},{"$type":"RegexToken","regex":"/\\\\+'[^']*'<>/","parenthesized":false}],"parenthesized":false},{"$type":"RegexToken","regex":"/\\\\+'[^']*'</","parenthesized":false}],"parenthesized":false},{"$type":"RegexToken","regex":"/\\\\+'[^']*'>/","parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"LINK_LABEL","definition":{"$type":"RegexToken","regex":"/;[^\\\\n\\\\r]+/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRATEGY","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"build"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"buy"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"outsource"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"market"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_WARDLEY","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"wardley-beta"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_SIZE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"size"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_EVOLUTION","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"evolution"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ANCHOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"anchor"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_COMPONENT","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"component"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_LABEL","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"label"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_INERTIA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"inertia"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_EVOLVE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"evolve"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_PIPELINE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"pipeline"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_NOTE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"note"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ANNOTATIONS","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"annotations"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ANNOTATION","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"annotation"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ACCELERATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"accelerator"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_DEACCELERATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"deaccelerator"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NAME_WITH_SPACES","definition":{"$type":"RegexToken","regex":"/(?!title\\\\s|accTitle|accDescr)[A-Za-z][A-Za-z0-9_()&]*(?:[ \\\\t]+[A-Za-z(][A-Za-z0-9_()&]*)*/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/","parenthesized":false},"fragment":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@44"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@45"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@46"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@47"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@48"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), "WardleyGrammarGrammar"), JE = {
  languageId: "architecture",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, ZE = {
  languageId: "gitGraph",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, QE = {
  languageId: "info",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, e$ = {
  languageId: "packet",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, t$ = {
  languageId: "pie",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, r$ = {
  languageId: "radar",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, n$ = {
  languageId: "treemap",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, i$ = {
  languageId: "treeView",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, a$ = {
  languageId: "wardley",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, Xt = {
  AstReflection: /* @__PURE__ */ S(() => new yp(), "AstReflection")
}, s$ = {
  Grammar: /* @__PURE__ */ S(() => UE(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ S(() => JE, "LanguageMetaData"),
  parser: {}
}, o$ = {
  Grammar: /* @__PURE__ */ S(() => BE(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ S(() => ZE, "LanguageMetaData"),
  parser: {}
}, l$ = {
  Grammar: /* @__PURE__ */ S(() => WE(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ S(() => QE, "LanguageMetaData"),
  parser: {}
}, c$ = {
  Grammar: /* @__PURE__ */ S(() => KE(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ S(() => e$, "LanguageMetaData"),
  parser: {}
}, u$ = {
  Grammar: /* @__PURE__ */ S(() => VE(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ S(() => t$, "LanguageMetaData"),
  parser: {}
}, f$ = {
  Grammar: /* @__PURE__ */ S(() => qE(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ S(() => r$, "LanguageMetaData"),
  parser: {}
}, d$ = {
  Grammar: /* @__PURE__ */ S(() => HE(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ S(() => n$, "LanguageMetaData"),
  parser: {}
}, h$ = {
  Grammar: /* @__PURE__ */ S(() => XE(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ S(() => i$, "LanguageMetaData"),
  parser: {}
}, p$ = {
  Grammar: /* @__PURE__ */ S(() => YE(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ S(() => a$, "LanguageMetaData"),
  parser: {}
}, m$ = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, g$ = /accTitle[\t ]*:([^\n\r]*)/, y$ = /title([\t ][^\n\r]*|)/, T$ = {
  ACC_DESCR: m$,
  ACC_TITLE: g$,
  TITLE: y$
}, un, Yn = (un = class extends Vh {
  runConverter(e, r, n) {
    let i = this.runCommonConverter(e, r, n);
    return i === void 0 && (i = this.runCustomConverter(e, r, n)), i === void 0 ? super.runConverter(e, r, n) : i;
  }
  runCommonConverter(e, r, n) {
    const i = T$[e.name];
    if (i === void 0)
      return;
    const a = i.exec(r);
    if (a !== null) {
      if (a[1] !== void 0)
        return a[1].trim().replace(/[\t ]{2,}/gm, " ");
      if (a[2] !== void 0)
        return a[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, S(un, "AbstractMermaidValueConverter"), un), fn, to = (fn = class extends Yn {
  runCustomConverter(e, r, n) {
  }
}, S(fn, "CommonValueConverter"), fn), dn, Yt = (dn = class extends Kh {
  constructor(e) {
    super(), this.keywords = new Set(e);
  }
  buildKeywordTokens(e, r, n) {
    const i = super.buildKeywordTokens(e, r, n);
    return i.forEach((a) => {
      this.keywords.has(a.name) && a.PATTERN !== void 0 && (a.PATTERN = new RegExp(a.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
    }), i;
  }
}, S(dn, "AbstractMermaidTokenBuilder"), dn), hn;
hn = class extends Yt {
}, S(hn, "CommonTokenBuilder");
var pn, R$ = (pn = class extends Yt {
  constructor() {
    super(["treemap"]);
  }
}, S(pn, "TreemapTokenBuilder"), pn), v$ = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, mn, E$ = (mn = class extends Yn {
  runCustomConverter(e, r, n) {
    if (e.name === "NUMBER2")
      return parseFloat(r.replace(/,/g, ""));
    if (e.name === "SEPARATOR")
      return r.substring(1, r.length - 1);
    if (e.name === "STRING2")
      return r.substring(1, r.length - 1);
    if (e.name === "INDENTATION")
      return r.length;
    if (e.name === "ClassDef") {
      if (typeof r != "string")
        return r;
      const i = v$.exec(r);
      if (i)
        return {
          $type: "ClassDefStatement",
          className: i[1],
          styleText: i[2] || void 0
        };
    }
  }
}, S(mn, "TreemapValueConverter"), mn);
function Tp(t) {
  const e = t.validation.TreemapValidator, r = t.validation.ValidationRegistry;
  if (r) {
    const n = {
      Treemap: e.checkSingleRoot.bind(e)
      // Remove unused validation for TreemapRow
    };
    r.register(n, e);
  }
}
S(Tp, "registerValidationChecks");
var gn, $$ = (gn = class {
  /**
   * Validates that a treemap has only one root node.
   * A root node is defined as a node that has no indentation.
   */
  checkSingleRoot(e, r) {
    let n;
    for (const i of e.TreemapRows)
      i.item && (n === void 0 && // Check if this is a root node (no indentation)
      i.indent === void 0 ? n = 0 : i.indent === void 0 ? r("error", "Multiple root nodes are not allowed in a treemap.", {
        node: i,
        property: "item"
      }) : n !== void 0 && n >= parseInt(i.indent, 10) && r("error", "Multiple root nodes are not allowed in a treemap.", {
        node: i,
        property: "item"
      }));
  }
}, S(gn, "TreemapValidator"), gn), Rp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ S(() => new R$(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ S(() => new E$(), "ValueConverter")
  },
  validation: {
    TreemapValidator: /* @__PURE__ */ S(() => new $$(), "TreemapValidator")
  }
};
function vp(t = _t) {
  const e = be(
    Nt(t),
    Xt
  ), r = be(
    kt({ shared: e }),
    d$,
    Rp
  );
  return e.ServiceRegistry.register(r), Tp(r), { shared: e, Treemap: r };
}
S(vp, "createTreemapServices");
var yn, A$ = (yn = class extends Yn {
  runCustomConverter(e, r, n) {
    switch (e.name.toUpperCase()) {
      case "LINK_LABEL":
        return r.substring(1).trim();
      default:
        return;
    }
  }
}, S(yn, "WardleyValueConverter"), yn), Ep = {
  parser: {
    ValueConverter: /* @__PURE__ */ S(() => new A$(), "ValueConverter")
  }
};
function $p(t = _t) {
  const e = be(
    Nt(t),
    Xt
  ), r = be(
    kt({ shared: e }),
    p$,
    Ep
  );
  return e.ServiceRegistry.register(r), { shared: e, Wardley: r };
}
S($p, "createWardleyServices");
var Tn, C$ = (Tn = class extends Yt {
  constructor() {
    super(["gitGraph"]);
  }
}, S(Tn, "GitGraphTokenBuilder"), Tn), Ap = {
  parser: {
    TokenBuilder: /* @__PURE__ */ S(() => new C$(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ S(() => new to(), "ValueConverter")
  }
};
function Cp(t = _t) {
  const e = be(
    Nt(t),
    Xt
  ), r = be(
    kt({ shared: e }),
    o$,
    Ap
  );
  return e.ServiceRegistry.register(r), { shared: e, GitGraph: r };
}
S(Cp, "createGitGraphServices");
var Rn, S$ = (Rn = class extends Yt {
  constructor() {
    super(["info", "showInfo"]);
  }
}, S(Rn, "InfoTokenBuilder"), Rn), Sp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ S(() => new S$(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ S(() => new to(), "ValueConverter")
  }
};
function wp(t = _t) {
  const e = be(
    Nt(t),
    Xt
  ), r = be(
    kt({ shared: e }),
    l$,
    Sp
  );
  return e.ServiceRegistry.register(r), { shared: e, Info: r };
}
S(wp, "createInfoServices");
var vn, w$ = (vn = class extends Yt {
  constructor() {
    super(["packet"]);
  }
}, S(vn, "PacketTokenBuilder"), vn), bp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ S(() => new w$(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ S(() => new to(), "ValueConverter")
  }
};
function kp(t = _t) {
  const e = be(
    Nt(t),
    Xt
  ), r = be(
    kt({ shared: e }),
    c$,
    bp
  );
  return e.ServiceRegistry.register(r), { shared: e, Packet: r };
}
S(kp, "createPacketServices");
var En, b$ = (En = class extends Yt {
  constructor() {
    super(["pie", "showData"]);
  }
}, S(En, "PieTokenBuilder"), En), $n, k$ = ($n = class extends Yn {
  runCustomConverter(e, r, n) {
    if (e.name === "PIE_SECTION_LABEL")
      return r.replace(/"/g, "").trim();
  }
}, S($n, "PieValueConverter"), $n), Np = {
  parser: {
    TokenBuilder: /* @__PURE__ */ S(() => new b$(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ S(() => new k$(), "ValueConverter")
  }
};
function _p(t = _t) {
  const e = be(
    Nt(t),
    Xt
  ), r = be(
    kt({ shared: e }),
    u$,
    Np
  );
  return e.ServiceRegistry.register(r), { shared: e, Pie: r };
}
S(_p, "createPieServices");
var An, N$ = (An = class extends Yn {
  runCustomConverter(e, r, n) {
    if (e.name === "INDENTATION")
      return (r == null ? void 0 : r.length) || 0;
    if (e.name === "STRING2")
      return r.substring(1, r.length - 1);
  }
}, S(An, "TreeViewValueConverter"), An), Cn, _$ = (Cn = class extends Yt {
  constructor() {
    super(["treeView-beta"]);
  }
}, S(Cn, "TreeViewTokenBuilder"), Cn), Ip = {
  parser: {
    TokenBuilder: /* @__PURE__ */ S(() => new _$(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ S(() => new N$(), "ValueConverter")
  }
};
function Pp(t = _t) {
  const e = be(
    Nt(t),
    Xt
  ), r = be(
    kt({ shared: e }),
    h$,
    Ip
  );
  return e.ServiceRegistry.register(r), { shared: e, TreeView: r };
}
S(Pp, "createTreeViewServices");
var Sn, I$ = (Sn = class extends Yt {
  constructor() {
    super(["architecture"]);
  }
}, S(Sn, "ArchitectureTokenBuilder"), Sn), wn, P$ = (wn = class extends Yn {
  runCustomConverter(e, r, n) {
    if (e.name === "ARCH_ICON")
      return r.replace(/[()]/g, "").trim();
    if (e.name === "ARCH_TEXT_ICON")
      return r.replace(/["()]/g, "");
    if (e.name === "ARCH_TITLE") {
      let i = r.replace(/^\[|]$/g, "").trim();
      return (i.startsWith('"') && i.endsWith('"') || i.startsWith("'") && i.endsWith("'")) && (i = i.slice(1, -1), i = i.replace(/\\"/g, '"').replace(/\\'/g, "'")), i.trim();
    }
  }
}, S(wn, "ArchitectureValueConverter"), wn), Op = {
  parser: {
    TokenBuilder: /* @__PURE__ */ S(() => new I$(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ S(() => new P$(), "ValueConverter")
  }
};
function Lp(t = _t) {
  const e = be(
    Nt(t),
    Xt
  ), r = be(
    kt({ shared: e }),
    s$,
    Op
  );
  return e.ServiceRegistry.register(r), { shared: e, Architecture: r };
}
S(Lp, "createArchitectureServices");
var bn, O$ = (bn = class extends Yt {
  constructor() {
    super(["radar-beta"]);
  }
}, S(bn, "RadarTokenBuilder"), bn), xp = {
  parser: {
    TokenBuilder: /* @__PURE__ */ S(() => new O$(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ S(() => new to(), "ValueConverter")
  }
};
function Dp(t = _t) {
  const e = be(
    Nt(t),
    Xt
  ), r = be(
    kt({ shared: e }),
    f$,
    xp
  );
  return e.ServiceRegistry.register(r), { shared: e, Radar: r };
}
S(Dp, "createRadarServices");
var dt = {}, L$ = {
  info: /* @__PURE__ */ S(async () => {
    const { createInfoServices: t } = await Promise.resolve().then(() => M$), e = t().Info.parser.LangiumParser;
    dt.info = e;
  }, "info"),
  packet: /* @__PURE__ */ S(async () => {
    const { createPacketServices: t } = await Promise.resolve().then(() => F$), e = t().Packet.parser.LangiumParser;
    dt.packet = e;
  }, "packet"),
  pie: /* @__PURE__ */ S(async () => {
    const { createPieServices: t } = await Promise.resolve().then(() => G$), e = t().Pie.parser.LangiumParser;
    dt.pie = e;
  }, "pie"),
  treeView: /* @__PURE__ */ S(async () => {
    const { createTreeViewServices: t } = await Promise.resolve().then(() => j$), e = t().TreeView.parser.LangiumParser;
    dt.treeView = e;
  }, "treeView"),
  architecture: /* @__PURE__ */ S(async () => {
    const { createArchitectureServices: t } = await Promise.resolve().then(() => z$), e = t().Architecture.parser.LangiumParser;
    dt.architecture = e;
  }, "architecture"),
  gitGraph: /* @__PURE__ */ S(async () => {
    const { createGitGraphServices: t } = await Promise.resolve().then(() => U$), e = t().GitGraph.parser.LangiumParser;
    dt.gitGraph = e;
  }, "gitGraph"),
  radar: /* @__PURE__ */ S(async () => {
    const { createRadarServices: t } = await Promise.resolve().then(() => B$), e = t().Radar.parser.LangiumParser;
    dt.radar = e;
  }, "radar"),
  treemap: /* @__PURE__ */ S(async () => {
    const { createTreemapServices: t } = await Promise.resolve().then(() => W$), e = t().Treemap.parser.LangiumParser;
    dt.treemap = e;
  }, "treemap"),
  wardley: /* @__PURE__ */ S(async () => {
    const { createWardleyServices: t } = await Promise.resolve().then(() => K$), e = t().Wardley.parser.LangiumParser;
    dt.wardley = e;
  }, "wardley")
};
async function x$(t, e) {
  const r = L$[t];
  if (!r)
    throw new Error(`Unknown diagram type: ${t}`);
  dt[t] || await r();
  const i = dt[t].parse(e);
  if (i.lexerErrors.length > 0 || i.parserErrors.length > 0)
    throw new D$(i);
  return i.value;
}
S(x$, "parse");
var kn, D$ = (kn = class extends Error {
  constructor(e) {
    const r = e.lexerErrors.map((i) => {
      const a = i.line !== void 0 && !isNaN(i.line) ? i.line : "?", s = i.column !== void 0 && !isNaN(i.column) ? i.column : "?";
      return `Lexer error on line ${a}, column ${s}: ${i.message}`;
    }).join(`
`), n = e.parserErrors.map((i) => {
      const a = i.token.startLine !== void 0 && !isNaN(i.token.startLine) ? i.token.startLine : "?", s = i.token.startColumn !== void 0 && !isNaN(i.token.startColumn) ? i.token.startColumn : "?";
      return `Parse error on line ${a}, column ${s}: ${i.message}`;
    }).join(`
`);
    super(`Parsing failed: ${r} ${n}`), this.result = e;
  }
}, S(kn, "MermaidParseError"), kn);
const M$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InfoModule: Sp,
  createInfoServices: wp
}, Symbol.toStringTag, { value: "Module" })), F$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PacketModule: bp,
  createPacketServices: kp
}, Symbol.toStringTag, { value: "Module" })), G$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PieModule: Np,
  createPieServices: _p
}, Symbol.toStringTag, { value: "Module" })), j$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TreeViewModule: Ip,
  createTreeViewServices: Pp
}, Symbol.toStringTag, { value: "Module" })), z$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArchitectureModule: Op,
  createArchitectureServices: Lp
}, Symbol.toStringTag, { value: "Module" })), U$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GitGraphModule: Ap,
  createGitGraphServices: Cp
}, Symbol.toStringTag, { value: "Module" })), B$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RadarModule: xp,
  createRadarServices: Dp
}, Symbol.toStringTag, { value: "Module" })), W$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TreemapModule: Rp,
  createTreemapServices: vp
}, Symbol.toStringTag, { value: "Module" })), K$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WardleyModule: Ep,
  createWardleyServices: $p
}, Symbol.toStringTag, { value: "Module" }));
export {
  x$ as p
};
