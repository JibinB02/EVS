import supabase from "../supabaseClient";
import { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import {
    GridColumn,
    FormInput,
    Button,
    Divider,
    Form,
    Grid,
    Header,
    Segment,
    Message,
    SegmentGroup
  } from 'semantic-ui-react'

function Supabase() {
    const [fetchError, setFetchError] = useState(null);
    const [election, setElection] = useState([]);
    const [ShowElectionData, setShowElectionData] = useState(false);
    const [ShowDetails, setShowDetails] = useState(false);
    const [test,setTest] = useState([]);
     // State to track whether to show election data

    const fetchData = async () => {
        try {
            const { data, error } = await supabase
                .from("election")
                .select();

            if (error) {
                setFetchError("Could not fetch election data");
                setElection([]);
                console.error(error);
            } else {
                setElection(data || []);
                setFetchError(null);
            }
        } catch (error) {
            setFetchError("An error occurred while fetching data");
            setElection([]);
            console.error(error);
        }
    };

    const fetchdetails = async()=> {

        try {
            const { data, error } = await supabase
                .from("test")
                .select();

            if (error) {
                setFetchError("Could not fetch election data");
                setTest([]);
                console.error(error);
            } else {
                setTest(data || []);
                setFetchError(null);
            }
        } catch (error) {
            setFetchError("An error occurred while fetching data");
            setTest([]);
            console.error(error);
        }

    }

    const handleButtonClick = () => {
        setShowElectionData(true); // Set showElectionData to true when button is clicked
        fetchData(); // Fetch election data when button is clicked
    };

    const handledetails = () => {
        setShowDetails(true); // Set showElectionData to true when button is clicked
        fetchdetails(); // Fetch election data when button is clicked
    };

    return (
        <div>
            <Button onClick={handleButtonClick}>Fetch Election Data</Button>
            {ShowElectionData && (
                <div>
                    {fetchError && <div>Error: {fetchError}</div>}
                    <h2>Elections</h2>
                    <ul>
                        {election.map((electionItem, index) => (
                            <li key={index}>
                                {Object.entries(electionItem).map(([key, value]) => (
                                    <p key={key}>
                                        <strong>{key}:</strong> {value}
                                    </p>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <Button onClick={handledetails}>Fetch Details</Button>

            {ShowDetails && (
                <div>
                    {fetchError && <div>Error: {fetchError}</div>}
                    <h2>Elections</h2>
                    <ul>
                        {test.map((electionItem, index) => (
                            <li key={index}>
                                {Object.entries(electionItem).map(([key, value]) => (
                                    <p key={key}>
                                        <strong>{key}:</strong> {value}
                                    </p>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>


        


    );
}

export default Supabase;
