//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Wt;
function l() {
  return Wt.apply(null, arguments);
}
function Ds(e) {
  Wt = e;
}
function R(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function re(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function w(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function rt(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (w(e, t))
      return !1;
  return !0;
}
function T(e) {
  return e === void 0;
}
function $(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Se(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Pt(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function X(e, t) {
  for (var s in t)
    w(t, s) && (e[s] = t[s]);
  return w(t, "toString") && (e.toString = t.toString), w(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function U(e, t, s, r) {
  return ts(e, t, s, r, !0).utc();
}
function vs() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function c(e) {
  return e._pf == null && (e._pf = vs()), e._pf;
}
var Je;
Array.prototype.some ? Je = Array.prototype.some : Je = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function at(e) {
  var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = c(e), s = Je.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Le(e) {
  var t = U(NaN);
  return e != null ? X(c(t), e) : c(t).userInvalidated = !0, t;
}
var Yt = l.momentProperties = [], Ze = !1;
function nt(e, t) {
  var s, r, a, n = Yt.length;
  if (T(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), T(t._i) || (e._i = t._i), T(t._f) || (e._f = t._f), T(t._l) || (e._l = t._l), T(t._strict) || (e._strict = t._strict), T(t._tzm) || (e._tzm = t._tzm), T(t._isUTC) || (e._isUTC = t._isUTC), T(t._offset) || (e._offset = t._offset), T(t._pf) || (e._pf = c(t)), T(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      r = Yt[s], a = t[r], T(a) || (e[r] = a);
  return e;
}
function De(e) {
  nt(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Ze === !1 && (Ze = !0, l.updateOffset(this), Ze = !1);
}
function F(e) {
  return e instanceof De || e != null && e._isAMomentObject != null;
}
function Rt(e) {
  l.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function N(e, t) {
  var s = !0;
  return X(function() {
    if (l.deprecationHandler != null && l.deprecationHandler(null, e), s) {
      var r = [], a, n, i, u = arguments.length;
      for (n = 0; n < u; n++) {
        if (a = "", typeof arguments[n] == "object") {
          a += `
[` + n + "] ";
          for (i in arguments[0])
            w(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[n];
        r.push(a);
      }
      Rt(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Ot = {};
function Ft(e, t) {
  l.deprecationHandler != null && l.deprecationHandler(e, t), Ot[e] || (Rt(t), Ot[e] = !0);
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;
function I(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function ps(e) {
  var t, s;
  for (s in e)
    w(e, s) && (t = e[s], I(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Qe(e, t) {
  var s = X({}, e), r;
  for (r in t)
    w(t, r) && (re(e[r]) && re(t[r]) ? (s[r] = {}, X(s[r], e[r]), X(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    w(e, r) && !w(t, r) && re(e[r]) && (s[r] = X({}, s[r]));
  return s;
}
function it(e) {
  e != null && this.set(e);
}
var Xe;
Object.keys ? Xe = Object.keys : Xe = function(e) {
  var t, s = [];
  for (t in e)
    w(e, t) && s.push(t);
  return s;
};
var Ys = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Os(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return I(r) ? r.call(t, s) : r;
}
function H(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var ot = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ye = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, $e = {}, le = {};
function h(e, t, s, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (le[e] = a), t && (le[t[0]] = function() {
    return H(a.apply(this, arguments), t[1], t[2]);
  }), s && (le[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function Ts(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function bs(e) {
  var t = e.match(ot), s, r;
  for (s = 0, r = t.length; s < r; s++)
    le[t[s]] ? t[s] = le[t[s]] : t[s] = Ts(t[s]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < r; i++)
      n += I(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function Te(e, t) {
  return e.isValid() ? (t = Lt(t, e.localeData()), $e[t] = $e[t] || bs(t), $e[t](e)) : e.localeData().invalidDate();
}
function Lt(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (Ye.lastIndex = 0; s >= 0 && Ye.test(e); )
    e = e.replace(
      Ye,
      r
    ), Ye.lastIndex = 0, s -= 1;
  return e;
}
var xs = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Ns(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(ot).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Ws = "Invalid date";
function Ps() {
  return this._invalidDate;
}
var Rs = "%d", Fs = /\d{1,2}/;
function Ls(e) {
  return this._ordinal.replace("%d", e);
}
var Cs = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function Hs(e, t, s, r) {
  var a = this._relativeTime[s];
  return I(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function Us(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return I(s) ? s(t) : s.replace(/%s/i, t);
}
var Tt = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function W(e) {
  return typeof e == "string" ? Tt[e] || Tt[e.toLowerCase()] : void 0;
}
function lt(e) {
  var t = {}, s, r;
  for (r in e)
    w(e, r) && (s = W(r), s && (t[s] = e[r]));
  return t;
}
var Is = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function Es(e) {
  var t = [], s;
  for (s in e)
    w(e, s) && t.push({ unit: s, priority: Is[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var Ct = /\d/, b = /\d\d/, Ht = /\d{3}/, ut = /\d{4}/, Ce = /[+-]?\d{6}/, S = /\d\d?/, Ut = /\d\d\d\d?/, It = /\d\d\d\d\d\d?/, He = /\d{1,3}/, dt = /\d{1,4}/, Ue = /[+-]?\d{1,6}/, he = /\d+/, Ie = /[+-]?\d+/, As = /Z|[+-]\d\d:?\d\d/gi, Ee = /Z|[+-]\d\d(?::?\d\d)?/gi, Vs = /[+-]?\d+(\.\d{1,3})?/, ve = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, fe = /^[1-9]\d?/, ht = /^([1-9]\d|\d)/, Ne;
Ne = {};
function d(e, t, s) {
  Ne[e] = I(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function Gs(e, t) {
  return w(Ne, e) ? Ne[e](t._strict, t._locale) : new RegExp(js(e));
}
function js(e) {
  return z(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, a, n) {
        return s || r || a || n;
      }
    )
  );
}
function z(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function x(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function m(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = x(t)), s;
}
var Ke = {};
function k(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), $(t) && (r = function(n, i) {
    i[t] = m(n);
  }), a = e.length, s = 0; s < a; s++)
    Ke[e[s]] = r;
}
function pe(e, t) {
  k(e, function(s, r, a, n) {
    a._w = a._w || {}, t(s, a._w, a, n);
  });
}
function zs(e, t, s) {
  t != null && w(Ke, e) && Ke[e](t, s._a, s, e);
}
function Ae(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var Y = 0, G = 1, C = 2, p = 3, P = 4, j = 5, se = 6, Zs = 7, $s = 8;
h("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? H(e, 4) : "+" + e;
});
h(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
h(0, ["YYYY", 4], 0, "year");
h(0, ["YYYYY", 5], 0, "year");
h(0, ["YYYYYY", 6, !0], 0, "year");
d("Y", Ie);
d("YY", S, b);
d("YYYY", dt, ut);
d("YYYYY", Ue, Ce);
d("YYYYYY", Ue, Ce);
k(["YYYYY", "YYYYYY"], Y);
k("YYYY", function(e, t) {
  t[Y] = e.length === 2 ? l.parseTwoDigitYear(e) : m(e);
});
k("YY", function(e, t) {
  t[Y] = l.parseTwoDigitYear(e);
});
k("Y", function(e, t) {
  t[Y] = parseInt(e, 10);
});
function ye(e) {
  return Ae(e) ? 366 : 365;
}
l.parseTwoDigitYear = function(e) {
  return m(e) + (m(e) > 68 ? 1900 : 2e3);
};
var Et = ce("FullYear", !0);
function qs() {
  return Ae(this.year());
}
function ce(e, t) {
  return function(s) {
    return s != null ? (At(this, e, s), l.updateOffset(this, t), this) : we(this, e);
  };
}
function we(e, t) {
  if (!e.isValid())
    return NaN;
  var s = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return r ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return r ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return r ? s.getUTCHours() : s.getHours();
    case "Date":
      return r ? s.getUTCDate() : s.getDate();
    case "Day":
      return r ? s.getUTCDay() : s.getDay();
    case "Month":
      return r ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return r ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function At(e, t, s) {
  var r, a, n, i, u;
  if (!(!e.isValid() || isNaN(s))) {
    switch (r = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
      case "Seconds":
        return void (a ? r.setUTCSeconds(s) : r.setSeconds(s));
      case "Minutes":
        return void (a ? r.setUTCMinutes(s) : r.setMinutes(s));
      case "Hours":
        return void (a ? r.setUTCHours(s) : r.setHours(s));
      case "Date":
        return void (a ? r.setUTCDate(s) : r.setDate(s));
      case "FullYear":
        break;
      default:
        return;
    }
    n = s, i = e.month(), u = e.date(), u = u === 29 && i === 1 && !Ae(n) ? 28 : u, a ? r.setUTCFullYear(n, i, u) : r.setFullYear(n, i, u);
  }
}
function Bs(e) {
  return e = W(e), I(this[e]) ? this[e]() : this;
}
function Js(e, t) {
  if (typeof e == "object") {
    e = lt(e);
    var s = Es(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = W(e), I(this[e]))
    return this[e](t);
  return this;
}
function Qs(e, t) {
  return (e % t + t) % t;
}
var v;
Array.prototype.indexOf ? v = Array.prototype.indexOf : v = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function ft(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = Qs(t, 12);
  return e += (t - s) / 12, s === 1 ? Ae(e) ? 29 : 28 : 31 - s % 7 % 2;
}
h("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
h("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
h("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
d("M", S, fe);
d("MM", S, b);
d("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
d("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
k(["M", "MM"], function(e, t) {
  t[G] = m(e) - 1;
});
k(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[G] = a : c(s).invalidMonth = e;
});
var Xs = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Vt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Gt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ks = ve, er = ve;
function tr(e, t) {
  return e ? R(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Gt).test(t) ? "format" : "standalone"][e.month()] : R(this._months) ? this._months : this._months.standalone;
}
function sr(e, t) {
  return e ? R(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Gt.test(t) ? "format" : "standalone"][e.month()] : R(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function rr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      n = U([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = v.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = v.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = v.call(this._shortMonthsParse, i), a !== -1 ? a : (a = v.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = v.call(this._longMonthsParse, i), a !== -1 ? a : (a = v.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function ar(e, t, s) {
  var r, a, n;
  if (this._monthsParseExact)
    return rr.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = U([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!s && this._monthsParse[r].test(e))
      return r;
  }
}
function jt(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = m(t);
    else if (t = e.localeData().monthsParse(t), !$(t))
      return e;
  }
  var s = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, ft(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
}
function zt(e) {
  return e != null ? (jt(this, e), l.updateOffset(this, !0), this) : we(this, "Month");
}
function nr() {
  return ft(this.year(), this.month());
}
function ir(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || Zt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (w(this, "_monthsShortRegex") || (this._monthsShortRegex = Ks), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function or(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || Zt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (w(this, "_monthsRegex") || (this._monthsRegex = er), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Zt() {
  function e(f, _) {
    return _.length - f.length;
  }
  var t = [], s = [], r = [], a, n, i, u;
  for (a = 0; a < 12; a++)
    n = U([2e3, a]), i = z(this.monthsShort(n, "")), u = z(this.months(n, "")), t.push(i), s.push(u), r.push(u), r.push(i);
  t.sort(e), s.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function lr(e, t, s, r, a, n, i) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, s, r, a, n, i), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, s, r, a, n, i), u;
}
function ge(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function We(e, t, s) {
  var r = 7 + t - s, a = (7 + ge(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function $t(e, t, s, r, a) {
  var n = (7 + s - r) % 7, i = We(e, r, a), u = 1 + 7 * (t - 1) + n + i, f, _;
  return u <= 0 ? (f = e - 1, _ = ye(f) + u) : u > ye(e) ? (f = e + 1, _ = u - ye(e)) : (f = e, _ = u), {
    year: f,
    dayOfYear: _
  };
}
function ke(e, t, s) {
  var r = We(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + Z(i, t, s)) : a > Z(e.year(), t, s) ? (n = a - Z(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function Z(e, t, s) {
  var r = We(e, t, s), a = We(e + 1, t, s);
  return (ye(e) - r + a) / 7;
}
h("w", ["ww", 2], "wo", "week");
h("W", ["WW", 2], "Wo", "isoWeek");
d("w", S, fe);
d("ww", S, b);
d("W", S, fe);
d("WW", S, b);
pe(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = m(e);
  }
);
function ur(e) {
  return ke(e, this._week.dow, this._week.doy).week;
}
var dr = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function hr() {
  return this._week.dow;
}
function fr() {
  return this._week.doy;
}
function cr(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function mr(e) {
  var t = ke(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
h("d", 0, "do", "day");
h("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
h("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
h("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
h("e", 0, 0, "weekday");
h("E", 0, 0, "isoWeekday");
d("d", S);
d("e", S);
d("E", S);
d("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
d("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
d("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
pe(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : c(s).invalidWeekday = e;
});
pe(["d", "e", "E"], function(e, t, s, r) {
  t[r] = m(e);
});
function _r(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function yr(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function ct(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var wr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), qt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), gr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), kr = ve, Mr = ve, Sr = ve;
function Dr(e, t) {
  var s = R(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? ct(s, this._week.dow) : e ? s[e.day()] : s;
}
function vr(e) {
  return e === !0 ? ct(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function pr(e) {
  return e === !0 ? ct(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Yr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      n = U([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(n, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (a = v.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = v.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = v.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = v.call(this._weekdaysParse, i), a !== -1 || (a = v.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = v.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = v.call(this._shortWeekdaysParse, i), a !== -1 || (a = v.call(this._weekdaysParse, i), a !== -1) ? a : (a = v.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = v.call(this._minWeekdaysParse, i), a !== -1 || (a = v.call(this._weekdaysParse, i), a !== -1) ? a : (a = v.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function Or(e, t, s) {
  var r, a, n;
  if (this._weekdaysParseExact)
    return Yr.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = U([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!s && this._weekdaysParse[r].test(e))
      return r;
  }
}
function Tr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = we(this, "Day");
  return e != null ? (e = _r(e, this.localeData()), this.add(e - t, "d")) : t;
}
function br(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function xr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = yr(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Nr(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || mt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (w(this, "_weekdaysRegex") || (this._weekdaysRegex = kr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Wr(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || mt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (w(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Mr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Pr(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || mt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (w(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Sr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function mt() {
  function e(O, E) {
    return E.length - O.length;
  }
  var t = [], s = [], r = [], a = [], n, i, u, f, _;
  for (n = 0; n < 7; n++)
    i = U([2e3, 1]).day(n), u = z(this.weekdaysMin(i, "")), f = z(this.weekdaysShort(i, "")), _ = z(this.weekdays(i, "")), t.push(u), s.push(f), r.push(_), a.push(u), a.push(f), a.push(_);
  t.sort(e), s.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function _t() {
  return this.hours() % 12 || 12;
}
function Rr() {
  return this.hours() || 24;
}
h("H", ["HH", 2], 0, "hour");
h("h", ["hh", 2], 0, _t);
h("k", ["kk", 2], 0, Rr);
h("hmm", 0, 0, function() {
  return "" + _t.apply(this) + H(this.minutes(), 2);
});
h("hmmss", 0, 0, function() {
  return "" + _t.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2);
});
h("Hmm", 0, 0, function() {
  return "" + this.hours() + H(this.minutes(), 2);
});
h("Hmmss", 0, 0, function() {
  return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2);
});
function Bt(e, t) {
  h(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Bt("a", !0);
Bt("A", !1);
function Jt(e, t) {
  return t._meridiemParse;
}
d("a", Jt);
d("A", Jt);
d("H", S, ht);
d("h", S, fe);
d("k", S, fe);
d("HH", S, b);
d("hh", S, b);
d("kk", S, b);
d("hmm", Ut);
d("hmmss", It);
d("Hmm", Ut);
d("Hmmss", It);
k(["H", "HH"], p);
k(["k", "kk"], function(e, t, s) {
  var r = m(e);
  t[p] = r === 24 ? 0 : r;
});
k(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
k(["h", "hh"], function(e, t, s) {
  t[p] = m(e), c(s).bigHour = !0;
});
k("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[p] = m(e.substr(0, r)), t[P] = m(e.substr(r)), c(s).bigHour = !0;
});
k("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[p] = m(e.substr(0, r)), t[P] = m(e.substr(r, 2)), t[j] = m(e.substr(a)), c(s).bigHour = !0;
});
k("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[p] = m(e.substr(0, r)), t[P] = m(e.substr(r));
});
k("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[p] = m(e.substr(0, r)), t[P] = m(e.substr(r, 2)), t[j] = m(e.substr(a));
});
function Fr(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Lr = /[ap]\.?m?\.?/i, Cr = ce("Hours", !0);
function Hr(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var Qt = {
  calendar: Ys,
  longDateFormat: xs,
  invalidDate: Ws,
  ordinal: Rs,
  dayOfMonthOrdinalParse: Fs,
  relativeTime: Cs,
  months: Xs,
  monthsShort: Vt,
  week: dr,
  weekdays: wr,
  weekdaysMin: gr,
  weekdaysShort: qt,
  meridiemParse: Lr
}, D = {}, me = {}, Me;
function Ur(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function bt(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Ir(e) {
  for (var t = 0, s, r, a, n; t < e.length; ) {
    for (n = bt(e[t]).split("-"), s = n.length, r = bt(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = Ve(n.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && Ur(n, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Me;
}
function Er(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Ve(e) {
  var t = null, s;
  if (D[e] === void 0 && typeof module < "u" && module && module.exports && Er(e))
    try {
      t = Me._abbr, s = require, s("./locale/" + e), ee(t);
    } catch {
      D[e] = null;
    }
  return D[e];
}
function ee(e, t) {
  var s;
  return e && (T(t) ? s = B(e) : s = yt(e, t), s ? Me = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Me._abbr;
}
function yt(e, t) {
  if (t !== null) {
    var s, r = Qt;
    if (t.abbr = e, D[e] != null)
      Ft(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = D[e]._config;
    else if (t.parentLocale != null)
      if (D[t.parentLocale] != null)
        r = D[t.parentLocale]._config;
      else if (s = Ve(t.parentLocale), s != null)
        r = s._config;
      else
        return me[t.parentLocale] || (me[t.parentLocale] = []), me[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return D[e] = new it(Qe(r, t)), me[e] && me[e].forEach(function(a) {
      yt(a.name, a.config);
    }), ee(e), D[e];
  } else
    return delete D[e], null;
}
function Ar(e, t) {
  if (t != null) {
    var s, r, a = Qt;
    D[e] != null && D[e].parentLocale != null ? D[e].set(Qe(D[e]._config, t)) : (r = Ve(e), r != null && (a = r._config), t = Qe(a, t), r == null && (t.abbr = e), s = new it(t), s.parentLocale = D[e], D[e] = s), ee(e);
  } else
    D[e] != null && (D[e].parentLocale != null ? (D[e] = D[e].parentLocale, e === ee() && ee(e)) : D[e] != null && delete D[e]);
  return D[e];
}
function B(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Me;
  if (!R(e)) {
    if (t = Ve(e), t)
      return t;
    e = [e];
  }
  return Ir(e);
}
function Vr() {
  return Xe(D);
}
function wt(e) {
  var t, s = e._a;
  return s && c(e).overflow === -2 && (t = s[G] < 0 || s[G] > 11 ? G : s[C] < 1 || s[C] > ft(s[Y], s[G]) ? C : s[p] < 0 || s[p] > 24 || s[p] === 24 && (s[P] !== 0 || s[j] !== 0 || s[se] !== 0) ? p : s[P] < 0 || s[P] > 59 ? P : s[j] < 0 || s[j] > 59 ? j : s[se] < 0 || s[se] > 999 ? se : -1, c(e)._overflowDayOfYear && (t < Y || t > C) && (t = C), c(e)._overflowWeeks && t === -1 && (t = Zs), c(e)._overflowWeekday && t === -1 && (t = $s), c(e).overflow = t), e;
}
var Gr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, jr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, zr = /Z|[+-]\d\d(?::?\d\d)?/, Oe = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], qe = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Zr = /^\/?Date\((-?\d+)/i, $r = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, qr = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Xt(e) {
  var t, s, r = e._i, a = Gr.exec(r) || jr.exec(r), n, i, u, f, _ = Oe.length, O = qe.length;
  if (a) {
    for (c(e).iso = !0, t = 0, s = _; t < s; t++)
      if (Oe[t][1].exec(a[1])) {
        i = Oe[t][0], n = Oe[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = O; t < s; t++)
        if (qe[t][1].exec(a[3])) {
          u = (a[2] || " ") + qe[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && u != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (zr.exec(a[4]))
        f = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (u || "") + (f || ""), kt(e);
  } else
    e._isValid = !1;
}
function Br(e, t, s, r, a, n) {
  var i = [
    Jr(e),
    Vt.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function Jr(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Qr(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Xr(e, t, s) {
  if (e) {
    var r = qt.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return c(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Kr(e, t, s) {
  if (e)
    return qr[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, n = (r - a) / 100;
  return n * 60 + a;
}
function Kt(e) {
  var t = $r.exec(Qr(e._i)), s;
  if (t) {
    if (s = Br(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Xr(t[1], s, e))
      return;
    e._a = s, e._tzm = Kr(t[8], t[9], t[10]), e._d = ge.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), c(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ea(e) {
  var t = Zr.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Xt(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Kt(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : l.createFromInputFallback(e);
}
l.createFromInputFallback = N(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function ie(e, t, s) {
  return e ?? t ?? s;
}
function ta(e) {
  var t = new Date(l.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function gt(e) {
  var t, s, r = [], a, n, i;
  if (!e._d) {
    for (a = ta(e), e._w && e._a[C] == null && e._a[G] == null && sa(e), e._dayOfYear != null && (i = ie(e._a[Y], a[Y]), (e._dayOfYear > ye(i) || e._dayOfYear === 0) && (c(e)._overflowDayOfYear = !0), s = ge(i, 0, e._dayOfYear), e._a[G] = s.getUTCMonth(), e._a[C] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[p] === 24 && e._a[P] === 0 && e._a[j] === 0 && e._a[se] === 0 && (e._nextDay = !0, e._a[p] = 0), e._d = (e._useUTC ? ge : lr).apply(
      null,
      r
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[p] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (c(e).weekdayMismatch = !0);
  }
}
function sa(e) {
  var t, s, r, a, n, i, u, f, _;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = ie(
    t.GG,
    e._a[Y],
    ke(M(), 1, 4).year
  ), r = ie(t.W, 1), a = ie(t.E, 1), (a < 1 || a > 7) && (f = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, _ = ke(M(), n, i), s = ie(t.gg, e._a[Y], _.year), r = ie(t.w, _.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (f = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (f = !0)) : a = n), r < 1 || r > Z(s, n, i) ? c(e)._overflowWeeks = !0 : f != null ? c(e)._overflowWeekday = !0 : (u = $t(s, r, a, n, i), e._a[Y] = u.year, e._dayOfYear = u.dayOfYear);
}
l.ISO_8601 = function() {
};
l.RFC_2822 = function() {
};
function kt(e) {
  if (e._f === l.ISO_8601) {
    Xt(e);
    return;
  }
  if (e._f === l.RFC_2822) {
    Kt(e);
    return;
  }
  e._a = [], c(e).empty = !0;
  var t = "" + e._i, s, r, a, n, i, u = t.length, f = 0, _, O;
  for (a = Lt(e._f, e._locale).match(ot) || [], O = a.length, s = 0; s < O; s++)
    n = a[s], r = (t.match(Gs(n, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && c(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), f += r.length), le[n] ? (r ? c(e).empty = !1 : c(e).unusedTokens.push(n), zs(n, r, e)) : e._strict && !r && c(e).unusedTokens.push(n);
  c(e).charsLeftOver = u - f, t.length > 0 && c(e).unusedInput.push(t), e._a[p] <= 12 && c(e).bigHour === !0 && e._a[p] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[p] = ra(
    e._locale,
    e._a[p],
    e._meridiem
  ), _ = c(e).era, _ !== null && (e._a[Y] = e._locale.erasConvertYear(_, e._a[Y])), gt(e), wt(e);
}
function ra(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function aa(e) {
  var t, s, r, a, n, i, u = !1, f = e._f.length;
  if (f === 0) {
    c(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < f; a++)
    n = 0, i = !1, t = nt({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], kt(t), at(t) && (i = !0), n += c(t).charsLeftOver, n += c(t).unusedTokens.length * 10, c(t).score = n, u ? n < r && (r = n, s = t) : (r == null || n < r || i) && (r = n, s = t, i && (u = !0));
  X(e, s || t);
}
function na(e) {
  if (!e._d) {
    var t = lt(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Pt(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), gt(e);
  }
}
function ia(e) {
  var t = new De(wt(es(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function es(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || B(e._l), t === null || s === void 0 && t === "" ? Le({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), F(t) ? new De(wt(t)) : (Se(t) ? e._d = t : R(s) ? aa(e) : s ? kt(e) : oa(e), at(e) || (e._d = null), e));
}
function oa(e) {
  var t = e._i;
  T(t) ? e._d = new Date(l.now()) : Se(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ea(e) : R(t) ? (e._a = Pt(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), gt(e)) : re(t) ? na(e) : $(t) ? e._d = new Date(t) : l.createFromInputFallback(e);
}
function ts(e, t, s, r, a) {
  var n = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (re(e) && rt(e) || R(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = s, n._i = e, n._f = t, n._strict = r, ia(n);
}
function M(e, t, s, r) {
  return ts(e, t, s, r, !1);
}
var la = N(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = M.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Le();
  }
), ua = N(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = M.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Le();
  }
);
function ss(e, t) {
  var s, r;
  if (t.length === 1 && R(t[0]) && (t = t[0]), !t.length)
    return M();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function da() {
  var e = [].slice.call(arguments, 0);
  return ss("isBefore", e);
}
function ha() {
  var e = [].slice.call(arguments, 0);
  return ss("isAfter", e);
}
var fa = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, _e = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function ca(e) {
  var t, s = !1, r, a = _e.length;
  for (t in e)
    if (w(e, t) && !(v.call(_e, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[_e[r]]) {
      if (s)
        return !1;
      parseFloat(e[_e[r]]) !== m(e[_e[r]]) && (s = !0);
    }
  return !0;
}
function ma() {
  return this._isValid;
}
function _a() {
  return L(NaN);
}
function Ge(e) {
  var t = lt(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, u = t.hour || 0, f = t.minute || 0, _ = t.second || 0, O = t.millisecond || 0;
  this._isValid = ca(t), this._milliseconds = +O + _ * 1e3 + // 1000
  f * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = B(), this._bubble();
}
function be(e) {
  return e instanceof Ge;
}
function et(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function ya(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < r; i++)
    (s && e[i] !== t[i] || !s && m(e[i]) !== m(t[i])) && n++;
  return n + a;
}
function rs(e, t) {
  h(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + H(~~(s / 60), 2) + t + H(~~s % 60, 2);
  });
}
rs("Z", ":");
rs("ZZ", "");
d("Z", Ee);
d("ZZ", Ee);
k(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Mt(Ee, e);
});
var wa = /([\+\-]|\d\d)/gi;
function Mt(e, t) {
  var s = (t || "").match(e), r, a, n;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(wa) || ["-", 0, 0], n = +(a[1] * 60) + m(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function St(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (F(e) || Se(e) ? e.valueOf() : M(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), l.updateOffset(s, !1), s) : M(e).local();
}
function tt(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
l.updateOffset = function() {
};
function ga(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Mt(Ee, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = tt(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? is(
      this,
      L(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : tt(this);
}
function ka(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Ma(e) {
  return this.utcOffset(0, e);
}
function Sa(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(tt(this), "m")), this;
}
function Da() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Mt(As, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function va(e) {
  return this.isValid() ? (e = e ? M(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function pa() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Ya() {
  if (!T(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return nt(e, this), e = es(e), e._a ? (t = e._isUTC ? U(e._a) : M(e._a), this._isDSTShifted = this.isValid() && ya(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Oa() {
  return this.isValid() ? !this._isUTC : !1;
}
function Ta() {
  return this.isValid() ? this._isUTC : !1;
}
function as() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var ba = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, xa = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function L(e, t) {
  var s = e, r = null, a, n, i;
  return be(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : $(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = ba.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: m(r[C]) * a,
    h: m(r[p]) * a,
    m: m(r[P]) * a,
    s: m(r[j]) * a,
    ms: m(et(r[se] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = xa.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: te(r[2], a),
    M: te(r[3], a),
    w: te(r[4], a),
    d: te(r[5], a),
    h: te(r[6], a),
    m: te(r[7], a),
    s: te(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = Na(
    M(s.from),
    M(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new Ge(s), be(e) && w(e, "_locale") && (n._locale = e._locale), be(e) && w(e, "_isValid") && (n._isValid = e._isValid), n;
}
L.fn = Ge.prototype;
L.invalid = _a;
function te(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function xt(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function Na(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = St(t, e), e.isBefore(t) ? s = xt(e, t) : (s = xt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function ns(e, t) {
  return function(s, r) {
    var a, n;
    return r !== null && !isNaN(+r) && (Ft(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = r, r = n), a = L(s, r), is(this, a, e), this;
  };
}
function is(e, t, s, r) {
  var a = t._milliseconds, n = et(t._days), i = et(t._months);
  e.isValid() && (r = r ?? !0, i && jt(e, we(e, "Month") + i * s), n && At(e, "Date", we(e, "Date") + n * s), a && e._d.setTime(e._d.valueOf() + a * s), r && l.updateOffset(e, n || i));
}
var Wa = ns(1, "add"), Pa = ns(-1, "subtract");
function os(e) {
  return typeof e == "string" || e instanceof String;
}
function Ra(e) {
  return F(e) || Se(e) || os(e) || $(e) || La(e) || Fa(e) || e === null || e === void 0;
}
function Fa(e) {
  var t = re(e) && !rt(e), s = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], a, n, i = r.length;
  for (a = 0; a < i; a += 1)
    n = r[a], s = s || w(e, n);
  return t && s;
}
function La(e) {
  var t = R(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !$(r) && os(e);
  }).length === 0), t && s;
}
function Ca(e) {
  var t = re(e) && !rt(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, n;
  for (a = 0; a < r.length; a += 1)
    n = r[a], s = s || w(e, n);
  return t && s;
}
function Ha(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function Ua(e, t) {
  arguments.length === 1 && (arguments[0] ? Ra(arguments[0]) ? (e = arguments[0], t = void 0) : Ca(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || M(), r = St(s, this).startOf("day"), a = l.calendarFormat(this, r) || "sameElse", n = t && (I(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, M(s))
  );
}
function Ia() {
  return new De(this);
}
function Ea(e, t) {
  var s = F(e) ? e : M(e);
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Aa(e, t) {
  var s = F(e) ? e : M(e);
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function Va(e, t, s, r) {
  var a = F(e) ? e : M(e), n = F(t) ? t : M(t);
  return this.isValid() && a.isValid() && n.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function Ga(e, t) {
  var s = F(e) ? e : M(e), r;
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function ja(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function za(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Za(e, t, s) {
  var r, a, n;
  if (!this.isValid())
    return NaN;
  if (r = St(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = W(t), t) {
    case "year":
      n = xe(this, r) / 12;
      break;
    case "month":
      n = xe(this, r);
      break;
    case "quarter":
      n = xe(this, r) / 3;
      break;
    case "second":
      n = (this - r) / 1e3;
      break;
    case "minute":
      n = (this - r) / 6e4;
      break;
    case "hour":
      n = (this - r) / 36e5;
      break;
    case "day":
      n = (this - r - a) / 864e5;
      break;
    case "week":
      n = (this - r - a) / 6048e5;
      break;
    default:
      n = this - r;
  }
  return s ? n : x(n);
}
function xe(e, t) {
  if (e.date() < t.date())
    return -xe(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, n;
  return t - r < 0 ? (a = e.clone().add(s - 1, "months"), n = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), n = (t - r) / (a - r)), -(s + n) || 0;
}
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function $a() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function qa(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? Te(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : I(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Te(s, "Z")) : Te(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Ba() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + r + a + n);
}
function Ja(e) {
  e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
  var t = Te(this, e);
  return this.localeData().postformat(t);
}
function Qa(e, t) {
  return this.isValid() && (F(e) && e.isValid() || M(e).isValid()) ? L({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Xa(e) {
  return this.from(M(), e);
}
function Ka(e, t) {
  return this.isValid() && (F(e) && e.isValid() || M(e).isValid()) ? L({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function en(e) {
  return this.to(M(), e);
}
function ls(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = B(e), t != null && (this._locale = t), this);
}
var us = N(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function ds() {
  return this._locale;
}
var Pe = 1e3, ue = 60 * Pe, Re = 60 * ue, hs = (365 * 400 + 97) * 24 * Re;
function de(e, t) {
  return (e % t + t) % t;
}
function fs(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - hs : new Date(e, t, s).valueOf();
}
function cs(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - hs : Date.UTC(e, t, s);
}
function tn(e) {
  var t, s;
  if (e = W(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? cs : fs, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= de(
        t + (this._isUTC ? 0 : this.utcOffset() * ue),
        Re
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= de(t, ue);
      break;
    case "second":
      t = this._d.valueOf(), t -= de(t, Pe);
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function sn(e) {
  var t, s;
  if (e = W(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? cs : fs, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Re - de(
        t + (this._isUTC ? 0 : this.utcOffset() * ue),
        Re
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += ue - de(t, ue) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Pe - de(t, Pe) - 1;
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function rn() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function an() {
  return Math.floor(this.valueOf() / 1e3);
}
function nn() {
  return new Date(this.valueOf());
}
function on() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function ln() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function un() {
  return this.isValid() ? this.toISOString() : null;
}
function dn() {
  return at(this);
}
function hn() {
  return X({}, c(this));
}
function fn() {
  return c(this).overflow;
}
function cn() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
h("N", 0, 0, "eraAbbr");
h("NN", 0, 0, "eraAbbr");
h("NNN", 0, 0, "eraAbbr");
h("NNNN", 0, 0, "eraName");
h("NNNNN", 0, 0, "eraNarrow");
h("y", ["y", 1], "yo", "eraYear");
h("y", ["yy", 2], 0, "eraYear");
h("y", ["yyy", 3], 0, "eraYear");
h("y", ["yyyy", 4], 0, "eraYear");
d("N", Dt);
d("NN", Dt);
d("NNN", Dt);
d("NNNN", pn);
d("NNNNN", Yn);
k(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? c(s).era = a : c(s).invalidEra = e;
  }
);
d("y", he);
d("yy", he);
d("yyy", he);
d("yyyy", he);
d("yo", On);
k(["y", "yy", "yyy", "yyyy"], Y);
k(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[Y] = s._locale.eraYearOrdinalParse(e, a) : t[Y] = parseInt(e, 10);
});
function mn(e, t) {
  var s, r, a, n = this._eras || B("en")._eras;
  for (s = 0, r = n.length; s < r; ++s) {
    switch (typeof n[s].since) {
      case "string":
        a = l(n[s].since).startOf("day"), n[s].since = a.valueOf();
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        a = l(n[s].until).startOf("day").valueOf(), n[s].until = a.valueOf();
        break;
    }
  }
  return n;
}
function _n(e, t, s) {
  var r, a, n = this.eras(), i, u, f;
  for (e = e.toUpperCase(), r = 0, a = n.length; r < a; ++r)
    if (i = n[r].name.toUpperCase(), u = n[r].abbr.toUpperCase(), f = n[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return n[r];
          break;
        case "NNNN":
          if (i === e)
            return n[r];
          break;
        case "NNNNN":
          if (f === e)
            return n[r];
          break;
      }
    else if ([i, u, f].indexOf(e) >= 0)
      return n[r];
}
function yn(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * s;
}
function wn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function gn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function kn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function Mn() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - l(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function Sn(e) {
  return w(this, "_erasNameRegex") || vt.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Dn(e) {
  return w(this, "_erasAbbrRegex") || vt.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function vn(e) {
  return w(this, "_erasNarrowRegex") || vt.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Dt(e, t) {
  return t.erasAbbrRegex(e);
}
function pn(e, t) {
  return t.erasNameRegex(e);
}
function Yn(e, t) {
  return t.erasNarrowRegex(e);
}
function On(e, t) {
  return t._eraYearOrdinalRegex || he;
}
function vt() {
  var e = [], t = [], s = [], r = [], a, n, i, u, f, _ = this.eras();
  for (a = 0, n = _.length; a < n; ++a)
    i = z(_[a].name), u = z(_[a].abbr), f = z(_[a].narrow), t.push(i), e.push(u), s.push(f), r.push(i), r.push(u), r.push(f);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
h(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
h(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function je(e, t) {
  h(0, [e, e.length], 0, t);
}
je("gggg", "weekYear");
je("ggggg", "weekYear");
je("GGGG", "isoWeekYear");
je("GGGGG", "isoWeekYear");
d("G", Ie);
d("g", Ie);
d("GG", S, b);
d("gg", S, b);
d("GGGG", dt, ut);
d("gggg", dt, ut);
d("GGGGG", Ue, Ce);
d("ggggg", Ue, Ce);
pe(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = m(e);
  }
);
pe(["gg", "GG"], function(e, t, s, r) {
  t[r] = l.parseTwoDigitYear(e);
});
function Tn(e) {
  return ms.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function bn(e) {
  return ms.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function xn() {
  return Z(this.year(), 1, 4);
}
function Nn() {
  return Z(this.isoWeekYear(), 1, 4);
}
function Wn() {
  var e = this.localeData()._week;
  return Z(this.year(), e.dow, e.doy);
}
function Pn() {
  var e = this.localeData()._week;
  return Z(this.weekYear(), e.dow, e.doy);
}
function ms(e, t, s, r, a) {
  var n;
  return e == null ? ke(this, r, a).year : (n = Z(e, r, a), t > n && (t = n), Rn.call(this, e, t, s, r, a));
}
function Rn(e, t, s, r, a) {
  var n = $t(e, t, s, r, a), i = ge(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
h("Q", 0, "Qo", "quarter");
d("Q", Ct);
k("Q", function(e, t) {
  t[G] = (m(e) - 1) * 3;
});
function Fn(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
h("D", ["DD", 2], "Do", "date");
d("D", S, fe);
d("DD", S, b);
d("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
k(["D", "DD"], C);
k("Do", function(e, t) {
  t[C] = m(e.match(S)[0]);
});
var _s = ce("Date", !0);
h("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
d("DDD", He);
d("DDDD", Ht);
k(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = m(e);
});
function Ln(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
h("m", ["mm", 2], 0, "minute");
d("m", S, ht);
d("mm", S, b);
k(["m", "mm"], P);
var Cn = ce("Minutes", !1);
h("s", ["ss", 2], 0, "second");
d("s", S, ht);
d("ss", S, b);
k(["s", "ss"], j);
var Hn = ce("Seconds", !1);
h("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
h(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
h(0, ["SSS", 3], 0, "millisecond");
h(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
h(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
h(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
h(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
h(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
h(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
d("S", He, Ct);
d("SS", He, b);
d("SSS", He, Ht);
var K, ys;
for (K = "SSSS"; K.length <= 9; K += "S")
  d(K, he);
function Un(e, t) {
  t[se] = m(("0." + e) * 1e3);
}
for (K = "S"; K.length <= 9; K += "S")
  k(K, Un);
ys = ce("Milliseconds", !1);
h("z", 0, 0, "zoneAbbr");
h("zz", 0, 0, "zoneName");
function In() {
  return this._isUTC ? "UTC" : "";
}
function En() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var o = De.prototype;
o.add = Wa;
o.calendar = Ua;
o.clone = Ia;
o.diff = Za;
o.endOf = sn;
o.format = Ja;
o.from = Qa;
o.fromNow = Xa;
o.to = Ka;
o.toNow = en;
o.get = Bs;
o.invalidAt = fn;
o.isAfter = Ea;
o.isBefore = Aa;
o.isBetween = Va;
o.isSame = Ga;
o.isSameOrAfter = ja;
o.isSameOrBefore = za;
o.isValid = dn;
o.lang = us;
o.locale = ls;
o.localeData = ds;
o.max = ua;
o.min = la;
o.parsingFlags = hn;
o.set = Js;
o.startOf = tn;
o.subtract = Pa;
o.toArray = on;
o.toObject = ln;
o.toDate = nn;
o.toISOString = qa;
o.inspect = Ba;
typeof Symbol < "u" && Symbol.for != null && (o[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
o.toJSON = un;
o.toString = $a;
o.unix = an;
o.valueOf = rn;
o.creationData = cn;
o.eraName = wn;
o.eraNarrow = gn;
o.eraAbbr = kn;
o.eraYear = Mn;
o.year = Et;
o.isLeapYear = qs;
o.weekYear = Tn;
o.isoWeekYear = bn;
o.quarter = o.quarters = Fn;
o.month = zt;
o.daysInMonth = nr;
o.week = o.weeks = cr;
o.isoWeek = o.isoWeeks = mr;
o.weeksInYear = Wn;
o.weeksInWeekYear = Pn;
o.isoWeeksInYear = xn;
o.isoWeeksInISOWeekYear = Nn;
o.date = _s;
o.day = o.days = Tr;
o.weekday = br;
o.isoWeekday = xr;
o.dayOfYear = Ln;
o.hour = o.hours = Cr;
o.minute = o.minutes = Cn;
o.second = o.seconds = Hn;
o.millisecond = o.milliseconds = ys;
o.utcOffset = ga;
o.utc = Ma;
o.local = Sa;
o.parseZone = Da;
o.hasAlignedHourOffset = va;
o.isDST = pa;
o.isLocal = Oa;
o.isUtcOffset = Ta;
o.isUtc = as;
o.isUTC = as;
o.zoneAbbr = In;
o.zoneName = En;
o.dates = N(
  "dates accessor is deprecated. Use date instead.",
  _s
);
o.months = N(
  "months accessor is deprecated. Use month instead",
  zt
);
o.years = N(
  "years accessor is deprecated. Use year instead",
  Et
);
o.zone = N(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  ka
);
o.isDSTShifted = N(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Ya
);
function An(e) {
  return M(e * 1e3);
}
function Vn() {
  return M.apply(null, arguments).parseZone();
}
function ws(e) {
  return e;
}
var g = it.prototype;
g.calendar = Os;
g.longDateFormat = Ns;
g.invalidDate = Ps;
g.ordinal = Ls;
g.preparse = ws;
g.postformat = ws;
g.relativeTime = Hs;
g.pastFuture = Us;
g.set = ps;
g.eras = mn;
g.erasParse = _n;
g.erasConvertYear = yn;
g.erasAbbrRegex = Dn;
g.erasNameRegex = Sn;
g.erasNarrowRegex = vn;
g.months = tr;
g.monthsShort = sr;
g.monthsParse = ar;
g.monthsRegex = or;
g.monthsShortRegex = ir;
g.week = ur;
g.firstDayOfYear = fr;
g.firstDayOfWeek = hr;
g.weekdays = Dr;
g.weekdaysMin = pr;
g.weekdaysShort = vr;
g.weekdaysParse = Or;
g.weekdaysRegex = Nr;
g.weekdaysShortRegex = Wr;
g.weekdaysMinRegex = Pr;
g.isPM = Fr;
g.meridiem = Hr;
function Fe(e, t, s, r) {
  var a = B(), n = U().set(r, t);
  return a[s](n, e);
}
function gs(e, t, s) {
  if ($(e) && (t = e, e = void 0), e = e || "", t != null)
    return Fe(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = Fe(e, r, s, "month");
  return a;
}
function pt(e, t, s, r) {
  typeof e == "boolean" ? ($(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, $(t) && (s = t, t = void 0), t = t || "");
  var a = B(), n = e ? a._week.dow : 0, i, u = [];
  if (s != null)
    return Fe(t, (s + n) % 7, r, "day");
  for (i = 0; i < 7; i++)
    u[i] = Fe(t, (i + n) % 7, r, "day");
  return u;
}
function Gn(e, t) {
  return gs(e, t, "months");
}
function jn(e, t) {
  return gs(e, t, "monthsShort");
}
function zn(e, t, s) {
  return pt(e, t, s, "weekdays");
}
function Zn(e, t, s) {
  return pt(e, t, s, "weekdaysShort");
}
function $n(e, t, s) {
  return pt(e, t, s, "weekdaysMin");
}
ee("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, s = m(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
l.lang = N(
  "moment.lang is deprecated. Use moment.locale instead.",
  ee
);
l.langData = N(
  "moment.langData is deprecated. Use moment.localeData instead.",
  B
);
var A = Math.abs;
function qn() {
  var e = this._data;
  return this._milliseconds = A(this._milliseconds), this._days = A(this._days), this._months = A(this._months), e.milliseconds = A(e.milliseconds), e.seconds = A(e.seconds), e.minutes = A(e.minutes), e.hours = A(e.hours), e.months = A(e.months), e.years = A(e.years), this;
}
function ks(e, t, s, r) {
  var a = L(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function Bn(e, t) {
  return ks(this, e, t, 1);
}
function Jn(e, t) {
  return ks(this, e, t, -1);
}
function Nt(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Qn() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, n, i, u, f;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Nt(st(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = x(e / 1e3), r.seconds = a % 60, n = x(a / 60), r.minutes = n % 60, i = x(n / 60), r.hours = i % 24, t += x(i / 24), f = x(Ms(t)), s += f, t -= Nt(st(f)), u = x(s / 12), s %= 12, r.days = t, r.months = s, r.years = u, this;
}
function Ms(e) {
  return e * 4800 / 146097;
}
function st(e) {
  return e * 146097 / 4800;
}
function Xn(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = W(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + Ms(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(st(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function J(e) {
  return function() {
    return this.as(e);
  };
}
var Ss = J("ms"), Kn = J("s"), ei = J("m"), ti = J("h"), si = J("d"), ri = J("w"), ai = J("M"), ni = J("Q"), ii = J("y"), oi = Ss;
function li() {
  return L(this);
}
function ui(e) {
  return e = W(e), this.isValid() ? this[e + "s"]() : NaN;
}
function ae(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var di = ae("milliseconds"), hi = ae("seconds"), fi = ae("minutes"), ci = ae("hours"), mi = ae("days"), _i = ae("months"), yi = ae("years");
function wi() {
  return x(this.days() / 7);
}
var V = Math.round, oe = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function gi(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function ki(e, t, s, r) {
  var a = L(e).abs(), n = V(a.as("s")), i = V(a.as("m")), u = V(a.as("h")), f = V(a.as("d")), _ = V(a.as("M")), O = V(a.as("w")), E = V(a.as("y")), Q = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || u <= 1 && ["h"] || u < s.h && ["hh", u] || f <= 1 && ["d"] || f < s.d && ["dd", f];
  return s.w != null && (Q = Q || O <= 1 && ["w"] || O < s.w && ["ww", O]), Q = Q || _ <= 1 && ["M"] || _ < s.M && ["MM", _] || E <= 1 && ["y"] || ["yy", E], Q[2] = t, Q[3] = +e > 0, Q[4] = r, gi.apply(null, Q);
}
function Mi(e) {
  return e === void 0 ? V : typeof e == "function" ? (V = e, !0) : !1;
}
function Si(e, t) {
  return oe[e] === void 0 ? !1 : t === void 0 ? oe[e] : (oe[e] = t, e === "s" && (oe.ss = t - 1), !0);
}
function Di(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = oe, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, oe, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), n = ki(this, !s, r, a), s && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var Be = Math.abs;
function ne(e) {
  return (e > 0) - (e < 0) || +e;
}
function ze() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Be(this._milliseconds) / 1e3, t = Be(this._days), s = Be(this._months), r, a, n, i, u = this.asSeconds(), f, _, O, E;
  return u ? (r = x(e / 60), a = x(r / 60), e %= 60, r %= 60, n = x(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", f = u < 0 ? "-" : "", _ = ne(this._months) !== ne(u) ? "-" : "", O = ne(this._days) !== ne(u) ? "-" : "", E = ne(this._milliseconds) !== ne(u) ? "-" : "", f + "P" + (n ? _ + n + "Y" : "") + (s ? _ + s + "M" : "") + (t ? O + t + "D" : "") + (a || r || e ? "T" : "") + (a ? E + a + "H" : "") + (r ? E + r + "M" : "") + (e ? E + i + "S" : "")) : "P0D";
}
var y = Ge.prototype;
y.isValid = ma;
y.abs = qn;
y.add = Bn;
y.subtract = Jn;
y.as = Xn;
y.asMilliseconds = Ss;
y.asSeconds = Kn;
y.asMinutes = ei;
y.asHours = ti;
y.asDays = si;
y.asWeeks = ri;
y.asMonths = ai;
y.asQuarters = ni;
y.asYears = ii;
y.valueOf = oi;
y._bubble = Qn;
y.clone = li;
y.get = ui;
y.milliseconds = di;
y.seconds = hi;
y.minutes = fi;
y.hours = ci;
y.days = mi;
y.weeks = wi;
y.months = _i;
y.years = yi;
y.humanize = Di;
y.toISOString = ze;
y.toString = ze;
y.toJSON = ze;
y.locale = ls;
y.localeData = ds;
y.toIsoString = N(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ze
);
y.lang = us;
h("X", 0, 0, "unix");
h("x", 0, 0, "valueOf");
d("x", Ie);
d("X", Vs);
k("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
k("x", function(e, t, s) {
  s._d = new Date(m(e));
});
//! moment.js
l.version = "2.30.1";
Ds(M);
l.fn = o;
l.min = da;
l.max = ha;
l.now = fa;
l.utc = U;
l.unix = An;
l.months = Gn;
l.isDate = Se;
l.locale = ee;
l.invalid = Le;
l.duration = L;
l.isMoment = F;
l.weekdays = zn;
l.parseZone = Vn;
l.localeData = B;
l.isDuration = be;
l.monthsShort = jn;
l.weekdaysMin = $n;
l.defineLocale = yt;
l.updateLocale = Ar;
l.locales = Vr;
l.weekdaysShort = Zn;
l.normalizeUnits = W;
l.relativeTimeRounding = Mi;
l.relativeTimeThreshold = Si;
l.calendarFormat = Ha;
l.prototype = o;
l.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
var q = /* @__PURE__ */ ((e) => (e.http = "http", e.error = "error", e.promise = "promise", e.button = "button", e.record = "po-tracker", e.connection = "connection", e.battery = "battery", e))(q || {});
function vi(e) {
  document.addEventListener("click", (t) => {
    console.log(t);
    const s = t.target, r = s.getAttribute(q.record), a = s.getBoundingClientRect();
    console.log(a), s && r && a && e({
      name: q.button,
      value: {
        info: r,
        x: a.x,
        y: a.y,
        agent: navigator.userAgent,
        time: l().format("YYYY-MM-DD HH:mm:ss")
      }
    });
  });
}
function pi(e) {
  const t = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(r, a, n = !0) {
    e({
      name: q.http,
      value: {
        method: r,
        url: a,
        time: l().format("YYYY-MM-DD HH:mm:ss")
      }
    }), t.call(this, r, a, n);
  };
  const s = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function(r) {
    e({
      name: q.http,
      value: {
        body: r,
        time: l().format("YYYY-MM-DD HH:mm:ss")
      }
    }), console.log(r), s.call(this, r);
  };
}
function Yi(e) {
  window.addEventListener("error", (t) => {
    console.log(t), e({
      name: q.error,
      value: {
        msg: t.message,
        //报的什么错
        line: t.lineno,
        //第几行报的错
        filename: t.filename,
        //那个文件报错了
        time: l().format("YYYY-MM-DD HH:mm:ss")
      }
    });
  });
}
function Oi(e) {
  window.addEventListener("unhandledrejection", (t) => {
    console.log(t, "promise"), e({
      name: q.promise,
      value: t.reason,
      time: l().format("YYYY-MM-DD HH:MM:SS")
    });
  });
}
function Ti(e) {
  e({
    name: q.connection,
    value: {
      effectiveType: navigator.connection.effectiveType,
      rtt: navigator.connection.rtt
    }
  });
}
function bi(e) {
  console.log("navigator" in navigator), navigator.getBattery().then((t) => {
    console.log(t), e({
      name: q.battery,
      value: {
        level: t.level * 100 + "%",
        charging: t.charging,
        chargingTime: t.chargingTime
      }
    });
  });
}
class xi {
  constructor(t) {
    this.options = t, this.button = vi, this.http = pi, this.error = Yi, this.promise = Oi, this.connection = Ti, this.battery = bi, this.init();
  }
  // 初始化方法
  init() {
    for (let t in this.options)
      this.options[t] && this[t](this.send);
  }
  // 上报
  send(t) {
    let s = new Blob([JSON.stringify(t)], { type: "application/json" });
    navigator.sendBeacon("http://localhost:3000/Tracker", s);
  }
}
export {
  xi as default
};
