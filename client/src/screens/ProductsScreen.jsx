import {Center, Wrap, WrapItem} from '@chakra-ui/react';

import {products} from '../products';
import ProductCard from '../components/ProductCard';

const ProductsScreen = () => {
  console.log(products)
  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh' p='5'>
        {products.map((product) => (
            <WrapItem key={product._id}>
                <Center w='250px' h='450px'>
                    <ProductCard product = {product}/>
                </Center>
            </WrapItem>
        ))}
    </Wrap>
  )
}

export default ProductsScreen
