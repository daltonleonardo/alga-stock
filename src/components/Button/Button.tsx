import React from 'react';
import './Button.css';


// tipagem simples
// const Button= (props: { content: string}) => {

//tipagem direta
// const Button: React.FC<{ content: string}>= (props) => {

declare interface ButtonProps {
    content?: string,
    onClick?: () => void,
    appendIcon: JSX.Element
}


/* 
props.content  quando é passad o valor como atributo, exemplo: <Button content="teste"/>
children quando é passado entre o elemento hml, exemplo: <Button>teste</Button>
*/
const Button: React.FC<ButtonProps>= (props) => {
    return <button className="AppButton" 
    onClick={props.onClick}>
        {props.children || 'NameLess button'}
        {props.appendIcon }
    </button>
}

export default Button;