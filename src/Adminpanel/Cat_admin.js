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
import { updatecart, deletedata, getdata, postdata } from '../Container/Redux/Action/Cat_admin.action';


function Cat_admin(props) {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState();
    const [Dopen, setDOpen] = React.useState(false);
    const [Did, setDid] = useState();

    const cat = useSelector(state => state.cat)

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



    let cat_admin = {
        name: yup.string().required('please enter name'),
        file: yup.mixed().required('please select your file')
    }


    let schema = yup.object().shape(cat_admin);

    const formik = useFormik({
        initialValues: {
            name: '',
            file: ''
        },
        validationSchema: schema,
        onSubmit: (value, { resetForm }) => {

            if (update) {
                handleUpdate(value)
            } else {
                handleSubmitdata(value)
            }
            resetForm();

        }
    })
    const handleUpdate = (value) => {
        dispatch(updatecart(value))
        setOpen(false)
        setUpdate()
        loadData()
        // formik.setValues()
    }

    const handleSubmitdata = (value) => {
        dispatch(postdata(value))
        handleClose()
        // loadData();
    }
    const handleEdit = (params) => {
        console.log(data);
        formik.setValues({
            ...params,
            file: params.url,
            fileName : params.fileName
        });
        setOpen(true)
        setUpdate(true)
    }
    const columns = [

        { field: 'name', headerName: 'Name', width: 130 },
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
        dispatch(deletedata(Did))
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
            dispatch(getdata());
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
                            <h2>Category</h2>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="index.html">HOME</a></li>
                                <li className="list-inline-item"><a href="#">Category</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb End */}
                <div>
                    <center>
                        <h1>Category</h1>
                        <Button className='mt-2' variant="outlined" onClick={handleClickOpen}>
                            Add Data
                        </Button>
                    </center>

                    <div style={{ height: 400, width: '100%', margin: '30px' }}>
                        <DataGrid
                            rows={cat.category}
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


export default Cat_admin;