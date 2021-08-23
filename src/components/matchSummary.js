import {fragment,createEl, _,calcWinRate} from '../lib/lib'
import { Container, ImgBox, div , span, Img,flexBox} from '../lib/DOMElements'

const MatchSummary = (store) => {

    const { summoner } = store.getState()

    return (
        fragment([
            Container( { class: 'summary-container' }, [        
                flexBox.row([
                div('matchSummary')
            ])])
            ])
        )
}

export {MatchSummary}