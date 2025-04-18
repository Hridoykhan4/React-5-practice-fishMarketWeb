const getStoredItems = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : []
}


const saveToLS = (cart) => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}

const addToLS = id => {
    const cart = getStoredItems();
    cart.push(id);
    saveToLS(cart)
}

const removeFromLS = id => {
    const cart = getStoredItems();
    const remaining = cart.filter((idx) => idx !== id);
    saveToLS(remaining);
}


export {getStoredItems,  addToLS, removeFromLS};