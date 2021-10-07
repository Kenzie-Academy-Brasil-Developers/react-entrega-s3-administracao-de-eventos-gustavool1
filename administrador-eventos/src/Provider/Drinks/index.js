import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const DrinksContext = createContext([])

export const DrinksProvider = ({ children }) =>{
    const [ drinks, setDrinks ] = useState({
        allDrinks:[],
        casamentoDrinks:[],
        formaturaDrinks:[],
        confraternizacaoDrinks:[]        

    })

    const getDrinks = () =>{
        axios.get('https://api.punkapi.com/v2/beers').then((response)=> setDrinks({...drinks, allDrinks:response.data})).catch((err)=>console.log(err))
    }
    

    const sendDrinkToCasamento = (item) =>{
        setDrinks({...drinks, casamentoDrinks:[...drinks.casamentoDrinks, item]})
    }
    const removeFromCasamento = (item) =>{
        const newCasamentoDrinks = drinks.casamentoDrinks.filter((drink)=>drink.id !== item.id)
        setDrinks({...drinks, casamentoDrinks:newCasamentoDrinks})
    }


    const sendDrinkToFormatura = (item) =>{
        setDrinks({...drinks, formaturaDrinks:[...drinks.formaturaDrinks, item]})
    }

    const removeFromFormatura = (item) =>{
        const newFormaturaDrinks = drinks.formaturaDrinks.filter((drink)=> drink.id !== item.id)
        setDrinks({...drinks, formaturaDrinks:newFormaturaDrinks})
    }


    const sendToConfraternizacao = (item) =>{
        setDrinks({...drinks, confraternizacaoDrinks:[...drinks.confraternizacaoDrinks, item]})
    }
    const removeFromConfraternizacao = (item) =>{
        const newConfraternizacaoDrinks = drinks.confraternizacaoDrinks.filter((drink)=>drink.id !== item.id)
        setDrinks({...drinks, confraternizacaoDrinks:newConfraternizacaoDrinks})
    }
    useEffect(()=>{
        getDrinks()
    }, [])

    return(
        <DrinksContext.Provider value={{ drinks, getDrinks, sendDrinkToCasamento, sendToConfraternizacao ,sendDrinkToFormatura, removeFromCasamento, removeFromFormatura, removeFromConfraternizacao }}>
            { children }
        </DrinksContext.Provider>
    )
}