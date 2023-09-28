# Split des données par continent

```json
[                           
    {                         
        type: "MEN'S RANKING",  
        teamId: '2363',         
        teamName: 'New Zealand',
        continent: 'Oceania',   
        rank: 103,              
        rankChange: 0,          
        score: 1199,            
        scoreChange: 0,         
        updateDate: '2023-7'    
    },                        
    {                         
        type: "MEN'S RANKING",  
        teamId: '2865',
        teamName: 'Solomon Islands',
        continent: 'Oceania',
        rank: 133,
        rankChange: 0,
        score: 1098,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '8031',
        teamName: 'Papua New Guinea',
        continent: 'Oceania',
        rank: 159,
        rankChange: 0,
        score: 1003,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '6662',
        teamName: 'New Caledonia',
        continent: 'Oceania',
        rank: 161,
        rankChange: 0,
        score: 996,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '8030',
        teamName: 'Tahiti',
        continent: 'Oceania',
        rank: 162,
        rankChange: 0,
        score: 995,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '6661',
        teamName: 'Vanuatu',
        continent: 'Oceania',
        rank: 165,
        rankChange: 0,
        score: 986,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '6124',
        teamName: 'Fiji',
        continent: 'Oceania',
        rank: 169,
        rankChange: -1,
        score: 980,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '8034',
        teamName: 'Cook Islands',
        continent: 'Oceania',
        rank: 188,
        rankChange: -1,
        score: 899,
        scoreChange: 0,
        updateDate: '2023-7'
    }
]
```

# Sort des data

```javascript
    const europeSort = sortByRank(europe);
    const middleAndNorthAmericaSort = sortByRank(middleAndNorthAmerica);
    const africaSort = sortByRank(africa);
    const southAmericaSort = sortByRank(southAmerica)
    const asiaSort = sortByRank(asia);
    const oceaniaSort = sortByRank(oceania);
```

# Split des data par quota

```json
[                         
    {                       
        type: "MEN'S RANKING",
        teamId: '649',        
        teamName: 'France',   
        continent: 'Europe',  
        rank: 2,              
        rankChange: 0,        
        score: 1844,          
        scoreChange: 0,       
        updateDate: '2023-7'  
    },                      
    {                       
        type: "MEN'S RANKING",
        teamId: '744',
        teamName: 'England',
        continent: 'Europe',
        rank: 4,
        rankChange: 0,
        score: 1797,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '645',
        teamName: 'Belgium',
        continent: 'Europe',
        rank: 5,
        rankChange: 0,
        score: 1789,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '768',
        teamName: 'Croatia',
        continent: 'Europe',
        rank: 6,
        rankChange: 0,
        score: 1743,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '646',
        teamName: 'Netherlands',
        continent: 'Europe',
        rank: 7,
        rankChange: 0,
        score: 1731,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '771',
        teamName: 'Italy',
        continent: 'Europe',
        rank: 8,
        rankChange: 0,
        score: 1727,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '765',
        teamName: 'Portugal',
        continent: 'Europe',
        rank: 9,
        rankChange: 0,
        score: 1718,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '772',
        teamName: 'Spain',
        continent: 'Europe',
        rank: 10,
        rankChange: 0,
        score: 1703,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '648',
        teamName: 'Switzerland',
        continent: 'Europe',
        rank: 13,
        rankChange: 1,
        score: 1661,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '650',
        teamName: 'Germany',
        continent: 'Europe',
        rank: 15,
        rankChange: 0,
        score: 1636,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '638',
        teamName: 'Denmark',
        continent: 'Europe',
        rank: 19,
        rankChange: 0,
        score: 1597,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '644',
        teamName: 'Sweden',
        continent: 'Europe',
        rank: 23,
        rankChange: 0,
        score: 1547,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '634',
        teamName: 'Ukraine',
        continent: 'Europe',
        rank: 24,
        rankChange: 0,
        score: 1541,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '642',
        teamName: 'Serbia',
        continent: 'Europe',
        rank: 25,
        rankChange: 0,
        score: 1539,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '637',
        teamName: 'Poland',
        continent: 'Europe',
        rank: 26,
        rankChange: 0,
        score: 1537,
        scoreChange: 0,
        updateDate: '2023-7'
    },
    {
        type: "MEN'S RANKING",
        teamId: '647',
        teamName: 'Austria',
        continent: 'Europe',
        rank: 29,
        rankChange: 0,
        score: 1528,
        scoreChange: 0,
        updateDate: '2023-7'
    }
]
```

