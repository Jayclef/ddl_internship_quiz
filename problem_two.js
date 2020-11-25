'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(i))
    }

    /*
    let output = ''
    let current = 1;
    let spaces = n;

    for (let i = 0; i < n; i++) {
        for (let s = 1; s < spaces; s++) {
            output += ' '
        }
        for (let c = 1; c <= current; c++) {
            output += '#'
        }
        output += "\n"
        current++;
        spaces--;
    }
    // log the final result
    console.log(output)
    */
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
