import React from "react";
import styled from "styled-components";

function ResumeCertificates() {
  return (
    <ResumeCertificatesStyled>
      <ul>
        <li>
          Full Stack Web Development{" "}
          <a
            target="-blank"
            href="https://www.udemy.com/certificate/UC-13abd32a-a41f-43c6-a5a1-b14c7ff486a8/"
          >
            <i className="fas fa-link" />
          </a>
        </li>
        <sup className="sub-title">Udemy, Online Bootcamp</sup>

        <li>
          Google IT Automation with Python{" "}
          <a
            target="-blank"
            href="https://www.credly.com/badges/8019243c-46b4-48f6-90f5-bfac4bd60253?source=linked_in_profile"
          >
            <i className="fas fa-link" />
          </a>
        </li>
        <sup className="sub-title">Grow with Google</sup>
        <li>
          Python 3 Programming{" "}
          <a
            target="-blank"
            href="https://www.coursera.org/account/accomplishments/specialization/EQZN7RJU2YSL"
          >
            <i className="fas fa-link" />
          </a>
        </li>
        <sup className="sub-title">University Of Michigan online course</sup>
        <li>
          Google IT Support{" "}
          <a
            target="-blank"
            href="https://www.credly.com/badges/5088bcad-3f3e-4ce0-b089-5f8e2bdf8dab?source=linked_in_profile"
          >
            <i className="fas fa-link" />
          </a>
        </li>
        <sup className="sub-title">Grow with Google</sup>
      </ul>
    </ResumeCertificatesStyled>
  );
}

const ResumeCertificatesStyled = styled.div`
  margin: 1.5rem 0;
  margin-left: 1rem;

  li {
    list-style: square;
  }

  .sub-title {
    margin-left: 20px;
    color: #555;
  }
`;

export default ResumeCertificates;
