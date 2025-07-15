# 🧠 Min Stack – Full Guide with Code & Insights

## ✅ Problem Statement

Design a stack that supports:
- `push(x)`
- `pop()`
- `top()`
- `getMin()`

All in **O(1)** time complexity.

---

## 💡 Key Insight

To achieve constant time `getMin()`:
- Use **two stacks**:
  - One for **normal values**
  - One for **tracking the minimum values** at each state

### Example:
If you push: `5, 3, 7, 2`

**Main Stack:** `5, 3, 7, 2`  
**Min Stack:** `5, 3, 3, 2` (tracks current min at each push)

---

## 🚀 JavaScript Implementation

```javascript
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (
      this.minStack.length === 0 ||
      x <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(x);
    }
  }

  pop() {
    const popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// ✅ Example usage
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top());    // Output: 0
console.log(minStack.getMin()); // Output: -2

```

```java
import java.util.Stack;

class MinStack {
    Stack<Integer> stack;
    Stack<Integer> minStack;

    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }

    public void push(int x) {
        stack.push(x);
        if (minStack.isEmpty() || x <= minStack.peek()) {
            minStack.push(x);
        }
    }

    public void pop() {
        int popped = stack.pop();
        if (popped == minStack.peek()) {
            minStack.pop();
        }
    }

    public int top() {
        return stack.peek();
    }

    public int getMin() {
        return minStack.peek();
    }
}

// ✅ Example usage
public class Main {
    public static void main(String[] args) {
        MinStack minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        System.out.println(minStack.getMin()); // Output: -3
        minStack.pop();
        System.out.println(minStack.top());    // Output: 0
        System.out.println(minStack.getMin()); // Output: -2
    }
}
```

# 🧠 Min Stack using Encoded Values (Space Optimized)

This implementation uses a single stack and encodes the value when a new minimum is pushed, instead of using an auxiliary `minStack`.

---

## 🔧 Core Concept

- Use a single stack.
- Maintain a `min` variable that always holds the current minimum.
- When pushing a **smaller** value:
  - Store a **transformed value** instead: `2 * val - min`
  - Update `min` to the new value.
- When popping:
  - If the popped value is **less than `min`**, it's an encoded value, and the previous min is recovered using:
    ```js
    previousMin = 2 * min - encodedVal
    ```

---

## ✅ JavaScript Code

```javascript
class MinStack {
  constructor() {
    this.stack = [];
    this.min = null;
  }

  push(val) {
    if (this.stack.length === 0) {
      this.stack.push(val);
      this.min = val;
    } else if (val >= this.min) {
      this.stack.push(val);
    } else {
      // Encode the value to keep track of previous min
      const encoded = 2 * val - this.min;
      this.stack.push(encoded);
      this.min = val;
    }
  }

  pop() {
    if (this.stack.length === 0) return;

    const top = this.stack.pop();
    if (top < this.min) {
      // Encoded value, recover the previous min
      this.min = 2 * this.min - top;
    }
  }

  top() {
    const top = this.stack[this.stack.length - 1];
    return top >= this.min ? top : this.min;
  }

  getMin() {
    return this.min;
  }
}


const minStack = new MinStack();
minStack.push(12);       // stack: [12], min: 12
minStack.push(15);       // stack: [12, 15], min: 12
minStack.push(10);       // encoded value = 2*10 - 12 = 8
                         // stack: [12, 15, 8], min: 10

minStack.getMin();       // returns 10
minStack.pop();          // 8 is encoded => min = 2*10 - 8 = 12
minStack.getMin();       // returns 12
minStack.top();          // returns 15

minStack.push(10);       // encoded = 2*10 - 12 = 8, stack: [12, 15, 8], min: 10
minStack.top();          // returns 10

```

# 🔁 Monotonic Stack – Insights, Logic & Use Cases

A **Monotonic Stack** is a special type of stack that maintains its elements in either increasing or decreasing order. It's extremely useful in problems like **Next Greater Element**, **Previous Smaller Element**, **Stock Span**, **Temperature Problem**, and more.

---

## 🔧 What is a Monotonic Stack?

- **Monotonic Increasing Stack**: Top always has the **smallest** element.
  - Used to find **Next Smaller Element**
- **Monotonic Decreasing Stack**: Top always has the **largest** element.
  - Used to find **Next Greater Element**

In the attached image, the problem is **Next Greater Element (NGE)**.

---

## ✅ Problem: Next Greater Element (NGE)

Given an array, for each element, find the **next greater element to the right**. If there is none, put `-1`.

### 🔢 Example:
```Input:

[4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6]
```

```Output:
[12, -1, 6, 5, 2, 5, 6, 4, 2, 4, 6, -1]
```


---

## 🧠 Core Idea

We scan **right to left** and use a stack to keep potential next greater elements.

### Step-by-step:
1. Traverse from **right to left**
2. While stack is not empty and top ≤ current:
   - Pop the stack
3. If stack is empty, no greater element → store `-1`
4. Else, top of stack is the NGE
5. Push current element to stack

---

## 📦 JavaScript Code

```javascript
function nextGreaterElement(arr) {
  const n = arr.length;
  const stack = [];
  const result = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(arr[i]);
  }

  return result;
}

// ✅ Example
console.log(nextGreaterElement([4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6]));
// Output: [12, -1, 6, 5, 2, 5, 6, 4, 2, 4, 6, -1]

```