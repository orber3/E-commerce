import bcrypt from 'bcryptjs'


const users = [ 
    
    { 
name: 'admin user',
email: 'orber3@gmail.com', 
password: bcrypt.hashSync('1234567',7),
isAdmin: true
},
{ 
    name: 'jon',
    email: 'jon@example.com', 
    password: bcrypt.hashSync('1234567',7),
    isAdmin: true
    },

    { 
        name: 'jane',
        email: 'jane@example.com', 
        password: bcrypt.hashSync('1234567',7),
        isAdmin: true
        },
        { 
            name: 'mel',
            email: 'mel@example.com', 
            password: bcrypt.hashSync('1234567',7),
            isAdmin: true
            },
                    


]
export default users