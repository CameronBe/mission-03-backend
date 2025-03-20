const request = require("supertest");
const app = require("../../app");

describe("POST /api/interview", () => {
  test("should return 200 and a valid AI response", async () => {
    const response = await request(app)
      .post("/api/interview")
      .send({
        jobTitle: "Software Engineer",
        messageHistory: [
          {
            parts: [{ text: "Tell me about yourself." }],
          },
        ],
      })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toHaveProperty("reply");
    expect(typeof response.body.reply).toBe("string");
  });

  test("should return 200 and a valid AI response for a different question", async () => {
    const response = await request(app)
      .post("/api/interview")
      .send({
        jobTitle: "Software Engineer",
        messageHistory: [
          {
            parts: [{ text: "What are your strengths?" }],
          },
        ],
      })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toHaveProperty("reply");
    expect(typeof response.body.reply).toBe("string");
  });

  test("should return 200 and a valid AI response for multiple messages", async () => {
    const response = await request(app)
      .post("/api/interview")
      .send({
        jobTitle: "Software Engineer",
        messageHistory: [
          {
            parts: [{ text: "Tell me about yourself." }],
          },
          {
            parts: [{ text: "What are your weaknesses?" }],
          },
        ],
      })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toHaveProperty("reply");
    expect(typeof response.body.reply).toBe("string");
  });

  test("should return 400 for missing jobTitle", async () => {
    const response = await request(app)
      .post("/api/interview")
      .send({
        messageHistory: [
          {
            parts: [{ text: "Tell me about yourself." }],
          },
        ],
      })
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toHaveProperty("error", "Missing job title");
  });

  test("should return 400 for empty request body", async () => {
    const response = await request(app)
      .post("/api/interview")
      .send({})
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toHaveProperty("error", "Invalid request body");
  });

  test("should return 400 for invalid message history format", async () => {
    const response = await request(app)
      .post("/api/interview")
      .send({
        jobTitle: "Software Engineer",
        messageHistory: [],
      })
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toHaveProperty(
      "error",
      "Invalid message history format"
    );
  });
});
