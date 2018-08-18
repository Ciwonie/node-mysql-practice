const fs = require('fs');

// Take two arguments
var a = process.argv[2];
var b = parseInt(process.argv[3]);

var balance = 1000;



switch (a) {
    case "total":
        console.log('$' + balance);
        break;
    case "deposit":
        (balance + b)
        console.log('New Balance: ' + '$' + (balance + b));
        appendTxt();
        break;
    case "withdraw":
        if (b <= balance) {
            (balance - b)
            console.log('New Balance: ' + '$' + (balance - b));
            appendTxt();
        }
        else {
            console.log('Insufficent Balance');
        }
        break;
    case "lotto":
        lottery();
        appendTxt();
        break;
    default:
        console.log("not valid input");
}

function lottery() {
    var randomNum = Math.round(Math.random() * 10);

    if (randomNum == b) {
        (balance + 1500);
        console.log('A Winner Is You: ' + '$' + (balance + 1500))
        console.log('You Won ' + '$' + 1500);
    } else {
        (balance - randomNum);
        console.log('A Winner Is Not You: ' + '$' + (balance - randomNum));
        console.log('You lost ' + '$' + randomNum);
    }
}

readTxt();

function appendTxt() {
    fs.appendFile('bank.txt', JSON.stringify(balance), (err) => {
        if (err) throw err;
        console.log('Transaction Logged');
    });
}

function readTxt() {
    fs.readFile('bank.txt', 'utf8', (error, data) => {
        if (error) {
            return console.log('error')
        }

        var dataArr = data.split(',');
        console.log(dataArr)
        // var result = 0;

        // for (let i in dataArr) {
        //     if (parseFloat(dataArr[i]))
        //         result += parseFloat(dataArr[i]);
        // }

        // console.log('You have a total of $' + result.toFixed(2));
    })
}


