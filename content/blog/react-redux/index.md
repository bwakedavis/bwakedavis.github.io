---
title: A walk through redux with react
date: "2020-09-03T22:12:03.284Z"
description: "Redux is state management library"
---

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
