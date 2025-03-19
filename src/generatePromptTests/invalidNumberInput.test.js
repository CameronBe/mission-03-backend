const generatePrompt = require("../generatePrompt");

describe("generatePromptTest (invalid number input)", () => {
  test.each([0, -1, 42, 100, 999])(
    "Should return an error object if the provided input jobTitle is a number (%s)",
    (jobTitle) => {
      const actualOutput = generatePrompt(jobTitle, "userMessage", [
        {
          role: "candidate",
          parts: [{ text: "ramble lorem ramble ipsum javascript." }],
        },
        {
          role: "interviewer",
          parts: [
            { text: "Tell me about a project you have done using JavaScript." },
          ],
        },
      ]);

      const expectedOutput = {
        error: `The provided input jobTitle ${jobTitle} is a number, but should be a string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );

  test.each([0, -1, 42, 100, 999])(
    "Should return an error object if the provided input userMessage is a number (%s)",
    (userMessage) => {
      const actualOutput = generatePrompt("jobTitle", userMessage, [
        {
          role: "candidate",
          parts: [{ text: "ramble lorem ramble ipsum javascript." }],
        },
        {
          role: "interviewer",
          parts: [
            { text: "Tell me about a project you have done using JavaScript." },
          ],
        },
      ]);

      const expectedOutput = {
        error: `The provided input userMessage ${userMessage} is a number, but should be a string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );

  test.each([1, 2, 3])(
    "Should return an error object if the provided input messageHistory is a number (%s)",
    (messageHistory) => {
      const actualOutput = generatePrompt(
        "jobTitle",
        "userMessage",
        messageHistory
      );

      const expectedOutput = {
        error: `The provided input messageHistory ${messageHistory} is a number, but should be an array.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );
});
