import React , {Component} from 'react'
import {
  GridColumn,
  FormInput,
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'
import instance from "../election_creation";
import ballot from "../ballot.js";
import {Link} from "../routes";
import web3 from "../web3";
import { Router } from "../routes"; 
import 'semantic-ui-css/semantic.min.css';



class ElectionCreation extends Component {
    state = {
        electionAddresses: [],
        candidateName: '',
        candidateParty: '',
        isCandidateNameLoaded: false,
        votingDistrict: ''
      };
  
    // static async getInitialProps() {
        
        //console.log("accountsss",accounts)
        //const electionAddresses = await instance.methods.getsDeployedBallots().call();
        
         //const manager = await ballotAddress.methods.manager().call();
   
        onSubmit = async(event)=> 
        {
            event.preventDefault();
            
             const electionAddresses= await instance.methods.getsDeployedBallots().call();
            console.log("electionAddresses",electionAddresses)
            this.setState({electionAddresses: electionAddresses});
            const ballotAddresses = [];
            for (const address of electionAddresses) {
                const ballotAddress = await ballot(address);
                ballotAddresses.push(ballotAddress);
              }
            
            console.log("ballotss",ballotAddresses)
            
            try {
                // const candidates = await ballotAddress.methods.candidates(0).call();
                // console.log("candidates", candidates);
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                console.log("accounts",accounts);
                      const candidateName = await ballotAddresses[1].methods.getCandidateName(0).call();
                      const candidateparty = await ballotAddresses[1].methods.getCandidateParty(0).call();
                      const votingDistrict = await ballotAddresses[1].methods.votingDistrict().call();
                      this.setState({
                        candidateName:candidateName,
                        candidateParty:candidateparty,
                        votingDistrict:votingDistrict,
                        isCandidateNameLoaded: true, // Set the flag to true when the name is loaded
                      });
             }
            catch (errors){
                console.log("error",errors);
        
            }

            
            
        }

        handleVoteClick = () => {
          const {electionAddresses} = this.state;
          Router.pushRoute('vote', { electionAddresses });
        };

    render() {
        const {candidateName,candidateParty,votingDistrict,electionAddresses,isCandidateNameLoaded} = this.state;
        console.log(candidateName,candidateParty)

        return (
            <div>
              <Header as="h1">Election Addresses</Header>
              <Form class = "ui inverted form"onSubmit={this.onSubmit}>
              <Button class="ui primary button">Get candidate name</Button>

              </Form>
              
              {isCandidateNameLoaded && (
          <Segment>
            Candidate Name: {candidateName}
            Candidate Party: {candidateParty}
            votingDistrict : {votingDistrict}
          </Segment>
        )}
              
              <Button>
                <Link route="startelec">Start Election</Link>
              </Button>
              {isCandidateNameLoaded && (
          <Button onClick={this.handleVoteClick}>
            Vote
          </Button>
        )}
            </div>
          );
        }
      }

export default ElectionCreation



