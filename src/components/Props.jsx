import PropTypes from 'prop-types';

export default function Props(props){
    return(
    <>
    <button className={`btn btn-${props.mode.text} btn-sm m-2`} onClick={()=>props.onHandleClick(props.action)}>{props.name}</button>
    </>
    )
}

Props.propTypes={
    name: PropTypes.string
}