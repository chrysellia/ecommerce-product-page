import {
    selector,
} from 'recoil';
import cartState from '../atom/cartState';

const cartListState = selector({
    key: 'cartListState',
    get: ({ get }) => {
        const cartList = get(cartState);

        return cartList;
    },
});

export default cartListState;