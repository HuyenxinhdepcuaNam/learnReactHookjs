import { useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"
const useFetch = (url) => {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(true)
    let [errMessage, setErrMessage] = useState('')
    const fetchData = async () => {
        try {
            let res = await axios.get(url)
            let data = res && res.data ? res.data : []
            if (data && data.length > 0) {
                data.map(item => {
                    item.Date = moment(item.Date).format('DD/MM/YYYY')
                    return item

                })
                data = data.reverse()
            }
            setData(data)
            setLoading(false)
        } catch (e) {
            setErrMessage(e.message)
        }

    }
    useEffect(() => {
        setTimeout(() => {
            fetchData()
        }, 3000)

    }, [])

    return {
        data, loading, errMessage
    }

}

export default useFetch