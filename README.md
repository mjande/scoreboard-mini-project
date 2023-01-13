# Scoreboard Mini-Project
created by Matt Anderson (mjande)

## Technologies

- React
- Create React App (Webpacker, Jest, React Testing Library, etc.)

At first, I experimented a bit with the react-rails gem, but as I had no prior experience with it, I eventually decided to keep things simple and start with a create-react-app project instead.

## Installation

Because of some issues I had with the endpoint's CORS policy, I implemented 'cors-backdoor' as a work-around. Running the repo locally looks like this:

```bash
git clone https://github.com/mjande/scoreboard-mini-project
npm install 
cors-backdoor --target https://api.scorebooklive.com
npm start
```

## Tests

I added a small number tests to make sure the components could handle the API data properly. They can be run with `npm test`.