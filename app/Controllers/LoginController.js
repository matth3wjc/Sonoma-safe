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

    async storeMarker1(ctx) {
        return new Promise((resolve, reject) => {

            const users = ctx.request.body;

            if(typeof window !== 'undefined') {
                users.marker1lat = sessionStorage.getItem('marker1lat');
            }
            users.marker1lat = 10;
            users.marker1lng = 20;
            //users.marker1lat = sessionStorage.getItem('marker1lat');
            //console.log(sessionStorage.getItem('marker1lat'));
            console.log(users.marker1lat);

            let query = `UPDATE users SET marker1lat = ?, marker1lng = ? WHERE email = ?;`
            dbConnection.query(
                {
                    sql: query,
                    values: [users.marker1lat, users.marker1lng, ctx.params.email]
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

}

module.exports = LoginController;
