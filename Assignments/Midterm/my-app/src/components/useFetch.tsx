import { useState } from "react"

function useFetch() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    try {
        //fetch data
    } catch (e) {
        setError(`An error occured: ${e}`);
    }

    return ({products, loading, error})
}

export default useFetch