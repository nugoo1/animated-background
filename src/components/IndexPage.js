import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      sliderImage: file(relativePath: { eq: "background1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      comet1: file(relativePath: { eq: "comet1.png" }) {
        childImageSharp {
          fixed(width: 66, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      comet2: file(relativePath: { eq: "comet2.png" }) {
        childImageSharp {
          fixed(width: 155, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      comet3: file(relativePath: { eq: "comet3.png" }) {
        childImageSharp {
          fixed(width: 67, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      comet4: file(relativePath: { eq: "comet4.png" }) {
        childImageSharp {
          fixed(width: 26, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      comet5: file(relativePath: { eq: "comet5.png" }) {
        childImageSharp {
          fixed(width: 67, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      comet6: file(relativePath: { eq: "comet6.png" }) {
        childImageSharp {
          fixed(width: 109, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <div className="slider">
        <Img
          fluid={data.sliderImage.childImageSharp.fluid}
          style={{ height: "100vh", width: "100vw" }}
          objectFit="cover" objectPosition="30% 50%"
        />
        <div className="content">
          <h1>STEM.LK</h1>
          <p>WE BUILD THE WEB</p>
        </div>
        <span className="comet comet1">
          <Img fixed={data.comet1.childImageSharp.fixed} />
        </span>
        <span className="comet comet2">
          <Img fixed={data.comet2.childImageSharp.fixed} />
        </span>
        <span className="comet comet3">
          <Img fixed={data.comet3.childImageSharp.fixed} />
        </span>
        <span className="comet comet4">
          <Img fixed={data.comet4.childImageSharp.fixed} />
        </span>
        <span className="comet comet5">
          <Img fixed={data.comet5.childImageSharp.fixed} />
        </span>
        <span className="comet comet6">
          <Img fixed={data.comet6.childImageSharp.fixed} />
        </span>
      </div>
    </div>
  )
}
