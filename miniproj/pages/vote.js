import React , { Component} from 'react';
import ballot from '../ballot';
import {Link} from "../routes";
import { Router } from "../routes"; 
import 'semantic-ui-css/semantic.min.css';


import {
    Form,
    Button,
    Segment
} from "semantic-ui-react"
import web3 from '../web3';

class Voting extends Component {
    state = {
        electionAddresses1: [],
        ballots: null,
        votecount: 0,
      };

    static async getInitialProps({ query }) {
        console.log("query",query);
        const { electionAddresses } = query;
        const firstAddress = electionAddresses.split('/')[1]
        return { electionAddresses: firstAddress };
      }
      
    

    onSubmit = async(event) => {
        
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        const electionAddresses1 = this.props.electionAddresses
        console.log("election",electionAddresses1);
        this.setState({ electionAddresses1 })
        const ballots = await ballot(electionAddresses1)
        await ballots.methods.vote(0).send({
            from:accounts[2],
            gas:"1000000"
        })


       
    }
     handlevotecount = async (event) => {
        event.preventDefault()
        const electionAddresses1 = this.props.electionAddresses;
        console.log("console", electionAddresses1);
        
        try {
            const accounts = await web3.eth.getAccounts();
            const ballots = await ballot(electionAddresses1);
            const candidates = await ballots.methods.candidates(0).call();
            console.log("Candidates: ", candidates);
        
            // Check if the creationDate is less than the expirationDate
            if (candidates.creationDate < candidates.expirationDate) {
                const votecount = await ballots.methods.getVoteCount(0).call({
                    from: accounts[0]
                })
                const votecount1 = Number(votecount);
                this.setState({votecount1:votecount1})
                console.log("Vote Count: ", Number(votecount));
            } else {
                console.log("Election period has expired.");
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
        
    };


    voters = async(event)=> {
        event.preventDefault();
        const electionAddresses1 = this.props.electionAddresses;

        try {
            const accounts = await web3.eth.getAccounts();
            console.log("accounts",accounts);
            const ballots = await ballot(electionAddresses1);
            const voters = await ballots.methods.voters(accounts[0]).call();
            console.log("voters",voters)


        }
        catch(error) {
            console.log(error)
        }
    }
    

    

  
    render() {
            const {votecount1} = this.state;

        return (
            <div>
                <h1>Voting</h1>
                <Form onSubmit = {this.onSubmit}>
                <Button>
                    Vote
                </Button>
                </Form>
                
                <Button onClick={this.handlevotecount}>Get Vote Count</Button>

                <Button onClick={this.voters}>Voters</Button>
                
                <Segment>
                    Vote Count: {votecount1}
                </Segment>
               
                <Link route="/">
                    <Button >
                        Back
                    </Button>
                </Link>
               
                
            </div>

        )
    }
}

export default Voting