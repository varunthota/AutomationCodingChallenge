
class GithubSearchPage {

     static visit(){
          cy.visit('/')
     }

    static typeUser(username){
         cy.get('#username').type(username)
    }

    static clickGoButton(){
         cy.get('main button').click()
    }


    static verifyRepoCount(details){
         cy.get('.output-area p').first().contains(details)
    }

    static verifyRepoDetails(repoName, repoDescription){
         cy.verifyRepoDetails(repoName, repoDescription)
    }

    static searchStatus(status, message){
         cy.get('.message-'+status+' strong').should('be.visible')
         cy.get('.message-'+status+' strong').should('have.text', message)
    }
}

export default GithubSearchPage
