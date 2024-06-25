
userService = require('../service/UserService')
const {createSchema, updateSchema} = require('../dtos/UserRequestDto');
deleteSchema  = require('../dtos/UserRequestDto');
const userResponseDto = require('../dtos/UserResponseDto')



const createNewUser = async (req, res) => {

    try {
        const { error } = createSchema.validate(req.body);
        if (error) {
            return res.status(400).send({ error: error.details[0].message });
        }
        
        const result = await userService.createNewUser(req.body);
        const responseDto = new userResponseDto(result);
      res.status(201).send(responseDto);
    } 
    catch (error) {

      console.error(error);
      res.status(500).send({ status: "error", message: error.message });
    }
};

const getUser = async (req, res) => {

    try {
            const result = await userService.getUsers();
            res.status(200).send(result);
    } 
    catch (error) {

        console.error(error);
        res.status(500).send({
            status: "error",
            message: error.message
        });
    }
};


const findUser = async (req, res) => {
    try {
            const id = req.params.id;
            const result = await userService.findUserById(id);
            res.status(200).send(result);
    } 
    catch (error) {

        console.error(error);
        const statusCode = error.message === "User not found." ? 404 : 500;
        res.status(statusCode).send({
            status: "error",
            message: error.message
        });
    }
};

const updateUser = async (req, res) => {

    try {
        const { error } = updateSchema.validate({ ...req.body, id: req.params.id });         // to effectively combines request body with id
        if (error) { 
            return res.status(400).send({ error: error.details[0].message });
        }
  
        const id = req.params.id;
        const updateData = req.body;
        const result = await userService.updateUserById(id, updateData);
        res.status(200).send(result);
    } 
    catch (error) {

      console.error(error);
      const statusCode = error.message === "User not found." ? 404 : 500;
      res.status(statusCode).send({
        status: "error",
        message: error.message
      });
    }

};


const updateUserById = async (req, res) => {

    try {
            const { error } = updateSchema.validate({ ...req.body, id: req.params.id });         // to effectively combines request body with id
            if (error) {
            return res.status(400).send({ error: error.details[0].message });
            }
        
            const id = req.params.id;
            const updateData = req.body;
            const result = await userService.updateUser(id, updateData);
            res.status(200).send(result);
    } 
    catch (error) {

        console.error(error);
        const statusCode = error.message === "User not found." ? 404 : 500;
        res.status(statusCode).send({
          status: "error",
          message: error.message
        });
    }
};


const deleteUser = async (req, res) => {
    try {
        
        const { error } = deleteSchema.validate(req.params);
        if (error) {
            return res.status(400).send({ error: error.details[0].message });
        }
    
        const id = req.params.id;
        const result = await userService.softDeleteUserById(id);
        res.status(200).send(result);
    } 
    catch (error) {

      console.error(error);
      const statusCode = error.message === "User not found." ? 404 : 500;
      res.status(statusCode).send({
        status: "error",
        message: error.message
      });
    }
  };


module.exports = createNewUser,getUser,findUser,updateUser,updateUserById,deleteUser;