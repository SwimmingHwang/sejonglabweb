var express    = require('express');
var session    = require('express-session');
var bodyParser = require('body-parser');
var path       = require('path');
var mysql      = require('mysql');
var PythonShell = require('python-shell');
var dbconfig   = require('./config/database.js');
var template   = require('./lib/template.js');
var qs = require('querystring');
var url = require('url');
var connection = mysql.createConnection(dbconfig);
var app=express();

app.use(express.static(__dirname + '/public'));

app.use(session({
		secret: 'secret',
		resave: true,
		saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

/*LOGIN PAGE*/
app.get('/login', function(req, res) {
		res.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(req, res) {
		var username = req.body.username;
		var password = req.body.password;
		if (username && password) {
			connection.query('SELECT * FROM student WHERE nickname = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/');
			} else {
				res.send('Incorrect Username and/or Password!');
			}
			res.end();
			});
			} else {
				res.send('Please enter Username and Password!');
				res.end();
			}
});

/*LOGOUT */
app.get('/logout',function (req, res){
	  req.session.destroy(function(err){
		      res.redirect('/');
		    })
});

/*MY PAGE*/
app.get('/mypage',function (req, res){
	var id=req.session.username;
	connection.query('select * from student where nickname=?',[id],function(err,rows){
		if(err) throw err;
		var list='<ul>'+'이름: '+`${rows[0].name}`+'<br>'+'닉네임: '+`${rows[0].nickname}`+'<br>' +'비밀번호: '+ `${rows[0].password}`+'</ul>';
		var html = template.HTML3(list);
		res.writeHead(200);
		res.end(html);
	});
});

/*MANAGEMENT PAGE*/
app.get('/management',function (req, res){
	        var id=req.session.username;
	        connection.query('select * from student',function(err,rows){
			                if(err) throw err;
			                var list=template.list6(rows);
			                var html = template.HTML4(list);
			                res.writeHead(200);
			                res.end(html);
			        });
});

/*JOIN PAGE*/
app.get('/join', function(req, res) {
	                res.sendFile(path.join(__dirname + '/join.html'));
});

app.post('/join', function(req, res) {
	var nickname = req.body.nickname;
	var name = req.body.name;
	var passwd = req.body.password;
	var query = connection.query('insert into student (name, nickname, password) values ("' + name + '","' + nickname + '","' + passwd + '")', function(err, rows) {
		              if(err) { throw err;}
		              console.log("Data inserted!");
		res.redirect('/');
		res.end();
	});

});

/*LAB_CREATE*/
app.get('/lab_create', function(req, res) {
	                        res.sendFile(path.join(__dirname + '/lab_create.html'));
});

app.post('/lab_create', function(req, res) {
	  var name = req.body.professor_name;
	  var email = req.body.professor_email;
	  var url = req.body.professor_url;
	  var officeHour = req.body.professor_officeHour;
	  var lab_location = req.body.lab_location;
	  var lab_name = req.body.lab_name;
	  var tel = req.body.lab_tel;
	  var val=req.body.dept;
	  var query2 = connection.query('select * from professor', function(err2, rows2){
		      if(err2) {throw err2;}
		        index=rows2.length+1;
		        var query = connection.query('insert into lab (lab_location, lab_name, lab_tel, professor_id) values  ("' +lab_location+'","' +lab_name+ '","' + tel + '", "'+index+'")', function(err, rows) {
				        if(err) { throw err;}
				          console.log("Data inserted!");
				          var num=index+10000;
				          var query3 = connection.query('insert into professor (uniqNum, professor_name, professor_email, professor_url, professor_officeHour) values ("'+num+'", "'+name+'","'+email+'", "'+url+'", "'+officeHour+'")', function(err3, rows3){
						              if(err3) {throw err3;}
									  console.log("Data inserted!");
									  console.log(index);
						              var query4 = connection.query('insert into work_dept (professor_id, dept_id) values ("'+index+'", "'+val+'")', function(err4, rows4){
								                    if (err4) {throw err4;}
								                    
								                  res.redirect('/');
								                  res.end();
								              });
						        });
				    });
		    });
});


/*MAIN PAGE*/
app.get('/', function(req, res){
	if (!req.session.loggedin) {
		var _url = req.url;
		var queryData = url.parse(_url, true).query;
		console.log(queryData);

		connection.query('SELECT * from college', function(err, rows) {
			  if(err) throw err;
			  connection.query('SELECT * from noticeboard', function(err2, nbrows){
				      if(err2) throw err2;
				      connection.query('SELECT * from freeboard', function(err3, fbrows) {  
					            if(err3) throw err3;

					            connection.query('ALTER TABLE noticeboard AUTO_INCREMENT=1;',function(err4,airow){
							            if(err4) throw err4;
                                });
					            connection.query('SET @COUNT =0;',function(err5,airow2){
							            if(err5) throw err5;
                                });
					            connection.query('UPDATE noticeboard SET ntboard_id = @COUNT:=@COUNT+1;',function(err6,airow3){
							            if(err6) throw err6;
                                });

					            connection.query('ALTER TABLE noticeboard AUTO_INCREMENT=1;',function(err4,airow){
							            if(err4) throw err4;
                                });
					            connection.query('SET @COUNT =0;',function(err5,airow2){
							            if(err5) throw err5;
                                });
					            connection.query('UPDATE noticeboard SET ntboard_id = @COUNT:=@COUNT+1;',function(err6,airow3){
							            if(err6) throw err6;
                                });
                                      
                                
                                connection.query('SELECT * FROM field',function(err7, fieldrows){
                                    if(err7) throw err7;

                                    var list = template.list(rows);
                                    var field= template.list7(fieldrows);
                                    var notice = template.list3(nbrows);
                                    var free=template.list4(fbrows);
                                    var html = template.basic_HTML(list,field,notice,free,``,``,``);



                                    res.writeHead(200);
                                    res.end(html);
                                    });


                                });
					           
				      });
			  });
		
	}
		

	else {
	var _url = req.url;
	var queryData = url.parse(_url, true).query;
	console.log(queryData);

	
	connection.query('SELECT * from college', function(err, rows) {
		if(err) throw err;
		connection.query('SELECT * from noticeboard', function(err2, nbrows){
			if(err2) throw err2;
			connection.query('SELECT * from freeboard', function(err3, fbrows) {  //free board row    
				if(err3) throw err3;
				
				
				//notice board 재인덱싱
				connection.query('ALTER TABLE noticeboard AUTO_INCREMENT=1;',function(err4,airow){
					if(err4) throw err4;
				 });
				connection.query('SET @COUNT =0;',function(err5,airow2){
					if(err5) throw err5;
				});
				connection.query('UPDATE noticeboard SET ntboard_id = @COUNT:=@COUNT+1;',function(err6,airow3){
					if(err6) throw err6;
				});
				
				//free board 재인덱싱
				
				connection.query('ALTER TABLE freeboard AUTO_INCREMENT=1;',function(err4,airow){
					if(err4) throw err4;
				 });
				connection.query('SET @COUNT =0;',function(err5,airow2){
					if(err5) throw err5;
				});
				connection.query('UPDATE freeboard SET frboard_id = @COUNT:=@COUNT+1;',function(err6,airow3){
					if(err6) throw err6;
				});

				connection.query('SELECT * FROM field',function(err7, fieldrows){
					if(err7) throw err7;

					var list = template.list(rows);
					var field= template.list7(fieldrows);
					var notice = template.list3(nbrows);
					var free=template.list4(fbrows);
					var html;
					if(req.session.username=='admin')
						html=template.HTML(list,field,notice,free,``,``,``);
					else
						html = template.user_HTML(list,field,notice,free,``);
					res.writeHead(200);
					res.end(html);

				});


				
				


			});
		});
	});
	}
});


app.get('/sub_college',function (req, res){
	var _url = req.url;
	var queryData = url.parse(_url,true).query;

	connection.query('SELECT * from college', function(err, rows) {
		if(err) throw err;
		
			var list = template.list(rows);
			var html = template.department_HTML(list,``);

			res.writeHead(200);
			res.end(html);

		});
});


/*COLLEGE 들어갔을때 */
app.get('/college',function (req, res){
	var _url = req.url;
	var queryData = url.parse(_url,true).query;

	
	connection.query('SELECT * from department WHERE college_id=?', [queryData.id], function(err,rows){
		if(err) throw err;

		var list2 = template.list2(rows);
		var html = template.department_HTML(list2,``);

		res.writeHead(200);
		res.end(html);
	});

	/*
	connection.query('SELECT * from department LEFT JOIN college ON department.college_id = college.college_id WHERE college.college_id=?',[queryData.id],function(err,rows) {
		if(err) throw err;
		console.log('college')
		connection.query('SELECT * from noticeboard', function(err2, nbrows) { //notice board row
			if(err2) throw err2;
			console.log('college')
			connection.query('SELECT * from freeboard', function(err3, fbrows) {  //free board row                                          
				if(err3) throw err3;                     
				console.log('college')             
				connection.query('SELECT * FROM field',function(err7, fieldrows){
					if(err7) throw err7;
					console.log('college')

					/*
					var list = template.list2(rows);
					var field= template.list7(fieldrows);
					var notice = template.list3(nbrows);
					var free=template.list4(fbrows);
					var html = template.basic_HTML(list,field,notice,free,``,``,``);
				
					var list = template.list2(rows);
					//var field = template.list7(fieldrows);
					//var notice = template.list3(nbrows);
					//var free = template.list4(fbrows);
					
					var html = template.basic_department_HTML(list);

					
					res.writeHead(200);
					res.end(html);
			
				});	
			});

		});

	});
	*/

});


/*학과 별 뷰 생성*/
app.get('/department',function (req, res){
	                var _url = req.url;
					var queryData  = url.parse(_url,true).query;
					connection.query('SELECT * from department WHERE college_id=8', function(err1,dep_rows){
						if(err1) throw err1;
						connection.query('CREATE OR REPLACE VIEW dept as SELECT a.dept_name, b.lab_name, c.professor_name, c.professor_email,c.professor_url, b.lab_location, b.lab_tel FROM department a, professor c, work_dept d,(SELECT lab_name, lab_location, lab_tel, professor_id FROM lab) b WHERE a.dept_id=d.dept_id and d.professor_id=c.professor_id and b.professor_id=c.professor_id and a.dept_id=?',[queryData.id],function(err,rows) {
							if(err) throw err;
							connection.query('SELECT * FROM dept',[rows],function(err2,rows2) {
											  if(err2) throw err2;
											  var dep = template.list2(dep_rows);
											  var list = template.list5(rows2);
											  var html = template.department_HTML(dep,list);

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
				connection.query('SELECT * FROM field',function(err7, fieldrows){
					if(err7) throw err7;



					var list = template.list(rows);
					var field= template.list7(fieldrows);
					var notice = template.list3(nbrows);
					var free=template.list4(fbrows);

					var html = template.HTML(list,field,notice,free, `
						<form action="/college_create_process" method = "post">
						<p><input type="text" name = "title" placeholder="title"></p>
					
						<input type="submit">
						</form>
						`,``,``

					);
					console.log("insert");
					res.writeHead(200);
					res.end(html);
				
				});
					
				
			});
		});
	});
});
/*COLLEGE CREATE PROSESS  -  INSERT*/
app.post('/college_create_process',function(req,res){
	var _url = req.url;
	var body=''
		connection.query('INSERT INTO college (college_name) VALUES(?)',[ req.body.title],
			function(err,result){
				if(err) throw err;
				res.writeHead(302,{Location:'/?id=${result.insertId}'});
				res.write("");
				res.end();
	
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
				connection.query('SELECT * FROM field',function(err7, fieldrows){
					if(err7) throw err7;

					
					var list = template.list(rows);
					var field= template.list7(fieldrows);
					var notice = template.list3(nbrows);
					var free=template.list4(fbrows);
					var html = template.HTML(list,field,notice,free, `
						<form action="/college_delete_process" method = "post">
						<p><input type="text" name = "title" placeholder="삭제할 이름"></p>
						<input type="submit">
						</form>
						` ,``,``

					);

					//console.log("college delete");
					res.writeHead(200);
					res.end(html);
				});
			});
		});
	});
});

  
/*COLLEGE DELETE PROSESS  -  DELETE*/
app.post('/college_delete_process',function(req,res){
	        var _url = req.url;
	        var body='';
		
	
		connection.query('DELETE FROM college WHERE college_name = ?',[req.body.title],function(err,result){
			if(err) {
			//	throw  err;	
			console.log(err);
			res.send({success:false , message :'queryerror',error:err});
			return;
			}
			res.writeHead(302,{Location:'/?id=${}'});
		res.write("");
		res.end();
						

		});
});

