class DecipherProcess {
    constructor(encryptedText, alphabet, frequencyOfLetters) {
        this.alphabet = alphabet;
        this.encryptedText = encryptedText;
        this.frequencyOfLetters = frequencyOfLetters;
        this.frequency_decipher_results = new Map();
        this.sortArray = [];
    }

    decipherText() {
        decipher.addEventListener('click', () => {
            this.getFrequencyOfCipheredText();
            this.sortFrequencyObject();
        });
    }

    getFrequencyOfCipheredText() {
        let count = 0;
        let frequency = 0;
        let outputData = this.encryptedText;
        for (let i = 0; i < this.alphabet.length; i++) {
            count = 0;
            for (let j = 0; j < outputData.length; j++) {
                if (outputData[j] != ' ') {
                    if (this.alphabet[i] === outputData[j]) {
                        count++;
                    }
                }
            }
            this.frequency_decipher_results.set(this.alphabet[i], count);// частота букв в зашифрованном выражении
        }
        console.log(this.frequency_decipher_results);
    }

    sortFrequencyObject() {
        for (let i = 0; i < this.alphabet.length; i++) {
            let max = 0;
            let arrValues = [];// массив для значений букв(для следующей операции понадобится)

            if (this.frequency_decipher_results.get(this.alphabet[i]) != 0) {// отбрасываем нулевые значения
                this.frequency_decipher_results.forEach((value, key) => {
                    console.log(value);
                })
                
                console.log(arrValues);
            }
        }
    }
}