import {fragment,createEl, _,calcWinRate} from '../lib/lib'
import { Container, ImgBox, div , span, Img,flexBox} from '../lib/DOMElements'

const MatchLists = (store) => {

    const { summoner } = store.getState()

    return (
        fragment([
            Container( { class: 'match-list-container' }, [        
                flexBox.center([
                div('matchLists')
            ])])
            ])
        )
}

export {MatchLists}