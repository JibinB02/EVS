import React, { Component } from "react";
//const instance  = require("../election_creation")
import instance from "../election_creation";
//const web3 = require('../web3');
import web3 from "../web3";
import { Form, Button, Input, Message } from "semantic-ui-react";


class StartElection extends Component {

    onSubmit = async(event) => {
      console.log(instance.methods);
        event.preventDefault();
        
        // this.setState({
        //     candidates: "",
        //     party: "",
        //     district: "",
        //     hour: ""
        // });

        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log(accounts+" requests");
            await instance.methods
            .startelec(
                [["Ram"]],
                [["BJP"]],
                ["KOCHI"], // Wrap district in an array
                4
              )
              .send({
                from: accounts[0],
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
              
              <Button primary className="ui button">
                Submit
              </Button>
            </Form>
          </>
        );
      }
    }

export default StartElection;