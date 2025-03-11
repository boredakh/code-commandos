import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq8.css'

const FAQ8 = (props) => {
  const [faq3isVisible, setFaq3isVisible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <div className="faq8faq8 thq-section-padding">
      <div className="faq8-max-width thq-section-max-width">
        <div className="faq8-container10 thq-flex-column">
          <div className="thq-flex-column">
            <h2 className="faq8-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="faq8-text7">FAQs</span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="thq-flex-column">
            <div className="faq8-list thq-flex-column">
              <div className="faq8-faq1">
                <div
                  onClick={() => setFaq1Visible(!faq1Visible)}
                  className="faq8-trigger1 thq-section-max-width"
                >
                  <p className="faq8-faq1-question thq-body-large">
                    {props.faq1Question4 ?? (
                      <Fragment>
                        <span className="faq8-text5">
                          Who is this service for?
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq8-icons-container1">
                    {!faq1Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq8-icon10">
                          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                    {faq1Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq8-icon12">
                          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq1Visible && (
                  <div className="faq8-container14">
                    <span className="thq-body-small">
                      Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                      sunt aut deleniti illum non repudiandae voluptatem. Aut
                      praesentium doloribus qui distinctio neque ut unde
                      temporibus. Cum exercitationem eveniet in omnis animi in
                      corporis nulla. Sed tempora excepturi et voluptatem modi
                      et exercitationem voluptate cum illum quisquam 33 quia
                      blanditiis eos minus consequatur.Ut neque quam qui
                      dignissimos voluptates ut voluptate totam aut consequuntur
                      quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                      eum earum tenetur? Est esse harum et Quis officiis et enim
                      amet.Et minima tempore et neque voluptatem eos amet
                      officiis et temporibus Quis. Et suscipit esse id nemo sunt
                      At nihil earum et consequatur fuga aut sapiente voluptate
                      est cupiditate esse non dolor cumque. Ut obcaecati
                      recusandae et beatae quae qui doloremque eligendi sit
                      eaque labore.
                    </span>
                  </div>
                )}
              </div>
              <div className="faq8-faq2">
                <div
                  onClick={() => setFaq2Visible(!faq2Visible)}
                  className="faq8-trigger2 thq-section-max-width"
                >
                  <p className="faq8-faq2-question1 thq-body-large">
                    {props.faq2Question1 ?? (
                      <Fragment>
                        <span className="faq8-text6">
                          How to recruit volunteers with skills
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq8-icons-container2">
                    {!faq2Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq8-icon14">
                          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                    {faq2Visible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq8-icon16">
                          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq2Visible && (
                  <div className="faq8-container17">
                    <span className="thq-body-small">
                      Et minima tempore et neque voluptatem eos amet officiis et
                      temporibus Quis. Et suscipit esse id nemo sunt At nihil
                      earum et consequatur fuga aut sapiente voluptate est
                      cupiditate esse non dolor cumque. Ut obcaecati recusandae
                      et beatae quae qui doloremque eligendi sit eaque labore.
                    </span>
                  </div>
                )}
              </div>
              <div className="faq8-faq3">
                <div
                  onClick={() => setFaq3isVisible(!faq3isVisible)}
                  className="faq8-trigger3 thq-section-max-width"
                >
                  <p className="faq8-faq2-question2 thq-body-large">
                    {props.faq3Question ?? (
                      <Fragment>
                        <span className="faq8-text8">
                          How volunteers can help your small charity
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="faq8-icons-container3">
                    {!faq3isVisible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq8-icon18">
                          <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                    {faq3isVisible && (
                      <div>
                        <svg viewBox="0 0 1024 1024" className="faq8-icon20">
                          <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq3isVisible && (
                  <div className="faq8-container20">
                    <span className="thq-body-small">
                      A quia temporibus aut ullam assumenda vel eius sapiente ut
                      eligendi molestias. Ex ipsum incidunt ut excepturi eaque
                      sed nulla quia qui exercitationem alias aut consequuntur
                      nihil et animi voluptas.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ8.defaultProps = {
  faq1Question4: undefined,
  faq2Question1: undefined,
  heading1: undefined,
  faq3Question: undefined,
}

FAQ8.propTypes = {
  faq1Question4: PropTypes.element,
  faq2Question1: PropTypes.element,
  heading1: PropTypes.element,
  faq3Question: PropTypes.element,
}

export default FAQ8
