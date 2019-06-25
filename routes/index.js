var express    = require('express');
var mysql      = require('mysql');
var dbconfig   = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);

var app=express();


app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	  res.send('Root');
});
/*
app.get('/lab', function(req, res){

	  connection.query('SELECT * from lab', function(err, rows) {
		      if(err) throw err;
		//
	  var html = `
		 
		      <!doctype html>
			      <html>
			      <head>
			        <title>Sejong SW Lab </title>
			        <meta charset="utf-8">
			      </head>
			      <body>
			        <h1><a href="/">WEB</a></h1>
			        ${rows[0].lab_name}
		      </body>
			      </html>
*/			      ` 



		      console.log('The solution is: ', rows);
		    //  res.send(rows);
		  res.end(html);
		    });
});

//
app.use(session({
		secret: 'secret',
		resave: true,
		saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/login', function(request, response) {
		response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request, response) {
		var username = request.body.username;
		var password = request.body.password;
		if (username && password) {
					connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
									if (results.length > 0) {
														request.session.loggedin = true;
														request.session.username = username;
														response.redirect('/home');
													} else {
																		response.send('Incorrect Username and/or Password!');
																	}			
									response.end();
								});
				} else {
							response.send('Please enter Username and Password!');
							response.end();
						}
});

app.get('/home', function(request, response) {
		if (request.session.loggedin) {
					response.send('Welcome back, ' + request.session.username + '!');
				} else {
							response.send('Please login to view this page!');
						}
		response.end();
});
//

app.get('/home', function(request, response) {
		if (request.session.loggedin) {
					response.send('Welcome back, ' + request.session.username + '!');
				} else {
						response.send('Please login to view this page!');
							}
								response.end();
								});


/*
var connection = mysql.createConnection({
	host     : 'localhost',
	  user     : 'root',
	  password : '@db16',
	  port     : 3306,
	  database : 'SejongLab_debug'
});

connection.connect();

connection.query('SELECT * from department', function(err, rows, fields) {
	  if (!err)
		    console.log('The solution is: ', rows);
	else
		    console.log('Error while performing Query.', err);
});

connection.end();
*/

/*
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

/*
const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('express.js로 만든 server입니다.')
})

app.listen(3000, ()=> {
	console.log('3000번 port에 http server를 띄웠습니다.')
})
*/
