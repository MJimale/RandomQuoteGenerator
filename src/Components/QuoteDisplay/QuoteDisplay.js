import React from "react";
import enArray from './enArray.js';
import esArray from './esArray.js';
import './QuoteDisplay.css';


class QuoteDisplay extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      quoted:' ',
      authored:'',
      displayTweet:'none'
      }
      this.randomQuote = this.randomQuote.bind(this);
      this.tweetButton = this.tweetButton.bind(this);
  };


  randomQuote() {
    var engQuote = Object.values(enArray)[0];
    var spanishQuote= Object.values(esArray)[0];
    //var arabicQuote= Object.values(arArray)[0];
    var randomNumber = Math.floor(Math.random() * engQuote.length);
    var randomEngQuote = engQuote[randomNumber];
    var randomSpanishQuote = spanishQuote[randomNumber];
    //var randomArabQuoteAuthor = arabicQuote[randomNumber];
    if(this.props.language === 'English'){
        this.setState({
        quoted:randomEngQuote[0],
        authored:randomEngQuote[1],
        displayTweet:'inline-block',
      })
    }else if(this.props.language === 'Spanish'){
       this.setState({
        quoted:randomSpanishQuote[0],
        authored:randomSpanishQuote[1],
        displayTweet:'inline-block',
      })
     }/*else(this.props.language === 'Arabic'){
       this.setState({
        quoted:randomArabQuoteAuthor[0],
        authored:randomArabQuoteAuthor[1],
        displayTweet:'inline-block',
      });*/
    
  console.log(randomNumber)  
  setTimeout(this.displayTwitterButton,4000);
  };

  tweetButton() {
  var URL="https://twitter.com/intent/tweet?text="+this.state.quoted+"-"+this.state.authored;
  window.open(URL, '_blank', 'location=yes,height=250,width=750,scrollbars=yes,status=yes');
  }; 

  render() {
    return (
    <div>
      <p className="quote">{this.state.quoted}</p>
      <p className="quote">{this.state.authored}</p>
      {this.props.language === "Spanish" && 
        <button className="button" onClick={(event) => { this.randomQuote(); this.props.hideHeader();}}>Clic Aquí</button>
      }
      {this.props.language === "Arabic" && 
        <button className="button" onClick={(event) => { this.randomQuote(); this.props.hideHeader();}}>اضغط هنا</button>
      }
      {this.props.language === "English" &&
        <button className="button" onClick={(event) => { this.randomQuote(); this.props.hideHeader();}}>Click Here</button>
      }
      <br/>
      <br/>  
      {this.props.language === "Spanish" && 
            <button className="button" style={{display: this.state.displayTweet}} onClick={this.tweetButton}>Compartir en Twitter</button>
      }
      {this.props.language === "Arabic" && 
      <button className="button" style={{display: this.state.displayTweet}} onClick={this.tweetButton}>شارك على تويتر</button>
      }
      {this.props.language === "English" && 
            <button className="button" style={{display: this.state.displayTweet}} onClick={this.tweetButton}>Tweet Quote</button>
      }

    </div>   
    );
  }
}

export default QuoteDisplay;




