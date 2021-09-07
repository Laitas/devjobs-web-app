import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import './Listingpage.scss'
import Footer from '../../components/Footer/Footer'
import ListingHeader from '../../components/ListingHeader/ListingHeader'
import Button from '../../components/Button/Button'

const Listingpage = () => {
    const [listing,setListing] = React.useState([])
    const [loading,setLoading] = React.useState(true)
    const params = useParams()
    const jobs = useSelector(state => state.jobs)
    const findJob = () =>{
        const found = jobs.find(item => item.id === parseInt(params.id))
        setListing(found)
        setLoading(false)
    }
    React.useEffect(()=>{
        findJob()
    },[listing])
    if(loading){
       return <section className="listing-page">Loading</section>;
    }else{
        const {apply,company,contract,description,location,logo,logoBackground,position,postedAt,requirements,role,website} = listing;
        return (
          <>
          <section className="listing-page">
            <ListingHeader
              logo={logo}
              logoBackground={logoBackground}
              company={company}
              website={website}
            />
            <main className="listing">
              <div className="top-shelf">
                <div className="company-info">
                  <span className="time">
                    {postedAt} &#8226; {contract}
                  </span>
                  <h1 className="position">{position}</h1>
                  <span className="location">{location}</span>
                </div>
                <div className="button">
                    <Button text='Apply Now' onClick={()=>window.location.href = apply}/>
                </div>
              </div>
              <div className="description">
                  <p>{description}</p>
              </div>
                <div className="requirements">
                    <h3>Requirements</h3>
                    <p>{requirements.content}</p>
                    <ul>
                        {requirements.items.map(req =>(
                            <li className='requirement'><span>{req}</span></li>
                        ))}
                    </ul>
                </div>
                <div className="role">
                    <h3>What You Will Do</h3>
                    <p>{role.content}</p>
                    <ol>
                        {role.items.map(item =>(
                            <li className='role-li'><span>{item}</span></li>
                        ))}
                    </ol>
                </div>
            </main>
          </section>
            <Footer company={company} position={position} />
          </>
        );
}
}

export default Listingpage
