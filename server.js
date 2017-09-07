var express=require('express');
var mongojs=require('mongojs');
var bodyParser=require('body-parser');

var dbDoctorDetails=mongojs('doctordetails',['doctordetails']);
var dbNurseDetails=mongojs('nursedetails',['nursedetails']);
var dbPatientDetails=mongojs('patientdetails',['patientdetails']);
var dbAdminbDetails=mongojs('admindetails',['admindetails']);

var app=express();
var server=require('http').Server(app);
server.listen(3007);
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
console.log("Hello World from Server");

app.post('/doctordetails/register',function(req,res){
	console.log('Doctor Details -> Register')
	console.log(req.body);
	dbDoctorDetails.doctordetails.insert(req.body,function(err,doc){
		res.json(doc);
		// console.log(doc);
	});
})
app.post('/nursedetails/register',function(req,res){
	console.log('Nurse Details -> Register')
	console.log(req.body);
	dbNurseDetails.nursedetails.insert(req.body,function(err,doc){
		res.json(doc);
		// console.log(doc);
	});
})
app.post('/patientdetails/register',function(req,res){
	console.log('Patient Details -> Register')
	console.log(req.body);
	dbPatientDetails.patientdetails.insert(req.body,function(err,doc){
		res.json(doc);
		// console.log(doc);
	});
})
app.post('/admindetails/register',function(req,res){
	console.log('Admin Details -> Register')
	console.log(req.body);
	dbAdminDetails.admindetails.insert(req.body,function(err,doc){
		res.json(doc);
		// console.log(doc);
	});
})

app.post('/doctordetails/login', function(req,res){
	console.log('Doctor Details -> Login')
	console.log(req.body);
	dbDoctorDetails.doctordetails.find(req.body,function(err, doc){
		console.log(doc[0]);
		console.log(doc[0].user_name);
		var AuthenticationStatus = {
			user_name : doc[0].user_name,
		};
		console.log(AuthenticationStatus);
		res.json(AuthenticationStatus);
	});
})

app.post('/nursedetails/login', function(req,res){
	console.log('Nurse Details -> Login')
	console.log(req.body);
	dbNurseDetails.nursedetails.find(req.body,function(err, doc){
		console.log(doc[0]);
		console.log(doc[0].user_name);
		var AuthenticationStatus = {
			user_name : doc[0].user_name,
		};
		console.log(AuthenticationStatus);
		res.json(AuthenticationStatus);
	});
})

app.post('/patientdetails/login', function(req,res){
	console.log('Patient Details -> Login')
	console.log(req.body);
	dbPatientDetails.patientdetails.find(req.body,function(err, doc){
		console.log(doc[0]);
		console.log(doc[0].user_name);
		var AuthenticationStatus = {
			user_name : doc[0].user_name,
		};
		console.log(AuthenticationStatus);
		res.json(AuthenticationStatus);
	});
})

app.post('/admindetails/login', function(req,res){
	console.log('Admin Details -> Login')
	console.log(req.body);
	dbAdminDetails.admindetails.find(req.body,function(err, doc){
		console.log(doc[0]);
		console.log(doc[0].user_name);
		var AuthenticationStatus = {
			user_name : doc[0].user_name,
		};
		console.log("Heyya")
		console.log(AuthenticationStatus);
		res.json(AuthenticationStatus);
	});
})

app.post('/doctordetails/getDetails', function(req, res){
	console.log('Get Details -> Doctor');
	console.log(req.body);
	dbDoctorDetails.doctordetails.find(req.body, function(err,doc){
		delete doc[0].password;
		console.log(doc[0]);
		res.json(doc[0])
	});
})

app.post('/nursedetails/getDetails', function(req, res){
	console.log('Get Details -> Nurse');
	console.log(req.body);
	dbNurseDetails.nursedetails.find(req.body, function(err,doc){
		delete doc[0].password;
		console.log(doc[0]);
		res.json(doc[0])
	});
})

app.post('/patientdetails/getDetails', function(req, res){
	console.log('Get Details -> Patient');
	console.log(req.body);
	dbPatientDetails.patientdetails.find(req.body, function(err,doc){
		delete doc[0].password;
		console.log(doc[0]);
		res.json(doc[0])
	});
})
app.post('/admindetails/getDetails', function(req, res){
	console.log('Get Details -> Admin');
	console.log(req.body);
	dbAdminDetails.admindetails.find(req.body, function(err,doc){
		delete doc[0].password;
		console.log(doc[0]);
		res.json(doc[0])
	});
})

app.post('/doctordetails/updateDetails', function(req, res){
	console.log('Update Details -> Doctor');
	console.log(req.body);
	dbDoctorDetails.doctordetails.update({'user_name':req.body.user_name}, {$set:req.body}, function(err, doc){
		res.json(doc);
	})	
})
app.post('/nursedetails/updateDetails', function(req, res){
	console.log('Update Details -> Nurse');
	console.log(req.body);
	dbNurseDetails.nursedetails.update({'user_name':req.body.user_name}, {$set:req.body}, function(err, doc){
		res.json(doc);
	})	
})
app.post('/patientdetails/updateDetails', function(req, res){
	console.log('Update Details -> Patient');
	console.log(req.body);
	dbPatientDetails.patientdetails.update({'user_name':req.body.user_name}, {$set:req.body}, function(err, doc){
		res.json(doc);
	})	
})
app.post('/admindetails/updateDetails', function(req, res){
	console.log('Update Details -> admin');
	console.log(req.body);
	dbAdminDetails.admindetails.update({'user_name':req.body.user_name}, {$set:req.body}, function(err, doc){
		res.json(doc);
	})	
})



app.listen(3008);
console.log("server is running on port 3008");