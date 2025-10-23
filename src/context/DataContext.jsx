import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext(null)

 const DataProvider = ({children}) => {
    const [data, setData] = useState([])

    const fetchAllProducts = async() => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products?limit=20')
            setData(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    return <DataContext.Provider value={{data, setData, fetchAllProducts}}>
        {children}
    </DataContext.Provider>
}

export default DataProvider