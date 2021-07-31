import React, { useState, useEffect } from "react";
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
import MaterialTable, { MTableBody } from "material-table";
import { Checkbox, Select, MenuItem } from "@material-ui/core";
import { tableIcons } from "../material-table/table-icons";
import jsPDF from "jspdf";
import "jspdf-autotable";

// database
const rows = [
    {
        id: 1,
        university: "Sample",
        id_number: 18031274,
        name: "Neeraj",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
    },
    {
        id: 2,
        university: "Sample",
        id_number: 18031274,
        name: "Neeraj",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
    },
    {
        id: 3,
        university: "Sample",
        id_number: 18031274,
        name: "Neeraj",
        age: 21,
        gender: "Male",
        counsellor: "John Doe",
    },
    {
        id: 4,
        university: "Sample",
        id_number: 18031274,
        name: "Neeraj",
        age: 18,
        gender: "Female",
        counsellor: "John Doe",
    },
    {
        id: 5,
        university: "Sample",
        id_number: 18031274,
        name: "Neeraj",
        age: 19,
        gender: "Female",
        counsellor: "John Doe",
    },
];

// for csv exporting
const headers = [
    {
        label: "No.",
        key: "id",
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

export default function TableHome() {
    // const classes = useStyles();

    /* Experimenting age range filtering */

    // const firstOption = Array.from(Array(22).keys());
    // const result = [...firstOption];
    // console.log(result);

    // const range = (_start_, _end_) => {
    //     return new Array(_end_ - _start_ + 1)
    //         .fill(undefined)
    //         .map((_, k) => k + _start_);
    // };
    // for (Array of range(18, 21)) {
    //     return Array;
    // }

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "University of the Cordilleras"; // to edit
        const headers = [
            [
                "Id",
                "University",
                "ID Number",
                "Name",
                "Age",
                "Gender",
                "Counsellor",
            ],
        ];

        const data = rows.map((elt) => [
            elt.id,
            elt.university,
            elt.id_number,
            elt.name,
            elt.age,
            elt.gender,
            elt.counsellor,
        ]);

        let content = {
            startY: 50,
            head: headers,
            body: data,
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save(`Filtered Report of ${title}.pdf`);
    };

    const [filteredData, setFilteredData] = useState(rows);
    const [filter, setFilter] = useState(true);
    const [age, setAge] = useState("all");
    const [gender, setGender] = useState("all");
    const columns = [
        { title: "ID", field: "id" },
        { title: "University", field: "university" },
        { title: "ID Number", field: "id_number" },
        { title: "Name", field: "name" },
        { title: "Age", field: "age" },
        { title: "Gender", field: "gender" },
        { title: "Consulted By", field: "counsellor" },
    ];
    const handleChange = () => {
        setFilter(!filter);
    };
    useEffect(() => {
        setFilteredData(
            age === "all" ? rows : rows.filter((dt) => dt.age === age)
        );
    }, [age]);
    useEffect(() => {
        setFilteredData(
            gender === "all" ? rows : rows.filter((dt) => dt.gender === gender)
        );
    }, [gender]);
    return (
        <>
            <Grid container alignItems="center">
                <MaterialTable
                    icons={tableIcons}
                    title="University of the Cordilleras" // ito sana yung pagka pindot ng filter button
                    data={filteredData}
                    columns={columns}
                    options={{
                        filtering: filter,
                        headerStyle: {
                            backgroundColor: "#289672",
                            color: "white",
                            fontSize: 20,
                        },
                        rowStyle: {
                            fontSize: 20,
                        },
                    }}
                    actions={[
                        {
                            icon: () => (
                                <>
                                    <h6>Filter table</h6>
                                    <Checkbox
                                        checked={filter}
                                        onChange={handleChange}
                                        inputProps={{
                                            "aria-label": "primary checkbox",
                                        }}
                                    />
                                </>
                            ),
                            tooltip: "Hide/Show Filter option",
                            isFreeAction: true,
                        },
                        {
                            icon: () => (
                                <>
                                    <h6>Filter by Age: </h6>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        style={{ width: 100 }}
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    >
                                        <MenuItem value={"all"}>All</MenuItem>
                                        {/* WIP filtering by age */}
                                        <MenuItem value={18}>18-21</MenuItem>
                                        <MenuItem value={23}>23-25</MenuItem>
                                        <MenuItem value={26}>25-above</MenuItem>
                                    </Select>
                                </>
                            ),

                            tooltip: "Filter Age",
                            isFreeAction: true,
                        },
                        {
                            icon: () => (
                                <>
                                    <h6>Filter by Gender: </h6>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        style={{ width: 100 }}
                                        value={gender}
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    >
                                        <MenuItem value={"all"}>All</MenuItem>
                                        <MenuItem value={"Male"}>Male</MenuItem>
                                        <MenuItem value={"Female"}>
                                            Female
                                        </MenuItem>
                                    </Select>
                                </>
                            ),

                            tooltip: "Filter Gender",
                            isFreeAction: true,
                        },
                    ]}
                />
            </Grid>
            <Grid container className="table-btn">
                <CustomButton
                    background="secondary"
                    onClick={() => exportPDF()}
                >
                    <SaveAltIcon />
                    &nbsp; Save as PDF
                </CustomButton>
                &nbsp; &nbsp;
                <CSVLink {...csvReport} style={{ textDecoration: "none" }}>
                    <CustomButton background="primary">
                        <SaveAltIcon />
                        &nbsp; Save as CSV
                    </CustomButton>
                </CSVLink>
            </Grid>
        </>
    );
}
