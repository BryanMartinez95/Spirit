+++
date = "2016-09-14T23:26:50-07:00"
draft = true
title = "Unit Testing and an Introduction to Mocks"
image = "http://i.imgur.com/DuetvzL.gif"
+++
<h1>Unit Testing</h1>
Today Ill be covering basic unit testing along with the concept of what a Mock is. Before this, we must first define what a "unit" specifically is. The definition of a unit can be different for everyone but can generally be seen as the smallest piece of functionality. For the purposes of this blog post, we'll be using Java "methods" as a unit.
<h2>Unit Testing With JUnit</h2>
JUnit is one of the main unit testing frameworks for the Java programming language. JUnit provides many useful tools to allow us to test our code quickly and easily. For example, if i had a UserService and i wanted to test a addUser method, instead of going through the painful process of building a whole front end just to see if it worked properly, I could just create a Unit Test for it and hook it up to run separately from the main application.
[java]public class UserTest{
   List users;
   UserService userService;

   @Before
   public void setup()
   {
      userService = new UserService();
      users= new ArrayList<>();
   }

   @Test
   public void addUser()
   {
       User user= new user("name");
       userService.add(user);
       users = userService.getAll();
       assertEquals(1, users.size();
   }

   @Test
   public void addUserNoName()
   {
        User user= new user(null);
       userService.add(user);
       users = userService.getAll();
       assertEquals(0, users.size();
   }

}[/java]
Above is a simple example of a unit test to see whether or not the userService adds a user to the system in the correct conditions, in our second test addUserNoName, we set the name of the user to null, this the userservice will not add this user to the system.

http://junit.org/
<h2>Basic Mocking With Mockito</h2>
Mockito is a mocking framework for Java that allows helps you create unit tests. There are many mocking frameworks you could use but I found that Mockito is amongst the most popular in the Java community.
<h3>What is a mock and why is it useful?</h3>
When our code has many dependencies things often become hard to unit test as a object may depend on the existence of another object. For example, a UserService is reliant on a UserRepository.

This can cause problems because if I run into an error, I don't exactly know whether the method I am currently testing is correct or whether the dependencies contain errors within themselves.The other problem is that, it will not be a true unit test if you are relying on other things to get your result.

This is where mocking comes in handy, we can create pretend objects in which we can specify the behavior of these objects.
[java]public class UserTest{
   List users;
   UserService userService;
   UserRepository userRepository;

   @Before
   public void setup()
   {
      userRepository = <b>Mockito.mock(UserRepository.class)</b>
      userService = new UserService();
      users= new ArrayList<>();
   }

   @Test
   public void mockTest()
   {
       User user= new user("name");
       <b>Mockito.when(userRepository.save(user)).thenReturn(true);</b>       
       <b>Mockito.when(userRepository.findUser(user).thenReturn(user);</b>    
   
       userService.add(user);
       User user2= userRepository.findUser(user);
       assertEquals(user,user2);
   }



}[/java]
Above is another example of the UserService being tested. However, the UserService relies on the userRepository in order to work, so in order to properly implement this test, we use the following lines which are pretty self explanatory to create a pretend userRepository that does exactly what we tell it to do.
http://site.mockito.org/