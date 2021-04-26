import {connect} from "react-redux";

const Counter = (
    {plus2, minus3, count, incrementButton="dd", decrementButton}) =>
    <div>
        <h1>{count}</h1>
        <button onClick={plus2}>{incrementButton}</button>
        <button onClick={minus3}>{decrementButton}</button>
    </div>

const stpm = (state) => ({count: state.count})
const dtpm = (dispatch) => ({
    plus2:  () => dispatch({type: "PLUS_TWO"}),
    minus3: () => dispatch({type: "MINUS_THREE"}),
})
export default connect(stpm, dtpm)(Counter)
