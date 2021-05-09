CREATE TABLE products(
    product_id SERIAL,
    product_name VARCHAR(50) NOT NULL,
    product_description VARCHAR(450) NOT NULL,
    product_price NUMERIC(5,2) NOT NULL,
    product_category VARCHAR(50) NOT NULL,
    product_image VARCHAR(1000) NOT NULL,
    product_stock INT NOT NULL,
    PRIMARY KEY (product_id)
);

INSERT INTO products(product_name, product_description, product_price, product_category, product_image, product_stock) VALUES('Carrot', 'Frescos traidos del campo', 1, 'Vegetal', 'https://befreshcorp.net/wp-content/uploads/2017/06/product-packshot-Carrot-558x600.jpg', 10);
INSERT INTO products(product_name, product_description, product_price, product_category, product_image, product_stock) VALUES('Potato', 'Frescos traidos del campo',0.5, 'Vegetal', 'https://cdn.britannica.com/89/170689-131-D20F8F0A/Potatoes.jpg', 20);
INSERT INTO products(product_name, product_description, product_price, product_category, product_image, product_stock) VALUES('Tomato', 'Frescos traidos del campo',0.3, 'Vegetal', 'https://cdn.shopify.com/s/files/1/0244/4961/3905/products/tomato@2x.jpg?v=1576807420', 30);
INSERT INTO products(product_name, product_description, product_price, product_category, product_image, product_stock) VALUES('Onion', 'Frescos traidos del campo',0.3, 'Vegetal', 'https://sc04.alicdn.com/kf/U25650ccbc845455cb5b9931945619b56y.jpg', 40);
