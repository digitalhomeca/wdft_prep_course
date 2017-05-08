//magic eightball

var numberofreplys = 2;
function ask() {
    var choice = Math.floor(Math.random() * numberofreplys + 1);
    var reply = 'You need to make some options using if/else';
    
    if(choice = 1) {
        console.log('Premier Player');
    } else if(choice = 2) {
        console.log("Second Place");
    } else {
        console.log("Sorry you lose.");
    }
    
}

ask();