
function finalPosition(move) {
    let l = move.length;
    let countUp = 0, countDown = 0;
    let countLeft = 0, countRight = 0;

    for (let i = 0; i < l; i++) {

        if (move[i] == 'F')
            countUp++;
        //F:Forward

        else if (move[i] == 'B')
            countDown++;
        // B : Backward

        else if (move[i] == 'L')
            countLeft++;
        // L: Left

        else if (move[i] == 'R')
            countRight++;
        // R: Right
    }

    document.write("Final Position: ("
        + (countRight - countLeft) + ", "
        + (countUp - countDown) + ","
        + (finalorientation) + ")")
}

let move = "BBFFRRFLFLRLFLRFFR";
let finalorientation = move.charAt(move.length - 1);
finalPosition(move);
