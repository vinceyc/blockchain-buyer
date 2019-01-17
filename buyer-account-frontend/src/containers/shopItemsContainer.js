import { connect } from "react-redux";
import ShopItems from "./../components/shopItems";

// ShopItemsContainer
export default connect(
	(state) => (
		{
		items: state.stock,
		}
	)
)(ShopItems);

  