
export const up=  async (queryInterface, Sequelize)=> {
      await queryInterface.bulkInsert('stations', [
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
      ], {});
    
  }

  export const  down = async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('stations', null, {});
  }
