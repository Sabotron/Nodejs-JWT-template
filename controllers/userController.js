import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.status(200).json({users})
    } catch (error) {
        console.error("Error fetching users!", error);
        return res.status(500).json({message: "Server error"});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            res.status(404).json({message: "User not found!"});
        }
        res.status(200).json({message: "User deleted successfully!"});
    } catch (error) {
        console.error("Error deleting user!", error);
        return res.status(500).json({message: "Server error"});
   
    }
}

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if(!user){
            res.status(404).json({message: "User not found!"});
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching profile!", error);
        return res.status(500).json({message: "Server error"});
    }
}