import { OpaqueToken } from "@angular/core";

export enum MODES {
    CREATE, EDIT
}

export class SharedState {
    constructor(public mode: MODES, public id?: number) { }
}

//See service provider chap about OpaqueToken
export const SHARED_STATE = new OpaqueToken("shared_state");