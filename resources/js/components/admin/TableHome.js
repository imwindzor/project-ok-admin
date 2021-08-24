import React, { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { Grid, Typography, Container } from "@material-ui/core";
import { CustomButton } from "../../material-ui/styles";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import { CSVLink } from "react-csv";
import MaterialTable, { MTableBody } from "material-table";
import { Checkbox, Select, MenuItem } from "@material-ui/core";
import { tableIcons } from "../material-table/table-icons";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ChartsImg from "../../../../public/images/Analytics-bro.svg";
import { fetchStudents, fetchCounselors } from "./Fetching";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

function FirstChart(props) {
    return (
        <div>
            <Grid container className="charts" style={{ marginTop: "2%" }}>
                <Typography variant="h5">
                    Filtered results based on charts
                </Typography>
                <br />
                <br />
                <BarChart
                    width={500}
                    height={400}
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="male" fill="#289672" />
                    <Bar dataKey="female" fill="#e9d700" />
                </BarChart>
            </Grid>
            {props.bar}
        </div>
    );
}

// database
let rowsArray = [
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 19,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Female",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Female",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Female",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Female",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Windzor Dave",
        last_name: "De Guzman",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
    {
        university: "University of the Cordilleras",
        first_name: "Hello",
        last_name: "World",
        age: 23,
        gender: "Male",
        counsellor: "John Doe",
        date: "08/02/2021",
    },
];

// // CSV REPORTING
// const headers = [
//     {
//         label: "No.",
//         key: "id",
//     },
//     {
//         label: "University",
//         key: "university",
//     },
//     {
//         label: "ID Number",
//         key: "id_number",
//     },
//     {
//         label: "Name",
//         key: "name",
//     },
//     {
//         label: "Age",
//         key: "age",
//     },
//     {
//         label: "Gender",
//         key: "gender",
//     },
//     {
//         label: "Counsellor",
//         key: "counsellor",
//     },
// ];

// const csvReport = {
//     filename: "Projectok-admin.csv",
//     headers: headers,
//     data: rowsArray,
// };

// DATA FOR CHARTS

/* GENDER FILTERING */
let maleCount = 0;
function maleFilter(item) {
    if (item.gender === "Male") {
        return true;
    }
    maleCount++;
    return false;
}
let maleResult = rowsArray.filter(maleFilter);
const males = maleResult.length;

let femaleCount = 0;
function femaleFilter(item) {
    if (item.gender === "Female") {
        return true;
    }
    femaleCount++;
    return false;
}
let feMaleResult = rowsArray.filter(femaleFilter);
const females = feMaleResult.length;

/* FILTERING UNIVERSITY */
/* FILTERING AGE RANGE */

/* CHART FROM TABLE */

const chartData = [
    { name: "January", male: males, female: females, amt: 400 },
    {
        name: "February",
        male: males,
        female: females,
        amt: 400,
    },
    { name: "March", male: males, female: females, amt: 400 },
];

// PDFMAKE
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function TableHome() {
    // FETCHING THE DATA
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const getStudents = async () => {
            const response = await fetchStudents();
            console.log(response.data[0]);
            switch (response.status) {
                case 200:
                    setStudents(response.data[0]);
                    break;
            }
        };
        getStudents();
    }, []);

    const [counselors, setCounselors] = useState([]);
    useEffect(() => {
        const getCounselors = async () => {
            const response = await fetchCounselors();
            // console.log(response.data[0]);
            switch (response.status) {
                case 200:
                    setCounselors(response.data[0]);
                    break;
            }
        };
        getCounselors();
    }, []);
    const counselorData = counselors;
    console.log(counselorData);
    // const rowsArray2 = counselors.map((counselor) => counselor.last_name);
    // console.log(rowsArray2);

    // GENERATING PDF BASED ON SELECTED ROWS
    const onClickPdf = () => {
        const headers = columns.map((col) => col.title);
        console.log(headers);
        const data = selectedRows.map((rowsArray) =>
            columns.map((col) => rowsArray[col.field])
        );
        console.log(data[0]);
        const dd = {
            info: {
                title: "Hello",
            },
            content: [
                { image: "logoImg", width: 300, style: "header" },
                { text: "University of the Cordilleras", style: "header" },
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam.",
                {
                    style: "tableExample",
                    alignment: "center",
                    table: {
                        body: [headers, ...data],
                    },
                },
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10],
                },
                tableExample: {
                    margin: [0, 5, 0, 15],
                },
            },
            images: {
                logoImg:
                    "data:image/png;base64,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",
            },
        };
        pdfMake.createPdf(dd).open();
    };

    const [charts, setCharts] = useState(false);
    /* wala pa 'tong age range filtering */

    // // EXPORTING TABLE PDF - SAMPLE #2

    // const exportPDF = () => {
    //     const unit = "pt";
    //     const size = "A4";
    //     const orientation = "landscape";
    //     const marginLeft = 40;
    //     const doc = new jsPDF(orientation, unit, size);

    //     doc.setFontSize(15);
    //     const title = "University of the Cordilleras"; // to edit
    //     // const headers = [
    //     //     [
    //     //         "Id",
    //     //         "University",
    //     //         "ID Number",
    //     //         "Name",
    //     //         "Age",
    //     //         "Gender",
    //     //         "Counsellor",
    //     //     ],
    //     // ];

    //     // const data = rowsArray.map((elt) => [
    //     //     elt.id,
    //     //     elt.university,
    //     //     elt.id_number,
    //     //     elt.name,
    //     //     elt.age,
    //     //     elt.gender,
    //     //     elt.counsellor,
    //     // ]);

    //     let headers = columns.map((col) => col.title);
    //     console.log(headers);
    //     let data = selectedRows.map((rowsArray) =>
    //         columns.map((col) => rowsArray[col.field])
    //     );

    //     let content = {
    //         startY: 50,
    //         head: headers,
    //         body: data,
    //     };
    //     console.log(content);
    //     doc.text(title, marginLeft, 40);
    //     doc.autoTable(content);
    //     doc.save(`Filtered Report of ${title}.pdf`);
    // };

    // For table filtering
    const [selectedRows, setSelectedRows] = useState([]);
    const [filteredData, setFilteredData] = useState(rowsArray);
    const [filter, setFilter] = useState(true);
    const [age, setAge] = useState("all");
    const [gender, setGender] = useState("all");
    const columns = [
        { title: "School", field: "university" },
        { title: "First Name", field: "first_name" },
        { title: "Last Name", field: "last_name" },
        { title: "Age", field: "age" },
        { title: "Gender", field: "gender" },
        { title: "Counselor", field: "counsellor" },
        { title: "Consulted on", field: "date" },
    ];
    const handleChange = () => {
        setFilter(!filter);
    };
    useEffect(() => {
        setFilteredData(
            age === "all" ? rowsArray : rowsArray.filter((dt) => dt.age === age)
        );
    }, [age]);
    useEffect(() => {
        setFilteredData(
            gender === "all"
                ? rowsArray
                : rowsArray.filter((dt) => dt.gender === gender)
        );
    }, [gender]);

    return (
        <>
            <Grid container alignItems="center">
                <MaterialTable
                    onSelectionChange={(rows) => setSelectedRows(rows)}
                    icons={tableIcons}
                    title="University of the Cordilleras" // ito sana yung pagka pindot ng filter button
                    data={filteredData}
                    columns={columns}
                    options={{
                        selection: true,
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
                                        <MenuItem value={"18"}>18-21</MenuItem>
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
                    onClick={() => onClickPdf()}
                >
                    <SaveAltIcon />
                    &nbsp; Save as PDF
                </CustomButton>
                {/* &nbsp; &nbsp;
                <CSVLink {...csvReport} style={{ textDecoration: "none" }}>
                    <CustomButton background="primary">
                        <SaveAltIcon />
                        &nbsp; Save as CSV
                    </CustomButton>
                </CSVLink> */}
            </Grid>
            <Container style={{ marginTop: "3%" }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={6}>
                        <img
                            src={ChartsImg}
                            style={{ width: "500px" }}
                            alt="chart-image"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" style={{ color: "black" }}>
                            Charts are one way to summarize large data set in
                            visual form. Charts also clarifies trends better
                            than tables do.
                        </Typography>
                        <br />
                        <CustomButton
                            background="secondary"
                            onClick={() => setCharts(!charts)}
                        >
                            {charts ? "Close Charts" : "Generate Charts"}
                            {/* Generate Charts */}
                        </CustomButton>
                    </Grid>
                </Grid>
                <br />
                <Grid item>{charts && <FirstChart bar={charts} />}</Grid>
            </Container>
        </>
    );
}
