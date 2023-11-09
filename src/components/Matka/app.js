import React, { Component } from 'react';
import "./assets/style.css";
import $ from 'jquery';

class MatkaApp extends Component {
    constructor(){
        super();
        this.state = {
            numbersList: JSON.parse(localStorage.getItem('numbersList')) || [],
            previousNumberHolder: [],
            selectedNumber: 0,
            numberDetailsContainerToggler: false,
            tableRenderer: JSON.parse(localStorage.getItem('tableRenderer')) || ''
        };
    }
    randomNumbers() {    
        for(let i = 0; i <= 99; i++) {
            let randomNumber = Math.floor(Math.random() * 899) + 100;
            for(let j = 0; j <= this.state.numbersList.length; j++) {
                if (this.state.numbersList[j] !== randomNumber) {
                    let objToPush = {[`${randomNumber}`]: []};
                    this.setState(prevState => ({
                        numbersList: [...prevState.numbersList, objToPush]
                    }));
                } else {
                    continue;
                }
            }
        }
    }

    componentDidMount = () => {
        console.log("Numbers List Object :", this.state.numbersList);
    }

    generateNumbers = () => {
        this.randomNumbers();
        localStorage.setItem('tableRenderer', JSON.stringify(!this.state.tableRenderer));
        this.setState({
            tableRenderer: JSON.parse(localStorage.getItem('tableRenderer'))
        });
    }

