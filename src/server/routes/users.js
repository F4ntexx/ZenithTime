import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

const users = [

]

router.get('/', (req,res) => {
    console.log(users); 
    res.send(users);
});

router.post('/', (req, res) => {
     console.log('POST ROUTE REACHED');
     
  const user = req.body;
  const userID = uuidv4();
  const userWinthID = {... user, id: userID}
  users.push(userWinthID)

     res.json(users);
});
    
export default router;