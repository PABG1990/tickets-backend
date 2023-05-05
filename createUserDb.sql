CREATE USER ticket_user@localhost IDENTIFIED BY 'Ticket2023*';
GRANT ALL PRIVILEGES ON tickets_db.* TO ticket_user@localhost;
FLUSH PRIVILEGES;
SHOW GRANTS FOR ticket_user@localhost;