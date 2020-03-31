import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./project.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from "@fortawesome/fontawesome-svg-core"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

config.autoAddCss = false

const HoverText = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px;
  background-color: #fd5a25;
  color: white;
  border-radius: 5px;
  font-size: 0.9em;
  :hover {
    color: #fd5a25;
    background-color: white;
    border: 1px solid #fd5a25;
  }
`

export const query = graphql`
  query($projectId: String) {
    allVolunteerListingsJson(filter: { id: { eq: $projectId } }) {
      edges {
        node {
          title
          description
          location
          progress
          skills
          members
          tasks
          documentation
          numOfVolunteers
          contact
          type
        }
      }
    }
  }
`

const Character = ({ data }) => {
  const project = data.allVolunteerListingsJson.edges[0].node

  return (
    <Layout>
      <div className="container">
        <div className="header-container">
          <div className="header">
            <h1>{project.title}</h1>
            <div style={{ color: `#46B2A2` }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {project.location}
            </div>
          </div>

          <div className="join-project">
            <HoverText
              target="_blank"
              rel="noopener noreferrer"
              href="https://forms.gle/eq2d7ctbeyrRdNAz9"
            >
              Join the project
            </HoverText>
          </div>
        </div>

        <div className="content-container">
          <div className="row">
            <div className="field">Description</div>
            <div className="field-content">{project.description}</div>
          </div>

          <div className="row">
            <div className="field">Who is already working on this</div>
            <div className="field-content">{project.members.join(",")}</div>
          </div>

          <div className="row">
            <div className="field">How far along it is</div>
            <div className="field-content">{project.progress}</div>
          </div>

          <div className="row">
            <div className="field">Demo, mockups, or documentation</div>
            <div className="field-content">
              <a
                href={`${project.documentation}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </div>
          </div>

          <div className="row">
            <div className="field">Tasks that need to get done</div>
            <div className="field-content">
              <ul>
                {project.tasks && project.tasks.map(task => <li>{task}</li>)}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="field">Number of Volunteers</div>
            <div className="field-content">{project.numOfVolunteers}</div>
          </div>

          <div className="row">
            <div className="field">Location</div>
            <div className="field-content">{project.location}</div>
          </div>

          <div className="row">
            <div className="field">How to get in touch</div>
            <div className="field-content">{project.contact}</div>
          </div>

          <div className="row">
            <div className="field">Skills needed</div>
            <div className="field-content">
              <ul>
                {project.skills &&
                  project.skills.map(skill => <li>{skill}</li>)}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="field">Project type</div>
            <div className="field-content">{project.type}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Character
