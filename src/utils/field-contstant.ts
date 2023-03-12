// @ts-ignore
import Embed from '@editorjs/embed'
// @ts-ignore
import Table from '@editorjs/table'
// @ts-ignore
import List from '@editorjs/list'
// @ts-ignore
import Code from '@editorjs/code'
// @ts-ignore
import LinkTool from '@editorjs/link'
// @ts-ignore
import Image from '@editorjs/image'
// @ts-ignore
import Header from '@editorjs/header'
// @ts-ignore
import Marker from '@editorjs/marker'
// @ts-ignore
import InlineCode from '@editorjs/inline-code'





export const EDITOR_JS_TOOLS: any = {
    paragraph: {
        config: {
            placeholder: 'Enter news text'
        }
    },
    embed: Embed,
    table: {
        class: Table,
        inlineToolbar: true,
        config: {
            rows: 2,
            cols: 3,
        },
    },
    marker: Marker,
    list: List,
    code: Code,
    header: Header,
    inlineCode: InlineCode,
}