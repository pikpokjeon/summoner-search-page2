const BASE_URL = 'https://codingtest.op.gg/api'

export const API = lang => {
    const summoner = name => {
        const prefix = `${BASE_URL}/summoner/${name}`
        return({ 
            getSummoner: `${prefix}?hl=${lang}`,
            getMatchDetail: gameId => `${prefix}/matchDetail/${gameId}?hl=${lang}`,
            getMatches: count => `${prefix}/matches?hl=${lang}&lastMatch=${count}`,//createDate
            getMostInfo:`${prefix}/mostInfo?hl=${lang}`,
    })
}
    
    const item = {getInfo: `http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_kR/item.json`}
    return {summoner,item}
}