# Barrages

# Split des data en array de 4
```json
[                             
    [                           
        {                         
            type: "MEN'S RANKING",  
            teamId: '898',          
            teamName: 'South Korea',
            continent: 'Asia',      
            rank: 28,               
            rankChange: 0,          
            score: 1529,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '887',
            teamName: 'United Arab Emirates',
            continent: 'Asia',
            rank: 72,
            rankChange: 0,
            score: 1336,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '817',
            teamName: 'Mali',
            continent: 'Africa',
            rank: 51,
            rankChange: 1,
            score: 1438,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '813',
            teamName: 'Morocco',
            continent: 'Africa',
            rank: 14,
            rankChange: 1,
            score: 1656,
            scoreChange: 0,
            updateDate: '2023-7'
        }
    ],
    [
        {
            type: "MEN'S RANKING",
            teamId: '903',
            teamName: 'Japan',
            continent: 'Asia',
            rank: 20,
            rankChange: 0,
            score: 1596,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '744',
            teamName: 'England',
            continent: 'Europe',
            rank: 4,
            rankChange: 0,
            score: 1797,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '644',
            teamName: 'Sweden',
            continent: 'Europe',
            rank: 23,
            rankChange: 0,
            score: 1547,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '649',
            teamName: 'France',
            continent: 'Europe',
            rank: 2,
            rankChange: 0,
            score: 1844,
            scoreChange: 0,
            updateDate: '2023-7'
        }
    ],
    [
        {
            type: "MEN'S RANKING",
            teamId: '778',
            teamName: 'Brazil',
            continent: 'South America',
            rank: 3,
            rankChange: 0,
            score: 1828,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '768',
            teamName: 'Croatia',
            continent: 'Europe',
            rank: 6,
            rankChange: 0,
            score: 1743,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '798',
            teamName: 'Panama',
            continent: 'Middle and North America',
            rank: 45,
            rankChange: -12,
            score: 1454,
            scoreChange: 55,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '645',
            teamName: 'Belgium',
            continent: 'Europe',
            rank: 5,
            rankChange: 0,
            score: 1789,
            scoreChange: 0,
            updateDate: '2023-7'
        }
    ],
    [
        {
            type: "MEN'S RANKING",
            teamId: '18406',
            teamName: 'Algeria',
            continent: 'Africa',
            rank: 33,
            rankChange: 0,
            score: 1511,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '2363',
            teamName: 'New Zealand',
            continent: 'Oceania',
            rank: 103,
            rankChange: 0,
            score: 1199,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '799',
            teamName: 'Jamaica',
            continent: 'Middle and North America',
            rank: 58,
            rankChange: -5,
            score: 1410,
            scoreChange: 42,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '780',
            teamName: 'Chile',
            continent: 'South America',
            rank: 32,
            rankChange: 0,
            score: 1511,
            scoreChange: 0,
            updateDate: '2023-7'
        }
    ],
    [
        {
            type: "MEN'S RANKING",
            teamId: '648',
            teamName: 'Switzerland',
            continent: 'Europe',
            rank: 13,
            rankChange: 1,
            score: 1661,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '765',
            teamName: 'Portugal',
            continent: 'Europe',
            rank: 9,
            rankChange: 0,
            score: 1718,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '637',
            teamName: 'Poland',
            continent: 'Europe',
            rank: 26,
            rankChange: 0,
            score: 1537,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '793',
            teamName: 'Cameroon',
            continent: 'Africa',
            rank: 42,
            rankChange: -1,
            score: 1471,
            scoreChange: 0,
            updateDate: '2023-7'
        }
    ],
    [
        {
            type: "MEN'S RANKING",
            teamId: '17976',
            teamName: 'Curacao',
            continent: 'Middle and North America',
            rank: 88,
            rankChange: 0,
            score: 1268,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '735',
            teamName: 'Egypt',
            continent: 'Africa',
            rank: 34,
            rankChange: 0,
            score: 1510,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '772',
            teamName: 'Spain',
            continent: 'Europe',
            rank: 10,
            rankChange: 0,
            score: 1703,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '874',
            teamName: 'Iraq',
            continent: 'Asia',
            rank: 70,
            rankChange: 0,
            score: 1345,
            scoreChange: 0,
            updateDate: '2023-7'
        }
    ],
    [
        {
            type: "MEN'S RANKING",
            teamId: '891',
            teamName: 'Saudi Arabia',
            continent: 'Asia',
            rank: 54,
            rankChange: 1,
            score: 1421,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '797',
            teamName: 'USA',
            continent: 'Middle and North America',
            rank: 11,
            rankChange: 0,
            score: 1674,
            scoreChange: 1,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '815',
            teamName: 'Senegal',
            continent: 'Africa',
            rank: 18,
            rankChange: 0,
            score: 1613,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '795',
            teamName: 'Canada',
            continent: 'Middle and North America',
            rank: 43,
            rankChange: -2,
            score: 1459,
            scoreChange: 5,
            updateDate: '2023-7'
        }
    ],
    [
        {
            type: "MEN'S RANKING",
            teamId: '775',
            teamName: 'Colombia',
            continent: 'South America',
            rank: 17,
            rankChange: 0,
            score: 1625,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '789',
            teamName: 'Nigeria',
            continent: 'Africa',
            rank: 39,
            rankChange: 0,
            score: 1486,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '646',
            teamName: 'Netherlands',
            continent: 'Europe',
            rank: 7,
            rankChange: 0,
            score: 1731,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '766',
            teamName: 'Argentina',
            continent: 'South America',
            rank: 1,
            rankChange: 0,
            score: 1844,
            scoreChange: 0,
            updateDate: '2023-7'
        }
    ],
    [
        {
            type: "MEN'S RANKING",
            teamId: '771',
            teamName: 'Italy',
            continent: 'Europe',
            rank: 8,
            rankChange: 0,
            score: 1727,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '809',
            teamName: 'Ivory Coast',
            continent: 'Africa',
            rank: 52,
            rankChange: 1,
            score: 1433,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '647',
            teamName: 'Austria',
            continent: 'Europe',
            rank: 29,
            rankChange: 0,
            score: 1528,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '650',
            teamName: 'Germany',
            continent: 'Europe',
            rank: 15,
            rankChange: 0,
            score: 1636,
            scoreChange: 0,
            updateDate: '2023-7'
        }
    ],
    [
        {
            type: "MEN'S RANKING",
            teamId: '904',
            teamName: 'Qatar',
            continent: 'Asia',
            rank: 59,
            rankChange: 1,
            score: 1396,
            scoreChange: 2,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '823',
            teamName: 'Tunisia',
            continent: 'Africa',
            rank: 31,
            rankChange: 0,
            score: 1517,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '767',
            teamName: 'Uruguay',
            continent: 'South America',
            rank: 16,
            rankChange: 0,
            score: 1633,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '634',
            teamName: 'Ukraine',
            continent: 'Europe',
            rank: 24,
            rankChange: 0,
            score: 1541,
            scoreChange: 0,
            updateDate: '2023-7'
        }
    ],
    [
        {
            type: "MEN'S RANKING",
            teamId: '774',
            teamName: 'Peru',
            continent: 'South America',
            rank: 21,
            rankChange: 0,
            score: 1561,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '642',
            teamName: 'Serbia',
            continent: 'Europe',
            rank: 25,
            rankChange: 0,
            score: 1539,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '783',
            teamName: 'Iran',
            continent: 'Asia',
            rank: 22,
            rankChange: 0,
            score: 1557,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '638',
            teamName: 'Denmark',
            continent: 'Europe',
            rank: 19,
            rankChange: 0,
            score: 1597,
            scoreChange: 0,
            updateDate: '2023-7'
        }
    ],
    [
        {
            type: "MEN'S RANKING",
            teamId: '913',
            teamName: 'Australia',
            continent: 'Asia',
            rank: 27,
            rankChange: 0,
            score: 1530,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '2865',
            teamName: 'Solomon Islands',
            continent: 'Oceania',
            rank: 133,
            rankChange: 0,
            score: 1098,
            scoreChange: 0,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '819',
            teamName: 'Mexico',
            continent: 'Middle and North America',
            rank: 12,
            rankChange: -2,
            score: 1666,
            scoreChange: 27,
            updateDate: '2023-7'
        },
        {
            type: "MEN'S RANKING",
            teamId: '914',
            teamName: 'Costa Rica',
            continent: 'Middle and North America',
            rank: 46,
            rankChange: 4,
            score: 1454,
            scoreChange: -24,
            updateDate: '2023-7'
        }
    ]
]
```

