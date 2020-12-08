// eslint-disable-next-line
import { bindActionCreators } from "redux";
import Products, { Product } from "../../shared/Table/Table.mockdata";
import { Action} from '../index'


// eslint-disable-next-line
export default function (state = [], action: Action ): Product[] {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return [...action.payload];
        case 'INSERT_NEW_PRODUCT':
            return [...state, {
                ...action.payload,
                _id: String(state.length + 1)
            }]
        default:
            return state;
    }
}