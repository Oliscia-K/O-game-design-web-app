import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("ManuData", (table) => {
        table.increments("id").primary();
        table.string("deviceKey").notNullable();
        table.string("team").notNullable();
        table.string("shift").notNullable();
        table.integer("shift_event_id").notNullable();
        table.dateTime("start_time").notNullable();
        table.dateTime("end_time").notNullable();
        table.float("good_count").notNullable();
        table.float("reject_count").notNullable();
        table.float("target_count").notNullable();
    });
};


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("ManuData");
}

