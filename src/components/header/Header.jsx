import React from 'react'
import moonIcon from '../../assets/desktop/icon-moon.svg'
import sunIcon from '../../assets/desktop/icon-sun.svg'
import { useSelector,useDispatch } from 'react-redux'
import { toggleTheme } from '../../redux/themeSlice'
import './Header.scss'

const Header = () => {
    const themeState = useSelector(state => state.theme.lightTheme)
    const dispatch = useDispatch()
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
            <div className="theme-toggle-button-wrapper" onClick={()=> dispatch(toggleTheme())}>
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
      </header>
    );
}

export default Header
