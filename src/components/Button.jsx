import PropTypes from "prop-types";

const Button = ({
    icon: Icon,
    children,
    variant,
    onClick,
    className,
    disabled,
    style,
    type
}) => {
    return (
        <button className={`btn ${variant} ${className}`} onClick={onClick} type={type} disabled={disabled} style={style}>
            {Icon && <img src={Icon} className="button-icon"></img>}
            {children}
        </button>
)}

Button.PropTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["white-primary", "white-secondary", "white-outline", "primary", "secondary", "primary-outline", "secondary-outline", "naked" ]).isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string
}

Button.defaultProps = {
    variant: "primary", 
    className: "",
    disabled: false,
};

export default Button