    renderTableData() {
        return (
            this.state.numbersList.map((value, index) => {
                localStorage.setItem('numbersList', JSON.stringify(this.state.numbersList));
                if (index == 0) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index])[0]}>{Object.keys(this.state.numbersList[index])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+1])[0]}>{Object.keys(this.state.numbersList[index+1])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+1])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+2])[0]}>{Object.keys(this.state.numbersList[index+2])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+2])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+3])[0]}>{Object.keys(this.state.numbersList[index+3])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+3])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+4])[0]}>{Object.keys(this.state.numbersList[index+4])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+4])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+5])[0]}>{Object.keys(this.state.numbersList[index+5])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+5])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+6])[0]}>{Object.keys(this.state.numbersList[index+6])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+6])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+7])[0]}>{Object.keys(this.state.numbersList[index+7])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+7])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+8])[0]}>{Object.keys(this.state.numbersList[index+8])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+8])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+9])[0]}>{Object.keys(this.state.numbersList[index+9])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+9])[0])}>Add</button></td>
                        </tr>
                    )
                }
                if (index === 1) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+10])[0]}>{Object.keys(this.state.numbersList[index+10])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+10])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+11])[0]}>{Object.keys(this.state.numbersList[index+11])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+11])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+12])[0]}>{Object.keys(this.state.numbersList[index+12])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+12])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+13])[0]}>{Object.keys(this.state.numbersList[index+13])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+13])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+14])[0]}>{Object.keys(this.state.numbersList[index+14])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+14])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+15])[0]}>{Object.keys(this.state.numbersList[index+15])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+15])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+16])[0]}>{Object.keys(this.state.numbersList[index+16])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+16])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+17])[0]}>{Object.keys(this.state.numbersList[index+17])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+17])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+18])[0]}>{Object.keys(this.state.numbersList[index+18])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+18])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+19])[0]}>{Object.keys(this.state.numbersList[index+19])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+19])[0])}>Add</button></td>
                        </tr>
                    )
                }
                if (index === 2) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+20])[0]}>{Object.keys(this.state.numbersList[index+20])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+20])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+21])[0]}>{Object.keys(this.state.numbersList[index+21])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+21])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+22])[0]}>{Object.keys(this.state.numbersList[index+22])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+22])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+23])[0]}>{Object.keys(this.state.numbersList[index+23])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+23])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+24])[0]}>{Object.keys(this.state.numbersList[index+24])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+24])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+25])[0]}>{Object.keys(this.state.numbersList[index+25])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+25])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+26])[0]}>{Object.keys(this.state.numbersList[index+26])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+26])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+27])[0]}>{Object.keys(this.state.numbersList[index+27])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+27])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+28])[0]}>{Object.keys(this.state.numbersList[index+28])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+28])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+29])[0]}>{Object.keys(this.state.numbersList[index+29])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+29])[0])}>Add</button></td>
                        </tr>
                    )
                }
                if (index === 3) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+30])[0]}>{Object.keys(this.state.numbersList[index+30])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+30])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+31])[0]}>{Object.keys(this.state.numbersList[index+31])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+31])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+32])[0]}>{Object.keys(this.state.numbersList[index+32])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+32])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+33])[0]}>{Object.keys(this.state.numbersList[index+33])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+33])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+34])[0]}>{Object.keys(this.state.numbersList[index+34])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+34])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+35])[0]}>{Object.keys(this.state.numbersList[index+35])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+35])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+36])[0]}>{Object.keys(this.state.numbersList[index+36])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+36])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+37])[0]}>{Object.keys(this.state.numbersList[index+37])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+37])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+38])[0]}>{Object.keys(this.state.numbersList[index+38])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+38])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+39])[0]}>{Object.keys(this.state.numbersList[index+39])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+39])[0])}>Add</button></td>
                        </tr>
                    )
                }
                if (index === 4) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+40])[0]}>{Object.keys(this.state.numbersList[index+40])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+40])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+41])[0]}>{Object.keys(this.state.numbersList[index+41])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+41])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+42])[0]}>{Object.keys(this.state.numbersList[index+42])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+42])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+43])[0]}>{Object.keys(this.state.numbersList[index+43])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+43])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+44])[0]}>{Object.keys(this.state.numbersList[index+44])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+44])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+45])[0]}>{Object.keys(this.state.numbersList[index+45])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+45])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+46])[0]}>{Object.keys(this.state.numbersList[index+46])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+46])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+47])[0]}>{Object.keys(this.state.numbersList[index+47])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+47])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+48])[0]}>{Object.keys(this.state.numbersList[index+48])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+48])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+49])[0]}>{Object.keys(this.state.numbersList[index+49])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+49])[0])}>Add</button></td>
                        </tr>
                    )
                }
                if (index === 5) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+50])[0]}>{Object.keys(this.state.numbersList[index+50])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+50])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+51])[0]}>{Object.keys(this.state.numbersList[index+51])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+51])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+52])[0]}>{Object.keys(this.state.numbersList[index+52])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+52])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+53])[0]}>{Object.keys(this.state.numbersList[index+53])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+53])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+54])[0]}>{Object.keys(this.state.numbersList[index+54])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+54])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+55])[0]}>{Object.keys(this.state.numbersList[index+55])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+55])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+56])[0]}>{Object.keys(this.state.numbersList[index+56])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+56])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+57])[0]}>{Object.keys(this.state.numbersList[index+57])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+57])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+58])[0]}>{Object.keys(this.state.numbersList[index+58])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+58])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+59])[0]}>{Object.keys(this.state.numbersList[index+59])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+59])[0])}>Add</button></td>
                        </tr>
                    )
                }
                if (index === 6) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+60])[0]}>{Object.keys(this.state.numbersList[index+60])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+60])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+61])[0]}>{Object.keys(this.state.numbersList[index+61])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+61])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+62])[0]}>{Object.keys(this.state.numbersList[index+62])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+62])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+63])[0]}>{Object.keys(this.state.numbersList[index+63])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+63])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+64])[0]}>{Object.keys(this.state.numbersList[index+64])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+64])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+65])[0]}>{Object.keys(this.state.numbersList[index+65])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+65])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+66])[0]}>{Object.keys(this.state.numbersList[index+66])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+66])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+67])[0]}>{Object.keys(this.state.numbersList[index+67])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+67])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+68])[0]}>{Object.keys(this.state.numbersList[index+68])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+68])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+69])[0]}>{Object.keys(this.state.numbersList[index+69])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+69])[0])}>Add</button></td>
                        </tr>
                    )
                }
                if (index === 7) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+70])[0]}>{Object.keys(this.state.numbersList[index+70])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+70])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+71])[0]}>{Object.keys(this.state.numbersList[index+71])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+71])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+72])[0]}>{Object.keys(this.state.numbersList[index+72])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+72])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+73])[0]}>{Object.keys(this.state.numbersList[index+73])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+73])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+74])[0]}>{Object.keys(this.state.numbersList[index+74])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+74])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+75])[0]}>{Object.keys(this.state.numbersList[index+75])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+75])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+76])[0]}>{Object.keys(this.state.numbersList[index+76])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+76])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+77])[0]}>{Object.keys(this.state.numbersList[index+77])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+77])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+78])[0]}>{Object.keys(this.state.numbersList[index+78])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+78])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+79])[0]}>{Object.keys(this.state.numbersList[index+79])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+79])[0])}>Add</button></td>
                        </tr>
                    )
                }
                if (index === 8) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+80])[0]}>{Object.keys(this.state.numbersList[index+80])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+80])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+81])[0]}>{Object.keys(this.state.numbersList[index+81])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+81])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+82])[0]}>{Object.keys(this.state.numbersList[index+82])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+82])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+83])[0]}>{Object.keys(this.state.numbersList[index+83])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+83])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+84])[0]}>{Object.keys(this.state.numbersList[index+84])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+84])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+85])[0]}>{Object.keys(this.state.numbersList[index+85])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+85])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+86])[0]}>{Object.keys(this.state.numbersList[index+86])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+86])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+87])[0]}>{Object.keys(this.state.numbersList[index+87])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+87])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+88])[0]}>{Object.keys(this.state.numbersList[index+88])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+88])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+89])[0]}>{Object.keys(this.state.numbersList[index+89])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+89])[0])}>Add</button></td>
                        </tr>
                    )
                }
                /*if (index === 9) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+90])[0]}>{Object.keys(this.state.numbersList[index+90])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+90])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+91])[0]}>{Object.keys(this.state.numbersList[index+91])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+91])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+92])[0]}>{Object.keys(this.state.numbersList[index+92])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+92])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+93])[0]}>{Object.keys(this.state.numbersList[index+93])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+93])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+94])[0]}>{Object.keys(this.state.numbersList[index+94])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+94])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+95])[0]}>{Object.keys(this.state.numbersList[index+95])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+95])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+96])[0]}>{Object.keys(this.state.numbersList[index+96])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+96])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+97])[0]}>{Object.keys(this.state.numbersList[index+97])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+97])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+98])[0]}>{Object.keys(this.state.numbersList[index+98])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+98])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+99])[0]}>{Object.keys(this.state.numbersList[index+99])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+99])[0])}>Add</button></td>
                        </tr>
                    )
                }*/
            })
        )
    }

    toggleNumberDetailsContainer = (number) => {
        if(number !== 0) {
            this.setState({
                selectedNumber: number,
                numberDetailsContainerToggler: true
            });
        } else {
            this.setState({
                numberDetailsContainerToggler: false
            });
        }
        
    }

    placeBet = (selectedNumber) => {
        let betAmount = $("#bet-amount").val();
        this.state.numbersList.map((number, index) => {
            if(Object.keys(number)[0] === selectedNumber) {
                var index = index;
                var numbersList = [...this.state.numbersList];
                numbersList[index][Object.keys(number)[0]].push(betAmount);
                this.setState({numbersList});
                localStorage.setItem('numbersList', JSON.stringify(numbersList));
            }
        });
        $("#bet-amount").val("");
    }

    exitFromApplication = () => {
        localStorage.removeItem('tableRenderer');
        localStorage.removeItem('numbersList');
        window.location.reload();
    }

    render() {
        return(
            <div className="cmp-matka">
                {this.state.numberDetailsContainerToggler && 
                    <div className='number-details-container position-fixed h-100 w-100 bg-light'>
                        <button className='icon-close position-absolute' onClick={() => this.toggleNumberDetailsContainer(0)}>X</button>
                        <div className='number-details-wrapper position-absolute h-50 w-50 m-auto'>
                            <h1 className='display-4'>Bet Amount For {this.state.selectedNumber} :</h1>
                            <hr/>
                            <div className='input-group'>
                                {/*<input className='form-control mr-3' type='text' placeholder='Enter person name...'/>*/}
                                <input id="bet-amount" className='form-control mr-3' type='text' placeholder='Enter amount to bet...'/>
                                <button className='btn btn-info text-uppercase' onClick={() => this.placeBet(this.state.selectedNumber)}>Place Bet</button>
                            </div>
                            <hr/>
                            <div className='bet-amount-details'>
                                <div className='table-responsive'>
                                    <table className='table table-hover'>
                                        <thead>
                                            <tr>
                                                <th>Sr.No.</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.numbersList.map((numbers, index) => {
                                                    if (Object.keys(numbers)[0] === this.state.selectedNumber) {
                                                        var index = index;
                                                        var numbersList = [...this.state.numbersList];
                                                        return(
                                                            numbersList[index][Object.keys(numbers)[0]].length > 0 && numbersList[index][Object.keys(numbers)[0]].map((number, index) => {
                                                                return (
                                                                    <tr key={index+1}>
                                                                        <td>{index+1}</td>
                                                                        <td>{number}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        )
                                                    }
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    !this.state.tableRenderer && <div className='number-generator-container position-fixed h-100 w-100'>
                        <button className='btn btn-info' onClick={() => this.generateNumbers()}>Generate Numbers For Today</button>
                    </div>
                }
                { this.state.tableRenderer && 
                    <React.Fragment>
                        <div className="row number-container">
                            <div div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className='number-header'>
                                    <h1 className='display-4 float-left'>Numbering Open/Close App :</h1>
                                    <button className='btn btn-danger float-right' onClick={this.exitFromApplication}>Exit</button>
                                    <div className='clear'></div>
                                </div>
                                <hr/>
                                <table className="table table-bordered text-center jumbotron">
                                    <tbody>
                                        {this.renderTableData()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='row'>
                            <div div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6">

                            </div>
                            <div div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <table className="table table-bordered text-center jumbotron">
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div> 
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default MatkaApp;