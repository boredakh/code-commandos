import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './blog-post-header4111.css'

const BlogPostHeader4111 = (props) => {
  return (
    <div
      className={`blog-post-header4111-content1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="blog-post-header4111-max-width thq-section-max-width">
        <div className="blog-post-header4111-header">
          <div className="blog-post-header4111-content2">
            <div className="blog-post-header4111-breadcrumbs1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M658 316l-196 196 196 196-60 60-256-256 256-256z"></path>
              </svg>
              <span className="thq-body-small">
                <span>All Posts</span>
                <br></br>
              </span>
            </div>
            <div className="blog-post-header4111-breadcrumbs2">
              <span className="thq-body-small">Volunteering</span>
              <span className="thq-body-small">
                <span>10 min read</span>
                <br></br>
              </span>
            </div>
            <h1 className="blog-post-header4111-text17 thq-heading-1">
              {props.blogPostTitle ?? (
                <Fragment>
                  <span className="blog-post-header4111-text24">
                    Driving community change
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="blog-post-header4111-image1"
        />
        <div className="blog-post-header4111-article">
          <h2 className="blog-post-header4111-subtitle thq-heading-2">
            {props.blogPostSubtitle ?? (
              <Fragment>
                <span className="blog-post-header4111-text25">
                  Melanie Rees shares how her dynamic group of volunteers are
                  turning Brighton into a Green Centre
                </span>
              </Fragment>
            )}
          </h2>
          <span className="blog-post-header4111-article-body thq-body-small">
            {props.articleBody ?? (
              <Fragment>
                <span className="blog-post-header4111-text22">
                  Based in Brighton, The Green Centre is a community
                  environmental project run entirely by volunteers. Set up in
                  2006, our mission is to provide information and advice to all
                  members of the community on matters that influence the future
                  of our planet (locally, nationally and globally). We enable
                  people to develop their relationship with the planet, helping
                  them to focus on their own habits and behaviours, and the
                  changes that they can make as individuals.
                </span>
              </Fragment>
            )}
          </span>
          <button
            type="button"
            className="blog-post-header4111-button thq-button-filled"
          >
            Read more
          </button>
          <div className="blog-post-header4111-content3 thq-flex-row">
            <div className="blog-post-header4111-avatar">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="blog-post-header4111-image2 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="blog-post-header4111-content4">
                <span className="blog-post-header4111-full-name thq-body-small">
                  {props.avatarName ?? (
                    <Fragment>
                      <span className="blog-post-header4111-text23">
                        Ety R.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="blog-post-header4111-time">
                  <span className="thq-body-small">
                    {props.date ?? (
                      <Fragment>
                        <span className="blog-post-header4111-text21">
                          20 March 2024
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">•</span>
                  <span className="thq-body-small">
                    {props.readTime ?? (
                      <Fragment>
                        <span className="blog-post-header4111-text26">
                          7min read
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BlogPostHeader4111.defaultProps = {
  date: undefined,
  articleBody: undefined,
  imageSrc1: '/file-1400w.png',
  imageSrc: '/hero%20-%20the%20green%20centre-1400w.jpg',
  avatarName: undefined,
  blogPostTitle: undefined,
  rootClassName: '',
  blogPostSubtitle: undefined,
  readTime: undefined,
  imageAlt: 'image',
  imageAlt1: 'image',
}

BlogPostHeader4111.propTypes = {
  date: PropTypes.element,
  articleBody: PropTypes.element,
  imageSrc1: PropTypes.string,
  imageSrc: PropTypes.string,
  avatarName: PropTypes.element,
  blogPostTitle: PropTypes.element,
  rootClassName: PropTypes.string,
  blogPostSubtitle: PropTypes.element,
  readTime: PropTypes.element,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default BlogPostHeader4111
