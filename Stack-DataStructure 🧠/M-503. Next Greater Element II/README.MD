# 🔁 Circular Indexing in `nextGreaterElements`

```js
const nums = [1,2,3,4,3];
```

The goal is to find the **next greater element** for every element in the array **in a circular manner**. That means after the last element, you wrap around to the beginning.

---

## 🧠 What is Circular Indexing?

Circular indexing means:

> When you go beyond the last index of an array, you **wrap around** to the start using the **modulus operator `%`**.

---

## 🔍 Where Circular Indexing Happens in the Code

```js
for (let j = i + 1; j < 2 * nums.length; j++) {
    if (nums[i] < nums[j % nums.length]) {
        result.push(nums[j % nums.length]);
        isValueFind = true;
        break;
    }
}
```

### 🔁 Explanation:

- The outer loop iterates over each element `i` in the array.
- The inner loop starts from `i + 1` and runs until `2 * nums.length` to allow **one full wrap-around**.
- `j % nums.length` ensures the index **wraps around** once it exceeds the array length.

---

## 📦 Example for Clarity

Let’s walk through one element:

### `i = 0`, value = `1`

We search `j = 1` to `j = 9` (because `2 * 5 = 10`) and use:

```js
nums[j % 5] → wraps back to 0 when j = 5
```

So, the indexes accessed are:

| `j` | `j % 5` | `nums[j % 5]` |
|-----|---------|----------------|
| 1   | 1       | 2              ✅ (2 > 1) → Found next greater

We stop here and push 2.

---

## 🧾 Final Output of `console.log(nextGreaterElements(nums))`:

```js
[2, 3, 4, -1, 4]
```

---

## ✅ Why Use Circular Indexing?

To simulate a **circular array**, i.e., after reaching the last element, continue searching from the beginning — without physically modifying or duplicating the array.
