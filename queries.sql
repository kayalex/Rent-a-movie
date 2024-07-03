SELECT CustomerID, CONCAT(FirstName, ' ', LastName) AS CustomerName,  PhoneNumber, Email,  
       StreetAddress, City, State, Zip
FROM Customer
ORDER BY LastName ASC;

SELECT rt.Date, CONCAT(c.FirstName, ' ', c.LastName) AS CustomerName, m.Title AS VideoName,
       rm.Price, rm.Tax, rm.TotalPrice
FROM RentalTransaction rt
JOIN Customer c ON rt.CustomerID = c.CustomerID
JOIN RentedMovie rm ON rt.TransactionID = rm.TransactionID
JOIN Movie m ON rm.MovieID = m.MovieID
ORDER BY c.LastName ASC, rt.Date DESC;


SELECT CONCAT(c.FirstName, ' ', c.LastName) AS CustomerName, rt.Date, m.Title AS VideoName,
       m.TotalPrice, SUM(m.TotalPrice) OVER (PARTITION BY rt.CustomerID ORDER BY rt.Date) AS TotalSpent
FROM RentalTransaction rt
JOIN Customer c ON rt.CustomerID = c.CustomerID
JOIN RentedMovie rm ON rt.TransactionID = rm.TransactionID
JOIN Movie m ON rm.MovieID = m.MovieID
ORDER BY CustomerName, rt.Date, m.Title;


SELECT movie.Title AS movie_title
FROM movie
INNER JOIN movieactor ON movie.MovieID = movieactor.MovieID
INNER JOIN actor ON movieactor.ActorID = actor.ActorID;

