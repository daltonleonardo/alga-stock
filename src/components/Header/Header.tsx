import React from 'react';
import './Header.css'
import { RootState } from '../../redux';
import { connect } from 'react-redux';
import { Product } from '../../shared/Table/Table.mockdata';

declare interface HeaderProps {
    title: string
    firstProduct: Product
}

//Forma de tipar na mão
// const Header = (props: HeaderProps) => {
//     return <header className="AppHeader">
//     <h1>{props.title}</h1>
// </header>
// }

// Passa via generics a tipagem
const Header: React.FC<HeaderProps> = (props) => {
    return <header className="AppHeader">
        <h1>{props.title}</h1>
        <span>{props.firstProduct && props.firstProduct.name? props.firstProduct.name : '--'} </span>
    </header>
}

const mapStateToProps = (state: RootState) => ({
    firstProduct: state.products[0]
})

export default connect(mapStateToProps)(Header);