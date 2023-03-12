import  {useEffect, useMemo, FC} from "react";
import LazyLoader from "./LazyLoader";
import {Link} from "react-router-dom";

export interface TextArticleProps {
    text: any
}

const Content: FC<TextArticleProps> = ({text}) => {

    const data = useMemo(() => {
        return text?.blocks && text.blocks.map((block: any) => {
            if (block.type === 'paragraph') {
                return (
                    <p key={block.id} className="text-sm mb-14 leading-7">{block.data.text}</p>
                )
            }
            if (block.type === 'header') {
                return (
                    <h2 key={block.id} className="text-xl font-bold mb-5">{block.data.text}</h2>
                )
            }
            if (block.type === 'list') {
                return (
                    <ul key={block.id}>
                        {block.data.items.map((item: any) => {
                            return (
                                <li key={item}>{item}</li>
                            )
                        })}
                    </ul>
                )
            }
            if (block.type === 'image') {
                return (
                    <div className="mb-14">
                        <LazyLoader
                            key={block.id}
                            image={{
                                src: block.data.file.url,
                                alt: block.data.caption
                            }}
                        />
                    </div>
                )
            }
            if (block.type === 'delimiter') {
                return (
                    <hr key={block.id}/>
                )
            }
            if (block.type === 'quote') {
                return (
                    <blockquote key={block.id}>{block.data.text}</blockquote>
                )
            }
            if (block.type === 'link') {
                return (
                    <Link key={block.id} to={block.data.link}>{block.data.link}</Link>
                )
            }
            if (block.type === 'code') {
                return (
                    <pre key={block.id}>
                        <code>{block.data.code}</code>
                    </pre>
                )
            }
            if (block.type === 'embed') {
                return (
                    <div key={block.id} dangerouslySetInnerHTML={{__html: block.data.embed}}/>
                )
            }

            if (block.type === 'table') {
                return (
                    <table key={block.id}>
                        <tbody>
                        {block.data.content.map((row: any, i: number) => {
                            return (
                                <tr key={i}>
                                    {row.map((cell: any, j: number) => {
                                        return (
                                            <td key={j}>{cell}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                )
            }
            return null
        })
    }, [text])


    return (
        <div>
            {data || text}
        </div>
    )
}

export default Content