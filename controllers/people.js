// 1. Load the Person model
const User = require('../models/user.js');

// 2. Get a paginated list of all People
exports.list = (req, res) => {
    const query = {};
    const page = req.params.page || 1;
    const options = {
        select: 'first last',
        page: page
    };
    User.paginate(query, options).then(function(result) {
        res.json(result);
    });
};

// 2. Get an individual Person's public information
exports.show = (req, res) => {
    User.findById(req.params.id)
        .select('first last')
        .exec(function(err, doc){
            if(err || doc === null){
                res.status(404).json({
                    error: 'PersonNotFound'
                });
            } else {
                res.json(doc);
            }
        });
};

// 3. Get an individual person's private profile information
exports.profile = (req, res) => {
    User.findById(req.user.userId)
        .select('email first last')
        .exec(function(err, doc){
            if(err || doc === null){
                res.status(404).json({
                    error: 'PersonNotFound'
                });
            } else {
                res.json(doc);
            }
        });
};
