console.log(this);

var user = {
    name : "Raunak",
    frnds : 5,
    getcount : function() {
        console.log("Line 7: ",this); // this will return object if it is a object call
        function say() {
            console.log("Line 9");
            console.log("Line 10: ",this);
        };
        say();
    }
}

user.getcount()