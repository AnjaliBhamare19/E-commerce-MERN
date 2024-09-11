import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const url = 'http://localhost:4000';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4caf50', // Light green color
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#ffff', // Light green background for odd rows
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));

const AList = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);

      if (response.data.success) {
        setList(response.data.data); // Adjusted to access the correct path
      } else {
        toast.error('Error fetching the list.');
      }
    } catch (error) {
      toast.error('Error fetching the list.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (id) => {
    // Logic for editing an item
    console.log(`Edit item with id: ${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/api/food/remove`, { data: { id } });
      toast.success('Item deleted successfully!');
      // Refetch the list after deleting an item
      fetchList();
    } catch (error) {
      toast.error('Error deleting the item.');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <ToastContainer />
      <h1>All Foods List</h1>
      {list.length > 0 ? (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Image</StyledTableCell>
                  <StyledTableCell align="right">Category</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.image ? (
                          <img
                            src={`${url}/images/` + item.image}
                            alt={item.name}
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                          />
                        ) : (
                          'No Image'
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="right">{item.category}</StyledTableCell>
                      <StyledTableCell align="right">{item.price}</StyledTableCell>
                      <StyledTableCell align="right">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleEdit(item.id)}
                          style={{ marginRight: '10px' }}
                          sx={{ backgroundColor: '#64b5f6', '&:hover': { backgroundColor: '#90caf9' } }}
                        >
                          <EditIcon />
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => handleDelete(item.id)}
                          sx={{ backgroundColor: '#ff7043', '&:hover': { backgroundColor: '#ff7043' } }}
                        >
                          <DeleteIcon />
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[3, 5, 10, 15]}
            component="div"
            count={list.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default AList;
