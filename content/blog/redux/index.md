---
title: a walk through redux with react
date: "2020-09-03T22:12:03.284Z"
description: "Redux is state management library"
---

Is a predictable state container for JavaScript apps
It stores the state of your app in a container and manages it

Redux has a **store** that holds the state of your app. The state of the whole app is stored in an object tree with a single store. Allow access to the state via ```getState()```. Allow state to be updated via ```dispatch(action)```. Register listeners via ```subscribe(listener)```. Handles un-subscription  of listeners via the function returned by ```subscribe()```. The redux store is separate from the app and can be accessed anywhere in the app.

An **action** that describes the changes in the state of the app. The only way to change state is to emit an action, an object describing what happens. The only way your app can interact with the store is through actions.The action carry information from the app to the store.They are plain JavaScript objects.

A **reducer** specify how the app's state changes in response to the actions sent to the store. To specify how state trees transformed by actions, you write pure reducers




## Example one

```js
const redux = require('redux');
const createStore = redux.createStore;

//ACTIONS Constants
const BUY_CAKE = 'BUY_CAKE'; //constant

//action creator

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//Reducers
//(previousState, action) => newState
const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
        numOfCakes: state.numOfCakes - 1
    }
    default: return state;
}
}

//Store
const store = createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => console.log("updated state", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
```

## Example 2

```js
const redux = require("redux");
const createStore = redux.createStore;

//ACTIONS Constants
const BUY_CAKE = "BUY_CAKE"; //constant
const BUY_ICECREAM = "BUY_ICECREAM"; //constant

//action creator

function buyCake() {
	return {
		type: BUY_CAKE,
		info: "First redux action",
	};
}

function buyIceCream() {
	return {
		type: BUY_ICECREAM ,
		info: "First redux action",
	};
}

//Reducers
//(previousState, action) => newState
const initialState = {
	numOfCakes: 10,
	numOfIceCreams: 20,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1
			};
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
		default:
			return state;
	}
};

//Store
const store = createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
	console.log("updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

```

## Example three

```js
const redux = require("redux");
const combineReducers = redux.combineReducers
const createStore = redux.createStore;

//ACTIONS Constants
const BUY_CAKE = "BUY_CAKE"; //constant
const BUY_ICECREAM = "BUY_ICECREAM"; //constant

//action creator

function buyCake() {
	return {
		type: BUY_CAKE,
		info: "First redux action",
	};
}

function buyIceCream() {
	return {
		type: BUY_ICECREAM,
		info: "First redux action",
	};
}

//Reducers
//(previousState, action) => newState
const initialCakeState = {
	numOfCakes: 10,
};

const initialIceCreamState = {
	numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};
		default:
			return state;
	}
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1,
			};
		default:
			return state;
	}
};

//Store
const rootReducer = combineReducers({
    cakeReducer, iceCreamReducer
});
const store = createStore(rootReducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
	console.log("updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

```

## Example 4

Using redux logger as middleware

```js
const redux = require("redux");
const reduxLogger = require('redux-logger');
const combineReducers = redux.combineReducers
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//ACTIONS Constants
const BUY_CAKE = "BUY_CAKE"; //constant
const BUY_ICECREAM = "BUY_ICECREAM"; //constant

//action creator

function buyCake() {
	return {
		type: BUY_CAKE,
		info: "First redux action",
	};
}

function buyIceCream() {
	return {
		type: BUY_ICECREAM,
		info: "First redux action",
	};
}

//Reducers
//(previousState, action) => newState
const initialCakeState = {
	numOfCakes: 10,
};

const initialIceCreamState = {
	numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};
		default:
			return state;
	}
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1,
			};
		default:
			return state;
	}
};

//Store
const rootReducer = combineReducers({
    cakeReducer, iceCreamReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

```

## Example 5

Async actions

```js

const redux = require('redux');
const reduxLogger = require('redux-logger');
const combineReducers = redux.combineReducers
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default;
const logger = reduxLogger.createLogger();
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: true,
                users: [],
                error: action.payload
            }
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map(user => user.id);
            dispatch(fetchUsersSuccess(users));
        })
        .catch(error => {
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchUsers());
```

## Example 6

With Reactjs

redux/cakes/cakeTypes.js

```js
export const BUY_CAKE = 'BUY_CAKE';
```

redux/cakes/cakeAction.js

```js
import { BUY_CAKE } from "./cakeTypes";

export const buyCake =  {
        type: BUY_CAKE
    }
```

redux/cakes/cakeTypes.js

```js
import { BUY_CAKE } from "./cakeTypes"

const initialSate = {
    numOfCakes: 10
}
const cakeReducer = (state = initialSate, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            default: return state
    }
}

export default cakeReducer
```

redux/index.js

```js
export  { buyCake } from './cakes/cakeAction';
```

redux/store.js

```js
import { createStore } from "redux";
import cakeReducer from './cakes/cakeReducer';

const store = createStore(cakeReducer);

export default store;
```

Using **connect**
CakeContainer.js

```js
import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);
```

```js
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from './redux/store';
import CakeContainer from "./components/CakeContainer";


function App({addTodo}) {

  return (
    <Provider store={store}>
      <div>
      <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
```

