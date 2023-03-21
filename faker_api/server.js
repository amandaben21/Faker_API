const {faker} = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

/*
User:
password
email
phoneNumber
lastName
firstName
_id*/

const User = () =>{
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        _id: faker.database.mongodbObjectId()
    }
    return newUser;
};


/*
Company:
_id
name
address
street
city
state
zipCode
country*/

const Company = () =>{
    const newCompany = {
        _id: faker.database.mongodbObjectId(),
        name: faker.name.jobType(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

app.get("/api", (req, res) => {
    res.json({ message: "Hey you there!" });
});

/* http://localhost:8000/api/users/new 
    remeber in postman to use http not https */
app.get("/api/users/new", (req, res) => {
    const newUser = User();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(Company())
});

app.get("/api/user/companies", (req, res) => {
    res.json({user:User(), company:Company()})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );