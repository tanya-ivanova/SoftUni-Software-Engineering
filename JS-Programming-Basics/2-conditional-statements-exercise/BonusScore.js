function bonusScore(input) {
    let num = Number(input[0]);
    let bonus = 0;

    if (num <= 100) {
        bonus = 5;
    } else if (num > 1000) {
        bonus = num * 0.1;
    } else {
        bonus = num * 0.2;
    }

    if (num % 2 === 0) {
        bonus = bonus + 1;
    }

    if (num % 10 === 5) {
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(num + bonus);
}

bonusScore(["175"]);