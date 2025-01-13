import clsx from "clsx";
import css from "./Button.module.css";

export default function Button(props) {
    // eslint-disable-next-line react/prop-types
    const {cssstyle, children, onClick} = props;

    return (
        <button
            className={clsx(css.button, css[cssstyle])}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}

