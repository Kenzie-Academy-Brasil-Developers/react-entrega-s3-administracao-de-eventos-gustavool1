import { useContext } from "react"
import { DrinksContext } from "../../Provider/Drinks"
import CardDrink from "../../components/CardDrink"
const Formatura = () =>{
    const { drinks } = useContext(DrinksContext)
    return(
        <div>
            Formatura
            {drinks.formaturaDrinks.map((drink, index)=>(
                  <CardDrink key={index} drink={drink} isRemovable='formatura'/>
            )) }
        </div>
    )
}

export default Formatura

