export const env = {
  //CONFIG SERVER
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 3000,
  //CREDENCIALES DE ML
  CLIENT_ID: 8220378401914631,
  CLIENT_SECRET: "DqfoC9y92QXa004fAVpsI2v7zzoDYHCD",
  REDIRECT_URI: "",
  SYS_PWD: "",
  //LINK FIJOS DE ML
  CATEGORIES_ALL: "https://api.mercadolibre.com/sites/MLM/categories",
  FILTER_CATEGORIES: "https://api.mercadolibre.com/sites/MLM/search?category=",
  FILTER_PRODUCT_NAME:
    "https://api.mercadolibre.com/sites/MLM/search?q=Motorola%20G6",
};
