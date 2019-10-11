import React, { Component } from 'react';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            strert: '',
            postalCode: ''
        }
    }
    render(){
        return(
            <div>
                <h4>Enter your contact data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="email" name="email" placeholder="Your email" />
                    <input type="text" name="street" placeholder="Your street" />
                    <input type="text" name="postalCode" placeholder="postalCode" />
                </form>
            </div>
        );
    }
}

export default ContactData;