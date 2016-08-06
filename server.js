var connect = require( 'connect' );
var serve = require( 'serve-static' );

const PORT = 8080;

connect()
.use( serve( __dirname ) )
.listen( PORT, function() {
	console.log( 'Listening on ' + PORT + '...' );
} );