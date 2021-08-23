import { fragment, createEl, _, calcWinRate, calcKDA, } from '../lib/lib'
import { Container, ImgBox, div, span, Img, flexBox } from '../lib/DOMElements'

const WinRates = (store) => {

    const setListToShow = store.action((id, { moreInfo }) =>
        ({ selectedWinRateId: id, selectedList: moreInfo[id] }))

    const { moreInfo, selectedWinRateId } = store.getState()

    const champions = moreInfo?.champions.map(c =>
        div({ class: 'rate-list' }, [
            ImgBox({ class: 'rate-champ-img' }, [Img({ src: c.imageUrl })]),
            div([
                div(`${c.name}`),
                div(`CS${c.cs}(1.4)`)
            ]),
            div([
                div(`${calcKDA(c.kills, c.assists, c.deaths).kda} 평점`),
                div(`${(c.kills / c.games) / (c.assists / c.games) / (c.deaths / c.games)}`)
            ]),
            div([
                div(`${calcWinRate(c.games, c.wins).rate}`),
                div(`${c.games}게임`)
            ]),

        ])
    )

    const RecentWinRate = moreInfo?.recentWinRate.map(c =>
        div({ class: 'rate-list' }, [
            ImgBox({ class: 'rate-champ-img' }, [Img({ src: c.imageUrl })]),
            div([
                div(`${c.name}`),
            ]),
            div([
                div(`${calcWinRate(c.wins + c.losses, c.wins).rate}%`),
            ]),
            div([
                span(`${c.wins}승`),
                span(`${c.losses}패`),
            ]),

        ])
    )

    const Tab = ({ id, onClickTab }) =>
        div({ onclick: (e) => onClickTab(id) },
            `${id === 'champions' ? "챔피언 승률" : " 7일간 승률"}`)

    return (
        fragment([
            Container({ class: 'win-rate-container' }, [
                div({ class: 'win-rate-tabs flex all-center' }, [
                    Tab({ onClickTab: setListToShow, id: 'champions' }),
                    Tab({ onClickTab: setListToShow, id: 'recentWinRate' })
                ]),
                div({ class: 'win-rate-lists' },
                    selectedWinRateId === 'champions' 
                        ? [...champions ?? []] 
                        : [...RecentWinRate ?? []])
            ])
        ])
    )
}

export { WinRates }