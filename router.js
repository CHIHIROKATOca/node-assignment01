const indexPage = require("./routers/index");

const router = (req, res) => {
   console.log(req);
   if(req.url==="/"){
        indexPage(req, res)
   }
};

module.exports = router;