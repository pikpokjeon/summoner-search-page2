import {fragment,createEl, _} from '../lib/lib'
import { Container, ImgBox, div ,Badge, span, li, Img,flexBox} from '../lib/DOMElements'
import profileImg from '../../assets/img/profileImg.jpg'
import frameImg from '../../assets/img/frame.png'

const BadgeContainer = createEl('ul',{class:'tier-badges'})

const Profile = (store) => {

    const { keyword, summoner } = store.getState()

    const Badges = summoner?.previousTiers.reduce((acc,cur)=> [...acc,
        li([ 
            Badge ([
                    span({class:'t-11 p-dark-light accent ls-4'},
                    `${cur.shortString} ${cur.tier}`)])])],[]) 
    return (
        fragment([
            Container( { class: 'profile-container' }, [
            BadgeContainer([...Badges??[]]),
            div({class:'player-info '},[
                ImgBox({class:'background-profile'},[
                    Img({src:`${frameImg}`,class:'frame'}),
                    Img({src:`${profileImg}`,class:'profile'})
                ]),
                flexBox.center([div({class:'t-20 accent p-dark ls-7'},`${keyword}`),
                div({class:'profile-info'},[
                    span({class:'t-13 p-light'},`래더랭킹${keyword}`)]),

            ]),
        ]),
        ])]))
    
}






export {Profile}