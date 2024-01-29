import React from 'react'

const OffersCard = ({ obj }) => {
    return (
        <div className='offers-card-comp df fdc'>
            <div className='df offers-card-comp-top'>
                <div className="offcar-img">
                    <img src={obj.heroUrl} alt="card-img" />
                </div>
                <div className="offcar-info df fdc">
                    <div className="offer-info-title">{obj.pTx}</div>
                    <div className="offer-info-info">{obj.pTl}</div>
                </div>
            </div>
            <div className="offcar-bottom df">
                <span className='offcar-txt'>{obj.tncCtaText}</span>
                <span>{obj.ctaText}</span>
            </div>
        </div>
    )
}

export default OffersCard