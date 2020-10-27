
//@desc get all bootcamps
//@route GET /api/v1/bootcamps
//@access public

exports.getBootcamps = (req , resp , next)=>{
    resp.status(200).json({ success: true, msg: "Show all bootcamps",hello:req.hello });

}


//@desc get single bootcamps
//@route GET /api/v1/bootcamps/:id
//@access public
exports.getBootcamp = (req , resp , next)=>{
    
    resp
    .status(200)
    .json({ success: true, msg: `get bootcamps ${req.params.id} ` });
}

//@desc create new bootcamp
//@route POST /api/v1/bootcamps
//@access private
exports.createBootcamp = (req , resp , next)=>{
    resp.status(200).json({ success: true, msg: "create new bootcamps" });
}


//@desc update new bootcamp
//@route put /api/v1/bootcamps/:id
//@access private
exports.updateBootcamp = (req , resp , next)=>{
    resp
    .status(200)
    .json({ success: true, msg: `Update bootcamps ${req.params.id} ` });
}




//@desc delete new bootcamp
//@route DELETE /api/v1/bootcamps
//@access delete
exports.deleteBootcamp = (req , resp , next)=>{
    resp.status(200).json({ success: true, msg: "Delete bootcamps" });

}