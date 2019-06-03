import React, { lazy, Suspense } from 'react';
import './App.css';

const App = (props: {children?: any}) => {
  return(
    <main className="App">
      <section className="App-body">

        <header className="App-header">

        </header>

        {props.children}

        <Suspense fallback={<p>Loading...</p>}>
          <Footer />
        </Suspense>
      </section>
    </main>
);}

const Footer = lazy(() => import('../../components/Footers/AppFooter'));

export default App;
