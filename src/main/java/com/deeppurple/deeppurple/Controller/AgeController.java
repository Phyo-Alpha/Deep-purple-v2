package com.deeppurple.deeppurple.Controller;

import java.util.List;
import com.deeppurple.deeppurple.Service.AgeService;
import com.deeppurple.deeppurple.Model.Age;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class AgeController {

    @Autowired
    private AgeService ageService;

    @GetMapping("/ages")
    public List<Age> getAllAges() {
        System.out.println(ageService.getAllAges());
        return ageService.getAllAges();
    }

    @PostMapping("/age")
    public ResponseEntity<Age> createAge(@RequestBody Age age) {
        return ResponseEntity.ok(ageService.addAge(age));
    }
}
