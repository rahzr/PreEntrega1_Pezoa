import React from 'react';
import Button from 'react-bootstrap/Button';
import { ShoppingCartIcon as ShoppingCartOutlineIcon } from '@heroicons/react/24/outline';
import './CartWidget.css';

function CartWidget() {
  return (
    <>
      <Button variant="info" className="btn-carrito">
        Carrito
        <ShoppingCartOutlineIcon className="carrito" />
        <span className="globo">2</span>
      </Button>
    </>
  );
}

export default CartWidget;
