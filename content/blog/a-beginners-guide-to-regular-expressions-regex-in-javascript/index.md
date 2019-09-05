---
title: A Practical Guide to Regular Expressions (RegEx) In JavaScript
date: "2019-09-05"
description: Notes taken while going through A Practical Guide to Regular Expressions (RegEx) In JavaScript by Sukhjinder Arora
---

🚀 [A Practical Guide to Regular Expressions (RegEx) In JavaScript](https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4)

👨‍💻 By [Sukhjinder Arora](https://blog.bitsrc.io/@Sukhjinder)

✍ Practise

- Regex at [regex101](https://regex101.com/)
- [Hackerrank](https://www.hackerrank.com/domains/regex)

♦ References

- [MDN Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Regular Expressions

Regular expressions are a way to describe patterns in a string data.

`Creating a Regular Expression`

There are two ways to create a regular expression in Javascript. It can be either created with RegExp constructor, or by using forward slashes ( / ) to enclose the pattern.

`Regular Expression Constructor:`

**Syntax:** `new RegExp(pattern[, flags])`

**Example:**

```js
var regexConst = new RegExp("abc");
```

`Regular Expression Literal:`

**Syntax:** `/pattern/flags`

**Example:**

```js
var regexLiteral = /abc/;
```

**Note:** Here the flags are optional

> Since forward slashes are used to enclose patterns in the above example, you have to escape the forward slash ( / ) with a backslash ( \ ) if you want to use it as a part of the regex.

`Regular Expressions Methods`

`RegExp.prototype.test()`

This method is used to test whether a match has been found or not. It accepts a string which we have to test against regular expression and returns true or false depending upon if the match is found or not.

**For example:**

```js
var regex = /hello/;
var str = "hello world";
var result = regex.test(str);
console.log(result);
// returns true
```

`RegExp.prototype.exec()`

This method returns an array containing all the matched groups. It accepts a string that we have to test against a regular expression.

**For example:**

```js
var regex = /hello/;
var str = "hello world";
var result = regex.exec(str);
console.log(result);
// returns [ 'hello', index: 0, input: 'hello world', groups: undefined ]
// 'hello' -> is the matched pattern.
// index: -> Is where the regular expression starts.
// input: -> Is the actual string passed.
```

`Flags:`

Regular expressions have five optional flags or modifiers. Let’s discuss the two most important flags:

- `g` — Global search, don’t return after the first match
- `i` — Case-insensitive search

`Regular Expression Literal`

**Syntax** `/pattern/flags`

```js
var regexGlobal = /abc/g;
console.log(regexGlobal.test("abc abc"));
// it will match all the occurence of 'abc', so it won't return
// after first match.
var regexInsensitive = /abc/i;
console.log(regexInsensitive.test("Abc"));
// returns true, because the case of string characters don't matter
// in case-insensitive search.
```

`Regular Expression Constructor`

**Syntax** `new RegExp('pattern', 'flags')`

```js
var regexGlobal = new RegExp("abc", "g");
console.log(regexGlobal.test("abc abc"));
// it will match all the occurence of 'abc', so it won't return // after first match.
var regexInsensitive = new RegExp("abc", "i");
console.log(regexInsensitive.test("Abc"));
// returns true, because the case of string characters don't matter // in case-insensitive search.
```

`Character groups:`

**Character set [xyz]**

A character set is a way to match different characters in a single position, it matches any single character in the string from characters present inside the brackets.

**For example:**

```js
var regex = /[bt]ear/;
console.log(regex.test("tear"));
// returns true
console.log(regex.test("bear"));
// return true
console.log(regex.test("fear"));
// return false
```

**Note —** All the special characters except for caret (^) (Which has entirely different meaning inside the character set) lose their special meaning inside the character set.

`Negated character set [^xyz]`

It matches anything that is not enclosed in the brackets.

**For example:**

```js
var regex = /[^bt]ear/;
console.log(regex.test("tear"));
// returns false
console.log(regex.test("bear"));
// return false
console.log(regex.test("fear"));
// return true
```

`Ranges [a-z]`

Suppose we want to match all of the letters of an alphabet in a single position, we could write all the letters inside the brackets, but there is an easier way and that is ranges.

**For example:**

[a-h] will match all the letters from a to h. Ranges can also be digits like [0-9] or capital letters like [A-Z].

```js
var regex = /[a-z]ear/;
console.log(regex.test("fear"));
// returns true
console.log(regex.test("tear"));
// returns true
```

`Meta-characters`

Meta-characters are characters with a special meaning. There are many meta character but I am going to cover the most important ones here.

- `\d` — Match any digit character ( same as [0-9] ).
- `\w` — Match any word character. A word character is any letter, digit, and underscore. (Same as [a-zA-Z0–9_] ) i.e alphanumeric character.
- `\s` — Match a whitespace character (spaces, tabs etc).
- `\t` — Match a tab character only.
- `\b` — Find a match at beginning or ending of a word. Also known as word boundary.
- `.` — (period) Matches any character except for newline.
- `\D` — Match any non digit character (same as [^0–9]).
- `\W` — Match any non word character (Same as [^a-za-z0–9_] ).
- `\S` — Match a non whitespace character.

`Quantifiers:`

Quantifiers are symbols that have a special meaning in a regular expression.

`+` — Matches the preceding expression 1 or more times.

```js
var regex = /8\d+/;
console.log(regex.test("8"));
// true
console.log(regex.test("88899"));
// true
console.log(regex.test("8888845"));
// true
```

`*` - Matches the preceding expression 0 or more times.

```js
var regex = /go\*d/;
console.log(regex.test("gd"));
// true
console.log(regex.test("god"));
// true
console.log(regex.test("good"));
// true
console.log(regex.test("goood"));
// true
```

`?` — Matches the preceding expression 0 or 1 time, that is preceding pattern is optional.

```js
var regex = /goo?d/;
console.log(regex.test("god"));
// true
console.log(regex.test("good"));
// true
console.log(regex.test("goood"));
// false
```

`^` — Matches the beginning of the string, the regular expression that follows it should be at the start of the test string. i.e the caret (^) matches the start of string.

```js
var regex = /^g/;
console.log(regex.test("good"));
// true
console.log(regex.test("bad"));
// false
console.log(regex.test("tag"));
// false
```

`$` — Matches the end of the string, that is the regular expression that precedes it should be at the end of the test string. The dollar (\$) sign matches the end of the string.

```js
var regex = /.com$/;
console.log(regex.test("test@testmail.com"));
// true
console.log(regex.test("test@testmail"));
// false
```

`{N}` — Matches exactly N occurrences of the preceding regular expression.

```js
var regex = /go{2}d/;
console.log(regex.test("good"));
// true
console.log(regex.test("god"));
// false
```

`{N,}` — Matches at least N occurrences of the preceding regular expression.

```js
var regex = /go{2,}d/;
console.log(regex.test("good"));
// true
console.log(regex.test("goood"));
// true
console.log(regex.test("gooood"));
// true
```

`{N,M}` — Matches at least N occurrences and at most M occurrences of the preceding regular expression (where M > N).

```js
var regex = /go{1,2}d/;
console.log(regex.test("god"));
// true
console.log(regex.test("good"));
// true
console.log(regex.test("goood"));
// false
```

`Alternation X|Y` — Matches either X or Y.

```js
var regex = /(green|red) apple/;
console.log(regex.test("green apple"));
// true
console.log(regex.test("red apple"));
// true
console.log(regex.test("blue apple"));
// false
```

**Note** — If you want to use any **special character** as a part of the expression, say for example you want to match literal `+` or `.`, then you have to escape them with backslash ( `\` ).

**For example:**

```js
var regex = /a+b/; // This won't work
var regex = /a\+b/; // This will work
console.log(regex.test("a+b")); // true
```

`Advanced`

`(x)` — Matches x and remembers the match. These are called capturing groups. This is also used to create sub expressions within a regular expression.

```js
var regex = /(foo)bar\1/;
console.log(regex.test("foobarfoo"));
// true
console.log(regex.test("foobar"));
// false
```

**Note:** `\1` - remembers and uses that match from first subexpression within parentheses.

`(?:x)` — Matches x and does not remember the match. These are called non capturing groups. Here \1 won’t work, it will match the literal \1.

```js
var regex = /(?:foo)bar\1/;
console.log(regex.test("foobarfoo"));
// false
console.log(regex.test("foobar"));
// false
console.log(regex.test("foobar\1"));
// true
```

`x(?=y)` — Matches x only if x is followed by y. Also called positive look ahead.

```js
var regex = /Red(?=Apple)/;
console.log(regex.test("RedApple"));
// true
```

✨ `Practicing Regex:`

`Match any 10 digit number :`

```js
var regex = /^\d{10}$/;
console.log(regex.test("9995484545"));
// true
```

Let’s break that down and see what’s going on up there.

- If we want to enforce that the match must span the whole string, we can add the quantifiers `^` and `$`. The caret `^` matches the start of the input string, whereas the dollar sign \$ matches the end. So it would not match if string contain more than 10 digits.
- `\d` matches any digit character.
- `{10}` matches the previous expression, in this case `\d` exactly 10 times. So if the test string contains less than or more than 10 digits, the result will be false.

`Match a date with following format DD-MM-YYYY or DD-MM-YY`

```js
var regex = /^(\d{1,2}-){2}\d{2}(\d{2})?$/;
console.log(regex.test("01-01-1990"));
// true
console.log(regex.test("01-01-90"));
// true
console.log(regex.test("01-01-190"));
// false
```

Let’s break that down and see what’s going on up there.

- Again, we have wrapped the entire regular expression inside `^` and `\$`, so that the match spans entire string.
- `(` start of first subexpression.
- `\d{1,2}` matches at least 1 digit and at most 2 digits.

- `-` matches the literal hyphen character.
- `)` end of first subexpression.
- `{2}` match the first subexpression exactly two times.
- `\d{2}` matches exactly two digits.
- `(\d{2})?` matches exactly two digits. But it’s optional, so either year contains 2 digits or 4 digits.

`Matching Anything But a Newline`

The expression should match any string with a format like abc.def.ghi.jkl where each variable a, b, c, d, e, f, g, h, i, j, k, l can be any character except new line.

```js
var regex = /^(.{3}\.){3}.{3}$/;
console.log(regex.test("123.456.abc.def"));
// true
console.log(regex.test("1243.446.abc.def"));
// false
console.log(regex.test("abc.def.ghi.jkl"));
// true
```

Let’s break that down and see what’s going on up there.

- We have wrapped entire regular expression inside `^` and `\$`, so that the match spans entire string.
- `(` start of first sub expression
- `.{3}` matches any character except new line for exactly 3 times.
- `\.` matches the literal . period
- `)` end of first sub expression
- `{3}` matches the first sub expression exactly 3 times.
- `.{3}` matches any character except new line for exactly 3 times.
