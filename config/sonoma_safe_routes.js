


/*
|--------------------------------------------------------------------------
| Default router
|--------------------------------------------------------------------------
|
| Default router is used to define any routes that don't belong to a
| controller. Also used as a parent container for the other routers.
|
*/
const router = require('koa-router')({
    prefix: '/api/v1'
});

router.get('/', function (ctx) {
    console.log('router.get(/)');
    return ctx.body = 'What is up?';
});

/*
|--------------------------------------------------------------------------
| login router
|--------------------------------------------------------------------------
|
| Description
|
*/


const LoginController = new (require('../app/Controllers/LoginController.js'))();
const loginRouter = require('koa-router')({
    prefix: '/login'
});
loginRouter.get('/:email', LoginController.authorizeUser, (err) => console.log("routers.js: loginRouter error: ", err));
//loginRouter.put('/save/:email', LoginController.addUser, (err) => console.log("routers.js: loginRouter error: ", err))
//loginRouter.put('/:email', LoginController.deleteMarkers, (err) => console.log("routers.js: loginRouter error: ", err));
loginRouter.put('/:email/:marker1lat/:marker1lng/:marker2lat/:marker2lng/:marker3lat/:marker3lng', LoginController.storeMarkers, (err) => console.log("routers.js: loginRouter error: ", err));
//loginRouter.put('/remove/:email', LoginController.removeUser, (err) => console.log("routers.js: loginRouter error: ", err))
const DataController = new (require('../app/Controllers/DataController.js'))();
const dataRouter = require('koa-router')({
    prefix: '/data'
});
dataRouter.get('/:station', DataController.fetchData, (err) => console.log("routers.js: dataRouter error: ", err))

/**
 * Register all of the controllers into the default controller.
 */
router.use(
    '',
    loginRouter.routes(),
    dataRouter.routes()
);

module.exports = (koaServer) => {
    koaServer.use(router.routes())
}

module.exports = function (app) {
    app.use(router.routes());
    app.use(router.allowedMethods());
};
