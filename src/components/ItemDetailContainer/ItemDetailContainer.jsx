import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { obtenerProduto } from "../../productos"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(true)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        obtenerProduto(id)
        .then((response) => {
            setItem(response)
        })
        .catch(() => {
            setItem(null)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [id])



    return <ItemDetail item={item} loading={loading}/>
    
}

export default ItemDetailContainer