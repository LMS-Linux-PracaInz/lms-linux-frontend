import { Box, Grid } from "@mui/joy"

import { useGetCoursesQuery } from "features/courses/courses.api.slice"

import CourseItem from "./courseItem"
import CourseSkeleton from "./courseSkeleton"

import { Course } from "shared/types"

export default function CourseList() {
  const { data, isLoading } = useGetCoursesQuery(undefined);

  return (
    <Box sx={{
      display: 'flex',
    }}>
      <Grid
        container
        direction="row"
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          flexWrap: "wrap",
          px: 2
        }}
      >
        {isLoading ?
          <CourseSkeleton /> :
          data.map((course: Course) => (
            <CourseItem {...course} key={course.id} />
          ))
        }
      </Grid>
    </Box>
  )
}