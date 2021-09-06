import React from 'react'
import './Search.scss'
import searchIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'
import filterIcon from '../../assets/mobile/icon-filter.svg'
import Button from '../Button/Button'
import { useSelector,useDispatch } from 'react-redux'
import { toggleCheckbox } from '../../redux/checkboxSlice'
import Modal from '../Modal/Modal'
import Checkbox from '../Checkbox/Checkbox'

const Search = () => {
    const check = useSelector(state => state.check.check)
    const dispatch = useDispatch()
    const [modal,setModal] = React.useState(false)
    const [width,setWidth] = React.useState(window.innerWidth)
    const checkWidth = () =>{
        setWidth(window.innerWidth)
    }
    const modalToggle = () =>{
      setModal(!modal)
    }
    React.useEffect(()=>{
        window.addEventListener('resize',checkWidth)
        return () => window.removeEventListener('resize',checkWidth)
    },[width])
    if(width > 500){
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
            <div
              className="checkbox"
              onClick={() => dispatch(toggleCheckbox())}
            >
              {/* <div
              onClick={() => dispatch(toggleCheckbox())}
              className={check ? "checkbox-input checked" : "checkbox-input"}
              >
              {check ? <img src={checkIcon} /> : null}
            </div> */}
              <Checkbox />
              <p className="label">Full Time</p>
            </div>
            {width <= 700 ? (
              <div className="search-btn">
                <Button mobileSearch={true} />
              </div>
            ) : (
              <div className="search-btn">
                <Button text="Search" />
              </div>
            )}
          </div>
        </section>
      );
  }else{
    return (
      <section className="search-component">
        <div className="filter-title">
          <form>
            <input
              type="text"
              placeholder="Filter by title, companies, expertise..."
            />
          </form>
        </div>
        <div className="right-wrapper">
            <div className="modal-btn">
              <img  onClick={modalToggle} src={filterIcon} alt="more options" />
            </div>
            <div className="search-btn">
              <Button mobileSearch={true} />
            </div>
        </div>
        {modal? <Modal modal={modal} setModal={setModal}/> : null}
      </section>
    );
  }
}
  
  export default Search
  