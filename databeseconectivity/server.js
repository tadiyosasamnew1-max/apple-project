// const express = require("express");
// const mysql = require("mysql2");

// const app = express();

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "Tadiyos",
//     password: "12345",
   
// });

// db.connect((err) => {
//     if (err) {
//         console.error("MySQL connection failed:", err);
//         return;
//     // 

//     console.log("MySQL connected successfully!");
// });

// app.get("/", (req, res) => {
//     res.send("Hello Tadiyos!");
// });

// app.get("/create-teble",(req,res)=>{
//     let name =`CREATE TABLE if not  exist customers(
//     customer_id int auto_increment,
//     name VARCHAR(255) not null,
//     PRIMARY KEY (customer_id))`;

// let address =`CREATE TABLE if not  exist address (
//     address_id int auto_increment,
//      customer_id int(11) not null,
//     address VARCHAR(255) not null,
//     PRIMARY KEY (address_id)),
//     FOREIGN KEY (customer_id) REFERENCES customers 
//     (customer_id)`;

//     let  company =`CREATE TABLE if not  exist company (
//     company_id int auto_increment,
//      customer_id int(11) not null,
//     company VARCHAR(255) not null,
//     PRIMARY KEY (company_id)),
//     FOREIGN KEY (customer_id) REFERENCES customers 
//     (customer_id)`;
// })




// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });






// const express = require("express");
// const mysql = require("mysql2");

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // MySQL connection
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "tadiyos",
//     password: "123456",
//     database: "mydatabase"
// });

// // Connect to MySQL
// db.connect((err) => {
//     if (err) {
//         console.error("MySQL connection failed:", err);
//         return;
//     }

//     console.log("MySQL connected successfully!");
// });

// // Home
// app.get("/", (req, res) => {
//     res.send(`
//         <h1>Hello Tadiyos!</h1>

//         <h2>Customer System</h2>

//         <a href="/create-table">Create Tables</a>
//         <br><br>

//         <a href="/add-customer">Add Customer</a>
//         <br><br>

//         <a href="/customers">Display Customers</a>
//     `);
// });


// // ========================================
// // CREATE TABLES
// // ========================================

// app.get("/create-table", (req, res) => {

//     const customers = `
//         CREATE TABLE IF NOT EXISTS customers (
//             customer_id INT AUTO_INCREMENT,
//             name VARCHAR(255) NOT NULL,
//             age INT,
//             class VARCHAR(100),
//             PRIMARY KEY (customer_id)
//         )
//     `;

//     const address = `
//         CREATE TABLE IF NOT EXISTS address (
//             address_id INT AUTO_INCREMENT,
//             customer_id INT NOT NULL,
//             address VARCHAR(255) NOT NULL,
//             PRIMARY KEY (address_id),
//             FOREIGN KEY (customer_id)
//                 REFERENCES customers(customer_id)
//         )
//     `;

//     const company = `
//         CREATE TABLE IF NOT EXISTS company (
//             company_id INT AUTO_INCREMENT,
//             customer_id INT NOT NULL,
//             company VARCHAR(255) NOT NULL,
//             PRIMARY KEY (company_id),
//             FOREIGN KEY (customer_id)
//                 REFERENCES customers(customer_id)
//         )
//     `;


//     db.query(customers, (err) => {

//         if (err) {
//             console.error(err);
//             return res.send("Error creating customers table");
//         }

//         console.log("Customers table created");


//         db.query(address, (err) => {

//             if (err) {
//                 console.error(err);
//                 return res.send("Error creating address table");
//             }

//             console.log("Address table created");


//             db.query(company, (err) => {

//                 if (err) {
//                     console.error(err);
//                     return res.send("Error creating company table");
//                 }

//                 console.log("Company table created");

//                 res.send(`
//                     <h1>Tables Created Successfully!</h1>
//                     <a href="/">Go Home</a>
//                 `);
//             });
//         });
//     });
// });


