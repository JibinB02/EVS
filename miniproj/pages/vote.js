import React , { Component} from 'react';
import ElectionCreation  from "./index";
import {Link} from "../routes";
import { useRouter } from 'next/router';
import {
    Form,
    Button
} from "semantic-ui-react"

class Voting extends Component {
    

    onSubmit = async(event) => {
        
        event.preventDefault();
        //console.log("ballots",ballotAddresses)
        
    }
    render() {


        return (
            <div>
                <h1>Voting</h1>
                <Form onSubmit = {this.onSubmit}>
                <Button>
                    Vote
                </Button>
                </Form>
            </div>

        )
    }
}

export default Voting