import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteDisplay from './Components/QuoteDisplay/QuoteDisplay.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: 'English',
      displayHeader:''
      };
    this.handleChange = this.handleChange.bind(this);
    this.hidingHeader = this.hidingHeader.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  hidingHeader(){
    this.setState({displayHeader:'none'});
  }
  /*{
            this.state.value === 'Arabic' && 
            <div>
              <h1>أقوال مأثورة</h1>
              <h3>اضغط على الزر لعرض قول مأثور</h3>
            </div>  
    }*/ //Add Arabic greeting header in the header div. This option will be available when an Arabic quotes array is mad

   /* <option value="Arabic">Arabic</option> */          //Add Arabic option in select tag. This option will be available when an Arabic quotes array is mad


  render() {
    return (
      <div className="App">
          <br/>
          <div className='select'>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          <br/>
          <img src={logo} className="App-logo" alt="logo" />
          <div className='header' style={{display: this.state.displayHeader}} >
            {
              this.state.value === 'Spanish' && 
              <div>
                <h1>Refranes Generador</h1>
                <h3>Haga clic en el botón de abajo para generar una cita aleatoria</h3>
              </div> 
            }
            {
              this.state.value === 'English' && 
              <div>
                <h1>Random Quote Generator</h1>
                <h3 >Click button below to generate a random quote</h3>
              </div>  
            }
          </div>
          <QuoteDisplay language={this.state.value} hideHeader={this.hidingHeader}/>
          <footer className="footer">
           <p>By: Mustafa Jimale</p>
          </footer>
      </div>
    );
  }
}

export default App;
