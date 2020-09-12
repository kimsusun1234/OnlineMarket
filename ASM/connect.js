//connect to db
const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://kimsusun1234:theanh@onlinemarket.rnfcv.mongodb.net/OnlineMarket?retryWrites=true&w=majority';
const client = MongoClient(url, { useUnifiedTopology: true });

async function run(){

    try {

        await client.connect();//ket noi voi server
        //neu thanh cong thi log ra
        console.log('Connect to db Successfully');

        //khai bao bien de tham chieu toi db
        const db = client.db('OnlineMarket');

        //tham chieu den collection 'users'
        const users = db.collection('users');

        //tao mot mang cac du lieu muon insert
        //data duoc cau truc theo dang JSON
        let demoData = [
            {
                'id':'theanh',
                'password':'theanh',
                'birthday': new Date(2000, 6, 12), //YYYY/MM/DD month tinh tu 0 - 11
                'phone':'0388751157',
                'address':'123abcd',
                'image': 'default',
                'role': 'admin',
                'status': true,
            },

            {
                'id':'user1',
                'password':'123456',
                'birthday': new Date(1999, 7, 20), //YYYY/MM/DD month tinh tu 0 - 11
                'phone':'22244434',
                'address':'aaaaaaa',
                'image': 'default',
                'role': 'customer',
                'status': true,
            },

            {
                'id':'user2',
                'password':'123456',
                'birthday': new Date(1980, 11, 30), //YYYY/MM/DD month tinh tu 0 - 11
                'phone':'663333',
                'address':'bbbbbbb',
                'image': 'default',
                'role': 'customer',
                'status': false,
            }
        ];

        let demoDataOne = {
            'id':'theanh',
            'password':'theanh',
            'birthday': new Date(2000, 6, 12), //YYYY/MM/DD month tinh tu 0 - 11
            'phone':'0388751157',
            'address':'123abcd',
            'image': 'default',
            'role': 'admin',
            'status': true,
        };

        //insert data
        const insertTask = await users.insertOne(demoDataOne);

        // Find one document
        const myDoc = await users.findOne();
        // Print to the console
        console.log(myDoc);


    } catch (error) {

        console.log(error.stack);
        
    }

    finally {

        await client.close();

    }

}

run().catch(console.dir);