const { generateBasePrompt } = require("../../../promptUtils");

describe("generateBasePromptTest (invalid empty input)", () => {
  test.each(["", {}, [], null, undefined])(
    "Should return an error object if the provided input jobTitle is an invalid empty input (%s)",
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
        error: `The provided input jobTitle is invalid, but should be a non-empty string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );

  test.each(["", {}, [], null, undefined])(
    "Should return an error object if the provided input messageHistory is an invalid empty input (%s)",
    (messageHistory) => {
      const actualOutput = generateBasePrompt(
        "Software Developer",
        messageHistory
      );

      const expectedOutput = {
        error: `The provided input messageHistory is invalid, but should be a non-empty array.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );
});
