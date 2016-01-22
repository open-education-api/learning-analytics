'use strict';

var request = require('request');

module.exports = {
    listStatements: listStatements,
    getStatementById: getStatementById,
    createStatement: createStatement
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

function createStatement(req, res) {
    var statement = req.swagger.params.body.value;

    request.post({url: 'http://localhost:8080/xAPI/statements', headers: headers, body:statement}).pipe(res);

    /*
    Example statement:

    {
        "actor": {
        "mbox": "mailto:darlene.snyder95@example.com",
            "name": "Darlene Snyder",
            "objectType": "Agent"
    },
        "verb": {
        "id": "https://w3id.org/xapi/adl/verbs/attempted",
            "display": {
            "en-US": "attempted"
        }
    },
        "object": {
        "id": "https://w3id.org/xapi/adl/activities/course",
            "objectType": "Activity",
            "definition": {
            "name": {
                "en-US": "course"
            },
            "description": {
                "en-US": "course"
            }
        }
    }
    }
    */

}