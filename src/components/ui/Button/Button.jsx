import clsx from "clsx";
import css from "./Button.module.css";

export default function Button(props) {
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

