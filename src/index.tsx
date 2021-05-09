 import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './home/navbar/Navbar';
import ItemIndex from './components/item/itemindex';
import ProductInput from './components/products/productInput';
import Products from './components/products/Products';



const client = new QueryClient();

ReactDOM.render(
  
  <QueryClientProvider client={client}>
   
    <Navbar />
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);


// const protectedViews = () => {
//   return sessionToken === localStorage.getItem('token') ? (
//     <ItemIndex token={sessionToken} />
//   ) : (
//     <Auth token={updateToken} />
//   );
// }