// // ========================================
// // ADD CUSTOMER FORM
// // ========================================

// app.get("/add-customer", (req, res) => {

//     res.send(`
//         <h1>Add Customer</h1>

//         <form action="/add-customer" method="POST">

//             <label>Name:</label>
//             <input type="text" name="name" required>
//             <br><br>

//             <label>Age:</label>
//             <input type="number" name="age" required>
//             <br><br>

//             <label>Class:</label>
//             <input type="text" name="class" required>
//             <br><br>

//             <button type="submit">
//                 Add Customer
//             </button>

//         </form>

//         <br>

//         <a href="/">Go Home</a>
//     `);
// });


// // ========================================
// // INSERT CUSTOMER
// // ========================================

// app.get("/add-customer", (req, res) => {

//     res.send(`
//         <h1>Add Customer</h1>

//         <form action="/add-customer" method="POST">

//             <label>Name:</label>
//             <input type="text" name="name" required>
//             <br><br>

//             <label>Age:</label>
//             <input type="number" name="age" required>
//             <br><br>

//             <label>Class:</label>
//             <input type="text" name="class" required>
//             <br><br>

//             <label>Address:</label>
//             <input type="text" name="address" required>
//             <br><br>

//             <label>Company:</label>
//             <input type="text" name="company" required>
//             <br><br>

//             <button type="submit">
//                 Add Customer
//             </button>

//         </form>

//         <br>

//         <a href="/">Go Home</a>
//     `);
// });


// // ========================================
// // DISPLAY CUSTOMERS
// // ========================================

// app.get("/customers", (req, res) => {

//     const sql = `
//     SELECT
//         customers.customer_id,
//         customers.name,
//         customers.age,
//         customers.class,
//         address.address,
//         company.company
//     FROM customers
//     LEFT JOIN address
//         ON customers.customer_id = address.customer_id
//     LEFT JOIN company
//         ON customers.customer_id = company.customer_id
// `;

//     db.query(sql, (err, results) => {

//         if (err) {
//             console.error(err);
//             return res.send("Error getting customers");
//         }

//         let html = `
//             <h1>Customers</h1>

//             <table border="1" cellpadding="10">

//                 <tr>
//                    <th>ID</th>
// <th>Name</th>
// <th>Age</th>
// <th>Class</th>
// <th>Address</th>
// <th>Company</th>
//                 </tr>
//         `;

//         results.forEach((customer) => {

//             html += `
//                 <tr>
//                     <td>${customer.customer_id}</td>
//                     <td>${customer.name}</td>
//                     <td>${customer.age}</td>
//                     <td>${customer.class}</td>
//                     <td>${customer.address || ""}</td>
// <td>${customer.company || ""}</td>
//                 </tr>
//             `;
//         });

//         html += `
//             </table>

//             <br>

//             <a href="/add-customer">
//                 Add Another Customer
//             </a>

//             <br><br>

//             <a href="/">
//                 Go Home
//             </a>
//         `;

//         res.send(html);
//     });
// });

// app.get("/customer-details/:id", (req, res) => {

//     const customerId = req.params.id;

//     const sql = `
//         SELECT
//             customers.customer_id,
//             customers.name,
//             customers.age,
//             customers.class,
//             address.address,
//             company.company
//         FROM customers
//         LEFT JOIN address
//             ON customers.customer_id = address.customer_id
//         LEFT JOIN company
//             ON customers.customer_id = company.customer_id
//         WHERE customers.customer_id = ?
//     `;

//     db.query(sql, [customerId], (err, results) => {

//         if (err) {
//             console.error(err);
//             return res.send("Database error");
//         }

//         if (results.length === 0) {
//             return res.send("Customer not found");
//         }

//         res.send(results[0]);
//     });
// });


// app.get("/add-details/:id", (req, res) => {

//     const customerId = req.params.id;

//     res.send(`
//         <h1>Add Customer Details</h1>

//         <form action="/add-details/${customerId}" method="POST">

