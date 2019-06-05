import React, {
  useState,
  useEffect,
} from 'react';
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

          <App>
            <Switch>
              <Routes />
            </Switch>
          </App>

      </Router>
);}

export default RootContainer;
