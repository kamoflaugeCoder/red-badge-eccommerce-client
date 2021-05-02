import { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import { CartItemType } from '../cartItem/CartItemType';
// import { CartItemType } from '../item/itemindex';

export default function Products(props:any){

const getProducts = async (): Promise<CartItemType[]> =>
 await (await fetch('https://fakestoreapi.com/products/',)).json();

 

};