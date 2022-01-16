import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">MY WORK</span>
                <h2 className="colorlib-heading animate-box">PROJECTS</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Weather Forecasting Application <span>December 2021</span></h2>
                        <p>Created a weather forecasting application that shows a 5-day weather forecast with high and low temperatures as well as an image for sunny/rainy/cloudy/snowy. Added 1 additional feature of clicking on a day and displaying hourly forecast for that day. In the top-level App state, current view was displayed.
</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>MERN Application <span>November 2021</span></h2>
                        <p>Made a MERN stack application with 4 API’s create user, edit user, delete user and get user. Created 1 admin user with the rights to add users, add/edit/delete vacation packages. Created 1 customer support representative user to respond to the queries of guest users.
</p>
                      </div>
                    </div>
                  </article>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
