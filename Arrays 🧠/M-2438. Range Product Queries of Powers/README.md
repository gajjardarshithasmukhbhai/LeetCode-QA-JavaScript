# 🔑 Concept: Binary Representation & Powers of 2

## 1. Binary Representation
Every positive integer can be written uniquely as a **sum of powers of 2**.

```js
Example:
22 (decimal) → 10110 (binary)

- Which means:

22 = 16 + 4 + 2 = 2^4 + 2^2 + 2^1
```
---

## 2. Why Powers of 2?
- Each binary digit (bit) is either **0 or 1**.
- If the bit at position `i` is `1`, then that number contributes `2^i` to the total.
- If it’s `0`, then that power of 2 isn’t included.

Example:


---

## 3. Extracting Powers of 2
- To find which powers are used in a number `n`:
1. Convert `n` to binary.
2. For each bit that equals `1`, take `2^i`.

- Example:

```js
n = 13 → binary 1101
Bits: [1,0,1,1] (reversed)
→ 2^0 = 1
→ 2^2 = 4
→ 2^3 = 8
So: 13 = 1 + 4 + 8
```


---

## 🔎 Why is this useful?
- **Bit manipulation** is a fast way to decompose numbers.
- Problems like *subset sums, query ranges, products, etc.* often rely on binary representation.
- You avoid heavy computations because you directly pick powers of 2 instead of searching.

---

## ✅ In short:
**Decimal → Binary → Powers of 2 → Sum gives original number.**
