import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Header from '../components/Header'; 
import StyledGlobal from '../components/Common/style/GlobalStyles';

const App = () => (
    <HashRouter>
        <StyledGlobal />
        <Header />
        <Switch>
            <Route path="/" component={Home}></Route>
            <Route path="*" component={NotFound}></Route>
        </Switch>
    </HashRouter>
)

export default App;

