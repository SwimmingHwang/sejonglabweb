module.exports = {
	/*로그인 전 페이지*/
	basic_HTML:function(list,field,notice,free,college_create,ntboard_create,frboard_create ) {
		return `

		<!DOCTYPE html>
			<html>
			 <head>
			  <meta charset="UTF-8">
			  <title>Sejong SW Lab</title>
			  <link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
			 </head>
			 <body>
			   <header>
			     <a href="http://15.164.103.153:3000">
			       <div id="web_title">Sejong SW Lab</div>
			     </a>
			<button class="button  mypageBut" onclick="window.location='/prof_management';">마이페이지</button>
			   </header>
			   <section>
			     <hr>
			   </section>
			   <nav>
			     <ul class="nav-container">
			       <li class="nav-item"><a href="/sub_college">학과 별 조회</a></li>
					<li class="nav-item"><a href="/project">프로젝트 조회</a></li>
			       <li class="nav-item"><a href="/recommander">연구실 추천</a></li>
				   <li class="nav-item"><a href="/noticeboard2">공고 게시판</a></li>
				   <li class="nav-item"><a href="/login">로그인</a><li>
			     </ul>
			   </nav>
			   <article>
			     <img id=bg src="http://min5155.dothome.co.kr/resource/ai_center.png" center>
			     <div id="text">Cultivation of</div>
			     <div id="text2">Innovative Talents!</div>
			     <div><img id="logo" src="http://min5155.dothome.co.kr/resource/logo.png" center></div>
			   </article>
			   <article>
				<div class="search_box">
				<form action="/search" method ="post">
			       <input type="text" name="professor_name"  placeholder="교수명 입력">
			       <input type="submit"  class="button  searchBut" ></input>
				</form>
			     </div>
			   </article>
			   <footer>
			   </footer>

			 </body>
			</html>
					
		`;
	},
	prof_info_HTML:function(prof_info){
		return `
		<!DOCTYPE html>
			  <head>
			   <meta charset="UTF-8">
			   <title>Sejong SW Lab</title>
			   <link rel="stylesheet" type="text/css" href="/stylesheets/style2.css">
			  </head>
			    <body>
			      <header>
			        <a href="index.html">
			          <div id="web_title">Sejong SW Lab</div>
			          <img id=logo src="http://min5155.dothome.co.kr/resource/logo.png">
			        </a>
			        <nav>
			          <ul class="nav-container">
			            <li class="nav-item"><a href="department.html">학과 별 조회</a></li>
			            <li class="nav-item"><a href="recommendation.html">연구실 추천</a></li>
			            <li class="nav-item"><a href="noticeboard.html">공고 게시판</a></li>
			          </ul>
			        </nav>
			      </header>
			      <section>
			        <hr>
			      </section>
			      <div>
			        |개인 정보 및 연구실 정보 수정
		        <form action="/prof_management" method="post">
			           Name: <input type="text" name="name"><br>
			           Email: <input type="text" name="email"><br>
			           URL: <input type="text" name="url"><br>
			           Office Hour: <input type="text" name="office_hour"><br>
			           Lab location: <input type="text" name="lab_location"><br>
			           Lab name: <input type="text" name="lab_name"><br>
			           Lab tel: <input type="text" name="lab_tel"><br>
			           <input type="submit">
			        </form>
			        <br>
			        |프로젝트 정보 수정
		        <br>
			        /* 준비중입니다. */
				      </div>
				          </body>
					    </html>
					    `},

	department_HTML:function(department,lab_list,ntboard_create){
		return `
		<!DOCTYPE html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>View by department</title>
  <link rel="stylesheet" type="text/css" href="/stylesheets/style2.css">
 </head>
 <body>
   <header>
     <a href="http://15.164.103.153:3000">
       <div id="web_title">Sejong SW Lab</div>
       <img id=logo src="http://min5155.dothome.co.kr/resource/logo.png">
     </a>
     <nav>
       <ul class="nav-container">
         <li class="nav-item"><a href="/sub_college">학과 별 조회</a></li>
         <li class="nav-item"><a href="/recommander">연구실 추천</a></li>
         <li class="nav-item"><a href="/noticeboard2">공고 게시판</a></li>
       </ul>
       <div class="search_box_title"></div>
       <div class="search_box"></div>
     </nav>
   </header>
   <section>
     <hr>
   </section>
   ${department}
   ${lab_list}
	${ntboard_create}
 </body>
</html>
		`
	},
	search_HTML:function(search){
		return `
		<!DOCTYPE html>
			<html>
			 <head>
			  <meta charset="UTF-8">
			  <title>View by department</title>
			  <link rel="stylesheet" type="text/css" href="/stylesheets/style2.css">
			 </head>
			 <body>
			   <header>
			     <a href="index.html">
			       <div id="web_title">Sejong SW Lab</div>
			       <img id=logo src="http://min5155.dothome.co.kr/resource/logo.png">
			     </a>
			     <nav>
			       <ul class="nav-container">
			         <li class="nav-item"><a href="department.html">학과 별 조회</a></li>
			         <li class="nav-item"><a href="recommendation.html">연구실 추천</a></li>
			         <li class="nav-item"><a href="noticeboard.html">공고 게시판</a></li>
			       </ul>
			       <div class="search_box_title"></div>
			       <div class="search_box"></div>
			     </nav>
			   </header>
			   <section>
			   <hr>
			   </section>
			   ${search}
		 </body>
			</html>
			`},

	/* recommander */
	recommander_HTML:function(params){
		return `
		<!DOCTYPE html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>View by department</title>
  <link rel="stylesheet" type="text/css" href="/stylesheets/style2.css">
 </head>
 <body>
   <header>
     <a href="http://15.164.103.153:3000">
       <div id="web_title">Sejong SW Lab</div>
       <img id=logo src="http://min5155.dothome.co.kr/resource/logo.png">
     </a>
     <nav>
       <ul class="nav-container">
         <li class="nav-item"><a href="/sub_college">학과 별 조회</a></li>
         <li class="nav-item"><a href="/recommander">연구실 추천</a></li>
         <li class="nav-item"><a href="/noticeboard2">공고 게시판</a></li>
       </ul>
       <div class="search_box_title"></div>
       <div class="search_box"></div>
     </nav>
   </header>
   <section>
     <hr>
   </section>

   <nav>
   </nav>
   ${params}

 </body>
</html>
		`
	},

	/*로그인 후 관리자 페이지*/
	HTML:function(list,field,notice,free,college_create,ntboard_create,frboard_create){
		          return `
		          <!DOCTYPE html>
			    <html>

			    <head>
			      <meta charset="UTF-8">
			      <title>Sejong Lab Web</title>
			      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

			      <!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" defer></script>-->
			      <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css"/>
			      <link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
			      <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
			      <script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.min.js"></script>

			    </head>

			    <body >

			      <header id="page_title" >
			        <!--title-->

			        <a href="http://localhost:3000">
			     <div id="web_title">Sejong Lab Web</div>
			   <img src="http://min5155.dothome.co.kr/resource/logo.png"></a>
			    <button class="loginBut" onclick="window.location='/logout';">로그아웃</button>
			<button class="joinBut" onclick="window.location='/management';">회원관리</button>
			      </header>

			      <nav id="mainNav">
			        <div class="subheading" >| 단과대학 리스트 </div>
			            ${list}
		    		 <button class = "updateBut" onclick="window.location='/college_create';">생성</button>
		 		<button class = "updateBut" onclick ="window.location='/college_delete';">삭제</button>	
			    
			    ${college_create} 
			      </nav>
			    <nav id="field">
						<div class="subheading" >| 관심 분야 </div>
						${field}
			      </nav>
			      <article id="notice_board">
			        <div class="subheading" >| 공고 게시판  </div>
			    	<button class = "updateBut" onclick="window.location='/noticeboard_create';">생성</button>
			    	<button class = "updateBut" onclick="window.location='/noticeboard_delete';">삭제</button>
				${notice}
		    		${ntboard_create}
			      </article>

			      <article id="free_board">
			        <div class="subheading" >| 자유게시판 </div>
                                <button class = "updateBut" onclick="window.location='/freeboard_create';">생성</button>
                                <button class = "updateBut" onclick="window.location='/freeboard_delete';">삭제</button>

				${free}
		    		${frboard_create}
			      </article>

			     

			    </body>

			    </html>
			          `;
		        },
	/*학과 별 lab 페이지*/
	HTML2:function(lab){
		return `
		<!DOCTYPE html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>View by department</title>
  <link rel="stylesheet" type="text/css" href="/stylesheet/style2.css">
 </head>
 <body>
   <header>
     <a href="index.html">
       <div id="web_title">Sejong SW Lab</div>
       <img id=logo src="http://min5155.dothome.co.kr/resource/logo.png">
     </a>
     <nav>
       <ul class="nav-container">
         <li class="nav-item"><a href="department.html">학과 별 조회</a></li>
         <li class="nav-item"><a href="recommendation.html">연구실 추천</a></li>
         <li class="nav-item"><a href="noticeboard.html">공고 게시판</a></li>
       </ul>
       <div class="search_box_title"></div>
       <div class="search_box"></div>
     </nav>
   </header>
   <section>
     <hr>
   </section>
 </body>
</html>
		`;
	},
	/*일반 사용자 마이페이지*/
	HTML3:function(my_info){
		return `
		<!DOCTYPE html>
			<html>
			  <head>
			    <meta charset="UTF-8">
			    <title>Sejong Lab Web</title>
			    <link rel="stylesheet" type="text/css" href="/stylesheets/style2.css">
			  </head>
			  <body>
			    <header id="page_title" >
			      <a href="http://localhost:3000">
			      <div id="web_title">Sejong Lab Web</div>
			        <img src="http://min5155.dothome.co.kr/resource/logo.png">
			      </a>
			    </header>
			    <div>
			      ${my_info}
			
		    </div>
			  </body>
			</html>

		`;
	},
	/*관리자 회원관리 페이지*/
	HTML4:function(users_info){
		  return `
		  <!DOCTYPE html>
			  <html>
			    <head>
			      <meta charset="UTF-8">
			      <title>Sejong Lab Web</title>
			      <link rel="stylesheet" type="text/css" href="/stylesheets/style2.css">
			    </head>
			    <body>
			      <header id="page_title" >
			        <a href="http://localhost:3000">
			          <div id="web_title">Sejong Lab Web</div>
			          <img src="http://min5155.dothome.co.kr/resource/logo.png">
			        </a>
			      </header>
			      <div>
			        ${users_info}
		      </div>
			    </body>
			  </html>
			  `;
	},
	/*로그인 후 일반 사용자 페이지 */
	user_HTML:function(list,field,notice,free,frboard_create){
	return `
	<!DOCTYPE html>
	  <html>
	  <head>
	    <meta charset="UTF-8">
	    <title>Sejong Lab Web</title>
	    <link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
	  </head>
	  <body>
	    <header id="page_title" >
	      <a href="http://localhost:3000">
	        <div id="web_title">Sejong Lab Web</div>
	        <img src="http://min5155.dothome.co.kr/resource/logo.png">
	      </a>
	      <button class="loginBut" onclick="window.location='/logout';">로그아웃</button>
	      <button class="joinBut" onclick="window.location='/mypage';">마이페이지</button>
	    </header>
	    <nav id="mainNav">
	      <div class="subheading" >| 단과대학 리스트 </div>
	          ${list}
	    </nav>
	    <nav id="field">
		  <div class="subheading" >| 관심 분야 </div>
		  ${field}
		</nav>
		<article id="notice_board">
	    <div class="subheading" >| 공고 게시판  </div>
	      ${notice}
	    </article>
	    <article id="free_board">
	      <div class="subheading" >| 자유게시판 </div>
		<button class = "updateBut" onclick="window.location='/freeboard_create';">생성</button>
			                                <button class = "updateBut" onclick="window.location='/freeboard_delete';">삭제</button>

	        ${free}
	        ${frboard_create}
	    </article>
	  </body>
	  </html>
	`;
	},
	HTML_post:function(post){
		return `
		<!DOCTYPE html>
		<html>
		  <head>
			<meta charset="UTF-8">
			<title>Sejong Lab Web</title>
			<link rel="stylesheet" type="text/css" href="/stylesheets/style2.css">
		  </head>
		  <body>
			<header id="page_title" >
			  <a href="http://localhost:3000">
			  <div id="web_title">Sejong Lab Web</div>
				<img src="http://min5155.dothome.co.kr/resource/logo.png">
			  </a>
			</header>
			<div>
			<table>
			  <th>제목</th> <tr><td> ${post[0].ntboard_title}</td></tr>
			  <th>내용</th> <tr><th>${post[0].ntboard_contents}</th></tr>
			  <th>작성일</th> <tr> <th>${post[0].ntboard_issuedate}</th></tr>
			</table>
			</div>
		  </body>
		</html>
		
		`
	},
	HTML_post2:function(post){
		return `
		<!DOCTYPE html>
			<html>
				<head>
					<meta charset="UTF-8">
					<title>Sejong Lab Web</title>
					<link rel="stylesheet" type="text/css" href="/stylesheets/style2.css">
				</head>
				<body>
					<header id="page_title" >
						<a href="http://localhost:3000">
							<div id="web_title">Sejong Lab Web</div>
							<img src="http://min5155.dothome.co.kr/resource/logo.png">
						</a>
					</header>
					<div>
						<table>
							<th>제목</th><tr> <th> ${post[0].frboard_title}</th></tr>
							<th>내용</th> <tr><th>${post[0].frboard_contents}</th></tr>
							<th>작성일</th> <tr><th>${post[0].frboard_issuedate}</th></tr>
						</table>
					</div>
				</body>
			</html>
		`
	},

	list:function(college_list){
		var list = '<ul>';
		var i = 0;
		while(i < college_list.length){
			if(i===7){
				list = list + `<button onclick="window.location='/college?id=${college_list[i].college_id}';">${college_list[i].college_name}</button>`;
			}
			else {
				list = list + `<button onclick="alert('준비중입니다');">${college_list[i].college_name}</button>`;
			}
			i = i + 1;
		}
		list = list+'</ul>';
		return list;
	},
	list2:function(department_list){
		 var list = '<ul>';
		var i = 0;
		while(i < department_list.length){
			if(i===5)
			{
				list = list + `<button onclick="alert('준비중입니다');">${department_list[i].dept_name}</button>`;

			} else {
				list = list + `<button onclick="window.location='/department?id=${department_list[i].dept_id}';">${department_list[i].dept_name}</button>`;
		
			}
			i=i+1;
		}
			
		
		list = list+'</ul>';
		return list;
	},
	list3:function(notice_list) {

			var list=`<table>` ;
			var i = 0;
			list = list + `<th>번호</th><th>제목</th><th>작성일</th>`;
			while( i <notice_list.length) {
				var num= i+1;
				list = list + `<tr>`;
				list = list+`<td>`+ num+`</td>` +'<td><a href="'+ `/noticeboard?id=`+`${notice_list[i].ntboard_id}`+'">' 
				+`${notice_list[i].ntboard_title}`+`</a></td>`+`<td>`+`${notice_list[i].ntboard_issuedate}`+ `</td>`;
				list = list + `</tr>`; 
					i=i+1;
			}
			list = list+`</table>`;
		    return list;
		
	},
	list4:function(free_list){

		var list=`<table>` ;
		var i = 0;
		list = list + `<th>번호</th><th>제목</th><th>작성일</th>`;
		while( i <free_list.length) {
			var num= i+1;
			list = list + `<tr>`;
			list = list+`<td>`+ num+`</td>` +'<td><a href="'+ `http://15.164.103.153:3000/freeboard?id=`+`${free_list[i].frboard_id}`+'">' 
			+`${free_list[i].frboard_title}`+`</a></td>`+`<td>`+`${free_list[i].frboard_issuedate}`+ `</td>`;
			list = list + `</tr>`; 
				i=i+1;
		}
		list = list+`</table>`;
		return list;
	},
	list5:function(lab_list) {
		
		var list=`<table>` ;
		var i = 0;
		list = list + `<th>번호</th><th>학과</th><th>연구실 이름</th><th>교수명</th><th>교수 이메일</th><th>연구실 위치</th><th>연구실 연락처</th>`;
		while( i <lab_list.length) {
			var num= i+1;
			list = list + `<tr>`;
			list = list+`<td>`+ num+`</td>`+`<td>`+`${lab_list[i].dept_name}` +'<td><a href="'+ `${lab_list[i].professor_url}`+'">' 
			+`${lab_list[i].lab_name}`+`</a></td>`+`<td>`+`${lab_list[i].professor_name}`+ `</td>`+`<td>`+`${lab_list[i].professor_email}`+ `</td>`
			+`<td>`+`${lab_list[i].lab_location}`+ `</td>` +`<td>`+`${lab_list[i].lab_tel}`+ `</td>`;
			list = list + `</tr>`; 
				i=i+1;
		}

		list = list+`</table>`;
		return list;

	},
	search_list:function(lab_list) {

		                 var list=`<table>` ;
		                 var i = 0;
		                 list = list + `<th>번호</th><th>연구실 이름</th><th>교수명</th><th>교수 이메일</th><th>연구실 >위치</th><th>연구실 연락처</th>`;
		                 while( i <lab_list.length) {
					                         var num= i+1;
					                         list = list + `<tr>`;
					                         list = list+`<td>`+ num+`</td>` +'<td><a href="'+ `${lab_list[i].professor_url}`+'">'
					                         +`${lab_list[i].lab_name}`+`</a></td>`+`<td>`+`${lab_list[i].professor_name}`+ `</td>`+`<td>`+`${lab_list[i].professor_email}`+ `</td>`
					                         +`<td>`+`${lab_list[i].lab_location}`+ `</td>` +`<td>`+`${lab_list[i].lab_tel}`+ `</td>`;
					                         list = list + `</tr>`;
					                                 i=i+1;
					                 }

		                 list = list+`</table>`;
		                 return list;

		         },

	list6:function(users_list){
    var list = '<table>';
    var i=1;
	
	
	list = list + `<th>번호</th><th>회원 성명</th><th>회원 닉네임</th>`;
    while(i<users_list.length){
	    list = list +'<tr>';
      list = list +'<td>'+i+'</td>' +'<td>'+`${users_list[i].name}`+'</td><td>'+`${users_list[i].nickname}`+'</td>';
      list=list+'</tr>';
	    i=i+1;
    }
    list = list+'</table>';
    return list;
  },
  list7:function(field_list){
	var list =  '';
	var i=0;
	   list = list + `<form action="/search_field_process">`;
	while(i<field_list.length){
	  list = list + `<label class = "container">` + `${field_list[i].field_name}` + `<input name="id"  value = "` + `${field_list[i].field_id}`+ `" type="checkbox" >`+`<span class="checkmark"></label><br />` ;
	  i = i + 1 ;
	}
	list = list +  `<input class = "updateBut" type = "submit" >
		   </form>`;
	return list;
	},
 
	list8:function(lab_list){
	
		var list=`<table>` ;
		var i = 0;
		list = list + `<th>번호</th><th>분야</th><th>연구실 이름</th><th>교수명</th>`;
		while( i <lab_list.length) {
			var num= i+1;
			list = list + `<tr>`;
			list = list+`<td>`+ num+`</td>`+`<td>`+`${lab_list[i].field_name}` +'<td><a href="'+ `${lab_list[i].professor_url}`+'">' +`${lab_list[i].lab_name}`+`</a></td>`+`<td>`+`${lab_list[i].professor_name}`+ `</td>`;
			list = list + `</tr>`; 
				i=i+1;
		}

	list = list+`</table>`;
	return list;
	
	},

	recommander_list:function(lab_list){
		var list=`<table>` ;
		var i = 0;
		list = list + `<th>번호</th><th>연구실 이름</th><th>교수명</th><th>연구실 위치</th><th>연구실 연락처</th>`;
		while( i <lab_list.length) {
			var num= i+1;
			list = list + `<tr>`;
			list = list+`<td>`+ num + `</td>` +
						'<td><a href="'+ `${lab_list[i].professor_url}`+'">' +`${lab_list[i].lab_name}`+`</a></td>`+
						`<td>`+`${lab_list[i].professor_name}`+ `</td>` +
						`<td>` +`${lab_list[i].lab_location}` + `</td>` + 
						`<td>` +`${lab_list[i].lab_tel}` + `</td>`;
			list = list + `</tr>`; 
				i=i+1;
		}

	list = list+`</table>`;
	return list;
	
	},
	
	noticeboard_list:function(post){
		var list=`<table>
		<th>제목</th> <tr><td> ${post[0].ntboard_title}</td></tr>
		<th>내용</th> <tr><th>${post[0].ntboard_contents}</th></tr>
		<th>작성일</th> <tr> <th>${post[0].ntboard_issuedate}</th></tr>
	  </table>`
	
	return list;
	
	}
	
}



