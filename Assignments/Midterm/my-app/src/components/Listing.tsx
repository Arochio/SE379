import { useNavigate } from "react-router-dom"


function Listing() {
    const navigate = useNavigate();
    const {data: products, loading, error} = useFetch('products')

    return (
        <>
        {!id && (
            <button className="productListBtn">
                {prod}
            </button>
        )}
        </>
    )
}

export default Listing;