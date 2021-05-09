CREATE TABLE products(
    product_id SERIAL,
    product_name VARCHAR(50) NOT NULL,
    product_price NUMERIC(5,2) NOT NULL,
    product_category VARCHAR(50) NOT NULL,
    product_image VARCHAR(1000) NOT NULL,
    PRIMARY KEY (product_id)
);

INSERT INTO products(product_name, product_price, product_category) VALUES('Carrot', 1, 'Vegetal', 'https://befreshcorp.net/wp-content/uploads/2017/06/product-packshot-Carrot-558x600.jpg');