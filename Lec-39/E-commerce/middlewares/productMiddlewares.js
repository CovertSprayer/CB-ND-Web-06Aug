
module.exports.isLoggedIn = (req, res, next)=>{

    if(req.xhr && !req.isAuthenticated()){
        return res.status(500).json({
            msg:'Plz Login First'
        })
    }

    else if(!req.isAuthenticated()){
        req.flash('error', 'Plz Login First!!');
        return res.redirect('/login');
    }
    next();
}

module.exports.isSeller = (req, res, next) => {
    console.log(req.user.role)
    if(req.user.role === 'buyer'){
        req.flash('error', 'Sorry! You are not authorized!');
        return res.redirect('back');
    }
    next();
}