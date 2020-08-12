import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Input from '../UI/Input/Input'
import './fullmovie.css'

class Fullmovie extends Component {
    state = {
        loadedmovie: null,
        orders: {
            name: {
                elementtype: 'input',
                elementconfig: {
                    placeholder: 'Your Name',
                    type: 'input'
                },
                value: '',
                validation: {
                    isrequired: true,
                },
                valid: true
            },
            email: {
                elementtype: 'input',
                elementconfig: {
                    placeholder: 'Your Mail',
                    type: 'input'
                },
                value: '',
                validation: {
                    isrequired: true,
                    isEmail: true
                },
                valid: true
            },
            seats: {
                elementtype: 'select',
                elementconfig: {
                    options: [{ value: 1, displayvalue: 1 },
                    { value: 2, displayvalue: 2 },
                    { value: 3, displayvalue: 3 },
                    { value: 4, displayvalue: 4 },
                    { value: 5, displayvalue: 5 },
                    { value: 6, displayvalue: 6 },]
                },
                value: 1,
                validation: {
                    isavailable: true
                },
                valid: true
            },
            Attendees_Name_1: {
                elementtype: 'input',
                elementconfig: {
                    placeholder: 'Attendees Name',
                    type: 'input'
                },
                value: '',
                validation: {
                    isrequired: true,
                },
                valid: true
            },
        },
        forminvalid: false,
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        if (rules.isrequired) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isavailable) {
            console.log(isValid, value, this.state.loadedmovie.seats)
            if (value >= this.state.loadedmovie.seats) {
                isValid = false
            }
        }
        return isValid;
    }
    inputchangeHandler = (event, inputidentifier) => {
        console.log(event.target.value)
        const updatedformorders = {
            ...this.state.orders
        }
        const updatedformelements = {
            ...updatedformorders[inputidentifier]
        }
        updatedformelements.value = event.target.value
        updatedformelements.valid = this.checkValidity(updatedformelements.value, updatedformelements.validation)
        console.log('updatedformelements.valid :', updatedformelements.valid)
        updatedformorders[inputidentifier] = updatedformelements
        let formvalidation = true
        for (let inputidentifier in updatedformorders) {
            formvalidation = updatedformorders[inputidentifier].valid && formvalidation
        }
        this.setState({ orders: updatedformorders, forminvalid: formvalidation })
    }
    orderplacedHandler = () => {
        const formdata = {}
        for (let formdataidentifier in this.state.orders) {
            formdata[formdataidentifier] = this.state.orders[formdataidentifier].value
        }
        console.log('formdata =>', formdata)
        this.setState({ toastshow: true })
        setTimeout(() => {
            this.setState({ toastshow: false })
            this.props.history.push('/')
        }, 1000)
    }
    ordercancelHandler = () => {
        this.props.history.push('/')
    }
    componentDidMount() {
        // console.log(this.props);
        if (this.props.match.params.id) {
            if (!this.props.loadedPost || (this.props.loadedPost && this.props.loadedPost.id !== +this.props.match.params.id)) {
                axios.get(`https://ticket-booking-cc008.firebaseio.com/movies/${this.props.match.params.id}.json`)
                    .then(response => {
                        console.log(response)
                        this.setState({ loadedmovie: response.data })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
    render() {
        let formelementarray = [];
        for (let key in this.state.orders) {
            formelementarray.push({
                id: key,
                config: this.state.orders[key]
            })
        }

        let fullmovie = null
        if (this.state.loadedmovie) {
            let form = <div>
                <form>
                    {formelementarray.map(formelement => (
                        <Input key={formelement.id}
                            shouldvalidate={formelement.config.validation}
                            validity={formelement.config.valid}
                            changd={(event) => this.inputchangeHandler(event, formelement.id)}
                            label={formelement.id}
                            elementtype={formelement.config.elementtype}
                            elementconfig={formelement.config.elementconfig}
                            value={formelement.config.value}
                            availableseats={this.state.loadedmovie.seats} />
                    ))}
                </form>
                <button disabled={!this.state.forminvalid} onClick={this.orderplacedHandler}>Book</button>
                <button onClick={this.ordercancelHandler}>Cancel</button>
            </div>
            fullmovie = (
                <div className="onemovie">
                    <div className="onemovie_parallax" style={{ backgroundImage: `url(${this.state.loadedmovie.pic})` }}></div>
                    <div className="onemovie_help">
                        <div className="onemovie_details">
                            <h1>{this.state.loadedmovie.name}</h1>
                            <p>{this.state.loadedmovie.genre1} {this.state.loadedmovie.genre2}</p>
                            <h3>Available Seats: {this.state.loadedmovie.seats}</h3>
                            <div className="onemovie_form">
                                {form}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>{fullmovie}</div>
        )
    }
}

export default withRouter(Fullmovie)