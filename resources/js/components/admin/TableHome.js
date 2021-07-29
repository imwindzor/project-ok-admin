import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import {
    Grid,
    Typography,
    FormControl,
    NativeSelect,
    FormHelperText,
} from "@material-ui/core";
import { CustomButton } from "../../material-ui/styles";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import PrintIcon from "@material-ui/icons/Print";
import { CSVLink } from "react-csv";

const columns = [
    { id: "number", label: "No.", minWidth: 50 },
    {
        id: "university",
        label: "University",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    { id: "id_number", label: "ID Number", minWidth: 170, align: "right" },
    {
        id: "name",
        label: "Name",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "age",
        label: "Age",
        minWidth: 50,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "gender",
        label: "Gender",
        minWidth: 170,
        align: "right",
        format: (value) => value.toFixed(2),
    },
    {
        id: "counsellor",
        label: "Consulted By",
        minWidth: 170,
        align: "right",
        format: (value) => value.toFixed(2),
    },
];

function createData(
    number,
    university,
    id_number,
    name,
    age,
    gender,
    counsellor
) {
    return { number, university, id_number, name, age, gender, counsellor };
}

// Dito i-connect yung db ng students/counsellors
const rows = [
    createData(
        1,
        "Sample University",
        1324171354,
        "Juan Dela Cruz",
        18,
        "Male",
        "John Doe"
    ),
    createData(
        2,
        "Sample University",
        1324171354,
        "Juan Dela Cruz",
        18,
        "Male",
        "John Doe"
    ),
    createData(
        3,
        "Sample University",
        1324171354,
        "Juan Dela Cruz",
        18,
        "Male",
        "John Doe"
    ),
    createData(
        4,
        "Sample University",
        1324171354,
        "Juan Dela Cruz",
        18,
        "Male",
        "John Doe"
    ),
];

const headers = [
    {
        label: "No.",
        key: "number",
    },
    {
        label: "University",
        key: "university",
    },
    {
        label: "ID Number",
        key: "id_number",
    },
    {
        label: "Name",
        key: "name",
    },
    {
        label: "Age",
        key: "age",
    },
    {
        label: "Gender",
        key: "gender",
    },
    {
        label: "Counsellor",
        key: "counsellor",
    },
];

const csvReport = {
    filename: "Projectok-admin.csv",
    headers: headers,
    data: rows,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "2% 5% 0 5%",
    },
    container: {
        maxHeight: 440,
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        fontSize: 20,
    },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#289672",
        color: "white",
        fontSize: 16,
    },
    body: {
        fontSize: 20,
    },
}))(TableCell);

export default function TableHome() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Grid container alignItems="center">
                <Grid className="table-filters">
                    <Typography variant="h6" className="filter-text">
                        Filter results by:
                    </Typography>
                    <FormControl className={classes.formControl}>
                        <NativeSelect
                            name="age"
                            className={classes.selectEmpty}
                            inputProps={{ "aria-label": "age" }}
                        >
                            <option value="">18-20</option>
                            <option value="">21-22</option>
                            <option value="">23-25</option>
                            <option value="">25 above</option>
                        </NativeSelect>
                        <FormHelperText>Filter results by Age</FormHelperText>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <NativeSelect
                            name="age"
                            className={classes.selectEmpty}
                            inputProps={{ "aria-label": "age" }}
                        >
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </NativeSelect>
                        <FormHelperText>
                            Filter results by Gender
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <CustomButton type="submit" background="secondary">
                    Search
                </CustomButton>
                <Paper className={`${classes.root} ${classes.body}`}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <StyledTableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                            }}
                                        >
                                            {column.label}
                                        </StyledTableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((row) => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.code}
                                            >
                                                {columns.map((column) => {
                                                    const value =
                                                        row[column.id];
                                                    return (
                                                        <StyledTableCell
                                                            key={column.id}
                                                            align={column.align}
                                                        >
                                                            {column.format &&
                                                            typeof value ===
                                                                "number"
                                                                ? column.format(
                                                                      value
                                                                  )
                                                                : value}
                                                        </StyledTableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </Grid>
            <Grid containter className="table-btn">
                <CustomButton background="secondary">
                    <PrintIcon />
                    &nbsp; Print
                </CustomButton>
                &nbsp; &nbsp;
                <CSVLink {...csvReport} style={{ textDecoration: "none" }}>
                    <CustomButton background="primary">
                        <SaveAltIcon />
                        &nbsp; Save as
                    </CustomButton>
                </CSVLink>
            </Grid>
        </>
    );
}
