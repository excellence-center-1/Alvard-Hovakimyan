CREATE TABLE "vendor" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(50)
);

CREATE TABLE "provider" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(50) NOT NULL,
  "address" VARCHAR(50) NOT NULL,
  "phone" VARCHAR(12) NOT NULL
);

CREATE TABLE "products" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(50) NOT NULL
);

CREATE TABLE "product" (
  "id" SERIAL PRIMARY KEY,
  "brand_id" INT,
  "product_id" INT,
  "provider_id" INT
);

CREATE TABLE "shipping_price" (
  "id" SERIAL PRIMARY KEY,
  "product_id" INT,
  "DATE" timestamp,
  "current_price" INT NOT NULL,
  "measurement_unit" VARCHAR(5)
);

CREATE TABLE "shop" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(30) NOT NULL,
  "address" VARCHAR(50) NOT NULL,
  "phone" VARCHAR(20) NOT NULL,
  "budjet" INT NOT NULL
);

CREATE TABLE "sale_price" (
  "id" SERIAL PRIMARY KEY,
  "shop_id" INT,
  "product_id" INT,
  "DATE" timestamp,
  "current_price" INT NOT NULL,
  "measurement_unit" VARCHAR(10)
);

CREATE TABLE "customer" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(30) NOT NULL,
  "password" VARCHAR(20) NOT NULL,
  "address" VARCHAR(50) NOT NULL,
  "email" VARCHAR(50) NOT NULL,
  "phone" VARCHAR(20) NOT NULL,
  "banc_account" INT NOT NULL
);

CREATE TABLE "order_list" (
  "id" SERIAL PRIMARY KEY,
  "customer_id" INT NOT NULL,
  "product_id" INT NOT NULL,
  "shop_id" INT NOT NULL,
  "order_date" DATE,
  "sale_price_id" INT,
  "count" INT,
  "customer_card" INT NOT NULL
);

CREATE TABLE "price_list" (
  "id" SERIAL PRIMARY KEY
);

CREATE TABLE "card" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(15) NOT NULL,
  "account" INT NOT NULL
);

COMMENT ON COLUMN "shipping_price"."DATE" IS 'DEFAULT CURRENT_TIMESTAMP';

COMMENT ON COLUMN "sale_price"."DATE" IS 'DEFAULT CURRENT_TIMESTAMP';

ALTER TABLE "card" ADD FOREIGN KEY ("account") REFERENCES "customer" ("banc_account");

ALTER TABLE "order_list" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("brand_id") REFERENCES "vendor" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("provider_id") REFERENCES "provider" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "order_list" ADD FOREIGN KEY ("shop_id") REFERENCES "shop" ("id");

ALTER TABLE "shipping_price" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "sale_price" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "order_list" ADD FOREIGN KEY ("customer_card") REFERENCES "card" ("account");

ALTER TABLE "sale_price" ADD FOREIGN KEY ("shop_id") REFERENCES "shop" ("id");

ALTER TABLE "order_list" ADD FOREIGN KEY ("customer_id") REFERENCES "customer" ("id");

ALTER TABLE "order_list" ADD FOREIGN KEY ("sale_price_id") REFERENCES "sale_price" ("id");
