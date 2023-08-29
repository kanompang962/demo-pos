import { getStorage, removeStorage, setStorage } from "../services/service"

const reducer = (state, action) => {

    // Add
    if (action.type === 'ADD_QUANTITY') {
        // Check against
        let again = false;
        state.cart.map((item) => {
            if (item.id === action.payload.id) {
                again = true;
            }
        })

        if (!again) {
            // New cart
            const newCart = action.payload
            setStorage([...state.cart, newCart]);
            return {
                cart: [...state.cart, newCart]
            }
        } else {
            // Again cart and add Quantity
            const newCart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    // เพิ่มจำนวน
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            }).filter((item) => item.quantity !== 0);
            setStorage(newCart)
            return {
                ...state,
                cart: newCart
            }
        }
    }
    // Remove
    if (action.type === 'REMOVE_QUANTITY') {
        removeStorage();
        return {
            cart: []
        }
    }

    if (action.type === 'TOTAL') {
        const { total, amount } = state.cart.reduce((cartTotal, item) => {
            const { price, quantity } = item;
            const itemTotal = price * quantity;
            cartTotal.total += itemTotal;
            cartTotal.amount += 1;
            return cartTotal;
        },
            {
                total: 0,
                amount: 0
            })
        return {
            ...state, total, amount
        }
    }

    if (action.type === 'TOGGLE_QUANTITY') {
        // console.log('Id === ', action.payload.id)
        // console.log('Type === ', action.type)
        const newCart = state.cart.map((item) => {
            if (item.id === action.payload.id) {
                if (action.payload.type === 'increment') {
                    // เพิ่มจำนวน
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    // ลบจำนวน
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
            }
            return item;
        }).filter((item) => item.quantity !== 0);
        setStorage(newCart)
        return {
            ...state,
            cart: newCart
        }
    }

}

export default reducer;