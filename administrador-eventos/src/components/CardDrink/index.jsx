import { useContext } from "react"
import { DrinksContext } from "../../Provider/Drinks"
import { Card } from "./style"

const CardDrink = ({ drink, isRemovable }) =>{
    const { sendDrinkToCasamento, sendDrinkToFormatura, sendToConfraternizacao, removeFromCasamento, removeFromFormatura, removeFromConfraternizacao} = useContext(DrinksContext)
    return(
        <Card>
            <h1>{drink.name}</h1>
            <img src={drink.image_url} alt={drink.name} />
            <p>{drink.first_brewed}</p>
            <p>{drink.description}</p>
            <p>Volume em litros: <strong>{drink.boil_volume.value}</strong></p>
            {isRemovable ? 
            (   <>
                    { isRemovable === 'casamento'&& <button onClick={ ()=>removeFromCasamento(drink) }>Remover</button>  }
                    { isRemovable === 'confraternizacao'&& <button onClick={ ()=> removeFromConfraternizacao(drink) }>Remover</button>  }
                    { isRemovable === 'formatura'&& <button onClick={ ()=> removeFromFormatura(drink) }>Remover</button>  }
                    
                </>
            ):
            (
                <>
                <button onClick={()=> sendDrinkToCasamento(drink)}>Casamento</button>
                <button onClick={()=> sendDrinkToFormatura(drink)}>Formatura</button>
                <button onClick={()=> sendToConfraternizacao(drink)}>Confraternização</button>
                </>
            )}
        </Card>
    )
}
export default CardDrink