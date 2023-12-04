package com.deeppurple.deeppurple.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deeppurple.deeppurple.Service.PostService;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/v1/post")
public class PostController {

    @Autowired
    private PostService postService;

    @RequestMapping("/getEmotion")
    public ResponseEntity<String> getEmotionFromText(@RequestBody String post) {
        try {

            JsonParser springParser = JsonParserFactory.getJsonParser();
            post = (String) springParser.parseMap(post).get("post");
            if (post == null) {
                System.out.println("Post is null");
                return ResponseEntity.badRequest().body("Post is null");
            } else {
                System.out.println("Post: " + post);
                String emotions = postService.getEmotionFromText(post);
                return new ResponseEntity<String>(emotions, HttpStatus.OK);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.badRequest().body("Error");
    }
}
