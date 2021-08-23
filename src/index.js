
import { SummonerSearchApp } from './app.js';
import { Store } from './lib/store.js';

const initStorage = {
    keyword: 'hide',
    LANG: 'ko',
    history: Array.from(['hide', 'red']),
    selectedWinRateId: 'champions'
}

const store = Store(initStorage)

SummonerSearchApp(store)