import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './blog-post-header4.css'

const BlogPostHeader4 = (props) => {
  return (
    <div className="blog-post-header4-content1 thq-section-padding">
      <div className="blog-post-header4-max-width thq-section-max-width">
        <div className="blog-post-header4-header">
          <div className="blog-post-header4-content2">
            <div className="blog-post-header4-breadcrumbs1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M658 316l-196 196 196 196-60 60-256-256 256-256z"></path>
              </svg>
              <span className="thq-body-small">
                <span>All Posts</span>
                <br></br>
              </span>
            </div>
            <div className="blog-post-header4-breadcrumbs2">
              <span className="thq-body-small">Volunteering</span>
              <span className="thq-body-small">
                <span>10 min read</span>
                <br></br>
              </span>
            </div>
            <h1 className="blog-post-header4-text17 thq-heading-1">
              {props.blogPostTitle ?? (
                <Fragment>
                  <span className="blog-post-header4-text24">
                    Have you ever volunteered your skills? Here’s how your
                    experience can inspire others
                  </span>
                </Fragment>
              )}
            </h1>
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="blog-post-header4-image thq-img-ratio-16-9"
        />
        <div className="blog-post-header4-article">
          <h2 className="blog-post-header4-subtitle thq-heading-2">
            {props.blogPostSubtitle ?? (
              <Fragment>
                <span className="blog-post-header4-text23">
                  Have you ever volunteered your skills? Here’s how your
                  experience can inspire others
                </span>
              </Fragment>
            )}
          </h2>
          <span className="blog-post-header4-article-body thq-body-small">
            {props.articleBody ?? (
              <Fragment>
                <span className="blog-post-header4-text22">
                  Volunteering is an incredibly rewarding way to give back to
                  society. For many, it&apos;s a way to use their skills and
                  talents to support causes they care about and contribute to
                  building a better future. However, when you decide to
                  volunteer for the first time, there’s often uncertainty about
                  where to start or what to expect and this can put people off.
                </span>
              </Fragment>
            )}
          </span>
          <button
            type="button"
            className="blog-post-header4-button thq-button-filled"
          >
            Read more
          </button>
          <div className="blog-post-header4-content3 thq-flex-row">
            <div className="blog-post-header4-avatar">
              <img
                alt={props.avatarImageAlt}
                src={props.avatarImageSrc}
                className="blog-post-header4-author-image thq-img-ratio-1-1 thq-img-round"
              />
              <div className="blog-post-header4-content4">
                <span className="blog-post-header4-full-name thq-body-small">
                  {props.avatarName ?? (
                    <Fragment>
                      <span className="blog-post-header4-text21">Abdul M.</span>
                    </Fragment>
                  )}
                </span>
                <div className="blog-post-header4-time">
                  <span className="thq-body-small">
                    {props.date ?? (
                      <Fragment>
                        <span className="blog-post-header4-text26">
                          20 March 2024
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">•</span>
                  <span className="thq-body-small">
                    {props.readTime ?? (
                      <Fragment>
                        <span className="blog-post-header4-text25">
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

BlogPostHeader4.defaultProps = {
  avatarName: undefined,
  avatarImageAlt: 'PlaceholderImage3501',
  articleBody: undefined,
  avatarImageSrc:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  blogPostSubtitle: undefined,
  blogPostTitle: undefined,
  imageAlt: 'image',
  readTime: undefined,
  date: undefined,
  imageSrc: '/volunteer%20resource%20story-1400w.png',
}

BlogPostHeader4.propTypes = {
  avatarName: PropTypes.element,
  avatarImageAlt: PropTypes.string,
  articleBody: PropTypes.element,
  avatarImageSrc: PropTypes.string,
  blogPostSubtitle: PropTypes.element,
  blogPostTitle: PropTypes.element,
  imageAlt: PropTypes.string,
  readTime: PropTypes.element,
  date: PropTypes.element,
  imageSrc: PropTypes.string,
}

export default BlogPostHeader4
