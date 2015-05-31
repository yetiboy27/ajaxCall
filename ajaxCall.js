// $.ajax({
// 	method : 'GET',
// 	url    : 'http://api.github.com/users/rserota',
// 	//data   : '',
// 	success: function(data){console.log(data)},
// 	error  : function(error){console.log(error)},  
// });

$.ajax({
	method : 'GET',
	url    : "https://api.github.com/users/rserota/repos?per_page=200",
	//data   : '',
	success: function(data){
		//console.log(data);
		var mostStarred = data[0]; 
		for (var i = 0; i < data.length; i++) {
			if (data[i].stargazers_count > mostStarred.stargazers_count) {
				mostStarred = data[i];
				
			}
		}
		
		$.ajax({
			url     : mostStarred.stargazers_url,
			//url     : "https://api.github.com/repos/rserota/wad/stargazers",
			success : function(data) {
				console.log(data[0].login);
			}
		})
	},
	error  : function(error){console.log(error)},  
});

