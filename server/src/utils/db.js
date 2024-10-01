import sqlite3 from "sqlite3"

sqlite3.verbose()

export const db = new sqlite3.Database("./src/utils/LoginChicks.sqlite")

export const initDB = () => {
    const sqlContent = `
        CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
        )
    `

    db.exec(sqlContent, (err) => {
        if (err) {
            console.warn(`Failed to load SQL query : ${err}`);
        } else {
            console.info("SQL content loaded");
        }
    })
}