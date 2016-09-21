+++
date = "2016-09-14T23:25:43-07:00"
draft = true
title = "Integration Testing"
image = "http://i.imgur.com/DuetvzL.gif"
+++
<h1>Integration Testing</h1>
My experience with integration testing lies mainly with testing entities and database relationships as well as testing database queries. There are many ways to do integration testing as it involves testing multiple layers together to see if they work together properly. This post will specifically use examples that are focused on data access.
<h2>In-Memory Database</h2>
A very useful tool to test databases is a In-Memory database, this way if your system is live or your actual database is in a delicate state of some sort, we can create a temporary in-memory database that will construct and de construct itself after every test. Another benefit of a in-memory database is that it proves to be faster than a traditional database because it is sitting in memory. The one I have most experience with is HSQLDB (Hyper SQL database). You can set up your application to use this in memory database at runtime instead of your actual one for safer and faster tests.

http://hsqldb.org/
<h2>Data Access Testing</h2>

[java]public int insert(User user)  {
        EntityManager em = DBUtil.getEmFactory().createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(user);
            em.getTransaction().commit();
            return 1;
        } finally {
            em.close();
        }
    }
[/java]

Here is a method using Hibernate JPA to insert a user into a database. To break it down, we pass a User object to the method, open the connection to the database using the EntityManager, open a transaction, persist the user, commit the transaction and close the connection. This makes sense, but how do we know that it does what we need it to do? Well there's no way of testing this without an actual database and in order to test this, we must also use another method to help us out.

[java]public User getUser(String userName)  {
        EntityManager em = DBUtil.getEmFactory().createEntityManager();
        try {
            User user = em.find(User.class, userName);
            return user;
        } finally {
            em.close();    
        }
    }
[/java]

Here is the getUser method that we will assume has been tested and works properly already. This method takes in a username and based on that username, will return the appropriate user.

[java]public class UserTest
{
	public User user;
	public UserRepository userRepository;

	@Before
	public void setup()
	{
		userRepository = new UserRepository();
		user = new User("Mike","password");
	}

	@Test
	public void insertUserTest1()
	{
		userRepository.insert(user);
		User user2 = userRepository.getUser("Mike");
		Assert.assertEquals("Mike", user2.getUserName());
	}
}
[/java]

Here is a small and quick example of the integration test. We create a user with the username of Mike, after that we use the getUser method to check the database for any users with the username of Mike, if it gets the proper result back, our test will pass.

The main thing to point out here is that integration tests sit on top of unit tests. <strong>Testing is a bottom up process. </strong>There are many layers as well as many methods involved in this short test. It is important to do unit testing before we do integration tests to ensure that each part of it is functioning properly before we put the pieces together.