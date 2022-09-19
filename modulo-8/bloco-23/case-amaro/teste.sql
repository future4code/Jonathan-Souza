SELECT amaro_products.name amaro_products.id,
    GROUP_CONCAT(DISTINCT amaro_tags.tag) as TAGS
    FROM amaro_products
    LEFT JOIN amaro_tags on amaro_products.id = amaro_tags.product_id
    GROUP BY amaro_products.name