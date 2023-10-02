import './Button.css';

const Button = ({children, variant}) => {
    return (
        variant === 'primary' ? <button className="custom-button primary">{children}</button> : <button className="custom-button secondary">{children}</button>
    )
}

export default Button