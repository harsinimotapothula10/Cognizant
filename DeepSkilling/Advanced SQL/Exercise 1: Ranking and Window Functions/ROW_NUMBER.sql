SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS Row_Num
FROM Products;