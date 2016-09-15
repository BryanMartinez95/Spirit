+++
date = "2016-09-14T23:24:41-07:00"
draft = true
title = "What does testing mean to a software developer?"
image = "http://i.imgur.com/DuetvzL.gif"
+++
I thought i knew what properly testing my code meant. But as I started to grow as a junior developer, I started to become confused as to what testing really was.

As a result of my research, I have realized that the definition of testing is different between every person and that “testing” is basically a huge contradiction. Through my research i have found that each developer must create their own style and own set of rules. A couple questions you can ask yourself to find out include “How much time do i have to finish this program?”, “How much much time must i devote to testing to make this program solid and bug free?”, “Am i sure that this piece of code works in different scenarios?”. If you can create a application that produces no bugs with zero testing in any situation, than you do not need to test one bit. If your the kind of person who must test every function/class/use case of your application to feel confident in your work, than that is your correct answer. I find that the middle of the two is a good place for me and that testing is a means to get myself in the correct mindset while programming to think from different angles.

This will change between workplace and groups but as a general definition i have split testing into three main sections that make sense to me. Unit testing, Integration testing and acceptance/full stack testing.
<h2><strong>Unit testing</strong></h2>
<img class="alignnone wp-image-38" src="https://liandraumr.files.wordpress.com/2016/01/colored-lego-blocks.jpg?w=195&amp;h=130" alt="colored-lego-blocks" width="195" height="130" />

The definition of a unit can vary between project, a unit can be as small as testing a method/function or a unit can mean testing the functionality of a class. A unit can also mean testing how a particular group of methods work together to complete a task. But to summarize the definition, a unit test is used to test the smallest unit of functionality. Imagine it as checking each individual Lego block is in working order. But there are a couple rules that unit testing must follow.
<ul>
 	<li>Must be independent and should be as dependency free as possible</li>
 	<li>Must not touch a database</li>
 	<li>Must not access the network</li>
 	<li>Must not use any outside resource</li>
</ul>
If your checking to see if your “add user” function successfully updated the tables in your database, that is not unit testing. More specifically, if your checking that if your “retrieve  all users” function returns a list of 3 when there are 3 mock users created, that is unit testing. We’ll touch a little more on mocking frameworks and more on unit testing in a future post.
<h2>Integration Testing</h2>
<h2><img class="alignnone wp-image-63" src="https://liandraumr.files.wordpress.com/2016/01/system_integration_1.jpg?w=183&amp;h=160" alt="system_integration_1" width="183" height="160" /></h2>
If testing was a pyramid, Integration tests would build on top unit tests. Integration tests are done by combining more than one unit together to ensure that multiple pieces of the puzzle fit together correctly. Integration testing is also where databases come into play. To test whether your application successfully adds a user to the database and that user can be retrieved from the database is a integration test.

If you’ve built the front end part of an application, how do you know that your end can successfully interact with the database back end? By using integration testing, we can test whether the two systems can successfully talk to each other. Unit tests, test whether the unit or function in itself works. With integration tests, we can see if the two working functions/units can talk to each other without error. The one thing to be aware of with integration tests is the current environment you are in. Because things are working with your environment, does not mean that the application will work guaranteed at production. We will also be going in depth into integration testing in a future post.
<h2>Acceptance Testing</h2>
<img class="alignnone wp-image-95" src="https://liandraumr.files.wordpress.com/2016/01/legopside3.jpg?w=185&amp;h=139" alt="legopside3" width="185" height="139" />

Acceptance testing means a couple of different things but all generally lead to the same definition. Typically acceptance testing involves the entire system in the environment it is deployed in.

e.g. Your project team has been using a local server to launch the application but the clients choice of server is different and once the application is set up, tests must be run to ensure that the application works the same.

The advantage of this type of of testing is pretty clear to see. It tests the functionality to see whether your use cases are working properly. Everyone does acceptance testing whether they realize it or not. It can be as simple as checking to see if you can log into your system properly or successfully update an account. A good question to ask yourself is whether or not you have met the clients expectations with what you have created.

&nbsp;
<h2>Summary</h2>
Each time we move up a step, our application gets harder to find the bugs as there the number of things to test exponentially increases. In an MVC layout, all layers of your code is being touched and it can be hard to find out where things are breaking. But as we inspect each type of test, we can adjust our magnifying glass as needed and easily pin point where our code is breaking. Each layer of testing is equally important and by having a layer of each, they work together to ensure maximum code coverage. But most importantly, testing is a means to get you in the correct mindset while programming to think from different angles.