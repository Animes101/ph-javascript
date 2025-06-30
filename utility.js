const hiddenItems=(items)=>{

    let hiddenItems=document.getElementById(items);

    hiddenItems.classList.add('hidden')
}

const showItems=(items)=>{

    let showItems=document.getElementById(items);

    showItems.classList.remove('hidden');
}


const randomAlphabet=()=>{

    let alphabet = [
        'A',  'D', 'E', 'I',  'K', 'M', 'N',
        'O',  'Q', 'U',
        'V', 'W', 'X', 'Y', 'Z'
    ];

    let randomIndex = Math.floor(Math.random() * alphabet.length);
    let randomLetter = alphabet[randomIndex];
    


    return randomLetter;


}


