class CipherProcess {
    constructor(crypt, alphabet) {
        this.crypt = crypt;
        this.alphabet = alphabet;
    }

    encryptText() {
        const encrypt = document.getElementById("encrypt");
        let text = []; // введённое выражение
        let inputResult = []; // зашифрованное выражение
        let outputData = [];// зашифрованное значение в виде массива

        encrypt.addEventListener('click', () => {
            text = input.value.toUpperCase().split('');

            for (let i = 0; i < text.length; i++) {
                function letter(elem) {
                    return elem === text[i];
                }
                let resultFind = this.alphabet.findIndex(letter);
                outputData.push(this.crypt[resultFind]);
            }
            inputResult = outputData.join('');// слова с проблеами зашифрованные
            //console.log("RESULT" + inputResult);
            encrypt.style.display = 'none';

        });
        let decipherProcess = new DecipherProcess(outputData, this.alphabet);
        decipherProcess.decipherText();
        return inputResult;
    }
}