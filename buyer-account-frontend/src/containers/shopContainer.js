import { connect } from "react-redux";

  // ShopItemsContainer
export default connect(
	(state) => (
		{
			items: state.stock,
		}
	)
)(ShopItems);