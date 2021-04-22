# React with Firebase Starter Kit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. \
I've used 3 snapshot tests for each page which have their own routes as a starting point.

### `yarn lint`

Runs eslint with airbnb rules with some exceptions specified in `package.json`.
### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Firebase

### Project Set Up

This project has firebase integrated with it, all the keys have been kept in an `.env` file which has not been commited to the project to keep them private.

To create your own variables open the [Firebase console](https://firebase.google.com/) and sign in or sign up if you don't already have an account.

1. Add a name to your project
2. Choose if you want to enable analytics (not necessary)
3. Once your project has been created click **Continue**

Get stated by click the web icon, add an App nickname and click register app.

Step 2 shows you the config variables. If you create a `.env.local` you add these to the keys below.

```
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY_HERE
REACT_APP_FIREBASE_AUTHDOMAIN=YOUR_AUTH_DOMAIN_HERE
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_HERE
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET_HERE
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID_HERE
REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
```

### Auth Set Up

In order to sign up to your app you will need to enable Firebase Auth first. 
Go to [Firebase console](https://firebase.google.com/) under the `Build` tab, click on `Authentication` and click **Get Started**.

Select **Email/Password** as your sign-in provider as this is what this starter kit is configured to work with. Toggle the tab to Enable it.

You should now be able to Sign up and login using your app. You can check if your user has been created properly after sign up by checking in Authentication -> Users
## Deployment

These are some methods of deploying your React App: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

> Don't forget to add your Firebase variables as environment variables.

Here is my example deploymeny with Vercel: [https://react-firebase-starter-oy0icb8ii-lizhard.vercel.app/](https://react-firebase-starter-oy0icb8ii-lizhard.vercel.app/)