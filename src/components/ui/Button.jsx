import './Button.css';

const Button = ({children, variant}) => {
    return (
        variant === 'primary' ? <button className="primary">{children}</button> : <button className="secondary">{children}</button>
    )
}

export default Button