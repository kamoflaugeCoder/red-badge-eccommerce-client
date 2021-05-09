import Button from '@material-ui/core/Button';
// Types

// styles
import { Wrapper } from './Items.styles';
// import LoginForm from '../LoginComponents/loginForm'

//Types
export type CartItemType = {
  id: number;
  category:string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  
}


type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
    token:string
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function handleAddToCart(item: CartItemType): void {
  throw new Error('Function not implemented.');
}

const Item: React.FC<Props> = ({item, handleAddToCart, token }) => {  /*handleAddToCart*/

  const handleDelete = (e:any) => {
		e.preventDefault();

		fetch(`http://localhost:5200/product/delete`, {
			/*${apiURL}*/
			method: 'DELETE',
			
			headers:new Headers({
        'Content-Type': 'application/json', 
        "Authorization" :token
      })
		})
			.then((response) => response.json())
			.then((data) => {
        // console.log(data)
        // setCategory('')
        // setTitle('')
        // setDescription('')
        // setImage('')
        // setPrice('')
        // setAmount('')

				// props.updateToken(data.sessionToken); /* Probably not right functionality */
			});
	};

return(  
<Wrapper>
  <img src={item.image} alt={item.title} />
  <div>
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <h3>${item.price}</h3>
  </div>
  <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  <Button onClick={() => handleDelete(item)}>Delete</Button>
  
</Wrapper>


)
}

    export default Item;


