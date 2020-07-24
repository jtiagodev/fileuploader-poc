import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import {
  Typography,
  CircularProgress,
  Icon,
  Popover,
  Tooltip
} from "@material-ui/core";
import { Flex } from "./Grid";
import Sugar from "sugar";
import { AttachFile, Clear } from "@material-ui/icons";

const FileChip = props => {
  const { name, arrayIndex, handleDeleteFile } = props;
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      style={{ padding: "5px", background: "#E0E0E0", marginRight: "10px" }}
    >
      <>
        <AttachFile
          style={{
            transform: "rotate(45deg)",
            marginRight: "5px",
            color: "grey",
            fontSize: 15
          }}
        />
        {name.length > 20 && (
          <Tooltip title={name}>
            <Typography>{Sugar.String.truncate(name, 20, "middle")}</Typography>
          </Tooltip>
        )}
        {name.length <= 20 && (
          <Typography style={{ color: "grey" }}>{name}</Typography>
        )}
        <Clear
          style={{ marginLeft: "5px", color: "black", fontSize: 15 }}
          onClick={e => {
            handleDeleteFile(arrayIndex);
          }}
        />
      </>
    </Flex>
  );
};

export default FileChip;
