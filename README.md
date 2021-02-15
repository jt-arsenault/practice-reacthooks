# React Hooks Lesson (Following Tutorial)

## Step 1: Set Up Global State with Context
We do this first to make it easier to build other React components.

**Files Modified:**
- Actions files
- Reducer files

The action_types establishes all the different action states each of these reducers can process, all in one file.
`actions.js` contains methods that return each of these types/states.

The reducers are functions that take in an initial state and an action, and update the state with the "ACTIONS" values according to the type of action in the input.
In this project, we implement a user authentication function, a form input processor, and a boilerplate method. 