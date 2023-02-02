//serie di numeri da 1 a 100
for (let i =0; i<100; i++) {
    console.log(i+1)

    // impostare resto multipli 15
    const restoMultiploQ = (i+1)% 15

    //Impostare resto multipli di 5
    const restoMultiploCinque = (i+1)% 5
    
    //Iimpostare resto multipli di 3

    //multipli di 15 FizzBuzz, multipli di 5 Buzz
    if (restoMultiploQ === 0){
        console.log('FizzBuzz')
    }else if(restoMultiploCinque ===0){
        console.log('Buzz')
    }

    
    
    
}

