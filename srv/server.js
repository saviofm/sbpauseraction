
"use strict";

const cds = require("@sap/cds");



cds.on("bootstrap", app => {
    app.use(
        [           
      
            (req, res, next) => {
                const { origin } = req.headers
                // standard request
                res.setHeader('Access-Control-Allow-Origin', '*');
                // preflight request
                if (origin  && req.method === 'OPTIONS')
                    return res.set('access-control-allow-methods', 'GET,HEAD,PUT,PATCH,POST,DELETE').end()
                next()
            },

        ]
    )
});

module.exports = cds.server;