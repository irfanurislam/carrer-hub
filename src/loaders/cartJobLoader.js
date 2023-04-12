import { getShoppingCart } from "../utilities/fakedb";

const cartJobLoader = async() =>{
const loadedProducts = await fetch('/featuredJobs.json');
const products = await loadedProducts.json();

console.log(products)

const storedCart = getShoppingCart();
const savedCart = []
for(const id in storedCart){
    console.log(typeof id)
    const addedProduct = products.find(pd => pd.id === id)
    //console.log(pd.id)
    // if(addedProduct){
    //     const quantity = storedCart[id]
    //     addedProduct.brand = quantity
    //     savedCart.push(addedProduct)
    // }
     savedCart.push(addedProduct)
}

return savedCart

}
export default cartJobLoader