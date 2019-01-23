import { connect } from "react-redux";
import Item from "./../components/item";

// const mapStateToProps = (state, ownProps) => {
// 	console.log("state", state);
// 	console.log("ownProps", ownProps);
// 	console.log("ownProps.params: " + ownProps.params);
// 	const itemData = state.stock.find(item => String(item.id) === ownProps.match.params.id);
// 	console.log("itemData: " + itemData);
// 	return itemData;
// };

// ItemContainer
export default connect(
	(state, ownProps) => (
		state.stock.find(item => String(item.id) === ownProps.match.params.id)
	)
)(Item);