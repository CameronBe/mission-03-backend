const { generateEvaluationPrompt } = require("../promptUtils");

describe("generateEvaluationPromptTest (invalid empty input)", () => {
  test.each(["", {}, [], null, undefined])(
    "Should return an error object if the provided input basePrompt is an invalid empty input (%s)",
    (basePrompt) => {
      const actualOutput = generateEvaluationPrompt(basePrompt);

      const expectedOutput = {
        error: `The provided input basePrompt is invalid, but should be a non-empty string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );
});
