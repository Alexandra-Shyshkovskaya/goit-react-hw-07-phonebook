import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { contactReducer } from './contact';
import {
  //persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

/* const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}; */

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

//const persistor = persistStore(store);
// eslint-disable-next-line
//export default { store, persistor };

export default store;