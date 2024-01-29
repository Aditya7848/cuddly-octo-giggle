import React from 'react'

const TrainsMain = () => {
    return (
        <div className='trainmain-comp'>
            <div className="trainmain-top df ">
                <div className="tranmain-from df fdc">
                    <span>From</span>
                    <input type="text" name='from' className='input-box' />
                </div>
                <div className="trainmain-to df fdc">
                    <span>To</span>
                    <input type="text" name='to' className='input-box' />
                </div>
                <div className="trainmain-date df fdc">
                    <span>Travel Date :</span>
                    <input type="date" name="date" id="date" className='input-box' />
                </div>
            </div>
            <button className='trainmain-btn search-btn'>Search</button>
        </div>
    )
}

export default TrainsMain