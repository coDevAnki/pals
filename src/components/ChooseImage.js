import React from "react";
import { Clickable } from "./reusable-components";
import { ChooseImageContainer, ImageOptions } from "./styled-compoents";

const ChooseImage = ({ tempImageURL, chooseImage, removeImage }) =>
  tempImageURL ? (
    <ChooseImageContainer column={true}>
      <img src={tempImageURL} alt="contactimage" />
      <ImageOptions ifImage={!!tempImageURL}>
        <Clickable icon="user-edit" onClick={chooseImage}>
          change photo
        </Clickable>
        <Clickable icon="user-times" onClick={removeImage}>
          remove photo
        </Clickable>
      </ImageOptions>
    </ChooseImageContainer>
  ) : (
    <ChooseImageContainer>
      <ImageOptions>
        <Clickable column={true} icon="user-edit" onClick={chooseImage}>
          add photo
        </Clickable>
      </ImageOptions>
    </ChooseImageContainer>
  );

export default ChooseImage;
