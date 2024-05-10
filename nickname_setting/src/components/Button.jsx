import "./Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button
    onClick={onClick}
    className={`Button Button_${type}`}
    // className={`Button`}
    >
      {text}
    </button>
  )
}

export default Button;