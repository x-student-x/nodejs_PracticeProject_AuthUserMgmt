const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  // Update the code here
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
  res.send(JSON.stringify({users},null,4));
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  // Update the code here
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
  const email = req.params.email;
  res.send(friends[email])
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
  // Update the code here
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
  if (req.body.email){
        friends[req.body.email] = {
            "firstName":req.body.firstName,
            "laneName":req.body.lastName,
            "DOB":req.body.DOB
            //Add similarly for lastName
            //Add similarly for DOB
            }
    }
res.send("The user" + (' ')+ (req.body.firstName) + " Has been added!");
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
  const email = req.params.email;
    let friend = friends[email]
    if (friend) { //Check is friend exists
        let DOB = req.body.DOB;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        //Add similarly for firstName
        //Add similarly for lastName
        //if DOB the DOB has been changed, update the DOB
        if(DOB) {
            friend["DOB"] = DOB
        }
        if(firstName) {
          friend["firstName"]
        }
        if(lastName) {
          freind["lastName"]
        }
        //Add similarly for firstName
        //Add similarly for lastName
        friends[email]=friend;
        friends[firstName]=firstName;
        friends[lastName]=lastName;
        res.send(`Friend with the email  ${email} updated.`);
    }
    else{
        res.send("Unable to find friend!");
    }
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
  const email = req.parms.email;
  if(email) {
    delete friends[email]
  }
  res.send('Friend with the email ${email} deleted.')
});

module.exports=router;
