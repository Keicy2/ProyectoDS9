export const TOKEN_SECRET = "secret";
//export const PAYPAL_API_CLIENT = process.env.PLAYPAL_API_CLIENT;
//export const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;
export const PAYPAL_API_CLIENT =
  "AZnXaoWi7FkRQ7a4FLxfR3limkrR0rRM4sceMuOmob0r3v_KC8YXUAIQRWSL6TrjUZ_XOd0HiWNIKH2L";
export const PAYPAL_API_SECRET =
  "EFShBDYEMp4CpJ-S2W86QJ0-HslF4GXRBWr-FGrmdfoUNn9S66xqeL4TbbLvSBNC4YQM4Swg4rpzZaRj";
export const PAYPAL_API = "https://api-m.sandbox.paypal.com";

export const PORT = process.env.PORT ?? 1234;
export const HOST =
  process.env.NODE_ENV === "production"
    ? process.env.HOST
    : "http://localhost:" + PORT;
