export const TOKEN_SECRET = "secret";
//export const PAYPAL_API_CLIENT = process.env.PLAYPAL_API_CLIENT;
//export const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;
export const PAYPAL_API_CLIENT =
  "AeYNULtb7GOfzSNZZFplMQaAchXSIuk4P1o4yid17pumRGrYLQz0yeqi5CYTBGs3DfA9yIXa9WEqmKoK";
export const PAYPAL_API_SECRET =
  "EGz2YJ-lJkbzILp1yhqoi8iTRZY_HGkAEyZ6ZcGCWvuLz-T4d9JU0aKb4AqCAg9tNdEShS-CiNRyB3BH";
export const PAYPAL_API = "https://api-m.sandbox.paypal.com";

export const PORT = process.env.PORT ?? 1234;
export const HOST =
  process.env.NODE_ENV === "production"
    ? process.env.HOST
    : "http://localhost:" + PORT;
