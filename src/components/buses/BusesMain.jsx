import React from 'react'

const BusesMain = () => {
    return (
        <div className='busesmain-comp'>
            <div className="busesmain-comp-top df">
                <div className="busesmain-from df fdc">
                    <span>From</span>
                    <input type="text" name='from' className='input-box' />
                </div>
                <div className="busesmain-to df fdc">
                    <span>To</span>
                    <input type="text" name='to' className='input-box' />
                </div>
                <div className="busesmain-date df fdc">
                    <span>Travel Date:</span>
                    <input type="date" name='date' className='input-box' />
                </div>
            </div>
            <button className='busesmain-btn search-btn'>Search</button>
        </div>
    )
}

export default BusesMain