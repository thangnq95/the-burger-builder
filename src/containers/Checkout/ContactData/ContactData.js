import React, { Component } from 'react';

import classes from './ContactData.css';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            strert: '',
            postalCode: ''
        },
        loading: false,

    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Thang Nguyen",
                address: {
                    street: 'Teststreet 1',
                    zipCode: '700000',
                    country: 'Vietnam'
                },
                email: 'thangnq95@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

        console.log(this.props.ingredients);
        axios.post('/orders.json', order).
            then(response => {
                console.log(response);
                this.setState({ loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });

    }

    render() {
        let form  = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street" placeholder="Your street" />
                <input className={classes.Input} type="text" name="postalCode" placeholder="postalCode" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;