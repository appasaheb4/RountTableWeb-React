import React, { Component } from "react";
import ReactPlayer from 'react-player'


export default class DashboardScreen extends Component<any, any> {
    constructor ( props: any ) {
        super( props );
        this.state = {
            playerSource: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
            inputVideoUrl: 'http://www.w3schools.com/html/mov_bbb.mp4'
        };
        this.handleValueChange = this.handleValueChange.bind( this );
        this.updatePlayerInfo = this.updatePlayerInfo.bind( this );
    }

    componentDidUpdate( prevProps, prevState ) {
        if ( this.state.playerSource != prevState.playerSource ) {
            this.refs.player.load();
        }
    }

    handleValueChange( e ) {
        var value = e.target.value;
        this.setState( {
            [ e.target.id ]: value
        } );
    }

    updatePlayerInfo() {
        this.setState( {
            playerSource: this.state.inputVideoUrl
        } );
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <div className="from-gorup" style={ { alignItems: "center", textAlign: "center", marginTop: '7%' } }>
                    <div className="col-md-4">
                        <ReactPlayer
                            url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                            playing
                            controls
                            width="99.9%"
                            height="100%"
                        />
                    </div>
                    <div className="col-md-4">
                        <ReactPlayer
                            url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                            playing
                            controls
                            width="99.9%"
                            height="100%"
                        />
                    </div>
                    <div className="col-md-4">
                        <ReactPlayer
                            url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                            playing
                            controls
                            width="99.9%"
                            height="100%"
                        />
                    </div>
                    <div className="col-md-4" >
                        <ReactPlayer
                            url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                            playing
                            controls
                            width="99.9%"
                            height="100%"
                        />
                    </div>
                    <div className="col-md-4">
                        <ReactPlayer
                            url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                            playing
                            controls
                            width="99.9%"
                            height="100%"
                        />
                    </div>
                    <div className="col-md-4">
                        <ReactPlayer
                            url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                            playing
                            controls
                            width="99.9%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
        );
    }
}  
