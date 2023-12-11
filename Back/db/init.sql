-- CREATE DATABASE IF NOT EXISTS marketplace_DB;
SELECT `CREATE DATABASE marketplace_DB`
WHERE NOT EXISTS (SELECT pg_database WHERE dataname = `marketplace_DB`  )\gexec
