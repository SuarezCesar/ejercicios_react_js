import { ButtonGroup, Button } from "react-bootstrap";
import { useState } from "react";
const StockCounter = (props) => {
  const [count, setCount] =
    useState(
      1
    ); /* ¿Está bien esto en lugar de initial? Inicio el contador en 1 en lugar de 0 porque
el ejercicio pide initial en 1 pero como voy a usar esta constante para sumar y restar me parece más lógico que initial sea ese state
*/

  //función para sumar en el botón de sumar
  /*le pongo props.stock porque asumo que va a tomar el valor máximo para imprimir de los productos, esto da error de momento cuando
la app intenta compilar por aún no armé los objetos*/
  const addStock = () => {
    if (count < props.stock) {
      setCount(count + 1);
    } else {
      alert("This is the current maximum stock available");
    }
  };

  //función para restar en el botón de restar
  //Acá no invoco a props porque ningún objeto debería arrancar con un stock inferior a 1
  const removeStock = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Value cannot be negative");
      setCount(0);
    }
  };

  //Acá iria la función onAdd para el botón de "Agregar al carrito" pero todavía no hicimos el cart
  return (
    <>
      <ButtonGroup>
        <Button variant="secondary" onClick={removeStock}>
          " - "
        </Button>
        <div>{count}</div>
        <Button variant="secondary" onClick={addStock}>
          " + "
        </Button>
      </ButtonGroup>

      <Button variant="success">Agregar al carrito</Button>
    </>
  );
};

export default StockCounter;
