import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './Button.scss'

const Button = ({text,type = 'one',mobileSearch = false}) => {
    if(mobileSearch){
        return <button className={`btn mobile ${type}`}><AiOutlineSearch/></button>;
    }
    return (
        <button className={`btn ${type}`}>{text}</button>
    )
}

export default Button
