import React from 'react'

const OffersNav = ({ clicked }) => {
    function clickHandler(e) {


    }
    return (
        <div className="offersnav df">
            <span className="offersnav-head">Offers</span>
            <div className="offers-nav-bottom df ">
                <span>All</span>
                <span>Flights</span>
                <span>Trains</span>
                <span>Buses</span>
                <span>Cars</span>
            </div>
        </div>
    )
}

export default OffersNav