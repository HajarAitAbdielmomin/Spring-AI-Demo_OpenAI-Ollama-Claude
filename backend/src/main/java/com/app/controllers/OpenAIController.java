package com.app.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/openai")
@CrossOrigin("*")
@RequiredArgsConstructor
public class OpenAIController {
    private final OpenAiChatModel chatModel;


    @GetMapping("/{prompt}")
    public ResponseEntity<String> getAnswer(@PathVariable String prompt){
        String response = chatModel.call(prompt);
        return ResponseEntity.ok(response);
    }
}
