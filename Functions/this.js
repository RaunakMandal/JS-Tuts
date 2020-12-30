//TODO: this part 1

console.log(this);

var game = "Cricket";
function sayMyName() {
    var name = "Raunak";
    console.log(this);
}

sayMyName();

// scope is different in every engine