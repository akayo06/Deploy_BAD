import { config } from "dotenv";
import populateEnv from "populate-env";

let env = {
  PORT: 8100,
  DB_NAME: "",
  DB_USER: "",
  DB_PASSWORD: "",
  DOMAIN: "",
};
export default env;
config();
populateEnv(env, { mode: "halt" });
