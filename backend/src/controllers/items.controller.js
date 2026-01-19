const Item = require('../models/item.model');

exports.getItems = async (req, res) => {
    const items = await Item.find();
    res.status(200).json(items);
};

exports.createItem = async(req, res) =>{
    const item = await Item.create(req.body);
    res.status(201).json(item);
};