//             <label>Address:</label>
//             <input type="text" name="address" required>
//             <br><br>

//             <label>Company:</label>
//             <input type="text" name="company" required>
//             <br><br>

//             <button type="submit">
//                 Save Details
//             </button>

//         </form>
//     `);
// });



// app.post("/add-details/:id", (req, res) => {

//     const customerId = req.params.id;

//     const { address, company } = req.body;

//     const addressSQL = `
//         INSERT INTO address
//         (customer_id, address)
//         VALUES (?, ?)
//     `;

//     const companySQL = `
//         INSERT INTO company
//         (customer_id, company)
//         VALUES (?, ?)
//     `;

//     // First save address
//     db.query(
//         addressSQL,
//         [customerId, address],
//         (err) => {

//             if (err) {
//                 console.error(err);
//                 return res.send("Error saving address");
//             }

//             // Then save company
//             db.query(
//                 companySQL,
//                 [customerId, company],
//                 (err) => {

//                     if (err) {
//                         console.error(err);
//                         return res.send("Error saving company");
//                     }

//                     res.redirect(`/customer-details/${customerId}`);
//                 }
//             );
//         }
//     );
// });
// // ========================================
// // START SERVER
// // ========================================

// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });







/////////~~~=======================~~~////////////


const express = require("express");
const mysql = require("mysql2");

const app = express();


// ========================================
// MIDDLEWARE
// ========================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ========================================
// MYSQL CONNECTION
// ========================================

const db = mysql.createConnection({
    host: "localhost",
    user: "tadiyos",
    password: "12345",
    database: "mydatabase"
});


// ========================================
// CONNECT MYSQL
// ========================================

db.connect((err) => {

    if (err) {
        console.error("MySQL connection failed:", err);
        return;
    }

    console.log("MySQL connected successfully!");
});


// ========================================
// HOME
// ========================================

app.get("/", (req, res) => {

    res.send(`
        <h1>Customer System</h1>

        <a href="/create-table">Create Tables</a>
        <br><br>

        <a href="/add-customer">Add Customer</a>
        <br><br>

        <a href="/customers">View Customers</a>
    `);
});


// ========================================
// CREATE TABLES
// ========================================

app.get("/create-table", (req, res) => {

    const customersSQL = `
        CREATE TABLE IF NOT EXISTS customers (
            customer_id INT AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            age INT NOT NULL,
            class VARCHAR(100) NOT NULL,
            PRIMARY KEY (customer_id)
        )
    `;

    const addressSQL = `
        CREATE TABLE IF NOT EXISTS address (
            address_id INT AUTO_INCREMENT,
            customer_id INT NOT NULL,
            address VARCHAR(255) NOT NULL,
            PRIMARY KEY (address_id),
            FOREIGN KEY (customer_id)
            REFERENCES customers(customer_id)
        )
    `;

    const companySQL = `
        CREATE TABLE IF NOT EXISTS company (
            company_id INT AUTO_INCREMENT,
            customer_id INT NOT NULL,
            company VARCHAR(255) NOT NULL,
            PRIMARY KEY (company_id),
            FOREIGN KEY (customer_id)
           REFERENCES customers(customer_id)
        )
    `;


    db.query(customersSQL, (err) => {

        if (err) {
            console.error(err);
            return res.send("Error creating customers table");
        }

        db.query(addressSQL, (err) => {

            if (err) {
                console.error(err);
                return res.send("Error creating address table");
            }

            db.query(companySQL, (err) => {

                if (err) {
                    console.error(err);
                    return res.send("Error creating company table");
                }

                res.send(`
                    <h1>All Tables Created Successfully!</h1>
                    <br>
                    <a href="/">Go Home</a>
                `);
            });
        });
    });
});


// ========================================
// ADD CUSTOMER FORM
// ========================================

