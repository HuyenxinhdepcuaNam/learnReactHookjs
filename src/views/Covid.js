import { useState, useEffect } from "react"
import useFetch from "../customize/fetch"

const Covid = () => {


    const { data: dataCovid, loading, errMessage } = useFetch(`https://api.covid19api.com/country/vietnam?from=2021-03-01T00:00:00Z&to=2021-04-01T00:00:00Z`)

    return (
        <table>
            {console.log('check dataCovid', dataCovid)}
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
                    : <td colSpan={'5'} style={{ textAlign: 'center' }}>
                        {errMessage === '' ? 'Loading...' : errMessage}
                    </td>
                }
            </tbody>
        </table>
    )
}

export default Covid