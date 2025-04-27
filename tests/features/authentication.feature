Feature: User Authentication
  As a user
  I want to be able to login and logout 
  So that I can access protected content and secure my account

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid email "user@example.com"
    And I enter valid password "password123"
    And I click the login button
    Then I should be redirected to the dashboard page
    And I should see my user information

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter invalid email "wrong@example.com"
    And I enter invalid password "wrongpassword"
    And I click the login button
    Then I should see an error message
    And I should remain on the login page

  Scenario: Logout from application
    Given I am logged in
    And I am on any page with the navigation bar
    When I click the logout button
    Then I should be logged out
    And I should be redirected to the home page
    And I should not see protected navigation links

  Scenario: Accessing protected page when not authenticated
    Given I am not logged in
    When I try to access the dashboard page directly
    Then I should be redirected to the login page
    And I should see a login form

  Scenario: Redirect to requested page after login
    Given I am not logged in
    And I try to access the profile page directly
    When I am redirected to the login page
    And I enter valid credentials
    And I click the login button
    Then I should be redirected to the profile page I originally requested