app.get("/add-customer", (req, res) => {

    res.send(`

        <h1>Add Customer</h1>

        <form action="/add-customer" method="POST">

            <label>Name:</label>
            <input type="text" name="name" required>

            <br><br>

            <label>Age:</label>
            <input type="number" name="age" required>

            <br><br>

            <label>Class:</label>
            <input type="text" name="class" required>

            <br><br>

            <label>Address:</label>
            <input type="text" name="address" required>

            <br><br>

            <label>Company:</label>
            <input type="text" name="company" required>

            <br><br>

            <button type="submit">
                Add Customer
            </button>

        </form>

        <br>

        <a href="/customers">
            View Customers
        </a>

    `);
});


// ========================================
// ADD CUSTOMER
// ========================================

app.post("/add-customer", (req, res) => {

    const {
        name,
        age,
        class: studentClass,
        address,
        company
    } = req.body;


    const customerSQL = `
        INSERT INTO customers
        (name, age, class)
        VALUES (?, ?, ?)
    `;


    db.query(
        customerSQL,
        [name, age, studentClass],
        (err, result) => {

            if (err) {
                console.error(err);
                return res.send("Error adding customer");
            }


            const customerId = result.insertId;


            const addressSQL = `
                INSERT INTO address
                (customer_id, address)
                VALUES (?, ?)
            `;


            db.query(
                addressSQL,
                [customerId, address],
                (err) => {

                    if (err) {
                        console.error(err);
                        return res.send("Error adding address");
                    }


                    const companySQL = `
                        INSERT INTO company
                        (customer_id, company)
                        VALUES (?, ?)
                    `;


                    db.query(
                        companySQL,
                        [customerId, company],
                        (err) => {

                            if (err) {
                                console.error(err);
                                return res.send("Error adding company");
                            }

                            res.redirect("/customers");
                        }
                    );
                }
            );
        }
    );
});


// ========================================
// DISPLAY CUSTOMERS
// ========================================

app.get("/customers", (req, res) => {

    const sql = `
        SELECT
            customers.customer_id,
            customers.name,
            customers.age,
            customers.class,
            address.address,
            company.company
        FROM customers
        LEFT JOIN address
            ON customers.customer_id = address.customer_id
        LEFT JOIN company
            ON customers.customer_id = company.customer_id
        ORDER BY customers.customer_id
    `;


    db.query(sql, (err, results) => {

        if (err) {
            console.error(err);
            return res.send("Error getting customers");
        }


        let html = `

            <h1>Customers</h1>

            <a href="/add-customer">
                Add Customer
            </a>

            <br><br>

            <table
                border="1"
                cellpadding="10"
                cellspacing="0"
            >

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Class</th>
                    <th>Address</th>
                    <th>Company</th>
                    <th>Actions</th>
                </tr>
        `;


        results.forEach((customer) => {

            html += `

                <tr>

                    <td>
                        ${customer.customer_id}
                    </td>

                    <td>
                        ${customer.name}
                    </td>

                    <td>
                        ${customer.age}
                    </td>

                    <td>
                        ${customer.class}
                    </td>

                    <td>
                        ${customer.address || ""}
                    </td>

                    <td>
                        ${customer.company || ""}
                    </td>

                    <td>

                        <a href="/edit-customer/${customer.customer_id}">
                            Edit
                        </a>

                        <br><br>

                        <form
                            action="/delete-customer/${customer.customer_id}"
                            method="POST"
                        >

                            <button type="submit">
                                Delete
                            </button>

                        </form>

                    </td>

                </tr>
            `;
        });


        html += `

            </table>

            <br><br>

            <a href="/">
                Go Home
            </a>

        `;


        res.send(html);
    });
});


// ========================================
// EDIT CUSTOMER FORM
// ========================================

