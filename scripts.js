var months = ["January", "February", "March", "April", "May", "June", "August", "September", "October", "November", "December"];

function randint(max) {
    return Math.floor(Math.random() * max);
}

function randomMonth() {
    try {
        var newMonth = months[randint((months.length - 1))];
        var pos = months.indexOf(newMonth);

        var before = months.slice(0, pos);
        var after = months[pos];
        months = months.concat(after);

        document.getElementById("month").innerHTML = newMonth;
    }
    catch(error) {
        console.log(error)
        document.getElementById("month").innerHTML = error;
    }
    
}