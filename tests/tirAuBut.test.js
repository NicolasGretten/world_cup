import { describe, expect, test } from "@jest/globals";
import {shootToGoal, showWinner, teamAreEven, rules, isGoalScored, shoot} from "../src/tirAuBut.js";

describe("Shoot To Goal", () => {
    let match = {
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
    test("shootToGoal(match) should return a winner", () => {
        expect(shootToGoal(match)).toContain("WINNER");
    });
});
describe("Show Winner", () => {
    const match2 = {
        "penaltyRound": 5,
        "teams": [
            {
                "penaltyScore": 5,
                "penaltyMissed": 0,
            },
            {

                "penaltyScore": 0,
                "penaltyMissed": 5,
            }
        ]
    }

    test("showWinner(match) should return a TEAM ONE WINNER", () => {
        expect(showWinner(match2)).toEqual("TEAM ONE WINNER");
    });
    const match3 = {
        "penaltyRound": 5,
        "teams": [
            {
                "penaltyScore": 0,
                "penaltyMissed": 5,
            },
            {

                "penaltyScore": 5,
                "penaltyMissed": 0,
            }
        ]
    }

    test("showWinner(match) should return a TEAM TWO WINNER", () => {
        expect(showWinner(match3)).toEqual("TEAM TWO WINNER");
    });
});
describe("Team Are Evens", () => {
    const match4 = {
        "penaltyRound": 5,
        "teams": [
            {
                "penaltyScore": 5,
                "penaltyMissed": 0,
            },
            {

                "penaltyScore": 5,
                "penaltyMissed": 0,
            }
        ]
    }

    test("teamAreEven(match) should return a true", () => {
        expect(teamAreEven(match4)).toBe(true);
    });

    const match5 = {
        "penaltyRound": 5,
        "teams": [
            {
                "penaltyScore": 5,
                "penaltyMissed": 0,
            },
            {

                "penaltyScore": 4,
                "penaltyMissed": 1,
            }
        ]
    }

    test("teamAreEven(match) should return a false", () => {
        expect(teamAreEven(match5)).toBe(false);
    });
});
describe("Rules", () => {
    const match6 = {
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

    test("rules(match) should return a true", () => {
        expect(rules(match6)).toBe(true);
    });

    const match7 = {
        "penaltyRound": 5,
        "teams": [
            {
                "penaltyScore": 5,
                "penaltyMissed": 0,
            },
            {

                "penaltyScore": 0,
                "penaltyMissed": 5,
            }
        ]
    }

    test("rules(match) should return a false", () => {
        expect(rules(match7)).toBe(false);
    });
});
describe("Is Goal Scored", () => {
    test("isGoalScored(match) should return a true", () => {
        expect(isGoalScored('goal')).toBe(true);
    });

    test("isGoalScored(match) should return a false", () => {
        expect(isGoalScored('miss')).toBe(false);
    });
});
describe("Shoot", () => {
    test("shoot(match) should return a goal", () => {
        expect(shoot(0)).toBe("goal");
    });

    test("isGoalScored(match) should return a miss", () => {
        expect(shoot(1)).toBe("miss");
    });
});