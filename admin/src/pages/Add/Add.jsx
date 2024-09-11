import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
  const url = "http://localhost:4000";
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const productDetails = {
    name: productName,
    description: productDescription,
    category: productCategory,
    price: productPrice,
    image: productImage ? productImage.name : null,
  };

  useEffect(() => {
    console.log('Product Details:', productDetails);
  }, [productName, productDescription, productCategory, productPrice, productImage]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      productName.trim() === '' ||
      productDescription.trim() === '' ||
      productCategory.trim() === '' ||
      productPrice.trim() === '' ||
      !productImage
    ) {
      toast.error('Please fill out all fields.');
    } else {
      const formData = new FormData();
      formData.append('name', productName);
      formData.append('description', productDescription);
      formData.append('category', productCategory);
      formData.append('price', productPrice);
      formData.append('image', productImage);

      console.log('Submitting FormData:');
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      try {
        const response = await axios.post(`${url}/api/food/add`, formData);

        console.log('Response:', response);
        toast.success('Product Added Successfully!');

        // Reset form fields
        setProductName('');
        setProductDescription('');
        setProductCategory('');
        setProductPrice('');
        setProductImage(null);
        setImagePreview(null);
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        toast.error(`Failed to add product: ${error.response ? error.response.data : error.message}`);
      }
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProductImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: 3,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={5}>
            <Typography variant="subtitle1">Upload Product Image</Typography>
          </Grid>
          <Grid item xs={7}>
            <Button
              variant="text"
              component="label"
              color="success"
              startIcon={<CloudUploadIcon />}
              sx={{ borderRadius: 0, width: '100%' }}
            >
              Upload
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Button>
          </Grid>
        </Grid>

        {imagePreview && (
          <Grid container alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <Grid item>
              <img
                src={imagePreview}
                alt="Product Preview"
                style={{ maxWidth: '150px', maxHeight: '100px', objectFit: 'cover' }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body2">{productImage?.name}</Typography>
            </Grid>
          </Grid>
        )}

        <TextField
          label="Product Name"
          variant="outlined"
          fullWidth
          required
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          sx={{ mb: 2, borderRadius: 0 }}
          InputProps={{
            sx: {
              borderRadius: 0,
            },
          }}
        />
        <TextField
          label="Product Description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          sx={{ mb: 2, borderRadius: 0 }}
          InputProps={{
            sx: {
              borderRadius: 0,
            },
          }}
        />
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <FormControl fullWidth sx={{ borderRadius: 0 }}>
              <InputLabel>Product Category</InputLabel>
              <Select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                label="Product Category"
                required
                sx={{ borderRadius: 0 }}
                MenuProps={{
                  PaperProps: {
                    sx: { borderRadius: 0 },
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Salad">Salad</MenuItem>
                <MenuItem value="Rolls">Rolls</MenuItem>
                <MenuItem value="Deserts">Deserts</MenuItem>
                <MenuItem value="Sandwich">Sandwich</MenuItem>
                <MenuItem value="Cake">Cake</MenuItem>
                <MenuItem value="Pure Veg">Pure Veg</MenuItem>
                <MenuItem value="Pasta">Pasta</MenuItem>
                <MenuItem value="Noodles">Noodles</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Product Price"
              variant="outlined"
              fullWidth
              required
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              sx={{ borderRadius: 0 }}
              InputProps={{
                sx: {
                  borderRadius: 0,
                },
              }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          sx={{ borderRadius: 0 }}
        >
          Add Product
        </Button>
      </form>
      <ToastContainer />
    </Box>
  );
};

export default Add;
