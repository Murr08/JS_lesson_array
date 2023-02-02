console.log("ddd");
let x=0;
let fruits = ["Яблоко", "Апельсин", "Слива"];


// с позиции 2
// удалить 0 элементов
// вставить "банан", "топпенамбур"
fruits.splice(2, 0, "банан", "топпенамбур");

for(x=0;x<fruits.length; x++) 
{ 
    console.log(fruits[x]);
    console.log(x+1);
/*
    if(fruits[x]=="банан")
 console.log (fruits[x]);
 */
}
