import "./breadcrumb.scss"
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {

    return (
        <>
            <div className="navigation">
                <Link to="/">{"Home >"}</Link>
                <Link to={"/"+props.pageLink}>{props.pageName}</Link>
            </div>
        </>
    )
}

export default Breadcrumb