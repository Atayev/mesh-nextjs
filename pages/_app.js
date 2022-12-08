import '../styles/globals.css'
import { Provider } from 'react-redux'
import { persistor,store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react';

import Loader from '../components/LayoutElements/Loader';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
