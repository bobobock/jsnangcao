import tintuc from './newsdata';
const News = {
    render: () =>
    `<div>
        ${tintuc.map((tin) => (
            `<div>
                ${tin.content}
            </div>`
        )).join('')
    }</div>`,
}

export default News;