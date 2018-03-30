exports.createSession = function(req, res){
  console.log('Inside create session', req, res)
  if(req.sessions.views){
    req.session.views++;
    console.log('within session', req.sessions);
    res.redirect('/articles');
    res.send();
  } else {
    req.session.views = 1;
    req.session.token = req.body.token;
    console.log('this is the token:', req.body.token);
    res.redirect('/articles');
    res.send();
  }
}

// session = function(req, res) {
//   if(req.session.views){
//     req.session.views++
//     console.log('within session, req.session: ', req.session);
//     res.setHeader('Content-type', 'text/html')
//     res.end()
//   } else {
//     req.session.views = 1;
//     req.session.userId = req.body.username;
//     console.log('this is un: ', req.body.username);
//     console.log('this is the session ID: ', req.sessionID);
//     console.log('within else of session, req.session: ', req.session);
//     res.end()
//   }
// }