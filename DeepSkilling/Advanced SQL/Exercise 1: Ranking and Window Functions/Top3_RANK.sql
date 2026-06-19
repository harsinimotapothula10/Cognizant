SELECT *
FROM (
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        RANK() OVER (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS Rank_No
    FROM Products
) P
WHERE Rank_No <= 3;