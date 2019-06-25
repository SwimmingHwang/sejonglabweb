var express    = require('express');
var mysql      = require('mysql');
var dbconfig   = require('./config/database.js');
var template   = require('./lib/template.js');
var qs = require('querystring');
var url = require('url');
var connection = mysql.createConnection(dbconfig);
var app=express();
//var router = require('./routes/main')(app);

app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);




/*MAIN PAGE*/
app.get('/', function(req, res){
	var _url = req.url;
	var queryData = url.parse(_url, true).query;
	console.log(queryData);

	
	connection.query('SELECT * from college', function(err, rows) {
		if(err) throw err;
		connection.query('SELECT * from noticeboard', function(err2, nbrows){
			if(err2) throw err2;
			connection.query('SELECT * from freeboard', function(err3, fbrows) {  //free board row    
				if(err3) throw err3
				var list = template.list(rows);
				var notice = template.list3(nbrows);
				var free=template.list4(fbrows);
				var html = template.HTML(list,notice,free,``);
				res.writeHead(200);
				res.end(html);
			});
		});
	});
});

/*COLLEGE 들어갔을때 */
app.get('/college',function (req, res){
	var _url = req.url;
	var queryData = url.parse(_url,true).query;

	connection.query('SELECT * from department LEFT JOIN college ON department.college_id = college.college_id WHERE college.college_id=?',[queryData.id],function(err,rows) {
		if(err) throw err;
		connection.query('SELECT * from noticeboard', function(err2, nbrows) { //notice board row
			if(err2) throw err2;
			connection.query('SELECT * from freeboard', function(err3, fbrows) {  //free board row                                          
				if(err3) throw err3;                                  
				var list = template.list2(rows);
				var notice = template.list3(nbrows);
				var free=template.list4(fbrows);
				var html = template.HTML(list,notice,free,` `);              
			
				res.writeHead(200);         
				res.end(html);  
               		 });
		});

	});


});

/* COLLEGE CREATE   */
app.get('/college_create',function (req, res){
	        var _url = req.url;
	        var queryData = url.parse(_url,true).query;
	        connection.query('SELECT * from college ',function(err,rows) {
			if(err) throw err;
			connection.query('SELECT * from noticeboard', function(err2, nbrows) { //notice board row
				if(err2) throw err2;
				connection.query('SELECT * from freeboard', function(err3, fbrows) {  //free board row
					if(err3) throw err3;
					var list = template.list(rows);
					var notice = template.list3(nbrows);
					var free=template.list4(fbrows);
					var html = template.HTML(list,notice,free, `
						<form action="/college_create_process" method = "post">
						<p><input type="text" name = "title" placeholder="title"></p>
					
						<input type="submit">
						</form>
						`

					);
					

						
					console.log("insert");
					res.writeHead(200);
					res.end(html);
				});
			});
		});
});

/*DEPARTMENT 들어갔을 때*/ 
app.get('/department',function (req, res){
	        var _url = req.url;
	        var queryData  = url.parse(_url,true).query;

	        connection.query('select * from department a, lab b, professor c, work_dept d  where a.dept_id=d.dept_id and d.professor_id=c.professor_id and b.professor_id=c.professor_id and a.dept_id=?',[queryData.id],function(err,rows) {
			                if(err) throw err;
					  var list = template.list5(rows);
			                  var html = template.HTML2(list);
			                  res.writeHead(200);                                                
			                  res.end(html);
			        });
});


/*COLLEGE CREATE PROSESS  -  INSERT*/
app.post('/college_create_process',function(req,res){
	var _url = req.url;
	var body='';
	req.on('data', function(data){
		body = body + data;
	});
	req.on('end', function(){
		var post = qs.parse(body);
		console.log("post",post);
		connection.query('INSERT INTO college (college_name) VALUES(?)',[ post.title],
			function(err,result){
				if(err) throw err;
				res.writeHead(302,{Location:'/?id=${result.insertId}'});
				res.write("");
				res.end();
			});
	});
});




/* COLLEGE DELETE   */
app.get('/college_delete',function (req, res){
	                var _url = req.url;
	                connection.query('SELECT * from college ',function(err,rows) {
				                        if(err) throw err;
				                        connection.query('SELECT * from noticeboard', function(err2, nbrows) { //notice board row
								                                if(err2) throw err2;
								                                connection.query('SELECT * from freeboard', function(err3, fbrows) {  //free board row
													                                        if(err3) throw err3;
													                                        var list = template.list(rows);
													                                        var notice = template.list3(nbrows);
													                                        var free=template.list4(fbrows);
													                                        var html = template.HTML(list,notice,free, `
																			                                                <form action="/college_delete_process" method = "post">
																			                                                <p><input type="text" name = "title" placeholder="삭제할 이름"></p>

																			                                                <input type="submit">
																			                                                </form>
																			                                                `

																			                                        );


													                                        res.writeHead(200);
													                                        res.end(html);
													                                });
								                        });
				                });
});

  
/*COLLEGE DELETE PROSESS  -  DELETE*/
app.post('/college_delete_process',function(req,res){
	        var _url = req.url;
	        var body='';
	        req.on('data', function(data){
			                body = body + data;
			        });
	        req.on('end', function(){
			                var post = qs.parse(body);
			                console.log("post",post);
				
					//var sql = 'DELETE FROM college WHERE college_name = ' +post.body ;
			                connection.query('DELETE FROM college WHERE college_name = ?',[post.title],  function(err,result){
										                                if(err) throw  err;
						res.writeHead(302,{Location:'/?id=${result.insertId}'});
										                                res.write("");
										                                res.end();
										                        });
			        });
});




app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});





