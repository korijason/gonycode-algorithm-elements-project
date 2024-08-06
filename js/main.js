//JavaScript algorithm
function analyzeSentence(sentence) {
  if (!sentence.endsWith(".")) {
    throw new Error("The sentence must end with a period.");
  }

  let length = 0;
  let wordCount = 0;
  let vowelCount = 0;

  const vowels = "aeiouAEIOU";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    length++;

    if (char === " ") {
      wordCount++;
    } else if (char !== ".") {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  }

  if (length > 1) {
    wordCount++;
  }

  return {
    length,
    wordCount,
    vowelCount,
  };
}

//Handling form submission
document
  .getElementById("sentenceForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const sentence = document.getElementById("sentenceInput").value;
    let resultsDiv = document.getElementById("results");

    try {
      const result = analyzeSentence(sentence);

      resultsDiv.innerHTML = `
                        <p><strong>Length of the sentence:</strong> ${result.length}</p>
                        <p><strong>Number of words in the sentence:</strong> ${result.wordCount}</p>
                        <p><strong>Number of vowels in the sentence:</strong> ${result.vowelCount}</p>
                    `;
    } catch (error) {
      resultsDiv.innerHTML = `<p style="color: red;">${error.message}</p>`; //
    }
  });
