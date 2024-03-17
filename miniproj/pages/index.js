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
        candidateName: ''
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
                      const candidateName = await ballotAddresses[3].methods.getCandidateName(0).call();
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
        const { electionAddresses } = this.props;
        const {candidateName} = this.state;
        console.log(candidateName)

        return (
            <div>
              <h1>Election Addresses</h1>
              <Form onSubmit={this.onSubmit}>
                <Button primary>Get Candidate Name</Button>
              </Form>
              {candidateName && (
                <Segment>
                  Candidate Name: {candidateName}
                </Segment>
              )}
              <Button>
                <Link route="startelec">Back</Link>
              </Button>
            </div>
          );
        }
      }

export default ElectionCreation



