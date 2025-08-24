# JavaScript Spread Operator ( ... )
From Basics to Advanced – Practical Notes with Examples & Tables  
Prepared: August 13, 2025

## Overview
The **spread operator** (`...`) expands iterables (arrays, strings, sets, maps) and copies enumerable own properties from objects into new containers.

### Quick Overview
| Topic | Array Spread | Object Spread |
|---|---|---|
| What it does | Expands an *iterable* into elements | Copies *own enumerable props* into a new object |
| Common uses | Clone, merge, pass args | Clone, merge, add/override fields |
| Mutates original? | No | No |
| Keeps prototype? | No | No |
| Shallow or deep? | Shallow copy | Shallow copy |

## BASICS
### 1) Array cloning & merging
```js
const a = [1, 2, 3];
const clone = [...a];
const merged = [...a, 4, 5];
```

### 2) Passing arguments to functions
```js
const nums = [10, 20, 30];
Math.max(...nums);  // 30
const d = new Date(...[2025, 7, 13]);
```

### 3) Object cloning & merging
```js
const user = { id: 1, name: "Zohaib" };
const cloned = { ...user };
const withRole = { ...user, role: "admin" };
```

### 4) Spread vs. Rest
| Operator | Syntax position | Purpose | Example |
|---|---|---|---|
| Spread | In literals/calls | Expand/Copy | `[...arr]`, `{...obj}`, `fn(...args)` |
| Rest | In params/left side | Collect | `function f(...args) {}`, `const [a, ...rest] = arr` |

### 5) Converting iterables/array-like to arrays
```js
const nodes = document.querySelectorAll("div");
const arr = [...nodes];
[..."hello"]; // ["h","e","l","l","o"]
```

## INTERMEDIATE
### 6) Immutability patterns
```js
const items = [1, 2, 3];
const add4 = [...items, 4];
const removed = [...items.slice(0, 1), ...items.slice(2)];
const updated = items.map((v, i) => i === 1 ? v * 10 : v);
const user = { id: 1, name: "Sara", role: "user" };
const promoted = { ...user, role: "admin" };
```

### 7) Conditional spreads
```js
const role = null;
const profile = { id: 1, name: "Sara", ...(role && { role }) };
```

### 8) Dedupe arrays with Set + spread
```js
const nums = [2, 3, 3, 2, 5];
const unique = [...new Set(nums)];
```

### 9) Shallow copy caveat
```js
const a = [{ x: 1 }, { x: 2 }];
const b = [...a];
b[0].x = 100; // a[0].x becomes 100
```

### 10) Spread with Maps/Sets & non-iterables
```js
const m = new Map([["a", 1], ["b", 2]]);
const entries = [...m];
const fromString = { ..."abc" }; // { "0":"a", "1":"b", "2":"c" }
```

## ADVANCED
### 11) Object spread semantics
- Own enumerable properties (including symbols) are copied; descriptors are not preserved.
- Prototype is not preserved.
- Right-most properties win on conflicts.

### 12) Performance considerations
Spread is O(n). For very large data, measure vs `slice`, `Array.from`, `Object.assign`.

### 13) React/Redux-style updates
```js
setTodos(todos => todos.map(t => t.id === id ? { ...t, done: true } : t));
setUser(user => ({ ...user, name: "New Name" }));
setPost(p => ({ ...p, author: { ...p.author, name: "Ali" }, tags: [...p.tags, "javascript"] }));
```

### 14) Deep cloning options
```js
const deep1 = structuredClone(obj);
const deep2 = JSON.parse(JSON.stringify(obj));
```

### 15) Common mistakes & fixes
| Mistake | Why | Fix |
|---|---|---|
| Using spread thinking it’s deep | Only top level cloned | `structuredClone` / `cloneDeep` |
| Spreading null/undefined (object) | TypeError | Guard: `{...(obj || {})}` |
| Spreading non-iterable in array | TypeError | Convert first |
| Expecting prototype methods | Prototype lost | `Object.create(proto)` + `assign` |
| Overriding order confusion | Right-most wins | `{...base, ...override}` |

## PRACTICE
```js
const a = [1,2], b = [3,4];
const out1 = [...a, ...b, 99];

const arr = [10,20,30,40];
const out2 = [...arr.slice(0,2), ...arr.slice(3)];

const user = { id:1, name:'Ali', role:'user' };
const out3 = { ...user, role:'admin' };

const post = { meta:{ likes:1 }, tags:['js'] };
const deep = structuredClone(post);
deep.meta.likes = 10;

const nodes = document.querySelectorAll('li');
const texts = [...nodes].map(n => n.textContent);

const cfg = null;
const safe = { ...{ a:1 }, ...(cfg || {}) };
```
