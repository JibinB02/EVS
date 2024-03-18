import React, { Component } from 'react';
import ballot from "../ballot";
import {Form,Button} from "semantic-ui-react";
import Voting from './vote';
import web3 from '../web3';
import ElectionCreation from './index';
import instance from '../election_creation';
import {Link} from "../routes";
import { Router } from "../routes"; 



class VoteCount extends Component {
    static async getInitialProps({query}) {
        const {electionAddresses1} = query;
        console.log("query",query)
        return {electionAddresses1}
    }

    getVotecount = async()=> {
        const accounts = new web3.eth.getAccounts()
        const ballotaddress = this.props.electionAddresses1
        const votecount = await ballot(ballotaddress)
        console.log(votecount)
    }



    render()  {
        return (
            <div>
                <h1>Vote Count</h1>
                <Link>
                    <Button onClick = {this.getVotecount}>
                        Vote count
                    </Button>
                </Link>
            </div>
        )
    }

}
export default VoteCount