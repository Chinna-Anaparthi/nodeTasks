// let query = select users.*,roles.Name as roleName from [dbo].[Users] users
// inner join [dbo].[UserRole] roles on roles.Id = users.role
// where IdentityProviderId = @providerId and LoginId = @loginId

// try {
// var pool = await sql.connect();
// let dbResp = await pool.request()
// .input('providerId', identityProviders().INAPP)
// .input('loginId', req.body.userName)
// .query(query)
// console.log(dbResp.recordset)
// existingUser = dbResp.recordset
// if (existingUser.length > 0) {
// let password = req.body.password
// let passwordSalt = dbResp.recordset[0].PasswordSalt
// var iterations = 10000;
// console.log('salt', passwordSalt, iterations)
// var hash = crypto.pbkdf2Sync(password, passwordSalt, iterations, 64, 'sha512').toString('base64');
// console.log('hash', hash)
// let passwordHash = dbResp.recordset[0].PasswordHash
// if (hash == passwordHash) {
// var outputJson = {
// "displayName": dbResp.recordset[0].DisplayName,
// "userName": dbResp.recordset[0].LoginId,
// "userId": dbResp.recordset[0].Id,
// "email": dbResp.recordset[0].EmailId,
// "identityProviderId": dbResp.recordset[0].IdentityProviderId,
// "type": type,
// "lastLoggedIn": dbResp.recordset[0].LastLoggedInTimestampUTC,
// "role": dbResp.recordset[0].roleName,
// "roleId": dbResp.recordset[0].Role
// }
// // res.status(200).json(outputJson)
// } else {
// return res.status(401).json({ 'message': 'Incorrect username or password' })
// }