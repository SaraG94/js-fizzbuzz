//serie di numeri da 1 a 100
for (let i =0; i<100; i++) {
    let num = i+1
    console.log(num)

    // impostare resto multipli 15
    const restoMultiploQ = num % 15

    //Impostare resto multipli di 5
    const restoMultiploCinque = num % 5
    
    //Iimpostare resto multipli di 3
    const restoMultiploTre = num % 3

    //multipli di 15 FizzBuzz, multipli di 5 Buzz, multipli di 3 Fizz
    if (restoMultiploQ === 0){
        console.log('FizzBuzz')
    }else if(restoMultiploCinque === 0){
        console.log('Buzz')
    }else if(restoMultiploTre === 0){
        console.log('Fizz')
    }else{
        console.log(num)
    }
}

