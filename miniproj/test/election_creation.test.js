const assert = require('assert');
const {Web3} = require('web3');
const ganache = require('ganache');
const web3 = new Web3(ganache.provider());
//const {beforeEach,it,describe} = require('mocha');

const Compiled_evs = require('../build/Electioncreation.json');
const Compiled_ballot = require('../build/Ballot.json');

let evs;
let accounts;
let ballotAddress;
let ballot;

beforeEach(async()=> {
    accounts = await web3.eth.getAccounts();
    //console.log("Compiled evs",Compiled_evs.abi);
    evs = await new web3.eth.Contract(Compiled_evs.abi)
     .deploy({data: Compiled_evs.evm.bytecode.object})
     .send({from: accounts[0], gas: '2000000'});
     await evs.methods.startelec([["Ram"]],[["BJP"]],["KOCHI"],4).send({
        from: accounts[0],
        gas: "1000000"
     });

     [ballotAddress] = await evs.methods.getsDeployedBallots().call();
     ballot = await new web3.eth.Contract(Compiled_ballot.abi, ballotAddress);

});



describe("election creation contract", ()=> {
    it("deploys a contract", ()=> {
        assert.ok(evs.options.address);
        assert.ok(ballot.options.address);
    });


    it("get candidates ", async()=> {
        let name = await ballot.methods.candidates(0).call();
        console.log(name);
    })
    
    it("get manager ", async()=> {
        let name = await ballot.methods.manager().call();
        console.log(name);
    })

    it("get voting district ",async()=> {
        const district  = await ballot.methods.votingDistrict().call();
        console.log(district);
    })

    it("voting a candidate",async()=> {
        await ballot.methods.vote(0).send({
            from: accounts[4],
            gas: "1000000",
        });
        const voteCount = await ballot.methods.candidates(0).call();
        console.log(voteCount.voteCount);
        const bools = await ballot.methods.voters(accounts[4]).call();
        console.log(bools);
    })


   
  
   
    
})


