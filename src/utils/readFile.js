import path from "path";
import fs from "fs";

export function readFile() {
  try {
    const filePath = path.join(process.cwd(), "data.json");
    const data = fs.readFileSync(filePath, "utf8");

    if (!data) {
      throw new Error("File is empty.");
    }

    return JSON.parse(data).hits.hits;
  } catch (e) {
    throw new Error("Cannot read the file: ", e);
  }
}
