# api-warehouse

api for pos data warehouse

## HOW TO RUN

    npm i   
    node app 
    or nodemon app

This will start the application. Just open http://localhost:8081.

## COVERAGE

    npm i -g  http-server
    http-server ./artifacts/coverage/lcov-report/ -p 9090

This will start http-server. Just open http://localhost:9090.

## DOCUMENTATION

    npm run documentation
    http-server ./docs/ -p 9099

This will start http-server. Just open http://localhost:9099.


## STATUS CODE

    404 = Not Found
    401 = Authentication required
    400 = Bad Request
    200 = Success
    201 = Created
    500 = Server not found