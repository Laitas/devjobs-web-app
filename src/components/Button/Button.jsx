import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './Button.scss'

const Button = ({text,type = 'one',mobileSearch = false,onClick}) => {
    if(mobileSearch){
        return <button onClick={onClick} className={`btn mobile ${type}`}><AiOutlineSearch/></button>;
    }
    return (
        <button onClick={onClick} className={`btn ${type}`}>{text}</button>
    )
}

export default Button
