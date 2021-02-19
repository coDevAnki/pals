import React from "react";
import { useContactsState } from "../context";
import { useField, useImageUpload } from "../custom-hooks";
import countriesData from "../utils/countriesData";
import ChooseImage from "./ChooseImage";
import { Button, FormHeader, FormInput, Select } from "./reusable-components";
import { CreateContactContainer } from "./styled-compoents";
const CreateContactForm = ({ onSubmit, editData }) => {
  const {
    addContact: { loading },
  } = useContactsState();
  const {
    tempImageURL,
    onImageChange,
    imageFile,
    imgRef,
    chooseImage,
    removeImage,
  } = useImageUpload({ initialImageUrl: editData?.contact_picture || "" });

  const {
    value: firstname,
    field: firstnameField,
    onChange: firstnameOnChange,
  } = useField({
    initialValue: editData ? editData.first_name : "",
  });

  const {
    value: lastname,
    field: lastnameField,
    onChange: lastnameOnChange,
  } = useField({ initialValue: editData ? editData.last_name : "" });

  const {
    value: phoneNumber,
    field: phoneNumberField,
    onChange: phoneNumberOnChange,
    meta: phoneNumberMeta,
  } = useField({
    validateFn: (val) => (val.length < 10 ? "at least 10 char needed" : ""),
    initialValue: editData ? editData.phone_number : "",
  });

  const { field: countryCodeField, onChange: countryCodeOnChange } = useField({
    initialValue: editData ? editData.country_code : "",
  });
  const {
    value: isFavorite,
    field: addToFavouritesField,
    onChange: addToFavouritesOnChange,
  } = useField({
    initialValue:
      editData && editData.is_favorite ? editData.is_favorite : false,
  });

  const countriesOptions = countriesData.map(({ text, value }) => {
    return { text, value };
  });

  const editCountryCode = () =>
    editData
      ? countriesOptions.find(
          (country) => country.value === editData.country_code
        ).text
      : "---Choose---";

  return (
    <div>
      <FormHeader>
        {editData ? "Edit Contact" : "Create New Contact"}
      </FormHeader>
      <CreateContactContainer
        onSubmit={(e) =>
          onSubmit(e)({
            ...firstnameField,
            ...lastnameField,
            ...phoneNumberField,
            ...countryCodeField,
            ...addToFavouritesField,
            contact_picture: imageFile,
          })
        }
      >
        <div>
          <FormInput
            type="file"
            ref={imgRef}
            onChange={onImageChange}
            name="contact_picture"
            hidden
          />
          <ChooseImage
            tempImageURL={tempImageURL}
            alt="img"
            chooseImage={chooseImage}
            removeImage={removeImage}
          />
        </div>

        <FormInput
          label="First Name"
          name="first_name"
          onChange={firstnameOnChange}
          value={firstname}
        />
        <FormInput
          label="Last Name"
          onChange={lastnameOnChange}
          name="last_name"
          value={lastname}
        />
        <Select
          label="Country Code"
          onChange={countryCodeOnChange}
          name="country_code"
          options={countriesOptions}
          display="---Choose---"
          editValue={editCountryCode()}
        />
        <FormInput
          label="Phone Number"
          onChange={phoneNumberOnChange}
          name="phone_number"
          error={phoneNumberMeta.error}
          value={phoneNumber}
        />
        <FormInput
          label="Add To Favourites"
          onChange={addToFavouritesOnChange}
          type="checkbox"
          name="is_favorite"
          checked={!!isFavorite}
          id="add_to_favorites"
        />
        <Button>{loading ? "Adding" : "Add"}</Button>
      </CreateContactContainer>
    </div>
  );
};

export default CreateContactForm;
