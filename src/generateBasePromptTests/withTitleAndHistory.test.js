const { generateBasePrompt } = require("../promptUtils");

describe("generateBasePrompt (with title and history)", () => {
  it.each([
    [
      "Software Engineer",
      [
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
      ],
      `You are an AI interviewer for a Software Engineer position.
          You should also make the candidate laugh.
          The candidate's previous responses are:
          candidate: ramble lorem ramble ipsum javascript.
interviewer: Tell me about a project you have done using JavaScript.`,
    ],
    [
      "Data Scientist",
      [
        {
          role: "candidate",
          parts: [{ text: "ramble lorem ramble ipsum python." }],
        },
        {
          role: "interviewer",
          parts: [
            { text: "Tell me about a project you have done using Python." },
          ],
        },
      ],
      `You are an AI interviewer for a Data Scientist position.
          You should also make the candidate laugh.
          The candidate's previous responses are:
          candidate: ramble lorem ramble ipsum python.
interviewer: Tell me about a project you have done using Python.`,
    ],
    [
      "Game Developer",
      [
        {
          role: "candidate",
          parts: [{ text: "ramble lorem ramble ipsum C++." }],
        },
        {
          role: "interviewer",
          parts: [{ text: "Tell me about a project you have done using C++." }],
        },
      ],
      `You are an AI interviewer for a Game Developer position.
          You should also make the candidate laugh.
          The candidate's previous responses are:
          candidate: ramble lorem ramble ipsum C++.
interviewer: Tell me about a project you have done using C++.`,
    ],
    [
      "Mobile Developer",
      [
        {
          role: "candidate",
          parts: [{ text: "ramble lorem ramble ipsum Kotlin." }],
        },
        {
          role: "interviewer",
          parts: [
            { text: "Tell me about a project you have done using Kotlin." },
          ],
        },
      ],
      `You are an AI interviewer for a Mobile Developer position.
          You should also make the candidate laugh.
          The candidate's previous responses are:
          candidate: ramble lorem ramble ipsum Kotlin.
interviewer: Tell me about a project you have done using Kotlin.`,
    ],
  ])(
    "should generate a base prompt with job title %s and message history",
    (jobTitle, messageHistory, expectedPrompt) => {
      const result = generateBasePrompt(jobTitle, messageHistory);
      expect(result).toBe(expectedPrompt);
    }
  );
});
