const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});
app.post("/", function(req, res) {
    const firstName = req.body.f_name;
    const lastName = req.body.l_name;
    const e_mail = req.body.email;
    const data = {
        members: [{
            email_address: e_mail,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
            },
        }, ],
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us14.api.mailchimp.com/3.0/lists/a6c647850f";
    const options = {
        method: "POST",
        auth: "iamakhileshmishra:f2a163feee7fbf635c590613c2483c4e-us14",
    };
    const request = https.request(url, options, function(response) {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        });
    });
    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res) {
    res.redirect("/");
});
app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
});

//API KEY -  MailChhimp
// f2a163feee7fbf635c590613c2483c4e-us14
// ID -  a6c647850f