import React, { Component } from "react";
import ReactPlayer from 'react-player'
import { Player, ControlBar } from 'video-react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import SocketIOClient from 'socket.io-client';


export default class DashboardScreen extends Component<any, any> {
    constructor ( props: any ) {
        super( props );
        this.state = {
            source: [ "http://media.w3.org/2010/05/sintel/trailer.mp4",
                "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
                "http://media.w3.org/2010/05/bunny/movie.mp4",
                "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
                "http://media.w3.org/2010/05/bunny/movie.mp4",
                "http://media.w3.org/2010/05/sintel/trailer.mp4"
            ]
        };
        this.play = this.play.bind( this );
        this.pause = this.pause.bind( this );
        this.load = this.load.bind( this );
        this.changeCurrentTime = this.changeCurrentTime.bind( this );
        this.seek = this.seek.bind( this );
        this.changePlaybackRateRate = this.changePlaybackRateRate.bind( this );
        this.changeVolume = this.changeVolume.bind( this );
        this.setMuted = this.setMuted.bind( this );
        this.socket = SocketIOClient( 'http://round.cmshuawei.com:80' );
    }

    componentDidMount() {
        // subscribe state change
        // this.refs.player.subscribeToStateChange( this.handleStateChange.bind( this ) );
        // this.refs.player4.play();
        // setTimeout( () => {
        //     this.refs.player4.load();
        // }, 5000 );





        // this.state.socket.on( 'videoPlay', player => {
        //     console.log( 'play' );
        //     console.log( { player } );
        // } );

        // this.state.socket.on( 'videoLoad', player => {
        //     console.log( 'playLoad' );
        //     console.log( { player } );
        // } );

        this.socket.on( 'videoPlay', ( message ) => {
            console.log( { message } );
        } );

    }




    handleData( data ) {
        let result = JSON.parse( data );
        console.log( { result, data } );
        console.log( 'websocket' );


    }


    playerPlay() {

    }


    handleStateChange( state, prevState ) {
        // copy player state to this component's state
        this.setState( {
            player: state
        } );
    }

    play() {
        this.refs.player.play();
    }

    pause() {
        this.refs.player.pause();
    }

    load() {
        this.refs.player.load();
    }

    changeCurrentTime( seconds ) {
        return () => {
            const { player } = this.refs.player.getState();
            const currentTime = player.currentTime;
            this.refs.player.seek( currentTime + seconds );
        };
    }

    seek( seconds ) {
        return () => {
            this.refs.player.seek( seconds );
        };
    }

    changePlaybackRateRate( steps ) {
        return () => {
            const { player } = this.refs.player.getState();
            const playbackRate = player.playbackRate;
            this.refs.player.playbackRate = playbackRate + steps;
        };
    }

    changeVolume( steps ) {
        return () => {
            const { player } = this.refs.player.getState();
            const volume = player.volume;
            this.refs.player.volume = volume + steps;
        };
    }

    setMuted( muted ) {
        return () => {
            this.refs.player.muted = muted;
        };
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <div style={ { alignItems: "flex-end", textAlign: "end", margin: 20 } }>
                    <a href="/dashboard" style={ { fontSize: 16 } }>Go To Dashboard</a>
                </div>
                <div className="from-gorup" style={ { alignItems: "center", textAlign: "center", marginTop: '6%' } }>
                    <div className="form-group">
                        <div className="col-md-4">
                            <Player ref="player" >
                                <source src={ this.state.source[ 0 ] } />
                                <ControlBar autoHide={ false } />
                            </Player>
                        </div>
                        <div className="col-md-4">
                            <Player ref="player1" >
                                <source src={ this.state.source[ 1 ] } />
                                <ControlBar autoHide={ false } />
                            </Player>
                        </div>
                        <div className="col-md-4">
                            <Player ref="player2" >
                                <source src={ this.state.source[ 2 ] } />
                                <ControlBar autoHide={ false } />
                            </Player>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-4" >
                            <Player ref="player3" >
                                <source src={ this.state.source[ 3 ] } />
                                <ControlBar autoHide={ false } />
                            </Player>
                        </div>
                        <div className="col-md-4">
                            <Player ref="player4" >
                                <source src={ this.state.source[ 4 ] } />
                                <ControlBar autoHide={ false } />
                            </Player>
                        </div>
                        <div className="col-md-4">
                            <Player ref="player5" >
                                <source src={ this.state.source[ 5 ] } />
                                <ControlBar autoHide={ false } />
                            </Player>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}  
