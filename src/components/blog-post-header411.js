import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './blog-post-header411.css'

const BlogPostHeader411 = (props) => {
  return (
    <div
      className={`blog-post-header411-content1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="blog-post-header411-max-width thq-section-max-width">
        <div className="blog-post-header411-header">
          <div className="blog-post-header411-content2">
            <div className="blog-post-header411-breadcrumbs1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M658 316l-196 196 196 196-60 60-256-256 256-256z"></path>
              </svg>
              <span className="thq-body-small">
                <span>All Posts</span>
                <br></br>
              </span>
            </div>
            <div className="blog-post-header411-breadcrumbs2">
              <span className="thq-body-small">Volunteering</span>
              <span className="thq-body-small">
                <span>10 min read</span>
                <br></br>
              </span>
            </div>
            <h1 className="blog-post-header411-text17 thq-heading-1">
              {props.blogPostTitle ?? (
                <Fragment>
                  <span className="blog-post-header411-text28">
                    Volunteering to make an environmental and social impact
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
        </div>
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="blog-post-header411-image1 thq-img-ratio-16-9"
        />
        <div className="blog-post-header411-article">
          <h2 className="blog-post-header411-subtitle thq-heading-2">
            {props.blogPostSubtitle ?? (
              <Fragment>
                <span className="blog-post-header411-text22">
                  Tarek Hasan, Chair of Trustees at The Movements Trust, on
                  volunteering and enacting change in an ever-growing climate
                  emergency.
                </span>
              </Fragment>
            )}
          </h2>
          <span className="blog-post-header411-article-body thq-body-small">
            {props.articleBody ?? (
              <Fragment>
                <span className="blog-post-header411-text23">
                  <span>
                    At a time where I was transitioning careers, looking for
                    work, and the UK was in lockdown, I was craving a sense of
                    engagement and purpose. Volunteering was a core part of my
                    adult life and I was seeking a way to contribute, especially
                    with an environmental and social impact lens.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    I was grateful to discover Reach Volunteering, which was
                    able to connect me with a number of fantastic organisations
                    that were in need of motivated people to help push their
                    organisations forward.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </Fragment>
            )}
          </span>
          <button
            type="button"
            className="blog-post-header411-button thq-button-filled"
          >
            Read more
          </button>
          <div className="blog-post-header411-content3 thq-flex-row">
            <div className="blog-post-header411-avatar">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="blog-post-header411-image2 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="blog-post-header411-content4">
                <span className="blog-post-header411-full-name thq-body-small">
                  {props.avatarName ?? (
                    <Fragment>
                      <span className="blog-post-header411-text30">
                        Rajib U
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="blog-post-header411-time">
                  <span className="thq-body-small">
                    {props.date ?? (
                      <Fragment>
                        <span className="blog-post-header411-text29">
                          20 March 2024
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">•</span>
                  <span className="thq-body-small">
                    {props.readTime ?? (
                      <Fragment>
                        <span className="blog-post-header411-text21">
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

BlogPostHeader411.defaultProps = {
  readTime: undefined,
  blogPostSubtitle: undefined,
  imageAlt: 'image',
  rootClassName: '',
  articleBody: undefined,
  imageSrc: '/file%20(2)-1400w.png',
  blogPostTitle: undefined,
  date: undefined,
  imageAlt1: 'image',
  avatarName: undefined,
  imageSrc1: '/images%20(1)-1400w.png',
}

BlogPostHeader411.propTypes = {
  readTime: PropTypes.element,
  blogPostSubtitle: PropTypes.element,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  articleBody: PropTypes.element,
  imageSrc: PropTypes.string,
  blogPostTitle: PropTypes.element,
  date: PropTypes.element,
  imageAlt1: PropTypes.string,
  avatarName: PropTypes.element,
  imageSrc1: PropTypes.string,
}

export default BlogPostHeader411
