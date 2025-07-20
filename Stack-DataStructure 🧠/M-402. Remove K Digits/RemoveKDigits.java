import java.util.*;

public class RemoveKDigits {
    
    public static String removeKdigits(String num, int k) {
        Deque<Character> stack = new ArrayDeque<>();

        for (int i = 0; i < num.length(); i++) {
            char digit = num.charAt(i);

            while (!stack.isEmpty() && k > 0 && stack.peekLast() > digit) {
                stack.pollLast();
                k--;
            }
            stack.offerLast(digit);
        }

        // Remove remaining digits from the end if k > 0
        while (k > 0 && !stack.isEmpty()) {
            stack.pollLast();
            k--;
        }

        // Build the result string
        StringBuilder result = new StringBuilder();
        for (char c : stack) {
            result.append(c);
        }

        // Remove leading zeros
        while (result.length() > 0 && result.charAt(0) == '0') {
            result.deleteCharAt(0);
        }

        return result.length() == 0 ? "0" : result.toString();
    }

    public static void main(String[] args) {
        System.out.println(removeKdigits("10", 2)); // Output: 0
    }
}
