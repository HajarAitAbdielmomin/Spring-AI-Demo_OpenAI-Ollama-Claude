
import './App.css'
import InputBox from "./components/InputField/InputBox.tsx";
import {useState} from "react";
import ChatCard from "./components/ChatCard/ChatCard.tsx";
import {openAiUrl, claudeUrl, ollamaUrl} from "./api/aiService.ts";
import {useFetch} from "./hooks/useFetch.ts";

function App() {
    const [prompt, setPrompt] = useState("");
    const openai = useFetch<string>();
    const claude = useFetch<string>();
    const ollama = useFetch<string>();

    const onSubmit = async () => {
        try {
            await Promise.all([
                openai.fetchData(openAiUrl(prompt)),
                claude.fetchData(claudeUrl(prompt)),
                ollama.fetchData(ollamaUrl(prompt))
            ]);
        } catch {
            console.error("Error fetching data");
        }
    };

    const onReset = () => {
        setPrompt("");
        openai.reset?.();
        claude.reset?.();
        ollama.reset?.();
    };

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
                      response={openai.data}
                      loading={openai.loading}
                      error={openai.error}
                      duration={openai.duration}
                      tokens={openai.tokens}
                  />

                  <ChatCard
                      title="Claude"
                      subtitle="Claude 3"
                      response={claude.data}
                      loading={claude.loading}
                      error={claude.error}
                      duration={claude.duration}
                      tokens={claude.tokens}
                  />

                  <ChatCard
                      title="Ollama"
                      subtitle="deepseek-r1"
                      response={ollama.data}
                      loading={ollama.loading}
                      error={ollama.error}
                      duration={ollama.duration}
                      tokens={ollama.tokens}
                  />
              </div>
              <div className="chat-input">
              <InputBox
                  value={prompt}
                  onChange={setPrompt}
                  onSubmit={() => onSubmit()}
              />
              <button className="reset-btn" onClick={onReset}>
                  Reset
              </button>
              </div>
          </div>

      </>
  )
}

export default App
