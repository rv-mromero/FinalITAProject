DROP DATABASE IF EXISTS project_db;
CREATE DATABASE project_db;
USE project_db; 

CREATE TABLE users (
    firstname VARCHAR(30) NOT NULL DEFAULT '',
    lastname VARCHAR(30) NOT NULL DEFAULT '',
    email VARCHAR(30) NOT NULL DEFAULT '',
    phone VARCHAR(30) NOT NULL DEFAULT '',
    pref_contact VARCHAR(30) NOT NULL DEFAULT '',
    referred_by VARCHAR(100) NOT NULL DEFAULT '',
    comments VARCHAR(240) NOT NULL DEFAULT ''
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE products (
    id VARCHAR(255),
	category VARCHAR(255),
    name VARCHAR(255),
    size VARCHAR(255),
	rating VARCHAR(255),
    description VARCHAR(500),
    price DOUBLE,
    img_main VARCHAR(255)
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE errors (
    error_code VARCHAR(3),
	response_msg VARCHAR(255)
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;





INSERT INTO products (id, category, name, size, rating, description, price, img_main) 
VALUES ('1', 'Night Swag', 'Stars Do Shine Sequin Dress - Silver','XS, S, M, L, XL', '5', 'Product Details: Available In Silver,Sequin Midi Dress, Spaghetti Strap, V Neck, Front Slit, Lined, Back Zipper, Lining: 95% Polyester 5% Spandex.', 44.99, 'https://cdn.shopify.com/s/files/1/0293/9277/products/StarsDoShineSequinDress-Silver_2__MER_468x@2x.jpg?v=1596848306'),
       ('2', 'Night Swag', 'Right Next Door Satin Maxi Dress - Hunter', 'S, M, L, XL', '5', 'Product Details:Available In Hunter, Red, Off White, Black, And Rust Satin Maxi Dress, Sweetheart Neckline, Padded Bust, Corset Waist, Boning.', 41.99, 'https://cdn.shopify.com/s/files/1/0293/9277/products/10-15-21_Holiday_Editorial_SN_17-20-05_LOOK_4_0889_DC_DM_468x@2x.jpg?v=1635775075'),
       ('3', 'Night Swag', 'Stars Do Shine Sequin Dress - Silver', 'XS, S, M, L, XL','5','Product Details: Available In Silver, Sequin Midi Dress, Spaghetti Strap, V Neck, Front Slit, Lined, Back Zipper, Lining: 95% Polyester 5% Spandex.', 61.99, 'https://cdn.shopify.com/s/files/1/0293/9277/products/10-15-21_Holiday_Editorial_SN_10-42-25_LOOK_5_32067_PB_DM_468x@2x.jpg?v=1635775108'),
       ('4', 'Runway Swag', 'Wanna Be Bad Faux Leather Maxi Dress - Black', 'XS, S, M, L, XL','5', 'Product Details: Available In Black, Faux Leather Maxi Dress, Tube, Functional Back Zipper, Adjustable Belt, Bodycon, Back Slit, Stretch.', 30.99, 'https://cdn.shopify.com/s/files/1/0293/9277/products/10-01-21City_layers_JP_16-59-19_LOOK_4_0109_WG-Edit_WG_DM_468x@2x.jpg?v=1633562757'),
       ('5', 'Runway Swag', 'On The Runway Maxi Dress - Red', 'XS, S, M, L, XL','5','Product Details: Available In Fuchsia, Purple, Wine, Red, Yellow, White, And Royal Blue Maxi Dress Tulle, V Neck Cross Back, 100% Polyester, Imported. If you find me, you can have me!', 37.99, 'https://cdn.shopify.com/s/files/1/0293/9277/products/OnTheRunwayMaxiDress-Red_2__MER_468x@2x.jpg?v=1607536801'),
       ('6', 'Runway Swag', 'Caught My Eye Tube Maxi Dress - Ivory', 'XS, S, M, L, XL','5','Product Details: Available In Ivory, Red, And Light Blue. Tube Maxi Dress Deep V Neck Tulle Skirt Built In Panty Hidden Back Zipper Stretch.', 48.99, 'https://cdn.shopify.com/s/files/1/0293/9277/products/CaughtMyEyeTubeMaxiDress-Ivory_MER_468x@2x.jpg?v=1638897033'),
       ('7', 'Comfort Swag', 'Step It Up Hacci Jogger - Camel', 'XS, S, M, XL','5','Product Details: Available In Camel, Jogger Pant, V Waistband, Functional Drawstring, Pockets, Hacci Material, Pair With Step It Up Mock Neck Cold Shoulder Pullover, 95% Rayon.', 23.99, 'https://cdn.shopify.com/s/files/1/0293/9277/products/10-08-21Studio5_CE_RL_10-17-00_8_ZDNS1233B_Camel_40653_DC_468x@2x.jpg?v=1634057734'),
       ('8', 'Comfort Swag', 'Cozy Nights Pant Set - Ivory', 'XS, S','5','Product Details: Available In Ivory And Olive, Sweater Set, Pullover Long Sleeve, High Waist Legging, Pull On, Pockets, Skinny, Stretch. You stay cozy, youll stay warm. Buy me now and you will know.', 15.98, 'https://cdn.shopify.com/s/files/1/0293/9277/products/CozyNightsPantSet-Ivory_MER_468x@2x.jpg?v=1639081419'),
       ('9', 'Comfort Swag', 'Living In It Cozy Dress Set - Mauve', 'S, M, XL','5', 'Product Details: Available In Camel, Available In Taupe And Mauve. Dress Set Mini Dress, Spaghetti Straps, Scoop Neck, Cardigan 52.',39.99, 'https://cdn.shopify.com/s/files/1/0293/9277/products/LivingInItCozyDressSet-Mauve_3__MER_468x@2x.jpg?v=1607651643'),
       ('10', 'Casual Swag', 'Business Casual Coat - Lavender','XS', '5','Product Details: Available in Black, Khaki, Lavender, Mocha, Off White, White. Long Sleeve, Open Front Warm Coat, Self Tie Belt, Long Length, 97% Polyester 3% Spandex, Imported. You be comfy in this coat.', 15.98, 'https://cdn.shopify.com/s/files/1/0293/9277/products/Fashion_Nova_01-09-17-050_468x@2x.jpg?v=1614382442'),
       ('11', 'Casual Swag', 'I Got It From My Mama Distressed Jeans - MediumBlueWash', 'XS, S, M','5','Product Details: Available In Medium Blue Wash, Available In Plus Sizes, High Rise Distressed Whisker Detail, 5 Pockets,Mom Jean.', 15.98, 'https://cdn.shopify.com/s/files/1/0293/9277/products/IMG_4261_RG_JF_468x@2x.jpg?v=1629483894'),
       ('12', 'Casual Swag', 'Super High Waist Denim Skinnies - Medium Blue', 'XS, S, M, L','4','Product Details: Available in a variety of colors, Super High Rise, Back Pockets, Skinny Leg Super Stretch Fabric 31" Inseam Plus AvailableDisclaimer: Due To The Specialized Wash Process.', 27.99, 'https://cdn.shopify.com/s/files/1/0293/9277/products/SuperHighWaistDenimSkinnies-MediumBlue_MER_468x@2x.jpg?v=1623251833');