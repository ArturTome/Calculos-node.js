const express = require('express');
const app = express();

app.get('/adicao/:NumeroA/:NumeroB', (req,res) => {
    let NumeroA = parseInt(req.params.NumeroA)

    if(isNaN(NumeroA)){
        res.send("Não é um número")
    }else{
         console.log(NumeroA + " É um número")
    }

    let NumeroB = parseInt(req.params.NumeroB)

    if(isNaN(NumeroB)){
       res.send("Não é um número")
    }else{
         console.log(NumeroB + " É um número")
    }
    
    let Resultado = NumeroA + NumeroB

    res.send("Resultado: " + Resultado.toString())
})

app.get('/subtracao/:NumeroC/:NumeroD', (req,res) => {
    let NumeroC = parseInt(req.params.NumeroC)

    if(isNaN(NumeroC)){
        res.send("Não é um número")
    }else{
         console.log(NumeroC + " É um número")
    }

    let NumeroD = parseInt(req.params.NumeroD)

    if(isNaN(NumeroD)){
        res.send("Não é um número")
    }else{
         console.log(NumeroD + " É um número")
    }

    let Resultado = NumeroC - NumeroD

    res.send("Resultado: " + Resultado.toString())
})


app.get('/multiplicacao/:NumeroE/:NumeroF', (req,res) => {
    let NumeroE = parseInt(req.params.NumeroE)

    if(isNaN(NumeroE)){
        res.send("Não é um número")
    }else{
         console.log(NumeroE + " É um número")
    }

    let NumeroF = parseInt(req.params.NumeroF)

    if(isNaN(NumeroF)){
       res.send("Não é um número")
    }else{
         console.log(NumeroF + " É um número")
    }

    let Resultado = NumeroE * NumeroF

    res.send("Resultado: " + Resultado.toString())
})

app.get('/divisao/:NumeroG/:NumeroH', (req,res) => {
    let NumeroG = parseInt(req.params.NumeroG)

    if(isNaN(NumeroG)){
        res.send("Não é um número")
    }else{
         console.log(NumeroG + " É um número")
    }

    let NumeroH = parseInt(req.params.NumeroH)

    if(isNaN(NumeroH)){
        res.send("Não é um número")
    }else{
         console.log(NumeroH + " É um número")
    }

    let Resultado = NumeroG / NumeroH

    res.send("Resultado: " + Resultado.toString())
})

app.listen(3000, () => {
    console.log('Servidor em execução...')
});