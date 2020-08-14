import React, { Component } from 'react';

import $ from 'jquery';
import Logo from './assets/icon.png';

class HousieApp extends Component {
    constructor(){
        super();
        this.state = {
            randomNumberHolder: 'Lets Have Fun. Click On Generate Number To Start The Game.',
            previousNumberHolder: [],
            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            numbersCalling: [
                '',
                'Top of the house     the number is 1',
                'Me and you     the number is 2',
                'Goodness me',
                'Knock at the door',
                'Fingers in your hand',
                'Super sixer',
                'Days in a week',
                'Garden gate',
                'Number of planets',
                'Uncle Ben',
                'Two beautiful legs     the number is 1',
                'Monkeys cousin, one dozen',
                'Unlucky for some lucky for me',
                'Valentine’s Day',
                'Yet to be kissed',
                'Sweet',
                'Dancing Queen',
                'Voting age',
                'Goodbye teens',
                'One score',
                'Top of the house     the number is 1',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'Top of the house     the number is 1',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'Top of the house     the number is 1',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'Top of the house     the number is 1',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'Top of the house     the number is 1',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'Top of the house     the number is 1',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'Top of the house     the number is 1',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'Top of the house     the number is 1',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
            ]
        }
    }

    randomNumber(interval) {    

        let randomNumber = Math.floor(Math.random() * 100) + 0;
        console.log("Random Number: ", randomNumber);
        console.log("Excluded Numbers: ", this.state.previousNumberHolder);
        
        if (this.state.previousNumberHolder.length > 0) {
            for (let index = 0; index < this.state.previousNumberHolder.length; index++) {
                const currentNumber = this.state.previousNumberHolder[index];
                if (currentNumber === randomNumber) {
                    randomNumber = this.randomNumber();
                }
            }
        }

        /*if (this.state.previousNumberHolder.length === 99) {
            for (let index_1 = 0; index_1 < this.state.previousNumberHolder.length; index_1++) {
                for (let index_2 = index_1; index_2 < this.state.previousNumberHolder.length; index_2++) {
                    if(this.state.previousNumberHolder[index_1] !== this.state.previousNumberHolder[index_2]){
                        randomNumber = this.state.previousNumberHolder[index_1];
                    }
                    
                }
            }
        }*/

        if (this.state.previousNumberHolder.length === 99) {
            //clearInterval(interval)
            $('.game-over').animate({'top': '0'});
            /*let result = alert("Game Over...! Click Ok to replay.");
            if(result){
                window.close();
            }*/
        }
        
        return randomNumber;
    }

    /*countdownBegins() {
        this.state.randomNumberHolder = 'Loading the game resources...';
        setTimeout(() => {
            this.setState({
                randomNumberHolder: this.state.randomNumberHolder
            });
            this.state.randomNumberHolder = 'Starting the game...';
            setTimeout(() => {
                this.setState({
                    randomNumberHolder: this.state.randomNumberHolder
                });
                this.state.randomNumberHolder = 'Lets play...!';
                setTimeout(() => {
                    this.setState({
                        randomNumberHolder: this.state.randomNumberHolder
                    });
                }, 1500);
            }, 1500);
        }, 500);
    }

    /*generateRandomNumber = () => {

        $("#start-game").remove();  //attr('disabled', 'disabled');

        this.countdownBegins();

        let interval = setInterval(() => {

            let randomNumber = this.randomNumber(interval);
            let msg = new SpeechSynthesisUtterance();
            let voices = window.speechSynthesis.getVoices();

            msg.voice = voices['Microsoft David Desktop - English(United States)'];
            msg.text = randomNumber;
            speechSynthesis.speak(msg);
            
            /*msg.text = this.state.numbersCalling[randomNumber];
            switch (randomNumber) {
                case randomNumber:
                    speechSynthesis.speak(msg);
                    break;
            
                default:
                    break;
            }
        
            this.setState(prevState => ({
                randomNumberHolder: randomNumber,
                previousNumberHolder: [...prevState.previousNumberHolder, randomNumber]
            }));
        
            $(".cmp-housie span#" + randomNumber).addClass("active");

        }, 5000);

    }*/

    generateRandomNumber = () => {

        let randomNumber = this.randomNumber();
        let msg = new SpeechSynthesisUtterance();
        let voices = window.speechSynthesis.getVoices();

        msg.voice = voices['Microsoft David Desktop - English(United States)'];
        msg.text = randomNumber;
        speechSynthesis.speak(msg);

        /*msg.text = this.state.numbersCalling[randomNumber];
        switch (randomNumber) {
            case randomNumber:
                speechSynthesis.speak(msg);
                break;
        
            default:
                break;
        }*/

        this.setState(prevState => ({
            randomNumberHolder: randomNumber,
            previousNumberHolder: [...prevState.previousNumberHolder, randomNumber]
        }));

        $(".cmp-housie span#" + randomNumber).addClass("active");

    }

    renderTableData() {
        return (
            this.state.numbers.map((value, index) => {
                return(
                   <tr key={index}>
                        <td><span id={value}>{value}</span></td>
                        <td><span id={value+10}>{value+10}</span></td>
                        <td><span id={value+20}>{value+20}</span></td>
                        <td><span id={value+30}>{value+30}</span></td>
                        <td><span id={value+40}>{value+40}</span></td>
                        <td><span id={value+50}>{value+50}</span></td>
                        <td><span id={value+60}>{value+60}</span></td>
                        <td><span id={value+70}>{value+70}</span></td>
                        <td><span id={value+80}>{value+80}</span></td>
                        <td><span id={value+90}>{value+90}</span></td>
                   </tr>
                );
            })
        )
    }

    replayGame = () => {
        window.location.reload();
    }

    render() {
        return(
            <div className="cmp-housie">
                <div className="game-over text-center">
                    <div className="go-content">
                        <h1 className="housie-heading mb-3">GAME OVER</h1>
                        <input type="button" className="btn btn-info" value="Replay Game" onClick={this.replayGame}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="jumbotron text-center">
                            <h1 className="random-number">{this.state.randomNumberHolder}</h1>
                        </div>
                    </div>
                </div>
                <div className="row mb-35">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <input type="button" id="start-game" className="btn btn-info" value="Generate Number" onClick={this.generateRandomNumber}></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
						<div className="jumbotron">
							<img className="mb-1" src={Logo} height="125" width="200" />
							<h1 className="housie-heading">Housie</h1>
						</div>
						{
							this.state.previousNumberHolder.length > 1 &&
							<div>
								<h3>-: Previous Number :-</h3>
								<h1>{this.state.previousNumberHolder[this.state.previousNumberHolder.length-2]}</h1>
							</div>
						}
                    </div>
                    <div div className = "col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">
                        <table className="table table-bordered text-center jumbotron">
                            <tbody>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default HousieApp;