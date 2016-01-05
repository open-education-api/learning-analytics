'use strict';

var request = require('request');

module.exports = {
    listStatements: listStatements,
    getStatementById: getStatementById
};

var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + new Buffer("openlrs:openlrs").toString("base64"),
    'X-Experience-API-Version': '1.0.1'
};

function listStatements(req, res) {
    req.pipe(request.get({url: 'http://localhost:8080/xAPI/statements', headers: headers})).pipe(res);
}

function getStatementById(req, res) {
    var statementId = req.swagger.params.statementId.value;
    req.pipe(request.get({url: 'http://localhost:8080/xAPI/statements?statementId=' + statementId, headers: headers})).pipe(res);
}
