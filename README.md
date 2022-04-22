# WiseAlbum Front End

This serves as the client layer for WiseAlbum, a multi-tenant media sharing application.

This application runs on React v18 and node v17. Take a look at the [backend repo](https://github.com/joedietrich-dev/wisealbum-backend) for details on how to get started there.

## Dependencies / Environment Variables

### General

- `REACT_APP_QUERY_DOMAIN` - The domain for the API
- `REACT_APP_MEDIA_DOMAIN` - The domain for the s3 bucket/cloudfront distro

## Setup Instructions

1. Clone the repo and run `npm install`
2. Clone the [backend repo](https://github.com/joedietrich-dev/wisealbum-backend) and follow any instructions there to get set up
3. Start the back end server and have fun
4. Run `npm start` to start the application in development

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
