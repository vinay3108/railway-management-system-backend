import "reflect-metadata"
import { DataSource } from "typeorm"
import { CancelTickets } from "./entity/CancelTickets"
import { Classes } from "./entity/Classes"
import { ClassSeats } from "./entity/ClassSeats"
import { PassengerDetails } from "./entity/PassengerDetails"
import { Reservations } from "./entity/Reservations"
import { Stations } from "./entity/Stations"
import { Trains } from "./entity/Trains"
import { Users } from "./entity/Users"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 8081,
    username: "user",
    password: "password",
    database: "railway_management",
    synchronize: true,
    logging: false,
    entities: [CancelTickets,Classes,ClassSeats,PassengerDetails,Reservations,Stations,Trains,Users],
    migrations: [],
    subscribers: [],
})

