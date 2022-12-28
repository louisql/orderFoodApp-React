import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  return (
    <button>
      {/* one span for icon, one span for text and one span for the badge */}
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  );
};

export default HeaderCartButton;
