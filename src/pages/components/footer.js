import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                author
            }
        }
    }
    `
    )

    return (
        <footer className={footerStyles.footer}>
            <p>
                <a href="https://twitter.com/leandro_dipaula" target="_blank" rel="noreferrer">
                    {data.site.siteMetadata.author}
                </a> , © 2020. 
                <span role="img" aria-label="love">🖤</span
            ></p>
        </footer>
    )
}

export default Footer