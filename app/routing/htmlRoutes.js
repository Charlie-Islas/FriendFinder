var path = require("path");
// ROUTING
module.exports = function (app) {
    //Survey Route
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
   
    // DEFAULT ROUTE
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    
}