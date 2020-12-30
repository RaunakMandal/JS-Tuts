const states = ["West Bengal",
                "Odisha",
                "Sikkim",
                "Bihar",
                "Jharkhand",
                1695,
                "Delhi",
                "Maharashtra"
];

let i = 0;
// While
// while(i < states.length) {
//     console.log(states[i]);
//     i++;
// }

// Do-While
let j = 0
do {
    console.log(states[j]);
    j++;
}while(j === states.length);

// do while runs once even the condition is wrong
// because it first executes then checks condition