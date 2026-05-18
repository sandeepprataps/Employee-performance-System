const express = require("express");
const axios = require("axios");

const Employee =
  require("../models/Employee");

const router = express.Router();

router.post("/recommend", async (req, res) => {

  try {

    const employees =
      await Employee.find();

    const prompt = `
Analyze employees and provide:

1. Promotion recommendations
2. Training suggestions
3. Employee ranking
4. Performance feedback

Employees:
${employees.map((e, i) => `
${i + 1}.
Name: ${e.name}
Department: ${e.department}
Skills: ${e.skills.join(", ")}
Performance Score: ${e.performanceScore}
Experience: ${e.experience}
`).join("\n")}
`;

    const response =
      await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "openai/gpt-5.2",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ]
        },
        {
          headers: {
            Authorization:
              `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type":
              "application/json"
          }
        }
      );

    res.json(
      response.data.choices[0].message
    );

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

module.exports = router;