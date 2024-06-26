const express = require('express')
const app = express()
const userService = require('../service/UserService')
const {createSchema, updateSchema, deleteSchema} = require('../dtos/UserRequestDto');
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
            const id = req.params.userId;
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
      const { id } = req.params.userId;

      // Fetch the user to check if isDeleted is false
      const user = await userService.findUserById(id);
      if (!user || user.isDeleted) {
          return res.status(400).send({ error: !user ? 'User not found' : 'Cannot update a deleted user' });
      }

      // Validate the request body
      const { error } = updateSchema.validate(req.body);
      if (error) {
          return res.status(400).send({ error: error.details[0].message });
      }

      const result = await userService.updateUserById(id, req.body);
      res.status(200).send(result);
  } 
  catch (error) {
      console.error(error);
      res.status(500).send({ status: "error", message: error.message });
  }

};


const deleteUser = async (req, res) => {
    try {
        
        const { error } = deleteSchema.validate(req.params);
        if (error) {
            res.status(400).send({ error: error.details[0].message });
        }
    
        const id = req.params.userId;
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


module.exports = {createNewUser,getUser,findUser,updateUser,deleteUser};