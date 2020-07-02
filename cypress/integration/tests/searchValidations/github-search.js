import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'; 
import GithubSearchPage from '../../../pages/github-search-page'

Given('I am on the main page',()=>{
    GithubSearchPage.visit()
})

When('I type in github {string}',username => {
    GithubSearchPage.typeUser(username)
})

Then('I click go button', ()=> {
    GithubSearchPage.clickGoButton()
})

Then('I see the repositories header contains {string}', value => {
    GithubSearchPage.verifyRepoCount(value)
})

Then('I verify the repository name {string} and description {string}',(repoName, description) => {
    GithubSearchPage.verifyRepoDetails(repoName, description)
})

Then('I verify status {string} and message as {string}',(status, message) => {
    GithubSearchPage.searchStatus(status, message)
})
