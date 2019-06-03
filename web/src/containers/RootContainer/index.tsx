import React, {
  useState,
  useEffect,
  lazy,
  Suspense } from 'react';
import './styles.css';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import App from '../App';
import Routes from '../../routes';
import '../../lib/fa-library';

const RootContainer: React.FC = () => {
  const [resp, setResp] = useState({});

  useEffect(() => {
    const api = () => {
      window.fetch('api/v1/', {
        credentials: 'include'
      }).then(res => res.json())
      .then(json => console.log({ ...json }))
      .catch(error => console.log(error));
    }

    return api();
  });

    return(
      <Router>
        {/* <Suspense fallback={<p>Loading...</p>}> */}

          <App>
            <Switch>
              <Routes />
            </Switch>
          </App>

        {/* </Suspense> */}
      </Router>
);}

// const App = lazy(() => import('../App'))

export default RootContainer;
