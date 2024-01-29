import React from 'react'
import { useSearchParams } from 'react-router-dom'

const FlightList = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { from, to, date, passengers } = Object.fromEntries(searchParams)

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