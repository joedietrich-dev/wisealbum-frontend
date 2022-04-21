import visible from "../eye-12109.svg";
import hidden from "../hidden-12115.svg";
import Icon from "./Icon";

const VisibilityIndicator = ({ isVisible = true }) => (isVisible ? <Icon url={visible} /> : <Icon url={hidden} />);

export default VisibilityIndicator;
