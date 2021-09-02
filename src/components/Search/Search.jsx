import React from 'react'
import './Search.scss'
import searchIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'
import checkIcon from '../../assets/desktop/icon-check.svg'
import Button from '../Button/Button'
import { useSelector,useDispatch } from 'react-redux'
import { toggleCheckbox } from '../../redux/checkboxSlice'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
    const check = useSelector(state => state.check.check)
    const dispatch = useDispatch()
    const [width,setWidth] = React.useState(window.innerWidth)
    const checkWidth = () =>{
        setWidth(window.innerWidth)
    }
    React.useEffect(()=>{
        window.addEventListener('resize',checkWidth)
        return () => window.removeEventListener('resize',checkWidth)
    },[width])
    return (
      <section className="search-component">
        <div className="filter-title">
          <form>
            <img className="filter-icon" src={searchIcon} alt="" />
            <input
              type="text"
              placeholder="Filter by title, companies, expertise..."
            />
          </form>
        </div>
        <div className="filter-location">
          <form>
            <img className="filter-icon" src={locationIcon} alt="" />
            <input type="text" placeholder="Filter by location..." />
          </form>
        </div>
        <div className="right-wrapper">
          <div className="checkbox">
            <div
              onClick={() => dispatch(toggleCheckbox())}
              className={check ? "checkbox-input checked" : "checkbox-input"}
            >
              {check ? <img src={checkIcon} /> : null}
            </div>
            <p className="label">Full Time</p>
          </div>
          {width <= 700 ? (
            <div className="search-btn">
              <Button mobileSearch={true}/>
            </div>
          ) : (
            <div className="search-btn">
              <Button text="Search" />
            </div>
          )}
        </div>
      </section>
    );
}

export default Search
