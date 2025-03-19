const { generateQuestionPrompt } = require("../promptUtils");

describe("generateQuestionPromptTest (invalid boolean input)", () => {
  test.each([true, false])(
    "Should return an error object if the provided input basePrompt is a boolean (%s)",
    (basePrompt) => {
      const actualOutput = generateQuestionPrompt(basePrompt, "userMessage");

      const expectedOutput = {
        error: `The provided input basePrompt ${basePrompt} is a boolean, but should be a string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );

  test.each([true, false])(
    "Should return an error object if the provided input userMessage is a boolean (%s)",
    (userMessage) => {
      const actualOutput = generateQuestionPrompt("basePrompt", userMessage);

      const expectedOutput = {
        error: `The provided input userMessage ${userMessage} is a boolean, but should be a string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );
});
