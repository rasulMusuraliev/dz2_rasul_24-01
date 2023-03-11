var svetofor = prompt("Введите цвет светофора")

if (svetofor === "red") {
    alert("Стоп!")
} else if (svetofor === "yellow") {
    alert("Жди")
} else if (svetofor === "green") {
    alert("Езжай")
} else {
    alert("Ошибка")
}

for ( var i = 20; i >=0; i-- ) {
    console.log(i)
}



var arr = [10, 20, 30, 50, 235, 3000]

arr.forEach((arr) =>{
     var perv = String(arr)[0];
    if(["1", "2", "5"].includes(perv))
        console.log(arr)
})



