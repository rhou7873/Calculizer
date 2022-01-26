// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Routing/Pages
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import RiemannSums from './Pages/RiemannSums';
import DiscIntegration from './Pages/DiscIntegration';
import TaylorSeries from './Pages/TaylorSeries';

function App() {
  return (
    <Router>
      <div className="font-primary">
        <Switch>
          <Route path="/riemann-sums" component={RiemannSums} />
          <Route path="/disc-integration" component={DiscIntegration} />   
          <Route path="/taylor-series" component={TaylorSeries} />    
          <Route path="/" exact component={Home} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
