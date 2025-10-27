import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null)

 const DataProvider = ({children}) => {
    const [data, setData] = useState([])
    const [categories, setCategories] = useState([]);
    const [categoriesChoosen , setCategoriesChoosen] = useState([])
    const [categoryClicked , setCategoryClicked] = useState('')
    const fetchAllProducts = async() => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products?limit=20')
            setData(res.data)
            const uniqueCategories = [...new Set(res.data.map(item => item.category))]
            setCategories(uniqueCategories)
            
          
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(categoryClicked && data.length > 0){
            setCategoriesChoosen(data.filter((item) => item.category === categoryClicked ))
        }
    }, [categoryClicked, data])

    useEffect(() => {
    fetchAllProducts();
  }, []);
    return <DataContext.Provider value={{data, setData, setCategoryClicked, fetchAllProducts, categoryClicked, categories, categoriesChoosen, setCategoriesChoosen}}>
        {children}
    </DataContext.Provider>
}

export default DataProvider