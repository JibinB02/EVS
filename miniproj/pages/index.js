import React , {Component} from 'react'
import {
  GridColumn,
  FormInput,
  Button,
  Divider,
  Form,
  Grid,
  Segment,
} from 'semantic-ui-react'
import instance from "../election_creation";
import ballot from "../ballot.js";
import {Link} from "../routes";
import web3 from "../web3";
import { Router } from "../routes"; 


class ElectionCreation extends Component {
    state = {
        electionAddresses: [],
        candidateName: '',
        candidateParty: '',
        isCandidateNameLoaded: false
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
                      const candidateName = await ballotAddresses[0].methods.getCandidateName(0).call();
                      const candidateparty = await ballotAddresses[0].methods.getCandidateParty(0).call();
                      const candidatess = await ballotAddresses[0].methods.candidates(0).call();
                      //console.log("Candidatess",candidatess.expirationDate)
                      this.setState({
                        candidateName:candidateName,
                        candidateParty:candidateparty,
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

   
        // console.log("ballot", ballotAddress.methods)
        // console.log("instance",instance.methods)
        
        // return { electionAddresses };
    //}

    render() {
        const {candidateName,candidateParty,electionAddresses,isCandidateNameLoaded} = this.state;
        console.log(candidateName,candidateParty)

        return (
            <div>
              <h1>Election Addresses</h1>
              <Form onSubmit={this.onSubmit}>
                <Button primary>Get Candidate Name</Button>
              </Form>
              
              {isCandidateNameLoaded && (
          <Segment>
            Candidate Name: {candidateName}
            Candidate Party: {candidateParty}
          </Segment>
        )}
              
              <Button>
                <Link route="startelec">Back</Link>
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



