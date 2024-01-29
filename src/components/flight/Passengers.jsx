import React from 'react'


const Passengers = ({ isopen, flightdata }) => {
    function clickHandler(e) {
        e.stoppropagation();
        const val = e.target.textContent;

    }
    return (
        <div className="passengers-overlay" onClick={() => isopen(false)}>
            <div className='passengers-comp df '>
                <div className="btn-group" data-toggle="buttons">
                    <span>Adult : </span>
                    <input type="radio" className="btn btn-primary" value="1" name="radio" />
                    <input type="radio" className="btn btn-primary" value="2" name="radio" />
                    <input type="radio" className="btn btn-primary" value="3" name="radio" />
                    <input type="radio" className="btn btn-primary" value="4" name="radio" />
                    <input type="radio" className="btn btn-primary" value="5" name="radio" />
                </div>
                <div className="btn-group" data-toggle="buttons">
                    <span>Child : </span>
                    <input type="radio" className="btn btn-primary" value="2" name="radio" />
                    <input type="radio" className="btn btn-primary" value="1" name="radio" />
                    <input type="radio" className="btn btn-primary" value="3" name="radio" />
                    <input type="radio" className="btn btn-primary" value="4" name="radio" />
                    <input type="radio" className="btn btn-primary" value="5" name="radio" />

                </div>
                <div className="passengers-class ">
                    <span>Class : </span>
                    <input type="radio" className="pass-class" value="Economy" name="radio" />
                    <input type="radio" className="pass-class" value="Business" name="radio" />
                    <input type="radio" className="pass-class" value="First" name="radio" />
                </div>
            </div>
        </div>
    )
}

export default Passengers