import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000';

export const submitOfficeFormData = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/officeBookings/`, formData);
        return response.data;
      } catch (error) {
        if (error.response && error.response.status === 409) {
          // Handle the conflict error
          // You can set an error state and display an error message to the user
          console.error('Conflict error:', error.response.data);
          // Display an error message to the user, e.g., using state or a toast library
        } else {
          // Handle other errors, e.g., show a general error message
          console.error('Error submitting form:', error);
          // Display an error message to the user
        }
      }
};

export const submitSchoolFormData = async (formData) => {

    try {
        const response = await axios.post(`${BASE_URL}/api/schoolBookings/`, formData);
        
        return { id: response.data.id, data: response.data };
      } catch (error) {
        if (error.response && error.response.status === 409) {
          // Handle the conflict error
          // You can set an error state and display an error message to the user
          console.error('Conflict error:', error.response.data);
          // Display an error message to the user, e.g., using state or a toast library
        } else {
          // Handle other errors, e.g., show a general error message
          console.error('Error submitting form:', error);
          // Display an error message to the user
        }
      }
};





