"use client"

import { Provider } from 'react-redux';
import store from '@/redux/store';
import { MainComponent } from './components/MainComponent';


export default function Planet() {
  return (
    <Provider store={store}>
        <MainComponent/>
    </Provider>
  );
}