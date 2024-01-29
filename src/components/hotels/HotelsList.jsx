import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getDataAuth } from '../helperFn';

const HotelsList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const { city, checkin, checkout, guests } = Object.fromEntries(searchParams)
    const [tHotels, setTHotels] = useState()
    useEffect(() => {
        const url = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":${city}}`

        getDataAuth(url).then(data => setTHotels(data))
        console.log('hotels data from effect', tHotels)
    }, [])
    return (
        <div className='hotelsearchresult '>
            <div className="hotelsearch-top df ">
                <span>{city}</span>
                <span>{checkin}</span>
                <span>{checkout}</span>
                <span>{guests}</span>
            </div>
            <div className="hotelsearch-bottom">
                <div className="hotelsearch-filter"></div>
                <div className="hotelsearch-list"></div>
            </div>

        </div>
    )
}

export default HotelsList