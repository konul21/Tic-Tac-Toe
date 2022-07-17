let arr = [];
let x = 'X';
let o = 'O';
let count;
let player1;
let player2;
let point1 = 0;
let point2 = 0;
let show = document.getElementById('show');

start();


function start(){
    count = 1;
    player1 = player1 == undefined ?  prompt( 'Player 1 i daxil edin', x) : player1;
    player2 = player2 == undefined ?  prompt( 'Player 2 i daxil edin', o) : player2;
    show.innerHTML = `Player 1 : ${player1} - ${point1} <br/> Player 2 : ${player2} - ${point2} `;
    Arr();
    table();
}







function table() {
    let table = document.getElementById("table");
    let tbl = '';
    for (let i = 0; i < 3; i++) {
        tbl += `<tr>`;
        for (let j = 0; j < 3; j++) {
            tbl += `<td  onclick="Click(${i},${j})" >  ${arr[i][j] == undefined ? ` ` : arr[i][j]} </td>`;
        }
        tbl += `</tr>`;
    }
    table.innerHTML = tbl;
};



function Arr() {
    for (let i = 0; i < 3; i++) {
        arr[i] = [];
    }
}

function Click(i, j) {
    if (arr[i][j] == undefined) {
        if (count % 2 == 0) {
            arr[i][j] = o;
        } else {
            arr[i][j] = x;
        }
        count++;
        table();
        Check();
    }
}


function Check() {

    for (let i = 0; i < 3; i++) {
        if (arr[i][0] !== undefined && arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
            Finish(arr[i][0])
        }
    };

    for (let j = 0; j < 3; j++) {
        if (arr[0][j] !== undefined && arr[0][j] == arr[1][j] && arr[1][j] == arr[2][j]) {
            Finish(arr[0][j])
        }
    };

        if (arr[0][0] !== undefined && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
            Finish(arr[0][0])
        }

        if (arr[0][2] !== undefined && arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
            Finish(arr[0][2])
        }

        if (count == 10) {
            alert("berabere qaldiniz");
            start();
        }
    
}

function Finish(winner){
    let win =  winner == player1 ? "Player1 Won" : 'Player2 Won';
    winner == player1 ? point1++ : point2++;
   alert(win);
   start();
}