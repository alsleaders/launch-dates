# launch-dates

## User Stories
- As a user, I want to be able to view all of the SpaceX launches between two dates I decide.
- As a user, I want to be able to sort the SpaceX launches by their launch date (both ascending or descending).

## What we're looking for
- How well you document code
- How you architect a fresh React/Redux project
- How you set up Redux and if you follow best practices
- How you choose dependencies and how you implement them
- How proficient you are with JavaScript, React, Redux, HTTP requests, styling, etc.
- How well your website runs against Google Lighthouse auditsRequirements
- The UI/UX is up to you, feel free to be as creative as you'd like! Rest assured that you won't be penalized at all if you completely forgo styling as we know it can be time-consuming.

## Steps
- Create the boilerplate (we recommend using something like create-react-app).
- Update the website's title, meta tags, and favicon (be creative!).
- Set up any architecture you want, but you must use and implement Redux (and ideally utilize one or more Redux middleware libraries).
- When a user chooses a start date, an end date, and clicks a "Search" button, a request should be made to the API endpoint https://api.spacexdata.com/v4/launches.
- While waiting for a response from the API, we should show a loading design.
- Once we receive the response, we should show a list of all the results and store all fetched data in Redux.
- Once we receive the response, if there are no results, we should show a no-results design.
- The user should be able to sort the launches by their launch date.
- The user should be able to search again for a different date range.
- Please git commit early and often. Also, please do not squash commits as we enjoy seeing the evolution of the project!


## Dependencies you should include
- react
- prop-types
- redux
- react-redux
- redux-thunk or redux-saga or redux-observable or another Redux middleware library
