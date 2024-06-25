

// const User = require('../database');
userService = require('../service/UserService')

// const userService = require('../service/UserService');

const createNewUser = async (req, res) => {
    try {
        const result = await userService.createNewUser(req.body);
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: "error", message: error.message });
    }
};

// const addUser = (req,res) => {
//     // const user = new User(req.body)

//     // user.save()
//     // .then(() => {
//     //     res.status(201).send({
//     //         status: "success",
//     //         message: "The user has been successfully added.",
            
//     //     });
//     // })
//     // .catch((error) => {
//     //     console.error(error);
//     //     res.status(500).send({
//     //         status: "error",
//     //         message: "An error occurred while trying to add the user."
//     //     });
//     // });

//     userService.createNewUser(req.body)
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((error) => {
//         res.send(error)
//     })
// }

const getUser = async (req, res) => {
    try {
        const result = await userService.getUsers();
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            status: "error",
            message: error.message
        });
    }
};

// const getUser = (req,res) => {                            // these are asynchronous methods which will fire call back function when it will find
//                                                             // the user
//     User.find()
//     .then((result) => {
//         res.status(200).send({
//             status: "success",
//             data: result
//         });
//     })
//     .catch((err) => {
//         console.error(err);
//         res.status(500).send({
//             status: "error",
//             message: "An error occurred while trying to retrieve the users."
//         });
//     });
// }

const findUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await userService.findUserById(id);
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        const statusCode = error.message === "User not found." ? 404 : 500;
        res.status(statusCode).send({
            status: "error",
            message: error.message
        });
    }
};

// const findUser = (req,res) => {
    
//     const id = req.params.id
//     User.findById(id)
//     .then((result) => {
//         if (!result) {
//             return res.status(404).send({
//                 status: "error",
//                 message: "User not found."
//             });
//         }
//         res.status(200).send({
//             status: "success",
//             data: result
//         });
//     })
//     .catch((err) => {
//         console.error(err);
//         res.status(500).send({
//             status: "error",
//             message: "An error occurred while trying to retrieve the user."
//         });
//     });

// }

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const result = await userService.updateUserById(id, updateData);
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        const statusCode = error.message === "User not found." ? 404 : 500;
        res.status(statusCode).send({
            status: "error",
            message: error.message
        });
    }
};

// const updateUser = (req,res) => {

//     const id = req.params.id
    
//     User.findByIdAndUpdate(id,req.body,{ new: true })
//     .then((result) => {
//         if (!result) {
//             return res.status(404).send({
//                 status: "error",
//                 message: "User not found."
//             });
//         }
//         res.status(200).send({
//             status: "success",
//             message: "Changes have been done successfully.",
            
//         });
//     })      
//     .catch((err) => {
//         console.error(err);
//         res.status(500).send({
//             status: "error",
//             message: "An error occurred while trying to update the user."
//         });
//     });    
        
// }

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const result = await userService.updateUser(id, updateData);
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        const statusCode = error.message === "User not found." ? 404 : 500;
        res.status(statusCode).send({
            status: "error",
            message: error.message
        });
    }
};

// const updateUserById = (req,res) => {

//     const id = req.params.id
    
//     User.findByIdAndUpdate(id,req.body,{ new: true })
//     .then((result) => {
//         if (!result) {
//             return res.status(404).send({
//                 status: "error",
//                 message: "User not found."
//             });
//         }
//         res.status(200).send({
//             status: "success",
//             message: "Changes have been done successfully.",
           
//         });
//     })      
//     .catch((err) => {
//         console.error(err);
//         res.status(500).send({
//             status: "error",
//             message: "An error occurred while trying to update the user."
//         });
//     });    
        
// }

const softDeleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await userService.softDeleteUserById(id);
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        const statusCode = error.message === "User not found." ? 404 : 500;
        res.status(statusCode).send({
            status: "error",
            message: error.message
        });
    }
};

// module.exports = {addUser,getUser,findUser,updateUser,updateUserById,deleteUser}
module.exports = {createNewUser,getUser,findUser,updateUser,updateUserById,softDeleteUserById};