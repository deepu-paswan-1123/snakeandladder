let tog = 1;
let rollingSound = new Audio('first.mp3');
let winSound = new Audio('second.mp3');

let p1sum = 0;
let p2sum = 0;

let p1Started = false;
let p2Started = false;

function play(player, psum, correction, num) {
    let sum;
    if (psum === 'p1sum') {
        p1sum += num;
        if (p1sum > 100) {
            p1sum -= num;
        }

        switch (p1sum) {
            case 1: p1sum = 38;
                break;
            case 4: p1sum = 14;
                break;
            case 8: p1sum = 30;
                break;
            case 21: p1sum = 42;
                break;
            case 28: p1sum = 76;
                break;
            case 32: p1sum = 10;
                break;
            case 36: p1sum = 6;
                break;
            case 48: p1sum = 26;
                break;
            case 50: p1sum = 67;
                break;
            case 62: p1sum = 18;
                break;
            case 71: p1sum = 92;
                break;
            case 80: p1sum = 99;
                break;
            case 88: p1sum = 24;
                break;
            case 95: p1sum = 56;
                break;
            case 97: p1sum = 78;
                break;
        }
        sum = p1sum;
    } else if (psum === 'p2sum') {
        p2sum += num;
        if (p2sum > 100) {
            p2sum -= num;
        }

        switch (p2sum) {
            case 1: p2sum = 38;
                break;
            case 4: p2sum = 14;
                break;
            case 8: p2sum = 30;
                break;
            case 21: p2sum = 42;
                break;
            case 28: p2sum = 76;
                break;
            case 32: p2sum = 10;
                break;
            case 36: p2sum = 6;
                break;
            case 48: p2sum = 26;
                break;
            case 50: p2sum = 67;
                break;
            case 62: p2sum = 18;
                break;
            case 71: p2sum = 92;
                break;
            case 80: p2sum = 99;
                break;
            case 88: p2sum = 24;
                break;
            case 95: p2sum = 56;
                break;
            case 97: p2sum = 78;
                break;
        }
        sum = p2sum;
        console.log("player2 " + sum);
    }

    document.getElementById(`${player}`).style.transition = 'linear all .5s';

    if (sum < 10) {
        document.getElementById(`${player}`).style.left = `${(sum - 1) * 50}px`;
        document.getElementById(`${player}`).style.top = `${-0 * 50 - correction}px`;
    } else if (sum === 100) {
        winSound.play();
        if (player === 'p1') {
            alert("Red Won !!");
        } else if (player === 'p2') {
            alert("Yellow Won !!");
        }
        location.reload();
    } else {
        let numarr = Array.from(String(sum));
        console.log("this is the numarr:", numarr);
        let n1 = eval(numarr.shift());
        console.log("n1:", n1);
        let n2 = eval(numarr.pop());
        console.log("n2:", n2);

        if (n1 % 2 !== 0) {
            if (n2 === 0) {
                document.getElementById(`${player}`).style.left = `${9 * 50}px`;
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 50 - correction}px`;
            } else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 50}px`;
                document.getElementById(`${player}`).style.top = `${-n1 * 50 - correction}px`;
            }
        } else {
            if (n2 === 0) {
                document.getElementById(`${player}`).style.left = `${0 * 50}px`;
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 50 - correction}px`;
            } else {
                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 50}px`;
                document.getElementById(`${player}`).style.top = `${-n1 * 50 - correction}px`;
            }
        }
    }
}

let diceBtn = document.querySelector(".diceBtn");
let dice = document.querySelector(".dice");
let tog1 = document.querySelector(".tog");

diceBtn.addEventListener('click', function () {
    rollingSound.play();
    let num = Math.floor(Math.random() * 6) + 1;
    dice.innerText = num;

    if (tog % 2 !== 0) { // Player 1's turn
        if (!p1Started && (num === 6 || num === 1)) {
            p1Started = true;
            play('p1', 'p1sum', 0, num);
        } else if (p1Started) {
            play('p1', 'p1sum', 0, num);
        }
        tog1.innerText = "Yellow's Turn";
        tog1.style.color = "goldenrod";
    } else { // Player 2's turn
        if (!p2Started && (num === 6 || num === 1)) {
            p2Started = true;
            play('p2', 'p2sum', 55, num);
        } else if (p2Started) {
            play('p2', 'p2sum', 55, num);
        }
        tog1.innerText = "Red's Turn";
        tog1.style.color = "red";
    }

    tog++;
});
