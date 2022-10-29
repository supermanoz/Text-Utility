import {Link} from "react-router-dom";
export default function Navbar(props){
    let handleAboutTitle =(text)=>{
        document.title=text
    }
    return(
    <div className={`text-${props.mode.text}`}>
    <nav className={`navbar navbar-expand-lg text-${props.mode.text} navbar-${props.mode.bg} bg-${props.mode.bg}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/" onClick={()=>handleAboutTitle("Supermanoz - Home")}>Project Supermanoz</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link onClick={()=>handleAboutTitle("Supermanoz - Home")} className={`nav-link ${document.title==="Supermanoz - Home"?"active":""}`} aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={()=>handleAboutTitle("Supermanoz - About")} className={`nav-link ${document.title==="Supermanoz - About"?"active":""}`} to="/about">About</Link>
                    </li>
                </ul>
                <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.onHandleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
            </div>
        </div>
    </nav>
    </div>
    )
}