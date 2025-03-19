const { generateEvaluationPrompt } = require("../promptUtils");

describe("generateEvaluationPromptTest (invalid boolean input)", () => {
  test.each([true, false])(
    "Should return an error object if the provided input basePrompt is a boolean (%s)",
    (basePrompt) => {
      const actualOutput = generateEvaluationPrompt(basePrompt);

      const expectedOutput = {
        error: `The provided input basePrompt ${basePrompt} is a boolean, but should be a string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );
});
