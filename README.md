# React Hooks Lesson (Following Tutorial)

## Before You Begin: Installing Dependencies
This project uses a few dependencies. You can use npm to install them. Run this command:

> npm install auth0-js react-router react-router-dom history

After installing dependencies (which creates a `package-lock.json` file and a `node_modules` folder), we have to 
create all the folders and files you see in the current directory structure. 

Once this is all set up, we are ready to begin!

## Step 1: Set Up Global State with Context
---
We do this first to make it easier to build other React components.

**Files Modified:**
- Actions files
- Reducer files

**Description**

The `action_types` establishes all the different action states each of these reducers can process, all in one file.
`actions.js` contains methods that return each of these types/states.

The **reducers** are functions that take in an initial state and an action, and update the state with the "ACTIONS" values according to the type of action in the input.
In this project, we implement a user authentication function, a form input processor, and a boilerplate method. 

## Step 2: Set Up the Context 
---
We do this to establish an initial state returned in the form of a JSX component. We also establish all the functions necessary for interacting with, and changing, that state.

**Files Modified:**
- `context_state_config.js`
- `context.js`

**Description** 

In the `context.js` file, we write 3 lines of code that call React's `createContext()` method and then export the result.

In the `context_state_config.js` file, we import the following elements from the rest of the project:
- The **context** we just established
- The **actions** we established in Step 1
- The **reducers** we also established in Step 1

Next, we create an instance of `Auth()`. We are now ready to define our "Context State." We do this by creating a function called `ContextState`, which takes no arguments and
returns some JSX establishing the initial state of our app and the actions we are allowed to perform to change that. These values all get passed into a **value** object, which
itself is a property of a `<Context.Provider />` JSX tag. We wrap this and a `<Router />` tag in a div. 

How do we determine the values to pass into this **value** parameter? Before we `return`, we first apply the `useReduer()` method (supplied by React) to the Reducer and Initial State 
we defined in Step 1. We use object destructuring to separate out the reducer and state from the response object of the method. We then define **handler** methods that dispatch the
Reducer function to perform one of our predefined **actions**. Finally, we pass all these functions and states into the aforementioned value parameter as we write out our JSX
return object.

## Step 3: Authentication and Authcheck
---
Here, we define our Auth object, which handles the actual nitty-gritty of user authentication. We also create an `authcheck` component to handle state updates.

**Files Modified:**
- `auth.js`
- `authcheck.js`

**Description**

In `auth.js`, we create an Auth class and define a series of functions on it: login, logout, getAccessToken, etc. The initial authorization is performed by our **Auth0** dependency.
After that, we store the authorization contents in the browser's local storage, retrieve it/change it as needed, and delete it upon logout.

Next, we created an `authcheck.js` React component. This component returns an empty `<div>` tag and performs a background check of the user's authentication status. To do this, it uses the **authObj** that we passed to it when we set up our JSX in `context_state_config.js`. 

## Step 4: Setting Up Hooks
---
**Files Modified:**

**Description**