app.get('/recommander', function(req, res) {

	connection.query('SELECT * FROM field;', function(err, result) {{
		var list = template.list7(result);
		var html = template.recommander_HTML(list);
		
	
		res.writeHead(200);
		res.end(html);
	}})
	
});

/* SEARCH AND RECOMMAND LAB */

app.get('/search_field_process',function(req,res) {
	var _url = req.url;
	var queryData = url.parse(_url,true).query;
	//얻어진 value 에 맞게 select 해주기.. list에 넣고 html반환 
	var i = 1;
	
	console.log(queryData.id);



	/*
	if (queryData.id===undefined) {
		list = 'and  f.field_id=-1';
	} else {

		if(_url.indexOf("&") !== -1)
		{
			list = 'and ( f.field_id ='+queryData.id[0];
	
			while(	i< queryData.id.length ) {
				list = list + ` or f.field_id =`  +`${queryData.id[i]}`;
				i=i+1;
		}

		list = list + ')' ;
		}
		else
		{
			list = 'and f.field_id='+queryData.id;
		}
	}
	*/
	//console.log(list);
	var options = {
		mode: 'json',
		pythonPath: '',
		pythonOptions: ['-u'],
		scriptPath: '',
		args: queryData.id
	};

	PythonShell.PythonShell.run('recommender.py', options, function(err_r, results){
		if (err_r) throw err_r;

		console.log(results[0]);
		var sql = `SELECT 
		professor.professor_id,
		professor.professor_name,
		lab.lab_name,
		lab.lab_location,
		lab.lab_tel,
		professor.professor_url
	FROM
		lab,
		professor
	WHERE
		lab.professor_id = professor.professor_id
			AND`;
		var order = [];
		var count = 0;
		for (var i = results[0].length - 1; i >= 0; i--) {
			if (count >= 3) 
				break;
			sql += ' lab.professor_id = ' + results[0][i];
			order[count] = results[0][i];

			if (i > 0 && count < 2)
				sql += ' OR'
			count ++;
		}

		sql += '  ORDER BY FIELD(lab.professor_id, '
		for (var i = 0; i < order.length; i ++)
		{
			sql += order[i];
			if (i < order.length - 1)
				sql += ',';
		}
		sql += ');'
		console.log(sql);
		connection.query(sql, function(err_q, row){
			if (err_q) throw err_q;
			console.log(row);
		});
		/*
		for(var i = results[0].length - 1; i >= 0; i--) {
			var sql = 'SELECT * FROM lab where professor_id = ?'; 
			connection.query(sql, [results[0][i]], function(err,row){
				if(err){
					console.log(err);
				}
				console.log(row);
			});
		}
		*/

		//var list8= template.list8(row);
		var html=  template.HTML2(``);
		//res.writeHead(302,{Location:''});
		//res.writeHead(302);
		res.end(html);
	});

	
	
	
	

});



