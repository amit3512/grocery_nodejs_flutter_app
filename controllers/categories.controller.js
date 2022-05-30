const categoriesService = require("../services/categories.service");
const upload = require("../middleware/category.upload");
exports.create = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      const path =
        req.file != undefined ? req.file.path.replace[(/\\/g, "/")] : "";
    }
  });
};
