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


class ElectionCreation extends Component {
    state = {
        electionAddresses: [],
        candidateName: '',
        candidateParty: ''
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
                      this.setState({candidateParty: candidateparty})
               this.setState({candidateName: candidateName})
             }
            catch (errors){
                console.log("error",errors);
        
            }

            
        }
   
        // console.log("ballot", ballotAddress.methods)
        // console.log("instance",instance.methods)
        
        // return { electionAddresses };
    //}

    render() {
        const {candidateName,candidateParty,electionAddresses} = this.state;
        console.log(candidateName,candidateParty,electionAddresses)

        return (
            <div>
              <h1>Election Addresses</h1>
              <Form onSubmit={this.onSubmit}>
                <Button primary>Get Candidate Name</Button>
              </Form>
              
                <Segment>
                  Candidate Name: {candidateName}
                  Candidate Party: {candidateParty}
                </Segment>
              
              <Button>
                <Link route="startelec">Back</Link>
              </Button>
              <Button>
              <Link route='vote'>
               Vote
               </Link>
              </Button>
            </div>
          );
        }
      }

export default ElectionCreation



