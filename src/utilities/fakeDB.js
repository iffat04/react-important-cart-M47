
/*const addToDb = id=>{
    //console.log(id)
    const exists = localStorage.getItem(id);
    console.log(exists)

    if(!exists){
    localStorage.setItem(id,1);
    }
    else{
        const updated = parseInt(exists)+1;
        localStorage.setItem(id,updated)
    }
    const exist = localStorage.getItem(id);
    console.log(exist)
}

*/
const checkCart = () =>{
    return localStorage.getItem("cart");
}

const addAsObject = id =>{
    

    const getCart = checkCart();
    let cart = {};

    if(!getCart){
        console.log('not present')
        cart[id]=1;

    }
    else{
        cart = JSON.parse(getCart);
       
        const ispresent = cart[id];
        if(!ispresent){
            cart[id]=1;

        }
        else{
        const count = cart[id]+1;
        cart[id] = count;
        console.log(cart)
        }
        
    }
    updateDb(cart)
    
}

const updateDb = cart =>{
    const stringcart = JSON.stringify(cart)
    localStorage.setItem('cart',stringcart)
}

const removeItem = id =>{
    
    const getCart = checkCart();
    if(!getCart){
        alert('no cart')
    }
    else
    {
        const cart = JSON.parse(getCart);
        delete cart[id];
        updateDb(cart);
    }
    
}


export {removeItem, addAsObject}