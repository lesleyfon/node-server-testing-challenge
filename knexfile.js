const sqlite = {
  client: "sqlite3",
  migrations: {
    directory: "./database/migrations"
  },
  seeds: {
    directory: "./database/seeds"
  }
};

module.exports = {
  test: {
    ...sqlite,
    connection: {
      filename: "./database/test.db3"
    }
  },
  dev: {
    ...sqlite,
    connection: {
      filename: "./database/dev.db3"
    }
  }
};
