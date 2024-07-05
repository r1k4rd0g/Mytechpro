import { useState } from "react";

export const useCounter = (valorInicial = 1, stock) => {
    const [contador, setContador] = useState(valorInicial ?? 0)
    const sumar = () => {
        if (contador < stock) {setContador(contador + 1)}
    }
    const restar = () => {
        if (contador > 1) {setContador(contador - 1)}
    }
    const resetear = () => setContador(valorInicial)

    const counterTyped = (value) =>{
        if(value >= 1 && value <= stock){
            setContador(value)
        }
    }
    return {
        contador,
        sumar,
        restar,
        resetear,
        counterTyped
    }

}