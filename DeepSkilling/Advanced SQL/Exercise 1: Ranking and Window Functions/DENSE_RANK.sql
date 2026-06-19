SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    DENSE_RANK() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS Dense_Rank_No
FROM Products;