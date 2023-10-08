window.onload = () => {
    const decipher = document.getElementById("decipher");
    const alphabet = [' ', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
    const crypt = [' ', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'А', 'Б', 'В', 'Г', 'Д'];
    const frequencyOfLetters = ['О', 'Е', 'А', 'И', 'Н', 'Т', 'С', 'Р', 'В', 'Л', 'К', 'М', 'Д', 'П', 'У', 'Я', 'Ы', 'Ь', 'Г', 'З', 'Б', 'Ч', 'Й', 'Х', 'Ж', 'Ш', 'Ю', 'Ц', 'Щ', 'Э', 'Ф', 'Ъ', 'Ё'];

    /*ШИФРОВАНИЕ И ДЕШИФРОВАНИЕ ТЕКСТА(с частотным анализом)*/
    const cipherProcess = new CipherProcess(crypt, alphabet);
    let encryptedText = cipherProcess.encryptText();
    console.log(encryptedText);
    /*ДОБАВИТЬ РАСШИФРОВКУ ПО КЛЮЧУ*/

}
/*   const getFrequency = () => {
        let count = 0;
        let frequency = 0;
        let freq_results = [];
        let text = [...freq_text.toUpperCase().replace(/[^a-zа-яё]/gi, '')];
        for (let i = 0; i < alphabet.length; i++) {
            count = 0;
            frequency = 0;
            for (let j = 0; j < text.length; j++) {
                if (alphabet[i] === text[j]) {
                    count++;
                }
            }
            frequency = (count / text.length) * 100;
            freq_results.push({ [alphabet[i]]: frequency })
        }
        console.log(freq_results);
        return freq_results;
    }
    //getFrequency();*/