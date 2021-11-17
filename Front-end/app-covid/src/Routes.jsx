import React from "react";
import { Switch, Route, Redirect } from 'react-router'

import Main from "../src/Components/Templates/Main";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/formulario' component={FormularioCadastro} />
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Routes;