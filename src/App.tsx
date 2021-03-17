import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Header from 'components/Header'; 
import StyledGlobal from './GlobalStyles';

const App = () => (
    <Router>
        <StyledGlobal />
        <Header />
        <Switch>
            <Route path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
)

export default App;

