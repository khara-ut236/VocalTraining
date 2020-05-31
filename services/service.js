import { chapter1 } from '../chapters/chapter1'
import { chapter2 } from '../chapters/chapter2'

import { method_text, warning_text } from './text'


const chapters = [chapter1, chapter2]

export function get_chapter(chapter_id) {
    const chaper = chapters[chapter_id-1]
    return chaper
}

export function get_method() {
    return method_text
}

export function get_warning() {
    return warning_text
}