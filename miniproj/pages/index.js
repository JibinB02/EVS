





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
import {Link} from "../routes";


class ElectionCreation extends Component {
    static async getInitialProps() {
        const election = await instance.methods.getsDeployedBallots().call();
        console.log("election",election);
        return { election };
    }

    render() {
        const { election } = this.props;

        return (
            <div>
                <h1>Election Addresses</h1>
                <Divider />
                <Grid>
                    <Grid.Row columns={1}>
                        {election.map((address, index) => (
                            <Grid.Column key={index}>
                                <Segment>{address}</Segment>
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                </Grid>
                <Button>
                    <Link route = 'startelec'>
                    Back
                    </Link>
                </Button>
            </div>
        );
    }
}

export default ElectionCreation