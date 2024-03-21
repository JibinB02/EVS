import React , { Component} from 'react';
import ballot from '../ethereum/ballot';
import {Link} from "../routes";
import { Router } from "../routes"; 
import 'semantic-ui-css/semantic.min.css';


import {
    Form,
    Button,
    Segment,
    Message,
    SegmentGroup
} from "semantic-ui-react"
import web3 from '../ethereum/web3';

class Voting extends Component {
    state = {
        electionAddresses1: [],
        ballots: null,
        votecount: 0,
        errorMessage: "",
        candidatename:"",
        candidateparty:"",
        votecount:0,
        creationdate:"",
        expirationdate:"",
        isCandidateNameLoaded:false
      };

    static async getInitialProps({ query }) {
        console.log("query",query);
        const { electionAddresses } = query;
        const firstAddress = electionAddresses.split('/')[1]
        return { electionAddresses: firstAddress };
      }
      
    

    onSubmit = async(event) => {

        
        
        event.preventDefault();
        const electionAddresses1 = this.props.electionAddresses
        console.log("election",electionAddresses1);

        try {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
       
        this.setState({ electionAddresses1 })
        const ballots = await ballot(electionAddresses1)
        await ballots.methods.vote(0).send({
            from:accounts[1],
            gas:"1000000"
        })
    }
    catch(error) {
        this.setState({ errorMessage: error.message });
    }


       
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
            const voters = await ballots.methods.voters(accounts[1]).call();
            console.log("voters",voters)


        }
        catch(error) {
            console.log(error)
        }
    }


    Details = async(event) => {
        event.preventDefault();
        const electionAddresses1 = this.props.electionAddresses;

        try {
            const accounts = await web3.eth.getAccounts();
            console.log("accounts",accounts);
            const ballots = await ballot(electionAddresses1);
            const candidates = await ballots.methods.candidates(0).call();
           this.setState({
            candidatename:candidates.name,
            candidateparty:candidates.party,
            votecount:Number(candidates.voteCount),
            creationdate:Number(candidates.creationDate),
            expirationdate:Number(candidates.expirationDate),
            isCandidateNameLoaded:true

           })

        }
        catch (error) {
            console.log(error)
        }
    }
    

    

  
    render() {
            const {votecount1,candidatename,candidateparty,votecount,creationdate,expirationdate,isCandidateNameLoaded} = this.state;

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

                <Button onClick={this.Details}>Get Candidate Details</Button>


                {isCandidateNameLoaded && (

                <SegmentGroup>
                    <Segment>Candidate Name : {candidatename}</Segment>
                    <Segment>Candidate Party : {candidateparty}</Segment>
                    <Segment>Vote Count : {votecount}</Segment>
                    <Segment>Creation Date : {creationdate}</Segment>
                    <Segment>Expiration Date : {expirationdate}</Segment>
                </SegmentGroup>
                )}
               
                <Link route="/">
                    <Button >
                        Back
                    </Button>
                </Link>

               <Message content={this.state.errorMessage}/>
               
                
            </div>

        )
    }
}

export default Voting