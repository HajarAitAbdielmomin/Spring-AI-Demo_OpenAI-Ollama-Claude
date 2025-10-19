package com.app.controllers;


import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ollama")
@CrossOrigin("*")
public class OllamaController {
    private final ChatClient chatClient;

    public OllamaController(OllamaChatModel chatModel) {
        this.chatClient = ChatClient.create(chatModel);
    }

    @GetMapping("/{prompt}")
    public ResponseEntity<String> getAnswer(@PathVariable String prompt){

        ChatResponse chatResponse = chatClient.prompt(prompt).call().chatResponse();

        System.out.println(chatResponse.getMetadata().getModel());

        String response = chatResponse.getResult().getOutput().getText();

        return ResponseEntity.ok(response);
    }
}
