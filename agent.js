import OpenAI from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const client = new OpenAI();

const response = await client.responses.create({
  model: "gpt-4o-mini",
  input: "Quelle est la capitale de la République du Congo ?",
});

console.log(response.output_text);
