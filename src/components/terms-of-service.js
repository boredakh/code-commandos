import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './terms-of-service.css'

const TermsOfService = (props) => {
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  return (
    <div className="terms-of-service-container1 thq-section-padding">
      <div className="terms-of-service-max-width thq-flex-column thq-section-max-width">
        <div className="terms-of-service-container2 thq-section-max-width thq-flex-row">
          {isTermsVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsTermsVisible(true)
                setIsPrivacyVisible(false)
              }}
              className="terms-of-service-button1 thq-button-filled"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="terms-of-service-text155">
                      Terms of service
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isTermsVisible && (
            <button
              onClick={() => {
                setIsPrivacyVisible(false)
                setIsRefundVisible(false)
                setIsTermsVisible(true)
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="terms-of-service-text155">
                      Terms of service
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isPrivacyVisible && (
            <button
              onClick={() => {
                setIsPrivacyVisible(true)
                setIsRefundVisible(false)
                setIsTermsVisible(false)
              }}
              className="terms-of-service-button3 thq-button-outline"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="terms-of-service-text202">
                      <span>Privacy policy</span>
                      <span></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isPrivacyVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsTermsVisible(false)
                setIsPrivacyVisible(true)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="terms-of-service-text202">
                      <span>Privacy policy</span>
                      <span></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isRefundVisible && (
            <button
              onClick={() => {
                setIsPrivacyVisible(false)
                setIsTermsVisible(false)
                setIsRefundVisible(true)
              }}
              className="terms-of-service-button5 thq-button-outline"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="terms-of-service-text125">
                      Refund Policy
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isRefundVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsRefundVisible(true)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="terms-of-service-text125">
                      Refund Policy
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
        </div>
        <div className="terms-of-service-container3 thq-flex-column">
          {isTermsVisible && (
            <div className="terms-of-service-container4">
              <ul className="thq-flex-column">
                <li className="terms-of-service-li10 thq-flex-column list-item">
                  <h2 className="terms-of-service-heading7 thq-heading-2">
                    {props.heading7 ?? (
                      <Fragment>
                        <span className="terms-of-service-text147">
                          Terms and Conditions
                        </span>
                      </Fragment>
                    )}
                  </h2>
                  <p className="thq-body-small">
                    {props.content7 ?? (
                      <Fragment>
                        <span className="terms-of-service-text106">
                          <span>
                            These Terms of Use (as defined below) set out the
                            terms on which you (whether you are a Visitor, a
                            Volunteer or an Organisation, as defined below) may
                            use the Website (as defined below).
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <span>
                            You should read these Terms of Use carefully before
                            using the Website. By using the Website (whether
                            registering an Account or not), you are confirming
                            that you accept these Terms of Use and that you will
                            comply with them.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <span>
                            If you do not accept these Terms of Use you should
                            leave the Website immediately.
                          </span>
                          <br></br>
                          <span>
                            The following policies also apply to your use of the
                            Website:
                          </span>
                          <br></br>
                          <span>
                            Our Privacy Policy. By using the Website you are
                            consenting to us processing any personal data that
                            you provide to us or that we collect from you as a
                            result of your use of the Website. Our Privacy
                            Policy sets out what we do with that personal data.
                          </span>
                          <br></br>
                          <span>Our Cookies Policy.</span>
                          <br></br>
                          <span>
                            If you are an Organisation who wants to access our
                            Services, you will also be subject to the Services
                            Terms and Conditions.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <ul className="terms-of-service-ul2 thq-flex-column">
                    <li className="list-item">
                      <h3 className="thq-heading-3">
                        {props.heading8 ?? (
                          <Fragment>
                            <span className="terms-of-service-text149">
                              Setting up an Account
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="thq-body-small">
                        {props.content2 ?? (
                          <Fragment>
                            <span className="terms-of-service-text158">
                              <span>
                                3.1 You can set up a Basic Account whether you
                                are an Organisation or a Volunteer.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                3.2 Subject to clause ‎3.9, only one Account is
                                permitted per Volunteer.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                3.3 You may set up a Profile (as described in
                                clause ‎4) as part of your Account, but this is
                                not mandatory.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                3.4 Setting up an Account on the Website will
                                allow you to:
                              </span>
                              <br></br>
                              <span>
                                3.4.1 create, draft, save, submit and manage
                                Volunteer or Organisation Profiles;
                              </span>
                              <br></br>
                              <span>
                                3.4.2 manage Account and Profile preferences and
                                create email alerts;
                              </span>
                              <br></br>
                              <span>
                                3.4.3 request to join an existing Organisation
                                Profile;
                              </span>
                              <br></br>
                              <span>
                                3.4.4 request a limited number of Introductions
                                if you are a Volunteer who does not have a
                                Profile (i.e. via a Guest Account);
                              </span>
                              <br></br>
                              <span>
                                3.4.5 manage Introductions and connect directly
                                with Volunteers, Organisations and Reach;
                              </span>
                              <br></br>
                              <span>3.4.6 save searches;</span>
                              <br></br>
                              <span>
                                3.4.7 create, post and promote volunteering
                                opportunities;
                              </span>
                              <br></br>
                              <span>
                                3.4.8 receive suggested Volunteer roles from
                                Organisation users; and
                              </span>
                              <br></br>
                              <span>
                                3.4.9 use Reach’s paid-for Services.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                3.5 If you are a Volunteer, you do not have to
                                create a Volunteer Profile to apply for a
                                volunteering opportunity, as you can apply from
                                your Guest Account.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                3.6 If you apply via a Guest Account then Reach
                                will require you to confirm you meet the
                                relevant Criteria for the role, upload your CV
                                and insert relevant contact details in order to
                                apply for a volunteering opportunity.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                3.7 Please note that an Organisation can only
                                create a Basic Account and that a Guest Account
                                cannot be used by an Organisation to post
                                volunteering opportunities (this will require an
                                Organisation Profile).
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                3.8 If you are a Volunteer you may use a Guest
                                Account to apply for a limited number of
                                volunteering opportunities.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                3.9 If you are a Volunteer and have previously
                                applied for volunteering opportunities via a
                                Guest Account, you may subsequently create a
                                Basic Account using the same email address as
                                you used for your Guest Account.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                3.10 When you register a Basic Account and/or a
                                Guest Account on the Website you will need to
                                create a user name and password and accept these
                                Terms of Use.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                3.11 You are solely responsible for the security
                                and proper use of the password, which you must
                                keep confidential at all times and must not
                                disclose to any third party.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                3.12 You must notify Reach immediately at
                                service@reachvolunteering.org.uk if you believe
                                someone else has knowledge of your password or
                                if it may have been used, or is likely to be
                                used, in an unauthorised way.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                3.13 Reach accepts no liability for any
                                unauthorised or improper use of disclosure of
                                any password.
                              </span>
                            </span>
                          </Fragment>
                        )}
                      </p>
                    </li>
                    <li className="list-item">
                      <h3 className="thq-heading-3">
                        {props.heading9 ?? (
                          <Fragment>
                            <span className="terms-of-service-text130">
                              Our liability to you
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="thq-body-small">
                        {props.content9 ?? (
                          <Fragment>
                            <span className="terms-of-service-text132">
                              <span>
                                9.1 You acknowledge that the Website provides
                                information to Visitors, as well as enabling
                                Organisations and Volunteers to engage in the
                                Introductions process.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                9.2 You also acknowledge that any volunteering
                                arrangements will be subject to a separate
                                Volunteer Engagement between the relevant
                                Organisation and Volunteers. Reach shall have no
                                liability to you whatsoever in respect of any
                                dealings between Volunteers and Organisations in
                                this regard as it will not be a party to such
                                arrangements.
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <br></br>
                              <span>
                                9.3 Reach do not guarantee that the Website will
                                be secure or free from bugs or viruses. You are
                                responsible for configuring your information
                                technology, computer programmes and platform to
                                access the Website and you should use your own
                                virus protection software.
                              </span>
                              <br></br>
                              <span>
                                9.4 Reach do not exclude or limit in any way our
                                liability to you where it would be unlawful to
                                do so. This includes liability for death or
                                personal injury caused by our negligence or the
                                negligence of our employees, agents or
                                subcontractors and for fraud or fraudulent
                                misrepresentation.
                              </span>
                              <br></br>
                              <span>
                                9.5 Subject to the terms of the Services Terms
                                and Conditions (if applicable):
                              </span>
                              <br></br>
                              <span>
                                9.5.1 Reach will have no liability to you for
                                any loss or inconvenience suffered due to the
                                unavailability or withdrawal of any, content,
                                material, information or access to the Website.
                              </span>
                              <br></br>
                              <span>
                                9.5.2 Reach is not liable to you if, because of
                                circumstances beyond our reasonable control, we
                                fail to comply with these Terms of Use or if you
                                cannot access the Website properly or at all.
                              </span>
                            </span>
                          </Fragment>
                        )}
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {isRefundVisible && (
            <div className="terms-of-service-container5">
              <ul className="thq-flex-column">
                <li className="terms-of-service-li13 thq-flex-column list-item">
                  <h1 className="terms-of-service-heading10 thq-heading-2">
                    {props.heading10 ?? (
                      <Fragment>
                        <span className="terms-of-service-text127">
                          Refund Policy
                        </span>
                      </Fragment>
                    )}
                  </h1>
                  <span className="thq-body-small">
                    {props.content10 ?? (
                      <Fragment>
                        <span className="terms-of-service-text152">
                          Lorem ipsum dolor sit amet. Vel dolores illum est
                          aperiam quis nam voluptatem quia et omnis autem qui
                          dolore ullam sed fugiat cumque! Qui accusamus
                          assumenda et molestias eius et error sunt. Id
                          recusandae nostrum ea officiis voluptatem in nisi
                          consequatur sed quia tenetur sit alias molestias qui
                          illum soluta. Est nesciunt perferendis eum sint rerum
                          33 cupiditate dolorem id corrupti laboriosam ut
                          debitis veniam ut ipsam fugit vel sunt consequatur. Et
                          nobis quasi et cumque adipisci aut molestiae eligendi
                          quo inventore dicta ea suscipit sequi sed veritatis
                          nemo.
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <ul className="terms-of-service-ul4 thq-flex-column">
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading11 ?? (
                          <Fragment>
                            <span className="terms-of-service-text123">
                              General
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content11 ?? (
                          <Fragment>
                            <span className="terms-of-service-text154">
                              Lorem ipsum dolor sit amet. Nam nihil facilis sit
                              consequuntur internos qui minima rerum ut
                              molestias laudantium aut iusto deserunt. Aut
                              voluptatibus excepturi qui officia laudantium est
                              repellendus tempore hic sunt debitis. Ut galisum
                              tempore in enim fugit eum pariatur possimus est
                              tenetur nemo et sint sint et dolores Quis. Aut
                              illum perspiciatis rem architecto culpa et fuga
                              aliquid. Est omnis praesentium ut nisi internos
                              rem quod totam et similique quis. Est tempore
                              cumque aut recusandae labore qui error molestiae
                              et possimus quia! Eum Quis asperiores non nihil
                              tempora qui quia voluptatem aut aspernatur
                              aspernatur aut asperiores labore et sapiente
                              quaerat qui suscipit quia. Ea nesciunt iste aut
                              temporibus culpa sit dignissimos quaerat eum
                              architecto voluptatum et nemo velit At harum
                              harum.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading12 ?? (
                          <Fragment>
                            <span className="terms-of-service-text156">
                              Damages and issues
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content12 ?? (
                          <Fragment>
                            <span className="terms-of-service-text148">
                              Lorem ipsum dolor sit amet. Est vitae blanditiis
                              ab aliquam tempore aut ipsam iusto in sunt
                              repellat ex voluptatum inventore ab facilis
                              galisum ea consequatur consequuntur. Ab voluptas
                              voluptatem eum consequatur aspernatur non
                              laboriosam atque est labore asperiores a neque
                              quos. Ea nemo modi hic dicta saepe et veritatis
                              maiores At praesentium aliquid. Sed dolores
                              architecto non doloribus quia eos consectetur
                              commodi non tenetur vitae est neque omnis. Non
                              perspiciatis velit At aliquam rerum ut officiis
                              ipsa id minima eius ut sapiente nobis et nemo
                              neque. Aut maiores tempora in officiis sunt eum
                              voluptatem tenetur sit iste reprehenderit ea nisi
                              dolor. Ea impedit omnis ad internos autem ut esse
                              sunt ad saepe maiores vel perferendis veritatis.
                              Ex magni fugiat ut reprehenderit laudantium sit
                              galisum ipsam eos tempora doloribus sed
                              accusantium nobis eum praesentium quod.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading13 ?? (
                          <Fragment>
                            <span className="terms-of-service-text153">
                              Refunds
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content13 ?? (
                          <Fragment>
                            <span className="terms-of-service-text131">
                              Lorem ipsum dolor sit amet. Est vitae blanditiis
                              ab aliquam tempore aut ipsam iusto in sunt
                              repellat ex voluptatum inventore ab facilis
                              galisum ea consequatur consequuntur. Ab voluptas
                              voluptatem eum consequatur aspernatur non
                              laboriosam atque est labore asperiores a neque
                              quos. Ea nemo modi hic dicta saepe et veritatis
                              maiores At praesentium aliquid. Sed dolores
                              architecto non doloribus quia eos consectetur
                              commodi non tenetur vitae est neque omnis. Non
                              perspiciatis velit At aliquam rerum ut officiis
                              ipsa id minima eius ut sapiente nobis et nemo
                              neque. Aut maiores tempora in officiis sunt eum
                              voluptatem tenetur sit iste reprehenderit ea nisi
                              dolor. Ea impedit omnis ad internos autem ut esse
                              sunt ad saepe maiores vel perferendis veritatis.
                              Ex magni fugiat ut reprehenderit laudantium sit
                              galisum ipsam eos tempora doloribus sed
                              accusantium nobis eum praesentium quod.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
        {isPrivacyVisible && (
          <div className="terms-of-service-container6">
            <ul className="thq-flex-column">
              <li className="terms-of-service-li17 thq-flex-column list-item">
                <h1 className="terms-of-service-heading1 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="terms-of-service-text129">
                        Privacy statement
                      </span>
                    </Fragment>
                  )}
                </h1>
                <span className="thq-body-small">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="terms-of-service-text151">
                        Lorem ipsum dolor sit amet. Vel dolores illum est
                        aperiam quis nam voluptatem quia et omnis autem qui
                        dolore ullam sed fugiat cumque! Qui accusamus assumenda
                        et molestias eius et error sunt. Id recusandae nostrum
                        ea officiis voluptatem in nisi consequatur sed quia
                        tenetur sit alias molestias qui illum soluta. Est
                        nesciunt perferendis eum sint rerum 33 cupiditate
                        dolorem id corrupti laboriosam ut debitis veniam ut
                        ipsam fugit vel sunt consequatur. Et nobis quasi et
                        cumque adipisci aut molestiae eligendi quo inventore
                        dicta ea suscipit sequi sed veritatis nemo.
                      </span>
                    </Fragment>
                  )}
                </span>
                <ul className="terms-of-service-ul6 thq-flex-column">
                  <li className="list-item">
                    <h1 className="thq-heading-3">
                      {props.heading2 ?? (
                        <Fragment>
                          <span className="terms-of-service-text126">
                            Types of data we collect
                          </span>
                        </Fragment>
                      )}
                    </h1>
                    <p className="thq-body-small">
                      {props.content2 ?? (
                        <Fragment>
                          <span className="terms-of-service-text158">
                            <span>
                              3.1 You can set up a Basic Account whether you are
                              an Organisation or a Volunteer.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>
                              3.2 Subject to clause ‎3.9, only one Account is
                              permitted per Volunteer.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>
                              3.3 You may set up a Profile (as described in
                              clause ‎4) as part of your Account, but this is
                              not mandatory.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>
                              3.4 Setting up an Account on the Website will
                              allow you to:
                            </span>
                            <br></br>
                            <span>
                              3.4.1 create, draft, save, submit and manage
                              Volunteer or Organisation Profiles;
                            </span>
                            <br></br>
                            <span>
                              3.4.2 manage Account and Profile preferences and
                              create email alerts;
                            </span>
                            <br></br>
                            <span>
                              3.4.3 request to join an existing Organisation
                              Profile;
                            </span>
                            <br></br>
                            <span>
                              3.4.4 request a limited number of Introductions if
                              you are a Volunteer who does not have a Profile
                              (i.e. via a Guest Account);
                            </span>
                            <br></br>
                            <span>
                              3.4.5 manage Introductions and connect directly
                              with Volunteers, Organisations and Reach;
                            </span>
                            <br></br>
                            <span>3.4.6 save searches;</span>
                            <br></br>
                            <span>
                              3.4.7 create, post and promote volunteering
                              opportunities;
                            </span>
                            <br></br>
                            <span>
                              3.4.8 receive suggested Volunteer roles from
                              Organisation users; and
                            </span>
                            <br></br>
                            <span>
                              3.4.9 use Reach’s paid-for Services.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>
                              3.5 If you are a Volunteer, you do not have to
                              create a Volunteer Profile to apply for a
                              volunteering opportunity, as you can apply from
                              your Guest Account.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>
                              3.6 If you apply via a Guest Account then Reach
                              will require you to confirm you meet the relevant
                              Criteria for the role, upload your CV and insert
                              relevant contact details in order to apply for a
                              volunteering opportunity.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>
                              3.7 Please note that an Organisation can only
                              create a Basic Account and that a Guest Account
                              cannot be used by an Organisation to post
                              volunteering opportunities (this will require an
                              Organisation Profile).
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>
                              3.8 If you are a Volunteer you may use a Guest
                              Account to apply for a limited number of
                              volunteering opportunities.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>
                              3.9 If you are a Volunteer and have previously
                              applied for volunteering opportunities via a Guest
                              Account, you may subsequently create a Basic
                              Account using the same email address as you used
                              for your Guest Account.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>
                              3.10 When you register a Basic Account and/or a
                              Guest Account on the Website you will need to
                              create a user name and password and accept these
                              Terms of Use.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>
                              3.11 You are solely responsible for the security
                              and proper use of the password, which you must
                              keep confidential at all times and must not
                              disclose to any third party.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>
                              3.12 You must notify Reach immediately at
                              service@reachvolunteering.org.uk if you believe
                              someone else has knowledge of your password or if
                              it may have been used, or is likely to be used, in
                              an unauthorised way.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span>
                              3.13 Reach accepts no liability for any
                              unauthorised or improper use of disclosure of any
                              password.
                            </span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </li>
                  <li className="list-item">
                    <h1 className="thq-heading-3">
                      {props.heading3 ?? (
                        <Fragment>
                          <span className="terms-of-service-text150">
                            How we use your data
                          </span>
                        </Fragment>
                      )}
                    </h1>
                    <span className="thq-body-small">
                      {props.content3 ?? (
                        <Fragment>
                          <span className="terms-of-service-text120">
                            Lorem ipsum dolor sit amet. Est vitae blanditiis ab
                            aliquam tempore aut ipsam iusto in sunt repellat ex
                            voluptatum inventore ab facilis galisum ea
                            consequatur consequuntur. Ab voluptas voluptatem eum
                            consequatur aspernatur non laboriosam atque est
                            labore asperiores a neque quos. Ea nemo modi hic
                            dicta saepe et veritatis maiores At praesentium
                            aliquid. Sed dolores architecto non doloribus quia
                            eos consectetur commodi non tenetur vitae est neque
                            omnis. Non perspiciatis velit At aliquam rerum ut
                            officiis ipsa id minima eius ut sapiente nobis et
                            nemo neque. Aut maiores tempora in officiis sunt eum
                            voluptatem tenetur sit iste reprehenderit ea nisi
                            dolor. Ea impedit omnis ad internos autem ut esse
                            sunt ad saepe maiores vel perferendis veritatis. Ex
                            magni fugiat ut reprehenderit laudantium sit galisum
                            ipsam eos tempora doloribus sed accusantium nobis
                            eum praesentium quod.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </li>
                  <li className="list-item">
                    <h1 className="thq-heading-3">
                      {props.heading4 ?? (
                        <Fragment>
                          <span className="terms-of-service-text146">
                            Sharing your data with 3rd parties
                          </span>
                        </Fragment>
                      )}
                    </h1>
                    <span className="thq-body-small">
                      {props.content4 ?? (
                        <Fragment>
                          <span className="terms-of-service-text157">
                            Lorem ipsum dolor sit amet. Id galisum officiis rem
                            quod internos qui provident quaerat hic minus
                            eveniet est officiis galisum sit rerum dignissimos.
                            Sit voluptatem alias et veniam rerum ea quod ipsam
                            ut quam neque est nihil repellat est aspernatur
                            voluptatem est voluptas ratione? Ea vero tempore At
                            soluta temporibus 33 galisum excepturi quo modi
                            distinctio. Qui dolor soluta sit ipsam vitae et
                            suscipit molestiae est consequatur galisum aut
                            sapiente voluptatem sed quas eaque et minima minus?
                            Rem soluta consequatur et velit cupiditate sed
                            eligendi laudantium rem pariatur galisum sit
                            mollitia debitis eum delectus ipsum aut consequatur
                            mollitia. Qui voluptatibus molestias ut totam Quis
                            ea unde dolorem sit animi eveniet et galisum
                            explicabo. Est culpa error ut voluptatibus
                            voluptatem qui dignissimos dolorem quo laborum
                            distinctio qui omnis perspiciatis ab facilis
                            temporibus qui perspiciatis consectetur. Ab
                            praesentium fugiat eos veritatis quam ex modi autem
                            et sapiente dolorem?
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </li>
                  <li className="list-item">
                    <h1 className="thq-heading-3">
                      {props.heading5 ?? (
                        <Fragment>
                          <span className="terms-of-service-text121">
                            Campaign tracking
                          </span>
                        </Fragment>
                      )}
                    </h1>
                    <span className="thq-body-small">
                      {props.content5 ?? (
                        <Fragment>
                          <span className="terms-of-service-text124">
                            Lorem ipsum dolor sit amet. Ut cumque cupiditate eos
                            perferendis tempora et ullam quis qui fugiat
                            necessitatibus qui quia dolorem 33 earum
                            reprehenderit eum rerum blanditiis. Et vitae
                            distinctio 33 magni ratione ut odit rerum est nihil
                            error et minus dolor quo harum fugiat. Eos quam
                            assumenda id fugit optio aut magni sunt! Ut iure
                            aliquam vel velit modi sit voluptatibus atque ut
                            corporis sint sit omnis enim a pariatur officiis aut
                            nulla voluptate. In facere incidunt aut sapiente
                            maxime qui quibusdam facilis non officia consectetur
                            sit laboriosam libero aut cupiditate possimus ut
                            sunt reiciendis. Et repudiandae magnam aut quaerat
                            ipsam aut repellat laboriosam. Ab facilis deleniti
                            ut voluptas molestiae sed omnis maiores ut aliquid
                            culpa vel nesciunt saepe. Aut placeat aspernatur aut
                            alias nihil vel neque recusandae et corrupti
                            accusantium ab quod temporibus ut nulla eaque et
                            magnam nemo. Ad sunt minus rem earum delectus hic
                            officia iste qui sunt quos non officiis illo vel
                            doloribus perspiciatis. Ab soluta eius sed quidem
                            dolores rem necessitatibus minus 33 minus commodi.
                            Nam repudiandae libero non laboriosam voluptate et
                            saepe fuga vel repudiandae pariatur aut assumenda
                            illo.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </li>
                  <li className="list-item">
                    <h1 className="thq-heading-3">
                      {props.heading6 ?? (
                        <Fragment>
                          <span className="terms-of-service-text128">
                            Cookies
                          </span>
                        </Fragment>
                      )}
                    </h1>
                    <span className="thq-body-small">
                      {props.content6 ?? (
                        <Fragment>
                          <span className="terms-of-service-text122">
                            Ut doloremque aliquam qui veniam deserunt sit
                            voluptates iusto et unde quod ut quam unde ut nemo
                            eius! Ut saepe consequuntur non quibusdam soluta aut
                            maiores eaque et rerum error nam incidunt saepe aut
                            nihil voluptatem. 33 nulla quaerat est doloremque
                            voluptatem ut libero magnam id placeat aliquid. Ea
                            minus totam est inventore minus sed temporibus
                            aperiam At ratione maiores eum libero consequatur
                            aut laborum exercitationem.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

TermsOfService.defaultProps = {
  content7: undefined,
  content3: undefined,
  heading5: undefined,
  content6: undefined,
  heading11: undefined,
  content5: undefined,
  button2: undefined,
  heading2: undefined,
  heading10: undefined,
  heading6: undefined,
  heading1: undefined,
  heading9: undefined,
  content13: undefined,
  content9: undefined,
  heading4: undefined,
  heading7: undefined,
  content12: undefined,
  heading8: undefined,
  heading3: undefined,
  content1: undefined,
  content10: undefined,
  heading13: undefined,
  content11: undefined,
  button: undefined,
  heading12: undefined,
  content4: undefined,
  content2: undefined,
  button1: undefined,
}

TermsOfService.propTypes = {
  content7: PropTypes.element,
  content3: PropTypes.element,
  heading5: PropTypes.element,
  content6: PropTypes.element,
  heading11: PropTypes.element,
  content5: PropTypes.element,
  button2: PropTypes.element,
  heading2: PropTypes.element,
  heading10: PropTypes.element,
  heading6: PropTypes.element,
  heading1: PropTypes.element,
  heading9: PropTypes.element,
  content13: PropTypes.element,
  content9: PropTypes.element,
  heading4: PropTypes.element,
  heading7: PropTypes.element,
  content12: PropTypes.element,
  heading8: PropTypes.element,
  heading3: PropTypes.element,
  content1: PropTypes.element,
  content10: PropTypes.element,
  heading13: PropTypes.element,
  content11: PropTypes.element,
  button: PropTypes.element,
  heading12: PropTypes.element,
  content4: PropTypes.element,
  content2: PropTypes.element,
  button1: PropTypes.element,
}

export default TermsOfService
