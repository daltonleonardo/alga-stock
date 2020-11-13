import React from 'react';
import './Header.css'

declare interface HeaderProps {
    title: string
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
    </header>
}

export default Header;