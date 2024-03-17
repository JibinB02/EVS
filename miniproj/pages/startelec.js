import React, { Component } from "react";
//const instance  = require("../election_creation")
import instance from "../election_creation";
import ballot from "../ballot"
//const web3 = require('../web3');
import web3 from "../web3";
import { Form, Button, Input, Message } from "semantic-ui-react";
import {Link} from '../routes'


class StartElection extends Component {
    state = {
        candidates: [[]],
        party: [[]],
        district: "",
        hour: 0
    };

    onSubmit = async(event) => {
        event.preventDefault();
        this.setState({
            candidates: [[]],
            party: [[]],
            district: "",
            hour: 0
        });

        

        try {
          const { candidates, party, district, hour } = this.state;
          console.log(candidates, party, district, hour);
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            
            console.log(accounts+" requests");
            await instance.methods
            .startelec(
                [[candidates]],
                [[party]],
                [district], // Wrap district in an array
                hour
              )
              .send({
                from: accounts[0]
              });
        }
        catch (error) {
            console.error(error);
        }
    };

      render() {
        return (
          <>
            <h3>Start Election</h3>
            <Form onSubmit={this.onSubmit}>
              <Form.Field>
                <label>Candidate Name</label>
                
                  <Input
                   
                    className="ui input"
                    value= {this.state.candidates}
                    onChange={(event) => this.setState({candidates: event.target.value})}
                  />
                
              </Form.Field>
              <Form.Field>
                <label>Party Name</label>
               
                  <Input
                    
                    className="ui input"
                    value={this.state.party}
                    onChange={(event) => this.setState({party: event.target.value})}
                  />
               
              </Form.Field>
              <Form.Field>
                <label>District Name</label>
                <Input
                  className="ui input"
                  value={this.state.district}
                  onChange={(event) => this.setState({ district: event.target.value })}

                />
              </Form.Field>
              <Form.Field>
                <label>Hour</label>
                <Input
                  className="ui input"
                  value={this.state.hour}
                  onChange={(event) => this.setState({ hour: event.target.value })}
                />
              </Form.Field>
              <Button primary className="ui button">
               
                Submit
                
              </Button>
              <Button>
                <Link route = "/">
                Back
                </Link>
              </Button>
            </Form>
          </>
        );
      }
    }

export default StartElection;