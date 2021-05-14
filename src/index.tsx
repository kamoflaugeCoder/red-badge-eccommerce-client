 import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './navbar/Navbar1';
// import ItemIndex from './components/item/itemindex';
// import ProductInput from './components/products/productInput';
// import Products from './components/products/Products';
import SideBar from './navbar/Sitebar'
import Sidebar from './navbar/Sitebar';
import ProductReviews from './components/products/productReviews';
import Navbar1 from './navbar/Navbar1';
import ProductInput from './components/products/productInput';



const client = new QueryClient();

ReactDOM.render(
  
  <QueryClientProvider client={client}>
    <App />
  {/* <ProductInput/> */}
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
