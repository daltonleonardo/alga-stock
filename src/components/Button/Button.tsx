import React from 'react';
import './Button.css';


// tipagem simples
// const Button= (props: { content: string}) => {

//tipagem direta
// const Button: React.FC<{ content: string}>= (props) => {

// declaração normal
// declare interface ButtonProps {


// Modelo de tipagem por dicionário
type WithChildren<T = {}> = 
  T & { children?: React.ReactNode };

type ButtonProps = WithChildren<{
    content?: string,
    onClick?: () => void,
    appendIcon: JSX.Element
}>




/* 
props.content  quando é passad o valor como atributo, exemplo: <Button content="teste"/>
children quando é passado entre o elemento hml, exemplo: <Button>teste</Button>
*/

/*
Parametros ficarem visíveis em formato de função
const Button: React.FC<ButtonProps>= (props) => {
*/


const Button = ({ content, appendIcon, onClick, children }: ButtonProps)  => {
    return <button className="AppButton" 
    onClick={ onClick}>
        {children || 'NameLess button'}
        {appendIcon }
    </button>
}

export default Button;