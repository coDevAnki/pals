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
  const history = useHistory();
  const { deleteId } = useParams();

  const removeContact = (id) => {
    deleteContactAction(contactsDispatch, id, history);
  };
  const removeModal = () => {
    history.push("/");
  };

  return (
    <Modal onClickOutside={removeModal}>
      <div>are you sure to delete this contact?</div>
      <FlexWrapper justify={"flex-end"}>
        <Button
          width="100px"
          disabled={loading}
          onClick={() => removeContact(deleteId)}
        >
          {loading ? "deleting" : "delete"}
        </Button>
        <Button width="100px" margin={"1rem"} onClick={removeModal}>
          no
        </Button>
      </FlexWrapper>
    </Modal>
  );
};
export default DeletePage;
