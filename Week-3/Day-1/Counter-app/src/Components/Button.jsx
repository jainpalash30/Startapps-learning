import '../styles/button.css';

function Button({onClick , variant , label , ariaLabel}){

  const className = `button button-${variant}`;  

  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );

}

export default Button;
