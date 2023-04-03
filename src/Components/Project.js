import React from "react";
import "../CSS/Projects.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Project() {
  return (
    <div className="project-container">
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <img src="..." class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">👩‍💻 100 Days of Coding tracker </h5>
                <p className="card-text">
                  Track your progress. Log daily progress, metrics, and
                  milestones to see how far you have progressed over the 100
                  days.
                </p>
                <a href="#" className="btn btn-primary ">
                  view
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card ">
              <img src="..." class="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">💃 Coachella website</h5>
                <p className="card-text">
                  The Coachella Valley Music and Arts Festival is an annual
                  music and arts festival held at the Empire Polo Club in Indio,
                  California, in the Coachella Valley in the Colorado Desert.
                </p>
                <a href="#" className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
