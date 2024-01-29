import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getData } from '../helperFn'

const FlightList = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { from, to, date, passengers } = Object.fromEntries(searchParams)
    const [flightData, setFlightsData] = useState()
    useEffect(() => {
        const url = `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":${from},"destination":${to}}&day=${date}`

        getData(url).then(data => setFlightsData(data.data.flights))
        console.log('flights data effect', flightData)
    }, [])

    return (
        <div className='flightlist-comp df fdc'>
            <div className="flightlist-params">
                <span>{from}</span>
                <span>{to}</span>
                <span>{date}</span>
                <span>{passengers}</span>
            </div>
            <div className="flightlist-bottom df">
                <div className="flightlist-filters"></div>
                <div className="flightlist-list">

                </div>
            </div>

        </div>
    )
}

export default FlightList