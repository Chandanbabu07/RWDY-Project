import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import PhoneNumberInput from "../CommonUtils/PhoneNumberInput";
Modal.setAppElement("#root"); // Ensure accessibility

// Styled components
const PopupContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 20px;
  text-align: left;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #888;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 40px;
`;

const FormGroupHalf = styled(FormGroup)`
  width: 48%;
`;

const PopupFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #ccc;
  color: #000;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const SaveButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CancelImage = styled.div`
  display: flex;
  height: 1.8rem;
  width: 1.8rem;

  align-items: center;
  justify-content: center;
  float: right;
  background-color: rgb(134 134 134);
  border-radius: 9999px;
  margin-right: -24px;
  margin-top: -20px;
`;

const ButtonHoverEffect = `
  &:hover {
    opacity: 0.8;
  }
`;

CancelButton.defaultProps = { as: "button" };
SaveButton.defaultProps = { as: "button" };

CancelButton.attrs = {
  as: "button",
  children: "Cancel",
};

SaveButton.attrs = {
  as: "button",
  children: "Save",
};

const AddAddressPopup = ({ isOpen, setIsOpen, onRequestClose }) => {
  const [modalWidth, setModalWidth] = useState("40%"); // default width

  useEffect(() => {
    // Function to update width based on screen size
    const updateModalWidth = () => {
      if (window.innerWidth <= 768) {
        setModalWidth("85%");
      } else {
        setModalWidth("40%");
      }
    };

    updateModalWidth(); // Set initial width
    window.addEventListener("resize", updateModalWidth); // Update on resize

    return () => window.removeEventListener("resize", updateModalWidth); // Clean up event listener
  }, []);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // dim background
      zIndex: 1000, // to ensure it appears above other content
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: modalWidth,
      borderRadius: "10px",
      padding: "20px",
      border: "none",
      backgroundColor: "#fff",
      height: "500px",
    },
  };

  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      id="AddAddressPopup"
    >
      <PopupContainer>
        <CancelImage onClick={() => setIsOpen(false)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            color="white"
            data-sentry-element="MdClose"
            data-sentry-source-file="Modal.tsx"
            height="15"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "white" }}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </CancelImage>
        <Title>ADD ADDRESS</Title>

        <Form>
          <FormRow>
            <FormGroupHalf>
              <Label>Name</Label>
              <Input type="text" />
            </FormGroupHalf>

            <FormGroupHalf>
              <Label>Mobile Number</Label>
              {/*<Input type="text" placeholder="+91" /> */}
              <PhoneNumberInput></PhoneNumberInput>
            </FormGroupHalf>
          </FormRow>

          <FormGroup>
            <Label>Address</Label>
            <Input type="text" style={{ height: "50px" }} />
          </FormGroup>

          <FormRow>
            <FormGroupHalf>
              <Label>Pin Code</Label>
              <Input type="text" />
            </FormGroupHalf>

            <FormGroupHalf>
              <Label>City / Town</Label>
              <Input type="text" />
            </FormGroupHalf>
          </FormRow>

          <FormRow>
            <FormGroupHalf>
              <Label>State</Label>
              <Input type="text" />
            </FormGroupHalf>

            <FormGroupHalf>
              <Label>Country</Label>
              <Input type="text" value="India" readOnly />
            </FormGroupHalf>
          </FormRow>

          <PopupFooter>
            <CancelButton type="button" onClick={() => setIsOpen(false)}>
              Cancel
            </CancelButton>
            <SaveButton type="submit" onClick={() => handleSubmit()}>
              Save
            </SaveButton>
          </PopupFooter>
        </Form>
      </PopupContainer>
    </Modal>
  );
};

export default AddAddressPopup;
