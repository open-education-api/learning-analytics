Open Onderwijs API and Learning Analytics
======

This project in an attempt to extend the [Open Educational API] (https://www.openonderwijsapi.nl/) (Open Onderwijs API) with learning analytics based on [xAPI statements] (https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md).


Learning Analytics

Learning Record Store 
Learning Record Warehouse


Start editing api definitions: swagger project edit

Start API: node app.js

API documentation can be viewed and tried at http://127.0.0.1:10010/docs/

#### Requirements
* node
* npm

#### Run

npm install

## Standard recipes


## OpenLRS
OpenLRS is a secure, standards-based, standalone Learning Record Store. OpenLRS was built to fill the need for a high i/o storage mechanism for an open learning analytics environment.

[OpenLRS](https://github.com/Apereo-Learning-Analytics-Initiative/OpenLRS)

(http://apereo-learning-analytics-initiative.github.io/OpenLRS/)


#### Requirements
* JDK 7+
* Maven 3+

#### Run (in place for development purposes)
* mvn clean package spring-boot:run

This starts OpenLRS on port 8080 using an in-memory datastore. The LRS is accessible at [http://127.0.0.1:8080] (http://127.0.0.1:8080) but has no gui.



## JMeter
Apache JMeter is designed to load test functional behavior and measure performance. In this project it is used to provision our learning record store (locally running openLRS instance) to be able to query it via
the Open Educational API.



#### Requirements
* JDK 7+

#### Run
Download [Apache JMeter] (http://jmeter.apache.org/), extract the archive and run:

* cd bin
* ./jmeter.sh

#### Provisioning the LRS
