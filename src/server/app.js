// Initialize the express framework
var express 	 	= require('express'),
    path			= require('path'),
	mongoose		= require('mongoose'),
	bodyParser		= require('body-parser'),
	config			= require('./config'),
	jwt				= require('jsonwebtoken'),
	Users 			= require('./models/users'),
	sha1 			= require('sha1'),
	databaseName	= 'sxswsite';
	dbUser			= 'steviedoes';
	dbPass			= 'Steve4005';

// Express setup 
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client')));
app.set('superSecret', config.secret);

// Routes set up
var router 	= express.Router();
var list = require('./controllers/api/list');
var user = require('./controllers/api/login');
// Get all lists
router.get('/api/lists', list.getAll);

// Create a list
router.post('/api/list', list.create);

//User Info
router.post('/api/login', function(req, res, next){
		Users.findOne({ 'user': req.body.user }, function (err, users) {
			if (!users) {
				res.json({success: false, message: 'Authentication failed. User not found.'});
			}
			else if(user){
				if(users.pass != sha1(req.body.pass)){
					res.json({success: false, message: 'Authentication failed. Wrong Password.'});
				}
				else{
					var token = jwt.sign(user, app.get('superSecret'),{
						expiresIn: 10000
					});
					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: token
					});
				}
			}

		});
	});



router.post('/api/authenticate' ,function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token;
	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, app.get('superSecret'), function(err, decoded) {
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });
			} else {
				// if everything is good, save to request for use in other routes

				req.decoded = decoded;
				console.log(decoded);
				next();
				return res.status(200).send({
					success: true,
					message: 'Token was good.'
				});
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});

	}
});


// Register the routing
app.use('/', router);

mongoose.connect('mongodb://'+dbUser+':'+dbPass+'@ds059365.mongolab.com:59365/'+ databaseName);

var db = mongoose.connection;
db.on('error', console.error);
db.on('open', startServer);

// Start up the server

function startServer(){

	var server = app.listen(3000, function(){
		var port = server.address().port;
		console.log('Listening on port ' + port);
	});
}

