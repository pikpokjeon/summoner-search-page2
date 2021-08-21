import {fragment,createEl, _,calcWinRate} from '../lib/lib'
import { Container, ImgBox, div , span, Img,flexBox} from '../lib/DOMElements'

const Ranks = (store) => {

    const { summoner } = store.getState()
    
    const leagueRanks = summoner?.leagues.map( el => 
        flexBox.center([
            ImgBox({class:'rank-img'},[Img({src:el.tierRank.imageUrl})]),
            div([div({class:'t-11 p-gray'},`${el.tierRank.name}`), 
            div({class:'t-12 p-dark-light'},`${el.wins+el.losses}게임`),
            div({class:'t-15 p-blue accent'},`${el.tierRank.tier}${el.tierRank.division}`),
            div({class:'t-12 '},`${el.tierRank.string.split(' ')[1]}`,[
                span({class:'t-12 p-gray'},`/${el.wins}승${el.losses}패`)]),
            div({class:'t-12 p-gray'},`${calcWinRate(el.wins+el.losses,el.wins)}%`)])
        ])
    )

    return (
        fragment([
            Container( { class: 'rank-container' }, [...leagueRanks ])
            ])
        )
}

export {Ranks}