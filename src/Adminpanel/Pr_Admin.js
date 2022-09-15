import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, FormikConsumer, FormikProvider, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { deletedata, deletedatapr, getdata, getdatapr, postdata, postdatapr, updatecart, updatecartpr } from '../Container/Redux/Action/Pr_admin.action';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Category from '../Components/Category/Category';


function Pr_Admin(props) {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState();
    const [Dopen, setDOpen] = React.useState(false);
    const [Did, setDid] = useState();

    const Pr = useSelector(state => state.Pr)
    console.log(Pr)

    const categorydata = useSelector(state => state.cat)
    const catdata = categorydata.category
    console.log(categorydata)

    const handleClickOpen = () => {
        setOpen(true);
        setUpdate();
    };

    const handleClose = () => {
        setOpen(false);
        setUpdate();
        formik.resetForm();
        setDOpen(false);
    };

    const handleClickDOpen = (id) => {
        setDOpen(true);
        setDid(id);
    };



    let Product_Admin = {
        name: yup.string().required('please enter name'),
        price: yup.string().required('please Enter price'),
        category: yup.string().required('please enter category'),
        file: yup.mixed().required('please select your file')
    }


    let schema = yup.object().shape(Product_Admin);

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            category: '',
            file: ''
        },
        validationSchema: schema,
        onSubmit: (value, { resetForm }) => {

            if (update) {
                console.log(value);
                handleUpdate(value)
            } else {
                handleSubmitdata(value)
            }
            resetForm();

        }
    })
    const handleUpdate = (value) => {
        console.log(value);
        dispatch(updatecartpr(value))
        setOpen(false)
        setUpdate()
        loadData()
        // formik.setValues()
    }

    const handleSubmitdata = (value) => {
        dispatch(postdatapr(value))
        handleClose()
        // loadData();
    }
    const handleEdit = (params) => {
        console.log(params);
        formik.setValues({
            ...params,
            file: params.file,
            fileName: params.fileName
        });
        setOpen(true)
        setUpdate(true)
    }
    const columns = [

        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'category', headerName: 'Category', width: 130 },
        {
            field: 'url', headerName: 'Image', width: 130,
            renderCell: (params) => (
                <img src={params.row.file} height={50} width={50} />
            )
        },
        {
            field: 'Delete', headerName: 'Delete', width: 130,
            renderCell: (params) => (
                <IconButton aria-label="delete" onClick={() => handleClickDOpen(params.row)}>
                    <DeleteIcon />
                </IconButton>
            )
        },
        {
            field: 'Edit', headerName: 'Edit', width: 130,
            renderCell: (params) => (
                <IconButton aria-label="Edit" onClick={() => handleEdit(params.row)}>
                    <EditIcon />
                </IconButton>
            )
        }
    ];


    const handleDelete = (id) => {
        // let localData = JSON.parse(localStorage.getItem("doctor"))

        // let filterData = localData.filter((v, i) => v.id !== Did);

        // localStorage.setItem("doctor", JSON.stringify(filterData));
        dispatch(deletedatapr(Did))
        // loadData();
        setDOpen(false);

    }

    const loadData = () => {
        // let localData = JSON.parse(localStorage.getItem("doctor"))

        // if (localData !== null) {
        //   setData(localData)
        // }
    }

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getdatapr());
            loadData();
        },
        [])

    console.log(formik.errors);

    return (
        <Box>
            <Container>
                {/* Breadcrumb Start */}
                <div className="bread-crumb">
                    <div className="container">
                        <div className="matter">
                            <h2>Product</h2>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="index.html">HOME</a></li>
                                <li className="list-inline-item"><a href="#">Product</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb End */}
                <div>
                    <center>
                        <h1>Product</h1>
                        <Button className='mt-2' variant="outlined" onClick={handleClickOpen}>
                            Add Data
                        </Button>
                    </center>

                    <div style={{ height: 400, width: '100%', margin: '30px' }}>
                        <DataGrid
                            rows={Pr.Pro}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />

                    </div>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add Data</DialogTitle>
                        <Formik value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <DialogContent>

                                    <TextField
                                        margin="dense"
                                        id="name"
                                        label="name"
                                        type="name"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        defaultValue={formik.values.name}
                                        helperText={formik.errors.name}
                                        error={formik.errors.name ? true : false}

                                    />

                                    <TextField
                                        margin="dense"
                                        id="price"
                                        label="price"
                                        type="price"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        defaultValue={formik.values.price}
                                        helperText={formik.errors.price}
                                        error={formik.errors.price ? true : false}
                                    />
                                    {/* <TextField
                                        margin="dense"
                                        id="category"
                                        label="category"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        defaultValue={formik.values.category}
                                        helperText={formik.errors.category}
                                        error={formik.errors.category ? true : false}

                                    /> */}
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={Category}
                                            label="category"
                                            onChange={formik.handleChange}
                                            defaultValue={formik.values.category}
                                            helperText={formik.errors.category}
                                            error={formik.errors.category ? true : false}
                                        >
                                            {
                                                catdata.map((c)=>(
                                                    <MenuItem value={c.name}>{c.name}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                    <input
                                        type="file"
                                        id="file"
                                        onChange={(e) => formik.setFieldValue('file', e.target.files[0])}
                                        // defaultValue={formik.values.file}
                                        // helperText={formik.errors.file}
                                        error={formik.errors.file ? true : false}
                                    />
                                    <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                        {
                                            update ? <Button type="submit">Update</Button> :
                                                <Button type="submit">Submit</Button>
                                        }
                                    </DialogActions>
                                </DialogContent>
                            </Form>
                        </Formik>
                    </Dialog>
                    <Dialog
                        open={Dopen}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Are You Sure to Delete?"}
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={handleClose}>NO</Button>
                            <Button onClick={handleDelete}>
                                YES
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Container>
        </Box>

    )
}


export default Pr_Admin;