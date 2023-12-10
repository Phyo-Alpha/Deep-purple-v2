package com.deeppurple.deeppurple.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class UserPostsRequestService {

    public void getTweets(String username) {
        WebClient webClient = WebClient.create();// replace with the Twitter username
        System.out.println("Getting tweets for " + username);
        String url = "http://localhost:5000/tweets/" + username;

        String response = webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        System.out.println(response);
    }
}
