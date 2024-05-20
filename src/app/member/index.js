"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { MemberDetailsForm } from "@/components/MemberDetailForm";
const members = ["Sachin Chauhan", "Utkarsh Tiwari"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [openModal, setOpenModel] = React.useState(false);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleMemberForm = () => {
    <MemberDetailsForm />;
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add Member</DialogTitle>
      <List sx={{ pt: 0 }}>
        {members.map((member) => (
          <ListItem disableGutters key={member}>
            <ListItemButton onClick={() => handleListItemClick(member)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={member} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Add Member"
              onOpen={() => setOpenModel(true)}
              onClose={() => setOpenModel(false)}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Dialog open={openModal}>
        Create new
      </Dialog>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function AddMember() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(members[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <br />
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="hover:bg-gray-700 hover:text-white"
      >
        ADD MEMBER
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
