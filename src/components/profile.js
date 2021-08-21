import {fragment,createEl, _} from '../lib/lib'
import { Container, ImgBox, div ,Badge, span, li, Img} from '../lib/DOMElements'
import { img } from '../textResource'


const BadgeContainer = createEl('ul',{class:'tier-badges'})

const Profile = (store) => {

    const { keyword, summoner } = store.getState()

        const Badges = summoner.previousTiers.reduce((acc,cur)=> [...acc,
            li([ Badge ([ span(`${cur.shortString} ${cur.tier}`)])])],[]) 

    return (
        fragment([
            Container( { class: 'profile-container' }, [
            BadgeContainer([...Badges]),
            div({class:'player-info '},[
                ImgBox([
                    Img({src: img.profileImg}), 
                ]),div(`${keyword}`)
            ]),
        ])]))
}






export {Profile}