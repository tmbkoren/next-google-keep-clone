import '../styles/globals.css';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../store/store';
import { hydrate } from '../store/slices/dataSlice';
import { useEffect, useState } from 'react';

const ISSERVER = typeof window === 'undefined';

const getStateFromLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem('reduxState');
    if (persistedState) {
      return JSON.parse(persistedState);
    }
  } catch (e) {
    console.log(e);
  }
};

if (!ISSERVER) {
  const reduxState = getStateFromLocalStorage();
  if (reduxState) {
    console.log('hydrating');
    console.log(reduxState);
    store.dispatch(hydrate(reduxState));
  }
}

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
