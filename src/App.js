import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteDisplay from './Components/QuoteDisplay/QuoteDisplay.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: 'English',
      displayHeader:'',
      displayQuote:'none'
      };
    this.handleChange = this.handleChange.bind(this);
    this.hidingHeader = this.hidingHeader.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  hidingHeader(){
    this.setState({
      displayHeader:'none',
      displayQuote:''
    });

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
          <div className='pa4' style={{display: this.state.displayHeader}}>
            {
              this.state.value === 'Spanish' && 
              <div>
                <blockquote className="athelas pl4 black-90 bl bw2 b--blue ">
                  <p class="f5 f4-m f3-l lh-copy mt0 ">Refranes Generador</p>
                  <cite class="f6 ttu tracked fs-normal">―Haga clic en el botón de abajo para generar una cita aleatoria</cite>
                </blockquote>
              </div> 
            }
            {
              this.state.value === 'English' && 
              <div>
                <blockquote className="athelas pl4 black-90 bl bw2 b--blue ">
                  <p class="f5 f4-m f3-l lh-copy mt0 ">Random Quote Generator</p>
                  <cite class="f6 ttu tracked fs-normal">―Click the button below to generate a random quote</cite>
                </blockquote>
              </div>  
            }
          </div>
          <QuoteDisplay language={this.state.value}  quoteDisplay={this.state.displayQuote} hideHeader={this.hidingHeader}/>
          <footer className="footer">
           <p>By: Mustafa Jimale</p>
          </footer>


          
            
      </div>
    );
  }
}

export default App;
