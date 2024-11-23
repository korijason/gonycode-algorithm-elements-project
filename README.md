# gonycode-algorithm-elements-project
# Sentence Analysis Algorithm

This project implements an algorithm to analyze a sentence character by character. The program calculates the following metrics based on the sentence:

1. **Length of the sentence**: The total number of characters, including spaces and the final period.
2. **Number of words in the sentence**: Words are assumed to be separated by single spaces.
3. **Number of vowels in the sentence**: Vowels include `a, e, i, o, u` (both uppercase and lowercase).

---

## **How It Works**

- The algorithm processes the sentence character by character.
- It keeps track of the required metrics using three counters:
  - **Length Counter**: Counts all characters until the period.
  - **Word Counter**: Increments when a space followed by a non-space character is detected.
  - **Vowel Counter**: Checks if each character is a vowel and increments the counter.
- The program assumes the sentence ends with a period (`.`), which is not counted as part of the length or words.

---

## **Features**

- **Dynamic Analysis**: The algorithm can handle sentences of varying lengths.
- **Character-by-Character Processing**: Ensures memory-efficient handling of the input.
- **Simple Assumptions**: Assumes single spaces between words and a period to end the sentence.

---

## **Usage Instructions**

1. **Input a Sentence**: Provide a sentence that ends with a period (`.`).
2. **View Results**: The program outputs:
   - Total characters (excluding the ending period).
   - Total words in the sentence.
   - Total number of vowels in the sentence.

---

## **Example**

### Input:
```plaintext
This is an example sentence.
Output:
plaintext
Copy code
Length of the sentence: 27
Number of words: 5
Number of vowels: 10
Technologies Used
Programming Language: The algorithm is implemented in plain JavaScript or any preferred language.
Logic: Character-by-character processing with conditionals for analysis.
How to Run
Clone the repository or copy the algorithm into your local environment.
Run the script using a compatible runtime (e.g., Node.js for JavaScript).
Follow on-screen instructions to input a sentence and view results.


License
This project is licensed under the MIT License.

