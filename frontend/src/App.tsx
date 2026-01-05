
import './App.css'
import InputBox from "./components/InputField/InputBox.tsx";
import {useState} from "react";
import ChatCard from "./components/ChatCard/ChatCard.tsx";

function App() {
    const [prompt, setPrompt] = useState("");

  return (
      <>
          <div className="container">
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
