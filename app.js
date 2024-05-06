const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // Parse the URL query parameters
    const queryParams = url.parse(req.url, true).query;

    // Extract parameters from query
    const session_id = queryParams["session_id"] || "";
    const service_code = queryParams["service_code"] || "";
    const phonenumber = queryParams["phonenumber"] || "";
    const test = queryParams["test"] || "";

    let response = ""; // Initialize response variable

    if (test === " ") {
        response += "CON What would you want to check \n";
        response += "1. My Account No \n";
        response += "2. My Phone Number\n";
    } else if (test === "1") {
        response += "CON choose the account information you want to view \n";
        response += "1. Account Number\n";
        response += "2. Account Balance\n";
    } else if (test === "2") {
        response += "END Your Phone number is " + phonenumber;
    } else if (test === "1*1") {
        const account_number = "ac4041";
        response += "END Your account number is " + account_number;
    } else if (test === "1*2") {
        const account_balance = 34000;
        response += "END Your account balance is " + account_balance;
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(response);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
