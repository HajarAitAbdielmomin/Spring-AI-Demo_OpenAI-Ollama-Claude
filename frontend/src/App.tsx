
import './App.css'
import InputBox from "./components/InputField/InputBox.tsx";
import {useState} from "react";
import ChatCard from "./components/ChatCard/ChatCard.tsx";

function App() {
    const [prompt, setPrompt] = useState("");

  return (
      <>
          <div className="container">
              <div className="description">
                  <h1>Simple Demo of Spring AI with Three AI Models</h1>

                  <p className="subtitle">
                      Compare OpenAI, Anthropic (Claude), and Ollama responses side-by-side using Spring AI.
                  </p>

                  <p className="guide">
                      For implementation details, see the project guide:
                      <a
                          href="https://medium.com/@hajar.aitabdielmomin/spring-ai-1aeb85db3d71"
                          target="_blank"
                          rel="noreferrer"
                      >
                          👉 The article
                      </a>
                  </p>
              </div>

              <div className="chat-cards">
                  <ChatCard
                      title="OpenAI"
                      subtitle="GPT-3"
                      status="done"
                      response="This is the response from OpenAI..."
                  />

                  <ChatCard
                      title="Claude"
                      subtitle="Claude 3"
                      status="pending"
                  />

                  <ChatCard
                      title="Ollama"
                      subtitle="deepseek-r1"
                      status="error"
                      response="Connection refused"
                  />
              </div>
              <div className="chat-input">
              <InputBox
                  value={prompt}
                  onChange={setPrompt}
                  onSubmit={() => console.log(prompt)}
              />
              </div>
          </div>

      </>
  )
}

export default App
