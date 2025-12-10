'use client'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

export default function PostClient(props: { data: any, query: string, variables: any }) {
  // This hook connects the static data to the live editor
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  return (
    <article className="prose lg:prose-xl mx-auto p-8">
      <h1>{data.post.title}</h1>
      <div>
        <TinaMarkdown content={data.post.body} />
      </div>
    </article>
  )
}