import { Knex } from "knex";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs");

export async function seed(knex: Knex): Promise<void> {

  const contents = fs.readFileSync("./data/manufacturing-data.json", "utf8");
  const data = JSON.parse(contents);

  // Deletes ALL existing entries
  // Use batch insert because we have too many articles for simple insert
  return knex("ManuData").del()
    .then(() => knex.batchInsert("ManuData", data, 100));
};
