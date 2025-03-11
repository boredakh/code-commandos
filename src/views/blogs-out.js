import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import BlogPostHeader4 from '../components/blog-post-header4'
import BlogPostHeader41 from '../components/blog-post-header41'
import BlogPostHeader411 from '../components/blog-post-header411'
import BlogPostHeader4111 from '../components/blog-post-header4111'
import Footer from '../components/footer'
import './blogs-out.css'

const BlogsOut = (props) => {
  return (
    <div className="blogs-out-container">
      <Helmet>
        <title>BlogsOut - Which Second Hand Lion</title>
        <meta property="og:title" content="BlogsOut - Which Second Hand Lion" />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="blogs-out-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="blogs-out-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="blogs-out-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="blogs-out-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="blogs-out-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="blogs-out-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="blogs-out-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="blogs-out-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="blogs-out-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="blogs-out-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="blogs-out-text20">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name7"
        page1Description={
          <Fragment>
            <span className="blogs-out-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="blogs-out-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="blogs-out-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="blogs-out-text24">Page Four Description</span>
          </Fragment>
        }
      ></NavBarOut>
      <BlogPostHeader4
        date={
          <Fragment>
            <span className="blogs-out-text25">20 March 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blogs-out-text26">7min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blogs-out-text27">Abdul M.</span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="blogs-out-text28">
              Volunteering is an incredibly rewarding way to give back to
              society. For many, it&apos;s a way to use their skills and talents
              to support causes they care about and contribute to building a
              better future. However, when you decide to volunteer for the first
              time, there’s often uncertainty about where to start or what to
              expect and this can put people off.
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="blogs-out-text29">
              Have you ever volunteered your skills? Here’s how your experience
              can inspire others
            </span>
          </Fragment>
        }
        blogPostSubtitle={
          <Fragment>
            <span className="blogs-out-text30">
              Have you ever volunteered your skills? Here’s how your experience
              can inspire others
            </span>
          </Fragment>
        }
      ></BlogPostHeader4>
      <BlogPostHeader41
        date={
          <Fragment>
            <span className="blogs-out-text31">20 March 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blogs-out-text32">7min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blogs-out-text33">Paullina J</span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="blogs-out-text34">
              Every year we help dozens of people to join a charity Board
              through our TrusteeWorks service and we often come across
              misunderstandings about the role of a trustee and who can become
              one. Here, I bust the 5 most common trustee myths:
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="blogs-out-text35">Busting 5 trustee myths</span>
          </Fragment>
        }
        rootClassName="blog-post-header41root-class-name"
        blogPostSubtitle={
          <Fragment>
            <span className="blogs-out-text36">
              From age to experience, Rachel busts some common myths about
              trusteeship.
            </span>
          </Fragment>
        }
      ></BlogPostHeader41>
      <BlogPostHeader411
        date={
          <Fragment>
            <span className="blogs-out-text37">20 March 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blogs-out-text38">7min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blogs-out-text39">Rajib U</span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="blogs-out-text40">
              <span>
                At a time where I was transitioning careers, looking for work,
                and the UK was in lockdown, I was craving a sense of engagement
                and purpose. Volunteering was a core part of my adult life and I
                was seeking a way to contribute, especially with an
                environmental and social impact lens.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                I was grateful to discover Reach Volunteering, which was able to
                connect me with a number of fantastic organisations that were in
                need of motivated people to help push their organisations
                forward.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="blogs-out-text45">
              Volunteering to make an environmental and social impact
            </span>
          </Fragment>
        }
        rootClassName="blog-post-header411root-class-name"
        blogPostSubtitle={
          <Fragment>
            <span className="blogs-out-text46">
              Tarek Hasan, Chair of Trustees at The Movements Trust, on
              volunteering and enacting change in an ever-growing climate
              emergency.
            </span>
          </Fragment>
        }
      ></BlogPostHeader411>
      <BlogPostHeader4111
        date={
          <Fragment>
            <span className="blogs-out-text47">20 March 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blogs-out-text48">7min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blogs-out-text49">Ety R.</span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="blogs-out-text50">
              Based in Brighton, The Green Centre is a community environmental
              project run entirely by volunteers. Set up in 2006, our mission is
              to provide information and advice to all members of the community
              on matters that influence the future of our planet (locally,
              nationally and globally). We enable people to develop their
              relationship with the planet, helping them to focus on their own
              habits and behaviours, and the changes that they can make as
              individuals.
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="blogs-out-text51">Driving community change</span>
          </Fragment>
        }
        rootClassName="blog-post-header4111root-class-name"
        blogPostSubtitle={
          <Fragment>
            <span className="blogs-out-text52">
              Melanie Rees shares how her dynamic group of volunteers are
              turning Brighton into a Green Centre
            </span>
          </Fragment>
        }
      ></BlogPostHeader4111>
      <Footer
        link1={
          <Fragment>
            <span className="blogs-out-text53">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="blogs-out-text54">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="blogs-out-text55">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="blogs-out-text56">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="blogs-out-text57">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="blogs-out-text58">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="blogs-out-text59">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="blogs-out-text60">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="blogs-out-text61">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="blogs-out-text62">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name13"
      ></Footer>
    </div>
  )
}

export default BlogsOut
