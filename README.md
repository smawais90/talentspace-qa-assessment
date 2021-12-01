## Steps to setup the project: 

* Clone the project in local directory from github
* Open console with the path to your project folder
* Run command "npm install" in your console to install all dependencies
* After installing the depedencies run command "npx cypress open" Or "npm run test" to run the tests.
* If you will "run npm run test" command you will see the reports in the reports folder of cypress created through "Mocha Reports"


## Test Case Strategy: 

I have put my all test cases in one file and tried to keep the code as simple as I can. I couldn't use the sign in functionality[reason explained in the techincal Questions area].

I have created two commands for sign and register. Because we can reuse them in different test cases with different fucntion parameters. 

I have created add-book as separate function and so tha we select a random book everytime.

I have kept the test data in the data.js and elements selectors in  element.js in the Fixture folder. The idea behind this is to keep the code clean and reusable. 


## Technical Questions

1. ## How long did you spend on the technical test? What would you add to your solution if you had more time? If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add.

Answer: I spent 4 hours on this assessment. Most of the time was spent on debugging an issue of sign in failing on cypress browsers. Here is [Link](https://github.com/cypress-io/cypress/issues/1759) to ticket on cypress github regarding same issue without any conlcusion. I have integrated the mochawesome reports, which can be found in the reports section. To genreate test run command "npm run test"

If I would have time I could have wrote and covered this whole application other than tasks mentioned in the assessment, sign in was a blocker.

Can you provide me the code of the application so that we can reproduce it on local and open a ticket for cypress. Thank you

2. ## What do you think is the most interesting trend in test automation?

I think most interesting trend in automation now a days is Maintaing the test cases with the code changes or adapt the pattern. Everyone is looking for a tool which is easy to maintain their test cases. 

I think mobile applications or native application automation is also a bug trend now a days, there are many aspects that should be covered in the native application through automation just as Web, like at least the critical parts. 

One thing that is not being considered important or only being considered important on the day of need is load and stress testing, which should be covered from very begining and should be managed with the applicaton process. 

3. ## How would you approach adding automated testing to an existing (web) application with no existing E2E tests? Have you ever had to do this?

Yes, I have an experience of doing this, Tame was a project which was already being delivered to end users with out automated test cases, and there were frequent changes in the scope of the system.

So we started to write the end to end test cases for the critical functionalities, and also pushed our test cases to the Circle Ci, so that they can be run before every release.

This helped us in maintaining our quality of application, by doing the regression testing through cypress before each release, and catch the bad impact as well as bug before it reach to customer. 
