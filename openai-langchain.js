import * as dotenv from "dotenv";
dotenv.config();

import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0.7,
});

const response = await model.invoke(
  "Quelle est la capitale de la République du Congo ?"
);

console.log(response.content);
