const Store = (initialState) =>
{
    let innerState = {
        subscribers: [],
        state:  initialState
    }

    const notify = () => {
        innerState.subscribers.forEach(sub => sub());
        console.log(innerState.state)
    }

    const getState = () =>  innerState.state
    
    const setState = stateUpdates =>
    {
        innerState.state = Object.assign(Object.assign({}, innerState.state), stateUpdates);
        notify();
    }
    
    const action = f => (...args) => {
        return setState(f(...args, getState()) ?? {})
    }
    
    const subscribe = (sub) =>
    {
        innerState.subscribers.push(sub);
        notify();
    };

    return { subscribe, getState, setState, action }
}

export { Store }