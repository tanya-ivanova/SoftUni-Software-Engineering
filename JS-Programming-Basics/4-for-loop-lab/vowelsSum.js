function vowelsSum(input) {
    let text = input[0];
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === "a") {
            sum = sum + 1;
        } else if (text.charAt(i) === "e") {
            sum = sum + 2;
        } else if (text.charAt(i) === "i") {
            sum = sum + 3;
        } else if (text.charAt(i) === "o") {
            sum = sum + 4;
        } else if (text.charAt(i) === "u") {
            sum + sum + 5;
        }
    }
    console.log(sum);
}

vowelsSum(["beer"]);