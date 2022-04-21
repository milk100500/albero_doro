import './App.css'
import {
    BrowserRouter,
    Switch,
    Route,

} from "react-router-dom";
import {routes} from "./contentForComponents/routes/routes";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>)}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