/*NOTICE BOARD*/
app.get('/noticeboard',function(req,res){
	var _url = req.url;
	var queryData = url.parse(_url,true).query;
	connection.query('SELECT * FROM noticeboard WHERE ntboard_id = ?',[queryData.id],function(err,row){
		if(err) throw err;
		var html = template.HTML_post(row);
		res.writeHead(200);
		res.end(html);
		
	});

});

/*FREE BOARD */
app.get('/freeboard',function(req,res){
	var _url = req.url;
	var queryData = url.parse(_url,true).query;
	connection.query('SELECT * FROM freeboard WHERE frboard_id = ?',[queryData.id],function(err,row){
		                if(err) throw err;
		                var html = template.HTML_post2(row);
		                res.writeHead(200);
		                res.end(html);

		        });

});


/* NOTICEBOARD CREATE   */
app.get('/noticeboard_create',function (req, res){
	var _url = req.url;
	var queryData = url.parse(_url,true).query;
	connection.query('SELECT * from college ',function(err,rows) {
		if(err) throw err;
		connection.query('SELECT * from noticeboard', function(err2, nbrows) { //notice board row
			if(err2) throw err2;
			connection.query('SELECT * from freeboard', function(err3, fbrows) {  //free board row
				if(err3) throw err3;
				connection.query('SELECT * FROM field',function(err7, fieldrows){
					if(err7) throw err7;

					var list = template.list(rows);
					var field= template.list7(fieldrows);
					var notice = template.list3(nbrows);
					var free=template.list4(fbrows);
					var html = template.HTML(list,field,notice,free,`` ,`
						<form action="/noticeboard_create_process" method = "post">
						<p><input type="text" name = "title" placeholder="제목"></p>
						<p>
							<textarea name="description" placeholder="내용"></textarea>
						</p>
						<input type="submit">
						</form>
						`,``

					);
					

						
					console.log("insert");
					res.writeHead(200);
					res.end(html);
				});
			});
		});
	});
});
/*NOTICE BOARD CREATE PROSESS  -  INSERT*/
app.post('/noticeboard_create_process',function(req,res){
	var _url = req.url;
	var body='';
	connection.query('INSERT INTO noticeboard (ntboard_authorid,ntboard_issuedate,ntboard_contents,ntboard_title) VALUES(?,now(),?,?)',[ 1,req.body.description,req.body.title],
			function(err,result){
				if(err) throw err;
				res.writeHead(302,{Location:'/'});
				res.write("");
				res.end();
			
	});
});




