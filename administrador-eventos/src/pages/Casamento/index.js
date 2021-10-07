import { useContext } from "react"
import { DrinksContext } from "../../Provider/Drinks"
import CardDrink from "../../components/CardDrink"
const Casamento = () =>{
    const { drinks } = useContext(DrinksContext)
    console.log(drinks.casamentoDrinks)
    return(
        <div>
            Casamento
            {drinks.casamentoDrinks.map((drink, index)=>(
                 <CardDrink key={index} drink={drink} isRemovable="casamento"/>
            ))}
        </div>
    )
}

export default Casamento