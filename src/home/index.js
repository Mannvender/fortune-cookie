import React, { useState } from "react";
import Groq from "groq-sdk";

export default function Home() {
  async function getGroqChatCompletion() {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "Give me a funny fortune cookie, keep it one liner",
        },
      ],
      model: "llama-3.3-70b-versatile",
    });
  }
  const groq = new Groq({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });
  const [message, setMessage] = useState("");
  const handleClick = () => {
    getGroqChatCompletion().then((response) => {
      console.log(response);
      setMessage(response.choices[0]?.message?.content || "");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Give me a fortune cookie
      </button>
      <div className="mt-4 text-white text-center">{message}</div>
    </div>
  );
}
