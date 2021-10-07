import { DrinksProvider } from "./Drinks";

const Providers = ({ children }) =>{
    return(
        <DrinksProvider>
            { children }
        </DrinksProvider>
    )
}

export default Providers