/* NOTICE BOARD DELETE   */	
app.get('/noticeboard_delete',function (req, res){
	var _url = req.url;
	connection.query('SELECT * from college ',function(err,rows) {
		if(err) throw err;
		connection.query('SELECT * from noticeboard', function(err2, nbrows) { //notice board row
			if(err2) throw err2;
			connection.query('SELECT * from freeboard', function(err3, fbrows) {  //free board row
				if(err3) throw err3;
				connection.query('SELECT * FROM field',function(err7, fieldrows){
					if(err7) throw err7;

					var list = template.list(rows);
					var field= template.list7(fieldrows);
					var notice = template.list3(nbrows);
					var free=template.list4(fbrows);
					var html = template.HTML(list,field,notice,free, ``,`
						<form action="/noticeboard_delete_process" method = "post">
						<p><input type="text" name = "id" placeholder="삭제할 게시물의 번호"></p>

						<input type="submit">
						</form>
						`,``

					);


					res.writeHead(200);
					res.end(html);
				});
			});
		});
	});
});

  
/*NOTICE BOARD DELETE PROSESS  -  DELETE*/
app.post('/noticeboard_delete_process',function(req,res){
	        var _url = req.url;
	        var body='';
	        connection.query('DELETE FROM noticeboard WHERE ntboard_id = ?',[req.body.id],  function(err,result){
					if(err) throw  err;
					res.writeHead(302,{Location:'/'});
					res.write("");
					res.end();
				});
			
});

