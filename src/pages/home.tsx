import { HomeFilters } from "./home/HomeFilters";
import { HomeHero } from "./home/HomeHero";

export function PageHome() {
    return (
        <>
            <HomeHero />
            <HomeFilters />
        </>
    )
}