import React, { useState } from 'react'
import { computeWeek } from '../helperFn'
import Offers from '../offers/Offers'
import { useNavigate } from 'react-router-dom'

const FlightMain = () => {
    const navigate = useNavigate()

    const [flightObj, setFlightObj] = useState({
        from: 'Delhi',
        to: 'Chennai',
        date: 'Mon',
        passengers: 5

    })
    function changehandler(e) {
        setFlightObj((prev) => { return { ...prev, [e.target.name]: e.target.value } })

        console.log(flightObj)
    }
    function dateHandler(e) {
        const val = computeWeek(e.target.value)
        setFlightObj((prev) => {
            return { ...prev, date: val }
        })
    }

    function gotoPage() {
        const val = `/flights/search?from=${flightObj.from}&to=${flightObj.to}&passengers=${flightObj.passengers}&date=${flightObj.date}`

        navigate(val)
    }
    return (
        <div className='flightmain-comp'>
            <div className="flightmain-comp-top df ">
                <div className="flightmain-from df fdc">
                    <span>From</span>
                    <input type="text" name="from" value={flightObj.from} onChange={(e) => changehandler(e)} className='input-box' />
                    <span></span>
                </div>
                <div className="flightmain-to df fdc">
                    <span>To</span>
                    <input type="text" name='to' value={flightObj.to} onChange={(e) => changehandler(e)} className='input-box' />
                    <span></span>
                </div>
                <div className="flightmain-date df fdc">
                    <span>Departure</span>
                    <input type="date" onChange={(e) => dateHandler(e)} className='input-box' />

                </div>
                <div className="flightmain-passengers df fdc">
                    <span>Passengers : </span>
                    <select name="passengers" id="pass" onChange={(e) => changehandler(e)} className='input-box' >
                        <option value="">Passengers: </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>

                </div>
            </div>
            <button className='search-btn fmain-btn' onClick={(e) => gotoPage()}>Search</button>

        </div>
    )
}

export default FlightMain