import "./App.css";
function App()
{
  const productName="Wireless Headphones";
  const price="₹2,499";
  return(
      <div className="container">
    <h1>{productName}</h1>
    <p>Category: Electronics</p>
    <p>{price}</p>
    <p>Comfortable wireless headphones with clear sound and long battery life.</p>

    <ul>
      <li>Bluetooth connectivity</li>
       <li>20-hour battery life</li>
        <li>Built-in microphone</li>
    </ul>
</div>
  );
}
export default App;