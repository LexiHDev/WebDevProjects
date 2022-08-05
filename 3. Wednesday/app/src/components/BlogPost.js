const react = require('react')

export default class BlogPost extends react.Component {
    render() {
        return (
            <article class='BlogPost'>
                <h2>{this.props.title}</h2>
                <h5>Posted {this.props.date}</h5>
                <p>
                    {this.props.article}
                </p>
            </article>
        )
    }
}
