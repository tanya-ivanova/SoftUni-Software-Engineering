function hardWords(input) {
    let text = input[0];
    let arrOfWords = input[1];
    arrOfWords.sort((a, b) => b.length - a.length);
    //console.log(arrOfWords);
    
    for (let word of arrOfWords) {
        let template = "_".repeat(word.length);
        
        text = text.replace(template, word);        
    }
    console.log(text);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);