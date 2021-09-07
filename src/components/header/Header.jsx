import React from 'react'
import moonIcon from '../../assets/desktop/icon-moon.svg'
import sunIcon from '../../assets/desktop/icon-sun.svg'
import { useSelector,useDispatch } from 'react-redux'
import { toggleTheme } from '../../redux/themeSlice'
import { useLocation } from 'react-router'
import { useHistory } from 'react-router'
import './Header.scss'
import Search from '../Search/Search'

const Header = () => {
    const themeState = useSelector(state => state.theme.lightTheme)
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const themeToggle = () =>{
      if(themeState){
        document.body.classList.add("dark-theme");
        dispatch(toggleTheme());
      }else{
        document.body.classList.remove("dark-theme");
        dispatch(toggleTheme())
      }
    }
    const checkTheme = () =>{
      if (!themeState) {
        document.body.classList.add("dark-theme");
      } else {
        document.body.classList.remove("dark-theme");
      }
    }
    React.useEffect(()=>{
      checkTheme()
    },[themeState])
    return (
      <header className='header'>
        <div className="header-wrapper">
          <div className="title">
            <h1 onClick={()=> history.push('/')}>devjobs</h1>
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
        {location.pathname.includes('/job/') ? null :
        <Search/>
        }
      </header>
    );
}

export default Header
