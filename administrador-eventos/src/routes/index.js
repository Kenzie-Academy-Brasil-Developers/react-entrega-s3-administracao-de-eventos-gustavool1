import { Switch, Route } from "react-router";
import { DrinksContext } from "../Provider/Drinks";
import { useContext } from "react";
import Formatura from "../pages/Formatura";
import Casamento from "../pages/Casamento";
import Confraternizacao from "../pages/Confraternizacao";
import Dashboard from "../pages/Dashboard";
const Router = () => {
    
    return(
        <Switch>
            <Route exact path='/'>
                <Dashboard/>
            </Route>
            <Route exact path='/formatura'>
                <Formatura/>
            </Route>
            <Route exact path='/casamento'>
                <Casamento/>
            </Route>
            <Route exact path='/confraternizacao'>
                <Confraternizacao/>
            </Route>
        </Switch>
    )
}

export default Router