# Warbler Server
This is the server for Warbler client. This app was built using Express web application framework. Warbler server handles all user 
authentication and CRUD operations related to users and messages. User and message data are stored in a MongoDB database which is 
hosted on [mLab](https://mlab.com/).

This app was built using following javascript libraries and frameworks.
- [Express](https://expressjs.com/) - This is used as the server framework.
- [Mongoose](https://mongoosejs.com/) - This library is used for MongoDB object modeling.
- [cors](https://www.npmjs.com/package/cors) - This library is used to enable CORS(Cross-origin resource sharing).
- [body-parser](https://www.npmjs.com/package/body-parser) - This library is used to parse incoming request bodies. 
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - This library is used to help with authentication. 
- [dotenv](https://www.npmjs.com/package/dotenv) - This library is used to load environment variables from a .env file.
- [bcrypt](https://www.npmjs.com/package/bcrypt) - This library is used to hash passwords.
