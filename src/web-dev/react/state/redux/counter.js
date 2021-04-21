import {connect} from "react-redux";

const Counter = ({plus2, minus3, count}) =>
    <div>
        <h1>{count}</h1>
        <button onClick={plus2}>PLUS 2</button>
        <button onClick={minus3}>MINUS 3</button>
    </div>

const stpm = (state) => ({count: state.count})
const dtpm = (dispatch) => ({
    plus2:  () => dispatch({type: "PLUS_TWO"}),
    minus3: () => dispatch({type: "MINUS_THREE"}),
})
export default connect(stpm, dtpm)(Counter)
