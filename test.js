var PythonShell = require('python-shell');

var options = {
	mode: 'json',

	pythonPath: '',
	
	pythonOptions: ['-u'],

	scriptPath: '',

	args: [1, 2, 3]
};

PythonShell.PythonShell.run('recommender.py', options, function(err, results) {

	if (err) throw err;

	console.log(results[0]);
});
