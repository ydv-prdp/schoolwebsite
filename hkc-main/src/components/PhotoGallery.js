import React from 'react'
import styled from 'styled-components'
import WSPGallery from './WSPGallery'

function PhotoGallery() {
  const galleryImages = [
    {
      img: "./images/dance3.jpeg"
    }, 
    {
      img: "./images/dance4.jpeg"
    }, 
    {
      img: "./images/cult5.jpeg"
    }, 
    {
      img: "./images/cult1.jpeg"
    },
    {
      img: "./images/dance2.jpeg"
    },
    {
      img: "./images/cult3.jpeg"
    },
    {
      img: "./images/cult4.jpeg"
    }, 
    {
      img: "./images/cult2.jpeg"
    }, 
    {
      img: "./images/kumauni1.jpeg"
    }
  ]
  return (
    <div>
      <WSPGallery 
        galleryImages={galleryImages}
      />

    </div>
  )
}

export default PhotoGallery