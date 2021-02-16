// Contatins all 3 ways to update the state with React Hooks:
// useState, useReducer, and useContext
// By having all 3 methods available, it will be easier for us to note the differences between them. 

import React, {useContext, useState, useEffect, useReducer} from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as Reducer1 from '../store/reducers/plain_reducer';
import Context from '../utils/context';

const HooksContainer1 = () => {
    const context = useContext(Context);

    const [value, setValue] = useState(0);

    const [useEffectValue, setUseEffectValue] = useState(null);

    const [state, dispatch] = useReducer(Reducer1.Reducer1, Reducer1.initialState);

    useEffect(() => {
        setTimeout(() => setUseEffectValue("useEffect worked"), 3000);
    }, [value]);

    const incrementValue = () => {
        setValue(value + 1);
    }

    const decrementValue = () => {
        setValue(value - 1);
    }

    const handleEffectiveValue = () => {
        setUseEffectValue("some string");
    }

    const handleDispatchTrue = () => {
        // dispatch2(type: "SUCCESS")
        // dispatch2(ACTIONS.SUCCESS)
        dispatch(ACTIONS.success());
    }

    const handleDispatchFalse = () => {
        // dispatch2(type: "FAILURE")
        // dispatch2(ACTIONS.FAILURE)
        dispatch(ACTIONS.FAILURE);
    }
}