import { useLocation } from "react-router-dom";

interface IRouteState {
  foodTime: string;
}
export function TestPage() {
  const location = useLocation();
  const state = location.state as IRouteState;
  return <h1>{state?.foodTime}</h1>;
}
