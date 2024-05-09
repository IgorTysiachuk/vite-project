import { useNavigate } from "react-router-dom";

function Nav() {
    const router = useNavigate()
    return (<div>
        <p onClick={() => { router("/products") }} >Products</p>
        <p onClick={() => { router("/") }} >Main</p>
    </div>);
}

export default Nav;