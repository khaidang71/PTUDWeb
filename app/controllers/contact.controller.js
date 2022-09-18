exports.create = (req, res) =>{
    req.send({ message: "create handler"});
};

exports.findAll = (req, res) => {
    req.send({ message: "finAll handler"});
};

exports.findOne = (req, res) => {
    req.send({ message: "finOne handler"});
};

exports.update = (req, res) => {
    req.send({ message: "update handler"});
};

exports.delete = (req, res) => {
    req.send({ message: "delete handler"});
};

exports.deleteAll = (req, res) => {
    req.send({ message: "deleteAll handler"});
};

exports.findAllFavorite = (req, res) => {
    req.send({ message: "finAllFavorite handler"});
};