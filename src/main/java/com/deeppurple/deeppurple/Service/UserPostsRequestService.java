package com.deeppurple.deeppurple.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import org.springframework.beans.factory.annotation.Value;

@Service
public class UserPostsRequestService {

    @Value("${Twitter_API_URL}")
    private String TWITTER_API_URL;

    public String getTweets(String username) {
        WebClient webClient = WebClient.create();// replace with the Twitter username
        System.out.println("Getting tweets for " + username);
        String url = TWITTER_API_URL + "/tweets/" + username;

        String response = webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        System.out.println(response);

        return response;
    }
}
