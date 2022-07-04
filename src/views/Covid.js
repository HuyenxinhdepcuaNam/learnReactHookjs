import { useState, useEffect } from "react"
import useFetch from "../customize/fetch"
import moment from "moment"
const Covid = () => {

    const today = new Date(new Date().setHours(0, 0, 0, 0))
    const priorDay = moment().subtract(30, 'days')
    const { data: dataCovid, loading, errMessage } = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDay.toISOString()}&to=${today.toISOString()}`)

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                {loading === false && dataCovid
                    ? dataCovid.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.Date}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Active}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>
                            </tr>
                        )
                    })
                    : <tr>
                        <td colSpan={'5'} style={{ textAlign: 'center' }}>
                            {errMessage === '' ? 'Loading...' : errMessage}
                        </td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export default Covid