# Réalisation des match de groupe et récupération des 32 équipe
```json
[
  {
    type: "MEN'S RANKING",
    teamId: '647',
    teamName: 'Austria',
    continent: 'Europe',
    rank: 29,
    rankChange: 0,
    score: 1528,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 7
  },
  {
    type: "MEN'S RANKING",
    teamId: '898',
    teamName: 'South Korea',
    continent: 'Asia',
    rank: 28,
    rankChange: 0,
    score: 1529,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 6
  },
  {
    type: "MEN'S RANKING",
    teamId: '649',
    teamName: 'France',
    continent: 'Europe',
    rank: 2,
    rankChange: 0,
    score: 1844,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 9
  },
  {
    type: "MEN'S RANKING",
    teamId: '645',
    teamName: 'Belgium',
    continent: 'Europe',
    rank: 5,
    rankChange: 0,
    score: 1789,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 7
  },
  {
    type: "MEN'S RANKING",
    teamId: '765',
    teamName: 'Portugal',
    continent: 'Europe',
    rank: 9,
    rankChange: 0,
    score: 1718,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 7
  },
  {
    type: "MEN'S RANKING",
    teamId: '797',
    teamName: 'USA',
    continent: 'Middle and North America',
    rank: 11,
    rankChange: 0,
    score: 1674,
    scoreChange: 1,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 3
  },
  {
    type: "MEN'S RANKING",
    teamId: '646',
    teamName: 'Netherlands',
    continent: 'Europe',
    rank: 7,
    rankChange: 0,
    score: 1731,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 2
  },
  {
    type: "MEN'S RANKING",
    teamId: '798',
    teamName: 'Panama',
    continent: 'Middle and North America',
    rank: 45,
    rankChange: -12,
    score: 1454,
    scoreChange: 55,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 1
  },
  {
    type: "MEN'S RANKING",
    teamId: '887',
    teamName: 'United Arab Emirates',
    continent: 'Asia',
    rank: 72,
    rankChange: 0,
    score: 1336,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 7
  },
  {
    type: "MEN'S RANKING",
    teamId: '904',
    teamName: 'Qatar',
    continent: 'Asia',
    rank: 59,
    rankChange: 1,
    score: 1396,
    scoreChange: 2,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 4
  },
  {
    type: "MEN'S RANKING",
    teamId: '815',
    teamName: 'Senegal',
    continent: 'Africa',
    rank: 18,
    rankChange: 0,
    score: 1613,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 5
  },
  {
    type: "MEN'S RANKING",
    teamId: '637',
    teamName: 'Poland',
    continent: 'Europe',
    rank: 26,
    rankChange: 0,
    score: 1537,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 4
  },
  {
    type: "MEN'S RANKING",
    teamId: '766',
    teamName: 'Argentina',
    continent: 'South America',
    rank: 1,
    rankChange: 0,
    score: 1844,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 6
  },
  {
    type: "MEN'S RANKING",
    teamId: '809',
    teamName: 'Ivory Coast',
    continent: 'Africa',
    rank: 52,
    rankChange: 1,
    score: 1433,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 4
  },
  {
    type: "MEN'S RANKING",
    teamId: '744',
    teamName: 'England',
    continent: 'Europe',
    rank: 4,
    rankChange: 0,
    score: 1797,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 9
  },
  {
    type: "MEN'S RANKING",
    teamId: '775',
    teamName: 'Colombia',
    continent: 'South America',
    rank: 17,
    rankChange: 0,
    score: 1625,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 7
  },
  {
    type: "MEN'S RANKING",
    teamId: '735',
    teamName: 'Egypt',
    continent: 'Africa',
    rank: 34,
    rankChange: 0,
    score: 1510,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 5
  },
  {
    type: "MEN'S RANKING",
    teamId: '902',
    teamName: 'Oman',
    continent: 'Asia',
    rank: 73,
    rankChange: 0,
    score: 1332,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 5
  },
  {
    type: "MEN'S RANKING",
    teamId: '913',
    teamName: 'Australia',
    continent: 'Asia',
    rank: 27,
    rankChange: 0,
    score: 1530,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 7
  },
  {
    type: "MEN'S RANKING",
    teamId: '813',
    teamName: 'Morocco',
    continent: 'Africa',
    rank: 14,
    rankChange: 1,
    score: 1656,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 3
  },
  {
    type: "MEN'S RANKING",
    teamId: '634',
    teamName: 'Ukraine',
    continent: 'Europe',
    rank: 24,
    rankChange: 0,
    score: 1541,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 6
  },
  {
    type: "MEN'S RANKING",
    teamId: '18406',
    teamName: 'Algeria',
    continent: 'Africa',
    rank: 33,
    rankChange: 0,
    score: 1511,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 5
  },
  {
    type: "MEN'S RANKING",
    teamId: '817',
    teamName: 'Mali',
    continent: 'Africa',
    rank: 51,
    rankChange: 1,
    score: 1438,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 7
  },
  {
    type: "MEN'S RANKING",
    teamId: '772',
    teamName: 'Spain',
    continent: 'Europe',
    rank: 10,
    rankChange: 0,
    score: 1703,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 5
  },
  {
    type: "MEN'S RANKING",
    teamId: '779',
    teamName: 'Ecuador',
    continent: 'South America',
    rank: 40,
    rankChange: 0,
    score: 1486,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 7
  },
  {
    type: "MEN'S RANKING",
    teamId: '638',
    teamName: 'Denmark',
    continent: 'Europe',
    rank: 19,
    rankChange: 0,
    score: 1597,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 6
  },
  {
    type: "MEN'S RANKING",
    teamId: '789',
    teamName: 'Nigeria',
    continent: 'Africa',
    rank: 39,
    rankChange: 0,
    score: 1486,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 5
  },
  {
    type: "MEN'S RANKING",
    teamId: '780',
    teamName: 'Chile',
    continent: 'South America',
    rank: 32,
    rankChange: 0,
    score: 1511,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 5
  },
  {
    type: "MEN'S RANKING",
    teamId: '891',
    teamName: 'Saudi Arabia',
    continent: 'Asia',
    rank: 54,
    rankChange: 1,
    score: 1421,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 4
  },
  {
    type: "MEN'S RANKING",
    teamId: '823',
    teamName: 'Tunisia',
    continent: 'Africa',
    rank: 31,
    rankChange: 0,
    score: 1517,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 4
  },
  {
    type: "MEN'S RANKING",
    teamId: '648',
    teamName: 'Switzerland',
    continent: 'Europe',
    rank: 13,
    rankChange: 1,
    score: 1661,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 4
  },
  {
    type: "MEN'S RANKING",
    teamId: '783',
    teamName: 'Iran',
    continent: 'Asia',
    rank: 22,
    rankChange: 0,
    score: 1557,
    scoreChange: 0,
    updateDate: '2023-7',
    matchHistory: [ [Object], [Object], [Object] ],
    groupPhaseScore: 4
  }
]
```

