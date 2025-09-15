package com.app.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.anthropic.AnthropicChatModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/anthropic")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AnthropicController {
    private final AnthropicChatModel chatModel;


    @GetMapping("/{message}")
    public ResponseEntity<String> getAnswer(@PathVariable String message){
        String response = chatModel.call(message);
        return ResponseEntity.ok(response);
    }
}
