class UserResponseDTO {
    constructor(user) {
      
      this.email = user.email;
      this.name = user.name;
      this.age = user.age;
      this.city = user.city;
      this.zipCode = user.zipCode;
      this.isDeleted = user.isDeleted;
    }
  }
  
  module.exports = UserResponseDTO;