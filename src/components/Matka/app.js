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
            tableRenderer: JSON.parse(localStorage.getItem('tableRenderer')) || '',
            singlePatties: [],
            doublePatties: [],
            triplePatties: []
        };
        this.dummyNumbersListArray = [];
    }

    generateRandomNumber = () => {
        return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    }

    randomNumbers() {
        while(this.dummyNumbersListArray.length < 100) {
            let randomNumber = this.generateRandomNumber();
            if(this.dummyNumbersListArray.length === 0) {
                let objToPush = {[`${randomNumber}`]: [], total: 0};
                this.setState({
                    numbersList: [objToPush]
                });
                this.dummyNumbersListArray.push(objToPush);
                continue;
            }
            let duplicateNumberFlag = false;
            if(this.dummyNumbersListArray.length > 0) {
                for(let j = 0; j < this.dummyNumbersListArray.length; j++) {
                    if (parseInt(Object.keys(this.dummyNumbersListArray[j])[0]) === randomNumber) {
                        duplicateNumberFlag = true;
                        break;
                    } else {
                        continue;
                    }
                }
            }
            if (!duplicateNumberFlag) {
                let objToPush = {[`${randomNumber}`]: [], total: 0};
                this.setState(prevState => ({
                    numbersList: [...prevState.numbersList, objToPush]
                }));
                this.dummyNumbersListArray.push(objToPush);
            }
        }
        //alert(Object.keys(this.state.numbersList[index])[0]);
        /*
        const randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100; Math.floor(Math.random() * 899) + 100;
        if (!this.state.numbersList.includes(randomNumber)) {
            let objToPush = {[`${randomNumber}`]: [], total: 0};
            this.setState(prevState => ({
                numbersList: [...prevState.numbersList, objToPush]
            }));
        }

        const min = 100;
        const max = 999;
        while (this.state.numbersList.length < 100) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!this.state.numbersList.includes(randomNumber)) {
                let objToPush = {[`${randomNumber}`]: [], total: 0};
                this.setState(prevState => ({
                    numbersList: [...prevState.numbersList, objToPush]
                }));
            }
        }*/
    }

    /*componentDidMount = () => {
        console.log("Numbers List Object :", this.state.numbersList);
    }*/

    generateNumbers = () => {
        this.randomNumbers();
        localStorage.setItem('tableRenderer', JSON.stringify(!this.state.tableRenderer));
        this.setState({
            tableRenderer: JSON.parse(localStorage.getItem('tableRenderer'))
        });
    }

    renderTableData() {
        console.log("Numbers List :", this.state.numbersList);
        console.log("Single Digit Numbers :", this.singlePatties());
        console.log("Double Digit Numbers :", this.doublePatties());
        console.log("Triple Digit Numbers :", this.triplePatties());
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
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+9])[0]}>{Object.keys(this.state.numbersList[index+9])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+9])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+10])[0]}>{Object.keys(this.state.numbersList[index+10])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+10])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+11])[0]}>{Object.keys(this.state.numbersList[index+11])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+11])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+12])[0]}>{Object.keys(this.state.numbersList[index+12])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+12])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+13])[0]}>{Object.keys(this.state.numbersList[index+13])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+13])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+14])[0]}>{Object.keys(this.state.numbersList[index+14])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+14])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+15])[0]}>{Object.keys(this.state.numbersList[index+15])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+15])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+16])[0]}>{Object.keys(this.state.numbersList[index+16])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+16])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+17])[0]}>{Object.keys(this.state.numbersList[index+17])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+17])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+18])[0]}>{Object.keys(this.state.numbersList[index+18])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+18])[0])}>Add</button></td>
                        </tr>
                    )
                }
                if (index === 2) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+18])[0]}>{Object.keys(this.state.numbersList[index+18])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+18])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+19])[0]}>{Object.keys(this.state.numbersList[index+19])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+19])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+20])[0]}>{Object.keys(this.state.numbersList[index+20])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+20])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+21])[0]}>{Object.keys(this.state.numbersList[index+21])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+21])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+22])[0]}>{Object.keys(this.state.numbersList[index+22])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+22])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+23])[0]}>{Object.keys(this.state.numbersList[index+23])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+23])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+24])[0]}>{Object.keys(this.state.numbersList[index+24])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+24])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+25])[0]}>{Object.keys(this.state.numbersList[index+25])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+25])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+26])[0]}>{Object.keys(this.state.numbersList[index+26])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+26])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+27])[0]}>{Object.keys(this.state.numbersList[index+27])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+27])[0])}>Add</button></td>
                        </tr>
                    )
                }
                if (index === 3) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+27])[0]}>{Object.keys(this.state.numbersList[index+27])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+27])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+28])[0]}>{Object.keys(this.state.numbersList[index+28])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+28])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+29])[0]}>{Object.keys(this.state.numbersList[index+29])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+29])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+30])[0]}>{Object.keys(this.state.numbersList[index+30])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+30])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+31])[0]}>{Object.keys(this.state.numbersList[index+31])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+31])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+32])[0]}>{Object.keys(this.state.numbersList[index+32])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+32])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+33])[0]}>{Object.keys(this.state.numbersList[index+33])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+33])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+34])[0]}>{Object.keys(this.state.numbersList[index+34])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+34])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+35])[0]}>{Object.keys(this.state.numbersList[index+35])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+35])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+36])[0]}>{Object.keys(this.state.numbersList[index+36])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+36])[0])}>Add</button></td>                            
                        </tr>
                    )
                }
                if (index === 4) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+36])[0]}>{Object.keys(this.state.numbersList[index+36])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+36])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+37])[0]}>{Object.keys(this.state.numbersList[index+37])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+37])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+38])[0]}>{Object.keys(this.state.numbersList[index+38])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+38])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+39])[0]}>{Object.keys(this.state.numbersList[index+39])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+39])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+40])[0]}>{Object.keys(this.state.numbersList[index+40])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+40])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+41])[0]}>{Object.keys(this.state.numbersList[index+41])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+41])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+42])[0]}>{Object.keys(this.state.numbersList[index+42])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+42])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+43])[0]}>{Object.keys(this.state.numbersList[index+43])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+43])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+44])[0]}>{Object.keys(this.state.numbersList[index+44])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+44])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+45])[0]}>{Object.keys(this.state.numbersList[index+45])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+45])[0])}>Add</button></td>
                        </tr>
                    )
                }
                if (index === 5) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+45])[0]}>{Object.keys(this.state.numbersList[index+45])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+45])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+46])[0]}>{Object.keys(this.state.numbersList[index+46])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+46])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+47])[0]}>{Object.keys(this.state.numbersList[index+47])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+47])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+48])[0]}>{Object.keys(this.state.numbersList[index+48])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+48])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+49])[0]}>{Object.keys(this.state.numbersList[index+49])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+49])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+50])[0]}>{Object.keys(this.state.numbersList[index+50])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+50])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+51])[0]}>{Object.keys(this.state.numbersList[index+51])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+51])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+52])[0]}>{Object.keys(this.state.numbersList[index+52])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+52])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+53])[0]}>{Object.keys(this.state.numbersList[index+53])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+53])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+54])[0]}>{Object.keys(this.state.numbersList[index+54])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+54])[0])}>Add</button></td>
                        </tr>
                    )
                }
                if (index === 6) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+54])[0]}>{Object.keys(this.state.numbersList[index+54])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+54])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+55])[0]}>{Object.keys(this.state.numbersList[index+55])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+55])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+56])[0]}>{Object.keys(this.state.numbersList[index+56])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+56])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+57])[0]}>{Object.keys(this.state.numbersList[index+57])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+57])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+58])[0]}>{Object.keys(this.state.numbersList[index+58])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+58])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+59])[0]}>{Object.keys(this.state.numbersList[index+59])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+59])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+60])[0]}>{Object.keys(this.state.numbersList[index+60])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+60])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+61])[0]}>{Object.keys(this.state.numbersList[index+61])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+61])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+62])[0]}>{Object.keys(this.state.numbersList[index+62])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+62])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+63])[0]}>{Object.keys(this.state.numbersList[index+63])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+63])[0])}>Add</button></td>
                            
                        </tr>
                    )
                }
                if (index === 7) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+63])[0]}>{Object.keys(this.state.numbersList[index+63])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+63])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+64])[0]}>{Object.keys(this.state.numbersList[index+64])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+64])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+65])[0]}>{Object.keys(this.state.numbersList[index+65])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+65])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+66])[0]}>{Object.keys(this.state.numbersList[index+66])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+66])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+67])[0]}>{Object.keys(this.state.numbersList[index+67])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+67])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+68])[0]}>{Object.keys(this.state.numbersList[index+68])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+68])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+69])[0]}>{Object.keys(this.state.numbersList[index+69])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+69])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+70])[0]}>{Object.keys(this.state.numbersList[index+70])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+60])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+71])[0]}>{Object.keys(this.state.numbersList[index+71])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+71])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+72])[0]}>{Object.keys(this.state.numbersList[index+72])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+72])[0])}>Add</button></td>                            
                        </tr>
                    )
                }
                if (index === 8) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+72])[0]}>{Object.keys(this.state.numbersList[index+72])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+72])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+73])[0]}>{Object.keys(this.state.numbersList[index+73])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+73])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+74])[0]}>{Object.keys(this.state.numbersList[index+74])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+74])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+75])[0]}>{Object.keys(this.state.numbersList[index+75])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+75])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+76])[0]}>{Object.keys(this.state.numbersList[index+76])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+76])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+77])[0]}>{Object.keys(this.state.numbersList[index+77])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+77])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+78])[0]}>{Object.keys(this.state.numbersList[index+78])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+78])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+79])[0]}>{Object.keys(this.state.numbersList[index+79])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+79])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+80])[0]}>{Object.keys(this.state.numbersList[index+80])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+80])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+81])[0]}>{Object.keys(this.state.numbersList[index+81])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+81])[0])}>Add</button></td>                            
                        </tr>
                    )
                }
                if (index === 9) {
                    return (
                        <tr key={index}>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+81])[0]}>{Object.keys(this.state.numbersList[index+81])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+81])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+82])[0]}>{Object.keys(this.state.numbersList[index+82])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+82])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+83])[0]}>{Object.keys(this.state.numbersList[index+83])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+83])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+84])[0]}>{Object.keys(this.state.numbersList[index+84])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+84])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+85])[0]}>{Object.keys(this.state.numbersList[index+85])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+85])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+86])[0]}>{Object.keys(this.state.numbersList[index+86])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+86])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+87])[0]}>{Object.keys(this.state.numbersList[index+87])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+87])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+88])[0]}>{Object.keys(this.state.numbersList[index+88])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+88])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+89])[0]}>{Object.keys(this.state.numbersList[index+89])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+89])[0])}>Add</button></td>
                            <td><span className='text-left' id={Object.keys(this.state.numbersList[index+90])[0]}>{Object.keys(this.state.numbersList[index+90])[0]}</span><button className='btn btn-success ml-2' onClick={() => this.toggleNumberDetailsContainer(Object.keys(this.state.numbersList[index+90])[0])}>Add</button></td>
                        </tr>
                    )
                }
            })
        )
    }

    renderSinglePattiesData = () => {
        let singlePattiesArray = Array.from(this.singlePatties());
        return (
            singlePattiesArray.map(spNumber => {
                return (
                    this.state.numbersList.map(number => {
                        if (parseInt(Object.keys(number)[0]) === spNumber) {
                            return (                                    
                                <div className='single-patties-data-container-content cell-design mr-2 ml-2'><span className='number mr-1'>{Object.keys(number)[0]}</span> - <span className='total ml-1'>{Object.values(number)[1]} Rs</span></div>
                            )
                        }
                    })
                )
            })
        )
    }

    renderDoublePattiesData = () => {
        let doublePattiesArray = Array.from(this.doublePatties());
        return (
            doublePattiesArray.map(dpNumber => {
                return (
                    this.state.numbersList.map(number => {
                        if (parseInt(Object.keys(number)[0]) === dpNumber) {
                            return (
                                <div className='double-patties-data-container-content cell-design mr-2 ml-2'><span className='number mr-1'>{Object.keys(number)[0]}</span> - <span className='total ml-1'>{Object.values(number)[1]} Rs</span></div>
                            )
                        }
                    })
                )
            })
        )
    }

    renderTriplePattiesData = () => {
        let triplePattiesArray = Array.from(this.triplePatties());
        if(triplePattiesArray.length === 0) {
            return <h5>No tripple patties today...!</h5>
        } else {
            return (
                triplePattiesArray.map(tpNumber => {
                    return (
                        this.state.numbersList.map(number => {
                            if (parseInt(Object.keys(number)[0]) === tpNumber) {
                                return (
                                    <div className='triple-patties-data-container-content cell-design mr-2 ml-2'><span className='number mr-1'>{Object.keys(number)[0]}</span> - <span className='total ml-1'>{Object.values(number)[1]} Rs</span></div>
                                )
                            }
                        })
                    )
                })
            )
        }
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

    placeBet = (selectedNumber, event) => {
        let betAmount = $("#bet-amount").val();
        let numbersOnly = /^\d+$/;
        if (betAmount.match(numbersOnly) && betAmount !== "") {
            this.state.numbersList.map((number, index) => {
                if(Object.keys(number)[0] === selectedNumber) {
                    var index = index;
                    var numbersList = [...this.state.numbersList];
                    numbersList[index][Object.keys(number)[0]].push(betAmount);
                    numbersList[index][Object.keys(number)[1]] = parseInt(numbersList[index][Object.keys(number)[1]]) + parseInt(betAmount);
                    this.setState({numbersList});
                    localStorage.setItem('numbersList', JSON.stringify(numbersList));
                }
            });
            $("#bet-amount").val("");
        } else {
            if(betAmount === "") {
                alert("Enter bet amount...!");
            } else {
                alert("Enter number only...!");
            }
        }
    }

    placeBetOnKeyPress = (selectedNumber, event) => {
        if(event.which === 13) {
            this.placeBet(selectedNumber);
        }
    }

    isAllDigitsNotRepeated = (number) => {
        const numString = number;
        /*for (let i = 1; i < numString.length; i++) {
            if (numString[0] === numString[i]) {
                return false;
            }
        }
        return true;*/
        const uniqueDigits = new Set();
        for (const digit of numString) {
            if (uniqueDigits.has(digit)) {
                return false;
            }
            uniqueDigits.add(digit);
        }
        return true;
    }

    singlePatties = () => {
        this.state.numbersList.map((number) => {
            let numberString = (Object.keys(number)[0]).toString();
            if (this.isAllDigitsNotRepeated(numberString)) {
                this.state.singlePatties.push(parseInt(numberString));
            }
            /*const hasRepeatingDigitsPattern = new RegExp(/(\d)\1+/);
            let nonRepeatingNumber;
            if(!hasRepeatingDigitsPattern.test(numberString)) {
                nonRepeatingNumber = numberString;
                this.state.singlePatties.push(parseInt(nonRepeatingNumber));
                this.setState(prevState => ({
                    singlePatties: [...prevState.singlePatties, parseInt(nonRepeatingNumber)]
                }));
            }*/
            
        });
        return (new Set(this.state.singlePatties));
    }

    hasExactlyTwoRepeatingDigits = (number) => {
        const numString = number;
        /*const digitCounts = {};
        let hasTwoRepeats = false;
      
        for (const digit of numString) {
          if (!digitCounts[digit]) {
            digitCounts[digit] = 0;
          }
          digitCounts[digit]++;
      
          if (digitCounts[digit] === 2) {
            hasTwoRepeats = true;
            break;
          }
        }
        return hasTwoRepeats;*/

        const digitCounts = {};
        let hasTwoRepeats = false;
        for (const digit of numString) {
            if (!digitCounts[digit]) {
                digitCounts[digit] = 0;
            }
            digitCounts[digit]++;
            if (digitCounts[digit] === 2) {
                hasTwoRepeats = true;
                break;
            }
        }
        let allSameDigits = true;
        for (let i = 1; i < numString.length; i++) {
            if (numString[0] !== numString[i]) {
                allSameDigits = false;
                break;
            }
        }
        return hasTwoRepeats && !allSameDigits;
    }

    doublePatties = () => {
        const repeatingDigitCounts = {};
        this.state.numbersList.map((number) => {
            const numberString = (Object.keys(number)[0]).toString();
            if (this.hasExactlyTwoRepeatingDigits(numberString)) {
                this.state.doublePatties.push(parseInt(numberString));
            }
            /*for (const digit of numberString) {
                repeatingDigitCounts[digit] = (repeatingDigitCounts[digit] || 0) + 1;
            }
            console.log(Object.values(repeatingDigitCounts));
            if (Object.values(repeatingDigitCounts).some((count) => count === 2)) {
                this.state.doublePatties.push(parseInt(numberString));
            }*/
        });
        return (new Set(this.state.doublePatties));
    }

    isAllDigitsRepeated = (number) => {
        const numString = number;
        for (let i = 1; i < numString.length; i++) {
            if (numString[0] !== numString[i]) {
                return false;
            }
        }
        return true;
    }

    triplePatties = () => {
        this.state.numbersList.map((number) => {
            let numberString = (Object.keys(number)[0]).toString();
            if (this.isAllDigitsRepeated(numberString)) {
                this.state.triplePatties.push(parseInt(numberString));
            }
        });
        return (new Set(this.state.triplePatties));
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
                                <input id="bet-amount" className='form-control mr-3' type='text' placeholder='Enter amount to bet...' onKeyPress={(event) => this.placeBetOnKeyPress(this.state.selectedNumber, event)} pattern='[0-9]*' />
                                <button className='btn btn-info text-uppercase' onClick={() => this.placeBet(this.state.selectedNumber)}>Place Bet</button>
                            </div>
                            <hr/>
                            <div className='bet-amount-details'>
                                <div className='bet-amount-container table-responsive'>
                                    <table className='table table-hover'>
                                        <thead className='bg-dark text-light'>
                                            <tr>
                                                <th>Sr.No.</th>
                                                <th className='text-right'>Amount</th>
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
                                                                        <td className='text-right'>{number}</td>
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
                                {
                                    this.state.numbersList.map((numbers, index) => {
                                        if (Object.keys(numbers)[0] === this.state.selectedNumber) {
                                            var index = index;
                                            var numbersList = [...this.state.numbersList];
                                            if(numbersList[index][Object.keys(numbers)[0]].length > 0) {
                                                return (
                                                    <table className='table'>
                                                        <tbody className='bg-dark text-light'>
                                                            <tr>
                                                                <td className='text-left'><strong>Total : </strong></td>
                                                                <td className='text-right'><strong>{numbersList[index][Object.keys(numbers)[1]]}</strong></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                )
                                            }
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                }
                {
                    !this.state.tableRenderer && <div className='number-generator-container position-fixed h-100 w-100'>
                        <button className='generate-numbers btn btn-info' onClick={() => this.generateNumbers()}>Generate Numbers For Today</button>
                    </div>
                }
                { this.state.tableRenderer && 
                    <React.Fragment>
                        <div className="row number-container">
                            <div div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className='number-header'>
                                    <h1 className='display-4 float-left'>Numbering Open/Close App :</h1>
                                    <button className='btn btn-danger float-right' onClick={this.exitFromApplication}>EXIT</button>
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
                            <div div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className='container-fluid patties-data-container'>
                                    <div className='row patties-data-container-title mb-3'><h3>Single Patties :</h3></div>
                                    <div className="row  overflow-auto">
                                        {this.renderSinglePattiesData()}
                                    </div>
                                    <div className='row patties-data-container-title mt-3 mb-3'><h3>Double Patties :</h3></div>
                                    <div className="row  overflow-auto">
                                        {this.renderDoublePattiesData()}
                                    </div>
                                    <div className='row patties-data-container-title mt-3 mb-3'><h3>Triple Patties :</h3></div>
                                    <div className="row  overflow-auto">
                                        {this.renderTriplePattiesData()}
                                    </div>
                                </div>
                            </div>
                            {/*<div div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <table className="table table-bordered text-center jumbotron">
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </div>*/}
                        </div> 
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default MatkaApp;