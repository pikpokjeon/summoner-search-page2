
import { App } from './app.js';
import { Search, SearchInput } from './components/searchSection.js';
import { Profile } from './components/profile.js'
import { Ranks } from './components/leaguesRank.js'
import { renderTo, pipe } from './lib/lib.js'
import { Store } from './lib/store.js'
import { Fetch } from './api.js'

const initStorage = {
    keyword: 'hide',
    LANG: 'ko',
    history: Array.from(['hide', 'red']),
}

const store = Store(initStorage)


store.subscribe(
    () => {
        renderTo(
            document.querySelector("#search-top"),
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
        document.querySelector("#result-left"),
        Ranks(store)
    )
)

store.subscribe(
    () => renderTo(
        document.querySelector("#result-right"),
        Search(store)
    )
)
