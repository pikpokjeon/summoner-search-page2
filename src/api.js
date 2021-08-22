import axios from 'axios'

const BASE_URL = 'https://codingtest.op.gg/api'

export const API = lang => {
    const summoner = name => {
        const prefix = `${BASE_URL}/summoner/${name}`
        return ({
            getSummoner: `${prefix}?hl=${lang}`,
            getMatchDetail: gameId => `${prefix}/matchDetail/${gameId}?hl=${lang}`,
            getMatches: count => `${prefix}/matches?hl=${lang}&lastMatch=${count}`,//createDate
            getMostInfo: `${prefix}/mostInfo?hl=${lang}`,
        })
    }

    const item = { getInfo: `http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_kR/item.json` }
    return { summoner, item }
}

export const Fetch = (value) => {

    const fetchKeyword = async (value) => {
        const { data } = await axios.get(API('ko').summoner(value).getSummoner)
        return {value,profile:data}
    }

    const fetchMoreInfo = async ({value,profile}) => {
        const { data } = await axios.get(API('ko').summoner(value).getMostInfo)
        return {profile,moreInfo:data}
    }

    const fetchSummonerInfo = (value) => fetchKeyword(value).then(fetchMoreInfo)

    const fetchPlayers = async (value, gameId) => {
        const { data } = await axios.get(API('ko').summoner(value).getMatchDetail(gameId))
        return data
    }
    const fetchMatches = async (value, date) => {
        const { data } = await axios.get(API('ko').summoner(value).getMatches(date))
        return data
    }

    const fetchPlayersOfMatch = async (data) => {
        const combineFetchData = data.games.map(async (game) => {
            const teams = await fetchPlayers(value, game.gameId)
            return ({ games: game, teams })
        })
        const matches = await Promise.all(combineFetchData)
        return ({...data,matches})
    }

    const fetchMatchesInfo = (value) =>(time) => fetchMatches(value,time).then(fetchPlayersOfMatch)


    return { fetchSummonerInfo:fetchSummonerInfo(value), fetchMatchesInfo:fetchMatchesInfo(value) }

}