app.get("/edit-customer/:id", (req, res) => {

    const customerId = req.params.id;


    const sql = `
        SELECT
            customers.customer_id,
            customers.name,
            customers.age,
            customers.class,
            address.address,
            company.company

        FROM customers

        LEFT JOIN address
            ON customers.customer_id = address.customer_id

        LEFT JOIN company
            ON customers.customer_id = company.customer_id

        WHERE customers.customer_id = ?
    `;


    db.query(sql, [customerId], (err, results) => {

        if (err) {
            console.error(err);
            return res.send("Database error");
        }


        if (results.length === 0) {
            return res.send("Customer not found");
        }


        const customer = results[0];


        res.send(`

            <h1>Update Customer</h1>

            <form
                action="/update-customer/${customer.customer_id}"
                method="POST"
            >

                <label>Name:</label>

                <input
                    type="text"
                    name="name"
                    value="${customer.name}"
                    required
                >

                <br><br>


                <label>Age:</label>

                <input
                    type="number"
                    name="age"
                    value="${customer.age}"
                    required
                >

                <br><br>


                <label>Class:</label>

                <input
                    type="text"
                    name="class"
                    value="${customer.class}"
                    required
                >

                <br><br>


                <label>Address:</label>

                <input
                    type="text"
                    name="address"
                    value="${customer.address || ""}"
                    required
                >

                <br><br>


                <label>Company:</label>

                <input
                    type="text"
                    name="company"
                    value="${customer.company || ""}"
                    required
                >

                <br><br>


                <button type="submit">
                    Update Customer
                </button>

            </form>

            <br>

            <a href="/customers">
                Cancel
            </a>

        `);
    });
});


// ========================================
// UPDATE CUSTOMER
// ========================================

app.post("/update-customer/:id", (req, res) => {

    const customerId = req.params.id;


    const {
        name,
        age,
        class: studentClass,
        address,
        company
    } = req.body;


    // Update customers
    const customerSQL = `
        UPDATE customers
        SET
            name = ?,
            age = ?,
            class = ?
        WHERE customer_id = ?
    `;


    db.query(
        customerSQL,
        [name, age, studentClass, customerId],
        (err) => {

            if (err) {
                console.error(err);
                return res.send("Error updating customer");
            }


            // Update address
            const addressSQL = `
                UPDATE address
                SET address = ?
                WHERE customer_id = ?
            `;


            db.query(
                addressSQL,
                [address, customerId],
                (err) => {

                    if (err) {
                        console.error(err);
                        return res.send("Error updating address");
                    }


                    // Update company
                    const companySQL = `
                        UPDATE company
                        SET company = ?
                        WHERE customer_id = ?
                    `;


                    db.query(
                        companySQL,
                        [company, customerId],
                        (err) => {

                            if (err) {
                                console.error(err);
                                return res.send(
                                    "Error updating company"
                                );
                            }


                            res.redirect("/customers");
                        }
                    );
                }
            );
        }
    );
});


// ========================================
// DELETE CUSTOMER
// ========================================

app.post("/delete-customer/:id", (req, res) => {

    const customerId = req.params.id;


    // Delete address first
    const addressSQL = `
        DELETE FROM address
        WHERE customer_id = ?
    `;


    db.query(
        addressSQL,
        [customerId],
        (err) => {

            if (err) {
                console.error(err);
                return res.send("Error deleting address");
            }


            // Delete company
            const companySQL = `
                DELETE FROM company
                WHERE customer_id = ?
            `;


            db.query(
                companySQL,
                [customerId],
                (err) => {

                    if (err) {
                        console.error(err);
                        return res.send("Error deleting company");
                    }


                    // Delete customer
                    const customerSQL = `
                        DELETE FROM customers
                        WHERE customer_id = ?
                    `;


                    db.query(
                        customerSQL,
                        [customerId],
                        (err) => {

                            if (err) {
                                console.error(err);
                                return res.send(
                                    "Error deleting customer"
                                );
                            }


                            res.redirect("/customers");
                        }
                    );
                }
            );
        }
    );
});


// ========================================
// START SERVER
// ========================================

app.listen(3000, () => {

    console.log(
        "Server running on http://localhost:3000"
    );

});