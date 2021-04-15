import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "../../components/reusable-components";
import Modal from "../../components/reusable-components/Modal";
import { FlexWrapper } from "../../components/styled-compoents";
import { useContactsDispatch, useContactsState } from "../../context";
import { deleteContactAction } from "../../context/actions";

const DeletePage = () => {
  const contactsDispatch = useContactsDispatch();
  const {
    deleteContact: { loading },
  } = useContactsState();

  const { deleteId } = useParams();
  const history = useHistory();
  const removeContact = (id) => {
    deleteContactAction(contactsDispatch, id, history);
  };
  const removeModal = () => {
    history.goBack();
  };

  return (
    <Modal onClickOutside={removeModal}>
      <div>Are you sure to delete this contact ?</div>
      <FlexWrapper justify={"flex-end"}>
        <Button
          padding=".5rem 1rem"
          disabled={loading}
          onClick={() => removeContact(deleteId)}
        >
          {loading ? "Deleting" : "Delete"}
        </Button>
        <Button padding=".5rem 1rem" margin={"1rem"} onClick={removeModal}>
          No
        </Button>
      </FlexWrapper>
    </Modal>
  );
};
export default DeletePage;
