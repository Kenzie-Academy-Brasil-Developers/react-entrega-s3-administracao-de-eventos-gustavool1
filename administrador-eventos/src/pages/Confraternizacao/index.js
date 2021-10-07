import { useContext } from "react"
import CardDrink from "../../components/CardDrink"
import { DrinksContext } from "../../Provider/Drinks"
const Confraternizacao = () =>{
    const { drinks } = useContext(DrinksContext)
    return(
        <div>
            Confraternizacao
            {drinks.confraternizacaoDrinks.map((drink, index)=>(
                  <CardDrink key={index} drink={drink} isRemovable='confraternizacao'/>
            )) }
        </div>
    )
}

export default Confraternizacao