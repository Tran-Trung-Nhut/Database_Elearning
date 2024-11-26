
import { Request, Response } from 'express'
import courseService from './course.service'
class CourseController {
    public async getAllCourses(req: Request, res: Response) {
        try {
            console.log('get all courses')
            const courses = await courseService.getAllCourses()
            console.log('get all courses1')

            if (courses.length === 0 || !courses) {
                return res.status(404).json({
                    message: 'No courses found',
                })
            }

            return res.status(200).json({
                message: 'success',
                data: courses
            })

        } catch (error) {
            res.status(500).json({
                message: error
            })            
        }
    }

    public async getCourseById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const course = await courseService.getCourseById(id)

            if (!course) {
                return res.status(404).json({
                    message: 'Course does not exist'
                })
            }

            return res.status(200).json({
                message: 'success',
                data: course
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }

    public async getCourseByName(req: Request, res: Response) {
        try {
            const { name } = req.params
            console.log(name);
            const course = await courseService.getCourseByName(name)

            if (!course) {
                return res.status(404).json({
                    message: 'Course does not exist'
                })
            }

            return res.status(200).json({
                message: 'success',
                data: course
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }

    public async createNewCourse(req: Request, res: Response) {
        try {
            const {courseName, language, description, teacherId, price } = req.body
            console.log(req.body)
            const newCourse = await courseService.createNewCourse(courseName, language, description, teacherId, price)

            if (!newCourse) {
                return res.status(400).json({
                    message: 'Error creating course'
                })
            }

            return res.status(201).json({
                message: 'success',
                data: newCourse
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }
    

    public async deleteCourseById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const course = await courseService.deleteCourseById(id)

            if (!course) {
                return res.status(404).json({
                    message: 'Course does not exist'
                })
            }

            return res.status(200).json({
                message: 'success',
                data: course
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }

    public async deleteCourseByName(req: Request, res: Response) {
        try {
            const { name } = req.params
            const course = courseService.deleteCourseByName(name)

            if (!course) {
                return res.status(404).json({
                    message: 'Course does not exist'
                })
            }

            return res.status(200).json({
                message: 'success',
                data: course
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }

    public async updateCourseById(req: Request, res: Response) {
        try {
            const { id } = req.params   
            const {courseName, language, description, avgQuiz, price } = req.body
            console.log(req.body)
            const course = await courseService.updateCourseById(id, courseName, language, description,avgQuiz, price)

            if (!course) {
                return res.status(404).json({
                    message: 'Course does not exist'
                })
            }

            return res.status(200).json({
                message: 'success',
                data: course
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }

    public async updateCourseByName(req: Request, res: Response) {
        try {
            const { name } = req.params
            const {courseName, language, description, avgQuiz, price } = req.body
            const course = await courseService.updateCourseByName(name, courseName, language, description, avgQuiz, price)

            if (!course) {
                return res.status(404).json({
                    message: 'Course does not exist'
                })
            }

            return res.status(200).json({
                message: 'success',
                data: course
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }
}

export default new CourseController()