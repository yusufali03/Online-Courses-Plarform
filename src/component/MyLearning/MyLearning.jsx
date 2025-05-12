import React, { useEffect, useState, useContext } from 'react';
import { Box, Grid, Typography, CircularProgress, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../../api';                  // your axios instance
import AuthContext from '../../contexts/AuthContext';
import CourseCard from '../CourseCard/CourseCard' ;

export default function MyLearning() {
  const { isAuthenticated } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMyCourses = async () => {
      setLoading(true);
      try {
        const { data } = await api.get('/users/me/courses/');
        setCourses(data);
      } catch (err) {
        console.error('Failed to fetch my courses', err);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchMyCourses();
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!loading && courses.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          You haven’t enrolled in any courses yet.
        </Typography>
        <Typography variant="body1">
          Check out our{' '}
          <MuiLink
            component={Link}
            to="/courses-list/grid"
            underline="hover"
          >
            course catalog
          </MuiLink>{' '}
          to get started.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Learning
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
