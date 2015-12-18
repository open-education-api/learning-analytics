'use strict';

var fs = require('fs');
var path = require('path');


module.exports = {
    listVerbs: listVerbs
};

function listVerbs(req, res) {

    /*
     var fileName = '../resources/verbs.json';

     fs.readFile(path.normalize(__dirname + '/' + fileName), 'utf8', function (err, data) {
     if (err) {
     return console.log(err);
     }

     res.header('Content-Type', 'application/javascript');
     console.log(data);
     //res.send(data);
     res.json(JSON.stringify(data));
     //res.json(data);

     });
     */

    var data = [
        {
            "label": "abandoned",
            "description": "Indicates the activity provider has determined that the session was abnormally terminated either by an actor or due to a system failure.",
            "id": "https://w3id.org/xapi/adl/verbs/abandoned",
            "display": {
                "en_US": "abandoned",
                "nl_NL": ""
            }
        },
        {
            "label": "answered",
            "description": "Indicates the actor replied to a question, where the object is generally an activity representing the question. The text of the answer will often be included in the response inside result.",
            "id": "https://w3id.org/xapi/adl/verbs/answered",
            "display": {
                "en_US": "answered",
                "nl_NL": ""
            }
        },
        {
            "label": "asked",
            "description": "Indicates an inquiry by an actor with the expectation of a response or answer to a question.",
            "id": "https://w3id.org/xapi/adl/verbs/asked",
            "display": {
                "en_US": "asked",
                "nl_NL": ""
            }
        },
        {
            "label": "attempted",
            "description": "Indicates the actor made an effort to access the object. An attempt statement without additional activities could be considered incomplete in some cases.",
            "id": "https://w3id.org/xapi/adl/verbs/attempted",
            "display": {
                "en_US": "attempted",
                "nl_NL": ""
            }
        },
        {
            "label": "attended",
            "description": "Indicates the actor was present at a virtual or physical event or activity.",
            "id": "https://w3id.org/xapi/adl/verbs/attended",
            "display": {
                "en_US": "attended",
                "nl_NL": ""
            }
        },
        {
            "label": "commented",
            "description": "Indicates the actor provided digital or written annotations on or about an object.",
            "id": "https://w3id.org/xapi/adl/verbs/commented",
            "display": {
                "en_US": "commented",
                "nl_NL": ""
            }
        },
        {
            "label": "completed",
            "description": "Indicates the actor finished or concluded the activity normally.",
            "id": "https:\/\/w3id.org\/xapi\/adl\/verbs\/completed",
            "display": {
                "en_US": "completed",
                "nl_NL": ""
            }
        },
        {
            "label": "exited",
            "description": "Indicates the actor intentionally departed from the activity or object.",
            "id": "https://w3id.org/xapi/adl/verbs/exited",
            "display": {
                "en_US": "exited",
                "nl_NL": ""
            }
        },
        {
            "label": "experienced",
            "description": "Indicates the actor only encountered the object, and is applicable in situations where a specific achievement or completion is not required.",
            "id": "https://w3id.org/xapi/adl/verbs/experienced",
            "display": {
                "en_US": "experienced",
                "nl_NL": ""
            }
        },
        {
            "label": "failed",
            "description": "Indicates the actor did not successfully pass an activity to a level of predetermined satisfaction.",
            "id": "https://w3id.org/xapi/adl/verbs/failed",
            "display": {
                "en_US": "failed",
                "nl_NL": ""
            }
        },
        {
            "label": "imported",
            "description": "Indicates the actor introduced an object into a physical or virtual location.",
            "id": "https://w3id.org/xapi/adl/verbs/imported",
            "display": {
                "en_US": "imported",
                "nl_NL": ""
            }
        },
        {
            "label": "initialized",
            "description": "Indicates the activity provider has determined that the actor successfully started an activity.",
            "id": "https://w3id.org/xapi/adl/verbs/initialized",
            "display": {
                "en_US": "initialized",
                "nl_NL": ""
            }
        },
        {
            "label": "interacted",
            "description": "Indicates the actor engaged with a physical or virtual object.",
            "id": "https://w3id.org/xapi/adl/verbs/interacted",
            "display": {
                "en_US": "interacted",
                "nl_NL": ""
            }
        },
        {
            "label": "launched",
            "description": "Indicates the actor attempted to start an activity.",
            "id": "https://w3id.org/xapi/adl/verbs/launched",
            "display": {
                "en_US": "launched",
                "nl_NL": ""
            }
        },
        {
            "label": "logged-in",
            "description": "Indicates the actor gained access to a system or service by identifying and authenticating with the credentials provided by the actor.",
            "id": "https://w3id.org/xapi/adl/verbs/logged-in",
            "display": {
                "en_US": "logged-in",
                "nl_NL": ""
            }
        },
        {
            "label": "logged-out",
            "description": "Indicates the actor either lost or discontinued access to a system or service.",
            "id": "https://w3id.org/xapi/adl/verbs/logged-out",
            "display": {
                "en_US": "logged-out",
                "nl_NL": ""
            }
        },
        {
            "label": "mastered",
            "description": "Indicates the highest level of comprehension or competence the actor performed in an activity.",
            "id": "https://w3id.org/xapi/adl/verbs/mastered",
            "display": {
                "en_US": "mastered",
                "nl_NL": ""
            }
        },
        {
            "label": "passed",
            "description": "Indicates the actor successfully passed an activity to a level of predetermined satisfaction.",
            "id": "https://w3id.org/xapi/adl/verbs/passed",
            "display": {
                "en_US": "passed",
                "nl_NL": ""
            }
        },
        {
            "label": "preferred",
            "description": "Indicates the selected choices, favored options or settings of an actor in relation to an object or activity.",
            "id": "https://w3id.org/xapi/adl/verbs/preferred",
            "display": {
                "en_US": "preferred",
                "nl_NL": ""
            }
        },
        {
            "label": "progressed",
            "description": "Indicates a value of how much of an actor has advanced or moved through an activity.",
            "id": "https://w3id.org/xapi/adl/verbs/progressed",
            "display": {
                "en_US": "progressed",
                "nl_NL": ""
            }
        },
        {
            "label": "registered",
            "description": "Indicates the actor is officially enrolled or inducted in an activity.",
            "id": "https://w3id.org/xapi/adl/verbs/registered",
            "display": {
                "en_US": "registered",
                "nl_NL": ""
            }
        },
        {
            "label": "responded",
            "description": "Indicates an actor reacted or replied to an object.",
            "id": "https://w3id.org/xapi/adl/verbs/responded",
            "display": {
                "en_US": "responded",
                "nl_NL": ""
            }
        },
        {
            "label": "resumed",
            "description": "Indicates the application has determined that the actor continued or reopened a suspended attempt on an activity.",
            "id": "https://w3id.org/xapi/adl/verbs/resumed",
            "display": {
                "en_US": "resumed",
                "nl_NL": ""
            }
        },
        {
            "label": "satisfied",
            "description": "Indicates that the authority or activity provider determined the actor has fulfilled the criteria of the object or activity.",
            "id": "https://w3id.org/xapi/adl/verbs/satisfied",
            "display": {
                "en_US": "satisfied",
                "nl_NL": ""
            }
        },
        {
            "label": "scored",
            "description": "Indicates a numerical value related to an actor's performance on an activity.",
            "id": "https://w3id.org/xapi/adl/verbs/scored",
            "display": {
                "en_US": "scored",
                "nl_NL": ""
            }
        },
        {
            "label": "shared",
            "description": "Indicates the actor's intent to openly provide access to an object of common interest to other actors or groups.",
            "id": "https://w3id.org/xapi/adl/verbs/shared",
            "display": {
                "en_US": "shared",
                "nl_NL": ""
            }
        },
        {
            "label": "suspended",
            "description": "Indicates the status of a temporarily halted activity when an actor's intent is returning to the or object activity at a later time.",
            "id": "https://w3id.org/xapi/adl/verbs/suspended",
            "display": {
                "en_US": "suspended",
                "nl_NL": ""
            }
        },
        {
            "label": "terminated",
            "description": "Indicates that the actor successfully ended an activity.",
            "id": "https://w3id.org/xapi/adl/verbs/terminated",
            "display": {
                "en_US": "terminated",
                "nl_NL": ""
            }
        },
        {
            "label": "voided",
            "description": "A special reserved verb used by a LRS or application to mark a statement as invalid. See the xAPI specification for details on Voided statements.",
            "id": "https://w3id.org/xapi/adl/verbs/voided",
            "display": {
                "en_US": "voided",
                "nl_NL": ""
            }
        },
        {
            "label": "waived",
            "description": "Indicates that the learning activity requirements were met by means other than completing the activity. A waived statement is used to indicate that the activity may be skipped by the actor.",
            "id": "https://w3id.org/xapi/adl/verbs/waived",
            "display": {
                "en_US": "waived",
                "nl_NL": ""
            }
        }
    ];

    res.json(data);

}


