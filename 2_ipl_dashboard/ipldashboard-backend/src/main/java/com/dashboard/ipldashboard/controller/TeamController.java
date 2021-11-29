package com.dashboard.ipldashboard.controller;

import com.dashboard.ipldashboard.model.Match;
import com.dashboard.ipldashboard.model.Team;
import com.dashboard.ipldashboard.repository.MatchRepository;
import com.dashboard.ipldashboard.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
public class TeamController {

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    MatchRepository matchRepository;

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){

        Team team = teamRepository.findByTeamName(teamName);
        List<Match> matchList = matchRepository.findLatestMatchByTeam(teamName, 4);
        team.setMatches(matchList);

        matchList.forEach(match -> {
            System.out.println(match);
        });

        //System.out.println(team);
        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year){

        LocalDate startDate = LocalDate.of(year,1,1);
        LocalDate endDate = LocalDate.of(year+1, 1, 1 );

        return matchRepository.getMatchesByTeamBetweenDates(teamName, startDate,endDate);
    }
}
