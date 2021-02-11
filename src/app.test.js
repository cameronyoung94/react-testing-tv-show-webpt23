import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import {episodesFixture} from './components/episodes.test'
import userEvent from '@testing-library/user-event';

  
test('App fetches and renders data', async()=>{

   const {getByText,getAllByText}=render(<App/>);

    await waitFor(()=>{getByText(/select a season/i)}) ;

    const button=getByText(/select a season/i)
    userEvent.click(button);

    const option= getByText(/Season 2/i);
    userEvent.click(option);
       expect(getAllByText(/episode/i)).toHaveLength(9)

    }); 


    


