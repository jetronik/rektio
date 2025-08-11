import React from "react";

const HomePage = () => {
  return (
    <section class="bg-dark text-light p-5 p-lg-0 pt-5 text-center text-sm-start">
      <div class="container">
        <div class="d-sm-flex align-item-center justify-content-between">
          <div>
            <h1>
              Become a <span class="text-warning my-4"> Web Developer </span>
            </h1>
            <p class="lead">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </p>
            <button
              class="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              Start The Enrollment
            </button>
          </div>
          <img
            class="img-fluid w-50 d-none d-sm-block"
            src="img/showcase.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
