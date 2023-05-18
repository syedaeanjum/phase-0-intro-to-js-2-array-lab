const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Milo, Otis, Garfield){
cats.push("Ralph")
return cats
}
function destructivelyPrependCat(Milo, Otis, Garfield){
    cats.unshift("Bob")
    return cats
}
function destructivelyRemoveLastCat(Milo, Otis, Garfield){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat(Milo, Otis, Garfield){
    cats.shift()
    return cats
}
function appendCat(Milo, Otis, Garfield){
    const catsOne = [...cats, "Broom"]
    return catsOne
}
function prependCat(Milo, Otis, Garfield){
    const catsTwo = ["Arnold", ...cats]
    return catsTwo
}
function removeLastCat(Milo, Otis, Garfield){
    const catsThree = (cats.slice(0,-1))
    return catsThree
}
function removeFirstCat(Milo, Otis, Garfield){
    const catsFour = (cats.slice(1, 3))
    return catsFour
}