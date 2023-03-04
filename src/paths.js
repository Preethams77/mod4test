import LandingPage from "./components/LandingPage/LandingPage";
import Detail from "./components/Detail/Detail";



 export const PATHS ={
    LANDING_PAGE:"/",
    WEATHER_DETAIL:"/weather",
};

export const PATHS_MAP =[{
    path:PATHS.LANDING_PAGE,
    component:<LandingPage/>
},{
    path:PATHS.WEATHER_DETAIL,
    component:<Detail/>
}]