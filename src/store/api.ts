import { createAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import ApiData from "./types/ApiData";

export const apiCallBegan = createAction<ApiData>("api/callBegan");
export const apiCallSuccess = createAction<AxiosResponse>("api/callSuccess");
export const apiCallFailed = createAction<unknown>("api/callFailed");
