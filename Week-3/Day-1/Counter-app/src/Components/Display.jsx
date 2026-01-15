import {formatCounterValue} from '../utils/Formatters';
import '../styles/Display.css';

function Display ({value}){
  const formattedValue = formatCounterValue(value);
  
  return (
    <div className = "display">
      <div className="display-screen">
        <div className="display-value">
          {formattedValue}
        </div>
      </div>
    </div>
  );

}

export default Display;
