import {fragment,createEl, _} from '../lib/lib'
import { Container, li, span } from '../lib/DOMElements'
import { API } from "../api"
import axios from 'axios'


const InputBox = createEl('div', { class: 'input-box' })
const Input = createEl('input', { class: 'input-field', type: 'search', placeholder: '소환사 이름을 검색하세요' })
const Button = createEl('div', { class: 'search-button' })
const HistoryContainer = createEl('ul', { class: 'search-history-container' })

const SearchInput = (store) => {

    const handleKeyword = store.action((e,{}) => {
        const value = _.id('search-field').value
        return ({ keyword: value })
    })

    const { keyword } = store.getState()

    const InputField = ({ onTyping }) =>
        Input({ id: 'search-field', onkeyup: (e) => onTyping(e) }, `${keyword}`)
   
    return (
        fragment([
            Container( { class: 'search-container' },[
                InputBox([
                    InputField({ onTyping: handleKeyword }),
                ]),
            ]),
        ]))
}


const Search = (store) => {

    const setData = data => store.action(() => {
        return ({ keyword: data.summoner.name, summoner: data.summoner })
    })

    const fetchKeywordData = store.action(async (e,{ keyword, history }) => {
        const value = _.id('search-field').value
        const { data } = await axios.get(API('ko').summoner(value).getSummoner)
        setData(data)()
        history.push(keyword)
        return({history})
    })

    const { history } = store.getState()
    
    const HistoryList = history.map( (k,i) => 
        li({class:`history-list-${i}`},
            [ span(`${k}`)
        ]))


    const SubmitButton = ({ onSummit }) =>
        Button({ onclick: (e) => onSummit(e) }, 'search')

        return (
        fragment([
            Container( { class: 'search-container' }, 
                [ SubmitButton({ onSummit: fetchKeywordData }),
            ]),
            HistoryContainer({ id: 'history-list' }, [...HistoryList ])
        ]))
}




export {SearchInput, Search}