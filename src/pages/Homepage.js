import { LitElement, html, css } from 'lit-element';

export class HomePage extends LitElement {
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
