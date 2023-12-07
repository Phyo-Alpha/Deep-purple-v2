package com.deeppurple.deeppurple.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deeppurple.deeppurple.Service.AnalysisService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api/v1/analysis")
public class AnalysisController {

    @Autowired
    private AnalysisService analysisService;

    @RequestMapping("/getSentiment")
    public ResponseEntity<String> getSentimentFromText(@RequestBody String post) {
        try {

            ObjectMapper mapper = new ObjectMapper();
            String postText = mapper.readTree(post).get("tweet").asText();

            String responseBody = analysisService.textToSentiment(postText);

            return ResponseEntity.ok().body(responseBody);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.badRequest().body("Error");
    }

    @RequestMapping("/getEmotion")
    public ResponseEntity<String> getEmotionFromText(@RequestBody String post) {
        try {

            ObjectMapper mapper = new ObjectMapper();
            String postText = mapper.readTree(post).get("tweet").asText();

            String responseBody = analysisService.textToEmotion(postText);

            return ResponseEntity.ok().body(responseBody);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.badRequest().body("Error");
    }

}