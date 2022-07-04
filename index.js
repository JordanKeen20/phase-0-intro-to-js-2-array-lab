const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(){
    cats.push('Ralph');
}

function destructivelyPrependCat(){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}


function appendCat(){
    const cuteCat = [...cats, 'Broom'];
    return cuteCat;
}

function prependCat(){
    let blueCat = ['Arnold', ...cats]
    return blueCat;
}

function removeLastCat(){
    let blackCat = cats.slice(0,2)
    return blackCat;
}

function removeFirstCat(){
    let yellowCat = cats.slice(1)
    return yellowCat;
}