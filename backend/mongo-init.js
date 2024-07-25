// mongo-init.js
db = db.getSiblingDB('cabBookingApp'); // use or create the database named 'packers_movers'

db.createCollection('cabs', { capped: false });

print("Database and collections created.");