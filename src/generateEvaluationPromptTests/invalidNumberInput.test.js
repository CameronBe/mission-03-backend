const { generateEvaluationPrompt } = require("../promptUtils");

describe("generateEvaluationPromptTest (invalid number input)", () => {
  test.each([0, -1, 42, 100, 999])(
    "Should return an error object if the provided input basePrompt is a number (%s)",
    (basePrompt) => {
      const actualOutput = generateEvaluationPrompt(basePrompt);

      const expectedOutput = {
        error: `The provided input basePrompt ${basePrompt} is a number, but should be a string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );
});
