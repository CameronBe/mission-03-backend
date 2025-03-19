const generatePrompt = require("../generatePrompt");
describe("generatePromptTest (invalid boolean input)", () => {
  test.each([true, false])(
    "Should return an error object if the provided input jobTitle is a boolean (%s)",
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
        error: `The provided input jobTitle ${jobTitle} is a boolean, but should be a string.`,
      };
      expect(actualOutput).toEqual(expectedOutput);
    }
  );
  test.each([true, false])(
    "Should return an error object if the provided input userMessage is a boolean (%s)",
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
        error: `The provided input userMessage ${userMessage} is a boolean, but should be a string.`,
      };
      expect(actualOutput).toEqual(expectedOutput);
    }
  );
  test.each([true, false])(
    "Should return an error object if the provided input messageHistory is a boolean (%s)",
    (messageHistory) => {
      const actualOutput = generatePrompt(
        "jobTitle",
        "userMessage",
        messageHistory
      );
      const expectedOutput = {
        error: `The provided input messageHistory ${messageHistory} is a boolean, but should be an array.`,
      };
      expect(actualOutput).toEqual(expectedOutput);
    }
  );
});