/* FREE BOARD */

/* FREEBOARD CREATE   */
app.get('/freeboard_create',function (req, res){
	var _url = req.url;
	var queryData = url.parse(_url,true).query;
	connection.query('SELECT * from college ',function(err,rows) {
		if(err) throw err;
		connection.query('SELECT * from noticeboard', function(err2, nbrows) { //notice board row
			if(err2) throw err2;
			connection.query('SELECT * from freeboard', function(err3, fbrows) {  //free board row
				if(err3) throw err3;
				connection.query('SELECT * FROM field',function(err7, fieldrows){
					if(err7) throw err7;

					var list = template.list(rows);
					var field= template.list7(fieldrows);
					var notice = template.list3(nbrows);
					var free=template.list4(fbrows);
					var html = template.HTML(list,field,notice,free,``,`` ,`
						<form action="/freeboard_create_process" method = "post">
						<p><input type="text" name = "title" placeholder="제목"></p>
						<p>
							<textarea name="description" placeholder="내용"></textarea>
						</p>
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
});
/*FREE BOARD CREATE PROSESS  -  INSERT*/
app.post('/freeboard_create_process',function(req,res){
	var _url = req.url;
	var body='';
	connection.query('INSERT INTO freeboard (frboard_authorid,frboard_issuedate,frboard_contents, frboard_title) VALUES(?,now(),?,?)',[ 1,req.body.description,req.body.title],
			function(err,result){
				if(err) throw err;
				res.writeHead(302,{Location:'/'});
				res.write("");
				res.end();
			});

});




/* FREE BOARD DELETE   */	
app.get('/freeboard_delete',function (req, res){
	var _url = req.url;
	connection.query('SELECT * from college ',function(err,rows) {
		if(err) throw err;
		connection.query('SELECT * from noticeboard', function(err2, nbrows) { //notice board row
			if(err2) throw err2;
			connection.query('SELECT * from freeboard', function(err3, fbrows) {  //free board row
				if(err3) throw err3;
				connection.query('SELECT * FROM field',function(err7, fieldrows){
					if(err7) throw err7;

					
					var list = template.list(rows);
					var field= template.list7(fieldrows);
					var notice = template.list3(nbrows);
					var free=template.list4(fbrows);
					var html = template.HTML(list,field,notice,free, ``,``,`
						<form action="/freeboard_delete_process" method = "post">
						<p><input type="text" name = "id" placeholder="삭제할 게시물의 번호"></p>
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
});

  
/*FREE BOARD DELETE PROSESS  -  DELETE*/
app.post('/freeboard_delete_process',function(req,res){
	
	var _url = req.url;
	var post = req.body;
	connection.query('DELETE FROM freeboard WHERE frboard_id = ?',[post.id],  function(err,result){
					if(err) throw  err;
					res.writeHead(302,{Location:'/'});
					res.write("");
					res.end();
				});
	
});





app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});





