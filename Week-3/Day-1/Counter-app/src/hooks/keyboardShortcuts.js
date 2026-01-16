
import { useEffect } from 'react';

export function keyboardShortcuts({onIncrement, onDecrement, onReset}){
useEffect(() => {
  const keyDown = (event) =>{
    switch (event.key){
      case'+' :
      case'=' :
      onIncrement();
      break;

      case '-':
      case '_':
      
      onDecrement();
      break;

      case ' ':
      event.preventDefault(); 
      onReset();
      break;

      // event.preventDefault() use karte ho, toh tum yeh default behavior rok dete ho taaki tum apna custom reset logic chala sako, bina page refresh ya default action ke.

      default: 
      break
    }
  };
  
  window.addEventListener('keydown', keyDown);

   return () => {
    window.removeEventListener('keydown', keyDown);
    };

} , [onIncrement, onDecrement, onReset]);
}