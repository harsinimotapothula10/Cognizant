SELECT *
FROM (
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS Row_Num
    FROM Products
) P
WHERE Row_Num <= 3;