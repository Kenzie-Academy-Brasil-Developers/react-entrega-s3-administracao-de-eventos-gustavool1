import { useContext } from "react"
import CardDrink from "../../components/CardDrink"
import NavBar from "../../components/NavBar"
import { DrinksContext } from "../../Provider/Drinks"
import './style.css'
const Dashboard = () =>{
    const { drinks } = useContext(DrinksContext)
    return(
        <>
            <NavBar/>
            <div className='container'>
                    {drinks.allDrinks.map((drink, index)=>(
                        <CardDrink key={index} drink={drink}/>
                    ))}
            </div>
        </>
    )
}

export default Dashboard