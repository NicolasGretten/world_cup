const shootToGoal = (match) =>{
    const match2 = {...match};
    while(rules(match2)){
        match2.penaltyRound++
        match2.teams.forEach(team => {
            const result = isGoalScored(shoot(Math.random() >= 0.5))
            if(result) team.penaltyScore++
            else team.penaltyMissed++
        })
    }

    if(!rules(match2)){
        const result = showWinner(match2);
        console.log(result, match2);
        return result;
    }
}

const shoot = (random) => {
    const goal = ["goal", "miss"];
    return goal[random ? 1 : 0];
}

const isGoalScored = (shootResult) => {
    return shootResult === "goal";
}

const rules =  (match) => {
    if(match.penaltyRound <5){
        return true;
    } else if(teamAreEven(match)){
        return true
    } else return false
}

const teamAreEven = (match) => {
    if(match.teams[0].penaltyScore === match.teams[1].penaltyScore) return true;
    // else if(match.penaltyRound > 5 && (match.teams[0].penaltyScore - match.teams[1].penaltyScore !== 2 || match.teams[0].penaltyScore - match.teams[1].penaltyScore  !== -2)) return true;
    else return false;
}

const showWinner = (match) => {
    if(match.teams[0].penaltyScore - match.teams[1].penaltyScore >= 1) {
        return "TEAM ONE WINNER"
    }
    else if(match.teams[0].penaltyScore - match.teams[1].penaltyScore < 1) {
        return "TEAM TWO WINNER"
    }
}

const match = {
    "penaltyRound": 0,
    "teams": [
        {
            "penaltyScore": 0,
            "penaltyMissed": 0,
        },
        {

            "penaltyScore": 0,
            "penaltyMissed": 0,
        }
    ]
}

shootToGoal(match);

export {
    shootToGoal,
    shoot,
    isGoalScored,
    rules,
    teamAreEven,
    showWinner
};