import Button from './Button';
import '../styles/ButtonGroup.css';

function ButtonGroup({ onIncrement, onDecrement , onReset}) {
  return (
  <div className= "button-group">
 <Button onClick={onIncrement}
 variant = "increment"
 label = "+"
 ariaLabel="Increment counter"
 />

 <div className="button-row">
  <Button onClick ={onDecrement}
  variant = "decrement"
  label = "-"
  ariaLabel = "Decrement counter"/>
 

 <Button onClick={onReset}
 variant = "reset"
 label = "⟲"
 ariaLabel = "Reset counter"
  />

</div>
</div>
 );
}

export default ButtonGroup;
