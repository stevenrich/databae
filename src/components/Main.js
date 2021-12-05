import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import ex01 from '../images/ex01.jpg'
import ex02 from '../images/ex02.jpg'
import ex03 from '../images/ex03.jpg'
import ex04 from '../images/ex04.jpg'
import ex05 from '../images/ex05.jpg'
import ex06 from '../images/ex06.jpg'
import ex07 from '../images/ex07.jpg'
import ex08 from '../images/ex08.jpg'
import ex09 from '../images/ex09.jpg'
import ex10 from '../images/ex10.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
           The databae woodshop is a small woodshop formerly based out of the living room of journalist <a href="https://twitter.com/dataeditor">Steven Rich</a> and now run out of a basement shop. Rich has been building on and off over the past 15 years, opening his own woodshop in 2018 and formalizing the shop into a business in 2020. The shop is based out of the Petworth neighborhood of Washington, DC and is open when Rich isn't working his day job. The shop specializes in the design and construction of unique wood furniture and objects, built to the specifications of customers and their space and with their style.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            The woodshop has built wooden items large and small and every design is made with the client in mind. Here are a few of our recent projects. If you'd like to see more, check out our work on <a href="https://instagram.com/thatstevenrich">Instagram</a>.
            <span className="image main">
            <img src={ex06} alt="" />
            </span>
            <span className="image main">
            <img src={ex07} alt="" />
            </span>
            <span className="image main">
            <img src={ex08} alt="" />
            </span>
            <span className="image main">
            <img src={ex09} alt="" />
            </span>
            <span className="image main">
            <img src={ex10} alt="" />
            </span>
	    <span className="image main">
            <img src={ex01} alt="" />
            </span>
            <span className="image main">
            <img src={ex02} alt="" />
            </span>
            <span className="image main">
            <img src={ex03} alt="" />
            </span>
            <span className="image main">
            <img src={ex04} alt="" />
            </span>
            <span className="image main">
            <img src={ex05} alt="" />
            </span>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
          The databae woodshop is located in Washington, DC and depending on the size of build, will ship. For information on the shop, estimates for potential builds or collaborations (with wood or across mediums) the owner of the shop can be reached by text or by phone at (540) DATABAE (328-2223), at steven@datab.ae or via the contact form below. Because this is a side business, Steven will respond when he is able.
          </p>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
	  <input type="hidden" name="bot-field" />
	  <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/databaewoodshop"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/pages/category/Carpenter/databae-woodshop-102690434750883/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/thatstevenrich" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
        <article
          id="merch"
          className={`${this.props.article === 'merch' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Merch</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <p>
           The databae woodshop sells a small collection of merchandise including merch with art commissioned by DC-area artists. Go check out the shop at <a href="https://merch.datab.ae">merch.datab.ae</a>
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
