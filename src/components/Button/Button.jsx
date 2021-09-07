import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import './Button.scss'

const Button = ({text,type = 'one',mobileSearch = false,onClick}) => {
    const themeSelect = useSelector(state => state.theme.lightTheme)
    if (mobileSearch) {
      return (
        <button onClick={onClick} className={`btn mobile ${type}`}>
          <AiOutlineSearch />
        </button>
      );
    }else if (!themeSelect) {
      return (
        <button onClick={onClick} className={`btn dark ${type}`}>{text}</button>
      );
    }
    return (
        <button onClick={onClick} className={`btn ${type}`}>{text}</button>
    )
}

export default Button
