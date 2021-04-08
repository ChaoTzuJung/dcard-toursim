import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Header from 'components/Header'; 
import StyledGlobal from './GlobalStyles';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <Router>
            <StyledGlobal />
                <Header />
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="*" component={NotFound} />
                </Switch>
        </Router>
        {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen />}
    </QueryClientProvider>
)

export default App;

