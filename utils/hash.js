import * as crypto from "crypto";

export function hashString(text, method = "md5") {
  return crypto.createHash(method).update(text).digest("hex");
}

let adminHashes = {};
Object.keys(process.env)
  .filter((e) => e.startsWith("USER_"))
  .forEach((e) => {
    adminHashes[e.replace(/^USER_/, "")] = hashString(e + "_" + process.env[e]);
  });

export function getAdminHashes() {
  return adminHashes;
}
