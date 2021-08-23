


import { Search, SearchInput } from './components/searchSection.js';
import { Profile } from './components/profile.js'
import { Ranks } from './components/leaguesRank.js'
import { WinRates } from './components/winRates.js';
import { MatchSummary } from './components/matchSummary.js'
import { MatchLists } from './components/matchLists.js'
import { renderTo } from './lib/lib.js'

const SummonerSearchApp = (store) => {


    store.subscribe(
        () => {
            renderTo(
                document.querySelector("#search-history"),
                Search(store)
            )
        }
    )

    renderTo(document.querySelector("#search-box"), SearchInput(store))

    store.subscribe(
        () => renderTo(
            document.querySelector("#profile"),
            Profile(store)
        )
    )

    store.subscribe(
        () => renderTo(
            document.querySelector("#leagues-rank"),
            Ranks(store)
        )
    )

    store.subscribe(
        () => renderTo(
            document.querySelector("#win-rates"),
            WinRates(store)
        )
    )

    store.subscribe(
        () => renderTo(
            document.querySelector("#match-summary"),
            MatchSummary(store)
        )
    )


    store.subscribe(
        () => renderTo(
            document.querySelector("#match-list"),
            MatchLists(store)
        )
    )
}


export { SummonerSearchApp }