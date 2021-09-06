import React from 'react'
import './JobComponent.scss'
const JobComponent = ({onClick,logo,logoBackground,location,company,position,postedAt,contract}) => {
    return (
      <div onClick={onClick} className="job-component">
        <div style={{ backgroundColor: logoBackground }} className="logo">
          <img src={logo} alt={company} />
        </div>
        <div className="details">
          <span className='time'>{postedAt} &#8226; {contract}</span>
          <h3 className="position">{position}</h3>
          <span className="company">{company}</span>
          <span className="location">{location}</span>
        </div>
      </div>
    );
}

export default JobComponent
