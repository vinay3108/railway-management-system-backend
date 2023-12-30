import Stations from '../models/stations.model.js'
const up =  async()=>{
    await Stations.bulkCreate([
        {"station_name": "New Delhi"},
        {"station_name": "Mumbai Central"},
        {"station_name": "Chennai Central"},
        {"station_name": "Howrah Junction (Kolkata)"},
        {"station_name": "Bangalore City Junction"},
        {"station_name": "Hyderabad Deccan"},
        {"station_name": "Ahmedabad Junction"},
        {"station_name": "Jaipur Junction"},
        {"station_name": "Lucknow Junction"},
        {"station_name": "Patna Junction"},
        {"station_name": "Thiruvananthapuram Central"},
        {"station_name": "Pune Junction"},
        {"station_name": "Secunderabad Junction"},
        {"station_name": "Guwahati Junction"},
        {"station_name": "Bhopal Junction"},
        {"station_name": "Chandigarh Junction"},
        {"station_name": "Varanasi Junction"},
        {"station_name": "Kanpur Central"},
        {"station_name": "Vishakhapatnam Junction"},
        {"station_name": "Bhubaneswar"}
      ]).then(()=>{
        console.log("successfull");
      })
      .catch((error) => {
        console.error('Error during bulk insert:', error);
      });
}
up();