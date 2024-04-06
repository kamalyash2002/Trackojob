const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();


const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function generateReferralMessage(referralMessage, email) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "Give me short referral message for google sde-1 in 30 words"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

module.exports = {
  generateReferralMessage,
};

