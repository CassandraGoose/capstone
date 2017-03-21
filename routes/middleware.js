function ensureLogginIn(req, res, next) {
  console.log(req.signedCookies);
  //is it people_id or person_id... i just dunno
  if(req.signedCookies.person_id) {
    next()
  } else {
    //can i do it like this???? the redirect before the error and such
    res.status(401).redirect('/')
    next(new Error('Un-AUTHORIZED'))
  }
}

function allowAccess(req, res, next) {
  if(req.signedCookies.person_id == req.params.id) {
    next()
  } else {
    //can i do it like this???? the redirect before the error and such
    res.status(401).redirect('/')
    next(new Error('Un-Authorized'))
  }
}

module.exports = {
  ensureLogginIn,
  allowAccess
}
