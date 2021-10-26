import State from './State'
type DispatchFn = (payload: any) => {type:string, payload?:any}
export type Dispatch = (arg:DispatchFn | {type:string, payload?:any}) => any
export type GetState = () => State