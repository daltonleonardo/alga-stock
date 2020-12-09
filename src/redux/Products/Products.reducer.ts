// eslint-disable-next-line
import { bindActionCreators } from "redux";
import  { Product } from "../../shared/Table/Table.mockdata";
import { Action} from '../index'


// eslint-disable-next-line
export default function (state: Product[] = [], action: Action ): Product[] {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return [...action.payload];
        default:
            return state;
    }
}