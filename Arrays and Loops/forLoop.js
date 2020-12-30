// for (let i = 0; i < 10; ++i) {
//     console.log(i);
// }

const states = ["West Bengal",
                "Odisha",
                "Sikkim",
                "Bihar",
                "Jharkhand",
                1695,
                "Delhi",
                "Maharashtra"
];

for(let i = 0; i <= states.length; i++) {// after execution let is gone
    if(typeof states[i] !== "string") continue;
    console.log(states[i]);
}
console.log("\nNew Loop\n");
for(let i = 0; i <= states.length; i++) {
    if(typeof states[i] !== "string") break;
    console.log(states[i]);
}