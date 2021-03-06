import React, { useState } from 'react';
import PropTypes from "prop-types";
import { ManageClientsIcon } from "../../assets/svg/PartnerPortalIcons";
import { colors } from "../../data/colors";
import { rem, createBorderTop } from "../../helpers/style";
import Button from "../Button/Button";
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "../SearchBar/SearchBar";
import Typography from '@material-ui/core/Typography';
import AddClientTemplate from "../AddClientTemplate";
import AttachmentIcon from "@material-ui/icons/Attachment";
import AddIcon from "@material-ui/icons/Add";
import CloudIcon from "@material-ui/icons/Cloud";
import { Select, FormControl, InputLabel } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import EditClientTemplate from '../EditClientTemplate';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const paddingSides = 28;

function createData(name, bussines, reseller, date, solution, learned) {
  return { name, bussines, reseller, date, solution, learned };
}

const rows = [
  createData(
    "Graham Chee",
    "Knowledge1",
    "BCyber Pty Ltd",
    "24/04/2020",
    "Free",
    "200 learners"
  ),
  createData(
    "Graham Chee",
    "Knowledge2",
    "BCyber Pty Ltd",
    "24/04/2020",
    "Pro",
    "202 learners"
  ),
  createData(
    "Graham Chee",
    "Knowledge3",
    "BCyber Pty Ltd",
    "24/04/2020",
    "Lite",
    "23 learners"
  ),
  createData(
    "Graham Chee",
    "Knowledge4",
    "BCyber Pty Ltd",
    "24/04/2020",
    "Pro",
    "223 learners"
  ),
  createData(
    "Graham Chee",
    "Knowledge5",
    "BCyber Pty Ltd",
    "24/04/2020",
    "Pro",
    "400 learners"
  ),
  createData(
    "Graham Chee",
    "Knowledge6",
    "BCyber Pty Ltd",
    "24/04/2020",
    "Free",
    "200 learners"
  ),
  createData(
    "Graham Chee",
    "Knowledge7",
    "BCyber Pty Ltd",
    "24/04/2020",
    "Pro",
    "200 learners"
  ),
  createData(
    "Graham Chee",
    "Knowledge8",
    "BCyber Pty Ltd",
    "24/04/2020",
    "Pro",
    "200 learners"
  ),
  createData(
    "Graham Chee",
    "Knowledge9",
    "BCyber Pty Ltd",
    "24/04/2020",
    "Pro",
    "200 learners"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "name", numeric: false, disablePadding: true, label: "Name" },
  { id: "bussines", numeric: true, disablePadding: false, label: "Bussines" },
  { id: "reseller", numeric: true, disablePadding: false, label: "Reseller" },
  {
    id: "up-date",
    numeric: true,
    disablePadding: false,
    label: "Sign up date",
  },
  { id: "solution", numeric: true, disablePadding: false, label: "Solution" },
  { id: "learned", numeric: true, disablePadding: false, label: "Learned" },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: colors.white,
    boxShadow: "none",
    borderTop: createBorderTop(theme),
    borderRadius: 8,
    overflow: "hidden",
  },
  top: {
    padding: rem(paddingSides),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  main: {
    padding: rem(paddingSides),
  },
  tableTop: {
    paddingTop: rem(paddingSides),
    paddingBottom: rem(paddingSides),
  },
  tableHeader: {
    color: "red",
    background: colors.gray6,
  },
  manageTitle: {
    display: "flex",
    alignItems: "center",
  },
  buttonsWrapper: {
    display: "flex",
  },
  manageButton: {
    fontSize: rem(13),
    marginLeft: 10,
    border: "1px solid #E0E0E0",
    boxSizing: "border-box",
    borderRadius: 4,
    padding: `${rem(13)} ${rem(20)}`,
    "& svg": {
      color: theme.palette.primary.main,
    },
  },
  manageIcon: {
    color: theme.palette.primary.main,
    marginRight: rem(24),
  },
  select: {
    minWidth: rem(180),
    marginRight: rem(10),
  },
  paper: {
    width: "100%",
    boxShadow: "none",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  solution: {
    color: theme.palette.primary.main,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  moreVertIcon: {
    cursor: "pointer",
  }
}));

export default function ManageClients() {
  const styles = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.manageTitle}>
          <ManageClientsIcon className={classes.manageIcon} />
          <Typography variant="h4">Manage Clients</Typography>
        </div>
        <div className={classes.buttonsWrapper}>
          <Button
            kind="secondary"
            className={classes.manageButton}
            startIcon={
              <AttachmentIcon className={classes.sendIcon} size="small" />
            }
          >
            Shareable Link
          </Button>
          <Button
            kind="secondary"
            onClick={() => setOpenModal(true)}
            className={styles.manageButton}
            startIcon={<AddIcon className={styles.sendIcon} size="small" />}
          >
            Add Client
            </Button>
          <AddClientTemplate open={openModal} callBack={setOpenModal} />
          <Button
            kind="secondary"
            className={classes.manageButton}
            startIcon={<CloudIcon className={classes.sendIcon} size="small" />}
          >
            Add Client
          </Button>
        </div>
      </div>
      <div className={classes.main}>
        <Paper className={classes.paper}>
          <div className={classes.tableTop}>
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel></InputLabel>
              <Select label="Package"></Select>
            </FormControl>
            <SearchBar placeholder="Search clients..." />
          </div>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                className={classes.tableHeader}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                      // selected={isItemSelected}
                      >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.bussines}</TableCell>
                        <TableCell align="right">{row.reseller}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right" className={classes.solution}>
                          {row.solution}
                        </TableCell>
                        <TableCell align="right">{row.learned}</TableCell>
                        <TableCell align="right" className={classes.moreVertIcon}><MoreVertIcon onClick={() => setOpenModal(true)} /></TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      <EditClientTemplate open={openModal} callBack={setOpenModal} />
    </div>
  );
}
