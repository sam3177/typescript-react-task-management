import Filters from "./Filters";

export default interface ApiData {
  url:string;
			accessToken?:string;
			data?        : { [key: string]: any },
      method:string;
			params?:Filters;
			onStart?   : string;
			onSuccess?   : string;
			onError?     : string;
}