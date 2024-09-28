"use client"

import { Provider } from 'react-redux';
import store from '@/redux/store';
import { MainComponent } from './components/MainComponent';
import { Toaster } from 'react-hot-toast';


export default function Planet() {
  return (
    <Provider store={store}>
        <MainComponent/>
        <Toaster />
    </Provider>
  );
}