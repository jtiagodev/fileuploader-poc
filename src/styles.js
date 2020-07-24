const styles = theme => ({
  Chip: {
    borderRadius: 0,
    /* height: `${theme.spacing.unit * 5}px`, */
    height: "60px",
    padding: `${theme.spacing.unit * 2}px`,
    paddingRight: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    flexGrow: 4
  },
  chipParent: {
    width: "230px",
    borderRadius: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  chipText: {
    padding: `0px ${theme.spacing.unit * 2}px`,
    cursor: "pointer",
    textDecoration: "underline",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  deleteIconContainer: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 2}px ${theme.spacing.unit * 2}px`
  },
  DeleteIcon: {
    cursor: "pointer"
  },
  root: {
    backgroundColor: theme.palette.grey[300],
    width: "fit-content",
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    "&:hover": {
      backgroundColor: theme.palette.grey[500]
    }
  },
  documentClassText: {
    padding: `0px 0px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`
  },
  // File Input
  buttonIcon: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  InputFile: { display: "none", cursor: "pointer" },
  buttonIconDisabled: {
    pointerEvents: "none",
    cursor: "not-allowed",
    color: "red",
    "&:hover": {
      color: "red"
    }
  },
  progress: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    width: `${theme.spacing.unit * 3}px !important`,
    height: `${theme.spacing.unit * 3}px !important`
  },
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: `${theme.spacing.unit * 2}px`
  }
});
export default styles;
