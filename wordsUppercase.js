function wordsUppercase(string) {

    let words = string.split(/[^a-zA-Z0-9]+/g);

    if (words[words.length - 1] === '') {
        let cut = words.pop();
    }

    let upperCase = words.join(', ').toUpperCase();

    console.log(upperCase);

}

wordsUppercase('Hi, how are you?');