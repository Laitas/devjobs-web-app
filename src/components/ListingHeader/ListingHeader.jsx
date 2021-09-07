import React from 'react'
import Button from '../Button/Button'
import './ListingHeader.scss'
const ListingHeader = ({logo,logoBackground,company,website}) => {
    // console.log(logo)
    // console.log(logo.slice(2,logo.length))
    return (
      <header className="listing-header">
        <div style={{ backgroundColor: logoBackground }} className="logo">
          <img
            src={logo}
            alt={company}
          />
        </div>
        <main className="header-main">
          <div className="company-name">
            <h2>{company}</h2>
            <p>{company.toLowerCase()}.com</p>
          </div>
          <div className="button">
              <Button onClick={()=> window.location.href = website} type={'two'} text={'Company Site'} />
          </div>
        </main>
      </header>
    );
}

export default ListingHeader
