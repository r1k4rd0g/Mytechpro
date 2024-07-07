import { useState } from "react";

export const useCounter = (valorInicial = 1, stock) => {
    const [quantity, setContador] = useState(valorInicial ?? 0)
    const sumar = () => {
        if (quantity < stock) {setContador(quantity + 1)}
    }
    const restar = () => {
        if (quantity > 1) {setContador(quantity - 1)}
    }
    const resetear = () => setContador(valorInicial)

    const valueTyped = (value) =>{
        if(value >= 1 && value <= stock){
            setContador(value)
        }
    }
    return {
        quantity,
        sumar,
        restar,
        resetear,
        valueTyped
    }

}