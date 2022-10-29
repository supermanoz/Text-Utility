export default function Alert(props){
    return (
        <div style={{height:"60px"}}>
            {props.mode &&
            <div className={`alert alert-${props.mode.type} show`} role="alert">
                {props.mode.text}
            </div>}
        </div>
    );
}