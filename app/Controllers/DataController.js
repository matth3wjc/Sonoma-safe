const dbConnection = require('../../database/mySQLconnect');
const setAccessToken = require('../../config/setAccessToken');


require('dotenv').config();

class DataController {
    async fetchData(ctx) {
        return new Promise((resolve, reject) => {

            //

            let query = "SELECT * FROM data WHERE station = ?";
            dbConnection.query(
                {
                    sql: query,
                    values: [ctx.params.station]
                }, (error, tuples) => {
                    if (error) {
                        console.log("Query error.", error);
                        return reject(`Query error. Error msg: error`);
                    }
                    if (tuples.length === 1) {  // Did we have a matching user record?
                        setAccessToken(ctx, tuples[0]);
                        console.log('from weatherDatabase. About to return ', tuples[0]);
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
            console.log('fetchData in DataController threw an exception. Reason...', err);
            ctx.status = 200;
            ctx.body = {
                status: "Failed",
                error: err,
                user: null
            };
        });

    }

    async fetchTemp(ctx) {
        return new Promise((resolve, reject) => {

            //

            let query = "SELECT tavg FROM data WHERE station = ?";
            dbConnection.query(
                {
                    sql: query,
                    values: [ctx.params.station]
                }, (error, tuples) => {
                    if (error) {
                        console.log("Query error.", error);
                        return reject(`Query error. Error msg: error`);
                    }
                    if (tuples.length === 1) {  // Did we have a matching user record?
                        setAccessToken(ctx, tuples[0]);
                        console.log('from weatherDatabase. About to return ', tuples[0]);
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
            console.log('fetchTemp in DataController threw an exception. Reason...', err);
            ctx.status = 200;
            ctx.body = {
                status: "Failed",
                error: err,
                user: null
            };
        });

    }

    async fetchStationNumbers(ctx) {
        return new Promise((resolve, reject) => {

            //

            let query = "SELECT station FROM data";
            dbConnection.query(
                {
                    sql: query
                }, (error, tuples) => {
                    if (error) {
                        console.log("Query error.", error);
                        return reject(`Query error. Error msg: error`);
                    }
                    if (tuples.length === 1) {  // Did we have a matching user record?
                        setAccessToken(ctx, tuples[0]);
                        console.log('from weatherDatabase. About to return ', tuples[0]);
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
            console.log('fetchStationNumbers in DataController threw an exception. Reason...', err);
            ctx.status = 200;
            ctx.body = {
                status: "Failed",
                error: err,
                user: null
            };
        });

    }
}

module.exports = DataController;
