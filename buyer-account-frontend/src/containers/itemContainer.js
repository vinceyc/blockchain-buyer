import { connect } from "react-redux";
import Item from "./../components/item";

// ItemContainer
export default connect(
	(state, ownProps) => (
		state.stock.find(item => String(item.id) === ownProps.params.id)
	)
)(Item);