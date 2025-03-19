const { generateQuestionPrompt } = require("../promptUtils");

describe("generateQuestionPromptTest (invalid empty input)", () => {
  test.each(["", {}, [], null, undefined])(
    "Should return an error object if the provided input basePrompt is an invalid empty input (%s)",
    (basePrompt) => {
      const actualOutput = generateQuestionPrompt(basePrompt, "userMessage");

      const expectedOutput = {
        error: `The provided input basePrompt is invalid, but should be a non-empty string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );

  test.each(["", {}, [], null, undefined])(
    "Should return an error object if the provided input userMessage is an invalid empty input (%s)",
    (userMessage) => {
      const actualOutput = generateQuestionPrompt("basePrompt", userMessage);

      const expectedOutput = {
        error: `The provided input userMessage is invalid, but should be a non-empty string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );
});
