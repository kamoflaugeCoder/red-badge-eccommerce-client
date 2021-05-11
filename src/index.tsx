 import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './navbar/Navbar';
// import ItemIndex from './components/item/itemindex';
// import ProductInput from './components/products/productInput';
// import Products from './components/products/Products';
import SideBar from './navbar/Sidebar'
import Sidebar from './navbar/Sidebar';



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
