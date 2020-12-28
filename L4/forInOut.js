const names = [
    "Facebook", "WhatsApp", "Instagram", "Twitter"
]

for(const i of names) {
    console.log(i);
}

// For in
const symbols = {
    yt : "YouTube",
    fb : "Facebook",
    ig : "Instagram",
    wp : "WhatsApp"
}
for(const i in symbols) {
    console.log(`Key is: ${i} and value is: ${symbols[i]}`);
}