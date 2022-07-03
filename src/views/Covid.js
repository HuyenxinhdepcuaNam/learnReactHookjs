import { useState, useEffect } from "react"
import axios from "axios"
import moment from "moment"

const Covid = () => {
    let [dataCovid, setDataCovid] = useState([])
    let [loading, setLoading] = useState(true)
    const fetchData = async () => {
        let curretnDate = new Date()
        console.log(curretnDate)
        let res = await axios.get(`https://api.covid19api.com/country/vietnam?from=2021-03-01T00:00:00Z&to=2021-04-01T00:00:00Z`)
        let data = res && res.data ? res.data : []
        if (data && data.length > 0) {
            data.map(item => {
                item.Date = moment(item.Date).format('DD/MM/YYYY')
                return item

            })
            data = data.reverse()
        }
        setDataCovid(data)
        setLoading(false)
    }
    useEffect(() => {
        // let res = await axios.get(`https://api.covid19api.com/country/vietnam?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`)
        // let data = res && res.data ? res.data : []
        // setDataCovid(data)

        setTimeout(() => {
            fetchData()
        }, 3000)
    }, [])

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
                    }
                    )
                    : <td colSpan={'5'} style={{ textAlign: 'center' }}>Loading...</td>
                }
            </tbody>
        </table>
    )
}

export default Covid