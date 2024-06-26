import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { IUploadFile } from '../../../interfaces/file';
import { CoreService } from '../../../shared/axios';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;

  // req.body.profileImage = 'https://localhost:2000';
  req.body.student.studentId = '3454i345';

  const response: IGenericResponse = await CoreService.post('/students', req.body.student, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  console.log(response);

  return response;
};

const createFaculty = async (req: Request): Promise<IGenericResponse> => {
  // req.body.faculty.profileImage = 'http://localhost:2000';

  // console.log(req.body.faculty)

  const { academicDepartment, academicFaculty } = req.body.faculty;

  req.body.faculty.facultyId = '122023';

  console.log(req.body.faculty);

  const response: IGenericResponse = await CoreService.post('/faculties', req.body.faculty, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  console.log(response);

  return response;
};

const createAdmin = async (req: Request): Promise<IGenericResponse> => {
  // const file = req.file as IUploadFile;

  req.body.admin.profileImage = 'http://localhost:2000';

  const response: IGenericResponse = await CoreService.post('/admins', req.body.admin, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const UserService = {
  createStudent,
  createFaculty,
  createAdmin
};
