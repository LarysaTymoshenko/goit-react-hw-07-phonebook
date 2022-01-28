import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contact/contact-reducer.js';
import { contactApi } from './contact/contactSlice';

const rootReducer = persistReducer(persistConfig, contactsReducer);

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    rootReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export const rootStore = { store, persistor };

// import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import logger from 'redux-logger';
// import { contactsReducer } from './Contacts/contacts-reducer';
// import { filterReducer } from './Filter/filter-reducer';

// const middleware = getDefaultMiddleware => [
//   ...getDefaultMiddleware(),
//   contactsReducer.middleware,
//   logger,
// ];

// export const store = configureStore({
//   reducer: {
//     [contactsReducer.reducerPath]: contactsReducer.reducer,
//     filter: filterReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// setupListeners(store.dispatch);
