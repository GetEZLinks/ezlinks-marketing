'use client'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { PostQuery, PostQueryVariables } from '../../../../tina/__generated__/types'

// 2. Use those types instead of 'any'
interface PostClientProps {
  data: PostQuery
  query: string
  variables: PostQueryVariables
}

export default function PostClient(props: PostClientProps) {
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