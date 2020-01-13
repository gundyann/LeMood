export class State {

    currentState:string;

    constructor(state: string) {
        this.currentState = state;
    }

    setState(newState: string) {
        this.currentState = newState;
    }

}
