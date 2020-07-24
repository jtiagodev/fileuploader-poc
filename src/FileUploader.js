import React, { useState } from "react";
import "./styles.css";
import FileInput from "./FileInput";
import FileChip from "./FileChip";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Flex } from "./Grid";
import * as R from "ramda";

const FileUploader = props => {
  const { checkDuplicates = true } = props;

  const [files, setFiles] = useState([]);

  const handleAddFiles = filesData => {
    const newFiles = Array.from(filesData);
    let addedFiles = [];
    if (checkDuplicates) {
      newFiles.forEach(newFile => {
        if (!R.find(R.propEq("name", newFile.name))(files)) {
          addedFiles.push(newFile);
        }
      });
    } else {
      addedFiles = newFiles;
    }
    setFiles(R.insertAll(files.length, addedFiles, files));
  };

  const handleDeleteFile = index => {
    setFiles(R.remove(index, 1, files));
  };

  return (
    <>
      {files.length > 0 && (
        <Flex style={{ marginBottom: "16px" }}>
          {files.map((file, index) => (
            <FileChip
              key={`fileChip-${index}`}
              name={file.name}
              arrayIndex={index}
              handleDeleteFile={handleDeleteFile}
            />
          ))}
        </Flex>
      )}

      <FileInput handleAddFiles={handleAddFiles} />
    </>
  );
};

export default FileUploader;
