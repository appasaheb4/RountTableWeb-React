const express = require( "express" );
const http = require( "http" );
const socketIo = require( "socket.io" );
const axios = require( "axios" );
const port = process.env.PORT || 4001;
const app = express();
const server = http.createServer( app );
const io = socketIo( server ); // < Interesting!
const getApiAndEmit = "videoPlay";

io.on( "connection", socket =>
{
    socket.emit( 'message', 'Hello world!' );
} );

