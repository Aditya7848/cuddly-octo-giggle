import React from 'react'

const HotelsMain = () => {
    return (
        <div className='hotelmain-comp'>
            <div className="hotelmain-comp-top df">
                <div className="hotelmain-loc df fdc">
                    <span>City or Location</span>
                    <input type="text" className='input-box' />
                </div>
                <div className="hotelmain-checkin df fdc">
                    <span>Check-in</span>
                    <input type="date" name="checkin" id="checkin" className='input-box' />
                </div>
                <div className="hotelmain-checkout df fdc">
                    <span>Check-out</span>
                    <input type="date" name='checkout' className='input-box' />
                </div>
                <div className="hotelmain-guests df fdc">
                    <span>Guests</span>
                    <select name="guests" id="guests" className='input-box'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <button className='hotelmain-searchbtn search-btn'>Search</button>

        </div>
    )
}

export default HotelsMain