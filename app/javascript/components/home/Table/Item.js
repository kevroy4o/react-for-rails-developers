import React, { Component } from 'react'
import Thumbnail from './Thumbnail'
import styled from 'styled-components'
<<<<<<< HEAD

const Button = styled.a`
display: inline-block;
    text-docoration: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background: #fff;
    color: #333 !important;
    padding: 10px 20px;
    font-size: 18px;
    // width: 100%;
    box-shadow: 0px 0px 0px 3px #473228,
        -6px 6px #ef5f17,
        -6px 6px 0px 3px #473228;
`
=======
>>>>>>> c6d271e09735580e9be497ff55b81c43bde01070

const Button = styled.a`
display: inline-block;
    text-docoration: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background: #fff;
    color: #333 !important;
    padding: 10px 20px;
    font-size: 18px;
    // width: 100%;
    box-shadow: 0px 0px 0px 3px #473228,
        -6px 6px #ef5f17,
        -6px 6px 0px 3px #473228;
`
const Item = (props) => {
  return (
    <div className="row pt-4 pb-4">
      <div className="col-md-10 offset-md-1">
<<<<<<< HEAD
        <div className="card px-5">
          <div className="row">
             <div className="col-md-4">
                <Thumbnail/>
            </div>
              <div className="col-md-8">
=======
        <div>
          <div className="card px-5">
            <div className="row">
              <div className="col-md-4">
                <Thumbnail/>
                </div>
                <div className="col-md-8">
>>>>>>> c6d271e09735580e9be497ff55b81c43bde01070
                <div className="pt-4 pb-4">
                  <h4>{props.title}</h4>
                  <p>{props.description}</p>
                  <div className="cta-wrapper">
<<<<<<< HEAD
                    <Button onClick={props.handleVideoChange} className="btn cta-btn">Watch This Video</Button>
                  </div>
                </div>
              </div>
          </div>
        </div>
=======
                    <Button className="btn cta-btn">Watch This Video</Button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>      
>>>>>>> c6d271e09735580e9be497ff55b81c43bde01070
      </div>
    </div>
  )
}

export default Item