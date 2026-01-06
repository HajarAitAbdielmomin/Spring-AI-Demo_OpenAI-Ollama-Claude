const encode = (prompt: string) => encodeURIComponent(prompt);

export const openAiUrl = (p: string) =>
    `http://localhost:8081/api/openai/${encode(p)}`;

export const claudeUrl = (p: string) =>
    `http://localhost:8081/api/anthropic/${encode(p)}`;

export const ollamaUrl = (p: string) =>
    `http://localhost:8081/api/ollama/${encode(p)}`;
