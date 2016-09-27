+++
date = "2016-09-26T03:15:27-07:00"
draft = true
title = "HTTP/1.1 review"
image = "/images/learn/HTTP_logo.png"
main = "1"
+++

<h1>HTTP/1.1 review</h1>
In this post we'll be going over what HTTP is and why its important. Practically every web application uses HTTP in some form or way and its something that can be used without truly understanding it. But in order to truly gain a deeper understanding of how our applications work, we must understand whats happening beneath the lines. HTTP runs through port 80 and is defeined in RFC 2616.
<h2>What is HTTP?</h1>
We see HTTP used everywhere but what exactly is HTTP? To put it simply, HTTP is a application level protocol thats used to transfer data across the world wide web. HTTP follows a client server pattern where a client would make a request to some sort of server and the server would reply back with a response. A client can make various kinds of requests to a server depending on what the client is trying to do. A simple example is typing in www.google.ca in your browser, this is simply asking to GET the resource with the domain name of google.ca and the server responds back with the html file that describes google.ca.
<h2>POST vs GET</h2>
In essense, POST and get both do the same thing. But they key difference is that POST encases form data and resources inside the message body.

<h2>Format</h2>
HTTP/1.0 defines 16 headers but none are required. HTTP/1/1 defined 46 headers and the HOST: header is required in requests. The header is at the top of every HTTP request. The very first line of a HTTP request will always follow the format of request type, resource, HTTP version ex. [GET /path/file.html HTTP/1.0]. Following the first line are the header lines which can have things like date and sender information. Following this is the message body where resource information is stored. If successful the server will respond back with a 200 code ex. [HTTP/1.1 200 OK] along with the requested resource. If failed, the server will respond back with a non 200 code indicating that there was some sort of error. 
<h2>Request Types</h2>
<ul>
    <li><b>GET:</b> Retrieve requested resource</li>
    <li><b>POST:</b> Retrieve requested resource & put form data in message body</li>
    <li><b>PUT:</b> enclosed entity stored under supplied request-URI, or updates if existing</li>
    <li><b>DELETE:</b> delete specified resource</li>
    <li><b>HEAD:</b> identical to GET but has no message body</li>
    <li><b>TRACE:</b> invoke a remote, application-layer loop- back of the request message</li>
    <li><b>CONNECT:</b> for use with proxy</li>
    <li><b>OPTIONS:</b> information about communication options</li>
</ul>

<h2>Response Codes</h2>
<ul>
    <li><b>100-199:</b> Informational</li>
    <li><b>200-299:</b> Success</li>
    <li><b>300-399:</b> Redirection</li>
    <li><b>400-499:</b> Client Error</li>
    <li><b>500-599:</b> Server Error</li>
</ul>


<br/>
<br/>