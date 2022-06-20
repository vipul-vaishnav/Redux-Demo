# Redux Tutorial

## Three Core Concepts

- Store
- Actions
- Reducers

### Store

A **Store** holds the state of the application.

### Actions

A **Action** describes what happened in the application.

### Reducers

A **Reducer** handles the action and decides how to update the state of the application.

## PROCESS

1. The global state of the application is stored as an object inside a single store
2. The only way to change the state of the application is to dispatch an action, an object that describes what happened
3. To specify how the state tree is updated based on the actions, we write pure reducers

**Responsibilities** of store -

    1. Holds Application state
    2. Allows access to state via getState()
    3. Allows state to be updated via dispatch(action)
    4. Registers listeners via subscribe(listener)
    5. Handles unregistering of listeners via the funcition returned by subscribe(listener)
