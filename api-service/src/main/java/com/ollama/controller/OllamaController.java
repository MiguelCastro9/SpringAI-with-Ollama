package com.ollama.controller;

import com.ollama.service.OllamaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Miguel Castro
 */
@RestController
public class OllamaController {

    @Autowired
    private OllamaService ollamaService;

    @GetMapping("api/v1/ollama")
    public String generate(@RequestParam(value = "prompt") String prompt) {
        return ollamaService.generateService(prompt);
    }
}
