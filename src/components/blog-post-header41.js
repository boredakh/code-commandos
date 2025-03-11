import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './blog-post-header41.css'

const BlogPostHeader41 = (props) => {
  return (
    <div
      className={`blog-post-header41-content1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="blog-post-header41-max-width thq-section-max-width">
        <div className="blog-post-header41-header">
          <div className="blog-post-header41-content2">
            <div className="blog-post-header41-breadcrumbs1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M658 316l-196 196 196 196-60 60-256-256 256-256z"></path>
              </svg>
              <span className="thq-body-small">
                <span>All Posts</span>
                <br></br>
              </span>
            </div>
            <div className="blog-post-header41-breadcrumbs2">
              <span className="thq-body-small">Volunteering</span>
              <span className="thq-body-small">
                <span>10 min read</span>
                <br></br>
              </span>
            </div>
            <h1 className="blog-post-header41-text17 thq-heading-1">
              {props.blogPostTitle ?? (
                <Fragment>
                  <span className="blog-post-header41-text21">
                    Busting 5 trustee myths
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="blog-post-header41-image1"
        />
        <div className="blog-post-header41-article">
          <h2 className="blog-post-header41-subtitle thq-heading-2">
            {props.blogPostSubtitle ?? (
              <Fragment>
                <span className="blog-post-header41-text22">
                  From age to experience, Rachel busts some common myths about
                  trusteeship.
                </span>
              </Fragment>
            )}
          </h2>
          <span className="blog-post-header41-article-body thq-body-small">
            {props.articleBody ?? (
              <Fragment>
                <span className="blog-post-header41-text24">
                  Every year we help dozens of people to join a charity Board
                  through our TrusteeWorks service and we often come across
                  misunderstandings about the role of a trustee and who can
                  become one. Here, I bust the 5 most common trustee myths:
                </span>
              </Fragment>
            )}
          </span>
          <button
            type="button"
            className="blog-post-header41-button thq-button-filled"
          >
            Read more
          </button>
          <div className="blog-post-header41-content3 thq-flex-row">
            <div className="blog-post-header41-avatar">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="blog-post-header41-image2 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="blog-post-header41-content4">
                <span className="blog-post-header41-full-name thq-body-small">
                  {props.avatarName ?? (
                    <Fragment>
                      <span className="blog-post-header41-text25">
                        Paullina J
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="blog-post-header41-time">
                  <span className="thq-body-small">
                    {props.date ?? (
                      <Fragment>
                        <span className="blog-post-header41-text26">
                          20 March 2024
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">•</span>
                  <span className="thq-body-small">
                    {props.readTime ?? (
                      <Fragment>
                        <span className="blog-post-header41-text23">
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

BlogPostHeader41.defaultProps = {
  blogPostTitle: undefined,
  rootClassName: '',
  blogPostSubtitle: undefined,
  imageAlt1: 'image',
  readTime: undefined,
  imageSrc: '/hero%20website%20template%20(8)-1400w.jpg',
  imageSrc1: '/img_2458-1400w.jpg',
  articleBody: undefined,
  avatarName: undefined,
  imageAlt: 'image',
  date: undefined,
}

BlogPostHeader41.propTypes = {
  blogPostTitle: PropTypes.element,
  rootClassName: PropTypes.string,
  blogPostSubtitle: PropTypes.element,
  imageAlt1: PropTypes.string,
  readTime: PropTypes.element,
  imageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  articleBody: PropTypes.element,
  avatarName: PropTypes.element,
  imageAlt: PropTypes.string,
  date: PropTypes.element,
}

export default BlogPostHeader41
