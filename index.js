let name = prompt("Введите ваше имя:");

let lowerCaseName = name.toLowerCase();


let letters = [...new Set(lowerCaseName.replace(/[^a-zа-яё]/gi, ''))]; 


let secondLetterExists = lowerCaseName.length > 1 ? `Вторая буква "${name[1]}" присутствует.` : 'Вторая буква отсутствует.';


alert(`Имя: ${name}`);
alert(`Все буквы в имени: ${letters.join(', ')}`);
alert(secondLetterExists);
