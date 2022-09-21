import './App.css';
import React from "react";


class App extends React.Component {
   
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          infoLoaded: false
      };
  }
 
  componentDidMount() {
      fetch("http://localhost:5000/getResult")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  infoLoaded: true
              });
          })
  }
  
  render() {
      const { infoLoaded, items } = this.state;
      if (!infoLoaded) 
      return <div>
          <h1> Please wait some time! </h1> </div> ;
 
      return (
      <div className = "App">
          <h1> Top 5 Cryptocurrency by Market cap : </h1>  {
              items.map((item) => ( 
              <ol id="crypto_name" key = { item.id } >
                  { item.name } : { item.market_cap }
                  </ol>
              ))
          }
      </div>
  );
}
}
 
export default App;