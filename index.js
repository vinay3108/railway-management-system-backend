import express from 'express';
import db from './initials/dbConnection.js';
import CancelTickets from './models/cancelTickets.models.js';
import Classes from './models/classes.model.js';
import ClassSeats from './models/classSeats.model.js';
import PassengerDetails from './models/passengerDetails.model.js';
import Reservations from './models/reservations.model.js';
import Stations from './models/stations.model.js';
import Trains from './models/trains.model.js';
import Users from './models/users.model.js';
import userRoutes from './routes/user.routes.js';
const app = express();

app.use(express.json());
const port =5678;
const initApp = async () => {
    console.log("Testing the database connection..");

    // Test the connection.
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");
        await CancelTickets.sync();
        await Stations.sync();
        await Trains.sync();
        await Users.sync();
        await Reservations.sync();
        await CancelTickets.sync();
        await PassengerDetails.sync();
        await ClassSeats.sync();
        await Classes.sync();
        console.log("All Models have been Synced successfully");

        /**
        * Start the web server on the specified port.
        */
        app.get('/',(req,res)=>{
            res.send("welcome");
        })
        app.use('/user',userRoutes);
        app.listen(port, () => {
        console.log(`Server is running at: http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error.original);
    }
};

initApp();