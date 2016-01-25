Open Onderwijs API and Learning Analytics
======

This project in an attempt to extend the [Open Educational API] (https://www.openonderwijsapi.nl/) (Open Onderwijs API) with learning analytics based on [xAPI statements] (https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md).


Learning Analytics

Learning Record Store 
Learning Record Warehouse


Start editing api definitions: swagger project edit

Start API: node app.js

API documentation can be viewed and tried at http://127.0.0.1:10010/docs/
Live editing of API definitions van be done in the browser at http://127.0.0.1:59026/#/


#### Requirements
* node
* npm

#### Run

* npm install -g swagger
* swagger project start


Although not necessary you can modify API definitions in a convenient way:

* swagger project edit

## Standard recipes


## OpenLRS
OpenLRS is a secure, standards-based, standalone Learning Record Store. OpenLRS was built to fill the need for a high i/o storage mechanism for an open learning analytics environment.
* [http://apereo-learning-analytics-initiative.github.io/OpenLRS](http://apereo-learning-analytics-initiative.github.io/OpenLRS) (project page)
* [OpenLRS](https://github.com/Apereo-Learning-Analytics-Initiative/OpenLRS) (github repo)

#### Requirements
* JDK 7+
* Maven 3+

#### Run (in place for development purposes)
* mvn clean package spring-boot:run

This starts OpenLRS on port 8080 using an in-memory datastore. The LRS is accessible at [http://127.0.0.1:8080] (http://127.0.0.1:8080) but has no gui.
Note the in-memory database lacks some functionality, filtering doesn't work for instance. Please refer to the OpenLRS documentation to switch to permanent storage.

## JMeter
Apache JMeter is designed to load test functional behavior and measure performance. In this project it is used to provision our learning record store (locally running openLRS instance) to be able to query it via
the Open Educational API.


#### Requirements
* JDK 7+

#### Run
Download [Apache JMeter](http://jmeter.apache.org/), extract the archive and run:

* cd bin
* ./jmeter.sh

#### Provisioning the LRS

In the GUI click the 'Open' icon. In the dialog navigate to the directory you extracted this project in. From here navigate to subdirectory 
'api/resources/data', select file 'lrs.jmx' and click 'Open'. Now the script for provisioning our openLRS instance is loaded. Press the 'start' icon 
at the top of the screen to start provisioning. Now generated xAPI statements are loaded into our LRS. Collapse the 'Statements' section and select 
'Summary Report' to get an overview of the run. On the same level 'View Results Tree' shows individual requests and responses - xAPI statements - to populate the LRS.

Credits go to Alan Berg for his work on [LRS load testing scrips](https://github.com/Apereo-Learning-Analytics-Initiative/LRSLoadTest).
Note the generated statements consist of combinations of verbs, actors, objects/activities and do not necessary make sense.


## Tying it together

Now that we have our locally running LRS filled with sample data, we can start (if not already running) our open educational api:
* node app.js

The open educational API acts as a facade in front of the LRS. We can access it via the Swagger UI interface at http://127.0.0.1:10010/docs/ and fire requests.


##  Discussions and suggestions

In general responses from the evolving open educational API contain a 'meta' and a 'data' part in their body. If we would apply this pattern and wrap responses from a LRS it would
break the xAPI specification. We should question ourselves if this is desirable.

Endpoints '/verbs' and '/recipes' do not exist in the xAPI specification. However it can be useful to get an overview of verbs and recipes used at an institution to get some sort of consistency in the statements which are defined and generated. 
"Define and document the verbs you use in your statements. This documentation is the beginning of a controlled vocabulary that will help to ensure your organization uses verbs and statements consistently in future xAPI projects. If your organization has been working with xAPI for a while, make sure you follow the verb usage standards established in previous projects."
[Source](http://www.learningsolutionsmag.com/articles/1526/five-things-a-web-developer-needs-to-know-about-the-xapi).

Timestamps used are in '2016-01-19T14:06:12Z' format (ISO 8601 UTC/Zulu)

In this PoC setup the open educational api proxies requests to the LRS backend and uses basic auth to connect to it. The open eductionel API uses oauth for authorization. 
Personalized queries ('my' statements) are possible by identifying the user based on the token being used, and query the LRS with agent filtering.
For example: https://lrs/xAPI/statements?agent={"objectType": "Agent", "name": "Darlene Snyder", "mbox": "mailto:darlene.snyder95@example.com"}

Apart from exposing learning activities from a Learning Record Store, it could be wise to opt for a Learning Record Warehouse. Such a data warehouse could analyse the learning record store based on predictive models and can provide convenience methods for students and staff.
Endpoints such as '/studyprogress', '/risk' or '/intervention' could expose data about learning activities on a meta level.

The focus in this exploration has been on the open educational API as a gateway in front of backend systems such as a LRS. But the open educational API and the endusers interacting with it could also be treated 
as learning activities. The open educational API could internally generate xAPI statements and fire them when a student retrieves his/her schedule or marks by calling open educational api endpoints for instance.


## xAPI swagger
The xAPI specification is already defined in swagger it seems. The [xAPI-swagger repo](https://github.com/TryxAPI/xapi-swagger) hosts a yaml file which can be loaded
into Swagger UI so you can explore it. Here is the [visualization of xAPI specification](http://editor.swagger.io/#/?import=https://raw.githubusercontent.com/TryxAPI/xapi-swagger/master/xapi-swagger.yaml).
