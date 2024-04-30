const {nano_id} = require("nano_id");
const URL = require("../models/user");

async function handelGenerateUrl (req,res) {
   const shortID = nano_id(8);
   const body = req.body;
   if(!body.url) return res.status(400).json({eror: "url is required"});                                   
   await URL.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
   });
   return res.json({ id: shortID});
};

module.exports = {
   handelGenerateUrl
};