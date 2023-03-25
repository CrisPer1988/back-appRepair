const Repair = require("../models/reapir.model")

exports.allRepair = async (req, res) => {
    const repairs = await Repair.findAll({
        where: {
            status: "pending"
        }
    });

    res.status(200).json({
        message: "The query has been done successs",
        results: repairs.length,
        repairs
    })
}

exports.repairById = (req, res) => {
    res.json({
        message: "reparaciones por id"
    })
}

exports.repairUpDate = (req, res) => {
    res.json({
        message: "actualizando reparacion"
    })
}

exports.createRepair = async (req, res) => {
   try {
    const {date, userId} = req.body;
    
    const repair = await Repair.create({
        date,
        userId,
    });

    res.status(201).json({
        status: "success",
        message: "The repair has been created!",
        repair
    })
    
   } catch (error) {
    return res.status(500).json({
        status: "fail",
        error
    })
   }
}

exports.deleteRepair = (req, res) => {
    res.json({
        message: "The repair has been created!",
       
    })
}

