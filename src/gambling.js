const gamble = ["1", '1', '2', '1', '1', '2', '2', '2', '2', '2']
const mise = 100;
const matchs = [
    // {
    //     "name": "A.Hernandez vs B.Algeo",
    //     "1": 2.00,
    //     "x": 2,
    //     "2": 1.67
    // },
    // {
    //     "name": "P.Lins vs I.Cutelaba",
    //     "1": 2.00,
    //     "x": 2,
    //     "2": 1.67
    // },
    // {
    //     "name": "D.Dober vs R.Glenn",
    //     "1": 1.20,
    //     "x": 2,
    //     "2": 3.75
    // },
    // {
    //     "name": "A.Morono vs J.Buckley",
    //     "1": 2.40,
    //     "x": 2,
    //     "2": 1.48
    // },
    // {
    //     "name": "J.Pyfer vs A.R.Alhassan",
    //     "1": 1.24,
    //     "x": 2,
    //     "2": 3.50
    // },
    // {
    //     "name": "G.Dawson vs B.Green",
    //     "1": 1.22,
    //     "x": 2,
    //     "2": 3.75
    // },
    // {
    //     "name": "L.Carmouche vs I-L.Macfarlane",
    //     "1": 1.50,
    //     "x": 2,
    //     "2": 2.35
    // },
    // {
    //     "name": "R.Bader vs L.Vassel",
    //     "1": 1.50,
    //     "x": 2,
    //     "2": 2.35
    // },
    // {
    //     "name": "C.Justino Cyborg vs C.Zingano",
    //     "1": 1.15,
    //     "x": 2,
    //     "2": 4.70
    // },
    // {
    //     "name": "L.Carmouche vs I-L.Macfarlane",
    //     "1": 1.50,
    //     "x": 2,
    //     "2": 2.35
    // },
    {
        "name": "U.Nurmagomedov vs B.Primus",
        "1": 1.05,
        "x": 2,
        "2": 7.50
    },
    {
        "name": "S.Yusuff vs E.Barboza",
        "1": 1.48,
        "x": 2,
        "2": 2.40
    },
    {
        "name": "P.Costa vs K.Chimaev",
        "1": 3.75,
        "x": 2,
        "2": 1.22
    },
    {
        "name": "M.Ankalaev vs J.Walker",
        "1": 1.17,
        "x": 2,
        "2": 4.00
    },
    {
        "name": "I.Makhachev vs C.Oliveira",
        "1": 1.25,
        "x": 2,
        "2": 3.50
    },
]
// Helper function to generate combinations
const generateCombinations = (matches) => {
    // Initial accumulator with an empty array
    const accumulator = [[]];

    // Use reduce to iterate through matches and generate combinations
    return matches.reduce((combinations) => {
        console.log("COMBINATION", combinations)
        // For each existing combination, create three new combinations
        return combinations.flatMap((combination) => [
            [...combination, '1'],
            [...combination, 'x'],
            [...combination, '2'],
        ]);
    }, accumulator);
};

// Generate all possible combinations
const betCombinations = generateCombinations(matchs);

const allBet = (gamble) => {
    const g = [];
    matchs.forEach((match, index) => {

        if(gamble[index]){
            g.push(match[gamble[index]])
        } else console.log("flo as dit que il faut")
    })

    let gain = 0;

    g.forEach(value => {
        gain = gain === 0 ? value : gain * value
    })

    gamble.push(gain);

    gain = gain * mise;

    return Math.floor(gain);
}

function compareArrays(arr1, arr2) {
    const num1 = arr1[0];
    const num2 = arr2[0];

    // Compare based on the first element (number)
    return num2 - num1;
}

betCombinations.forEach(value => {
    value.unshift(allBet(value));
})

console.log(betCombinations.sort(compareArrays))
console.log(betCombinations.length)

