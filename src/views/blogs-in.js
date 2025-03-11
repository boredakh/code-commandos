import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarIn from '../components/nav-bar-in'
import BlogPostHeader4 from '../components/blog-post-header4'
import BlogPostHeader41 from '../components/blog-post-header41'
import BlogPostHeader411 from '../components/blog-post-header411'
import BlogPostHeader4111 from '../components/blog-post-header4111'
import Footer from '../components/footer'
import './blogs-in.css'

const BlogsIn = (props) => {
  return (
    <div className="blogs-in-container">
      <Helmet>
        <title>BlogsIn - Which Second Hand Lion</title>
        <meta property="og:title" content="BlogsIn - Which Second Hand Lion" />
      </Helmet>
      <NavBarIn
        link1={
          <Fragment>
            <span className="blogs-in-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="blogs-in-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="blogs-in-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="blogs-in-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="blogs-in-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="blogs-in-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="blogs-in-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="blogs-in-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="blogs-in-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="blogs-in-text19">Log in</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="blogs-in-text20">Profile</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="blogs-in-text21">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-inroot-class-name5"
        page1Description={
          <Fragment>
            <span className="blogs-in-text22">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="blogs-in-text23">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="blogs-in-text24">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="blogs-in-text25">Page Four Description</span>
          </Fragment>
        }
      ></NavBarIn>
      <BlogPostHeader4
        date={
          <Fragment>
            <span className="blogs-in-text26">20 March 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blogs-in-text27">7min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blogs-in-text28">Abdul M.</span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="blogs-in-text29">
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
            <span className="blogs-in-text30">
              Have you ever volunteered your skills? Here’s how your experience
              can inspire others
            </span>
          </Fragment>
        }
        blogPostSubtitle={
          <Fragment>
            <span className="blogs-in-text31">
              Have you ever volunteered your skills? Here’s how your experience
              can inspire others
            </span>
          </Fragment>
        }
      ></BlogPostHeader4>
      <BlogPostHeader41
        date={
          <Fragment>
            <span className="blogs-in-text32">20 March 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blogs-in-text33">7min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blogs-in-text34">Paullina J</span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="blogs-in-text35">
              Every year we help dozens of people to join a charity Board
              through our TrusteeWorks service and we often come across
              misunderstandings about the role of a trustee and who can become
              one. Here, I bust the 5 most common trustee myths:
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="blogs-in-text36">Busting 5 trustee myths</span>
          </Fragment>
        }
        rootClassName="blog-post-header41root-class-name1"
        blogPostSubtitle={
          <Fragment>
            <span className="blogs-in-text37">
              From age to experience, Rachel busts some common myths about
              trusteeship.
            </span>
          </Fragment>
        }
      ></BlogPostHeader41>
      <BlogPostHeader411
        date={
          <Fragment>
            <span className="blogs-in-text38">20 March 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blogs-in-text39">7min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blogs-in-text40">Rajib U</span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="blogs-in-text41">
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
            <span className="blogs-in-text46">
              Volunteering to make an environmental and social impact
            </span>
          </Fragment>
        }
        rootClassName="blog-post-header411root-class-name1"
        blogPostSubtitle={
          <Fragment>
            <span className="blogs-in-text47">
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
            <span className="blogs-in-text48">20 March 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blogs-in-text49">7min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blogs-in-text50">Ety R.</span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="blogs-in-text51">
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
            <span className="blogs-in-text52">Driving community change</span>
          </Fragment>
        }
        rootClassName="blog-post-header4111root-class-name1"
        blogPostSubtitle={
          <Fragment>
            <span className="blogs-in-text53">
              Melanie Rees shares how her dynamic group of volunteers are
              turning Brighton into a Green Centre
            </span>
          </Fragment>
        }
      ></BlogPostHeader4111>
      <Footer
        link1={
          <Fragment>
            <span className="blogs-in-text54">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="blogs-in-text55">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="blogs-in-text56">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="blogs-in-text57">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="blogs-in-text58">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="blogs-in-text59">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="blogs-in-text60">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="blogs-in-text61">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="blogs-in-text62">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="blogs-in-text63">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name14"
      ></Footer>
    </div>
  )
}

export default BlogsIn
