import { LitElement, html, css } from 'lit-element';
import styles from '../global.styles.js';

export class HomePage extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        /*site hero*/

        main .site-title {
          background: url('https://images.unsplash.com/photo-1471085507142-12355181f804?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
          background-size: cover;
          height: 110vh;
          display: flex;
          justify-content: center;
        }

        main .site-title .site-background {
          padding-top: 10rem;
          text-align: center;
          color: var(--white);
        }

        main .site-title h1,
        h3 {
          margin: 0.3rem;
        }

        main .site-title .btn {
          margin: 1.8rem;
          background: white;
        }

        main .site-title .btn:hover {
          background: transparent;
          border: 1px solid var(--white);
          color: var(--white);
        }

        /* travel form */

        .booking_details,
        .booking_details .item .cta {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }

        .booking_details .item .cta:hover {
          background-color: #0674a8;
        }

        .booking_details {
          background-color: #fff;
          height: 60px;
          border-radius: 15px;
          position: relative;
          -webkit-box-shadow: 1px 1px 20px 0px rgba(50, 50, 50, 0.3);
          box-shadow: 1px 1px 20px 0px rgba(50, 50, 50, 0.3);
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          padding: 0 15px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }

        .booking_details .item {
          font-size: 10px;
          padding: 0 10px 0 20px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-align: left;
          color: black;
        }

        .booking_details .item .date,
        .booking_details .item .people {
          font-weight: 600;
          margin-bottom: 8px;
        }

        .booking_details .item .cta {
          width: 135px;
          height: 35px;
          border: 1px solid #bcc1bd;
          font-size: 12px;
          font-weight: 500;
          border-radius: 35px;
          color: #bcc1bd;
          cursor: pointer;
          background-color: #bcc1bd;
          color: black;
        }

        /* dest */

        main .dest .dest-post {
          padding-top: 6rem;
        }

        main .dest-post .dest-content {
          display: flex;
          flex-direction: column;
          text-align: center;
          width: 80%;
          margin: 3rem 2rem;
          box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
        }

        main .dest-content .dest-title {
          padding: 2rem 0;
        }

        main .dest-content .btn-dest {
          padding: 0.7rem 2rem;
          background: var(--sky);
          margin: 0.5rem;
        }

        main .dest-content span {
          display: block;
        }

        /* site content */

        .site-content {
          display: grid;
          grid-template-columns: 70% 30%;
        }

        .post-content {
          width: 100%;
        }

        .site-content .post-content > .post-image,
        .post-title {
          padding: 1rem 2rem;
          position: relative;
        }

        .site-content .post-content > .post-image .post-info {
          background: var(--sky);
          padding: 1rem;
          position: absolute;
          bottom: 0%;
          left: 20vw;
          border-radius: 3rem;
        }

        .site-content .post-content > .post-image > div {
          overflow: hidden;
        }

        .site-content .post-content > .post-image .img {
          width: 100%;
        }

        .site-content .post-content > .post-image .post-info span {
          margin: 0 0.5rem;
        }

        .post-content .post-title a {
          font-size: 1.5rem;
        }

        .site-content .post-content .post-title .post-btn {
          border-radius: 0;
          padding: 0.7rem 1.5rem;
          background: var(--sky);
        }

        /* sidebar  */

        .site-content > .sidebar .category-list .list-items {
          background: var(--sky);
          padding: 0.4rem 1rem;
          margin: 0.8rem 0;
          border-radius: 3rem;
          width: 70%;
          display: flex;
          justify-content: space-between;
        }

        .site-content > .sidebar .category-list .list-items a {
          color: black;
        }

        .site-content .sidebar .newsletter {
          padding-top: 10rem;
        }

        .site-content .sidebar .newsletter .form-element {
          padding: 0.5rem 2rem;
        }

        .site-content .sidebar .newsletter .input-element {
          width: 80%;
          height: 1.9rem;
          padding: 0.3rem 0.5rem;
          font-size: 1rem;
        }

        .site-content .sidebar .newsletter .form-btn {
          border-radius: 0;
          padding: 0.8rem 32%;
          margin: 1rem 0;
          background: var(--sky);
        }

        /* viewport less then or equal to 1130px */

        @media only screen and (max-width: 1130px) {
          .site-content .post-content > .post-image .post-info {
            left: 2rem !important;
            bottom: 1.2rem !important;
            border-radius: 0% !important;
          }

          .site-content .sidebar .popular-post .post-info {
            display: none !important;
          }

          .booking_info {
            padding-top: 38px;
          }
          .booking_details {
            flex-direction: column;
            height: 300px;
            padding: 30px 0;
          }
          .booking_details .item {
            font-size: large;
          }

          .booking_details .item input,
          select {
            border-radius: 8px;
          }
        }

        /* viewport less then or equal to 750px */

        @media only screen and (max-width: 750px) {
          .site-content {
            grid-template-columns: 100%;
          }

          .booking_info {
            padding-top: 38px;
          }
          .booking_details {
            flex-direction: column;
            height: 250px;
            padding: 20px;
            margin: 0px 40px;
          }
          .booking_details .item {
            font-size: large;
          }

          .booking_details .item input,
          select {
            border-radius: 8px;
          }

          .category {
            margin: 0px 40px;
          }
        }

        /* viewport less then or equal to 520px */

        @media only screen and (max-width: 520px) {
          main .dest {
            height: 125vh;
          }

          .site-content .post-content > .post-image .post-info {
            display: none;
          }
        }
      `,
    ];
  }
  static get properties() {
    return {
      title: { type: String },
    };
  }

  render() {
    return html`
      <main>
      <section class="site-title">
          <div class="site-background">
              <h3>Join today!</h3>
              <h1>Discover the world with us!</h1>
              <button class="btn">Explore</button>

              <div class="booking_info"> 
                <div class="booking_details">

                  <div class="item">
                    <label for="destination">Destination</label>
                    <select id="destinations" name="destinations">
                      <option value="paris">Paris</option>
                      <option value="london">London</option>
                      <option value="amsterdam">Amsterdam</option>
                      <option value="bucharest">Bucharest</option>
                    </select>
                    &nbsp;
                    &nbsp;
                  </div>

                  <div class="item">
                    <label for="checkindate">Check in</label>
                    <input type="date" />
                  </div>
        
                  <div class="item">
                    <label for="checkoutdate">Check out</label>
                    <input type="date" />
                  </div>
        
                  <div class="item">
                    <label for="numberofmembers">Member</label>
                    <input type="number" placeholder="1" />
                  </div>
        
                  <div class="item">
                    <div class="cta active">Search</div>
                  </div>
        
                </div>
              </div>
          </div>
      </section>
      </main>

      <section>
        <div class="dest">
            <div class="container">
              <div class="dest-content">
                    <h1 style="text-align: center;">Our most visited destinations!</h1>
                    <h3 style="text-align: center;">Check them out now!</h3>
                    <br/>
                    <travel-card class="travel-card" id="travel-card"></travel-card>
              </div>
                    
            </div>
        </div>
      </section>

      <section>
        <h1 style="text-align: center;">Check out some articles</h1>
          <div class="site-content">
            <div class="posts">
              <div class="post-content">
                <div class="post-image">
                    <div>
                        <img src="https://images.unsplash.com/photo-1554366347-897a5113f6ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" class="img" alt="dest1">
                    </div>
                </div>
            </div>
            </div>
            <aside class="sidebar">
              <div class="category" id="category">
                  <h2>Category</h2>
                  <ul class="category-list">
                      <li class="list-items">
                          <a href="#">Seaside</a>
                          <span>(05)</span>
                      </li>
                      <li class="list-items">
                          <a href="#">Nature</a>
                          <span>(02)</span>
                      </li>
                      <li class="list-items">
                          <a href="#">Lifestyle</a>
                          <span>(07)</span>
                      </li>
                      <li class="list-items">
                          <a href="#">European Cities</a>
                          <span>(01)</span>
                      </li>
                      <li class="list-items">
                          <a href="#">Food</a>
                          <span>(08)</span>
                      </li>
                  </ul>
                  <div class="post-title">
                    <a href="#">Did you know that traveling has health benefits?</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                        adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                        nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                        illum similique veniam tempore unde?
                    </p>
                    <button class="btn post-btn">Read More &nbsp;</button>
                </div>
              </div>
          </div>
      </section>
    `;
  }
}

customElements.define('home-page', HomePage);
