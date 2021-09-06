import React from 'react'
import Button from '../Button/Button'

const Footer = ({company,position}) => {
    return (
        <footer>
            <div className="info">
                <h2>{position}</h2>
                <p>{company}</p>
            </div>
            <div className="button">
                <Button text={'Apply Now'} />
            </div>
        </footer>
    )
}

export default Footer
