import React from 'react'
import "./Holdings.css"
export default function Holdings(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return (
        <>
           
            <div className="holdingcontainer">
                <h3>Holdings</h3> 
               
                <ul>{listItems}</ul>
               

                {/* <div className="Stocklist">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Tata</li>
                        <li className="list-group-item">Reliance</li>
                        <li className="list-group-item">HUL</li>
                        <li className="list-group-item">JSW Steel</li>
                        <li className="list-group-item">IEX</li>
                        <li className="list-group-item">Adani</li>
                        <li className="list-group-item">Birlasoft</li>
                        <li className="list-group-item">IRCTC</li>
                        <li className="list-group-item">Sun Pharma</li>
                        <li className="list-group-item">NTPC</li>
                        
                    </ul>
                </div> */}
            </div>
        </>    
    )
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <Holdings numbers={numbers} />,
  document.getElementById('root')
);
