+++
date = "2016-09-26T02:24:40-07:00"
draft = true
title = "TCP/IP review"
image = "/images/learn/tcpip.png"
main = "1"
+++

<h1>TCP/IP review</h1>
Admittedly, memorizing things like protocols is something im really bad at. I also have a test coming up soon which is probably the main reason as to why im writing this. TCP/IP is one of those things that you don't think about on a day to day basis as a developer but its something that lies at the core of almost everything we do. Down below are definitions of TCP/IP in my own words and what I need to know about them as a software developer.

<h2>What is TCP/IP?</h2>
TCP/Ip is a <b>set</b> of protocols that work together to send datagrams across the internet from one device to another. One of the main things that make TCP/IP so important is that it is <b>reliable</b>. To find out how and why its reliable, we have to look at each layer of the stack.

<h2>The layers of TCP/IP</h2>
TCP/IP can be shown as a four-layer conceptual model thats known as the DARPA model. We'll start from the bottom of the stack.

<h3>Network Interface layer</h3>
    The network interface layer is responsible for putting packets/datagrams onto the network and is also responsible for receiving packets off the network medium/device. An important thing to remember is that the network interface layer <b>alone</b> can be assumed to be <b>unreliable.</b> In a realistic point of view, the network layer mainly involves the link between the router and a device. The PC sends a packet to the router and the router decides where to send it from there. Likewise, the router picks the connected device and sends the received message to the pc.

<h3>Internet Layer</h3>
    The internet layer is the next step in the stack. The internet layer is responsible for three things <b>addressing, packaging and routing.</b> The core protocols that make up this layer are IP, ARP, ICMP and IGMP. <br/><br/>
    
<b>Internet Protocol:</b> The IP is a routable protocol responsible for IP addressing and the fragmentation and reassembly of packets.<br/>
<b>Address Resolution Protocol:</b> ARP is in charge of the conversion of MAC addresses and IP addresses.<br/>
<b>Internet Control Message Protocol:</b> ICMP is responsible for providing diagnostics and reporting errors or condtions regarding delivery of packets.<br/>
<b>Internet Group Management Protocol:</b> is responsible for manangement of IP multicast groups<br/>
    
<h3>Host to host transport layer</h3>
    The transport layer can sort of be misleading. The transport layer has nothing to do with the actualy sending and receiving of packets. The transport layer is responsible for providing session and datagram communication services. The transport layer is based off of two core protocols: TCP and UDP. TCP provides a one-to-one, connection-oriented, relaible commucation service. UDP provides one-to-one, one-to-many, connectionless, and unreliable  commucations services. UDP can be faster than TCP but is very unreliable and is used when the overhead of TCP is not desired.
    
<h3>Application Layer</h3>
    The application layer is the layer that makes use of the services in each layer and defines the protocols that applications use to exchange data. Application layer protocols are always being developed, one that comes to mind is HTTP/2. Some of the most used protocols are HTTP, FTP, SMTP and telnet.

<h2>OSI (Open Systems Interconnection) model</h2>
The OSI model is a deeper look at each layer and seperates the DARPA model a bit further. In order:
<ul>
    <li>Application layer</li>
    <li>Presentation layer</li>
    <li>Session layer</li>
    <li>Trasport layer</li>
    <li>Network layer</li>
    <li>Data Link layer</li>
    <li>Physical layer</li>
</ul>

<h2>TCP</h2>
TCP is a reliable, connection-oriented delivery service. Connection-oriented means that a connection must be first established before hosts can exchange data. The term 3 way handshake is often used with TCP to ensure that datagrams successfully reach their destination. TCP also breaks down and constructs datagrams that are too big to be sent. TCP uses byte-stream communications. TCP is defined in RFC 793. When I hear TCP i also like to think about the word <b>session.</b> TCP also provides a checksum, the checksum is used to verify the integrity of the TCP header and the TCP data.
<h2>UDP</h2>
UDP provides a connectionless datagram service that offers unreliable, best-effort delivery of data trasmitted in messages. When something is being sent through UDP there will be no guarantee that the message has been sent and UDP is also one-to-many.
<h2>IP</h2>
IP by itself is connectionless and unreliable. Its main use is addressing and routing. IP is defined in RFC 791. The checksum is a mathematical computation used to verify the integrity of the IP header.


<br />
<br />