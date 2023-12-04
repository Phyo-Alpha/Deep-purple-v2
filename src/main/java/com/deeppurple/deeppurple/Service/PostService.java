package com.deeppurple.deeppurple.Service;

import java.io.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.deeppurple.deeppurple.Repo.PostRepository;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public String getEmotionFromText(String text) throws IOException {
        ProcessBuilder processBuilder = new ProcessBuilder();
        Process p = processBuilder
                .command("python", "src/main/java/com/deeppurple/deeppurple/Service/Emotion.py", text).start();

        BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
        BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));
        String s = stdInput.readLine();
        if (s != null) {
            System.out.println("Emotion: " + s);
            return s;
        }
        if (stdError.readLine() != null) {
            System.out.println("Error: " + stdError.readLine());
        }
        return null;
    }
}
