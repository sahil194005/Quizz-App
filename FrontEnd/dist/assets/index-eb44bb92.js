function up(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const i in r)
				if (i !== "default" && !(i in e)) {
					const o = Object.getOwnPropertyDescriptor(r, i);
					o &&
						Object.defineProperty(
							e,
							i,
							o.get
								? o
								: { enumerable: !0, get: () => r[i] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module",
		})
	);
}
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload"))
		return;
	for (const i of document.querySelectorAll(
		'link[rel="modulepreload"]'
	))
		r(i);
	new MutationObserver((i) => {
		for (const o of i)
			if (o.type === "childList")
				for (const s of o.addedNodes)
					s.tagName === "LINK" &&
						s.rel === "modulepreload" &&
						r(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const o = {};
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy &&
				(o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: i.crossOrigin === "anonymous"
				? (o.credentials = "omit")
				: (o.credentials = "same-origin"),
			o
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = n(i);
		fetch(i.href, o);
	}
})();
function ap(e) {
	return e &&
		e.__esModule &&
		Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var tc = { exports: {} },
	bi = {},
	nc = { exports: {} },
	j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr = Symbol.for("react.element"),
	cp = Symbol.for("react.portal"),
	fp = Symbol.for("react.fragment"),
	dp = Symbol.for("react.strict_mode"),
	pp = Symbol.for("react.profiler"),
	hp = Symbol.for("react.provider"),
	mp = Symbol.for("react.context"),
	yp = Symbol.for("react.forward_ref"),
	gp = Symbol.for("react.suspense"),
	vp = Symbol.for("react.memo"),
	wp = Symbol.for("react.lazy"),
	vu = Symbol.iterator;
function Sp(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (vu && e[vu]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var rc = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	ic = Object.assign,
	oc = {};
function On(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = oc),
		(this.updater = n || rc);
}
On.prototype.isReactComponent = {};
On.prototype.setState = function (e, t) {
	if (
		typeof e != "object" &&
		typeof e != "function" &&
		e != null
	)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
On.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sc() {}
sc.prototype = On.prototype;
function ul(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = oc),
		(this.updater = n || rc);
}
var al = (ul.prototype = new sc());
al.constructor = ul;
ic(al, On.prototype);
al.isPureReactComponent = !0;
var wu = Array.isArray,
	lc = Object.prototype.hasOwnProperty,
	cl = { current: null },
	uc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (s = t.ref),
		t.key !== void 0 && (o = "" + t.key),
		t))
			lc.call(t, r) &&
				!uc.hasOwnProperty(r) &&
				(i[r] = t[r]);
	var l = arguments.length - 2;
	if (l === 1) i.children = n;
	else if (1 < l) {
		for (var u = Array(l), a = 0; a < l; a++)
			u[a] = arguments[a + 2];
		i.children = u;
	}
	if (e && e.defaultProps)
		for (r in ((l = e.defaultProps), l))
			i[r] === void 0 && (i[r] = l[r]);
	return {
		$$typeof: Nr,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: cl.current,
	};
}
function Ep(e, t) {
	return {
		$$typeof: Nr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function fl(e) {
	return (
		typeof e == "object" && e !== null && e.$$typeof === Nr
	);
}
function xp(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Su = /\/+/g;
function Co(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? xp("" + e.key)
		: t.toString(36);
}
function ri(e, t, n, r, i) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else
		switch (o) {
			case "string":
			case "number":
				s = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case Nr:
					case cp:
						s = !0;
				}
		}
	if (s)
		return (
			(s = e),
			(i = i(s)),
			(e = r === "" ? "." + Co(s, 0) : r),
			wu(i)
				? ((n = ""),
				  e != null && (n = e.replace(Su, "$&/") + "/"),
				  ri(i, t, n, "", function (a) {
						return a;
				  }))
				: i != null &&
				  (fl(i) &&
						(i = Ep(
							i,
							n +
								(!i.key || (s && s.key === i.key)
									? ""
									: ("" + i.key).replace(Su, "$&/") + "/") +
								e
						)),
				  t.push(i)),
			1
		);
	if (((s = 0), (r = r === "" ? "." : r + ":"), wu(e)))
		for (var l = 0; l < e.length; l++) {
			o = e[l];
			var u = r + Co(o, l);
			s += ri(o, t, n, u, i);
		}
	else if (((u = Sp(e)), typeof u == "function"))
		for (e = u.call(e), l = 0; !(o = e.next()).done; )
			(o = o.value),
				(u = r + Co(o, l++)),
				(s += ri(o, t, n, u, i));
	else if (o === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" +
						  Object.keys(e).join(", ") +
						  "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead."
			))
		);
	return s;
}
function Br(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		ri(e, r, "", "", function (o) {
			return t.call(n, o, i++);
		}),
		r
	);
}
function kp(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 &&
				((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var he = { current: null },
	ii = { transition: null },
	Cp = {
		ReactCurrentDispatcher: he,
		ReactCurrentBatchConfig: ii,
		ReactCurrentOwner: cl,
	};
j.Children = {
	map: Br,
	forEach: function (e, t, n) {
		Br(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			Br(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Br(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!fl(e))
			throw Error(
				"React.Children.only expected to receive a single React element child."
			);
		return e;
	},
};
j.Component = On;
j.Fragment = fp;
j.Profiler = pp;
j.PureComponent = ul;
j.StrictMode = dp;
j.Suspense = gp;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cp;
j.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				"."
		);
	var r = ic({}, e.props),
		i = e.key,
		o = e.ref,
		s = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (s = cl.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps;
		for (u in t)
			lc.call(t, u) &&
				!uc.hasOwnProperty(u) &&
				(r[u] =
					t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
	}
	var u = arguments.length - 2;
	if (u === 1) r.children = n;
	else if (1 < u) {
		l = Array(u);
		for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
		r.children = l;
	}
	return {
		$$typeof: Nr,
		type: e.type,
		key: i,
		ref: o,
		props: r,
		_owner: s,
	};
};
j.createContext = function (e) {
	return (
		(e = {
			$$typeof: mp,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: hp, _context: e }),
		(e.Consumer = e)
	);
};
j.createElement = ac;
j.createFactory = function (e) {
	var t = ac.bind(null, e);
	return (t.type = e), t;
};
j.createRef = function () {
	return { current: null };
};
j.forwardRef = function (e) {
	return { $$typeof: yp, render: e };
};
j.isValidElement = fl;
j.lazy = function (e) {
	return {
		$$typeof: wp,
		_payload: { _status: -1, _result: e },
		_init: kp,
	};
};
j.memo = function (e, t) {
	return {
		$$typeof: vp,
		type: e,
		compare: t === void 0 ? null : t,
	};
};
j.startTransition = function (e) {
	var t = ii.transition;
	ii.transition = {};
	try {
		e();
	} finally {
		ii.transition = t;
	}
};
j.unstable_act = function () {
	throw Error(
		"act(...) is not supported in production builds of React."
	);
};
j.useCallback = function (e, t) {
	return he.current.useCallback(e, t);
};
j.useContext = function (e) {
	return he.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
	return he.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
	return he.current.useEffect(e, t);
};
j.useId = function () {
	return he.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
	return he.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
	return he.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
	return he.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
	return he.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
	return he.current.useReducer(e, t, n);
};
j.useRef = function (e) {
	return he.current.useRef(e);
};
j.useState = function (e) {
	return he.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
	return he.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
	return he.current.useTransition();
};
j.version = "18.2.0";
nc.exports = j;
var k = nc.exports;
const rt = ap(k),
	_p = up({ __proto__: null, default: rt }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Np = k,
	Rp = Symbol.for("react.element"),
	Op = Symbol.for("react.fragment"),
	Pp = Object.prototype.hasOwnProperty,
	Tp =
		Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
			.ReactCurrentOwner,
	Lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function cc(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	n !== void 0 && (o = "" + n),
		t.key !== void 0 && (o = "" + t.key),
		t.ref !== void 0 && (s = t.ref);
	for (r in t)
		Pp.call(t, r) && !Lp.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t))
			i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: Rp,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: Tp.current,
	};
}
bi.Fragment = Op;
bi.jsx = cc;
bi.jsxs = cc;
tc.exports = bi;
var x = tc.exports,
	rs = {},
	fc = { exports: {} },
	_e = {},
	dc = { exports: {} },
	pc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(R, L) {
		var A = R.length;
		R.push(L);
		e: for (; 0 < A; ) {
			var J = (A - 1) >>> 1,
				ne = R[J];
			if (0 < i(ne, L)) (R[J] = L), (R[A] = ne), (A = J);
			else break e;
		}
	}
	function n(R) {
		return R.length === 0 ? null : R[0];
	}
	function r(R) {
		if (R.length === 0) return null;
		var L = R[0],
			A = R.pop();
		if (A !== L) {
			R[0] = A;
			e: for (
				var J = 0, ne = R.length, zr = ne >>> 1;
				J < zr;

			) {
				var It = 2 * (J + 1) - 1,
					ko = R[It],
					Bt = It + 1,
					Ir = R[Bt];
				if (0 > i(ko, A))
					Bt < ne && 0 > i(Ir, ko)
						? ((R[J] = Ir), (R[Bt] = A), (J = Bt))
						: ((R[J] = ko), (R[It] = A), (J = It));
				else if (Bt < ne && 0 > i(Ir, A))
					(R[J] = Ir), (R[Bt] = A), (J = Bt);
				else break e;
			}
		}
		return L;
	}
	function i(R, L) {
		var A = R.sortIndex - L.sortIndex;
		return A !== 0 ? A : R.id - L.id;
	}
	if (
		typeof performance == "object" &&
		typeof performance.now == "function"
	) {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var s = Date,
			l = s.now();
		e.unstable_now = function () {
			return s.now() - l;
		};
	}
	var u = [],
		a = [],
		c = 1,
		d = null,
		h = 3,
		g = !1,
		y = !1,
		v = !1,
		N = typeof setTimeout == "function" ? setTimeout : null,
		p =
			typeof clearTimeout == "function"
				? clearTimeout
				: null,
		f = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(
			navigator.scheduling
		);
	function m(R) {
		for (var L = n(a); L !== null; ) {
			if (L.callback === null) r(a);
			else if (L.startTime <= R)
				r(a), (L.sortIndex = L.expirationTime), t(u, L);
			else break;
			L = n(a);
		}
	}
	function S(R) {
		if (((v = !1), m(R), !y))
			if (n(u) !== null) (y = !0), Eo(C);
			else {
				var L = n(a);
				L !== null && xo(S, L.startTime - R);
			}
	}
	function C(R, L) {
		(y = !1), v && ((v = !1), p(T), (T = -1)), (g = !0);
		var A = h;
		try {
			for (
				m(L), d = n(u);
				d !== null &&
				(!(d.expirationTime > L) || (R && !Ie()));

			) {
				var J = d.callback;
				if (typeof J == "function") {
					(d.callback = null), (h = d.priorityLevel);
					var ne = J(d.expirationTime <= L);
					(L = e.unstable_now()),
						typeof ne == "function"
							? (d.callback = ne)
							: d === n(u) && r(u),
						m(L);
				} else r(u);
				d = n(u);
			}
			if (d !== null) var zr = !0;
			else {
				var It = n(a);
				It !== null && xo(S, It.startTime - L), (zr = !1);
			}
			return zr;
		} finally {
			(d = null), (h = A), (g = !1);
		}
	}
	var O = !1,
		P = null,
		T = -1,
		K = 5,
		z = -1;
	function Ie() {
		return !(e.unstable_now() - z < K);
	}
	function In() {
		if (P !== null) {
			var R = e.unstable_now();
			z = R;
			var L = !0;
			try {
				L = P(!0, R);
			} finally {
				L ? Bn() : ((O = !1), (P = null));
			}
		} else O = !1;
	}
	var Bn;
	if (typeof f == "function")
		Bn = function () {
			f(In);
		};
	else if (typeof MessageChannel < "u") {
		var gu = new MessageChannel(),
			lp = gu.port2;
		(gu.port1.onmessage = In),
			(Bn = function () {
				lp.postMessage(null);
			});
	} else
		Bn = function () {
			N(In, 0);
		};
	function Eo(R) {
		(P = R), O || ((O = !0), Bn());
	}
	function xo(R, L) {
		T = N(function () {
			R(e.unstable_now());
		}, L);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (R) {
			R.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			y || g || ((y = !0), Eo(C));
		}),
		(e.unstable_forceFrameRate = function (R) {
			0 > R || 125 < R
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (K = 0 < R ? Math.floor(1e3 / R) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return h;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(u);
		}),
		(e.unstable_next = function (R) {
			switch (h) {
				case 1:
				case 2:
				case 3:
					var L = 3;
					break;
				default:
					L = h;
			}
			var A = h;
			h = L;
			try {
				return R();
			} finally {
				h = A;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (R, L) {
			switch (R) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					R = 3;
			}
			var A = h;
			h = R;
			try {
				return L();
			} finally {
				h = A;
			}
		}),
		(e.unstable_scheduleCallback = function (R, L, A) {
			var J = e.unstable_now();
			switch (
				(typeof A == "object" && A !== null
					? ((A = A.delay),
					  (A = typeof A == "number" && 0 < A ? J + A : J))
					: (A = J),
				R)
			) {
				case 1:
					var ne = -1;
					break;
				case 2:
					ne = 250;
					break;
				case 5:
					ne = 1073741823;
					break;
				case 4:
					ne = 1e4;
					break;
				default:
					ne = 5e3;
			}
			return (
				(ne = A + ne),
				(R = {
					id: c++,
					callback: L,
					priorityLevel: R,
					startTime: A,
					expirationTime: ne,
					sortIndex: -1,
				}),
				A > J
					? ((R.sortIndex = A),
					  t(a, R),
					  n(u) === null &&
							R === n(a) &&
							(v ? (p(T), (T = -1)) : (v = !0),
							xo(S, A - J)))
					: ((R.sortIndex = ne),
					  t(u, R),
					  y || g || ((y = !0), Eo(C))),
				R
			);
		}),
		(e.unstable_shouldYield = Ie),
		(e.unstable_wrapCallback = function (R) {
			var L = h;
			return function () {
				var A = h;
				h = L;
				try {
					return R.apply(this, arguments);
				} finally {
					h = A;
				}
			};
		});
})(pc);
dc.exports = pc;
var Ap = dc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hc = k,
	Ce = Ap;
function E(e) {
	for (
		var t =
				"https://reactjs.org/docs/error-decoder.html?invariant=" +
				e,
			n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var mc = new Set(),
	lr = {};
function Yt(e, t) {
	Sn(e, t), Sn(e + "Capture", t);
}
function Sn(e, t) {
	for (lr[e] = t, e = 0; e < t.length; e++) mc.add(t[e]);
}
var st = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	is = Object.prototype.hasOwnProperty,
	jp =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Eu = {},
	xu = {};
function zp(e) {
	return is.call(xu, e)
		? !0
		: is.call(Eu, e)
		? !1
		: jp.test(e)
		? (xu[e] = !0)
		: ((Eu[e] = !0), !1);
}
function Ip(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)),
				  e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function Bp(e, t, n, r) {
	if (t === null || typeof t > "u" || Ip(e, t, n, r))
		return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function me(e, t, n, r, i, o, s) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = s);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		le[e] = new me(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	le[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
[
	"contentEditable",
	"draggable",
	"spellCheck",
	"value",
].forEach(function (e) {
	le[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	le[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		le[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(
	function (e) {
		le[e] = new me(e, 3, !0, e, null, !1, !1);
	}
);
["capture", "download"].forEach(function (e) {
	le[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	le[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	le[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var dl = /[\-:]([a-z])/g;
function pl(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(dl, pl);
		le[t] = new me(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(dl, pl);
		le[t] = new me(
			t,
			1,
			!1,
			e,
			"http://www.w3.org/1999/xlink",
			!1,
			!1
		);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(dl, pl);
	le[t] = new me(
		t,
		1,
		!1,
		e,
		"http://www.w3.org/XML/1998/namespace",
		!1,
		!1
	);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	le[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new me(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1
);
["src", "href", "action", "formAction"].forEach(function (
	e
) {
	le[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hl(e, t, n, r) {
	var i = le.hasOwnProperty(t) ? le[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(Bp(t, n, i, r) && (n = null),
		r || i === null
			? zp(t) &&
			  (n === null
					? e.removeAttribute(t)
					: e.setAttribute(t, "" + n))
			: i.mustUseProperty
			? (e[i.propertyName] =
					n === null ? (i.type === 3 ? !1 : "") : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n =
							i === 3 || (i === 4 && n === !0)
								? ""
								: "" + n),
					  r
							? e.setAttributeNS(r, t, n)
							: e.setAttribute(t, n))));
}
var ft =
		hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Dr = Symbol.for("react.element"),
	en = Symbol.for("react.portal"),
	tn = Symbol.for("react.fragment"),
	ml = Symbol.for("react.strict_mode"),
	os = Symbol.for("react.profiler"),
	yc = Symbol.for("react.provider"),
	gc = Symbol.for("react.context"),
	yl = Symbol.for("react.forward_ref"),
	ss = Symbol.for("react.suspense"),
	ls = Symbol.for("react.suspense_list"),
	gl = Symbol.for("react.memo"),
	ht = Symbol.for("react.lazy"),
	vc = Symbol.for("react.offscreen"),
	ku = Symbol.iterator;
function Dn(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (ku && e[ku]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var q = Object.assign,
	_o;
function Kn(e) {
	if (_o === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			_o = (t && t[1]) || "";
		}
	return (
		`
` +
		_o +
		e
	);
}
var No = !1;
function Ro(e, t) {
	if (!e || No) return "";
	No = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (a) {
					var r = a;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (a) {
					r = a;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (a) {
				r = a;
			}
			e();
		}
	} catch (a) {
		if (a && r && typeof a.stack == "string") {
			for (
				var i = a.stack.split(`
`),
					o = r.stack.split(`
`),
					s = i.length - 1,
					l = o.length - 1;
				1 <= s && 0 <= l && i[s] !== o[l];

			)
				l--;
			for (; 1 <= s && 0 <= l; s--, l--)
				if (i[s] !== o[l]) {
					if (s !== 1 || l !== 1)
						do
							if ((s--, l--, 0 > l || i[s] !== o[l])) {
								var u =
									`
` + i[s].replace(" at new ", " at ");
								return (
									e.displayName &&
										u.includes("<anonymous>") &&
										(u = u.replace(
											"<anonymous>",
											e.displayName
										)),
									u
								);
							}
						while (1 <= s && 0 <= l);
					break;
				}
		}
	} finally {
		(No = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "")
		? Kn(e)
		: "";
}
function Dp(e) {
	switch (e.tag) {
		case 5:
			return Kn(e.type);
		case 16:
			return Kn("Lazy");
		case 13:
			return Kn("Suspense");
		case 19:
			return Kn("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = Ro(e.type, !1)), e;
		case 11:
			return (e = Ro(e.type.render, !1)), e;
		case 1:
			return (e = Ro(e.type, !0)), e;
		default:
			return "";
	}
}
function us(e) {
	if (e == null) return null;
	if (typeof e == "function")
		return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case tn:
			return "Fragment";
		case en:
			return "Portal";
		case os:
			return "Profiler";
		case ml:
			return "StrictMode";
		case ss:
			return "Suspense";
		case ls:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case gc:
				return (e.displayName || "Context") + ".Consumer";
			case yc:
				return (
					(e._context.displayName || "Context") +
					".Provider"
				);
			case yl:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e =
							e !== ""
								? "ForwardRef(" + e + ")"
								: "ForwardRef")),
					e
				);
			case gl:
				return (
					(t = e.displayName || null),
					t !== null ? t : us(e.type) || "Memo"
				);
			case ht:
				(t = e._payload), (e = e._init);
				try {
					return us(e(t));
				} catch {}
		}
	return null;
}
function Fp(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (
				(t._context.displayName || "Context") + ".Provider"
			);
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName ||
					(e !== ""
						? "ForwardRef(" + e + ")"
						: "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return us(t);
		case 8:
			return t === ml ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function")
				return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function Tt(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function wc(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function Up(e) {
	var t = wc(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(
			e.constructor.prototype,
			t
		),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var i = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (s) {
					(r = "" + s), o.call(this, s);
				},
			}),
			Object.defineProperty(e, t, {
				enumerable: n.enumerable,
			}),
			{
				getValue: function () {
					return r;
				},
				setValue: function (s) {
					r = "" + s;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Fr(e) {
	e._valueTracker || (e._valueTracker = Up(e));
}
function Sc(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e &&
			(r = wc(e)
				? e.checked
					? "true"
					: "false"
				: e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function xi(e) {
	if (
		((e = e || (typeof document < "u" ? document : void 0)),
		typeof e > "u")
	)
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function as(e, t) {
	var n = t.checked;
	return q({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Cu(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Tt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function Ec(e, t) {
	(t = t.checked), t != null && hl(e, "checked", t, !1);
}
function cs(e, t) {
	Ec(e, t);
	var n = Tt(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) &&
			  (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? fs(e, t.type, n)
		: t.hasOwnProperty("defaultValue") &&
		  fs(e, t.type, Tt(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function _u(e, t, n) {
	if (
		t.hasOwnProperty("value") ||
		t.hasOwnProperty("defaultValue")
	) {
		var r = t.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function fs(e, t, n) {
	(t !== "number" || xi(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n &&
			  (e.defaultValue = "" + n));
}
var Jn = Array.isArray;
function pn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (
			n = "" + Tt(n), t = null, i = 0;
			i < e.length;
			i++
		) {
			if (e[i].value === n) {
				(e[i].selected = !0),
					r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function ds(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
	return q({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function Nu(e, t) {
	var n = t.value;
	if (n == null) {
		if (
			((n = t.children), (t = t.defaultValue), n != null)
		) {
			if (t != null) throw Error(E(92));
			if (Jn(n)) {
				if (1 < n.length) throw Error(E(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: Tt(n) };
}
function xc(e, t) {
	var n = Tt(t.value),
		r = Tt(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null &&
			e.defaultValue !== n &&
			(e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function Ru(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue &&
		t !== "" &&
		t !== null &&
		(e.value = t);
}
function kc(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function ps(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? kc(t)
		: e === "http://www.w3.org/2000/svg" &&
		  t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var Ur,
	Cc = (function (e) {
		return typeof MSApp < "u" &&
			MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i);
					});
			  }
			: e;
	})(function (e, t) {
		if (
			e.namespaceURI !== "http://www.w3.org/2000/svg" ||
			"innerHTML" in e
		)
			e.innerHTML = t;
		else {
			for (
				Ur = Ur || document.createElement("div"),
					Ur.innerHTML =
						"<svg>" + t.valueOf().toString() + "</svg>",
					t = Ur.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function ur(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Gn = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Mp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gn).forEach(function (e) {
	Mp.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
			(Gn[t] = Gn[e]);
	});
});
function _c(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n ||
		  typeof t != "number" ||
		  t === 0 ||
		  (Gn.hasOwnProperty(e) && Gn[e])
		? ("" + t).trim()
		: t + "px";
}
function Nc(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = _c(n, t[n], r);
			n === "float" && (n = "cssFloat"),
				r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var $p = q(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function hs(e, t) {
	if (t) {
		if (
			$p[e] &&
			(t.children != null ||
				t.dangerouslySetInnerHTML != null)
		)
			throw Error(E(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(E(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(E(61));
		}
		if (t.style != null && typeof t.style != "object")
			throw Error(E(62));
	}
}
function ms(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var ys = null;
function vl(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement &&
			(e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var gs = null,
	hn = null,
	mn = null;
function Ou(e) {
	if ((e = Pr(e))) {
		if (typeof gs != "function") throw Error(E(280));
		var t = e.stateNode;
		t && ((t = eo(t)), gs(e.stateNode, e.type, t));
	}
}
function Rc(e) {
	hn ? (mn ? mn.push(e) : (mn = [e])) : (hn = e);
}
function Oc() {
	if (hn) {
		var e = hn,
			t = mn;
		if (((mn = hn = null), Ou(e), t))
			for (e = 0; e < t.length; e++) Ou(t[e]);
	}
}
function Pc(e, t) {
	return e(t);
}
function Tc() {}
var Oo = !1;
function Lc(e, t, n) {
	if (Oo) return e(t, n);
	Oo = !0;
	try {
		return Pc(e, t, n);
	} finally {
		(Oo = !1), (hn !== null || mn !== null) && (Tc(), Oc());
	}
}
function ar(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = eo(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function")
		throw Error(E(231, t, typeof n));
	return n;
}
var vs = !1;
if (st)
	try {
		var Fn = {};
		Object.defineProperty(Fn, "passive", {
			get: function () {
				vs = !0;
			},
		}),
			window.addEventListener("test", Fn, Fn),
			window.removeEventListener("test", Fn, Fn);
	} catch {
		vs = !1;
	}
function Vp(e, t, n, r, i, o, s, l, u) {
	var a = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, a);
	} catch (c) {
		this.onError(c);
	}
}
var Zn = !1,
	ki = null,
	Ci = !1,
	ws = null,
	Hp = {
		onError: function (e) {
			(Zn = !0), (ki = e);
		},
	};
function Wp(e, t, n, r, i, o, s, l, u) {
	(Zn = !1), (ki = null), Vp.apply(Hp, arguments);
}
function qp(e, t, n, r, i, o, s, l, u) {
	if ((Wp.apply(this, arguments), Zn)) {
		if (Zn) {
			var a = ki;
			(Zn = !1), (ki = null);
		} else throw Error(E(198));
		Ci || ((Ci = !0), (ws = a));
	}
}
function Xt(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do
			(t = e),
				t.flags & 4098 && (n = t.return),
				(e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function Ac(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null &&
				((e = e.alternate),
				e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function Pu(e) {
	if (Xt(e) !== e) throw Error(E(188));
}
function Qp(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = Xt(e)), t === null)) throw Error(E(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var o = i.alternate;
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return Pu(i), e;
				if (o === r) return Pu(i), t;
				o = o.sibling;
			}
			throw Error(E(188));
		}
		if (n.return !== r.return) (n = i), (r = o);
		else {
			for (var s = !1, l = i.child; l; ) {
				if (l === n) {
					(s = !0), (n = i), (r = o);
					break;
				}
				if (l === r) {
					(s = !0), (r = i), (n = o);
					break;
				}
				l = l.sibling;
			}
			if (!s) {
				for (l = o.child; l; ) {
					if (l === n) {
						(s = !0), (n = o), (r = i);
						break;
					}
					if (l === r) {
						(s = !0), (r = o), (n = i);
						break;
					}
					l = l.sibling;
				}
				if (!s) throw Error(E(189));
			}
		}
		if (n.alternate !== r) throw Error(E(190));
	}
	if (n.tag !== 3) throw Error(E(188));
	return n.stateNode.current === n ? e : t;
}
function jc(e) {
	return (e = Qp(e)), e !== null ? zc(e) : null;
}
function zc(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = zc(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Ic = Ce.unstable_scheduleCallback,
	Tu = Ce.unstable_cancelCallback,
	Kp = Ce.unstable_shouldYield,
	Jp = Ce.unstable_requestPaint,
	b = Ce.unstable_now,
	bp = Ce.unstable_getCurrentPriorityLevel,
	wl = Ce.unstable_ImmediatePriority,
	Bc = Ce.unstable_UserBlockingPriority,
	_i = Ce.unstable_NormalPriority,
	Yp = Ce.unstable_LowPriority,
	Dc = Ce.unstable_IdlePriority,
	Yi = null,
	Je = null;
function Xp(e) {
	if (Je && typeof Je.onCommitFiberRoot == "function")
		try {
			Je.onCommitFiberRoot(
				Yi,
				e,
				void 0,
				(e.current.flags & 128) === 128
			);
		} catch {}
}
var Ve = Math.clz32 ? Math.clz32 : eh,
	Gp = Math.log,
	Zp = Math.LN2;
function eh(e) {
	return (
		(e >>>= 0), e === 0 ? 32 : (31 - ((Gp(e) / Zp) | 0)) | 0
	);
}
var Mr = 64,
	$r = 4194304;
function bn(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Ni(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var l = s & ~i;
		l !== 0
			? (r = bn(l))
			: ((o &= s), o !== 0 && (r = bn(o)));
	} else
		(s = n & ~i),
			s !== 0 ? (r = bn(s)) : o !== 0 && (r = bn(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r),
		(o = t & -t),
		i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return t;
	if (
		(r & 4 && (r |= n & 16),
		(t = e.entangledLanes),
		t !== 0)
	)
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Ve(t)),
				(i = 1 << n),
				(r |= e[n]),
				(t &= ~i);
	return r;
}
function th(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function nh(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var s = 31 - Ve(o),
			l = 1 << s,
			u = i[s];
		u === -1
			? (!(l & n) || l & r) && (i[s] = th(l, t))
			: u <= t && (e.expiredLanes |= l),
			(o &= ~l);
	}
}
function Ss(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Fc() {
	var e = Mr;
	return (Mr <<= 1), !(Mr & 4194240) && (Mr = 64), e;
}
function Po(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Rr(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 &&
			((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Ve(t)),
		(e[t] = n);
}
function rh(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - Ve(n),
			o = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
	}
}
function Sl(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Ve(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var F = 0;
function Uc(e) {
	return (
		(e &= -e),
		1 < e
			? 4 < e
				? e & 268435455
					? 16
					: 536870912
				: 4
			: 1
	);
}
var Mc,
	El,
	$c,
	Vc,
	Hc,
	Es = !1,
	Vr = [],
	Et = null,
	xt = null,
	kt = null,
	cr = new Map(),
	fr = new Map(),
	yt = [],
	ih =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function Lu(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Et = null;
			break;
		case "dragenter":
		case "dragleave":
			xt = null;
			break;
		case "mouseover":
		case "mouseout":
			kt = null;
			break;
		case "pointerover":
		case "pointerout":
			cr.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			fr.delete(t.pointerId);
	}
}
function Un(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  t !== null && ((t = Pr(t)), t !== null && El(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e);
}
function oh(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (Et = Un(Et, e, t, n, r, i)), !0;
		case "dragenter":
			return (xt = Un(xt, e, t, n, r, i)), !0;
		case "mouseover":
			return (kt = Un(kt, e, t, n, r, i)), !0;
		case "pointerover":
			var o = i.pointerId;
			return (
				cr.set(o, Un(cr.get(o) || null, e, t, n, r, i)), !0
			);
		case "gotpointercapture":
			return (
				(o = i.pointerId),
				fr.set(o, Un(fr.get(o) || null, e, t, n, r, i)),
				!0
			);
	}
	return !1;
}
function Wc(e) {
	var t = Ut(e.target);
	if (t !== null) {
		var n = Xt(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Ac(n)), t !== null)) {
					(e.blockedOn = t),
						Hc(e.priority, function () {
							$c(n);
						});
					return;
				}
			} else if (
				t === 3 &&
				n.stateNode.current.memoizedState.isDehydrated
			) {
				e.blockedOn =
					n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function oi(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = xs(
			e.domEventName,
			e.eventSystemFlags,
			t[0],
			e.nativeEvent
		);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(ys = r), n.target.dispatchEvent(r), (ys = null);
		} else
			return (
				(t = Pr(n)),
				t !== null && El(t),
				(e.blockedOn = n),
				!1
			);
		t.shift();
	}
	return !0;
}
function Au(e, t, n) {
	oi(e) && n.delete(t);
}
function sh() {
	(Es = !1),
		Et !== null && oi(Et) && (Et = null),
		xt !== null && oi(xt) && (xt = null),
		kt !== null && oi(kt) && (kt = null),
		cr.forEach(Au),
		fr.forEach(Au);
}
function Mn(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Es ||
			((Es = !0),
			Ce.unstable_scheduleCallback(
				Ce.unstable_NormalPriority,
				sh
			)));
}
function dr(e) {
	function t(i) {
		return Mn(i, e);
	}
	if (0 < Vr.length) {
		Mn(Vr[0], e);
		for (var n = 1; n < Vr.length; n++) {
			var r = Vr[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Et !== null && Mn(Et, e),
			xt !== null && Mn(xt, e),
			kt !== null && Mn(kt, e),
			cr.forEach(t),
			fr.forEach(t),
			n = 0;
		n < yt.length;
		n++
	)
		(r = yt[n]), r.blockedOn === e && (r.blockedOn = null);
	for (
		;
		0 < yt.length && ((n = yt[0]), n.blockedOn === null);

	)
		Wc(n), n.blockedOn === null && yt.shift();
}
var yn = ft.ReactCurrentBatchConfig,
	Ri = !0;
function lh(e, t, n, r) {
	var i = F,
		o = yn.transition;
	yn.transition = null;
	try {
		(F = 1), xl(e, t, n, r);
	} finally {
		(F = i), (yn.transition = o);
	}
}
function uh(e, t, n, r) {
	var i = F,
		o = yn.transition;
	yn.transition = null;
	try {
		(F = 4), xl(e, t, n, r);
	} finally {
		(F = i), (yn.transition = o);
	}
}
function xl(e, t, n, r) {
	if (Ri) {
		var i = xs(e, t, n, r);
		if (i === null) Uo(e, t, r, Oi, n), Lu(e, r);
		else if (oh(i, e, t, n, r)) r.stopPropagation();
		else if ((Lu(e, r), t & 4 && -1 < ih.indexOf(e))) {
			for (; i !== null; ) {
				var o = Pr(i);
				if (
					(o !== null && Mc(o),
					(o = xs(e, t, n, r)),
					o === null && Uo(e, t, r, Oi, n),
					o === i)
				)
					break;
				i = o;
			}
			i !== null && r.stopPropagation();
		} else Uo(e, t, r, null, n);
	}
}
var Oi = null;
function xs(e, t, n, r) {
	if (((Oi = null), (e = vl(r)), (e = Ut(e)), e !== null))
		if (((t = Xt(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Ac(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3
					? t.stateNode.containerInfo
					: null;
			e = null;
		} else t !== e && (e = null);
	return (Oi = e), null;
}
function qc(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (bp()) {
				case wl:
					return 1;
				case Bc:
					return 4;
				case _i:
				case Yp:
					return 16;
				case Dc:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var vt = null,
	kl = null,
	si = null;
function Qc() {
	if (si) return si;
	var e,
		t = kl,
		n = t.length,
		r,
		i = "value" in vt ? vt.value : vt.textContent,
		o = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
	return (si = i.slice(e, 1 < r ? 1 - r : void 0));
}
function li(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Hr() {
	return !0;
}
function ju() {
	return !1;
}
function Ne(e) {
	function t(n, r, i, o, s) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = s),
			(this.currentTarget = null);
		for (var l in e)
			e.hasOwnProperty(l) &&
				((n = e[l]), (this[l] = n ? n(o) : o[l]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null
					? o.defaultPrevented
					: o.returnValue === !1
			)
				? Hr
				: ju),
			(this.isPropagationStopped = ju),
			this
		);
	}
	return (
		q(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" &&
						  (n.returnValue = !1),
					(this.isDefaultPrevented = Hr));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" &&
						  (n.cancelBubble = !0),
					(this.isPropagationStopped = Hr));
			},
			persist: function () {},
			isPersistent: Hr,
		}),
		t
	);
}
var Pn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	Cl = Ne(Pn),
	Or = q({}, Pn, { view: 0, detail: 0 }),
	ah = Ne(Or),
	To,
	Lo,
	$n,
	Xi = q({}, Or, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: _l,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== $n &&
						($n && e.type === "mousemove"
							? ((To = e.screenX - $n.screenX),
							  (Lo = e.screenY - $n.screenY))
							: (Lo = To = 0),
						($n = e)),
				  To);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : Lo;
		},
	}),
	zu = Ne(Xi),
	ch = q({}, Xi, { dataTransfer: 0 }),
	fh = Ne(ch),
	dh = q({}, Or, { relatedTarget: 0 }),
	Ao = Ne(dh),
	ph = q({}, Pn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0,
	}),
	hh = Ne(ph),
	mh = q({}, Pn, {
		clipboardData: function (e) {
			return "clipboardData" in e
				? e.clipboardData
				: window.clipboardData;
		},
	}),
	yh = Ne(mh),
	gh = q({}, Pn, { data: 0 }),
	Iu = Ne(gh),
	vh = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	wh = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
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
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	Sh = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function Eh(e) {
	var t = this.nativeEvent;
	return t.getModifierState
		? t.getModifierState(e)
		: (e = Sh[e])
		? !!t[e]
		: !1;
}
function _l() {
	return Eh;
}
var xh = q({}, Or, {
		key: function (e) {
			if (e.key) {
				var t = vh[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = li(e)),
				  e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? wh[e.keyCode] || "Unidentified"
				: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: _l,
		charCode: function (e) {
			return e.type === "keypress" ? li(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? li(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	kh = Ne(xh),
	Ch = q({}, Xi, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	Bu = Ne(Ch),
	_h = q({}, Or, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: _l,
	}),
	Nh = Ne(_h),
	Rh = q({}, Pn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0,
	}),
	Oh = Ne(Rh),
	Ph = q({}, Xi, {
		deltaX: function (e) {
			return "deltaX" in e
				? e.deltaX
				: "wheelDeltaX" in e
				? -e.wheelDeltaX
				: 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
				? -e.wheelDeltaY
				: "wheelDelta" in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Th = Ne(Ph),
	Lh = [9, 13, 27, 32],
	Nl = st && "CompositionEvent" in window,
	er = null;
st &&
	"documentMode" in document &&
	(er = document.documentMode);
var Ah = st && "TextEvent" in window && !er,
	Kc = st && (!Nl || (er && 8 < er && 11 >= er)),
	Du = String.fromCharCode(32),
	Fu = !1;
function Jc(e, t) {
	switch (e) {
		case "keyup":
			return Lh.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function bc(e) {
	return (
		(e = e.detail),
		typeof e == "object" && "data" in e ? e.data : null
	);
}
var nn = !1;
function jh(e, t) {
	switch (e) {
		case "compositionend":
			return bc(t);
		case "keypress":
			return t.which !== 32 ? null : ((Fu = !0), Du);
		case "textInput":
			return (e = t.data), e === Du && Fu ? null : e;
		default:
			return null;
	}
}
function zh(e, t) {
	if (nn)
		return e === "compositionend" || (!Nl && Jc(e, t))
			? ((e = Qc()), (si = kl = vt = null), (nn = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (
				!(t.ctrlKey || t.altKey || t.metaKey) ||
				(t.ctrlKey && t.altKey)
			) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return Kc && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var Ih = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function Uu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!Ih[e.type] : t === "textarea";
}
function Yc(e, t, n, r) {
	Rc(r),
		(t = Pi(t, "onChange")),
		0 < t.length &&
			((n = new Cl("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var tr = null,
	pr = null;
function Bh(e) {
	uf(e, 0);
}
function Gi(e) {
	var t = sn(e);
	if (Sc(t)) return e;
}
function Dh(e, t) {
	if (e === "change") return t;
}
var Xc = !1;
if (st) {
	var jo;
	if (st) {
		var zo = "oninput" in document;
		if (!zo) {
			var Mu = document.createElement("div");
			Mu.setAttribute("oninput", "return;"),
				(zo = typeof Mu.oninput == "function");
		}
		jo = zo;
	} else jo = !1;
	Xc =
		jo &&
		(!document.documentMode || 9 < document.documentMode);
}
function $u() {
	tr &&
		(tr.detachEvent("onpropertychange", Gc),
		(pr = tr = null));
}
function Gc(e) {
	if (e.propertyName === "value" && Gi(pr)) {
		var t = [];
		Yc(t, pr, e, vl(e)), Lc(Bh, t);
	}
}
function Fh(e, t, n) {
	e === "focusin"
		? ($u(),
		  (tr = t),
		  (pr = n),
		  tr.attachEvent("onpropertychange", Gc))
		: e === "focusout" && $u();
}
function Uh(e) {
	if (
		e === "selectionchange" ||
		e === "keyup" ||
		e === "keydown"
	)
		return Gi(pr);
}
function Mh(e, t) {
	if (e === "click") return Gi(t);
}
function $h(e, t) {
	if (e === "input" || e === "change") return Gi(t);
}
function Vh(e, t) {
	return (
		(e === t && (e !== 0 || 1 / e === 1 / t)) ||
		(e !== e && t !== t)
	);
}
var We = typeof Object.is == "function" ? Object.is : Vh;
function hr(e, t) {
	if (We(e, t)) return !0;
	if (
		typeof e != "object" ||
		e === null ||
		typeof t != "object" ||
		t === null
	)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!is.call(t, i) || !We(e[i], t[i])) return !1;
	}
	return !0;
}
function Vu(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Hu(e, t) {
	var n = Vu(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (
				((r = e + n.textContent.length), e <= t && r >= t)
			)
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = Vu(n);
	}
}
function Zc(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Zc(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function ef() {
	for (
		var e = window, t = xi();
		t instanceof e.HTMLIFrameElement;

	) {
		try {
			var n =
				typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = xi(e.document);
	}
	return t;
}
function Rl(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function Hh(e) {
	var t = ef(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Zc(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Rl(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t),
					(n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e =
					((t = n.ownerDocument || document) &&
						t.defaultView) ||
					window),
				e.getSelection)
			) {
				e = e.getSelection();
				var i = n.textContent.length,
					o = Math.min(r.start, i);
				(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!e.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = Hu(n, o));
				var s = Hu(n, r);
				i &&
					s &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== s.node ||
						e.focusOffset !== s.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(s.node, s.offset))
						: (t.setEnd(s.node, s.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({
					element: e,
					left: e.scrollLeft,
					top: e.scrollTop,
				});
		for (
			typeof n.focus == "function" && n.focus(), n = 0;
			n < t.length;
			n++
		)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var Wh =
		st &&
		"documentMode" in document &&
		11 >= document.documentMode,
	rn = null,
	ks = null,
	nr = null,
	Cs = !1;
function Wu(e, t, n) {
	var r =
		n.window === n
			? n.document
			: n.nodeType === 9
			? n
			: n.ownerDocument;
	Cs ||
		rn == null ||
		rn !== xi(r) ||
		((r = rn),
		"selectionStart" in r && Rl(r)
			? (r = {
					start: r.selectionStart,
					end: r.selectionEnd,
			  })
			: ((r = (
					(r.ownerDocument &&
						r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(nr && hr(nr, r)) ||
			((nr = r),
			(r = Pi(ks, "onSelect")),
			0 < r.length &&
				((t = new Cl("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = rn))));
}
function Wr(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var on = {
		animationend: Wr("Animation", "AnimationEnd"),
		animationiteration: Wr(
			"Animation",
			"AnimationIteration"
		),
		animationstart: Wr("Animation", "AnimationStart"),
		transitionend: Wr("Transition", "TransitionEnd"),
	},
	Io = {},
	tf = {};
st &&
	((tf = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete on.animationend.animation,
		delete on.animationiteration.animation,
		delete on.animationstart.animation),
	"TransitionEvent" in window ||
		delete on.transitionend.transition);
function Zi(e) {
	if (Io[e]) return Io[e];
	if (!on[e]) return e;
	var t = on[e],
		n;
	for (n in t)
		if (t.hasOwnProperty(n) && n in tf)
			return (Io[e] = t[n]);
	return e;
}
var nf = Zi("animationend"),
	rf = Zi("animationiteration"),
	of = Zi("animationstart"),
	sf = Zi("transitionend"),
	lf = new Map(),
	qu =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		);
function At(e, t) {
	lf.set(e, t), Yt(t, [e]);
}
for (var Bo = 0; Bo < qu.length; Bo++) {
	var Do = qu[Bo],
		qh = Do.toLowerCase(),
		Qh = Do[0].toUpperCase() + Do.slice(1);
	At(qh, "on" + Qh);
}
At(nf, "onAnimationEnd");
At(rf, "onAnimationIteration");
At(of, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(sf, "onTransitionEnd");
Sn("onMouseEnter", ["mouseout", "mouseover"]);
Sn("onMouseLeave", ["mouseout", "mouseover"]);
Sn("onPointerEnter", ["pointerout", "pointerover"]);
Sn("onPointerLeave", ["pointerout", "pointerover"]);
Yt(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" "
	)
);
Yt(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
Yt("onBeforeInput", [
	"compositionend",
	"keypress",
	"textInput",
	"paste",
]);
Yt(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(
		" "
	)
);
Yt(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(
		" "
	)
);
Yt(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(
		" "
	)
);
var Yn =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	Kh = new Set(
		"cancel close invalid load scroll toggle"
			.split(" ")
			.concat(Yn)
	);
function Qu(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n),
		qp(r, t, void 0, e),
		(e.currentTarget = null);
}
function uf(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var l = r[s],
						u = l.instance,
						a = l.currentTarget;
					if (
						((l = l.listener),
						u !== o && i.isPropagationStopped())
					)
						break e;
					Qu(i, l, a), (o = u);
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((l = r[s]),
						(u = l.instance),
						(a = l.currentTarget),
						(l = l.listener),
						u !== o && i.isPropagationStopped())
					)
						break e;
					Qu(i, l, a), (o = u);
				}
		}
	}
	if (Ci) throw ((e = ws), (Ci = !1), (ws = null), e);
}
function M(e, t) {
	var n = t[Ps];
	n === void 0 && (n = t[Ps] = new Set());
	var r = e + "__bubble";
	n.has(r) || (af(t, e, 2, !1), n.add(r));
}
function Fo(e, t, n) {
	var r = 0;
	t && (r |= 4), af(n, e, r, t);
}
var qr =
	"_reactListening" + Math.random().toString(36).slice(2);
function mr(e) {
	if (!e[qr]) {
		(e[qr] = !0),
			mc.forEach(function (n) {
				n !== "selectionchange" &&
					(Kh.has(n) || Fo(n, !1, e), Fo(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null ||
			t[qr] ||
			((t[qr] = !0), Fo("selectionchange", !1, t));
	}
}
function af(e, t, n, r) {
	switch (qc(t)) {
		case 1:
			var i = lh;
			break;
		case 4:
			i = uh;
			break;
		default:
			i = xl;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!vs ||
			(t !== "touchstart" &&
				t !== "touchmove" &&
				t !== "wheel") ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, {
						capture: !0,
						passive: i,
				  })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1);
}
function Uo(e, t, n, r, i) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var l = r.stateNode.containerInfo;
				if (
					l === i ||
					(l.nodeType === 8 && l.parentNode === i)
				)
					break;
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var u = s.tag;
						if (
							(u === 3 || u === 4) &&
							((u = s.stateNode.containerInfo),
							u === i ||
								(u.nodeType === 8 && u.parentNode === i))
						)
							return;
						s = s.return;
					}
				for (; l !== null; ) {
					if (((s = Ut(l)), s === null)) return;
					if (((u = s.tag), u === 5 || u === 6)) {
						r = o = s;
						continue e;
					}
					l = l.parentNode;
				}
			}
			r = r.return;
		}
	Lc(function () {
		var a = o,
			c = vl(n),
			d = [];
		e: {
			var h = lf.get(e);
			if (h !== void 0) {
				var g = Cl,
					y = e;
				switch (e) {
					case "keypress":
						if (li(n) === 0) break e;
					case "keydown":
					case "keyup":
						g = kh;
						break;
					case "focusin":
						(y = "focus"), (g = Ao);
						break;
					case "focusout":
						(y = "blur"), (g = Ao);
						break;
					case "beforeblur":
					case "afterblur":
						g = Ao;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						g = zu;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						g = fh;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						g = Nh;
						break;
					case nf:
					case rf:
					case of:
						g = hh;
						break;
					case sf:
						g = Oh;
						break;
					case "scroll":
						g = ah;
						break;
					case "wheel":
						g = Th;
						break;
					case "copy":
					case "cut":
					case "paste":
						g = yh;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						g = Bu;
				}
				var v = (t & 4) !== 0,
					N = !v && e === "scroll",
					p = v ? (h !== null ? h + "Capture" : null) : h;
				v = [];
				for (var f = a, m; f !== null; ) {
					m = f;
					var S = m.stateNode;
					if (
						(m.tag === 5 &&
							S !== null &&
							((m = S),
							p !== null &&
								((S = ar(f, p)),
								S != null && v.push(yr(f, S, m)))),
						N)
					)
						break;
					f = f.return;
				}
				0 < v.length &&
					((h = new g(h, y, null, n, c)),
					d.push({ event: h, listeners: v }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((h = e === "mouseover" || e === "pointerover"),
					(g = e === "mouseout" || e === "pointerout"),
					h &&
						n !== ys &&
						(y = n.relatedTarget || n.fromElement) &&
						(Ut(y) || y[lt]))
				)
					break e;
				if (
					(g || h) &&
					((h =
						c.window === c
							? c
							: (h = c.ownerDocument)
							? h.defaultView || h.parentWindow
							: window),
					g
						? ((y = n.relatedTarget || n.toElement),
						  (g = a),
						  (y = y ? Ut(y) : null),
						  y !== null &&
								((N = Xt(y)),
								y !== N || (y.tag !== 5 && y.tag !== 6)) &&
								(y = null))
						: ((g = null), (y = a)),
					g !== y)
				) {
					if (
						((v = zu),
						(S = "onMouseLeave"),
						(p = "onMouseEnter"),
						(f = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((v = Bu),
							(S = "onPointerLeave"),
							(p = "onPointerEnter"),
							(f = "pointer")),
						(N = g == null ? h : sn(g)),
						(m = y == null ? h : sn(y)),
						(h = new v(S, f + "leave", g, n, c)),
						(h.target = N),
						(h.relatedTarget = m),
						(S = null),
						Ut(c) === a &&
							((v = new v(p, f + "enter", y, n, c)),
							(v.target = m),
							(v.relatedTarget = N),
							(S = v)),
						(N = S),
						g && y)
					)
						t: {
							for (v = g, p = y, f = 0, m = v; m; m = Gt(m))
								f++;
							for (m = 0, S = p; S; S = Gt(S)) m++;
							for (; 0 < f - m; ) (v = Gt(v)), f--;
							for (; 0 < m - f; ) (p = Gt(p)), m--;
							for (; f--; ) {
								if (
									v === p ||
									(p !== null && v === p.alternate)
								)
									break t;
								(v = Gt(v)), (p = Gt(p));
							}
							v = null;
						}
					else v = null;
					g !== null && Ku(d, h, g, v, !1),
						y !== null && N !== null && Ku(d, N, y, v, !0);
				}
			}
			e: {
				if (
					((h = a ? sn(a) : window),
					(g = h.nodeName && h.nodeName.toLowerCase()),
					g === "select" ||
						(g === "input" && h.type === "file"))
				)
					var C = Dh;
				else if (Uu(h))
					if (Xc) C = $h;
					else {
						C = Uh;
						var O = Fh;
					}
				else
					(g = h.nodeName) &&
						g.toLowerCase() === "input" &&
						(h.type === "checkbox" || h.type === "radio") &&
						(C = Mh);
				if (C && (C = C(e, a))) {
					Yc(d, C, n, c);
					break e;
				}
				O && O(e, h, a),
					e === "focusout" &&
						(O = h._wrapperState) &&
						O.controlled &&
						h.type === "number" &&
						fs(h, "number", h.value);
			}
			switch (((O = a ? sn(a) : window), e)) {
				case "focusin":
					(Uu(O) || O.contentEditable === "true") &&
						((rn = O), (ks = a), (nr = null));
					break;
				case "focusout":
					nr = ks = rn = null;
					break;
				case "mousedown":
					Cs = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(Cs = !1), Wu(d, n, c);
					break;
				case "selectionchange":
					if (Wh) break;
				case "keydown":
				case "keyup":
					Wu(d, n, c);
			}
			var P;
			if (Nl)
				e: {
					switch (e) {
						case "compositionstart":
							var T = "onCompositionStart";
							break e;
						case "compositionend":
							T = "onCompositionEnd";
							break e;
						case "compositionupdate":
							T = "onCompositionUpdate";
							break e;
					}
					T = void 0;
				}
			else
				nn
					? Jc(e, n) && (T = "onCompositionEnd")
					: e === "keydown" &&
					  n.keyCode === 229 &&
					  (T = "onCompositionStart");
			T &&
				(Kc &&
					n.locale !== "ko" &&
					(nn || T !== "onCompositionStart"
						? T === "onCompositionEnd" && nn && (P = Qc())
						: ((vt = c),
						  (kl =
								"value" in vt ? vt.value : vt.textContent),
						  (nn = !0))),
				(O = Pi(a, T)),
				0 < O.length &&
					((T = new Iu(T, e, null, n, c)),
					d.push({ event: T, listeners: O }),
					P
						? (T.data = P)
						: ((P = bc(n)), P !== null && (T.data = P)))),
				(P = Ah ? jh(e, n) : zh(e, n)) &&
					((a = Pi(a, "onBeforeInput")),
					0 < a.length &&
						((c = new Iu(
							"onBeforeInput",
							"beforeinput",
							null,
							n,
							c
						)),
						d.push({ event: c, listeners: a }),
						(c.data = P)));
		}
		uf(d, t);
	});
}
function yr(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Pi(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			o = i.stateNode;
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = ar(e, n)),
			o != null && r.unshift(yr(e, o, i)),
			(o = ar(e, t)),
			o != null && r.push(yr(e, o, i))),
			(e = e.return);
	}
	return r;
}
function Gt(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Ku(e, t, n, r, i) {
	for (
		var o = t._reactName, s = [];
		n !== null && n !== r;

	) {
		var l = n,
			u = l.alternate,
			a = l.stateNode;
		if (u !== null && u === r) break;
		l.tag === 5 &&
			a !== null &&
			((l = a),
			i
				? ((u = ar(n, o)),
				  u != null && s.unshift(yr(n, u, l)))
				: i ||
				  ((u = ar(n, o)),
				  u != null && s.push(yr(n, u, l)))),
			(n = n.return);
	}
	s.length !== 0 && e.push({ event: t, listeners: s });
}
var Jh = /\r\n?/g,
	bh = /\u0000|\uFFFD/g;
function Ju(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			Jh,
			`
`
		)
		.replace(bh, "");
}
function Qr(e, t, n) {
	if (((t = Ju(t)), Ju(e) !== t && n)) throw Error(E(425));
}
function Ti() {}
var _s = null,
	Ns = null;
function Rs(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var Os =
		typeof setTimeout == "function" ? setTimeout : void 0,
	Yh =
		typeof clearTimeout == "function"
			? clearTimeout
			: void 0,
	bu = typeof Promise == "function" ? Promise : void 0,
	Xh =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof bu < "u"
			? function (e) {
					return bu.resolve(null).then(e).catch(Gh);
			  }
			: Os;
function Gh(e) {
	setTimeout(function () {
		throw e;
	});
}
function Mo(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), dr(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	dr(t);
}
function Ct(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (
				((t = e.data),
				t === "$" || t === "$!" || t === "$?")
			)
				break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function Yu(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Tn = Math.random().toString(36).slice(2),
	Ke = "__reactFiber$" + Tn,
	gr = "__reactProps$" + Tn,
	lt = "__reactContainer$" + Tn,
	Ps = "__reactEvents$" + Tn,
	Zh = "__reactListeners$" + Tn,
	em = "__reactHandles$" + Tn;
function Ut(e) {
	var t = e[Ke];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[lt] || n[Ke])) {
			if (
				((n = t.alternate),
				t.child !== null ||
					(n !== null && n.child !== null))
			)
				for (e = Yu(e); e !== null; ) {
					if ((n = e[Ke])) return n;
					e = Yu(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function Pr(e) {
	return (
		(e = e[Ke] || e[lt]),
		!e ||
		(e.tag !== 5 &&
			e.tag !== 6 &&
			e.tag !== 13 &&
			e.tag !== 3)
			? null
			: e
	);
}
function sn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(E(33));
}
function eo(e) {
	return e[gr] || null;
}
var Ts = [],
	ln = -1;
function jt(e) {
	return { current: e };
}
function $(e) {
	0 > ln || ((e.current = Ts[ln]), (Ts[ln] = null), ln--);
}
function U(e, t) {
	ln++, (Ts[ln] = e.current), (e.current = t);
}
var Lt = {},
	fe = jt(Lt),
	ve = jt(!1),
	qt = Lt;
function En(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Lt;
	var r = e.stateNode;
	if (
		r &&
		r.__reactInternalMemoizedUnmaskedChildContext === t
	)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		o;
	for (o in n) i[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function we(e) {
	return (e = e.childContextTypes), e != null;
}
function Li() {
	$(ve), $(fe);
}
function Xu(e, t, n) {
	if (fe.current !== Lt) throw Error(E(168));
	U(fe, t), U(ve, n);
}
function cf(e, t, n) {
	var r = e.stateNode;
	if (
		((t = t.childContextTypes),
		typeof r.getChildContext != "function")
	)
		return n;
	r = r.getChildContext();
	for (var i in r)
		if (!(i in t))
			throw Error(E(108, Fp(e) || "Unknown", i));
	return q({}, n, r);
}
function Ai(e) {
	return (
		(e =
			((e = e.stateNode) &&
				e.__reactInternalMemoizedMergedChildContext) ||
			Lt),
		(qt = fe.current),
		U(fe, e),
		U(ve, ve.current),
		!0
	);
}
function Gu(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(E(169));
	n
		? ((e = cf(e, t, qt)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  $(ve),
		  $(fe),
		  U(fe, e))
		: $(ve),
		U(ve, n);
}
var et = null,
	to = !1,
	$o = !1;
function ff(e) {
	et === null ? (et = [e]) : et.push(e);
}
function tm(e) {
	(to = !0), ff(e);
}
function zt() {
	if (!$o && et !== null) {
		$o = !0;
		var e = 0,
			t = F;
		try {
			var n = et;
			for (F = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(et = null), (to = !1);
		} catch (i) {
			throw (
				(et !== null && (et = et.slice(e + 1)),
				Ic(wl, zt),
				i)
			);
		} finally {
			(F = t), ($o = !1);
		}
	}
	return null;
}
var un = [],
	an = 0,
	ji = null,
	zi = 0,
	Re = [],
	Oe = 0,
	Qt = null,
	tt = 1,
	nt = "";
function Dt(e, t) {
	(un[an++] = zi), (un[an++] = ji), (ji = e), (zi = t);
}
function df(e, t, n) {
	(Re[Oe++] = tt),
		(Re[Oe++] = nt),
		(Re[Oe++] = Qt),
		(Qt = e);
	var r = tt;
	e = nt;
	var i = 32 - Ve(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var o = 32 - Ve(t) + i;
	if (30 < o) {
		var s = i - (i % 5);
		(o = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(i -= s),
			(tt = (1 << (32 - Ve(t) + i)) | (n << i) | r),
			(nt = o + e);
	} else (tt = (1 << o) | (n << i) | r), (nt = e);
}
function Ol(e) {
	e.return !== null && (Dt(e, 1), df(e, 1, 0));
}
function Pl(e) {
	for (; e === ji; )
		(ji = un[--an]),
			(un[an] = null),
			(zi = un[--an]),
			(un[an] = null);
	for (; e === Qt; )
		(Qt = Re[--Oe]),
			(Re[Oe] = null),
			(nt = Re[--Oe]),
			(Re[Oe] = null),
			(tt = Re[--Oe]),
			(Re[Oe] = null);
}
var ke = null,
	xe = null,
	V = !1,
	Me = null;
function pf(e, t) {
	var n = Te(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null
			? ((e.deletions = [n]), (e.flags |= 16))
			: t.push(n);
}
function Zu(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 ||
					n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t),
					  (ke = e),
					  (xe = Ct(t.firstChild)),
					  !0)
					: !1
			);
		case 6:
			return (
				(t =
					e.pendingProps === "" || t.nodeType !== 3
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (ke = e), (xe = null), !0)
					: !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n =
							Qt !== null
								? { id: tt, overflow: nt }
								: null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = Te(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (ke = e),
					  (xe = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function Ls(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function As(e) {
	if (V) {
		var t = xe;
		if (t) {
			var n = t;
			if (!Zu(e, t)) {
				if (Ls(e)) throw Error(E(418));
				t = Ct(n.nextSibling);
				var r = ke;
				t && Zu(e, t)
					? pf(r, n)
					: ((e.flags = (e.flags & -4097) | 2),
					  (V = !1),
					  (ke = e));
			}
		} else {
			if (Ls(e)) throw Error(E(418));
			(e.flags = (e.flags & -4097) | 2), (V = !1), (ke = e);
		}
	}
}
function ea(e) {
	for (
		e = e.return;
		e !== null &&
		e.tag !== 5 &&
		e.tag !== 3 &&
		e.tag !== 13;

	)
		e = e.return;
	ke = e;
}
function Kr(e) {
	if (e !== ke) return !1;
	if (!V) return ea(e), (V = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t =
				t !== "head" &&
				t !== "body" &&
				!Rs(e.type, e.memoizedProps))),
		t && (t = xe))
	) {
		if (Ls(e)) throw (hf(), Error(E(418)));
		for (; t; ) pf(e, t), (t = Ct(t.nextSibling));
	}
	if ((ea(e), e.tag === 13)) {
		if (
			((e = e.memoizedState),
			(e = e !== null ? e.dehydrated : null),
			!e)
		)
			throw Error(E(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							xe = Ct(e.nextSibling);
							break e;
						}
						t--;
					} else
						(n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			xe = null;
		}
	} else xe = ke ? Ct(e.stateNode.nextSibling) : null;
	return !0;
}
function hf() {
	for (var e = xe; e; ) e = Ct(e.nextSibling);
}
function xn() {
	(xe = ke = null), (V = !1);
}
function Tl(e) {
	Me === null ? (Me = [e]) : Me.push(e);
}
var nm = ft.ReactCurrentBatchConfig;
function De(e, t) {
	if (e && e.defaultProps) {
		(t = q({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var Ii = jt(null),
	Bi = null,
	cn = null,
	Ll = null;
function Al() {
	Ll = cn = Bi = null;
}
function jl(e) {
	var t = Ii.current;
	$(Ii), (e._currentValue = t);
}
function js(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t),
				  r !== null && (r.childLanes |= t))
				: r !== null &&
				  (r.childLanes & t) !== t &&
				  (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function gn(e, t) {
	(Bi = e),
		(Ll = cn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (ge = !0), (e.firstContext = null));
}
function je(e) {
	var t = e._currentValue;
	if (Ll !== e)
		if (
			((e = { context: e, memoizedValue: t, next: null }),
			cn === null)
		) {
			if (Bi === null) throw Error(E(308));
			(cn = e),
				(Bi.dependencies = { lanes: 0, firstContext: e });
		} else cn = cn.next = e;
	return t;
}
var Mt = null;
function zl(e) {
	Mt === null ? (Mt = [e]) : Mt.push(e);
}
function mf(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null
			? ((n.next = n), zl(t))
			: ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		ut(e, r)
	);
}
function ut(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (
		n !== null && (n.lanes |= t), n = e, e = e.return;
		e !== null;

	)
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var mt = !1;
function Il(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function yf(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function it(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function _t(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), D & 2)) {
		var i = r.pending;
		return (
			i === null
				? (t.next = t)
				: ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			ut(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null
			? ((t.next = t), zl(r))
			: ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		ut(e, n)
	);
}
function ui(e, t, n) {
	if (
		((t = t.updateQueue),
		t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes),
			(n |= r),
			(t.lanes = n),
			Sl(e, n);
	}
}
function ta(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (i = o = s) : (o = o.next = s),
					(n = n.next);
			} while (n !== null);
			o === null ? (i = o = t) : (o = o.next = t);
		} else i = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function Di(e, t, n, r) {
	var i = e.updateQueue;
	mt = !1;
	var o = i.firstBaseUpdate,
		s = i.lastBaseUpdate,
		l = i.shared.pending;
	if (l !== null) {
		i.shared.pending = null;
		var u = l,
			a = u.next;
		(u.next = null),
			s === null ? (o = a) : (s.next = a),
			(s = u);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(l = c.lastBaseUpdate),
			l !== s &&
				(l === null
					? (c.firstBaseUpdate = a)
					: (l.next = a),
				(c.lastBaseUpdate = u)));
	}
	if (o !== null) {
		var d = i.baseState;
		(s = 0), (c = a = u = null), (l = o);
		do {
			var h = l.lane,
				g = l.eventTime;
			if ((r & h) === h) {
				c !== null &&
					(c = c.next =
						{
							eventTime: g,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null,
						});
				e: {
					var y = e,
						v = l;
					switch (((h = t), (g = n), v.tag)) {
						case 1:
							if (
								((y = v.payload), typeof y == "function")
							) {
								d = y.call(g, d, h);
								break e;
							}
							d = y;
							break e;
						case 3:
							y.flags = (y.flags & -65537) | 128;
						case 0:
							if (
								((y = v.payload),
								(h =
									typeof y == "function"
										? y.call(g, d, h)
										: y),
								h == null)
							)
								break e;
							d = q({}, d, h);
							break e;
						case 2:
							mt = !0;
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64),
					(h = i.effects),
					h === null ? (i.effects = [l]) : h.push(l));
			} else
				(g = {
					eventTime: g,
					lane: h,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					c === null
						? ((a = c = g), (u = d))
						: (c = c.next = g),
					(s |= h);
			if (((l = l.next), l === null)) {
				if (((l = i.shared.pending), l === null)) break;
				(h = l),
					(l = h.next),
					(h.next = null),
					(i.lastBaseUpdate = h),
					(i.shared.pending = null);
			}
		} while (1);
		if (
			(c === null && (u = d),
			(i.baseState = u),
			(i.firstBaseUpdate = a),
			(i.lastBaseUpdate = c),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (s |= i.lane), (i = i.next);
			while (i !== t);
		} else o === null && (i.shared.lanes = 0);
		(Jt |= s), (e.lanes = s), (e.memoizedState = d);
	}
}
function na(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (
					((r.callback = null),
					(r = n),
					typeof i != "function")
				)
					throw Error(E(191, i));
				i.call(r);
			}
		}
}
var gf = new hc.Component().refs;
function zs(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : q({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var no = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Xt(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = pe(),
			i = Rt(e),
			o = it(r, i);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = _t(e, o, i)),
			t !== null && (He(t, e, i, r), ui(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = pe(),
			i = Rt(e),
			o = it(r, i);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = _t(e, o, i)),
			t !== null && (He(t, e, i, r), ui(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = pe(),
			r = Rt(e),
			i = it(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = _t(e, i, r)),
			t !== null && (He(t, e, r, n), ui(t, e, r));
	},
};
function ra(e, t, n, r, i, o, s) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, o, s)
			: t.prototype && t.prototype.isPureReactComponent
			? !hr(n, r) || !hr(i, o)
			: !0
	);
}
function vf(e, t, n) {
	var r = !1,
		i = Lt,
		o = t.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = je(o))
			: ((i = we(t) ? qt : fe.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? En(e, i) : Lt)),
		(t = new t(n, o)),
		(e.memoizedState =
			t.state !== null && t.state !== void 0
				? t.state
				: null),
		(t.updater = no),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function ia(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps ==
			"function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e &&
			no.enqueueReplaceState(t, t.state, null);
}
function Is(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n),
		(i.state = e.memoizedState),
		(i.refs = gf),
		Il(e);
	var o = t.contextType;
	typeof o == "object" && o !== null
		? (i.context = je(o))
		: ((o = we(t) ? qt : fe.current),
		  (i.context = En(e, o))),
		(i.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == "function" &&
			(zs(e, t, o, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" &&
				i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" &&
				i.UNSAFE_componentWillMount(),
			t !== i.state &&
				no.enqueueReplaceState(i, i.state, null),
			Di(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" &&
			(e.flags |= 4194308);
}
function Vn(e, t, n) {
	if (
		((e = n.ref),
		e !== null &&
			typeof e != "function" &&
			typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(E(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(E(147, e));
			var i = r,
				o = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (s) {
						var l = i.refs;
						l === gf && (l = i.refs = {}),
							s === null ? delete l[o] : (l[o] = s);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != "string") throw Error(E(284));
		if (!n._owner) throw Error(E(290, e));
	}
	return e;
}
function Jr(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			E(
				31,
				e === "[object Object]"
					? "object with keys {" +
							Object.keys(t).join(", ") +
							"}"
					: e
			)
		))
	);
}
function oa(e) {
	var t = e._init;
	return t(e._payload);
}
function wf(e) {
	function t(p, f) {
		if (e) {
			var m = p.deletions;
			m === null
				? ((p.deletions = [f]), (p.flags |= 16))
				: m.push(f);
		}
	}
	function n(p, f) {
		if (!e) return null;
		for (; f !== null; ) t(p, f), (f = f.sibling);
		return null;
	}
	function r(p, f) {
		for (p = new Map(); f !== null; )
			f.key !== null ? p.set(f.key, f) : p.set(f.index, f),
				(f = f.sibling);
		return p;
	}
	function i(p, f) {
		return (
			(p = Ot(p, f)), (p.index = 0), (p.sibling = null), p
		);
	}
	function o(p, f, m) {
		return (
			(p.index = m),
			e
				? ((m = p.alternate),
				  m !== null
						? ((m = m.index),
						  m < f ? ((p.flags |= 2), f) : m)
						: ((p.flags |= 2), f))
				: ((p.flags |= 1048576), f)
		);
	}
	function s(p) {
		return e && p.alternate === null && (p.flags |= 2), p;
	}
	function l(p, f, m, S) {
		return f === null || f.tag !== 6
			? ((f = Jo(m, p.mode, S)), (f.return = p), f)
			: ((f = i(f, m)), (f.return = p), f);
	}
	function u(p, f, m, S) {
		var C = m.type;
		return C === tn
			? c(p, f, m.props.children, S, m.key)
			: f !== null &&
			  (f.elementType === C ||
					(typeof C == "object" &&
						C !== null &&
						C.$$typeof === ht &&
						oa(C) === f.type))
			? ((S = i(f, m.props)),
			  (S.ref = Vn(p, f, m)),
			  (S.return = p),
			  S)
			: ((S = hi(m.type, m.key, m.props, null, p.mode, S)),
			  (S.ref = Vn(p, f, m)),
			  (S.return = p),
			  S);
	}
	function a(p, f, m, S) {
		return f === null ||
			f.tag !== 4 ||
			f.stateNode.containerInfo !== m.containerInfo ||
			f.stateNode.implementation !== m.implementation
			? ((f = bo(m, p.mode, S)), (f.return = p), f)
			: ((f = i(f, m.children || [])), (f.return = p), f);
	}
	function c(p, f, m, S, C) {
		return f === null || f.tag !== 7
			? ((f = Ht(m, p.mode, S, C)), (f.return = p), f)
			: ((f = i(f, m)), (f.return = p), f);
	}
	function d(p, f, m) {
		if (
			(typeof f == "string" && f !== "") ||
			typeof f == "number"
		)
			return (f = Jo("" + f, p.mode, m)), (f.return = p), f;
		if (typeof f == "object" && f !== null) {
			switch (f.$$typeof) {
				case Dr:
					return (
						(m = hi(
							f.type,
							f.key,
							f.props,
							null,
							p.mode,
							m
						)),
						(m.ref = Vn(p, null, f)),
						(m.return = p),
						m
					);
				case en:
					return (f = bo(f, p.mode, m)), (f.return = p), f;
				case ht:
					var S = f._init;
					return d(p, S(f._payload), m);
			}
			if (Jn(f) || Dn(f))
				return (
					(f = Ht(f, p.mode, m, null)), (f.return = p), f
				);
			Jr(p, f);
		}
		return null;
	}
	function h(p, f, m, S) {
		var C = f !== null ? f.key : null;
		if (
			(typeof m == "string" && m !== "") ||
			typeof m == "number"
		)
			return C !== null ? null : l(p, f, "" + m, S);
		if (typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case Dr:
					return m.key === C ? u(p, f, m, S) : null;
				case en:
					return m.key === C ? a(p, f, m, S) : null;
				case ht:
					return (C = m._init), h(p, f, C(m._payload), S);
			}
			if (Jn(m) || Dn(m))
				return C !== null ? null : c(p, f, m, S, null);
			Jr(p, m);
		}
		return null;
	}
	function g(p, f, m, S, C) {
		if (
			(typeof S == "string" && S !== "") ||
			typeof S == "number"
		)
			return (p = p.get(m) || null), l(f, p, "" + S, C);
		if (typeof S == "object" && S !== null) {
			switch (S.$$typeof) {
				case Dr:
					return (
						(p = p.get(S.key === null ? m : S.key) || null),
						u(f, p, S, C)
					);
				case en:
					return (
						(p = p.get(S.key === null ? m : S.key) || null),
						a(f, p, S, C)
					);
				case ht:
					var O = S._init;
					return g(p, f, m, O(S._payload), C);
			}
			if (Jn(S) || Dn(S))
				return (p = p.get(m) || null), c(f, p, S, C, null);
			Jr(f, S);
		}
		return null;
	}
	function y(p, f, m, S) {
		for (
			var C = null, O = null, P = f, T = (f = 0), K = null;
			P !== null && T < m.length;
			T++
		) {
			P.index > T ? ((K = P), (P = null)) : (K = P.sibling);
			var z = h(p, P, m[T], S);
			if (z === null) {
				P === null && (P = K);
				break;
			}
			e && P && z.alternate === null && t(p, P),
				(f = o(z, f, T)),
				O === null ? (C = z) : (O.sibling = z),
				(O = z),
				(P = K);
		}
		if (T === m.length) return n(p, P), V && Dt(p, T), C;
		if (P === null) {
			for (; T < m.length; T++)
				(P = d(p, m[T], S)),
					P !== null &&
						((f = o(P, f, T)),
						O === null ? (C = P) : (O.sibling = P),
						(O = P));
			return V && Dt(p, T), C;
		}
		for (P = r(p, P); T < m.length; T++)
			(K = g(P, p, T, m[T], S)),
				K !== null &&
					(e &&
						K.alternate !== null &&
						P.delete(K.key === null ? T : K.key),
					(f = o(K, f, T)),
					O === null ? (C = K) : (O.sibling = K),
					(O = K));
		return (
			e &&
				P.forEach(function (Ie) {
					return t(p, Ie);
				}),
			V && Dt(p, T),
			C
		);
	}
	function v(p, f, m, S) {
		var C = Dn(m);
		if (typeof C != "function") throw Error(E(150));
		if (((m = C.call(m)), m == null)) throw Error(E(151));
		for (
			var O = (C = null),
				P = f,
				T = (f = 0),
				K = null,
				z = m.next();
			P !== null && !z.done;
			T++, z = m.next()
		) {
			P.index > T ? ((K = P), (P = null)) : (K = P.sibling);
			var Ie = h(p, P, z.value, S);
			if (Ie === null) {
				P === null && (P = K);
				break;
			}
			e && P && Ie.alternate === null && t(p, P),
				(f = o(Ie, f, T)),
				O === null ? (C = Ie) : (O.sibling = Ie),
				(O = Ie),
				(P = K);
		}
		if (z.done) return n(p, P), V && Dt(p, T), C;
		if (P === null) {
			for (; !z.done; T++, z = m.next())
				(z = d(p, z.value, S)),
					z !== null &&
						((f = o(z, f, T)),
						O === null ? (C = z) : (O.sibling = z),
						(O = z));
			return V && Dt(p, T), C;
		}
		for (P = r(p, P); !z.done; T++, z = m.next())
			(z = g(P, p, T, z.value, S)),
				z !== null &&
					(e &&
						z.alternate !== null &&
						P.delete(z.key === null ? T : z.key),
					(f = o(z, f, T)),
					O === null ? (C = z) : (O.sibling = z),
					(O = z));
		return (
			e &&
				P.forEach(function (In) {
					return t(p, In);
				}),
			V && Dt(p, T),
			C
		);
	}
	function N(p, f, m, S) {
		if (
			(typeof m == "object" &&
				m !== null &&
				m.type === tn &&
				m.key === null &&
				(m = m.props.children),
			typeof m == "object" && m !== null)
		) {
			switch (m.$$typeof) {
				case Dr:
					e: {
						for (var C = m.key, O = f; O !== null; ) {
							if (O.key === C) {
								if (((C = m.type), C === tn)) {
									if (O.tag === 7) {
										n(p, O.sibling),
											(f = i(O, m.props.children)),
											(f.return = p),
											(p = f);
										break e;
									}
								} else if (
									O.elementType === C ||
									(typeof C == "object" &&
										C !== null &&
										C.$$typeof === ht &&
										oa(C) === O.type)
								) {
									n(p, O.sibling),
										(f = i(O, m.props)),
										(f.ref = Vn(p, O, m)),
										(f.return = p),
										(p = f);
									break e;
								}
								n(p, O);
								break;
							} else t(p, O);
							O = O.sibling;
						}
						m.type === tn
							? ((f = Ht(
									m.props.children,
									p.mode,
									S,
									m.key
							  )),
							  (f.return = p),
							  (p = f))
							: ((S = hi(
									m.type,
									m.key,
									m.props,
									null,
									p.mode,
									S
							  )),
							  (S.ref = Vn(p, f, m)),
							  (S.return = p),
							  (p = S));
					}
					return s(p);
				case en:
					e: {
						for (O = m.key; f !== null; ) {
							if (f.key === O)
								if (
									f.tag === 4 &&
									f.stateNode.containerInfo ===
										m.containerInfo &&
									f.stateNode.implementation ===
										m.implementation
								) {
									n(p, f.sibling),
										(f = i(f, m.children || [])),
										(f.return = p),
										(p = f);
									break e;
								} else {
									n(p, f);
									break;
								}
							else t(p, f);
							f = f.sibling;
						}
						(f = bo(m, p.mode, S)), (f.return = p), (p = f);
					}
					return s(p);
				case ht:
					return (O = m._init), N(p, f, O(m._payload), S);
			}
			if (Jn(m)) return y(p, f, m, S);
			if (Dn(m)) return v(p, f, m, S);
			Jr(p, m);
		}
		return (typeof m == "string" && m !== "") ||
			typeof m == "number"
			? ((m = "" + m),
			  f !== null && f.tag === 6
					? (n(p, f.sibling),
					  (f = i(f, m)),
					  (f.return = p),
					  (p = f))
					: (n(p, f),
					  (f = Jo(m, p.mode, S)),
					  (f.return = p),
					  (p = f)),
			  s(p))
			: n(p, f);
	}
	return N;
}
var kn = wf(!0),
	Sf = wf(!1),
	Tr = {},
	be = jt(Tr),
	vr = jt(Tr),
	wr = jt(Tr);
function $t(e) {
	if (e === Tr) throw Error(E(174));
	return e;
}
function Bl(e, t) {
	switch (
		(U(wr, t), U(vr, e), U(be, Tr), (e = t.nodeType), e)
	) {
		case 9:
		case 11:
			t = (t = t.documentElement)
				? t.namespaceURI
				: ps(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = ps(t, e));
	}
	$(be), U(be, t);
}
function Cn() {
	$(be), $(vr), $(wr);
}
function Ef(e) {
	$t(wr.current);
	var t = $t(be.current),
		n = ps(t, e.type);
	t !== n && (U(vr, e), U(be, n));
}
function Dl(e) {
	vr.current === e && ($(be), $(vr));
}
var H = jt(0);
function Fi(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated),
				n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (
			t.tag === 19 &&
			t.memoizedProps.revealOrder !== void 0
		) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var Vo = [];
function Fl() {
	for (var e = 0; e < Vo.length; e++)
		Vo[e]._workInProgressVersionPrimary = null;
	Vo.length = 0;
}
var ai = ft.ReactCurrentDispatcher,
	Ho = ft.ReactCurrentBatchConfig,
	Kt = 0,
	W = null,
	Z = null,
	re = null,
	Ui = !1,
	rr = !1,
	Sr = 0,
	rm = 0;
function ue() {
	throw Error(E(321));
}
function Ul(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!We(e[n], t[n])) return !1;
	return !0;
}
function Ml(e, t, n, r, i, o) {
	if (
		((Kt = o),
		(W = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(ai.current =
			e === null || e.memoizedState === null ? lm : um),
		(e = n(r, i)),
		rr)
	) {
		o = 0;
		do {
			if (((rr = !1), (Sr = 0), 25 <= o))
				throw Error(E(301));
			(o += 1),
				(re = Z = null),
				(t.updateQueue = null),
				(ai.current = am),
				(e = n(r, i));
		} while (rr);
	}
	if (
		((ai.current = Mi),
		(t = Z !== null && Z.next !== null),
		(Kt = 0),
		(re = Z = W = null),
		(Ui = !1),
		t)
	)
		throw Error(E(300));
	return e;
}
function $l() {
	var e = Sr !== 0;
	return (Sr = 0), e;
}
function Qe() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return (
		re === null
			? (W.memoizedState = re = e)
			: (re = re.next = e),
		re
	);
}
function ze() {
	if (Z === null) {
		var e = W.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = Z.next;
	var t = re === null ? W.memoizedState : re.next;
	if (t !== null) (re = t), (Z = e);
	else {
		if (e === null) throw Error(E(310));
		(Z = e),
			(e = {
				memoizedState: Z.memoizedState,
				baseState: Z.baseState,
				baseQueue: Z.baseQueue,
				queue: Z.queue,
				next: null,
			}),
			re === null
				? (W.memoizedState = re = e)
				: (re = re.next = e);
	}
	return re;
}
function Er(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function Wo(e) {
	var t = ze(),
		n = t.queue;
	if (n === null) throw Error(E(311));
	n.lastRenderedReducer = e;
	var r = Z,
		i = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (i !== null) {
			var s = i.next;
			(i.next = o.next), (o.next = s);
		}
		(r.baseQueue = i = o), (n.pending = null);
	}
	if (i !== null) {
		(o = i.next), (r = r.baseState);
		var l = (s = null),
			u = null,
			a = o;
		do {
			var c = a.lane;
			if ((Kt & c) === c)
				u !== null &&
					(u = u.next =
						{
							lane: 0,
							action: a.action,
							hasEagerState: a.hasEagerState,
							eagerState: a.eagerState,
							next: null,
						}),
					(r = a.hasEagerState
						? a.eagerState
						: e(r, a.action));
			else {
				var d = {
					lane: c,
					action: a.action,
					hasEagerState: a.hasEagerState,
					eagerState: a.eagerState,
					next: null,
				};
				u === null
					? ((l = u = d), (s = r))
					: (u = u.next = d),
					(W.lanes |= c),
					(Jt |= c);
			}
			a = a.next;
		} while (a !== null && a !== o);
		u === null ? (s = r) : (u.next = l),
			We(r, t.memoizedState) || (ge = !0),
			(t.memoizedState = r),
			(t.baseState = s),
			(t.baseQueue = u),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do
			(o = i.lane), (W.lanes |= o), (Jt |= o), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function qo(e) {
	var t = ze(),
		n = t.queue;
	if (n === null) throw Error(E(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var s = (i = i.next);
		do (o = e(o, s.action)), (s = s.next);
		while (s !== i);
		We(o, t.memoizedState) || (ge = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function xf() {}
function kf(e, t) {
	var n = W,
		r = ze(),
		i = t(),
		o = !We(r.memoizedState, i);
	if (
		(o && ((r.memoizedState = i), (ge = !0)),
		(r = r.queue),
		Vl(Nf.bind(null, n, r, e), [e]),
		r.getSnapshot !== t ||
			o ||
			(re !== null && re.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			xr(9, _f.bind(null, n, r, i, t), void 0, null),
			ie === null)
		)
			throw Error(E(349));
		Kt & 30 || Cf(n, t, i);
	}
	return i;
}
function Cf(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = W.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (W.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores),
			  n === null ? (t.stores = [e]) : n.push(e));
}
function _f(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Rf(t) && Of(e);
}
function Nf(e, t, n) {
	return n(function () {
		Rf(t) && Of(e);
	});
}
function Rf(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !We(e, n);
	} catch {
		return !0;
	}
}
function Of(e) {
	var t = ut(e, 1);
	t !== null && He(t, e, 1, -1);
}
function sa(e) {
	var t = Qe();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Er,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = sm.bind(null, W, e)),
		[t.memoizedState, e]
	);
}
function xr(e, t, n, r) {
	return (
		(e = {
			tag: e,
			create: t,
			destroy: n,
			deps: r,
			next: null,
		}),
		(t = W.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (W.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next),
					  (n.next = e),
					  (e.next = r),
					  (t.lastEffect = e))),
		e
	);
}
function Pf() {
	return ze().memoizedState;
}
function ci(e, t, n, r) {
	var i = Qe();
	(W.flags |= e),
		(i.memoizedState = xr(
			1 | t,
			n,
			void 0,
			r === void 0 ? null : r
		));
}
function ro(e, t, n, r) {
	var i = ze();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (Z !== null) {
		var s = Z.memoizedState;
		if (((o = s.destroy), r !== null && Ul(r, s.deps))) {
			i.memoizedState = xr(t, n, o, r);
			return;
		}
	}
	(W.flags |= e), (i.memoizedState = xr(1 | t, n, o, r));
}
function la(e, t) {
	return ci(8390656, 8, e, t);
}
function Vl(e, t) {
	return ro(2048, 8, e, t);
}
function Tf(e, t) {
	return ro(4, 2, e, t);
}
function Lf(e, t) {
	return ro(4, 4, e, t);
}
function Af(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function jf(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null),
		ro(4, 4, Af.bind(null, t, e), n)
	);
}
function Hl() {}
function zf(e, t) {
	var n = ze();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ul(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function If(e, t) {
	var n = ze();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Ul(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Bf(e, t, n) {
	return Kt & 21
		? (We(n, t) ||
				((n = Fc()),
				(W.lanes |= n),
				(Jt |= n),
				(e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (ge = !0)),
		  (e.memoizedState = n));
}
function im(e, t) {
	var n = F;
	(F = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Ho.transition;
	Ho.transition = {};
	try {
		e(!1), t();
	} finally {
		(F = n), (Ho.transition = r);
	}
}
function Df() {
	return ze().memoizedState;
}
function om(e, t, n) {
	var r = Rt(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Ff(e))
	)
		Uf(t, n);
	else if (((n = mf(e, t, n, r)), n !== null)) {
		var i = pe();
		He(n, e, r, i), Mf(n, t, r);
	}
}
function sm(e, t, n) {
	var r = Rt(e),
		i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
	if (Ff(e)) Uf(t, i);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var s = t.lastRenderedState,
					l = o(s, n);
				if (
					((i.hasEagerState = !0),
					(i.eagerState = l),
					We(l, s))
				) {
					var u = t.interleaved;
					u === null
						? ((i.next = i), zl(t))
						: ((i.next = u.next), (u.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = mf(e, t, i, r)),
			n !== null &&
				((i = pe()), He(n, e, r, i), Mf(n, t, r));
	}
}
function Ff(e) {
	var t = e.alternate;
	return e === W || (t !== null && t === W);
}
function Uf(e, t) {
	rr = Ui = !0;
	var n = e.pending;
	n === null
		? (t.next = t)
		: ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function Mf(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes),
			(n |= r),
			(t.lanes = n),
			Sl(e, n);
	}
}
var Mi = {
		readContext: je,
		useCallback: ue,
		useContext: ue,
		useEffect: ue,
		useImperativeHandle: ue,
		useInsertionEffect: ue,
		useLayoutEffect: ue,
		useMemo: ue,
		useReducer: ue,
		useRef: ue,
		useState: ue,
		useDebugValue: ue,
		useDeferredValue: ue,
		useTransition: ue,
		useMutableSource: ue,
		useSyncExternalStore: ue,
		useId: ue,
		unstable_isNewReconciler: !1,
	},
	lm = {
		readContext: je,
		useCallback: function (e, t) {
			return (
				(Qe().memoizedState = [e, t === void 0 ? null : t]),
				e
			);
		},
		useContext: je,
		useEffect: la,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				ci(4194308, 4, Af.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return ci(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return ci(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Qe();
			return (
				(t = t === void 0 ? null : t),
				(e = e()),
				(n.memoizedState = [e, t]),
				e
			);
		},
		useReducer: function (e, t, n) {
			var r = Qe();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = om.bind(null, W, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Qe();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: sa,
		useDebugValue: Hl,
		useDeferredValue: function (e) {
			return (Qe().memoizedState = e);
		},
		useTransition: function () {
			var e = sa(!1),
				t = e[0];
			return (
				(e = im.bind(null, e[1])),
				(Qe().memoizedState = e),
				[t, e]
			);
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = W,
				i = Qe();
			if (V) {
				if (n === void 0) throw Error(E(407));
				n = n();
			} else {
				if (((n = t()), ie === null)) throw Error(E(349));
				Kt & 30 || Cf(r, t, n);
			}
			i.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(i.queue = o),
				la(Nf.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				xr(9, _f.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Qe(),
				t = ie.identifierPrefix;
			if (V) {
				var n = nt,
					r = tt;
				(n =
					(r & ~(1 << (32 - Ve(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Sr++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else
				(n = rm++),
					(t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	um = {
		readContext: je,
		useCallback: zf,
		useContext: je,
		useEffect: Vl,
		useImperativeHandle: jf,
		useInsertionEffect: Tf,
		useLayoutEffect: Lf,
		useMemo: If,
		useReducer: Wo,
		useRef: Pf,
		useState: function () {
			return Wo(Er);
		},
		useDebugValue: Hl,
		useDeferredValue: function (e) {
			var t = ze();
			return Bf(t, Z.memoizedState, e);
		},
		useTransition: function () {
			var e = Wo(Er)[0],
				t = ze().memoizedState;
			return [e, t];
		},
		useMutableSource: xf,
		useSyncExternalStore: kf,
		useId: Df,
		unstable_isNewReconciler: !1,
	},
	am = {
		readContext: je,
		useCallback: zf,
		useContext: je,
		useEffect: Vl,
		useImperativeHandle: jf,
		useInsertionEffect: Tf,
		useLayoutEffect: Lf,
		useMemo: If,
		useReducer: qo,
		useRef: Pf,
		useState: function () {
			return qo(Er);
		},
		useDebugValue: Hl,
		useDeferredValue: function (e) {
			var t = ze();
			return Z === null
				? (t.memoizedState = e)
				: Bf(t, Z.memoizedState, e);
		},
		useTransition: function () {
			var e = qo(Er)[0],
				t = ze().memoizedState;
			return [e, t];
		},
		useMutableSource: xf,
		useSyncExternalStore: kf,
		useId: Df,
		unstable_isNewReconciler: !1,
	};
function _n(e, t) {
	try {
		var n = "",
			r = t;
		do (n += Dp(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function Qo(e, t, n) {
	return {
		value: e,
		source: null,
		stack: n ?? null,
		digest: t ?? null,
	};
}
function Bs(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var cm = typeof WeakMap == "function" ? WeakMap : Map;
function $f(e, t, n) {
	(n = it(-1, n)),
		(n.tag = 3),
		(n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			Vi || ((Vi = !0), (Qs = r)), Bs(e, t);
		}),
		n
	);
}
function Vf(e, t, n) {
	(n = it(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				Bs(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function () {
				Bs(e, t),
					typeof r != "function" &&
						(Nt === null
							? (Nt = new Set([this]))
							: Nt.add(this));
				var s = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: s !== null ? s : "",
				});
			}),
		n
	);
}
function ua(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new cm();
		var i = new Set();
		r.set(t, i);
	} else
		(i = r.get(t)),
			i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) ||
		(i.add(n), (e = Cm.bind(null, e, t, n)), t.then(e, e));
}
function aa(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState),
				(t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function ca(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = it(-1, 1)),
							  (t.tag = 2),
							  _t(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var fm = ft.ReactCurrentOwner,
	ge = !1;
function de(e, t, n, r) {
	t.child =
		e === null ? Sf(t, null, n, r) : kn(t, e.child, n, r);
}
function fa(e, t, n, r, i) {
	n = n.render;
	var o = t.ref;
	return (
		gn(t, i),
		(r = Ml(e, t, n, r, o, i)),
		(n = $l()),
		e !== null && !ge
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  at(e, t, i))
			: (V && n && Ol(t),
			  (t.flags |= 1),
			  de(e, t, r, i),
			  t.child)
	);
}
function da(e, t, n, r, i) {
	if (e === null) {
		var o = n.type;
		return typeof o == "function" &&
			!Xl(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), Hf(e, t, o, r, i))
			: ((e = hi(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & i))) {
		var s = o.memoizedProps;
		if (
			((n = n.compare),
			(n = n !== null ? n : hr),
			n(s, r) && e.ref === t.ref)
		)
			return at(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = Ot(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function Hf(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (hr(o, r) && e.ref === t.ref)
			if (
				((ge = !1),
				(t.pendingProps = r = o),
				(e.lanes & i) !== 0)
			)
				e.flags & 131072 && (ge = !0);
			else return (t.lanes = e.lanes), at(e, t, i);
	}
	return Ds(e, t, n, r, i);
}
function Wf(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null,
			}),
				U(dn, Ee),
				(Ee |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					U(dn, Ee),
					(Ee |= e),
					null
				);
			(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null,
			}),
				(r = o !== null ? o.baseLanes : n),
				U(dn, Ee),
				(Ee |= r);
		}
	else
		o !== null
			? ((r = o.baseLanes | n), (t.memoizedState = null))
			: (r = n),
			U(dn, Ee),
			(Ee |= r);
	return de(e, t, i, n), t.child;
}
function qf(e, t) {
	var n = t.ref;
	((e === null && n !== null) ||
		(e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Ds(e, t, n, r, i) {
	var o = we(n) ? qt : fe.current;
	return (
		(o = En(t, o)),
		gn(t, i),
		(n = Ml(e, t, n, r, o, i)),
		(r = $l()),
		e !== null && !ge
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  at(e, t, i))
			: (V && r && Ol(t),
			  (t.flags |= 1),
			  de(e, t, n, i),
			  t.child)
	);
}
function pa(e, t, n, r, i) {
	if (we(n)) {
		var o = !0;
		Ai(t);
	} else o = !1;
	if ((gn(t, i), t.stateNode === null))
		fi(e, t), vf(t, n, r), Is(t, n, r, i), (r = !0);
	else if (e === null) {
		var s = t.stateNode,
			l = t.memoizedProps;
		s.props = l;
		var u = s.context,
			a = n.contextType;
		typeof a == "object" && a !== null
			? (a = je(a))
			: ((a = we(n) ? qt : fe.current), (a = En(t, a)));
		var c = n.getDerivedStateFromProps,
			d =
				typeof c == "function" ||
				typeof s.getSnapshotBeforeUpdate == "function";
		d ||
			(typeof s.UNSAFE_componentWillReceiveProps !=
				"function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((l !== r || u !== a) && ia(t, s, r, a)),
			(mt = !1);
		var h = t.memoizedState;
		(s.state = h),
			Di(t, r, s, i),
			(u = t.memoizedState),
			l !== r || h !== u || ve.current || mt
				? (typeof c == "function" &&
						(zs(t, n, c, r), (u = t.memoizedState)),
				  (l = mt || ra(t, n, l, r, h, u, a))
						? (d ||
								(typeof s.UNSAFE_componentWillMount !=
									"function" &&
									typeof s.componentWillMount !=
										"function") ||
								(typeof s.componentWillMount ==
									"function" && s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount ==
									"function" &&
									s.UNSAFE_componentWillMount()),
						  typeof s.componentDidMount == "function" &&
								(t.flags |= 4194308))
						: (typeof s.componentDidMount == "function" &&
								(t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = u)),
				  (s.props = r),
				  (s.state = u),
				  (s.context = a),
				  (r = l))
				: (typeof s.componentDidMount == "function" &&
						(t.flags |= 4194308),
				  (r = !1));
	} else {
		(s = t.stateNode),
			yf(e, t),
			(l = t.memoizedProps),
			(a = t.type === t.elementType ? l : De(t.type, l)),
			(s.props = a),
			(d = t.pendingProps),
			(h = s.context),
			(u = n.contextType),
			typeof u == "object" && u !== null
				? (u = je(u))
				: ((u = we(n) ? qt : fe.current), (u = En(t, u)));
		var g = n.getDerivedStateFromProps;
		(c =
			typeof g == "function" ||
			typeof s.getSnapshotBeforeUpdate == "function") ||
			(typeof s.UNSAFE_componentWillReceiveProps !=
				"function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((l !== d || h !== u) && ia(t, s, r, u)),
			(mt = !1),
			(h = t.memoizedState),
			(s.state = h),
			Di(t, r, s, i);
		var y = t.memoizedState;
		l !== d || h !== y || ve.current || mt
			? (typeof g == "function" &&
					(zs(t, n, g, r), (y = t.memoizedState)),
			  (a = mt || ra(t, n, a, r, h, y, u) || !1)
					? (c ||
							(typeof s.UNSAFE_componentWillUpdate !=
								"function" &&
								typeof s.componentWillUpdate !=
									"function") ||
							(typeof s.componentWillUpdate == "function" &&
								s.componentWillUpdate(r, y, u),
							typeof s.UNSAFE_componentWillUpdate ==
								"function" &&
								s.UNSAFE_componentWillUpdate(r, y, u)),
					  typeof s.componentDidUpdate == "function" &&
							(t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate ==
							"function" && (t.flags |= 1024))
					: (typeof s.componentDidUpdate != "function" ||
							(l === e.memoizedProps &&
								h === e.memoizedState) ||
							(t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate !=
							"function" ||
							(l === e.memoizedProps &&
								h === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = y)),
			  (s.props = r),
			  (s.state = y),
			  (s.context = u),
			  (r = a))
			: (typeof s.componentDidUpdate != "function" ||
					(l === e.memoizedProps &&
						h === e.memoizedState) ||
					(t.flags |= 4),
			  typeof s.getSnapshotBeforeUpdate != "function" ||
					(l === e.memoizedProps &&
						h === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return Fs(e, t, n, r, o, i);
}
function Fs(e, t, n, r, i, o) {
	qf(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return i && Gu(t, n, !1), at(e, t, o);
	(r = t.stateNode), (fm.current = t);
	var l =
		s && typeof n.getDerivedStateFromError != "function"
			? null
			: r.render();
	return (
		(t.flags |= 1),
		e !== null && s
			? ((t.child = kn(t, e.child, null, o)),
			  (t.child = kn(t, null, l, o)))
			: de(e, t, l, o),
		(t.memoizedState = r.state),
		i && Gu(t, n, !0),
		t.child
	);
}
function Qf(e) {
	var t = e.stateNode;
	t.pendingContext
		? Xu(
				e,
				t.pendingContext,
				t.pendingContext !== t.context
		  )
		: t.context && Xu(e, t.context, !1),
		Bl(e, t.containerInfo);
}
function ha(e, t, n, r, i) {
	return (
		xn(), Tl(i), (t.flags |= 256), de(e, t, n, r), t.child
	);
}
var Us = {
	dehydrated: null,
	treeContext: null,
	retryLane: 0,
};
function Ms(e) {
	return {
		baseLanes: e,
		cachePool: null,
		transitions: null,
	};
}
function Kf(e, t, n) {
	var r = t.pendingProps,
		i = H.current,
		o = !1,
		s = (t.flags & 128) !== 0,
		l;
	if (
		((l = s) ||
			(l =
				e !== null && e.memoizedState === null
					? !1
					: (i & 2) !== 0),
		l
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) &&
			  (i |= 1),
		U(H, i & 1),
		e === null)
	)
		return (
			As(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((s = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (s = { mode: "hidden", children: s }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = s))
								: (o = so(s, r, 0, null)),
						  (e = Ht(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = Ms(n)),
						  (t.memoizedState = Us),
						  e)
						: Wl(t, s))
		);
	if (
		((i = e.memoizedState),
		i !== null && ((l = i.dehydrated), l !== null))
	)
		return dm(e, t, s, r, l, i, n);
	if (o) {
		(o = r.fallback),
			(s = t.mode),
			(i = e.child),
			(l = i.sibling);
		var u = { mode: "hidden", children: r.children };
		return (
			!(s & 1) && t.child !== i
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = u),
				  (t.deletions = null))
				: ((r = Ot(i, u)),
				  (r.subtreeFlags = i.subtreeFlags & 14680064)),
			l !== null
				? (o = Ot(l, o))
				: ((o = Ht(o, s, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(s = e.child.memoizedState),
			(s =
				s === null
					? Ms(n)
					: {
							baseLanes: s.baseLanes | n,
							cachePool: null,
							transitions: s.transitions,
					  }),
			(o.memoizedState = s),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = Us),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = Ot(o, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null
				? ((t.deletions = [e]), (t.flags |= 16))
				: n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Wl(e, t) {
	return (
		(t = so(
			{ mode: "visible", children: t },
			e.mode,
			0,
			null
		)),
		(t.return = e),
		(e.child = t)
	);
}
function br(e, t, n, r) {
	return (
		r !== null && Tl(r),
		kn(t, e.child, null, n),
		(e = Wl(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function dm(e, t, n, r, i, o, s) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257),
			  (r = Qo(Error(E(422)))),
			  br(e, t, s, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (i = t.mode),
			  (r = so(
					{ mode: "visible", children: r.children },
					i,
					0,
					null
			  )),
			  (o = Ht(o, i, s, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && kn(t, e.child, null, s),
			  (t.child.memoizedState = Ms(s)),
			  (t.memoizedState = Us),
			  o);
	if (!(t.mode & 1)) return br(e, t, s, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r))
			var l = r.dgst;
		return (
			(r = l),
			(o = Error(E(419))),
			(r = Qo(o, r, void 0)),
			br(e, t, s, r)
		);
	}
	if (((l = (s & e.childLanes) !== 0), ge || l)) {
		if (((r = ie), r !== null)) {
			switch (s & -s) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | s) ? 0 : i),
				i !== 0 &&
					i !== o.retryLane &&
					((o.retryLane = i), ut(e, i), He(r, e, i, -1));
		}
		return Yl(), (r = Qo(Error(E(421)))), br(e, t, s, r);
	}
	return i.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = _m.bind(null, e)),
		  (i._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (xe = Ct(i.nextSibling)),
		  (ke = t),
		  (V = !0),
		  (Me = null),
		  e !== null &&
				((Re[Oe++] = tt),
				(Re[Oe++] = nt),
				(Re[Oe++] = Qt),
				(tt = e.id),
				(nt = e.overflow),
				(Qt = t)),
		  (t = Wl(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function ma(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), js(e.return, t, n);
}
function Ko(e, t, n, r, i) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = i));
}
function Jf(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail;
	if ((de(e, t, r.children, n), (r = H.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13)
					e.memoizedState !== null && ma(e, n, t);
				else if (e.tag === 19) ma(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((U(H, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && Fi(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Ko(t, !1, i, n, o);
				break;
			case "backwards":
				for (
					n = null, i = t.child, t.child = null;
					i !== null;

				) {
					if (
						((e = i.alternate),
						e !== null && Fi(e) === null)
					) {
						t.child = i;
						break;
					}
					(e = i.sibling),
						(i.sibling = n),
						(n = i),
						(i = e);
				}
				Ko(t, !0, n, null, o);
				break;
			case "together":
				Ko(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function fi(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null),
		(t.alternate = null),
		(t.flags |= 2));
}
function at(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Jt |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child)
		throw Error(E(153));
	if (t.child !== null) {
		for (
			e = t.child,
				n = Ot(e, e.pendingProps),
				t.child = n,
				n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling),
				(n = n.sibling = Ot(e, e.pendingProps)),
				(n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function pm(e, t, n) {
	switch (t.tag) {
		case 3:
			Qf(t), xn();
			break;
		case 5:
			Ef(t);
			break;
		case 1:
			we(t.type) && Ai(t);
			break;
		case 4:
			Bl(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			U(Ii, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (U(H, H.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? Kf(e, t, n)
					: (U(H, H.current & 1),
					  (e = at(e, t, n)),
					  e !== null ? e.sibling : null);
			U(H, H.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Jf(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null),
					(i.tail = null),
					(i.lastEffect = null)),
				U(H, H.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Wf(e, t, n);
	}
	return at(e, t, n);
}
var bf, $s, Yf, Xf;
bf = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6)
			e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
$s = function () {};
Yf = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), $t(be.current);
		var o = null;
		switch (n) {
			case "input":
				(i = as(e, i)), (r = as(e, r)), (o = []);
				break;
			case "select":
				(i = q({}, i, { value: void 0 })),
					(r = q({}, r, { value: void 0 })),
					(o = []);
				break;
			case "textarea":
				(i = ds(e, i)), (r = ds(e, r)), (o = []);
				break;
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = Ti);
		}
		hs(n, r);
		var s;
		n = null;
		for (a in i)
			if (
				!r.hasOwnProperty(a) &&
				i.hasOwnProperty(a) &&
				i[a] != null
			)
				if (a === "style") {
					var l = i[a];
					for (s in l)
						l.hasOwnProperty(s) &&
							(n || (n = {}), (n[s] = ""));
				} else
					a !== "dangerouslySetInnerHTML" &&
						a !== "children" &&
						a !== "suppressContentEditableWarning" &&
						a !== "suppressHydrationWarning" &&
						a !== "autoFocus" &&
						(lr.hasOwnProperty(a)
							? o || (o = [])
							: (o = o || []).push(a, null));
		for (a in r) {
			var u = r[a];
			if (
				((l = i != null ? i[a] : void 0),
				r.hasOwnProperty(a) &&
					u !== l &&
					(u != null || l != null))
			)
				if (a === "style")
					if (l) {
						for (s in l)
							!l.hasOwnProperty(s) ||
								(u && u.hasOwnProperty(s)) ||
								(n || (n = {}), (n[s] = ""));
						for (s in u)
							u.hasOwnProperty(s) &&
								l[s] !== u[s] &&
								(n || (n = {}), (n[s] = u[s]));
					} else
						n || (o || (o = []), o.push(a, n)), (n = u);
				else
					a === "dangerouslySetInnerHTML"
						? ((u = u ? u.__html : void 0),
						  (l = l ? l.__html : void 0),
						  u != null &&
								l !== u &&
								(o = o || []).push(a, u))
						: a === "children"
						? (typeof u != "string" &&
								typeof u != "number") ||
						  (o = o || []).push(a, "" + u)
						: a !== "suppressContentEditableWarning" &&
						  a !== "suppressHydrationWarning" &&
						  (lr.hasOwnProperty(a)
								? (u != null &&
										a === "onScroll" &&
										M("scroll", e),
								  o || l === u || (o = []))
								: (o = o || []).push(a, u));
		}
		n && (o = o || []).push("style", n);
		var a = o;
		(t.updateQueue = a) && (t.flags |= 4);
	}
};
Xf = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Hn(e, t) {
	if (!V)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function ae(e) {
	var t =
			e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function hm(e, t, n) {
	var r = t.pendingProps;
	switch ((Pl(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return ae(t), null;
		case 1:
			return we(t.type) && Li(), ae(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Cn(),
				$(ve),
				$(fe),
				Fl(),
				r.pendingContext &&
					((r.context = r.pendingContext),
					(r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Kr(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated &&
								!(t.flags & 256)) ||
						  ((t.flags |= 1024),
						  Me !== null && (bs(Me), (Me = null)))),
				$s(e, t),
				ae(t),
				null
			);
		case 5:
			Dl(t);
			var i = $t(wr.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Yf(e, t, n, r, i),
					e.ref !== t.ref &&
						((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(E(166));
					return ae(t), null;
				}
				if (((e = $t(be.current)), Kr(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (
						((r[Ke] = t),
						(r[gr] = o),
						(e = (t.mode & 1) !== 0),
						n)
					) {
						case "dialog":
							M("cancel", r), M("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							M("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < Yn.length; i++) M(Yn[i], r);
							break;
						case "source":
							M("error", r);
							break;
						case "img":
						case "image":
						case "link":
							M("error", r), M("load", r);
							break;
						case "details":
							M("toggle", r);
							break;
						case "input":
							Cu(r, o), M("invalid", r);
							break;
						case "select":
							(r._wrapperState = {
								wasMultiple: !!o.multiple,
							}),
								M("invalid", r);
							break;
						case "textarea":
							Nu(r, o), M("invalid", r);
					}
					hs(n, o), (i = null);
					for (var s in o)
						if (o.hasOwnProperty(s)) {
							var l = o[s];
							s === "children"
								? typeof l == "string"
									? r.textContent !== l &&
									  (o.suppressHydrationWarning !== !0 &&
											Qr(r.textContent, l, e),
									  (i = ["children", l]))
									: typeof l == "number" &&
									  r.textContent !== "" + l &&
									  (o.suppressHydrationWarning !== !0 &&
											Qr(r.textContent, l, e),
									  (i = ["children", "" + l]))
								: lr.hasOwnProperty(s) &&
								  l != null &&
								  s === "onScroll" &&
								  M("scroll", r);
						}
					switch (n) {
						case "input":
							Fr(r), _u(r, o, !0);
							break;
						case "textarea":
							Fr(r), Ru(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" &&
								(r.onclick = Ti);
					}
					(r = i),
						(t.updateQueue = r),
						r !== null && (t.flags |= 4);
				} else {
					(s = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" &&
							(e = kc(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = s.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = s.createElement(n, { is: r.is }))
								: ((e = s.createElement(n)),
								  n === "select" &&
										((s = e),
										r.multiple
											? (s.multiple = !0)
											: r.size && (s.size = r.size)))
							: (e = s.createElementNS(e, n)),
						(e[Ke] = t),
						(e[gr] = r),
						bf(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((s = ms(n, r)), n)) {
							case "dialog":
								M("cancel", e), M("close", e), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								M("load", e), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < Yn.length; i++) M(Yn[i], e);
								i = r;
								break;
							case "source":
								M("error", e), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								M("error", e), M("load", e), (i = r);
								break;
							case "details":
								M("toggle", e), (i = r);
								break;
							case "input":
								Cu(e, r), (i = as(e, r)), M("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(e._wrapperState = {
									wasMultiple: !!r.multiple,
								}),
									(i = q({}, r, { value: void 0 })),
									M("invalid", e);
								break;
							case "textarea":
								Nu(e, r), (i = ds(e, r)), M("invalid", e);
								break;
							default:
								i = r;
						}
						hs(n, i), (l = i);
						for (o in l)
							if (l.hasOwnProperty(o)) {
								var u = l[o];
								o === "style"
									? Nc(e, u)
									: o === "dangerouslySetInnerHTML"
									? ((u = u ? u.__html : void 0),
									  u != null && Cc(e, u))
									: o === "children"
									? typeof u == "string"
										? (n !== "textarea" || u !== "") &&
										  ur(e, u)
										: typeof u == "number" && ur(e, "" + u)
									: o !==
											"suppressContentEditableWarning" &&
									  o !== "suppressHydrationWarning" &&
									  o !== "autoFocus" &&
									  (lr.hasOwnProperty(o)
											? u != null &&
											  o === "onScroll" &&
											  M("scroll", e)
											: u != null && hl(e, o, u, s));
							}
						switch (n) {
							case "input":
								Fr(e), _u(e, r, !1);
								break;
							case "textarea":
								Fr(e), Ru(e);
								break;
							case "option":
								r.value != null &&
									e.setAttribute("value", "" + Tt(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? pn(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  pn(
												e,
												!!r.multiple,
												r.defaultValue,
												!0
										  );
								break;
							default:
								typeof i.onClick == "function" &&
									(e.onclick = Ti);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null &&
					((t.flags |= 512), (t.flags |= 2097152));
			}
			return ae(t), null;
		case 6:
			if (e && t.stateNode != null)
				Xf(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null)
					throw Error(E(166));
				if (((n = $t(wr.current)), $t(be.current), Kr(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Ke] = t),
						(o = r.nodeValue !== n) &&
							((e = ke), e !== null))
					)
						switch (e.tag) {
							case 3:
								Qr(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !==
									!0 &&
									Qr(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (
						n.nodeType === 9 ? n : n.ownerDocument
					).createTextNode(r)),
						(r[Ke] = t),
						(t.stateNode = r);
			}
			return ae(t), null;
		case 13:
			if (
				($(H),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null &&
						e.memoizedState.dehydrated !== null))
			) {
				if (
					V &&
					xe !== null &&
					t.mode & 1 &&
					!(t.flags & 128)
				)
					hf(), xn(), (t.flags |= 98560), (o = !1);
				else if (
					((o = Kr(t)), r !== null && r.dehydrated !== null)
				) {
					if (e === null) {
						if (!o) throw Error(E(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(E(317));
						o[Ke] = t;
					} else
						xn(),
							!(t.flags & 128) && (t.memoizedState = null),
							(t.flags |= 4);
					ae(t), (o = !1);
				} else
					Me !== null && (bs(Me), (Me = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || H.current & 1
								? ee === 0 && (ee = 3)
								: Yl())),
				  t.updateQueue !== null && (t.flags |= 4),
				  ae(t),
				  null);
		case 4:
			return (
				Cn(),
				$s(e, t),
				e === null && mr(t.stateNode.containerInfo),
				ae(t),
				null
			);
		case 10:
			return jl(t.type._context), ae(t), null;
		case 17:
			return we(t.type) && Li(), ae(t), null;
		case 19:
			if (($(H), (o = t.memoizedState), o === null))
				return ae(t), null;
			if (
				((r = (t.flags & 128) !== 0),
				(s = o.rendering),
				s === null)
			)
				if (r) Hn(o, !1);
				else {
					if (ee !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((s = Fi(e)), s !== null)) {
								for (
									t.flags |= 128,
										Hn(o, !1),
										r = s.updateQueue,
										r !== null &&
											((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(s = o.alternate),
										s === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = s.childLanes),
											  (o.lanes = s.lanes),
											  (o.child = s.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = s.memoizedProps),
											  (o.memoizedState = s.memoizedState),
											  (o.updateQueue = s.updateQueue),
											  (o.type = s.type),
											  (e = s.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext:
																	e.firstContext,
														  })),
										(n = n.sibling);
								return U(H, (H.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						b() > Nn &&
						((t.flags |= 128),
						(r = !0),
						Hn(o, !1),
						(t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = Fi(s)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null &&
								((t.updateQueue = n), (t.flags |= 4)),
							Hn(o, !0),
							o.tail === null &&
								o.tailMode === "hidden" &&
								!s.alternate &&
								!V)
						)
							return ae(t), null;
					} else
						2 * b() - o.renderingStartTime > Nn &&
							n !== 1073741824 &&
							((t.flags |= 128),
							(r = !0),
							Hn(o, !1),
							(t.lanes = 4194304));
				o.isBackwards
					? ((s.sibling = t.child), (t.child = s))
					: ((n = o.last),
					  n !== null ? (n.sibling = s) : (t.child = s),
					  (o.last = s));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = b()),
				  (t.sibling = null),
				  (n = H.current),
				  U(H, r ? (n & 1) | 2 : n & 1),
				  t)
				: (ae(t), null);
		case 22:
		case 23:
			return (
				bl(),
				(r = t.memoizedState !== null),
				e !== null &&
					(e.memoizedState !== null) !== r &&
					(t.flags |= 8192),
				r && t.mode & 1
					? Ee & 1073741824 &&
					  (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: ae(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(E(156, t.tag));
}
function mm(e, t) {
	switch ((Pl(t), t.tag)) {
		case 1:
			return (
				we(t.type) && Li(),
				(e = t.flags),
				e & 65536
					? ((t.flags = (e & -65537) | 128), t)
					: null
			);
		case 3:
			return (
				Cn(),
				$(ve),
				$(fe),
				Fl(),
				(e = t.flags),
				e & 65536 && !(e & 128)
					? ((t.flags = (e & -65537) | 128), t)
					: null
			);
		case 5:
			return Dl(t), null;
		case 13:
			if (
				($(H),
				(e = t.memoizedState),
				e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(E(340));
				xn();
			}
			return (
				(e = t.flags),
				e & 65536
					? ((t.flags = (e & -65537) | 128), t)
					: null
			);
		case 19:
			return $(H), null;
		case 4:
			return Cn(), null;
		case 10:
			return jl(t.type._context), null;
		case 22:
		case 23:
			return bl(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Yr = !1,
	ce = !1,
	ym = typeof WeakSet == "function" ? WeakSet : Set,
	_ = null;
function fn(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				Q(e, t, r);
			}
		else n.current = null;
}
function Vs(e, t, n) {
	try {
		n();
	} catch (r) {
		Q(e, t, r);
	}
}
var ya = !1;
function gm(e, t) {
	if (((_s = Ri), (e = ef()), Rl(e))) {
		if ("selectionStart" in e)
			var n = {
				start: e.selectionStart,
				end: e.selectionEnd,
			};
		else
			e: {
				n =
					((n = e.ownerDocument) && n.defaultView) ||
					window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var s = 0,
						l = -1,
						u = -1,
						a = 0,
						c = 0,
						d = e,
						h = null;
					t: for (;;) {
						for (
							var g;
							d !== n ||
								(i !== 0 && d.nodeType !== 3) ||
								(l = s + i),
								d !== o ||
									(r !== 0 && d.nodeType !== 3) ||
									(u = s + r),
								d.nodeType === 3 &&
									(s += d.nodeValue.length),
								(g = d.firstChild) !== null;

						)
							(h = d), (d = g);
						for (;;) {
							if (d === e) break t;
							if (
								(h === n && ++a === i && (l = s),
								h === o && ++c === r && (u = s),
								(g = d.nextSibling) !== null)
							)
								break;
							(d = h), (h = d.parentNode);
						}
						d = g;
					}
					n =
						l === -1 || u === -1
							? null
							: { start: l, end: u };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (
		Ns = { focusedElem: e, selectionRange: n },
			Ri = !1,
			_ = t;
		_ !== null;

	)
		if (
			((t = _),
			(e = t.child),
			(t.subtreeFlags & 1028) !== 0 && e !== null)
		)
			(e.return = t), (_ = e);
		else
			for (; _ !== null; ) {
				t = _;
				try {
					var y = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (y !== null) {
									var v = y.memoizedProps,
										N = y.memoizedState,
										p = t.stateNode,
										f = p.getSnapshotBeforeUpdate(
											t.elementType === t.type
												? v
												: De(t.type, v),
											N
										);
									p.__reactInternalSnapshotBeforeUpdate = f;
								}
								break;
							case 3:
								var m = t.stateNode.containerInfo;
								m.nodeType === 1
									? (m.textContent = "")
									: m.nodeType === 9 &&
									  m.documentElement &&
									  m.removeChild(m.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(E(163));
						}
				} catch (S) {
					Q(t, t.return, S);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (_ = e);
					break;
				}
				_ = t.return;
			}
	return (y = ya), (ya = !1), y;
}
function ir(e, t, n) {
	var r = t.updateQueue;
	if (
		((r = r !== null ? r.lastEffect : null), r !== null)
	) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy;
				(i.destroy = void 0), o !== void 0 && Vs(t, n, o);
			}
			i = i.next;
		} while (i !== r);
	}
}
function io(e, t) {
	if (
		((t = t.updateQueue),
		(t = t !== null ? t.lastEffect : null),
		t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function Hs(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function Gf(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Gf(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Ke],
				delete t[gr],
				delete t[Ps],
				delete t[Zh],
				delete t[em])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Zf(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ga(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Zf(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4)
				continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Ws(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null ||
						t.onclick !== null ||
						(t.onclick = Ti));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Ws(e, t, n), e = e.sibling; e !== null; )
			Ws(e, t, n), (e = e.sibling);
}
function qs(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (qs(e, t, n), e = e.sibling; e !== null; )
			qs(e, t, n), (e = e.sibling);
}
var oe = null,
	Fe = !1;
function dt(e, t, n) {
	for (n = n.child; n !== null; )
		ed(e, t, n), (n = n.sibling);
}
function ed(e, t, n) {
	if (Je && typeof Je.onCommitFiberUnmount == "function")
		try {
			Je.onCommitFiberUnmount(Yi, n);
		} catch {}
	switch (n.tag) {
		case 5:
			ce || fn(n, t);
		case 6:
			var r = oe,
				i = Fe;
			(oe = null),
				dt(e, t, n),
				(oe = r),
				(Fe = i),
				oe !== null &&
					(Fe
						? ((e = oe),
						  (n = n.stateNode),
						  e.nodeType === 8
								? e.parentNode.removeChild(n)
								: e.removeChild(n))
						: oe.removeChild(n.stateNode));
			break;
		case 18:
			oe !== null &&
				(Fe
					? ((e = oe),
					  (n = n.stateNode),
					  e.nodeType === 8
							? Mo(e.parentNode, n)
							: e.nodeType === 1 && Mo(e, n),
					  dr(e))
					: Mo(oe, n.stateNode));
			break;
		case 4:
			(r = oe),
				(i = Fe),
				(oe = n.stateNode.containerInfo),
				(Fe = !0),
				dt(e, t, n),
				(oe = r),
				(Fe = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!ce &&
				((r = n.updateQueue),
				r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var o = i,
						s = o.destroy;
					(o = o.tag),
						s !== void 0 && (o & 2 || o & 4) && Vs(n, t, s),
						(i = i.next);
				} while (i !== r);
			}
			dt(e, t, n);
			break;
		case 1:
			if (
				!ce &&
				(fn(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (l) {
					Q(n, t, l);
				}
			dt(e, t, n);
			break;
		case 21:
			dt(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((ce = (r = ce) || n.memoizedState !== null),
				  dt(e, t, n),
				  (ce = r))
				: dt(e, t, n);
			break;
		default:
			dt(e, t, n);
	}
}
function va(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new ym()),
			t.forEach(function (r) {
				var i = Nm.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function Be(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var o = e,
					s = t,
					l = s;
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							(oe = l.stateNode), (Fe = !1);
							break e;
						case 3:
							(oe = l.stateNode.containerInfo), (Fe = !0);
							break e;
						case 4:
							(oe = l.stateNode.containerInfo), (Fe = !0);
							break e;
					}
					l = l.return;
				}
				if (oe === null) throw Error(E(160));
				ed(o, s, i), (oe = null), (Fe = !1);
				var u = i.alternate;
				u !== null && (u.return = null), (i.return = null);
			} catch (a) {
				Q(i, t, a);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; )
			td(t, e), (t = t.sibling);
}
function td(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Be(t, e), qe(e), r & 4)) {
				try {
					ir(3, e, e.return), io(3, e);
				} catch (v) {
					Q(e, e.return, v);
				}
				try {
					ir(5, e, e.return);
				} catch (v) {
					Q(e, e.return, v);
				}
			}
			break;
		case 1:
			Be(t, e),
				qe(e),
				r & 512 && n !== null && fn(n, n.return);
			break;
		case 5:
			if (
				(Be(t, e),
				qe(e),
				r & 512 && n !== null && fn(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					ur(i, "");
				} catch (v) {
					Q(e, e.return, v);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var o = e.memoizedProps,
					s = n !== null ? n.memoizedProps : o,
					l = e.type,
					u = e.updateQueue;
				if (((e.updateQueue = null), u !== null))
					try {
						l === "input" &&
							o.type === "radio" &&
							o.name != null &&
							Ec(i, o),
							ms(l, s);
						var a = ms(l, o);
						for (s = 0; s < u.length; s += 2) {
							var c = u[s],
								d = u[s + 1];
							c === "style"
								? Nc(i, d)
								: c === "dangerouslySetInnerHTML"
								? Cc(i, d)
								: c === "children"
								? ur(i, d)
								: hl(i, c, d, a);
						}
						switch (l) {
							case "input":
								cs(i, o);
								break;
							case "textarea":
								xc(i, o);
								break;
							case "select":
								var h = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!o.multiple;
								var g = o.value;
								g != null
									? pn(i, !!o.multiple, g, !1)
									: h !== !!o.multiple &&
									  (o.defaultValue != null
											? pn(
													i,
													!!o.multiple,
													o.defaultValue,
													!0
											  )
											: pn(
													i,
													!!o.multiple,
													o.multiple ? [] : "",
													!1
											  ));
						}
						i[gr] = o;
					} catch (v) {
						Q(e, e.return, v);
					}
			}
			break;
		case 6:
			if ((Be(t, e), qe(e), r & 4)) {
				if (e.stateNode === null) throw Error(E(162));
				(i = e.stateNode), (o = e.memoizedProps);
				try {
					i.nodeValue = o;
				} catch (v) {
					Q(e, e.return, v);
				}
			}
			break;
		case 3:
			if (
				(Be(t, e),
				qe(e),
				r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					dr(t.containerInfo);
				} catch (v) {
					Q(e, e.return, v);
				}
			break;
		case 4:
			Be(t, e), qe(e);
			break;
		case 13:
			Be(t, e),
				qe(e),
				(i = e.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null &&
							i.alternate.memoizedState !== null) ||
						(Kl = b())),
				r & 4 && va(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1
					? ((ce = (a = ce) || c), Be(t, e), (ce = a))
					: Be(t, e),
				qe(e),
				r & 8192)
			) {
				if (
					((a = e.memoizedState !== null),
					(e.stateNode.isHidden = a) && !c && e.mode & 1)
				)
					for (_ = e, c = e.child; c !== null; ) {
						for (d = _ = c; _ !== null; ) {
							switch (((h = _), (g = h.child), h.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									ir(4, h, h.return);
									break;
								case 1:
									fn(h, h.return);
									var y = h.stateNode;
									if (
										typeof y.componentWillUnmount ==
										"function"
									) {
										(r = h), (n = h.return);
										try {
											(t = r),
												(y.props = t.memoizedProps),
												(y.state = t.memoizedState),
												y.componentWillUnmount();
										} catch (v) {
											Q(r, n, v);
										}
									}
									break;
								case 5:
									fn(h, h.return);
									break;
								case 22:
									if (h.memoizedState !== null) {
										Sa(d);
										continue;
									}
							}
							g !== null
								? ((g.return = h), (_ = g))
								: Sa(d);
						}
						c = c.sibling;
					}
				e: for (c = null, d = e; ; ) {
					if (d.tag === 5) {
						if (c === null) {
							c = d;
							try {
								(i = d.stateNode),
									a
										? ((o = i.style),
										  typeof o.setProperty == "function"
												? o.setProperty(
														"display",
														"none",
														"important"
												  )
												: (o.display = "none"))
										: ((l = d.stateNode),
										  (u = d.memoizedProps.style),
										  (s =
												u != null &&
												u.hasOwnProperty("display")
													? u.display
													: null),
										  (l.style.display = _c("display", s)));
							} catch (v) {
								Q(e, e.return, v);
							}
						}
					} else if (d.tag === 6) {
						if (c === null)
							try {
								d.stateNode.nodeValue = a
									? ""
									: d.memoizedProps;
							} catch (v) {
								Q(e, e.return, v);
							}
					} else if (
						((d.tag !== 22 && d.tag !== 23) ||
							d.memoizedState === null ||
							d === e) &&
						d.child !== null
					) {
						(d.child.return = d), (d = d.child);
						continue;
					}
					if (d === e) break e;
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === e)
							break e;
						c === d && (c = null), (d = d.return);
					}
					c === d && (c = null),
						(d.sibling.return = d.return),
						(d = d.sibling);
				}
			}
			break;
		case 19:
			Be(t, e), qe(e), r & 4 && va(e);
			break;
		case 21:
			break;
		default:
			Be(t, e), qe(e);
	}
}
function qe(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Zf(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(E(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (ur(i, ""), (r.flags &= -33));
					var o = ga(e);
					qs(e, o, i);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						l = ga(e);
					Ws(e, l, s);
					break;
				default:
					throw Error(E(161));
			}
		} catch (u) {
			Q(e, e.return, u);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function vm(e, t, n) {
	(_ = e), nd(e);
}
function nd(e, t, n) {
	for (var r = (e.mode & 1) !== 0; _ !== null; ) {
		var i = _,
			o = i.child;
		if (i.tag === 22 && r) {
			var s = i.memoizedState !== null || Yr;
			if (!s) {
				var l = i.alternate,
					u =
						(l !== null && l.memoizedState !== null) || ce;
				l = Yr;
				var a = ce;
				if (((Yr = s), (ce = u) && !a))
					for (_ = i; _ !== null; )
						(s = _),
							(u = s.child),
							s.tag === 22 && s.memoizedState !== null
								? Ea(i)
								: u !== null
								? ((u.return = s), (_ = u))
								: Ea(i);
				for (; o !== null; )
					(_ = o), nd(o), (o = o.sibling);
				(_ = i), (Yr = l), (ce = a);
			}
			wa(e);
		} else
			i.subtreeFlags & 8772 && o !== null
				? ((o.return = i), (_ = o))
				: wa(e);
	}
}
function wa(e) {
	for (; _ !== null; ) {
		var t = _;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							ce || io(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !ce)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: De(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = t.updateQueue;
							o !== null && na(t, o, r);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								na(t, s, n);
							}
							break;
						case 5:
							var l = t.stateNode;
							if (n === null && t.flags & 4) {
								n = l;
								var u = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										u.autoFocus && n.focus();
										break;
									case "img":
										u.src && (n.src = u.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var a = t.alternate;
								if (a !== null) {
									var c = a.memoizedState;
									if (c !== null) {
										var d = c.dehydrated;
										d !== null && dr(d);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(E(163));
					}
				ce || (t.flags & 512 && Hs(t));
			} catch (h) {
				Q(t, t.return, h);
			}
		}
		if (t === e) {
			_ = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (_ = n);
			break;
		}
		_ = t.return;
	}
}
function Sa(e) {
	for (; _ !== null; ) {
		var t = _;
		if (t === e) {
			_ = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (_ = n);
			break;
		}
		_ = t.return;
	}
}
function Ea(e) {
	for (; _ !== null; ) {
		var t = _;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						io(4, t);
					} catch (u) {
						Q(t, n, u);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (u) {
							Q(t, i, u);
						}
					}
					var o = t.return;
					try {
						Hs(t);
					} catch (u) {
						Q(t, o, u);
					}
					break;
				case 5:
					var s = t.return;
					try {
						Hs(t);
					} catch (u) {
						Q(t, s, u);
					}
			}
		} catch (u) {
			Q(t, t.return, u);
		}
		if (t === e) {
			_ = null;
			break;
		}
		var l = t.sibling;
		if (l !== null) {
			(l.return = t.return), (_ = l);
			break;
		}
		_ = t.return;
	}
}
var wm = Math.ceil,
	$i = ft.ReactCurrentDispatcher,
	ql = ft.ReactCurrentOwner,
	Le = ft.ReactCurrentBatchConfig,
	D = 0,
	ie = null,
	Y = null,
	se = 0,
	Ee = 0,
	dn = jt(0),
	ee = 0,
	kr = null,
	Jt = 0,
	oo = 0,
	Ql = 0,
	or = null,
	ye = null,
	Kl = 0,
	Nn = 1 / 0,
	Ze = null,
	Vi = !1,
	Qs = null,
	Nt = null,
	Xr = !1,
	wt = null,
	Hi = 0,
	sr = 0,
	Ks = null,
	di = -1,
	pi = 0;
function pe() {
	return D & 6 ? b() : di !== -1 ? di : (di = b());
}
function Rt(e) {
	return e.mode & 1
		? D & 2 && se !== 0
			? se & -se
			: nm.transition !== null
			? (pi === 0 && (pi = Fc()), pi)
			: ((e = F),
			  e !== 0 ||
					((e = window.event),
					(e = e === void 0 ? 16 : qc(e.type))),
			  e)
		: 1;
}
function He(e, t, n, r) {
	if (50 < sr) throw ((sr = 0), (Ks = null), Error(E(185)));
	Rr(e, n, r),
		(!(D & 2) || e !== ie) &&
			(e === ie &&
				(!(D & 2) && (oo |= n), ee === 4 && gt(e, se)),
			Se(e, r),
			n === 1 &&
				D === 0 &&
				!(t.mode & 1) &&
				((Nn = b() + 500), to && zt()));
}
function Se(e, t) {
	var n = e.callbackNode;
	nh(e, t);
	var r = Ni(e, e === ie ? se : 0);
	if (r === 0)
		n !== null && Tu(n),
			(e.callbackNode = null),
			(e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Tu(n), t === 1))
			e.tag === 0
				? tm(xa.bind(null, e))
				: ff(xa.bind(null, e)),
				Xh(function () {
					!(D & 6) && zt();
				}),
				(n = null);
		else {
			switch (Uc(r)) {
				case 1:
					n = wl;
					break;
				case 4:
					n = Bc;
					break;
				case 16:
					n = _i;
					break;
				case 536870912:
					n = Dc;
					break;
				default:
					n = _i;
			}
			n = cd(n, rd.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function rd(e, t) {
	if (((di = -1), (pi = 0), D & 6)) throw Error(E(327));
	var n = e.callbackNode;
	if (vn() && e.callbackNode !== n) return null;
	var r = Ni(e, e === ie ? se : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Wi(e, r);
	else {
		t = r;
		var i = D;
		D |= 2;
		var o = od();
		(ie !== e || se !== t) &&
			((Ze = null), (Nn = b() + 500), Vt(e, t));
		do
			try {
				xm();
				break;
			} catch (l) {
				id(e, l);
			}
		while (1);
		Al(),
			($i.current = o),
			(D = i),
			Y !== null
				? (t = 0)
				: ((ie = null), (se = 0), (t = ee));
	}
	if (t !== 0) {
		if (
			(t === 2 &&
				((i = Ss(e)), i !== 0 && ((r = i), (t = Js(e, i)))),
			t === 1)
		)
			throw ((n = kr), Vt(e, 0), gt(e, r), Se(e, b()), n);
		if (t === 6) gt(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!Sm(i) &&
					((t = Wi(e, r)),
					t === 2 &&
						((o = Ss(e)),
						o !== 0 && ((r = o), (t = Js(e, o)))),
					t === 1))
			)
				throw ((n = kr), Vt(e, 0), gt(e, r), Se(e, b()), n);
			switch (
				((e.finishedWork = i), (e.finishedLanes = r), t)
			) {
				case 0:
				case 1:
					throw Error(E(345));
				case 2:
					Ft(e, ye, Ze);
					break;
				case 3:
					if (
						(gt(e, r),
						(r & 130023424) === r &&
							((t = Kl + 500 - b()), 10 < t))
					) {
						if (Ni(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							pe(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = Os(
							Ft.bind(null, e, ye, Ze),
							t
						);
						break;
					}
					Ft(e, ye, Ze);
					break;
				case 4:
					if ((gt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var s = 31 - Ve(r);
						(o = 1 << s),
							(s = t[s]),
							s > i && (i = s),
							(r &= ~o);
					}
					if (
						((r = i),
						(r = b() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * wm(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Os(
							Ft.bind(null, e, ye, Ze),
							r
						);
						break;
					}
					Ft(e, ye, Ze);
					break;
				case 5:
					Ft(e, ye, Ze);
					break;
				default:
					throw Error(E(329));
			}
		}
	}
	return (
		Se(e, b()),
		e.callbackNode === n ? rd.bind(null, e) : null
	);
}
function Js(e, t) {
	var n = or;
	return (
		e.current.memoizedState.isDehydrated &&
			(Vt(e, t).flags |= 256),
		(e = Wi(e, t)),
		e !== 2 && ((t = ye), (ye = n), t !== null && bs(t)),
		e
	);
}
function bs(e) {
	ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function Sm(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot;
					i = i.value;
					try {
						if (!We(o(), i)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (
			((n = t.child), t.subtreeFlags & 16384 && n !== null)
		)
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function gt(e, t) {
	for (
		t &= ~Ql,
			t &= ~oo,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Ve(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function xa(e) {
	if (D & 6) throw Error(E(327));
	vn();
	var t = Ni(e, 0);
	if (!(t & 1)) return Se(e, b()), null;
	var n = Wi(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Ss(e);
		r !== 0 && ((t = r), (n = Js(e, r)));
	}
	if (n === 1)
		throw ((n = kr), Vt(e, 0), gt(e, t), Se(e, b()), n);
	if (n === 6) throw Error(E(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Ft(e, ye, Ze),
		Se(e, b()),
		null
	);
}
function Jl(e, t) {
	var n = D;
	D |= 1;
	try {
		return e(t);
	} finally {
		(D = n), D === 0 && ((Nn = b() + 500), to && zt());
	}
}
function bt(e) {
	wt !== null && wt.tag === 0 && !(D & 6) && vn();
	var t = D;
	D |= 1;
	var n = Le.transition,
		r = F;
	try {
		if (((Le.transition = null), (F = 1), e)) return e();
	} finally {
		(F = r), (Le.transition = n), (D = t), !(D & 6) && zt();
	}
}
function bl() {
	(Ee = dn.current), $(dn);
}
function Vt(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if (
		(n !== -1 && ((e.timeoutHandle = -1), Yh(n)),
		Y !== null)
	)
		for (n = Y.return; n !== null; ) {
			var r = n;
			switch ((Pl(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Li();
					break;
				case 3:
					Cn(), $(ve), $(fe), Fl();
					break;
				case 5:
					Dl(r);
					break;
				case 4:
					Cn();
					break;
				case 13:
					$(H);
					break;
				case 19:
					$(H);
					break;
				case 10:
					jl(r.type._context);
					break;
				case 22:
				case 23:
					bl();
			}
			n = n.return;
		}
	if (
		((ie = e),
		(Y = e = Ot(e.current, null)),
		(se = Ee = t),
		(ee = 0),
		(kr = null),
		(Ql = oo = Jt = 0),
		(ye = or = null),
		Mt !== null)
	) {
		for (t = 0; t < Mt.length; t++)
			if (((n = Mt[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					o = n.pending;
				if (o !== null) {
					var s = o.next;
					(o.next = i), (r.next = s);
				}
				n.pending = r;
			}
		Mt = null;
	}
	return e;
}
function id(e, t) {
	do {
		var n = Y;
		try {
			if ((Al(), (ai.current = Mi), Ui)) {
				for (var r = W.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				Ui = !1;
			}
			if (
				((Kt = 0),
				(re = Z = W = null),
				(rr = !1),
				(Sr = 0),
				(ql.current = null),
				n === null || n.return === null)
			) {
				(ee = 1), (kr = t), (Y = null);
				break;
			}
			e: {
				var o = e,
					s = n.return,
					l = n,
					u = t;
				if (
					((t = se),
					(l.flags |= 32768),
					u !== null &&
						typeof u == "object" &&
						typeof u.then == "function")
				) {
					var a = u,
						c = l,
						d = c.tag;
					if (
						!(c.mode & 1) &&
						(d === 0 || d === 11 || d === 15)
					) {
						var h = c.alternate;
						h
							? ((c.updateQueue = h.updateQueue),
							  (c.memoizedState = h.memoizedState),
							  (c.lanes = h.lanes))
							: ((c.updateQueue = null),
							  (c.memoizedState = null));
					}
					var g = aa(s);
					if (g !== null) {
						(g.flags &= -257),
							ca(g, s, l, o, t),
							g.mode & 1 && ua(o, a, t),
							(t = g),
							(u = a);
						var y = t.updateQueue;
						if (y === null) {
							var v = new Set();
							v.add(u), (t.updateQueue = v);
						} else y.add(u);
						break e;
					} else {
						if (!(t & 1)) {
							ua(o, a, t), Yl();
							break e;
						}
						u = Error(E(426));
					}
				} else if (V && l.mode & 1) {
					var N = aa(s);
					if (N !== null) {
						!(N.flags & 65536) && (N.flags |= 256),
							ca(N, s, l, o, t),
							Tl(_n(u, l));
						break e;
					}
				}
				(o = u = _n(u, l)),
					ee !== 4 && (ee = 2),
					or === null ? (or = [o]) : or.push(o),
					(o = s);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var p = $f(o, u, t);
							ta(o, p);
							break e;
						case 1:
							l = u;
							var f = o.type,
								m = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof f.getDerivedStateFromError ==
									"function" ||
									(m !== null &&
										typeof m.componentDidCatch ==
											"function" &&
										(Nt === null || !Nt.has(m))))
							) {
								(o.flags |= 65536),
									(t &= -t),
									(o.lanes |= t);
								var S = Vf(o, l, t);
								ta(o, S);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			ld(n);
		} catch (C) {
			(t = C), Y === n && n !== null && (Y = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function od() {
	var e = $i.current;
	return ($i.current = Mi), e === null ? Mi : e;
}
function Yl() {
	(ee === 0 || ee === 3 || ee === 2) && (ee = 4),
		ie === null ||
			(!(Jt & 268435455) && !(oo & 268435455)) ||
			gt(ie, se);
}
function Wi(e, t) {
	var n = D;
	D |= 2;
	var r = od();
	(ie !== e || se !== t) && ((Ze = null), Vt(e, t));
	do
		try {
			Em();
			break;
		} catch (i) {
			id(e, i);
		}
	while (1);
	if ((Al(), (D = n), ($i.current = r), Y !== null))
		throw Error(E(261));
	return (ie = null), (se = 0), ee;
}
function Em() {
	for (; Y !== null; ) sd(Y);
}
function xm() {
	for (; Y !== null && !Kp(); ) sd(Y);
}
function sd(e) {
	var t = ad(e.alternate, e, Ee);
	(e.memoizedProps = e.pendingProps),
		t === null ? ld(e) : (Y = t),
		(ql.current = null);
}
function ld(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = mm(n, t)), n !== null)) {
				(n.flags &= 32767), (Y = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768),
					(e.subtreeFlags = 0),
					(e.deletions = null);
			else {
				(ee = 6), (Y = null);
				return;
			}
		} else if (((n = hm(n, t, Ee)), n !== null)) {
			Y = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Y = t;
			return;
		}
		Y = t = e;
	} while (t !== null);
	ee === 0 && (ee = 5);
}
function Ft(e, t, n) {
	var r = F,
		i = Le.transition;
	try {
		(Le.transition = null), (F = 1), km(e, t, n, r);
	} finally {
		(Le.transition = i), (F = r);
	}
	return null;
}
function km(e, t, n, r) {
	do vn();
	while (wt !== null);
	if (D & 6) throw Error(E(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (
		((e.finishedWork = null),
		(e.finishedLanes = 0),
		n === e.current)
	)
		throw Error(E(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(rh(e, o),
		e === ie && ((Y = ie = null), (se = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Xr ||
			((Xr = !0),
			cd(_i, function () {
				return vn(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = Le.transition), (Le.transition = null);
		var s = F;
		F = 1;
		var l = D;
		(D |= 4),
			(ql.current = null),
			gm(e, n),
			td(n, e),
			Hh(Ns),
			(Ri = !!_s),
			(Ns = _s = null),
			(e.current = n),
			vm(n),
			Jp(),
			(D = l),
			(F = s),
			(Le.transition = o);
	} else e.current = n;
	if (
		(Xr && ((Xr = !1), (wt = e), (Hi = i)),
		(o = e.pendingLanes),
		o === 0 && (Nt = null),
		Xp(n.stateNode),
		Se(e, b()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]),
				r(i.value, {
					componentStack: i.stack,
					digest: i.digest,
				});
	if (Vi) throw ((Vi = !1), (e = Qs), (Qs = null), e);
	return (
		Hi & 1 && e.tag !== 0 && vn(),
		(o = e.pendingLanes),
		o & 1
			? e === Ks
				? sr++
				: ((sr = 0), (Ks = e))
			: (sr = 0),
		zt(),
		null
	);
}
function vn() {
	if (wt !== null) {
		var e = Uc(Hi),
			t = Le.transition,
			n = F;
		try {
			if (
				((Le.transition = null),
				(F = 16 > e ? 16 : e),
				wt === null)
			)
				var r = !1;
			else {
				if (((e = wt), (wt = null), (Hi = 0), D & 6))
					throw Error(E(331));
				var i = D;
				for (D |= 4, _ = e.current; _ !== null; ) {
					var o = _,
						s = o.child;
					if (_.flags & 16) {
						var l = o.deletions;
						if (l !== null) {
							for (var u = 0; u < l.length; u++) {
								var a = l[u];
								for (_ = a; _ !== null; ) {
									var c = _;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											ir(8, c, o);
									}
									var d = c.child;
									if (d !== null) (d.return = c), (_ = d);
									else
										for (; _ !== null; ) {
											c = _;
											var h = c.sibling,
												g = c.return;
											if ((Gf(c), c === a)) {
												_ = null;
												break;
											}
											if (h !== null) {
												(h.return = g), (_ = h);
												break;
											}
											_ = g;
										}
								}
							}
							var y = o.alternate;
							if (y !== null) {
								var v = y.child;
								if (v !== null) {
									y.child = null;
									do {
										var N = v.sibling;
										(v.sibling = null), (v = N);
									} while (v !== null);
								}
							}
							_ = o;
						}
					}
					if (o.subtreeFlags & 2064 && s !== null)
						(s.return = o), (_ = s);
					else
						e: for (; _ !== null; ) {
							if (((o = _), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										ir(9, o, o.return);
								}
							var p = o.sibling;
							if (p !== null) {
								(p.return = o.return), (_ = p);
								break e;
							}
							_ = o.return;
						}
				}
				var f = e.current;
				for (_ = f; _ !== null; ) {
					s = _;
					var m = s.child;
					if (s.subtreeFlags & 2064 && m !== null)
						(m.return = s), (_ = m);
					else
						e: for (s = f; _ !== null; ) {
							if (((l = _), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											io(9, l);
									}
								} catch (C) {
									Q(l, l.return, C);
								}
							if (l === s) {
								_ = null;
								break e;
							}
							var S = l.sibling;
							if (S !== null) {
								(S.return = l.return), (_ = S);
								break e;
							}
							_ = l.return;
						}
				}
				if (
					((D = i),
					zt(),
					Je &&
						typeof Je.onPostCommitFiberRoot == "function")
				)
					try {
						Je.onPostCommitFiberRoot(Yi, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(F = n), (Le.transition = t);
		}
	}
	return !1;
}
function ka(e, t, n) {
	(t = _n(n, t)),
		(t = $f(e, t, 1)),
		(e = _t(e, t, 1)),
		(t = pe()),
		e !== null && (Rr(e, 1, t), Se(e, t));
}
function Q(e, t, n) {
	if (e.tag === 3) ka(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				ka(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError ==
						"function" ||
					(typeof r.componentDidCatch == "function" &&
						(Nt === null || !Nt.has(r)))
				) {
					(e = _n(n, e)),
						(e = Vf(t, e, 1)),
						(t = _t(t, e, 1)),
						(e = pe()),
						t !== null && (Rr(t, 1, e), Se(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Cm(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = pe()),
		(e.pingedLanes |= e.suspendedLanes & n),
		ie === e &&
			(se & n) === n &&
			(ee === 4 ||
			(ee === 3 &&
				(se & 130023424) === se &&
				500 > b() - Kl)
				? Vt(e, 0)
				: (Ql |= n)),
		Se(e, t);
}
function ud(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = $r),
			  ($r <<= 1),
			  !($r & 130023424) && ($r = 4194304))
			: (t = 1));
	var n = pe();
	(e = ut(e, t)), e !== null && (Rr(e, t, n), Se(e, n));
}
function _m(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), ud(e, n);
}
function Nm(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(E(314));
	}
	r !== null && r.delete(t), ud(e, n);
}
var ad;
ad = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || ve.current)
			ge = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128))
				return (ge = !1), pm(e, t, n);
			ge = !!(e.flags & 131072);
		}
	else
		(ge = !1), V && t.flags & 1048576 && df(t, zi, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			fi(e, t), (e = t.pendingProps);
			var i = En(t, fe.current);
			gn(t, n), (i = Ml(null, t, r, e, i, n));
			var o = $l();
			return (
				(t.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  we(r) ? ((o = !0), Ai(t)) : (o = !1),
					  (t.memoizedState =
							i.state !== null && i.state !== void 0
								? i.state
								: null),
					  Il(t),
					  (i.updater = no),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  Is(t, r, e, n),
					  (t = Fs(null, t, r, !0, o, n)))
					: ((t.tag = 0),
					  V && o && Ol(t),
					  de(null, t, i, n),
					  (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(fi(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = Om(r)),
					(e = De(r, e)),
					i)
				) {
					case 0:
						t = Ds(null, t, r, e, n);
						break e;
					case 1:
						t = pa(null, t, r, e, n);
						break e;
					case 11:
						t = fa(null, t, r, e, n);
						break e;
					case 14:
						t = da(null, t, r, De(r.type, e), n);
						break e;
				}
				throw Error(E(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : De(r, i)),
				Ds(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : De(r, i)),
				pa(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((Qf(t), e === null)) throw Error(E(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(i = o.element),
					yf(e, t),
					Di(t, r, null, n);
				var s = t.memoizedState;
				if (((r = s.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries:
								s.pendingSuspenseBoundaries,
							transitions: s.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(i = _n(Error(E(423)), t)),
							(t = ha(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = _n(Error(E(424)), t)),
							(t = ha(e, t, r, n, i));
						break e;
					} else
						for (
							xe = Ct(t.stateNode.containerInfo.firstChild),
								ke = t,
								V = !0,
								Me = null,
								n = Sf(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096),
								(n = n.sibling);
				else {
					if ((xn(), r === i)) {
						t = at(e, t, n);
						break e;
					}
					de(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Ef(t),
				e === null && As(t),
				(r = t.type),
				(i = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(s = i.children),
				Rs(r, i)
					? (s = null)
					: o !== null && Rs(r, o) && (t.flags |= 32),
				qf(e, t),
				de(e, t, s, n),
				t.child
			);
		case 6:
			return e === null && As(t), null;
		case 13:
			return Kf(e, t, n);
		case 4:
			return (
				Bl(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null
					? (t.child = kn(t, null, r, n))
					: de(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : De(r, i)),
				fa(e, t, r, i, n)
			);
		case 7:
			return de(e, t, t.pendingProps, n), t.child;
		case 8:
			return de(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return de(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(o = t.memoizedProps),
					(s = i.value),
					U(Ii, r._currentValue),
					(r._currentValue = s),
					o !== null)
				)
					if (We(o.value, s)) {
						if (o.children === i.children && !ve.current) {
							t = at(e, t, n);
							break e;
						}
					} else
						for (
							o = t.child, o !== null && (o.return = t);
							o !== null;

						) {
							var l = o.dependencies;
							if (l !== null) {
								s = o.child;
								for (var u = l.firstContext; u !== null; ) {
									if (u.context === r) {
										if (o.tag === 1) {
											(u = it(-1, n & -n)), (u.tag = 2);
											var a = o.updateQueue;
											if (a !== null) {
												a = a.shared;
												var c = a.pending;
												c === null
													? (u.next = u)
													: ((u.next = c.next),
													  (c.next = u)),
													(a.pending = u);
											}
										}
										(o.lanes |= n),
											(u = o.alternate),
											u !== null && (u.lanes |= n),
											js(o.return, n, t),
											(l.lanes |= n);
										break;
									}
									u = u.next;
								}
							} else if (o.tag === 10)
								s = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((s = o.return), s === null))
									throw Error(E(341));
								(s.lanes |= n),
									(l = s.alternate),
									l !== null && (l.lanes |= n),
									js(s, n, t),
									(s = o.sibling);
							} else s = o.child;
							if (s !== null) s.return = o;
							else
								for (s = o; s !== null; ) {
									if (s === t) {
										s = null;
										break;
									}
									if (((o = s.sibling), o !== null)) {
										(o.return = s.return), (s = o);
										break;
									}
									s = s.return;
								}
							o = s;
						}
				de(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				gn(t, n),
				(i = je(i)),
				(r = r(i)),
				(t.flags |= 1),
				de(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = De(r, t.pendingProps)),
				(i = De(r.type, i)),
				da(e, t, r, i, n)
			);
		case 15:
			return Hf(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : De(r, i)),
				fi(e, t),
				(t.tag = 1),
				we(r) ? ((e = !0), Ai(t)) : (e = !1),
				gn(t, n),
				vf(t, r, i),
				Is(t, r, i, n),
				Fs(null, t, r, !0, e, n)
			);
		case 19:
			return Jf(e, t, n);
		case 22:
			return Wf(e, t, n);
	}
	throw Error(E(156, t.tag));
};
function cd(e, t) {
	return Ic(e, t);
}
function Rm(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function Te(e, t, n, r) {
	return new Rm(e, t, n, r);
}
function Xl(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Om(e) {
	if (typeof e == "function") return Xl(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === yl)) return 11;
		if (e === gl) return 14;
	}
	return 2;
}
function Ot(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = Te(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null
				? null
				: { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function hi(e, t, n, r, i, o) {
	var s = 2;
	if (((r = e), typeof e == "function")) Xl(e) && (s = 1);
	else if (typeof e == "string") s = 5;
	else
		e: switch (e) {
			case tn:
				return Ht(n.children, i, o, t);
			case ml:
				(s = 8), (i |= 8);
				break;
			case os:
				return (
					(e = Te(12, n, t, i | 2)),
					(e.elementType = os),
					(e.lanes = o),
					e
				);
			case ss:
				return (
					(e = Te(13, n, t, i)),
					(e.elementType = ss),
					(e.lanes = o),
					e
				);
			case ls:
				return (
					(e = Te(19, n, t, i)),
					(e.elementType = ls),
					(e.lanes = o),
					e
				);
			case vc:
				return so(n, i, o, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case yc:
							s = 10;
							break e;
						case gc:
							s = 9;
							break e;
						case yl:
							s = 11;
							break e;
						case gl:
							s = 14;
							break e;
						case ht:
							(s = 16), (r = null);
							break e;
					}
				throw Error(E(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = Te(s, n, t, i)),
		(t.elementType = e),
		(t.type = r),
		(t.lanes = o),
		t
	);
}
function Ht(e, t, n, r) {
	return (e = Te(7, e, r, t)), (e.lanes = n), e;
}
function so(e, t, n, r) {
	return (
		(e = Te(22, e, r, t)),
		(e.elementType = vc),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Jo(e, t, n) {
	return (e = Te(6, e, null, t)), (e.lanes = n), e;
}
function bo(e, t, n) {
	return (
		(t = Te(
			4,
			e.children !== null ? e.children : [],
			e.key,
			t
		)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Pm(e, t, n, r, i) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode =
			this.pendingContext =
			this.context =
				null),
		(this.callbackPriority = 0),
		(this.eventTimes = Po(0)),
		(this.expirationTimes = Po(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Po(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function Gl(e, t, n, r, i, o, s, l, u) {
	return (
		(e = new Pm(e, t, n, l, u)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = Te(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Il(o),
		e
	);
}
function Tm(e, t, n) {
	var r =
		3 < arguments.length && arguments[3] !== void 0
			? arguments[3]
			: null;
	return {
		$$typeof: en,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function fd(e) {
	if (!e) return Lt;
	e = e._reactInternals;
	e: {
		if (Xt(e) !== e || e.tag !== 1) throw Error(E(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (we(t.type)) {
						t =
							t.stateNode
								.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(E(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (we(n)) return cf(e, n, t);
	}
	return t;
}
function dd(e, t, n, r, i, o, s, l, u) {
	return (
		(e = Gl(n, r, !0, e, i, o, s, l, u)),
		(e.context = fd(null)),
		(n = e.current),
		(r = pe()),
		(i = Rt(n)),
		(o = it(r, i)),
		(o.callback = t ?? null),
		_t(n, o, i),
		(e.current.lanes = i),
		Rr(e, i, r),
		Se(e, r),
		e
	);
}
function lo(e, t, n, r) {
	var i = t.current,
		o = pe(),
		s = Rt(i);
	return (
		(n = fd(n)),
		t.context === null
			? (t.context = n)
			: (t.pendingContext = n),
		(t = it(o, s)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = _t(i, t, s)),
		e !== null && (He(e, i, s, o), ui(e, i, s)),
		s
	);
}
function qi(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Ca(e, t) {
	if (
		((e = e.memoizedState),
		e !== null && e.dehydrated !== null)
	) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Zl(e, t) {
	Ca(e, t), (e = e.alternate) && Ca(e, t);
}
function Lm() {
	return null;
}
var pd =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function eu(e) {
	this._internalRoot = e;
}
uo.prototype.render = eu.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(E(409));
	lo(e, t, null, null);
};
uo.prototype.unmount = eu.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		bt(function () {
			lo(null, e, null, null);
		}),
			(t[lt] = null);
	}
};
function uo(e) {
	this._internalRoot = e;
}
uo.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Vc();
		e = { blockedOn: null, target: e, priority: t };
		for (
			var n = 0;
			n < yt.length && t !== 0 && t < yt[n].priority;
			n++
		);
		yt.splice(n, 0, e), n === 0 && Wc(e);
	}
};
function tu(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11)
	);
}
function ao(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 ||
				e.nodeValue !== " react-mount-point-unstable "))
	);
}
function _a() {}
function Am(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var o = r;
			r = function () {
				var a = qi(s);
				o.call(a);
			};
		}
		var s = dd(t, r, e, 0, null, !1, !1, "", _a);
		return (
			(e._reactRootContainer = s),
			(e[lt] = s.current),
			mr(e.nodeType === 8 ? e.parentNode : e),
			bt(),
			s
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == "function") {
		var l = r;
		r = function () {
			var a = qi(u);
			l.call(a);
		};
	}
	var u = Gl(e, 0, !1, null, null, !1, !1, "", _a);
	return (
		(e._reactRootContainer = u),
		(e[lt] = u.current),
		mr(e.nodeType === 8 ? e.parentNode : e),
		bt(function () {
			lo(t, u, n, r);
		}),
		u
	);
}
function co(e, t, n, r, i) {
	var o = n._reactRootContainer;
	if (o) {
		var s = o;
		if (typeof i == "function") {
			var l = i;
			i = function () {
				var u = qi(s);
				l.call(u);
			};
		}
		lo(t, s, e, i);
	} else s = Am(n, t, e, i, r);
	return qi(s);
}
Mc = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = bn(t.pendingLanes);
				n !== 0 &&
					(Sl(t, n | 1),
					Se(t, b()),
					!(D & 6) && ((Nn = b() + 500), zt()));
			}
			break;
		case 13:
			bt(function () {
				var r = ut(e, 1);
				if (r !== null) {
					var i = pe();
					He(r, e, 1, i);
				}
			}),
				Zl(e, 1);
	}
};
El = function (e) {
	if (e.tag === 13) {
		var t = ut(e, 134217728);
		if (t !== null) {
			var n = pe();
			He(t, e, 134217728, n);
		}
		Zl(e, 134217728);
	}
};
$c = function (e) {
	if (e.tag === 13) {
		var t = Rt(e),
			n = ut(e, t);
		if (n !== null) {
			var r = pe();
			He(n, e, t, r);
		}
		Zl(e, t);
	}
};
Vc = function () {
	return F;
};
Hc = function (e, t) {
	var n = F;
	try {
		return (F = e), t();
	} finally {
		F = n;
	}
};
gs = function (e, t, n) {
	switch (t) {
		case "input":
			if (
				(cs(e, n),
				(t = n.name),
				n.type === "radio" && t != null)
			) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" +
							JSON.stringify("" + t) +
							'][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = eo(r);
						if (!i) throw Error(E(90));
						Sc(r), cs(r, i);
					}
				}
			}
			break;
		case "textarea":
			xc(e, n);
			break;
		case "select":
			(t = n.value),
				t != null && pn(e, !!n.multiple, t, !1);
	}
};
Pc = Jl;
Tc = bt;
var jm = {
		usingClientEntryPoint: !1,
		Events: [Pr, sn, eo, Rc, Oc, Jl],
	},
	Wn = {
		findFiberByHostInstance: Ut,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	zm = {
		bundleType: Wn.bundleType,
		version: Wn.version,
		rendererPackageName: Wn.rendererPackageName,
		rendererConfig: Wn.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: ft.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = jc(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance:
			Wn.findFiberByHostInstance || Lm,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Gr.isDisabled && Gr.supportsFiber)
		try {
			(Yi = Gr.inject(zm)), (Je = Gr);
		} catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm;
_e.createPortal = function (e, t) {
	var n =
		2 < arguments.length && arguments[2] !== void 0
			? arguments[2]
			: null;
	if (!tu(t)) throw Error(E(200));
	return Tm(e, t, null, n);
};
_e.createRoot = function (e, t) {
	if (!tu(e)) throw Error(E(299));
	var n = !1,
		r = "",
		i = pd;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 &&
				(r = t.identifierPrefix),
			t.onRecoverableError !== void 0 &&
				(i = t.onRecoverableError)),
		(t = Gl(e, 1, !1, null, null, n, !1, r, i)),
		(e[lt] = t.current),
		mr(e.nodeType === 8 ? e.parentNode : e),
		new eu(t)
	);
};
_e.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(E(188))
			: ((e = Object.keys(e).join(",")), Error(E(268, e)));
	return (
		(e = jc(t)), (e = e === null ? null : e.stateNode), e
	);
};
_e.flushSync = function (e) {
	return bt(e);
};
_e.hydrate = function (e, t, n) {
	if (!ao(t)) throw Error(E(200));
	return co(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
	if (!tu(e)) throw Error(E(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = "",
		s = pd;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 &&
				(o = n.identifierPrefix),
			n.onRecoverableError !== void 0 &&
				(s = n.onRecoverableError)),
		(t = dd(t, null, e, 1, n ?? null, i, !1, o, s)),
		(e[lt] = t.current),
		mr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new uo(t);
};
_e.render = function (e, t, n) {
	if (!ao(t)) throw Error(E(200));
	return co(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
	if (!ao(e)) throw Error(E(40));
	return e._reactRootContainer
		? (bt(function () {
				co(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[lt] = null);
				});
		  }),
		  !0)
		: !1;
};
_e.unstable_batchedUpdates = Jl;
_e.unstable_renderSubtreeIntoContainer = function (
	e,
	t,
	n,
	r
) {
	if (!ao(n)) throw Error(E(200));
	if (e == null || e._reactInternals === void 0)
		throw Error(E(38));
	return co(e, t, n, !1, r);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
function hd() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !=
				"function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hd);
		} catch (e) {
			console.error(e);
		}
}
hd(), (fc.exports = _e);
var Im = fc.exports,
	Na = Im;
(rs.createRoot = Na.createRoot),
	(rs.hydrateRoot = Na.hydrateRoot);
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cr() {
	return (
		(Cr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) &&
								(e[r] = n[r]);
					}
					return e;
			  }),
		Cr.apply(this, arguments)
	);
}
var St;
(function (e) {
	(e.Pop = "POP"),
		(e.Push = "PUSH"),
		(e.Replace = "REPLACE");
})(St || (St = {}));
const Ra = "popstate";
function Bm(e) {
	e === void 0 && (e = {});
	function t(r, i) {
		let { pathname: o, search: s, hash: l } = r.location;
		return Ys(
			"",
			{ pathname: o, search: s, hash: l },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || "default"
		);
	}
	function n(r, i) {
		return typeof i == "string" ? i : md(i);
	}
	return Fm(t, n, null, e);
}
function te(e, t) {
	if (e === !1 || e === null || typeof e > "u")
		throw new Error(t);
}
function nu(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Dm() {
	return Math.random().toString(36).substr(2, 8);
}
function Oa(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Ys(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		Cr(
			{
				pathname: typeof e == "string" ? e : e.pathname,
				search: "",
				hash: "",
			},
			typeof t == "string" ? Ln(t) : t,
			{ state: n, key: (t && t.key) || r || Dm() }
		)
	);
}
function md(e) {
	let {
		pathname: t = "/",
		search: n = "",
		hash: r = "",
	} = e;
	return (
		n &&
			n !== "?" &&
			(t += n.charAt(0) === "?" ? n : "?" + n),
		r &&
			r !== "#" &&
			(t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function Ln(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 &&
			((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf("?");
		r >= 0 &&
			((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function Fm(e, t, n, r) {
	r === void 0 && (r = {});
	let {
			window: i = document.defaultView,
			v5Compat: o = !1,
		} = r,
		s = i.history,
		l = St.Pop,
		u = null,
		a = c();
	a == null &&
		((a = 0),
		s.replaceState(Cr({}, s.state, { idx: a }), ""));
	function c() {
		return (s.state || { idx: null }).idx;
	}
	function d() {
		l = St.Pop;
		let N = c(),
			p = N == null ? null : N - a;
		(a = N),
			u && u({ action: l, location: v.location, delta: p });
	}
	function h(N, p) {
		l = St.Push;
		let f = Ys(v.location, N, p);
		n && n(f, N), (a = c() + 1);
		let m = Oa(f, a),
			S = v.createHref(f);
		try {
			s.pushState(m, "", S);
		} catch (C) {
			if (
				C instanceof DOMException &&
				C.name === "DataCloneError"
			)
				throw C;
			i.location.assign(S);
		}
		o &&
			u &&
			u({ action: l, location: v.location, delta: 1 });
	}
	function g(N, p) {
		l = St.Replace;
		let f = Ys(v.location, N, p);
		n && n(f, N), (a = c());
		let m = Oa(f, a),
			S = v.createHref(f);
		s.replaceState(m, "", S),
			o &&
				u &&
				u({ action: l, location: v.location, delta: 0 });
	}
	function y(N) {
		let p =
				i.location.origin !== "null"
					? i.location.origin
					: i.location.href,
			f = typeof N == "string" ? N : md(N);
		return (
			te(
				p,
				"No window.location.(origin|href) available to create URL for href: " +
					f
			),
			new URL(f, p)
		);
	}
	let v = {
		get action() {
			return l;
		},
		get location() {
			return e(i, s);
		},
		listen(N) {
			if (u)
				throw new Error(
					"A history only accepts one active listener"
				);
			return (
				i.addEventListener(Ra, d),
				(u = N),
				() => {
					i.removeEventListener(Ra, d), (u = null);
				}
			);
		},
		createHref(N) {
			return t(i, N);
		},
		createURL: y,
		encodeLocation(N) {
			let p = y(N);
			return {
				pathname: p.pathname,
				search: p.search,
				hash: p.hash,
			};
		},
		push: h,
		replace: g,
		go(N) {
			return s.go(N);
		},
	};
	return v;
}
var Pa;
(function (e) {
	(e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error");
})(Pa || (Pa = {}));
function Um(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? Ln(t) : t,
		i = vd(r.pathname || "/", n);
	if (i == null) return null;
	let o = yd(e);
	Mm(o);
	let s = null;
	for (let l = 0; s == null && l < o.length; ++l)
		s = bm(o[l], Gm(i));
	return s;
}
function yd(e, t, n, r) {
	t === void 0 && (t = []),
		n === void 0 && (n = []),
		r === void 0 && (r = "");
	let i = (o, s, l) => {
		let u = {
			relativePath: l === void 0 ? o.path || "" : l,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: s,
			route: o,
		};
		u.relativePath.startsWith("/") &&
			(te(
				u.relativePath.startsWith(r),
				'Absolute route path "' +
					u.relativePath +
					'" nested under path ' +
					('"' +
						r +
						'" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes."
			),
			(u.relativePath = u.relativePath.slice(r.length)));
		let a = Wt([r, u.relativePath]),
			c = n.concat(u);
		o.children &&
			o.children.length > 0 &&
			(te(
				o.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + a + '".')
			),
			yd(o.children, t, c, a)),
			!(o.path == null && !o.index) &&
				t.push({
					path: a,
					score: Km(a, o.index),
					routesMeta: c,
				});
	};
	return (
		e.forEach((o, s) => {
			var l;
			if (
				o.path === "" ||
				!((l = o.path) != null && l.includes("?"))
			)
				i(o, s);
			else for (let u of gd(o.path)) i(o, s, u);
		}),
		t
	);
}
function gd(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		i = n.endsWith("?"),
		o = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [o, ""] : [o];
	let s = gd(r.join("/")),
		l = [];
	return (
		l.push(
			...s.map((u) => (u === "" ? o : [o, u].join("/")))
		),
		i && l.push(...s),
		l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
	);
}
function Mm(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: Jm(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const $m = /^:\w+$/,
	Vm = 3,
	Hm = 2,
	Wm = 1,
	qm = 10,
	Qm = -2,
	Ta = (e) => e === "*";
function Km(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Ta) && (r += Qm),
		t && (r += Hm),
		n
			.filter((i) => !Ta(i))
			.reduce(
				(i, o) =>
					i + ($m.test(o) ? Vm : o === "" ? Wm : qm),
				r
			)
	);
}
function Jm(e, t) {
	return e.length === t.length &&
		e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function bm(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = "/",
		o = [];
	for (let s = 0; s < n.length; ++s) {
		let l = n[s],
			u = s === n.length - 1,
			a = i === "/" ? t : t.slice(i.length) || "/",
			c = Ym(
				{
					path: l.relativePath,
					caseSensitive: l.caseSensitive,
					end: u,
				},
				a
			);
		if (!c) return null;
		Object.assign(r, c.params);
		let d = l.route;
		o.push({
			params: r,
			pathname: Wt([i, c.pathname]),
			pathnameBase: iy(Wt([i, c.pathnameBase])),
			route: d,
		}),
			c.pathnameBase !== "/" &&
				(i = Wt([i, c.pathnameBase]));
	}
	return o;
}
function Ym(e, t) {
	typeof e == "string" &&
		(e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = Xm(e.path, e.caseSensitive, e.end),
		i = t.match(n);
	if (!i) return null;
	let o = i[0],
		s = o.replace(/(.)\/+$/, "$1"),
		l = i.slice(1);
	return {
		params: r.reduce((a, c, d) => {
			if (c === "*") {
				let h = l[d] || "";
				s = o
					.slice(0, o.length - h.length)
					.replace(/(.)\/+$/, "$1");
			}
			return (a[c] = Zm(l[d] || "", c)), a;
		}, {}),
		pathname: o,
		pathnameBase: s,
		pattern: e,
	};
}
function Xm(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		nu(
			e === "*" || !e.endsWith("*") || e.endsWith("/*"),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' +
					e.replace(/\*$/, "/*") +
					'" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' +
					e.replace(/\*$/, "/*") +
					'".')
		);
	let r = [],
		i =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
				.replace(
					/\/:(\w+)/g,
					(s, l) => (r.push(l), "/([^\\/]+)")
				);
	return (
		e.endsWith("*")
			? (r.push("*"),
			  (i +=
					e === "*" || e === "/*"
						? "(.*)$"
						: "(?:\\/(.+)|\\/*)$"))
			: n
			? (i += "\\/*$")
			: e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
		[new RegExp(i, t ? void 0 : "i"), r]
	);
}
function Gm(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			nu(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + t + ").")
			),
			e
		);
	}
}
function Zm(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			nu(
				!1,
				'The value for the URL param "' +
					t +
					'" will not be decoded because' +
					(' the string "' +
						e +
						'" is a malformed URL segment. This is probably') +
					(" due to a bad percent encoding (" + n + ").")
			),
			e
		);
	}
}
function vd(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase()))
		return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function ey(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: i = "",
	} = typeof e == "string" ? Ln(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : ty(n, t)) : t,
		search: oy(r),
		hash: sy(i),
	};
}
function ty(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((i) => {
			i === ".."
				? n.length > 1 && n.pop()
				: i !== "." && n.push(i);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function Yo(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		("`to." +
			t +
			"` field [" +
			JSON.stringify(r) +
			"].  Please separate it out to the ") +
		("`to." +
			n +
			"` field. Alternatively you may provide the full path as ") +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function ny(e) {
	return e.filter(
		(t, n) =>
			n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function ry(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == "string"
		? (i = Ln(e))
		: ((i = Cr({}, e)),
		  te(
				!i.pathname || !i.pathname.includes("?"),
				Yo("?", "pathname", "search", i)
		  ),
		  te(
				!i.pathname || !i.pathname.includes("#"),
				Yo("#", "pathname", "hash", i)
		  ),
		  te(
				!i.search || !i.search.includes("#"),
				Yo("#", "search", "hash", i)
		  ));
	let o = e === "" || i.pathname === "",
		s = o ? "/" : i.pathname,
		l;
	if (r || s == null) l = n;
	else {
		let d = t.length - 1;
		if (s.startsWith("..")) {
			let h = s.split("/");
			for (; h[0] === ".."; ) h.shift(), (d -= 1);
			i.pathname = h.join("/");
		}
		l = d >= 0 ? t[d] : "/";
	}
	let u = ey(i, l),
		a = s && s !== "/" && s.endsWith("/"),
		c = (o || s === ".") && n.endsWith("/");
	return (
		!u.pathname.endsWith("/") &&
			(a || c) &&
			(u.pathname += "/"),
		u
	);
}
const Wt = (e) => e.join("/").replace(/\/\/+/g, "/"),
	iy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	oy = (e) =>
		!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
	sy = (e) =>
		!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function ly(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const wd = ["post", "put", "patch", "delete"];
new Set(wd);
const uy = ["get", ...wd];
new Set(uy);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qi() {
	return (
		(Qi = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) &&
								(e[r] = n[r]);
					}
					return e;
			  }),
		Qi.apply(this, arguments)
	);
}
const ru = k.createContext(null),
	ay = k.createContext(null),
	fo = k.createContext(null),
	po = k.createContext(null),
	An = k.createContext({
		outlet: null,
		matches: [],
		isDataRoute: !1,
	}),
	Sd = k.createContext(null);
function ho() {
	return k.useContext(po) != null;
}
function Ed() {
	return ho() || te(!1), k.useContext(po).location;
}
function xd(e) {
	k.useContext(fo).static || k.useLayoutEffect(e);
}
function iu() {
	let { isDataRoute: e } = k.useContext(An);
	return e ? xy() : cy();
}
function cy() {
	ho() || te(!1);
	let e = k.useContext(ru),
		{ basename: t, navigator: n } = k.useContext(fo),
		{ matches: r } = k.useContext(An),
		{ pathname: i } = Ed(),
		o = JSON.stringify(ny(r).map((u) => u.pathnameBase)),
		s = k.useRef(!1);
	return (
		xd(() => {
			s.current = !0;
		}),
		k.useCallback(
			function (u, a) {
				if ((a === void 0 && (a = {}), !s.current)) return;
				if (typeof u == "number") {
					n.go(u);
					return;
				}
				let c = ry(
					u,
					JSON.parse(o),
					i,
					a.relative === "path"
				);
				e == null &&
					t !== "/" &&
					(c.pathname =
						c.pathname === "/" ? t : Wt([t, c.pathname])),
					(a.replace ? n.replace : n.push)(c, a.state, a);
			},
			[t, n, o, i, e]
		)
	);
}
function fy(e, t) {
	return dy(e, t);
}
function dy(e, t, n) {
	ho() || te(!1);
	let { navigator: r } = k.useContext(fo),
		{ matches: i } = k.useContext(An),
		o = i[i.length - 1],
		s = o ? o.params : {};
	o && o.pathname;
	let l = o ? o.pathnameBase : "/";
	o && o.route;
	let u = Ed(),
		a;
	if (t) {
		var c;
		let v = typeof t == "string" ? Ln(t) : t;
		l === "/" ||
			((c = v.pathname) != null && c.startsWith(l)) ||
			te(!1),
			(a = v);
	} else a = u;
	let d = a.pathname || "/",
		h = l === "/" ? d : d.slice(l.length) || "/",
		g = Um(e, { pathname: h }),
		y = gy(
			g &&
				g.map((v) =>
					Object.assign({}, v, {
						params: Object.assign({}, s, v.params),
						pathname: Wt([
							l,
							r.encodeLocation
								? r.encodeLocation(v.pathname).pathname
								: v.pathname,
						]),
						pathnameBase:
							v.pathnameBase === "/"
								? l
								: Wt([
										l,
										r.encodeLocation
											? r.encodeLocation(v.pathnameBase)
													.pathname
											: v.pathnameBase,
								  ]),
					})
				),
			i,
			n
		);
	return t && y
		? k.createElement(
				po.Provider,
				{
					value: {
						location: Qi(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							a
						),
						navigationType: St.Pop,
					},
				},
				y
		  )
		: y;
}
function py() {
	let e = Ey(),
		t = ly(e)
			? e.status + " " + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = {
			padding: "0.5rem",
			backgroundColor: "rgba(200,200,200, 0.5)",
		},
		o = null;
	return k.createElement(
		k.Fragment,
		null,
		k.createElement(
			"h2",
			null,
			"Unexpected Application Error!"
		),
		k.createElement(
			"h3",
			{ style: { fontStyle: "italic" } },
			t
		),
		n ? k.createElement("pre", { style: i }, n) : null,
		o
	);
}
const hy = k.createElement(py, null);
class my extends k.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== "idle" &&
				t.revalidation === "idle")
			? {
					error: t.error,
					location: t.location,
					revalidation: t.revalidation,
			  }
			: {
					error: t.error || n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(t, n) {
		console.error(
			"React Router caught the following error during render",
			t,
			n
		);
	}
	render() {
		return this.state.error
			? k.createElement(
					An.Provider,
					{ value: this.props.routeContext },
					k.createElement(Sd.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function yy(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = k.useContext(ru);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId =
				n.route.id),
		k.createElement(An.Provider, { value: t }, r)
	);
}
function gy(e, t, n) {
	var r;
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		e == null)
	) {
		var i;
		if ((i = n) != null && i.errors) e = n.matches;
		else return null;
	}
	let o = e,
		s = (r = n) == null ? void 0 : r.errors;
	if (s != null) {
		let l = o.findIndex(
			(u) =>
				u.route.id && (s == null ? void 0 : s[u.route.id])
		);
		l >= 0 || te(!1),
			(o = o.slice(0, Math.min(o.length, l + 1)));
	}
	return o.reduceRight((l, u, a) => {
		let c = u.route.id
				? s == null
					? void 0
					: s[u.route.id]
				: null,
			d = null;
		n && (d = u.route.errorElement || hy);
		let h = t.concat(o.slice(0, a + 1)),
			g = () => {
				let y;
				return (
					c
						? (y = d)
						: u.route.Component
						? (y = k.createElement(u.route.Component, null))
						: u.route.element
						? (y = u.route.element)
						: (y = l),
					k.createElement(yy, {
						match: u,
						routeContext: {
							outlet: l,
							matches: h,
							isDataRoute: n != null,
						},
						children: y,
					})
				);
			};
		return n &&
			(u.route.ErrorBoundary ||
				u.route.errorElement ||
				a === 0)
			? k.createElement(my, {
					location: n.location,
					revalidation: n.revalidation,
					component: d,
					error: c,
					children: g(),
					routeContext: {
						outlet: null,
						matches: h,
						isDataRoute: !0,
					},
			  })
			: g();
	}, null);
}
var kd = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			e
		);
	})(kd || {}),
	Ki = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseLoaderData = "useLoaderData"),
			(e.UseActionData = "useActionData"),
			(e.UseRouteError = "useRouteError"),
			(e.UseNavigation = "useNavigation"),
			(e.UseRouteLoaderData = "useRouteLoaderData"),
			(e.UseMatches = "useMatches"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			(e.UseRouteId = "useRouteId"),
			e
		);
	})(Ki || {});
function vy(e) {
	let t = k.useContext(ru);
	return t || te(!1), t;
}
function wy(e) {
	let t = k.useContext(ay);
	return t || te(!1), t;
}
function Sy(e) {
	let t = k.useContext(An);
	return t || te(!1), t;
}
function Cd(e) {
	let t = Sy(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || te(!1), n.route.id;
}
function Ey() {
	var e;
	let t = k.useContext(Sd),
		n = wy(Ki.UseRouteError),
		r = Cd(Ki.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function xy() {
	let { router: e } = vy(kd.UseNavigateStable),
		t = Cd(Ki.UseNavigateStable),
		n = k.useRef(!1);
	return (
		xd(() => {
			n.current = !0;
		}),
		k.useCallback(
			function (i, o) {
				o === void 0 && (o = {}),
					n.current &&
						(typeof i == "number"
							? e.navigate(i)
							: e.navigate(i, Qi({ fromRouteId: t }, o)));
			},
			[e, t]
		)
	);
}
function mi(e) {
	te(!1);
}
function ky(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: i = St.Pop,
		navigator: o,
		static: s = !1,
	} = e;
	ho() && te(!1);
	let l = t.replace(/^\/*/, "/"),
		u = k.useMemo(
			() => ({ basename: l, navigator: o, static: s }),
			[l, o, s]
		);
	typeof r == "string" && (r = Ln(r));
	let {
			pathname: a = "/",
			search: c = "",
			hash: d = "",
			state: h = null,
			key: g = "default",
		} = r,
		y = k.useMemo(() => {
			let v = vd(a, l);
			return v == null
				? null
				: {
						location: {
							pathname: v,
							search: c,
							hash: d,
							state: h,
							key: g,
						},
						navigationType: i,
				  };
		}, [l, a, c, d, h, g, i]);
	return y == null
		? null
		: k.createElement(
				fo.Provider,
				{ value: u },
				k.createElement(po.Provider, {
					children: n,
					value: y,
				})
		  );
}
function Cy(e) {
	let { children: t, location: n } = e;
	return fy(Xs(t), n);
}
new Promise(() => {});
function Xs(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		k.Children.forEach(e, (r, i) => {
			if (!k.isValidElement(r)) return;
			let o = [...t, i];
			if (r.type === k.Fragment) {
				n.push.apply(n, Xs(r.props.children, o));
				return;
			}
			r.type !== mi && te(!1),
				!r.props.index || !r.props.children || te(!1);
			let s = {
				id: r.props.id || o.join("-"),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.ErrorBoundary != null ||
					r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			r.props.children &&
				(s.children = Xs(r.props.children, o)),
				n.push(s);
		}),
		n
	);
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const _y = "startTransition",
	La = _p[_y];
function Ny(e) {
	let {
			basename: t,
			children: n,
			future: r,
			window: i,
		} = e,
		o = k.useRef();
	o.current == null &&
		(o.current = Bm({ window: i, v5Compat: !0 }));
	let s = o.current,
		[l, u] = k.useState({
			action: s.action,
			location: s.location,
		}),
		{ v7_startTransition: a } = r || {},
		c = k.useCallback(
			(d) => {
				a && La ? La(() => u(d)) : u(d);
			},
			[u, a]
		);
	return (
		k.useLayoutEffect(() => s.listen(c), [s, c]),
		k.createElement(ky, {
			basename: t,
			children: n,
			location: l.location,
			navigationType: l.action,
			navigator: s,
		})
	);
}
var Aa;
(function (e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher");
})(Aa || (Aa = {}));
var ja;
(function (e) {
	(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})(ja || (ja = {}));
function _d(e, t) {
	return function () {
		return e.apply(t, arguments);
	};
}
const { toString: Ry } = Object.prototype,
	{ getPrototypeOf: ou } = Object,
	mo = ((e) => (t) => {
		const n = Ry.call(t);
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
	})(Object.create(null)),
	Ge = (e) => ((e = e.toLowerCase()), (t) => mo(t) === e),
	yo = (e) => (t) => typeof t === e,
	{ isArray: jn } = Array,
	_r = yo("undefined");
function Oy(e) {
	return (
		e !== null &&
		!_r(e) &&
		e.constructor !== null &&
		!_r(e.constructor) &&
		Ae(e.constructor.isBuffer) &&
		e.constructor.isBuffer(e)
	);
}
const Nd = Ge("ArrayBuffer");
function Py(e) {
	let t;
	return (
		typeof ArrayBuffer < "u" && ArrayBuffer.isView
			? (t = ArrayBuffer.isView(e))
			: (t = e && e.buffer && Nd(e.buffer)),
		t
	);
}
const Ty = yo("string"),
	Ae = yo("function"),
	Rd = yo("number"),
	go = (e) => e !== null && typeof e == "object",
	Ly = (e) => e === !0 || e === !1,
	yi = (e) => {
		if (mo(e) !== "object") return !1;
		const t = ou(e);
		return (
			(t === null ||
				t === Object.prototype ||
				Object.getPrototypeOf(t) === null) &&
			!(Symbol.toStringTag in e) &&
			!(Symbol.iterator in e)
		);
	},
	Ay = Ge("Date"),
	jy = Ge("File"),
	zy = Ge("Blob"),
	Iy = Ge("FileList"),
	By = (e) => go(e) && Ae(e.pipe),
	Dy = (e) => {
		let t;
		return (
			e &&
			((typeof FormData == "function" &&
				e instanceof FormData) ||
				(Ae(e.append) &&
					((t = mo(e)) === "formdata" ||
						(t === "object" &&
							Ae(e.toString) &&
							e.toString() === "[object FormData]"))))
		);
	},
	Fy = Ge("URLSearchParams"),
	Uy = (e) =>
		e.trim
			? e.trim()
			: e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Lr(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e === null || typeof e > "u") return;
	let r, i;
	if ((typeof e != "object" && (e = [e]), jn(e)))
		for (r = 0, i = e.length; r < i; r++)
			t.call(null, e[r], r, e);
	else {
		const o = n
				? Object.getOwnPropertyNames(e)
				: Object.keys(e),
			s = o.length;
		let l;
		for (r = 0; r < s; r++)
			(l = o[r]), t.call(null, e[l], l, e);
	}
}
function Od(e, t) {
	t = t.toLowerCase();
	const n = Object.keys(e);
	let r = n.length,
		i;
	for (; r-- > 0; )
		if (((i = n[r]), t === i.toLowerCase())) return i;
	return null;
}
const Pd = (() =>
		typeof globalThis < "u"
			? globalThis
			: typeof self < "u"
			? self
			: typeof window < "u"
			? window
			: global)(),
	Td = (e) => !_r(e) && e !== Pd;
function Gs() {
	const { caseless: e } = (Td(this) && this) || {},
		t = {},
		n = (r, i) => {
			const o = (e && Od(t, i)) || i;
			yi(t[o]) && yi(r)
				? (t[o] = Gs(t[o], r))
				: yi(r)
				? (t[o] = Gs({}, r))
				: jn(r)
				? (t[o] = r.slice())
				: (t[o] = r);
		};
	for (let r = 0, i = arguments.length; r < i; r++)
		arguments[r] && Lr(arguments[r], n);
	return t;
}
const My = (e, t, n, { allOwnKeys: r } = {}) => (
		Lr(
			t,
			(i, o) => {
				n && Ae(i) ? (e[o] = _d(i, n)) : (e[o] = i);
			},
			{ allOwnKeys: r }
		),
		e
	),
	$y = (e) => (
		e.charCodeAt(0) === 65279 && (e = e.slice(1)), e
	),
	Vy = (e, t, n, r) => {
		(e.prototype = Object.create(t.prototype, r)),
			(e.prototype.constructor = e),
			Object.defineProperty(e, "super", {
				value: t.prototype,
			}),
			n && Object.assign(e.prototype, n);
	},
	Hy = (e, t, n, r) => {
		let i, o, s;
		const l = {};
		if (((t = t || {}), e == null)) return t;
		do {
			for (
				i = Object.getOwnPropertyNames(e), o = i.length;
				o-- > 0;

			)
				(s = i[o]),
					(!r || r(s, e, t)) &&
						!l[s] &&
						((t[s] = e[s]), (l[s] = !0));
			e = n !== !1 && ou(e);
		} while (
			e &&
			(!n || n(e, t)) &&
			e !== Object.prototype
		);
		return t;
	},
	Wy = (e, t, n) => {
		(e = String(e)),
			(n === void 0 || n > e.length) && (n = e.length),
			(n -= t.length);
		const r = e.indexOf(t, n);
		return r !== -1 && r === n;
	},
	qy = (e) => {
		if (!e) return null;
		if (jn(e)) return e;
		let t = e.length;
		if (!Rd(t)) return null;
		const n = new Array(t);
		for (; t-- > 0; ) n[t] = e[t];
		return n;
	},
	Qy = (
		(e) => (t) =>
			e && t instanceof e
	)(typeof Uint8Array < "u" && ou(Uint8Array)),
	Ky = (e, t) => {
		const r = (e && e[Symbol.iterator]).call(e);
		let i;
		for (; (i = r.next()) && !i.done; ) {
			const o = i.value;
			t.call(e, o[0], o[1]);
		}
	},
	Jy = (e, t) => {
		let n;
		const r = [];
		for (; (n = e.exec(t)) !== null; ) r.push(n);
		return r;
	},
	by = Ge("HTMLFormElement"),
	Yy = (e) =>
		e
			.toLowerCase()
			.replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
				return r.toUpperCase() + i;
			}),
	za = (
		({ hasOwnProperty: e }) =>
		(t, n) =>
			e.call(t, n)
	)(Object.prototype),
	Xy = Ge("RegExp"),
	Ld = (e, t) => {
		const n = Object.getOwnPropertyDescriptors(e),
			r = {};
		Lr(n, (i, o) => {
			let s;
			(s = t(i, o, e)) !== !1 && (r[o] = s || i);
		}),
			Object.defineProperties(e, r);
	},
	Gy = (e) => {
		Ld(e, (t, n) => {
			if (
				Ae(e) &&
				["arguments", "caller", "callee"].indexOf(n) !== -1
			)
				return !1;
			const r = e[n];
			if (Ae(r)) {
				if (((t.enumerable = !1), "writable" in t)) {
					t.writable = !1;
					return;
				}
				t.set ||
					(t.set = () => {
						throw Error(
							"Can not rewrite read-only method '" + n + "'"
						);
					});
			}
		});
	},
	Zy = (e, t) => {
		const n = {},
			r = (i) => {
				i.forEach((o) => {
					n[o] = !0;
				});
			};
		return jn(e) ? r(e) : r(String(e).split(t)), n;
	},
	e0 = () => {},
	t0 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
	Xo = "abcdefghijklmnopqrstuvwxyz",
	Ia = "0123456789",
	Ad = {
		DIGIT: Ia,
		ALPHA: Xo,
		ALPHA_DIGIT: Xo + Xo.toUpperCase() + Ia,
	},
	n0 = (e = 16, t = Ad.ALPHA_DIGIT) => {
		let n = "";
		const { length: r } = t;
		for (; e--; ) n += t[(Math.random() * r) | 0];
		return n;
	};
function r0(e) {
	return !!(
		e &&
		Ae(e.append) &&
		e[Symbol.toStringTag] === "FormData" &&
		e[Symbol.iterator]
	);
}
const i0 = (e) => {
		const t = new Array(10),
			n = (r, i) => {
				if (go(r)) {
					if (t.indexOf(r) >= 0) return;
					if (!("toJSON" in r)) {
						t[i] = r;
						const o = jn(r) ? [] : {};
						return (
							Lr(r, (s, l) => {
								const u = n(s, i + 1);
								!_r(u) && (o[l] = u);
							}),
							(t[i] = void 0),
							o
						);
					}
				}
				return r;
			};
		return n(e, 0);
	},
	o0 = Ge("AsyncFunction"),
	s0 = (e) =>
		e && (go(e) || Ae(e)) && Ae(e.then) && Ae(e.catch),
	w = {
		isArray: jn,
		isArrayBuffer: Nd,
		isBuffer: Oy,
		isFormData: Dy,
		isArrayBufferView: Py,
		isString: Ty,
		isNumber: Rd,
		isBoolean: Ly,
		isObject: go,
		isPlainObject: yi,
		isUndefined: _r,
		isDate: Ay,
		isFile: jy,
		isBlob: zy,
		isRegExp: Xy,
		isFunction: Ae,
		isStream: By,
		isURLSearchParams: Fy,
		isTypedArray: Qy,
		isFileList: Iy,
		forEach: Lr,
		merge: Gs,
		extend: My,
		trim: Uy,
		stripBOM: $y,
		inherits: Vy,
		toFlatObject: Hy,
		kindOf: mo,
		kindOfTest: Ge,
		endsWith: Wy,
		toArray: qy,
		forEachEntry: Ky,
		matchAll: Jy,
		isHTMLForm: by,
		hasOwnProperty: za,
		hasOwnProp: za,
		reduceDescriptors: Ld,
		freezeMethods: Gy,
		toObjectSet: Zy,
		toCamelCase: Yy,
		noop: e0,
		toFiniteNumber: t0,
		findKey: Od,
		global: Pd,
		isContextDefined: Td,
		ALPHABET: Ad,
		generateString: n0,
		isSpecCompliantForm: r0,
		toJSONObject: i0,
		isAsyncFn: o0,
		isThenable: s0,
	};
function B(e, t, n, r, i) {
	Error.call(this),
		Error.captureStackTrace
			? Error.captureStackTrace(this, this.constructor)
			: (this.stack = new Error().stack),
		(this.message = e),
		(this.name = "AxiosError"),
		t && (this.code = t),
		n && (this.config = n),
		r && (this.request = r),
		i && (this.response = i);
}
w.inherits(B, Error, {
	toJSON: function () {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: w.toJSONObject(this.config),
			code: this.code,
			status:
				this.response && this.response.status
					? this.response.status
					: null,
		};
	},
});
const jd = B.prototype,
	zd = {};
[
	"ERR_BAD_OPTION_VALUE",
	"ERR_BAD_OPTION",
	"ECONNABORTED",
	"ETIMEDOUT",
	"ERR_NETWORK",
	"ERR_FR_TOO_MANY_REDIRECTS",
	"ERR_DEPRECATED",
	"ERR_BAD_RESPONSE",
	"ERR_BAD_REQUEST",
	"ERR_CANCELED",
	"ERR_NOT_SUPPORT",
	"ERR_INVALID_URL",
].forEach((e) => {
	zd[e] = { value: e };
});
Object.defineProperties(B, zd);
Object.defineProperty(jd, "isAxiosError", { value: !0 });
B.from = (e, t, n, r, i, o) => {
	const s = Object.create(jd);
	return (
		w.toFlatObject(
			e,
			s,
			function (u) {
				return u !== Error.prototype;
			},
			(l) => l !== "isAxiosError"
		),
		B.call(s, e.message, t, n, r, i),
		(s.cause = e),
		(s.name = e.name),
		o && Object.assign(s, o),
		s
	);
};
const l0 = null;
function Zs(e) {
	return w.isPlainObject(e) || w.isArray(e);
}
function Id(e) {
	return w.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ba(e, t, n) {
	return e
		? e
				.concat(t)
				.map(function (i, o) {
					return (i = Id(i)), !n && o ? "[" + i + "]" : i;
				})
				.join(n ? "." : "")
		: t;
}
function u0(e) {
	return w.isArray(e) && !e.some(Zs);
}
const a0 = w.toFlatObject(w, {}, null, function (t) {
	return /^is[A-Z]/.test(t);
});
function vo(e, t, n) {
	if (!w.isObject(e))
		throw new TypeError("target must be an object");
	(t = t || new FormData()),
		(n = w.toFlatObject(
			n,
			{ metaTokens: !0, dots: !1, indexes: !1 },
			!1,
			function (v, N) {
				return !w.isUndefined(N[v]);
			}
		));
	const r = n.metaTokens,
		i = n.visitor || c,
		o = n.dots,
		s = n.indexes,
		u =
			(n.Blob || (typeof Blob < "u" && Blob)) &&
			w.isSpecCompliantForm(t);
	if (!w.isFunction(i))
		throw new TypeError("visitor must be a function");
	function a(y) {
		if (y === null) return "";
		if (w.isDate(y)) return y.toISOString();
		if (!u && w.isBlob(y))
			throw new B(
				"Blob is not supported. Use a Buffer instead."
			);
		return w.isArrayBuffer(y) || w.isTypedArray(y)
			? u && typeof Blob == "function"
				? new Blob([y])
				: Buffer.from(y)
			: y;
	}
	function c(y, v, N) {
		let p = y;
		if (y && !N && typeof y == "object") {
			if (w.endsWith(v, "{}"))
				(v = r ? v : v.slice(0, -2)),
					(y = JSON.stringify(y));
			else if (
				(w.isArray(y) && u0(y)) ||
				((w.isFileList(y) || w.endsWith(v, "[]")) &&
					(p = w.toArray(y)))
			)
				return (
					(v = Id(v)),
					p.forEach(function (m, S) {
						!(w.isUndefined(m) || m === null) &&
							t.append(
								s === !0
									? Ba([v], S, o)
									: s === null
									? v
									: v + "[]",
								a(m)
							);
					}),
					!1
				);
		}
		return Zs(y) ? !0 : (t.append(Ba(N, v, o), a(y)), !1);
	}
	const d = [],
		h = Object.assign(a0, {
			defaultVisitor: c,
			convertValue: a,
			isVisitable: Zs,
		});
	function g(y, v) {
		if (!w.isUndefined(y)) {
			if (d.indexOf(y) !== -1)
				throw Error(
					"Circular reference detected in " + v.join(".")
				);
			d.push(y),
				w.forEach(y, function (p, f) {
					(!(w.isUndefined(p) || p === null) &&
						i.call(
							t,
							p,
							w.isString(f) ? f.trim() : f,
							v,
							h
						)) === !0 && g(p, v ? v.concat(f) : [f]);
				}),
				d.pop();
		}
	}
	if (!w.isObject(e))
		throw new TypeError("data must be an object");
	return g(e), t;
}
function Da(e) {
	const t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+",
		"%00": "\0",
	};
	return encodeURIComponent(e).replace(
		/[!'()~]|%20|%00/g,
		function (r) {
			return t[r];
		}
	);
}
function su(e, t) {
	(this._pairs = []), e && vo(e, this, t);
}
const Bd = su.prototype;
Bd.append = function (t, n) {
	this._pairs.push([t, n]);
};
Bd.toString = function (t) {
	const n = t
		? function (r) {
				return t.call(this, r, Da);
		  }
		: Da;
	return this._pairs
		.map(function (i) {
			return n(i[0]) + "=" + n(i[1]);
		}, "")
		.join("&");
};
function c0(e) {
	return encodeURIComponent(e)
		.replace(/%3A/gi, ":")
		.replace(/%24/g, "$")
		.replace(/%2C/gi, ",")
		.replace(/%20/g, "+")
		.replace(/%5B/gi, "[")
		.replace(/%5D/gi, "]");
}
function Dd(e, t, n) {
	if (!t) return e;
	const r = (n && n.encode) || c0,
		i = n && n.serialize;
	let o;
	if (
		(i
			? (o = i(t, n))
			: (o = w.isURLSearchParams(t)
					? t.toString()
					: new su(t, n).toString(r)),
		o)
	) {
		const s = e.indexOf("#");
		s !== -1 && (e = e.slice(0, s)),
			(e += (e.indexOf("?") === -1 ? "?" : "&") + o);
	}
	return e;
}
class f0 {
	constructor() {
		this.handlers = [];
	}
	use(t, n, r) {
		return (
			this.handlers.push({
				fulfilled: t,
				rejected: n,
				synchronous: r ? r.synchronous : !1,
				runWhen: r ? r.runWhen : null,
			}),
			this.handlers.length - 1
		);
	}
	eject(t) {
		this.handlers[t] && (this.handlers[t] = null);
	}
	clear() {
		this.handlers && (this.handlers = []);
	}
	forEach(t) {
		w.forEach(this.handlers, function (r) {
			r !== null && t(r);
		});
	}
}
const Fa = f0,
	Fd = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1,
	},
	d0 = typeof URLSearchParams < "u" ? URLSearchParams : su,
	p0 = typeof FormData < "u" ? FormData : null,
	h0 = typeof Blob < "u" ? Blob : null,
	m0 = (() => {
		let e;
		return typeof navigator < "u" &&
			((e = navigator.product) === "ReactNative" ||
				e === "NativeScript" ||
				e === "NS")
			? !1
			: typeof window < "u" && typeof document < "u";
	})(),
	y0 = (() =>
		typeof WorkerGlobalScope < "u" &&
		self instanceof WorkerGlobalScope &&
		typeof self.importScripts == "function")(),
	$e = {
		isBrowser: !0,
		classes: {
			URLSearchParams: d0,
			FormData: p0,
			Blob: h0,
		},
		isStandardBrowserEnv: m0,
		isStandardBrowserWebWorkerEnv: y0,
		protocols: [
			"http",
			"https",
			"file",
			"blob",
			"url",
			"data",
		],
	};
function g0(e, t) {
	return vo(
		e,
		new $e.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (n, r, i, o) {
					return $e.isNode && w.isBuffer(n)
						? (this.append(r, n.toString("base64")), !1)
						: o.defaultVisitor.apply(this, arguments);
				},
			},
			t
		)
	);
}
function v0(e) {
	return w
		.matchAll(/\w+|\[(\w*)]/g, e)
		.map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function w0(e) {
	const t = {},
		n = Object.keys(e);
	let r;
	const i = n.length;
	let o;
	for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
	return t;
}
function Ud(e) {
	function t(n, r, i, o) {
		let s = n[o++];
		const l = Number.isFinite(+s),
			u = o >= n.length;
		return (
			(s = !s && w.isArray(i) ? i.length : s),
			u
				? (w.hasOwnProp(i, s)
						? (i[s] = [i[s], r])
						: (i[s] = r),
				  !l)
				: ((!i[s] || !w.isObject(i[s])) && (i[s] = []),
				  t(n, r, i[s], o) &&
						w.isArray(i[s]) &&
						(i[s] = w0(i[s])),
				  !l)
		);
	}
	if (w.isFormData(e) && w.isFunction(e.entries)) {
		const n = {};
		return (
			w.forEachEntry(e, (r, i) => {
				t(v0(r), i, n, 0);
			}),
			n
		);
	}
	return null;
}
function S0(e, t, n) {
	if (w.isString(e))
		try {
			return (t || JSON.parse)(e), w.trim(e);
		} catch (r) {
			if (r.name !== "SyntaxError") throw r;
		}
	return (n || JSON.stringify)(e);
}
const lu = {
	transitional: Fd,
	adapter: $e.isNode ? "http" : "xhr",
	transformRequest: [
		function (t, n) {
			const r = n.getContentType() || "",
				i = r.indexOf("application/json") > -1,
				o = w.isObject(t);
			if (
				(o && w.isHTMLForm(t) && (t = new FormData(t)),
				w.isFormData(t))
			)
				return i && i ? JSON.stringify(Ud(t)) : t;
			if (
				w.isArrayBuffer(t) ||
				w.isBuffer(t) ||
				w.isStream(t) ||
				w.isFile(t) ||
				w.isBlob(t)
			)
				return t;
			if (w.isArrayBufferView(t)) return t.buffer;
			if (w.isURLSearchParams(t))
				return (
					n.setContentType(
						"application/x-www-form-urlencoded;charset=utf-8",
						!1
					),
					t.toString()
				);
			let l;
			if (o) {
				if (
					r.indexOf("application/x-www-form-urlencoded") >
					-1
				)
					return g0(t, this.formSerializer).toString();
				if (
					(l = w.isFileList(t)) ||
					r.indexOf("multipart/form-data") > -1
				) {
					const u = this.env && this.env.FormData;
					return vo(
						l ? { "files[]": t } : t,
						u && new u(),
						this.formSerializer
					);
				}
			}
			return o || i
				? (n.setContentType("application/json", !1), S0(t))
				: t;
		},
	],
	transformResponse: [
		function (t) {
			const n = this.transitional || lu.transitional,
				r = n && n.forcedJSONParsing,
				i = this.responseType === "json";
			if (
				t &&
				w.isString(t) &&
				((r && !this.responseType) || i)
			) {
				const s = !(n && n.silentJSONParsing) && i;
				try {
					return JSON.parse(t);
				} catch (l) {
					if (s)
						throw l.name === "SyntaxError"
							? B.from(
									l,
									B.ERR_BAD_RESPONSE,
									this,
									null,
									this.response
							  )
							: l;
				}
			}
			return t;
		},
	],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: $e.classes.FormData,
		Blob: $e.classes.Blob,
	},
	validateStatus: function (t) {
		return t >= 200 && t < 300;
	},
	headers: {
		common: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": void 0,
		},
	},
};
w.forEach(
	["delete", "get", "head", "post", "put", "patch"],
	(e) => {
		lu.headers[e] = {};
	}
);
const uu = lu,
	E0 = w.toObjectSet([
		"age",
		"authorization",
		"content-length",
		"content-type",
		"etag",
		"expires",
		"from",
		"host",
		"if-modified-since",
		"if-unmodified-since",
		"last-modified",
		"location",
		"max-forwards",
		"proxy-authorization",
		"referer",
		"retry-after",
		"user-agent",
	]),
	x0 = (e) => {
		const t = {};
		let n, r, i;
		return (
			e &&
				e
					.split(
						`
`
					)
					.forEach(function (s) {
						(i = s.indexOf(":")),
							(n = s.substring(0, i).trim().toLowerCase()),
							(r = s.substring(i + 1).trim()),
							!(!n || (t[n] && E0[n])) &&
								(n === "set-cookie"
									? t[n]
										? t[n].push(r)
										: (t[n] = [r])
									: (t[n] = t[n] ? t[n] + ", " + r : r));
					}),
			t
		);
	},
	Ua = Symbol("internals");
function qn(e) {
	return e && String(e).trim().toLowerCase();
}
function gi(e) {
	return e === !1 || e == null
		? e
		: w.isArray(e)
		? e.map(gi)
		: String(e);
}
function k0(e) {
	const t = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let r;
	for (; (r = n.exec(e)); ) t[r[1]] = r[2];
	return t;
}
const C0 = (e) =>
	/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Go(e, t, n, r, i) {
	if (w.isFunction(r)) return r.call(this, t, n);
	if ((i && (t = n), !!w.isString(t))) {
		if (w.isString(r)) return t.indexOf(r) !== -1;
		if (w.isRegExp(r)) return r.test(t);
	}
}
function _0(e) {
	return e
		.trim()
		.toLowerCase()
		.replace(
			/([a-z\d])(\w*)/g,
			(t, n, r) => n.toUpperCase() + r
		);
}
function N0(e, t) {
	const n = w.toCamelCase(" " + t);
	["get", "set", "has"].forEach((r) => {
		Object.defineProperty(e, r + n, {
			value: function (i, o, s) {
				return this[r].call(this, t, i, o, s);
			},
			configurable: !0,
		});
	});
}
class wo {
	constructor(t) {
		t && this.set(t);
	}
	set(t, n, r) {
		const i = this;
		function o(l, u, a) {
			const c = qn(u);
			if (!c)
				throw new Error(
					"header name must be a non-empty string"
				);
			const d = w.findKey(i, c);
			(!d ||
				i[d] === void 0 ||
				a === !0 ||
				(a === void 0 && i[d] !== !1)) &&
				(i[d || u] = gi(l));
		}
		const s = (l, u) => w.forEach(l, (a, c) => o(a, c, u));
		return (
			w.isPlainObject(t) || t instanceof this.constructor
				? s(t, n)
				: w.isString(t) && (t = t.trim()) && !C0(t)
				? s(x0(t), n)
				: t != null && o(n, t, r),
			this
		);
	}
	get(t, n) {
		if (((t = qn(t)), t)) {
			const r = w.findKey(this, t);
			if (r) {
				const i = this[r];
				if (!n) return i;
				if (n === !0) return k0(i);
				if (w.isFunction(n)) return n.call(this, i, r);
				if (w.isRegExp(n)) return n.exec(i);
				throw new TypeError(
					"parser must be boolean|regexp|function"
				);
			}
		}
	}
	has(t, n) {
		if (((t = qn(t)), t)) {
			const r = w.findKey(this, t);
			return !!(
				r &&
				this[r] !== void 0 &&
				(!n || Go(this, this[r], r, n))
			);
		}
		return !1;
	}
	delete(t, n) {
		const r = this;
		let i = !1;
		function o(s) {
			if (((s = qn(s)), s)) {
				const l = w.findKey(r, s);
				l &&
					(!n || Go(r, r[l], l, n)) &&
					(delete r[l], (i = !0));
			}
		}
		return w.isArray(t) ? t.forEach(o) : o(t), i;
	}
	clear(t) {
		const n = Object.keys(this);
		let r = n.length,
			i = !1;
		for (; r--; ) {
			const o = n[r];
			(!t || Go(this, this[o], o, t, !0)) &&
				(delete this[o], (i = !0));
		}
		return i;
	}
	normalize(t) {
		const n = this,
			r = {};
		return (
			w.forEach(this, (i, o) => {
				const s = w.findKey(r, o);
				if (s) {
					(n[s] = gi(i)), delete n[o];
					return;
				}
				const l = t ? _0(o) : String(o).trim();
				l !== o && delete n[o], (n[l] = gi(i)), (r[l] = !0);
			}),
			this
		);
	}
	concat(...t) {
		return this.constructor.concat(this, ...t);
	}
	toJSON(t) {
		const n = Object.create(null);
		return (
			w.forEach(this, (r, i) => {
				r != null &&
					r !== !1 &&
					(n[i] = t && w.isArray(r) ? r.join(", ") : r);
			}),
			n
		);
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(
			([t, n]) => t + ": " + n
		).join(`
`);
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(t) {
		return t instanceof this ? t : new this(t);
	}
	static concat(t, ...n) {
		const r = new this(t);
		return n.forEach((i) => r.set(i)), r;
	}
	static accessor(t) {
		const r = (this[Ua] = this[Ua] = { accessors: {} })
				.accessors,
			i = this.prototype;
		function o(s) {
			const l = qn(s);
			r[l] || (N0(i, s), (r[l] = !0));
		}
		return w.isArray(t) ? t.forEach(o) : o(t), this;
	}
}
wo.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization",
]);
w.reduceDescriptors(wo.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(r) {
			this[n] = r;
		},
	};
});
w.freezeMethods(wo);
const ot = wo;
function Zo(e, t) {
	const n = this || uu,
		r = t || n,
		i = ot.from(r.headers);
	let o = r.data;
	return (
		w.forEach(e, function (l) {
			o = l.call(
				n,
				o,
				i.normalize(),
				t ? t.status : void 0
			);
		}),
		i.normalize(),
		o
	);
}
function Md(e) {
	return !!(e && e.__CANCEL__);
}
function Ar(e, t, n) {
	B.call(this, e ?? "canceled", B.ERR_CANCELED, t, n),
		(this.name = "CanceledError");
}
w.inherits(Ar, B, { __CANCEL__: !0 });
function R0(e, t, n) {
	const r = n.config.validateStatus;
	!n.status || !r || r(n.status)
		? e(n)
		: t(
				new B(
					"Request failed with status code " + n.status,
					[B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][
						Math.floor(n.status / 100) - 4
					],
					n.config,
					n.request,
					n
				)
		  );
}
const O0 = $e.isStandardBrowserEnv
	? (function () {
			return {
				write: function (n, r, i, o, s, l) {
					const u = [];
					u.push(n + "=" + encodeURIComponent(r)),
						w.isNumber(i) &&
							u.push(
								"expires=" + new Date(i).toGMTString()
							),
						w.isString(o) && u.push("path=" + o),
						w.isString(s) && u.push("domain=" + s),
						l === !0 && u.push("secure"),
						(document.cookie = u.join("; "));
				},
				read: function (n) {
					const r = document.cookie.match(
						new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
					);
					return r ? decodeURIComponent(r[3]) : null;
				},
				remove: function (n) {
					this.write(n, "", Date.now() - 864e5);
				},
			};
	  })()
	: (function () {
			return {
				write: function () {},
				read: function () {
					return null;
				},
				remove: function () {},
			};
	  })();
function P0(e) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function T0(e, t) {
	return t
		? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
		: e;
}
function $d(e, t) {
	return e && !P0(t) ? T0(e, t) : t;
}
const L0 = $e.isStandardBrowserEnv
	? (function () {
			const t = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement("a");
			let r;
			function i(o) {
				let s = o;
				return (
					t && (n.setAttribute("href", s), (s = n.href)),
					n.setAttribute("href", s),
					{
						href: n.href,
						protocol: n.protocol
							? n.protocol.replace(/:$/, "")
							: "",
						host: n.host,
						search: n.search
							? n.search.replace(/^\?/, "")
							: "",
						hash: n.hash ? n.hash.replace(/^#/, "") : "",
						hostname: n.hostname,
						port: n.port,
						pathname:
							n.pathname.charAt(0) === "/"
								? n.pathname
								: "/" + n.pathname,
					}
				);
			}
			return (
				(r = i(window.location.href)),
				function (s) {
					const l = w.isString(s) ? i(s) : s;
					return (
						l.protocol === r.protocol && l.host === r.host
					);
				}
			);
	  })()
	: (function () {
			return function () {
				return !0;
			};
	  })();
function A0(e) {
	const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
	return (t && t[1]) || "";
}
function j0(e, t) {
	e = e || 10;
	const n = new Array(e),
		r = new Array(e);
	let i = 0,
		o = 0,
		s;
	return (
		(t = t !== void 0 ? t : 1e3),
		function (u) {
			const a = Date.now(),
				c = r[o];
			s || (s = a), (n[i] = u), (r[i] = a);
			let d = o,
				h = 0;
			for (; d !== i; ) (h += n[d++]), (d = d % e);
			if (
				((i = (i + 1) % e),
				i === o && (o = (o + 1) % e),
				a - s < t)
			)
				return;
			const g = c && a - c;
			return g ? Math.round((h * 1e3) / g) : void 0;
		}
	);
}
function Ma(e, t) {
	let n = 0;
	const r = j0(50, 250);
	return (i) => {
		const o = i.loaded,
			s = i.lengthComputable ? i.total : void 0,
			l = o - n,
			u = r(l),
			a = o <= s;
		n = o;
		const c = {
			loaded: o,
			total: s,
			progress: s ? o / s : void 0,
			bytes: l,
			rate: u || void 0,
			estimated: u && s && a ? (s - o) / u : void 0,
			event: i,
		};
		(c[t ? "download" : "upload"] = !0), e(c);
	};
}
const z0 = typeof XMLHttpRequest < "u",
	I0 =
		z0 &&
		function (e) {
			return new Promise(function (n, r) {
				let i = e.data;
				const o = ot.from(e.headers).normalize(),
					s = e.responseType;
				let l;
				function u() {
					e.cancelToken && e.cancelToken.unsubscribe(l),
						e.signal &&
							e.signal.removeEventListener("abort", l);
				}
				w.isFormData(i) &&
					($e.isStandardBrowserEnv ||
					$e.isStandardBrowserWebWorkerEnv
						? o.setContentType(!1)
						: o.setContentType("multipart/form-data;", !1));
				let a = new XMLHttpRequest();
				if (e.auth) {
					const g = e.auth.username || "",
						y = e.auth.password
							? unescape(
									encodeURIComponent(e.auth.password)
							  )
							: "";
					o.set(
						"Authorization",
						"Basic " + btoa(g + ":" + y)
					);
				}
				const c = $d(e.baseURL, e.url);
				a.open(
					e.method.toUpperCase(),
					Dd(c, e.params, e.paramsSerializer),
					!0
				),
					(a.timeout = e.timeout);
				function d() {
					if (!a) return;
					const g = ot.from(
							"getAllResponseHeaders" in a &&
								a.getAllResponseHeaders()
						),
						v = {
							data:
								!s || s === "text" || s === "json"
									? a.responseText
									: a.response,
							status: a.status,
							statusText: a.statusText,
							headers: g,
							config: e,
							request: a,
						};
					R0(
						function (p) {
							n(p), u();
						},
						function (p) {
							r(p), u();
						},
						v
					),
						(a = null);
				}
				if (
					("onloadend" in a
						? (a.onloadend = d)
						: (a.onreadystatechange = function () {
								!a ||
									a.readyState !== 4 ||
									(a.status === 0 &&
										!(
											a.responseURL &&
											a.responseURL.indexOf("file:") === 0
										)) ||
									setTimeout(d);
						  }),
					(a.onabort = function () {
						a &&
							(r(
								new B(
									"Request aborted",
									B.ECONNABORTED,
									e,
									a
								)
							),
							(a = null));
					}),
					(a.onerror = function () {
						r(new B("Network Error", B.ERR_NETWORK, e, a)),
							(a = null);
					}),
					(a.ontimeout = function () {
						let y = e.timeout
							? "timeout of " + e.timeout + "ms exceeded"
							: "timeout exceeded";
						const v = e.transitional || Fd;
						e.timeoutErrorMessage &&
							(y = e.timeoutErrorMessage),
							r(
								new B(
									y,
									v.clarifyTimeoutError
										? B.ETIMEDOUT
										: B.ECONNABORTED,
									e,
									a
								)
							),
							(a = null);
					}),
					$e.isStandardBrowserEnv)
				) {
					const g =
						(e.withCredentials || L0(c)) &&
						e.xsrfCookieName &&
						O0.read(e.xsrfCookieName);
					g && o.set(e.xsrfHeaderName, g);
				}
				i === void 0 && o.setContentType(null),
					"setRequestHeader" in a &&
						w.forEach(o.toJSON(), function (y, v) {
							a.setRequestHeader(v, y);
						}),
					w.isUndefined(e.withCredentials) ||
						(a.withCredentials = !!e.withCredentials),
					s &&
						s !== "json" &&
						(a.responseType = e.responseType),
					typeof e.onDownloadProgress == "function" &&
						a.addEventListener(
							"progress",
							Ma(e.onDownloadProgress, !0)
						),
					typeof e.onUploadProgress == "function" &&
						a.upload &&
						a.upload.addEventListener(
							"progress",
							Ma(e.onUploadProgress)
						),
					(e.cancelToken || e.signal) &&
						((l = (g) => {
							a &&
								(r(!g || g.type ? new Ar(null, e, a) : g),
								a.abort(),
								(a = null));
						}),
						e.cancelToken && e.cancelToken.subscribe(l),
						e.signal &&
							(e.signal.aborted
								? l()
								: e.signal.addEventListener("abort", l)));
				const h = A0(c);
				if (h && $e.protocols.indexOf(h) === -1) {
					r(
						new B(
							"Unsupported protocol " + h + ":",
							B.ERR_BAD_REQUEST,
							e
						)
					);
					return;
				}
				a.send(i || null);
			});
		},
	vi = { http: l0, xhr: I0 };
w.forEach(vi, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", { value: t });
		} catch {}
		Object.defineProperty(e, "adapterName", { value: t });
	}
});
const Vd = {
	getAdapter: (e) => {
		e = w.isArray(e) ? e : [e];
		const { length: t } = e;
		let n, r;
		for (
			let i = 0;
			i < t &&
			((n = e[i]),
			!(r = w.isString(n) ? vi[n.toLowerCase()] : n));
			i++
		);
		if (!r)
			throw r === !1
				? new B(
						`Adapter ${n} is not supported by the environment`,
						"ERR_NOT_SUPPORT"
				  )
				: new Error(
						w.hasOwnProp(vi, n)
							? `Adapter '${n}' is not available in the build`
							: `Unknown adapter '${n}'`
				  );
		if (!w.isFunction(r))
			throw new TypeError("adapter is not a function");
		return r;
	},
	adapters: vi,
};
function es(e) {
	if (
		(e.cancelToken && e.cancelToken.throwIfRequested(),
		e.signal && e.signal.aborted)
	)
		throw new Ar(null, e);
}
function $a(e) {
	return (
		es(e),
		(e.headers = ot.from(e.headers)),
		(e.data = Zo.call(e, e.transformRequest)),
		["post", "put", "patch"].indexOf(e.method) !== -1 &&
			e.headers.setContentType(
				"application/x-www-form-urlencoded",
				!1
			),
		Vd.getAdapter(e.adapter || uu.adapter)(e).then(
			function (r) {
				return (
					es(e),
					(r.data = Zo.call(e, e.transformResponse, r)),
					(r.headers = ot.from(r.headers)),
					r
				);
			},
			function (r) {
				return (
					Md(r) ||
						(es(e),
						r &&
							r.response &&
							((r.response.data = Zo.call(
								e,
								e.transformResponse,
								r.response
							)),
							(r.response.headers = ot.from(
								r.response.headers
							)))),
					Promise.reject(r)
				);
			}
		)
	);
}
const Va = (e) => (e instanceof ot ? e.toJSON() : e);
function Rn(e, t) {
	t = t || {};
	const n = {};
	function r(a, c, d) {
		return w.isPlainObject(a) && w.isPlainObject(c)
			? w.merge.call({ caseless: d }, a, c)
			: w.isPlainObject(c)
			? w.merge({}, c)
			: w.isArray(c)
			? c.slice()
			: c;
	}
	function i(a, c, d) {
		if (w.isUndefined(c)) {
			if (!w.isUndefined(a)) return r(void 0, a, d);
		} else return r(a, c, d);
	}
	function o(a, c) {
		if (!w.isUndefined(c)) return r(void 0, c);
	}
	function s(a, c) {
		if (w.isUndefined(c)) {
			if (!w.isUndefined(a)) return r(void 0, a);
		} else return r(void 0, c);
	}
	function l(a, c, d) {
		if (d in t) return r(a, c);
		if (d in e) return r(void 0, a);
	}
	const u = {
		url: o,
		method: o,
		data: o,
		baseURL: s,
		transformRequest: s,
		transformResponse: s,
		paramsSerializer: s,
		timeout: s,
		timeoutMessage: s,
		withCredentials: s,
		adapter: s,
		responseType: s,
		xsrfCookieName: s,
		xsrfHeaderName: s,
		onUploadProgress: s,
		onDownloadProgress: s,
		decompress: s,
		maxContentLength: s,
		maxBodyLength: s,
		beforeRedirect: s,
		transport: s,
		httpAgent: s,
		httpsAgent: s,
		cancelToken: s,
		socketPath: s,
		responseEncoding: s,
		validateStatus: l,
		headers: (a, c) => i(Va(a), Va(c), !0),
	};
	return (
		w.forEach(
			Object.keys(Object.assign({}, e, t)),
			function (c) {
				const d = u[c] || i,
					h = d(e[c], t[c], c);
				(w.isUndefined(h) && d !== l) || (n[c] = h);
			}
		),
		n
	);
}
const Hd = "1.5.0",
	au = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol",
].forEach((e, t) => {
	au[e] = function (r) {
		return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
const Ha = {};
au.transitional = function (t, n, r) {
	function i(o, s) {
		return (
			"[Axios v" +
			Hd +
			"] Transitional option '" +
			o +
			"'" +
			s +
			(r ? ". " + r : "")
		);
	}
	return (o, s, l) => {
		if (t === !1)
			throw new B(
				i(s, " has been removed" + (n ? " in " + n : "")),
				B.ERR_DEPRECATED
			);
		return (
			n &&
				!Ha[s] &&
				((Ha[s] = !0),
				console.warn(
					i(
						s,
						" has been deprecated since v" +
							n +
							" and will be removed in the near future"
					)
				)),
			t ? t(o, s, l) : !0
		);
	};
};
function B0(e, t, n) {
	if (typeof e != "object")
		throw new B(
			"options must be an object",
			B.ERR_BAD_OPTION_VALUE
		);
	const r = Object.keys(e);
	let i = r.length;
	for (; i-- > 0; ) {
		const o = r[i],
			s = t[o];
		if (s) {
			const l = e[o],
				u = l === void 0 || s(l, o, e);
			if (u !== !0)
				throw new B(
					"option " + o + " must be " + u,
					B.ERR_BAD_OPTION_VALUE
				);
			continue;
		}
		if (n !== !0)
			throw new B("Unknown option " + o, B.ERR_BAD_OPTION);
	}
}
const el = { assertOptions: B0, validators: au },
	pt = el.validators;
class Ji {
	constructor(t) {
		(this.defaults = t),
			(this.interceptors = {
				request: new Fa(),
				response: new Fa(),
			});
	}
	request(t, n) {
		typeof t == "string"
			? ((n = n || {}), (n.url = t))
			: (n = t || {}),
			(n = Rn(this.defaults, n));
		const {
			transitional: r,
			paramsSerializer: i,
			headers: o,
		} = n;
		r !== void 0 &&
			el.assertOptions(
				r,
				{
					silentJSONParsing: pt.transitional(pt.boolean),
					forcedJSONParsing: pt.transitional(pt.boolean),
					clarifyTimeoutError: pt.transitional(pt.boolean),
				},
				!1
			),
			i != null &&
				(w.isFunction(i)
					? (n.paramsSerializer = { serialize: i })
					: el.assertOptions(
							i,
							{
								encode: pt.function,
								serialize: pt.function,
							},
							!0
					  )),
			(n.method = (
				n.method ||
				this.defaults.method ||
				"get"
			).toLowerCase());
		let s = o && w.merge(o.common, o[n.method]);
		o &&
			w.forEach(
				[
					"delete",
					"get",
					"head",
					"post",
					"put",
					"patch",
					"common",
				],
				(y) => {
					delete o[y];
				}
			),
			(n.headers = ot.concat(s, o));
		const l = [];
		let u = !0;
		this.interceptors.request.forEach(function (v) {
			(typeof v.runWhen == "function" &&
				v.runWhen(n) === !1) ||
				((u = u && v.synchronous),
				l.unshift(v.fulfilled, v.rejected));
		});
		const a = [];
		this.interceptors.response.forEach(function (v) {
			a.push(v.fulfilled, v.rejected);
		});
		let c,
			d = 0,
			h;
		if (!u) {
			const y = [$a.bind(this), void 0];
			for (
				y.unshift.apply(y, l),
					y.push.apply(y, a),
					h = y.length,
					c = Promise.resolve(n);
				d < h;

			)
				c = c.then(y[d++], y[d++]);
			return c;
		}
		h = l.length;
		let g = n;
		for (d = 0; d < h; ) {
			const y = l[d++],
				v = l[d++];
			try {
				g = y(g);
			} catch (N) {
				v.call(this, N);
				break;
			}
		}
		try {
			c = $a.call(this, g);
		} catch (y) {
			return Promise.reject(y);
		}
		for (d = 0, h = a.length; d < h; )
			c = c.then(a[d++], a[d++]);
		return c;
	}
	getUri(t) {
		t = Rn(this.defaults, t);
		const n = $d(t.baseURL, t.url);
		return Dd(n, t.params, t.paramsSerializer);
	}
}
w.forEach(
	["delete", "get", "head", "options"],
	function (t) {
		Ji.prototype[t] = function (n, r) {
			return this.request(
				Rn(r || {}, {
					method: t,
					url: n,
					data: (r || {}).data,
				})
			);
		};
	}
);
w.forEach(["post", "put", "patch"], function (t) {
	function n(r) {
		return function (o, s, l) {
			return this.request(
				Rn(l || {}, {
					method: t,
					headers: r
						? { "Content-Type": "multipart/form-data" }
						: {},
					url: o,
					data: s,
				})
			);
		};
	}
	(Ji.prototype[t] = n()),
		(Ji.prototype[t + "Form"] = n(!0));
});
const wi = Ji;
class cu {
	constructor(t) {
		if (typeof t != "function")
			throw new TypeError("executor must be a function.");
		let n;
		this.promise = new Promise(function (o) {
			n = o;
		});
		const r = this;
		this.promise.then((i) => {
			if (!r._listeners) return;
			let o = r._listeners.length;
			for (; o-- > 0; ) r._listeners[o](i);
			r._listeners = null;
		}),
			(this.promise.then = (i) => {
				let o;
				const s = new Promise((l) => {
					r.subscribe(l), (o = l);
				}).then(i);
				return (
					(s.cancel = function () {
						r.unsubscribe(o);
					}),
					s
				);
			}),
			t(function (o, s, l) {
				r.reason ||
					((r.reason = new Ar(o, s, l)), n(r.reason));
			});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(t) {
		if (this.reason) {
			t(this.reason);
			return;
		}
		this._listeners
			? this._listeners.push(t)
			: (this._listeners = [t]);
	}
	unsubscribe(t) {
		if (!this._listeners) return;
		const n = this._listeners.indexOf(t);
		n !== -1 && this._listeners.splice(n, 1);
	}
	static source() {
		let t;
		return {
			token: new cu(function (i) {
				t = i;
			}),
			cancel: t,
		};
	}
}
const D0 = cu;
function F0(e) {
	return function (n) {
		return e.apply(null, n);
	};
}
function U0(e) {
	return w.isObject(e) && e.isAxiosError === !0;
}
const tl = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
};
Object.entries(tl).forEach(([e, t]) => {
	tl[t] = e;
});
const M0 = tl;
function Wd(e) {
	const t = new wi(e),
		n = _d(wi.prototype.request, t);
	return (
		w.extend(n, wi.prototype, t, { allOwnKeys: !0 }),
		w.extend(n, t, null, { allOwnKeys: !0 }),
		(n.create = function (i) {
			return Wd(Rn(e, i));
		}),
		n
	);
}
const G = Wd(uu);
G.Axios = wi;
G.CanceledError = Ar;
G.CancelToken = D0;
G.isCancel = Md;
G.VERSION = Hd;
G.toFormData = vo;
G.AxiosError = B;
G.Cancel = G.CanceledError;
G.all = function (t) {
	return Promise.all(t);
};
G.spread = F0;
G.isAxiosError = U0;
G.mergeConfig = Rn;
G.AxiosHeaders = ot;
G.formToJSON = (e) =>
	Ud(w.isHTMLForm(e) ? new FormData(e) : e);
G.getAdapter = Vd.getAdapter;
G.HttpStatusCode = M0;
G.default = G;
const ct = G,
	$0 = () => {
		const [e, t] = k.useState(!1),
			[n, r] = k.useState(!1),
			i = iu(),
			o = k.useRef(null),
			s = k.useRef(null),
			l = k.useRef(null),
			u = async (c) => {
				try {
					if (e) {
						r(!0);
						const d = await ct.post(
							"https://brainstormebackend.onrender.com/users/login",
							c
						);
						r(!1),
							localStorage.setItem(
								"token",
								JSON.stringify(d.data.token)
							),
							i("/lobby");
					} else {
						r(!0);
						const d = await ct.post(
							"https://brainstormebackend.onrender.com/users/signup",
							c
						);
						r(!1), t(!0);
					}
				} catch (d) {
					console.log(d), r(!1);
				}
			},
			a = async (c) => {
				c.preventDefault();
				let d = {},
					h = {};
				e ||
					(d = {
						name: o.current.value,
						email: s.current.value,
						password: l.current.value,
					}),
					e &&
						(h = {
							email: s.current.value,
							password: l.current.value,
						}),
					u(e ? h : d);
			};
		return x.jsxs("div", {
			className: "mt-[30px] flex flex-col items-center ",
			children: [
				x.jsx("p", {
					className:
						" text-6xl my-4 font-varela text-center",
					children: "Unlock the World of Quizzes",
				}),
				x.jsx("div", {
					className:
						"  p-7 bg-gradient-to-r from-cyan-600 to-blue-500 ... ",
					children: x.jsxs("div", {
						className:
							" bg-white p-5 flex flex-col justify-evenly",
						children: [
							x.jsxs("form", {
								className:
									"  min-h-[400px] flex flex-col justify-evenly md:min-h-[500px] md:min-w-[400px]",
								action: "",
								onSubmit: a,
								children: [
									x.jsx("p", {
										className:
											"font-quicksand text-4xl font-bold tracking-[4px]",
										children: e ? "Login" : "SignUp",
									}),
									!e &&
										x.jsxs("div", {
											className: "flex flex-col  py-3 ",
											children: [
												x.jsx("label", {
													children: "Name",
												}),
												x.jsx("input", {
													ref: o,
													className:
														"text-center border-b-4 p-2 border-gray-400",
													type: "text",
													required: !0,
												}),
											],
										}),
									x.jsxs("div", {
										className: "flex flex-col py-3",
										children: [
											x.jsx("label", {
												children: "Email :",
											}),
											x.jsx("input", {
												ref: s,
												className:
													"text-center border-b-4 p-2 border-gray-400",
												type: "email",
												required: !0,
											}),
										],
									}),
									x.jsxs("div", {
										className: "flex flex-col py-3",
										children: [
											x.jsx("label", {
												children: "Password",
											}),
											x.jsx("input", {
												ref: l,
												className:
													" text-center border-b-4 p-2 border-gray-400",
												type: "password",
												required: !0,
											}),
										],
									}),
									!n &&
										x.jsx("button", {
											className:
												"bg-cyan-500 rounded-md hover:bg-blue-600 duration-700 text-white text-2xl p-2 text-center",
											children: e ? "login" : "signUp ",
										}),
									n &&
										x.jsx("button", {
											className:
												"bg-cyan-500 rounded-md hover:bg-blue-600 duration-700 text-white text-2xl p-2 text-center",
											children: "sending Req",
										}),
								],
							}),
							x.jsx("div", {
								className:
									"text-2xl p-2 text-center font-QuickSand ",
								onClick: () => t((c) => !c),
								children: x.jsxs("button", {
									children: [
										e ? "New User??" : "Already a member??",
										x.jsx("p", { children: "Click Here" }),
									],
								}),
							}),
						],
					}),
				}),
			],
		});
	};
var qd = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0,
	},
	Wa = rt.createContext && rt.createContext(qd),
	Pt =
		(globalThis && globalThis.__assign) ||
		function () {
			return (
				(Pt =
					Object.assign ||
					function (e) {
						for (
							var t, n = 1, r = arguments.length;
							n < r;
							n++
						) {
							t = arguments[n];
							for (var i in t)
								Object.prototype.hasOwnProperty.call(
									t,
									i
								) && (e[i] = t[i]);
						}
						return e;
					}),
				Pt.apply(this, arguments)
			);
		},
	V0 =
		(globalThis && globalThis.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (
				e != null &&
				typeof Object.getOwnPropertySymbols == "function"
			)
				for (
					var i = 0, r = Object.getOwnPropertySymbols(e);
					i < r.length;
					i++
				)
					t.indexOf(r[i]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(
							e,
							r[i]
						) &&
						(n[r[i]] = e[r[i]]);
			return n;
		};
function Qd(e) {
	return (
		e &&
		e.map(function (t, n) {
			return rt.createElement(
				t.tag,
				Pt({ key: n }, t.attr),
				Qd(t.child)
			);
		})
	);
}
function H0(e) {
	return function (t) {
		return rt.createElement(
			W0,
			Pt({ attr: Pt({}, e.attr) }, t),
			Qd(e.child)
		);
	};
}
function W0(e) {
	var t = function (n) {
		var r = e.attr,
			i = e.size,
			o = e.title,
			s = V0(e, ["attr", "size", "title"]),
			l = i || n.size || "1em",
			u;
		return (
			n.className && (u = n.className),
			e.className && (u = (u ? u + " " : "") + e.className),
			rt.createElement(
				"svg",
				Pt(
					{
						stroke: "currentColor",
						fill: "currentColor",
						strokeWidth: "0",
					},
					n.attr,
					r,
					s,
					{
						className: u,
						style: Pt(
							Pt({ color: e.color || n.color }, n.style),
							e.style
						),
						height: l,
						width: l,
						xmlns: "http://www.w3.org/2000/svg",
					}
				),
				o && rt.createElement("title", null, o),
				e.children
			)
		);
	};
	return Wa !== void 0
		? rt.createElement(Wa.Consumer, null, function (n) {
				return t(n);
		  })
		: t(qd);
}
function q0(e) {
	return H0({
		tag: "svg",
		attr: {
			viewBox: "0 0 1024 1024",
			fill: "currentColor",
			fillRule: "evenodd",
		},
		child: [
			{
				tag: "path",
				attr: {
					d: "M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z",
				},
			},
		],
	})(e);
}
const jr = rt.createContext(),
	Q0 = (e) => {
		const [t, n] = k.useState([]),
			[r, i] = k.useState([]);
		let o = {
			rooms: t,
			setRooms: n,
			questions: r,
			setQuestions: i,
		};
		return x.jsx(jr.Provider, {
			value: o,
			children: e.children,
		});
	},
	Xe = Object.create(null);
Xe.open = "0";
Xe.close = "1";
Xe.ping = "2";
Xe.pong = "3";
Xe.message = "4";
Xe.upgrade = "5";
Xe.noop = "6";
const Si = Object.create(null);
Object.keys(Xe).forEach((e) => {
	Si[Xe[e]] = e;
});
const nl = { type: "error", data: "parser error" },
	Kd =
		typeof Blob == "function" ||
		(typeof Blob < "u" &&
			Object.prototype.toString.call(Blob) ===
				"[object BlobConstructor]"),
	Jd = typeof ArrayBuffer == "function",
	bd = (e) =>
		typeof ArrayBuffer.isView == "function"
			? ArrayBuffer.isView(e)
			: e && e.buffer instanceof ArrayBuffer,
	fu = ({ type: e, data: t }, n, r) =>
		Kd && t instanceof Blob
			? n
				? r(t)
				: qa(t, r)
			: Jd && (t instanceof ArrayBuffer || bd(t))
			? n
				? r(t)
				: qa(new Blob([t]), r)
			: r(Xe[e] + (t || "")),
	qa = (e, t) => {
		const n = new FileReader();
		return (
			(n.onload = function () {
				const r = n.result.split(",")[1];
				t("b" + (r || ""));
			}),
			n.readAsDataURL(e)
		);
	};
function Qa(e) {
	return e instanceof Uint8Array
		? e
		: e instanceof ArrayBuffer
		? new Uint8Array(e)
		: new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let ts;
function K0(e, t) {
	if (Kd && e.data instanceof Blob)
		return e.data.arrayBuffer().then(Qa).then(t);
	if (Jd && (e.data instanceof ArrayBuffer || bd(e.data)))
		return t(Qa(e.data));
	fu(e, !1, (n) => {
		ts || (ts = new TextEncoder()), t(ts.encode(n));
	});
}
const Ka =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
	Xn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Ka.length; e++)
	Xn[Ka.charCodeAt(e)] = e;
const J0 = (e) => {
		let t = e.length * 0.75,
			n = e.length,
			r,
			i = 0,
			o,
			s,
			l,
			u;
		e[e.length - 1] === "=" &&
			(t--, e[e.length - 2] === "=" && t--);
		const a = new ArrayBuffer(t),
			c = new Uint8Array(a);
		for (r = 0; r < n; r += 4)
			(o = Xn[e.charCodeAt(r)]),
				(s = Xn[e.charCodeAt(r + 1)]),
				(l = Xn[e.charCodeAt(r + 2)]),
				(u = Xn[e.charCodeAt(r + 3)]),
				(c[i++] = (o << 2) | (s >> 4)),
				(c[i++] = ((s & 15) << 4) | (l >> 2)),
				(c[i++] = ((l & 3) << 6) | (u & 63));
		return a;
	},
	b0 = typeof ArrayBuffer == "function",
	du = (e, t) => {
		if (typeof e != "string")
			return { type: "message", data: Yd(e, t) };
		const n = e.charAt(0);
		return n === "b"
			? { type: "message", data: Y0(e.substring(1), t) }
			: Si[n]
			? e.length > 1
				? { type: Si[n], data: e.substring(1) }
				: { type: Si[n] }
			: nl;
	},
	Y0 = (e, t) => {
		if (b0) {
			const n = J0(e);
			return Yd(n, t);
		} else return { base64: !0, data: e };
	},
	Yd = (e, t) => {
		switch (t) {
			case "blob":
				return e instanceof Blob ? e : new Blob([e]);
			case "arraybuffer":
			default:
				return e instanceof ArrayBuffer ? e : e.buffer;
		}
	},
	Xd = String.fromCharCode(30),
	X0 = (e, t) => {
		const n = e.length,
			r = new Array(n);
		let i = 0;
		e.forEach((o, s) => {
			fu(o, !1, (l) => {
				(r[s] = l), ++i === n && t(r.join(Xd));
			});
		});
	},
	G0 = (e, t) => {
		const n = e.split(Xd),
			r = [];
		for (let i = 0; i < n.length; i++) {
			const o = du(n[i], t);
			if ((r.push(o), o.type === "error")) break;
		}
		return r;
	};
function Z0() {
	return new TransformStream({
		transform(e, t) {
			K0(e, (n) => {
				const r = n.length;
				let i;
				if (r < 126)
					(i = new Uint8Array(1)),
						new DataView(i.buffer).setUint8(0, r);
				else if (r < 65536) {
					i = new Uint8Array(3);
					const o = new DataView(i.buffer);
					o.setUint8(0, 126), o.setUint16(1, r);
				} else {
					i = new Uint8Array(9);
					const o = new DataView(i.buffer);
					o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
				}
				e.data &&
					typeof e.data != "string" &&
					(i[0] |= 128),
					t.enqueue(i),
					t.enqueue(n);
			});
		},
	});
}
let ns;
function Zr(e) {
	return e.reduce((t, n) => t + n.length, 0);
}
function ei(e, t) {
	if (e[0].length === t) return e.shift();
	const n = new Uint8Array(t);
	let r = 0;
	for (let i = 0; i < t; i++)
		(n[i] = e[0][r++]),
			r === e[0].length && (e.shift(), (r = 0));
	return (
		e.length && r < e[0].length && (e[0] = e[0].slice(r)), n
	);
}
function eg(e, t) {
	ns || (ns = new TextDecoder());
	const n = [];
	let r = 0,
		i = -1,
		o = !1;
	return new TransformStream({
		transform(s, l) {
			for (n.push(s); ; ) {
				if (r === 0) {
					if (Zr(n) < 1) break;
					const u = ei(n, 1);
					(o = (u[0] & 128) === 128),
						(i = u[0] & 127),
						i < 126
							? (r = 3)
							: i === 126
							? (r = 1)
							: (r = 2);
				} else if (r === 1) {
					if (Zr(n) < 2) break;
					const u = ei(n, 2);
					(i = new DataView(
						u.buffer,
						u.byteOffset,
						u.length
					).getUint16(0)),
						(r = 3);
				} else if (r === 2) {
					if (Zr(n) < 8) break;
					const u = ei(n, 8),
						a = new DataView(
							u.buffer,
							u.byteOffset,
							u.length
						),
						c = a.getUint32(0);
					if (c > Math.pow(2, 53 - 32) - 1) {
						l.enqueue(nl);
						break;
					}
					(i = c * Math.pow(2, 32) + a.getUint32(4)),
						(r = 3);
				} else {
					if (Zr(n) < i) break;
					const u = ei(n, i);
					l.enqueue(du(o ? u : ns.decode(u), t)), (r = 0);
				}
				if (i === 0 || i > e) {
					l.enqueue(nl);
					break;
				}
			}
		},
	});
}
const Gd = 4;
function X(e) {
	if (e) return tg(e);
}
function tg(e) {
	for (var t in X.prototype) e[t] = X.prototype[t];
	return e;
}
X.prototype.on = X.prototype.addEventListener = function (
	e,
	t
) {
	return (
		(this._callbacks = this._callbacks || {}),
		(this._callbacks["$" + e] =
			this._callbacks["$" + e] || []).push(t),
		this
	);
};
X.prototype.once = function (e, t) {
	function n() {
		this.off(e, n), t.apply(this, arguments);
	}
	return (n.fn = t), this.on(e, n), this;
};
X.prototype.off =
	X.prototype.removeListener =
	X.prototype.removeAllListeners =
	X.prototype.removeEventListener =
		function (e, t) {
			if (
				((this._callbacks = this._callbacks || {}),
				arguments.length == 0)
			)
				return (this._callbacks = {}), this;
			var n = this._callbacks["$" + e];
			if (!n) return this;
			if (arguments.length == 1)
				return delete this._callbacks["$" + e], this;
			for (var r, i = 0; i < n.length; i++)
				if (((r = n[i]), r === t || r.fn === t)) {
					n.splice(i, 1);
					break;
				}
			return (
				n.length === 0 && delete this._callbacks["$" + e],
				this
			);
		};
X.prototype.emit = function (e) {
	this._callbacks = this._callbacks || {};
	for (
		var t = new Array(arguments.length - 1),
			n = this._callbacks["$" + e],
			r = 1;
		r < arguments.length;
		r++
	)
		t[r - 1] = arguments[r];
	if (n) {
		n = n.slice(0);
		for (var r = 0, i = n.length; r < i; ++r)
			n[r].apply(this, t);
	}
	return this;
};
X.prototype.emitReserved = X.prototype.emit;
X.prototype.listeners = function (e) {
	return (
		(this._callbacks = this._callbacks || {}),
		this._callbacks["$" + e] || []
	);
};
X.prototype.hasListeners = function (e) {
	return !!this.listeners(e).length;
};
const Pe = (() =>
	typeof self < "u"
		? self
		: typeof window < "u"
		? window
		: Function("return this")())();
function Zd(e, ...t) {
	return t.reduce(
		(n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n),
		{}
	);
}
const ng = Pe.setTimeout,
	rg = Pe.clearTimeout;
function So(e, t) {
	t.useNativeTimers
		? ((e.setTimeoutFn = ng.bind(Pe)),
		  (e.clearTimeoutFn = rg.bind(Pe)))
		: ((e.setTimeoutFn = Pe.setTimeout.bind(Pe)),
		  (e.clearTimeoutFn = Pe.clearTimeout.bind(Pe)));
}
const ig = 1.33;
function og(e) {
	return typeof e == "string"
		? sg(e)
		: Math.ceil((e.byteLength || e.size) * ig);
}
function sg(e) {
	let t = 0,
		n = 0;
	for (let r = 0, i = e.length; r < i; r++)
		(t = e.charCodeAt(r)),
			t < 128
				? (n += 1)
				: t < 2048
				? (n += 2)
				: t < 55296 || t >= 57344
				? (n += 3)
				: (r++, (n += 4));
	return n;
}
function lg(e) {
	let t = "";
	for (let n in e)
		e.hasOwnProperty(n) &&
			(t.length && (t += "&"),
			(t +=
				encodeURIComponent(n) +
				"=" +
				encodeURIComponent(e[n])));
	return t;
}
function ug(e) {
	let t = {},
		n = e.split("&");
	for (let r = 0, i = n.length; r < i; r++) {
		let o = n[r].split("=");
		t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
	}
	return t;
}
class ag extends Error {
	constructor(t, n, r) {
		super(t),
			(this.description = n),
			(this.context = r),
			(this.type = "TransportError");
	}
}
class pu extends X {
	constructor(t) {
		super(),
			(this.writable = !1),
			So(this, t),
			(this.opts = t),
			(this.query = t.query),
			(this.socket = t.socket);
	}
	onError(t, n, r) {
		return (
			super.emitReserved("error", new ag(t, n, r)), this
		);
	}
	open() {
		return (
			(this.readyState = "opening"), this.doOpen(), this
		);
	}
	close() {
		return (
			(this.readyState === "opening" ||
				this.readyState === "open") &&
				(this.doClose(), this.onClose()),
			this
		);
	}
	send(t) {
		this.readyState === "open" && this.write(t);
	}
	onOpen() {
		(this.readyState = "open"),
			(this.writable = !0),
			super.emitReserved("open");
	}
	onData(t) {
		const n = du(t, this.socket.binaryType);
		this.onPacket(n);
	}
	onPacket(t) {
		super.emitReserved("packet", t);
	}
	onClose(t) {
		(this.readyState = "closed"),
			super.emitReserved("close", t);
	}
	pause(t) {}
	createUri(t, n = {}) {
		return (
			t +
			"://" +
			this._hostname() +
			this._port() +
			this.opts.path +
			this._query(n)
		);
	}
	_hostname() {
		const t = this.opts.hostname;
		return t.indexOf(":") === -1 ? t : "[" + t + "]";
	}
	_port() {
		return this.opts.port &&
			((this.opts.secure && +(this.opts.port !== 443)) ||
				(!this.opts.secure &&
					Number(this.opts.port) !== 80))
			? ":" + this.opts.port
			: "";
	}
	_query(t) {
		const n = lg(t);
		return n.length ? "?" + n : "";
	}
}
const ep =
		"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
			""
		),
	rl = 64,
	cg = {};
let Ja = 0,
	ti = 0,
	ba;
function Ya(e) {
	let t = "";
	do (t = ep[e % rl] + t), (e = Math.floor(e / rl));
	while (e > 0);
	return t;
}
function tp() {
	const e = Ya(+new Date());
	return e !== ba
		? ((Ja = 0), (ba = e))
		: e + "." + Ya(Ja++);
}
for (; ti < rl; ti++) cg[ep[ti]] = ti;
let np = !1;
try {
	np =
		typeof XMLHttpRequest < "u" &&
		"withCredentials" in new XMLHttpRequest();
} catch {}
const fg = np;
function rp(e) {
	const t = e.xdomain;
	try {
		if (typeof XMLHttpRequest < "u" && (!t || fg))
			return new XMLHttpRequest();
	} catch {}
	if (!t)
		try {
			return new Pe[["Active"].concat("Object").join("X")](
				"Microsoft.XMLHTTP"
			);
		} catch {}
}
function dg() {}
const pg = (function () {
	return new rp({ xdomain: !1 }).responseType != null;
})();
class hg extends pu {
	constructor(t) {
		if (
			(super(t), (this.polling = !1), typeof location < "u")
		) {
			const r = location.protocol === "https:";
			let i = location.port;
			i || (i = r ? "443" : "80"),
				(this.xd =
					(typeof location < "u" &&
						t.hostname !== location.hostname) ||
					i !== t.port);
		}
		const n = t && t.forceBase64;
		(this.supportsBinary = pg && !n),
			this.opts.withCredentials &&
				(this.cookieJar = void 0);
	}
	get name() {
		return "polling";
	}
	doOpen() {
		this.poll();
	}
	pause(t) {
		this.readyState = "pausing";
		const n = () => {
			(this.readyState = "paused"), t();
		};
		if (this.polling || !this.writable) {
			let r = 0;
			this.polling &&
				(r++,
				this.once("pollComplete", function () {
					--r || n();
				})),
				this.writable ||
					(r++,
					this.once("drain", function () {
						--r || n();
					}));
		} else n();
	}
	poll() {
		(this.polling = !0),
			this.doPoll(),
			this.emitReserved("poll");
	}
	onData(t) {
		const n = (r) => {
			if (
				(this.readyState === "opening" &&
					r.type === "open" &&
					this.onOpen(),
				r.type === "close")
			)
				return (
					this.onClose({
						description: "transport closed by the server",
					}),
					!1
				);
			this.onPacket(r);
		};
		G0(t, this.socket.binaryType).forEach(n),
			this.readyState !== "closed" &&
				((this.polling = !1),
				this.emitReserved("pollComplete"),
				this.readyState === "open" && this.poll());
	}
	doClose() {
		const t = () => {
			this.write([{ type: "close" }]);
		};
		this.readyState === "open" ? t() : this.once("open", t);
	}
	write(t) {
		(this.writable = !1),
			X0(t, (n) => {
				this.doWrite(n, () => {
					(this.writable = !0), this.emitReserved("drain");
				});
			});
	}
	uri() {
		const t = this.opts.secure ? "https" : "http",
			n = this.query || {};
		return (
			this.opts.timestampRequests !== !1 &&
				(n[this.opts.timestampParam] = tp()),
			!this.supportsBinary && !n.sid && (n.b64 = 1),
			this.createUri(t, n)
		);
	}
	request(t = {}) {
		return (
			Object.assign(
				t,
				{ xd: this.xd, cookieJar: this.cookieJar },
				this.opts
			),
			new Ye(this.uri(), t)
		);
	}
	doWrite(t, n) {
		const r = this.request({ method: "POST", data: t });
		r.on("success", n),
			r.on("error", (i, o) => {
				this.onError("xhr post error", i, o);
			});
	}
	doPoll() {
		const t = this.request();
		t.on("data", this.onData.bind(this)),
			t.on("error", (n, r) => {
				this.onError("xhr poll error", n, r);
			}),
			(this.pollXhr = t);
	}
}
class Ye extends X {
	constructor(t, n) {
		super(),
			So(this, n),
			(this.opts = n),
			(this.method = n.method || "GET"),
			(this.uri = t),
			(this.data = n.data !== void 0 ? n.data : null),
			this.create();
	}
	create() {
		var t;
		const n = Zd(
			this.opts,
			"agent",
			"pfx",
			"key",
			"passphrase",
			"cert",
			"ca",
			"ciphers",
			"rejectUnauthorized",
			"autoUnref"
		);
		n.xdomain = !!this.opts.xd;
		const r = (this.xhr = new rp(n));
		try {
			r.open(this.method, this.uri, !0);
			try {
				if (this.opts.extraHeaders) {
					r.setDisableHeaderCheck &&
						r.setDisableHeaderCheck(!0);
					for (let i in this.opts.extraHeaders)
						this.opts.extraHeaders.hasOwnProperty(i) &&
							r.setRequestHeader(
								i,
								this.opts.extraHeaders[i]
							);
				}
			} catch {}
			if (this.method === "POST")
				try {
					r.setRequestHeader(
						"Content-type",
						"text/plain;charset=UTF-8"
					);
				} catch {}
			try {
				r.setRequestHeader("Accept", "*/*");
			} catch {}
			(t = this.opts.cookieJar) === null ||
				t === void 0 ||
				t.addCookies(r),
				"withCredentials" in r &&
					(r.withCredentials = this.opts.withCredentials),
				this.opts.requestTimeout &&
					(r.timeout = this.opts.requestTimeout),
				(r.onreadystatechange = () => {
					var i;
					r.readyState === 3 &&
						((i = this.opts.cookieJar) === null ||
							i === void 0 ||
							i.parseCookies(r)),
						r.readyState === 4 &&
							(r.status === 200 || r.status === 1223
								? this.onLoad()
								: this.setTimeoutFn(() => {
										this.onError(
											typeof r.status == "number"
												? r.status
												: 0
										);
								  }, 0));
				}),
				r.send(this.data);
		} catch (i) {
			this.setTimeoutFn(() => {
				this.onError(i);
			}, 0);
			return;
		}
		typeof document < "u" &&
			((this.index = Ye.requestsCount++),
			(Ye.requests[this.index] = this));
	}
	onError(t) {
		this.emitReserved("error", t, this.xhr),
			this.cleanup(!0);
	}
	cleanup(t) {
		if (!(typeof this.xhr > "u" || this.xhr === null)) {
			if (((this.xhr.onreadystatechange = dg), t))
				try {
					this.xhr.abort();
				} catch {}
			typeof document < "u" &&
				delete Ye.requests[this.index],
				(this.xhr = null);
		}
	}
	onLoad() {
		const t = this.xhr.responseText;
		t !== null &&
			(this.emitReserved("data", t),
			this.emitReserved("success"),
			this.cleanup());
	}
	abort() {
		this.cleanup();
	}
}
Ye.requestsCount = 0;
Ye.requests = {};
if (typeof document < "u") {
	if (typeof attachEvent == "function")
		attachEvent("onunload", Xa);
	else if (typeof addEventListener == "function") {
		const e = "onpagehide" in Pe ? "pagehide" : "unload";
		addEventListener(e, Xa, !1);
	}
}
function Xa() {
	for (let e in Ye.requests)
		Ye.requests.hasOwnProperty(e) && Ye.requests[e].abort();
}
const hu = (() =>
		typeof Promise == "function" &&
		typeof Promise.resolve == "function"
			? (t) => Promise.resolve().then(t)
			: (t, n) => n(t, 0))(),
	ni = Pe.WebSocket || Pe.MozWebSocket,
	Ga = !0,
	mg = "arraybuffer",
	Za =
		typeof navigator < "u" &&
		typeof navigator.product == "string" &&
		navigator.product.toLowerCase() === "reactnative";
class yg extends pu {
	constructor(t) {
		super(t), (this.supportsBinary = !t.forceBase64);
	}
	get name() {
		return "websocket";
	}
	doOpen() {
		if (!this.check()) return;
		const t = this.uri(),
			n = this.opts.protocols,
			r = Za
				? {}
				: Zd(
						this.opts,
						"agent",
						"perMessageDeflate",
						"pfx",
						"key",
						"passphrase",
						"cert",
						"ca",
						"ciphers",
						"rejectUnauthorized",
						"localAddress",
						"protocolVersion",
						"origin",
						"maxPayload",
						"family",
						"checkServerIdentity"
				  );
		this.opts.extraHeaders &&
			(r.headers = this.opts.extraHeaders);
		try {
			this.ws =
				Ga && !Za
					? n
						? new ni(t, n)
						: new ni(t)
					: new ni(t, n, r);
		} catch (i) {
			return this.emitReserved("error", i);
		}
		(this.ws.binaryType = this.socket.binaryType),
			this.addEventListeners();
	}
	addEventListeners() {
		(this.ws.onopen = () => {
			this.opts.autoUnref && this.ws._socket.unref(),
				this.onOpen();
		}),
			(this.ws.onclose = (t) =>
				this.onClose({
					description: "websocket connection closed",
					context: t,
				})),
			(this.ws.onmessage = (t) => this.onData(t.data)),
			(this.ws.onerror = (t) =>
				this.onError("websocket error", t));
	}
	write(t) {
		this.writable = !1;
		for (let n = 0; n < t.length; n++) {
			const r = t[n],
				i = n === t.length - 1;
			fu(r, this.supportsBinary, (o) => {
				const s = {};
				try {
					Ga && this.ws.send(o);
				} catch {}
				i &&
					hu(() => {
						(this.writable = !0),
							this.emitReserved("drain");
					}, this.setTimeoutFn);
			});
		}
	}
	doClose() {
		typeof this.ws < "u" &&
			(this.ws.close(), (this.ws = null));
	}
	uri() {
		const t = this.opts.secure ? "wss" : "ws",
			n = this.query || {};
		return (
			this.opts.timestampRequests &&
				(n[this.opts.timestampParam] = tp()),
			this.supportsBinary || (n.b64 = 1),
			this.createUri(t, n)
		);
	}
	check() {
		return !!ni;
	}
}
class gg extends pu {
	get name() {
		return "webtransport";
	}
	doOpen() {
		typeof WebTransport == "function" &&
			((this.transport = new WebTransport(
				this.createUri("https"),
				this.opts.transportOptions[this.name]
			)),
			this.transport.closed
				.then(() => {
					this.onClose();
				})
				.catch((t) => {
					this.onError("webtransport error", t);
				}),
			this.transport.ready.then(() => {
				this.transport
					.createBidirectionalStream()
					.then((t) => {
						const n = eg(
								Number.MAX_SAFE_INTEGER,
								this.socket.binaryType
							),
							r = t.readable.pipeThrough(n).getReader(),
							i = Z0();
						i.readable.pipeTo(t.writable),
							(this.writer = i.writable.getWriter());
						const o = () => {
							r.read()
								.then(({ done: l, value: u }) => {
									l || (this.onPacket(u), o());
								})
								.catch((l) => {});
						};
						o();
						const s = { type: "open" };
						this.query.sid &&
							(s.data = `{"sid":"${this.query.sid}"}`),
							this.writer
								.write(s)
								.then(() => this.onOpen());
					});
			}));
	}
	write(t) {
		this.writable = !1;
		for (let n = 0; n < t.length; n++) {
			const r = t[n],
				i = n === t.length - 1;
			this.writer.write(r).then(() => {
				i &&
					hu(() => {
						(this.writable = !0),
							this.emitReserved("drain");
					}, this.setTimeoutFn);
			});
		}
	}
	doClose() {
		var t;
		(t = this.transport) === null ||
			t === void 0 ||
			t.close();
	}
}
const vg = { websocket: yg, webtransport: gg, polling: hg },
	wg =
		/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
	Sg = [
		"source",
		"protocol",
		"authority",
		"userInfo",
		"user",
		"password",
		"host",
		"port",
		"relative",
		"path",
		"directory",
		"file",
		"query",
		"anchor",
	];
function il(e) {
	const t = e,
		n = e.indexOf("["),
		r = e.indexOf("]");
	n != -1 &&
		r != -1 &&
		(e =
			e.substring(0, n) +
			e.substring(n, r).replace(/:/g, ";") +
			e.substring(r, e.length));
	let i = wg.exec(e || ""),
		o = {},
		s = 14;
	for (; s--; ) o[Sg[s]] = i[s] || "";
	return (
		n != -1 &&
			r != -1 &&
			((o.source = t),
			(o.host = o.host
				.substring(1, o.host.length - 1)
				.replace(/;/g, ":")),
			(o.authority = o.authority
				.replace("[", "")
				.replace("]", "")
				.replace(/;/g, ":")),
			(o.ipv6uri = !0)),
		(o.pathNames = Eg(o, o.path)),
		(o.queryKey = xg(o, o.query)),
		o
	);
}
function Eg(e, t) {
	const n = /\/{2,9}/g,
		r = t.replace(n, "/").split("/");
	return (
		(t.slice(0, 1) == "/" || t.length === 0) &&
			r.splice(0, 1),
		t.slice(-1) == "/" && r.splice(r.length - 1, 1),
		r
	);
}
function xg(e, t) {
	const n = {};
	return (
		t.replace(
			/(?:^|&)([^&=]*)=?([^&]*)/g,
			function (r, i, o) {
				i && (n[i] = o);
			}
		),
		n
	);
}
let ip = class Zt extends X {
	constructor(t, n = {}) {
		super(),
			(this.binaryType = mg),
			(this.writeBuffer = []),
			t && typeof t == "object" && ((n = t), (t = null)),
			t
				? ((t = il(t)),
				  (n.hostname = t.host),
				  (n.secure =
						t.protocol === "https" || t.protocol === "wss"),
				  (n.port = t.port),
				  t.query && (n.query = t.query))
				: n.host && (n.hostname = il(n.host).host),
			So(this, n),
			(this.secure =
				n.secure != null
					? n.secure
					: typeof location < "u" &&
					  location.protocol === "https:"),
			n.hostname &&
				!n.port &&
				(n.port = this.secure ? "443" : "80"),
			(this.hostname =
				n.hostname ||
				(typeof location < "u"
					? location.hostname
					: "localhost")),
			(this.port =
				n.port ||
				(typeof location < "u" && location.port
					? location.port
					: this.secure
					? "443"
					: "80")),
			(this.transports = n.transports || [
				"polling",
				"websocket",
				"webtransport",
			]),
			(this.writeBuffer = []),
			(this.prevBufferLen = 0),
			(this.opts = Object.assign(
				{
					path: "/engine.io",
					agent: !1,
					withCredentials: !1,
					upgrade: !0,
					timestampParam: "t",
					rememberUpgrade: !1,
					addTrailingSlash: !0,
					rejectUnauthorized: !0,
					perMessageDeflate: { threshold: 1024 },
					transportOptions: {},
					closeOnBeforeunload: !1,
				},
				n
			)),
			(this.opts.path =
				this.opts.path.replace(/\/$/, "") +
				(this.opts.addTrailingSlash ? "/" : "")),
			typeof this.opts.query == "string" &&
				(this.opts.query = ug(this.opts.query)),
			(this.id = null),
			(this.upgrades = null),
			(this.pingInterval = null),
			(this.pingTimeout = null),
			(this.pingTimeoutTimer = null),
			typeof addEventListener == "function" &&
				(this.opts.closeOnBeforeunload &&
					((this.beforeunloadEventListener = () => {
						this.transport &&
							(this.transport.removeAllListeners(),
							this.transport.close());
					}),
					addEventListener(
						"beforeunload",
						this.beforeunloadEventListener,
						!1
					)),
				this.hostname !== "localhost" &&
					((this.offlineEventListener = () => {
						this.onClose("transport close", {
							description: "network connection lost",
						});
					}),
					addEventListener(
						"offline",
						this.offlineEventListener,
						!1
					))),
			this.open();
	}
	createTransport(t) {
		const n = Object.assign({}, this.opts.query);
		(n.EIO = Gd),
			(n.transport = t),
			this.id && (n.sid = this.id);
		const r = Object.assign(
			{},
			this.opts,
			{
				query: n,
				socket: this,
				hostname: this.hostname,
				secure: this.secure,
				port: this.port,
			},
			this.opts.transportOptions[t]
		);
		return new vg[t](r);
	}
	open() {
		let t;
		if (
			this.opts.rememberUpgrade &&
			Zt.priorWebsocketSuccess &&
			this.transports.indexOf("websocket") !== -1
		)
			t = "websocket";
		else if (this.transports.length === 0) {
			this.setTimeoutFn(() => {
				this.emitReserved(
					"error",
					"No transports available"
				);
			}, 0);
			return;
		} else t = this.transports[0];
		this.readyState = "opening";
		try {
			t = this.createTransport(t);
		} catch {
			this.transports.shift(), this.open();
			return;
		}
		t.open(), this.setTransport(t);
	}
	setTransport(t) {
		this.transport && this.transport.removeAllListeners(),
			(this.transport = t),
			t
				.on("drain", this.onDrain.bind(this))
				.on("packet", this.onPacket.bind(this))
				.on("error", this.onError.bind(this))
				.on("close", (n) =>
					this.onClose("transport close", n)
				);
	}
	probe(t) {
		let n = this.createTransport(t),
			r = !1;
		Zt.priorWebsocketSuccess = !1;
		const i = () => {
			r ||
				(n.send([{ type: "ping", data: "probe" }]),
				n.once("packet", (d) => {
					if (!r)
						if (d.type === "pong" && d.data === "probe") {
							if (
								((this.upgrading = !0),
								this.emitReserved("upgrading", n),
								!n)
							)
								return;
							(Zt.priorWebsocketSuccess =
								n.name === "websocket"),
								this.transport.pause(() => {
									r ||
										(this.readyState !== "closed" &&
											(c(),
											this.setTransport(n),
											n.send([{ type: "upgrade" }]),
											this.emitReserved("upgrade", n),
											(n = null),
											(this.upgrading = !1),
											this.flush()));
								});
						} else {
							const h = new Error("probe error");
							(h.transport = n.name),
								this.emitReserved("upgradeError", h);
						}
				}));
		};
		function o() {
			r || ((r = !0), c(), n.close(), (n = null));
		}
		const s = (d) => {
			const h = new Error("probe error: " + d);
			(h.transport = n.name),
				o(),
				this.emitReserved("upgradeError", h);
		};
		function l() {
			s("transport closed");
		}
		function u() {
			s("socket closed");
		}
		function a(d) {
			n && d.name !== n.name && o();
		}
		const c = () => {
			n.removeListener("open", i),
				n.removeListener("error", s),
				n.removeListener("close", l),
				this.off("close", u),
				this.off("upgrading", a);
		};
		n.once("open", i),
			n.once("error", s),
			n.once("close", l),
			this.once("close", u),
			this.once("upgrading", a),
			this.upgrades.indexOf("webtransport") !== -1 &&
			t !== "webtransport"
				? this.setTimeoutFn(() => {
						r || n.open();
				  }, 200)
				: n.open();
	}
	onOpen() {
		if (
			((this.readyState = "open"),
			(Zt.priorWebsocketSuccess =
				this.transport.name === "websocket"),
			this.emitReserved("open"),
			this.flush(),
			this.readyState === "open" && this.opts.upgrade)
		) {
			let t = 0;
			const n = this.upgrades.length;
			for (; t < n; t++) this.probe(this.upgrades[t]);
		}
	}
	onPacket(t) {
		if (
			this.readyState === "opening" ||
			this.readyState === "open" ||
			this.readyState === "closing"
		)
			switch (
				(this.emitReserved("packet", t),
				this.emitReserved("heartbeat"),
				this.resetPingTimeout(),
				t.type)
			) {
				case "open":
					this.onHandshake(JSON.parse(t.data));
					break;
				case "ping":
					this.sendPacket("pong"),
						this.emitReserved("ping"),
						this.emitReserved("pong");
					break;
				case "error":
					const n = new Error("server error");
					(n.code = t.data), this.onError(n);
					break;
				case "message":
					this.emitReserved("data", t.data),
						this.emitReserved("message", t.data);
					break;
			}
	}
	onHandshake(t) {
		this.emitReserved("handshake", t),
			(this.id = t.sid),
			(this.transport.query.sid = t.sid),
			(this.upgrades = this.filterUpgrades(t.upgrades)),
			(this.pingInterval = t.pingInterval),
			(this.pingTimeout = t.pingTimeout),
			(this.maxPayload = t.maxPayload),
			this.onOpen(),
			this.readyState !== "closed" &&
				this.resetPingTimeout();
	}
	resetPingTimeout() {
		this.clearTimeoutFn(this.pingTimeoutTimer),
			(this.pingTimeoutTimer = this.setTimeoutFn(() => {
				this.onClose("ping timeout");
			}, this.pingInterval + this.pingTimeout)),
			this.opts.autoUnref && this.pingTimeoutTimer.unref();
	}
	onDrain() {
		this.writeBuffer.splice(0, this.prevBufferLen),
			(this.prevBufferLen = 0),
			this.writeBuffer.length === 0
				? this.emitReserved("drain")
				: this.flush();
	}
	flush() {
		if (
			this.readyState !== "closed" &&
			this.transport.writable &&
			!this.upgrading &&
			this.writeBuffer.length
		) {
			const t = this.getWritablePackets();
			this.transport.send(t),
				(this.prevBufferLen = t.length),
				this.emitReserved("flush");
		}
	}
	getWritablePackets() {
		if (
			!(
				this.maxPayload &&
				this.transport.name === "polling" &&
				this.writeBuffer.length > 1
			)
		)
			return this.writeBuffer;
		let n = 1;
		for (let r = 0; r < this.writeBuffer.length; r++) {
			const i = this.writeBuffer[r].data;
			if ((i && (n += og(i)), r > 0 && n > this.maxPayload))
				return this.writeBuffer.slice(0, r);
			n += 2;
		}
		return this.writeBuffer;
	}
	write(t, n, r) {
		return this.sendPacket("message", t, n, r), this;
	}
	send(t, n, r) {
		return this.sendPacket("message", t, n, r), this;
	}
	sendPacket(t, n, r, i) {
		if (
			(typeof n == "function" && ((i = n), (n = void 0)),
			typeof r == "function" && ((i = r), (r = null)),
			this.readyState === "closing" ||
				this.readyState === "closed")
		)
			return;
		(r = r || {}), (r.compress = r.compress !== !1);
		const o = { type: t, data: n, options: r };
		this.emitReserved("packetCreate", o),
			this.writeBuffer.push(o),
			i && this.once("flush", i),
			this.flush();
	}
	close() {
		const t = () => {
				this.onClose("forced close"),
					this.transport.close();
			},
			n = () => {
				this.off("upgrade", n),
					this.off("upgradeError", n),
					t();
			},
			r = () => {
				this.once("upgrade", n),
					this.once("upgradeError", n);
			};
		return (
			(this.readyState === "opening" ||
				this.readyState === "open") &&
				((this.readyState = "closing"),
				this.writeBuffer.length
					? this.once("drain", () => {
							this.upgrading ? r() : t();
					  })
					: this.upgrading
					? r()
					: t()),
			this
		);
	}
	onError(t) {
		(Zt.priorWebsocketSuccess = !1),
			this.emitReserved("error", t),
			this.onClose("transport error", t);
	}
	onClose(t, n) {
		(this.readyState === "opening" ||
			this.readyState === "open" ||
			this.readyState === "closing") &&
			(this.clearTimeoutFn(this.pingTimeoutTimer),
			this.transport.removeAllListeners("close"),
			this.transport.close(),
			this.transport.removeAllListeners(),
			typeof removeEventListener == "function" &&
				(removeEventListener(
					"beforeunload",
					this.beforeunloadEventListener,
					!1
				),
				removeEventListener(
					"offline",
					this.offlineEventListener,
					!1
				)),
			(this.readyState = "closed"),
			(this.id = null),
			this.emitReserved("close", t, n),
			(this.writeBuffer = []),
			(this.prevBufferLen = 0));
	}
	filterUpgrades(t) {
		const n = [];
		let r = 0;
		const i = t.length;
		for (; r < i; r++)
			~this.transports.indexOf(t[r]) && n.push(t[r]);
		return n;
	}
};
ip.protocol = Gd;
function kg(e, t = "", n) {
	let r = e;
	(n = n || (typeof location < "u" && location)),
		e == null && (e = n.protocol + "//" + n.host),
		typeof e == "string" &&
			(e.charAt(0) === "/" &&
				(e.charAt(1) === "/"
					? (e = n.protocol + e)
					: (e = n.host + e)),
			/^(https?|wss?):\/\//.test(e) ||
				(typeof n < "u"
					? (e = n.protocol + "//" + e)
					: (e = "https://" + e)),
			(r = il(e))),
		r.port ||
			(/^(http|ws)$/.test(r.protocol)
				? (r.port = "80")
				: /^(http|ws)s$/.test(r.protocol) &&
				  (r.port = "443")),
		(r.path = r.path || "/");
	const o =
		r.host.indexOf(":") !== -1
			? "[" + r.host + "]"
			: r.host;
	return (
		(r.id = r.protocol + "://" + o + ":" + r.port + t),
		(r.href =
			r.protocol +
			"://" +
			o +
			(n && n.port === r.port ? "" : ":" + r.port)),
		r
	);
}
const Cg = typeof ArrayBuffer == "function",
	_g = (e) =>
		typeof ArrayBuffer.isView == "function"
			? ArrayBuffer.isView(e)
			: e.buffer instanceof ArrayBuffer,
	op = Object.prototype.toString,
	Ng =
		typeof Blob == "function" ||
		(typeof Blob < "u" &&
			op.call(Blob) === "[object BlobConstructor]"),
	Rg =
		typeof File == "function" ||
		(typeof File < "u" &&
			op.call(File) === "[object FileConstructor]");
function mu(e) {
	return (
		(Cg && (e instanceof ArrayBuffer || _g(e))) ||
		(Ng && e instanceof Blob) ||
		(Rg && e instanceof File)
	);
}
function Ei(e, t) {
	if (!e || typeof e != "object") return !1;
	if (Array.isArray(e)) {
		for (let n = 0, r = e.length; n < r; n++)
			if (Ei(e[n])) return !0;
		return !1;
	}
	if (mu(e)) return !0;
	if (
		e.toJSON &&
		typeof e.toJSON == "function" &&
		arguments.length === 1
	)
		return Ei(e.toJSON(), !0);
	for (const n in e)
		if (
			Object.prototype.hasOwnProperty.call(e, n) &&
			Ei(e[n])
		)
			return !0;
	return !1;
}
function Og(e) {
	const t = [],
		n = e.data,
		r = e;
	return (
		(r.data = ol(n, t)),
		(r.attachments = t.length),
		{ packet: r, buffers: t }
	);
}
function ol(e, t) {
	if (!e) return e;
	if (mu(e)) {
		const n = { _placeholder: !0, num: t.length };
		return t.push(e), n;
	} else if (Array.isArray(e)) {
		const n = new Array(e.length);
		for (let r = 0; r < e.length; r++) n[r] = ol(e[r], t);
		return n;
	} else if (typeof e == "object" && !(e instanceof Date)) {
		const n = {};
		for (const r in e)
			Object.prototype.hasOwnProperty.call(e, r) &&
				(n[r] = ol(e[r], t));
		return n;
	}
	return e;
}
function Pg(e, t) {
	return (e.data = sl(e.data, t)), delete e.attachments, e;
}
function sl(e, t) {
	if (!e) return e;
	if (e && e._placeholder === !0) {
		if (
			typeof e.num == "number" &&
			e.num >= 0 &&
			e.num < t.length
		)
			return t[e.num];
		throw new Error("illegal attachments");
	} else if (Array.isArray(e))
		for (let n = 0; n < e.length; n++) e[n] = sl(e[n], t);
	else if (typeof e == "object")
		for (const n in e)
			Object.prototype.hasOwnProperty.call(e, n) &&
				(e[n] = sl(e[n], t));
	return e;
}
const Tg = [
		"connect",
		"connect_error",
		"disconnect",
		"disconnecting",
		"newListener",
		"removeListener",
	],
	Lg = 5;
var I;
(function (e) {
	(e[(e.CONNECT = 0)] = "CONNECT"),
		(e[(e.DISCONNECT = 1)] = "DISCONNECT"),
		(e[(e.EVENT = 2)] = "EVENT"),
		(e[(e.ACK = 3)] = "ACK"),
		(e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
		(e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
		(e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(I || (I = {}));
class Ag {
	constructor(t) {
		this.replacer = t;
	}
	encode(t) {
		return (t.type === I.EVENT || t.type === I.ACK) && Ei(t)
			? this.encodeAsBinary({
					type:
						t.type === I.EVENT
							? I.BINARY_EVENT
							: I.BINARY_ACK,
					nsp: t.nsp,
					data: t.data,
					id: t.id,
			  })
			: [this.encodeAsString(t)];
	}
	encodeAsString(t) {
		let n = "" + t.type;
		return (
			(t.type === I.BINARY_EVENT ||
				t.type === I.BINARY_ACK) &&
				(n += t.attachments + "-"),
			t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
			t.id != null && (n += t.id),
			t.data != null &&
				(n += JSON.stringify(t.data, this.replacer)),
			n
		);
	}
	encodeAsBinary(t) {
		const n = Og(t),
			r = this.encodeAsString(n.packet),
			i = n.buffers;
		return i.unshift(r), i;
	}
}
function ec(e) {
	return (
		Object.prototype.toString.call(e) === "[object Object]"
	);
}
class yu extends X {
	constructor(t) {
		super(), (this.reviver = t);
	}
	add(t) {
		let n;
		if (typeof t == "string") {
			if (this.reconstructor)
				throw new Error(
					"got plaintext data when reconstructing a packet"
				);
			n = this.decodeString(t);
			const r = n.type === I.BINARY_EVENT;
			r || n.type === I.BINARY_ACK
				? ((n.type = r ? I.EVENT : I.ACK),
				  (this.reconstructor = new jg(n)),
				  n.attachments === 0 &&
						super.emitReserved("decoded", n))
				: super.emitReserved("decoded", n);
		} else if (mu(t) || t.base64)
			if (this.reconstructor)
				(n = this.reconstructor.takeBinaryData(t)),
					n &&
						((this.reconstructor = null),
						super.emitReserved("decoded", n));
			else
				throw new Error(
					"got binary data when not reconstructing a packet"
				);
		else throw new Error("Unknown type: " + t);
	}
	decodeString(t) {
		let n = 0;
		const r = { type: Number(t.charAt(0)) };
		if (I[r.type] === void 0)
			throw new Error("unknown packet type " + r.type);
		if (
			r.type === I.BINARY_EVENT ||
			r.type === I.BINARY_ACK
		) {
			const o = n + 1;
			for (; t.charAt(++n) !== "-" && n != t.length; );
			const s = t.substring(o, n);
			if (s != Number(s) || t.charAt(n) !== "-")
				throw new Error("Illegal attachments");
			r.attachments = Number(s);
		}
		if (t.charAt(n + 1) === "/") {
			const o = n + 1;
			for (
				;
				++n && !(t.charAt(n) === "," || n === t.length);

			);
			r.nsp = t.substring(o, n);
		} else r.nsp = "/";
		const i = t.charAt(n + 1);
		if (i !== "" && Number(i) == i) {
			const o = n + 1;
			for (; ++n; ) {
				const s = t.charAt(n);
				if (s == null || Number(s) != s) {
					--n;
					break;
				}
				if (n === t.length) break;
			}
			r.id = Number(t.substring(o, n + 1));
		}
		if (t.charAt(++n)) {
			const o = this.tryParse(t.substr(n));
			if (yu.isPayloadValid(r.type, o)) r.data = o;
			else throw new Error("invalid payload");
		}
		return r;
	}
	tryParse(t) {
		try {
			return JSON.parse(t, this.reviver);
		} catch {
			return !1;
		}
	}
	static isPayloadValid(t, n) {
		switch (t) {
			case I.CONNECT:
				return ec(n);
			case I.DISCONNECT:
				return n === void 0;
			case I.CONNECT_ERROR:
				return typeof n == "string" || ec(n);
			case I.EVENT:
			case I.BINARY_EVENT:
				return (
					Array.isArray(n) &&
					(typeof n[0] == "number" ||
						(typeof n[0] == "string" &&
							Tg.indexOf(n[0]) === -1))
				);
			case I.ACK:
			case I.BINARY_ACK:
				return Array.isArray(n);
		}
	}
	destroy() {
		this.reconstructor &&
			(this.reconstructor.finishedReconstruction(),
			(this.reconstructor = null));
	}
}
class jg {
	constructor(t) {
		(this.packet = t),
			(this.buffers = []),
			(this.reconPack = t);
	}
	takeBinaryData(t) {
		if (
			(this.buffers.push(t),
			this.buffers.length === this.reconPack.attachments)
		) {
			const n = Pg(this.reconPack, this.buffers);
			return this.finishedReconstruction(), n;
		}
		return null;
	}
	finishedReconstruction() {
		(this.reconPack = null), (this.buffers = []);
	}
}
const zg = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			Decoder: yu,
			Encoder: Ag,
			get PacketType() {
				return I;
			},
			protocol: Lg,
		},
		Symbol.toStringTag,
		{ value: "Module" }
	)
);
function Ue(e, t, n) {
	return (
		e.on(t, n),
		function () {
			e.off(t, n);
		}
	);
}
const Ig = Object.freeze({
	connect: 1,
	connect_error: 1,
	disconnect: 1,
	disconnecting: 1,
	newListener: 1,
	removeListener: 1,
});
class sp extends X {
	constructor(t, n, r) {
		super(),
			(this.connected = !1),
			(this.recovered = !1),
			(this.receiveBuffer = []),
			(this.sendBuffer = []),
			(this._queue = []),
			(this._queueSeq = 0),
			(this.ids = 0),
			(this.acks = {}),
			(this.flags = {}),
			(this.io = t),
			(this.nsp = n),
			r && r.auth && (this.auth = r.auth),
			(this._opts = Object.assign({}, r)),
			this.io._autoConnect && this.open();
	}
	get disconnected() {
		return !this.connected;
	}
	subEvents() {
		if (this.subs) return;
		const t = this.io;
		this.subs = [
			Ue(t, "open", this.onopen.bind(this)),
			Ue(t, "packet", this.onpacket.bind(this)),
			Ue(t, "error", this.onerror.bind(this)),
			Ue(t, "close", this.onclose.bind(this)),
		];
	}
	get active() {
		return !!this.subs;
	}
	connect() {
		return this.connected
			? this
			: (this.subEvents(),
			  this.io._reconnecting || this.io.open(),
			  this.io._readyState === "open" && this.onopen(),
			  this);
	}
	open() {
		return this.connect();
	}
	send(...t) {
		return (
			t.unshift("message"), this.emit.apply(this, t), this
		);
	}
	emit(t, ...n) {
		if (Ig.hasOwnProperty(t))
			throw new Error(
				'"' + t.toString() + '" is a reserved event name'
			);
		if (
			(n.unshift(t),
			this._opts.retries &&
				!this.flags.fromQueue &&
				!this.flags.volatile)
		)
			return this._addToQueue(n), this;
		const r = { type: I.EVENT, data: n };
		if (
			((r.options = {}),
			(r.options.compress = this.flags.compress !== !1),
			typeof n[n.length - 1] == "function")
		) {
			const s = this.ids++,
				l = n.pop();
			this._registerAckCallback(s, l), (r.id = s);
		}
		const i =
			this.io.engine &&
			this.io.engine.transport &&
			this.io.engine.transport.writable;
		return (
			(this.flags.volatile && (!i || !this.connected)) ||
				(this.connected
					? (this.notifyOutgoingListeners(r),
					  this.packet(r))
					: this.sendBuffer.push(r)),
			(this.flags = {}),
			this
		);
	}
	_registerAckCallback(t, n) {
		var r;
		const i =
			(r = this.flags.timeout) !== null && r !== void 0
				? r
				: this._opts.ackTimeout;
		if (i === void 0) {
			this.acks[t] = n;
			return;
		}
		const o = this.io.setTimeoutFn(() => {
			delete this.acks[t];
			for (let s = 0; s < this.sendBuffer.length; s++)
				this.sendBuffer[s].id === t &&
					this.sendBuffer.splice(s, 1);
			n.call(this, new Error("operation has timed out"));
		}, i);
		this.acks[t] = (...s) => {
			this.io.clearTimeoutFn(o),
				n.apply(this, [null, ...s]);
		};
	}
	emitWithAck(t, ...n) {
		const r =
			this.flags.timeout !== void 0 ||
			this._opts.ackTimeout !== void 0;
		return new Promise((i, o) => {
			n.push((s, l) => (r ? (s ? o(s) : i(l)) : i(s))),
				this.emit(t, ...n);
		});
	}
	_addToQueue(t) {
		let n;
		typeof t[t.length - 1] == "function" && (n = t.pop());
		const r = {
			id: this._queueSeq++,
			tryCount: 0,
			pending: !1,
			args: t,
			flags: Object.assign({ fromQueue: !0 }, this.flags),
		};
		t.push((i, ...o) =>
			r !== this._queue[0]
				? void 0
				: (i !== null
						? r.tryCount > this._opts.retries &&
						  (this._queue.shift(), n && n(i))
						: (this._queue.shift(), n && n(null, ...o)),
				  (r.pending = !1),
				  this._drainQueue())
		),
			this._queue.push(r),
			this._drainQueue();
	}
	_drainQueue(t = !1) {
		if (!this.connected || this._queue.length === 0) return;
		const n = this._queue[0];
		(n.pending && !t) ||
			((n.pending = !0),
			n.tryCount++,
			(this.flags = n.flags),
			this.emit.apply(this, n.args));
	}
	packet(t) {
		(t.nsp = this.nsp), this.io._packet(t);
	}
	onopen() {
		typeof this.auth == "function"
			? this.auth((t) => {
					this._sendConnectPacket(t);
			  })
			: this._sendConnectPacket(this.auth);
	}
	_sendConnectPacket(t) {
		this.packet({
			type: I.CONNECT,
			data: this._pid
				? Object.assign(
						{ pid: this._pid, offset: this._lastOffset },
						t
				  )
				: t,
		});
	}
	onerror(t) {
		this.connected || this.emitReserved("connect_error", t);
	}
	onclose(t, n) {
		(this.connected = !1),
			delete this.id,
			this.emitReserved("disconnect", t, n);
	}
	onpacket(t) {
		if (t.nsp === this.nsp)
			switch (t.type) {
				case I.CONNECT:
					t.data && t.data.sid
						? this.onconnect(t.data.sid, t.data.pid)
						: this.emitReserved(
								"connect_error",
								new Error(
									"It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
								)
						  );
					break;
				case I.EVENT:
				case I.BINARY_EVENT:
					this.onevent(t);
					break;
				case I.ACK:
				case I.BINARY_ACK:
					this.onack(t);
					break;
				case I.DISCONNECT:
					this.ondisconnect();
					break;
				case I.CONNECT_ERROR:
					this.destroy();
					const r = new Error(t.data.message);
					(r.data = t.data.data),
						this.emitReserved("connect_error", r);
					break;
			}
	}
	onevent(t) {
		const n = t.data || [];
		t.id != null && n.push(this.ack(t.id)),
			this.connected
				? this.emitEvent(n)
				: this.receiveBuffer.push(Object.freeze(n));
	}
	emitEvent(t) {
		if (this._anyListeners && this._anyListeners.length) {
			const n = this._anyListeners.slice();
			for (const r of n) r.apply(this, t);
		}
		super.emit.apply(this, t),
			this._pid &&
				t.length &&
				typeof t[t.length - 1] == "string" &&
				(this._lastOffset = t[t.length - 1]);
	}
	ack(t) {
		const n = this;
		let r = !1;
		return function (...i) {
			r ||
				((r = !0),
				n.packet({ type: I.ACK, id: t, data: i }));
		};
	}
	onack(t) {
		const n = this.acks[t.id];
		typeof n == "function" &&
			(n.apply(this, t.data), delete this.acks[t.id]);
	}
	onconnect(t, n) {
		(this.id = t),
			(this.recovered = n && this._pid === n),
			(this._pid = n),
			(this.connected = !0),
			this.emitBuffered(),
			this.emitReserved("connect"),
			this._drainQueue(!0);
	}
	emitBuffered() {
		this.receiveBuffer.forEach((t) => this.emitEvent(t)),
			(this.receiveBuffer = []),
			this.sendBuffer.forEach((t) => {
				this.notifyOutgoingListeners(t), this.packet(t);
			}),
			(this.sendBuffer = []);
	}
	ondisconnect() {
		this.destroy(), this.onclose("io server disconnect");
	}
	destroy() {
		this.subs &&
			(this.subs.forEach((t) => t()), (this.subs = void 0)),
			this.io._destroy(this);
	}
	disconnect() {
		return (
			this.connected && this.packet({ type: I.DISCONNECT }),
			this.destroy(),
			this.connected &&
				this.onclose("io client disconnect"),
			this
		);
	}
	close() {
		return this.disconnect();
	}
	compress(t) {
		return (this.flags.compress = t), this;
	}
	get volatile() {
		return (this.flags.volatile = !0), this;
	}
	timeout(t) {
		return (this.flags.timeout = t), this;
	}
	onAny(t) {
		return (
			(this._anyListeners = this._anyListeners || []),
			this._anyListeners.push(t),
			this
		);
	}
	prependAny(t) {
		return (
			(this._anyListeners = this._anyListeners || []),
			this._anyListeners.unshift(t),
			this
		);
	}
	offAny(t) {
		if (!this._anyListeners) return this;
		if (t) {
			const n = this._anyListeners;
			for (let r = 0; r < n.length; r++)
				if (t === n[r]) return n.splice(r, 1), this;
		} else this._anyListeners = [];
		return this;
	}
	listenersAny() {
		return this._anyListeners || [];
	}
	onAnyOutgoing(t) {
		return (
			(this._anyOutgoingListeners =
				this._anyOutgoingListeners || []),
			this._anyOutgoingListeners.push(t),
			this
		);
	}
	prependAnyOutgoing(t) {
		return (
			(this._anyOutgoingListeners =
				this._anyOutgoingListeners || []),
			this._anyOutgoingListeners.unshift(t),
			this
		);
	}
	offAnyOutgoing(t) {
		if (!this._anyOutgoingListeners) return this;
		if (t) {
			const n = this._anyOutgoingListeners;
			for (let r = 0; r < n.length; r++)
				if (t === n[r]) return n.splice(r, 1), this;
		} else this._anyOutgoingListeners = [];
		return this;
	}
	listenersAnyOutgoing() {
		return this._anyOutgoingListeners || [];
	}
	notifyOutgoingListeners(t) {
		if (
			this._anyOutgoingListeners &&
			this._anyOutgoingListeners.length
		) {
			const n = this._anyOutgoingListeners.slice();
			for (const r of n) r.apply(this, t.data);
		}
	}
}
function zn(e) {
	(e = e || {}),
		(this.ms = e.min || 100),
		(this.max = e.max || 1e4),
		(this.factor = e.factor || 2),
		(this.jitter =
			e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
		(this.attempts = 0);
}
zn.prototype.duration = function () {
	var e = this.ms * Math.pow(this.factor, this.attempts++);
	if (this.jitter) {
		var t = Math.random(),
			n = Math.floor(t * this.jitter * e);
		e = Math.floor(t * 10) & 1 ? e + n : e - n;
	}
	return Math.min(e, this.max) | 0;
};
zn.prototype.reset = function () {
	this.attempts = 0;
};
zn.prototype.setMin = function (e) {
	this.ms = e;
};
zn.prototype.setMax = function (e) {
	this.max = e;
};
zn.prototype.setJitter = function (e) {
	this.jitter = e;
};
class ll extends X {
	constructor(t, n) {
		var r;
		super(),
			(this.nsps = {}),
			(this.subs = []),
			t && typeof t == "object" && ((n = t), (t = void 0)),
			(n = n || {}),
			(n.path = n.path || "/socket.io"),
			(this.opts = n),
			So(this, n),
			this.reconnection(n.reconnection !== !1),
			this.reconnectionAttempts(
				n.reconnectionAttempts || 1 / 0
			),
			this.reconnectionDelay(n.reconnectionDelay || 1e3),
			this.reconnectionDelayMax(
				n.reconnectionDelayMax || 5e3
			),
			this.randomizationFactor(
				(r = n.randomizationFactor) !== null && r !== void 0
					? r
					: 0.5
			),
			(this.backoff = new zn({
				min: this.reconnectionDelay(),
				max: this.reconnectionDelayMax(),
				jitter: this.randomizationFactor(),
			})),
			this.timeout(n.timeout == null ? 2e4 : n.timeout),
			(this._readyState = "closed"),
			(this.uri = t);
		const i = n.parser || zg;
		(this.encoder = new i.Encoder()),
			(this.decoder = new i.Decoder()),
			(this._autoConnect = n.autoConnect !== !1),
			this._autoConnect && this.open();
	}
	reconnection(t) {
		return arguments.length
			? ((this._reconnection = !!t), this)
			: this._reconnection;
	}
	reconnectionAttempts(t) {
		return t === void 0
			? this._reconnectionAttempts
			: ((this._reconnectionAttempts = t), this);
	}
	reconnectionDelay(t) {
		var n;
		return t === void 0
			? this._reconnectionDelay
			: ((this._reconnectionDelay = t),
			  (n = this.backoff) === null ||
					n === void 0 ||
					n.setMin(t),
			  this);
	}
	randomizationFactor(t) {
		var n;
		return t === void 0
			? this._randomizationFactor
			: ((this._randomizationFactor = t),
			  (n = this.backoff) === null ||
					n === void 0 ||
					n.setJitter(t),
			  this);
	}
	reconnectionDelayMax(t) {
		var n;
		return t === void 0
			? this._reconnectionDelayMax
			: ((this._reconnectionDelayMax = t),
			  (n = this.backoff) === null ||
					n === void 0 ||
					n.setMax(t),
			  this);
	}
	timeout(t) {
		return arguments.length
			? ((this._timeout = t), this)
			: this._timeout;
	}
	maybeReconnectOnOpen() {
		!this._reconnecting &&
			this._reconnection &&
			this.backoff.attempts === 0 &&
			this.reconnect();
	}
	open(t) {
		if (~this._readyState.indexOf("open")) return this;
		this.engine = new ip(this.uri, this.opts);
		const n = this.engine,
			r = this;
		(this._readyState = "opening"),
			(this.skipReconnect = !1);
		const i = Ue(n, "open", function () {
				r.onopen(), t && t();
			}),
			o = (l) => {
				this.cleanup(),
					(this._readyState = "closed"),
					this.emitReserved("error", l),
					t ? t(l) : this.maybeReconnectOnOpen();
			},
			s = Ue(n, "error", o);
		if (this._timeout !== !1) {
			const l = this._timeout,
				u = this.setTimeoutFn(() => {
					i(), o(new Error("timeout")), n.close();
				}, l);
			this.opts.autoUnref && u.unref(),
				this.subs.push(() => {
					this.clearTimeoutFn(u);
				});
		}
		return this.subs.push(i), this.subs.push(s), this;
	}
	connect(t) {
		return this.open(t);
	}
	onopen() {
		this.cleanup(),
			(this._readyState = "open"),
			this.emitReserved("open");
		const t = this.engine;
		this.subs.push(
			Ue(t, "ping", this.onping.bind(this)),
			Ue(t, "data", this.ondata.bind(this)),
			Ue(t, "error", this.onerror.bind(this)),
			Ue(t, "close", this.onclose.bind(this)),
			Ue(this.decoder, "decoded", this.ondecoded.bind(this))
		);
	}
	onping() {
		this.emitReserved("ping");
	}
	ondata(t) {
		try {
			this.decoder.add(t);
		} catch (n) {
			this.onclose("parse error", n);
		}
	}
	ondecoded(t) {
		hu(() => {
			this.emitReserved("packet", t);
		}, this.setTimeoutFn);
	}
	onerror(t) {
		this.emitReserved("error", t);
	}
	socket(t, n) {
		let r = this.nsps[t];
		return (
			r
				? this._autoConnect && !r.active && r.connect()
				: ((r = new sp(this, t, n)), (this.nsps[t] = r)),
			r
		);
	}
	_destroy(t) {
		const n = Object.keys(this.nsps);
		for (const r of n) if (this.nsps[r].active) return;
		this._close();
	}
	_packet(t) {
		const n = this.encoder.encode(t);
		for (let r = 0; r < n.length; r++)
			this.engine.write(n[r], t.options);
	}
	cleanup() {
		this.subs.forEach((t) => t()),
			(this.subs.length = 0),
			this.decoder.destroy();
	}
	_close() {
		(this.skipReconnect = !0),
			(this._reconnecting = !1),
			this.onclose("forced close"),
			this.engine && this.engine.close();
	}
	disconnect() {
		return this._close();
	}
	onclose(t, n) {
		this.cleanup(),
			this.backoff.reset(),
			(this._readyState = "closed"),
			this.emitReserved("close", t, n),
			this._reconnection &&
				!this.skipReconnect &&
				this.reconnect();
	}
	reconnect() {
		if (this._reconnecting || this.skipReconnect)
			return this;
		const t = this;
		if (this.backoff.attempts >= this._reconnectionAttempts)
			this.backoff.reset(),
				this.emitReserved("reconnect_failed"),
				(this._reconnecting = !1);
		else {
			const n = this.backoff.duration();
			this._reconnecting = !0;
			const r = this.setTimeoutFn(() => {
				t.skipReconnect ||
					(this.emitReserved(
						"reconnect_attempt",
						t.backoff.attempts
					),
					!t.skipReconnect &&
						t.open((i) => {
							i
								? ((t._reconnecting = !1),
								  t.reconnect(),
								  this.emitReserved("reconnect_error", i))
								: t.onreconnect();
						}));
			}, n);
			this.opts.autoUnref && r.unref(),
				this.subs.push(() => {
					this.clearTimeoutFn(r);
				});
		}
	}
	onreconnect() {
		const t = this.backoff.attempts;
		(this._reconnecting = !1),
			this.backoff.reset(),
			this.emitReserved("reconnect", t);
	}
}
const Qn = {};
function wn(e, t) {
	typeof e == "object" && ((t = e), (e = void 0)),
		(t = t || {});
	const n = kg(e, t.path || "/socket.io"),
		r = n.source,
		i = n.id,
		o = n.path,
		s = Qn[i] && o in Qn[i].nsps,
		l =
			t.forceNew ||
			t["force new connection"] ||
			t.multiplex === !1 ||
			s;
	let u;
	return (
		l
			? (u = new ll(r, t))
			: (Qn[i] || (Qn[i] = new ll(r, t)), (u = Qn[i])),
		n.query && !t.query && (t.query = n.queryKey),
		u.socket(n.path, t)
	);
}
Object.assign(wn, {
	Manager: ll,
	Socket: sp,
	io: wn,
	connect: wn,
});
const Bg = ({ setShowForm: e }) => {
		const t = k.useRef(null);
		k.useContext(jr);
		const n = wn("https://brainstormebackend.onrender.com"),
			r = async (i) => {
				try {
					i.preventDefault();
					const o = { name: t.current.value },
						s = JSON.parse(localStorage.getItem("token")),
						l = await ct.post(
							"https://brainstormebackend.onrender.com/room/create-room",
							o,
							{ headers: { Authorization: s } }
						);
					(t.current.value = ""),
						n.emit("createRoom", l.data.data);
				} catch (o) {
					console.log(o);
				}
				e((o) => !o);
			};
		return (
			k.useEffect(
				() => () => {
					n.disconnect();
				},
				[]
			),
			x.jsxs("div", {
				className:
					" relative w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 rounded-md border-2  ",
				children: [
					x.jsx("button", {
						className: "absolute top-0 right-0 p-2",
						onClick: () => {
							e((i) => !i);
						},
						children: x.jsx(q0, {}),
					}),
					x.jsxs("h1", {
						className:
							"text-xl font-semibold text-gray-700",
						children: [
							"No Rooms Empty? ",
							x.jsx("span", {
								className: "font-normal text-gray-400 ",
								children:
									"Dont worry, create your own room",
							}),
						],
					}),
					x.jsxs("form", {
						className: "mt-6",
						onSubmit: r,
						children: [
							x.jsx("div", {
								className: "flex justify-between gap-3",
								children: x.jsxs("span", {
									className: "w-1/2",
									children: [
										x.jsx("label", {
											className:
												"block text-xs font-semibold text-gray-600 uppercase",
											children: "Room Name",
										}),
										x.jsx("input", {
											type: "text",
											name: "roomname",
											ref: t,
											placeholder: "xyz",
											className:
												"block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner",
											required: !0,
										}),
									],
								}),
							}),
							x.jsx("button", {
								type: "submit",
								className:
									"w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none",
								children: "Create Room",
							}),
						],
					}),
				],
			})
		);
	},
	Dg = ({
		name: e,
		host: t,
		players: n,
		status: r,
		_id: i,
		user: o,
	}) => {
		const s = wn("https://brainstormebackend.onrender.com");
		let l = "";
		switch ((k.useContext(jr), r)) {
			case "waiting":
				l = "bg-green-500";
				break;
			case "in-progress":
				l = "bg-yellow-500";
				break;
			case "finished":
				l = "bg-blue-500";
				break;
			case "full":
				l = "bg-orange-500";
				break;
			default:
				l = "bg-gray-500";
		}
		const u = async (c) => {
				try {
					c.preventDefault();
					const d = { roomId: i },
						h = JSON.parse(localStorage.getItem("token")),
						g = await ct.post(
							"https://brainstormebackend.onrender.com/room/join-room",
							d,
							{ headers: { Authorization: h } }
						);
					s.emit("joinRoom", g.data.data);
				} catch (d) {
					console.log(d);
				}
			},
			a = async (c) => {
				if (
					(c.preventDefault(),
					o.userId === t && n.length === 2)
				)
					try {
						const d = JSON.parse(
								localStorage.getItem("token")
							),
							g = (
								await ct.post(
									"https://brainstormebackend.onrender.com/quizz/start-quizz",
									{ roomId: i },
									{ headers: { Authorization: d } }
								)
							).data.data;
						let y = {
							roomId: i,
							player1: n[0]._id,
							player2: n[1]._id,
							questions: g,
						};
						s.emit("quizStart", y);
					} catch (d) {
						console.log(d);
					}
			};
		return (
			k.useEffect(
				() => () => {
					s.disconnect();
				},
				[]
			),
			x.jsxs("div", {
				className:
					" flex flex-col gap-3 rounded-md shadow-lg min-h-[200px] min-w-[300px] md:min-w-[400px] bg-gray-800 text-gray-100 p-3 px-4 text-2xl ",
				children: [
					x.jsx("span", {
						className:
							" text-center py-2 border-b uppercase",
						children: e,
					}),
					x.jsxs("div", {
						className:
							"flex justify-between p-2 bg-gray-500   rounded-md",
						children: [
							x.jsx("span", { children: "Player 1 : " }),
							x.jsx("span", { children: n[0].name }),
						],
					}),
					x.jsxs("div", {
						className:
							"flex justify-between p-2 bg-gray-500 rounded-md",
						children: [
							x.jsx("span", { children: "Player 2 : " }),
							n.length > 1 &&
								x.jsx("span", { children: n[1].name }),
							n.length == 1 &&
								x.jsx("span", { children: "?" }),
						],
					}),
					x.jsxs("div", {
						className: `flex justify-between p-2 ${l} rounded-md`,
						children: [
							x.jsx("span", { children: "Status :" }),
							x.jsxs("span", { children: [r, ".."] }),
						],
					}),
					o.userId !== t &&
						n.length < 2 &&
						x.jsx("button", {
							onClick: u,
							className:
								"border bg-gray-900 rounded-lg hover:bg-gray-950",
							children: "Join",
						}),
					o.userId === t &&
						n.length < 2 &&
						x.jsx("button", {
							className:
								"border bg-gray-900 rounded-lg hover:bg-gray-950",
							children: "Wait for another Player",
						}),
					o.userId === t &&
						n.length === 2 &&
						x.jsx("button", {
							onClick: a,
							className:
								"border bg-gray-900 rounded-lg hover:bg-gray-950",
							children: "Start Quizz",
						}),
				],
			})
		);
	},
	Fg = () => {
		const [e, t] = k.useState([]);
		return (
			k.useEffect(() => {
				(async () => {
					try {
						const r = JSON.parse(
								localStorage.getItem("token")
							),
							i = await ct.get(
								"https://brainstormebackend.onrender.com/room/result",
								{ headers: { Authorization: r } }
							);
						t(i.data.data);
					} catch (r) {
						console.log(r);
					}
				})();
			}, []),
			e.length > 0
				? x.jsxs("div", {
						className:
							" rounded-md p-2  min-w-[300px] flex text-gray-200 flex-col items-center bg-gray-800 text-2xl",
						children: [
							x.jsx("div", {
								className:
									"w-full p-2 tracking-wider text-center border-b-2 ",
								children: "Result",
							}),
							e.map((n) =>
								x.jsxs(
									"div",
									{
										className: "border-b-2 w-full p-3",
										children: [
											x.jsxs("div", {
												className: "flex justify-between",
												children: [
													x.jsxs("span", {
														children: [
															" ",
															n.players[0].name,
															" ",
														],
													}),
													x.jsx("span", {
														children: n.marks[0].marks,
													}),
												],
											}),
											x.jsxs("div", {
												className: "flex justify-between",
												children: [
													x.jsxs("span", {
														children: [
															" ",
															n.players[1].name,
															" ",
														],
													}),
													x.jsx("span", {
														children: n.marks[1].marks,
													}),
												],
											}),
										],
									},
									n._id
								)
							),
						],
				  })
				: null
		);
	},
	Ug = () => {
		const e = a(localStorage.getItem("token")),
			t = wn("https://brainstormebackend.onrender.com"),
			[n, r] = k.useState(!1),
			{
				rooms: i,
				setRooms: o,
				questions: s,
				setQuestions: l,
			} = k.useContext(jr),
			u = iu();
		k.useEffect(
			() => (
				(async () => {
					try {
						const d = JSON.parse(
								localStorage.getItem("token")
							),
							h = await ct.get(
								"https://brainstormebackend.onrender.com/room/get-rooms",
								{ headers: { Authorization: d } }
							);
						o(h.data.data),
							console.log("get rooms being called");
					} catch (d) {
						console.log(d);
					}
				})(),
				t.on("newRoomCreated", (d) => {
					o((h) => [...h, d]);
				}),
				t.on(
					"quizStarted",
					({
						roomId: d,
						player1: h,
						player2: g,
						questions: y,
					}) => {
						(e.userId == h || e.userId == g) &&
							(u("quizz-dashboard"),
							localStorage.setItem("RoomId", d),
							l(y)),
							o((v) =>
								v.forEach((N) => {
									N._id === d && (N.status = "in-progress");
								})
							);
					}
				),
				t.on("joinedRoom", (d) => {
					o((h) => h.map((g) => (g._id === d._id ? d : g)));
				}),
				() => {
					t.disconnect();
				}
			),
			[]
		);
		function a(c) {
			var d = c.split(".")[1],
				h = d.replace(/-/g, "+").replace(/_/g, "/"),
				g = decodeURIComponent(
					window
						.atob(h)
						.split("")
						.map(function (y) {
							return (
								"%" +
								("00" + y.charCodeAt(0).toString(16)).slice(
									-2
								)
							);
						})
						.join("")
				);
			return JSON.parse(g);
		}
		return x.jsxs("div", {
			className: "",
			children: [
				x.jsxs("div", {
					className: "flex justify-around p-4  ",
					children: [
						x.jsx(Fg, {}),
						n && x.jsx(Bg, { setShowForm: r }),
						!n &&
							x.jsx("button", {
								className:
									"p-3 h-[50px] font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline:none hover:bg-gray-900 hover:shadow:-none rounded-md  ",
								onClick: () => {
									r((c) => !c);
								},
								children: "Create Room",
							}),
					],
				}),
				x.jsx("div", {
					className:
						"flex justify-center gap-9 flex-wrap p-4",
					children:
						i &&
						i.length > 0 &&
						i.map((c) =>
							x.jsx(
								Dg,
								{
									name: c.name,
									playerCount: c.playerCount,
									host: c.host,
									players: c.players,
									status: c.status,
									_id: c._id,
									user: e,
								},
								c._id
							)
						),
				}),
			],
		});
	},
	Mg = () => {
		const e = iu(),
			{ questions: t } = k.useContext(jr),
			[n, r] = k.useState(0),
			[i, o] = k.useState(null),
			[s, l] = k.useState(0),
			[u, a] = k.useState(10),
			c = t[n],
			d = (g) => {
				o(g);
			},
			h = async () => {
				try {
					const g = JSON.parse(
							localStorage.getItem("token")
						),
						v = (
							await ct.get(
								`https://brainstormebackend.onrender.com/quizz/get-correct-answer/${c._id}`,
								{ headers: { Authorization: g } }
							)
						).data.data;
					if (n < t.length - 1)
						i && i === v && l((N) => N + 10),
							r(n + 1),
							o(null),
							a(10);
					else {
						i && i === v && l((S) => S + 10);
						const N = JSON.parse(
								localStorage.getItem("token")
							),
							p = localStorage.getItem("RoomId"),
							f = { marks: s, RoomId: p },
							m = await ct.post(
								"https://brainstormebackend.onrender.com/quizz/finish",
								f,
								{ headers: { Authorization: N } }
							);
						console.log(m), e("/lobby");
					}
				} catch (g) {
					console.log(g);
				}
			};
		return (
			k.useEffect(() => {
				let g;
				return (
					u > 0
						? (g = setInterval(() => {
								a((y) => y - 1);
						  }, 1e3))
						: h(),
					() => {
						clearInterval(g);
					}
				);
			}, [u]),
			t.length > 0
				? x.jsxs("div", {
						className: "p-3 flex flex-col gap-10",
						children: [
							x.jsxs("div", {
								className: "flex items-center ",
								children: [
									x.jsxs("div", {
										className:
											" border-2 p-5 mr-4 text-6xl",
										children: [
											x.jsx("div", {
												className: "text-2xl",
												children: " Score",
											}),
											x.jsxs("div", {
												children: [s, "/50"],
											}),
										],
									}),
									x.jsxs("div", {
										className:
											" flex rounded-full mx-auto  h-[200px] w-[200px]  border-4 shadow-lg",
										children: [
											x.jsx("div", {
												className:
													"flex-grow   text-7xl rounded-l-full text-center py-14    h-full border-2",
												children: n + 1,
											}),
											x.jsx("div", {
												className:
													"flex-grow  text-7xl rounded-r-full text-center py-14    h-full",
												children: "5",
											}),
										],
									}),
									x.jsxs("div", {
										className:
											" border-2 p-5 mr-4 text-6xl",
										children: [
											x.jsx("div", {
												className: "text-2xl",
												children: " Timer",
											}),
											x.jsx("div", { children: u }),
										],
									}),
								],
							}),
							x.jsx("div", {
								className: "border-2 rounded p-3 text-xl ",
								children: t[n].question,
							}),
							x.jsx("div", {
								className:
									"flex flex-col text-xl w-1/2 gap-3",
								children: t[n].options.map((g, y) =>
									x.jsx(
										"div",
										{
											className: `${
												i === g.text
													? "bg-blue-300"
													: "bg-gray-300"
											} p-4 border-2 rounded-md tracking-wider cursor-pointer `,
											onClick: () => d(g.text),
											children: g.text,
										},
										y
									)
								),
							}),
							i &&
								x.jsx("button", {
									onClick: h,
									className:
										" bg-blue-600 w-1/2 text-xl p-3 rounded-md text-white tracking-widest active:bg-blue-900",
									children: "SAVE",
								}),
						],
				  })
				: x.jsx("div", {
						className: "text-3xl text-center",
						children: "Please Restart the test",
				  })
		);
	};
function $g() {
	return x.jsx(x.Fragment, {
		children: x.jsx(Ny, {
			children: x.jsxs(Cy, {
				children: [
					x.jsx(mi, { path: "/", element: x.jsx($0, {}) }),
					x.jsx(mi, {
						path: "/lobby",
						element: x.jsx(Ug, {}),
					}),
					x.jsx(mi, {
						path: "lobby/quizz-dashboard",
						element: x.jsx(Mg, {}),
					}),
				],
			}),
		}),
	});
}
rs.createRoot(document.getElementById("root")).render(
	x.jsx(Q0, { children: x.jsx($g, {}) })
);
