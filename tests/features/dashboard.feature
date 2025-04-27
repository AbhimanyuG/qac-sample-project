Feature: Dashboard Functionality
  As an authenticated user
  I want to interact with dashboard, profile, and settings
  So that I can manage my account and view my data

  # Dashboard Scenarios
  Scenario: View dashboard information
    Given I am logged in
    When I navigate to the dashboard page
    Then I should see my welcome message with my name
    And I should see analytics information
    And I should see recent activities

  # Profile Scenarios
  Scenario: View profile information
    Given I am logged in
    When I navigate to the profile page
    Then I should see my profile information
    And I should see my avatar
    And I should see my bio

  Scenario: Edit profile information
    Given I am logged in
    And I am on the profile page
    When I click the "Edit Profile" button
    Then I should see the profile form with my current information
    When I update my name to "New Name"
    And I update my job title to "Senior Developer"
    And I update my location to "New York, NY"
    And I update my bio
    And I click the "Save" button
    Then my profile should be updated with the new information

  Scenario: Cancel profile edit
    Given I am logged in
    And I am on the profile page
    When I click the "Edit Profile" button
    And I make changes to my profile
    And I click the "Cancel" button
    Then my profile should remain unchanged

  # Settings Scenarios
  Scenario: Toggle notification settings
    Given I am logged in
    And I am on the settings page
    When I toggle the "Notifications" switch
    Then the notifications setting should be updated

  Scenario: Toggle dark mode
    Given I am logged in
    And I am on the settings page
    When I toggle the "Dark Mode" switch
    Then the dark mode setting should be updated
    And the application appearance should change

  Scenario: Toggle email updates
    Given I am logged in
    And I am on the settings page
    When I toggle the "Email Updates" switch
    Then the email updates setting should be updated

  Scenario: Toggle two-factor authentication
    Given I am logged in
    And I am on the settings page
    When I toggle the "Two-Factor Authentication" switch
    Then the two-factor authentication setting should be updated

  Scenario: Change language settings
    Given I am logged in
    And I am on the settings page
    When I select "Spanish" from the language dropdown
    Then the language setting should be updated to "Spanish"

  Scenario: Save settings
    Given I am logged in
    And I am on the settings page
    When I make changes to my settings
    And I click the "Save Settings" button
    Then I should see a confirmation message
    And my settings should be saved
