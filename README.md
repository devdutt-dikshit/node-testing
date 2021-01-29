Create .env file and copy paste all data inside single inverted quote 

'DB_CONNECT=mongodb+srv://username:YOURPW@cluster0.gfx2m.mongodb.net/dbname?retryWrites=true&w=majority

MY_TOKEN=add your own token'

I've created 2 endpoints 

Register user 

POST /user/register    => It'll return token

With Token we can add item and get list of all items

GET /list     => It'll return list of items
POST /add-item   => added item details


