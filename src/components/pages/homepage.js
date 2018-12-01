import React, {Component} from 'react';


class HomePage extends Component {
    render(){
        return(
            <left>
                <div className = 'container-fluid'>
                    <h3>
                        function for the web
                    </h3>
                    <p>
                    to render a two-pane layout that displays the list of NYC subway trips on one side and a map (Google, Apple Maps, MapBox, etc) on the other. Clicking on a subway trip should use the map to display the various stops that were made using the provided location and arrival time. We’ve setup an API that is backed by data normalized from the MTA’s real-time API for their subway countdown clocks. There are two API endpoints, one that will display a list of trips and another that will show the arrival times for that trip at each stop. 
                    </p>
                </div>
            </left>
        );
    }
}
export default HomePage;