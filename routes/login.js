module.exports = function(app, passport){
	app.get('/AdminLogin', function(req, res){
		/*console.log(req.flash('loginMessage')[0]);
		var message = req.flash('loginMessage')[0];
		console.log(message); */
		res.render('adminlogin', {
			title: "Admin Login",
			loginMessage: req.flash('loginMessage')[0]
		});
	});

	app.get('/AdminRegistration', function(req,res){
		res.render('registeradmin', {
			title: "Admin Registration",
			signUpMessage: req.flash('signUpMessage')[0]
		});
	});

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

	app.post('/AdminAuth', passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/AdminLogin',
		failureFlash: true
	}));

	app.post('/NewAdminRegistration', passport.authenticate('local-signup', {
		successRedirect: '/news',
		failureRedirect: '/AdminRegistration', 
		failureFlash: true
	}));
}
