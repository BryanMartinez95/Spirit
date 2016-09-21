+++
date = "2016-08-31T02:45:57-06:00"
draft = true
title = "Capstone"
image = "http://i.imgur.com/fpDU3DP.gif"
+++

<h1>Capstone - Recursive Delegation 2016</h1>

At my time at SAIT I spent a year working on a Capstone project. This capstone project was done with a group of 4 in which we were called Recursive Delegation. This Capstone serves as a milestone to show our growth at our time at SAIT. Our client was a researcher for the Applied Research and Innovation division at SAIT.

<h3>The Problem</h3>
Our clients issue was that he was spending too much time gathering data from different sources and spending too much time on report generation. An estimated 8-16 hours a week was spent gathering data and generating reports when the clients time could be spent much more effeciently.

<h3>Our Solution</h3>
Our Solution was to create a web-based application that automatically collects and centralizes all the clients data in a centralized location for visualization aswell as automatic report generation.
<h2>The Stack</h2>
<p>A requirement given to us by SAIT was that we must use java and mysql. Our team decided to take a step forwards and we decided to use other frameworks to aid in our development. This application can be seen as two seperate applications.</p>
<h3>Hibernate JPA</h3>
<p>We used "code first" to develop our database. By using Hibernate JPA and java entities, we were able to automatically build our database based on our entities written in java. No SQL required. There are ups and downs to this. Frameworks like this can be seen as bulkier and slower but it speeds up the development process quite a bit and can always be tweeked for performance later on. Hibernate JPA also serves as a quick and easy way for data access where most of our data access interfaces were merely a couple lines of code.</p>
<h3>Spring Boot</h3>
<p>We used Spring boot to create a RESTful webservice. What this means is that you can access the resources stored in the database by calling API's through URI's. Once data is requested, it will send back whatever was requested (if permissions permit) in a JSON format.</p>
<h3>Redis</h3>
We decided to use redis as another layer of security to handle CSRF. When a user logs in, they are cached in the redisDB and whenever a someone makes a request to the back end, the system first checks whether or not the user is authenticated with redis.
<h3>Angular</h3>
We decided on using Angular as our front end framework which has many benefits. Material design that came with Angular allowed for a very simplistic design which was unique, refreshing and simplistic. The front end makes HTTP requests to the back end and serves the information back usually in a grid format.
<h2>Front End</h2>

<h3>Main Page</h3>
<figure>
    <img class="picture-project" src="/images/recursivedelegation/Home.PNG" alt="Home">
    <figcaption>Figure 1. Home/Project Page</figcaption>
</figure>
<p>The main landing page is the project page as requested by the client. Here contains a grid where all the cleints projects are displayed. Here he can add samples, generate reports or modify data as needed.</p>

<h3>Menu</h3>
<figure>
    <img class="picture-project" src="/images/recursivedelegation/menu.PNG" alt="menu">
    <figcaption>Figure 3.Menu</figcaption>
</figure>
<p>Portability was a big aspect to our client and there was potential for mobile use. To solve these problems we decided on keeping a minimalistic design and keeping the menu hidden until clicked.</p>

<h3>Reports</h3>
<figure>
    <img class="picture-project" src="/images/recursivedelegation/reportgen.PNG" alt="report">
    <figcaption>Figure 6 Report Generation</figcaption>
</figure>
<p>As per request, automatic report generation was a big piece of the application as the client spends a large amount of time generating reports. Unfortunately, due to time restraints we were only able to make one generic report that could serve as the basis for other reports.</p>

<h3>Other Pages</h3>
<figure>
    <img class="picture-project" src="/images/recursivedelegation/filter.PNG" alt="Filter">
    <figcaption>Figure 2. Grid Filter</figcaption>
</figure>

<figure>
    <img class="picture-project" src="/images/recursivedelegation/modal.PNG" alt="modal">
    <figcaption>Figure 4. Modal view</figcaption>
</figure>


<figure>
    <img class="picture-project" src="/images/recursivedelegation/projectform.PNG" alt="project form">
    <figcaption>Figure 5. Project Form</figcaption>
</figure>

