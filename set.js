const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  PREFIXE: process.env.PREFIXE || "a",
  NOM_OWNER: process.env.NOM_OWNER || "Dragon",
  NUMERO_OWNER: process.env.NUMERO_OWNER || "50935623320",
  MODE: process.env.MODE || "private",
  MENU: process.env.MENU || "https://i.ibb.co/ynx9QcZ/image.jpg",
  SESSION_ID: process.env.SESSION_ID || "Ovl-MD_PzP0ui3k_SESSION-ID",
  LEVEL_UP: process.env.LEVEL_UP || "non",
  STICKER_PACK_NAME: process.env.STICKER_PACK_NAME || "Dragon",
  STICKER_AUTHOR_NAME: process.env.STICKER_AUTHOR_NAME || "Dragon",
  DATABASE: process.env.DATABASE,
  RENDER_API_KEY: process.env.RENDER_API_KEY,
};
