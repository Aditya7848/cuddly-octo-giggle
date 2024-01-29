import React, { useEffect, useState } from 'react'
import { getData } from '../helperFn'
import { useLoaderData } from 'react-router-dom'
import OffersNav from './OffersNav'
import OffersCard from './OffersCard'

// export function loader() {
//     console.log('loader')
//     const url = '/api/v1/bookingportals/offers'

//     return getData(url)
// }

const Offers = () => {
    const [offersData, setOffersData] = useState([])
    const [clickedNav, setClickedNav] = useState('')

    useEffect(() => {
        const url = 'https://academics.newtonschool.co/api/v1/bookingportals/offers'
        getData(url).then(data => { console.log('data in comp', data); setOffersData(data) })
        console.log(offersData)
    }, [])
    if (!offersData) return

    const firstHalf = offersData.slice(0, Math.floor(offersData.length / 2))
    console.log('fhalf = ', firstHalf)
    const secondHalf = offersData.slice(Math.floor(offersData.length / 2))


    return (
        <div className='offers-comp df fdc'>
            <OffersNav clicked={setOffersData} />
            <div className="offers-comp-top df">
                {firstHalf.map((obj, idx) => {
                    return <OffersCard obj={obj} key={idx} />
                })}
            </div>
            <div className="offers-comp-bottom df">
                {secondHalf.map((obj, idx) => {
                    return <OffersCard obj={obj} key={idx} />
                })}
            </div>
        </div>
    )
}

export default Offers