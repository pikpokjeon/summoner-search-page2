import { fragment, createEl, _ } from '../lib/lib'
import { Container, li, span } from '../lib/DOMElements'
import { Fetch } from "../api"


const InputBox = createEl('div', { class: 'input-box' })
const Input = createEl('input', { class: 'input-field', type: 'search', placeholder: '소환사 이름을 검색하세요' })
const Button = createEl('div', { class: 'search-button' })
const HistoryContainer = createEl('ul', { class: 'search-history-container' })

const SearchInput = (store) => {

    const handleKeyword = store.action((e, { }) => {
        const value = _.id('search-field').value
        return ({ keyword: value })
    })

    const { keyword } = store.getState()

    const InputField = ({ onTyping }) =>
        Input({ id: 'search-field', onkeyup: (e) => onTyping(e) }, `${keyword}`)

    return (
        fragment([
            Container({ class: 'search-container' }, [
                InputBox([
                    InputField({ onTyping: handleKeyword }),
                ]),
            ]),
        ]))
}


const Search = (store) => {

    const fetchData = ({ profileRes, matchesRes }) => store.action(async () => {
        const {profile, moreInfo} = await profileRes
        const matchesData = await matchesRes
        return ({ 
            keyword: profile.summoner.name, 
            summoner: profile.summoner, 
            moreInfo,
            ...matchesData })
    })

    const setKeywordData = store.action(async (e, { history }) => {
        const currentTime = Math.floor(Date.now() / 1000);
        const keyword = _.id('search-field').value
        const profileRes = Fetch(keyword).fetchSummonerInfo
        const matchesRes = Fetch(keyword).fetchMatchesInfo(currentTime)
        fetchData({ profileRes, matchesRes })()
        history.push(keyword)
        return ({ history })
    })

    const { history } = store.getState()

    const HistoryList = history.map((k, i) =>
        li({ class: `history-list-${i}` },
            [span(`${k}`)
            ]))


    const SubmitButton = ({ onSummit }) =>
        Button({ onclick: (e) => onSummit(e) }, 'search')

    return (
        fragment([
            Container({ class: 'search-container' },
                [SubmitButton({ onSummit: setKeywordData }),
                ]),
            HistoryContainer({ id: 'history-list' }, [...HistoryList])
        ]))
}




export { SearchInput, Search }