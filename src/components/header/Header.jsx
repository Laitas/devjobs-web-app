import React from 'react'
import moonIcon from '../../assets/desktop/icon-moon.svg'
import sunIcon from '../../assets/desktop/icon-sun.svg'
import { useSelector,useDispatch } from 'react-redux'
import { toggleTheme } from '../../redux/themeSlice'
import './Header.scss'
import Search from '../Search/Search'

const Header = () => {
    const themeState = useSelector(state => state.theme.lightTheme)
    const dispatch = useDispatch()
    const themeToggle = () =>{
      document.body.classList.toggle("dark-theme");
      dispatch(toggleTheme());
    }
    return (
      <header>
        <div className="header-wrapper">
          <div className="title">
            <h1>devjobs</h1>
          </div>
          <div className="theme-toggle">
            <div className="sun-icon">
              <img src={sunIcon} alt="" />
            </div>
            <div className="theme-toggle-button-wrapper" onClick={themeToggle}>
              <div
                className={
                  themeState ? "theme-toggle-button" : "theme-toggle-button dark"
                }
              ></div>
            </div>
            <div className="moon-icon">
              <img src={moonIcon} alt="" />
            </div>
          </div>
        </div>
        <Search/>
      </header>
    );
}

export default Header