Using ***UseSelector**

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {buyCake} from '../redux';

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake)}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
```

## Example 7

Using multiple reducers
Add ice cream reducer

redux/iceCream/IceCreamTypes.js

```js
export const BUY_ICECREAM = 'BUY_ICECREAM';
```

redux/iceCream/IceCreamActions.js

```js
import { BUY_ICECREAM } from "./iceCreamTypes";

export const buyIceCream =  {
        type: BUY_ICECREAM
    }
```

redux/iceCream/IceCreamReducer.js

```js
import { BUY_ICECREAM } from "./iceCreamTypes"

const initialState = {
    numOfIceCreams: 20
}
const iceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            default: return state
    }
}

export default iceCreamReducer;
```

Export Actions

redux/index.js

```js
export  { buyCake } from './cakes/cakeAction';
export { buyIceCream } from './iceCream/IceCreamActions';

```

Combine Reducers

```js
import { combineReducers  } from "redux";
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer
});

export default rootReducer;
```

create store

```js
import { createStore } from "redux";
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;
```

Components

components/CakeContainer.js

```js
import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);
```

or

components/HookCakeContainer.js

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {buyCake} from '../redux';

function HooksCakeContainer() { 
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake)}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
```

components/IceCreamContainer.js

```js
import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of iceCreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy iceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer);

```

or

components/HookIceCreamContainer.js

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {buyIceCream} from '../redux';

function HookIceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of IceCreams - {numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream)}>Buy IceCream</button>
        </div>
    )
}

export default HookIceCreamContainer
```

Install and apply ```redux-logger``` as middleware

redux/store.js

```js
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
```

App.js

```js
import React from "react";
import { Provider } from "react-redux";
import store from './redux/store';
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer";


function App() {

  return (
    <Provider store={store}>
      <div>
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <HookIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
```

Install redux devtools browser extension

Install ```redux-devtools-extension``` from npm
```npm install --save redux-devtools-extension```
It enables you to debug your app in the browser console

store.js

```js
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));

export default store;
```

## Example 8

Using Action payload

redux/cakes/cakeTypes.js

```js
export const BUY_CAKE = 'BUY_CAKE';
```

redux/cakes/cakeAction.js

```js
import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (number = 1) => { 
    return {
        type: BUY_CAKE,
        payload: number
    }
}
```

redux/cakes/cakeReducer.js

```js
import { BUY_CAKE } from "./cakeTypes"

const initialSate = {
    numOfCakes: 10
}
const cakeReducer = (state = initialSate, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
            default: return state
    }
}

export default cakeReducer;
```

redux/index.js

```js
export  { buyCake } from './cakes/cakeAction';
```

redux/store.js

```js
import { createStore } from "redux";
import cakeReducer from './cakes/cakeReducer';

const store = createStore(cakeReducer);

export default store;
```

Using **connect**
components/NewCakeContainer.js

```js
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'

function NewCakeContainer(props) {

    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type="number" name="num" id="num" 
            onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewCakeContainer);
```

Or

components/HookCakeComponent.js

```js
import React, {useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {buyCake} from '../redux';

function NewHooksCakeContainer(props) { 
    const [number, setNumber] = useState(1);
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake(number))}>Buy cake {number}</button>
                        <input type="number" name="num" id="num" 
            onChange={e => setNumber(e.target.value)}/>
        </div>
    )
}

export default NewHooksCakeContainer;
```

### mapStateToProps

Has a second parameter that is the prop that has already been passed in the parameter.

```js
import React from 'react';
import { connect } from 'react-redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState  = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

export default connect(mapStateToProps) (ItemContainer);
```

App.js

```js
import React from "react";
import { Provider } from "react-redux";
import store from './redux/store';
import ItemContainer from "./components/ItemContainer";



function App() {

  return (
    <Provider store={store}>
      <div>
      <ItemContainer cake />
      </div>
    </Provider>
  );
}

export default App;
```

### mapDispatchToProps

```js
import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState  = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch((buyIceCream))

    return{
     buyItem: dispatchFunction
     }
}

export default connect(mapStateToProps, mapDispatchToProps) (ItemContainer);
```

## Async Actions

redux/users/userTypes.js

```js
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
```

redux/users/userAction.js

```js
import axios from "axios";
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS ,FETCH_USERS_FAILURE } from "./userTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUsersSuccess(users));
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetchUsersFailure(errorMsg));
        })
    }
}
```

redux/users/userReducer.js

```js
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS ,FETCH_USERS_FAILURE } from "./userTypes";

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: true,
                users: [],
                error: action.payload
            }
        default: return state
    }
}


export default UserReducer;
```

redux/index.js

```js
export  { buyCake } from './cakes/cakeAction';
export { buyIceCream } from './iceCream/IceCreamActions';
export * from './user/userActions';
```

redux/rootReducer.js

```js
import { combineReducers  } from "redux";
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer,
    user: userReducer
});

export default rootReducer;
```

redux/store.js

```js
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
```

react component
components/UserContainer.js

```js
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

function UserContainer({ userData, fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ? (
        <div>
            <h2>Loading</h2>
        </div>
    ) : userData.error ? (
        <div>
            <h2> {userData.error}</h2>
        </div>
    ) : (
        <div>
            <h2>User List</h2>
            <div>
                {
                    userData && userData.users && 
                    userData.users.map(user => {
                        <p>{user.name}</p>
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);
```
