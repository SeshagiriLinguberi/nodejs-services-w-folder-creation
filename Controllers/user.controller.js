let employees= [
    {
        id:123,
        email:"abc@gmail.com",
        personalDetals:
    {
        name:"chinna",
        mobile:1234567890,
        salary:120000
    }},
    {  
         id:456,
        email:"def@gmail.com",
        personalDetals:
        {
            name:"naresh",
            mobile:1234567890,
            salary:120000
        }},
        {
            id:789,
            email:"ghi@gmail.com",
            personalDetals:
            {
                name:"suresh",
                mobile:1234567890,
                salary:120000
            }}
];
//get all users
module.exports.getAllUsers = async (req,res)=>
{
    res.send( {statusCode:200,
        status:true,
        error:false,
        responseData:employees});
}

//get user by id
module.exports.getUserById = async (req,res)=>{
    let userid = req.body;
    let status=false;
    let userInfo = employees.filter((value)=>{
     if(value.id==userid.id)
     {
        status=true;
         return value;
     }
    
    })
    if(status)
    {
        
        res.send({statusCode:200,
            status:true,
            error:false,
            responseData:userInfo});
    }
    else
    {
        res.send({statusCode:-999,
            status:false,
            error:true,
            message:"user not found"});
    }
}

//update user by id
module.exports.updateUserById = async (req,res)=>{
    let userid=req.body;
    let status=false;
     employees.filter((value)=>{
        if(userid.id==value.id)
        {
                value.email=userid.email;
                value.personalDetals.mobile=userid.personalDetals.mobile;
                value.personalDetals.name=userid.personalDetals.name;
                value.personalDetals.salary=userid.personalDetals.salary;
                status=true;
        }
    })
    if(status)
    {
        res.send({statusCode:200,
            status:true,
            error:false,
            responseData:employees  });
    }
    else
    {
        res.send({statusCode:-999,
            status:false,
            error:true,
            message:"User not found"});
    }
}

//add user by id
module.exports.addUserById = async(req,res)=>{
    let newUser=req.body;
    employees.push(newUser);
    res.send(
        {statusCode:200,
        status:true,
        error:false,
        responseData:employees});

}

//delete user by id
module.exports.deleteUserById = async (req,res)=>{
    let userid=req.body;
    let status=false;
    let newData;
    employees.filter((value)=>{
        if(userid.id==value.id)
        {
            status=true;

             newData = employees.filter((value)=>{
                if(value.id!=userid.id)
                {
                    return value;
                }
            })
        }
    })
    if(status)
    {
        res.send({statusCode:200,
            status:true,
            error:false,
            responseData:newData});
    }
    else
    {
        res.send({statusCode:-999,
            status:false,
            error:true,
            message:"user not found"});
    }
}