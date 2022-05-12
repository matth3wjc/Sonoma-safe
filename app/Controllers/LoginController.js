const dbConnection = require('../../database/mySQLconnect');
const setAccessToken = require('../../config/setAccessToken');


require('dotenv').config();

class LoginController {
    constructor() {
        console.log('Constructor of LoginController is called.');
    }
    async authorizeUser(ctx) {
        return new Promise((resolve, reject) => {

	    // Right up here, you could inspect the provided user_id to
	    // make sure that it is, at the surface, a legitimate ID.
	    // For example, if user ids are suppose to be email addresses,
	    // you can at least make sure that user's input is consistent
	    // with the format of email addresses. 
	    
            let query = "SELECT * FROM users WHERE email = ?";
            dbConnection.query(
                {
                    sql: query,
                    values: [ctx.params.email]
                }, (error, tuples) => {
                    if (error) {
                        console.log("Query error.", error);
                        return reject(`Query error. Error msg: error`);
                    }
                    if (tuples.length === 1) {  // Did we have a matching user record?
                        setAccessToken(ctx, tuples[0]);
                        console.log('from studentRecord. About to return ', tuples[0]);
                        ctx.body = {
                            status: "OK",
                            user: tuples[0],
                        };
                    } else {
                        console.log('Not able to identify the user.');
			return reject('No such user.');
                    }
                    return resolve();
                }
            )
        }).catch(err => {
            console.log('authorize in LoginController threw an exception. Reason...', err);
	    ctx.status = 200;
            ctx.body = {
                status: "Failed",
                error: err,
                user: null
            };
        });

    }

    async storeMarkers(ctx) {
        return new Promise((resolve, reject) => {

            let query = `UPDATE users SET marker1lat = ?, marker1lng = ?, marker2lat = ?, marker2lng = ?, marker3lat = ?, marker3lng = ? WHERE email = ?;`
            dbConnection.query(
                {
                    sql: query,
                    values: [ctx.params.marker1lat, ctx.params.marker1lng, ctx.params.marker2lat, ctx.params.marker2lng, ctx.params.marker3lat, ctx.params.marker3lng, ctx.params.email]
                }, (error, tuples) => {
                    if (error) {
                        console.log("Query error.", error);
                        return reject(`Query error. Error msg: error`);
                    }
                    if (tuples.length === 1) {  // Did we have a matching user record?
                        setAccessToken(ctx, tuples[0]);
                        console.log('from studentRecord. About to return ', tuples[0]);
                        ctx.body = {
                            status: "OK",
                            user: tuples[0],
                        };
                    } else {
                        return reject();
                    }
                    return resolve();
                }
            )
        }).catch(err => {
            ctx.status = 200;
            ctx.body = {
                status: "Failed",
                error: err,
                user: null
            };
        });
    }

}

module.exports = LoginController;
