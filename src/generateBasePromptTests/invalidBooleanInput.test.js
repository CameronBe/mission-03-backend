const { generateBasePrompt } = require("../promptUtils");

describe("generateBasePromptTest (invalid boolean input)", () => {
  test.each([true, false])(
    "Should return an error object if the provided input jobTitle is a boolean (%s)",
    (jobTitle) => {
      const actualOutput = generateBasePrompt(jobTitle, [
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
        error: `The provided input jobTitle ${jobTitle} is a boolean, but should be a string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );

  test.each([true, false])(
    "Should return an error object if the provided input messageHistory is a boolean (%s)",
    (messageHistory) => {
      const actualOutput = generateBasePrompt(
        "Software Developer",
        messageHistory
      );

      const expectedOutput = {
        error: `The provided input messageHistory ${messageHistory} is a boolean, but should be an array.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );
});
