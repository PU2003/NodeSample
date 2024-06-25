const User = require('../model/UserModel');

async function createNewUser(userData) {
    try {
        const user = new User(userData);
        await user.save();
        return { status: "success", message: "The user has been successfully added." };
    } catch (error) {
        console.error(error);
        throw new Error("An error occurred while trying to add the user.");
    }
}

async function getUsers() {
    try {
        const users = await User.find();
        return { status: "success", data: users };
    } catch (error) {
        console.error(error);
        throw new Error("An error occurred while trying to retrieve the users.");
    }
}

async function findUserById(id) {
    try {
        const user = await User.findById(id);
        if (!user) {
            throw new Error("User not found.");
        }
        return { status: "success", data: user };
    } catch (error) {
        console.error(error);
        throw new Error("An error occurred while trying to retrieve the user.");
    }
}

async function updateUserById(id, updateData) {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedUser) {
            throw new Error("User not found.");
        }
        return { status: "success", message: "Changes have been done successfully." };
    } catch (error) {
        console.error(error);
        throw new Error("An error occurred while trying to update the user.");
    }
}

async function updateUser(id, updateData) {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedUser) {
            throw new Error("User not found.");
        }
        return { status: "success", message: "Changes have been done successfully." };
    } catch (error) {
        console.error(error);
        throw new Error("An error occurred while trying to update the user.");
    }
}

async function softDeleteUserById(id) {
    try {
        const deletedUser = await User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        if (!deletedUser) {
            throw new Error("User not found.");
        }
        return { status: "success", message: "The user has been deleted successfully (soft delete)." };
    } catch (error) {
        console.error(error);
        throw new Error("An error occurred while trying to delete the user.");
    }
}


module.exports =  createNewUser ,getUsers, findUserById, updateUserById,updateUser,softDeleteUserById;