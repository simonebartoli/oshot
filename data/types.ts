export type ArticleDataType = {
    type: string,
    message: string
}


export type ArticleListType = {
    id: number
    title: string
    brief: string
    date: string
    author: string
    path: string
    nation?: string
    reading?: string
}

export type FaqsType = {
    question: string
    answer: string
}

export type TestimonialsType = {
    articlesLeft: [{
        title: string
        author: string
        message: string
    }]
    articlesRight: [{
        title: string
        author: string
        message: string
    }]
}

export type TestimonialsCombinedType = {
    title: string
    author: string
    message: string
}

export type VideosType = {
    title: string
    description: string
    url: string
}

export type TrainingVideos = {
    url1: string
    url2?: string
}

export type TrainingCitations = {
    message: string
    name: string
}

export type GalleryType = {
    hashBefore: string
    before: string
    hashAfter: string
    after: string
}