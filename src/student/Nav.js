import {Link} from "react-router-dom";

export default function Nav(props) {
    return (
        <>
            <h1><Link to={"/login"}>{props.name}</Link></h1>
        </>
    )
}
