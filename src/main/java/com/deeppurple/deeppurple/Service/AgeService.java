package com.deeppurple.deeppurple.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.deeppurple.deeppurple.Repo.AgeRepository;

import java.util.List;
import com.deeppurple.deeppurple.Model.Age;

@Service
public class AgeService {

    @Autowired
    private AgeRepository ageRepository;

    public List<Age> getAllAges() {
        return ageRepository.findAll();
    }

    public Age addAge(Age age) {
        return ageRepository.save(age);
    }
}
