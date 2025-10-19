package com.app.controllers;

import org.springframework.ai.anthropic.AnthropicChatModel;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/anthropic")
@CrossOrigin("*")
public class AnthropicController {
    private final ChatClient chatClient;

    public AnthropicController(AnthropicChatModel chatModel) {
        this.chatClient = ChatClient.create(chatModel);
    }


    @GetMapping("/{prompt}")
    public ResponseEntity<String> getAnswer(@PathVariable String prompt){
        String response = chatClient.prompt(prompt).call().content();
        return ResponseEntity.ok(response);
    }
}
