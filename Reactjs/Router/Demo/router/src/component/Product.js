import { useParams } from "react-router";
 
function Product() {
    let { categoryId } = useParams();
    return (
        <div>
            <h3>Id selected {categoryId} </h3>
        </div>
    );
}
export default Product;