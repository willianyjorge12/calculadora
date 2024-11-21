var numero1 = document.querySelector("#numero1")
var numero2 = document.querySelector("#numero2")
var btnSomar = document.querySelector ("#somar")
var btnDividir = document.querySelector("#dividir")
var btnMultiplicar = document.querySelector("#multiplicar")
var btnSubtrair = document.querySelector("#subtrair")

btnSomar.addEventListener("click",somar)



btnDividir.addEventListener("click",dividir)



btnMultiplicar.addEventListener("click",multiplicar)



btnSubtrair.addEventListener("click",subtrair)


function somar(){
    



    res.innerText = Number(numero1.value) + Number(numero2.value)
    


}


function dividir(){
    

    res.innerText = Number(numero1.value) / Number(numero2.value)
}


function multiplicar(){

    res.innerText = Number(numero1.value) * Number(numero2.value)

}


function subtrair(){
    

    res.innerText = Number(numero1.value) - Number(numero2.value)

}