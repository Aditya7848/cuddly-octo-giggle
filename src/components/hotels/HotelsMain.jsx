import React, { useState } from 'react'
import { computeWeek } from '../helperFn'
import { useNavigate } from 'react-router-dom'

const HotelsMain = () => {
    const navigate = useNavigate()
    const [hotelObj, setHotelObj] = useState({
        city: "Delhi",
        checkin: 'Mon',
        checkout: 'Wed',
        guests: 5
    })


    function handledate(e) {
        const val = e.target.value;
        const res = computeWeek(val);
        setHotelObj(prev => { return { ...prev, [e.target.name]: res } })
    }


    function gotoFn() {
        const val = `/hotels/search?city=${hotelObj.city}&checkin=${hotelObj.checkin}&checkout=${hotelObj.checkout}&guests=${hotelObj.guests}`

        navigate(val)
    }

    return (
        <div className='hotelmain-comp'>
            <div className="hotelmain-comp-top df">
                <div className="hotelmain-loc df fdc">
                    <span>City or Location</span>
                    <input type="text" className='input-box' value={hotelObj.city} onChange={(e) => setHotelObj(prev => { return { ...prev, city: e.target.value } })} name='city' />
                </div>
                <div className="hotelmain-checkin df fdc">
                    <span>Check-in</span>
                    <input type="date" name="checkin" className='input-box' onChange={(e) => handledate(e)} />
                </div>
                <div className="hotelmain-checkout df fdc">
                    <span>Check-out</span>
                    <input type="date" name='checkout' className='input-box' onChange={(e) => handledate(e)} />
                </div>
                <div className="hotelmain-guests df fdc">
                    <span>Guests</span>
                    <select name="guests" id="guests" className='input-box' onChange={(e) => setHotelObj(prev => { return { ...prev, guests: e.target.value } })}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <button className='hotelmain-searchbtn search-btn' onClick={() => gotoFn()}>Search</button>

        </div>
    )
}

export default HotelsMain