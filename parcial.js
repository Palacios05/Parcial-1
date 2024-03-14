var num1, num2, sumaNum1, sumaNum2, sumaDeDivisores

num1 = parseInt(prompt("Ingrese el numero 1"))
num2 = parseInt(prompt("Ingrese el numero 2"))

function sumaNumeros(numero){
    
    let suma = 0;

    for (let i = 1; i < numero; i++) {
    
        if(numero % i == 0){
          
            suma += i;
        }
 }
 
 return suma;
}

function comprobarAmigos(num1, num2){

    const sumaNum1 = sumaNumeros(num1);
    const sumaNum2 = sumaNumeros(num2);

    if (sumaNum1 == num2 && sumaNum2 == num1){
        
        return true;

    }else{

        return false;

    }
    
}

    if(comprobarAmigos(num1, num2)){

        alert("Son amigos")

    }else{
        
        alert("No son amigos")

    }

