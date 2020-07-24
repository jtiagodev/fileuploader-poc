import React, { useRef } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Icon, Button } from "@material-ui/core";
import styles from "./styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles({
  root: {
    textTransform: "none"
  }
});

const FileInput = props => {
  const { handleAddFiles } = props;
  const classes = useStyles();

  const inputRef = useRef(null);

  return (
    <>
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        // accept=".docx"
        multiple
        onChange={evt => {
          handleAddFiles(evt.target.files);
        }}
      />
      <Button
        variant="outlined"
        children={<span>Adicionar Anexo</span>}
        className={classes.root}
        startIcon={
          <AddCircleOutlineIcon style={{ color: "green", fontSize: 15 }} />
        }
        onClick={e => {
          inputRef.current.click();
        }}
      />
    </>
  );
};

export default FileInput;
