Feature: Validation of search function with valid and invalid github user
@e2e-Positive
Scenario:Verify the user search shows up the repositories and respective description details
Given I am on the main page
When I type in github 'varunthota'
Then I click go button
And I verify status 'success' and message as 'Success!'
And I see the repositories header contains '3'
Then I verify the repository name 'AutomationCodingChallenge' and description 'project-a challenge'
And I verify the repository name 'TestProject' and description '–'


@e2e-Negative
Scenario:Verify the flow with the invalid user
Given I am on the main page
When I type in github 'vtesttest'
Then I click go button
And I verify status 'failure' and message as 'Github user not found'
And I see the repositories header contains 'No repos'
