import { createEl } from "../lib/lib"

export const Container = createEl('div', { class: 'container' })
export const ImgBox = createEl('div',{class:'img-box'})
export const InfoBox = createEl('div',{class:'info-box'})
export const Badge =  createEl('div', { class: 'badge'})

export const div = createEl('div')
export const ul = createEl('ul')
export const li = createEl('li')
export const span = createEl('span')
export const p = createEl('p')
export const Img = createEl('img')
export const section = createEl('section')
export const article = createEl('article')

export const flexBox = {
    center: createEl('div', { class: 'flex all-center' }),
    spaceBetween: createEl('div', { class: 'flex space-between' }),
    colum:createEl('div',{class:'flex column'}),
    row:createEl('div',{class:'flex row'}),
}
