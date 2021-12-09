import {
    atom,
} from 'recoil';


const cartState = atom({
    key: 'cartState', // unique ID (with respect to other atoms/selectors)
    default: [], // valeur par défaut (alias valeur initials)
});

export default cartState;