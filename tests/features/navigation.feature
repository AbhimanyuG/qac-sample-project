Feature: Navigation
  As a user
  I want to navigate between different pages of the application
  So that I can access different functionalities

  Scenario: Navigation for unauthenticated users
    Given I am not logged in
    When I visit the home page
    Then I should see links to "Home" and "Login" in the navigation bar
    And I should not see links to protected pages

  Scenario: Navigation for authenticated users
    Given I am logged in
    When I visit the dashboard page
    Then I should see links to "Home", "Dashboard", "Profile", "Settings", and "Logout" in the navigation bar

  Scenario: Navigate from home to login page
    Given I am on the home page
    When I click on the "Login" link in the navigation bar
    Then I should be redirected to the login page

  Scenario: Navigate from dashboard to profile page
    Given I am logged in
    And I am on the dashboard page
    When I click on the "Profile" link in the navigation bar
    Then I should be redirected to the profile page

  Scenario: Navigate from profile to settings page
    Given I am logged in
    And I am on the profile page
    When I click on the "Settings" link in the navigation bar
    Then I should be redirected to the settings page

  Scenario: Navigate back to home page
    Given I am logged in
    And I am on the settings page
    When I click on the "Home" link in the navigation bar
    Then I should be redirected to the home page

  Scenario: Use login button on home page
    Given I am not logged in
    And I am on the home page
    When I click on the "Login to Dashboard" button
    Then I should be redirected to the login page
