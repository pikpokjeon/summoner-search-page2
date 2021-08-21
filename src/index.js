
import { App } from './app.js';
import { Search,SearchInput } from './components/searchSection.js';
import {Profile} from './components/profile.js'
import { renderTo } from './lib/lib.js'
import { Store } from './lib/store.js'

const s =  {
        keyword:'hide',
        LANG:'ko',
        history:Array.from(['hide','red'])
    }

const store = Store(s)


store.subscribe(
    () => renderTo(
        document.querySelector("#search-top"),
        Search(store)
    )
)

renderTo(document.querySelector("#search-box"),SearchInput(store))

store.subscribe(
    () => renderTo(
        document.querySelector("#profile"),
        Profile(store)
    )
)

store.subscribe(
    () => renderTo(
        document.querySelector("#result-left"),
        Search(store)
    )
)

store.subscribe(
    () => renderTo(
        document.querySelector("#result-right"),
        Search(store)
    )
)
