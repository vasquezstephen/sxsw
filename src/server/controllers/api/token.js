/**
 * Created by stephenvasquez on 2/15/16.
 */


var token = {
    read: function(req, res, next){
        Users.findOne({ 'user': req.body.user }, 'user pass', function (err, users) {
            if (users == null) {
                console.log("something is wrong");
                res.send("failure");
            }
            else{
                if(users.pass == sha1(req.body.pass)){
                    res.send("success");
                }
                else{
                    res.send("failure")
                }
            }

        })
    }

};