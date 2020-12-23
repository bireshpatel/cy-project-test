
# Cypress-Modern Automation Testing tool- Case Study!
# cy-project-test

Visit [cy-project-test](https://github.com/bireshpatel/cy-project-test)

## Test Scenarios  [![Cypress Learning](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/17ni7y/master&style=flat-square&logo=cypress)](https://dashboard.cypress.io/projects/17ni7y/runs)


**Following are the test cases implemented**
  
 TC_1_registration_test (Registration functionality) <br>
* Launch browser & open https://demo.nopcommerce.com/login?returnUrl=%2F <br>
* Insert data in textbox <br>
* Locate Radio buttons & select any one from that buttons <br>
* check/uncheck checkboxes <br>
* Select values from dropdowns <br>
* Complete registration <br>
* Save the user details into a fixture file to use in next steps <br>
 
 TC_2_searchaddcart_test (Product Search & add to cart functionality)  
* Launch browser & open url e.g-https://demo.nopcommerce.com/  
* Login functionality with custom commands & call it whenever required  
* Enter text in search box & click on Search button  
* Click on add to cart & provide quantity 2.  
* Click on add to cart. Click on add to cart link at top of page  
* Verify the total amount <br>  

TC_3_api_test (API testing)  
* Validate GET, POST, PUT AND DELETE Request <br>

TC_4_xhrshopping_test (XHR testing with Cypress)
* Demonstrate on Mocking API with stub response using Cypress.
Handle API call directly without involving browser with Cypress <br>

TC_5_xhrapi_test (XHR testing with Cypress)  
* Demonstrate on Mocking API with stub response using Cypress.
Handle API call directly without involving browser with Cypress <br>  

**Additional Coverage** <br>
Project setup with POM, Custom commands, Dashboard feature with
 Video recording & Screenshots, Mocking API with stub response, 
 Fixtures to pass data in Test Cases.

# Run Test:  

| Run Type | Command |
| ------ | ------ |
| UI   | `npm run testui` |
| CLI   | `npm run testcli` |
| Dashboard <br> Upload    | `npm run testupload` |

### Start Jenkin Jobs: <br> 
http://localhost:8080/ (Username: `admin` and Password: `password`)
* Cypress-CLI-Pipeline
* Cypress-Dashboard-Pipeline