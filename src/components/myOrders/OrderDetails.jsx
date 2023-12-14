// Write all the code here
export default function OrderDetails() {
  return (
    <div className="orderDetails">
      <main>
        <h1> Pedido #ON00012345</h1>
        <div>
          <h1>Envío</h1>
          <p>Dirección: Granvía 123</p>
        </div>
        <div>
          <h1>Contacto </h1>
          <p>Nombre: Camila Martínez</p>
          <p>Teléfono: 628753912</p>
        </div>
        <div>
          <h1>Estado</h1>
          <p>Estado del pedido: En reparto 🛵</p>
          <p>Fecha del pedido: 14-12-2023 20.36h</p>
          <p>Entregado: 14-12-2023 21.13h</p>
        </div>
        <div>
          <h1>Pago</h1>
          <p>Método de pago: Online </p>
          <p>Referencia: #asdasdsadsad</p>
          <p>Fecha de pago: 14-12-2023 20.35h</p>
        </div>
        <div>
          <h1>Total</h1>
          <p>Subtotal: 15.50€</p>
          <p>Gastos de envío: 1.50€</p>
          <p>IVA: 2.70€ </p>
          <p>Total: 19.79€</p>
        </div>
        <article>
          <h1>ARTÍCULOS</h1>
          <div>
            <h4>Cheese Burger</h4>
            <h4>1 × 3.5€</h4>
          </div>
          <div>
            <h4>Veggie Cheese Burger</h4>
            <h4>1 × 5.3€</h4>
          </div>
          <div>
            <h4>Cheese Burger + French Fries</h4>
            <h4>1 × 7€</h4>
          </div>
          <div>
            <h4>SubTotal</h4>
            <h4>15.5</h4>
          </div>
        </article>
      </main>
    </div>
  );
}
