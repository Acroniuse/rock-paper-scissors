console. log("Hello World")
function getComputerChoice() {

    let compchoise = Math.floor(Math.random() * 3);
    
    if (compchoise == 2) {
        compres = 'rock';
    }
    else if (compchoise == 1) {
        compres = 'paper';
    }
    else {
        compres = 'scissors';
    }
        
    return compres;
}

console. log(getComputerChoice())