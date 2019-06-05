import React, { lazy, Suspense } from 'react';
import './App.css';
import {
  TopNavContentLoader,
  FooterContentLoader
} from './contentLoaders';

const App = (props: {children?: any}) => {
  return(
    <main className="App">
      <header className="App-header">
        <Suspense fallback={<TopNavContentLoader />}>
          <TopNav />
        </Suspense>
      </header>

      <section className="App-body">
        {props.children}
      </section>

      <footer>
        <Suspense fallback={<FooterContentLoader />}>
          <Footer />
        </Suspense>
      </footer>
    </main>
);}

const TopNav = lazy(() => import('../../components/Navbars/TopNav'));
const Footer = lazy(() => import('../../components/Footers/AppFooter'));

export default App;
