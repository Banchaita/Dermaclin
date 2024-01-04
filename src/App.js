import './App.css';
import React,{lazy,Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Loadering from './components/Layout/Loader';

const AppRouter = lazy(()=>import('./routes'))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={
        
          <div className='text-center mt-3' style={{ fontSize: '2rem' }}>
            <Loadering/>
          </div>
          }
          >
          <AppRouter/>
        </Suspense>
      </BrowserRouter>
    </Provider>
  )  
}

export default App;
