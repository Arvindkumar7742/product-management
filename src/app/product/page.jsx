"use client"

import { Provider } from 'react-redux';
import store from '@/redux/store';


export default function Planet() {
  return (
    <Provider store={store}>
        Hello we are on the product page
    </Provider>
  );
}