exemple de l'historique de match

```json
[                                                            
  { adversary: 'Japan', equipeScore: 0, adversaryScore: 0 }, 
  { adversary: 'Chile', equipeScore: 1, adversaryScore: 0 }, 
  { adversary: 'Denmark', equipeScore: 1, adversaryScore: 1 }
]   
```

# Phase éliminatoire
chunk de l'array par 2 et récupération des gagnant jusqu'à la finale

```json
[
  [
    {
      type: "MEN'S RANKING",
      teamId: '799',
      teamName: 'Jamaica',
      continent: 'Middle and North America',
      rank: 58,
      rankChange: -5,
      score: 1410,
      scoreChange: 42,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 9
    },
    {
      type: "MEN'S RANKING",
      teamId: '637',
      teamName: 'Poland',
      continent: 'Europe',
      rank: 26,
      rankChange: 0,
      score: 1537,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 4
    }
  ],
  [
    {
      type: "MEN'S RANKING",
      teamId: '815',
      teamName: 'Senegal',
      continent: 'Africa',
      rank: 18,
      rankChange: 0,
      score: 1613,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 2
    },
    {
      type: "MEN'S RANKING",
      teamId: '874',
      teamName: 'Iraq',
      continent: 'Asia',
      rank: 70,
      rankChange: 0,
      score: 1345,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 4
    }
  ],
  [
    {
      type: "MEN'S RANKING",
      teamId: '645',
      teamName: 'Belgium',
      continent: 'Europe',
      rank: 5,
      rankChange: 0,
      score: 1789,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 6
    },
    {
      type: "MEN'S RANKING",
      teamId: '767',
      teamName: 'Uruguay',
      continent: 'South America',
      rank: 16,
      rankChange: 0,
      score: 1633,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 6
    }
  ],
  [
    {
      type: "MEN'S RANKING",
      teamId: '780',
      teamName: 'Chile',
      continent: 'South America',
      rank: 32,
      rankChange: 0,
      score: 1511,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 6
    },
    {
      type: "MEN'S RANKING",
      teamId: '649',
      teamName: 'France',
      continent: 'Europe',
      rank: 2,
      rankChange: 0,
      score: 1844,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 6
    }
  ],
  [
    {
      type: "MEN'S RANKING",
      teamId: '2363',
      teamName: 'New Zealand',
      continent: 'Oceania',
      rank: 103,
      rankChange: 0,
      score: 1199,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 7
    },
    {
      type: "MEN'S RANKING",
      teamId: '904',
      teamName: 'Qatar',
      continent: 'Asia',
      rank: 59,
      rankChange: 1,
      score: 1396,
      scoreChange: 2,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 3
    }
  ],
  [
    {
      type: "MEN'S RANKING",
      teamId: '647',
      teamName: 'Austria',
      continent: 'Europe',
      rank: 29,
      rankChange: 0,
      score: 1528,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 5
    },
    {
      type: "MEN'S RANKING",
      teamId: '772',
      teamName: 'Spain',
      continent: 'Europe',
      rank: 10,
      rankChange: 0,
      score: 1703,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 7
    }
  ],
  [
    {
      type: "MEN'S RANKING",
      teamId: '903',
      teamName: 'Japan',
      continent: 'Asia',
      rank: 20,
      rankChange: 0,
      score: 1596,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 4
    },
    {
      type: "MEN'S RANKING",
      teamId: '789',
      teamName: 'Nigeria',
      continent: 'Africa',
      rank: 39,
      rankChange: 0,
      score: 1486,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 3
    }
  ],
  [
    {
      type: "MEN'S RANKING",
      teamId: '775',
      teamName: 'Colombia',
      continent: 'South America',
      rank: 17,
      rankChange: 0,
      score: 1625,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 4
    },
    {
      type: "MEN'S RANKING",
      teamId: '771',
      teamName: 'Italy',
      continent: 'Europe',
      rank: 8,
      rankChange: 0,
      score: 1727,
      scoreChange: 0,
      updateDate: '2023-7',
      matchHistory: [Array],
      groupPhaseScore: 7
    }
  ]
]
```

# le Match finale
résultat en console
```bash
WINNER France 5 - 1 LOOSER Colombia
```
