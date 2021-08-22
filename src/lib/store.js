const Store = (initialState) =>
{
    let innerState = {
        subscribers: [],
        state:  initialState
    }

    const notify = () => {
        innerState.subscribers.forEach(sub => sub());
    }

    const getState = () =>  innerState.state
    
    const setState = async (stateUpdates) =>
    {
        const updates = await stateUpdates
        innerState.state = Object.assign(Object.assign({}, innerState.state), updates);
        notify();
        console.log(updates)
    }
    
    const action = f => (...args) => {
        return setState(f(...args, getState()) ?? {})
    }
    
    const subscribe = (sub) =>
    {
        innerState.subscribers.push(sub);
        notify();
    };

    return { subscribe, getState, setState, action, notify }
}

export { Store }